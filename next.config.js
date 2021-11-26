/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "en-US", "en-CA"],
    domains: [
      {
        domain: "united-states-rewrites-example.vercel.app",
        defaultLocale: "en-US",
        locales: ["en-US"],
      },
      {
        domain: "canada-rewrites-example.vercel.app",
        defaultLocale: "en-CA",
        locales: ["en-CA"],
      },
    ],
  },

  async rewrites() {
    const domainToPath = (domain) => ({
      has: [
        {
          type: "host",
          value: `^${domain}-rewrites-example\\.vercel\\.app$`,
        },
      ],
      source: "/",
      destination: `/${domain}`,
    });

    return {
      afterFiles: [domainToPath("united-states"), domainToPath("canada")],
    };
  },
};
