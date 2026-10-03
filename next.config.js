/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // "Other" is empty now that the business lessons have their own category.
      { source: '/categories/other', destination: '/categories/business', permanent: false },
    ];
  },
};

module.exports = nextConfig;
