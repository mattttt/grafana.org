/*! http://mths.be/placeholder v2.0.8 by @mathias */
!function(e,t,n){function r(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function i(e,t){var r=this,i=n(r);if(r.value==i.attr("placeholder")&&i.hasClass("placeholder"))if(i.data("placeholder-password")){if(i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id")),e===!0)return i[0].value=t;i.focus()}else r.value="",i.removeClass("placeholder"),r==a()&&r.select()}function o(){var e,t=this,o=n(t),a=this.id;if(""==t.value){if("password"==t.type){if(!o.data("placeholder-textinput")){try{e=o.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":o,"placeholder-id":a}).bind("focus.placeholder",i),o.data({"placeholder-textinput":e,"placeholder-id":a}).before(e)}o=o.removeAttr("id").hide().prev().attr("id",a).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}function a(){try{return t.activeElement}catch(e){}}var s,u,l="[object OperaMini]"==Object.prototype.toString.call(e.operamini),c="placeholder"in t.createElement("input")&&!l,f="placeholder"in t.createElement("textarea")&&!l,d=n.fn,p=n.valHooks,h=n.propHooks;c&&f?(u=d.placeholder=function(){return this},u.input=u.textarea=!0):(u=d.placeholder=function(){var e=this;return e.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},u.input=c,u.textarea=f,s={get:function(e){var t=n(e),r=t.data("placeholder-password");return r?r[0].value:t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e),s=r.data("placeholder-password");return s?s[0].value=t:r.data("placeholder-enabled")?(""==t?(e.value=t,e!=a()&&o.call(e)):r.hasClass("placeholder")?i.call(e,!0,t)||(e.value=t):e.value=t,r):e.value=t}},c||(p.input=s,h.value=s),f||(p.textarea=s,h.value=s),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(i);setTimeout(function(){e.each(o)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);