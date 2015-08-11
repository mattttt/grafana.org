/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,n){function i(t){b.cssText=t}function r(t,e){return i(C.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var r=t[i];if(!s(r,"-")&&b[r]!==n)return"pfx"==e?r:!0}return!1}function u(t,e,i){for(var r in t){var s=e[t[r]];if(s!==n)return i===!1?t[r]:o(s,"function")?s.bind(i||e):s}return!1}function l(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+T.join(i+" ")+i).split(" ");return o(e,"string")||o(e,"undefined")?a(r,e):(r=(t+" "+S.join(i+" ")+i).split(" "),u(r,e,n))}function c(){h.input=function(n){for(var i=0,r=n.length;r>i;i++)N[n[i]]=!!(n[i]in _);return N.list&&(N.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(t){for(var i,r,o,s=0,a=t.length;a>s;s++)_.setAttribute("type",r=t[s]),i="text"!==_.type,i&&(_.value=x,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&_.style.WebkitAppearance!==n?(m.appendChild(_),o=e.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,m.removeChild(_)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?_.checkValidity&&_.checkValidity()===!1:_.value!=x)),j[t[s]]=!!i;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,p="2.8.3",h={},g=!0,m=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,_=e.createElement("input"),x=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),S=k.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},A={},j={},N={},F=[],D=F.slice,M=function(t,n,i,r){var o,s,a,u,l=e.createElement("div"),c=e.body,d=c||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=r?r[i]:v+(i+1),l.appendChild(a);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),l.id=v,(c?l:d).innerHTML+=o,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),s=n(l,t),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),m.style.overflow=u),!!s},q=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return M("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},O=function(){function t(t,r){r=r||e.createElement(i[t]||"div"),t="on"+t;var s=t in r;return s||(r.setAttribute||(r=e.createElement("div")),r.setAttribute&&r.removeAttribute&&(r.setAttribute(t,""),s=o(r[t],"function"),o(r[t],"undefined")||(r[t]=n),r.removeAttribute(t))),r=null,s}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),L={}.hasOwnProperty;f=o(L,"undefined")||o(L.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return L.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=D.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var o=new r,s=e.apply(o,n.concat(D.call(arguments)));return Object(s)===s?s:o}return e.apply(t,n.concat(D.call(arguments)))};return i}),A.flexbox=function(){return l("flexWrap")},A.flexboxlegacy=function(){return l("boxDirection")},A.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},A.canvastext=function(){return!(!h.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!t.WebGLRenderingContext},A.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:M(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!t.postMessage},A.websqldatabase=function(){return!!t.openDatabase},A.indexedDB=function(){return!!l("indexedDB",t)},A.hashchange=function(){return O("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},A.history=function(){return!(!t.history||!history.pushState)},A.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},A.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},A.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},A.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},A.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return l("backgroundSize")},A.borderimage=function(){return l("borderImage")},A.borderradius=function(){return l("borderRadius")},A.boxshadow=function(){return l("boxShadow")},A.textshadow=function(){return""===e.createElement("div").style.textShadow},A.opacity=function(){return r("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return l("animationName")},A.csscolumns=function(){return l("columnCount")},A.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),s(b.backgroundImage,"gradient")},A.cssreflections=function(){return l("boxReflect")},A.csstransforms=function(){return!!l("transform")},A.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in m.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},A.csstransitions=function(){return l("transition")},A.fontface=function(){var t;return M('@font-face {font-family:"font";src:url("https://")}',function(n,i){var r=e.getElementById("smodernizr"),o=r.sheet||r.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(s)&&0===s.indexOf(i.split(" ")[0])}),t},A.generatedcontent=function(){var t;return M(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},A.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},A.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},A.webworkers=function(){return!!t.Worker},A.applicationcache=function(){return!!t.applicationCache},A.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},A.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},A.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(E.svg,"animate")))},A.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(E.svg,"clipPath")))};for(var $ in A)f(A,$)&&(d=$.toLowerCase(),h[d]=A[$](),F.push((h[d]?"":"no-")+d));return h.input||c(),h.addTest=function(t,e){if("object"==typeof t)for(var i in t)f(t,i)&&h.addTest(i,t[i]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(m.className+=" "+(e?"":"no-")+t),h[t]=e}return h},i(""),y=_=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=v[t[g]];return e||(e={},m++,t[g]=m,v[m]=e),e}function o(t,n,i){if(n||(n=e),c)return n.createElement(t);i||(i=r(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():h.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!o.canHaveChildren||p.test(t)||o.tagUrn?o:i.frag.appendChild(o)}function s(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||r(t);for(var o=n.frag.cloneNode(),s=0,a=i(),u=a.length;u>s;s++)o.createElement(a[s]);return o}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function u(t){t||(t=e);var i=r(t);return!y.shivCSS||l||i.hasCSS||(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||a(t,i),t}var l,c,d="3.7.0",f=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:s};t.html5=y,u(e)}(this,e),h._version=p,h._prefixes=C,h._domPrefixes=S,h._cssomPrefixes=T,h.mq=q,h.hasEvent=O,h.testProp=function(t){return a([t])},h.testAllProps=l,h.testStyles=M,h.prefixed=function(t,e,n){return e?l(t,e,n):l(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+F.join(" "):""),h}(this,this.document);