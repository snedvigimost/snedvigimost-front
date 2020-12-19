const merge = require('webpack-merge');

module.exports = (config) => {
  const isProd = config.mode === "production";
  const tailwindConfig = require("./tailwind.config.js")(isProd);

  return merge(config, {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              syntax: 'postcss-scss',
              plugins: [
                // https://github.com/ngneat/tailwind/issues/15
                // require('postcss-import'),
                require('tailwindcss')(tailwindConfig),
                require('autoprefixer'),
              ]
            }
          }
        }
      ]
    }
  });
};
