// babel config may be causing override of Next.js default babel behavor
// module.exports = {
//   presets: ["@babel/preset-env", "@babel/preset-react"],
// };

module.exports = {
  presets: ["next/babel"], // restores Next.js defaults
  env: {
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
};
