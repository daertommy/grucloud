"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={id:"StateMachine",title:"State Machine"},o=void 0,i={unversionedId:"aws/resources/StepFunctions/StateMachine",id:"aws/resources/StepFunctions/StateMachine",title:"State Machine",description:"Manages an Step Function State Machine.",source:"@site/docs/aws/resources/StepFunctions/StateMachine.md",sourceDirName:"aws/resources/StepFunctions",slug:"/aws/resources/StepFunctions/StateMachine",permalink:"/docs/aws/resources/StepFunctions/StateMachine",draft:!1,tags:[],version:"current",frontMatter:{id:"StateMachine",title:"State Machine"},sidebar:"docs",previous:{title:"Secret",permalink:"/docs/aws/resources/SecretsManager/Secret"},next:{title:"Requirements",permalink:"/docs/aws/AwsRequirements"}},l={},c=[{value:"Sample code",id:"sample-code",level:2},{value:"Properties",id:"properties",level:2},{value:"Used By",id:"used-by",level:2},{value:"Full Examples",id:"full-examples",level:2},{value:"List",id:"list",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Manages an ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/states/home?#/"},"Step Function State Machine"),"."),(0,r.kt)("h2",{id:"sample-code"},"Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "StateMachine",\n    group: "StepFunctions",\n    name: "MyStateMachine-SwVayjQIlTdv",\n    properties: ({}) => ({\n      definition: {\n        StartAt: "SendCustomEvent",\n        States: {\n          SendCustomEvent: {\n            End: true,\n            Parameters: {\n              Body: "Hello World",\n              Bucket: "gc-my-sfn-bucket-destination",\n              Key: "filename.txt",\n            },\n            Resource: "arn:aws:states:::aws-sdk:s3:putObject",\n            Type: "Task",\n          },\n        },\n      },\n      loggingConfiguration: {\n        includeExecutionData: false,\n        level: "OFF",\n      },\n      tags: [\n        {\n          key: "stateMachine:createdBy",\n          value: "SAM",\n        },\n      ],\n    }),\n    dependencies: () => ({\n      role: "sam-app-WorkflowExecutionRole-7I137IX4DEEI",\n    }),\n  },\n];\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sfn/interfaces/createstatemachinecommandinput.html"},"CreateStateMachineCommandInput"))),(0,r.kt)("h2",{id:"used-by"},"Used By"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aws/resources/IAM/Role"},"IAM Role")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudWatchLogs/LogGroup"},"CloudWatchLogs LogGroup"))),(0,r.kt)("h2",{id:"full-examples"},"Full Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/serverless-patterns/sfn-s3"},"create S3 object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/serverless-patterns/sfn-dynamodb"},"send item to dynamoDB"))),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("p",null,"The topics can be filtered with the ",(0,r.kt)("em",{parentName:"p"},"StateMachine")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t StateMachine\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 StepFunctions::StateMachine from aws                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: StateMachinetoDDB-OZxx41bNDei3                          \u2502\n\u2502 managedByUs: Yes                                              \u2502\n\u2502 live:                                                         \u2502\n\u2502   creationDate: 2022-03-31T19:00:26.840Z                      \u2502\n\u2502   definition:                                                 \u2502\n\u2502     StartAt: SendToDDB                                        \u2502\n\u2502     States:                                                   \u2502\n\u2502       ReadFromDDB:                                            \u2502\n\u2502         End: true                                             \u2502\n\u2502         OutputPath: $.output_from_ddb_get.Item                \u2502\n\u2502         Parameters:                                           \u2502\n\u2502           Key:                                                \u2502\n\u2502             id.$: $.id                                        \u2502\n\u2502           TableName: my-table                                 \u2502\n\u2502         Resource: arn:aws:states:::dynamodb:getItem           \u2502\n\u2502         ResultPath: $.output_from_ddb_get                     \u2502\n\u2502         Type: Task                                            \u2502\n\u2502       SendToDDB:                                              \u2502\n\u2502         Next: ReadFromDDB                                     \u2502\n\u2502         Parameters:                                           \u2502\n\u2502           Item:                                               \u2502\n\u2502             description.$: States.Format(\'Hello, my id is {}\u2026 \u2502\n\u2502             id.$: $.id                                        \u2502\n\u2502           TableName: my-table                                 \u2502\n\u2502         Resource: arn:aws:states:::dynamodb:putItem           \u2502\n\u2502         ResultPath: $.output_from_ddb_put                     \u2502\n\u2502         Type: Task                                            \u2502\n\u2502   loggingConfiguration:                                       \u2502\n\u2502     includeExecutionData: false                               \u2502\n\u2502     level: OFF                                                \u2502\n\u2502   name: StateMachinetoDDB-OZxx41bNDei3                        \u2502\n\u2502   roleArn: arn:aws:iam::840541460064:role/sam-app-MyStateMac\u2026 \u2502\n\u2502   stateMachineArn: arn:aws:states:us-east-1:840541460064:sta\u2026 \u2502\n\u2502   status: ACTIVE                                              \u2502\n\u2502   tracingConfiguration:                                       \u2502\n\u2502     enabled: false                                            \u2502\n\u2502   type: STANDARD                                              \u2502\n\u2502   tags:                                                       \u2502\n\u2502     - key: aws:cloudformation:logical-id                      \u2502\n\u2502       value: StateMachinetoDDB                                \u2502\n\u2502     - key: aws:cloudformation:stack-id                        \u2502\n\u2502       value: arn:aws:cloudformation:us-east-1:840541460064:s\u2026 \u2502\n\u2502     - key: aws:cloudformation:stack-name                      \u2502\n\u2502       value: sam-app                                          \u2502\n\u2502     - key: stateMachine:createdBy                             \u2502\n\u2502       value: SAM                                              \u2502\n\u2502                                                               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                          \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 StepFunctions::StateMachine \u2502 StateMachinetoDDB-OZxx41bNDei3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t StateMachine" executed in 4s, 162 MB\n')))}p.isMDXComponent=!0}}]);