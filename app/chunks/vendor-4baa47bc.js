function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(r)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function f(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,e,r,o){return t[1]&&o?n(r.ctx.slice(),t[1](o(e))):r.ctx}function l(t,e,n,r,o,i,a){const s=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,i);if(s){const o=u(e,n,r,a);t.p(o,s)}}function p(t){return null==t?"":t}function d(e){return e&&a(e.destroy)?e.destroy:t}const h="undefined"!=typeof window;let m=h?()=>window.performance.now():()=>Date.now(),g=h?t=>requestAnimationFrame(t):t;const y=new Set;function v(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&g(v)}function b(t){let e;return 0===y.size&&g(v),{promise:new Promise((n=>{y.add(e={c:t,f:n})})),abort(){y.delete(e)}}}function w(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function k(){return j(" ")}function D(){return j("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}function P(t,e,n,r){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const i=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||i.push(t.name)}for(let t=0;t<i.length;t++)r.removeAttribute(i[t]);return t.splice(o,1)[0]}}return r?_(e):E(e)}function W(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return j(e)}function B(t){return W(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}const T=new Set;let R,H=0;function N(t,e,n,r,o,i,a,s=0){const c=16.666/r;let f="{\n";for(let g=0;g<=1;g+=c){const t=e+(n-e)*i(g);f+=100*g+`%{${a(t,1-t)}}\n`}const u=f+`100% {${a(n,1-n)}}\n}`,l=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,p=t.ownerDocument;T.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(E("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[l]||(h[l]=!0,d.insertRule(`@keyframes ${l} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${l} ${r}ms linear ${o}ms 1 both`,H+=1,l}function q(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),H-=o,H||g((()=>{H||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function F(t){R=t}function z(){if(!R)throw new Error("Function called outside component initialization");return R}function I(t){z().$$.on_mount.push(t)}function V(t){z().$$.after_update.push(t)}function U(t,e){z().$$.context.set(t,e)}const X=[],Y=[],G=[],J=[],K=Promise.resolve();let Q=!1;function Z(t){G.push(t)}let tt=!1;const et=new Set;function nt(){if(!tt){tt=!0;do{for(let t=0;t<X.length;t+=1){const e=X[t];F(e),rt(e.$$)}for(F(null),X.length=0;Y.length;)Y.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];et.has(e)||(et.add(e),e())}G.length=0}while(X.length);for(;J.length;)J.pop()();Q=!1,tt=!1,et.clear()}}function rt(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}let ot;function it(){return ot||(ot=Promise.resolve(),ot.then((()=>{ot=null}))),ot}function at(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const st=new Set;let ct;function ft(){ct={r:0,c:[],p:ct}}function ut(){ct.r||i(ct.c),ct=ct.p}function lt(t,e){t&&t.i&&(st.delete(t),t.i(e))}function pt(t,e,n,r){if(t&&t.o){if(st.has(t))return;st.add(t),ct.c.push((()=>{st.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const dt={duration:0};function ht(n,r,o){let i,s,c=r(n,o),f=!1,u=0;function l(){i&&q(n,i)}function p(){const{delay:r=0,duration:o=300,easing:a=e,tick:p=t,css:d}=c||dt;d&&(i=N(n,0,1,o,r,a,d,u++)),p(0,1);const h=m()+r,g=h+o;s&&s.abort(),f=!0,Z((()=>at(n,!0,"start"))),s=b((t=>{if(f){if(t>=g)return p(1,0),at(n,!0,"end"),l(),f=!1;if(t>=h){const e=a((t-h)/o);p(e,1-e)}}return f}))}let d=!1;return{start(){d||(q(n),a(c)?(c=c(),it().then(p)):p())},invalidate(){d=!1},end(){f&&(l(),f=!1)}}}function mt(n,r,o,s){let c=r(n,o),f=s?0:1,u=null,l=null,p=null;function d(){p&&q(n,p)}function h(t,e){const n=t.b-f;return e*=Math.abs(n),{a:f,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:o=0,duration:a=300,easing:s=e,tick:g=t,css:y}=c||dt,v={start:m()+o,b:r};r||(v.group=ct,ct.r+=1),u||l?l=v:(y&&(d(),p=N(n,f,r,a,o,s,y)),r&&g(0,1),u=h(v,a),Z((()=>at(n,r,"start"))),b((t=>{if(l&&t>l.start&&(u=h(l,a),l=null,at(n,u.b,"start"),y&&(d(),p=N(n,f,u.b,u.duration,0,s,c.css))),u)if(t>=u.end)g(f=u.b,1-f),at(n,u.b,"end"),l||(u.b?d():--u.group.r||i(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;f=u.a+u.d*s(e/u.duration),g(f,1-f)}return!(!u&&!l)})))}return{run(t){a(c)?it().then((()=>{c=c(),g(t)})):g(t)},end(){d(),u=l=null}}}function gt(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const a=t[i],s=e[i];if(s){for(const t in a)t in s||(r[t]=1);for(const t in s)o[t]||(n[t]=s[t],o[t]=1);t[i]=s}else for(const t in a)o[t]=1}for(const a in r)a in n||(n[a]=void 0);return n}function yt(t){return"object"==typeof t&&null!==t?t:{}}function vt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function wt(t,e,n,o){const{fragment:s,on_mount:c,on_destroy:f,after_update:u}=t.$$;s&&s.m(e,n),o||Z((()=>{const e=c.map(r).filter(a);f?f.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(Z)}function xt(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){-1===t.$$.dirty[0]&&(X.push(t),Q||(Q=!0,K.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,r,a,s,c,f=[-1]){const u=R;F(e);const l=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let p=!1;if(l.ctx=r?r(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return l.ctx&&s(l.ctx[t],l.ctx[t]=o)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](o),p&&Ot(e,t)),n})):[],l.update(),p=!0,i(l.before_update),l.fragment=!!a&&a(l.ctx),n.target){if(n.hydrate){const t=M(n.target);l.fragment&&l.fragment.l(t),t.forEach(O)}else l.fragment&&l.fragment.c();n.intro&&lt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),nt()}F(u)}class Et{$destroy(){xt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t=[];function jt(e,n=t){let r;const o=[];function i(t){if(s(e,t)&&(e=t,r)){const t=!_t.length;for(let n=0;n<o.length;n+=1){const t=o[n];t[1](),_t.push(t,e)}if(t){for(let t=0;t<_t.length;t+=2)_t[t][0](_t[t+1]);_t.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,s=t){const c=[a,s];return o.push(c),1===o.length&&(r=n(i)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function kt(t){return jt({},(e=>{if("undefined"==typeof window)return;let n={},r=()=>e(function(t){let e={classNames:""},n=[];for(let r in t)e[r]=t[r].matches,e[r]&&n.push(`media-${r}`);return e.classNames=n.join(" "),e}(n));for(let o in t){let e=window.matchMedia(t[o]);n[o]=e,n[o].addListener(r)}return r(),()=>{for(let t in n)n[t].removeListener(r)}}))}function Dt(t){const e=t-1;return e*e*e+1}function At(t,{delay:n=0,duration:r=400,easing:o=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*i}}function Lt(t,{delay:e=0,duration:n=400,easing:r=Dt,x:o=0,y:i=0,opacity:a=0}={}){const s=getComputedStyle(t),c=+s.opacity,f="none"===s.transform?"":s.transform,u=c*(1-a);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${f} translate(${(1-t)*o}px, ${(1-t)*i}px);\n\t\t\topacity: ${c-u*e}`}}function Mt(t,{delay:e=0,duration:n=400,easing:r=Dt}={}){const o=getComputedStyle(t),i=+o.opacity,a=parseFloat(o.height),s=parseFloat(o.paddingTop),c=parseFloat(o.paddingBottom),f=parseFloat(o.marginTop),u=parseFloat(o.marginBottom),l=parseFloat(o.borderTopWidth),p=parseFloat(o.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*i};height: ${t*a}px;padding-top: ${t*s}px;padding-bottom: ${t*c}px;margin-top: ${t*f}px;margin-bottom: ${t*u}px;border-top-width: ${t*l}px;border-bottom-width: ${t*p}px;`}}function Pt(e){let n,r,o,i,a;return{c(){n=_("svg"),r=_("line"),o=_("line"),i=_("line"),this.h()},l(t){n=P(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var e=M(n);r=P(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(r).forEach(O),o=P(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(o).forEach(O),i=P(e,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),M(i).forEach(O),e.forEach(O),this.h()},h(){L(r,"x1","3"),L(r,"y1","12"),L(r,"x2","21"),L(r,"y2","12"),L(o,"x1","3"),L(o,"y1","6"),L(o,"x2","21"),L(o,"y2","6"),L(i,"x1","3"),L(i,"y1","18"),L(i,"x2","21"),L(i,"y2","18"),L(n,"xmlns","http://www.w3.org/2000/svg"),L(n,"width",e[0]),L(n,"height",e[0]),L(n,"fill","none"),L(n,"viewBox","0 0 24 24"),L(n,"stroke","currentColor"),L(n,"stroke-width",e[1]),L(n,"stroke-linecap","round"),L(n,"stroke-linejoin","round"),L(n,"class",a="feather feather-menu "+e[2])},m(t,e){x(t,n,e),w(n,r),w(n,o),w(n,i)},p(t,[e]){1&e&&L(n,"width",t[0]),1&e&&L(n,"height",t[0]),2&e&&L(n,"stroke-width",t[1]),4&e&&a!==(a="feather feather-menu "+t[2])&&L(n,"class",a)},i:t,o:t,d(t){t&&O(n)}}}function Wt(t,e,n){let{size:r="100%"}=e,{strokeWidth:o=2}=e,{class:i=""}=e;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),t.$$set=t=>{"size"in t&&n(0,r=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,i=t.class)},[r,o,i]}class Bt extends Et{constructor(t){super(),$t(this,t,Wt,Pt,s,{size:0,strokeWidth:1,class:2})}}var St="top",Ct="bottom",Tt="right",Rt="left",Ht=[St,Ct,Tt,Rt],Nt=Ht.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),qt=[].concat(Ht,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),Ft=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function zt(t){return t?(t.nodeName||"").toLowerCase():null}function It(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Vt(t){return t instanceof It(t).Element||t instanceof Element}function Ut(t){return t instanceof It(t).HTMLElement||t instanceof HTMLElement}function Xt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof It(t).ShadowRoot||t instanceof ShadowRoot)}var Yt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];Ut(o)&&zt(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],o=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});Ut(r)&&zt(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Gt(t){return t.split("-")[0]}function Jt(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function Kt(t){var e=Jt(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function Qt(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Xt(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Zt(t){return It(t).getComputedStyle(t)}function te(t){return["table","td","th"].indexOf(zt(t))>=0}function ee(t){return((Vt(t)?t.ownerDocument:t.document)||window.document).documentElement}function ne(t){return"html"===zt(t)?t:t.assignedSlot||t.parentNode||(Xt(t)?t.host:null)||ee(t)}function re(t){return Ut(t)&&"fixed"!==Zt(t).position?t.offsetParent:null}function oe(t){for(var e=It(t),n=re(t);n&&te(n)&&"static"===Zt(n).position;)n=re(n);return n&&("html"===zt(n)||"body"===zt(n)&&"static"===Zt(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ut(t)&&"fixed"===Zt(t).position)return null;for(var n=ne(t);Ut(n)&&["html","body"].indexOf(zt(n))<0;){var r=Zt(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}function ie(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var ae=Math.max,se=Math.min,ce=Math.round;function fe(t,e,n){return ae(t,se(e,n))}function ue(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function le(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var pe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function de(t){var e,n=t.popper,r=t.popperRect,o=t.placement,i=t.offsets,a=t.position,s=t.gpuAcceleration,c=t.adaptive,f=t.roundOffsets,u=!0===f?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:ce(ce(e*r)/r)||0,y:ce(ce(n*r)/r)||0}}(i):"function"==typeof f?f(i):i,l=u.x,p=void 0===l?0:l,d=u.y,h=void 0===d?0:d,m=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),y=Rt,v=St,b=window;if(c){var w=oe(n),x="clientHeight",O="clientWidth";w===It(n)&&"static"!==Zt(w=ee(n)).position&&(x="scrollHeight",O="scrollWidth"),w=w,o===St&&(v=Ct,h-=w[x]-r.height,h*=s?1:-1),o===Rt&&(y=Tt,p-=w[O]-r.width,p*=s?1:-1)}var $,E=Object.assign({position:a},c&&pe);return s?Object.assign({},E,(($={})[v]=g?"0":"",$[y]=m?"0":"",$.transform=(b.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",$)):Object.assign({},E,((e={})[v]=g?h+"px":"",e[y]=m?p+"px":"",e.transform="",e))}var he={passive:!0};var me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(t){return t.replace(/left|right|bottom|top/g,(function(t){return me[t]}))}var ye={start:"end",end:"start"};function ve(t){return t.replace(/start|end/g,(function(t){return ye[t]}))}function be(t){var e=It(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function we(t){return Jt(ee(t)).left+be(t).scrollLeft}function xe(t){var e=Zt(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Oe(t){return["html","body","#document"].indexOf(zt(t))>=0?t.ownerDocument.body:Ut(t)&&xe(t)?t:Oe(ne(t))}function $e(t,e){var n;void 0===e&&(e=[]);var r=Oe(t),o=r===(null==(n=t.ownerDocument)?void 0:n.body),i=It(r),a=o?[i].concat(i.visualViewport||[],xe(r)?r:[]):r,s=e.concat(a);return o?s:s.concat($e(ne(a)))}function Ee(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function _e(t,e){return"viewport"===e?Ee(function(t){var e=It(t),n=ee(t),r=e.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+we(t),y:s}}(t)):Ut(e)?function(t){var e=Jt(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ee(function(t){var e,n=ee(t),r=be(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=ae(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=ae(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+we(t),c=-r.scrollTop;return"rtl"===Zt(o||n).direction&&(s+=ae(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(ee(t)))}function je(t,e,n){var r="clippingParents"===e?function(t){var e=$e(ne(t)),n=["absolute","fixed"].indexOf(Zt(t).position)>=0&&Ut(t)?oe(t):t;return Vt(n)?e.filter((function(t){return Vt(t)&&Qt(t,n)&&"body"!==zt(t)})):[]}(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(e,n){var r=_e(t,n);return e.top=ae(r.top,e.top),e.right=se(r.right,e.right),e.bottom=se(r.bottom,e.bottom),e.left=ae(r.left,e.left),e}),_e(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ke(t){return t.split("-")[1]}function De(t){var e,n=t.reference,r=t.element,o=t.placement,i=o?Gt(o):null,a=o?ke(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case St:e={x:s,y:n.y-r.height};break;case Ct:e={x:s,y:n.y+n.height};break;case Tt:e={x:n.x+n.width,y:c};break;case Rt:e={x:n.x-r.width,y:c};break;default:e={x:n.x,y:n.y}}var f=i?ie(i):null;if(null!=f){var u="y"===f?"height":"width";switch(a){case"start":e[f]=e[f]-(n[u]/2-r[u]/2);break;case"end":e[f]=e[f]+(n[u]/2-r[u]/2)}}return e}function Ae(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=void 0===r?t.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?"viewport":s,f=n.elementContext,u=void 0===f?"popper":f,l=n.altBoundary,p=void 0!==l&&l,d=n.padding,h=void 0===d?0:d,m=ue("number"!=typeof h?h:le(h,Ht)),g="popper"===u?"reference":"popper",y=t.elements.reference,v=t.rects.popper,b=t.elements[p?g:u],w=je(Vt(b)?b:b.contextElement||ee(t.elements.popper),a,c),x=Jt(y),O=De({reference:x,element:v,strategy:"absolute",placement:o}),$=Ee(Object.assign({},v,O)),E="popper"===u?$:x,_={top:w.top-E.top+m.top,bottom:E.bottom-w.bottom+m.bottom,left:w.left-E.left+m.left,right:E.right-w.right+m.right},j=t.modifiersData.offset;if("popper"===u&&j){var k=j[o];Object.keys(_).forEach((function(t){var e=[Tt,Ct].indexOf(t)>=0?1:-1,n=[St,Ct].indexOf(t)>=0?"y":"x";_[t]+=k[n]*e}))}return _}function Le(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Me(t){return[St,Tt,Ct,Rt].some((function(e){return t[e]>=0}))}function Pe(t,e,n){void 0===n&&(n=!1);var r,o,i=ee(e),a=Jt(t),s=Ut(e),c={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(s||!s&&!n)&&(("body"!==zt(e)||xe(i))&&(c=(r=e)!==It(r)&&Ut(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:be(r)),Ut(e)?((f=Jt(e)).x+=e.clientLeft,f.y+=e.clientTop):i&&(f.x=we(i))),{x:a.left+c.scrollLeft-f.x,y:a.top+c.scrollTop-f.y,width:a.width,height:a.height}}function We(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}var Be={placement:"bottom",modifiers:[],strategy:"absolute"};function Se(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Ce(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?Be:o;return function(t,e,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Be,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],f=!1,u={state:s,setOptions:function(n){l(),s.options=Object.assign({},i,s.options,n),s.scrollParents={reference:Vt(t)?$e(t):t.contextElement?$e(t.contextElement):[],popper:$e(e)};var o,a,f=function(t){var e=We(t);return Ft.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((o=[].concat(r,s.options.modifiers),a=o.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(a).map((function(t){return a[t]}))));return s.orderedModifiers=f.filter((function(t){return t.enabled})),s.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var i=o({state:s,name:e,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!f){var t=s.elements,e=t.reference,n=t.popper;if(Se(e,n)){s.rects={reference:Pe(e,oe(n),"fixed"===s.options.strategy),popper:Kt(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(t){return s.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,c=void 0===a?{}:a,l=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:l,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(t){u.forceUpdate(),t(s)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(o())}))}))),a}),destroy:function(){l(),f=!0}};if(!Se(t,e))return u;function l(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!f&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var Te=Ce({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,r=t.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=It(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach((function(t){t.addEventListener("scroll",n.update,he)})),s&&c.addEventListener("resize",n.update,he),function(){i&&f.forEach((function(t){t.removeEventListener("scroll",n.update,he)})),s&&c.removeEventListener("resize",n.update,he)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=De({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:Gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,de(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,de(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Yt,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=void 0===o?[0,0]:o,a=qt.reduce((function(t,n){return t[n]=function(t,e,n){var r=Gt(t),o=[Rt,St].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[Rt,Tt].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,e.rects,i),t}),{}),s=a[e.placement],c=s.x,f=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=f),e.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,u=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,g=e.options.placement,y=Gt(g),v=c||(y===g||!h?[ge(g)]:function(t){if("auto"===Gt(t))return[];var e=ge(t);return[ve(t),e,ve(e)]}(g)),b=[g].concat(v).reduce((function(t,n){return t.concat("auto"===Gt(n)?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?qt:c,u=ke(r),l=u?s?Nt:Nt.filter((function(t){return ke(t)===u})):Ht,p=l.filter((function(t){return f.indexOf(t)>=0}));0===p.length&&(p=l);var d=p.reduce((function(e,n){return e[n]=Ae(t,{placement:n,boundary:o,rootBoundary:i,padding:a})[Gt(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:u,rootBoundary:l,padding:f,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,x=e.rects.popper,O=new Map,$=!0,E=b[0],_=0;_<b.length;_++){var j=b[_],k=Gt(j),D="start"===ke(j),A=[St,Ct].indexOf(k)>=0,L=A?"width":"height",M=Ae(e,{placement:j,boundary:u,rootBoundary:l,altBoundary:p,padding:f}),P=A?D?Tt:Rt:D?Ct:St;w[L]>x[L]&&(P=ge(P));var W=ge(P),B=[];if(i&&B.push(M[k]<=0),s&&B.push(M[P]<=0,M[W]<=0),B.every((function(t){return t}))){E=j,$=!1;break}O.set(j,B)}if($)for(var S=function(t){var e=b.find((function(e){var n=O.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return E=e,"break"},C=h?3:1;C>0;C--){if("break"===S(C))break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,u=n.altBoundary,l=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,m=void 0===h?0:h,g=Ae(e,{boundary:c,rootBoundary:f,padding:l,altBoundary:u}),y=Gt(e.placement),v=ke(e.placement),b=!v,w=ie(y),x="x"===w?"y":"x",O=e.modifiersData.popperOffsets,$=e.rects.reference,E=e.rects.popper,_="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,j={x:0,y:0};if(O){if(i||s){var k="y"===w?St:Rt,D="y"===w?Ct:Tt,A="y"===w?"height":"width",L=O[w],M=O[w]+g[k],P=O[w]-g[D],W=d?-E[A]/2:0,B="start"===v?$[A]:E[A],S="start"===v?-E[A]:-$[A],C=e.elements.arrow,T=d&&C?Kt(C):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=R[k],N=R[D],q=fe(0,$[A],T[A]),F=b?$[A]/2-W-q-H-_:B-q-H-_,z=b?-$[A]/2+W+q+N+_:S+q+N+_,I=e.elements.arrow&&oe(e.elements.arrow),V=I?"y"===w?I.clientTop||0:I.clientLeft||0:0,U=e.modifiersData.offset?e.modifiersData.offset[e.placement][w]:0,X=O[w]+F-U-V,Y=O[w]+z-U;if(i){var G=fe(d?se(M,X):M,L,d?ae(P,Y):P);O[w]=G,j[w]=G-L}if(s){var J="x"===w?St:Rt,K="x"===w?Ct:Tt,Q=O[x],Z=Q+g[J],tt=Q-g[K],et=fe(d?se(Z,X):Z,Q,d?ae(tt,Y):tt);O[x]=et,j[x]=et-Q}}e.modifiersData[r]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,r=t.name,o=t.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Gt(n.placement),c=ie(s),f=[Rt,Tt].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(t,e){return ue("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:le(t,Ht))}(o.padding,n),l=Kt(i),p="y"===c?St:Rt,d="y"===c?Ct:Tt,h=n.rects.reference[f]+n.rects.reference[c]-a[c]-n.rects.popper[f],m=a[c]-n.rects.reference[c],g=oe(i),y=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,v=h/2-m/2,b=u[p],w=y-l[f]-u[d],x=y/2-l[f]/2+v,O=fe(b,x,w),$=c;n.modifiersData[r]=((e={})[$]=O,e.centerOffset=O-x,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&Qt(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=Ae(e,{elementContext:"reference"}),s=Ae(e,{altBoundary:!0}),c=Le(a,r),f=Le(s,o,i),u=Me(c),l=Me(f);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),Re=function(){return(Re=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function He(t){var e,n,r=null,o=t,i=function(){e&&n&&(r=Te(e,n,o))},a=function(){r&&(r.destroy(),r=null)};return[function(t){return e=t,i(),{destroy:function(){a()}}},function(e,s){return n=e,o=Re(Re({},t),s),i(),{update:function(e){o=Re(Re({},t),e),r&&o&&r.setOptions(o)},destroy:function(){a()}}},function(){return r}]}export{n as A,ft as B,jt as C,f as D,l as E,w as F,t as G,kt as H,c as I,$ as J,Z as K,ht as L,At as M,p as N,d as O,a as P,A as Q,mt as R,Et as S,Mt as T,Bt as U,Lt as V,i as W,He as X,Y,C as Z,M as a,L as b,P as c,O as d,E as e,x as f,W as g,S as h,$t as i,vt as j,k,D as l,bt as m,B as n,wt as o,gt as p,yt as q,pt as r,s,j as t,ut as u,lt as v,xt as w,U as x,V as y,I as z};
