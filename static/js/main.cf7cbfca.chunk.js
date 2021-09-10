(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(3),i=t.n(c),a=t(13),s=t(1),l=function(e){var n=e.name,t=e.email,o=e.id,r=e.imgResolution;return Object(s.jsxs)("div",{className:"bg-light-green dib tc br3 pa3 ma2 grow shadow-2",children:[Object(s.jsx)("img",{width:"300px",alt:"robot",src:"https://robohash.org/".concat(o,"?size=").concat(r)}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:n}),Object(s.jsx)("p",{children:t})]})]})},u=function(e){var n=e.robots,t=Object(o.useState)("300x300"),r=Object(a.a)(t,2),c=r[0],i=r[1];return Object(o.useEffect)((function(){window.innerWidth>=600&&i("600x600")}),[]),Object(s.jsx)(o.Fragment,{children:n.map((function(e,n){return Object(s.jsx)(l,{id:e.id,name:e.name,email:e.email,imgResolution:c},e.id)}))})},d=function(e){var n=e.searchChange;return Object(s.jsx)("div",{children:Object(s.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},h=function(e){return Object(s.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"},children:e.children})},b=t(8),f=t(9),j=t(15),g=t(14),v=function(e){Object(j.a)(t,e);var n=Object(g.a)(t);function t(e){var o;return Object(b.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(f.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0}),console.log(e,n)}},{key:"render",value:function(){return this.state.hasError?Object(s.jsx)("h1",{children:"Oops. Something broke"}):this.props.children}}]),t}(r.a.Component),O="CHANGE_SEARCH_FIELD",p="REQUEST_ROBOTS_PENDING",w="REQUEST_ROBOTS_SUCCESS",m="REQUEST_ROBOTS_FAILED",x=function(){return function(e){var n;e({type:p}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return console.log("data",n),e({type:w,payload:n})})).catch((function(n){return console.log("error",n),e({type:m,payload:n})}))}},y=t(4),R=(t(27),r.a.memo((function(e){return console.log("Header update"),Object(s.jsx)("h1",{className:"f2",children:"Robofriends"})})));var S=Object(y.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:O,payload:t}));var t},onRequestRobots:function(){return e(x())}}}))((function(e){var n=e.searchField,t=e.onSearchChange,r=e.robots,c=e.isPending,i=e.onRequestRobots;Object(o.useEffect)((function(){i()}),[i]);var a=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return c?Object(s.jsx)("h1",{children:"Loading"}):Object(s.jsxs)("div",{className:"tc",children:[Object(s.jsx)(R,{}),Object(s.jsx)(d,{searchChange:t}),Object(s.jsx)(h,{children:Object(s.jsx)(v,{children:Object(s.jsx)(u,{robots:a})})})]})})),E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},k=(t(28),t(29),t(2)),C={searchField:""},F={isPending:!1,robots:[],error:""},P=t(5),L=t(11),T=t(12),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(L.createLogger)();var _=Object(P.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:return Object(k.a)(Object(k.a)({},e),{},{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(k.a)(Object(k.a)({},e),{},{isPending:!0});case w:return Object(k.a)(Object(k.a)({},e),{},{isPending:!1,robots:n.payload});case m:return Object(k.a)(Object(k.a)({},e),{},{isPending:!1,error:n.payload});default:return e}}}),U=Object(P.c)(_,Object(P.a)(T.a));i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(y.a,{store:U,children:Object(s.jsx)(S,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");N?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(n,e)}))}}(),E()}},[[31,1,2]]]);
//# sourceMappingURL=main.cf7cbfca.chunk.js.map