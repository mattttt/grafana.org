define(["./core","./var/pnum","./css/var/cssExpand","./css/var/isHidden","./css/defaultDisplay","./data/var/data_priv","./core/init","./effects/Tween","./queue","./css","./deferred","./traversing"],function(t,e,n,i,s,a){function r(){return setTimeout(function(){h=void 0}),h=t.now()}function o(t,e){var i,s=0,a={height:t};for(e=e?1:0;4>s;s+=2-e)i=n[s],a["margin"+i]=a["padding"+i]=t;return e&&(a.opacity=a.width=t),a}function l(t,e,n){for(var i,s=(_[e]||[]).concat(_["*"]),a=0,r=s.length;r>a;a++)if(i=s[a].call(n,e,t))return i}function c(e,n,r){var o,c,u,d,h,f,g,m,v=this,_={},y=e.style,b=e.nodeType&&i(e),x=a.get(e,"fxshow");r.queue||(h=t._queueHooks(e,"fx"),null==h.unqueued&&(h.unqueued=0,f=h.empty.fire,h.empty.fire=function(){h.unqueued||f()}),h.unqueued++,v.always(function(){v.always(function(){h.unqueued--,t.queue(e,"fx").length||h.empty.fire()})})),1===e.nodeType&&("height"in n||"width"in n)&&(r.overflow=[y.overflow,y.overflowX,y.overflowY],g=t.css(e,"display"),m="none"===g?a.get(e,"olddisplay")||s(e.nodeName):g,"inline"===m&&"none"===t.css(e,"float")&&(y.display="inline-block")),r.overflow&&(y.overflow="hidden",v.always(function(){y.overflow=r.overflow[0],y.overflowX=r.overflow[1],y.overflowY=r.overflow[2]}));for(o in n)if(c=n[o],p.exec(c)){if(delete n[o],u=u||"toggle"===c,c===(b?"hide":"show")){if("show"!==c||!x||void 0===x[o])continue;b=!0}_[o]=x&&x[o]||t.style(e,o)}else g=void 0;if(t.isEmptyObject(_))"inline"===("none"===g?s(e.nodeName):g)&&(y.display=g);else{x?"hidden"in x&&(b=x.hidden):x=a.access(e,"fxshow",{}),u&&(x.hidden=!b),b?t(e).show():v.done(function(){t(e).hide()}),v.done(function(){var n;a.remove(e,"fxshow");for(n in _)t.style(e,n,_[n])});for(o in _)d=l(b?x[o]:0,o,v),o in x||(x[o]=d.start,b&&(d.end=d.start,d.start="width"===o||"height"===o?1:0))}}function u(e,n){var i,s,a,r,o;for(i in e)if(s=t.camelCase(i),a=n[s],r=e[i],t.isArray(r)&&(a=r[1],r=e[i]=r[0]),i!==s&&(e[s]=r,delete e[i]),o=t.cssHooks[s],o&&"expand"in o){r=o.expand(r),delete e[s];for(i in r)i in e||(e[i]=r[i],n[i]=a)}else n[s]=a}function d(e,n,i){var s,a,o=0,c=v.length,d=t.Deferred().always(function(){delete f.elem}),f=function(){if(a)return!1;for(var t=h||r(),n=Math.max(0,p.startTime+p.duration-t),i=n/p.duration||0,s=1-i,o=0,l=p.tweens.length;l>o;o++)p.tweens[o].run(s);return d.notifyWith(e,[p,s,n]),1>s&&l?n:(d.resolveWith(e,[p]),!1)},p=d.promise({elem:e,props:t.extend({},n),opts:t.extend(!0,{specialEasing:{}},i),originalProperties:n,originalOptions:i,startTime:h||r(),duration:i.duration,tweens:[],createTween:function(n,i){var s=t.Tween(e,p.opts,n,i,p.opts.specialEasing[n]||p.opts.easing);return p.tweens.push(s),s},stop:function(t){var n=0,i=t?p.tweens.length:0;if(a)return this;for(a=!0;i>n;n++)p.tweens[n].run(1);return t?d.resolveWith(e,[p,t]):d.rejectWith(e,[p,t]),this}}),g=p.props;for(u(g,p.opts.specialEasing);c>o;o++)if(s=v[o].call(p,e,g,p.opts))return s;return t.map(g,l,p),t.isFunction(p.opts.start)&&p.opts.start.call(e,p),t.fx.timer(t.extend(f,{elem:e,anim:p,queue:p.opts.queue})),p.progress(p.opts.progress).done(p.opts.done,p.opts.complete).fail(p.opts.fail).always(p.opts.always)}var h,f,p=/^(?:toggle|show|hide)$/,g=new RegExp("^(?:([+-])=|)("+e+")([a-z%]*)$","i"),m=/queueHooks$/,v=[c],_={"*":[function(e,n){var i=this.createTween(e,n),s=i.cur(),a=g.exec(n),r=a&&a[3]||(t.cssNumber[e]?"":"px"),o=(t.cssNumber[e]||"px"!==r&&+s)&&g.exec(t.css(i.elem,e)),l=1,c=20;if(o&&o[3]!==r){r=r||o[3],a=a||[],o=+s||1;do l=l||".5",o/=l,t.style(i.elem,e,o+r);while(l!==(l=i.cur()/s)&&1!==l&&--c)}return a&&(o=i.start=+o||+s||0,i.unit=r,i.end=a[1]?o+(a[1]+1)*a[2]:+a[2]),i}]};return t.Animation=t.extend(d,{tweener:function(e,n){t.isFunction(e)?(n=e,e=["*"]):e=e.split(" ");for(var i,s=0,a=e.length;a>s;s++)i=e[s],_[i]=_[i]||[],_[i].unshift(n)},prefilter:function(t,e){e?v.unshift(t):v.push(t)}}),t.speed=function(e,n,i){var s=e&&"object"==typeof e?t.extend({},e):{complete:i||!i&&n||t.isFunction(e)&&e,duration:e,easing:i&&n||n&&!t.isFunction(n)&&n};return s.duration=t.fx.off?0:"number"==typeof s.duration?s.duration:s.duration in t.fx.speeds?t.fx.speeds[s.duration]:t.fx.speeds._default,(null==s.queue||s.queue===!0)&&(s.queue="fx"),s.old=s.complete,s.complete=function(){t.isFunction(s.old)&&s.old.call(this),s.queue&&t.dequeue(this,s.queue)},s},t.fn.extend({fadeTo:function(t,e,n,s){return this.filter(i).css("opacity",0).show().end().animate({opacity:e},t,n,s)},animate:function(e,n,i,s){var r=t.isEmptyObject(e),o=t.speed(n,i,s),l=function(){var n=d(this,t.extend({},e),o);(r||a.get(this,"finish"))&&n.stop(!0)};return l.finish=l,r||o.queue===!1?this.each(l):this.queue(o.queue,l)},stop:function(e,n,i){var s=function(t){var e=t.stop;delete t.stop,e(i)};return"string"!=typeof e&&(i=n,n=e,e=void 0),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var n=!0,r=null!=e&&e+"queueHooks",o=t.timers,l=a.get(this);if(r)l[r]&&l[r].stop&&s(l[r]);else for(r in l)l[r]&&l[r].stop&&m.test(r)&&s(l[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(i),n=!1,o.splice(r,1));(n||!i)&&t.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var n,i=a.get(this),s=i[e+"queue"],r=i[e+"queueHooks"],o=t.timers,l=s?s.length:0;for(i.finish=!0,t.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),n=o.length;n--;)o[n].elem===this&&o[n].queue===e&&(o[n].anim.stop(!0),o.splice(n,1));for(n=0;l>n;n++)s[n]&&s[n].finish&&s[n].finish.call(this);delete i.finish})}}),t.each(["toggle","show","hide"],function(e,n){var i=t.fn[n];t.fn[n]=function(t,e,s){return null==t||"boolean"==typeof t?i.apply(this,arguments):this.animate(o(n,!0),t,e,s)}}),t.each({slideDown:o("show"),slideUp:o("hide"),slideToggle:o("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,n){t.fn[e]=function(t,e,i){return this.animate(n,t,e,i)}}),t.timers=[],t.fx.tick=function(){var e,n=0,i=t.timers;for(h=t.now();n<i.length;n++)e=i[n],e()||i[n]!==e||i.splice(n--,1);i.length||t.fx.stop(),h=void 0},t.fx.timer=function(e){t.timers.push(e),e()?t.fx.start():t.timers.pop()},t.fx.interval=13,t.fx.start=function(){f||(f=setInterval(t.fx.tick,t.fx.interval))},t.fx.stop=function(){clearInterval(f),f=null},t.fx.speeds={slow:600,fast:200,_default:400},t});