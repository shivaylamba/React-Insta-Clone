(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/dev.4231b85f.png"},43:function(e,t,a){e.exports=a(69)},48:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/I1.d5ead2c5.png"},65:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(11),r=a.n(o),s=(a(48),a(6)),i=a(90),l=a(91),m=a(21),u=a.n(m),p=u.a.initializeApp({apiKey:"AIzaSyCHNS84lW4_ELGC63h8hUkY7Sd_khdeD6E",authDomain:"instagram-clone-71729.firebaseapp.com",databaseURL:"https://instagram-clone-71729.firebaseio.com",projectId:"instagram-clone-71729",storageBucket:"instagram-clone-71729.appspot.com",messagingSenderId:"274696360859",appId:"1:274696360859:web:c9e80e9b207a38c236c73e",measurementId:"G-B6JXZP6PH8"}).firestore(),d=u.a.auth(),g=u.a.storage(),f=(a(59),a(93)),h=a(36),E=a.n(h);a(60);var b=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)([]),l=Object(s.a)(i,2),m=l[0],u=l[1];return Object(n.useEffect)((function(){var t;return e.postid&&(t=p.collection("posts").doc(e.postid).collection("comments").onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}))),function(){t()}}),[e.postid]),c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__header"},c.a.createElement(f.a,{className:"post__avatar",alt:"Tanay Tapanshu",src:E.a}),c.a.createElement("h3",null,e.username)),c.a.createElement("img",{className:"post__image img-fluid",src:e.imageUrl}),c.a.createElement("h4",{className:"post__text"},c.a.createElement("strong",null,e.username)," ",e.caption),c.a.createElement("div",{className:"post__comments"},o.map((function(e){return c.a.createElement("p",null,c.a.createElement("b",null,e.username),e.text)}))),c.a.createElement("form",null,c.a.createElement("input",{className:"post__input",type:"text",placeholder:"Add comment",onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{className:"post__button",type:"text",onClick:function(t){t.preventDefault(),p.collection("posts").doc(e.postid).collection("comments").add({text:m,username:e.user.displayName}),u("")}},"Post")))},v=(a(65),a(92));a(66);var _=function(e){var t=e.username,a=Object(n.useState)(""),o=Object(s.a)(a,2),r=o[0],i=o[1],l=Object(n.useState)(0),m=Object(s.a)(l,2),d=m[0],f=m[1],h=Object(n.useState)(null),E=Object(s.a)(h,2),b=E[0],_=E[1];return c.a.createElement("div",{className:"imagupload"},c.a.createElement("progress",{className:"imageprogress",value:d,max:"100"}),c.a.createElement("input",{type:"text",placeholder:"Enter a caption... ",onChange:function(e){return i(e.target.value)}}),c.a.createElement("input",{type:"file",onChange:function(e){e.target.files[0]&&_(e.target.files[0])}}),c.a.createElement(v.a,{onClick:function(){g.ref("images/".concat(b.name)).put(b).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);f(t)}),(function(e){console.log(e),alert(e.message)}),(function(){g.ref("images").child(b.name).getDownloadURL().then((function(e){p.collection("posts").add({timestamp:u.a.firestore.FieldValue.serverTimestamp(),caption:r,imageUrl:e,username:t}),f(0),i(""),_(null)}))}))}},"Upload "))},j=a(38);function w(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var O=Object(i.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),m=i[0],u=i[1],g=Object(n.useState)(""),f=Object(s.a)(g,2),h=f[0],E=f[1],y=Object(n.useState)(""),N=Object(s.a)(y,2),S=N[0],x=N[1],C=Object(n.useState)(""),k=Object(s.a)(C,2),I=k[0],U=k[1],A=Object(n.useState)(null),B=Object(s.a)(A,2),D=B[0],L=B[1],P=Object(n.useState)(!1),W=Object(s.a)(P,2),T=W[0],J=W[1],R=Object(n.useState)(w),F=Object(s.a)(R,1)[0],H=O();return Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){e?(console.log(e),L(e)):L(null)}))}),[D,h]),Object(n.useEffect)((function(){p.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return{post:e.data(),id:e.id}})))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(l.a,{open:m,onClose:function(e){return u(!1)}},c.a.createElement("div",{style:F,className:H.paper},c.a.createElement("form",{className:"app__form"},c.a.createElement("center",{id:"center"},c.a.createElement("img",{className:"app_headerImage ",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"}),c.a.createElement("input",{placeholder:"username",type:"text",value:h,onChange:function(e){return E(e.target.value)}}),c.a.createElement("input",{placeholder:"email",type:"text",value:S,onChange:function(e){return x(e.target.value)}}),c.a.createElement("input",{placeholder:"password",type:"text",value:I,onChange:function(e){return U(e.target.value)}}),c.a.createElement(v.a,{type:"sumbit",onClick:function(e){e.preventDefault(),d.createUserWithEmailAndPassword(S,I).then((function(e){return e.user.updateProfile({displayName:h})})).catch((function(e){return alert(e.message)})),u(!1)}},"Sign-up"))))),c.a.createElement(l.a,{open:T,onClose:function(e){return J(!1)}},c.a.createElement("div",{style:F,className:H.paper},c.a.createElement("form",{className:"app__form"},c.a.createElement("center",{id:"center"},c.a.createElement("img",{className:"app_headerImage ",src:"\nhttps://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"}),c.a.createElement("input",{placeholder:"email",type:"text",onChange:function(e){return x(e.target.value)}}),c.a.createElement("input",{placeholder:"password",type:"text",onChange:function(e){return U(e.target.value)}}),c.a.createElement(v.a,{type:"sumbit",onClick:function(e){e.preventDefault(),d.signInWithEmailAndPassword(S,I).catch((function(e){return alert(e.message)})),J(!1)}},"Sign-In"))))),c.a.createElement("div",{className:"app_header"},c.a.createElement("img",{className:"app_headerImage ",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"}),D?c.a.createElement(v.a,{onClick:function(){return d.signOut()}},"Logout"):c.a.createElement("div",{className:"app_logincontainer"},c.a.createElement(v.a,{onClick:function(){return J(!0)}},"Sign-In"),c.a.createElement(v.a,{onClick:function(){return u(!0)}},"Sign-up"))),c.a.createElement("div",{className:"postMain"},c.a.createElement("div",{className:"postLeft"},a.map((function(e){var t=e.post,a=e.id;return c.a.createElement(b,{key:a,postid:a,user:D,username:t.username,caption:t.caption,imageUrl:t.imageUrl})}))),c.a.createElement("div",{className:"postRight"},c.a.createElement(j.a,{url:"https://www.instagram.com/p/B9UxIHjJnFu/",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))),(null===D||void 0===D?void 0:D.displayName)?c.a.createElement(_,{username:D.displayName}):c.a.createElement("h3",null," You need to login "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.869735f5.chunk.js.map