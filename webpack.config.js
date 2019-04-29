const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')

module.exports = env => {
    const production = env ? env.production : false

    console.log('Setup configuration for', production ? 'production' : 'development')
  
    const config = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js'
        }, 
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
                          sourceMap: !production
                        }
                      },
                      {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [
                            autoprefixer
                          ],
                          sourceMap: !production
                        }
                      },
                      {
                        loader: 'sass-loader',
                        options: {
                          includePaths: [path.resolve(__dirname, 'src', 'sass')],
                          sourceMap: !production
                        }
                      }
                    ]
                  }
            ]
        },
        plugins: [
            new Dotenv(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }

    //TODO: check if css is minified in prod mode
    
    if (!production) {
        config.devtool = 'source-map'
    }

    return config
  }