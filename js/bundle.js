!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3)},function(e,n,t){},function(e,n){var t=new Swiper(".swiper",{loop:!0,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{enabled:!0,autoHeight:!0},768:{enabled:!1,autoHeight:!0}}});window.addEventListener("resize",(function(){window.innerWidth<768&&t.enable(),window.innerWidth>=768&&(t.realIndex=0,t.disable(),t.updateAutoHeight(1))})),document.querySelector(".button-expand").addEventListener("click",(function(){"Показать все"===document.querySelector(".button-expand_inner").innerHTML?(document.querySelector(".swiper.swiper-custom").style.height="272px",document.querySelector(".button-expand_inner").innerHTML="Скрыть"):"Скрыть"===document.querySelector(".button-expand_inner").innerHTML&&(document.querySelector(".swiper.swiper-custom").style.height="184px",document.querySelector(".button-expand_inner").innerHTML="Показать все")})),document.querySelector(".ic-burger").addEventListener("click",(function(){document.querySelector(".sidebar").animate([{transform:"translateX(320px)"}],{duration:700,fill:"forwards"})})),document.querySelector(".ic-cross").addEventListener("click",(function(){document.querySelector(".sidebar").animate([{transform:"translateX(-320px)"}],{duration:700,delay:100,fill:"forwards"})}))}]);
//# sourceMappingURL=bundle.js.map