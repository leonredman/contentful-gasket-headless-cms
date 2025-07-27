module.exports = {
  plugins: {
    presets: ["@gasket/nextjs"],
    add: ["@gasket/plugin-jest"],
  },
  nextConfig: {
    images: {
      domains: ["images.ctfassets.net"],
    },
  },
};
