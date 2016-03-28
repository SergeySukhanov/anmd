/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/28/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var gulp = require("gulp");
var webpack = require("webpack-stream");
var gutil = require("gulp-util");
var WebpackDevServer = require("webpack-dev-server");
var path = require("path");
var config = require("./webpack.config");

var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
    gulp.src('webapp')
        .pipe(server({
            port:1223,
            defaultFile: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task("webpack", function(){
    return gulp.src(__dirname + "/src/js/main.js")
        .pipe(webpack({
            output: {
                filename: "bundle.js"
            },
            module: {
                loaders: [
                    {
                        test: /\.jpg$/,
                        loader: "file"
                    },
                    {
                        test: /\.html$/,
                        loader: "html"
                    },
                    {
                        test: /\.html$/,
                        loader: 'mustache'
                    }
                ]
            },
            htmlLoader: {
                ignoreCustomFragments: [/\{\{.*?}}/]
            }
        }))
        .pipe(gulp.dest(__dirname + "/webapp/dist/js"))
});

gulp.task("start", ["webpack", "webserver"]);