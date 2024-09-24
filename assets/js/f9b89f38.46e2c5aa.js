"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[9589],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},l="Lab Environment",o={unversionedId:"instana-v2/applications-and-ibm-middleware/lab-environment/index",id:"instana-v2/applications-and-ibm-middleware/lab-environment/index",title:"2. Lab Environment",description:"Instana lab environment setup",source:"@site/labs/instana-v2/applications-and-ibm-middleware/2-lab-environment/index.mdx",sourceDirName:"instana-v2/applications-and-ibm-middleware/2-lab-environment",slug:"/instana-v2/applications-and-ibm-middleware/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/applications-and-ibm-middleware/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/applications-and-ibm-middleware/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/applications-and-ibm-middleware/introduction/"},next:{title:"3. Install the Robot Shop Application",permalink:"/instana-techxchange/labs/instana-v2/applications-and-ibm-middleware/robot-shop-installation/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Requesting a Lab Environment",id:"requesting-a-lab-environment",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(m,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-environment"},"Lab Environment"),(0,i.kt)("p",null,"The lab environment includes 2 Openshift clusters and 3 VMs."),(0,i.kt)("p",null,"Openshift clusters:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"AIOps OCP Cluster")," - Not required for this lab."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Apps SNO Cluster")," - An instance of Single Node OpenShift where you will\ninstall the Robot Shop demo application that will be monitored using Instana.\nThere is a pre-installed demo application called Quote of the Day that will\nbe integrated with IBM MQ and ACE to demonstrate further the Instana Servers\nmonitoring capabilities.")),(0,i.kt)("p",null,"Virtual Machines:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Guacamole VM")," - A RHEL VM that will be used as the ",(0,i.kt)("em",{parentName:"li"},"bastion")," host into the\nlab network. Guacamole has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Instana")," - An Ubuntu VM with an instance of Instana Server and Instana\nAgent running running in Docker."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"MQACE")," - An Ubuntu VM that contains the pre-installed IBM ACE and MQ\nmiddleware.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"architecture",src:t(78183).Z,width:"991",height:"694"})),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To complete this lab you will require the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instana License",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Agent Key - Entered when requesting lab environment"),(0,i.kt)("li",{parentName:"ul"},"Sales Key - Entered when requesting lab environment")))),(0,i.kt)("h2",{id:"requesting-a-lab-environment"},"Requesting a Lab Environment"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Follow\n",(0,i.kt)("a",{parentName:"p",href:"/instana-techxchange/labs/jam-in-a-box/#requesting-a-lab-environment"},"these instructions"),"\nfor step by step guidance on requesting a lab environment in IBM Tech Zone.")),(0,i.kt)("p",null,"Request Tech Zone environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://techzone.ibm.com/my/reservations/create/649cd3d0fc016400174bed27"},"Jam-in-a-Box: Instana - Apps & IBM Middleware"))))}u.isMDXComponent=!0},78183:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/architecture-a8486cd1920488e1626697645e988399.png"}}]);