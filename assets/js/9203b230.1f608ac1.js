"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[57],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},91589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"1. Introduction",description:"Instana Lab",sidebar_position:1},o="Introduction",l={unversionedId:"instana-v2/explore-instana/introduction/index",id:"instana-v2/explore-instana/introduction/index",title:"1. Introduction",description:"Instana Lab",source:"@site/labs/instana-v2/explore-instana/1-introduction/index.mdx",sourceDirName:"instana-v2/explore-instana/1-introduction",slug:"/instana-v2/explore-instana/introduction/",permalink:"/instana-techxchange/labs/instana-v2/explore-instana/introduction/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/explore-instana/1-introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Instana Lab",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quiz",permalink:"/instana-techxchange/labs/instana-v2/applications-and-ibm-middleware/quiz/"},next:{title:"2. Lab Environment",permalink:"/instana-techxchange/labs/instana-v2/explore-instana/lab-environment/"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the Instana portion of the Tech Jam lab, you will be going through several\nkey exercises in order to learn more about Instana's capabilities. The lab\nshould be executed in the numbered order that you see on the left side of the\nscreen. Some of the sections have dependencies on the previous section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, you will be learning about Instana's Kubernetes and Infrastructure\nMonitoring capabilities"),(0,a.kt)("li",{parentName:"ul"},"Then, you will learn how to create Application Perspectives for demo apps that\nhave been pre-installed so you scope your views of the applications."),(0,a.kt)("li",{parentName:"ul"},"Next, you will explore the Application Perspectives that you created."),(0,a.kt)("li",{parentName:"ul"},"Next, you will learn more about Website and Mobile App monitoring."),(0,a.kt)("li",{parentName:"ul"},"Finally, you will briefly cover Instana's Unbounded Analytics.")),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);