
import * as Craft from 'craft-uikit';

/** 
 * Abstruct Header
 * 
 * Extend this class, and implement your header.
 * 
 * @packagename Craft.Widget.StickyHeaderNavi.Header
 * 
 * @example
 * 
 * // Below case, MyHeader overwriting default sliding in/out behaviour,
 * // to delegate what element should be slide in/out.
 * 
 * class MyHeader extends Craft.Widget.StickyHeaderNavi.Header {
 *     onAppearBackButton(){
 *         this.large.slideOutTitle();
 *         this.small.slideOutTitle();
 *     }
 *     onDisappearBackButton(){
 *         this.large.slideInTitle();
 *         this.small.slideInTitle();
 *     }
 * }
 * 
 * class MyLargeHeaderView {
 *     viewDidLoad(){
 *         this.title = this.shadow.getElementById('title');
 *     }
 *     slideOutTitle(){
 *         this.title.classList.add("slide_out");
 *         this.title.classList.remove("slide_in");
 *     }
 *     slideInTitle(){
 *         this.mail.classList.remove("slide_out");
 *         this.mail.classList.add("slide_in");
 *     }
 *     template(){
 *         return `
 *             <div>
 *                 <div id="title">Slide in/out by back button visibility</div>
 *                 <div id="navi">always on the center</div>
 *             </div>
 *         `;
 *     }
 * }
 * 
 * class MySmallHeaderView {
 *     :
 * }
 * 
 * let header = new MyHeader({
 *     large : new MyLargeHeaderView(),
 *     small : new MySmallHeaderView()
 * });
 * 
 */
export class Header extends Craft.UI.View {
	
	/**
	 * Header constructor
	 * 
	 * @param {Object} options - options
	 * @param {Craft.UI.View|Craft.UI.ViewController} options.large - header view in large state
	 * @param {Craft.UI.View|Craft.UI.ViewController} options.small - header view in small(sticky) state
	 */
	constructor(options){
		if( !options ){ options = {}; }
		
		super(options);
		
		this.packagename = 'Craft.Widget.StickyHeaderNavi.Header';
		
		this.large = options.large;
		this.small = options.small;
	}
	
	/** 
	 * viewDidLoad
	 * 
	 * setup controlled elements
	 * 
	 * @override
	 * @protected
	 */
	viewDidLoad(){
		this.large_holder = this.shadow.getElementById("large");
		this.small_holder = this.shadow.getElementById("small");
		
		this.large.setViewController(this.viewController);
		this.large.loadView();
		this.large.viewWillAppear();
		this.large_holder.appendChild(this.large.view);
		this.large.viewDidAppear();
		
		this.small.setViewController(this.viewController);
		this.small.loadView();
		this.small.viewWillAppear();
		this.small_holder.appendChild(this.small.view);
		this.small.viewDidAppear();
	}
	
	/** 
	 * Return the height in lerge state
	 * 
	 * The height of large view should be defined in its root style.
	 * 
	 * But, if you would like to make dynamically defined header elements, 
	 * you have to calculate your header's height in your implementaion.
	 * 
	 * @example
	 * 
	 * getLargeHeight(){
	 *     this.large.root.style.display = 'block';
	 *     this.large.root.style.visibility = 'hidden';
	 *     this.large.root.style.position = 'absolute';
	 *     this.large.root.style.top = far away
	 *     this.large.root.style.left = far away
	 *     
	 *     let height = this.large.root.clientHeight;
	 *     
	 *     this.large.root.style.display = 'none';
	 *     this.large.root.style.visibility = '';
	 *     this.large.root.style.position = original position;
	 *     this.large.root.style.top = original top
	 *     this.large.root.style.left = original left
	 *     
	 *     return height;
	 * }
	 * 
	 * @return {Number} - height of header view in large state
	 */
	getLargeHeight(){
		return Number(window.getComputedStyle(this.large.root).height.replace('px',''));
	}
	
	/** 
	 * Return the height in small state
	 * 
	 * (same as `getLargeHeight`)
	 * 
	 * The height of small view should be defined in its root style.
	 * 
	 * But, if you would like to make dynamically defined header elements, 
	 * you have to calculate your header's height in your implementaion.
	 * 
	 * @example
	 * 
	 * getSmallHeight(){
	 *     this.small.root.style.display = 'block';
	 *     this.small.root.style.visibility = 'hidden';
	 *     this.small.root.style.position = 'absolute';
	 *     this.small.root.style.top = far away
	 *     this.small.root.style.left = far away
	 *     
	 *     let height = this.small.root.clientHeight;
	 *     
	 *     this.small.root.style.display = 'none';
	 *     this.small.root.style.visibility = '';
	 *     this.small.root.style.position = original position;
	 *     this.small.root.style.top = original top
	 *     this.small.root.style.left = original left
	 *     
	 *     return height;
	 * }
	 * 
	 * @return {Number} - height of header view in small state
	 */
	getSmallHeight(){
		return Number(window.getComputedStyle(this.small.root).height.replace('px',''));
	}
	
	/** 
	 * Threshold of scroll amount to make header sticky
	 * 
	 * Utility to get sticky threshold scroll amount.
	 * 
	 * @return {Number} - scroll amount to make header sticky
	 * @private
	 */
	getStickyThreshold(){
		return this.getLargeHeight() - this.getSmallHeight();
	}
	
	/** 
	 * Handler called when the page scrolled to `sticky height`
	 * 
	 * By default, when scrolled over `sticky` amount, large view is hidden and small view is shown.
	 * To change this behavior, or append your behaviour, override this method.
	 */
	onEnterSticky(){
		this.large.viewWillDisappear();
		this.large_holder.style.display = 'none';
		this.large.viewDidDisappear();
		
		this.small.viewWillAppear();
		this.small_holder.style.display = 'block';
		this.small.viewDidAppear();
	}
	
	/** 
	 * Handler called when the page scroll backed to top area
	 * 
	 * By default, when scroll back to top area less than `sticky height`, large view is shown and small view is hidden.
	 * To change this behavior, or append your behaviour, override this method.
	 */
	onExitSticky(){
		this.large.viewWillAppear();
		this.large_holder.style.display = 'block';
		this.large.viewDidAppear();
		
		this.small.viewWillDisappear();
		this.small_holder.style.display = 'none';
		this.small.viewDidDisappear();
	}
	
	/** 
	 * Handler called when the back button appeared
	 * 
	 * By default, both large and small view will slide out 44px (defined in `.slide_out` css class).
	 * To change this behavior, or append your behaviour, override this method.
	 */
	onAppearBackButton(){
		this.large_holder.classList.add("slide_out");
		this.large_holder.classList.remove("slide_in");
		this.small_holder.classList.add("slide_out");
		this.small_holder.classList.remove("slide_in");
	}
	
	/** 
	 * Handler called when the back button disappeared
	 * 
	 * By default, both large and small view will turn back to the original position (defined in `.slide_in` css class).
	 * To change this behavior, or append your behaviour, override this method.
	 */
	onDisappearBackButton(){
		this.large_holder.classList.add("slide_in");
		this.large_holder.classList.remove("slide_out");
		this.small_holder.classList.add("slide_in");
		this.small_holder.classList.remove("slide_out");
	}
	
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
				padding-top: env(safe-area-inset-top);
				padding-left: env(safe-area-inset-left);
				padding-right: env(safe-area-inset-right);
			}
			.root {
				box-sizing:border-box;
				position: relative;
				overflow-x: hidden;
			}
			.large {
				box-sizing:border-box;
				display: block;
			}
			.small {
				box-sizing:border-box;
				display: none;
			}
			.slide_out {
				transition: 0.05s;
				margin-left: 44px;
				width: calc( 100vw - 44px );
			}
			.slide_in {
				transition: 0.05s;
				margin-left: 0px;
				width: 100vw;
			}
		`;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root" id="root">
				<div id="large" class="large"></div>
				<div id="small" class="small"></div>
			</div>
		`;
	}
	
};

