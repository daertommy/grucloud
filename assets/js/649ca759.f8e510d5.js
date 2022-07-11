"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,v=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},21769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"CloudServicesUpdateDomainUpdateDomain",title:"CloudServicesUpdateDomainUpdateDomain"},i=void 0,c={unversionedId:"azure/resources/Compute/CloudServicesUpdateDomainUpdateDomain",id:"azure/resources/Compute/CloudServicesUpdateDomainUpdateDomain",title:"CloudServicesUpdateDomainUpdateDomain",description:"Provides a CloudServicesUpdateDomainUpdateDomain from the Compute group",source:"@site/docs/azure/resources/Compute/CloudServicesUpdateDomainUpdateDomain.md",sourceDirName:"azure/resources/Compute",slug:"/azure/resources/Compute/CloudServicesUpdateDomainUpdateDomain",permalink:"/docs/azure/resources/Compute/CloudServicesUpdateDomainUpdateDomain",draft:!1,tags:[],version:"current",frontMatter:{id:"CloudServicesUpdateDomainUpdateDomain",title:"CloudServicesUpdateDomainUpdateDomain"},sidebar:"docs",previous:{title:"CloudServiceRoleInstance",permalink:"/docs/azure/resources/Compute/CloudServiceRoleInstance"},next:{title:"DedicatedHost",permalink:"/docs/azure/resources/Compute/DedicatedHost"}},p={},s=[{value:"Examples",id:"examples",level:2},{value:"Update Cloud Service to specified Domain",id:"update-cloud-service-to-specified-domain",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"CloudServicesUpdateDomainUpdateDomain")," from the ",(0,o.kt)("strong",{parentName:"p"},"Compute")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"update-cloud-service-to-specified-domain"},"Update Cloud Service to specified Domain"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "CloudServicesUpdateDomainUpdateDomain",\n    group: "Compute",\n    name: "myCloudServicesUpdateDomainUpdateDomain",\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      cloudService: "myCloudService",\n    }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/CloudService"},"CloudService"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Defines an update domain for the cloud service.',\n  type: 'object',\n  properties: {\n    id: { description: 'Resource Id', type: 'string', readOnly: true },\n    name: { description: 'Resource Name', type: 'string', readOnly: true }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/compute/resource-manager/Microsoft.Compute/stable/2021-03-01/cloudService.json"},"here"),"."))}d.isMDXComponent=!0}}]);