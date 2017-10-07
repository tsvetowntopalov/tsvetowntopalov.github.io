const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const extractSass = new ExtractTextPlugin({
    filename: "./dist/[name].css",
    // disable: process.env.NODE_ENV === "development"
});


module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", options: {sourceMap: true}
                    }, {
                        loader: "sass-loader", options: {sourceMap: true}
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '../',
                            outputPath: 'dist/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        extractSass
    ],
    entry: './src/main.js',
    output: {
        filename: './dist/app.js'
    }
};