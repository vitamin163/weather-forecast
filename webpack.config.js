const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isDevelopment = !isProduction;
  const conf = {
    entry: {
      app: [
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    devServer: {
      overlay: true,
      contentBase: path.resolve(__dirname, 'dist'),
    },

    devtool: isProduction ? 'source-map' : 'eval-sourcemap',

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, 'dist/index.html'),
        template: path.resolve(__dirname, 'public/index.html'),
        favicon: path.resolve(__dirname, 'public/favicon.ico'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                reloadAll: true,
                sourceMap: isDevelopment,
                hmr: isDevelopment,
              },
            },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                reloadAll: true,
                sourceMap: isDevelopment,
                hmr: isDevelopment,
              },
            },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          loader: 'file-loader',
        },
      ],
    },
  };

  return conf;
};
