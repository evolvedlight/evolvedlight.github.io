import{i as e,c as t,e as n,a as s,b as a,d as r,f as o,h as l,g as i,j as c,k as d,l as u,m as p,s as m,n as h,o as f,r as g,p as v,q as x,t as y,w as b,u as w,v as S,x as C,y as k,z as _,A as E,F as A,B as L,C as N,D as T,E as P,G as O,H as $,I,J as j,K as H,L as R,M as D}from"./framework.4c5e7916.js";const M={},q="undefined"!=typeof document?document:null,B=q&&q.createElement("template"),V={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const a=t?q.createElementNS("http://www.w3.org/2000/svg",e):q.createElement(e,n?{is:n}:void 0);return"select"===e&&s&&null!=s.multiple&&a.setAttribute("multiple",s.multiple),a},createText:e=>q.createTextNode(e),createComment:e=>q.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>q.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,a,r){const o=n?n.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),a!==r&&(a=a.nextSibling););else{B.innerHTML=s?`<svg>${e}</svg>`:e;const a=B.content;if(s){const e=a.firstChild;for(;e.firstChild;)a.appendChild(e.firstChild);a.removeChild(e)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const W=/\s*!important$/;function U(e,t,n){if(o(n))n.forEach((n=>U(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=function(e,t){const n=J[t];if(n)return n;let s=i(t);if("filter"!==s&&s in e)return J[t]=s;s=c(s);for(let a=0;a<G.length;a++){const n=G[a]+s;if(n in e)return J[t]=n}return t}(e,t);W.test(n)?e.setProperty(l(s),n.replace(W,""),"important"):e[s]=n}}const G=["Webkit","Moz","ms"],J={};const K="http://www.w3.org/1999/xlink";const[F,z]=(()=>{let e=Date.now,t=!1;if("undefined"!=typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Y=0;const X=Promise.resolve(),Q=()=>{Y=0};function Z(e,t,n,s,a=null){const r=e._vei||(e._vei={}),i=r[t];if(s&&i)i.value=s;else{const[n,c]=function(e){let t;if(ee.test(e)){let n;for(t={};n=e.match(ee);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[l(e.slice(2)),t]}(t);if(s){const l=r[t]=function(e,t){const n=e=>{const s=e.timeStamp||F();(z||s>=n.attached-1)&&p(function(e,t){if(o(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Y||(X.then(Q),Y=F()))(),n}(s,a);!function(e,t,n,s){e.addEventListener(t,n,s)}(e,n,l,c)}else i&&(!function(e,t,n,s){e.removeEventListener(t,n,s)}(e,n,i,c),r[t]=void 0)}}const ee=/(?:Once|Passive|Capture)$/;const te=/^on[a-z]/;const ne=n({patchProp:(t,n,o,l,i=!1,c,p,m,h)=>{"class"===n?function(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(t,l,i):"style"===n?function(t,n,s){const a=t.style,r=e(s);if(s&&!r){for(const e in s)U(a,e,s[e]);if(n&&!e(n))for(const e in n)null==s[e]&&U(a,e,"")}else{const e=a.display;r?n!==s&&(a.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(a.display=e)}}(t,o,l):s(n)?a(n)||Z(t,n,0,l,p):("."===n[0]?(n=n.slice(1),1):"^"===n[0]?(n=n.slice(1),0):function(t,n,s,a){if(a)return"innerHTML"===n||"textContent"===n||!!(n in t&&te.test(n)&&r(s));if("spellcheck"===n||"draggable"===n||"translate"===n)return!1;if("form"===n)return!1;if("list"===n&&"INPUT"===t.tagName)return!1;if("type"===n&&"TEXTAREA"===t.tagName)return!1;if(te.test(n)&&e(s))return!1;return n in t}(t,n,l,i))?function(e,t,n,s,a,r,o){if("innerHTML"===t||"textContent"===t)return s&&o(s,a,r),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const s=null==n?"":n;return e.value===s&&"OPTION"!==e.tagName||(e.value=s),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=u(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch(i){}l&&e.removeAttribute(t)}(t,n,l,c,p,m,h):("true-value"===n?t._trueValue=l:"false-value"===n&&(t._falseValue=l),function(e,t,n,s,a){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(K,t.slice(6,t.length)):e.setAttributeNS(K,t,n);else{const s=d(t);null==n||s&&!u(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}(t,n,l,i))}},V);let se,ae=!1;const re=(...n)=>{const s=(se=ae?se:t(ne),ae=!0,se).createApp(...n),{mount:a}=s;return s.mount=t=>{const n=function(t){if(e(t)){return document.querySelector(t)}return t}(t);if(n)return a(n,!0,n instanceof SVGElement)},s};const oe=/^https?:/i,le="undefined"!=typeof window;function ie(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function ce(e){const{locales:t}=e.themeConfig||{},n=e.locales;return t&&n?Object.keys(t).reduce(((e,s)=>(e[s]={label:t[s].label,lang:n[s].lang},e)),{}):{}}function de(e,t){t=function(e,t){if(!le)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}(e,t);const n=ie(e.locales||{},t),s=ie(e.themeConfig.locales||{},t);return Object.assign({},e,n,{themeConfig:Object.assign({},e.themeConfig,s,{locales:{}}),lang:(n||e).lang,locales:{},langs:ce(e)})}const ue=Symbol(),pe=m((me='{"lang":"en-US","title":"Steve Browns blog","description":"Articles and photos about C# and extreme sports","base":"/","head":[],"themeConfig":{},"locales":{},"langs":{},"scrollOffset":90}',JSON.parse(me)));var me;function he(e){const t=h((()=>de(pe.value,e.path)));return{site:t,theme:h((()=>t.value.themeConfig)),page:h((()=>e.data)),frontmatter:h((()=>e.data.frontmatter)),lang:h((()=>t.value.lang)),localePath:h((()=>{const{langs:e,lang:n}=t.value;return function(e){return oe.test(e)?e:function(e,t){return`${e}${t}`.replace(/\/+/g,"/")}(pe.value.base,e)}(Object.keys(e).find((t=>e[t].lang===n))||"/")})),title:h((()=>e.data.title?e.data.title+" | "+t.value.title:t.value.title)),description:h((()=>e.data.description||t.value.description))}}function fe(){const e=f(ue);if(!e)throw new Error("vitepress data not properly injected in app");return e}function ge(e){let t=e.replace(/\.html$/,"");if(t=decodeURIComponent(t),t.endsWith("/")&&(t+="index"),le){const e="/";t=t.slice(e.length).replace(/\//g,"_")+".md";const n=__VP_HASH_MAP__[t.toLowerCase()];t=`${e}assets/${t}.${n}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const ve=Symbol();function xe(){return function(){const e=f(ve);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function ye(e,t,n=!1){let s=null;try{s=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t))}catch(a){console.warn(a)}if(s){let e=pe.value.scrollOffset;"string"==typeof e&&(e=document.querySelector(e).getBoundingClientRect().bottom+24);const t=parseInt(window.getComputedStyle(s).paddingTop,10),a=window.scrollY+s.getBoundingClientRect().top-e+t;!n||Math.abs(a-window.scrollY)>window.innerHeight?window.scrollTo(0,a):window.scrollTo({left:0,top:a,behavior:"smooth"})}}function be(e,t){let n=[],s=!0;b((()=>{const a=e.data,r=t.value,o=a&&a.title,l=a&&a.description,i=a&&a.frontmatter.head;var c;document.title=(o?o+" | ":"")+r.title,document.querySelector("meta[name=description]").setAttribute("content",l||r.description),(e=>{if(s)return void(s=!1);const t=[],a=Math.min(n.length,e.length);for(let s=0;s<a;s++){let a=n[s];const[r,o,l=""]=e[s];if(a.tagName.toLocaleLowerCase()===r){for(const e in o)a.getAttribute(e)!==o[e]&&a.setAttribute(e,o[e]);for(let e=0;e<a.attributes.length;e++){const t=a.attributes[e].name;t in o||a.removeAttribute(t)}a.innerHTML!==l&&(a.innerHTML=l)}else document.head.removeChild(a),a=we(e[s]),document.head.append(a);t.push(a)}n.slice(a).forEach((e=>document.head.removeChild(e))),e.slice(a).forEach((e=>{const n=we(e);document.head.appendChild(n),t.push(n)})),n=t})([...i?(c=i,c.filter((e=>{return!("meta"===(t=e)[0]&&t[1]&&"description"===t[1].name);var t}))):[]])}))}function we([e,t,n]){const s=document.createElement(e);for(const a in t)s.setAttribute(a,t[a]);return n&&(s.innerHTML=n),s}const Se=w({name:"VitePressContent",setup(){const e=xe();return()=>S("div",{style:{position:"relative"}},[e.component?S(e.component):null])}});const Ce=_("dt",{class:"sr-only"},"Published on",-1),ke={class:"text-base leading-6 font-medium text-gray-500"},_e=["datetime"],Ee={__name:"Date",props:{date:Object},setup(e){const t=e;return(n,s)=>(C(),k("dl",null,[Ce,_("dd",ke,[_("time",{datetime:new Date(t.date.time).toISOString()},E(e.date.string),9,_e)])]))}},Ae=JSON.parse('[{"title":"Coding on the ipad","href":"/posts/coding-on-the-ipad.html","date":{"time":1669032000000,"string":"November 21, 2022"},"excerpt":""},{"title":"Dockerless docker builds in Github Actions with Dotnet 7","href":"/posts/github-actions-net7-docker.html","date":{"time":1665748800000,"string":"October 14, 2022"},"excerpt":"<p>How to setup a github build action that uses the dockerless build in .Net 7</p>\\n"},{"title":"Initial VitePress Setup","href":"/posts/initial.html","date":{"time":1657800000000,"string":"July 14, 2022"},"excerpt":"<p>Based on the official VueJs blog, this is a SSG site</p>\\n"}]'),Le={class:"divide-y divide-gray-200"},Ne={class:"pt-6 pb-8 space-y-2 md:space-y-5"},Te={class:"text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},Pe={class:"text-lg leading-7 text-gray-500"},Oe={class:"divide-y divide-gray-200"},$e={class:"py-12"},Ie={class:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},je={class:"space-y-5 xl:col-span-3"},He={class:"space-y-6"},Re={class:"text-2xl leading-8 font-bold tracking-tight"},De=["href"],Me=["innerHTML"],qe={class:"text-base leading-6 font-medium"},Be=["href"],Ve={__name:"Home",setup:e=>(e,t)=>(C(),k("div",Le,[_("div",Ne,[_("h1",Te,E(e.$frontmatter.title),1),_("p",Pe,E(e.$frontmatter.subtext),1)]),_("ul",Oe,[(C(!0),k(A,null,L(N(Ae),(({title:e,href:t,date:n,excerpt:s})=>(C(),k("li",$e,[_("article",Ie,[T(Ee,{date:n},null,8,["date"]),_("div",je,[_("div",He,[_("h2",Re,[_("a",{class:"text-gray-900",href:t},E(e),9,De)]),s?(C(),k("div",{key:0,class:"prose max-w-none text-gray-500",innerHTML:s},null,8,Me)):P("",!0)]),_("div",qe,[_("a",{class:"link","aria-label":"read more",href:t},"Read more →",8,Be)])])])])))),256))])]))},We={class:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200"},Ue=_("dt",{class:"sr-only"},"Authors",-1),Ge={class:"flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"},Je={class:"flex items-center space-x-2"},Ke=["src"],Fe={class:"text-sm font-medium leading-5 whitespace-nowrap"},ze=_("dt",{class:"sr-only"},"Name",-1),Ye={class:"text-gray-900"},Xe={key:0,class:"sr-only"},Qe={key:1},Ze=["href"],et={__name:"Author",setup(e){const{frontmatter:t}=fe();return(e,n)=>(C(),k("dl",We,[Ue,_("dd",null,[_("ul",Ge,[_("li",Je,[N(t).gravatar?(C(),k("img",{key:0,src:"https://gravatar.com/avatar/"+N(t).gravatar,alt:"author image",class:"w-10 h-10 rounded-full"},null,8,Ke)):P("",!0),_("dl",Fe,[ze,_("dd",Ye,E(N(t).author),1),N(t).twitter?(C(),k("dt",Xe,"Twitter")):P("",!0),N(t).twitter?(C(),k("dd",Qe,[_("a",{href:"https://twitter.com/"+N(t).twitter,target:"_blank",rel:"noopnener noreferrer",class:"link"},E(N(t).twitter),9,Ze)])):P("",!0)])])])])]))}},tt={class:"xl:divide-y xl:divide-gray-200"},nt={class:"pt-6 xl:pb-10 space-y-1 text-center"},st={class:"text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"},at={class:"divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20",style:{"grid-template-rows":"auto 1fr"}},rt={class:"divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"},ot={class:"text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"},lt={key:0,class:"py-8"},it=_("h2",{class:"text-xs tracking-wide uppercase text-gray-500"}," Next Article ",-1),ct={class:"link"},dt=["href"],ut={key:1,class:"py-8"},pt=_("h2",{class:"text-xs tracking-wide uppercase text-gray-500"}," Previous Article ",-1),mt={class:"link"},ht=["href"],ft=_("div",{class:"pt-8"},[_("a",{class:"link",href:"/"},"← Back to the blog")],-1),gt={__name:"Article",setup(e){const{frontmatter:t}=fe(),n=xe();function s(){return Ae.findIndex((e=>e.href===n.path))}const a=h((()=>Ae[s()].date)),r=h((()=>Ae[s()-1])),o=h((()=>Ae[s()+1]));return(e,n)=>{const s=O("Content");return C(),k("article",tt,[_("header",nt,[T(Ee,{date:N(a)},null,8,["date"]),_("h1",st,E(N(t).title),1)]),_("div",at,[T(et),_("div",rt,[T(s,{class:"prose max-w-none pt-10 pb-8"})]),_("footer",ot,[N(r)?(C(),k("div",lt,[it,_("div",ct,[_("a",{href:N(r).href},E(N(r).title),9,dt)])])):P("",!0),N(o)?(C(),k("div",ut,[pt,_("div",mt,[_("a",{href:N(o).href},E(N(o).title),9,ht)])])):P("",!0),ft])])])}}},vt={class:"antialiased"},xt={class:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"},yt={class:"flex justify-between items-center py-10 font-bold"},bt={class:"text-xl",href:"/","aria-label":"Steve Brown's blog"},wt=_("img",{class:"inline-block mr-2",style:{width:"36px",height:"31px"},alt:"logo",src:"/logo.webp"},null,-1),St={key:0,class:"hidden md:inline"},Ct=I('<div class="text-sm text-gray-500 leading-5"><a class="hover:text-gray-700" href="https://github.com/evolvedlight/blog" target="_blank" rel="noopener"><span class="hidden sm:inline">GitHub </span>Source</a><span class="mr-2 ml-2">·</span><a class="hover:text-gray-700" href="/feed.rss">RSS<span class="hidden sm:inline"> Feed</span></a><span class="mr-2 ml-2">·</span><a class="hover:text-gray-700" href="https://github.com/evolvedlight/curriculum-vitae/releases/latest/download/StephenBrownCV.pdf" target="_blank" rel="noopener">CV</a></div>',1),kt={class:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0"};var _t={Layout:{__name:"Layout",setup(e){const t=xe(),n=h((()=>"/"===t.path.replace(/index.html$/,"")));return(e,t)=>(C(),k("div",vt,[_("div",xt,[_("nav",yt,[_("a",bt,[wt,N(n)?P("",!0):(C(),k("span",St,"Steve Brown's blog"))]),Ct])]),_("main",kt,[N(n)?(C(),$(Ve,{key:0})):(C(),$(gt,{key:1}))])]))}}};const Et=new Set,At=()=>document.createElement("link");let Lt;const Nt=le&&(Lt=At())&&Lt.relList&&Lt.relList.supports&&Lt.relList.supports("prefetch")?e=>{const t=At();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Tt=w({setup(e,{slots:t}){const n=D(!1);return j((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}}),Pt=_t.NotFound||(()=>"404 Not Found"),Ot={name:"VitePressApp",setup(){const{site:e}=fe();return j((()=>{H((()=>e.value.lang),(e=>{document.documentElement.lang=e}),{immediate:!0})})),function(){if(!le)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:s}=t;if(!Et.has(s)){Et.add(s);const e=ge(s);Nt(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:s,pathname:a}=e,r=a.match(/\.\w+$/);r&&".html"!==r[0]||"_blank"!==t&&s===location.hostname&&(a!==location.pathname?n.observe(e):Et.add(a))}))}))};j(s);const a=xe();H((()=>a.path),s),R((()=>{n&&n.disconnect()}))}(),()=>S(_t.Layout)}};function $t(){const e=function(){let e,t=le;return function(e,t){const n=g({path:"/",component:null,data:{frontmatter:{}}});function s(e=(le?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),le&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),r(e)}let a=null;async function r(s,r=0){const o=new URL(s,"http://a.com"),l=a=o.pathname;try{let t=e(l);if("then"in t&&"function"==typeof t.then&&(t=await t),a===l){a=null;const{default:e,__pageData:s}=t;if(!e)throw new Error(`Invalid route component: ${e}`);n.path=l,n.component=v(e),n.data=v(JSON.parse(s)),le&&y((()=>{if(o.hash&&!r){let t=null;try{t=document.querySelector(decodeURIComponent(o.hash))}catch(e){console.warn(e)}if(t)return void ye(t,o.hash)}window.scrollTo(0,r)}))}}catch(i){i.message.match(/fetch/)||console.error(i),a===l&&(a=null,n.path=l,n.component=t?v(t):null)}}return le&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:r,pathname:o,hash:l,target:i}=t,c=window.location,d=o.match(/\.\w+$/);e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||a!==c.protocol||r!==c.hostname||d&&".html"!==d[0]||(e.preventDefault(),o===c.pathname?l&&l!==c.hash&&(history.pushState(null,"",l),window.dispatchEvent(new Event("hashchange")),ye(t,l,t.classList.contains("header-anchor"))):s(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{r(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:n,go:s}}((n=>{let s=ge(n);return t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),le?(t=!1,a=()=>import(s),(r=[])&&0!==r.length?Promise.all(r.map((e=>{if((e=`/${e}`)in M)return;M[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>a())):a()):require(s);var a,r}),Pt)}(),t=re(Ot);t.provide(ve,e);const n=he(e.route);return t.provide(ue,n),le&&be(e.route,n.site),t.component("Content",Se),t.component("ClientOnly",Tt),t.component("Debug",(()=>null)),Object.defineProperty(t.config.globalProperties,"$frontmatter",{get:()=>n.frontmatter.value}),_t.enhanceApp&&_t.enhanceApp({app:t,router:e,siteData:pe}),{app:t,router:e}}if(le){const{app:e,router:t}=$t();t.go().then((()=>{e.mount("#app")}))}export{$t as createApp};