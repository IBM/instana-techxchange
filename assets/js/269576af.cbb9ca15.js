"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[3384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"6. Smart Alert",description:"Welcome to the Synthetic Monitoring and Action Catalog lab",sidebar_position:60},l="Smart alert",s={unversionedId:"instana-v2/synthetic-pop/smart-alert/index",id:"instana-v2/synthetic-pop/smart-alert/index",title:"6. Smart Alert",description:"Welcome to the Synthetic Monitoring and Action Catalog lab",source:"@site/labs/instana-v2/synthetic-pop/5-smart-alert/index.mdx",sourceDirName:"instana-v2/synthetic-pop/5-smart-alert",slug:"/instana-v2/synthetic-pop/smart-alert/",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/smart-alert/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/synthetic-pop/5-smart-alert/index.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"6. Smart Alert",description:"Welcome to the Synthetic Monitoring and Action Catalog lab",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"5. Selenium IDE script",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/selenium/"},next:{title:"7. Action Catalog",permalink:"/instana-techxchange/labs/instana-v2/synthetic-pop/action-catalog/"}},c={},o=[{value:"Create smart Alert for test",id:"create-smart-alert-for-test",level:2}],p={toc:o},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-alert"},"Smart alert"),(0,r.kt)("h2",{id:"create-smart-alert-for-test"},"Create smart Alert for test"),(0,r.kt)("p",null,"Smart Alerts allow you to identify a threshold violation.   Then, if desired, Alert people via external systems like Watson AIOps or Email, Slack, Service Now, etc. in Instana the notification mechanism is called an ",(0,r.kt)("strong",{parentName:"p"},"Alert Channel")," "),(0,r.kt)("p",null,'Click "Synthetic Monitoring" -> "Add"\n',(0,r.kt)("img",{src:n(61695).Z,width:"2003",height:"713"})),(0,r.kt)("p",null,'Then, select "ADD SYNTHETIC SMART ALERT":\n',(0,r.kt)("img",{src:n(91420).Z,width:"317",height:"232"})),(0,r.kt)("p",null,'Click "Add Synthetic Test"\n',(0,r.kt)("img",{src:n(71321).Z,width:"1122",height:"167"})),(0,r.kt)("p",null,"Find the test you created earlier and select the ",(0,r.kt)("strong",{parentName:"p"},"checkbox"),".  Then, click ",(0,r.kt)("strong",{parentName:"p"},"Add 1 Test")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68128).Z,width:"1718",height:"894"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," to go to the next screen on the dialog."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42322).Z,width:"1720",height:"892"})),(0,r.kt)("p",null,'You may optionally add filters for monitored what is being monitored. In this case, we will not be adding any filters.  Simply click "Next".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78051).Z,width:"1714",height:"893"})),(0,r.kt)("p",null,"We choose 1 consecutive occurrence to fire an alert, click Next:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16656).Z,width:"1720",height:"899"})),(0,r.kt)("p",null,"In the next step, we will be selecting an Alert Channel.  Alert Channels allow you to notify people and teams various ",(0,r.kt)("strong",{parentName:"p"},"channels")," such as email, slack, ServiceNow, etc."),(0,r.kt)("p",null,'Select "Select Alert Channels", "Create Alert Channel" to create new channel, then populate name of the channel and the list of email addresses (we will not send emails to real addresses, so just populate the field with any email address):'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46960).Z,width:"1720",height:"897"})),(0,r.kt)("p",null,'Then, click "Create Alert Channel", click "Cancel" to finish channel creation procedure.'),(0,r.kt)("p",null,'Select created channel and click "Add 1 Channel":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(139).Z,width:"1722",height:"901"})),(0,r.kt)("p",null,'And click "Next":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(64882).Z,width:"1728",height:"889"})),(0,r.kt)("p",null,'Configure the alert that will be visible when the threshold violated. Set meaningful values for Title, Alert Level and Description, then click "Create" button:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(31063).Z,width:"1718",height:"891"})),(0,r.kt)("p",null,"Refresh page to have the alert appeared:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(84734).Z,width:"2000",height:"473"})),(0,r.kt)("p",null,"Check Events appeared:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(47486).Z,width:"2003",height:"620"})),(0,r.kt)("p",null,"When new Events trigger on the synthetic test, an e-mail will be sent out via the ",(0,r.kt)("strong",{parentName:"p"},"Alert Channel")," notifying the people of the failure."))}h.isMDXComponent=!0},84734:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ConfiguredAlert-new-7ba31937ec893c645457b023eada6ffd.png"},47486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Events-new-f2694f962e119e2c83383ff90d19de15.png"},42322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step1-new-e6893ec45d530087ad75af7c2e147cce.png"},16656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step3-new-0dd5f7a40725e343729424ad1c1efeb3.png"},139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step4_AddChannel-new-899dd2747f8fa9c03496d4e5de01a3c7.png"},64882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step4_AlertChannels-new-8553df2a7319789f2e1077e37e1c7ba1.png"},46960:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step4_CreateChannel-new-b326968dc75f81fef3a3fe9b2f65561d.png"},31063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SA_Step5-new-13c12b6cc2f698780dff5af8c3fb2f56.png"},91420:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/addSmartAlert-776ded214025a344f66b4c266db8d2e2.png"},78051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/optionalFilter-new-6857be143df276c03cea1077c82a37dc.png"},71321:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectSyntheticTest-75518a1d5dd37efa9d582a3657489196.png"},68128:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectTest-new-1776f258838406d9258ad1d5b79a7b1d.png"},61695:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/smartAlert-new-d5616f0687e4bc7fd2ad6b53cf9f9d42.png"}}]);