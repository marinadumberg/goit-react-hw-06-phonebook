(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={contactList:"ContactsList_contactList__-3u15",contactItem:"ContactsList_contactItem__tVLDq",contactDescription:"ContactsList_contactDescription__3l3Kl",deleteBtn:"ContactsList_deleteBtn__9HgYF"}},14:function(e,t,n){e.exports={formInput:"Form_formInput__7h6Ga",formBtn:"Form_formBtn__6_XDB"}},16:function(e,t,n){e.exports={section:"Section_section__Ap5Zy",title:"Section_title__2S6oE"}},19:function(e,t,n){e.exports={filterInput:"Filter_filterInput__u16Kg"}},21:function(e,t,n){e.exports={container:"Container_container__3RIox"}},49:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(7),r=n.n(a),o=n(21),s=n.n(o),i=n(1),l=function(e){var t=e.children;return Object(i.jsx)("div",{className:s.a.container,children:t})},u=n(16),b=n.n(u),d=function(e){var t=e.title,n=e.children;return Object(i.jsxs)("section",{className:b.a.section,children:[Object(i.jsxs)("h2",{className:b.a.title,children:["Phonebook"===t,t]}),n]})},j=n(20),m=n(17),O=n.n(m),p=n(3),h=n(51),f=n(4),x={addContact:Object(f.b)("contacts/Add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(h.a)(),name:t,number:n}}})),deleteContact:Object(f.b)("contacts/Delete"),changeFilter:Object(f.b)("contacts/ChangeFilter")},_=n(14),C=n.n(_),g=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(j.a)(r,2),s=o[0],l=o[1],u=Object(p.b)(),b=O.a.generate(),d=O.a.generate(),m=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c)}},h=function(){a(""),l("")};return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(x.addContact({name:n,number:s})),h()},children:[Object(i.jsx)("label",{htmlFor:b,children:Object(i.jsx)("input",{className:C.a.formInput,placeholder:"Name",id:b,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m})}),Object(i.jsx)("label",{htmlFor:d,children:Object(i.jsx)("input",{className:C.a.formInput,placeholder:"Tel",id:d,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m})}),Object(i.jsx)("button",{className:C.a.formBtn,type:"submit",children:"Add contact"})]})})},v=n(10),k=n.n(v),y=function(e){return e.phoneBook.filter},B=function(e){var t=function(e){return e.phoneBook.contacts}(e),n=y(e),c=n.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(c)||e.number.includes(n)}))},L=function(){var e=Object(p.c)(B),t=Object(p.b)();return Object(i.jsx)("ul",{className:k.a.contactList,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(i.jsxs)("li",{className:k.a.contactItem,children:[Object(i.jsxs)("p",{className:k.a.contactDescription,children:[c,": ",a]}),Object(i.jsx)("button",{className:k.a.deleteBtn,type:"button",onClick:function(){return function(e){return t(x.deleteContact(e))}(n)},children:"Delete"})]},n)}))})},N=n(19),F=n.n(N),w=function(){var e=Object(p.c)(y),t=Object(p.b)();return Object(i.jsx)("label",{className:F.a.label,children:Object(i.jsx)("input",{className:F.a.filterInput,placeholder:"Find contacts by name",type:"text",value:e,onChange:function(e){return t(x.changeFilter(e.target.value))}})})},I=n(6);n(45);function A(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(l,{children:[Object(i.jsx)(d,{title:"Phonebook",children:Object(i.jsx)(g,{})}),Object(i.jsxs)(d,{title:"Contacts",children:[Object(i.jsx)(w,{}),Object(i.jsx)(L,{})]})]}),Object(i.jsx)(I.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var D,S=n(13),z=n(5),q=n(23),T=n.n(q),Z=n(24),J=n(8),P=n(2),H=Object(f.c)([],(D={},Object(J.a)(D,x.addContact,(function(e,t){var n=t.payload;return e.find((function(e){return e.number===n.number}))?(I.b.error("\ud83e\udd37\ud83c\udffc\u200d\u2640\ufe0f '".concat(n.number,"' is in your list")),e):e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?(I.b.error(" \ud83e\udd37\ud83c\udffc\u200d\u2640\ufe0f '".concat(n.name,"' is in your list")),e):(I.b.success(" \u260e\ufe0f '".concat(n.name,"' added to phonebook")),[].concat(Object(S.a)(e),[n]))})),Object(J.a)(D,x.deleteContact,(function(e,t){var n=t.payload;return Object(I.b)(" \ud83d\uddd1 Contact deleted"),e.filter((function(e){return e.id!==n}))})),D)),K=Object(f.c)("",Object(J.a)({},x.changeFilter,(function(e,t){return t.payload}))),E=Object(P.b)({contacts:H,filter:K}),G={key:"phoneBook",storage:T.a,blacklist:["filter"]},M=[].concat(Object(S.a)(Object(f.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[Z.logger]),R=Object(f.a)({reducer:{phoneBook:Object(z.g)(G,E)},middleware:M,devTools:!1}),V={store:R,persistore:Object(z.h)(R)},X=n(25);r.a.render(Object(i.jsx)(p.a,{store:V.store,children:Object(i.jsx)(X.a,{loading:null,persistor:V.persistore,children:Object(i.jsx)(A,{})})}),document.querySelector("#root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f5f6e8e4.chunk.js.map