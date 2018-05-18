var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname + '/public',
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    stats: {
        colors: true
    },
    proxy: {
        '/api/**': {
            target: {
                'host': 'web',
                'port': 80,
                'protocol': 'http:'
            },
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
});


server.listen(3000, '0.0.0.0', function(err) {
    if(err) console.log(err);

    console.log('Listening at http://localhost:3000...');
});
