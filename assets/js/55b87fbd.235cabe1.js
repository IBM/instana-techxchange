"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[4914],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},42385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"1. Introduction",description:"Instana Lab",sidebar_position:1},i="Introduction",s={unversionedId:"instana-v2/Diagnose/Introduction/index",id:"instana-v2/Diagnose/Introduction/index",title:"1. Introduction",description:"Instana Lab",source:"@site/labs/instana-v2/Diagnose/Introduction/index.mdx",sourceDirName:"instana-v2/Diagnose/Introduction",slug:"/instana-v2/Diagnose/Introduction/",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/Introduction/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/Diagnose/Introduction/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Introduction",description:"Instana Lab",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quiz",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/quiz/"},next:{title:"2. Lab Environment",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/lab-environment/"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this lab, students will use Instana to diagnose a number of different problems. Students will understand how to leverage Instana\u2019s\nEvent correlation to analyze complex problems involving multiple correlated events. And, students will learn how to use Analytics to\nanalyze calls to identify the root case of a problems. Students will learn how Instana\u2019s relationship data provides additional context\nwhen analyzing slowdowns and outages. Finally, students will learn how Instana\u2019s EUM/RUM data can help diagnose problems affecting\nend users. The target personas for this lab are IT Operations, SREs, Development, and LOB/App Owner."),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);