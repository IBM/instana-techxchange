"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[3379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=a,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},33323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},o="Lab Environment",l={unversionedId:"instana-v2/opentelemetry/lab-environment/index",id:"instana-v2/opentelemetry/lab-environment/index",title:"2. Lab Environment",description:"Lab Environment",source:"@site/labs/instana-v2/opentelemetry/2-lab-environment/index.mdx",sourceDirName:"instana-v2/opentelemetry/2-lab-environment",slug:"/instana-v2/opentelemetry/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/opentelemetry/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Lab Environment",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/introduction/"},next:{title:"3. Agent configuration",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/agent-configuration/"}},s={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-environment"},"Lab Environment"),(0,a.kt)("p",null,"The lab environment includes the below virtual machines:"),(0,a.kt)("p",null,"Kubernetes clusters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"kmaster")," - Kubernetes VM - An instance of Kubernetes cluster whith pre-installed OpenTelemetry Collector and Instana Agent"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Instana")," - RH8 VM - An instance of K3s cluster with pre-installed Instana backend.")),(0,a.kt)("p",null,"Virtual Machines:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Student VM")," - A RHEL VM that will be used as the ",(0,a.kt)("em",{parentName:"li"},"bastion")," host into the lab network. Student VM has access to all lab VM's and clusters and will be your primary workstation for these labs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Docker VM")," - A RHEL VM that contains the pre-installed OpenTelemetry Demo Application")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"architecture",src:n(7171).Z,width:"1165",height:"884"})))}u.isMDXComponent=!0},7171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-001-4e238e34170d21712842eb00c9683a35.png"}}]);