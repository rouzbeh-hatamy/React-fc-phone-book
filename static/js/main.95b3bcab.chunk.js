(this["webpackJsonpreact-func-phone-book"]=this["webpackJsonpreact-func-phone-book"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(15);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),o=(a(20),a(9)),m=a(10),i=a(11),u=a(13),s=(a(21),a(12)),d=a(1),b=a(2),f=a.n(b);var h=function(e){var t=e.contact,a=e.handleEdit;return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.name),c.a.createElement("td",null,t.username),c.a.createElement("td",null,t.phone),c.a.createElement("td",null,t.email),c.a.createElement("td",null,t.company),c.a.createElement("td",null,t.website),c.a.createElement("td",{className:"buttons"},c.a.createElement("button",{type:"button",onClick:function(){return a=t.name,void f.a.fire({title:" \u0645\u062e\u0627\u0637\u0628 ".concat(a," \u062d\u0630\u0641 \u0634\u0648\u062f\u061f"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0628\u0644\u0647",cancelButtonText:"\u062e\u064a\u0631"}).then((function(t){t.value&&f.a.fire(e.handleDelete(),"\u062d\u0630\u0641 \u0634\u062f!","success")}));var a},className:"btn btn-danger"},"delete"),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return a(t)}},"edit")," "))};a(22),a(23);var E=function(e){var t=e.contact,a=e.handleEdit;return c.a.createElement("div",{className:"card"},c.a.createElement("h3",{className:"title"},t.name),c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"emptybar"}),c.a.createElement("div",{className:"filledbar"})),c.a.createElement("div",{className:"info"},c.a.createElement("div",null," \u0646\u0627\u0645 : ",t.name),c.a.createElement("div",null," ",t.username," : \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"),c.a.createElement("div",null,"\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 : ",t.phone),c.a.createElement("div",null," ",t.email," : \u0627\u06cc\u0645\u06cc\u0644"),c.a.createElement("div",null,"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a : ",t.company),c.a.createElement("div",null,t.website," : \u0622\u062f\u0631\u0633 \u0648\u0628\u0633\u0627\u06cc\u062a"),c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){return a=t.name,void f.a.fire({title:" \u0645\u062e\u0627\u0637\u0628 ".concat(a," \u062d\u0630\u0641 \u0634\u0648\u062f\u061f"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0628\u0644\u0647",cancelButtonText:"\u062e\u064a\u0631"}).then((function(t){t.value&&f.a.fire(e.handleDelete(),"\u062d\u0630\u0641 \u0634\u062f!","success")}));var a},className:"btn btn-danger"},"delete"),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return a(t)}},"edit"))))};var p=function(e){var t=window.innerWidth,a=e.contacts,n=e.showForm,l=e.toggleForm,r=e.handleEdit;return t>=992?c.a.createElement("div",{id:"table",className:"table-responsive"},c.a.createElement("table",{className:"table table-striped table-hover"},c.a.createElement("thead",{className:"thead text-primary bg-light"},c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"name"),c.a.createElement("th",null,"username"),c.a.createElement("th",null,"phone number"),c.a.createElement("th",null,"email"),c.a.createElement("th",null,"company"),c.a.createElement("th",null,"website"),c.a.createElement("th",{id:"action"},"action"))),c.a.createElement("tbody",null,a.map((function(t){return c.a.createElement(h,{key:t.id,contact:t,handleEdit:r,handleDelete:function(){return e.handleDelete(t.id)}})})))),c.a.createElement("button",{className:"btn btn-success mx-4 ",onClick:l},n?"close":"add")):c.a.createElement("div",{className:"wrapper"},a.map((function(t){return c.a.createElement(E,{key:t.id,contact:t,handleEdit:r,handleDelete:function(){return e.handleDelete(t.id)}})})))},v=a(4),g=a(6);a(24);var y=function(e){var t=Object(n.useState)({id:1,name:"",username:"",phone:"",email:"",company:"",website:""}),a=Object(d.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)([]),m=Object(d.a)(o,2),i=m[0],u=m[1],s=function(t){var a=t.target,n=a.name,c=a.value;e.editmode?r(Object(g.a)({},l,Object(v.a)({},n,c))):r(Object(g.a)({},l,Object(v.a)({id:e.lastId+1},n,c)))};Object(n.useEffect)((function(){e.editmode&&r(e.editContact)}),[e.editContact,e.editmode]),Object(n.useEffect)((function(){var t=e.contacts.map((function(e){return e.id}));u(t)}),[l,e.contacts]);var b=l.name,h=l.username,E=l.phone,p=l.email,y=l.company,j=l.website;return c.a.createElement("div",{id:"form"},c.a.createElement("form",{id:"form_contact",onSubmit:function(t){t.preventDefault();var a=l.name,n=l.username,c=l.phone,r=l.email,o=l.company,m=l.website;""===(a&&n&&c&&r&&o&&m)?alert(" \u0647\u064a\u0686 \u0648\u0631\u0648\u062f\u064a \u0646\u0628\u0627\u064a\u062f \u062e\u0627\u0644\u064a \u0628\u0627\u0634\u062f"):i.includes(l.id)?(e.updateContact(l),e.toggleForm(),f.a.fire({position:"center",icon:"success",title:"\u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u064a \u0634\u062f",showConfirmButton:!1,timer:1500})):(e.handleAdd(l),e.toggleForm(),f.a.fire({position:"center",icon:"success",title:"\u0627\u0636\u0627\u0641\u0647 \u0634\u062f",showConfirmButton:!1,timer:1500}))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_name"},"name"),c.a.createElement("input",{type:"text",className:"form-control",id:"id_name",name:"name",onChange:s,value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_last_name"},"username"),c.a.createElement("input",{type:"text",className:"form-control",id:"id_last_name",name:"username",onChange:s,value:h})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_Phone_number"},"phone number"),c.a.createElement("input",{type:"phone",className:"form-control",id:"id_Phone_number",name:"phone",onChange:s,value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_email"},"email"),c.a.createElement("input",{type:"email",className:"form-control",id:"id_email",name:"email",onChange:s,value:p})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_company"},"company name"),c.a.createElement("input",{type:"text",className:"form-control",id:"id_company",name:"company",onChange:s,value:y})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"id_website"},"website"),c.a.createElement("input",{type:"text",className:"form-control",id:"id_website",name:"website",onChange:s,value:j})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))};a(25);var j=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)({}),o=Object(d.a)(r,2),m=o[0],i=o[1],u=Object(n.useState)([]),b=Object(d.a)(u,2),f=b[0],h=b[1],E=Object(n.useState)(null),v=Object(d.a)(E,2),g=v[0],j=v[1],w=Object(n.useState)(!1),O=Object(d.a)(w,2),N=O[0],C=O[1],_=Object(n.useState)(""),k=Object(d.a)(_,2),F=k[0],B=k[1],S=Object(n.useState)([]),x=Object(d.a)(S,2),D=x[0],T=x[1],W=Object(n.useState)(!1),I=Object(d.a)(W,2),A=I[0],J=I[1],L=function(){N?(j(!1),setTimeout((function(){C(!1)}),1e3)):(j(!0),C(!0))};return Object(n.useEffect)((function(){T(f.filter((function(e){return e.name.toLowerCase().startsWith(F.toLowerCase())})))}),[F,f]),Object(n.useEffect)((function(){a&&(fetch("https://jsonplaceholder.ir/users/").then((function(e){return e.json()})).then((function(e){h(e)})),l(!1))}),[a]),c.a.createElement("div",{className:"contain ".concat(g?"open-Form":"hide-form")},c.a.createElement("input",{type:"text",name:"search",onChange:function(e){var t=e.target.value;B(t)},value:F,placeholder:"search"}),c.a.createElement("div",{className:"all"},c.a.createElement(p,{contacts:D,handleDelete:function(e){h(f.filter((function(t){return t.id!==e})))},handleEdit:function(e){L(),J(!0),i(e)},showForm:N,toggleForm:L}),N?c.a.createElement(y,{handleAdd:function(e){h([].concat(Object(s.a)(f),[e]))},editmode:A,updateContact:function(e){var t=f;t.map((function(t){return t.id===e.id?(t.id=e.id,t.name=e.name,t.username=e.username,t.phone=e.phone,t.email=e.email,t.company=e.company,t.website=e.website,t):t})),h(t)},editContact:m,contacts:f,toggleForm:L,lastId:f[f.length-1].id}):null))},w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.95b3bcab.chunk.js.map