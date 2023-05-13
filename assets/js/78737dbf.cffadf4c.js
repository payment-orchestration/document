"use strict";(self.webpackChunkflexirails=self.webpackChunkflexirails||[]).push([[884],{13999:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var a=o(87462),i=(o(67294),o(3905)),s=o(26389),r=(o(94891),o(75190)),n=(o(47507),o(24310),o(63303),o(75035),o(85162));const p={id:"delete-pet",title:"Deletes a pet",description:"",sidebar_label:"Deletes a pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"deletePet",parameters:[{name:"api_key",in:"header",required:!1,schema:{type:"string"},example:"Bearer <TOKEN>"},{name:"petId",in:"path",description:"Pet id to delete",required:!0,schema:{type:"integer",format:"int64"}}],responses:{400:{description:"Invalid pet value"}},security:[{petstore_auth:["write:pets","read:pets"]}],method:"delete",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Deletes a pet",description:{content:"",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Pet id to delete",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"api_key",value:""}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},d=void 0,l={unversionedId:"api/core/delete-pet",id:"api/core/delete-pet",title:"Deletes a pet",description:"",source:"@site/docs/api/core/delete-pet.api.mdx",sourceDirName:"api/core",slug:"/api/core/delete-pet",permalink:"/docs/api/core/delete-pet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-pet",title:"Deletes a pet",description:"",sidebar_label:"Deletes a pet",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pet"],description:"",operationId:"deletePet",parameters:[{name:"api_key",in:"header",required:!1,schema:{type:"string"},example:"Bearer <TOKEN>"},{name:"petId",in:"path",description:"Pet id to delete",required:!0,schema:{type:"integer",format:"int64"}}],responses:{400:{description:"Invalid pet value"}},security:[{petstore_auth:["write:pets","read:pets"]}],method:"delete",path:"/pet/{petId}",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Deletes a pet",description:{content:"",type:"text/plain"},url:{path:["pet",":petId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Pet id to delete",type:"text/plain"},type:"any",value:"",key:"petId"}]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"api_key",value:""}],method:"DELETE",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"delete api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Updates a pet in the store with form data",permalink:"/docs/api/core/update-pet-with-form"},next:{title:"uploads an image",permalink:"/docs/api/core/upload-file"}},c={},u=[{value:"Deletes a pet",id:"deletes-a-pet",level:2}],m={toc:u};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"deletes-a-pet"},"Deletes a pet"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"petId",in:"path",description:"Pet id to delete",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Header Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"api_key",in:"header",required:!1,schema:{type:"string"},example:"Bearer <TOKEN>"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Invalid pet value")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);