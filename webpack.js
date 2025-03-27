module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [new HtmlWebpackPlugin(), // run plugins and specify which environmnet we want 
    new webpack.EnvironmentPlugin({
        'NODE_ENV': 'production'
    })
  ],
  mode: "production" | "development" // we can specify which work environment mode we want 
};
