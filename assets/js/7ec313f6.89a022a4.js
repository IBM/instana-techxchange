"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[643],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",sidebar_position:2},l="Lab Environment",o={unversionedId:"instana-v2/server-and-agent-install-lab/lab-environment/index",id:"instana-v2/server-and-agent-install-lab/lab-environment/index",title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",source:"@site/labs/instana-v2/server-and-agent-install-lab/2-lab-environment/index.mdx",sourceDirName:"instana-v2/server-and-agent-install-lab/2-lab-environment",slug:"/instana-v2/server-and-agent-install-lab/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/server-and-agent-install-lab/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/server-and-agent-install-lab/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Instana Sever & Agent Installation Environment Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/server-and-agent-install-lab/introduction/"},next:{title:"3. Instana Server Installation",permalink:"/instana-techxchange/labs/instana-v2/server-and-agent-install-lab/server-installation/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Requesting a Lab Environment",id:"requesting-a-lab-environment",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-environment"},"Lab Environment"),(0,r.kt)("p",null,"The lab environment includes 2 Openshift clusters and 3 VMs."),(0,r.kt)("p",null,"Openshift clusters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"AIOps OCP Cluster")," - Not required for this lab."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Apps SNO Cluster")," - An instance of Single Node OpenShift that will be used\nto learn how to install the Instana agent in a Kubernetes/OpenShift\nenvironment.")),(0,r.kt)("p",null,"Virtual Machines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Guacamole VM")," - A RHEL VM that will be used as the ",(0,r.kt)("em",{parentName:"li"},"bastion host")," for the\nlab network. Guacamole has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Instana")," - An Ubuntu VM that will be used to install a single node\nself-hosted Instana server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MQACE")," - An Ubuntu VM that contains the pre-installed IBM ACE and MQ\nmiddleware. This VM will be used to install the Instana agent and monitor the\nmiddleware.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"IBM MQ, IBM ACE and Quote of the Day have been pre-installed."),(0,r.kt)("li",{parentName:"ul"},"You will install and configure all remaining components during these labs."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:t(9444).Z,width:"991",height:"634"})),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To complete this lab you will require the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instana License",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Agent Key - Entered during lab"),(0,r.kt)("li",{parentName:"ul"},"Sales Key - Entered during lab")))),(0,r.kt)("h2",{id:"requesting-a-lab-environment"},"Requesting a Lab Environment"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Follow\n",(0,r.kt)("a",{parentName:"p",href:"/instana-techxchange/labs/jam-in-a-box/#requesting-a-lab-environment"},"these instructions"),"\nfor step by step guidance on requesting a lab environment in IBM Tech Zone.")),(0,r.kt)("p",null,"Request Tech Zone environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://techzone.ibm.com/my/reservations/create/649cd328fc016400174bed25"},"Jam-in-a-Box: Instana - Install"))))}m.isMDXComponent=!0},9444:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/architecture-instana-db41b27d522e726f448426be4aea3353.png"}}]);