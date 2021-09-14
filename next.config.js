/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "https://google.com/:path*",
          basePath: false,
          locale: false,
        },
      ],
    };
  },
};
