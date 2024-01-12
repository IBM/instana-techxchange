"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[5609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},44559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",sidebar_position:20},o="Lab Environment",s={unversionedId:"instana-v2/synthetic-pop/lab-environment/index",id:"instana-v2/synthetic-pop/lab-environment/index",title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",source:"@site/labs/instana-v2/synthetic-pop/2-lab-environment/index.mdx",sourceDirName:"instana-v2/synthetic-pop/2-lab-environment",slug:"/instana-v2/synthetic-pop/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/synthetic-pop/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/introduction/"},next:{title:"3. Point of Presence",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/pop-installation/"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-environment"},"Lab Environment"),(0,a.kt)("p",null,"The lab environment includes 1 Kubernetes cluster, 1 K3s cluster and 2 VMs."),(0,a.kt)("p",null,"Kubernetes clusters:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes cluster")," - Kubernetes VM - An instance of Kubernetes cluster where you will install Instana Synthetics Point of Presence and Instana Action Catalog."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"K3s cluster")," - RH8 VM - An instance of K3s cluster with pre-installed Instana backend.")),(0,a.kt)("p",null,"Virtual Machines:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Student VM")," - A RHEL VM that will be used as the ",(0,a.kt)("em",{parentName:"li"},"bastion")," host into the\nlab network. Student VM has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Infra NFS")," - A RHEL VM that contains the pre-installed NFS storage, IBM ACE and MQ middleware.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"architecture",src:n(42893).Z,width:"991",height:"693"})))}m.isMDXComponent=!0},42893:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-cc4eda5808720b101ccefef8148f92c5.png"}}]);