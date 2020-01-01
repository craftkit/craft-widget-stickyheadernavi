
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-stickyheadernavi.umd.js',
		library: 'StickyHeaderNavi',
		libraryTarget: 'umd',
	},
	externals: {
		'craft-uikit' : 'Craft'
	}
};
