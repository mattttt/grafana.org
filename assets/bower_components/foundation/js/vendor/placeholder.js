!function(t,e,i){function s(t){var e={},s=/^jQuery\d+$/;return i.each(t.attributes,function(t,i){i.specified&&!s.test(i.name)&&(e[i.name]=i.value)}),e}function n(t,e){var s=this,n=i(s);if(s.value==n.attr("placeholder")&&n.hasClass("placeholder"))if(n.data("placeholder-password")){if(n=n.hide().next().show().attr("id",n.removeAttr("id").data("placeholder-id")),t===!0)return n[0].value=e;n.focus()}else s.value="",n.removeClass("placeholder"),s==o()&&s.select()}function a(){var t,e=this,a=i(e),o=this.id;if(""==e.value){if("password"==e.type){if(!a.data("placeholder-textinput")){try{t=a.clone().attr({type:"text"})}catch(r){t=i("<input>").attr(i.extend(s(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":a,"placeholder-id":o}).bind("focus.placeholder",n),a.data({"placeholder-textinput":t,"placeholder-id":o}).before(t)}a=a.removeAttr("id").hide().prev().attr("id",o).show()}a.addClass("placeholder"),a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")}function o(){try{return e.activeElement}catch(t){}}var r,l,d="[object OperaMini]"==Object.prototype.toString.call(t.operamini),c="placeholder"in e.createElement("input")&&!d,h="placeholder"in e.createElement("textarea")&&!d,u=i.fn,p=i.valHooks,f=i.propHooks;c&&h?(l=u.placeholder=function(){return this},l.input=l.textarea=!0):(l=u.placeholder=function(){var t=this;return t.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":a}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},l.input=c,l.textarea=h,r={get:function(t){var e=i(t),s=e.data("placeholder-password");return s?s[0].value:e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,e){var s=i(t),r=s.data("placeholder-password");return r?r[0].value=e:s.data("placeholder-enabled")?(""==e?(t.value=e,t!=o()&&a.call(t)):s.hasClass("placeholder")?n.call(t,!0,e)||(t.value=e):t.value=e,s):t.value=e}},c||(p.input=r,f.value=r),h||(p.textarea=r,f.value=r),i(function(){i(e).delegate("form","submit.placeholder",function(){var t=i(".placeholder",this).each(n);setTimeout(function(){t.each(a)},10)})}),i(t).bind("beforeunload.placeholder",function(){i(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);