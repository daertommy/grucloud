"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const a={id:"SqlResourceSqlDatabase",title:"SqlResourceSqlDatabase"},o=void 0,i={unversionedId:"azure/resources/DocumentDB/SqlResourceSqlDatabase",id:"azure/resources/DocumentDB/SqlResourceSqlDatabase",title:"SqlResourceSqlDatabase",description:"Provides a SqlResourceSqlDatabase from the DocumentDB group",source:"@site/docs/azure/resources/DocumentDB/SqlResourceSqlDatabase.md",sourceDirName:"azure/resources/DocumentDB",slug:"/azure/resources/DocumentDB/SqlResourceSqlDatabase",permalink:"/docs/azure/resources/DocumentDB/SqlResourceSqlDatabase",draft:!1,tags:[],version:"current",frontMatter:{id:"SqlResourceSqlDatabase",title:"SqlResourceSqlDatabase"},sidebar:"docs",previous:{title:"SqlResourceSqlContainerThroughput",permalink:"/docs/azure/resources/DocumentDB/SqlResourceSqlContainerThroughput"},next:{title:"SqlResourceSqlDatabaseThroughput",permalink:"/docs/azure/resources/DocumentDB/SqlResourceSqlDatabaseThroughput"}},c={},u=[{value:"Examples",id:"examples",level:2},{value:"CosmosDBSqlDatabaseCreateUpdate",id:"cosmosdbsqldatabasecreateupdate",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],p={toc:u};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"SqlResourceSqlDatabase")," from the ",(0,s.kt)("strong",{parentName:"p"},"DocumentDB")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"cosmosdbsqldatabasecreateupdate"},"CosmosDBSqlDatabaseCreateUpdate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "SqlResourceSqlDatabase",\n    group: "DocumentDB",\n    name: "mySqlResourceSqlDatabase",\n    properties: () => ({\n      location: "West US",\n      tags: {},\n      properties: { resource: { id: "databaseName" }, options: {} },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      account: "myDatabaseAccount",\n    }),\n  },\n];\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/DocumentDB/DatabaseAccount"},"DatabaseAccount"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Parameters to create and update Cosmos DB SQL database.',\n  type: 'object',\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties to create and update Azure Cosmos DB SQL database.',\n      type: 'object',\n      properties: {\n        resource: {\n          description: 'The standard JSON format of a SQL database',\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Name of the Cosmos DB SQL database'\n            }\n          },\n          required: [ 'id' ]\n        },\n        options: {\n          description: 'A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.',\n          type: 'object',\n          properties: {\n            throughput: {\n              type: 'integer',\n              description: 'Request Units per second. For example, \"throughput\": 10000.'\n            },\n            autoscaleSettings: {\n              description: 'Specifies the Autoscale settings.',\n              type: 'object',\n              properties: {\n                maxThroughput: {\n                  type: 'integer',\n                  description: 'Represents maximum throughput, the resource can scale up to.'\n                }\n              }\n            }\n          }\n        }\n      },\n      required: [ 'resource' ]\n    }\n  },\n  allOf: [\n    {\n      type: 'object',\n      description: 'The core properties of ARM resources.',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'The unique resource identifier of the ARM resource.'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the ARM resource.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of Azure resource.'\n        },\n        location: {\n          type: 'string',\n          description: 'The location of the resource group to which the resource belongs.'\n        },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with \"defaultExperience\": \"Cassandra\". Current \"defaultExperience\" values also include \"Table\", \"Graph\", \"DocumentDB\", and \"MongoDB\".'\n        },\n        identity: {\n          properties: {\n            principalId: {\n              readOnly: true,\n              type: 'string',\n              description: 'The principal id of the system assigned identity. This property will only be provided for a system assigned identity.'\n            },\n            tenantId: {\n              readOnly: true,\n              type: 'string',\n              description: 'The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.'\n            },\n            type: {\n              type: 'string',\n              description: \"The type of identity used for the resource. The type 'SystemAssigned,UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the service.\",\n              enum: [\n                'SystemAssigned',\n                'UserAssigned',\n                'SystemAssigned,UserAssigned',\n                'None'\n              ],\n              'x-ms-enum': { name: 'ResourceIdentityType', modelAsString: false }\n            },\n            userAssignedIdentities: {\n              type: 'object',\n              additionalProperties: {\n                type: 'object',\n                properties: {\n                  principalId: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The principal id of user assigned identity.'\n                  },\n                  clientId: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The client id of user assigned identity.'\n                  }\n                }\n              },\n              description: \"The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.\"\n            }\n          },\n          description: 'Identity for the resource.'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  required: [ 'properties' ]\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2022-02-15-preview"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-02-15-preview/cosmos-db.json"},"here"),"."))}l.isMDXComponent=!0}}]);