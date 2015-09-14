/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function r(e){_.cssText=e}function o(e,t){return r(E.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&_[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(o,t):(o=(e+" "+M.join(r+" ")+r).split(" "),c(o,t,n))}function f(){h.input=function(n){for(var r=0,o=n.length;o>r;r++)z[n[r]]=!!(n[r]in b);return z.list&&(z.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),z}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,o,i,a=0,u=e.length;u>a;a++)b.setAttribute("type",o=e[a]),r="text"!==b.type,r&&(b.value=A,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&b.style.WebkitAppearance!==n?(v.appendChild(b),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,v.removeChild(b)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?b.checkValidity&&b.checkValidity()===!1:b.value!=A)),k[e[a]]=!!r;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var s,d,p="2.8.3",h={},m=!0,v=t.documentElement,g="modernizr",y=t.createElement(g),_=y.style,b=t.createElement("input"),A=":)",w={}.toString,E=" -webkit- -moz- -o- -ms- ".split(" "),x="Webkit Moz O ms",T=x.split(" "),M=x.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},S={},k={},z={},B=[],j=B.slice,N=function(e,n,r,o){var i,a,u,c,l=t.createElement("div"),f=t.body,s=f||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:g+(r+1),l.appendChild(u);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(f?l:s).innerHTML+=i,s.appendChild(l),f||(s.style.background="",s.style.overflow="hidden",c=v.style.overflow,v.style.overflow="hidden",v.appendChild(s)),a=n(l,e),f?l.parentNode.removeChild(l):(s.parentNode.removeChild(s),v.style.overflow=c),!!a},R=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return N("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},I=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),F={}.hasOwnProperty;d=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),S.flexbox=function(){return l("flexWrap")},S.flexboxlegacy=function(){return l("boxDirection")},S.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},S.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},S.webgl=function(){return!!e.WebGLRenderingContext},S.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",E.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},S.geolocation=function(){return"geolocation"in navigator},S.postmessage=function(){return!!e.postMessage},S.websqldatabase=function(){return!!e.openDatabase},S.indexedDB=function(){return!!l("indexedDB",e)},S.hashchange=function(){return I("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},S.history=function(){return!(!e.history||!history.pushState)},S.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},S.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},S.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(_.backgroundColor,"rgba")},S.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(_.backgroundColor,"rgba")||a(_.backgroundColor,"hsla")},S.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(_.background)},S.backgroundsize=function(){return l("backgroundSize")},S.borderimage=function(){return l("borderImage")},S.borderradius=function(){return l("borderRadius")},S.boxshadow=function(){return l("boxShadow")},S.textshadow=function(){return""===t.createElement("div").style.textShadow},S.opacity=function(){return o("opacity:.55"),/^0.55$/.test(_.opacity)},S.cssanimations=function(){return l("animationName")},S.csscolumns=function(){return l("columnCount")},S.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+E.join(n+e)).slice(0,-e.length)),a(_.backgroundImage,"gradient")},S.cssreflections=function(){return l("boxReflect")},S.csstransforms=function(){return!!l("transform")},S.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in v.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},S.csstransitions=function(){return l("transition")},S.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},S.generatedcontent=function(){var e;return N(["#",g,"{font:0/0 a}#",g,':after{content:"',A,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},S.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},S.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},S.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},S.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},S.webworkers=function(){return!!e.Worker},S.applicationcache=function(){return!!e.applicationCache},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},S.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(C.svg,"animate")))},S.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(C.svg,"clipPath")))};for(var O in S)d(S,O)&&(s=O.toLowerCase(),h[s]=S[O](),B.push((h[s]?"":"no-")+s));return h.input||f(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(v.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=b=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[m]];return t||(t={},v++,e[m]=v,g[v]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,u=r(),c=u.length;c>a;a++)i.createElement(u[a]);return i}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=o(e);return!y.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||u(e,r),e}var l,f,s="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,f=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:s,shivCSS:d.shivCSS!==!1,supportsUnknownElements:f,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=y,c(t)}(this,t),h._version=p,h._prefixes=E,h._domPrefixes=M,h._cssomPrefixes=T,h.mq=R,h.hasEvent=I,h.testProp=function(e){return u([e])},h.testAllProps=l,h.testStyles=N,h.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+B.join(" "):""),h}(this,this.document);