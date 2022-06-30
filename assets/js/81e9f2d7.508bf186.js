"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68911],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(t),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(v,i(i({ref:n},u),{},{components:t})):r.createElement(v,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const s={id:"Service",title:"Service"},i=void 0,c={unversionedId:"aws/resources/ECS/Service",id:"aws/resources/ECS/Service",title:"Service",description:"Manages an ECS Service.",source:"@site/docs/aws/resources/ECS/Service.md",sourceDirName:"aws/resources/ECS",slug:"/aws/resources/ECS/Service",permalink:"/docs/aws/resources/ECS/Service",draft:!1,tags:[],version:"current",frontMatter:{id:"Service",title:"Service"},sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/aws/resources/ECS/Cluster"},next:{title:"Task",permalink:"/docs/aws/resources/ECS/Task"}},l={},o=[{value:"Sample code",id:"sample-code",level:2},{value:"Properties",id:"properties",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Full Examples",id:"full-examples",level:2},{value:"List",id:"list",level:2}],u={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Manages an ",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ecs/home?#/clusters"},"ECS Service"),"."),(0,a.kt)("h2",{id:"sample-code"},"Sample code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Service",\n    group: "ECS",\n    name: "service-nginx",\n    properties: () => ({\n      launchType: "EC2",\n      desiredCount: 2,\n      deploymentConfiguration: {\n        deploymentCircuitBreaker: {\n          enable: false,\n          rollback: false,\n        },\n        maximumPercent: 200,\n        minimumHealthyPercent: 100,\n      },\n      placementConstraints: [],\n      placementStrategy: [\n        {\n          type: "spread",\n          field: "attribute:ecs.availability-zone",\n        },\n        {\n          type: "spread",\n          field: "instanceId",\n        },\n      ],\n      schedulingStrategy: "REPLICA",\n      enableECSManagedTags: true,\n      enableExecuteCommand: false,\n    }),\n    dependencies: () => ({\n      cluster: "cluster",\n      taskDefinition: "nginx",\n    }),\n  },\n];\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ecs/interfaces/createservicecommandinput.html"},"CreateServiceCommandInput"))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/Cluster"},"Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/ECS/TaskDefinition"},"TaskDefinition"))),(0,a.kt)("h2",{id:"full-examples"},"Full Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/ECS/ecs-simple"},"Simple example"))),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("p",null,"The ECS services can be filtered with the ",(0,a.kt)("em",{parentName:"p"},"Service")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Service\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 25/25\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 ECS::Service from aws                                                       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: service-nginx                                                           \u2502\n\u2502 managedByUs: Yes                                                              \u2502\n\u2502 live:                                                                         \u2502\n\u2502   serviceArn: arn:aws:ecs:eu-west-2:840541460064:service/cluster/service-ngi\u2026 \u2502\n\u2502   serviceName: service-nginx                                                  \u2502\n\u2502   clusterArn: arn:aws:ecs:eu-west-2:840541460064:cluster/cluster              \u2502\n\u2502   loadBalancers: []                                                           \u2502\n\u2502   serviceRegistries: []                                                       \u2502\n\u2502   status: ACTIVE                                                              \u2502\n\u2502   desiredCount: 1                                                             \u2502\n\u2502   runningCount: 1                                                             \u2502\n\u2502   pendingCount: 0                                                             \u2502\n\u2502   launchType: EC2                                                             \u2502\n\u2502   taskDefinition: arn:aws:ecs:eu-west-2:840541460064:task-definition/nginx:47 \u2502\n\u2502   deploymentConfiguration:                                                    \u2502\n\u2502     deploymentCircuitBreaker:                                                 \u2502\n\u2502       enable: false                                                           \u2502\n\u2502       rollback: false                                                         \u2502\n\u2502     maximumPercent: 200                                                       \u2502\n\u2502     minimumHealthyPercent: 100                                                \u2502\n\u2502   deployments:                                                                \u2502\n\u2502     - id: ecs-svc/7147023744074056707                                         \u2502\n\u2502       status: PRIMARY                                                         \u2502\n\u2502       taskDefinition: arn:aws:ecs:eu-west-2:840541460064:task-definition/ngi\u2026 \u2502\n\u2502       desiredCount: 1                                                         \u2502\n\u2502       pendingCount: 0                                                         \u2502\n\u2502       runningCount: 1                                                         \u2502\n\u2502       failedTasks: 0                                                          \u2502\n\u2502       createdAt: 2021-09-03T13:41:13.681Z                                     \u2502\n\u2502       updatedAt: 2021-09-03T13:42:33.232Z                                     \u2502\n\u2502       launchType: EC2                                                         \u2502\n\u2502       rolloutState: COMPLETED                                                 \u2502\n\u2502       rolloutStateReason: ECS deployment ecs-svc/7147023744074056707 complet\u2026 \u2502\n\u2502   events:                                                                     \u2502\n\u2502     - id: 8d36c860-4f52-43e1-bf3a-5f47bbef71d4                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:33.240Z                                     \u2502\n\u2502       message: (service service-nginx) has reached a steady state.            \u2502\n\u2502     - id: b05415fd-18e6-484c-bf97-342f1259e925                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:33.239Z                                     \u2502\n\u2502       message: (service service-nginx) (deployment ecs-svc/71470237440740567\u2026 \u2502\n\u2502     - id: 17ca843b-e785-43c3-a4af-9b147f78dfa9                                \u2502\n\u2502       createdAt: 2021-09-03T13:42:22.559Z                                     \u2502\n\u2502       message: (service service-nginx) has started 1 tasks: (task c6cf491773\u2026 \u2502\n\u2502     - id: 59a6478b-ca2f-4b1f-acf8-3ca8ceb1eaa5                                \u2502\n\u2502       createdAt: 2021-09-03T13:41:21.065Z                                     \u2502\n\u2502       message: (service service-nginx) was unable to place a task because no\u2026 \u2502\n\u2502   createdAt: 2021-09-03T13:41:13.681Z                                         \u2502\n\u2502   placementConstraints: []                                                    \u2502\n\u2502   placementStrategy:                                                          \u2502\n\u2502     - type: spread                                                            \u2502\n\u2502       field: attribute:ecs.availability-zone                                  \u2502\n\u2502     - type: spread                                                            \u2502\n\u2502       field: instanceId                                                       \u2502\n\u2502   schedulingStrategy: REPLICA                                                 \u2502\n\u2502   tags:                                                                       \u2502\n\u2502     - key: gc-created-by-provider                                             \u2502\n\u2502       value: aws                                                              \u2502\n\u2502     - key: gc-managed-by                                                      \u2502\n\u2502       value: grucloud                                                         \u2502\n\u2502     - key: gc-project-name                                                    \u2502\n\u2502       value: example-grucloud-ecs-simple                                      \u2502\n\u2502     - key: gc-stage                                                           \u2502\n\u2502       value: dev                                                              \u2502\n\u2502     - key: Name                                                               \u2502\n\u2502       value: service-nginx                                                    \u2502\n\u2502   createdBy: arn:aws:iam::840541460064:root                                   \u2502\n\u2502   enableECSManagedTags: true                                                  \u2502\n\u2502   propagateTags: NONE                                                         \u2502\n\u2502   enableExecuteCommand: false                                                 \u2502\n\u2502                                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ECS::Service                   \u2502 service-nginx                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t Service" executed in 15s\n')))}p.isMDXComponent=!0}}]);