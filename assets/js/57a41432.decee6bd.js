"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5169:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{questionNumber:t,question:n,answers:r,correctAnswer:o}=e;const[i,s]=(0,a.useState)(null),[c,l]=(0,a.useState)(null);return a.createElement("div",null,a.createElement("h2",null,t,". ",n),r.map(((e,n)=>{const r=e.concat("-");return a.createElement("div",{key:t},a.createElement("label",{htmlFor:`answer-${t}-${r}`},e),a.createElement("input",{type:"radio",id:`answer-${t}-${r}`,checked:i===e,onChange:()=>(e=>{s(e),l(e===o)})(e)}))})),i?a.createElement("p",{style:{color:c?"green":"red"}},c?"Correct!":"Sorry, that's incorrect. Try again."):a.createElement("div",{style:{height:"46px"}}))}},1356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(5169);const i={title:"Quiz Time!",description:"Quiz",sidebar_label:"Quiz",sidebar_position:5},s=void 0,c={unversionedId:"instana-v2/explore-instana/quiz/index",id:"instana-v2/explore-instana/quiz/index",title:"Quiz Time!",description:"Quiz",source:"@site/labs/instana-v2/explore-instana/99-quiz/index.mdx",sourceDirName:"instana-v2/explore-instana/99-quiz",slug:"/instana-v2/explore-instana/quiz/",permalink:"/instana-techxchange/labs/instana-v2/explore-instana/quiz/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/explore-instana/99-quiz/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Quiz Time!",description:"Quiz",sidebar_label:"Quiz",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"3. Explore Instana",permalink:"/instana-techxchange/labs/instana-v2/explore-instana/explore/"},next:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/introduction/"}},l={},u=[],p={toc:u},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},(0,r.kt)(o.Z,{questionNumber:"1",question:"Kubernetes and Cloud Foundry are the only supported Platforms Instana can monitor?",answers:["True","False"],correctAnswer:"False",mdxType:"MultiChoiceQuestion"}),(0,r.kt)(o.Z,{questionNumber:"2",question:"What happens when you do not specify a Zone Name for an Agent?",answers:["The agent will not show in the Infrastructure view.","The agent will be in an error state until a Zone Name is added.","The Agents host will be placed into a zone called 'Undefined Zone'.","The host will not be assigned to any Zone."],correctAnswer:"The Agents host will be placed into a zone called 'Undefined Zone'.",mdxType:"MultiChoiceQuestion"}),(0,r.kt)(o.Z,{questionNumber:"3",question:"What Dynamic Focus Query would you use to filter out a host with the name 'instana'?",answers:["entity.hostName:instana","entity.host.hostname:instana","entity.host.name:instana","entity.hostname.name:instana"],correctAnswer:"entity.host.name:instana",mdxType:"MultiChoiceQuestion"}),(0,r.kt)(o.Z,{questionNumber:"4",question:"What is the quickest way to manually find a host with high CPU utilisation?",answers:["Click through each host in the Infrastructure map and view the CPU chart.","This cannot be done manually, you must create a dashboard.","Use the 'Comparison Table' view to list all hosts and sort by CPU Usage."],correctAnswer:"Use the 'Comparison Table' view to list all hosts and sort by CPU Usage.",mdxType:"MultiChoiceQuestion"}),(0,r.kt)(o.Z,{questionNumber:"5",question:"Which of the following is the most accurate description of an Application Perspective?",answers:["A group of services that are related to each other and are part of the same application.","A group of services that are related to each other and are part of the same application and are running on the same host.","A group of services and endpoints that are combined into a dashboard to show the health and performance of an application.","A group of services and endpoints running on the same host that are combined into a dashboard to show the health and performance of an application."],correctAnswer:"A group of services and endpoints that are combined into a dashboard to show the health and performance of an application.",mdxType:"MultiChoiceQuestion"})))}d.isMDXComponent=!0}}]);