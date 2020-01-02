
import * as Craft from '@craftkit/craft-uikit';

/** 
 * Abstruct Page
 * 
 * This class only provides style for sefa-area, and interface for dynamic header for each page.
 * It is highly recommended to make your page as a sub-class of this Page class.
 * 
 * @packagename Craft.Widget.StickyHeaderNavi.Page
 * 
 * @example
 * 
 * class MyPage extends Craft.Widget.StickyHeaderNavi.Page {
 *     constructor(){
 *         super();
 *         this.large_header = new LargeHeader();
 *         this.small_header = new SmallHeader();
 *     }
 *     getHeaderLarge(){
 *        return this.large_header;
 *     }
 *     getHeaderSmall(){
 *        return this.small_header;
 *     }
 *     style(componentId){
 *         return super.style(componentId) + `
 *             .my_contents {
 *                 color: red;
 *             }
 *         `;
 *     }
 *     template(self){
 *         return `
 *             <div class="root">
 *                 <div class="my_contents">I am MyPage.</div>
 *             </div>
 *         `;
 *     }
 * }
 * 
 */
export class Page extends Craft.UI.View {
	
	/**
	 * Return *large* size header object for this page.
	 * If you return null, viewController will not change header.
	 * 
	 * @return {Craft.UI.View|Craft.UI.ViewController} - normal size header component
	 */
	getHeaderLarge(){}
	
	/**
	 * Return *small* size header component view for this page.
	 * If you return null, viewController will not change header.
	 * 
	 * @return {Craft.UI.View|Craft.UI.ViewController} - small size header component
	 */
	getHeaderSmall(){}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return `
			* { 
				box-sizing:border-box;
			}
			:host {
				padding-left: env(safe-area-inset-left);
				padding-right: env(safe-area-inset-right);
			}
		`;
	}
};

