define(["./core","./var/rnotwhite"],function(t,e){function n(n){var r=i[n]={};return t.each(n.match(e)||[],function(t,e){r[e]=!0}),r}var i={};return t.Callbacks=function(e){e="string"==typeof e?i[e]||n(e):t.extend({},e);var r,s,a,o,l,c,u=[],d=!e.once&&[],f=function(t){for(r=e.memory&&t,s=!0,c=o||0,o=0,l=u.length,a=!0;u&&l>c;c++)if(u[c].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}a=!1,u&&(d?d.length&&f(d.shift()):r?u=[]:h.disable())},h={add:function(){if(u){var n=u.length;!function i(n){t.each(n,function(n,r){var s=t.type(r);"function"===s?e.unique&&h.has(r)||u.push(r):r&&r.length&&"string"!==s&&i(r)})}(arguments),a?l=u.length:r&&(o=n,f(r))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),a&&(l>=i&&l--,c>=i&&c--)}),this},has:function(e){return e?t.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],l=0,this},disable:function(){return u=d=r=void 0,this},disabled:function(){return!u},lock:function(){return d=void 0,r||h.disable(),this},locked:function(){return!d},fireWith:function(t,e){return!u||s&&!d||(e=e||[],e=[t,e.slice?e.slice():e],a?d.push(e):f(e)),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!s}};return h},t});