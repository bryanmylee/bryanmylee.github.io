!function(e){var t={};function c(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=t,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t,c){"use strict";c.r(t);const n=["/client/37664c860b72174a4e8d9fa85a44bbda.png","/client/4dbe670efa578459cf239fadbda57fe4.jpg","/client/4eeef46d5560ff303577bd8a8e7d8152.png","/client/95a95fb41ccf937bb4fa/10.10.js","/client/95a95fb41ccf937bb4fa/7.7.js","/client/95a95fb41ccf937bb4fa/8.8.js","/client/95a95fb41ccf937bb4fa/9.9.js","/client/95a95fb41ccf937bb4fa/blog.0.js","/client/95a95fb41ccf937bb4fa/blog_2020_12_svelte$45sapper$45tailwind$45css.1.js","/client/95a95fb41ccf937bb4fa/contact.2.js","/client/95a95fb41ccf937bb4fa/experience.3.js","/client/95a95fb41ccf937bb4fa/main.js","/client/95a95fb41ccf937bb4fa/projects.5.js","/client/95a95fb41ccf937bb4fa/skills.6.js","/client/9e7a97e9f841824733f6a53b0ebaa130.png","/client/ac72aeb22f7a27ed96dfd1c8aacc6bbb.png","/client/aea1b60dc614dc0c0df4b5f8ef72dbd1.png","/client/aeda537420ddae524e343bb90bc53f93.png","/client/eb0baf880a9262d7934fd14bc42c899b.png","/client/ee2550c1f2be3e2a24898355fc555204.png","/client/ff31fa5f4aedcdf4ed0f5e5e8bf441d3.png"].concat(["/service-worker-index.html","/global.css"]),a=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1609099074841").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609099074841"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),c=t.protocol.startsWith("http"),n=t.hostname===self.location.hostname&&t.port!==self.location.port,f=t.host===self.location.host&&a.has(t.pathname),i="only-if-cached"===e.request.cache&&!f;!c||n||i||e.respondWith((async()=>f&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1609099074841");try{const c=await fetch(e);return t.put(e,c.clone()),c}catch(c){const n=await t.match(e);if(n)return n;throw c}}(e.request))())})}]);