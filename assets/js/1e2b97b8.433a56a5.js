"use strict";(self.webpackChunkflexirails=self.webpackChunkflexirails||[]).push([[747],{57871:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var a=o(87462),s=(o(67294),o(3905)),i=o(26389),n=o(94891),r=o(75190),p=o(47507),l=o(24310),d=o(63303),c=(o(75035),o(85162));const m={id:"upload-file",title:"uploads an image",description:"",sidebar_label:"uploads an image",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"uploadFile",parameters:[{name:"petId",in:"path",description:"ID of pet to update",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}},title:"ApiResponse"}}}}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},method:"post",path:"/pet/{petId}/uploadImage",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"uploads an image",description:{content:"",type:"text/plain"},url:{path:["pet",":petId","uploadImage"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet to update",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Content-Type",value:"application/octet-stream"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"file"},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},u=void 0,h={unversionedId:"api/core/upload-file",id:"api/core/upload-file",title:"uploads an image",description:"",source:"@site/docs/api/core/upload-file.api.mdx",sourceDirName:"api/core",slug:"/api/core/upload-file",permalink:"/document/docs/api/core/upload-file",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"upload-file",title:"uploads an image",description:"",sidebar_label:"uploads an image",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"uploadFile",parameters:[{name:"petId",in:"path",description:"ID of pet to update",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}},title:"ApiResponse"}}}}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/octet-stream":{schema:{type:"string",format:"binary"}}}},method:"post",path:"/pet/{petId}/uploadImage",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"uploads an image",description:{content:"",type:"text/plain"},url:{path:["pet",":petId","uploadImage"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of pet to update",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{key:"Content-Type",value:"application/octet-stream"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"file"},auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"post api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Deletes a pet",permalink:"/document/docs/api/core/delete-pet"},next:{title:"Finds Pets by status",permalink:"/document/docs/api/core/find-pets-by-status"}},g={},y=[{value:"uploads an image",id:"uploads-an-image",level:2}],f={toc:y};function b(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"uploads-an-image"},"uploads an image"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"petId",in:"path",description:"ID of pet to update",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/octet-stream",value:"application/octet-stream-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"}},(0,s.kt)("p",null,"string")))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "code": 0,\n  "type": "string",\n  "message": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);