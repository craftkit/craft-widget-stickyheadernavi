
import * as Craft from '@craftkit/craft-uikit';

import { BackButton } from './BackButton.js';

/** 
 * StickyHeaderNavi 
 * 
 * let viewController = new Craft.Widget.StickyHeaderNavi.ViewController({
 *     header : new MyHeader()
 * });
 * 
 * @packagename Craft.Widget.StickyHeaderNavi.ViewController
 */
export class ViewController extends Craft.UI.DefaultRootViewController {
	
	/** 
	 * StickyHeaderNavi constructor
	 * 
	 * @param {Object} options - options
	 * @param {Object} options.header - Header contents
	 * @param {Boolean} options.enableSwipeBack - true to enable page back by swipe gesture (default false)
	 * @param {Craft.UI.View|Craft.UI.ViewController|Craft.Widget.StickyHeaderNavi.Page} options.page - initial page (not work if you call bringup() at start)
	 * @param {Boolean} options.custombackbtn - use custom back button instead of framework prepared one
	 */
	constructor(options){
		super();
		
		this.packagename = 'Craft.Widget.StickyHeaderNavi.ViewController';
		
		this.stack       = []; // history. NOTE: this is only effective in the standalone mode
		this.currentView = ''; // current viewing page component 
		this.Pages       = {}; // support to access page object by its componentId, and manages metadata
		this.parent      = ''; // parent StickyHeaderNavi
		
		this.header      = options.header;
		this.backbtn     = options.backbtn;
		this.initialPage = options.page; // this.initialPage will be deleted after appended to the this.contents_holder, and moved to this.currentView
		this.custombackbtn = options.custombackbtn; // boolean
		
		this.enableSwipeBack = options.enableSwipeBack;
		
		// BackButton and swipeback is only available in the standalone mode.
		if( !Craft.UI.Device.isStandaloneMode() ){
			// browser mode
			this.backbtn = null;
			this.enableSwipeBack = false;
			this.custombackbtn = false; // cancel for browser mode
		}else{
			// standalone
			if( this.custombackbtn ){
				this.backbtn = null; // this.backbtn should be defined by deployCustomBackBtn implementation
			}
		}
	}
	
	/** 
	 * viewDidLoad
	 * 
	 * setup controlled elements
	 * 
	 * @override
	 * @protected
	 */
	viewDidLoad(callback){
		// component holders
		this.back_holder     = this.shadow.getElementById("back");
		this.contents_holder = this.shadow.getElementById("contents");
		this.header_holder   = this.shadow.getElementById("header");
		this.marker          = this.shadow.getElementById("marker");
		
		this.header.setViewController(this);
		if( !this.header.isViewLoaded ){
			this.header.loadView();
		}
		this.header.viewWillAppear();
		this.header_holder.appendChild(this.header.view);
		this.header.viewDidAppear();
		
		// setup back button
		if( this.custombackbtn ){
			// delegate defining this.backbtn
			this.deployCustomBackBtn(); 
		}else{
			// define this.backbtn by myself
			if( this.backbtn ){
				this.backbtn.setViewController(this);
				if( !this.backbtn.isViewLoaded ){
					this.backbtn.loadView();
				}
				this.backbtn.viewWillAppear();
				this.back_holder.appendChild(this.backbtn.view);
				this.backbtn.viewDidAppear();
			}
		}
		
		// enable swipe right to page back
		if( this.enableSwipeBack ){
			Craft.Core.Gesture.enableSwipe({
				target : this.contents_holder,
				right  : (event) => { this.back(); }
			});
		}
		
		// fire ContentTapped event occured on the `contents` (DefaultViewController does on this.view)
		Craft.Core.Gesture.enableTap({
			target : this.contents_holder,
			tap    : (event) => { Craft.Core.NotificationCenter.notify('ContentTapped',event); }
		});
		
		// open initial page if defined
		if( this.initialPage ){
			this.open(this.initialPage);
		}
		
		if( callback ){ callback() }
	}
	
	/** 
	 * viewDidAppear
	 * 
	 * initial setup of sticky handler
	 * 
	 * @override
	 * @protected
	 */
	viewDidAppear(){
		this.updateStickyHandler();
	}
	
	/** 
	 * update sticky handler
	 * 
	 * this should be automatically called when you update header content
	 * 
	 * @protected
	 */
	updateStickyHandler(){
		let header_large_height = this.header.getLargeHeight(); // original height
		let threshold = this.header.getStickyThreshold();
		
		this.marker.style["top"] = threshold + 'px';
		
		this.observer = new IntersectionObserver((entries, observer) => {
			if( entries[0].isIntersecting ){
				this.header_holder.classList.remove("header_sticky");
				this.contents_holder.style["margin-top"] = '0px';
				this.back_holder.style["margin-top"] = '0px';
				this.header.onExitSticky();
				this.contents_holder.classList.remove('contents_safe_shift');
			}else{
				this.header_holder.classList.add("header_sticky");
				this.contents_holder.style["margin-top"] = `${header_large_height}px`;
				this.back_holder.style["margin-top"] = `-${header_large_height}px`;
				this.header.onEnterSticky();
				this.contents_holder.classList.add('contents_safe_shift');
			}
		});
		this.observer.observe(this.marker);
	}
	
	/** 
	 * Define custom back button (this.backbtn)
	 * 
	 * If you would like use your own customized back button instead of framework prepared one,
	 * you have to set custombackbtn:true flag to constructor,
	 * and implement deployCustomBackBtn delegation method
	 * with code instantiating your back button and setting this.backbtn.
	 * 
	 * BTW, you may delegate deployCustomBackBtn() to your Header implementation.
	 * (The back button may be on your header)
	 * 
	 * @example
	 * 
	 * deployCustomBackBtn(){
	 *     // delegate to header
	 *     this.header.deployCustomBackBtn();
	 * }
	 * 
	 * // in header implementation
	 * deployCustomBackBtn(){
	 *     this.views.backbtn = new MyBackBtn();
	 *     this.appendView(this.views.backbtn);
	 *     this.viewController.backbtn = this.views.backbtn;
	 * }
	 * 
	 * @protected
	 */
	deployCustomBackBtn(){}
	
	// *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    * 
	
	/** 
	 * Open a page
	 * 
	 * @param {Object} options - options
	 * @param {Craft.Core.Component} options.page - page component
	 * @param {Function} options.callback - callback
	 * @param {Craft.Core.Route} options.route - Route object
	 */
	open(options){
		let page     = options.page;
		let callback = options.callback;
		let route    = options.route;
		
		let event  = route ? route.event  : null;  // event is defined if open is called by browser back/forward with popstate event
		let launch = route ? route.launch : false; // true if called from RootViewController#bringup
		
		let disappearingView = this.currentView;
		let appearingView    = page;
		
		appearingView.setViewController(this);
		
		if( !appearingView.isViewLoaded ){
			appearingView.loadView();
		}
		
		if( disappearingView ){
			disappearingView.viewWillDisappear();
			this.Pages[disappearingView.componentId].scrollTop = document.documentElement.scrollTop;
		}
		
		appearingView.viewWillAppear( () => {
			if( disappearingView ){
				disappearingView.viewDidDisappear();
				disappearingView.view.remove();
			}
			
			this.Pages[appearingView.componentId] = { page:appearingView, scrollTop:0 };
			
			this.stack.push(appearingView);
			this.contents_holder.appendChild(appearingView.view);
			
			appearingView.showComponent();
			appearingView.viewDidAppear();
			
			this.currentView = appearingView;
			
			if( launch ){
				// launching the app
				window.history.replaceState(
					{ componentId:this.currentView.componentId, timestamp:Date.now() },
					this.currentView.title,
					Craft.Core.Context.getRouter().normalize(this.currentView.path)
				);
			}else{
				if( !event ){
					// in app navigation
					window.history.pushState(
						{ componentId:this.currentView.componentId, timestamp:Date.now() },
						this.currentView.title,
						Craft.Core.Context.getRouter().normalize(this.currentView.path)
					);
				}
			}
			
			if( this.currentView.title ){
				document.title = this.currentView.title;
			}
			
			if( window.pageYOffset > this.header.getStickyThreshold() ){
				window.scrollTo(0,this.header.getStickyThreshold()+1);
				this.contents_holder.classList.add('contents_safe_shift');
			}else{
				this.contents_holder.classList.remove('contents_safe_shift');
			}
			
			if( this.backbtn ){
				if( this.stack.length > 1 ){
					this.backbtn.view.style['display'] = 'block';
					this.header.onAppearBackButton();
				}else{
					this.backbtn.view.style['display'] = 'none';
					this.header.onDisappearBackButton();
				}
			}
			
			if( callback ){ callback(); }
		});
	}
	
	/** 
	 * Page back (for standalone mode)
	 * 
	 * @param {Function} callback - callback
	 */
	back(callback){
		if( this.stack.length <= 1 ){
			// no more history
			return;
		}
		
		let index = this.stack.length - 1;
		if( index < 1 ){ index = 1; }
		
		let disappearingViews = this.stack.splice(index);
		let disappearingView  = this.currentView;
		let appearingView     = this.stack[this.stack.length-1];
		
		for( let i=0; i<disappearingViews.length; i++ ){
			disappearingViews[i].viewWillDisappear();
		}
		
		appearingView.viewWillAppear( () => {
			if( this.Pages[appearingView.componentId].scrollTop ){
				document.documentElement.scrollTop = this.Pages[appearingView.componentId].scrollTop;
			}else{
				document.documentElement.scrollTop = 0;
			}
			
			delete this.Pages[disappearingView.componentId];
			disappearingView.viewDidDisappear();
			disappearingView.view.remove();
			
			this.contents_holder.appendChild(appearingView.view);
			appearingView.showComponent();
			appearingView.viewDidAppear();
			
			this.currentView = appearingView;
			
			if( appearingView.path ){
				window.history.pushState(
					{ componentId:this.currentView.componentId, timestamp:Date.now() },
					this.currentView.title,
					Craft.Core.Context.getRouter().normalize(this.currentView.path)
				);
			}
			
			if( this.currentView.title ){
				document.title = this.currentView.title;
			}
			
			if( this.backbtn && (this.stack.length === 1) ){
				this.backbtn.view.style['display'] = 'none';
				this.header.onDisappearBackButton();
			}
			
			if( callback ){ callback(); }
		});
	}
	
	// *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    *    * 
	
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
				width: 100vw;
				margin: 0px;
				padding: 0px;
			}
			.root {
				width: 100vw;
			}
			.back {
				position: fixed;
				width: 44px;
				height: 44px;
				z-index: 9999;
			}
			.header {
				position: relative;
			}
			.header_sticky {
				position: fixed;
				top: 0;
				width: 100%;
			}
			.marker {
				position: absolute;
				top: 0px;
				width: 1px;
				height: 1px;
				margin-top: -1px;
			}
			.contents {
			}
			.contents_safe_shift {
				padding-top: env(safe-area-inset-top);
			}
		`;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div id="root" class="root">
				<div class="back" id="back"></div>
				<div class="header" id="header"></div>
				<div class="marker" id="marker"></div>
				<div class="cotents" id="contents"></div>
			</div>
		`;
	}
	
};

