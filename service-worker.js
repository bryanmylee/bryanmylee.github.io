!function(e){var t={};function n(a){if(t[a])return t[a].exports;var c=t[a]={i:a,l:!1,exports:{}};return e[a].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(a,c,function(t){return e[t]}.bind(null,c));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=["/client/37664c860b72174a4e8d9fa85a44bbda.png","/client/4dbe670efa578459cf239fadbda57fe4.jpg","/client/4eeef46d5560ff303577bd8a8e7d8152.png","/client/7321745504ebb05aba49/13.13.js","/client/7321745504ebb05aba49/14.14.js","/client/7321745504ebb05aba49/15.15.js","/client/7321745504ebb05aba49/16.16.js","/client/7321745504ebb05aba49/17.17.js","/client/7321745504ebb05aba49/blog.0.js","/client/7321745504ebb05aba49/blog_2020_12_svelte$45sapper$45tailwind$45css.1.js","/client/7321745504ebb05aba49/contact.2.js","/client/7321745504ebb05aba49/experience.3.js","/client/7321745504ebb05aba49/main.js","/client/7321745504ebb05aba49/projects.5.js","/client/7321745504ebb05aba49/projects_meetwhen.6.js","/client/7321745504ebb05aba49/projects_sequence$45crdt.7.js","/client/7321745504ebb05aba49/projects_svelte$45popperjs.8.js","/client/7321745504ebb05aba49/projects_svelte$45previous.9.js","/client/7321745504ebb05aba49/projects_vim$45colorscheme$45icons.10.js","/client/7321745504ebb05aba49/skills.11.js","/client/7321745504ebb05aba49/vendors~projects_svelte$45popperjs.12.js","/client/9e7a97e9f841824733f6a53b0ebaa130.png","/client/ac72aeb22f7a27ed96dfd1c8aacc6bbb.png","/client/aea1b60dc614dc0c0df4b5f8ef72dbd1.png","/client/aeda537420ddae524e343bb90bc53f93.png","/client/eb0baf880a9262d7934fd14bc42c899b.png","/client/ee2550c1f2be3e2a24898355fc555204.png","/client/ff31fa5f4aedcdf4ed0f5e5e8bf441d3.png"].concat(["/service-worker-index.html","/global.css"]),c=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1609467284457").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609467284457"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),a=t.hostname===self.location.hostname&&t.port!==self.location.port,s=t.host===self.location.host&&c.has(t.pathname),r="only-if-cached"===e.request.cache&&!s;!n||a||r||e.respondWith((async()=>s&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1609467284457");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const a=await t.match(e);if(a)return a;throw n}}(e.request))())})}]);