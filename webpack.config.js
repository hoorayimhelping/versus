module.exports = {
  devtool: 'source-map',
  entry: [
    './src/view/Main.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/lib',
    publicPath: '/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
