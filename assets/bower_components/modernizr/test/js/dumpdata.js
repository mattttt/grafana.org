function dumpModernizr(){var t="";dumpModernizr.old=dumpModernizr.old||{};for(var e in Modernizr)if(!dumpModernizr.old[e]&&(dumpModernizr.old[e]=!0,"function"!=typeof Modernizr[e]&&!/^test/.test(e)))if(~TEST.inputs.indexOf(e)){t+="<li><b>"+e+"{}</b><ul>";for(var i in Modernizr[e])t+='<li class="'+(Modernizr[e][i]?"yes":"")+'">'+i+": "+Modernizr[e][i]+"</li>";t+="</ul></li>"}else t+='<li  id="'+e+'" class="'+(Modernizr[e]?"yes":"")+'">'+e+": "+Modernizr[e]+"</li>";return t}function grabFeatDetects(){$.getScript("https://api.github.com/repos/Modernizr/Modernizr/git/trees/master?recursive=1&callback=processTree")}function processTree(t){for(var e=[],i=0;i<t.data.tree.length;i++){var n=t.data.tree[i],s=n.path.match(/^feature-detects\/(.*)/);if(s){var a="modernizr.github.com"==location.host?"../modernizr-git/":"../";e.push(a+s[0])}}var o=e.map(function(t){return jQuery.getScript(t)});jQuery.when.apply(jQuery,o).done(resultsToDOM)}function resultsToDOM(){var t=document.createElement("div"),e=document.getElementById("qunit-testresult")||document.getElementById("qunit-tests");t.className="output",t.innerHTML=dumpModernizr(),e.parentNode.insertBefore(t,e),document.getElementsByTagName("textarea")[0].innerHTML=JSON.stringify(Modernizr)}resultsToDOM(),grabFeatDetects(),setTimeout(resultsToDOM,5e3),setTimeout(resultsToDOM,15e3);