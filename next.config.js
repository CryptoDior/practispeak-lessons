/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    // The HTML-lesson route reads public/*.html from disk, so ship those files with it.
    outputFileTracingIncludes: {
      '/html-lessons/**': ['./public/*.html'],
    },
  },
  async rewrites() {
    return {
      // beforeFiles: runs BEFORE public/ files are served, so the HTML lessons
      // can't be opened directly — they always go through the access check.
      beforeFiles: [{ source: '/:file([A-Za-z0-9-]+\\.html)', destination: '/html-lessons/:file' }],
    };
  },
  async redirects() {
    return [
      // The old Vercel address forwards to our own domain (keeps old links/bookmarks working).
      // Only this exact host — preview deployments on other *.vercel.app hosts are unaffected.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'practispeak-lessons.vercel.app' }],
        destination: 'https://lessons.practispeak.com/:path*',
        permanent: true,
      },
      // "Other" is empty now that the business lessons have their own category.
      { source: '/categories/other', destination: '/categories/business', permanent: false },
    ];
  },
};

module.exports = nextConfig;
