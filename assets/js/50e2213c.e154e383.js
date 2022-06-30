"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,b=d["".concat(a,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"WebAppInstanceFunctionSlot",title:"WebAppInstanceFunctionSlot"},s=void 0,p={unversionedId:"azure/resources/Web/WebAppInstanceFunctionSlot",id:"azure/resources/Web/WebAppInstanceFunctionSlot",title:"WebAppInstanceFunctionSlot",description:"Provides a WebAppInstanceFunctionSlot from the Web group",source:"@site/docs/azure/resources/Web/WebAppInstanceFunctionSlot.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/WebAppInstanceFunctionSlot",permalink:"/docs/azure/resources/Web/WebAppInstanceFunctionSlot",draft:!1,tags:[],version:"current",frontMatter:{id:"WebAppInstanceFunctionSlot",title:"WebAppInstanceFunctionSlot"},sidebar:"docs",previous:{title:"WebAppHostNameBindingSlot",permalink:"/docs/azure/resources/Web/WebAppHostNameBindingSlot"},next:{title:"WebAppListSlotConfigurationNames",permalink:"/docs/azure/resources/Web/WebAppListSlotConfigurationNames"}},a={},c=[{value:"Examples",id:"examples",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Swagger Schema",id:"swagger-schema",level:2},{value:"Misc",id:"misc",level:2}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"WebAppInstanceFunctionSlot")," from the ",(0,o.kt)("strong",{parentName:"p"},"Web")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/WebApp"},"WebApp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Web/WebAppSlot"},"WebAppSlot"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'Function information.',\n  type: 'object',\n  allOf: [\n    {\n      description: 'Azure proxy only resource. This resource is not tracked by Azure Resource Manager.',\n      type: 'object',\n      properties: {\n        id: { description: 'Resource Id.', type: 'string', readOnly: true },\n        name: {\n          description: 'Resource Name.',\n          type: 'string',\n          readOnly: true\n        },\n        kind: { description: 'Kind of resource.', type: 'string' },\n        type: {\n          description: 'Resource type.',\n          type: 'string',\n          readOnly: true\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    properties: {\n      description: 'FunctionEnvelope resource specific properties',\n      type: 'object',\n      properties: {\n        function_app_id: { description: 'Function App ID.', type: 'string' },\n        script_root_path_href: { description: 'Script root path URI.', type: 'string' },\n        script_href: { description: 'Script URI.', type: 'string' },\n        config_href: { description: 'Config URI.', type: 'string' },\n        test_data_href: { description: 'Test data URI.', type: 'string' },\n        secrets_file_href: { description: 'Secrets file URI.', type: 'string' },\n        href: { description: 'Function URI.', type: 'string' },\n        config: { description: 'Config information.', type: 'object' },\n        files: {\n          description: 'File list.',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        },\n        test_data: {\n          description: 'Test data used when testing via the Azure Portal.',\n          type: 'string'\n        },\n        invoke_url_template: { description: 'The invocation URL', type: 'string' },\n        language: { description: 'The function language', type: 'string' },\n        isDisabled: {\n          description: 'Gets or sets a value indicating whether the function is disabled',\n          type: 'boolean'\n        }\n      },\n      'x-ms-client-flatten': true\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-03-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/WebApps.json"},"here"),"."))}l.isMDXComponent=!0}}]);