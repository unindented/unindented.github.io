(this["webpackJsonpunindented-github-io"]=this["webpackJsonpunindented-github-io"]||[]).push([[0],{137:function(e,n,r){"use strict";var t=function(){var e=[{kind:"Literal",name:"name",value:"relay"},{kind:"Literal",name:"owner",value:"facebook"}],n={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AppRepositoryNameQuery",selections:[{alias:null,args:e,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[n],storageKey:'repository(name:"relay",owner:"facebook")'}],type:"Query"},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"AppRepositoryNameQuery",selections:[{alias:null,args:e,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:'repository(name:"relay",owner:"facebook")'}]},params:{id:null,metadata:{},name:"AppRepositoryNameQuery",operationKind:"query",text:'query AppRepositoryNameQuery {\n  repository(owner: "facebook", name: "relay") {\n    name\n    id\n  }\n}\n'}}}();t.hash="9f041295559a43de4cee97435d379fd0",e.exports=t},138:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r.n(t),o=r(71),i=r.n(o),s=(r(76),r(77),r(28)),l=r(16),u=r.n(l),c=r(27),p=r(2);function d(){return(d=Object(c.a)(u.a.mark((function e(n,r){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://github.unindented.org/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:r})});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e,n){return d.apply(this,arguments)};function y(){return(y=Object(c.a)(u.a.mark((function e(n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m(n.text,r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f,h=new p.Environment({network:p.Network.create((function(e,n){return y.apply(this,arguments)})),store:new p.Store(new p.RecordSource)}),g=a.a.Suspense,k=void 0!==f?f:f=r(137),v=Object(s.preloadQuery)(h,k,{});function w(e){var n=Object(s.usePreloadedQuery)(k,e.preloadedQuery);return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,n.repository.name)))}var b=function(e){return a.a.createElement(s.RelayEnvironmentProvider,{environment:h},a.a.createElement(g,{fallback:"Loading..."},a.a.createElement(w,{preloadedQuery:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,n,r){e.exports=r(138)},76:function(e,n,r){},77:function(e,n,r){}},[[72,1,2]]]);
//# sourceMappingURL=main.ee57dae8.chunk.js.map