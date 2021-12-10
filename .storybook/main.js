const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
   stories: [
      "../src/lib/**/*.stories.mdx",
      "../src/lib/**/*.stories.@(js|jsx|ts|tsx)"
   ],
   addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      {
         name: "storybook-addon-sass-postcss",
         options: {
            sassLoaderOptions: {
               implementation: require("sass")
            },
            postcssLoaderOptions: {
               implementation: require("postcss")
            }
         }
      }
   ],
   framework: "@storybook/react",
   core: {
      builder: "webpack5"
   },
   typescript: { reactDocgen: false },
   webpackFinal: (config) => {
      config.resolve.plugins = [new TsconfigPathsPlugin()];

      return config;
   }
};
