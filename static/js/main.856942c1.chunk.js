(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{23:function(e,t,n){e.exports=n(53)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=(n(28),n(3));n(29),n(30);function s(e){var t=e.children;return r.a.createElement("div",{className:"wrapper"},t)}function i(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("center",null,r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Search the directory by First or Last Name using the Search box.",r.a.createElement("br",null),"Sort columns by clicking on the heading."))))}function m(e){var t=e.employees,n=e.updateEmps,l=Object(a.useState)(""),c=Object(o.a)(l,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){var e=""===s?t:t.filter((function(e){var t=e.name,n=t.first,a=t.last;return n.toLowerCase().indexOf(s.toLowerCase())>=0||a.toLowerCase().indexOf(s.toLowerCase())>=0}));n(e)}),[s,t,n]),r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"input-group input-group-lg w-50"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-lg"},"Search")),r.a.createElement("input",{value:s,type:"text",className:"form-control",placeholder:"type first/last name",onChange:function(e){return i(e.target.value)}}))),r.a.createElement("br",null))}var u=n(22),d=n(7),p=n(9);n(35);function E(e){var t=!1;return"male"===e.gender&&(t=!0),r.a.createElement("td",null,t?r.a.createElement(d.a,{icon:p.b,className:"male"}):r.a.createElement(d.a,{icon:p.a,className:"female"}))}function f(e){var t=e.employees,n=Object(a.useState)([]),l=Object(o.a)(n,2),c=l[0],s=l[1],i=Object(a.useState)("descending"),m=Object(o.a)(i,2),d=m[0],p=m[1];Object(a.useEffect)((function(){return s(t)}),[t]);var f=function(e){var n=Object(u.a)(t).sort((function(t,n){if("name.first"===e)return"descending"===d?t.name.first.localeCompare(n.name.first):n.name.first.localeCompare(t.name.first);if("name.last"===e)return"descending"===d?t.name.last.localeCompare(n.name.last):n.name.last.localeCompare(t.name.last);if("login.username"===e)return"descending"===d?t.login.username.localeCompare(n.login.username):n.login.username.localeCompare(t.login.username);var a=t[e],r=n[e];return a<r?"descending"===d?-1:1:a>r?"descending"===d?1:-1:0}));s(n),h()},h=function(){p("descending"===d?"ascending":"descending")};return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col",onClick:function(){f("login.username")}},"User Name"),r.a.createElement("th",{scope:"col",onClick:function(){f("name.first")}},"First"),r.a.createElement("th",{scope:"col",onClick:function(){f("name.last")}},"Last"),r.a.createElement("th",{scope:"col",onClick:function(){f("phone")}},"Main Phone"),r.a.createElement("th",{scope:"col",onClick:function(){f("cell")}},"Mobile Phone"),r.a.createElement("th",{scope:"col",onClick:function(){f("email")}},"Email"),r.a.createElement("th",{scope:"col"}))),r.a.createElement("tbody",null,c.map((function(e){var t=e.picture.thumbnail,n=e.cell,a=e.phone,l=e.gender,c=e.email,o=e.name,s=o.first,i=o.last,m=e.login.username;return r.a.createElement("tr",{key:c},r.a.createElement("td",null,r.a.createElement("img",{src:t,alt:"employeePhoto",className:"rounded-sm shadow p-1 mb-2 bg-darkgray rounded"})),r.a.createElement("td",null,m),r.a.createElement("th",null,s),r.a.createElement("th",null,i),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement(E,{gender:l}),r.a.createElement("td",null))})))))}var h=n(21),g=n.n(h),b=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")};n(52);var v=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)([]),u=Object(o.a)(c,2),d=u[0],p=u[1];return Object(a.useEffect)((function(){b().then((function(e){var t=e.data.results;return l(t)}))}),[]),r.a.createElement(s,null,r.a.createElement(i,null),r.a.createElement(m,{employees:n,updateEmps:p}),r.a.createElement(f,{employees:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.856942c1.chunk.js.map