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
      "/": { page: "/" }
    };
  }
};

module.exports = withPlugins([withCSS, withFonts, withImages], nextConfig);
