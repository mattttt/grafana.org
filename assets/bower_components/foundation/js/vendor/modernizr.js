/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,n){function r(t){b.cssText=t}function i(t,e){return r(C.join(t+";")+(e||""))}function o(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var r in t){var i=t[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==e?i:!0}return!1}function u(t,e,r){for(var i in t){var a=e[t[i]];if(a!==n)return r===!1?t[i]:o(a,"function")?a.bind(r||e):a}return!1}function l(t,e,n){var r=t.charAt(0).toUpperCase()+t.slice(1),i=(t+" "+k.join(r+" ")+r).split(" ");return o(e,"string")||o(e,"undefined")?s(i,e):(i=(t+" "+E.join(r+" ")+r).split(" "),u(i,e,n))}function c(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)N[n[r]]=!!(n[r]in x);return N.list&&(N.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(t){for(var r,i,o,a=0,s=t.length;s>a;a++)x.setAttribute("type",i=t[a]),r="text"!==x.type,r&&(x.value=_,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=e.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?x.checkValidity&&x.checkValidity()===!1:x.value!=_)),j[t[a]]=!!r;return j}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.8.3",h={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,x=e.createElement("input"),_=":)",w={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",k=T.split(" "),E=T.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},A={},j={},N={},F=[],D=F.slice,M=function(t,n,r,i){var o,a,s,u,l=e.createElement("div"),c=e.body,f=c||e.createElement("body");if(parseInt(r,10))for(;r--;)s=e.createElement("div"),s.id=i?i[r]:v+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),l.id=v,(c?l:f).innerHTML+=o,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(l,t),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),g.style.overflow=u),!!a},q=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var r;return M("@media "+e+" { #"+v+" { position: absolute; } }",function(e){r="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),r},O=function(){function t(t,i){i=i||e.createElement(r[t]||"div"),t="on"+t;var a=t in i;return a||(i.setAttribute||(i=e.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(t,""),a=o(i[t],"function"),o(i[t],"undefined")||(i[t]=n),i.removeAttribute(t))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),L={}.hasOwnProperty;d=o(L,"undefined")||o(L.call,"undefined")?function(t,e){return e in t&&o(t.constructor.prototype[e],"undefined")}:function(t,e){return L.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var o=new i,a=e.apply(o,n.concat(D.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(D.call(arguments)))};return r}),A.flexbox=function(){return l("flexWrap")},A.flexboxlegacy=function(){return l("boxDirection")},A.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},A.canvastext=function(){return!(!h.canvas||!o(e.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!t.WebGLRenderingContext},A.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:M(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!t.postMessage},A.websqldatabase=function(){return!!t.openDatabase},A.indexedDB=function(){return!!l("indexedDB",t)},A.hashchange=function(){return O("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},A.history=function(){return!(!t.history||!history.pushState)},A.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},A.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},A.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},A.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},A.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return l("backgroundSize")},A.borderimage=function(){return l("borderImage")},A.borderradius=function(){return l("borderRadius")},A.boxshadow=function(){return l("boxShadow")},A.textshadow=function(){return""===e.createElement("div").style.textShadow},A.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return l("animationName")},A.csscolumns=function(){return l("columnCount")},A.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),a(b.backgroundImage,"gradient")},A.cssreflections=function(){return l("boxReflect")},A.csstransforms=function(){return!!l("transform")},A.csstransforms3d=function(){var t=!!l("perspective");return t&&"webkitPerspective"in g.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},A.csstransitions=function(){return l("transition")},A.fontface=function(){var t;return M('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=e.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";t=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),t},A.generatedcontent=function(){var t;return M(["#",v,"{font:0/0 a}#",v,':after{content:"',_,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},A.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},A.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},A.webworkers=function(){return!!t.Worker},A.applicationcache=function(){return!!t.applicationCache},A.svg=function(){return!!e.createElementNS&&!!e.createElementNS(S.svg,"svg").createSVGRect},A.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==S.svg},A.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(S.svg,"animate")))},A.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(S.svg,"clipPath")))};for(var z in A)d(A,z)&&(f=z.toLowerCase(),h[f]=A[z](),F.push((h[f]?"":"no-")+f));return h.input||c(),h.addTest=function(t,e){if("object"==typeof t)for(var r in t)d(t,r)&&h.addTest(r,t[r]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),h[t]=e}return h},r(""),y=x=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=v[t[m]];return e||(e={},g++,t[m]=g,v[g]=e),e}function o(t,n,r){if(n||(n=e),c)return n.createElement(t);r||(r=i(n));var o;return o=r.cache[t]?r.cache[t].cloneNode():h.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),!o.canHaveChildren||p.test(t)||o.tagUrn?o:r.frag.appendChild(o)}function a(t,n){if(t||(t=e),c)return t.createDocumentFragment();n=n||i(t);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;u>a;a++)o.createElement(s[a]);return o}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function u(t){t||(t=e);var r=i(t);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||s(t,r),t}var l,c,f="3.7.0",d=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,c=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,c=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:c,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};t.html5=y,u(e)}(this,e),h._version=p,h._prefixes=C,h._domPrefixes=E,h._cssomPrefixes=k,h.mq=q,h.hasEvent=O,h.testProp=function(t){return s([t])},h.testAllProps=l,h.testStyles=M,h.prefixed=function(t,e,n){return e?l(t,e,n):l(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+F.join(" "):""),h}(this,this.document);