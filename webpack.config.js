var HtmlWebpackPlugin = require('html-webpack-plugin');
HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry:[
		'./app/index.js'
	],
	output:{
		path: __dirname + '/dist/assets/js',
		filename: "index_bundle.js"
	},
	module:{
		loaders:[
			{test:/\.js$/, include: __dirname + '/app', loader:"babel-loader"}
		]
	},
	plugins:[
		HtmlWebpackPluginConfig
	]
}