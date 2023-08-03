"use strict";(self.webpackChunkinstana_techxchange=self.webpackChunkinstana_techxchange||[]).push([[99],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Architecture of the Environment",description:"Architecture of the Environments"},i="Environmental Information",l={unversionedId:"general/index",id:"general/index",title:"Architecture of the Environment",description:"Architecture of the Environments",source:"@site/labs/general/index.md",sourceDirName:"general",slug:"/general/",permalink:"/instana-techxchange/labs/general/",draft:!1,editUrl:"https://github.com/IBM/instana-techxchange/tree/main/labs/general/index.md",tags:[],version:"current",frontMatter:{title:"Architecture of the Environment",description:"Architecture of the Environments"},sidebar:"tutorialSidebar",previous:{title:"Jam-in-a-Box",permalink:"/instana-techxchange/labs/jam-in-a-box/"},next:{title:"Labs Overview",permalink:"/instana-techxchange/labs/instana-v2/introduction/"}},s={},p=[{value:"Lab Environment Diagram",id:"lab-environment-diagram",level:2},{value:"Important Tips",id:"important-tips",level:2},{value:"Copy &amp; Paste",id:"copy--paste",level:3},{value:"Default Text Editor",id:"default-text-editor",level:3},{value:"Validate cluster readiness",id:"validate-cluster-readiness",level:2},{value:"Update your clusters Global Pull Secret",id:"update-your-clusters-global-pull-secret",level:2},{value:"Import bookmarks on Guacamole",id:"import-bookmarks-on-guacamole",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environmental-information"},"Environmental Information"),(0,r.kt)("p",null,"The lab environment includes 2 Openshift clusters and 3 VMs."),(0,r.kt)("p",null,"Openshift clusters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"AIOps cluster")," - A full installation of OCP that will be used to install\nTurbonomic."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Apps cluster")," - An instance of Single Node OpenShift that will be used to\ninstall the Instana and KubeTurbo agents and the sample ",(0,r.kt)("em",{parentName:"li"},"RobotShop"),"\napplication. The ",(0,r.kt)("em",{parentName:"li"},"Quote Of The Day")," sample application has been\npre-installed.")),(0,r.kt)("p",null,"Virtual Machines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Guacamole VM")," - A RHEL VM that will be used as the ",(0,r.kt)("em",{parentName:"li"},"bastion")," host into the\nlab network. Guacamole has access to all lab VM's and clusters and will be\nyour primary workstation for these labs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Instana")," - An Ubuntu VM that will be used to install a single node\nself-hosted Instana server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"MQACE")," - An Ubuntu VM that contains the pre-installed IBM ACE and MQ\nmiddleware.")),(0,r.kt)("h2",{id:"lab-environment-diagram"},"Lab Environment Diagram"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"IBM MQ, IBM ACE and Quote of the Day have been pre-installed."),(0,r.kt)("li",{parentName:"ul"},"You will install and configure all remaining components during these labs."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"architecture",src:a(5678).Z,width:"991",height:"784"})),(0,r.kt)("h2",{id:"important-tips"},"Important Tips"),(0,r.kt)("h3",{id:"copy--paste"},"Copy & Paste"),(0,r.kt)("p",null,"If you are a ",(0,r.kt)("strong",{parentName:"p"},"Windows user")," be mindful that there are no new lines inserted\nunintentionally when copying and pasting commands to the Terminal. If you have\nthis issue consider opening the lab guide within Guacamole or use the ",(0,r.kt)("strong",{parentName:"p"},"gedit\nText Editor")," to remove any extra new lines before pasting the command in the\nterminal."),(0,r.kt)("p",null,"You can open a new ",(0,r.kt)("strong",{parentName:"p"},"Text Editor (gedit)")," document by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Selecting ",(0,r.kt)("strong",{parentName:"li"},"Activities")," at the top left of the screen on the ",(0,r.kt)("em",{parentName:"li"},"Guacamole"),"\nhost."),(0,r.kt)("li",{parentName:"ol"},"Entering the search term ",(0,r.kt)("inlineCode",{parentName:"li"},"text")),(0,r.kt)("li",{parentName:"ol"},"Selecting the ",(0,r.kt)("strong",{parentName:"li"},"Text Editor")," application")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5617).Z,width:"4626",height:"1818"})),(0,r.kt)("h3",{id:"default-text-editor"},"Default Text Editor"),(0,r.kt)("p",null,"Throughout the lab you will be required to edit kubernetes manifests. By default\nyou will use the ",(0,r.kt)("strong",{parentName:"p"},"vi")," editor. If you would prefer use the graphical text\neditor ",(0,r.kt)("strong",{parentName:"p"},"gedit")," you can do so by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setting your default kubernetes editor on the ",(0,r.kt)("em",{parentName:"p"},"Guacamole")," host\n(admin@bastion-gym-lan):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# For the current shell\nexport KUBE_EDITOR=/bin/gedit\n\n# More permanent change (open a new tab or window after making the change)\necho "export KUBE_EDITOR=/bin/gedit -w" >> ~/.bashrc\n')))),(0,r.kt)("h2",{id:"validate-cluster-readiness"},"Validate cluster readiness"),(0,r.kt)("p",null,"These lab environments are deployed on scale using automation, often just a few\nhours prior to the start of a Tech Jam event."),(0,r.kt)("p",null,"As such, it is best to ensure that OpenShift cluster provisioning has fully\ncompleted on your allocated lab environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On your bastion node (",(0,r.kt)("strong",{parentName:"p"},"Guacamole"),"), open a terminal session:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"open-terminal",src:a(2364).Z,width:"4638",height:"2610"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste and execute the following commands in the terminal session:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"/home/admin/approve-csrs-custom.sh /home/admin/kubeconfig-aiops\n/home/admin/approve-csrs-custom.sh /home/admin/kubeconfig-apps\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Remember to press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," once the second script appears on the command line\nfor it to execute as well.")),(0,r.kt)("p",{parentName:"li"},"This procedure ensures your cluster nodes are ready by approving any\noutstanding certificate signing requests. Your output should be similar to:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Approve CSRs",src:a(5983).Z,width:"1753",height:"929"})))),(0,r.kt)("h2",{id:"update-your-clusters-global-pull-secret"},"Update your clusters Global Pull Secret"),(0,r.kt)("p",null,"Set the pull secret username and password:"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Get the ",(0,r.kt)("inlineCode",{parentName:"p"},"<pull-secret-user>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<pull-secret-pass>")," from your lab proctors.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'export USER="<pull-secret-user>"\nexport PASS="<pull-secret-pass>"\n')),(0,r.kt)("p",null,"Update the pull secret by running the following commands:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These commands use the above set variables. There is no need to edit them.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'oc get secret/pull-secret -n openshift-config --kubeconfig ~/kubeconfig-apps --template=\'{{index .data ".dockerconfigjson" | base64decode}}\' > pullSecret\n\noc registry login --kubeconfig ~/kubeconfig-apps --registry="docker.io" --auth-basic="${USER}:${PASS}" --to=pullSecret\n\noc set data secret/pull-secret -n openshift-config --kubeconfig ~/kubeconfig-apps --from-file=.dockerconfigjson=pullSecret\n')),(0,r.kt)("h2",{id:"import-bookmarks-on-guacamole"},"Import bookmarks on Guacamole"),(0,r.kt)("p",null,"To make it easier to navigate to different applications a ",(0,r.kt)("em",{parentName:"p"},"bookmarks.html")," file\nhas been copied to each of the bastion hosts. Before you start the Instana lab\nwe recommend importing the bookmarks file by following the instruction below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Firefox by selecting ",(0,r.kt)("strong",{parentName:"p"},"Activites")," from the top left of the ",(0,r.kt)("em",{parentName:"p"},"Guacamole"),"\nhost and then selecting ",(0,r.kt)("strong",{parentName:"p"},"Firefox")," from the application menu bar."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"open firefox",src:a(3452).Z,width:"5120",height:"2600"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"Firefox menu")," and select ",(0,r.kt)("strong",{parentName:"p"},"Bookmarks")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"open firefox menu",src:a(7372).Z,width:"4630",height:"1962"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Manage Bookmarks")," at the bottom of the menu."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"manage bookmarks",src:a(8427).Z,width:"2367",height:"1908"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Import and Backup")," followed by ",(0,r.kt)("strong",{parentName:"p"},"Import Bookmarks from HTML...")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"import bookmarks",src:a(8447).Z,width:"1710",height:"1314"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Home")," and open the ",(0,r.kt)("strong",{parentName:"p"},"bookmarks.html")," file."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"import bookmarks html file",src:a(689).Z,width:"2980",height:"1000"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand the folder ",(0,r.kt)("strong",{parentName:"p"},"Bookmarks Menu")," and drag all of the bookmarks to the\n",(0,r.kt)("strong",{parentName:"p"},"Bookmarks Toolbar")," for easy access."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"drag bookmarks to toolbar",src:a(6512).Z,width:"1702",height:"1306"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now select the ",(0,r.kt)("strong",{parentName:"p"},"Bookmarks Toolbar")," and delete the placeholder\nbookmark called ",(0,r.kt)("strong",{parentName:"p"},"OCP Dashboard"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"delete placeholder bookmark from toolbar",src:a(1086).Z,width:"1700",height:"1304"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should now see the bookmarks available in the Firefox toolbar."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"bookmarks toolbar",src:a(8024).Z,width:"1946",height:"258"})))))}u.isMDXComponent=!0},5983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approve-csrs-20f5fb8572f4e7a8f2347ed8b86470a6.png"},5678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-instana-turbo-192b76a620249f913bfef7f9d0fa134b.png"},7372:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-2-320a2046dae164ef57d26e5cee1f89b3.png"},8427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-3-6807798673b9ecce9df670e30a9eac67.png"},8447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-4-ac1c29c97c65f7a8806dfaca51176cc3.png"},689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-5-bc5f95fbeb1e075b1d9c8e1708231000.png"},6512:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-6-3610fbcd8a41911bd817e85e66b4d0f7.png"},1086:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-7-21a3b0c20a35660d883331a50832343e.png"},8024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/firefox-bookmarks-8-bbaff8de1ef9b4dc73bb8a524bee7c0d.png"},3452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-firefox-08d65cf3ddebcd1c9f7cefa769f75191.png"},2364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-terminal-ed5ca7786aa48c0c0ab234ad7de81fed.png"},5617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-text-edit-1d7e9c56984301b86335d8a90be2132b.png"}}]);