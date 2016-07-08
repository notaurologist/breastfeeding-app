/*
 * Webpack base configuration
 */
import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (options) => ({
  devtool: options.devtool,
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: options.babelQuery,
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders,
    }, {
      // Do not transform vendor's CSS with CSS-modules
      // The point is that they remain in global scope.
      // Since we require these CSS files in our JS or CSS files,
      // they will be a part of our compilation either way.
      // So, no need for ExtractTextPlugin here.
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style', 'css'],
    }, {
      test: /\.html$/,
      loader: 'html',
    }, {
      test: /\.(svg|png|jpg|gif)$/,
      loader: 'url?limit=4096',
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/font-woff',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name].[hash].[ext]&mimetype=application/octet-stream',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?name=fonts/[name].[hash].[ext]',
    }],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CopyWebpackPlugin([{
      from: 'node_modules/sanitize.css',
    }]),
  ]),
  postcss: () => options.postcssPlugins,
  stats: false,
  progress: true,
});
