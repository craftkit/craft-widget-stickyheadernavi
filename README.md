
# Craft-Widget-StickyHeaderNavi

Sticky header navigation system with parallax scrolling effect, for both browser and PWA.


## Feature

* Sticky header shrinked by scroll
* Back button for standalone mode (web app added to the home screen)
* Support for safe-area-inset-*
* Depends on Craft-UIKit.


## How to use

Direct use:

```html 
<script src="https://unpkg.com/@craftkit/craft-uikit/dist/craft-uikit.min.js"></script>
<script src="https://unpkg.com/@craftkit/craft-widget-stickyheadernavi/dist/craft-widget-stickyheadernavi.min.js"></script>
<script>
    window.onload = function(){
        Craft.Core.Bootstrap.boot(App);
    };
</script>
```

or webpack style:

```javascript 
import * as Craft from 'craft-uikit';
import * as StickyHeaderNavi from 'craft-widget-stickyheadernavi';

Craft.usePackage(StickyHeaderNavi);

export class PageController extends Craft.Widget.StickyHeaderNavi.ViewController { ... }
```


## How to implement your Header

Header constructor requires 2 element, one is Large view, one is Small view.
Header starts in Large view, and when you scrolled over `Sticky threshold`, Small View is shown.

You can implement your Header as a sub-class of `Craft.Widget.StickyHeaderNavi.Header` abstruct class.

``` 
class MyHeader extends Craft.Widget.StickyHeaderNavi.Header {}

let header = new MyHeader({
    large : new LargeTitle(),
    small : new SmallTitle()
}),
``` 

The abstruct class implements several interface to support sticky behaviour with some restriction. 
You have to define `height` of your Large View and Small View in its style for `.root` class element. 
Because the Small View (or sometimes Large View if in the state of scrolled) is not in the DOM until it enabled. 

like this:

``` 
class Title extends Craft.UI.View { ... }

class LargeTitle extends Title {
    style(componentId){
        return super.style(componentId) + `
            .root { height: 88px; }
        `;
    }
}
class SmallTitle extends Title {
    style(componentId){
        return super.style(componentId) + `
            .root { height: 44px; }
        `;
    }
}
``` 

If you want to make dynamically rendered Large and Small View, you have to override below method. 
See JSDoc comment for details.

| Item             | Method             | Description |
|:-----------------|:-------------------|:------------|
| Large height     | getLargeHeight     | The height of large view should be defined in its root style. |
| Small height     | getSmallHeight     | The height of small view should be defined in its root style. |
| Sticky threshold | getStickyThreshold | Threshold of scroll amount to make header sticky |


## Events your header may handle

| Event                 | Description |
|:----------------------|:-------------------------------------------------|
| onEnterSticky         | called when the page scrolled to `sticky height`.<br>By default, when scrolled over `sticky` amount, large view is hidden and small view is shown. | 
| onExitSticky          | called when the page scroll backed to top area<br>By default, when scroll back to top area less than `sticky height`, large view is shown and small view is hidden. | 
| onAppearBackButton    | called when the back button appeared<br>By default, both large and small view will slide out 44px (defined in `.slide_out` css class). | 
| onDisappearBackButton | called when the back button disappeared<br>By default, both large and small view will turn back to the original position (defined in `.slide_in` css class). | 


## License

MIT

