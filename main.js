
import { ViewController } from './src/ViewController.js';
import { Header } from './src/Header.js';
import { BackButton } from './src/BackButton.js';
import { Page } from './src/Page.js';

const Packages = {
	ViewController : ViewController,
	Header         : Header,
	BackButton     : BackButton,
	Page           : Page
};

Packages.inject = function(Craft){
	Craft.Widget = Craft.Widget || {};
	if( !Craft.Widget.StickyHeaderNavi ){
		Craft.Widget.StickyHeaderNavi = Packages;
	}
};

export default Packages;

