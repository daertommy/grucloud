"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(n),y=a,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||c;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const c={id:"InternetGatewayAttachment",title:"Internet Gateway Attachment"},o=void 0,s={unversionedId:"aws/resources/EC2/InternetGatewayAttachment",id:"aws/resources/EC2/InternetGatewayAttachment",title:"Internet Gateway Attachment",description:"Provides an Internet Gateway Attachment",source:"@site/docs/aws/resources/EC2/InternetGatewayAttachment.md",sourceDirName:"aws/resources/EC2",slug:"/aws/resources/EC2/InternetGatewayAttachment",permalink:"/docs/aws/resources/EC2/InternetGatewayAttachment",draft:!1,tags:[],version:"current",frontMatter:{id:"InternetGatewayAttachment",title:"Internet Gateway Attachment"},sidebar:"docs",previous:{title:"Internet Gateway",permalink:"/docs/aws/resources/EC2/InternetGateway"},next:{title:"IPAM",permalink:"/docs/aws/resources/EC2/Ipam"}},l={},i=[{value:"Examples",id:"examples",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Listing",id:"listing",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"},"Internet Gateway Attachment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "Vpc",\n    group: "EC2",\n    name: "vpc",\n    properties: ({}) => ({\n      CidrBlock: "192.168.0.0/16",\n    }),\n  },\n  {\n    type: "InternetGateway",\n    group: "EC2",\n    name: "internet-gateway",\n  },\n  {\n    type: "InternetGatewayAttachment",\n    group: "EC2",\n    dependencies: () => ({\n      vpc: "vpc",\n      internetGateway: "internet-gateway",\n    }),\n  },\n];\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/EC2/ec2-vpc"},"simple example"))),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/Vpc"},"Vpc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/aws/resources/EC2/InternetGateway"},"InternetGateway"))),(0,a.kt)("h2",{id:"listing"},"Listing"),(0,a.kt)("p",null,"List only the internet gateway with the ",(0,a.kt)("em",{parentName:"p"},"InternetGateway")," filter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t EC2::InternetGatewayAttachment\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"")))}u.isMDXComponent=!0}}]);