import{S as e,i as t,s,e as n,t as a,k as r,c as l,a as i,g as o,d as c,n as h,b as m,f,D as p,h as d,E as g,H as u,I as v,J as $,F as y,K as w,L as x,G as b,v as S,r as k,M as I,z as E,N as j,O as T,j as M,m as C,o as L,w as P,P as A,p as D,q as H,B as V,u as O,A as N,Q as B,R as z,T as G}from"../chunks/vendor-8e63c5de.js";function R(e){let t,s,u,v,$,y;return{c(){t=n("a"),s=n("h2"),u=a(e[0]),v=r(),$=n("p"),y=a(e[1]),this.h()},l(n){t=l(n,"A",{href:!0,class:!0});var a=i(t);s=l(a,"H2",{class:!0});var r=i(s);u=o(r,e[0]),r.forEach(c),v=h(a),$=l(a,"P",{class:!0});var m=i($);y=o(m,e[1]),m.forEach(c),a.forEach(c),this.h()},h(){m(s,"class","font-mono text-xl font-bold text-cyan"),m($,"class","text-xs md:text-base font-mono"),m(t,"href",e[2]),m(t,"class","flex flex-col items-center justify-center flex-1 py-10 transition transform bg-dark-gray-lighter hover:-translate-y-6")},m(e,n){f(e,t,n),p(t,s),p(s,u),p(t,v),p(t,$),p($,y)},p(e,[s]){1&s&&d(u,e[0]),2&s&&d(y,e[1]),4&s&&m(t,"href",e[2])},i:g,o:g,d(e){e&&c(t)}}}function q(e,t,s){let{title:n=""}=t,{subtitle:a=""}=t,{href:r=""}=t;return e.$$set=e=>{"title"in e&&s(0,n=e.title),"subtitle"in e&&s(1,a=e.subtitle),"href"in e&&s(2,r=e.href)},[n,a,r]}class J extends e{constructor(e){super(),t(this,e,q,R,s,{title:0,subtitle:1,href:2})}}function U(e,t,s){const n=e.slice();return n[6]=t[s][0],n[7]=t[s][1],n}function F(e,t,s){const n=e.slice();return n[10]=t[s],n}function W(e){let t,s=e[10]+"";return{c(){t=n("li"),this.h()},l(e){t=l(e,"LI",{class:!0}),i(t).forEach(c),this.h()},h(){m(t,"class","mb-2 list-disc list-inside")},m(e,n){f(e,t,n),t.innerHTML=s},p(e,n){32&n&&s!==(s=e[10]+"")&&(t.innerHTML=s)},d(e){e&&c(t)}}}function Y(e){let t,s,g,v,$,y=e[6]+"",w=e[7],x=[];for(let n=0;n<w.length;n+=1)x[n]=W(F(e,w,n));return{c(){t=n("h3"),s=a(y),g=r(),v=n("ul");for(let e=0;e<x.length;e+=1)x[e].c();$=r(),this.h()},l(e){t=l(e,"H3",{class:!0});var n=i(t);s=o(n,y),n.forEach(c),g=h(e),v=l(e,"UL",{});var a=i(v);for(let t=0;t<x.length;t+=1)x[t].l(a);$=h(a),a.forEach(c),this.h()},h(){m(t,"class","font-mono text-xl font-bold text-yellow")},m(e,n){f(e,t,n),p(t,s),f(e,g,n),f(e,v,n);for(let t=0;t<x.length;t+=1)x[t].m(v,null);p(v,$)},p(e,t){if(32&t&&y!==(y=e[6]+"")&&d(s,y),32&t){let s;for(w=e[7],s=0;s<w.length;s+=1){const n=F(e,w,s);x[s]?x[s].p(n,t):(x[s]=W(n),x[s].c(),x[s].m(v,$))}for(;s<x.length;s+=1)x[s].d(1);x.length=w.length}},d(e){e&&c(t),e&&c(g),e&&c(v),u(x,e)}}}function Q(e){let t,s,v,$,y,w,x,b,S,k,I,E,j,T,M,C,L,P=Object.entries(e[5]),A=[];for(let n=0;n<P.length;n+=1)A[n]=Y(U(e,P,n));return{c(){t=n("li"),s=n("img"),$=r(),y=n("div"),w=n("div"),x=n("h2"),b=a(e[0]),S=r(),k=n("p"),I=a(e[2]),E=a(" – "),j=a(e[3]),T=r(),M=n("p"),C=a(e[1]),L=r();for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(n){t=l(n,"LI",{class:!0});var a=i(t);s=l(a,"IMG",{src:!0,alt:!0,class:!0}),$=h(a),y=l(a,"DIV",{class:!0});var r=i(y);w=l(r,"DIV",{});var m=i(w);x=l(m,"H2",{class:!0});var f=i(x);b=o(f,e[0]),f.forEach(c),S=h(m),k=l(m,"P",{class:!0});var p=i(k);I=o(p,e[2]),E=o(p," – "),j=o(p,e[3]),p.forEach(c),m.forEach(c),T=h(r),M=l(r,"P",{});var d=i(M);C=o(d,e[1]),d.forEach(c),L=h(r);for(let e=0;e<A.length;e+=1)A[e].l(r);r.forEach(c),a.forEach(c),this.h()},h(){s.src!==(v=e[4])&&m(s,"src",v),m(s,"alt",e[0]),m(s,"class","flex-shrink-0 w-32 h-32"),m(x,"class","font-mono text-xl font-bold"),m(k,"class","font-mono italic text-gray-400"),m(y,"class","space-y-4 leading-7"),m(t,"class","flex p-6 space-x-6 bg-dark-gray-lighter")},m(e,n){f(e,t,n),p(t,s),p(t,$),p(t,y),p(y,w),p(w,x),p(x,b),p(w,S),p(w,k),p(k,I),p(k,E),p(k,j),p(y,T),p(y,M),p(M,C),p(y,L);for(let t=0;t<A.length;t+=1)A[t].m(y,null)},p(e,[t]){if(16&t&&s.src!==(v=e[4])&&m(s,"src",v),1&t&&m(s,"alt",e[0]),1&t&&d(b,e[0]),4&t&&d(I,e[2]),8&t&&d(j,e[3]),2&t&&d(C,e[1]),32&t){let s;for(P=Object.entries(e[5]),s=0;s<P.length;s+=1){const n=U(e,P,s);A[s]?A[s].p(n,t):(A[s]=Y(n),A[s].c(),A[s].m(y,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=P.length}},i:g,o:g,d(e){e&&c(t),u(A,e)}}}function K(e,t,s){let{name:n=""}=t,{description:a=""}=t,{start:r=""}=t,{end:l="today"}=t,{imageSrc:i=""}=t,{details:o={}}=t;return e.$$set=e=>{"name"in e&&s(0,n=e.name),"description"in e&&s(1,a=e.description),"start"in e&&s(2,r=e.start),"end"in e&&s(3,l=e.end),"imageSrc"in e&&s(4,i=e.imageSrc),"details"in e&&s(5,o=e.details)},[n,a,r,l,i,o]}class X extends e{constructor(e){super(),t(this,e,K,Q,s,{name:0,description:1,start:2,end:3,imageSrc:4,details:5})}}const Z=["░","▒","▓","█"],_=(e,t,s)=>e.slice(0,t)+s+e.slice(t+1),ee=(e,t)=>(e.innerText=t,{update(t){((e,t,s)=>{const n=Math.max(t.length,s.length);e.innerText=e.innerText.padEnd(n," ");const a=s.padEnd(n," ");for(let r=0;r<n;r++){const t=1e3*Math.random();setTimeout((()=>{e.innerText=_(e.innerText,r,Z[r%Z.length])}),t),setTimeout((()=>{e.innerText=_(e.innerText,r,a[r])}),2*t)}setTimeout((()=>{e.innerText=s}),2050)})(e,e.innerText,t)}});function te(e){let t,s,a,r;return{c(){t=n("span"),this.h()},l(e){t=l(e,"SPAN",{class:!0}),i(t).forEach(c),this.h()},h(){m(t,"class",e[0])},m(n,l){f(n,t,l),a||(r=v(s=ee.call(null,t,e[1])),a=!0)},p(e,[n]){1&n&&m(t,"class",e[0]),s&&$(s.update)&&2&n&&s.update.call(null,e[1])},i:g,o:g,d(e){e&&c(t),a=!1,r()}}}function se(e,t,s){let{texts:n=[]}=t,{interval:a=3e3}=t,r=0,l=n[r];setInterval((()=>{r=(r+1)%n.length,s(1,l=n[r])}),a);let{class:i=""}=t;return e.$$set=e=>{"texts"in e&&s(2,n=e.texts),"interval"in e&&s(3,a=e.interval),"class"in e&&s(0,i=e.class)},[i,l,n,a]}class ne extends e{constructor(e){super(),t(this,e,se,te,s,{texts:2,interval:3,class:0})}}function ae(e){let t,s,d,u,v,$,y,w,x,b,S,k,I,E,j,T;return{c(){t=n("section"),s=n("h1"),d=a("Bryan Lee (bryanmylee)"),u=r(),v=n("p"),$=a("I am a computer geek with a passion for software development."),y=r(),w=n("p"),x=a("I build tools and scripts that solve real-world problems."),b=r(),S=n("a"),k=a("Check them out here."),I=r(),E=n("img"),this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=i(t);s=l(n,"H1",{class:!0});var a=i(s);d=o(a,"Bryan Lee (bryanmylee)"),a.forEach(c),u=h(n),v=l(n,"P",{});var r=i(v);$=o(r,"I am a computer geek with a passion for software development."),r.forEach(c),y=h(n),w=l(n,"P",{});var m=i(w);x=o(m,"I build tools and scripts that solve real-world problems."),m.forEach(c),b=h(n),S=l(n,"A",{href:!0,class:!0});var f=i(S);k=o(f,"Check them out here."),f.forEach(c),I=h(n),E=l(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(c),this.h()},h(){m(s,"class","font-mono text-4xl font-bold text-yellow"),m(S,"href","#projects"),m(S,"class","block font-mono text-2xl font-bold text-cyan hover:underline"),E.src!==(j="profile.png")&&m(E,"src","profile.png"),m(E,"alt","profile"),m(E,"class","absolute right-0 bottom-0 w-[300px] hidden md:block"),m(t,"class",T=e[0]+" bg-dark-gray-lighter relative p-8 space-y-8")},m(e,n){f(e,t,n),p(t,s),p(s,d),p(t,u),p(t,v),p(v,$),p(t,y),p(t,w),p(w,x),p(t,b),p(t,S),p(S,k),p(t,I),p(t,E)},p(e,[s]){1&s&&T!==(T=e[0]+" bg-dark-gray-lighter relative p-8 space-y-8")&&m(t,"class",T)},i:g,o:g,d(e){e&&c(t)}}}function re(e,t,s){let{class:n=""}=t;return e.$$set=e=>{"class"in e&&s(0,n=e.class)},[n]}class le extends e{constructor(e){super(),t(this,e,re,ae,s,{class:0})}}function ie(e){let t,s,u,v,$,y,w,x,b,S,k,I;return{c(){t=n("li"),s=n("a"),u=n("div"),v=n("img"),y=r(),w=n("div"),x=n("h2"),b=a(e[0]),S=r(),k=n("p"),I=a(e[1]),this.h()},l(n){t=l(n,"LI",{});var a=i(t);s=l(a,"A",{href:!0,class:!0});var r=i(s);u=l(r,"DIV",{class:!0});var m=i(u);v=l(m,"IMG",{src:!0,alt:!0,class:!0}),m.forEach(c),y=h(r),w=l(r,"DIV",{class:!0});var f=i(w);x=l(f,"H2",{class:!0});var p=i(x);b=o(p,e[0]),p.forEach(c),S=h(f),k=l(f,"P",{class:!0});var d=i(k);I=o(d,e[1]),d.forEach(c),f.forEach(c),r.forEach(c),a.forEach(c),this.h()},h(){v.src!==($=e[2])&&m(v,"src",$),m(v,"alt",e[0]),m(v,"class","w-full h-full"),m(u,"class","flex-shrink-0 w-32 h-32 p-2 bg-dark-gray-lighter"),m(x,"class","font-mono text-xl font-bold"),m(k,"class","leading-7"),m(w,"class","space-y-2"),m(s,"href",e[3]),m(s,"class","flex space-x-6 transition transform hover:-translate-y-4")},m(e,n){f(e,t,n),p(t,s),p(s,u),p(u,v),p(s,y),p(s,w),p(w,x),p(x,b),p(w,S),p(w,k),p(k,I)},p(e,[t]){4&t&&v.src!==($=e[2])&&m(v,"src",$),1&t&&m(v,"alt",e[0]),1&t&&d(b,e[0]),2&t&&d(I,e[1]),8&t&&m(s,"href",e[3])},i:g,o:g,d(e){e&&c(t)}}}function oe(e,t,s){let{name:n=""}=t,{description:a=""}=t,{imageSrc:r=""}=t,{href:l=""}=t;return e.$$set=e=>{"name"in e&&s(0,n=e.name),"description"in e&&s(1,a=e.description),"imageSrc"in e&&s(2,r=e.imageSrc),"href"in e&&s(3,l=e.href)},[n,a,r,l]}class ce extends e{constructor(e){super(),t(this,e,oe,ie,s,{name:0,description:1,imageSrc:2,href:3})}}function he(e){let t,s,a,r;const o=e[16].default,h=y(o,e,e[15],null);return{c(){t=n("div"),h&&h.c(),this.h()},l(e){t=l(e,"DIV",{style:!0});var s=i(t);h&&h.l(s),s.forEach(c),this.h()},h(){w(t,"transform","translate("+e[5](e[1])+"px, "+e[5](e[2])+"px) scale("+e[6](e[1],e[2])+")")},m(n,l){f(n,t,l),h&&h.m(t,null),e[17](t),s=!0,a||(r=[x(window,"mousemove",e[3]),x(window,"scroll",e[4]),x(window,"resize",e[4])],a=!0)},p(e,[n]){h&&h.p&&(!s||32768&n)&&b(h,o,e,e[15],n,null,null),(!s||6&n)&&w(t,"transform","translate("+e[5](e[1])+"px, "+e[5](e[2])+"px) scale("+e[6](e[1],e[2])+")")},i(e){s||(S(h,e),s=!0)},o(e){k(h,e),s=!1},d(s){s&&c(t),h&&h.d(s),e[17](null),a=!1,I(r)}}}function me(e,t,s){let n,a,{$$slots:r={},$$scope:l}=t,i=0,o=0,c=0,h=0;let m;const f=()=>{const{left:e,top:t,width:n,height:a}=m.getBoundingClientRect();s(11,i=e+n/2),s(12,o=t+a/2)};E(f);let{mouseSensitivity:p=3}=t,{mouseLimit:d=1e3}=t;const g=e=>Math.min(1,Math.abs(e)/d*p);let{translateEffect:u=0}=t,{scaleEffect:v=.2}=t;return e.$$set=e=>{"mouseSensitivity"in e&&s(7,p=e.mouseSensitivity),"mouseLimit"in e&&s(8,d=e.mouseLimit),"translateEffect"in e&&s(9,u=e.translateEffect),"scaleEffect"in e&&s(10,v=e.scaleEffect),"$$scope"in e&&s(15,l=e.$$scope)},e.$$.update=()=>{10240&e.$$.dirty&&s(1,n=c-i),20480&e.$$.dirty&&s(2,a=h-o)},[m,n,a,e=>{s(13,c=e.clientX),s(14,h=e.clientY)},f,e=>j(g(e))*u*(e>0?1:-1),(e,t)=>1-v*j(g(((e,t)=>Math.sqrt(e*e+t*t))(e,t))),p,d,u,v,i,o,c,h,l,r,function(e){T[e?"unshift":"push"]((()=>{m=e,s(0,m)}))}]}class fe extends e{constructor(e){super(),t(this,e,me,he,s,{mouseSensitivity:7,mouseLimit:8,translateEffect:9,scaleEffect:10})}}function pe(e){let t,s,g,u,$,y,w,x,b,S;return{c(){t=n("div"),s=n("h2"),g=a(e[0]),u=r(),$=n("p"),y=a(e[1]),w=r(),x=n("div"),this.h()},l(n){t=l(n,"DIV",{class:!0});var a=i(t);s=l(a,"H2",{class:!0});var r=i(s);g=o(r,e[0]),r.forEach(c),u=h(a),$=l(a,"P",{class:!0});var m=i($);y=o(m,e[1]),m.forEach(c),w=h(a),x=l(a,"DIV",{"data-popper-arrow":!0,class:!0}),i(x).forEach(c),a.forEach(c),this.h()},h(){m(s,"class","font-mono text-xl font-bold text-yellow"),m($,"class","leading-7"),m(x,"data-popper-arrow",""),m(x,"class","absolute border border-white w-0 h-[50px]"),m(t,"class","fixed z-10 p-4 space-y-2 w-80 bg-dark-gray-lighter")},m(n,a){f(n,t,a),p(t,s),p(s,g),p(t,u),p(t,$),p($,y),p(t,w),p(t,x),b||(S=v(e[5].call(null,t)),b=!0)},p(e,t){1&t&&d(g,e[0]),2&t&&d(y,e[1])},d(e){e&&c(t),b=!1,S()}}}function de(e){let t,s,a,r;return{c(){t=n("img"),this.h()},l(e){t=l(e,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){t.src!==(s=e[2])&&m(t,"src",s),m(t,"alt",e[0]),m(t,"class","z-0 transition-colors w-28 h-28 min-w-28 min-h-28 hover:bg-dark-gray-lighter")},m(s,n){f(s,t,n),a||(r=[v(e[4].call(null,t)),x(t,"mouseenter",e[6]),x(t,"mouseout",e[7])],a=!0)},p(e,n){4&n&&t.src!==(s=e[2])&&m(t,"src",s),1&n&&m(t,"alt",e[0])},d(e){e&&c(t),a=!1,I(r)}}}function ge(e){let t,s,n,a=e[3]&&pe(e);return s=new fe({props:{$$slots:{default:[de]},$$scope:{ctx:e}}}),{c(){a&&a.c(),t=r(),M(s.$$.fragment)},l(e){a&&a.l(e),t=h(e),C(s.$$.fragment,e)},m(e,r){a&&a.m(e,r),f(e,t,r),L(s,e,r),n=!0},p(e,[n]){e[3]?a?a.p(e,n):(a=pe(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null);const r={};269&n&&(r.$$scope={dirty:n,ctx:e}),s.$set(r)},i(e){n||(S(s.$$.fragment,e),n=!0)},o(e){k(s.$$.fragment,e),n=!1},d(e){a&&a.d(e),e&&c(t),P(s,e)}}}function ue(e,t,s){let{name:n=""}=t,{description:a=""}=t,{imageSrc:r=""}=t;const[l,i]=A({modifiers:[{name:"offset",options:{offset:[0,50]}}]});let o=!1;return e.$$set=e=>{"name"in e&&s(0,n=e.name),"description"in e&&s(1,a=e.description),"imageSrc"in e&&s(2,r=e.imageSrc)},[n,a,r,o,l,i,()=>s(3,o=!0),()=>s(3,o=!1)]}class ve extends e{constructor(e){super(),t(this,e,ue,ge,s,{name:0,description:1,imageSrc:2})}}const $e=(e,t)=>{const s=Math.min(e.length,t.length),n=[];for(let a=0;a<s;a++)n.push([e[a],t[a]]);return n};function ye(e,t,s){const n=e.slice();return n[4]=t[s][0],n[5]=t[s][1][0],n[6]=t[s][1][1],n}function we(e){let t,s,a,o;const d=[e[4]];let g={};for(let n=0;n<d.length;n+=1)g=N(g,d[n]);return s=new ve({props:g}),{c(){t=n("div"),M(s.$$.fragment),a=r(),this.h()},l(e){t=l(e,"DIV",{class:!0,style:!0});var n=i(t);C(s.$$.fragment,n),a=h(n),n.forEach(c),this.h()},h(){m(t,"class","absolute"),w(t,"left",e[5]+"px"),w(t,"top",e[6]+"px")},m(e,n){f(e,t,n),L(s,t,null),p(t,a),o=!0},p(e,n){const a=3&n?D(d,[H(e[4])]):{};s.$set(a),(!o||3&n)&&w(t,"left",e[5]+"px"),(!o||3&n)&&w(t,"top",e[6]+"px")},i(e){o||(S(s.$$.fragment,e),o=!0)},o(e){k(s.$$.fragment,e),o=!1},d(e){e&&c(t),P(s)}}}function xe(e){let t,s,a,r=$e(e[0],e[1]),o=[];for(let n=0;n<r.length;n+=1)o[n]=we(ye(e,r,n));const h=e=>k(o[e],1,1,(()=>{o[e]=null}));return{c(){t=n("section"),s=n("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=l(e,"SECTION",{class:!0});var n=i(t);s=l(n,"DIV",{class:!0});var a=i(s);for(let t=0;t<o.length;t+=1)o[t].l(a);a.forEach(c),n.forEach(c),this.h()},h(){m(s,"class","relative transform -translate-x-14 -translate-y-14"),m(t,"class","flex items-center justify-center w-full h-[400px]")},m(e,n){f(e,t,n),p(t,s);for(let t=0;t<o.length;t+=1)o[t].m(s,null);a=!0},p(e,[t]){if(3&t){let n;for(r=$e(e[0],e[1]),n=0;n<r.length;n+=1){const a=ye(e,r,n);o[n]?(o[n].p(a,t),S(o[n],1)):(o[n]=we(a),o[n].c(),S(o[n],1),o[n].m(s,null))}for(V(),n=r.length;n<o.length;n+=1)h(n);O()}},i(e){if(!a){for(let e=0;e<r.length;e+=1)S(o[e]);a=!0}},o(e){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)k(o[t]);a=!1},d(e){e&&c(t),u(o,e)}}}function be(e,t,s){let n,{skills:a=[]}=t,{cloudScale:r=60}=t;const l=[[0,0],[-2,-1],[-2,1],[0,2.24],[2,1],[2,-1],[0,-2.24],[-4,0],[-4,2.24],[4,0],[-6,-1],[-6,1],[6,-1],[6,1]];return e.$$set=e=>{"skills"in e&&s(0,a=e.skills),"cloudScale"in e&&s(2,r=e.cloudScale)},e.$$.update=()=>{4&e.$$.dirty&&s(1,n=l.map((([e,t])=>[e*r,t*r])))},[a,n,r]}class Se extends e{constructor(e){super(),t(this,e,be,xe,s,{skills:0,cloudScale:2})}}function ke(e){let t,s,u,v,$,y,w,x,b,S,k;return{c(){t=n("li"),s=n("div"),u=n("img"),$=r(),y=n("div"),w=n("h2"),x=a(e[0]),b=r(),S=n("p"),k=a(e[1]),this.h()},l(n){t=l(n,"LI",{class:!0});var a=i(t);s=l(a,"DIV",{class:!0});var r=i(s);u=l(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(c),$=h(a),y=l(a,"DIV",{class:!0});var m=i(y);w=l(m,"H2",{class:!0});var f=i(w);x=o(f,e[0]),f.forEach(c),b=h(m),S=l(m,"P",{class:!0});var p=i(S);k=o(p,e[1]),p.forEach(c),m.forEach(c),a.forEach(c),this.h()},h(){u.src!==(v=e[2])&&m(u,"src",v),m(u,"alt",e[0]),m(u,"class","w-full h-full"),m(s,"class","flex-shrink-0 w-32 h-32 p-2 bg-dark-gray-lighter"),m(w,"class","font-mono text-xl font-bold"),m(S,"class","leading-7"),m(y,"class","space-y-2"),m(t,"class","flex space-x-6")},m(e,n){f(e,t,n),p(t,s),p(s,u),p(t,$),p(t,y),p(y,w),p(w,x),p(y,b),p(y,S),p(S,k)},p(e,[t]){4&t&&u.src!==(v=e[2])&&m(u,"src",v),1&t&&m(u,"alt",e[0]),1&t&&d(x,e[0]),2&t&&d(k,e[1])},i:g,o:g,d(e){e&&c(t)}}}function Ie(e,t,s){let{name:n=""}=t,{description:a=""}=t,{imageSrc:r=""}=t;return e.$$set=e=>{"name"in e&&s(0,n=e.name),"description"in e&&s(1,a=e.description),"imageSrc"in e&&s(2,r=e.imageSrc)},[n,a,r]}class Ee extends e{constructor(e){super(),t(this,e,Ie,ke,s,{name:0,description:1,imageSrc:2})}}const je=[{name:"Singapore Management University",description:"I am currently pursuing a degree in computer science and will graduate in the Summer of 2023.",start:"aug 2019",imageSrc:"experiences/smu.png",details:{Achievements:["AY2019/2020 SIS Outstanding First Year Computer Science Student Award","AY2019/2020 Dean's List"]}},{name:"Whitehat Society",description:"I am the President of the Whitehat Society. We are a cybersecurity interest group with a mission to advocate for and educate on information security.",start:"aug 2020",imageSrc:"experiences/whitehats.png",details:{Projects:["Initiated and conducted <strong>Cyber Hacking Fundamentals</strong>, a beginner-oriented workshop on the basics of cybersecurity.","Directed <strong>Whitehacks 2021</strong>, a Junior College cybersecurity outreach program comprising training workshops, a CTF competition, and networking opportunities with industry partners such as GovTech, CSA, and CSIT."]}},{name:"Garuda Robotics",description:"I was an Engineering Intern that worked on a warning system for autonomous drones and a React/Redux application with OpenStreetMap integration.",start:"may 2020",end:"aug 2020",imageSrc:"experiences/garuda-robotics.png",details:{}}],Te=[{name:"svelte-popperjs",description:"Popper for Svelte with actions, no wrapper components or component bindings required!",imageSrc:"projects/svelte-popperjs.png",href:"https://github.com/bryanmylee/svelte-popperjs"},{name:"svelte-previous",description:"A Svelte store that remembers previous values.",imageSrc:"projects/svelte-previous.png",href:"https://github.com/bryanmylee/svelte-previous"},{name:"vim-colorscheme-icons",description:"A simple plug-and-play Vim plugin to colorize vim-devicons with the current colorscheme.",imageSrc:"projects/vim-colorscheme-icons.png",href:"https://github.com/bryanmylee/vim-colorscheme-icons"},{name:"meetwhen.io",description:"A group scheduling web application built on Svelte.",imageSrc:"projects/meetwhen.png",href:"https://github.com/bryanmylee/meetwhen"},{name:"zoo-ids",description:"A seedable and predictable ID generator that uses adjectives and animal names.",imageSrc:"projects/zoo-ids.png",href:"https://github.com/bryanmylee/zoo-ids"},{name:"tailwindcss-extrude",description:"A custom TailwindCSS plugin for an extruded style.",imageSrc:"projects/tailwindcss-extrude.png",href:"https://github.com/bryanmylee/tailwindcss-extrude"}],Me=[{name:"TypeScript",description:"Probably my favourite and most proficient language. I love the powerful type system, and always use TypeScript for web development as much as possible.",imageSrc:"skills/typescript.svg",tags:["language"]},{name:"JavaScript",description:"It's a reliable and necessary language for the web. While I prefer to use TypeScript, some projects are simpler with JavaScript.",imageSrc:"skills/javascript.svg",tags:["language"]},{name:"Svelte",description:"My favourite frontend framework for the web. I've built many projects on Svelte and have also contributed to the ecosystem and tooling.",imageSrc:"skills/svelte.svg",tags:["framework"]},{name:"React",description:"The industry standard for frontend web development. I started my web development journey with React and I still use it occasionally.",imageSrc:"skills/reactjs.svg",tags:["framework"]},{name:"Vim",description:"I'm obsessed with Vim and its philosophy of modal editing! Most of my development work is done in NeoVim with coc.nvim plugins. If I do have to use other editors, I usually reach for a comparable extension.",imageSrc:"skills/vim.svg",tags:["framework","editor"]},{name:"C",description:"I have a love hate relationship with C. While I think the standard library and tooling could be improved, the language is simple and powerful and I enjoy working close to memory.",imageSrc:"skills/c.svg",tags:["language"]},{name:"Python",description:"My go-to language for algorithm designa and scripting. I'm extremely proficient in Python.",imageSrc:"skills/python.svg",tags:["language"]},{name:"Node.js",description:"I am comfortable with Node.js and Express. I use Node.js for quick projects.",imageSrc:"skills/nodejs.svg",tags:["framework"]},{name:"Firebase",description:"I use Firebase for any quick projects where a relational database isn't needed.",imageSrc:"skills/firebase.svg",tags:["database"]},{name:"Swift",description:"I started developing personal projects on iOS with Swift and the UIKit framework in 2017. The language has remained one of my favourites since, and I look forward to learning SwiftUI.",imageSrc:"skills/swift.svg",tags:["language","framework"]},{name:"Tailwind CSS",description:"My favourite CSS framework. I use Tailwind CSS extensively and have contributed custom plugins to the community.",imageSrc:"skills/tailwindcss.svg",tags:["framework","frontend"]},{name:"MySQL",description:"I am proficient in database design. I usually use an ORM with MySQL, but I can also write optimized queries and take advantage of indices.",imageSrc:"skills/mysql.svg",tags:["database"]},{name:"Java",description:"I am proficient in Java. I am also an Oracle Certified Professional for Java SE 11.",imageSrc:"skills/java.svg",tags:["language"]},{name:"Spring",description:"One of my favourite software design frameworks. I use Spring Boot extensively and have applied the dependency injection principle to other projects.",imageSrc:"skills/springio.svg",tags:["framework"]}],Ce=B({md:"(min-width: 768px)"});function Le(e,t,s){const n=e.slice();return n[2]=t[s],n}function Pe(e,t,s){const n=e.slice();return n[5]=t[s],n}function Ae(e,t,s){const n=e.slice();return n[8]=t[s],n}function De(e){let t,s;const n=[e[8]];let a={};for(let r=0;r<n.length;r+=1)a=N(a,n[r]);return t=new ce({props:a}),{c(){M(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const a=0&s?D(n,[H(e[8])]):{};t.$set(a)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function He(e){let t,s,a=Me,r=[];for(let n=0;n<a.length;n+=1)r[n]=Oe(Pe(e,a,n));const o=e=>k(r[e],1,1,(()=>{r[e]=null}));return{c(){t=n("ul");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=l(e,"UL",{class:!0});var s=i(t);for(let t=0;t<r.length;t+=1)r[t].l(s);s.forEach(c),this.h()},h(){m(t,"class","mx-4 space-y-8")},m(e,n){f(e,t,n);for(let s=0;s<r.length;s+=1)r[s].m(t,null);s=!0},p(e,s){if(0&s){let n;for(a=Me,n=0;n<a.length;n+=1){const l=Pe(e,a,n);r[n]?(r[n].p(l,s),S(r[n],1)):(r[n]=Oe(l),r[n].c(),S(r[n],1),r[n].m(t,null))}for(V(),n=a.length;n<r.length;n+=1)o(n);O()}},i(e){if(!s){for(let e=0;e<a.length;e+=1)S(r[e]);s=!0}},o(e){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)k(r[t]);s=!1},d(e){e&&c(t),u(r,e)}}}function Ve(e){let t,s;return t=new Se({props:{skills:Me}}),{c(){M(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p:g,i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function Oe(e){let t,s;const n=[e[5]];let a={};for(let r=0;r<n.length;r+=1)a=N(a,n[r]);return t=new Ee({props:a}),{c(){M(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const a=0&s?D(n,[H(e[5])]):{};t.$set(a)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function Ne(e){let t,s;const n=[e[2]];let a={};for(let r=0;r<n.length;r+=1)a=N(a,n[r]);return t=new X({props:a}),{c(){M(t.$$.fragment)},l(e){C(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const a=0&s?D(n,[H(e[2])]):{};t.$set(a)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){k(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function Be(e){let t,s,d,g,v,$,y,w,x,b,I,E,j,T,A,D,H,N,B,G,R,q,U,F,W,Y,Q,K,X,Z,_,ee,te;g=new ne({props:{interval:5e3,texts:e[1],class:"font-bold text-cyan"}}),$=new le({props:{class:"mt-12"}});let se=Te,ae=[];for(let n=0;n<se.length;n+=1)ae[n]=De(Ae(e,se,n));const re=e=>k(ae[e],1,1,(()=>{ae[e]=null})),ie=[Ve,He],oe=[];function ce(e,t){return e[0].md?0:1}D=ce(e),H=oe[D]=ie[D](e);let he=je,me=[];for(let n=0;n<he.length;n+=1)me[n]=Ne(Le(e,he,n));const fe=e=>k(me[e],1,1,(()=>{me[e]=null}));return K=new J({props:{title:"github",subtitle:"bryanmylee",href:"https://github.com/bryanmylee"}}),Z=new J({props:{title:"email",subtitle:"bryanmylee@gmail.com",href:"mailto:bryanmylee@gmail.com"}}),ee=new J({props:{title:"linkedin",subtitle:"bryan-lee-min-yuan",href:"https://www.linkedin.com/in/bryan-lee-min-yuan/"}}),{c(){t=r(),s=n("p"),d=a("I am a "),M(g.$$.fragment),v=r(),M($.$$.fragment),y=r(),w=n("h1"),x=a("Projects"),b=r(),I=n("ul");for(let e=0;e<ae.length;e+=1)ae[e].c();E=r(),j=n("h1"),T=a("Skills"),A=r(),H.c(),N=r(),B=n("h1"),G=a("Experience"),R=r(),q=n("ul");for(let e=0;e<me.length;e+=1)me[e].c();U=r(),F=n("h1"),W=a("Contact"),Y=r(),Q=n("section"),M(K.$$.fragment),X=r(),M(Z.$$.fragment),_=r(),M(ee.$$.fragment),this.h()},l(e){z('[data-svelte="svelte-o87d5n"]',document.head).forEach(c),t=h(e),s=l(e,"P",{class:!0});var n=i(s);d=o(n,"I am a "),C(g.$$.fragment,n),n.forEach(c),v=h(e),C($.$$.fragment,e),y=h(e),w=l(e,"H1",{id:!0,class:!0});var a=i(w);x=o(a,"Projects"),a.forEach(c),b=h(e),I=l(e,"UL",{class:!0});var r=i(I);for(let t=0;t<ae.length;t+=1)ae[t].l(r);r.forEach(c),E=h(e),j=l(e,"H1",{id:!0,class:!0});var m=i(j);T=o(m,"Skills"),m.forEach(c),A=h(e),H.l(e),N=h(e),B=l(e,"H1",{id:!0,class:!0});var f=i(B);G=o(f,"Experience"),f.forEach(c),R=h(e),q=l(e,"UL",{class:!0});var p=i(q);for(let t=0;t<me.length;t+=1)me[t].l(p);p.forEach(c),U=h(e),F=l(e,"H1",{id:!0,class:!0});var u=i(F);W=o(u,"Contact"),u.forEach(c),Y=h(e),Q=l(e,"SECTION",{class:!0});var S=i(Q);C(K.$$.fragment,S),X=h(S),C(Z.$$.fragment,S),_=h(S),C(ee.$$.fragment,S),S.forEach(c),this.h()},h(){document.title="Bryan Lee",m(s,"class","mx-4 md:mx-0 mt-12 font-mono text-3xl"),m(w,"id","projects"),m(w,"class","svelte-1n9e9jh"),m(I,"class","grid mx-4 md:mx-0 md:grid-cols-2 gap-8"),m(j,"id","skills"),m(j,"class","svelte-1n9e9jh"),m(B,"id","experience"),m(B,"class","svelte-1n9e9jh"),m(q,"class","block space-y-4"),m(F,"id","contact"),m(F,"class","svelte-1n9e9jh"),m(Q,"class","flex items-stretch space-x-4 md:space-x-8 justify-stretch")},m(e,n){f(e,t,n),f(e,s,n),p(s,d),L(g,s,null),f(e,v,n),L($,e,n),f(e,y,n),f(e,w,n),p(w,x),f(e,b,n),f(e,I,n);for(let t=0;t<ae.length;t+=1)ae[t].m(I,null);f(e,E,n),f(e,j,n),p(j,T),f(e,A,n),oe[D].m(e,n),f(e,N,n),f(e,B,n),p(B,G),f(e,R,n),f(e,q,n);for(let t=0;t<me.length;t+=1)me[t].m(q,null);f(e,U,n),f(e,F,n),p(F,W),f(e,Y,n),f(e,Q,n),L(K,Q,null),p(Q,X),L(Z,Q,null),p(Q,_),L(ee,Q,null),te=!0},p(e,[t]){if(0&t){let s;for(se=Te,s=0;s<se.length;s+=1){const n=Ae(e,se,s);ae[s]?(ae[s].p(n,t),S(ae[s],1)):(ae[s]=De(n),ae[s].c(),S(ae[s],1),ae[s].m(I,null))}for(V(),s=se.length;s<ae.length;s+=1)re(s);O()}let s=D;if(D=ce(e),D===s?oe[D].p(e,t):(V(),k(oe[s],1,1,(()=>{oe[s]=null})),O(),H=oe[D],H?H.p(e,t):(H=oe[D]=ie[D](e),H.c()),S(H,1),H.m(N.parentNode,N)),0&t){let s;for(he=je,s=0;s<he.length;s+=1){const n=Le(e,he,s);me[s]?(me[s].p(n,t),S(me[s],1)):(me[s]=Ne(n),me[s].c(),S(me[s],1),me[s].m(q,null))}for(V(),s=he.length;s<me.length;s+=1)fe(s);O()}},i(e){if(!te){S(g.$$.fragment,e),S($.$$.fragment,e);for(let e=0;e<se.length;e+=1)S(ae[e]);S(H);for(let e=0;e<he.length;e+=1)S(me[e]);S(K.$$.fragment,e),S(Z.$$.fragment,e),S(ee.$$.fragment,e),te=!0}},o(e){k(g.$$.fragment,e),k($.$$.fragment,e),ae=ae.filter(Boolean);for(let t=0;t<ae.length;t+=1)k(ae[t]);k(H),me=me.filter(Boolean);for(let t=0;t<me.length;t+=1)k(me[t]);k(K.$$.fragment,e),k(Z.$$.fragment,e),k(ee.$$.fragment,e),te=!1},d(e){e&&c(t),e&&c(s),P(g),e&&c(v),P($,e),e&&c(y),e&&c(w),e&&c(b),e&&c(I),u(ae,e),e&&c(E),e&&c(j),e&&c(A),oe[D].d(e),e&&c(N),e&&c(B),e&&c(R),e&&c(q),u(me,e),e&&c(U),e&&c(F),e&&c(Y),e&&c(Q),P(K),P(Z),P(ee)}}}function ze(e,t,s){let n;G(e,Ce,(e=>s(0,n=e)));return[n,["computer science student.","software developer.","tech geek.","vim enthusiast.","cybersecurity researcher."]]}export default class extends e{constructor(e){super(),t(this,e,ze,Be,s,{})}}
