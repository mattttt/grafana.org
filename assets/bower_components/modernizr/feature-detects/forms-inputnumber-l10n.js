Modernizr.addTest("localizedNumber",function(){var t,e,n,i,r=document,o=document.createElement("div");e=r.body||function(){var e=r.documentElement;return t=!0,e.insertBefore(r.createElement("body"),e.firstElementChild||e.firstChild)}(),o.innerHTML='<input type="number" value="1.0" step="0.1"/>',n=o.childNodes[0],e.appendChild(o),n.focus();try{r.execCommand("InsertText",!1,"1,1")}catch(s){}return i="number"===n.type&&1.1===n.valueAsNumber&&n.checkValidity(),e.removeChild(o),t&&e.parentNode.removeChild(e),i});