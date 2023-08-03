"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"2. OpenTelemetry instrumentation",description:"Instrument demo application with OpenTelemetry",sidebar_position:5},i="OpenTelemetry instrumentation",l={unversionedId:"instana-v2/opentelemetry/opentelemetry-instrumentation/index",id:"instana-v2/opentelemetry/opentelemetry-instrumentation/index",title:"2. OpenTelemetry instrumentation",description:"Instrument demo application with OpenTelemetry",source:"@site/labs/instana-v2/opentelemetry/4-opentelemetry-instrumentation/index.mdx",sourceDirName:"instana-v2/opentelemetry/4-opentelemetry-instrumentation",slug:"/instana-v2/opentelemetry/opentelemetry-instrumentation/",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/opentelemetry-instrumentation/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/opentelemetry/4-opentelemetry-instrumentation/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"2. OpenTelemetry instrumentation",description:"Instrument demo application with OpenTelemetry",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"1. Instana agent installation",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/agent-installation/"},next:{title:"3. Web-application monitoring",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/webapplication-monitoring/"}},s={},p=[{value:"Enable OpenTelemetry in Instana",id:"enable-opentelemetry-in-instana",level:2},{value:"Restart cluster workload",id:"restart-cluster-workload",level:2},{value:"Verify OpenTelemetry Demo Application",id:"verify-opentelemetry-demo-application",level:2},{value:"Create an Application in Instana",id:"create-an-application-in-instana",level:2},{value:"Generate OpenTelemetry Demo Application traffic",id:"generate-opentelemetry-demo-application-traffic",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"opentelemetry-instrumentation"},"OpenTelemetry instrumentation"),(0,r.kt)("p",null,"For the purpose of this lab, we will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/instana/opentelemetry-demo/tree/main"},"Instana OpenTelemetry Demo Application"),"\nwhich is the fork of generic ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-demo"},"OpenTelemetry Demo Application"),"."),(0,r.kt)("p",null,"Instana's custom fork of the OpenTelemetry Demo Application is a microservice-based application, integrated with an Instana backend.\nThe demo shows the native Instana OpenTelemetry data collection, correlation of OpenTelemetry tracing and the underlying monitored infrastructure,\nand an example of trace continuity between Instana tracing and OpenTelemetry."),(0,r.kt)("p",null,"OpenTelemetry Demo Application was already installed for you in the lab environment. The following steps are required to enable OpenTelemetry\nin the Instana agent."),(0,r.kt)("p",null,"OpenTelemetry is an open-source observability framework with a collection of software development kits (SDKs), vendor-neutral or vendor-agnostic APIs, and tools for instrumentation.\nThis technology can generate, collect, export, and instrument telemetry data to analyze your platform's behavior and performance. Opentelemetry is also known as OTel.\nOpenTelemetry is included into Instana license, there's no additional payment required."),(0,r.kt)("h2",{id:"enable-opentelemetry-in-instana"},"Enable OpenTelemetry in Instana"),(0,r.kt)("p",null,"Let's edit the configmap of instana-agent. We need to let instana-agent know which OpenTelemetry settings are required"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl edit configmap --namespace instana-agent \n")),(0,r.kt)("p",null,"Remove all commented lines from the configuration section as described below."),(0,r.kt)("p",null,'You can use "dd" in the text editor to remove a single line from the file.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configmap",src:n(4132).Z,width:"795",height:"1028"})),(0,r.kt)("p",null,"Once the remove is done, copy and paste the below configuration content. "),(0,r.kt)("p",null,"Please note that there are exact number of spaces required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"      com.instana.plugin.opentelemetry:\n        # enabled: false       # legacy setting, will only enable grpc, defaults to false\n        grpc:\n          enabled: true    # takes precedence over legacy settings above, defaults to true iff \"grpc:\" is present\n        http:\n          enabled: true     # allows to enable http endpoints, defaults to true iff \"http:\" is present\n      \n      com.instana.ignore:\n        arguments:\n          # - '-javaagent:/opt/otel/opentelemetry-javaagent-all.jar'\n          # - '-javaagent:/app/opentelemetry-javaagent.jar'\n          # - '-javaagent:/tmp/opentelemetry-javaagent.jar'\n      \n      com.instana.tracing:\n        extra-http-headers:\n          - traceparent\n          - tracestate\n      \n      com.instana.plugin.generic.hardware:\n        enabled: true\n      \n      # otel-demo configurations\n      com.instana.plugin.postgresql:\n        user: 'ffs'\n        password: 'ffs'\n        database: 'postgres'\n      \n      com.instana.plugin.javatrace:\n        instrumentation:\n          enabled: false\n        trace-jvms-with-problematic-agents: true\n      \n      com.instana.plugin.python:\n        autotrace:\n          enabled: false\n      \n      com.instana.plugin.php:\n        tracing:\n          enabled: false\n")),(0,r.kt)("p",null,"The final structure of the configmap should look like the below example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configmap",src:n(8861).Z,width:"1135",height:"887"})),(0,r.kt)("p",null,'Save the file by typing ":wq" '),(0,r.kt)("h2",{id:"restart-cluster-workload"},"Restart cluster workload"),(0,r.kt)("p",null,"Restart all of the instana agents pods to ensure that configmap change was implemented."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl rollout restart daemonset instana-agent --namespace instana-agent \n")),(0,r.kt)("p",null,"Restart will prompt with a message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"daemonset.apps/instana-agent restarted\n")),(0,r.kt)("p",null,"Restart all of the Otel Demo app pods to ensure the Instana injection was done."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n otel-demo rollout restart deploy \n")),(0,r.kt)("p",null,"Restart will prompt with a message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deployment.apps/my-otel-demo-accountingservice restarted\ndeployment.apps/my-otel-demo-adservice restarted\ndeployment.apps/my-otel-demo-cartservice restarted\ndeployment.apps/my-otel-demo-checkoutservice restarted\ndeployment.apps/my-otel-demo-currencyservice restarted\ndeployment.apps/my-otel-demo-emailservice restarted\ndeployment.apps/my-otel-demo-featureflagservice restarted\ndeployment.apps/my-otel-demo-ffspostgres restarted\ndeployment.apps/my-otel-demo-frauddetectionservice restarted\ndeployment.apps/my-otel-demo-frontend restarted\ndeployment.apps/my-otel-demo-frontendproxy restarted\ndeployment.apps/my-otel-demo-kafka restarted\ndeployment.apps/my-otel-demo-loadgenerator restarted\ndeployment.apps/my-otel-demo-paymentservice restarted\ndeployment.apps/my-otel-demo-productcatalogservice restarted\ndeployment.apps/my-otel-demo-quoteservice restarted\ndeployment.apps/my-otel-demo-recommendationservice restarted\ndeployment.apps/my-otel-demo-redis restarted\ndeployment.apps/my-otel-demo-shippingservice restarted\n")),(0,r.kt)("h2",{id:"verify-opentelemetry-demo-application"},"Verify OpenTelemetry Demo Application"),(0,r.kt)("p",null,"Once the instana-agent and OpenTelemetry Demo Application were restarted, it is now time to Verify\nif the applications works and delivers metrics as expected."),(0,r.kt)("p",null,"Your instance of OpenTelemetry Demo Application is available under the ",(0,r.kt)("a",{parentName:"p",href:"https://otel-demo.ocp.ibm.edu/"},"https://otel-demo.ocp.ibm.edu/"),"\nLet's use a browser to open that page. Please note the https in the address bar.\nAlso, do not worry about the security message - accept the self-signed certificate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"otelapp",src:n(1957).Z,width:"1907",height:"936"})),(0,r.kt)("h2",{id:"create-an-application-in-instana"},"Create an Application in Instana"),(0,r.kt)("p",null,"Now, let's create an application perspective in Instana. Log in to your Instana instance and create new application perspective."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"appperspective",src:n(4069).Z,width:"1189",height:"728"})),(0,r.kt)("p",null,'Switch to "Advanced mode"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"appperspective2",src:n(6984).Z,width:"1043",height:"632"})),(0,r.kt)("p",null,'Provide application name of your choice, your cluster name, select "All downstream services" and "All calls", click "Create"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"appperspective2",src:n(8722).Z,width:"1049",height:"967"})),(0,r.kt)("h2",{id:"generate-opentelemetry-demo-application-traffic"},"Generate OpenTelemetry Demo Application traffic"),(0,r.kt)("p",null,"Once the demo application is up and running, let's generate some traffic.\nGo back to the OpenTelemetry Demo Application in the browser, click through the site and explore the page,\nadd products to the cart, make some orders."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"appperspective2",src:n(2010).Z,width:"1902",height:"922"})),(0,r.kt)("p",null,"Once you have purchased some of the products, let's go back to the Instana UI, open your Application Perspective to see\nthe captured traffic."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"appperspective3",src:n(8106).Z,width:"2455",height:"1126"})),(0,r.kt)("p",null,"This view concludes this chapter. You are now able to see the traffic from your instance of the OpenTelemetry Demo Application captured by Instana.\nLet's move to the next sections."))}d.isMDXComponent=!0},4132:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-001-fixed-1ced9c1b830af9cf59ed8589e65cfd21.png"},4069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-002-fixed-95b93c68eab9d1cca862727639ad5f96.png"},6984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-003-fixed-fbffaddaa4aa24f80a1c05c348014e54.png"},8722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-005-fixed-ca59239dd31f393595e4fde919c10067.png"},8106:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-006-fixed-19c28cc62195abc99479e6fb25d20ab8.png"},8861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-007-dd2661dfa890f340cef9441caf7de229.png"},1957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-008-b7848518eb846b1eb4d3959ac0f2015b.png"},2010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/otel-instrumentation-009-2e7bad3cb5b23ba5a112cdf58d45e1dc.png"}}]);