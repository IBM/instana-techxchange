"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"1. Introduction",description:"Instana Lab",sidebar_position:1},i="Introduction",l={unversionedId:"instana-v2/Diagnose/Introduction/index",id:"instana-v2/Diagnose/Introduction/index",title:"1. Introduction",description:"Instana Lab",source:"@site/labs/instana-v2/Diagnose/Introduction/index.mdx",sourceDirName:"instana-v2/Diagnose/Introduction",slug:"/instana-v2/Diagnose/Introduction/",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/Introduction/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/Diagnose/Introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Instana Lab",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quiz",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/quiz/"},next:{title:"2. Lab Environment",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/lab-environment/"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the Instana portion of the lab, you will be going through several\nkey exercises in order to learn more about Instana's capabilities. The lab\nshould be executed in the numbered order that you see on the left side of the\nscreen. Some of the sections have dependencies on the previous section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Earlier you learnt about Instana's Kubernetes and Infrastructure\nMonitoring capabilities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, you learnt how to create Application Perspectives for demo apps that\nhave been pre-installed so you scope your views of the applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next, you learnt how explore the Application Perspectives that you created.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this lab, students will use Instana to diagnose a number of different problems.\nStudents will understand how to leverage Instana\u2019s Event correlation to analyze complex problems\ninvolving multiple correlated events. And, students will learn how to use Analytics to analyze calls\nto identify the root case of a problems. Students will learn how Instana\u2019s relationship data provides\nadditional context when analyzing slowdowns and outages.\nFinally, students will learn how Instana\u2019s EUM/RUM data can help diagnose problems affecting end users.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Also in this lab you will learn more about  Website and Mobile App monitoring.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, you will briefly cover Instana's Unbounded Analytics."))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);