
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-stickyheadernavi.umd.dev.js',
		library: 'StickyHeaderNavi',
		libraryTarget: 'umd',
	},
	externals: {
		'craft-uikit' : 'Craft'
	}
};
