function dumpModernizr(){var e="";dumpModernizr.old=dumpModernizr.old||{};for(var t in Modernizr)if(!dumpModernizr.old[t]&&(dumpModernizr.old[t]=!0,"function"!=typeof Modernizr[t]&&!/^test/.test(t)))if(~TEST.inputs.indexOf(t)){e+="<li><b>"+t+"{}</b><ul>";for(var n in Modernizr[t])e+='<li class="'+(Modernizr[t][n]?"yes":"")+'">'+n+": "+Modernizr[t][n]+"</li>";e+="</ul></li>"}else e+='<li  id="'+t+'" class="'+(Modernizr[t]?"yes":"")+'">'+t+": "+Modernizr[t]+"</li>";return e}function grabFeatDetects(){$.getScript("https://api.github.com/repos/Modernizr/Modernizr/git/trees/master?recursive=1&callback=processTree")}function processTree(e){for(var t=[],n=0;n<e.data.tree.length;n++){var i=e.data.tree[n],r=i.path.match(/^feature-detects\/(.*)/);if(r){var o="modernizr.github.com"==location.host?"../modernizr-git/":"../";t.push(o+r[0])}}var a=t.map(function(e){return jQuery.getScript(e)});jQuery.when.apply(jQuery,a).done(resultsToDOM)}function resultsToDOM(){var e=document.createElement("div"),t=document.getElementById("qunit-testresult")||document.getElementById("qunit-tests");e.className="output",e.innerHTML=dumpModernizr(),t.parentNode.insertBefore(e,t),document.getElementsByTagName("textarea")[0].innerHTML=JSON.stringify(Modernizr)}resultsToDOM(),grabFeatDetects(),setTimeout(resultsToDOM,5e3),setTimeout(resultsToDOM,15e3);