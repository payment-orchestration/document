"use strict";(self.webpackChunkflexirails=self.webpackChunkflexirails||[]).push([[2352],{52991:(e,t,r)=>{r.d(t,{Z:()=>E});var i=r(67294),n=r(86010),s=r(53438),c=r(39960),a=r(13919),o=r(95999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return i.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:s,description:c}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",u),title:s},r," ",s),c&&i.createElement("p",{className:(0,n.Z)("text--truncate",m),title:c},c))}function f(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?i.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:r,title:t.label,description:n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const r=(0,s.jA)();return i.createElement(E,{items:r.items,className:t})}function E(e){const{items:t,className:r}=e;if(!t)return i.createElement(k,e);const c=(0,s.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(g,{item:e})))))}},53028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=r(87462),n=(r(67294),r(3905)),s=r(52991),c=r(53438);const a={id:"user",title:"Users",description:"Users",custom_edit_url:null},o=void 0,l={unversionedId:"api/core/user",id:"api/core/user",title:"Users",description:"Users",source:"@site/docs/api/core/user.tag.mdx",sourceDirName:"api/core",slug:"/api/core/user",permalink:"/docs/api/core/user",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user",title:"Users",description:"Users",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Subscribe to the Store events",permalink:"/docs/api/core/subscribe-to-the-store-events"},next:{title:"Create user",permalink:"/docs/api/core/create-user"}},u={},m=[],d={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Operations about user"),(0,n.kt)(s.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);