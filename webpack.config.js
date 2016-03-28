/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/28/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var path = require("path");

module.exports = {
    context:__dirname + "/webapp",
    entry: path.join('js', 'src', 'start.js'),
    output: {
        path: path.join('dist', 'js'),
        filename: 'bundle.js'
    },
    bail: true,
    plugins: [

    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/]
    }
};