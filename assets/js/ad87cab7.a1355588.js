"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"PrincipalAssociation",title:"Principal Association"},s=void 0,o={unversionedId:"aws/resources/RAM/PrincipalAssociation",id:"aws/resources/RAM/PrincipalAssociation",title:"Principal Association",description:"Provides a RAM Principal Association",source:"@site/docs/aws/resources/RAM/PrincipalAssociation.md",sourceDirName:"aws/resources/RAM",slug:"/aws/resources/RAM/PrincipalAssociation",permalink:"/docs/aws/resources/RAM/PrincipalAssociation",draft:!1,tags:[],version:"current",frontMatter:{id:"PrincipalAssociation",title:"Principal Association"},sidebar:"docs",previous:{title:"Transit Gateway Registration",permalink:"/docs/aws/resources/NetworkManager/TransitGatewayRegistration"},next:{title:"Resource Association",permalink:"/docs/aws/resources/RAM/ResourceAssociation"}},c={},l=[{value:"Examples",id:"examples",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Used By",id:"used-by",level:3},{value:"List",id:"list",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ram/home?#Home:"},"RAM Principal Association")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "PrincipalAssociation",\n    group: "RAM",\n    properties: ({}) => ({\n      external: false,\n    }),\n    dependencies: ({}) => ({\n      resourceShare: "ipam-org-share",\n      organisation: "frederic.heem@gmail.com",\n    }),\n  },\n];\n')),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/RAM/resource-share"},"simple example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/aws-samples/aws-network-hub-for-terraform"},"aws-network-hub"))),(0,a.kt)("p",null,"###\xa0Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ram/interfaces/associateresourcesharecommandinput.html"},"AssociateResourceShareCommandInput"))),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("h3",{id:"used-by"},"Used By"),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t PrincipalAssociation\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"")))}u.isMDXComponent=!0}}]);