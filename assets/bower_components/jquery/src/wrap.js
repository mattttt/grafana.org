define(["./core","./core/init","./manipulation","./traversing"],function(t){return t.fn.extend({wrapAll:function(e){var n;return t.isFunction(e)?this.each(function(n){t(this).wrapAll(e.call(this,n))}):(this[0]&&(n=t(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this)},wrapInner:function(e){return t.isFunction(e)?this.each(function(n){t(this).wrapInner(e.call(this,n))}):this.each(function(){var n=t(this),r=n.contents();r.length?r.wrapAll(e):n.append(e)})},wrap:function(e){var n=t.isFunction(e);return this.each(function(r){t(this).wrapAll(n?e.call(this,r):e)})},unwrap:function(){return this.parent().each(function(){t.nodeName(this,"body")||t(this).replaceWith(this.childNodes)}).end()}}),t});