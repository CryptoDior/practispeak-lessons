'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Renders the first image in `srcs` that successfully loads, walking down the
 * list on error. Robust against the SSR case where an image 404s before React
 * attaches its handlers: a broken image is `complete` with `naturalWidth === 0`,
 * which the post-commit effect detects and advances past.
 *
 * Used for category images so dropping `/public/images/category-<id>-header.png`
 * into place is picked up automatically, falling back to a stock image until then.
 */
export default function FallbackImage({
  srcs,
  alt,
  className,
  width,
  height,
  loading,
}: {
  /** Candidate sources, best first. The last one should always be loadable. */
  srcs: string[];
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}) {
  const chain = srcs.filter(Boolean);
  const ref = useRef<HTMLImageElement>(null);
  const [idx, setIdx] = useState(0);
  const key = chain.join('|');

  useEffect(() => setIdx(0), [key]);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    const advance = () => setIdx((i) => (i < chain.length - 1 ? i + 1 : i));
    if (img.complete && img.naturalWidth === 0) advance();
    img.addEventListener('error', advance);
    return () => img.removeEventListener('error', advance);
  }, [idx, chain.length]);

  if (chain.length === 0) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={chain[Math.min(idx, chain.length - 1)]}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
    />
  );
}
