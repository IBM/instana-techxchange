"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"3. Web-application monitoring",description:"Configure Instana to monitor web-application",sidebar_position:6},o=void 0,p={unversionedId:"instana-v2/opentelemetry/webapplication-monitoring/index",id:"instana-v2/opentelemetry/webapplication-monitoring/index",title:"3. Web-application monitoring",description:"Configure Instana to monitor web-application",source:"@site/labs/instana-v2/opentelemetry/5-webapplication-monitoring/index.mdx",sourceDirName:"instana-v2/opentelemetry/5-webapplication-monitoring",slug:"/instana-v2/opentelemetry/webapplication-monitoring/",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/webapplication-monitoring/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/opentelemetry/5-webapplication-monitoring/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"3. Web-application monitoring",description:"Configure Instana to monitor web-application",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"2. OpenTelemetry instrumentation",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/opentelemetry-instrumentation/"},next:{title:"4. Exploring Instana",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/explore/"}},l={},c=[{value:"Instana web-application end-to-end monitoring",id:"instana-web-application-end-to-end-monitoring",level:2},{value:"Create a Web Application in Instana",id:"create-a-web-application-in-instana",level:2},{value:"Update the OpenTelemetry with a new reportingURL and key",id:"update-the-opentelemetry-with-a-new-reportingurl-and-key",level:2},{value:"Generate traffic on the OpenTelemetry Demo Application",id:"generate-traffic-on-the-opentelemetry-demo-application",level:2}],s={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"instana-web-application-end-to-end-monitoring"},"Instana web-application end-to-end monitoring"),(0,i.kt)("p",null,"In this section we will learn how to create a Web Application in Instana,\nwhich will allow us to capture end-to-end web transactions."),(0,i.kt)("h2",{id:"create-a-web-application-in-instana"},"Create a Web Application in Instana"),(0,i.kt)("p",null,"Log in to your Instana UI, click on Web application and Add Website"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webapp1",src:n(9888).Z,width:"1181",height:"731"})),(0,i.kt)("p",null,"Provide a name of your choice, click Next to get the screen with reportingURL and key. Please save the key value,\nwe will be using this later during the lab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webapp2",src:n(3244).Z,width:"1179",height:"658"})),(0,i.kt)("p",null,"Once the above step is ready, we can move to the next and edit the OpenTelemetry settings."),(0,i.kt)("h2",{id:"update-the-opentelemetry-with-a-new-reportingurl-and-key"},"Update the OpenTelemetry with a new reportingURL and key"),(0,i.kt)("p",null,"Go back to your terminal and apply the below commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl edit deploy my-otel-demo-frontend -n otel-demo\n")),(0,i.kt)("p",null,'Find the string "EUM" (you can use ":/EUM" command in your text editor)'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webapp3",src:n(5597).Z,width:"411",height:"154"})),(0,i.kt)("p",null,"Apply the values as described on the below: "),(0,i.kt)("p",null,"INSTANA_EUM_URL: ",(0,i.kt)("a",{parentName:"p",href:"https://eum.apps.ocp.ibm.edu"},"https://eum.apps.ocp.ibm.edu")),(0,i.kt)("p",null,"INSTANA_EUM_KEY: Use your key from the previous step of this lab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webapp4",src:n(8714).Z,width:"461",height:"161"})),(0,i.kt)("p",null,'Save the file by entering ":wq"'),(0,i.kt)("h2",{id:"generate-traffic-on-the-opentelemetry-demo-application"},"Generate traffic on the OpenTelemetry Demo Application"),(0,i.kt)("p",null,"As described in the chapter 2, please run test traffic through your instance of the OpenTelemetry Demo Application.\nThanks to this, Instana will capture the end-to-end traffic starting from the web activity, down to the services and databases level."))}m.isMDXComponent=!0},9888:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webapp-001-fixed-f73eb6ddbdccad0220891bff1d6d11ea.png"},3244:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webapp-002-fixed-7fb90582754d4b72d9c8b434339537cb.png"},5597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webapp-003-313a6ea24b9f8c0fbb74b9de6be44fff.png"},8714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/webapp-004-fixed-e2a582b85146d3e4462e0cbb5fd29c2a.png"}}]);