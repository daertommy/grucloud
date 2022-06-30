"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58694],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38962:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const i={id:"CustomIPPrefix",title:"CustomIPPrefix"},s=void 0,a={unversionedId:"azure/resources/Network/CustomIPPrefix",id:"azure/resources/Network/CustomIPPrefix",title:"CustomIPPrefix",description:"Provides a CustomIPPrefix from the Network group",source:"@site/docs/azure/resources/Network/CustomIPPrefix.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/CustomIPPrefix",permalink:"/docs/azure/resources/Network/CustomIPPrefix",draft:!1,tags:[],version:"current",frontMatter:{id:"CustomIPPrefix",title:"CustomIPPrefix"},sidebar:"docs",previous:{title:"ConnectivityConfiguration",permalink:"/docs/azure/resources/Network/ConnectivityConfiguration"},next:{title:"DdosProtectionPlan",permalink:"/docs/azure/resources/Network/DdosProtectionPlan"}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"Create custom IP prefix allocation method",id:"create-custom-ip-prefix-allocation-method",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],u={toc:p};function l(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"CustomIPPrefix")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-custom-ip-prefix-allocation-method"},"Create custom IP prefix allocation method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "CustomIPPrefix",\n    group: "Network",\n    name: "myCustomIPPrefix",\n    properties: () => ["1"],\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    extendedLocation: {\n      description: 'The extended location of the custom IP prefix.',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'The name of the extended location.'\n        },\n        type: {\n          description: 'The type of the extended location.',\n          type: 'string',\n          enum: [ 'EdgeZone' ],\n          'x-ms-enum': { name: 'ExtendedLocationTypes', modelAsString: true }\n        }\n      }\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Custom IP prefix properties.',\n      properties: {\n        cidr: {\n          type: 'string',\n          description: 'The prefix range in CIDR notation. Should include the start address and the prefix length.'\n        },\n        signedMessage: {\n          type: 'string',\n          description: 'Signed message for WAN validation.'\n        },\n        authorizationMessage: {\n          type: 'string',\n          description: 'Authorization message for WAN validation.'\n        },\n        customIpPrefixParent: {\n          description: 'The Parent CustomIpPrefix for IPv6 /64 CustomIpPrefix.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        childCustomIpPrefixes: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          },\n          description: 'The list of all Children for IPv6 /48 CustomIpPrefix.'\n        },\n        commissionedState: {\n          type: 'string',\n          description: 'The commissioned state of the Custom IP Prefix.',\n          enum: [\n            'Provisioning',\n            'Provisioned',\n            'Commissioning',\n            'Commissioned',\n            'Decommissioning',\n            'Deprovisioning'\n          ],\n          'x-ms-enum': { name: 'CommissionedState', modelAsString: true }\n        },\n        publicIpPrefixes: {\n          readOnly: true,\n          type: 'array',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          },\n          description: 'The list of all referenced PublicIpPrefixes.'\n        },\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resource GUID property of the custom IP prefix resource.'\n        },\n        failedReason: {\n          readOnly: true,\n          type: 'string',\n          description: 'The reason why resource is in failed state.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the custom IP prefix resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    zones: {\n      type: 'array',\n      items: { type: 'string' },\n      description: 'A list of availability zones denoting the IP allocated for the resource needs to come from.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Custom IP prefix resource.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/customIpPrefix.json"},"here"),"."))}l.isMDXComponent=!0}}]);