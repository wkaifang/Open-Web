const webpack = require('webpack');

module.exports = {
  mode: 'production', // "production" | "development" | "none"
  target: 'web', // "web" | "node" | ...
  context: path.resolve(__dirname, 'src'),
  entry: './src/index.js', // string | object | array
  output: {
    path: path.resolve(__dirname, 'dist'), // 所有输出文件的目标路径，必须是绝对路径（使用 Node.js 的 path 模块）
    publicPath: '/assets/', // 输出解析文件的目录，url 相对于 HTML 页面
    filename: 'bundle.js', // 「入口分块(entry chunk)」的文件名模板
    chunkFilename: '[id].js', // 「附加分块(additional chunk)」的文件名模板
    sourceMapFilename: 'sourcemaps/[file].map' // 「source map 位置」的文件名模板
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    compress: true, // 启用 gzip 压缩
    hot: true, // 启用 webpack 的 模块热替换 功能
    open: true, // 在 server 启动后打开浏览器。默认禁用
    openPage: '', // 指定打开浏览器时的导航页面
    proxy: {}
  },
  performance: {
    hints: false // false | "error" | "warning"
  },
  stats: 'minimal', // 统计信息
  module: {
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'src/demo-files')],
        // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
        // test 和 include 具有相同的作用，都是必须匹配选项
        // exclude 是必不匹配选项（优先于 test 和 include）
        // 最佳实践：
        // - 只在 test 和 文件名匹配 中使用正则表达式
        // - 在 include 和 exclude 中使用绝对路径数组
        // - 尽量避免 exclude，更倾向于使用 include
        enforce: 'pre', // "pre" | "post" 执行顺序：前、后
        loader: 'babel-loader',
        // 应该应用的 loader，它相对上下文解析
        // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
        // 查看 webpack 1 升级指南。
        options: {
          presets: ['es2015']
        }
        // loader 的可选项
      },
      {
        test: /\.html$/,
        use: [
          // 应用多个 loader 和选项
          'htmllint-loader',
          {
            loader: 'html-loader',
            options: {
              /* ... */
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    enforceExtension: false, // 是否强制要扩展名
    extensions: [], // 自动解析确定的扩展，能够使用户在引入模块时不带扩展
    alias: {
      '@': 'src',
      src: 'src'
    }, // 创建 import 或 require 的别名，来确保模块引入变得更简单
    plugins: []
  },
  plugins: [],
  optimization: {
    minimize: false, // 是否压缩 bundle，production。模式下，默认是 true
    minimizer: [], // 通过提供一个或多个插件，覆盖默认压缩工具(minimizer)
    splitChunks: {
      chunks: 'async', // "all" | "async" | "initial"
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: { name: 'runtime' }
  }
};
