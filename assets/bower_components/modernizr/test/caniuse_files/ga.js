!function(){function t(t){z.set(t)}function e(t){if(!t||""==t)return"";for(;t[l](0)[h]>0&&" \n\r	"[u](t[l](0))>-1;)t=t[b](1);for(;t[l](t[h]-1)[h]>0&&" \n\r	"[u](t[l](t[h]-1))>-1;)t=t[b](0,t[h]-1);return t}var n=void 0,i=encodeURIComponent,r=String,o=Math,s="push",a="cookie",l="charAt",u="indexOf",c="getTime",d="toString",f="window",h="length",p="document",m="split",g="location",v="protocol",y="href",b="substring",_="join",x="toLowerCase",w="_gat",C="_gaq",k="4.9.4",T="_gaUserPrefs",S="ioo",E="&",N="=",j="__utma=",F="__utmb=",A="__utmc=",M="__utmk=",D="__utmv=",O="__utmz=",q="__utmx=",L="GASO=",P=function(){var t=this,e=[],n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";t.set=function(t){e[t]=!0},t.Sc=function(){for(var t=[],i=0;i<e[h];i++)e[i]&&(t[o.floor(i/6)]^=1<<i%6);for(i=0;i<t[h];i++)t[i]=n[l](t[i]||0);return t[_]("")+"~"}},z=new P,I=function(t,e){var n=this;n.window=t,n.document=e,n.setTimeout=function(t,e){setTimeout(t,e)},n.Jb=function(t){return navigator.userAgent[u](t)>=0},n.Xc=function(){return n.Jb("Firefox")&&![].reduce},n.Vc=function(){return $[f][T]},n.Gc=function(){return $[f].external},n.Hc=function(){return $[f].performance||$[f].webkitPerformance},n.Ic=function(){return $[f].top==$[f]},n.Ya=function(t){var e=$[f]&&$[f].gaGlobal;return t&&!e&&(e={},$[f].gaGlobal=e),e},n.ec=function(t){$[p][g].href=t},n.qb=function(t){if(!t||!n.Jb("Firefox"))return t;for(var t=t.replace(/\n|\r/g," "),e=0,i=t[h];i>e;++e){var r=255&t.charCodeAt(e);(10==r||13==r)&&(t=t[b](0,e)+"?"+t[b](e+1))}return t}},$=new I(window,document),H=function(e){return function(n,i,r){return e[n]=function(){return t(i),r.apply(e,arguments)},r}},R=function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)},B=function(t){return"[object Array]"==Object.prototype[d].call(Object(t))},W=function(t){return n==t||"-"==t||""==t},X=function(t,e,n){var i,r="-";return!W(t)&&!W(e)&&!W(n)&&(i=t[u](e),i>-1&&(n=t[u](n,i),0>n&&(n=t[h]),r=t[b](i+e[u](N)+1,n))),r},U=function(t){var e,n,i=!1,r=0;if(!W(t))for(i=!0,e=0;e<t[h];e++)n=t[l](e),r+="."==n?1:0,i=i&&1>=r&&(0==e&&"-"==n||".0123456789"[u](n)>-1);return i},V=function(e,n){var r=i;return r instanceof Function?n?encodeURI(e):r(e):(t(68),escape(e))},Y=function(e,n){var i,r=decodeURIComponent,e=e[m]("+")[_](" ");if(r instanceof Function)try{i=n?decodeURI(e):r(e)}catch(o){t(17),i=unescape(e)}else t(68),i=unescape(e);return i},G=function(t,e){return t[u](e)>-1},Q=function(e,n){e[s]||t(94),e[e[h]]=n},J=function(t){var e,n=1,i=0;if(!W(t))for(n=0,e=t[h]-1;e>=0;e--)i=t.charCodeAt(e),n=(n<<6&268435455)+i+(i<<14),i=266338304&n,n=0!=i?n^i>>21:n;return n},K=function(){return o.round(2147483647*o.random())},Z=function(){},tt=function(t,e){this.ib=t,this.jb=e},et=function(){function t(t){for(var e,n=[],t=t[m](","),i=0;i<t[h];i++)e=t[i][m](":"),n[s](new tt(e[0],e[1]));return n}var e=this;e.Ca="utm_campaign",e.Da="utm_content",e.Ea="utm_id",e.Fa="utm_medium",e.Ga="utm_nooverride",e.Ha="utm_source",e.Ia="utm_term",e.Ja="gclid",e.vc="dclid",e.U=0,e.w=0,e.La=15768e6,e.Ma=18e5,e.s=63072e6,e.V=[],e.W=[],e.wc="cse",e.xc="q",e.Ta=50,e.J=t("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words"),e.f="/",e.L=100,e.ga="/__utm.gif",e.la=1,e.ma=1,e.u="|",e.ka=1,e.Ka=1,e.Ua=1,e.b="auto",e.B=1,e.Wb=10,e.zc=10,e.Ac=.2,e.o=n},nt=function(e){function n(t,e,n,i){var r="",s=0,r=X(t,"2"+e,";");if(!W(r)){if(t=r[u]("^"+n+"."),0>t)return["",0];r=r[b](t+n[h]+2),r[u]("^")>0&&(r=r[m]("^")[0]),n=r[m](":"),r=n[1],s=parseInt(n[0],10),!i&&s<o.m&&(r="")}return W(r)&&(r=""),[r,s]}function i(t,e){return"^"+[[e,t[1]][_]("."),t[0]][_](":")}function r(t){var e=new Date,t=new Date(e[c]()+t);return"expires="+t.toGMTString()+"; "}var o=this,s=e;o.m=(new Date)[c]();var l=[j,F,A,O,D,q,L];o.g=function(){var t=$[p][a];return s.o?o.Nc(t,s.o):t},o.Nc=function(t,e){for(var i,r=[],o=0;o<l[h];o++)i=n(t,l[o],e)[0],W(i)||(r[r[h]]=l[o]+i+";");return r[_]("")},o.l=function(e,n,i){var l=i>0?r(i):"";s.o&&(n=o.Oc($[p][a],e,s.o,n,i),e="2"+e,l=i>0?r(s.s):""),e+=n,e=$.qb(e),e[h]>2e3&&(t(69),e=e[b](0,2e3)),l=e+"; path="+s.f+"; "+l+o.hb(),bt.pb()||($[p].cookie=l)},o.Oc=function(t,e,r,a,l){var u="",l=l||s.s,a=i([a,o.m+1*l],r),u=X(t,"2"+e,";");return W(u)?a:(t=i(n(t,e,r,!0),r),u=u[m](t)[_](""),u=a+u)},o.hb=function(){return W(s.b)?"":"domain="+s.b+";"}},it=function(t){function e(t){return t=B(t)?t[_]("."):"",W(t)?"-":t}function i(t,e){var n,i=[];if(!W(t)&&(i=t[m]("."),e))for(n=0;n<i[h];n++)U(i[n])||(i[n]="-");return i}function o(t,e,n){var i,r,o=g.I;for(i=0;i<o[h];i++)r=o[i][0],r+=W(e)?e:e+o[i][4],o[i][2](X(t,r,n))}var s,a,l,u,c,d,f,p,g=this,v=t;g.i=new nt(t),g.Ba=function(){return n==p||p==g.K()},g.g=function(){return g.i.g()},g.ea=function(){return c?c:"-"},g.Pa=function(t){c=t},g.fa=function(t){p=U(t)?1*t:"-"},g.da=function(){return e(d)},g.X=function(t){d=i(t)},g.yc=function(){g.i.l(D,"",-1)},g.Rb=function(){return p?p:"-"},g.hb=function(){return W(v.b)?"":"domain="+v.b+";"},g.ba=function(){return e(s)},g.Na=function(t){s=i(t,1)},g.z=function(){return e(a)},g.$=function(t){a=i(t,1)},g.ca=function(){return e(l)},g.Oa=function(t){l=i(t,1)},g.qa=function(){return e(u)},g.ra=function(t){for(u=i(t),t=0;t<u[h];t++)4>t&&!U(u[t])&&(u[t]="-")},g.Fc=function(){return f},g.Dc=function(t){f=t},g.Qb=function(){s=[],a=[],l=[],u=[],c=n,d=[],p=n},g.K=function(){for(var t="",e=0;e<g.I[h];e++)t+=g.I[e][1]();return J(t)},g.Z=function(t){var e=g.g(),n=!1;return e&&(o(e,t,";"),g.fa(r(g.K())),n=!0),n},g.Sb=function(t){o(t,"",E),g.fa(X(t,M,E))},g.Tb=function(){var t,e=g.I,n=[];for(t=0;t<e[h];t++)Q(n,e[t][0]+e[t][1]());return Q(n,M+g.K()),n[_](E)},g.Ub=function(t,e){var n=g.I,i=v.f;g.Z(t),v.f=e;for(var r=0;r<n[h];r++)W(n[r][1]())||n[r][3]();v.f=i},g.Qa=function(){g.i.l(j,g.ba(),v.s)},g.aa=function(){g.i.l(F,g.z(),v.Ma)},g.Ra=function(){g.i.l(A,g.ca(),0)},g.sa=function(){g.i.l(O,g.qa(),v.La)},g.Sa=function(){g.i.l(q,g.ea(),v.s)},g.Y=function(){g.i.l(D,g.da(),v.s)},g.Ec=function(){g.i.l(L,g.Fc(),0)},g.I=[[j,g.ba,g.Na,g.Qa,"."],[F,g.z,g.$,g.aa,""],[A,g.ca,g.Oa,g.Ra,""],[q,g.ea,g.Pa,g.Sa,""],[O,g.qa,g.ra,g.sa,"."],[D,g.da,g.X,g.Y,"."]]},rt="https:"==$[p][g][v]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/",ot=rt+"p/__utm.gif",st=function(){var t=this;t.Bb=function(e,n,i,r,o){n[h]<=2036||o?t.Aa(e+"?"+n,r):n[h]<=8192?$.Xc()?t.Aa(e+"?"+i+"&err=ff2post&len="+n[h],r):t.fd(n,r):t.Aa(e+"?"+i+"&err=len&max=8192&len="+n[h],r)},t.Aa=function(t,e){var n=new Image(1,1);n.src=t,n.onload=function(){n.onload=null,(e||Z)()}},t.fd=function(e,n){t.ed(e,n)||t.Ob(e,n)},t.ed=function(t,e){var n,i=$[f].XDomainRequest;return i?(n=new i,n.open("POST",ot)):(i=$[f].XMLHttpRequest)&&(i=new i,"withCredentials"in i&&(n=i,n.open("POST",ot,!0),n.setRequestHeader("Content-Type","text/plain"))),n?(n.onreadystatechange=function(){4==n.readyState&&(e&&e(),n=null)},n.send(t),!0):!1},t.Ob=function(e,n){var r=$[p];if(r.body){e=i(e);try{var o=r.createElement('<iframe name="'+e+'"></iframe>')}catch(s){o=r.createElement("iframe"),o.name=e}o.height="0",o.width="0",o.style.display="none",o.style.visibility="hidden";var a=r[g],a=a[v]+"//"+a.host+"/favicon.ico",a=rt+"u/post_iframe.html#"+i(a),l=function(){o.src="",o.parentNode&&o.parentNode.removeChild(o)};R($[f],"beforeunload",l);var u=!1,c=0,d=function(){if(!u){try{if(c>9||o.contentWindow[g].host==r[g].host){u=!0,l();var t=$[f],e="beforeunload",i=l;return t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i),void(n&&n())}}catch(s){}c++,$.setTimeout(d,200)}};R(o,"load",d),r.body.appendChild(o),o.src=a}else $.setTimeout(function(){t.Ob(e,n)},100)}},at=function(t){var e=this,n=t,i=new it(n),r=null,s=!bt.pb(),a=function(){};e.Uc=function(){return"https:"==$[p][g][v]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif"},e.A=function(t,l,u,d,f,h){r||(r=new st);var v=n.B,y=$[p][g];i.Z(u);var b=i.z()[m](".");if(b[1]<500||d){if(f){var x,w=(new Date)[c]();x=(w-b[3])*(n.Ac/1e3),x>=1&&(b[2]=o.min(o.floor(1*b[2]+x),n.zc),b[3]=w)}(d||!f||b[2]>=1)&&(!d&&f&&(b[2]=1*b[2]-1),d=1*b[1]+1,b[1]=d,f="utmwv="+k,w="&utms="+d,x="&utmn="+K(),d=f+"e"+w+x,t=f+w+x+(W(y.hostname)?"":"&utmhn="+V(y.hostname))+(100==n.L?"":"&utmsp="+V(n.L))+t,(0==v||2==v)&&(y=2==v?a:h||a,s&&r.Bb(n.ga,t,d,y,!0)),(1==v||2==v)&&(l="&utmac="+l,d+=l,t+=l+"&utmcc="+e.Tc(u),bt.Ab&&(u="&aip=1",d+=u,t+=u),t+="&utmu="+z.Sc(),s&&r.Bb(e.Uc(),t,d,h)))}i.$(b[_](".")),i.aa()},e.Tc=function(t){for(var e,n=[],r=[j,O,D,q],o=i.g(),s=0;s<r[h];s++)if(e=X(o,r[s]+t,";"),!W(e)){if(r[s]==D){if(e=e[m](t+".")[1][m]("|")[0],W(e))continue;e=t+"."+e}Q(n,r[s]+e+";")}return V(n[_]("+"))}},lt=function(){var t=this;t.N=[],t.Va=function(e){for(var n,i=t.N,r=0;r<i[h];r++)n=e==i[r].q?i[r]:n;return n},t.Xb=function(e,i,r,o,s,a,l,u){var c=t.Va(e);return n==c?(c=new lt.Wc(e,i,r,o,s,a,l,u),Q(t.N,c)):(c.tb=i,c.zb=r,c.yb=o,c.wb=s,c.ub=a,c.xb=l,c.vb=u),c}};lt.Qc=function(t,e,n,i,r,o){var s=this;s.Fb=t,s.va=e,s.n=n,s.Cb=i,s.Db=r,s.Eb=o,s.ha=function(){return"&"+["utmt=item","tid="+V(s.Fb),"ipc="+V(s.va),"ipn="+V(s.n),"iva="+V(s.Cb),"ipr="+V(s.Db),"iqt="+V(s.Eb)][_]("&utm")}},lt.Wc=function(t,e,i,r,o,s,a,l){var u=this;u.q=t,u.tb=e,u.zb=i,u.yb=r,u.wb=o,u.ub=s,u.xb=a,u.vb=l,u.M=[],u.Vb=function(t,e,i,r,o){var s=u.Rc(t),a=u.q;n==s?Q(u.M,new lt.Qc(a,t,e,i,r,o)):(s.Fb=a,s.va=t,s.n=e,s.Cb=i,s.Db=r,s.Eb=o)},u.Rc=function(t){for(var e,n=u.M,i=0;i<n[h];i++)e=t==n[i].va?n[i]:e;return e},u.ha=function(){return"&"+["utmt=tran","id="+V(u.q),"st="+V(u.tb),"to="+V(u.zb),"tx="+V(u.yb),"sp="+V(u.wb),"ci="+V(u.ub),"rg="+V(u.xb),"co="+V(u.vb)][_]("&utmt")}};var ut=function(t){function e(){var t,e,i;e="ShockwaveFlash";var o="$version",s=$[f].navigator;if((s=s?s.plugins:n)&&s[h]>0)for(t=0;t<s[h]&&!i;t++)e=s[t],G(e.name,"Shockwave Flash")&&(i=e.description[m]("Shockwave Flash ")[1]);else{e=e+"."+e;try{t=new ActiveXObject(e+".7"),i=t.GetVariable(o)}catch(a){}if(!i)try{t=new ActiveXObject(e+".6"),i="WIN 6,0,21,0",t.we="always",i=t.GetVariable(o)}catch(l){}if(!i)try{t=new ActiveXObject(e),i=t.GetVariable(o)}catch(u){}i&&(i=i[m](" ")[1][m](","),i=i[0]+"."+i[1]+" r"+i[2])}return i?i:r}var i=this,r="-",o=$[f].screen,s=$[f].navigator;i.Nb=o?o.width+"x"+o.height:r,i.Mb=o?o.colorDepth+"-bit":r,i.cd=V($[p].characterSet?$[p].characterSet:$[p].charset?$[p].charset:r),i.Lb=(s&&s.language?s.language:s&&s.browserLanguage?s.browserLanguage:r)[x](),i.Kb=s&&s.javaEnabled()?1:0,i.dd=t?e():r,i.dc=function(){return E+"utm"+["cs="+V(i.cd),"sr="+i.Nb,"sc="+i.Mb,"ul="+i.Lb,"je="+i.Kb,"fl="+V(i.dd)][_]("&utm")},i.cc=function(){for(var t=$[f].navigator,e=$[f].history[h],t=t.appName+t.version+i.Lb+t.platform+t.userAgent+i.Kb+i.Nb+i.Mb+($[p][a]?$[p][a]:"")+($[p].referrer?$[p].referrer:""),n=t[h];e>0;)t+=e--^n++;return J(t)}},ct=function(t,e,i,r){function o(t){var e="",e=t[m]("://")[1][x]();return G(e,"/")&&(e=e[m]("/")[0]),e}var s=r,a=this;a.a=t,a.ob=e,a.m=i,a.mb=function(t){var e=a.ua();return new ct.v(X(t,s.Ea+N,E),X(t,s.Ha+N,E),X(t,s.Ja+N,E),a.R(t,s.Ca,"(not set)"),a.R(t,s.Fa,"(not set)"),a.R(t,s.Ia,e&&!W(e.G)?Y(e.G):n),a.R(t,s.Da,n),X(t,s.vc+N,E))},a.nb=function(t){var e,n=o(t);e=t;var i="";return e=e[m]("://")[1][x](),G(e,"/")&&(e=e[m]("/")[1],G(e,"?")&&(i=e[m]("?")[0])),e=i,G(n,"google")&&(t=t[m]("?")[_](E),G(t,E+s.xc+N)&&e==s.wc)?!0:!1},a.ua=function(){var t,e,i=a.ob,r=s.J;if(!W(i)&&"0"!=i&&G(i,"://")&&!a.nb(i)){t=o(i);for(var l=0;l<r[h];l++)if(e=r[l],G(t,e.ib[x]())&&(i=i[m]("?")[_](E),G(i,E+e.jb+N)))return t=i[m](E+e.jb+N)[1],G(t,E)&&(t=t[m](E)[0]),new ct.v(n,e.ib,n,"(organic)","organic",t,n,n)}},a.R=function(t,e,n){return t=X(t,e+N,E),n=W(t)?W(n)?"-":n:Y(t)},a.Bc=function(t){var e=s.V,n=!1;if(t&&"organic"==t.P)for(var t=Y(t.G)[x](),i=0;i<e[h];i++)n=n||e[i][x]()==t;return n},a.lb=function(){var t="",e="",t=a.ob;return W(t)||"0"==t||!G(t,"://")||a.nb(t)?void 0:(t=t[m]("://")[1],G(t,"/")&&(e=t[b](t[u]("/")),e=e[m]("?")[0],t=t[m]("/")[0][x]()),0==t[u]("www.")&&(t=t[b](4)),new ct.v(n,t,n,"(referral)","referral",n,e,n))},a.kb=function(t){var e="";return s.U&&(e=t&&t.hash?t[y][b](t[y][u]("#")):"",e=""!=e?e+E:e),e+=t.search},a.ta=function(){return new ct.v(n,"(direct)",n,"(direct)","(none)",n,n,n)},a.Cc=function(t){var e=!1,n=s.W;if(t&&"referral"==t.P)for(var t=V(t.Q)[x](),i=0;i<n[h];i++)e=e||G(t,n[i][x]());return e},a.h=function(t){return n!=t&&t.fb()},a.te=function(t){var t=X(t,O+a.a+".",";"),e=t[m]("."),t=new ct.v;return t.gb(e.slice(4)[_](".")),a.h(t)?(e=$[p][g],e=a.kb(e),e=a.mb(e),a.h(e)||(e=a.ua(),a.h(e)||(e=a.lb())),a.h(e)&&t.H()[x]()!=e.H()[x]()):!0},a.Pb=function(t,e){if(s.Ka){var n,i,r,o="",l="-",u=0,c=a.a;if(t){if(r=t.g(),o=a.kb($[p][g]),s.w&&t.Ba()&&(l=Y(t.qa()),!W(l)&&!G(l,";")))return t.ra(l),void t.sa();if(l=X(r,O+c+".",";"),n=a.mb(o),a.h(n)&&(o=X(o,s.Ga+N,E),"1"==o&&!W(l)))return;if(!a.h(n)){if(n=a.ua(),o=a.Bc(n),!W(l)&&o)return;o&&(n=a.ta())}if(!a.h(n)&&e){if(n=a.lb(),o=a.Cc(n),!W(l)&&o)return;o&&(n=a.ta())}a.h(n)||W(l)&&e&&(n=a.ta()),a.h(n)&&(W(l)||(u=l[m]("."),i=new ct.v,i.gb(u.slice(4)[_](".")),i=i.H()[x]()==n.H()[x](),u=1*u[3]),!i||e)&&(r=X(r,j+c+".",";"),i=r.lastIndexOf("."),r=i>9?1*r[b](i+1):0,u++,r=0==r?1:r,t.ra([c,a.m,r,u,n.H()][_](".")),t.sa())}}}};ct.v=function(t,e,n,i,r,o,s,a){var l=this;l.q=t,l.Q=e,l.ya=n,l.n=i,l.P=r,l.G=o,l.Gb=s,l.xa=a,l.H=function(){var t,e,n=[],i=[["cid",l.q],["csr",l.Q],["gclid",l.ya],["ccn",l.n],["cmd",l.P],["ctr",l.G],["cct",l.Gb],["dclid",l.xa]];if(l.fb())for(t=0;t<i[h];t++)W(i[t][1])||(e=i[t][1][m]("+")[_]("%20"),e=e[m](" ")[_]("%20"),Q(n,"utm"+i[t][0]+N+e));return $.qb(n[_]("|"))},l.fb=function(){return!(W(l.q)&&W(l.Q)&&W(l.ya)&&W(l.xa))},l.gb=function(t){var e=function(e){return Y(X(t,"utm"+e+N,"|"))};l.q=e("cid"),l.Q=e("csr"),l.ya=e("gclid"),l.n=e("ccn"),l.P=e("cmd"),l.G=e("ctr"),l.Gb=e("cct"),l.xa=e("dclid")}};var dt=function(t,e,n,i){var r=this,o=e,s=N,a=t,l=i;r.S=n,r.wa="",r.r={},r.$b=function(){var t;if(t=X(r.S.g(),D+o+".",";")[m](o+".")[1],!W(t)){t=t[m]("|");var e,n=r.r,i=t[1];if(!W(i))for(var i=i[m](","),a=0;a<i[h];a++)e=i[a],W(e)||(e=e[m](s),4==e[h]&&(n[e[0]]=[Y(e[1]),Y(e[2]),1]));r.wa=Y(t[0]),r.T()}},r.T=function(){r.Pc();var t,e,n=V(r.wa),i="";for(t in r.r)(e=r.r[t])&&1===e[2]&&(i+=t+s+V(e[0])+s+V(e[1])+s+1+",");W(i)||(n+="|"+i),W(n)?r.S.yc():(r.S.X(o+"."+n),r.S.Y())},r.bc=function(t){r.wa=t,r.T()},r.ac=function(t,e,n,i){1!=i&&2!=i&&3!=i&&(i=3);var o=!1;if(e&&n&&t>0&&t<=a.Ta){var s=V(e),l=V(n);s[h]+l[h]<=64&&(r.r[t]=[e,n,i],r.T(),o=!0)}return o},r.Zb=function(t){return(t=r.r[t])&&1===t[2]?t[1]:void 0},r.Yb=function(t){var e=r.r;e[t]&&(delete e[t],r.T())},r.Pc=function(){l.t(8),l.t(9),l.t(11);var t,e,n=r.r;for(e in n)(t=n[e])&&(l.j(8,e,t[0]),l.j(9,e,t[1]),(t=t[2])&&3!=t&&l.j(11,e,""+t))}},ft=function(){function t(t,e,i,r){n==u[t]&&(u[t]={}),n==u[t][e]&&(u[t][e]=[]),u[t][e][i]=r}function e(t,e,i){return n!=u[t]&&n!=u[t][e]?u[t][e][i]:void 0}function i(t,e){if(n!=u[t]&&n!=u[t][e]){u[t][e]=n;var i,r=!0;for(i=0;i<p[h];i++)if(n!=u[t][p[i]]){r=!1;break}r&&(u[t]=n)}}function r(t){var e,i,r="",o=!1;for(e=0;e<p[h];e++)if(i=t[p[e]],n!=i){o&&(r+=p[e]);for(var o=[],s=n,a=n,a=0;a<i[h];a++)if(n!=i[a]){s="",a!=w&&n==i[a-1]&&(s+=a[d]()+y);var u;u=i[a];for(var c="",f=n,b=n,C=n,f=0;f<u[h];f++)b=u[l](f),C=x[b],c+=n!=C?C:b;u=c,s+=u,Q(o,s)}i=m+o[_](v)+g,r+=i,o=!1}else o=!0;return r}var s=this,a=H(s),u={},c="k",f="v",p=[c,f],m="(",g=")",v="*",y="!",b="'",x={};x[b]="'0",x[g]="'1",x[v]="'2",x[y]="'3";var w=1;s.Yc=function(t){return n!=u[t]},s.C=function(){var t,e="";for(t in u)n!=u[t]&&(e+=t[d]()+r(u[t]));return e},s.hc=function(t){if(t==n)return s.C();var e,i=t.C();for(e in u)n!=u[e]&&!t.Yc(e)&&(i+=e[d]()+r(u[e]));return i},s.j=a("_setKey",89,function(e,n,i){return"string"!=typeof i?!1:(t(e,c,n,i),!0)}),s.ja=a("_setValue",90,function(e,i,r){return("number"==typeof r||n!=Number&&r instanceof Number)&&o.round(r)==r&&NaN!=r&&r!=1/0?(t(e,f,i,r[d]()),!0):!1}),s.fc=a("_getKey",87,function(t,n){return e(t,c,n)}),s.gc=a("_getValue",88,function(t,n){return e(t,f,n)}),s.t=a("_clearKey",85,function(t){i(t,c)}),s.ia=a("_clearValue",86,function(t){i(t,f)})},ht=function(t,e){var n=this,i=H(n);n.ze=e,n.gd=t,n.Za=i("_trackEvent",91,function(t,i,r){return e.Za(n.gd,t,i,r)})},pt=function(t,e){var i=this,r=$.Gc(),s=$.Hc(),a=10;i.rb=new ft,i.Kc=function(){var t,e="timing",i="onloadT";return r&&r[i]!=n&&r.isValidLoadTime?t=r[i]:s&&s[e]&&(t=s[e].loadEventStart-s[e].fetchStart),t},i.Mc=function(){return t.D()&&t.Xa()%100<a},i.Lc=function(){var n="&utmt=event&utme="+V(i.rb.C())+t.na();e.A(n,t.p,t.a,!1,!0)},i.Jc=function(t){return t=o.min(o.floor(t/100),5e3),t>0?t+"00":"0"},i.sb=function(){var t=i.Kc();if(t==n||isNaN(t))return!1;if(0>=t)return!0;if(t>2147483648)return!1;var e=i.rb;e.t(14),e.ia(14);var o=i.Jc(t);return e.j(14,1,o)&&e.ja(14,1,t)&&i.Lc(),r&&r.isValidLoadTime!=n&&r.setPageReadyTime(),!1},i.Wa=function(){return i.Mc()&&$.Ic()?(i.sb()&&R($[f],"load",i.sb,!1),!0):!1}},mt=function(){};mt.Zc=function(t){var e="gaso=",n=$[p][g].hash;return t=n&&1==n[u](e)?X(n,e,E):(n=$[f].name)&&0<=n[u](e)?X(n,e,E):X(t.g(),L,";")},mt.ad=function(t,e){var n=(e||"www")+".google.com",n="https://"+n+"/analytics/reporting/overlay_js?gaso="+t+E+K(),i="_gasojs",r=$[p].createElement("script");r.type="text/javascript",r.src=n,i&&(r.id=i),($[p].getElementsByTagName("head")[0]||$[p].getElementsByTagName("body")[0]).appendChild(r)},mt.load=function(t,e){if(!mt.$c){var n=mt.Zc(e),i=n&&n.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);i&&(e.Dc(n),e.Ec(),bt._gasoDomain=t.b,bt._gasoCPath=t.f,mt.ad(i[2],i[1])),mt.$c=!0}};var gt=function(i,s,a){function d(){if("auto"==D.b){var t=$[p].domain;"www."==t[b](0,4)&&(t=t[b](4)),D.b=t}D.b=D.b[x]()}function w(){d();var t=D.b,e=t[u]("www.google.")*t[u](".google.")*t[u]("google.");return e||"/"!=D.f||t[u]("google.org")>-1}function C(t,e,n){return W(t)||W(e)||W(n)?"-":(t=X(t,j+S.a+".",e),W(t)||(t=t[m]("."),t[5]=""+(t[5]?1*t[5]+1:1),t[3]=t[4],t[4]=n,t=t[_](".")),t)}function T(){return"file:"!=$[p][g][v]&&w()}var S=this,N=H(S),M=n,D=new et,O=!1,q=n;S.n=i,S.m=o.round((new Date)[c]()/1e3),S.p=s||"UA-XXXXX-X",S.ab=$[p].referrer,S.oa=n,S.d=n,S.F=!1,S.O=n,S.e=n,S.bb=n,S.pa=n,S.a=n,S.k=n,D.o=a?V(a):n,S.eb=!1,S.mc=function(){return K()^2147483647&S.O.cc()},S.lc=function(){return D.b&&""!=D.b&&"none"!=D.b?(d(),D.Ua?J(D.b):1):(D.b="",1)},S.kc=function(t,e){if(W(t))t="-";else{e+=D.f&&"/"!=D.f?D.f:"";var n=t[u](e),t=n>=0&&8>=n?"0":"["==t[l](0)&&"]"==t[l](t[h]-1)?"-":t}return t},S.na=function(t){var e="";e+=D.ka?S.O.dc():"",e+=D.la&&!W($[p].title)?"&utmdt="+V($[p].title):"";var n;return n=$.Ya(!0),n.hid||(n.hid=K()),n=n.hid,e+="&utmhid="+n+"&utmr="+V(r(S.oa))+"&utmp="+V(S.pc(t))},S.pc=function(e){var i=$[p][g];return e&&t(13),e=n!=e&&""!=e?V(e,!0):V(i.pathname+i.search,!0)},S.uc=function(t){if(S.D()){var e="";S.e!=n&&S.e.C()[h]>0&&(e+="&utme="+V(S.e.C())),e+=S.na(t),M.A(e,S.p,S.a)}},S.jc=function(){var t=new it(D);return t.Z(S.a)?t.Tb():n},S.cb=N("_getLinkerUrl",52,function(t,e){var n=t[m]("#"),i=t,r=S.jc();return r&&(e&&1>=n[h]?i+="#"+r:(!e||1>=n[h])&&(1>=n[h]?i+=(G(t,"?")?E:"?")+r:i=n[0]+(G(t,"?")?E:"?")+r+"#"+n[1])),i}),S.nc=function(){var t,e,i=S.m,o=S.k,s=o.g(),a=S.a+"",l=$.Ya(),c=G(s,j+a+"."),d=G(s,F+a),h=G(s,A+a),v=[],x="",w=!1,s=W(s)?"":s;if(D.w&&!S.eb){t=$[p][g]&&$[p][g].hash?$[p][g][y][b]($[p][g][y][u]("#")):"",D.U&&!W(t)&&(x=t+E),x+=$[p][g].search,!W(x)&&G(x,j)&&(o.Sb(x),o.Ba()||o.Qb(),e=o.ba(),S.eb=!0),t=o.ea;var k=o.Pa,T=o.Sa;W(t())||(k(Y(t())),G(t(),";")||T()),t=o.da,k=o.X,T=o.Y,W(t())||(k(t()),G(t(),";")||T())}W(e)?c?(e=!d||!h)?(e=C(s,";",r(i)),S.F=!0):(e=X(s,j+a+".",";"),v=X(s,F+a,";")[m](".")):(e=[a,S.mc(),i,i,i,1][_]("."),w=S.F=!0):W(o.z())||W(o.ca())?(e=C(x,E,r(i)),S.F=!0):(v=o.z()[m]("."),a=v[0]),e=e[m]("."),$[f]&&l&&l.dh==a&&!D.o&&(e[4]=l.sid?l.sid:e[4],w&&(e[3]=l.sid?l.sid:e[4],l.vid&&(i=l.vid[m]("."),e[1]=i[0],e[2]=i[1]))),o.Na(e[_](".")),v[0]=a,v[1]=v[1]?v[1]:0,v[2]=n!=v[2]?v[2]:D.Wb,v[3]=v[3]?v[3]:e[4],o.$(v[_](".")),o.Oa(a),W(o.Rb())||o.fa(o.K()),o.Qa(),o.aa(),o.Ra()},S.oc=function(){M=new at(D)},S.getName=N("_getName",58,function(){return S.n}),S.c=N("_initData",2,function(){var t;O||(S.O||(S.O=new ut(D.ma)),S.a=S.lc(),S.k=new it(D),S.e=new ft,q=new dt(D,r(S.a),S.k,S.e),S.oc()),T()&&(O||(S.oa=S.kc(S.ab,$[p].domain),t=new ct(r(S.a),S.oa,S.m,D)),S.nc(t),q.$b()),O||(T()&&t.Pb(S.k,S.F),S.bb=new ft,mt.load(D,S.k),O=!0)}),S.Xa=N("_visitCode",54,function(){S.c();var t=X(S.k.g(),j+S.a+".",";"),t=t[m](".");return t[h]<4?"":t[1]}),S.qd=N("_cookiePathCopy",30,function(t){S.c(),S.k&&S.k.Ub(S.a,t)}),S.D=function(){return S.Xa()%1e4<100*D.L},S.re=N("_trackPageview",1,function(t){T()&&(S.c(),S.uc(t),S.F=!1)}),S.se=N("_trackTrans",18,function(){var t,e,n,i=S.a,r=[];if(S.c(),S.d&&S.D()){for(t=0;t<S.d.N[h];t++)for(e=S.d.N[t],Q(r,e.ha()),n=0;n<e.M[h];n++)Q(r,e.M[n].ha());for(t=0;t<r[h];t++)M.A(r[t],S.p,i,!0)}}),S.me=N("_setTrans",20,function(){var t,i,r,o;if(t=$[p].getElementById?$[p].getElementById("utmtrans"):$[p].utmform&&$[p].utmform.utmtrans?$[p].utmform.utmtrans:n,S.c(),t&&t.value)for(S.d=new lt,o=t.value[m]("UTM:"),D.u=D.u&&""!=D.u?D.u:"|",t=0;t<o[h];t++){for(o[t]=e(o[t]),i=o[t][m](D.u),r=0;r<i[h];r++)i[r]=e(i[r]);"T"==i[0]?S.$a(i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]):"I"==i[0]&&S.ic(i[1],i[2],i[3],i[4],i[5],i[6])}}),S.$a=N("_addTrans",21,function(t,e,n,i,r,o,s,a){return S.d=S.d?S.d:new lt,S.d.Xb(t,e,n,i,r,o,s,a)}),S.ic=N("_addItem",19,function(t,e,n,i,r,o){var s;S.d=S.d?S.d:new lt,(s=S.d.Va(t))||(s=S.$a(t,"","","","","","","")),s.Vb(e,n,i,r,o)}),S.oe=N("_setVar",22,function(t){t&&""!=t&&w()&&(S.c(),q.bc(t),S.D()&&M.A("&utmt=var",S.p,S.a))}),S.Yd=N("_setCustomVar",10,function(t,e,n,i){return S.c(),q.ac(t,e,n,i)}),S.td=N("_deleteCustomVar",35,function(t){S.c(),q.Yb(t)}),S.Cd=N("_getVisitorCustomVar",50,function(t){return S.c(),q.Zb(t)}),S.fe=N("_setMaxCustomVariables",71,function(t){D.Ta=t}),S.link=N("_link",101,function(t,e){D.w&&t&&(S.c(),$.ec(S.cb(t,e)))}),S.Fd=N("_linkByPost",102,function(t,e){D.w&&t&&t.action&&(S.c(),t.action=S.cb(t.action,e))}),S.pe=N("_setXKey",83,function(t,e,n){S.e.j(t,e,n)}),S.qe=N("_setXValue",84,function(t,e,n){S.e.ja(t,e,n)}),S.Dd=N("_getXKey",76,function(t,e){return S.e.fc(t,e)}),S.Ed=N("_getXValue",77,function(t,e){return S.e.gc(t,e)}),S.od=N("_clearXKey",72,function(t){S.e.t(t)}),S.pd=N("_clearXValue",73,function(t){S.e.ia(t)}),S.sd=N("_createXObj",75,function(){return S.c(),new ft}),S.qc=N("_sendXEvent",78,function(t){var e="";S.c(),S.D()&&(e+="&utmt=event&utme="+V(S.e.hc(t))+S.na(),M.A(e,S.p,S.a,!1,!0))}),S.rd=N("_createEventTracker",74,function(t){return S.c(),new ht(t,S)}),S.Za=N("_trackEvent",4,function(t,e,i,r){S.c();var o=S.bb;return n!=t&&n!=e&&""!=t&&""!=e?(o.t(5),o.ia(5),(t=o.j(5,1,t)&&o.j(5,2,e)&&(n==i||o.j(5,3,i))&&(n==r||o.ja(5,1,r)))&&S.qc(o)):t=!1,t}),S.Wa=N("_trackPageLoadTime",100,function(){return S.c(),S.pa||(S.pa=new pt(S,M)),S.pa.Wa()}),S.wd=function(){return D},S.ae=N("_setDomainName",6,function(t){D.b=t}),S.kd=N("_addOrganic",14,function(t,e,n){D.J.splice(n?0:D.J[h],0,new tt(t,e))}),S.nd=N("_clearOrganic",70,function(){D.J=[]}),S.hd=N("_addIgnoredOrganic",15,function(t){Q(D.V,t)}),S.ld=N("_clearIgnoredOrganic",97,function(){D.V=[]}),S.jd=N("_addIgnoredRef",31,function(t){Q(D.W,t)}),S.md=N("_clearIgnoredRef",32,function(){D.W=[]}),S.Id=N("_setAllowHash",8,function(t){D.Ua=t?1:0}),S.Td=N("_setCampaignTrack",36,function(t){D.Ka=t?1:0}),S.Ud=N("_setClientInfo",66,function(t){D.ka=t?1:0}),S.vd=N("_getClientInfo",53,function(){return D.ka}),S.Vd=N("_setCookiePath",9,function(t){D.f=t}),S.ne=N("_setTransactionDelim",82,function(t){D.u=t}),S.Xd=N("_setCookieTimeout",25,function(t){S.rc(1e3*t)}),S.rc=N("_setCampaignCookieTimeout",29,function(t){D.La=t}),S.Zd=N("_setDetectFlash",61,function(t){D.ma=t?1:0}),S.xd=N("_getDetectFlash",65,function(){return D.ma}),S.$d=N("_setDetectTitle",62,function(t){D.la=t?1:0}),S.yd=N("_getDetectTitle",56,function(){return D.la}),S.ce=N("_setLocalGifPath",46,function(t){D.ga=t}),S.zd=N("_getLocalGifPath",57,function(){return D.ga}),S.ee=N("_setLocalServerMode",92,function(){D.B=0}),S.ie=N("_setRemoteServerMode",63,function(){D.B=1}),S.de=N("_setLocalRemoteServerMode",47,function(){D.B=2}),S.Ad=N("_getServiceMode",59,function(){return D.B}),S.je=N("_setSampleRate",45,function(t){D.L=t}),S.ke=N("_setSessionTimeout",27,function(t){S.sc(1e3*t)}),S.sc=N("_setSessionCookieTimeout",26,function(t){D.Ma=t}),S.Jd=N("_setAllowLinker",11,function(t){D.w=t?1:0}),S.Hd=N("_setAllowAnchor",7,function(t){D.U=t?1:0}),S.Qd=N("_setCampNameKey",41,function(t){D.Ca=t}),S.Md=N("_setCampContentKey",38,function(t){D.Da=t}),S.Nd=N("_setCampIdKey",39,function(t){D.Ea=t}),S.Od=N("_setCampMediumKey",40,function(t){D.Fa=t}),S.Pd=N("_setCampNOKey",42,function(t){D.Ga=t}),S.Rd=N("_setCampSourceKey",43,function(t){D.Ha=t}),S.Sd=N("_setCampTermKey",44,function(t){D.Ia=t}),S.Ld=N("_setCampCIdKey",37,function(t){D.Ja=t}),S.ud=N("_getAccount",64,function(){return S.p}),S.Gd=N("_setAccount",3,function(t){S.p=t}),S.ge=N("_setNamespace",48,function(t){D.o=t?V(t):n}),S.Bd=N("_getVersion",60,function(){return k}),S.Kd=N("_setAutoTrackOutbound",79,Z),S.le=N("_setTrackOutboundSubdomains",81,Z),S.be=N("_setHrefExamineLimit",80,Z),S.he=N("_setReferrerOverride",49,function(t){S.ab=t}),S.Wd=N("_setCookiePersistence",24,function(t){S.tc(t)}),S.tc=N("_setVisitorCookieTimeout",28,function(t){D.s=t})},vt=function(){var e=this,i=H(e);e.Ab=!1,e.Ib={},e.bd=0,e._gasoDomain=n,e._gasoCPath=n,e.ve=i("_getTracker",0,function(t,i){return e.za(t,n,i)}),e.za=i("_createTracker",55,function(e,i,r){return i&&t(23),r&&t(67),i==n&&(i="~"+bt.bd++),bt.Ib[i]=new gt(i,e,r)}),e.Hb=i("_getTrackerByName",51,function(t){return t=t||"",bt.Ib[t]||bt.za(n,t)}),e.pb=function(){var t=$.Vc();return t&&t[S]&&t[S]()},e.ue=i("_anonymizeIp",16,function(){e.Ab=!0})},yt=function(){var e=this,n=H(e);e.xe=n("_createAsyncTracker",33,function(t,e){return bt.za(t,e||"")}),e.ye=n("_getAsyncTracker",34,function(t){return bt.Hb(t)}),e.push=function(){t(5);for(var e=arguments,n=0,i=0;i<e[h];i++)try{if("function"==typeof e[i])e[i]();else{var r="",o=e[i][0],s=o.lastIndexOf(".");s>0&&(r=o[b](0,s),o=o[b](s+1));var a=r==w?bt:r==C?xt:bt.Hb(r);a[o].apply(a,e[i].slice(1))}}catch(l){n++}return n}},bt=new vt,_t=$[f][w];_t&&"function"==typeof _t._getTracker?bt=_t:$[f][w]=bt;var xt=new yt,wt=$[f][C],Ct=!1;(!wt||"function"!=typeof wt[s]||(Ct=B(wt)))&&($[f][C]=xt,Ct&&xt[s].apply(xt,wt))}();