/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(t,e,i){function n(t){b.cssText=t}function s(t,e){return n(k.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var n in t){var s=t[n];if(!o(s,"-")&&b[s]!==i)return"pfx"==e?s:!0}return!1}function l(t,e,n){for(var s in t){var o=e[t[s]];if(o!==i)return n===!1?t[s]:a(o,"function")?o.bind(n||e):o}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+F.join(n+" ")+n).split(" ");return a(e,"string")||a(e,"undefined")?r(s,e):(s=(t+" "+S.join(n+" ")+n).split(" "),l(s,e,i))}function d(){p.input=function(i){for(var n=0,s=i.length;s>n;n++)j[i[n]]=!!(i[n]in y);return j.list&&(j.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(t){for(var n,s,a,o=0,r=t.length;r>o;o++)y.setAttribute("type",s=t[o]),n="text"!==y.type,n&&(y.value=x,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(s)&&y.style.WebkitAppearance!==i?(m.appendChild(y),a=e.defaultView,n=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,m.removeChild(y)):/^(search|tel)$/.test(s)||(n=/^(url|email)$/.test(s)?y.checkValidity&&y.checkValidity()===!1:y.value!=x)),A[t[o]]=!!n;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,h,f="2.8.3",p={},g=!0,m=e.documentElement,v="modernizr",_=e.createElement(v),b=_.style,y=e.createElement("input"),x=":)",w={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",F=C.split(" "),S=C.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},$={},A={},j={},D=[],E=D.slice,q=function(t,i,n,s){var a,o,r,l,c=e.createElement("div"),d=e.body,u=d||e.createElement("body");if(parseInt(n,10))for(;n--;)r=e.createElement("div"),r.id=s?s[n]:v+(n+1),c.appendChild(r);return a=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(d?c:u).innerHTML+=a,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),o=i(c,t),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),m.style.overflow=l),!!o},M=function(e){var i=t.matchMedia||t.msMatchMedia;if(i)return i(e)&&i(e).matches||!1;var n;return q("@media "+e+" { #"+v+" { position: absolute; } }",function(e){n="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),n},z=function(){function t(t,s){s=s||e.createElement(n[t]||"div"),t="on"+t;var o=t in s;return o||(s.setAttribute||(s=e.createElement("div")),s.setAttribute&&s.removeAttribute&&(s.setAttribute(t,""),o=a(s[t],"function"),a(s[t],"undefined")||(s[t]=i),s.removeAttribute(t))),s=null,o}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),H={}.hasOwnProperty;h=a(H,"undefined")||a(H.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return H.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=E.call(arguments,1),n=function(){if(this instanceof n){var s=function(){};s.prototype=e.prototype;var a=new s,o=e.apply(a,i.concat(E.call(arguments)));return Object(o)===o?o:a}return e.apply(t,i.concat(E.call(arguments)))};return n}),$.flexbox=function(){return c("flexWrap")},$.flexboxlegacy=function(){return c("boxDirection")},$.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},$.canvastext=function(){return!(!p.canvas||!a(e.createElement("canvas").getContext("2d").fillText,"function"))},$.webgl=function(){return!!t.WebGLRenderingContext},$.touch=function(){var i;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?i=!0:q(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){i=9===t.offsetTop}),i},$.geolocation=function(){return"geolocation"in navigator},$.postmessage=function(){return!!t.postMessage},$.websqldatabase=function(){return!!t.openDatabase},$.indexedDB=function(){return!!c("indexedDB",t)},$.hashchange=function(){return z("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},$.history=function(){return!(!t.history||!history.pushState)},$.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},$.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},$.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),o(b.backgroundColor,"rgba")},$.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),o(b.backgroundColor,"rgba")||o(b.backgroundColor,"hsla")},$.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},$.backgroundsize=function(){return c("backgroundSize")},$.borderimage=function(){return c("borderImage")},$.borderradius=function(){return c("borderRadius")},$.boxshadow=function(){return c("boxShadow")},$.textshadow=function(){return""===e.createElement("div").style.textShadow},$.opacity=function(){return s("opacity:.55"),/^0.55$/.test(b.opacity)},$.cssanimations=function(){return c("animationName")},$.csscolumns=function(){return c("columnCount")},$.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+k.join(i+t)).slice(0,-t.length)),o(b.backgroundImage,"gradient")},$.cssreflections=function(){return c("boxReflect")},$.csstransforms=function(){return!!c("transform")},$.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in m.style&&q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},$.csstransitions=function(){return c("transition")},$.fontface=function(){var t;return q('@font-face {font-family:"font";src:url("https://")}',function(i,n){var s=e.getElementById("smodernizr"),a=s.sheet||s.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";t=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0])}),t},$.generatedcontent=function(){var t;return q(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},$.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},$.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},$.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},$.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},$.webworkers=function(){return!!t.Worker},$.applicationcache=function(){return!!t.applicationCache},$.svg=function(){return!!e.createElementNS&&!!e.createElementNS(T.svg,"svg").createSVGRect},$.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==T.svg},$.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(w.call(e.createElementNS(T.svg,"animate")))},$.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(w.call(e.createElementNS(T.svg,"clipPath")))};for(var N in $)h($,N)&&(u=N.toLowerCase(),p[u]=$[N](),D.push((p[u]?"":"no-")+u));return p.input||d(),p.addTest=function(t,e){if("object"==typeof t)for(var n in t)h(t,n)&&p.addTest(n,t[n]);else{if(t=t.toLowerCase(),p[t]!==i)return p;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(m.className+=" "+(e?"":"no-")+t),p[t]=e}return p},n(""),_=y=null,function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=_.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=v[t[g]];return e||(e={},m++,t[g]=m,v[m]=e),e}function a(t,i,n){if(i||(i=e),d)return i.createElement(t);n||(n=s(i));var a;return a=n.cache[t]?n.cache[t].cloneNode():p.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),!a.canHaveChildren||f.test(t)||a.tagUrn?a:n.frag.appendChild(a)}function o(t,i){if(t||(t=e),d)return t.createDocumentFragment();i=i||s(t);for(var a=i.frag.cloneNode(),o=0,r=n(),l=r.length;l>o;o++)a.createElement(r[o]);return a}function r(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(i){return _.shivMethods?a(i,t,e):e.createElem(i)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(_,e.frag)}function l(t){t||(t=e);var n=s(t);return!_.shivCSS||c||n.hasCSS||(n.hasCSS=!!i(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||r(t,n),t}var c,d,u="3.7.0",h=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,d=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(i){c=!0,d=!0}}();var _={elements:h.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:h.shivCSS!==!1,supportsUnknownElements:d,shivMethods:h.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:o};t.html5=_,l(e)}(this,e),p._version=f,p._prefixes=k,p._domPrefixes=S,p._cssomPrefixes=F,p.mq=M,p.hasEvent=z,p.testProp=function(t){return r([t])},p.testAllProps=c,p.testStyles=q,p.prefixed=function(t,e,i){return e?c(t,e,i):c(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+D.join(" "):""),p}(this,this.document);