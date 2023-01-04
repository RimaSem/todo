(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>l});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Pacifico&family=Roboto:wght@100;300;400;500;700&display=swap);"]),a.push([n.id,'/* one more color #F1A661 */\r\n\r\nhtml,\r\nbody,\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.container {\r\n  background-color: #fdeedc;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: stretch;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\nnav,\r\nmain {\r\n  flex-shrink: 0;\r\n}\r\n\r\n/* left side navigation section */\r\nnav {\r\n  font-family: "Caveat", cursive;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  min-width: fit-content;\r\n  background-color: #fdeedc;\r\n  color: #e28b29;\r\n}\r\n\r\n/* page icon and title */\r\nnav .icon {\r\n  width: 100%;\r\n  display: flex;\r\n  border-bottom: 3px solid #e28b29;\r\n  margin-bottom: 3vh;\r\n  padding-right: 2vw;\r\n}\r\n\r\nnav .icon img {\r\n  width: clamp(40px, 6vw, 60px);\r\n  margin-right: 1vw;\r\n}\r\n\r\nnav .icon h1 {\r\n  margin: 0;\r\n  font-size: clamp(30px, 6.5vw, 2.6rem);\r\n  font-family: "Pacifico", cursive;\r\n}\r\n\r\n/* add new task button */\r\n.add-task {\r\n  padding: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  align-self: center;\r\n  background-color: #f29238cf;\r\n  padding: 3px 0;\r\n  border-radius: 6px;\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.add-task img {\r\n  width: clamp(30px, 5vh, 40px);\r\n  height: 100%;\r\n}\r\n\r\n.add-task:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n\r\n/* navigation links */\r\nnav ul li {\r\n  list-style: none;\r\n  font-size: 2rem;\r\n}\r\n\r\n.tasks-nav ul li:hover {\r\n  cursor: pointer;\r\n  color: rgba(186, 0, 0, 0.951);\r\n}\r\n\r\n.projects-nav ul li .list:hover {\r\n  cursor: pointer;\r\n  color: rgba(186, 0, 0, 0.951);\r\n}\r\n\r\n.projects-nav ul .del {\r\n  font-size: 1.5rem;\r\n  color: #e28b29;\r\n}\r\n\r\n.projects-nav ul .del:hover {\r\n  cursor: pointer;\r\n  color: red;\r\n}\r\n\r\nnav .tasks-nav {\r\n  border-bottom: 3px solid #e28b29;\r\n}\r\n\r\nul {\r\n  display: inline-block;\r\n  text-align: left;\r\n  padding: 0;\r\n  margin-left: 2vw;\r\n}\r\n\r\nul img {\r\n  height: 3.5vh;\r\n}\r\n\r\n.tasks-nav,\r\n.projects-nav {\r\n  min-width: fit-content;\r\n  white-space: nowrap;\r\n}\r\n\r\n.new-list-btn {\r\n  font-family: "Roboto", serif;\r\n  font-size: 0.9rem;\r\n  color: rgb(137, 75, 0);\r\n  width: fit-content;\r\n  margin-left: 40%;\r\n}\r\n.new-list-btn:hover {\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n/* main section */\r\nmain {\r\n  background-color: #fcc37d;\r\n  display: flex;\r\n  flex-grow: 1;\r\n  padding: 6vh 0.6rem;\r\n}\r\n\r\n.content-container {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.task {\r\n  color: #6c3a00;\r\n  background-color: rgb(255, 251, 244);\r\n  min-width: fit-content;\r\n  max-width: 800px;\r\n  margin: auto;\r\n  margin-top: 1vh;\r\n  padding: 5px 15px;\r\n  border-radius: 7px;\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.task p {\r\n  font-size: 1.1rem;\r\n  color: #a05f14;\r\n  display: none;\r\n}\r\n\r\n.task-info {\r\n  display: flex;\r\n  /* justify-content: space-between; */\r\n}\r\n\r\n.task-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  white-space: nowrap;\r\n  flex: 1;\r\n  justify-content: flex-end;\r\n  font-size: 1rem;\r\n}\r\n\r\n.task-left {\r\n  flex: 1;\r\n}\r\n\r\n.task-left input[type="checkbox"] {\r\n  transform: scale(1.5);\r\n  margin-right: 1rem;\r\n  accent-color: #757575;\r\n}\r\n\r\n/* new task form */\r\n.form-container {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  min-width: 40vw;\r\n  max-width: 500px;\r\n  height: fit-content;\r\n  padding: 2rem;\r\n  background-color: #fff3e2;\r\n  box-shadow: 3px 3px 10px #88888882;\r\n  display: none;\r\n}\r\n\r\n.form-header {\r\n  color: #a05f14;\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 1rem;\r\n  border-bottom: 1px solid #a05f14;\r\n  padding-bottom: 1rem;\r\n  margin-top: -0.6rem;\r\n}\r\n\r\n.close-form-btn:hover {\r\n  color: #e28b29;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform label {\r\n  margin-top: 0.8rem;\r\n  color: #73440e;\r\n}\r\n\r\nform input,\r\nform select {\r\n  height: 2rem;\r\n}\r\n\r\nform input,\r\nform select,\r\nform textarea {\r\n  color: #d77301;\r\n  font-size: 1rem;\r\n  border: 1px solid #73440e;\r\n}\r\n\r\nform button {\r\n  margin-top: 2rem;\r\n  height: 2rem;\r\n  border: none;\r\n  background-color: rgba(255, 166, 0, 0.885);\r\n  color: rgb(255, 255, 255);\r\n  font-size: 1.2rem;\r\n  border-radius: 4px;\r\n}\r\n\r\nform button:hover {\r\n  opacity: 0.8;\r\n  cursor: pointer;\r\n}\r\n\r\nform button:active {\r\n  background-color: rgba(147, 98, 8, 0.885);\r\n}\r\n\r\n/* new list form */\r\n.new-list-form {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  min-width: 40vw;\r\n  max-width: 500px;\r\n  height: fit-content;\r\n  padding: 2rem;\r\n  background-color: #fff3e2;\r\n  box-shadow: 3px 3px 10px #88888882;\r\n  display: none;\r\n}\r\n\r\n.btn-container {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.btn-container button {\r\n  flex: 1;\r\n}\r\n\r\n/* for mobile devices */\r\n#forMobile {\r\n  position: fixed;\r\n  top: 0;\r\n  height: 40px;\r\n  background: rgb(204, 129, 0);\r\n  width: 100%;\r\n  color: whitesmoke;\r\n  font-family: "Pacifico", cursive;\r\n  align-items: center;\r\n  font-size: 1.2rem;\r\n  display: none;\r\n  justify-content: space-between;\r\n  flex: 1;\r\n  z-index: 2;\r\n}\r\n\r\n#forMobile p {\r\n  margin-right: 4%;\r\n  font-size: 26px;\r\n}\r\n\r\n#forMobile img {\r\n  margin-left: 4%;\r\n  width: 2rem;\r\n}\r\n\r\n@media only screen and (max-width: 650px) {\r\n  #forMobile {\r\n    display: flex;\r\n  }\r\n\r\n  .task-info {\r\n    flex-direction: column;\r\n    gap: 20px;\r\n  }\r\n\r\n  /* body {\r\n    background-color: #fcc37d;\r\n  } */\r\n\r\n  nav {\r\n    display: none;\r\n    margin: 40px auto 0 auto;\r\n    width: 100%;\r\n    height: fit-content;\r\n  }\r\n\r\n  nav .icon {\r\n    display: none;\r\n  }\r\n\r\n  nav ul li {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .new-list-btn {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .projects-nav ul .del {\r\n    font-size: 2.2rem;\r\n  }\r\n\r\n  ul img {\r\n    height: 5vh;\r\n  }\r\n}\r\n',""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],l=0;l<n.length;l++){var s=n[l],c=t.base?s[0]+t.base:s[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=l,e.splice(l,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=r(i[a]);e[l].references--}for(var s=t(n,o),c=0;c<i.length;c++){var d=r(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),l=r(565),s=r.n(l),c=r(216),d=r.n(c),u=r(589),p=r.n(u),f=r(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=r.p+"5781fca5b913bf0bedf7.svg",g=r.p+"034b15886f43059ce303.svg",y=r.p+"397b775280ceb1ce6aa6.svg",v=r.p+"f5a855071c3bbc8091fe.svg",b=r.p+"bfa4d6580605d21ab934.svg",x=document.querySelector(".content-container"),k=document.querySelector(".form-container"),w=document.querySelector("#myForm"),S=document.querySelector(".form-title"),E=(new Date).toISOString().slice(0,10),q=new Date(E);let L=[],T=[],C={},O=1;class D{constructor(n,e,r,t=E,o,i="unchecked",a=!1){this.id=O++,this.checkbox=i,this.title=n,this.description=e,this.list=r,this.dueDate=t,this.priority=o,this.isOverdue=a}}function A(n){n.dueDate||(n.dueDate=E);const e=document.createElement("div");e.classList.add("task"),e.innerHTML=`<div class="task-info">\n    <div class="task-left">\n      <input type="checkbox" id="taskCheck" ${n.checkbox}/>\n      ${n.title}\n    </div>\n    <div class="task-right">\n    <span>${n.dueDate}</span>\n      <img class="priority-color" width="18px" src=${b} />\n      <img\n        class="highlight-edit"\n        width="18px"\n        src=${h}\n      />\n      <img\n        class="highlight-del"\n        width="18px"\n        src=${y}\n      />\n    </div>\n  </div>\n  <p>\n    <b>Details:</b> ${n.description} <br /><b\n      >Due Date:</b\n    >\n    ${n.dueDate} <br /><b>Priority:</b> <span>${n.priority}</span> <br /><b>List:</b>\n    ${n.list}\n  </p>`,e.querySelector("#taskCheck").checked?(e.querySelector(".task-left").style.textDecoration="line-through",e.querySelector(".task-left").style.color="#cccccc"):(e.querySelector(".task-left").style.textDecoration="none",e.querySelector(".task-left").style.color="#6c3a00");const r=e.querySelector(".highlight-del"),t=e.querySelector(".highlight-edit");r.addEventListener("mouseover",(n=>n.target.src=v)),r.addEventListener("mouseout",(n=>n.target.src=y)),t.addEventListener("mouseover",(n=>n.target.src=g)),t.addEventListener("mouseout",(n=>n.target.src=h)),e.querySelector("#taskCheck").addEventListener("change",(r=>{e.querySelector("p").style.display="none","unchecked"==n.checkbox?(n.checkbox="checked",r.target.checkbox=n.checkbox,r.target.parentElement.style.textDecoration="line-through",r.target.parentElement.style.color="#cccccc"):(n.checkbox="unchecked",r.target.checkbox=n.checkbox,r.target.parentElement.style.textDecoration="none",r.target.parentElement.style.color="#6c3a00"),localStorage.userTasks=JSON.stringify(L)})),e.addEventListener("click",(n=>{let r=e.querySelector("p");"none"===window.getComputedStyle(r).display?r.style.display="block":r.style.display="none"})),r.addEventListener("click",(()=>{L=L.filter((e=>e.id!=n.id)),localStorage.userTasks=JSON.stringify(L),x.removeChild(e)})),t.addEventListener("click",(()=>{t.parentElement.parentElement.parentElement.querySelector("p").style.display="block",w[0].value=n.title,w[1].value=n.description,w[2].value=n.list,w[3].value=n.dueDate,w[4].value=n.priority,w[5].textContent="Save",C=n,S.textContent="Edit Task",k.style.display="block",localStorage.userTasks=JSON.stringify(L)})),x.appendChild(e)}const j=r.p+"f2ae0867439c3df8461e.svg",z=r.p+"cc56cd77bc304817258a.svg",M=document.querySelector("nav"),N=document.querySelector(".add-btn"),$=document.querySelector(".add-task"),J=document.querySelector(".close-form-btn"),I=document.querySelector(".new-list-btn"),P=document.querySelector(".new-list-form"),F=document.querySelector(".new-list-form form"),H=document.querySelector(".btn-container button:nth-of-type(1)"),W=document.querySelector(".btn-container button:nth-of-type(2)"),R=document.querySelector(".tasks-nav ul li:nth-of-type(1)"),Z=document.querySelector(".tasks-nav ul li:nth-of-type(2)"),U=document.querySelector(".tasks-nav ul li:nth-of-type(3)");let V=!0,_=!1,B=!1,X=["Errands","Fitness","Work","School"];function G(){document.querySelector(".projects-nav ul").innerHTML='<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="list">Chores</span></li>';for(let n of X){const e=document.createElement("div");e.innerHTML=`<li><span class="del">X</span>&nbsp;&nbsp;<span class="list">${n}</span></li>`,document.querySelector(".projects-nav ul").append(e)}K(),x.innerHTML="",_?T=L.filter((n=>n.dueDate===E)):B?T=L.filter((n=>n.isOverdue)):V&&(T=[...L]);for(let n of T)new Date(n.dueDate).getTime()<q.getTime()&&(n.isOverdue=!0),A(n);document.querySelectorAll(".task-right span").forEach((n=>{let e=new Date(n.textContent.trim());n.textContent.trim()===E?n.textContent="today":e.getTime()<q.getTime()&&(n.textContent="overdue")})),document.querySelectorAll(".task p span").forEach((n=>{let e=n.parentElement.parentElement.querySelector(".priority-color");"high"===n.textContent?e.src=z:"medium"===n.textContent?e.src=j:e.src=b})),document.querySelectorAll(".projects-nav ul li .list").forEach((n=>n.addEventListener("click",(()=>{V=!1,_=!1,B=!1,T=L.filter((e=>e.list===n.textContent)),G()})))),localStorage.userTasks=JSON.stringify(L)}function K(){document.querySelectorAll(".del").forEach((n=>n.addEventListener("click",(n=>{L=L.filter((e=>e.list!==n.target.parentElement.querySelector(".list").textContent)),X=X.filter((e=>e!==n.target.parentElement.querySelector(".list").textContent)),localStorage.userTasks=JSON.stringify(L),localStorage.localListArray=JSON.stringify(X),document.querySelectorAll("#list option").forEach((e=>{e.value===n.target.parentElement.querySelector(".list").textContent&&e.remove()})),n.target.parentElement.remove(),G()}))))}localStorage.getItem("localListArray")?(X=JSON.parse(localStorage.localListArray),console.log(X)):(localStorage.localListArray=JSON.stringify(X),console.log(localStorage.localListArray)),localStorage.getItem("userTasks")?(L=JSON.parse(localStorage.userTasks),O=L.length+1):(L.push(new D("Walk the dog","Make sure to use the blue leash","Errands","2023-01-01","high")),L.push(new D("Water the plants","In the kitchen and living room","Chores","2023-01-04","medium")),L.push(new D("Watch the news","if there is time","Errands","2022-09-01","low")),localStorage.userTasks=JSON.stringify(L)),G(),N.addEventListener("click",(n=>{if("Add"===n.target.innerText&&w.checkValidity()){const n=new D(w[0].value,w[1].value,w[2].value,w[3].value,w[4].value);L.push(n),localStorage.userTasks=JSON.stringify(L),w.reset(),k.style.display="none",V=!1,_=!1,B=!1,T=[...L],window.innerWidth<650&&(M.style.display="none"),G()}else if("Save"===n.target.innerText&&w.checkValidity()){const n=L.indexOf(C);L[n].title=w[0].value,L[n].description=w[1].value,L[n].list=w[2].value,L[n].dueDate=w[3].value,L[n].priority=w[4].value,new Date(L[n].dueDate).getTime()<q.getTime()?L[n].isOverdue=!0:L[n].isOverdue=!1,w.reset(),k.style.display="none",G(),localStorage.userTasks=JSON.stringify(L)}})),$.addEventListener("click",(()=>{w.reset(),w[5].textContent="Add",S.textContent="Add a new task",k.style.display="block"})),J.addEventListener("click",(()=>{k.style.display="none",w.reset()})),R.addEventListener("click",(()=>{V=!0,_=!1,B=!1,G()})),Z.addEventListener("click",(()=>{V=!1,_=!0,B=!1,G()})),U.addEventListener("click",(()=>{V=!1,_=!1,B=!0,G()})),I.addEventListener("click",(()=>P.style.display="block")),W.addEventListener("click",(()=>P.style.display="none")),H.addEventListener("click",(n=>{if(F[0].value){const n=F.querySelector("input");X.push(F[0].value),localStorage.localListArray=JSON.stringify(X);const e=document.createElement("option");e.value=`${n.value}`,e.textContent=`${n.value}`,document.querySelector("#list").append(e),F.reset(),P.style.display="none",G()}})),K(),document.querySelector("#dispSidebar").addEventListener("click",(n=>{"block"==M.style.display?M.style.display="none":M.style.display="block"})),window.onresize=function(){window.innerWidth>650?M.style.display="block":M.style.display="none"}})()})();