!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["/client/363fb69304a7267aa83c812f7dd36fa5.png","/client/407390c785a581e920cd9c2f92f0e39e.png","/client/b66c2d91c3d4b698124095b219af92e2.png","/client/cfd9f7b67c853a683b45/blog.0.js","/client/cfd9f7b67c853a683b45/blog_2020_12_svelte$45sapper$45tailwind$45css.1.js","/client/cfd9f7b67c853a683b45/contact.2.js","/client/cfd9f7b67c853a683b45/experience.3.js","/client/cfd9f7b67c853a683b45/index.4.js","/client/cfd9f7b67c853a683b45/main.js","/client/cfd9f7b67c853a683b45/projects.6.js","/client/cfd9f7b67c853a683b45/skills.7.js","/client/f58f31007dd8ef4ed357650cb86ee06d.jpg"].concat(["/service-worker-index.html","/global.css"]),a=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1608758962574").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1608758962574"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,r=t.host===self.location.host&&a.has(t.pathname),o="only-if-cached"===e.request.cache&&!r;!n||c||o||e.respondWith((async()=>r&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1608758962574");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);