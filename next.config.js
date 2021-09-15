/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
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
};
