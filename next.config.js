/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },

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

  async redirects() {
    return [];
  },
};
