(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{17:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var b=c(4);function n(){if("undefined"==typeof window)return Object(b.b)("");const{pathname:t}=window.location,e=Object(b.b)(window.location.hash.slice(1)),c=()=>{r(window.location.hash.slice(1))},n=c=>{e.update(e=>{const b=c(e);return history.replaceState(history.state,null,`${t}#${b}`),b})},r=t=>n(()=>t);return window.addEventListener("hashchange",c),{subscribe:(t,b)=>{const n=e.subscribe(t,b);return()=>{n(),window.removeEventListener("hashchange",c)}},update:n,set:r}}},19:function(t,e,c){"use strict";c.r(e);var b=c(0),n=c(8),r=c(17),j=c(7);function s(t){let e,c,r,j,s,O,a,o,i,h,l,u,f;return O=new n.a({props:{tech:t[1],class:"flex"}}),{c(){e=Object(b.V)(),c=Object(b.y)("div"),r=Object(b.y)("h2"),j=Object(b.Y)(t[0]),s=Object(b.V)(),Object(b.r)(O.$$.fragment),a=Object(b.V)(),o=Object(b.y)("img"),h=Object(b.V)(),l=Object(b.y)("a"),u=Object(b.Y)(t[0]),this.h()},l(n){Object(b.P)('[data-svelte="svelte-glnfce"]',document.head).forEach(b.x),e=Object(b.o)(n),c=Object(b.n)(n,"DIV",{class:!0});var i=Object(b.l)(c);r=Object(b.n)(i,"H2",{});var f=Object(b.l)(r);j=Object(b.p)(f,t[0]),f.forEach(b.x),s=Object(b.o)(i),Object(b.m)(O.$$.fragment,i),a=Object(b.o)(i),o=Object(b.n)(i,"IMG",{src:!0,alt:!0}),h=Object(b.o)(i),l=Object(b.n)(i,"A",{href:!0});var d=Object(b.l)(l);u=Object(b.p)(d,t[0]),d.forEach(b.x),i.forEach(b.x),this.h()},h(){document.title="Bryan Lee - projects",o.src!==(i=t[2])&&Object(b.h)(o,"src",i),Object(b.h)(o,"alt",t[0]),Object(b.h)(l,"href",t[3]),Object(b.h)(c,"class","prose")},m(t,n){Object(b.H)(t,e,n),Object(b.H)(t,c,n),Object(b.f)(c,r),Object(b.f)(r,j),Object(b.f)(c,s),Object(b.K)(O,c,null),Object(b.f)(c,a),Object(b.f)(c,o),Object(b.f)(c,h),Object(b.f)(c,l),Object(b.f)(l,u),f=!0},p(t,[e]){(!f||1&e)&&Object(b.T)(j,t[0]);const c={};2&e&&(c.tech=t[1]),O.$set(c),(!f||4&e&&o.src!==(i=t[2]))&&Object(b.h)(o,"src",i),(!f||1&e)&&Object(b.h)(o,"alt",t[0]),(!f||1&e)&&Object(b.T)(u,t[0]),(!f||8&e)&&Object(b.h)(l,"href",t[3])},i(t){f||(Object(b.Z)(O.$$.fragment,t),f=!0)},o(t){Object(b.ab)(O.$$.fragment,t),f=!1},d(t){t&&Object(b.x)(e),t&&Object(b.x)(c),Object(b.v)(O)}}}function O(t,e,c){let n;const{projects:s}=j.a;let O="svelte-previous";const a=Object(r.a)();Object(b.q)(t,a,t=>c(6,n=t));let o,i,h,l,u,f=!1;return t.$$.update=()=>{var e;32&t.$$.dirty&&(e=O,f&&Object(b.U)(a,n=e,n),f=!0),64&t.$$.dirty&&function(t){Object.keys(s).includes(t)&&c(5,O=t)}(n),32&t.$$.dirty&&c(7,o=s[O]),128&t.$$.dirty&&c(0,({projectName:i,tech:h,logo:l,github:u}=o),i,(c(1,h),c(7,o),c(5,O)),(c(2,l),c(7,o),c(5,O)),(c(3,u),c(7,o),c(5,O)))},[i,h,l,u,a,O,n,o]}class a extends b.a{constructor(t){super(),Object(b.G)(this,t,O,s,b.R,{})}}e.default=a}}]);