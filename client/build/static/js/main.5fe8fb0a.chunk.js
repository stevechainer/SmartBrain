(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);var n,r=a(2),s=a(6),c=a.n(s),i=a(51),l=a.n(i),o=a(10),u=a.n(o),b=a(27),d=a(12),j=(a(105),"/api");!function(e){e.SIGN_IN="SIGN_IN",e.SIGN_UP="SIGN_UP",e.HOME="HOME"}(n||(n={}));var p=function(e){var t=e.updateRoute,a=e.route;return Object(r.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:a===n.HOME?Object(r.jsx)("p",{onClick:function(){localStorage.clear(),t(n.SIGN_IN)},className:"f3 link dim black underline pa3 pointer",children:"Sign out"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{onClick:function(){return t(n.SIGN_IN)},className:"f3 link dim black underline pa3 pointer",children:"Sign in"}),Object(r.jsx)("p",{onClick:function(){return t(n.SIGN_UP)},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})})},m=a(97),h=a.n(m),g=(a(106),function(e){var t=e.children;return Object(r.jsxs)("div",{className:"ma4 mt0",style:{display:"flex",justifyContent:"space-between",flexFlow:"row wrap"},children:[Object(r.jsx)(h.a,{className:"Tilt br2 shadow-2",options:{max:25},style:{height:100,width:100},children:Object(r.jsxs)("div",{className:"Tilt-inner pa3",children:[Object(r.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:"data:image/png;base64,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"})," "]})}),t]})}),f=(a(107),function(e){var t=e.input,a=e.updateInput,n=e.onButtonSubmit;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"f3 center",children:"This magic brain will detect faces in your pictures. Give it a try"}),Object(r.jsx)("div",{className:"center",children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",placeholder:"Input a url to an image",value:t,onChange:function(e){var t=e.target;return a(t.value)}}),Object(r.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),O=(a(108),function(e){var t=e.imageUrl,a=e.boxes;return Object(r.jsx)("div",{className:"center ma",children:Object(r.jsxs)("div",{className:"absolute mt2",children:[Object(r.jsx)("img",{id:"inputImage",src:t,alt:"",width:"500px",height:"auto"}),a.map((function(e,t){return Object(r.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}},t)}))]})})}),v=function(e){var t=e.updateRoute,a=e.onLogin,s=c.a.useState(""),i=Object(d.a)(s,2),l=i[0],o=i[1],u=c.a.useState(""),b=Object(d.a)(u,2),j=b[0],p=b[1];return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("form",{className:"measure",onSubmit:function(e){e.preventDefault(),a(l,j)},children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign In"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",value:l,onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",value:j,onChange:function(e){var t=e.target;return p(t.value)}})]})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(r.jsx)("div",{className:"lh-copy mt3",children:Object(r.jsx)("p",{onClick:function(){return t(n.SIGN_UP)},className:"f6 link dim black db pointer",children:"Register"})})]})})})},x=function(e){var t=e.onRegister,a=c.a.useState(""),n=Object(d.a)(a,2),s=n[0],i=n[1],l=c.a.useState(""),o=Object(d.a)(l,2),u=o[0],b=o[1],j=c.a.useState(""),p=Object(d.a)(j,2),m=p[0],h=p[1];return Object(r.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(r.jsx)("main",{className:"pa4 black-80",children:Object(r.jsxs)("form",{className:"measure",onSubmit:function(e){e.preventDefault(),t(u,m,s)},children:[Object(r.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(r.jsx)("legend",{className:"f4 fw6 ph0 mh0",children:"Sign Up"}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",children:"Name"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"username",id:"username",value:s,onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(r.jsxs)("div",{className:"mt3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",children:"Email"}),Object(r.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",value:u,onChange:function(e){var t=e.target;return b(t.value)}})]}),Object(r.jsxs)("div",{className:"mv3",children:[Object(r.jsx)("label",{className:"db fw6 lh-copy f6",children:"Password"}),Object(r.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",value:m,onChange:function(e){var t=e.target;return h(t.value)}})]})]}),Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign up"})})]})})})},N=function(e){var t=e.name,a=e.rank;return Object(r.jsxs)("div",{className:"mt4",children:[Object(r.jsx)("div",{className:"white f3",children:"".concat(t," your current rank is ...")}),Object(r.jsx)("div",{className:"white f1",children:"#".concat(a)})]})},w=a(98),A=a.n(w),I=a(52),k=a.n(I),S=a(16),y=a.n(S),R={signIn:function(){var e=Object(b.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat(j,"/signin"),{email:t,password:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(b.a)(u.a.mark((function e(t,a,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("".concat(j,"/register"),{email:t,name:n,password:a});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},E=new k.a.App({apiKey:"ca95d6f5a3cb480f85bf4d65fe5dc41e"}),G={particles:{number:{value:30,density:{enable:!0,value_area:800}}}};var C=function(){var e=c.a.useState(localStorage.getItem("token")?n.HOME:n.SIGN_IN),t=Object(d.a)(e,2),a=t[0],s=t[1],i=c.a.useState([]),l=Object(d.a)(i,2),o=l[0],j=l[1],m=c.a.useState(""),h=Object(d.a)(m,2),w=h[0],I=h[1],S=c.a.useState(""),y=Object(d.a)(S,2),C=y[0],T=y[1],H=c.a.useState(null),q=Object(d.a)(H,2),L=q[0],M=q[1],D=c.a.useState(),B=Object(d.a)(D,2),P=B[0],V=B[1],F=function(e){s(e)},Z=function(){var e=Object(b.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.signIn(t,a);case 3:r=e.sent,localStorage.setItem("token",r.token),localStorage.setItem("user",r.user),V(r.user),F(n.HOME),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),M(String(e.t0.response.data.error)),setTimeout((function(){return M(null)}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(b.a)(u.a.mark((function e(t,a,r){var s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.signUp(t,a,r);case 3:s=e.sent,localStorage.setItem("token",s.token),localStorage.setItem("user",s.user),V(s.user),F(n.HOME),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),M(String(e.t0.response.data.error)),setTimeout((function(){return M(null)}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(A.a,{className:"particles",params:G}),Object(r.jsx)(p,{updateRoute:F,route:a}),L&&Object(r.jsxs)("div",{className:"flex items-center justify-center pa2 bg-moon-gray navy o-80",children:[Object(r.jsxs)("svg",{className:"w1","data-icon":"info",viewBox:"0 0 32 32",style:{fill:"currentcolor"},children:[Object(r.jsx)("title",{children:"info icon"}),Object(r.jsx)("path",{d:"M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"})]}),Object(r.jsx)("span",{className:"lh-title ml3",children:L})]}),a===n.SIGN_IN&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v,{updateRoute:F,onLogin:Z})}),a===n.SIGN_UP&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x,{onRegister:U})}),a===n.HOME&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{children:Object(r.jsx)(N,{rank:4,name:String(null===P||void 0===P?void 0:P.name)})}),Object(r.jsx)(f,{onButtonSubmit:function(){T(w),E.models.predict(k.a.FACE_DETECT_MODEL,w).then((function(e){j(e.outputs[0].data.regions.map((function(e){return function(e){var t=e,a=document.getElementById("inputImage"),n=Number(a.offsetWidth),r=Number(a.offsetHeight);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}}(e.region_info.bounding_box)})))})).catch((function(e){return console.log(e)}))},input:w,updateInput:function(e){I(e),T("")}}),Object(r.jsx)(O,{boxes:o,imageUrl:C})]})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,379)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};a(376),a(377);l.a.render(Object(r.jsx)(C,{}),document.getElementById("root")),T()}},[[378,1,2]]]);
//# sourceMappingURL=main.5fe8fb0a.chunk.js.map