"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},o="Lab Environment",s={unversionedId:"instana-v2/administer-instana/lab-environment/index",id:"instana-v2/administer-instana/lab-environment/index",title:"2. Lab Environment",description:"Instana lab environment setup",source:"@site/labs/instana-v2/administer-instana/2-lab-environment/index.mdx",sourceDirName:"instana-v2/administer-instana/2-lab-environment",slug:"/instana-v2/administer-instana/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/administer-instana/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/introduction/"},next:{title:"3. Administer Instana",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/administer/"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Requesting a Lab Environment",id:"requesting-a-lab-environment",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-environment"},"Lab Environment"),(0,r.kt)("p",null,"The lab environment includes 2 Openshift clusters and 3 VMs."),(0,r.kt)("p",null,"Openshift clusters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"AIOps OCP Cluster")," - Not required for this lab."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Apps SNO Cluster")," - An instance of Single Node OpenShift where demo\napplications (Robot Shop & Quote of the Day) have been pre-installed. Quote\nof the Day has also been integrated with IBM MQ and ACE running on the mqace\nVM to demonstrate further the Instana Servers monitoring capabilities.")),(0,r.kt)("p",null,"Virtual Machines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Guacamole VM")," - A RHEL VM that will be used as the ",(0,r.kt)("em",{parentName:"li"},"bastion")," host into the\nlab network. Guacamole has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Instana")," - An Ubuntu VM with an instance of Instana Server and Instana\nAgent running running in Docker."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MQACE")," - An Ubuntu VM that contains the pre-installed IBM ACE and MQ\nmiddleware.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:t(2223).Z,width:"991",height:"694"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete this lab you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instana Agent Key - Required when requesting lab environment"),(0,r.kt)("li",{parentName:"ul"},"Instana Sales Key - Required when requesting lab environment")),(0,r.kt)("h2",{id:"requesting-a-lab-environment"},"Requesting a Lab Environment"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can follow\n",(0,r.kt)("a",{parentName:"p",href:"/instana-techxchange/labs/jam-in-a-box/#requesting-a-lab-environment"},"these instructions"),"\nif you need guidance on how to request a lab.")),(0,r.kt)("p",null,"For this lab we will be using the\n",(0,r.kt)("a",{parentName:"p",href:"https://techzone.ibm.com/my/reservations/create/649cd8c0fc016400174bed2a"},"Jam-in-a-Box: Instana - Administer"),"\ncollection."))}m.isMDXComponent=!0},2223:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/architecture-feb92078796613e4448e05189a8e50a8.png"}}]);