define(["./core","./manipulation/var/rcheckableType","./core/init","./traversing","./attributes/prop"],function(t,e){function n(e,i,o,a){var s;if(t.isArray(i))t.each(i,function(t,i){o||r.test(e)?a(e,i):n(e+"["+("object"==typeof i?t:"")+"]",i,o,a)});else if(o||"object"!==t.type(i))a(e,i);else for(s in i)n(e+"["+s+"]",i[s],o,a)}var i=/%20/g,r=/\[\]$/,o=/\r?\n/g,a=/^(?:submit|button|image|reset|file)$/i,s=/^(?:input|select|textarea|keygen)/i;return t.param=function(e,r){var o,a=[],s=function(e,n){n=t.isFunction(n)?n():null==n?"":n,a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)};if(void 0===r&&(r=t.ajaxSettings&&t.ajaxSettings.traditional),t.isArray(e)||e.jquery&&!t.isPlainObject(e))t.each(e,function(){s(this.name,this.value)});else for(o in e)n(o,e[o],r,s);return a.join("&").replace(i,"+")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=t.prop(this,"elements");return e?t.makeArray(e):this}).filter(function(){var n=this.type;return this.name&&!t(this).is(":disabled")&&s.test(this.nodeName)&&!a.test(n)&&(this.checked||!e.test(n))}).map(function(e,n){var i=t(this).val();return null==i?null:t.isArray(i)?t.map(i,function(t){return{name:n.name,value:t.replace(o,"\r\n")}}):{name:n.name,value:i.replace(o,"\r\n")}}).get()}}),t});