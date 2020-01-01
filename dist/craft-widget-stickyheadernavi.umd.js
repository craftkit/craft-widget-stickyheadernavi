!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Craft")):"function"==typeof define&&define.amd?define(["Craft"],e):"object"==typeof exports?exports.StickyHeaderNavi=e(require("Craft")):t.StickyHeaderNavi=e(t.Craft)}(window,function(t){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(e,i){e.exports=t},function(t,e,i){"use strict";const n=i(2);t.exports=n.default||n},function(t,e,i){"use strict";i.r(e);var n=i(0);const s={ViewController:class extends n.UI.DefaultRootViewController{constructor(t){super(),this.packagename="Craft.Widget.StickyHeaderNavi.ViewController",this.stack=[],this.currentView="",this.Pages={},this.parent="",this.header=t.header,this.backbtn=t.backbtn,this.initialPage=t.page,this.enableSwipeBack=t.enableSwipeBack,n.UI.Device.isStandaloneMode()||(this.backbtn=null,this.enableSwipeBack=!1)}viewDidLoad(t){this.back_holder=this.shadow.getElementById("back"),this.contents_holder=this.shadow.getElementById("contents"),this.header_holder=this.shadow.getElementById("header"),this.marker=this.shadow.getElementById("marker"),this.header.setViewController(this),this.header.isViewLoaded||this.header.loadView(),this.header.viewWillAppear(),this.header_holder.appendChild(this.header.view),this.header.viewDidAppear(),this.backbtn&&(this.backbtn.setViewController(this),this.backbtn.isViewLoaded||this.backbtn.loadView(),this.backbtn.viewWillAppear(),this.back_holder.appendChild(this.backbtn.view),this.backbtn.viewDidAppear()),this.enableSwipeBack&&n.Core.Gesture.enableSwipe({target:this.contents_holder,right:t=>{this.back()}}),n.Core.Gesture.enableTap({target:this.contents_holder,tap:t=>{n.Core.NotificationCenter.notify("ContentTapped",t)}}),this.initialPage&&this.open(this.initialPage),t&&t()}viewDidAppear(){this.updateStickyHandler()}updateStickyHandler(){let t=this.header.getLargeHeight(),e=this.header.getStickyThreshold();this.marker.style.top=e+"px",this.observer=new IntersectionObserver((e,i)=>{e[0].isIntersecting?(this.header_holder.classList.remove("header_sticky"),this.contents_holder.style["margin-top"]="0px",this.back_holder.style["margin-top"]="0px",this.header.onExitSticky(),this.contents_holder.classList.remove("contents_safe_shift")):(this.header_holder.classList.add("header_sticky"),this.contents_holder.style["margin-top"]=`${t}px`,this.back_holder.style["margin-top"]=`-${t}px`,this.header.onEnterSticky(),this.contents_holder.classList.add("contents_safe_shift"))}),this.observer.observe(this.marker)}open(t){let e=t.page,i=t.callback,n=t.route,s=n?n.event:null,a=!!n&&n.launch,r=this.currentView,l=e;l.setViewController(this),l.isViewLoaded||l.loadView(),r&&r.viewWillDisappear(),l.viewWillAppear(()=>{this.Pages[l.componentId]={page:l},this.stack.push(l),this.contents_holder.appendChild(l.view),l.show(),l.viewDidAppear(),this.currentView=l,r&&(r.viewDidDisappear(),r.view.remove()),a?window.history.replaceState({componentId:this.currentView.componentId,timestamp:Date.now()},this.currentView.title,this.currentView.path):s||window.history.pushState({componentId:this.currentView.componentId,timestamp:Date.now()},this.currentView.title,this.currentView.path),this.currentView.title&&(document.title=this.currentView.title),window.pageYOffset>this.header.getStickyThreshold()?(window.scrollTo(0,this.header.getStickyThreshold()+1),this.contents_holder.classList.add("contents_safe_shift")):this.contents_holder.classList.remove("contents_safe_shift"),this.backbtn&&(this.stack.length>1?(this.backbtn.view.style.display="block",this.header.onAppearBackButton()):(this.backbtn.view.style.display="none",this.header.onDisappearBackButton())),i&&i()})}back(t){if(this.stack.length<=1)return;let e=this.stack.length-1;e<1&&(e=1);let i=this.stack.splice(e),n=this.currentView,s=this.stack[this.stack.length-1];for(let t=0;t<i.length;t++)i[t].viewWillDisappear();s.viewWillAppear(()=>{this.contents_holder.appendChild(s.view),s.show(),s.viewDidAppear(),this.currentView=s,s.path&&window.history.pushState({componentId:this.currentView.componentId,timestamp:Date.now()},this.currentView.title,this.currentView.path),this.currentView.title&&(document.title=this.currentView.title),this.backbtn&&1===this.stack.length&&(this.backbtn.view.style.display="none",this.header.onDisappearBackButton()),delete this.Pages[n.componentId],n.viewDidDisappear(),n.view.remove(),t&&t()})}style(t){return"\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\twidth: 100vw;\n\t\t\t\tmargin: 0px;\n\t\t\t\tpadding: 0px;\n\t\t\t}\n\t\t\t.root {\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t\t.back {\n\t\t\t\tposition: fixed;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tz-index: 9999;\n\t\t\t}\n\t\t\t.header {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.header_sticky {\n\t\t\t\tposition: fixed;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t\t.marker {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0px;\n\t\t\t\twidth: 1px;\n\t\t\t\theight: 1px;\n\t\t\t\tmargin-top: -1px;\n\t\t\t}\n\t\t\t.contents {\n\t\t\t}\n\t\t\t.contents_safe_shift {\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t}\n\t\t"}template(t){return'\n\t\t\t<div id="root" class="root">\n\t\t\t\t<div class="back" id="back"></div>\n\t\t\t\t<div class="header" id="header"></div>\n\t\t\t\t<div class="marker" id="marker"></div>\n\t\t\t\t<div class="cotents" id="contents"></div>\n\t\t\t</div>\n\t\t'}},Header:class extends n.UI.View{constructor(t){t||(t={}),super(t),this.packagename="Craft.Widget.StickyHeaderNavi.Header",this.large=t.large,this.small=t.small}viewDidLoad(){this.large_holder=this.shadow.getElementById("large"),this.small_holder=this.shadow.getElementById("small"),this.large.setViewController(this.viewController),this.large.loadView(),this.large.viewWillAppear(),this.large_holder.appendChild(this.large.view),this.large.viewDidAppear(),this.small.setViewController(this.viewController),this.small.loadView(),this.small.viewWillAppear(),this.small_holder.appendChild(this.small.view),this.small.viewDidAppear()}getLargeHeight(){return Number(window.getComputedStyle(this.large.root).height.replace("px",""))}getSmallHeight(){return Number(window.getComputedStyle(this.small.root).height.replace("px",""))}getStickyThreshold(){return this.getLargeHeight()-this.getSmallHeight()}onEnterSticky(){this.large.viewWillDisappear(),this.large_holder.style.display="none",this.large.viewDidDisappear(),this.small.viewWillAppear(),this.small_holder.style.display="block",this.small.viewDidAppear()}onExitSticky(){this.large.viewWillAppear(),this.large_holder.style.display="block",this.large.viewDidAppear(),this.small.viewWillDisappear(),this.small_holder.style.display="none",this.small.viewDidDisappear()}onAppearBackButton(){this.large_holder.classList.add("slide_out"),this.large_holder.classList.remove("slide_in"),this.small_holder.classList.add("slide_out"),this.small_holder.classList.remove("slide_in")}onDisappearBackButton(){this.large_holder.classList.add("slide_in"),this.large_holder.classList.remove("slide_out"),this.small_holder.classList.add("slide_in"),this.small_holder.classList.remove("slide_out")}style(t){return"\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t\tpadding-right: env(safe-area-inset-right);\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tposition: relative;\n\t\t\t\toverflow-x: hidden;\n\t\t\t}\n\t\t\t.large {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t.small {\n\t\t\t\tbox-sizing:border-box;\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.slide_out {\n\t\t\t\ttransition: 0.05s;\n\t\t\t\tmargin-left: 44px;\n\t\t\t\twidth: calc( 100vw - 44px );\n\t\t\t}\n\t\t\t.slide_in {\n\t\t\t\ttransition: 0.05s;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\twidth: 100vw;\n\t\t\t}\n\t\t"}template(t){return'\n\t\t\t<div class="root" id="root">\n\t\t\t\t<div id="large" class="large"></div>\n\t\t\t\t<div id="small" class="small"></div>\n\t\t\t</div>\n\t\t'}},BackButton:class extends n.UI.View{constructor(t){super(),this.packagename="Craft.Widget.StickyHeaderNavi.BackButton"}style(t){return"\n\t\t\t:host {\n\t\t\t\tdisplay: none;\n\t\t\t\tfloat: left;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tpadding-top: env(safe-area-inset-top);\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t}\n\t\t\t.root {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 44px;\n\t\t\t\theight: 44px;\n\t\t\t\tmargin-left: 0px;\n\t\t\t\tmargin-top: -3px;\n\t\t\t\tcolor: #000;\n\t\t\t\tfont-size: 36px;\n\t\t\t\ttext-align: center;\n\t\t\t\tline-height: 44px;\n\t\t\t\tfont-family: 'Arial-BoldMT';\n\t\t\t}\n\t\t"}template(t){return`\n\t\t\t<div class="root" onclick="window.Craft.Core.ComponentStack.get('${t}').getViewController().back();">‹</div>\n\t\t`}},Page:class extends n.UI.View{getHeaderLarge(){}getHeaderSmall(){}style(t){return"\n\t\t\t* { \n\t\t\t\tbox-sizing:border-box;\n\t\t\t}\n\t\t\t:host {\n\t\t\t\tpadding-left: env(safe-area-inset-left);\n\t\t\t\tpadding-right: env(safe-area-inset-right);\n\t\t\t}\n\t\t"}},inject:function(t){t.Widget=t.Widget||{},t.Widget.StickyHeaderNavi||(t.Widget.StickyHeaderNavi=s)}};e.default=s}])});