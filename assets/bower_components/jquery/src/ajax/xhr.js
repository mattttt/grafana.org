define(["../core","../var/support","../ajax"],function(e,t){e.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var n=0,r={},i={0:200,1223:204},o=e.ajaxSettings.xhr();window.attachEvent&&window.attachEvent("onunload",function(){for(var e in r)r[e]()}),t.cors=!!o&&"withCredentials"in o,t.ajax=o=!!o,e.ajaxTransport(function(e){var a;return t.cors||o&&!e.crossDomain?{send:function(t,o){var s,u=e.xhr(),l=++n;if(u.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)u[s]=e.xhrFields[s];e.mimeType&&u.overrideMimeType&&u.overrideMimeType(e.mimeType),e.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest");for(s in t)u.setRequestHeader(s,t[s]);a=function(e){return function(){a&&(delete r[l],a=u.onload=u.onerror=null,"abort"===e?u.abort():"error"===e?o(u.status,u.statusText):o(i[u.status]||u.status,u.statusText,"string"==typeof u.responseText?{text:u.responseText}:void 0,u.getAllResponseHeaders()))}},u.onload=a(),u.onerror=a("error"),a=r[l]=a("abort");try{u.send(e.hasContent&&e.data||null)}catch(c){if(a)throw c}},abort:function(){a&&a()}}:void 0})});