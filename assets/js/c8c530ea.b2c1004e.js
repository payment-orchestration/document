"use strict";(self.webpackChunkflexirails=self.webpackChunkflexirails||[]).push([[6186],{52991:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(67294),i=r(86010),c=r(53438),a=r(39960),o=r(13919),s=r(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function u(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},10120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),i=(r(67294),r(3905)),c=r(52991),a=r(53438);const o={id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},s=void 0,l={unversionedId:"api/core/pet",id:"api/core/pet",title:"Pets",description:"Pets",source:"@site/docs/api/core/pet.tag.mdx",sourceDirName:"api/core",slug:"/api/core/pet",permalink:"/docs/api/core/pet",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"pet",title:"Pets",description:"Pets",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Introduction",permalink:"/docs/api/core/swagger-petstore-yaml"},next:{title:"Add a new pet to the store",permalink:"/docs/api/core/add-pet"}},d={},m=[],p={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Everything about your Pets"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);