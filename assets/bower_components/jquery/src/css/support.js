define(["../core","../var/support"],function(t,e){return function(){function n(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o.innerHTML="",s.appendChild(a);var t=window.getComputedStyle(o,null);i="1%"!==t.top,r="4px"===t.width,s.removeChild(a)}var i,r,s=document.documentElement,a=document.createElement("div"),o=document.createElement("div");o.style&&(o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle="content-box"===o.style.backgroundClip,a.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",a.appendChild(o),window.getComputedStyle&&t.extend(e,{pixelPosition:function(){return n(),i},boxSizingReliable:function(){return null==r&&n(),r},reliableMarginRight:function(){var t,e=o.appendChild(document.createElement("div"));return e.style.cssText=o.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",e.style.marginRight=e.style.width="0",o.style.width="1px",s.appendChild(a),t=!parseFloat(window.getComputedStyle(e,null).marginRight),s.removeChild(a),o.removeChild(e),t}}))}(),e});