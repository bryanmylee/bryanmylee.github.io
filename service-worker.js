!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const n=["/client/37664c860b72174a4e8d9fa85a44bbda.png","/client/4dbe670efa578459cf239fadbda57fe4.jpg","/client/4eeef46d5560ff303577bd8a8e7d8152.png","/client/9e7a97e9f841824733f6a53b0ebaa130.png","/client/a591355b8ca839eda593/10.10.js","/client/a591355b8ca839eda593/11.11.js","/client/a591355b8ca839eda593/12.12.js","/client/a591355b8ca839eda593/9.9.js","/client/a591355b8ca839eda593/blog.0.js","/client/a591355b8ca839eda593/blog_2020_12_svelte$45sapper$45tailwind$45css.1.js","/client/a591355b8ca839eda593/contact.2.js","/client/a591355b8ca839eda593/experience.3.js","/client/a591355b8ca839eda593/index.4.js","/client/a591355b8ca839eda593/main.js","/client/a591355b8ca839eda593/projects.6.js","/client/a591355b8ca839eda593/skills.7.js","/client/a591355b8ca839eda593/vendors~index.8.js","/client/ac72aeb22f7a27ed96dfd1c8aacc6bbb.png","/client/aea1b60dc614dc0c0df4b5f8ef72dbd1.png","/client/aeda537420ddae524e343bb90bc53f93.png","/client/eb0baf880a9262d7934fd14bc42c899b.png","/client/ee2550c1f2be3e2a24898355fc555204.png","/client/ff31fa5f4aedcdf4ed0f5e5e8bf441d3.png"].concat(["/service-worker-index.html","/global.css"]),c=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1608882285120").then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1608882285120"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),a=t.protocol.startsWith("http"),n=t.hostname===self.location.hostname&&t.port!==self.location.port,i=t.host===self.location.host&&c.has(t.pathname),r="only-if-cached"===e.request.cache&&!i;!a||n||r||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1608882285120");try{const a=await fetch(e);return t.put(e,a.clone()),a}catch(a){const n=await t.match(e);if(n)return n;throw a}}(e.request))())})}]);