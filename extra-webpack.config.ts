// const AntdScssThemePlugin = require('@inventium/antd-scss-theme-plugin/build/dist/lib');

// module.exports = {
//    plugins: [
//     new AntdScssThemePlugin('./theme.scss'),
//   ],
// };

// tslint:disable-next-line:max-line-length
// [webpack - Configuring Ant Design with Angular 8 and SCSS - Stack Overflow](https://stackoverflow.com/questions/59215272/configuring-ant-design-with-angular-8-and-scss)
// tslint:disable-next-line:max-line-length
// [inventium-tech/antd-scss-theme-plugin: A Webpack plugin for customizing Ant Design with an SCSS theme file and using Ant Design's compiled variables in SCSS files throughout your project.](https://github.com/inventium-tech/antd-scss-theme-plugin)


import * as webpack from 'webpack';
import * as path from 'path';
import {AntdScssThemePlugin} from '@inventium/antd-scss-theme-plugin/build/dist/lib';


// why it doesn't works


export default {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          AntdScssThemePlugin.themify({
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              relativeUrls: false,
            },
          }),
        ],
      },
    ],
  },
  plugins: [
    new AntdScssThemePlugin(path.join(__dirname, 'theme.scss')),
  ],
} as webpack.Configuration;
