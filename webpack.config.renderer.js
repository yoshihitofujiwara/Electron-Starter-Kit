// const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

// リリースモード判定フラグ
const IS_PRODUCTION = !!(process.argv[2] && process.argv[2].indexOf("-pro") != -1);

const MODE = IS_PRODUCTION ? "production" : "development";

// js file path
const JS = `${__dirname}/src/js/`;


/*--------------------------------------------------------------------------
  module
--------------------------------------------------------------------------*/
module.exports = {
	target: "electron-renderer",
	watch: true,
	mode: MODE,

	entry: {
		renderer: `${JS}/renderer/index.js`
	},

	output: {
		filename: "[name].js"
	},

	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				use: [{
					loader: "babel-loader",
					options: {
						// exclude: /node_modules/,
						presets: [["env", {
							modules: false
						}]]
					}
				}],
				exclude: /node_modules/,
			},

			// shader
			/*
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glslify-import-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "raw-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glslify-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(glsl|frag|vert)$/,
				loader: "glsl-strip-comments",
				exclude: /node_modules/
			}
			*/
		]
	},

	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				uglifyOptions: {
					compress: {
						drop_console: IS_PRODUCTION
					}
				}
			})
		]
	}
};
