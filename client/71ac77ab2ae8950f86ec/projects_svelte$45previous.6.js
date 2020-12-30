(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{20:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),b=c(7);function r(e){let t,c,b,r,j,o,O,s,l,i,h,f,d,p,u,v,m,y,g,w,x,E,I,k,Y,S,V,H,P,T,$,C,D,N,W,G,R,A,z,L,M,q,F,J,U,K,B,Q,X,Z,_,ee,te,ce,ae,ne,be,re,je,oe,Oe,se,le,ie,he,fe,de,pe,ue,ve,me,ye,ge,we,xe,Ee,Ie,ke,Ye,Se,Ve,He,Pe,Te,$e,Ce,De,Ne,We,Ge,Re,Ae,ze,Le,Me;return ie=new n.a({props:{tech:e[1],class:"flex min-h-12"}}),{c(){t=Object(a.V)(),c=Object(a.y)("div"),b=Object(a.y)("h2"),r=Object(a.Y)(e[0]),j=Object(a.V)(),o=Object(a.y)("p"),O=Object(a.Y)("Svelte Stores that remember previous values!"),s=Object(a.V)(),l=Object(a.y)("img"),h=Object(a.V)(),f=Object(a.y)("p"),d=Object(a.Y)("Some time back, I was trying to re-create a fancy animation I had seen from\n    Cyberpunk 2077:"),p=Object(a.V)(),u=Object(a.y)("p"),v=Object(a.Y)("When doing so, I found myself needing the previous value of the text\n    property when creating the transition. In fact, I realized that it would be\n    quite common to need a reference to the old value of a newly changed\n    property in Svelte. However, there was no simple or clean solution at the\n    time."),m=Object(a.V)(),y=Object(a.y)("p"),g=Object(a.Y)("In Svelte, when we need custom behaviour from our data, we should use\n    "),w=Object(a.y)("a"),x=Object(a.Y)("Svelte Stores"),E=Object(a.Y)("!\n    Therefore, I developed this package to provide the most Svelte-like way of\n    handling such behaviour."),I=Object(a.V)(),k=Object(a.y)("div"),Y=Object(a.y)("a"),S=Object(a.Y)("Check it out on Github"),V=Object(a.V)(),H=Object(a.y)("hr"),P=Object(a.V)(),T=Object(a.y)("div"),$=Object(a.y)("h3"),C=Object(a.Y)("How it works"),D=Object(a.V)(),N=Object(a.y)("p"),W=Object(a.Y)("The package returns an array of stores — the first being a writable\n    store and the rest being read-only."),G=Object(a.V)(),R=Object(a.y)("code"),A=Object(a.Y)("export let name = 'bryan';\n    const [currentName, previousName] = withPrevious(name);"),z=Object(a.V)(),L=Object(a.y)("p"),M=Object(a.Y)("When the stores are initialized, an internal store is created to keep track\n    of all revisions made to the value. When the value is updated, we only have\n    to increase the index of all revisions by one, and add the new value to the\n    head of the array."),q=Object(a.V)(),F=Object(a.y)("p"),J=Object(a.Y)("To create individual stores from the array store, we can use an underlooked\n    feature of Svelte Stores —\n    "),U=Object(a.y)("a"),K=Object(a.Y)("derived stores"),B=Object(a.Y)("."),Q=Object(a.V)(),X=Object(a.y)("p"),Z=Object(a.Y)("We can simply derive stores for each element of the array, and give the\n    first store a "),_=Object(a.y)("code"),ee=Object(a.Y)("set"),te=Object(a.Y)(" and "),ce=Object(a.y)("code"),ae=Object(a.Y)("update"),ne=Object(a.Y)(" function to make it a\n    writable store."),be=Object(a.V)(),re=Object(a.y)("hr"),je=Object(a.V)(),oe=Object(a.y)("div"),Oe=Object(a.y)("h3"),se=Object(a.Y)("Lessons learnt"),le=Object(a.V)(),Object(a.r)(ie.$$.fragment),he=Object(a.V)(),fe=Object(a.y)("p"),de=Object(a.Y)("This project was written in "),pe=Object(a.y)("strong"),ue=Object(a.Y)("Typescript"),ve=Object(a.Y)(", as I truly enjoy\n    the powerful type system. It also gave me another chance to brush up on my\n    understanding of "),me=Object(a.y)("strong"),ye=Object(a.Y)("Svelte"),ge=Object(a.Y)(" and the Svelte Stores state\n    management functionality."),we=Object(a.V)(),xe=Object(a.y)("p"),Ee=Object(a.Y)("More importantly, this project reminded me that the most crucial step in\n    designing a package is the planning phase before any code is written."),Ie=Object(a.V)(),ke=Object(a.y)("p"),Ye=Object(a.Y)("From the start, I knew that I did not want a difference in data type between\n    writing a value and reading the value from the store. Therefore, I ruled out\n    such an interface early on:"),Se=Object(a.V)(),Ve=Object(a.y)("code"),He=Object(a.Y)("$name = 'adam';\n    console.log($name); current: 'adam', previous: 'bryan'"),Pe=Object(a.V)(),Te=Object(a.y)("p"),$e=Object(a.Y)("I toyed with the idea of providing a `.setCurrent` method on the store:"),Ce=Object(a.V)(),De=Object(a.y)("code"),Ne=Object(a.Y)("name.setCurrent('adam');\n    console.log($name); current: 'adam', previous: 'bryan'"),We=Object(a.V)(),Ge=Object(a.y)("p"),Re=Object(a.Y)("However, the syntax becomes awkward, and it is "),Ae=Object(a.y)("strong"),ze=Object(a.Y)("easy to make\n    mistakes"),Le=Object(a.Y)(" when setting the current value. Ultimately, I decided on\n    using a helper function to instantiate multiple stores that would be coupled\n    together, which produced the current API design."),this.h()},l(n){Object(a.P)('[data-svelte="svelte-1b5g456"]',document.head).forEach(a.x),t=Object(a.o)(n),c=Object(a.n)(n,"DIV",{class:!0});var i=Object(a.l)(c);b=Object(a.n)(i,"H2",{class:!0});var Me=Object(a.l)(b);r=Object(a.p)(Me,e[0]),Me.forEach(a.x),j=Object(a.o)(i),o=Object(a.n)(i,"P",{class:!0});var qe=Object(a.l)(o);O=Object(a.p)(qe,"Svelte Stores that remember previous values!"),qe.forEach(a.x),s=Object(a.o)(i),l=Object(a.n)(i,"IMG",{src:!0,alt:!0,class:!0}),h=Object(a.o)(i),f=Object(a.n)(i,"P",{class:!0});var Fe=Object(a.l)(f);d=Object(a.p)(Fe,"Some time back, I was trying to re-create a fancy animation I had seen from\n    Cyberpunk 2077:"),Fe.forEach(a.x),p=Object(a.o)(i),u=Object(a.n)(i,"P",{class:!0});var Je=Object(a.l)(u);v=Object(a.p)(Je,"When doing so, I found myself needing the previous value of the text\n    property when creating the transition. In fact, I realized that it would be\n    quite common to need a reference to the old value of a newly changed\n    property in Svelte. However, there was no simple or clean solution at the\n    time."),Je.forEach(a.x),m=Object(a.o)(i),y=Object(a.n)(i,"P",{class:!0});var Ue=Object(a.l)(y);g=Object(a.p)(Ue,"In Svelte, when we need custom behaviour from our data, we should use\n    "),w=Object(a.n)(Ue,"A",{href:!0});var Ke=Object(a.l)(w);x=Object(a.p)(Ke,"Svelte Stores"),Ke.forEach(a.x),E=Object(a.p)(Ue,"!\n    Therefore, I developed this package to provide the most Svelte-like way of\n    handling such behaviour."),Ue.forEach(a.x),i.forEach(a.x),I=Object(a.o)(n),k=Object(a.n)(n,"DIV",{class:!0});var Be=Object(a.l)(k);Y=Object(a.n)(Be,"A",{href:!0,class:!0});var Qe=Object(a.l)(Y);S=Object(a.p)(Qe,"Check it out on Github"),Qe.forEach(a.x),Be.forEach(a.x),V=Object(a.o)(n),H=Object(a.n)(n,"HR",{}),P=Object(a.o)(n),T=Object(a.n)(n,"DIV",{class:!0});var Xe=Object(a.l)(T);$=Object(a.n)(Xe,"H3",{class:!0});var Ze=Object(a.l)($);C=Object(a.p)(Ze,"How it works"),Ze.forEach(a.x),D=Object(a.o)(Xe),N=Object(a.n)(Xe,"P",{class:!0});var _e=Object(a.l)(N);W=Object(a.p)(_e,"The package returns an array of stores — the first being a writable\n    store and the rest being read-only."),_e.forEach(a.x),G=Object(a.o)(Xe),R=Object(a.n)(Xe,"CODE",{lang:!0});var et=Object(a.l)(R);A=Object(a.p)(et,"export let name = 'bryan';\n    const [currentName, previousName] = withPrevious(name);"),et.forEach(a.x),z=Object(a.o)(Xe),L=Object(a.n)(Xe,"P",{class:!0});var tt=Object(a.l)(L);M=Object(a.p)(tt,"When the stores are initialized, an internal store is created to keep track\n    of all revisions made to the value. When the value is updated, we only have\n    to increase the index of all revisions by one, and add the new value to the\n    head of the array."),tt.forEach(a.x),q=Object(a.o)(Xe),F=Object(a.n)(Xe,"P",{class:!0});var ct=Object(a.l)(F);J=Object(a.p)(ct,"To create individual stores from the array store, we can use an underlooked\n    feature of Svelte Stores —\n    "),U=Object(a.n)(ct,"A",{href:!0});var at=Object(a.l)(U);K=Object(a.p)(at,"derived stores"),at.forEach(a.x),B=Object(a.p)(ct,"."),ct.forEach(a.x),Q=Object(a.o)(Xe),X=Object(a.n)(Xe,"P",{class:!0});var nt=Object(a.l)(X);Z=Object(a.p)(nt,"We can simply derive stores for each element of the array, and give the\n    first store a "),_=Object(a.n)(nt,"CODE",{});var bt=Object(a.l)(_);ee=Object(a.p)(bt,"set"),bt.forEach(a.x),te=Object(a.p)(nt," and "),ce=Object(a.n)(nt,"CODE",{});var rt=Object(a.l)(ce);ae=Object(a.p)(rt,"update"),rt.forEach(a.x),ne=Object(a.p)(nt," function to make it a\n    writable store."),nt.forEach(a.x),Xe.forEach(a.x),be=Object(a.o)(n),re=Object(a.n)(n,"HR",{}),je=Object(a.o)(n),oe=Object(a.n)(n,"DIV",{class:!0});var jt=Object(a.l)(oe);Oe=Object(a.n)(jt,"H3",{class:!0});var ot=Object(a.l)(Oe);se=Object(a.p)(ot,"Lessons learnt"),ot.forEach(a.x),le=Object(a.o)(jt),Object(a.m)(ie.$$.fragment,jt),he=Object(a.o)(jt),fe=Object(a.n)(jt,"P",{class:!0});var Ot=Object(a.l)(fe);de=Object(a.p)(Ot,"This project was written in "),pe=Object(a.n)(Ot,"STRONG",{});var st=Object(a.l)(pe);ue=Object(a.p)(st,"Typescript"),st.forEach(a.x),ve=Object(a.p)(Ot,", as I truly enjoy\n    the powerful type system. It also gave me another chance to brush up on my\n    understanding of "),me=Object(a.n)(Ot,"STRONG",{});var lt=Object(a.l)(me);ye=Object(a.p)(lt,"Svelte"),lt.forEach(a.x),ge=Object(a.p)(Ot," and the Svelte Stores state\n    management functionality."),Ot.forEach(a.x),we=Object(a.o)(jt),xe=Object(a.n)(jt,"P",{class:!0});var it=Object(a.l)(xe);Ee=Object(a.p)(it,"More importantly, this project reminded me that the most crucial step in\n    designing a package is the planning phase before any code is written."),it.forEach(a.x),Ie=Object(a.o)(jt),ke=Object(a.n)(jt,"P",{class:!0});var ht=Object(a.l)(ke);Ye=Object(a.p)(ht,"From the start, I knew that I did not want a difference in data type between\n    writing a value and reading the value from the store. Therefore, I ruled out\n    such an interface early on:"),ht.forEach(a.x),Se=Object(a.o)(jt),Ve=Object(a.n)(jt,"CODE",{lang:!0});var ft=Object(a.l)(Ve);He=Object(a.p)(ft,"$name = 'adam';\n    console.log($name); current: 'adam', previous: 'bryan'"),ft.forEach(a.x),Pe=Object(a.o)(jt),Te=Object(a.n)(jt,"P",{class:!0});var dt=Object(a.l)(Te);$e=Object(a.p)(dt,"I toyed with the idea of providing a `.setCurrent` method on the store:"),dt.forEach(a.x),Ce=Object(a.o)(jt),De=Object(a.n)(jt,"CODE",{lang:!0});var pt=Object(a.l)(De);Ne=Object(a.p)(pt,"name.setCurrent('adam');\n    console.log($name); current: 'adam', previous: 'bryan'"),pt.forEach(a.x),We=Object(a.o)(jt),Ge=Object(a.n)(jt,"P",{class:!0});var ut=Object(a.l)(Ge);Re=Object(a.p)(ut,"However, the syntax becomes awkward, and it is "),Ae=Object(a.n)(ut,"STRONG",{});var vt=Object(a.l)(Ae);ze=Object(a.p)(vt,"easy to make\n    mistakes"),vt.forEach(a.x),Le=Object(a.p)(ut," when setting the current value. Ultimately, I decided on\n    using a helper function to instantiate multiple stores that would be coupled\n    together, which produced the current API design."),ut.forEach(a.x),jt.forEach(a.x),this.h()},h(){document.title="svelte-previous",Object(a.h)(b,"class","font-mono text-center"),Object(a.h)(o,"class","italic text-center"),l.src!==(i=e[2])&&Object(a.h)(l,"src",i),Object(a.h)(l,"alt",e[0]),Object(a.h)(l,"class","mx-auto max-h-48"),Object(a.h)(f,"class","p-3 card leading-8"),Object(a.h)(u,"class","p-3 card leading-8"),Object(a.h)(w,"href","https://svelte.dev/tutorial/writable-stores"),Object(a.h)(y,"class","p-3 card leading-8"),Object(a.h)(c,"class","mx-auto prose"),Object(a.h)(Y,"href",e[3]),Object(a.h)(Y,"class","p-3 italic font-bold cta-button"),Object(a.h)(k,"class","flex justify-center my-10"),Object(a.h)($,"class","font-mono text-center"),Object(a.h)(N,"class","p-3 card leading-8"),Object(a.h)(R,"lang","ts"),Object(a.h)(L,"class","p-3 card leading-8"),Object(a.h)(U,"href","https://svelte.dev/tutorial/derived-stores"),Object(a.h)(F,"class","p-3 card leading-8"),Object(a.h)(X,"class","p-3 card leading-8"),Object(a.h)(T,"class","mx-auto my-10 prose"),Object(a.h)(Oe,"class","font-mono text-center"),Object(a.h)(fe,"class","p-3 card leading-8"),Object(a.h)(xe,"class","p-3 card leading-8"),Object(a.h)(ke,"class","p-3 card leading-8"),Object(a.h)(Ve,"lang","ts"),Object(a.h)(Te,"class","p-3 card leading-8"),Object(a.h)(De,"lang","ts"),Object(a.h)(Ge,"class","p-3 card leading-8"),Object(a.h)(oe,"class","mx-auto my-10 prose")},m(e,n){Object(a.H)(e,t,n),Object(a.H)(e,c,n),Object(a.f)(c,b),Object(a.f)(b,r),Object(a.f)(c,j),Object(a.f)(c,o),Object(a.f)(o,O),Object(a.f)(c,s),Object(a.f)(c,l),Object(a.f)(c,h),Object(a.f)(c,f),Object(a.f)(f,d),Object(a.f)(c,p),Object(a.f)(c,u),Object(a.f)(u,v),Object(a.f)(c,m),Object(a.f)(c,y),Object(a.f)(y,g),Object(a.f)(y,w),Object(a.f)(w,x),Object(a.f)(y,E),Object(a.H)(e,I,n),Object(a.H)(e,k,n),Object(a.f)(k,Y),Object(a.f)(Y,S),Object(a.H)(e,V,n),Object(a.H)(e,H,n),Object(a.H)(e,P,n),Object(a.H)(e,T,n),Object(a.f)(T,$),Object(a.f)($,C),Object(a.f)(T,D),Object(a.f)(T,N),Object(a.f)(N,W),Object(a.f)(T,G),Object(a.f)(T,R),Object(a.f)(R,A),Object(a.f)(T,z),Object(a.f)(T,L),Object(a.f)(L,M),Object(a.f)(T,q),Object(a.f)(T,F),Object(a.f)(F,J),Object(a.f)(F,U),Object(a.f)(U,K),Object(a.f)(F,B),Object(a.f)(T,Q),Object(a.f)(T,X),Object(a.f)(X,Z),Object(a.f)(X,_),Object(a.f)(_,ee),Object(a.f)(X,te),Object(a.f)(X,ce),Object(a.f)(ce,ae),Object(a.f)(X,ne),Object(a.H)(e,be,n),Object(a.H)(e,re,n),Object(a.H)(e,je,n),Object(a.H)(e,oe,n),Object(a.f)(oe,Oe),Object(a.f)(Oe,se),Object(a.f)(oe,le),Object(a.K)(ie,oe,null),Object(a.f)(oe,he),Object(a.f)(oe,fe),Object(a.f)(fe,de),Object(a.f)(fe,pe),Object(a.f)(pe,ue),Object(a.f)(fe,ve),Object(a.f)(fe,me),Object(a.f)(me,ye),Object(a.f)(fe,ge),Object(a.f)(oe,we),Object(a.f)(oe,xe),Object(a.f)(xe,Ee),Object(a.f)(oe,Ie),Object(a.f)(oe,ke),Object(a.f)(ke,Ye),Object(a.f)(oe,Se),Object(a.f)(oe,Ve),Object(a.f)(Ve,He),Object(a.f)(oe,Pe),Object(a.f)(oe,Te),Object(a.f)(Te,$e),Object(a.f)(oe,Ce),Object(a.f)(oe,De),Object(a.f)(De,Ne),Object(a.f)(oe,We),Object(a.f)(oe,Ge),Object(a.f)(Ge,Re),Object(a.f)(Ge,Ae),Object(a.f)(Ae,ze),Object(a.f)(Ge,Le),Me=!0},p:a.L,i(e){Me||(Object(a.ab)(ie.$$.fragment,e),Me=!0)},o(e){Object(a.bb)(ie.$$.fragment,e),Me=!1},d(e){e&&Object(a.x)(t),e&&Object(a.x)(c),e&&Object(a.x)(I),e&&Object(a.x)(k),e&&Object(a.x)(V),e&&Object(a.x)(H),e&&Object(a.x)(P),e&&Object(a.x)(T),e&&Object(a.x)(be),e&&Object(a.x)(re),e&&Object(a.x)(je),e&&Object(a.x)(oe),Object(a.v)(ie)}}}function j(e){const{projectName:t,tech:c,logo:a,github:n}=b.a.projects["svelte-previous"];return[t,c,a,n]}class o extends a.a{constructor(e){super(),Object(a.G)(this,e,j,r,a.R,{})}}t.default=o}}]);