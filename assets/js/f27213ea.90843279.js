"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[5998],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},h="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),h=p(n),d=i,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||o;return n?a.createElement(u,s(s({ref:e},c),{},{components:n})):a.createElement(u,s({ref:e},c))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r[h]="string"==typeof t?t:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2321:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"4. Administer Instana with API",description:"Perform Administrative Functions with Instana using API's",sidebar_position:4},s="Administer Instana with API's",r={unversionedId:"instana-v2/administer-instana/administer-with-API/index",id:"instana-v2/administer-instana/administer-with-API/index",title:"4. Administer Instana with API",description:"Perform Administrative Functions with Instana using API's",source:"@site/labs/instana-v2/administer-instana/4-administer-with-API/index.mdx",sourceDirName:"instana-v2/administer-instana/4-administer-with-API",slug:"/instana-v2/administer-instana/administer-with-API/",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/administer-with-API/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/administer-instana/4-administer-with-API/index.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4. Administer Instana with API",description:"Perform Administrative Functions with Instana using API's",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"3. Administer Instana",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/administer/"},next:{title:"Quiz",permalink:"/instana-techxchange/labs/instana-v2/administer-instana/quiz/"}},l={},p=[{value:"4.1: Create an Instana API Token",id:"41-create-an-instana-api-token",level:2},{value:"4.2: Application Metrics",id:"42-application-metrics",level:2},{value:"List all applications",id:"list-all-applications",level:3},{value:"List applications with errors",id:"list-applications-with-errors",level:3},{value:"Query application services by an application name",id:"query-application-services-by-an-application-name",level:3},{value:"4.3: Infrastructure-level metrics",id:"43-infrastructure-level-metrics",level:2},{value:"List hosts monitoried by Instana",id:"list-hosts-monitoried-by-instana",level:3},{value:"List the services running on a host",id:"list-the-services-running-on-a-host",level:3},{value:"4.4: Events and Alerts",id:"44-events-and-alerts",level:2},{value:"Get a list of all Open Events opened within the last 20 seconds minutes",id:"get-a-list-of-all-open-events-opened-within-the-last-20-seconds-minutes",level:3},{value:"Create a new Custom Event",id:"create-a-new-custom-event",level:3},{value:"4.5: Summary",id:"45-summary",level:2}],c={toc:p},h="wrapper";function m(t){let{components:e,...o}=t;return(0,i.kt)(h,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"administer-instana-with-apis"},"Administer Instana with API's"),(0,i.kt)("p",null,"In this section of the lab we will create an Personal API Token that will be used for executing the Instana Rest API calls. The Instana web REST API allows for retrieval of data such as traces and metrics, as well as configuration, such as service extraction and user management."),(0,i.kt)("p",null,"From the Student host open the Firefox browser and select the ",(0,i.kt)("strong",{parentName:"p"},"Instana"),"\nbookmark."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are unsure how to get access to the Student host see\n",(0,i.kt)("a",{parentName:"p",href:"/instana-techxchange/labs/jam-in-a-box/#accessing-a-lab-environment"},"Accessing a Lab Environment"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"open firefox",src:n(95400).Z,width:"1251",height:"842"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can safely ignore the warning about the certificate being untrusted."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{alt:"untrusted-cert-advance",src:n(70152).Z,width:"2186",height:"1460"}))),(0,i.kt)("p",null,"When prompted, enter the username and password from the credentials file."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(57960).Z,width:"498",height:"463"})),(0,i.kt)("h2",{id:"41-create-an-instana-api-token"},"4.1: Create an Instana API Token"),(0,i.kt)("p",null,'In this section of the lab we will create an Personal API Token that will be used for executing the Instana Rest API calls. Personal tokens can be created Settings > User settings > Personal API tokens and only require a name to be set. This token "inherits" the permission of the creating user. '),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Settings")," on the left menu")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(25043).Z,width:"558",height:"1168"}))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select API Tokens menu item in ",(0,i.kt)("strong",{parentName:"li"},"ACCESS CONTROL")," and Select ",(0,i.kt)("strong",{parentName:"li"},"Add API Token")," on the right to add a new toekn")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(9964).Z,width:"3342",height:"980"}))))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Enter a name for the token, for example ",(0,i.kt)("strong",{parentName:"li"},"RestAPILab"))),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(64588).Z,width:"1711",height:"586"}))))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"the following set of ",(0,i.kt)("strong",{parentName:"li"},"Permissions")," are required for executing the API's in this lab.")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},"Configuration of applications ",(0,i.kt)("br",null),"\nService & endpoint mapping ",(0,i.kt)("br",null),"\nConfiguration of Alert Channels ",(0,i.kt)("br",null),"\nConfiguration of Events, Alerts and Smart Alerts for APs and websites ",(0,i.kt)("br",null),"\nConfiguration of global Smart Alerts ",(0,i.kt)("br",null))))),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(39829).Z,width:"1619",height:"762"}))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Save")," button at the bottom of the page to save the API Token")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(47338).Z,width:"1758",height:"888"}))))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select the token to copy it to the clipboard. The Token will be used in the subsequent section of the lab to execute the API's ")),(0,i.kt)("blockquote",null,(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("blockquote",{parentName:"blockquote"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(37386).Z,width:"1609",height:"472"}))))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("strong",{parentName:"p"},"host")," and ",(0,i.kt)("strong",{parentName:"p"},"apiToken")," environment variables on the bastion host"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Open the Terminal window on the Bastion host by selecting the Terminal icon on the desktop")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(90945).Z,width:"976",height:"639"})),(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the follwoign export commands to the terminal window"),(0,i.kt)("p",{parentName:"li"},"  export host=dev-aiops.apps.ocp.ibm.edu  ",(0,i.kt)("br",null),"\nexport apiToken=<Token from step #6>"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2744).Z,width:"735",height:"186"})))))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To copy and paste from the lab guide to the bastion host window, use the Insert Text icon at the top of the window. You will be using this method to Copy and Paste Curl commands from the documentation to the Terminal window in the bastion host."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:n(7361).Z,width:"582",height:"257"}))),(0,i.kt)("h2",{id:"42-application-metrics"},"4.2: Application Metrics"),(0,i.kt)("p",null,"The Application Metrics API calls will be run in the terminal Window. To Run the Curl commands, copy and paste the request curl command to the Terminal window."),(0,i.kt)("h3",{id:"list-all-applications"},"List all applications"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' curl -k --silent -X GET -H "authorization: apiToken $apiToken"  "https://$host/api/application-monitoring/applications?pretty"\n')),(0,i.kt)("p",null,"Response "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93829).Z,width:"1515",height:"703"})),(0,i.kt)("h3",{id:"list-applications-with-errors"},"List applications with errors"),(0,i.kt)("p",null,"The request will list all applications monitored by the Instana agent that are throwing http 5xx errors. The ",(0,i.kt)("strong",{parentName:"p"},"metric")," attribute in the request object can be changed to http.4xx or http.3xx as needed."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' curl -k -X POST  -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: apiToken $apiToken" \\\n  "https://$host/api/application-monitoring/metrics/applications?pretty" \\\n  -d \'\n{\n  "applicationBoundaryScope": "ALL",\n  "label": "Robot-Shop",\n  "metrics": [\n    {\n      "aggregation": "SUM",\n      "granularity": 0,\n      "metric": "http.5xx"\n    }\n  ]\n}\'\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(63140).Z,width:"702",height:"699"})),(0,i.kt)("h3",{id:"query-application-services-by-an-application-name"},"Query application services by an application name"),(0,i.kt)("p",null,"The request will list all applications monitored by the Instana agent that are throwing http 5xx errors. The nameFilter attribute in the request can be changed to the ",(0,i.kt)("strong",{parentName:"p"},"qotd")," applciaiton."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl -k --silent -X GET -H "authorization: apiToken $apiToken"  "https://$host/api/application-monitoring/applications/services?pretty" -d \'nameFilter=Robot-Shop\'\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55890).Z,width:"1765",height:"823"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note, the screenshot does not list the complete set of services and the data may look different in your environment.")),(0,i.kt)("h2",{id:"43-infrastructure-level-metrics"},"4.3: Infrastructure-level metrics"),(0,i.kt)("p",null,"In this section we will use the Instana applciation interface to help build the API calls required to fetch Infrastucture information and correlate it to an Applciation. "),(0,i.kt)("h3",{id:"list-hosts-monitoried-by-instana"},"List hosts monitoried by Instana"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the Instana applciation, Select the Analytics icon")),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{src:n(57107).Z,width:"1290",height:"709"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select Infrastructure from the drop-down menu")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(33101).Z,width:"1302",height:"627"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the search field, enter ",(0,i.kt)("strong",{parentName:"li"},"Host")," to filter the results and select the ",(0,i.kt)("strong",{parentName:"li"},"Host")," Entity Type")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22072).Z,width:"1790",height:"341"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select the API query option on the left to view the API curl command")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75890).Z,width:"1794",height:"567"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"We will use a Text Editor to make minor updates to the API query before we run it on the Terminal window. To open the text editor, select the Activities icon on the left and Type Text Editor in the searcd box")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79371).Z,width:"1348",height:"263"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Copy the curl command from the API query")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75890).Z,width:"1794",height:"567"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Paste the curl command to the text Editor")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11381).Z,width:"1077",height:"372"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make the following changes to the curl command before running it in the Terminal window"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("strong",{parentName:"li"},"-k")," after the curl command to accept the self-Signed certificate"),(0,i.kt)("li",{parentName:"ol"},"Adding ",(0,i.kt)("strong",{parentName:"li"},"?pretty")," will make the output more readable")))),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"The final query will look like this")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93270).Z,width:"1072",height:"174"})),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Run the Curl command by copying and pasting it to the Terminal window")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77913).Z,width:"1072",height:"328"})),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Right click on the Terminal window and select ",(0,i.kt)("strong",{parentName:"li"},"paste"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(60274).Z,width:"633",height:"316"})),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"The API will list hosts monitored by Instana")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(98282).Z,width:"1876",height:"824"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A ",(0,i.kt)("strong",{parentName:"p"},"snapshot")," represents static information about an entity as it was at a specific point in time. To clarify: Static information is any information which is seldom changing, e.g. process IDs, host FQDNs or a list of host hard disks. The counterpart to static information are metrics which have a much higher change rate, e.g. host CPU usage or JVM garbage collection activity. Snapshots only contain static information.")),(0,i.kt)("h3",{id:"list-the-services-running-on-a-host"},"List the services running on a host"),(0,i.kt)("p",null,"We will now use the Response output from the previous curl command. The ",(0,i.kt)("strong",{parentName:"p"},"snapshotId")," in the response will be used in the next curl command to list services running on a host."),(0,i.kt)("p",null,"Use the follwoing steps to copy the snapshotId for one of the hosts, for example ",(0,i.kt)("strong",{parentName:"p"},"infra.ocp.ibm.edus")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the snapshotId from the response of the curl command in step 12. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(34309).Z,width:"2940",height:"1004"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the curl command below and paste it to the terminal"))),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' curl -k --silent -X GET -H "authorization: apiToken $apiToken"  "https://$host/api/infrastructure-monitoring/snapshots/<snaphostId>?pretty"\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Paste the command to the Send text option in the Bastion host window")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(84511).Z,width:"1412",height:"289"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the snapshotId in the commend with the snapshotId by removing the ",(0,i.kt)("strong",{parentName:"p"},"snapshotId")," and pasting the coppied id. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(83483).Z,width:"1609",height:"184"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Curl command to list services running on the host"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The service routes are listed with their ip, subnet and Fully Qualified Domain Name"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:n(54878).Z,width:"679",height:"607"}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The Host information includes filesystem, OS and Machine id. This is typically helpful for mapping host informaiotn with external data sources."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:n(85508).Z,width:"1111",height:"644"}))),(0,i.kt)("h2",{id:"44-events-and-alerts"},"4.4: Events and Alerts"),(0,i.kt)("p",null,"In this section we will fetch Events from applications monitored by Instana using API's"),(0,i.kt)("h3",{id:"get-a-list-of-all-open-events-opened-within-the-last-20-seconds-minutes"},"Get a list of all Open Events opened within the last 20 seconds minutes"),(0,i.kt)("p",null,"The request will list all application Events in the last 20 seconds."),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'curl -k --silent -X GET -H "authorization: apiToken $apiToken"  "https://$host/api/events?windowSize=20000&excludeTriggeredBefore=true&pretty"\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(22074).Z,width:"1519",height:"290"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Adjust the windowSize if you do not see any Events returned. For example to view Events that occured in the past 1 minute use 60000 as the value for ",(0,i.kt)("strong",{parentName:"p"},"windowSize"))),(0,i.kt)("h3",{id:"create-a-new-custom-event"},"Create a new Custom Event"),(0,i.kt)("p",null,"In this section we will use an API to create a new Custom Event and verify it in the Instana user interface. ",(0,i.kt)("br",null)),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here is a description of a few of the attributes in the request ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"id")," : The unique name of the custom event. Note this value is the same as the value in the PUT request URL. The name of the event we have used is ",(0,i.kt)("strong",{parentName:"p"},"robotshopcpu")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"name")," : The name of the Event. In thsi example we named the Event ",(0,i.kt)("strong",{parentName:"p"},"Lab_Event1")," ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"query")," : The dynamic query that spefifies the name of the applicaiton. In this example the application name is ",(0,i.kt)("strong",{parentName:"p"},"Robot-Shop"),"  ",(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},"rules")," : The rules that will trigger the event. In this example, the event will trigger when the host CPU is greater than or equal to ",(0,i.kt)("strong",{parentName:"p"},"90%")," ",(0,i.kt)("br",null))),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' curl -k -X PUT  -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: apiToken $apiToken" \\\n  "https://$host/api/events/settings/beta/event-specifications/custom/robotshopcpu" \\\n  -d \'\n{\n    "id": "robotshopcpu",\n    "name": "Lab_Event1",\n    "entityType": "host",\n    "query": "entity.application.name:Robot-Shop",\n    "triggering": true,\n    "description": "Monitor System Host CPU",\n    "expirationTime": "5000",\n    "enabled": true,\n    "rules": [\n        {\n            "ruleType": "threshold",\n            "metricName": "cpu.sys",\n            "metricPattern": null,\n            "rollup": 0,\n            "window": 5000,\n            "aggregation": "avg",\n            "conditionOperator": ">=",\n            "conditionValue": 0.9,\n            "severity": 10\n        }\n    ],\n    "actions": []\n}\'\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(47308).Z,width:"1763",height:"597"})),(0,i.kt)("p",null,"Use the following steps to verify the event has been created in the Instana application"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," icon on the left navigation")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55901).Z,width:"282",height:"653"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Events")," from the menu and enter the Event name specified in the request ",(0,i.kt)("strong",{parentName:"li"},"Lab_"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81070).Z,width:"1789",height:"523"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select the event to view the event configuration")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17969).Z,width:"1793",height:"709"})),(0,i.kt)("h2",{id:"45-summary"},"4.5: Summary"),(0,i.kt)("p",null,"At this point, you have used the API's to perform various tasks such as monitoring applciation metrics, getting a list of Events and creating new Events. API's are helpful when automating tasks such as migrating configuration between environments or exporting metrics data to external systems."),(0,i.kt)("p",null,"Reference Link:"),(0,i.kt)("p",null,"Instana OpenAPI documentation : ",(0,i.kt)("a",{parentName:"p",href:"https://instana.github.io/openapi/"},"https://instana.github.io/openapi/")),(0,i.kt)("hr",null))}m.isMDXComponent=!0},57960:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/login-4bfbf5fd724af14ce335dc516c1e7736.png"},70152:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/untrusted-cert-advance-954725e84d2839590377564af68c9d4c.png"},63140:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/500_error_response-704e01a43979d342db730d928534a1ad.png"},79371:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/activities-9ea329ce5844d5a52fced933b6d3196f.png"},57107:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/analytics-2048887dda69ec125bbbb6693b1e7a90.png"},25043:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_1-4e8075d5ab1d7579abe13c68b0c06f6c.png"},9964:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_2-74e2279b4f92412c0795266b95736076.png"},64588:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_3-075cfa2435aad05a3f8bb61362ba3882.png"},39829:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_4-c7543fe50a769096c23bb9df079b1068.png"},47338:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_5-1aa27b598f5f937c2acc5e1a4f99a0d1.png"},37386:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api_6-95c010368e48a2d4544319d5ff31c1a4.png"},54878:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/applicaiton_routes-7dd350d0a5e2f053a96f7623a68eff52.png"},93829:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/applications_api_response-a780e949a4740d733a4b1d6ce28e5958.png"},7361:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/copy-and-paste-e31e3c69d5bd5b3f5b8868d8d1bcdc16.png"},77913:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/copy_curl-022943f40d52ca6ec4da92b38f02306c.png"},84511:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/copy_curl_snapshot-ce25890678a2038d9c116ac52102ef6b.png"},34309:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/copy_snapshotid-ee79a63d46e29bc7b778b2b34a6cd825.png"},93270:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/curl_api_query-f18bfe8eea08db9d9677374babb6b85a.png"},47308:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/custom_event-1019369c85709cc3ac487cf09fef327c.png"},81070:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/custom_lab_event-4263176f92374bbbc93b5e0f54e8f760.png"},17969:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/custom_lab_event_view-d1d6b3cc5c4afa67684ca83246433e0c.png"},22074:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/events_20_seconds-858d7f45a09c7e2eb3681192dbd93e07.png"},2744:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/export_tokens-689994de2f642ab390d47f6d5d3a8740.png"},22072:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/host_filter-80e81ccab1ff5c749a6f20f4ed492dd2.png"},85508:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/host_subnets-b1db919c5a911c67cfd51e5c8170da2a.png"},98282:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/hosts_api-218be24902c17283395531cc7a58263e.png"},33101:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/infrastructure-810dbbf2eaa268caaa0269ae8a24a316.png"},95400:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/open-firefox-0a80d4638a24f8ad7a63f5184fbfa7b1.png"},90945:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/open-terminal-bc1fce2e86f8d713aee6c96887b44dfa.png"},60274:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/paste_curl-7f804d26ecc1feb58aa12916497a5013.png"},75890:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/select_api_query-56f457e17daeeae5f65c8ad987acaf66.png"},55901:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/select_settings-3b9f618aec394591cd0f5d582905420f.png"},55890:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/services_api_response-dd7699d4f297a99f919895f3703dcd56.png"},11381:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/text_editor-c2c1b7b5f03441a5230c7d16c8df98f2.png"},83483:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/updated_snapshotId-73422d76821d6700a289e309f9993eac.png"}}]);