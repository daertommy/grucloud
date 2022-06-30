"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,h=l["".concat(c,".").concat(m)]||l[m]||p[m]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const s={id:"CassandraDataCenter",title:"CassandraDataCenter"},o=void 0,i={unversionedId:"azure/resources/DocumentDB/CassandraDataCenter",id:"azure/resources/DocumentDB/CassandraDataCenter",title:"CassandraDataCenter",description:"Provides a CassandraDataCenter from the DocumentDB group",source:"@site/docs/azure/resources/DocumentDB/CassandraDataCenter.md",sourceDirName:"azure/resources/DocumentDB",slug:"/azure/resources/DocumentDB/CassandraDataCenter",permalink:"/docs/azure/resources/DocumentDB/CassandraDataCenter",draft:!1,tags:[],version:"current",frontMatter:{id:"CassandraDataCenter",title:"CassandraDataCenter"},sidebar:"docs",previous:{title:"CassandraCluster",permalink:"/docs/azure/resources/DocumentDB/CassandraCluster"},next:{title:"CassandraResourceCassandraKeyspace",permalink:"/docs/azure/resources/DocumentDB/CassandraResourceCassandraKeyspace"}},c={},d=[{value:"Examples",id:"examples",level:2},{value:"CosmosDBManagedCassandraDataCenterCreate",id:"cosmosdbmanagedcassandradatacentercreate",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"CassandraDataCenter")," from the ",(0,a.kt)("strong",{parentName:"p"},"DocumentDB")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"cosmosdbmanagedcassandradatacentercreate"},"CosmosDBManagedCassandraDataCenterCreate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "CassandraDataCenter",\n    group: "DocumentDB",\n    name: "myCassandraDataCenter",\n    properties: () => ({\n      properties: {\n        dataCenterLocation: "West US 2",\n        delegatedSubnetId:\n          "/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/dc1-subnet",\n        nodeCount: 9,\n        base64EncodedCassandraYamlFragment:\n          "Y29tcGFjdGlvbl90aHJvdWdocHV0X21iX3Blcl9zZWM6IDMyCmNvbXBhY3Rpb25fbGFyZ2VfcGFydGl0aW9uX3dhcm5pbmdfdGhyZXNob2xkX21iOiAxMDA=",\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      cluster: "myCassandraCluster",\n    }),\n  },\n];\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/DocumentDB/CassandraCluster"},"CassandraCluster"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'A managed Cassandra data center.',\n  type: 'object',\n  allOf: [\n    {\n      type: 'object',\n      description: 'The resource model definition for a ARM proxy resource. It will have everything other than required location and tags',\n      properties: {\n        id: {\n          readOnly: true,\n          type: 'string',\n          description: 'The unique resource identifier of the database account.'\n        },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the database account.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'The type of Azure resource.'\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      description: 'Properties of a managed Cassandra data center.',\n      type: 'object',\n      properties: {\n        provisioningState: {\n          description: 'The status of the resource at the time the operation was called.',\n          type: 'string',\n          enum: [\n            'Creating',\n            'Updating',\n            'Deleting',\n            'Succeeded',\n            'Failed',\n            'Canceled'\n          ],\n          'x-ms-enum': {\n            name: 'ManagedCassandraProvisioningState',\n            modelAsString: true\n          }\n        },\n        dataCenterLocation: {\n          type: 'string',\n          'x-ms-mutability': [ 'create', 'read' ],\n          description: 'The region this data center should be created in.'\n        },\n        delegatedSubnetId: {\n          type: 'string',\n          'x-ms-mutability': [ 'create', 'read' ],\n          description: \"Resource id of a subnet the nodes in this data center should have their network interfaces connected to. The subnet must be in the same region specified in 'dataCenterLocation' and must be able to route to the subnet specified in the cluster's 'delegatedManagementSubnetId' property. This resource id will be of the form '/subscriptions/<subscription id>/resourceGroups/<resource group>/providers/Microsoft.Network/virtualNetworks/<virtual network>/subnets/<subnet>'.\"\n        },\n        nodeCount: {\n          type: 'integer',\n          format: 'int32',\n          description: 'The number of nodes the data center should have. This is the desired number. After it is set, it may take some time for the data center to be scaled to match. To monitor the number of nodes and their status, use the fetchNodeStatus method on the cluster.'\n        },\n        seedNodes: {\n          readOnly: true,\n          type: 'array',\n          description: 'IP addresses for seed nodes in this data center. This is for reference. Generally you will want to use the seedNodes property on the cluster, which aggregates the seed nodes from all data centers in the cluster.',\n          items: {\n            type: 'object',\n            properties: {\n              ipAddress: {\n                description: 'IP address of this seed node.',\n                type: 'string'\n              }\n            }\n          }\n        },\n        base64EncodedCassandraYamlFragment: {\n          type: 'string',\n          description: 'A fragment of a cassandra.yaml configuration file to be included in the cassandra.yaml for all nodes in this data center. The fragment should be Base64 encoded, and only a subset of keys are allowed.'\n        },\n        managedDiskCustomerKeyUri: {\n          type: 'string',\n          description: 'Key uri to use for encryption of managed disks. Ensure the system assigned identity of the cluster has been assigned appropriate permissions(key get/wrap/unwrap permissions) on the key.'\n        },\n        backupStorageCustomerKeyUri: {\n          type: 'string',\n          description: 'Indicates the Key Uri of the customer key to use for encryption of the backup storage account.'\n        },\n        sku: {\n          type: 'string',\n          description: 'Virtual Machine SKU used for data centers. Default value is Standard_DS14_v2'\n        },\n        diskSku: {\n          type: 'string',\n          description: 'Disk SKU used for data centers. Default value is P30.'\n        },\n        diskCapacity: {\n          type: 'integer',\n          format: 'int32',\n          description: 'Number of disk used for data centers. Default value is 4.'\n        },\n        availabilityZone: {\n          type: 'boolean',\n          description: 'If the data center has Availability Zone feature, apply it to the Virtual Machine ScaleSet that host the cassandra data center virtual machines.'\n        },\n        authenticationMethodLdapProperties: {\n          type: 'object',\n          description: 'Ldap authentication method properties. This feature is in preview.',\n          properties: {\n            serverHostname: {\n              description: 'Hostname of the LDAP server.',\n              type: 'string'\n            },\n            serverPort: {\n              description: 'Port of the LDAP server.',\n              type: 'integer',\n              format: 'int32'\n            },\n            serviceUserDistinguishedName: {\n              description: 'Distinguished name of the look up user account, who can look up user details on authentication.',\n              type: 'string'\n            },\n            serviceUserPassword: {\n              description: 'Password of the look up user.',\n              type: 'string'\n            },\n            searchBaseDistinguishedName: {\n              description: 'Distinguished name of the object to start the recursive search of users from.',\n              type: 'string'\n            },\n            searchFilterTemplate: {\n              description: 'Template to use for searching. Defaults to (cn=%s) where %s will be replaced by the username used to login.',\n              type: 'string'\n            },\n            serverCertificates: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  pem: {\n                    description: 'PEM formatted public key.',\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2022-02-15-preview"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-02-15-preview/managedCassandra.json"},"here"),"."))}p.isMDXComponent=!0}}]);