!function(t){var o={};function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=322)}({17:function(n,e,t){"use strict";n.exports=function(t){var a=[];return a.toString=function(){return this.map(function(n){var e=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}var a;return[t].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},a.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(t[r]=!0)}for(o=0;o<n.length;o++){var i=n[o];null!=i[0]&&t[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),a.push(i))}},a}},18:function(n,e,o){var t,r,i,s={},p=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=t.apply(this,arguments)),r}),a=(i={},function(n,e){if("function"==typeof n)return n();if(void 0===i[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}i[n]=t}return i[n]}),u=null,l=0,c=[],f=o(26);function b(n,e){for(var t=0;t<n.length;t++){var o=n[t],r=s[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(v(o.parts[i],e))}else{var a=[];for(i=0;i<o.parts.length;i++)a.push(v(o.parts[i],e));s[o.id]={id:o.id,refs:1,parts:a}}}}function m(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):t.push(o[a]={id:a,parts:[c]})}return t}function d(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertAt.before,t);t.insertBefore(e,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);0<=e&&c.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return o.nc}();t&&(n.attrs.nonce=t)}return x(e,n.attrs),d(n,e),e}function x(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,n){var t,o,r,i,a,c;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var s=l++;t=u||(u=h(n)),o=k.bind(null,t,s,!1),r=k.bind(null,t,s,!0)}else r=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=n,c=document.createElement("link"),void 0===a.attrs.type&&(a.attrs.type="text/css"),a.attrs.rel="stylesheet",x(c,a.attrs),d(a,c),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t=c,n),function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(n),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),function(){g(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}n.exports=function(n,a){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(a=a||{}).attrs="object"==typeof a.attrs?a.attrs:{},a.singleton||"boolean"==typeof a.singleton||(a.singleton=p()),a.insertInto||(a.insertInto="head"),a.insertAt||(a.insertAt="bottom");var c=m(n,a);return b(c,a),function(n){for(var e=[],t=0;t<c.length;t++){var o=c[t];(r=s[o.id]).refs--,e.push(r)}n&&b(m(n,a),a);for(t=0;t<e.length;t++){var r;if(0===(r=e[t]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete s[r.id]}}}};var y,w=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function k(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},26:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=e.protocol+"//"+e.host,i=r+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(t=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(t)+")")})}},322:function(n,e,t){"use strict";t.r(e);t(323),t(325)},323:function(n,e,t){var o=t(324);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(18)(o,r);o.locals&&(n.exports=o.locals)},324:function(n,e,t){(n.exports=t(17)(!1)).push([n.i,"/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n.page-become-a-contributor .main-content {\n  width: 100%;\n  padding: 50px 80px;\n  margin: auto;\n  /*progressbar*/\n  /*progressbar connectors*/\n  /*marking active/completed steps green*/\n  /*The number of the step and the connector before it = green*/\n}\n@media (max-width: 600px) {\n  .page-become-a-contributor .main-content {\n    padding: 40px 30px;\n  }\n}\n.page-become-a-contributor .main-content h1 {\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .page-become-a-contributor .main-content h1 {\n    line-height: 1.2;\n    font-size: 1.8em;\n  }\n}\n.page-become-a-contributor .main-content form {\n  position: relative;\n  margin-top: 30px;\n}\n.page-become-a-contributor .main-content h2 {\n  font-family: 'soleil', sans-serif;\n  text-align: left;\n  font-size: 1.5em;\n  border-bottom: 1px solid #d5dae6;\n  padding-bottom: 7px;\n  font-weight: 400;\n}\n.page-become-a-contributor .main-content fieldset {\n  border: none;\n  display: block;\n  background: white;\n  margin-bottom: 20px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.page-become-a-contributor .main-content fieldset:last-of-type {\n  margin-bottom: 0;\n}\n.page-become-a-contributor .main-content .active {\n  display: block;\n}\n.page-become-a-contributor .main-content p {\n  text-align: left;\n  font-weight: 300;\n}\n.page-become-a-contributor .main-content label {\n  font-family: 'soleil', sans-serif;\n  font-size: 14px;\n  color: #505050;\n  margin-bottom: 5px;\n}\n.page-become-a-contributor .main-content .split-fields {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .page-become-a-contributor .main-content .split-fields {\n    display: block;\n  }\n}\n.page-become-a-contributor .main-content .split-fields .input-field-group {\n  width: 49%;\n}\n@media (max-width: 600px) {\n  .page-become-a-contributor .main-content .split-fields .input-field-group {\n    width: 100%;\n  }\n}\n.page-become-a-contributor .main-content .input-field-group {\n  text-align: left;\n}\n.page-become-a-contributor .main-content input,\n.page-become-a-contributor .main-content textarea {\n  font-family: \"soleil\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0 solid;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  transition: all 0.2s ease-out;\n}\n.page-become-a-contributor .main-content input:focus,\n.page-become-a-contributor .main-content textarea:focus {\n  box-shadow: 0 0 3px #0a87a7;\n}\n.page-become-a-contributor .main-content input:hover,\n.page-become-a-contributor .main-content textarea:hover {\n  background: rgba(64, 206, 199, 0.16);\n  box-shadow: 0 0 3px #0a87a7;\n}\n.page-become-a-contributor .main-content input:hover::placeholder,\n.page-become-a-contributor .main-content textarea:hover::placeholder {\n  color: #72859d;\n  opacity: 0.4;\n  font-family: 'soleil', sans-serif !important;\n}\n.page-become-a-contributor .main-content input:hover::after,\n.page-become-a-contributor .main-content textarea:hover::after {\n  color: #8aafb8;\n}\n.page-become-a-contributor .main-content textarea {\n  height: 200px;\n}\n.page-become-a-contributor .main-content .next:active,\n.page-become-a-contributor .main-content .next:focus,\n.page-become-a-contributor .main-content .next:hover {\n  background: #40cebb;\n}\n.page-become-a-contributor .main-content .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.page-become-a-contributor .main-content .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.page-become-a-contributor .main-content .register-form {\n  display: none;\n}\n.page-become-a-contributor .main-content .container {\n  position: relative;\n  z-index: 1;\n  margin: 0 auto;\n}\n.page-become-a-contributor .main-content .container:after,\n.page-become-a-contributor .main-content .container:before {\n  content: \" \";\n  display: block;\n  clear: both;\n}\n.page-become-a-contributor .main-content .container .info {\n  margin: 30px auto;\n  text-align: center;\n}\n.page-become-a-contributor .main-content .container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.page-become-a-contributor .main-content .container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.page-become-a-contributor .main-content .container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.page-become-a-contributor .main-content .container .info span .fa {\n  color: #EF3B3A;\n}\n.page-become-a-contributor .main-content #progressbar {\n  margin-bottom: 30px;\n  overflow: hidden;\n  /*CSS counters to number the steps*/\n  counter-reset: step;\n  position: relative;\n}\n.page-become-a-contributor .main-content #progressbar li {\n  list-style-type: none;\n  color: #656c75;\n  text-transform: uppercase;\n  font-size: 9px;\n  width: 33.33%;\n  float: left;\n  position: relative;\n  text-align: center;\n}\n.page-become-a-contributor .main-content #progressbar li:before {\n  content: counter(step);\n  counter-increment: step;\n  width: 20px;\n  line-height: 20px;\n  display: block;\n  font-size: 10px;\n  color: #333;\n  background: #eaeaea;\n  text-align: center;\n  border-radius: 3px;\n  margin: 0 auto 5px;\n  position: relative;\n  z-index: 1;\n}\n.page-become-a-contributor .main-content #progressbar li:after {\n  content: ' ';\n  width: 100%;\n  height: 2px;\n  background: #eaeaea;\n  position: absolute;\n  left: -50%;\n  top: 9px;\n  z-index: 0;\n  opacity: 0.6;\n  /*put it behind the numbers*/\n}\n.page-become-a-contributor .main-content #progressbar li:first-child:after {\n  /*connector not needed before the first step*/\n  content: none;\n}\n.page-become-a-contributor .main-content #progressbar li.active:after,\n.page-become-a-contributor .main-content #progressbar li.active:before {\n  background: #0db0e2 !important;\n  color: white !important;\n  /*position: relative;*/\n}\n.page-become-a-contributor .main-content .next {\n  display: none;\n}\n.page-become-a-contributor .main-content button {\n  font-family: \"soleil\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #0db0e2 !important;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  margin-top: 20px;\n}\n.page-become-a-contributor .main-content button:hover {\n  cursor: pointer;\n  background: #40cebb !important;\n}\n",""])},325:function(n,e){$(document).ready(function(){var t,o,r,i,a,c,n;$(".next").click(function(){if(n)return!1;n=!0,t=$(this).parent(),o=$(this).parent().next(),$("#progressbar li").eq($("fieldset").index(o)).addClass("active"),o.show(),t.animate({opacity:0},{step:function(n,e){c=1-.2*(1-n),i=50*n+"%",a=1-n,t.css({transform:"scale("+c+")",position:"absolute"}),o.css({left:i,opacity:a})},duration:800,complete:function(){t.hide(),n=!1},easing:"easeInOutBack"})}),$(".previous").click(function(){if(n)return!1;n=!0,t=$(this).parent(),r=$(this).parent().prev(),$("#progressbar li").eq($("fieldset").index(t)).removeClass("active"),r.show(),t.animate({opacity:0},{step:function(n,e){c=.8+.2*(1-n),i=50*(1-n)+"%",a=1-n,t.css({left:i}),r.css({transform:"scale("+c+")",opacity:a})},duration:800,complete:function(){t.hide(),n=!1},easing:"easeInOutBack"})}),$(".submit").click(function(){return!1})})}});