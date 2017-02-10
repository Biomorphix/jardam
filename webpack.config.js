const webpack = require("webpack");

module.exports = {
    entry: "./src/js/index.js",
    module: {
        loaders: [
            {
                exclude: /(node_modules)|(bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: [
                        'babel-plugin-react-html-attrs']
                }
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "client.min.js"
    },
    watch: true
}