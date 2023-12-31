const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name][contenthash].js',
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname, 'dist'),
        }, 
        port : 8080,
        open : true,
        hot :true,
        historyApiFallback:true,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename:'index.html',
            template:'src/template.html',

        })
    ]
}