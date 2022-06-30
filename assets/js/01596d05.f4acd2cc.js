"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61503],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>h});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||s;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48520:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const s={id:"SavedSearch",title:"SavedSearch"},o=void 0,i={unversionedId:"azure/resources/OperationalInsights/SavedSearch",id:"azure/resources/OperationalInsights/SavedSearch",title:"SavedSearch",description:"Provides a SavedSearch from the OperationalInsights group",source:"@site/docs/azure/resources/OperationalInsights/SavedSearch.md",sourceDirName:"azure/resources/OperationalInsights",slug:"/azure/resources/OperationalInsights/SavedSearch",permalink:"/docs/azure/resources/OperationalInsights/SavedSearch",draft:!1,tags:[],version:"current",frontMatter:{id:"SavedSearch",title:"SavedSearch"},sidebar:"docs",previous:{title:"QueryPack",permalink:"/docs/azure/resources/OperationalInsights/QueryPack"},next:{title:"StorageInsight",permalink:"/docs/azure/resources/OperationalInsights/StorageInsight"}},c={},p=[{value:"Examples",id:"examples",level:2},{value:"SavedSearchCreateOrUpdate",id:"savedsearchcreateorupdate",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],u={toc:p};function l(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"SavedSearch")," from the ",(0,a.kt)("strong",{parentName:"p"},"OperationalInsights")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"savedsearchcreateorupdate"},"SavedSearchCreateOrUpdate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "SavedSearch",\n    group: "OperationalInsights",\n    name: "mySavedSearch",\n    properties: () => ({\n      properties: {\n        category: "Saved Search Test Category",\n        displayName: "Create or Update Saved Search Test",\n        version: 2,\n        functionAlias: "heartbeat_func",\n        functionParameters: "a:int=1",\n        query: "Heartbeat | summarize Count() by Computer | take a",\n        tags: [{ name: "Group", value: "Computer" }],\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      workspace: "myWorkspace",\n    }),\n  },\n];\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/OperationalInsights/Workspace"},"Workspace"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    etag: {\n      type: 'string',\n      description: 'The ETag of the saved search. To override an existing saved search, use \"*\" or specify the current Etag'\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'The properties of the saved search.',\n      properties: {\n        category: {\n          type: 'string',\n          description: 'The category of the saved search. This helps the user to find a saved search faster. '\n        },\n        displayName: { type: 'string', description: 'Saved search display name.' },\n        query: {\n          type: 'string',\n          description: 'The query expression for the saved search.'\n        },\n        functionAlias: {\n          type: 'string',\n          description: 'The function alias if query serves as a function.'\n        },\n        functionParameters: {\n          type: 'string',\n          description: \"The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.\"\n        },\n        version: {\n          type: 'integer',\n          format: 'int64',\n          description: 'The version number of the query language. The current version is 2 and is the default.'\n        },\n        tags: {\n          type: 'array',\n          items: {\n            properties: {\n              name: { type: 'string', description: 'The tag name.' },\n              value: { type: 'string', description: 'The tag value.' }\n            },\n            required: [ 'name', 'value' ],\n            description: 'A tag of a saved search.'\n          },\n          'x-ms-identifiers': [ 'name' ],\n          description: 'The tags attached to the saved search.'\n        }\n      },\n      required: [ 'category', 'displayName', 'query' ]\n    }\n  },\n  required: [ 'properties' ],\n  allOf: [\n    {\n      title: 'Proxy Resource',\n      description: 'The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location',\n      type: 'object',\n      allOf: [\n        {\n          title: 'Resource',\n          description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n          type: 'object',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n            },\n            name: {\n              readOnly: true,\n              type: 'string',\n              description: 'The name of the resource'\n            },\n            type: {\n              readOnly: true,\n              type: 'string',\n              description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n            }\n          },\n          'x-ms-azure-resource': true\n        }\n      ]\n    }\n  ],\n  description: 'Value object for saved search results.'\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2020-08-01"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2020-08-01/SavedSearches.json"},"here"),"."))}l.isMDXComponent=!0}}]);