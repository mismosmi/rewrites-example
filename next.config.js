/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
      afterFiles: undefined,
      fallback: [
        {
          source: "/:path*",
          destination: "https://vercel.com/:path*",
          basePath: false,
          locale: false,
        },
      ],
    };
  },
};
