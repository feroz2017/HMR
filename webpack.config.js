const path = require('path');
const { argv } = require('process');
const webpack = require('webpack');


module.exports = ()=>{
    const config = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname,'build'),
            filename: "main.js"
        },
        devServer: {
            contentBase: path.resolve(__dirname,'build'),
            hot: true
        },
        plugins:[]
    }
    if(argv.mode === 'development'){
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
    }
    return config;
}