!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3)},function(e,t,n){},function(e,t){var n=new Swiper(".swiper",{loop:!0,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{enabled:!0,autoHeight:!0},768:{enabled:!1,autoHeight:!0}}});window.addEventListener("resize",(function(){window.innerWidth<768&&n.enable(),window.innerWidth>=768&&(n.realIndex=0,n.disable(),n.updateAutoHeight(1))})),document.querySelector(".button-expand").addEventListener("click",(function(){"Показать все"===document.querySelector(".button-expand_inner").innerHTML?(document.querySelector(".swiper.swiper-custom").style.height="272px",document.querySelector(".button-expand_inner").innerHTML="Скрыть"):"Скрыть"===document.querySelector(".button-expand_inner").innerHTML&&(document.querySelector(".swiper.swiper-custom").style.height="184px",document.querySelector(".button-expand_inner").innerHTML="Показать все")})),document.querySelector(".ic-burger").addEventListener("click",(function(){document.querySelector(".sidebar").visibility="visible",document.querySelector(".sidebar").style.left="-320px",document.querySelector(".sidebar").animate([{transform:"translateX(320px)"}],{duration:1e3,fill:"forwards"})})),document.querySelector(".ic-cross").addEventListener("click",(function(){document.querySelector(".sidebar").animate([{transform:"translateX(-320px)"}],{duration:1e3,fill:"forwards"}),document.querySelector(".sidebar").style.left="0"}))}]);
//# sourceMappingURL=bundle.js.map