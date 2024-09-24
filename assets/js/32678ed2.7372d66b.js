"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[6912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"5. Exploring Instana",description:"Explore Instana",sidebar_position:5},o=void 0,s={unversionedId:"instana-v2/opentelemetry/explore/index",id:"instana-v2/opentelemetry/explore/index",title:"5. Exploring Instana",description:"Explore Instana",source:"@site/labs/instana-v2/opentelemetry/5-explore/index.mdx",sourceDirName:"instana-v2/opentelemetry/5-explore",slug:"/instana-v2/opentelemetry/explore/",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/explore/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/instana-v2/opentelemetry/5-explore/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"5. Exploring Instana",description:"Explore Instana",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. OpenTelemetry instrumentation",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/opentelemetry-instrumentation/"},next:{title:"6. OpenTelemetry Collector",permalink:"/instana-techxchange/labs/instana-v2/opentelemetry/opentelemetry-collector/"}},l={},c=[{value:"Explore Instana and OpenTelemetry traces",id:"explore-instana-and-opentelemetry-traces",level:2},{value:"Instana native tracing",id:"instana-native-tracing",level:2},{value:"OpenTelemetry tracing",id:"opentelemetry-tracing",level:2},{value:"Instana and OpenTelemetry combined traces",id:"instana-and-opentelemetry-combined-traces",level:2},{value:"Instana native tracing - code examples",id:"instana-native-tracing---code-examples",level:2},{value:"OpenTelemetry tracing - code examples",id:"opentelemetry-tracing---code-examples",level:2},{value:"Section summary",id:"section-summary",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explore-instana-and-opentelemetry-traces"},"Explore Instana and OpenTelemetry traces"),(0,r.kt)("p",null,"Now, once the Instana and OpenTelemetry Demo Application are in sync, you can start exploring the captured data."),(0,r.kt)("h2",{id:"instana-native-tracing"},"Instana native tracing"),(0,r.kt)("p",null,"In this section you will focus on exploring Instana's native tracing capabilities. Within the Instana UI, select Analytics. Then, add two Filter criteria as shown below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application name: your application name"),(0,r.kt)("li",{parentName:"ul"},"Service name: frontend-proxy")),(0,r.kt)("p",null,'You\'ll need to specify an "AND" condition between the two filter parameters.'),(0,r.kt)("p",null,'Click on the "router frontend egress" as shown on the below screen'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore4",src:n(4682).Z,width:"1590",height:"794"})),(0,r.kt)("p",null,"On the right side of the screen you will notice tags and call parameters, together with an Infrastructure information - EnvoyProxy.\nThis means that Instana injected its own tracing libraries into the proxy application."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Instana native traces tags are always represented as a well-formated table")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore5",src:n(10333).Z,width:"1604",height:"782"})),(0,r.kt)("h2",{id:"opentelemetry-tracing"},"OpenTelemetry tracing"),(0,r.kt)("p",null,"Using Instana agent, you can also receive OpenTelemetry based traces. Let's find an example in your environment.\nGo to Instana UI/Analytics (1) and search for calls which meet these criteria: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application name: your application name (2)"),(0,r.kt)("li",{parentName:"ul"},"Service name: quoteservice (3)")),(0,r.kt)("p",null,"Click on the call link (4) to see the transaction details."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore6",src:n(3514).Z,width:"1459",height:"987"})),(0,r.kt)("p",null,"You can select different calls within the call stack and the context on the right will change.  "),(0,r.kt)("p",null,'Select the "POST /getquote" call and then look at the right side of the screen. You will find there a list of json attributes captured by Instana. One of them is called\n"telemetry.sdk.name" with a value "opentelemetry", which proves that the content is coming from the OpenTelemetry tracer.'),(0,r.kt)("p",null,"Notice that the trace context is quite different from the formatting when looking at a native Instana trace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore7",src:n(61252).Z,width:"2120",height:"1146"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Instana Otel traces tags are always represented as a JSON-structured content")),(0,r.kt)("h2",{id:"instana-and-opentelemetry-combined-traces"},"Instana and OpenTelemetry combined traces"),(0,r.kt)("p",null,'One of the key capabilities within Instana is the ability to stitch together traces using Instana\'s proprietary tracing and OpenTelemetry traces into a single application trace.\nWithout this unique capability, you would be "required" to instrument your entire application with OpenTelemetry.   This can be a significant challenge,\nparticularly when there are shared services.'),(0,r.kt)("p",null,"Please follow the below instructions to find an example of such a transaction in your environment."),(0,r.kt)("p",null,"Go to Instana UI/Analytics and search for the calls that are in your application perspective and endpoint name is /api/cart like presented below.\nClick on /api/cart to see the details of the call."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore1",src:n(40510).Z,width:"1804",height:"921"})),(0,r.kt)("p",null,"Click on the first call as highlighted on the below screen in a point (1). The point (2) represents the captured data.\nThe content was delivered by a native Instana tracing.  You can tell based on the formatting of the Tags."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore2",src:n(77021).Z,width:"1635",height:"960"})),(0,r.kt)("p",null,"Click on the second call within the call stack as described below in a point (1). The details on the right (2) represents the captured data which comes\nfrom the OpenTelemetry tracer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"explore3",src:n(81811).Z,width:"1642",height:"953"})),(0,r.kt)("p",null,"The above example shows how Instana can combine traces from both OpenTelemetry and Instana tracing and stitch them together into a single application transaction."),(0,r.kt)("h2",{id:"instana-native-tracing---code-examples"},"Instana native tracing - code examples"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Code examples section of this lab is strictly informational - there's no need to implement or run the code during the labs")),(0,r.kt)("p",null,"Instana can provide combined traces from the OpenTelemetry and Instana native tracing. In the below example, you can see, how to\nuse native Instana instrumentation techniques. In the below snippet, we follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/instana-observability/current?topic=technologies-monitoring-envoy-proxy#configuring-distributed-tracing"},"Envoy tracing configuration described here")),(0,r.kt)("p",null,"As an outcome, Instana will inject its code and capture tracing of a calls, which were processed by the Envoy proxy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'FROM envoyproxy/envoy:v1.25-latest\nRUN apt-get update && apt-get install -y gettext-base wget ca-certificates && apt-get clean && rm -rf /var/lib/apt/lists/*\n\nUSER envoy\nWORKDIR /home/envoy\nCOPY ./src/frontendproxy/envoy.tmpl.yaml envoy.tmpl.yaml\n\n# Instana tracing\nARG ARTI_PATH=\'https://artifact-public.instana.io/artifactory/shared/com/instana/libinstana_sensor/\'\nARG INSTANA_AGENT_KEY\nARG INSTANA_DOWNLOAD_KEY\nRUN access_key=$([ ! -z "${INSTANA_DOWNLOAD_KEY}" ] && echo "${INSTANA_DOWNLOAD_KEY}" || echo "${INSTANA_AGENT_KEY}") \\\n    && wget --user _ --password ${access_key} --output-document=./list.html ${ARTI_PATH} \\\n    && sensor_version=$(grep -o "href=\\"[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+/\\"" ./list.html | tail -n1 | cut -d\'"\' -f2) \\\n    && echo "Using sensor version ${sensor_version}" \\\n    && wget --user _ --password ${access_key} --output-document=/home/envoy/libcxx-libinstana_sensor.so ${ARTI_PATH}${sensor_version}linux-amd64-libcxx-libinstana_sensor.so\n\nENTRYPOINT ["/bin/sh", "-c", "envsubst < envoy.tmpl.yaml > envoy.yaml && envoy -c envoy.yaml;"]\n')),(0,r.kt)("p",null,"Please note the use of libcxx-libinstana_sensor.so library."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/instana/opentelemetry-demo/blob/main/src/frontendproxy/Dockerfile"},"The source code is available here")),(0,r.kt)("h2",{id:"opentelemetry-tracing---code-examples"},"OpenTelemetry tracing - code examples"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Code examples section of this lab is strictly informational - there's no need to implement or run the code during the labs")),(0,r.kt)("p",null,"If you wish to use OpenTelemetry in your application, here is the example snippet which can show, how to build the proper instrumentation. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use OpenTelemetry\\API\\Common\\Instrumentation\\Globals;\nuse OpenTelemetry\\API\\Trace\\Span;\nuse OpenTelemetry\\API\\Trace\\SpanKind;\nuse Psr\\Http\\Message\\ResponseInterface as Response;\nuse Psr\\Http\\Message\\ServerRequestInterface as Request;\nuse Slim\\App;\n\nfunction calculateQuote($jsonObject): float\n{\n    $quote = 0.0;\n    $childSpan = Globals::tracerProvider()->getTracer('manual-instrumentation')\n        ->spanBuilder('calculate-quote')\n        ->setSpanKind(SpanKind::KIND_INTERNAL)\n        ->startSpan();\n    $childSpan->addEvent('Calculating quote');\n\n    try {\n        if (!array_key_exists('numberOfItems', $jsonObject)) {\n            throw new \\InvalidArgumentException('numberOfItems not provided');\n        }\n        $numberOfItems = intval($jsonObject['numberOfItems']);\n        $quote = round(8.90 * $numberOfItems, 2);\n\n        $childSpan->setAttribute('app.quote.items.count', $numberOfItems);\n        $childSpan->setAttribute('app.quote.cost.total', $quote);\n\n        $childSpan->addEvent('Quote calculated, returning its value');\n    } catch (\\Exception $exception) {\n        $childSpan->recordException($exception);\n    } finally {\n        $childSpan->end();\n        return $quote;\n    }\n}\n\nreturn function (App $app) {\n    $app->post('/getquote', function (Request $request, Response $response) {\n        $span = Span::getCurrent();\n        $span->addEvent('Received get quote request, processing it');\n\n        $jsonObject = $request->getParsedBody();\n\n        $data = calculateQuote($jsonObject);\n\n        $payload = json_encode($data);\n        $response->getBody()->write($payload);\n\n        $span->addEvent('Quote processed, response sent back', [\n            'app.quote.cost.total' => $data\n        ]);\n\n        return $response\n            ->withHeader('Content-Type', 'application/json');\n    });\n};\n")),(0,r.kt)("p",null,"Please note the use of OpenTelemetry/API and further use of the span builders."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/instana/opentelemetry-demo/blob/main/src/quoteservice/app/routes.php"},"The source code can be found here")),(0,r.kt)("h2",{id:"section-summary"},"Section summary"),(0,r.kt)("p",null,"To summarize, you have seen how Instana can ue both proprietary tracing and OpenTelemetry to instrument application transactions.\nAnd, it has the unique ability to combine those traces into a single application transaction that can be traced end-to-end.\nThis allows customers to gradually transition their applications and shared services over to OpenTelemetry without losing end-to-end visibility."))}d.isMDXComponent=!0},77021:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-001-fixed-a2a2524d60ee1d67b831f277bffe37f6.png"},81811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-002-fixed-b3a862fac127b090c778f634d570a160.png"},40510:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-003-fixed-bdaf72cd4258c2f99cbf6b0173592741.png"},4682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-004-fixed-a33c8df355da7f2e8727c82d7775e994.png"},10333:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-005-fixed-4eb91c5de21f39d04a6e30718bb3451c.png"},3514:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-006-fixed-13e14173fd1e50704fb486e29d4484f1.png"},61252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/explore-007-fixed-d95ac2a21171f39e536039fa5f1d392c.png"}}]);