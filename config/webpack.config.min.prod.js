
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.min.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-stickyheadernavi.min.js',
		library: 'StickyHeaderNavi',
		libraryTarget: 'window',
		globalObject: 'window'
	},
	externals: {
		'@craftkit/craft-uikit' : 'Craft',
	}
};
