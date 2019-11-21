const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "tintuc/:slug": { page: "/tintuc/[slug].js"},
      "gioithieu/:slug": { page: "/gioithieu/[slug].js"},
    };
  },
  onDemandEntries: function() {
    return  {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 2,
    };
  },
  prerenderPages: function(){
    return false;
  }
};

module.exports = withPlugins([withCSS, withFonts, withImages], nextConfig);
