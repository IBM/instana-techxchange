"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[3480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),f=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=f(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=f(n),g=o,u=h["".concat(s,".").concat(g)]||h[g]||c[g]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var f=2;f<r;f++)i[f]=n[f];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>f});var a=n(87462),o=(n(67294),n(3905));const r={title:"3. Agent configuration",description:"Agent configuration",sidebar_position:3},i="Agent configuration",l={unversionedId:"instana-v2/opentelemetry/agent-configuration/index",id:"instana-v2/opentelemetry/agent-configuration/index",title:"3. Agent configuration",description:"Agent configuration",source:"@site/labs/instana-v2/opentelemetry/3-agent-configuration/index.mdx",sourceDirName:"instana-v2/opentelemetry/3-agent-configuration",slug:"/instana-v2/opentelemetry/agent-configuration/",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/agent-configuration/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/opentelemetry/3-agent-configuration/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Agent configuration",description:"Agent configuration",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Lab Environment",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/lab-environment/"},next:{title:"4. OpenTelemetry instrumentation",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/opentelemetry-instrumentation/"}},s={},f=[{value:"How to collect Otel data?",id:"how-to-collect-otel-data",level:2},{value:"Enabling the OpenTelemetry data ingestion",id:"enabling-the-opentelemetry-data-ingestion",level:2},{value:"Starting the Agent",id:"starting-the-agent",level:2},{value:"Verifying the Agent",id:"verifying-the-agent",level:2},{value:"Check OpenTelemetry ports",id:"check-opentelemetry-ports",level:3},{value:"Check Instana UI",id:"check-instana-ui",level:3}],p={toc:f},h="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agent-configuration"},"Agent configuration"),(0,o.kt)("p",null,"The Instana agent can directly receive OpenTelemetry traces, metrics, and logs in OpenTelemetry format. Then, the Instana agent forwards the data to the Instana backend. "),(0,o.kt)("p",null,"In this section of the lab, you will complete the following configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable the OpenTelemetry data ingestion in the configuration.yaml file"),(0,o.kt)("li",{parentName:"ul"},"Start the Instana agent with OpenTelemetry configuration")),(0,o.kt)("h2",{id:"how-to-collect-otel-data"},"How to collect Otel data?"),(0,o.kt)("p",null,"There are two options you can use in order to send Otel data to the Instana backend:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Through the Instana Agent"),(0,o.kt)("li",{parentName:"ol"},"Directly to the Instana backend ")),(0,o.kt)("p",null,"For this lab, we will focus on point 1 - we will be sending data to the Instana backend using Instana Agent."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Sending Otel data through the Instana Agent can be useful for some implementations with more strict firewall rules")),(0,o.kt)("h2",{id:"enabling-the-opentelemetry-data-ingestion"},"Enabling the OpenTelemetry data ingestion"),(0,o.kt)("p",null,"By default, the OpenTelemetry data ingestion in the Instana host agent is deactivated. That is why, you have to enable the OpenTelemetry configuration. "),(0,o.kt)("p",null,'Please use the "Student" VM, open the "Terminal" application and login to the "docker" Virtual Machine by using the following command:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ssh root@docker\n")),(0,o.kt)("p",null,'Password is "Passw0rd"'),(0,o.kt)("p",null,"next, proceed to the opentelemetry-demo directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /root/opentelemetry-demo/instana/agent\n")),(0,o.kt)("p",null,"next, edit the configuration.yaml file"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note, that the default location for the configuration.yaml file is in the Instana agent directory - for example\n/opt/instana/agent but in the case of this Lab, we have prepared ready-to-use configuration with pre-configured Otel settings")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"vim configuration.yaml\n")),(0,o.kt)("p",null,'To enable the reception of the OpenTelemetry data in the host agent, make sure, these two "enabled: true" values are populated in the configuration.yaml file of the host agent. Please change the values from "false" to "true"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"com.instana.plugin.opentelemetry:\n  grpc:\n    enabled: true\n  http:\n    enabled: true\n")),(0,o.kt)("p",null,"After the OpenTelemetry data ingestion is activated, the host agent activates a collector for OpenTelemetry's default OTLP exporter on the ports 4317 for gRPC and 4318 for HTTP or HTTPS connections."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You might noticed, that there are other values populated within the configuration.yaml - do not change these. The lines below the OpenTelemetry configuration are required for the next steps in the Labs!")),(0,o.kt)("h2",{id:"starting-the-agent"},"Starting the Agent"),(0,o.kt)("p",null,"Now, the configuration.yaml file is ready to be used. The next step is to start the Instana agent using the altered configuration. Please run below command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vim instana-agent-docker.yaml\n")),(0,o.kt)("p",null,'which will display the docker command allowing to run the Instana agent on the "docker" virtual machine. The snippet looks like the below:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run \\\n   --detach \\\n   --name instana-agent \\\n   --volume /var/run:/var/run \\\n   --volume /run:/run \\\n   --volume /dev:/dev:ro \\\n   --volume /sys:/sys:ro \\\n   --volume /var/log:/var/log:ro \\\n   --volume ./configuration.yaml:/opt/instana/agent/etc/instana/configuration.yaml \\\n   --privileged \\\n   --net=host \\\n   --pid=host \\\n   --env="INSTANA_AGENT_ENDPOINT=agent-acceptor.instana.training" \\\n   --env="INSTANA_AGENT_ENDPOINT_PORT=443" \\\n   --env="INSTANA_AGENT_KEY=XXXX" \\\n   --env="INSTANA_DOWNLOAD_KEY=XXXX" \\\n   --env="INSTANA_AGENT_ZONE=otel-demo" \\\n   icr.io/instana/agent\n')),(0,o.kt)("p",null,"please note below options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"--volume ./configuration.yaml:/opt/instana/agent/etc/instana/configuration.yaml \\ - this line is required in order to pass the new configuration file into the agent. The configuration file keeps the OpenTelementry settings enabled,"),(0,o.kt)("li",{parentName:"ul"},'--env="INSTANA_AGENT_KEY=XXXX" ',"-"," this can vary, depending on your agent key,"),(0,o.kt)("li",{parentName:"ul"},'--env="INSTANA_DOWNLOAD_KEY=XXXX" \\ - this can vary, depending on your download key,'),(0,o.kt)("li",{parentName:"ul"},'--env="INSTANA_AGENT_ZONE=otel-demo" - optional parameter, which will help to configure the proper zone in Instana')),(0,o.kt)("p",null,'Copy the command from the "instana-agent-docker.yaml" file and paste it into the terminal. After instana-agent image and container setup, you will similar screen as below'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"agent2",src:n(29186).Z,width:"685",height:"709"})),(0,o.kt)("p",null,"Please confirm the Instana Agent docker container is running correctly, by the below command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,o.kt)("p",null,"The effect of the command should be similar to the below screen "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"agent3",src:n(68077).Z,width:"941",height:"77"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Optional step (not required for this Lab)"),(0,o.kt)("p",{parentName:"admonition"},"Alternative way of installing Instana Agent is to use the Instana UI. Login to the Instana UI, then navigate to -> Deploy Agent -> search for Docker -> copy the snippet. In this case, please remember about the configuration.yaml file appendix."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"agent3",src:n(94181).Z,width:"1251",height:"621"}))),(0,o.kt)("h2",{id:"verifying-the-agent"},"Verifying the Agent"),(0,o.kt)("p",null,"Once the agent is started, there are two steps required to be sure, the agent is working fine and it's accepting the OpenTelemetry traffic."),(0,o.kt)("h3",{id:"check-opentelemetry-ports"},"Check OpenTelemetry ports"),(0,o.kt)("p",null,"Run these two commands to make sure the OpenTelemetry ports are opened:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"netstat -an | grep 4317\nnetstat -an | grep 4318\n")),(0,o.kt)("p",null,"The results of these commands should confirm, that ports 4317 and 4318 are listening and waiting for the OpenTelemetry traffic "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"agent3",src:n(56035).Z,width:"609",height:"170"})),(0,o.kt)("h3",{id:"check-instana-ui"},"Check Instana UI"),(0,o.kt)("p",null,'Please go back to the "Student" VM, open a Firefox browser and let\'s move to the Instana UI (you will find the link in the bookmark bar). '),(0,o.kt)("p",null,"Make sure, the agent is reporting content to the Instana backend. Open the Instana UI in the browser and navigate to Settings -> Agents as shown on the below screen:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"agent3",src:n(98396).Z,width:"1657",height:"880"})),(0,o.kt)("p",null,"This is the confirmation, that the Instana Agent is sending data to the backend."),(0,o.kt)("p",null,"Please proceed to the next section of the lab."))}c.isMDXComponent=!0},29186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-agent-install-cda859d7158f13839a26c73d9001df52.png"},68077:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},94181:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-agent-install3-8012747de8f10040f87a86d8e179fc79.png"},56035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-agent-install4-d720398f1143f34f7bad03cd35924aef.png"},98396:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-agent-install5-05edb5c973b1723846386a345e2c12d2.png"}}]);