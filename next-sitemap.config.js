module.exports = {
  siteUrl: "https://formatterjson.com",
  generateRobotsTxt: true,
  exclude: ["/404", "/cgi-bin/robots.txt"],
  outDir: "./out",
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cgi-bin/"],
      },
    ],
  },
};
