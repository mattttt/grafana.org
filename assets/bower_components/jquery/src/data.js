define(["./core","./var/rnotwhite","./core/access","./data/var/data_priv","./data/var/data_user"],function(e,t,n,r,i){function o(t,n,r){var o;if(void 0===r&&1===t.nodeType)if(o="data-"+n.replace(s,"-$1").toLowerCase(),r=t.getAttribute(o),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:a.test(r)?e.parseJSON(r):r}catch(u){}i.set(t,n,r)}else r=void 0;return r}var a=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,s=/([A-Z])/g;return e.extend({hasData:function(e){return i.hasData(e)||r.hasData(e)},data:function(e,t,n){return i.access(e,t,n)},removeData:function(e,t){i.remove(e,t)},_data:function(e,t,n){return r.access(e,t,n)},_removeData:function(e,t){r.remove(e,t)}}),e.fn.extend({data:function(t,a){var s,u,l,c=this[0],f=c&&c.attributes;if(void 0===t){if(this.length&&(l=i.get(c),1===c.nodeType&&!r.get(c,"hasDataAttrs"))){for(s=f.length;s--;)f[s]&&(u=f[s].name,0===u.indexOf("data-")&&(u=e.camelCase(u.slice(5)),o(c,u,l[u])));r.set(c,"hasDataAttrs",!0)}return l}return"object"==typeof t?this.each(function(){i.set(this,t)}):n(this,function(n){var r,a=e.camelCase(t);if(c&&void 0===n){if(r=i.get(c,t),void 0!==r)return r;if(r=i.get(c,a),void 0!==r)return r;if(r=o(c,a,void 0),void 0!==r)return r}else this.each(function(){var e=i.get(this,a);i.set(this,a,n),-1!==t.indexOf("-")&&void 0!==e&&i.set(this,t,n)})},null,a,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){i.remove(this,e)})}}),e});