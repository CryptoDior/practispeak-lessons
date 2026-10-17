'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Step 2: Wix sends the student back here with the login code after the "#"
 * in the address, which only the browser can read — so we pass it to the server.
 */
export default function WixCallbackPage() {
  const [failed, setFailed] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // React dev mode runs effects twice; the code is single-use
    started.current = true;

    const params = new URLSearchParams(window.location.hash.slice(1) || window.location.search.slice(1));
    const code = params.get('code');
    const state = params.get('state');
    // Remove the code from the address bar / history.
    window.history.replaceState(null, '', window.location.pathname);

    if (!code || !state) {
      window.location.replace('/login?error=wix');
      return;
    }

    fetch('/auth/wix/finish', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code, state }),
    })
      .then((r) => r.json())
      .then((res: { redirect?: string }) => window.location.replace(res.redirect ?? '/login?error=wix'))
      .catch(() => setFailed(true));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] font-poppins px-4">
      <div className="text-center" role="status">
        {failed ? (
          <p className="text-[15px] text-slate-700">
            Something went wrong.{' '}
            <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
              Back to log in
            </a>
          </p>
        ) : (
          <>
            <span className="mx-auto mb-4 block w-10 h-10 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />
            <p className="text-[15px] text-slate-700">Logging you in…</p>
          </>
        )}
      </div>
    </div>
  );
}
