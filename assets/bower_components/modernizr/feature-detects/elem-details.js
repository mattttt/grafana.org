Modernizr.addTest("details",function(){var e,t,n,i=document,o=i.createElement("details");return"open"in o?(t=i.body||function(){var t=i.documentElement;return e=!0,t.insertBefore(i.createElement("body"),t.firstElementChild||t.firstChild)}(),o.innerHTML="<summary>a</summary>b",o.style.display="block",t.appendChild(o),n=o.offsetHeight,o.open=!0,n=n!=o.offsetHeight,t.removeChild(o),e&&t.parentNode.removeChild(t),n):!1});