"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[3524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},s="Lab Architecture",o={unversionedId:"instana-v2/Diagnose/lab-environment/index",id:"instana-v2/Diagnose/lab-environment/index",title:"2. Lab Environment",description:"Instana lab environment setup",source:"@site/labs/instana-v2/Diagnose/2-lab-environment/index.mdx",sourceDirName:"instana-v2/Diagnose/2-lab-environment",slug:"/instana-v2/Diagnose/lab-environment/",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/lab-environment/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/Diagnose/2-lab-environment/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"2. Lab Environment",description:"Instana lab environment setup",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Introduction",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/Introduction/"},next:{title:"3. TroubleShoot an Issue",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/Simulate-Failure"}},l={},c=[],u={toc:c},h="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-architecture"},"Lab Architecture"),(0,a.kt)("p",null,"This lab consists of several virtual machines that are setup with the software necessary to execute the lab.\nThe virtual machines can be seen below. "),(0,a.kt)("p",null,"The virtual machines are:"),(0,a.kt)("h1",{id:"-2021-001-bastion"},"\u2022 2021-001-bastion:"),(0,a.kt)("p",null,"This is the Bastion node for the OpenShift cluster. In the lab guide, we will refer to it as the \u201cBastion Node\u201d"),(0,a.kt)("h1",{id:"-2021-001-infranfs"},"\u2022 2021-001-infranfs:"),(0,a.kt)("p",null,"This is the Infrastructure node for the OpenShift cluster. It provides NFS filesystems for the OpenShift storage and is running an haproxy.\nAll traffic into the OpenShift cluster flows through the haproxy. In addition, we have an IBM MQ and IBM App Connect Enterprise server running on this virtual machine. In the lab guide, we will refer to this node as the \u201cInfrastructure Node\u201d."),(0,a.kt)("h1",{id:"-2021-001-student"},"\u2022 2021-001-student:"),(0,a.kt)("p",null," This is the primary VM that you will be using to access the Instana user interface, run commands from a terminal window, etc. You will\naccess the other VMs via ssh. In the lab guide, we will refer to this node as the \u201cstudent VM\u201d"),(0,a.kt)("h1",{id:"-2021-001-kubernetes"},"\u2022 2021-001-kubernetes:"),(0,a.kt)("p",null,"This virtual machine is a single node Kubernetes cluster. We have ac ouple of different applications installed into the Kubernetes cluster.\nIn the lab guide, we will refer to this virtual machine as the \u201cKubernetes\u201d node."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VMs list",src:n(33394).Z,width:"1536",height:"851"})))}p.isMDXComponent=!0},33394:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/VMs_list-12c5d3cb1f4c6ddd42ca51b62c8ef9c2.png"}}]);