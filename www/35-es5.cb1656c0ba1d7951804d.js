!function(){function e(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function o(e,o,t,r,i,n,a){try{var p=e[n](a),s=p.value}catch(c){return void t(c)}p.done?o(s):Promise.resolve(s).then(r,i)}function t(e){return function(){var t=this,r=arguments;return new Promise(function(i,n){var a=e.apply(t,r);function p(e){o(a,i,n,p,s,"next",e)}function s(e){o(a,i,n,p,s,"throw",e)}p(void 0)})}}function r(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{qCuA:function(o,i,n){"use strict";n.r(i),n.d(i,"ion_popover",function(){return x});var a=n("wEJo"),p=n("E/Mt"),s=n("acej"),c=n("7OTs"),l=n("74mu"),d=n("k4ps"),v=n("meiF");n("1vRN"),n("B4Jq");var h=function(e,o){var t="top",r="left",i=e.querySelector(".popover-content"),n=i.getBoundingClientRect(),a=n.width,p=n.height,s=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=o&&o.target&&o.target.getBoundingClientRect(),d=null!=l&&"top"in l?l.top:c/2-p/2,h=null!=l&&"left"in l?l.left:s/2,f=l&&l.width||0,b=l&&l.height||0,m=e.querySelector(".popover-arrow"),x=m.getBoundingClientRect(),g=x.width,w=x.height;null==l&&(m.style.display="none");var y={top:d+b,left:h+f/2-g/2},k={top:d+b+(w-1),left:h+f/2-a/2},j=!1,O=!1;k.left<u+25?(j=!0,k.left=u):a+u+k.left+25>s&&(O=!0,k.left=s-a-u,r="right"),d+b+p>c&&d-p>0?(y.top=d-(w+1),k.top=d-p-(w-1),e.className=e.className+" popover-bottom",t="bottom"):d+b+p>c&&(i.style.bottom=u+"%"),m.style.top=y.top+"px",m.style.left=y.left+"px",i.style.top=k.top+"px",i.style.left=k.left+"px",j&&(i.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(i.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),i.style.transformOrigin=t+" "+r;var D=Object(v.a)(),P=Object(v.a)(),E=Object(v.a)();return P.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([P,E])},u=5,f=function(e){var o=Object(v.a)(),t=Object(v.a)(),r=Object(v.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},b=function(e,o){var t=e.ownerDocument,r="rtl"===t.dir,i="top",n=r?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),s=p.width,c=p.height,l=t.defaultView.innerWidth,d=t.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"bottom"in h?h.bottom:d/2-c/2,f=h&&h.height||0,b={top:u,left:null!=h&&"left"in h?r?h.left-s+h.width:h.left:l/2-s/2};b.left<12?(b.left=12,n="left"):s+12+b.left>l&&(b.left=l-s-12,n="right"),u+f+c>d&&u-c>0?(b.top=u-c-f,e.className=e.className+" popover-bottom",i="bottom"):u+f+c>d&&(a.style.bottom="12px");var m=Object(v.a)(),x=Object(v.a)(),g=Object(v.a)(),w=Object(v.a)(),y=Object(v.a)();return x.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(a).beforeStyles({top:"".concat(b.top,"px"),left:"".concat(b.left,"px"),"transform-origin":"".concat(i," ").concat(n)}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),m.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([x,g,w,y])},m=function(e){var o=Object(v.a)(),t=Object(v.a)(),r=Object(v.a)();return t.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.addElement(e).easing("ease").duration(500).addAnimation([t,r])},x=function(){function o(e){var t=this;!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),Object(a.o)(this,e),this.didPresent=Object(a.g)(this,"ionPopoverDidPresent",7),this.willPresent=Object(a.g)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(a.g)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(a.g)(this,"ionPopoverDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,c.a)},this.onLifecycle=function(e){var o=t.usersElement,r=g[e.type];if(o&&r){var i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(i)}}}var i,n,v,u,x;return i=o,(n=[{key:"connectedCallback",value:function(){Object(c.f)(this.el)}},{key:"present",value:(x=t(regeneratorRuntime.mark(function e(){var o,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(o=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(s.a)(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t);case 8:return this.usersElement=e.sent,e.next=11,Object(d.f)(this.usersElement);case 11:return e.abrupt("return",Object(c.e)(this,"popoverEnter",h,b,this.event));case 12:case"end":return e.stop()}},e,this)})),function(){return x.apply(this,arguments)})},{key:"dismiss",value:(u=t(regeneratorRuntime.mark(function e(o,t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.g)(this,o,t,"popoverLeave",f,m,this.event);case 2:if(r=e.sent,e.t0=r,!e.t0){e.next=7;break}return e.next=7,Object(s.b)(this.delegate,this.usersElement);case 7:return e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)})),function(e,o){return u.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(c.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(c.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var o,t=Object(p.b)(this),r=this.onLifecycle;return Object(a.j)(a.c,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(l.b)(this.cssClass)),(o={},e(o,t,!0),e(o,"popover-translucent",this.translucent),o)),onIonPopoverDidPresent:r,onIonPopoverWillPresent:r,onIonPopoverWillDismiss:r,onIonPopoverDidDismiss:r,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(a.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(a.j)("div",{tabindex:"0"}),Object(a.j)("div",{class:"popover-wrapper ion-overlay-wrapper"},Object(a.j)("div",{class:"popover-arrow"}),Object(a.j)("div",{class:"popover-content"})),Object(a.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(a.k)(this)}}])&&r(i.prototype,n),v&&r(i,v),o}(),g={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};x.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}])}();