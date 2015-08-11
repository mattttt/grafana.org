/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){return s.raw?t:encodeURIComponent(t)}function n(t){return s.raw?t:decodeURIComponent(t)}function r(t){return e(s.json?JSON.stringify(t):String(t))}function i(t){0===t.indexOf('"')&&(t=t.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{t=decodeURIComponent(t.replace(a," "))}catch(e){return}try{return s.json?JSON.parse(t):t}catch(e){}}function o(e,n){var r=s.raw?e:i(e);return t.isFunction(n)?n(r):r}var a=/\+/g,s=t.cookie=function(i,a,u){if(void 0!==a&&!t.isFunction(a)){if(u=t.extend({},s.defaults,u),"number"==typeof u.expires){var l=u.expires,c=u.expires=new Date;c.setDate(c.getDate()+l)}return document.cookie=[e(i),"=",r(a),u.expires?"; expires="+u.expires.toUTCString():"",u.path?"; path="+u.path:"",u.domain?"; domain="+u.domain:"",u.secure?"; secure":""].join("")}for(var f=i?void 0:{},d=document.cookie?document.cookie.split("; "):[],p=0,h=d.length;h>p;p++){var m=d[p].split("="),g=n(m.shift()),v=m.join("=");if(i&&i===g){f=o(v,a);break}i||void 0===(v=o(v))||(f[g]=v)}return f};s.defaults={},t.removeCookie=function(e,n){return void 0!==t.cookie(e)?(t.cookie(e,"",t.extend({},n,{expires:-1})),!0):!1}});