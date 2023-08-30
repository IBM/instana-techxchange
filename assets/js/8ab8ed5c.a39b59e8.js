"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25169:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294);function i(e){let{questionNumber:t,question:n,answers:i,correctAnswer:a}=e;const[o,s]=(0,r.useState)(null),[l,c]=(0,r.useState)(null);return r.createElement("div",null,r.createElement("h2",null,t,". ",n),i.map(((e,n)=>{const i=e.concat("-");return r.createElement("div",{key:t},r.createElement("label",{htmlFor:`answer-${t}-${i}`},e),r.createElement("input",{type:"radio",id:`answer-${t}-${i}`,checked:o===e,onChange:()=>(e=>{s(e),c(e===a)})(e)}))})),o?r.createElement("p",{style:{color:l?"green":"red"}},l?"Correct!":"Sorry, that's incorrect. Try again."):r.createElement("div",{style:{height:"46px"}}))}},84184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),a=n(25169);const o={title:"Quiz Time!",description:"Quiz",sidebar_label:"Quiz",sidebar_position:5},s=void 0,l={unversionedId:"instana-v2/administer-instana/quiz/index",id:"instana-v2/administer-instana/quiz/index",title:"Quiz Time!",description:"Quiz",source:"@site/labs/instana-v2/administer-instana/99-quiz/index.mdx",sourceDirName:"instana-v2/administer-instana/99-quiz",slug:"/instana-v2/administer-instana/quiz/",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/quiz/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/administer-instana/99-quiz/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Quiz Time!",description:"Quiz",sidebar_label:"Quiz",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Administer Instana with API",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/administer-with-API/"},next:{title:"Synthetic Monitoring and Action Catalog",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/"}},c={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"}},(0,i.kt)(a.Z,{questionNumber:"1",question:"What Alert Channel type has the best potential to be programmatically adaptable to a large number of external systems?",answers:["Slack","Generic Webhook","PagerDuty","Microsoft Teams"],correctAnswer:"Generic Webhook",mdxType:"MultiChoiceQuestion"}),(0,i.kt)(a.Z,{questionNumber:"2",question:"Which of the following is not a type of Smart Alert?",answers:["Slow Calls","Erroneous Calls","Resource Utilisation","HTTP Status Codes","Throughput"],correctAnswer:"Resource Utilisation",mdxType:"MultiChoiceQuestion"}),(0,i.kt)(a.Z,{questionNumber:"3",question:"When setting up a Smart Alert can Internal Calls and Synthetic Calls be filtered out?",answers:["True","False"],correctAnswer:"True",mdxType:"MultiChoiceQuestion"}),(0,i.kt)(a.Z,{questionNumber:"4",question:"When configuring a Smart Alert multiple Alert Channels can be added to send alerts via for example, Email and Slack?",answers:["True","False"],correctAnswer:"True",mdxType:"MultiChoiceQuestion"}),(0,i.kt)(a.Z,{questionNumber:"5",question:"How do you target the host itself in a Dynamic Focus Query?",answers:["entity.type:host","entity.host:self","entity.selfType:host","entity.host:selfType"],correctAnswer:"entity.selfType:host",mdxType:"MultiChoiceQuestion"})))}d.isMDXComponent=!0}}]);