/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,i,s){"use strict";function n(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var a=function(e){for(var i=e.length,s=t("head");i--;)0===s.has("."+e[i]).length&&s.append('<meta class="'+e[i]+'" />')};a(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof i.body&&FastClick.attach(i.body)});var o=function(e,s){if("string"==typeof e){if(s){var n;if(s.jquery){if(n=s[0],!n)return s}else n=s;return t(n.querySelectorAll(e))}return t(i.querySelectorAll(e))}return t(e,s)},r=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},l=function(t){for(var e=t.split("-"),i=e.length,s=[];i--;)0!==i?s.push(e[i]):this.namespace.length>0?s.push(this.namespace,e[i]):s.push(e[i]);return s.reverse().join("-")},d=function(e,i){var s=this,n=!o(this).data(this.attr_name(!0));return o(this.scope).is("["+this.attr_name()+"]")?(o(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,i||e,this.data_options(o(this.scope)))),n&&this.events(this.scope)):o("["+this.attr_name()+"]",this.scope).each(function(){var n=!o(this).data(s.attr_name(!0)+"-init");o(this).data(s.attr_name(!0)+"-init",t.extend({},s.settings,i||e,s.data_options(o(this)))),n&&s.events(this)}),"string"==typeof e?this[e].call(this,i):void 0},h=function(t,e){function i(){e(t[0])}function s(){if(this.one("load",i),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?(t[0].complete||4===t[0].readyState?i():s.call(t),void 0):(i(),void 0)};e.matchMedia=e.matchMedia||function(t){var e,i=t.documentElement,s=i.firstElementChild||i.firstChild,n=t.createElement("body"),a=t.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",n.style.background="none",n.appendChild(a),function(t){return a.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(n,s),e=42===a.offsetWidth,i.removeChild(n),{matches:e,media:t}}}(i),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(){function t(){i&&(a(t),r&&jQuery.fx.tick())}for(var i,s=0,n=["webkit","moz"],a=e.requestAnimationFrame,o=e.cancelAnimationFrame,r="undefined"!=typeof jQuery.fx;s<n.length&&!a;s++)a=e[n[s]+"RequestAnimationFrame"],o=o||e[n[s]+"CancelAnimationFrame"]||e[n[s]+"CancelRequestAnimationFrame"];a?(e.requestAnimationFrame=a,e.cancelAnimationFrame=o,r&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!i&&(i=!0,t())},jQuery.fx.stop=function(){i=!1})):(e.requestAnimationFrame=function(t){var i=(new Date).getTime(),n=Math.max(0,16-(i-s)),a=e.setTimeout(function(){t(i+n)},n);return s=i+n,a},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:s},init:function(t,i,s,n,a){var r=[t,s,n,a],l=[];if(this.rtl=/rtl/i.test(o("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),i&&"string"==typeof i&&!/reflow/i.test(i))this.libs.hasOwnProperty(i)&&l.push(this.init_lib(i,r));else for(var d in this.libs)l.push(this.init_lib(d,i));return o(e).load(function(){o(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,i){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),i&&i.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,i[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,i[e]),this.libs[e].init.apply(this.libs[e],[this.scope,i[e]])):(i=i instanceof Array?i:new Array(i),this.libs[e].init.apply(this.libs[e],i))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=r,t.add_namespace=l,t.bindings=d,t.S=this.utils.S},inherit:function(t,e){for(var i=e.split(" "),s=i.length;s--;)this.utils.hasOwnProperty(i[s])&&(t[i[s]]=this.utils[i[s]])},set_namespace:function(){var e=this.global.namespace===s?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===s||/false/i.test(e)?"":e},libs:{},utils:{S:o,throttle:function(t,e){var i=null;return function(){var s=this,n=arguments;null==i&&(i=setTimeout(function(){t.apply(s,n),i=null},e))}},debounce:function(t,e,i){var s,n;return function(){var a=this,o=arguments,r=function(){s=null,i||(n=t.apply(a,o))},l=i&&!s;return clearTimeout(s),s=setTimeout(r,e),l&&(n=t.apply(a,o)),n}},data_options:function(e,i){function s(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function n(e){return"string"==typeof e?t.trim(e):e}i=i||"options";var a,o,r,l={},d=function(t){var e=Foundation.global.namespace;return e.length>0?t.data(e+"-"+i):t.data(i)},h=d(e);if("object"==typeof h)return h;for(r=(h||":").split(";"),a=r.length;a--;)o=r[a].split(":"),o=[o[0],o.slice(1).join(":")],/true/i.test(o[1])&&(o[1]=!0),/false/i.test(o[1])&&(o[1]=!1),s(o[1])&&(o[1]=-1===o[1].indexOf(".")?parseInt(o[1],10):parseFloat(o[1])),2===o.length&&o[0].length>0&&(l[n(o[0])]=n(o[1]));return l},register_media:function(e,i){Foundation.media_queries[e]===s&&(t("head").append('<meta class="'+i+'"/>'),Foundation.media_queries[e]=n(t("."+i).css("font-family")))},add_custom_rule:function(t,e){if(e===s&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var i=Foundation.media_queries[e];i!==s&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var i=this,s=t.length;0===s&&e(t),t.each(function(){h(i.S(this),function(){s-=1,0===s&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document);