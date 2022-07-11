"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70711],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),y=i,m=d["".concat(u,".").concat(y)]||d[y]||l[y]||s;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43468:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const s={id:"VirtualHub",title:"VirtualHub"},a=void 0,o={unversionedId:"azure/resources/Network/VirtualHub",id:"azure/resources/Network/VirtualHub",title:"VirtualHub",description:"Provides a VirtualHub from the Network group",source:"@site/docs/azure/resources/Network/VirtualHub.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/VirtualHub",permalink:"/docs/azure/resources/Network/VirtualHub",draft:!1,tags:[],version:"current",frontMatter:{id:"VirtualHub",title:"VirtualHub"},sidebar:"docs",previous:{title:"VirtualApplianceSite",permalink:"/docs/azure/resources/Network/VirtualApplianceSite"},next:{title:"VirtualHubBgpConnection",permalink:"/docs/azure/resources/Network/VirtualHubBgpConnection"}},u={},p=[{value:"Examples",id:"examples",level:2},{value:"VirtualHubPut",id:"virtualhubput",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],c={toc:p};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"VirtualHub")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"virtualhubput"},"VirtualHubPut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "VirtualHub",\n    group: "Network",\n    name: "myVirtualHub",\n    properties: () => ({\n      location: "West US",\n      tags: { key1: "value1" },\n      properties: {\n        virtualWan: {\n          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWans/virtualWan1",\n        },\n        addressPrefix: "10.168.0.0/24",\n        sku: "Basic",\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      virtualWan: "myVirtualWan",\n      vpnGateway: "myVpnGateway",\n      p2sVpnGateway: "myP2sVpnGateway",\n      expressRouteGateway: "myExpressRouteGateway",\n      azureFirewall: "myAzureFirewall",\n      securityPartnerProvider: "mySecurityPartnerProvider",\n    }),\n  },\n];\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualWan"},"VirtualWan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VpnGateway"},"VpnGateway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/P2sVpnGateway"},"P2sVpnGateway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/ExpressRouteGateway"},"ExpressRouteGateway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/AzureFirewall"},"AzureFirewall")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/SecurityPartnerProvider"},"SecurityPartnerProvider"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  required: [ 'location' ],\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the virtual hub.',\n      properties: {\n        virtualWan: {\n          description: 'The VirtualWAN to which the VirtualHub belongs.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        vpnGateway: {\n          description: 'The VpnGateway associated with this VirtualHub.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        p2SVpnGateway: {\n          description: 'The P2SVpnGateway associated with this VirtualHub.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        expressRouteGateway: {\n          description: 'The expressRouteGateway associated with this VirtualHub.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        azureFirewall: {\n          description: 'The azureFirewall associated with this VirtualHub.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        securityPartnerProvider: {\n          description: 'The securityPartnerProvider associated with this VirtualHub.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        },\n        addressPrefix: {\n          type: 'string',\n          description: 'Address-prefix for this VirtualHub.'\n        },\n        routeTable: {\n          description: 'The routeTable associated with this virtual hub.',\n          properties: {\n            routes: {\n              type: 'array',\n              description: 'List of all routes.',\n              items: {\n                properties: {\n                  addressPrefixes: {\n                    type: 'array',\n                    description: 'List of all addressPrefixes.',\n                    items: { type: 'string' }\n                  },\n                  nextHopIpAddress: {\n                    type: 'string',\n                    description: 'NextHop ip address.'\n                  }\n                },\n                description: 'VirtualHub route.'\n              }\n            }\n          }\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the virtual hub resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        securityProviderName: { type: 'string', description: 'The Security Provider name.' },\n        virtualHubRouteTableV2s: {\n          type: 'array',\n          description: 'List of all virtual hub route table v2s associated with this VirtualHub.',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the virtual hub route table v2.',\n                properties: {\n                  routes: {\n                    type: 'array',\n                    description: 'List of all routes.',\n                    items: {\n                      properties: {\n                        destinationType: {\n                          type: 'string',\n                          description: 'The type of destinations.'\n                        },\n                        destinations: {\n                          type: 'array',\n                          description: 'List of all destinations.',\n                          items: { type: 'string' }\n                        },\n                        nextHopType: {\n                          type: 'string',\n                          description: 'The type of next hops.'\n                        },\n                        nextHops: {\n                          type: 'array',\n                          description: 'NextHops ip address.',\n                          items: { type: 'string' }\n                        }\n                      },\n                      description: 'VirtualHubRouteTableV2 route.'\n                    }\n                  },\n                  attachedConnections: {\n                    type: 'array',\n                    description: 'List of all connections attached to this route table v2.',\n                    items: { type: 'string' }\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the virtual hub route table v2 resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  }\n                }\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              etag: {\n                type: 'string',\n                readOnly: true,\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'VirtualHubRouteTableV2 Resource.'\n          }\n        },\n        sku: { type: 'string', description: 'The sku of this VirtualHub.' },\n        routingState: {\n          description: 'The routing state.',\n          type: 'string',\n          readOnly: true,\n          enum: [ 'None', 'Provisioned', 'Provisioning', 'Failed' ],\n          'x-ms-enum': { name: 'RoutingState', modelAsString: true }\n        },\n        bgpConnections: {\n          type: 'array',\n          readOnly: true,\n          description: 'List of references to Bgp Connections.',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          }\n        },\n        ipConfigurations: {\n          type: 'array',\n          readOnly: true,\n          description: 'List of references to IpConfigurations.',\n          items: {\n            properties: { id: { type: 'string', description: 'Resource ID.' } },\n            description: 'Reference to another subresource.',\n            'x-ms-azure-resource': true\n          }\n        },\n        virtualRouterAsn: {\n          type: 'integer',\n          readOnly: false,\n          format: 'int64',\n          minimum: 0,\n          maximum: 4294967295,\n          description: 'VirtualRouter ASN.'\n        },\n        virtualRouterIps: {\n          type: 'array',\n          readOnly: false,\n          description: 'VirtualRouter IPs.',\n          items: { type: 'string' }\n        },\n        allowBranchToBranchTraffic: {\n          type: 'boolean',\n          readOnly: false,\n          description: 'Flag to control transit for VirtualRouter hub.'\n        },\n        preferredRoutingGateway: {\n          description: 'The preferred gateway to route on-prem traffic',\n          type: 'string',\n          enum: [ 'ExpressRoute', 'VpnGateway', 'None' ],\n          'x-ms-enum': { name: 'PreferredRoutingGateway', modelAsString: true }\n        },\n        hubRoutingPreference: {\n          description: 'The hubRoutingPreference of this VirtualHub.',\n          type: 'string',\n          enum: [ 'ExpressRoute', 'VpnGateway', 'ASPath' ],\n          'x-ms-enum': { name: 'HubRoutingPreference', modelAsString: true }\n        }\n      }\n    },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    kind: {\n      readOnly: true,\n      type: 'string',\n      description: 'Kind of service virtual hub. This is metadata used for the Azure portal experience for Route Server.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'VirtualHub Resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/virtualWan.json"},"here"),"."))}l.isMDXComponent=!0}}]);