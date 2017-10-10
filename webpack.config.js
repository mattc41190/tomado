module.exports = {
	entry: './app/scripts/index.js',
	output: {
		filename: './app/scripts/bundle.js'
	},
	target: 'node',
	node: {
		__dirname: false,
		__filename: false
	},
    module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
};
