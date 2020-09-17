(this["webpackJsonpunindented-github-io"]=this["webpackJsonpunindented-github-io"]||[]).push([[0],{141:function(e,a,n){"use strict";const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LayoutFooter_viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"websiteUrl",storageKey:null}],type:"User",abstractKey:null,hash:"e5b5928250d50f37744f50ff1f7b519e"};e.exports=t},142:function(e,a,n){"use strict";const t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"LayoutHeader_viewer",selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null,hash:"196d1954be49e19e66d5a825c63e5a2b"};e.exports=t},143:function(e,a,n){"use strict";const t={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AppQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"LayoutHeader_viewer"},{args:null,kind:"FragmentSpread",name:"LayoutFooter_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"AppQuery",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"websiteUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{cacheID:"03a868febe6a97f1aa9f63c1182ed72a",id:null,metadata:{},name:"AppQuery",operationKind:"query",text:"query AppQuery {\n  viewer {\n    ...LayoutHeader_viewer\n    ...LayoutFooter_viewer\n    id\n  }\n}\n\nfragment LayoutFooter_viewer on User {\n  name\n  websiteUrl\n}\n\nfragment LayoutHeader_viewer on User {\n  login\n  name\n}\n"},hash:"42fa9a1be304246f4b1d54389544d568"};e.exports=t},144:function(e,a,n){},145:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(73),i=n(8);class o extends t.Component{constructor(e){super(e),this.state={error:void 0}}static getDerivedStateFromError(e){return{error:e}}render(){const{error:e}=this.state,{fallback:a,children:n}=this.props;return e?r.a.createElement(a,{error:e}):n}}var s=n(38),c=n.n(s);var m,u=({name:e,websiteUrl:a})=>{const n=e&&a?r.a.createElement(r.a.Fragment,null,"An exploration in"," ",r.a.createElement("a",{href:"https://reactjs.org/",rel:"external"},"React")," ","and"," ",r.a.createElement("a",{href:"https://relay.dev/",rel:"external"},"Relay")," ","by"," ",r.a.createElement("a",{href:a,rel:"external"},e),"."):r.a.createElement("span",{"aria-hidden":"true"},"\xa0");return r.a.createElement("footer",{className:"grid-full "+c.a.footer},r.a.createElement("div",{className:"grid-full "+c.a.divider},r.a.createElement("svg",{height:"0",width:"0"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"footer-clip",clipPathUnits:"objectBoundingBox"},r.a.createElement("path",{d:"M 0 .5 L 0 0 L 1 0 L 1 .5 Q .83 1.33, .66 .5 T .33 .5 T 0 .5 Z"}))))),r.a.createElement("p",{className:"grid-main"},n))};var d=({viewer:e})=>{const a=Object(i.useFragment)(void 0!==m?m:m=n(141),e);return r.a.createElement(u,{name:a.name,websiteUrl:a.websiteUrl})};var g=()=>r.a.createElement(u,null),E=n(74),h=n.n(E);var v,p=({login:e,name:a})=>{const n=e?r.a.createElement("a",{href:"/"},e," ",r.a.createElement("span",{className:"sr-only"},"(",r.a.createElement("abbr",{title:"also known as"},"a.k.a.")," ",a,")")):r.a.createElement("span",{"aria-hidden":"true"},"\xa0");return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"grid-full "+h.a.header},r.a.createElement("nav",{className:"grid-main"},r.a.createElement("h1",null,n),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Contributions")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Repositories")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Stars"))))))};var f=({viewer:e})=>{const a=Object(i.useFragment)(void 0!==v?v:v=n(142),e);return r.a.createElement(p,{login:a.login,name:a.name})};var y=()=>r.a.createElement(p,null),w=n(39),b=n.n(w);var k=({title:e,children:a})=>{const n=e||r.a.createElement("span",{"aria-hidden":"true"},"\xa0");return r.a.createElement("main",{id:"main",className:"grid-full "+b.a.main},r.a.createElement("article",{className:"grid-full"},r.a.createElement("header",{className:"grid-full"},r.a.createElement("h1",{className:"grid-main"},n),r.a.createElement("div",{className:"grid-full "+b.a.divider},r.a.createElement("svg",{height:"0",width:"0"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"header-clip",clipPathUnits:"objectBoundingBox"},r.a.createElement("path",{d:"M 0 .5 L 0 1 L 1 1 L 1 .5 Q .83 1.33, .66 .5 T .33 .5 T 0 .5 Z"})))))),r.a.createElement("div",{className:"grid-main"},a)))};var F=({title:e,children:a})=>r.a.createElement(k,{title:e},a);var _,L=()=>r.a.createElement(k,null);const S=void 0!==_?_:_=n(143);var x=e=>{const{viewer:a}=Object(i.usePreloadedQuery)(S,e.queryReference);return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{viewer:a}),r.a.createElement(F,{title:"Overview"}),r.a.createElement(d,{viewer:a}))};var K=({error:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(F,{title:"Oops"},r.a.createElement("p",null,"Something went wrong: ",r.a.createElement("em",null,e.message))),r.a.createElement(g,null));var N=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(L,null),r.a.createElement(g,null));var U=()=>{const[e,a]=Object(i.useQueryLoader)(S);Object(t.useEffect)(()=>{null==e&&a()},[a]);const n=r.a.createElement(N,null);return null==e?n:r.a.createElement(o,{fallback:K},r.a.createElement(t.Suspense,{fallback:n},r.a.createElement(x,{queryReference:e})))},O=n(3);var j=new O.Environment({network:O.Network.create((async function(e,a){return await async function(e,a){const n=await fetch("https://github.unindented.org/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:a})});return await n.json()}(e.text,a)})),store:new O.Store(new O.RecordSource)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(144);Object(l.unstable_createRoot)(document.getElementById("root")).render(r.a.createElement(i.RelayEnvironmentProvider,{environment:j},r.a.createElement(U,null))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},38:function(e,a,n){e.exports={footer:"LayoutFooterCommon_footer__2cdVv",divider:"LayoutFooterCommon_divider__3_IBL"}},39:function(e,a,n){e.exports={main:"LayoutMainCommon_main__2duwz",divider:"LayoutMainCommon_divider__WrYSE"}},74:function(e,a,n){e.exports={header:"LayoutHeaderCommon_header__LCdhc"}},75:function(e,a,n){e.exports=n(145)}},[[75,1,2]]]);
//# sourceMappingURL=main.205e788f.chunk.js.map