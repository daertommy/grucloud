"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(u,".").concat(h)]||d[h]||l[h]||s;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"ExpressRoutePortAuthorization",title:"ExpressRoutePortAuthorization"},i=void 0,a={unversionedId:"azure/resources/Network/ExpressRoutePortAuthorization",id:"azure/resources/Network/ExpressRoutePortAuthorization",title:"ExpressRoutePortAuthorization",description:"Provides a ExpressRoutePortAuthorization from the Network group",source:"@site/docs/azure/resources/Network/ExpressRoutePortAuthorization.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/ExpressRoutePortAuthorization",permalink:"/docs/azure/resources/Network/ExpressRoutePortAuthorization",draft:!1,tags:[],version:"current",frontMatter:{id:"ExpressRoutePortAuthorization",title:"ExpressRoutePortAuthorization"},sidebar:"docs",previous:{title:"ExpressRouteGateway",permalink:"/docs/azure/resources/Network/ExpressRouteGateway"},next:{title:"FirewallPolicy",permalink:"/docs/azure/resources/Network/FirewallPolicy"}},u={},p=[{value:"Examples",id:"examples",level:2},{value:"Create ExpressRoutePort Authorization",id:"create-expressrouteport-authorization",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"ExpressRoutePortAuthorization")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-expressrouteport-authorization"},"Create ExpressRoutePort Authorization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "ExpressRoutePortAuthorization",\n    group: "Network",\n    name: "myExpressRoutePortAuthorization",\n    properties: () => ({ properties: {} }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      expressRoutePort: "myExpressRoutePortAuthorization",\n    }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/ExpressRoutePortAuthorization"},"ExpressRoutePortAuthorization"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  type: 'object',\n  title: 'ExpressRoute Port Authorization',\n  description: 'ExpressRoutePort Authorization resource definition.',\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'ExpressRoutePort properties.',\n      type: 'object',\n      title: 'ExpressRoute Port Authorization Properties',\n      properties: {\n        authorizationKey: {\n          readOnly: true,\n          type: 'string',\n          description: 'The authorization key.'\n        },\n        authorizationUseStatus: {\n          readOnly: true,\n          type: 'string',\n          description: 'The authorization use status.',\n          enum: [ 'Available', 'InUse' ],\n          'x-ms-enum': {\n            name: 'ExpressRoutePortAuthorizationUseStatus',\n            modelAsString: true\n          }\n        },\n        circuitResourceUri: {\n          readOnly: true,\n          type: 'string',\n          description: 'The reference to the ExpressRoute circuit resource using the authorization.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the authorization resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    type: {\n      readOnly: true,\n      type: 'string',\n      description: 'Type of the resource.'\n    }\n  },\n  allOf: [\n    {\n      properties: { id: { type: 'string', description: 'Resource ID.' } },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ]\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/expressRoutePort.json"},"here"),"."))}l.isMDXComponent=!0}}]);