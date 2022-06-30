"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"Distribution",title:"Distribution"},a=void 0,s={unversionedId:"aws/resources/CloudFront/Distribution",id:"aws/resources/CloudFront/Distribution",title:"Distribution",description:"Provides a Cloud Front distribution.",source:"@site/docs/aws/resources/CloudFront/Distribution.md",sourceDirName:"aws/resources/CloudFront",slug:"/aws/resources/CloudFront/Distribution",permalink:"/docs/aws/resources/CloudFront/Distribution",draft:!1,tags:[],version:"current",frontMatter:{id:"Distribution",title:"Distribution"},sidebar:"docs",previous:{title:"Launch Configuration",permalink:"/docs/aws/resources/AutoScaling/LaunchConfiguration"},next:{title:"Origin Access Identity",permalink:"/docs/aws/resources/CloudFront/OriginAccessIdentity"}},c={},u=[{value:"CloudFront with a S3 bucket as origin",id:"cloudfront-with-a-s3-bucket-as-origin",level:2},{value:"Examples",id:"examples",level:3},{value:"Properties",id:"properties",level:3},{value:"Cache Invalidation",id:"cache-invalidation",level:3},{value:"Dependencies",id:"dependencies",level:3}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a Cloud Front distribution."),(0,o.kt)("h2",{id:"cloudfront-with-a-s3-bucket-as-origin"},"CloudFront with a S3 bucket as origin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Distribution",\n    group: "CloudFront",\n    name: "E2P10W0URYHQV",\n    properties: ({ getId }) => ({\n      PriceClass: "PriceClass_100",\n      Aliases: {\n        Quantity: 1,\n        Items: [\n          getId({\n            type: "Certificate",\n            group: "ACM",\n            name: "cloudfront-demo.grucloud.org",\n            path: "name",\n          }),\n        ],\n      },\n      DefaultRootObject: "index.html",\n      DefaultCacheBehavior: {\n        TargetOriginId: `${getId({\n          type: "Bucket",\n          group: "S3",\n          name: "cloudfront-demo.grucloud.org",\n          path: "name",\n        })}.s3.us-east-1.amazonaws.com`,\n        TrustedSigners: {\n          Enabled: false,\n          Quantity: 0,\n          Items: [],\n        },\n        TrustedKeyGroups: {\n          Enabled: false,\n          Quantity: 0,\n          Items: [],\n        },\n        ViewerProtocolPolicy: "redirect-to-https",\n        AllowedMethods: {\n          Quantity: 2,\n          Items: ["HEAD", "GET"],\n          CachedMethods: {\n            Quantity: 2,\n            Items: ["HEAD", "GET"],\n          },\n        },\n        SmoothStreaming: false,\n        Compress: true,\n        LambdaFunctionAssociations: {\n          Quantity: 0,\n          Items: [],\n        },\n        FunctionAssociations: {\n          Quantity: 0,\n          Items: [],\n        },\n        FieldLevelEncryptionId: "",\n        CachePolicyId: "658327ea-f89d-4fab-a63d-7e88639e58f6",\n      },\n      Origins: {\n        Quantity: 1,\n        Items: [\n          {\n            Id: `${getId({\n              type: "Bucket",\n              group: "S3",\n              name: "cloudfront-demo.grucloud.org",\n              path: "name",\n            })}.s3.us-east-1.amazonaws.com`,\n            DomainName: `${getId({\n              type: "Bucket",\n              group: "S3",\n              name: "cloudfront-demo.grucloud.org",\n              path: "name",\n            })}.s3.us-east-1.amazonaws.com`,\n            OriginPath: "",\n            CustomHeaders: {\n              Quantity: 0,\n              Items: [],\n            },\n            S3OriginConfig: {\n              OriginAccessIdentity: `origin-access-identity/cloudfront/${getId({\n                type: "OriginAccessIdentity",\n                group: "CloudFront",\n                name: "access-identity-cloudfront-demo.grucloud.org.s3.us-east-1.amazonaws.com",\n              })}`,\n            },\n            ConnectionAttempts: 3,\n            ConnectionTimeout: 10,\n            OriginShield: {\n              Enabled: false,\n            },\n          },\n        ],\n      },\n      Restrictions: {\n        GeoRestriction: {\n          RestrictionType: "none",\n          Quantity: 0,\n          Items: [],\n        },\n      },\n      Comment: "",\n      Logging: {\n        Enabled: false,\n        IncludeCookies: false,\n        Bucket: "",\n        Prefix: "",\n      },\n      Tags: [\n        {\n          Key: "mykey",\n          Value: "myvalue",\n        },\n      ],\n    }),\n    dependencies: () => ({\n      buckets: ["cloudfront-demo.grucloud.org"],\n      certificate: "cloudfront-demo.grucloud.org",\n      originAccessIdentities: [\n        "access-identity-cloudfront-demo.grucloud.org.s3.us-east-1.amazonaws.com",\n      ],\n    }),\n  },\n];\n')),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/website-https/resources.js"},"https static website "))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/CloudFront/cloudfront-distribution/resources.js"},"cloudfront distribution with origin access identity")))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cloudfront/interfaces/createdistributionwithtagscommandinput.html"},"CreateDistributionWithTagsCommandInput"))),(0,o.kt)("h3",{id:"cache-invalidation"},"Cache Invalidation"),(0,o.kt)("p",null,"When some S3 objects are updated during the ",(0,o.kt)("em",{parentName:"p"},"gc apply")," command, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFront.html#createInvalidation-property"},(0,o.kt)("em",{parentName:"a"},"createInvalidation"))," call is made to invalide the cache to make sure the new version is available to the node edges."),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/S3/Bucket"},"S3 Bucket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ACM/Certificate"},"Certificate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/CloudFront/OriginAccessIdentity"},"OriginAccessIdentity"))))}d.isMDXComponent=!0}}]);