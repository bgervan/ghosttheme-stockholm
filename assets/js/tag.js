!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=33)}({0:function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(p," */")),a=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[t].concat(a).concat([r]).join("\n")}var o,s,p;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},1:function(e,n,t){"use strict";var i,r={},a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function s(e,n){for(var t=[],i={},r=0;r<e.length;r++){var a=e[r],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):t.push(i[o]={id:o,parts:[s]})}return t}function p(e,n){for(var t=0;t<e.length;t++){var i=e[t],a=r[i.id],o=0;if(a){for(a.refs++;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(h(i.parts[o],n))}else{for(var s=[];o<i.parts.length;o++)s.push(h(i.parts[o],n));r[i.id]={id:i.id,refs:1,parts:s}}}}function l(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var i=t.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach(function(t){n.setAttribute(t,e.attributes[t])}),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var c,d=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function g(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function u(e,n,t){var i=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var m=null,f=0;function h(e,n){var t,i,r;if(n.singleton){var a=f++;t=m||(m=l(n)),i=g.bind(null,t,a,!1),r=g.bind(null,t,a,!0)}else t=l(n),i=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=s(e,n);return p(t,n),function(e){for(var i=[],a=0;a<t.length;a++){var o=t[a],l=r[o.id];l&&(l.refs--,i.push(l))}e&&p(s(e,n),n);for(var c=0;c<i.length;c++){var d=i[c];if(0===d.refs){for(var g=0;g<d.parts.length;g++)d.parts[g]();delete r[d.id]}}}}},33:function(e,n,t){"use strict";t.r(n);t(34)},34:function(e,n,t){var i=t(35);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};t(1)(i,r);i.locals&&(e.exports=i.locals)},35:function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"@media (max-width: 800px) {\n  .tag-template .page-container {\n    margin-top: 0;\n  }\n}\n.tag-template .page-container .cover {\n  background: white;\n  padding: 60px;\n  text-align: center;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n.tag-template .page-container .cover .tag-name {\n  font-size: 1.5em;\n}\n.tag-template .page-container .cover .tag-name i {\n  font-size: 0.9em;\n  margin-right: 5px;\n}\n.tag-template .postlist {\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 48.5% 48.5%;\n  background: white;\n  padding: 30px;\n  border-radius: 5px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist {\n    grid-template-columns: 1fr;\n    grid-template-columns: 100%;\n  }\n}\n.tag-template .postlist article {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  background: none;\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 1px solid #e7e1e1;\n}\n.tag-template .postlist article .post-preview-details {\n  padding: 5px;\n}\n.tag-template .postlist article .content {\n  position: relative;\n  margin: 5px 15px 15px;\n  padding: 0;\n  height: auto;\n  display: block;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .content {\n    height: auto;\n    margin: 5px 15px 15px;\n  }\n}\n.tag-template .postlist article .read-link {\n  display: none;\n}\n.tag-template .postlist article {\n  margin-bottom: 20px;\n  justify-content: space-between;\n  width: 100%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 20px !important;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article {\n    width: 100%;\n    height: auto;\n  }\n}\n.tag-template .postlist article:hover .post-image,\n.tag-template .postlist article:hover img {\n  border: unset !important;\n}\n.tag-template .postlist article .post-preview-body {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-preview-body {\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 800px) {\n  .tag-template .postlist article .tags {\n    display: none !important;\n  }\n}\n.tag-template .postlist article .post-head {\n  margin: 0;\n  order: 1;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-head {\n    min-height: unset;\n  }\n}\n.tag-template .postlist article .post-title {\n  font-size: 1.2em;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tag-template .postlist article .post-excerpt {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 0.95em;\n  line-height: 1.25;\n}\n.tag-template .postlist article .post-image {\n  display: block;\n  margin: 0 15px 0 0;\n  background-size: cover;\n  width: 105px;\n  min-width: 106px;\n  order: 0;\n  margin-right: 15px;\n  overflow: hidden;\n  border-radius: 2px;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-image {\n    margin: 0 0 20px;\n    background-size: cover;\n    order: 0;\n    overflow: hidden;\n    width: 100%;\n    min-width: unset;\n  }\n}\n.tag-template .postlist article .post-image .featured-image {\n  width: 160px;\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-image .featured-image {\n    width: 100%;\n  }\n}\n.tag-template .postlist article .post-footer {\n  display: none;\n}\n.tag-template .pagination {\n  margin: 40px auto 0;\n}\n@media (max-width: 800px) {\n  .tag-template .pagination {\n    margin: 30px auto;\n    width: 80%;\n  }\n}\n.page-series .page-content {\n  padding: 30px;\n  background: white;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .page-series .page-content {\n    border-radius: 0;\n  }\n}\n.page-series .page-content .series-title {\n  margin: 0;\n}\n.page-series .page-content .serieslist {\n  display: grid;\n  grid-template-columns: [first] 1fr [last] 1fr;\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: 30px 0 0;\n}\n@media (max-width: 600px) {\n  .page-series .page-content .serieslist {\n    grid-template-columns: 1fr;\n  }\n}\n.page-series .page-content .serieslist .seriespreview {\n  overflow: hidden;\n  background: #f3fbff;\n  border-radius: 5px;\n  border: 1px solid #dfe8ed;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview:hover {\n  cursor: pointer;\n  background: #e7f7ff;\n  border-color: #bee8ff;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-image {\n  opacity: 0.7;\n}\n.page-series .page-content .serieslist .seriespreview:hover .series-title,\n.page-series .page-content .serieslist .seriespreview:hover .series-description,\n.page-series .page-content .serieslist .seriespreview:hover .count {\n  color: #4381a1 !important;\n}\n.page-series .page-content .serieslist .seriespreview .series-image {\n  width: 100%;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info {\n  padding: 10px 15px;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-title {\n  color: #3f4856;\n  font-family: 'proxima-nova', sans-serif;\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.3em;\n  line-height: 1.2;\n  font-weight: 600;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .series-description {\n  font-weight: 300;\n  color: #373940;\n  margin: 10px 0;\n  line-height: 1.3;\n  text-align: left;\n  font-family: 'proxima-nova', sans-serif;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  transition: all 0.2s ease-out;\n}\n.page-series .page-content .serieslist .seriespreview .series-info .count {\n  font-size: 0.8em;\n  color: #a7aeb9;\n}\n@media (max-width: 800px) {\n  .page-series .sidebar {\n    display: none;\n  }\n}\n",""])}});