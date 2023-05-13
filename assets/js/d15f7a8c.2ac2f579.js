"use strict";(self.webpackChunkflexirails=self.webpackChunkflexirails||[]).push([[8724],{52755:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var r=i(87462),a=(i(67294),i(3905)),s=i(26389),o=i(94891),n=(i(75190),i(47507),i(24310)),p=i(63303),l=(i(75035),i(85162));const c={id:"create-users-with-list-input",title:"Creates list of users with given input list",description:"",sidebar_label:"Creates list of users with given input list",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"createUsersWithListInput",responses:{default:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0,title:"Id"},pet:{oneOf:[{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}},{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"},title:"User"}}}},description:"List of user object",required:!0},method:"post",path:"/user/createWithList",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:[{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0}],info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Creates list of users with given input list",description:{content:"",type:"text/plain"},url:{path:["user","createWithList"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},d=void 0,m={unversionedId:"api/core/create-users-with-list-input",id:"api/core/create-users-with-list-input",title:"Creates list of users with given input list",description:"",source:"@site/docs/api/core/create-users-with-list-input.api.mdx",sourceDirName:"api/core",slug:"/api/core/create-users-with-list-input",permalink:"/document/docs/api/core/create-users-with-list-input",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-users-with-list-input",title:"Creates list of users with given input list",description:"",sidebar_label:"Creates list of users with given input list",hide_title:!0,hide_table_of_contents:!0,api:{tags:["user"],description:"",operationId:"createUsersWithListInput",responses:{default:{description:"successful operation"}},requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64",readOnly:!0,title:"Id"},pet:{oneOf:[{title:"pet",type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},dog:{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},bee:{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}}},properties:{id:{externalDocs:{description:"Find more info here",url:"https://example.com"},description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},category:{description:"Categories this pet belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Category name",type:"string",minLength:1},sub:{description:"Test Sub Category",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"Category"}]},name:{description:"The name given to a pet",type:"string",example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,xml:{name:"photoUrl",wrapped:!0},items:{type:"string",format:"url"}},friend:{allOf:["circular(pet)"]},tags:{description:"Tags attached to the pet",type:"array",minItems:1,xml:{name:"tag",wrapped:!0},items:{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},status:{type:"string",description:"Pet status in the store",enum:["available","pending","sold"]},petType:{description:"Type of a pet",type:"string",oneOf:[{title:"cat",description:"A representation of a cat",allOf:["circular(pet)",{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting",default:"lazy",example:"adventurous",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},{title:"dog",description:"A representation of a dog",allOf:["circular(pet)",{type:"object",properties:{packSize:{type:"integer",format:"int32",description:"The size of the pack the dog is from",default:1,minimum:1}},required:["packSize"]}]},{title:"bee",description:"A representation of a honey bee",allOf:["circular(pet)",{type:"object",properties:{honeyPerDay:{type:"number",description:"Average amount of honey produced per day in ounces",example:3.14,multipleOf:.01}},required:["honeyPerDay"]}]}]}},xml:{name:"Pet"}},{title:"tag",type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"Id"}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}]},username:{description:"User supplied username",type:"string",minLength:4,example:"John78"},firstName:{description:"User first name",type:"string",minLength:1,example:"John"},lastName:{description:"User last name",type:"string",minLength:1,example:"Smith"},email:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},password:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},phone:{description:"User phone number in international format",type:"string",pattern:"/^\\+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},userStatus:{description:"User status",type:"integer",format:"int32"}},xml:{name:"User"},title:"User"}}}},description:"List of user object",required:!0},method:"post",path:"/user/createWithList",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],securitySchemes:{petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},jsonRequestBodyExample:[{pet:{category:{name:"string",sub:{prop1:"string"}},name:"Guru",photoUrls:["string"],friend:{},tags:[{name:"string"}],status:"available",petType:{huntingSkill:"adventurous"}},username:"John78",firstName:"John",lastName:"Smith",email:"john.smith@example.com",password:"drowssaP123",phone:"+1-202-555-0192",userStatus:0}],info:{description:"This is a sample server Petstore server.\nYou can find out more about Swagger at\n[http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).\nFor this sample, you can use the api key `special-key` to test the authorization filters.\n\n## Introduction\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## OpenAPI Specification\nThis API is documented in **OpenAPI format** and is based on\n[Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.\nIt was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)\ntool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard\nOpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).\n\n## Cross-Origin Resource Sharing\nThis API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).\nAnd that allows cross-domain communication from the browser.\nAll responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.\n\n## Authentication\n\nPetstore offers two forms of authentication:\n  - API Key\n  - OAuth2\nOAuth2 - an open protocol to allow secure authorization in a simple\nand standard method from web, mobile and desktop applications.\n",version:"2.0.0",title:"Swagger Petstore YAML",termsOfService:"http://swagger.io/terms/",contact:{name:"API Support",email:"apiteam@swagger.io",url:"https://github.com/Redocly/redoc"},"x-logo":{url:"https://redocly.github.io/redoc/petstore-logo.png",altText:"Petstore logo"},license:{name:"Apache 2.0",url:"http://www.apache.org/licenses/LICENSE-2.0.html"}},postman:{name:"Creates list of users with given input list",description:{content:"",type:"text/plain"},url:{path:["user","createWithList"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/api/core/swagger-petstore-yaml",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Creates list of users with given input array",permalink:"/document/docs/api/core/create-users-with-array-input"},next:{title:"Logs user into the system",permalink:"/document/docs/api/core/login-user"}},u={},g=[{value:"Creates list of users with given input list",id:"creates-list-of-users-with-given-input-list",level:2}],h={toc:g};function y(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creates-list-of-users-with-given-input-list"},"Creates list of users with given input list"),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"List of user object"))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"pet"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}}),(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"oneOf"),(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"object",value:"0-property",mdxType:"TabItem"},(0,a.kt)("p",null,"object")),(0,a.kt)(l.Z,{label:"object",value:"1-property",mdxType:"TabItem"},(0,a.kt)("p",null,"object")))))),(0,a.kt)(n.Z,{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 4 characters`",schema:{description:"User supplied username",type:"string",minLength:4,example:"John78"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"firstName",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"User first name",type:"string",minLength:1,example:"John"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"lastName",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",schema:{description:"User last name",type:"string",minLength:1,example:"Smith"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"email",required:!1,schemaName:"email",qualifierMessage:void 0,schema:{description:"User email address",type:"string",format:"email",example:"john.smith@example.com"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"password",required:!1,schemaName:"password",qualifierMessage:"**Possible values:** `>= 8 characters`, Value must match regular expression `/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/`",schema:{type:"string",description:"User password, MUST contain a mix of upper and lower case letters, as well as digits",format:"password",minLength:8,pattern:"/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/",example:"drowssaP123"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `/^\\+(?:[0-9]-?){6,14}[0-9]$/`",schema:{description:"User phone number in international format",type:"string",pattern:"/^\\+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192"},mdxType:"SchemaItem"}),(0,a.kt)(n.Z,{collapsible:!1,name:"userStatus",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{description:"User status",type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))),(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"successful operation")),(0,a.kt)("div",null)))))}y.isMDXComponent=!0}}]);