const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    }, 
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => [
                        autoprefixer
                      ],
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      includePaths: [path.resolve(__dirname, 'src', 'sass')],
                      sourceMap: true
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}