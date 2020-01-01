
import * as Craft from 'craft-uikit';

/** 
 * Abstruct Header
 * 
 * Extend this class and make your navigation with it.
 * 
 * @packagename Craft.Widget.StickyHeaderNavi.BackButton
 */
export class BackButton extends Craft.UI.View {
	
	/**
	 * BackButton constructor
	 * 
	 * @param {Object} options - options (optinal)
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.StickyHeaderNavi.BackButton';
	}
	
	/**
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			:host {
				display: none;
				float: left;
				width: 44px;
				height: 44px;
				margin-left: 0px;
				cursor: pointer;
				padding-top: env(safe-area-inset-top);
				padding-left: env(safe-area-inset-left);
			}
			.root {
				display: block;
				width: 44px;
				height: 44px;
				margin-left: 0px;
				margin-top: -3px;
				color: #000;
				font-size: 36px;
				text-align: center;
				line-height: 44px;
				font-family: 'Arial-BoldMT';
			}
		`;
	}
	
	/**
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root" onclick="window.Craft.Core.ComponentStack.get('${componentId}').getViewController().back();">‹</div>
		`;
	}

};
