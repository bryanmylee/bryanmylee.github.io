!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["/client/07485d5fae4282580229/13.13.js","/client/07485d5fae4282580229/14.14.js","/client/07485d5fae4282580229/15.15.js","/client/07485d5fae4282580229/16.16.js","/client/07485d5fae4282580229/17.17.js","/client/07485d5fae4282580229/blog.0.js","/client/07485d5fae4282580229/blog_2020_12_svelte$45sapper$45tailwind$45css.1.js","/client/07485d5fae4282580229/contact.2.js","/client/07485d5fae4282580229/experience.3.js","/client/07485d5fae4282580229/main.js","/client/07485d5fae4282580229/projects.5.js","/client/07485d5fae4282580229/projects_meetwhen.6.js","/client/07485d5fae4282580229/projects_sequence$45crdt.7.js","/client/07485d5fae4282580229/projects_svelte$45popperjs.8.js","/client/07485d5fae4282580229/projects_svelte$45previous.9.js","/client/07485d5fae4282580229/projects_vim$45colorscheme$45icons.10.js","/client/07485d5fae4282580229/skills.11.js","/client/07485d5fae4282580229/vendors~projects_svelte$45popperjs.12.js","/client/37664c860b72174a4e8d9fa85a44bbda.png","/client/4dbe670efa578459cf239fadbda57fe4.jpg","/client/4eeef46d5560ff303577bd8a8e7d8152.png","/client/9e7a97e9f841824733f6a53b0ebaa130.png","/client/ac72aeb22f7a27ed96dfd1c8aacc6bbb.png","/client/aea1b60dc614dc0c0df4b5f8ef72dbd1.png","/client/aeda537420ddae524e343bb90bc53f93.png","/client/eb0baf880a9262d7934fd14bc42c899b.png","/client/ee2550c1f2be3e2a24898355fc555204.png","/client/ff31fa5f4aedcdf4ed0f5e5e8bf441d3.png"].concat(["/service-worker-index.html","/global.css"]),a=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1609442741713").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1609442741713"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url),n=t.protocol.startsWith("http"),c=t.hostname===self.location.hostname&&t.port!==self.location.port,s=t.host===self.location.host&&a.has(t.pathname),r="only-if-cached"===e.request.cache&&!s;!n||c||r||e.respondWith((async()=>s&&await caches.match(e.request)||async function(e){const t=await caches.open("offline1609442741713");try{const n=await fetch(e);return t.put(e,n.clone()),n}catch(n){const c=await t.match(e);if(c)return c;throw n}}(e.request))())})}]);