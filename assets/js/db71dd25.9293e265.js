"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[5194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,m=h["".concat(r,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[h]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"4. End-User monitoring",description:"Diagnosing End-Users Issues in Instana",sidebar_position:4},s=void 0,l={unversionedId:"instana-v2/Diagnose/end-user-monitoring",id:"instana-v2/Diagnose/end-user-monitoring",title:"4. End-User monitoring",description:"Diagnosing End-Users Issues in Instana",source:"@site/labs/instana-v2/Diagnose/end-user-monitoring.md",sourceDirName:"instana-v2/Diagnose",slug:"/instana-v2/Diagnose/end-user-monitoring",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/end-user-monitoring",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/Diagnose/end-user-monitoring.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. End-User monitoring",description:"Diagnosing End-Users Issues in Instana",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. TroubleShoot an Issue",permalink:"/instana-techxchange/labs/instana-v2/Diagnose/Simulate-Failure"}},r={},p=[{value:"1: Websites and Mobile App Monitoring",id:"1-websites-and-mobile-app-monitoring",level:2},{value:"2: Analytics",id:"2-analytics",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-websites-and-mobile-app-monitoring"},"1: Websites and Mobile App Monitoring"),(0,o.kt)("p",null,"Let's take a look at Website and Mobile Application Monitoring. In this environment, Instana does not include any native mobile applications, but know that Instana can gather End User Monitoring (EUM) data from Mobile Applications. For now, we'll investigate the website monitoring."),(0,o.kt)("p",null,"Using the left side navigation, select ",(0,o.kt)("strong",{parentName:"p"},"Websites & Mobile Apps")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 20",src:n(59942).Z,width:"284",height:"470"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Website monitoring"),", often called ",(0,o.kt)("strong",{parentName:"p"},"End-User Monitoring (EUM)")," or ",(0,o.kt)("strong",{parentName:"p"},"Real-User Monitoring (RUM)"),", is an important tool to understand digital user experience."),(0,o.kt)("p",null,"Instana supports website monitoring by analyzing actual browser request times and route loading times. It allows detailed insights into the web browsing experience of users, and deep visibility into application call paths. The Instana website monitoring solution works by using a lightweight JavaScript agent, which is embedded into the monitored website."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should first generate some traffic in the monitored application."),(0,o.kt)("p",{parentName:"admonition"},"Navigate to the Quote Of The Day application with the route URL "),(0,o.kt)("p",{parentName:"admonition"},"You could use ",(0,o.kt)("a",{parentName:"p",href:"http://10.100.1.60:32000"},"http://10.100.1.60:32000")),(0,o.kt)("p",{parentName:"admonition"},"Use the application to navigate to generate randon quotes , PDFs, and to buy some engraving.")),(0,o.kt)("p",null,"You will see a list of websites that are being monitored. In this environment, you'll see the ",(0,o.kt)("strong",{parentName:"p"},'Quote Of The Day"')," application website you just configured. Click on the blue link for the website to drill down for more details."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 26",src:n(18501).Z,width:"1905",height:"434"})),(0,o.kt)("p",null,"Explore the additional data available within the website monitoring by clicking on some of the other tabs.\nNote: You may want to switch to the different time range. Select last 5 min time range in the top right corner in instana GUI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 27",src:n(55922).Z,width:"1806",height:"771"})),(0,o.kt)("p",null,"Next, explore the ",(0,o.kt)("strong",{parentName:"p"},"Filters")," that you see at the top of the screen.\nIn this environment, the filters will not be very interesting because there is only automated workload coming from a single location. But, usually, you can use this information to filter the web traffic down to specific browser types, OS's, geographic locations and key metadata tags. This can be very useful in identifying whether specific network locations, browser, or OS's are having performance problems. If you want to see typical EUM data, you can look at one of the IBM sales or Business Partner demo environments."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 28",src:n(79585).Z,width:"842",height:"216"})),(0,o.kt)("p",null,"At the top of the screen, click on the ",(0,o.kt)("strong",{parentName:"p"},"Analyze Page Loads button")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 29",src:n(14440).Z,width:"426",height:"153"})),(0,o.kt)("p",null,"You will see a detailed list of the web requests grouped by URL path."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 30",src:n(28842).Z,width:"1774",height:"823"})),(0,o.kt)("p",null,"Next, select one of the requests. You will see a detailed page showing the EUM data and more. At the top of the page, you'll notice that you can see the user that made the request. This sensitive data can be omitted by Instana if the customer desires. You'll also see the Browser version and operating system that was used to access the web page. Depending on the environment, you'll also see geolocation data for where the person accessed the application. In some cases the private IP addresses are not mapped and the ",(0,o.kt)("strong",{parentName:"p"},"User Location")," data will be empty.\nFor example selected here is ",(0,o.kt)("strong",{parentName:"p"},"order/92")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 31",src:n(86811).Z,width:"1543",height:"808"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 32",src:n(80754).Z,width:"1775",height:"804"})),(0,o.kt)("p",null,"Scroll down on the page and you'll see a detailed breakdown of the request including timings for the key page content."),(0,o.kt)("p",null,"Expand one of the entries on the right by clicking the down arrow to view more details.\n",(0,o.kt)("strong",{parentName:"p"},"Image 13")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 33",src:n(6102).Z,width:"1420",height:"619"}),"\nIf you click on the View Backend Trace button, you can investigate the backend trace data that you saw earlier in the lab."),(0,o.kt)("h3",{id:""}),(0,o.kt)("h2",{id:"2-analytics"},"2: Analytics"),(0,o.kt)("p",null,"Next, we're going to investigate Instana's unbounded analytics. Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Analytics")," using the left side navigation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 34",src:n(21065).Z,width:"314",height:"641"})),(0,o.kt)("p",null,"Initially, you will see a screen showing 100% of the ",(0,o.kt)("strong",{parentName:"p"},"Application Calls")," that are happening in the environment."),(0,o.kt)("p",null,"Select the dropdown at the top of the page labeled ",(0,o.kt)("strong",{parentName:"p"},"Applications / Calls")," to view other options. For example, you could analyze the traces, websites, mobile applications, or profiles. For now, close the dialog and we'll analyze the ",(0,o.kt)("strong",{parentName:"p"},"Application Calls")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 35",src:n(63775).Z,width:"808",height:"601"}),"\nOne of Instana's capabilities is ",(0,o.kt)("strong",{parentName:"p"},"unbounded analytics"),". This allows you to apply ad-hoc queries to easily find the data you are looking for. On the screen, you'll see a couple of different ways that you can query/filter the metrics."),(0,o.kt)("p",null,"On the left side, you'll see a number next to the box filters. Expand the dropdown arrows to see the options. Then, select one of the checkboxes to filter the data. (in this example select ",(0,o.kt)("strong",{parentName:"p"},"Quote Of The Day"),")"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 36",src:n(73490).Z,width:"659",height:"891"})),(0,o.kt)("p",null,"Now, uncheck the checkbox to remove the filter."),(0,o.kt)("p",null,"Another option is to use the ",(0,o.kt)("strong",{parentName:"p"},"Filter")," and ",(0,o.kt)("strong",{parentName:"p"},"Group")," options at the top of the page. Let's try out an example. Let's say you want to find the slowest SQL statements in the environment. Let's try to implement a ",(0,o.kt)("strong",{parentName:"p"},"Filter")," and ",(0,o.kt)("strong",{parentName:"p"},"Group")," to accomplish that."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Add Filter")," button at the top of the page. Then, select ",(0,o.kt)("strong",{parentName:"p"},"Call Type")," and select ",(0,o.kt)("strong",{parentName:"p"},"Database")),(0,o.kt)("p",null,"Click on the ",(0,o.kt)("strong",{parentName:"p"},"Add Group")," button. Then, type ",(0,o.kt)("strong",{parentName:"p"},"database statement")," in the filter box and select ",(0,o.kt)("strong",{parentName:"p"},"Database >Statement")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 37",src:n(65656).Z,width:"1380",height:"735"})),(0,o.kt)("p",null,"This will group all of the Database statements by unique SQL statements. You can then sort these statements by latency, erroneous calls, etc."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 38",src:n(85633).Z,width:"1530",height:"674"})),(0,o.kt)("p",null,"Note: You also have the option ",(0,o.kt)("strong",{parentName:"p"},"select metrics")," to choose the metrics that you want to see on the screen. For example, change latency from Average to 95th percentile."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, let's explore one more key capability within Instana."),(0,o.kt)("p",null,"In the upper right corner of the screen, there is an icon of a chain link. Click on the link and a dialog will open. By clicking the Copy button, you can send a link to a team member. When they open the link, it will take them to a screen with the exact same context that you are looking at. This can be very valuable when collaborating with team members to diagnose a problem. Within the dialog, you'll see that there is a checkbox to ",(0,o.kt)("strong",{parentName:"p"},"Lock current time range"),". By locking the current time range, when the link is opened, it will take the person to a view with the exact same time range that you are looking at. Otherwise, they are taken to the most recent time range."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 39",src:n(41102).Z,width:"782",height:"309"})),(0,o.kt)("p",null,"That completes this lab. In the lab you learnt how to set up ",(0,o.kt)("strong",{parentName:"p"},"End User Monitoring")," for your application and reviewed a lot of functionality including analyzing calls for your application.  "),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Below are the steps used to configure  EUM / RUM for application "Quote of the Day" for this lab.')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"No need to complete these below steps for this Lab.\nBelow steps are just for illustration and how EUM is configured")),(0,o.kt)("p",null,"Using the left side navigation, select ",(0,o.kt)("strong",{parentName:"p"},"Websites & Mobile Apps")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 20",src:n(59942).Z,width:"284",height:"470"})),(0,o.kt)("p",null,"To Configure ",(0,o.kt)("em",{parentName:"p"},"EUM"),",  Click on ",(0,o.kt)("strong",{parentName:"p"},'"Add Website"')," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 21",src:n(2958).Z,width:"1885",height:"225"})),(0,o.kt)("p",null,"Type in the name as ",(0,o.kt)("strong",{parentName:"p"},'"QOTD"')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"explore application 23",src:n(44352).Z,width:"1883",height:"724"})),(0,o.kt)("p",null,"Copy the 3 values as shown in ",(0,o.kt)("strong",{parentName:"p"},"Image 3")," to add these to the environment variables of the ",(0,o.kt)("strong",{parentName:"p"},"QOTD")," app deployment."),(0,o.kt)("p",null,"Login to the qotd master vm by typing the following in  Terminal window on the bastion vm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"ssh -p 2022 cocuser@169.62.62.174\n\n")),(0,o.kt)("p",null,"Edit the qotd deployment to add the env variables you copied - refer  ",(0,o.kt)("strong",{parentName:"p"},"Image 3")," above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl -n qotd edit deployment qotd-web\n\n")),(0,o.kt)("p",null,"Scroll down the file to the to the section as shown here"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  creationTimestamp: null\n  labels:\n    app: qotd-web\nspec:\n  containers:\n  - env:\n    - name: LOG_LEVEL\n      value: info\n    - name: ENABLE_INSTANA\n      value: "true"\n    - name: INSTANA_REPORTING_URL\n    - name: INSTANA_ENUM_MIN_JS_URL\n    - name: INSTANA_KEY\n    - name: USE_REQ_TOKEN\n      value: "true"\n    - name: POLLING_FREQUENCY\n      value: "5000"\n    \n')),(0,o.kt)("p",null,"Add values which were copied earlier as shown in ",(0,o.kt)("strong",{parentName:"p"},"Image 4")," below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  template:\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: qotd-web\nspec:\n  containers:\n  - env:\n    - name: LOG_LEVEL\n      value: info\n    - name: ENABLE_INSTANA\n      value: "true"\n    - name: INSTANA_REPORTING_URL\n      value: https://eum.apps.ocp.ibm.edu/\n    - name: INSTANA_ENUM_MIN_JS_URL\n      value: https://eum.apps.ocp.ibm.edu/eum.min.js\n    - name: INSTANA_KEY\n      value: 2DPIaxpUSJSM9zWjRuoLVw\n    - name: USE_REQ_TOKEN\n      value: "true"\n    - name: POLLING_FREQUENCY\n      value: "5000"\n    - name: ANOMALY_GENERATOR_URL\n      value: http://qotd-usecase.qotd-load.svc.cluster.local:3012/services/web\n    - name: QUOTE_SVC\n      value: http://qotd-quote.qotd.svc.cluster.local:3001\n    - name: AUTHOR_SVC\n      value: http://qotd-author.qotd.svc.cluster.local:3002\n    - name: RATING_SVC\n      value: http://qotd-rating.qotd.svc.cluster.local:3004\n    - name: PDF_SVC\n      value: http://qotd-pdf.qotd.svc.cluster.local:3005\n    - name: ENGRAVING_SVC\n      value: http://qotd-engraving.qotd.svc.cluster.local:3006\n    - name: QRCODE_SVC\n      value: http://qotd-qrcode.qotd.svc.cluster.local:9080/qotd-qrcode/qr\n    - name: BRANDING\n      value: Quote of the Day\n    - name: INSTANA_AGENT_HOST\n')),(0,o.kt)("p",null,"Once you save and close the file, the pod will restart.\nWait for a min and go to instana home page\n",(0,o.kt)("a",{parentName:"p",href:"https://dev-aiops.apps.ocp.ibm.edu/#/home"},"https://dev-aiops.apps.ocp.ibm.edu/#/home")),(0,o.kt)("hr",null))}d.isMDXComponent=!0},59942:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_20-ce172a8512a45f46b9e1e0f46acdd98c.jpg"},2958:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_21-3d6a42a24a093e3f0763d149b2e6bcf9.jpg"},44352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_23-e16a77ab8af3908a845f16d7689c01c0.jpg"},18501:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_26-9f8305cfda67311d692b52d4a1773824.jpg"},55922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_27-bdaaeb0819ba8fd18c9280103b166ac2.jpg"},79585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_28-1da6c193add86ef3a197c73300afb289.jpg"},14440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_29-5718ea4cceadb95cd3f37bfdb60d1cc2.jpg"},28842:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_30-8c3d3264b5038dc1b03a55e2b31d89e4.jpg"},86811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_31-e455bd6d7d2070e426f8804c1a45fe9d.jpg"},80754:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_32-daeb9ec905bd03f8cbbd083f4d53f980.jpg"},6102:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_33-3b900fb4aa00fcf11c5a085f2ccba70f.jpg"},21065:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_34-24dce4fabf00c8f648d93c69514c22ad.jpg"},63775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_35-1290332f25614bc2d972b41e532bddc0.jpg"},73490:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_36-660b945512e75a857056383db5e9a524.jpg"},65656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_37-05d6019f29259006542db7d17a1f9376.jpg"},85633:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_38-a59b2573ac530776b6a2a9a9ecd35d0a.jpg"},41102:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore_application_39-a1f6765cc530e00610218851186b945b.jpg"}}]);