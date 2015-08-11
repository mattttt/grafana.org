define(["./core","./var/pnum","./css/var/cssExpand","./css/var/isHidden","./css/defaultDisplay","./data/var/data_priv","./core/init","./effects/Tween","./queue","./css","./deferred","./traversing"],function(e,t,n,r,i,o){function a(){return setTimeout(function(){d=void 0}),d=e.now()}function s(e,t){var r,i=0,o={height:e};for(t=t?1:0;4>i;i+=2-t)r=n[i],o["margin"+r]=o["padding"+r]=e;return t&&(o.opacity=o.width=e),o}function u(e,t,n){for(var r,i=(y[t]||[]).concat(y["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function l(t,n,a){var s,l,c,f,d,p,m,g,v=this,y={},b=t.style,x=t.nodeType&&r(t),w=o.get(t,"fxshow");a.queue||(d=e._queueHooks(t,"fx"),null==d.unqueued&&(d.unqueued=0,p=d.empty.fire,d.empty.fire=function(){d.unqueued||p()}),d.unqueued++,v.always(function(){v.always(function(){d.unqueued--,e.queue(t,"fx").length||d.empty.fire()})})),1===t.nodeType&&("height"in n||"width"in n)&&(a.overflow=[b.overflow,b.overflowX,b.overflowY],m=e.css(t,"display"),g="none"===m?o.get(t,"olddisplay")||i(t.nodeName):m,"inline"===g&&"none"===e.css(t,"float")&&(b.display="inline-block")),a.overflow&&(b.overflow="hidden",v.always(function(){b.overflow=a.overflow[0],b.overflowX=a.overflow[1],b.overflowY=a.overflow[2]}));for(s in n)if(l=n[s],h.exec(l)){if(delete n[s],c=c||"toggle"===l,l===(x?"hide":"show")){if("show"!==l||!w||void 0===w[s])continue;x=!0}y[s]=w&&w[s]||e.style(t,s)}else m=void 0;if(e.isEmptyObject(y))"inline"===("none"===m?i(t.nodeName):m)&&(b.display=m);else{w?"hidden"in w&&(x=w.hidden):w=o.access(t,"fxshow",{}),c&&(w.hidden=!x),x?e(t).show():v.done(function(){e(t).hide()}),v.done(function(){var n;o.remove(t,"fxshow");for(n in y)e.style(t,n,y[n])});for(s in y)f=u(x?w[s]:0,s,v),s in w||(w[s]=f.start,x&&(f.end=f.start,f.start="width"===s||"height"===s?1:0))}}function c(t,n){var r,i,o,a,s;for(r in t)if(i=e.camelCase(r),o=n[i],a=t[r],e.isArray(a)&&(o=a[1],a=t[r]=a[0]),r!==i&&(t[i]=a,delete t[r]),s=e.cssHooks[i],s&&"expand"in s){a=s.expand(a),delete t[i];for(r in a)r in t||(t[r]=a[r],n[r]=o)}else n[i]=o}function f(t,n,r){var i,o,s=0,l=v.length,f=e.Deferred().always(function(){delete p.elem}),p=function(){if(o)return!1;for(var e=d||a(),n=Math.max(0,h.startTime+h.duration-e),r=n/h.duration||0,i=1-r,s=0,u=h.tweens.length;u>s;s++)h.tweens[s].run(i);return f.notifyWith(t,[h,i,n]),1>i&&u?n:(f.resolveWith(t,[h]),!1)},h=f.promise({elem:t,props:e.extend({},n),opts:e.extend(!0,{specialEasing:{}},r),originalProperties:n,originalOptions:r,startTime:d||a(),duration:r.duration,tweens:[],createTween:function(n,r){var i=e.Tween(t,h.opts,n,r,h.opts.specialEasing[n]||h.opts.easing);return h.tweens.push(i),i},stop:function(e){var n=0,r=e?h.tweens.length:0;if(o)return this;for(o=!0;r>n;n++)h.tweens[n].run(1);return e?f.resolveWith(t,[h,e]):f.rejectWith(t,[h,e]),this}}),m=h.props;for(c(m,h.opts.specialEasing);l>s;s++)if(i=v[s].call(h,t,m,h.opts))return i;return e.map(m,u,h),e.isFunction(h.opts.start)&&h.opts.start.call(t,h),e.fx.timer(e.extend(p,{elem:t,anim:h,queue:h.opts.queue})),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always)}var d,p,h=/^(?:toggle|show|hide)$/,m=new RegExp("^(?:([+-])=|)("+t+")([a-z%]*)$","i"),g=/queueHooks$/,v=[l],y={"*":[function(t,n){var r=this.createTween(t,n),i=r.cur(),o=m.exec(n),a=o&&o[3]||(e.cssNumber[t]?"":"px"),s=(e.cssNumber[t]||"px"!==a&&+i)&&m.exec(e.css(r.elem,t)),u=1,l=20;if(s&&s[3]!==a){a=a||s[3],o=o||[],s=+i||1;do u=u||".5",s/=u,e.style(r.elem,t,s+a);while(u!==(u=r.cur()/i)&&1!==u&&--l)}return o&&(s=r.start=+s||+i||0,r.unit=a,r.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),r}]};return e.Animation=e.extend(f,{tweener:function(t,n){e.isFunction(t)?(n=t,t=["*"]):t=t.split(" ");for(var r,i=0,o=t.length;o>i;i++)r=t[i],y[r]=y[r]||[],y[r].unshift(n)},prefilter:function(e,t){t?v.unshift(e):v.push(e)}}),e.speed=function(t,n,r){var i=t&&"object"==typeof t?e.extend({},t):{complete:r||!r&&n||e.isFunction(t)&&t,duration:t,easing:r&&n||n&&!e.isFunction(n)&&n};return i.duration=e.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in e.fx.speeds?e.fx.speeds[i.duration]:e.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){e.isFunction(i.old)&&i.old.call(this),i.queue&&e.dequeue(this,i.queue)},i},e.fn.extend({fadeTo:function(e,t,n,i){return this.filter(r).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,n,r,i){var a=e.isEmptyObject(t),s=e.speed(n,r,i),u=function(){var n=f(this,e.extend({},t),s);(a||o.get(this,"finish"))&&n.stop(!0)};return u.finish=u,a||s.queue===!1?this.each(u):this.queue(s.queue,u)},stop:function(t,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof t&&(r=n,n=t,t=void 0),n&&t!==!1&&this.queue(t||"fx",[]),this.each(function(){var n=!0,a=null!=t&&t+"queueHooks",s=e.timers,u=o.get(this);if(a)u[a]&&u[a].stop&&i(u[a]);else for(a in u)u[a]&&u[a].stop&&g.test(a)&&i(u[a]);for(a=s.length;a--;)s[a].elem!==this||null!=t&&s[a].queue!==t||(s[a].anim.stop(r),n=!1,s.splice(a,1));(n||!r)&&e.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,r=o.get(this),i=r[t+"queue"],a=r[t+"queueHooks"],s=e.timers,u=i?i.length:0;for(r.finish=!0,e.queue(this,t,[]),a&&a.stop&&a.stop.call(this,!0),n=s.length;n--;)s[n].elem===this&&s[n].queue===t&&(s[n].anim.stop(!0),s.splice(n,1));for(n=0;u>n;n++)i[n]&&i[n].finish&&i[n].finish.call(this);delete r.finish})}}),e.each(["toggle","show","hide"],function(t,n){var r=e.fn[n];e.fn[n]=function(e,t,i){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(s(n,!0),e,t,i)}}),e.each({slideDown:s("show"),slideUp:s("hide"),slideToggle:s("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){e.fn[t]=function(e,t,r){return this.animate(n,e,t,r)}}),e.timers=[],e.fx.tick=function(){var t,n=0,r=e.timers;for(d=e.now();n<r.length;n++)t=r[n],t()||r[n]!==t||r.splice(n--,1);r.length||e.fx.stop(),d=void 0},e.fx.timer=function(t){e.timers.push(t),t()?e.fx.start():e.timers.pop()},e.fx.interval=13,e.fx.start=function(){p||(p=setInterval(e.fx.tick,e.fx.interval))},e.fx.stop=function(){clearInterval(p),p=null},e.fx.speeds={slow:600,fast:200,_default:400},e});