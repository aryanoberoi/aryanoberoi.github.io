module.exports = {
  // Entry point of your application
  entry: './index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Module rules and loaders
  module: {
    rules: [
      {
        test: /\.js$/, // A regex that matches the files to be transformed
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Specify the loader
          options: {
            presets: ['@babel/preset-env'], // Use the env preset
          },
        },
      },
    ],
  },

  // Optionally, you can configure source maps, dev server, etc.
};
