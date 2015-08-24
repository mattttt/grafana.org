define(["../core","../var/rnotwhite","../var/strundefined","../data/var/data_priv","../core/init"],function(t,e,n,i){var s=/[\t\r\n\f]/g;t.fn.extend({addClass:function(n){var i,r,a,o,l,c,u="string"==typeof n&&n,d=0,f=this.length;if(t.isFunction(n))return this.each(function(e){t(this).addClass(n.call(this,e,this.className))});if(u)for(i=(n||"").match(e)||[];f>d;d++)if(r=this[d],a=1===r.nodeType&&(r.className?(" "+r.className+" ").replace(s," "):" ")){for(l=0;o=i[l++];)a.indexOf(" "+o+" ")<0&&(a+=o+" ");c=t.trim(a),r.className!==c&&(r.className=c)}return this},removeClass:function(n){var i,r,a,o,l,c,u=0===arguments.length||"string"==typeof n&&n,d=0,f=this.length;if(t.isFunction(n))return this.each(function(e){t(this).removeClass(n.call(this,e,this.className))});if(u)for(i=(n||"").match(e)||[];f>d;d++)if(r=this[d],a=1===r.nodeType&&(r.className?(" "+r.className+" ").replace(s," "):"")){for(l=0;o=i[l++];)for(;a.indexOf(" "+o+" ")>=0;)a=a.replace(" "+o+" "," ");c=n?t.trim(a):"",r.className!==c&&(r.className=c)}return this},toggleClass:function(s,r){var a=typeof s;return"boolean"==typeof r&&"string"===a?r?this.addClass(s):this.removeClass(s):t.isFunction(s)?this.each(function(e){t(this).toggleClass(s.call(this,e,this.className,r),r)}):this.each(function(){if("string"===a)for(var r,o=0,l=t(this),c=s.match(e)||[];r=c[o++];)l.hasClass(r)?l.removeClass(r):l.addClass(r);else(a===n||"boolean"===a)&&(this.className&&i.set(this,"__className__",this.className),this.className=this.className||s===!1?"":i.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(s," ").indexOf(e)>=0)return!0;return!1}})});