(()=>{"use strict";var n={294:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(537),o=t.n(e),a=t(645),A=t.n(a)()(o());A.push([n.id,"@keyframes rotationY360 {\n  from {\n    transform: rotateX(0) rotateY(720deg) rotateZ(0);\n  }\n  to {\n    transform: rotateX(360deg) rotateY(0) rotateZ(360deg);\n  }\n}\n\n.cube {\n  width: 500px;\n  height: 500px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: relative;\n\n  transform-style: preserve-3d;\n\n  animation: rotationY360 10s infinite;\n  animation-timing-function: linear;\n}\n\n.face {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  opacity: 0.5;\n  display: grid;\n  place-content: center;\n\n  outline: 5px solid black;\n  outline-offset: -5px;\n}\n\n.face-text {\n  font-size: 2rem;\n  font-weight: bold;\n  color: white;\n  opacity: 0.8;\n}\n\n.front-face {\n  background-color: red;\n  transform: translateZ(100px);\n}\n\n.left-face {\n  background-color: blue;\n  transform: translateX(-100px) rotateY(-90deg);\n}\n\n.right-face {\n  background-color: green;\n  transform: translateX(100px) rotateY(90deg);\n}\n\n.rear-face {\n  background-color: wheat;\n  transform: translateZ(-100px) rotateY(180deg);\n}\n\n.top-face {\n  background-color: cornflowerblue;\n  transform: translateY(-100px) rotateX(90deg);\n}\n\n.bottom-face {\n  background-color: darksalmon;\n  transform: translateY(100px) rotateX(90deg);\n}\n","",{version:3,sources:["webpack://./src/cube/cube.css"],names:[],mappings:"AAAA;EACE;IACE,gDAAgD;EAClD;EACA;IACE,qDAAqD;EACvD;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;;EAEb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,kBAAkB;;EAElB,4BAA4B;;EAE5B,oCAAoC;EACpC,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,qBAAqB;;EAErB,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,6CAA6C;AAC/C;;AAEA;EACE,uBAAuB;EACvB,2CAA2C;AAC7C;;AAEA;EACE,uBAAuB;EACvB,6CAA6C;AAC/C;;AAEA;EACE,gCAAgC;EAChC,4CAA4C;AAC9C;;AAEA;EACE,4BAA4B;EAC5B,2CAA2C;AAC7C",sourcesContent:["@keyframes rotationY360 {\r\n  from {\r\n    transform: rotateX(0) rotateY(720deg) rotateZ(0);\r\n  }\r\n  to {\r\n    transform: rotateX(360deg) rotateY(0) rotateZ(360deg);\r\n  }\r\n}\r\n\r\n.cube {\r\n  width: 500px;\r\n  height: 500px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  position: relative;\r\n\r\n  transform-style: preserve-3d;\r\n\r\n  animation: rotationY360 10s infinite;\r\n  animation-timing-function: linear;\r\n}\r\n\r\n.face {\r\n  position: absolute;\r\n  width: 200px;\r\n  height: 200px;\r\n  opacity: 0.5;\r\n  display: grid;\r\n  place-content: center;\r\n\r\n  outline: 5px solid black;\r\n  outline-offset: -5px;\r\n}\r\n\r\n.face-text {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n  color: white;\r\n  opacity: 0.8;\r\n}\r\n\r\n.front-face {\r\n  background-color: red;\r\n  transform: translateZ(100px);\r\n}\r\n\r\n.left-face {\r\n  background-color: blue;\r\n  transform: translateX(-100px) rotateY(-90deg);\r\n}\r\n\r\n.right-face {\r\n  background-color: green;\r\n  transform: translateX(100px) rotateY(90deg);\r\n}\r\n\r\n.rear-face {\r\n  background-color: wheat;\r\n  transform: translateZ(-100px) rotateY(180deg);\r\n}\r\n\r\n.top-face {\r\n  background-color: cornflowerblue;\r\n  transform: translateY(-100px) rotateX(90deg);\r\n}\r\n\r\n.bottom-face {\r\n  background-color: darksalmon;\r\n  transform: translateY(100px) rotateX(90deg);\r\n}\r\n"],sourceRoot:""}]);const s=A},985:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(537),o=t.n(e),a=t(645),A=t.n(a)()(o());A.push([n.id,"@keyframes slow-turn {\n  from {\n    transform: rotateX(-30deg) rotate3d(0, 1, 0, 0);\n  }\n  to {\n    transform: rotateX(-30deg) rotate3d(0, 1, 0, 360deg);\n  }\n}\n\n.scene {\n  transform-style: preserve-3d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: slow-turn 30s linear infinite;\n}\n\n.scene * {\n  position: absolute;\n}\n\n.grass {\n  width: 800px;\n  height: 800px;\n  background-color: #47ca6e;\n  transform: translate3d(0, 50px, 0) rotate3d(1, 0, 0, 90deg);\n}\n\n.house {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform-style: preserve-3d;\n}\n\n.wall {\n  width: 200px;\n  height: 100px;\n  outline: 2px solid rgba(0, 0, 0, 0.205);\n  outline-offset: -2px;\n  background-color: lightpink;\n}\n\n.front-wall {\n  transform: translate3d(0, 0, 100px);\n}\n\n.rear-wall {\n  transform: translate3d(0, 0, -100px);\n}\n\n.right-wall {\n  outline: none;\n  transform: translate3d(100px, 0, 0) rotateY(90deg);\n}\n\n.left-wall {\n  outline: none;\n  transform: translate3d(-100px, 0, 0) rotateY(90deg);\n}\n\n.roof-side {\n  width: 0;\n  height: 0;\n  /* border-left and border-right determine the width */\n  border-left: 100px solid transparent;\n  border-right: 100px solid transparent;\n  /* border-bottom determines the height */\n  border-bottom: 50px solid lightpink;\n}\n\n.left-roof-side {\n  transform: translate3d(-100px, -75px, 0) rotate3d(0, 1, 0, 90deg);\n}\n.right-roof-side {\n  transform: translate3d(100px, -75px, 0) rotate3d(0, 1, 0, 90deg);\n}\n\n.roof {\n  height: 112px;\n  transform-origin: 0 0 0;\n  background-color: #a86335;\n}\n\n.front-roof {\n  transform: translate3d(0, -44px, 0) rotateX(63.435deg);\n}\n\n.rear-roof {\n  transform: translate3d(0, -44px, 0) rotateX(-63.435deg);\n}\n\n.door {\n  width: 40px;\n  height: 70px;\n  background-color: rgb(218, 121, 121);\n  transform: translate3d(0, 15px, 100px);\n\n  transform-style: preserve-3d;\n\n  border: 2px solid rgba(0, 0, 0, 0.473);\n}\n\n.window {\n  width: 10px;\n  height: 10px;\n  background-color: lightblue;\n  border: 2px solid rgba(0, 0, 0, 0.466);\n}\n\n.door-window {\n  top: 5px;\n  left: 5px;\n}\n\n.door-window:nth-child(n + 2) {\n  top: 5px;\n  left: 20px;\n}\n\n.door-window:nth-child(n + 3) {\n  top: 20px;\n  left: 5px;\n}\n\n.door-window:nth-child(n + 4) {\n  top: 20px;\n  left: 20px;\n}\n\n.door-window:nth-child(n + 5) {\n  top: 35px;\n  left: 5px;\n}\n\n.door-window:nth-child(n + 6) {\n  top: 35px;\n  left: 20px;\n}\n","",{version:3,sources:["webpack://./src/house/house.css"],names:[],mappings:"AAAA;EACE;IACE,+CAA+C;EACjD;EACA;IACE,oDAAoD;EACtD;AACF;;AAEA;EACE,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,2DAA2D;AAC7D;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uCAAuC;EACvC,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,mDAAmD;AACrD;;AAEA;EACE,QAAQ;EACR,SAAS;EACT,qDAAqD;EACrD,oCAAoC;EACpC,qCAAqC;EACrC,wCAAwC;EACxC,mCAAmC;AACrC;;AAEA;EACE,iEAAiE;AACnE;AACA;EACE,gEAAgE;AAClE;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,sCAAsC;;EAEtC,4BAA4B;;EAE5B,sCAAsC;AACxC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,SAAS;AACX;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,SAAS;AACX;;AAEA;EACE,SAAS;EACT,UAAU;AACZ",sourcesContent:["@keyframes slow-turn {\r\n  from {\r\n    transform: rotateX(-30deg) rotate3d(0, 1, 0, 0);\r\n  }\r\n  to {\r\n    transform: rotateX(-30deg) rotate3d(0, 1, 0, 360deg);\r\n  }\r\n}\r\n\r\n.scene {\r\n  transform-style: preserve-3d;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  animation: slow-turn 30s linear infinite;\r\n}\r\n\r\n.scene * {\r\n  position: absolute;\r\n}\r\n\r\n.grass {\r\n  width: 800px;\r\n  height: 800px;\r\n  background-color: #47ca6e;\r\n  transform: translate3d(0, 50px, 0) rotate3d(1, 0, 0, 90deg);\r\n}\r\n\r\n.house {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n.wall {\r\n  width: 200px;\r\n  height: 100px;\r\n  outline: 2px solid rgba(0, 0, 0, 0.205);\r\n  outline-offset: -2px;\r\n  background-color: lightpink;\r\n}\r\n\r\n.front-wall {\r\n  transform: translate3d(0, 0, 100px);\r\n}\r\n\r\n.rear-wall {\r\n  transform: translate3d(0, 0, -100px);\r\n}\r\n\r\n.right-wall {\r\n  outline: none;\r\n  transform: translate3d(100px, 0, 0) rotateY(90deg);\r\n}\r\n\r\n.left-wall {\r\n  outline: none;\r\n  transform: translate3d(-100px, 0, 0) rotateY(90deg);\r\n}\r\n\r\n.roof-side {\r\n  width: 0;\r\n  height: 0;\r\n  /* border-left and border-right determine the width */\r\n  border-left: 100px solid transparent;\r\n  border-right: 100px solid transparent;\r\n  /* border-bottom determines the height */\r\n  border-bottom: 50px solid lightpink;\r\n}\r\n\r\n.left-roof-side {\r\n  transform: translate3d(-100px, -75px, 0) rotate3d(0, 1, 0, 90deg);\r\n}\r\n.right-roof-side {\r\n  transform: translate3d(100px, -75px, 0) rotate3d(0, 1, 0, 90deg);\r\n}\r\n\r\n.roof {\r\n  height: 112px;\r\n  transform-origin: 0 0 0;\r\n  background-color: #a86335;\r\n}\r\n\r\n.front-roof {\r\n  transform: translate3d(0, -44px, 0) rotateX(63.435deg);\r\n}\r\n\r\n.rear-roof {\r\n  transform: translate3d(0, -44px, 0) rotateX(-63.435deg);\r\n}\r\n\r\n.door {\r\n  width: 40px;\r\n  height: 70px;\r\n  background-color: rgb(218, 121, 121);\r\n  transform: translate3d(0, 15px, 100px);\r\n\r\n  transform-style: preserve-3d;\r\n\r\n  border: 2px solid rgba(0, 0, 0, 0.473);\r\n}\r\n\r\n.window {\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: lightblue;\r\n  border: 2px solid rgba(0, 0, 0, 0.466);\r\n}\r\n\r\n.door-window {\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\n.door-window:nth-child(n + 2) {\r\n  top: 5px;\r\n  left: 20px;\r\n}\r\n\r\n.door-window:nth-child(n + 3) {\r\n  top: 20px;\r\n  left: 5px;\r\n}\r\n\r\n.door-window:nth-child(n + 4) {\r\n  top: 20px;\r\n  left: 20px;\r\n}\r\n\r\n.door-window:nth-child(n + 5) {\r\n  top: 35px;\r\n  left: 5px;\r\n}\r\n\r\n.door-window:nth-child(n + 6) {\r\n  top: 35px;\r\n  left: 20px;\r\n}\r\n"],sourceRoot:""}]);const s=A},426:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(537),o=t.n(e),a=t(645),A=t.n(a)()(o());A.push([n.id,":root {\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  overflow: hidden;\n\n  perspective: 300px;\n  transform-style: preserve-3d;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;;EAEjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,kBAAkB;EAClB,4BAA4B;AAC9B",sourcesContent:[":root {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  overflow: hidden;\r\n\r\n  perspective: 300px;\r\n  transform-style: preserve-3d;\r\n}\r\n"],sourceRoot:""}]);const s=A},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(e)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(A[i]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);e&&A[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},537:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var a={},A=[],s=0;s<n.length;s++){var i=n[s],d=e.base?i[0]+e.base:i[0],l=a[d]||0,c="".concat(d," ").concat(l);a[d]=l+1;var p=t(c),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var C=o(f,e);e.byIndex=s,r.splice(s,0,{identifier:c,updater:C,references:1})}A.push(c)}return A}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var a=e(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var s=t(a[A]);r[s].references--}for(var i=e(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}},569:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,t),a.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0,(()=>{var n=t(379),r=t.n(n),e=t(795),o=t.n(e),a=t(569),A=t.n(a),s=t(565),i=t.n(s),d=t(216),l=t.n(d),c=t(589),p=t.n(c),f=t(426),C={};C.styleTagTransform=p(),C.setAttributes=i(),C.insert=A().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=l(),r()(f.Z,C),f.Z&&f.Z.locals&&f.Z.locals;var u=t(294),E={};function m(n){const r=function(){const n=document.createElement("div");return n.classList.add("face"),n}(),t=function(n){const r=document.createElement("div");return r.classList.add("face-text"),r.innerText=n,r}(n);return r.appendChild(t),r}E.styleTagTransform=p(),E.setAttributes=i(),E.insert=A().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=l(),r()(u.Z,E),u.Z&&u.Z.locals&&u.Z.locals;var h=t(985),g={};function x(){const n=document.createElement("div");return n.classList.add("wall"),n}function b(){const n=document.createElement("div");return n.classList.add("roof-side"),n}g.styleTagTransform=p(),g.setAttributes=i(),g.insert=A().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),r()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const B=function(){const n=document.createElement("div");n.classList.add("cube");const r=m("Front");r.classList.add("front-face"),n.appendChild(r);const t=m("Left");t.classList.add("left-face"),n.appendChild(t);const e=m("Right");e.classList.add("right-face"),n.appendChild(e);const o=m("Rear");o.classList.add("rear-face"),n.appendChild(o);const a=m("Top");a.classList.add("top-face"),n.appendChild(a);const A=m("Bottom");return A.classList.add("bottom-face"),n.appendChild(A),n}();document.body.appendChild(B);const v=function(){const n=document.createElement("div");return n.classList.add("scene"),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("grass"),n}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("house");const r=x();r.classList.add("front-wall"),n.appendChild(r);const t=x();t.classList.add("rear-wall"),n.appendChild(t);const e=x();e.classList.add("right-wall"),n.appendChild(e);const o=x();o.classList.add("left-wall"),n.appendChild(o);const a=b();a.classList.add("left-roof-side"),n.appendChild(a);const A=b();A.classList.add("right-roof-side"),n.appendChild(A);const s=x();s.classList.add("roof","front-roof"),n.appendChild(s);const i=x();i.classList.add("roof","rear-roof"),n.appendChild(i);const d=function(){const n=document.createElement("div");n.classList.add("door");for(let r=0;r<6;r+=1){const r=document.createElement("div");r.classList.add("window","door-window"),n.appendChild(r)}return n}();return d.classList.add("front-door"),n.appendChild(d),n}()),n}();v.style.display="none",document.body.appendChild(v);let w=!0;setInterval((()=>{w?(B.style.display="none",v.style.display="flex",w=!1):(v.style.display="none",B.style.display="flex",w=!0)}),1e4)})()})();
//# sourceMappingURL=bundle.js.map