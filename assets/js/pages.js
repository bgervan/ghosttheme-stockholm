!function(t){var a={};function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i(i.s=137)}({11:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var i=e.protocol+"//"+e.host,r=i+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var t,a=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(t=0===a.indexOf("//")?a:0===a.indexOf("/")?i+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(t)+")")})}},137:function(n,e,t){t(66)},6:function(n,e,t){"use strict";n.exports=function(t){var o=[];return o.toString=function(){return this.map(function(n){var e=function(n,e){var t=n[1]||"",a=n[3];if(!a)return t;if(e&&"function"==typeof btoa){var i=(o=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=a.sources.map(function(n){return"/*# sourceURL="+a.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}var o;return[t].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},o.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},a=0;a<this.length;a++){var i=this[a][0];null!=i&&(t[i]=!0)}for(a=0;a<n.length;a++){var r=n[a];null!=r[0]&&t[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),o.push(r))}},o}},66:function(n,e,t){var a=t(67);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(8)(a,i);a.locals&&(n.exports=a.locals)},67:function(n,e,t){(n.exports=t(6)(!1)).push([n.i,"/* Global Styles */\n/*====================================================\n\tCOLOR VARIABLE FOR THEME\n====================================================*/\n/*====================================================\n\tMIXINS\n====================================================*/\n/**\n * Allows you to use retina images at various pixel densities.\n * Examples:\n *\n *   .retina(/images/mypic.jpg, 2);\n *   .retina(/images/mypic.jpg, 3, 100px 100px, left top no-repeat transparent);\n *\n * @param  {String} $path               The path to the file name minus extension.\n * @param  {Number} $cap:    2          The highest pixel density level images exist for.\n * @param  {Value}  $size:   auto auto  The intended width of the rendered image.\n * @param  {Value}  $extras: null       Any other `background` values to be added.\n */\n/* Page Styles */\n.page-template h1 {\n  font-weight: 100;\n}\n.page-template .main-content {\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n  background: white;\n}\n.page-about {\n  margin-bottom: 0;\n  font-weight: 500;\n}\n.page-about .author-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  flex-flow: row wrap;\n  margin: 0 40px 20px;\n}\n@media (max-width: 1040px) {\n  .page-about .author-container {\n    margin: 0 10px 30px;\n  }\n}\n@media (max-width: 900px) {\n  .page-about .author-container {\n    margin: 0 30px 30px;\n  }\n}\n.page-about .author-container .author-card-small {\n  width: 48.5%;\n  margin-bottom: 5px !important;\n}\n.page-about figure {\n  margin: 0;\n}\n@media (max-width: 600px) {\n  .page-about figure {\n    margin-bottom: 10px;\n  }\n}\n.page-about iframe {\n  /*box-shadow: 0 0 22px #8d9fb9;*/\n  margin-bottom: 30px;\n  width: 100%;\n  left: 0;\n}\n.page-about .page-title {\n  margin: 40px 40px 30px !important;\n  font-weight: 500;\n}\n@media (max-width: 1100px) {\n  .page-about .page-title {\n    font-size: 3em;\n    display: none;\n  }\n}\n.page-about .about-content > p {\n  margin: 0 44px 20px !important;\n}\n@media (max-width: 600px) {\n  .page-about .about-content > p {\n    margin: 0 30px 20px !important;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .about-content {\n    display: flex;\n    flex-direction: column;\n    margin: -14px 0 0 !important;\n  }\n}\n.page-about .featured-media {\n  display: none !important;\n}\n.page-about .welcomevideo,\n.page-about iframe {\n  margin: 0 0 40px !important;\n  height: 400px;\n  display: block;\n}\n@media (max-width: 1100px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    margin: -12px auto 20px 0 !important;\n  }\n}\n@media (max-width: 800px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 451px;\n  }\n}\n@media (max-width: 600px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    width: 100%;\n    height: 360px;\n    margin: -12px 0 10px 0 !important;\n    top: -7px;\n  }\n}\n@media (max-width: 470px) {\n  .page-about .welcomevideo,\n  .page-about iframe {\n    height: 250px !important;\n    min-height: auto !important;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  height: 50px;\n}\n@media (max-width: 600px) {\n  .page-about .fluid-width-video-wrapper {\n    margin: 0 40px 30px;\n  }\n}\n.page-about .fluid-width-video-wrapper {\n  width: 90%;\n  margin: auto;\n  position: relative;\n  padding: 0;\n}\n.tag-template .series-cover {\n  background-size: cover;\n  background-position-y: center;\n  height: 300px;\n  background-color: #192e4c;\n  background-blend-mode: multiply;\n}\n@media (max-width: 600px) {\n  .tag-template .series-cover {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    margin-top: -20px;\n  }\n}\n.tag-template .series-cover .tag-name {\n  font-size: 2.2em;\n  color: white !important;\n  font-family: 'soleil', sans-serif;\n  text-shadow: 0 0 20px #2f2d56;\n  margin-top: 90px;\n}\n.tag-template .series-cover .tag-description {\n  font-weight: 600;\n  line-height: 1.5;\n  max-width: 90%;\n  margin: 20px auto 0;\n  color: white;\n  font-family: soleil, sans-serif;\n  text-shadow: 2px 2px 0 #15133c, 2px 2px 10px #15133c;\n  font-size: 1.2em;\n}\n.tag-template .postlist {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-template .postlist article {\n  margin-bottom: 20px;\n}\n.tag-template .postlist article .content {\n  position: relative;\n  margin: 5px 15px 15px;\n  padding: 0;\n  height: auto;\n  display: block;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .content {\n    height: auto;\n    margin: 5px 15px 15px;\n  }\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-content {\n    display: none;\n  }\n}\n.tag-template .postlist article {\n  width: 49%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article {\n    width: 100%;\n    height: auto;\n  }\n}\n.tag-template .postlist article .post-head {\n  margin: 0;\n  min-height: 140px;\n  padding: 5px 5px 0;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-head {\n    margin: 0 0 80px;\n    min-height: unset;\n  }\n}\n.tag-template .postlist article .post-title {\n  font-size: 1.4em;\n}\n.tag-template .postlist article .post-title a {\n  font-family: 'ProductSans-Medium', sans-serif;\n  font-weight: 500;\n}\n.tag-template .postlist article .featured-media {\n  display: block;\n  margin: 0 auto;\n  background-size: cover;\n  width: 100%;\n}\n.tag-template .postlist article .post-excerpt {\n  -webkit-line-clamp: 3;\n  display: -webkit-box;\n  min-height: 80px;\n  margin-bottom: 55px;\n  overflow: hidden;\n  font-family: 'soleil', sans-serif;\n  font-size: 1em !important;\n  text-overflow: ellipsis;\n  font-weight: 400;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-excerpt {\n    font-size: 0.95em !important;\n    min-height: unset;\n    height: fit-content;\n    max-height: fit-content;\n    position: relative;\n    margin-bottom: 20px;\n  }\n}\n.tag-template .postlist article .post-permalink {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px 0 0;\n}\n.tag-template .postlist article .post-permalink .meta {\n  justify-content: left;\n}\n.tag-template .postlist article .post-permalink .btn {\n  padding: 12px 20px;\n  font-size: 16px;\n  font-family: soleil, sans-serif;\n}\n.tag-template .postlist article .post-permalink .btn a {\n  line-height: 1;\n  height: fit-content;\n}\n.tag-template .postlist article .post-permalink .btn:hover {\n  background: #30b1a7;\n  color: white;\n}\n@media (max-width: 600px) {\n  .tag-template .postlist article .post-permalink .btn {\n    display: block !important;\n  }\n}\n.tag-template .postlist article .author,\n.tag-template .postlist article .tags,\n.tag-template .postlist article p {\n  display: none !important;\n}\n.tag-template .tag-image {\n  width: 100%;\n  height: 370px;\n  background-size: cover !important;\n}\n.tag-template .post-title a {\n  font-size: 1em !important;\n  font-family: 'ProductSans-Regular', sans-serif;\n}\n.tag-template .post-preview {\n  padding: 0 !important;\n}\n.page-series .page-head {\n  margin: 40px 40px 0;\n  padding: 0;\n}\n@media (max-width: 800px) {\n  .page-series .page-head {\n    margin: 40px 30px 0;\n  }\n}\n.page-series .post-title {\n  margin: 27px 28px 20px;\n}\n@media (max-width: 600px) {\n  .page-series .post-title {\n    font-size: 3em;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .post-content {\n    margin: 25px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .page-title {\n    margin: 40px 50px 0;\n  }\n}\n@media (max-width: 900px) {\n  .page-series .post-title .container {\n    width: 90% !important;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .post-title .container {\n    width: 100% !important;\n  }\n}\n.page-series p {\n  color: #505050;\n  margin: -20px 40px 20px;\n}\n@media (max-width: 900px) {\n  .page-series p {\n    min-height: 63px;\n    margin: -20px 30px 20px;\n  }\n}\n.page-series .tag-container {\n  display: grid;\n  grid-template-columns: [first] 1fr [last] 1fr;\n  grid-template-rows: 367px;\n  grid-column-gap: 10px;\n  margin: 30px 40px 20px;\n}\n@media (max-width: 800px) {\n  .page-series .tag-container {\n    margin: 30px 30px 20px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container {\n    grid-template-columns: [first] 1fr;\n    margin: 20px;\n  }\n}\n.page-series .tag-container .tag-wrapper {\n  background: #f4fcff;\n  margin: 0 0 15px;\n  border: 1px solid #dadada;\n  transition: all 0.3s ease-out;\n  grid-template-rows: 291px;\n}\n.page-series .tag-container .tag-wrapper > a {\n  display: flex;\n  flex-direction: column;\n}\n.page-series .tag-container .tag-wrapper .tag-title {\n  margin: 0;\n  width: auto;\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #001b2f 100%);\n  height: 204px;\n  padding: 20px 20px 0;\n}\n.page-series .tag-container .tag-wrapper .tag-title span {\n  font-size: 1.1em;\n  margin: 0;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .page-series .tag-container .tag-wrapper {\n    margin: 0 0 25px;\n  }\n  .page-series .tag-container .tag-wrapper:last-of-type {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper {\n    width: 100%;\n  }\n}\n.page-series .tag-container .tag-wrapper:hover {\n  background-color: #0db0e2;\n  border: 1px solid #0db0e2;\n  cursor: pointer !important;\n}\n.page-series .tag-container .tag-wrapper:hover .tag-title {\n  background: linear-gradient(0deg, rgba(2, 0, 36, 0) 0%, #007ad4 100%);\n}\n.page-series .tag-container .tag-wrapper:hover h2,\n.page-series .tag-container .tag-wrapper:hover p,\n.page-series .tag-container .tag-wrapper:hover span {\n  color: #1e608a !important;\n}\n.page-series .tag-container .tag-wrapper:hover .img-wrapper {\n  opacity: 0.7;\n}\n.page-series .tag-container .tag-wrapper .img-wrapper {\n  text-align: center;\n  width: 100%;\n  max-height: 161px;\n  height: auto;\n  position: relative;\n  display: block;\n  transition: all 0.3s ease-out;\n}\n@media (max-width: 800px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 206px;\n  }\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .img-wrapper {\n    max-height: 320px;\n  }\n}\n.page-series .tag-container .tag-wrapper .img-wrapper img {\n  max-width: 100%;\n}\n.page-series .tag-container .tag-wrapper .meta-info {\n  font-weight: 900;\n  color: white;\n  font-size: 12px;\n  padding: 0;\n  text-align: left;\n}\n.page-series .tag-container .tag-wrapper .description {\n  padding: 15px;\n  background: rgba(246, 252, 255, 0.9);\n  margin: 0;\n  position: relative;\n  bottom: 0;\n  color: #162c52;\n  width: auto;\n  display: block;\n  text-align: left;\n  min-height: 159px;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description {\n    min-height: 0;\n  }\n}\n.page-series .tag-container .tag-wrapper .description h2 {\n  color: #3f4856;\n  font-family: 'ProductSans-Regular', sans-serif;\n  margin-bottom: 7px;\n  margin-top: 0;\n  font-size: 1.3em;\n  line-height: 1.2;\n  font-weight: 600;\n}\n.page-series .tag-container .tag-wrapper .description p {\n  font-size: 0.9em;\n  font-weight: 300;\n  color: #2d2f35;\n  margin: 5px 0;\n  line-height: 1.5;\n  text-align: left;\n  font-family: 'soleil', sans-serif;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n@media (max-width: 600px) {\n  .page-series .tag-container .tag-wrapper .description p {\n    margin: 10px 0 25px;\n    min-height: 0;\n  }\n}\n.page-series .tag-container .tag-wrapper .description .postcount {\n  color: #4d4a5e;\n  text-align: right;\n  line-height: 1;\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  font-size: 0.9em;\n  font-family: 'soleil', sans-serif;\n}\n.tag-title {\n  color: white;\n}\n.tag-image {\n  margin-top: 30px;\n}\n@media (max-width: 600px) {\n  .tag-image {\n    display: none;\n  }\n}\n.page-resources h1 {\n  margin: 40px 40px 30px;\n}\n.page-resources section {\n  width: -webkit-fill-available;\n}\n.page-resources p {\n  margin: auto 40px 30px;\n}\n.page-resources #tablewrapper {\n  margin: auto 40px 40px;\n  width: -webkit-fill-available;\n}\n.page-resources #resources-table {\n  width: 100%;\n}\n.page-resources #resources-table .icon {\n  max-width: 5px;\n}\n.page-resources #resources-table td {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-align: left;\n}\n.page-resources #resources-table tbody tr td:first-of-type {\n  text-align: center;\n}\n.page-resources #resources-table tbody tr .issuetype_icon {\n  text-align: center !important;\n  width: 25px;\n  height: auto;\n}\n.page-resources #resources-table tbody tr .summmary {\n  font-weight: 600 !important;\n  font-size: 0.85em !important;\n}\n.page-resources #resources-table tbody tr .description {\n  max-width: none;\n}\n.page-resources #resources-table tbody tr .issuetype-name {\n  font-size: 0.8em !important;\n  min-width: 100px;\n}\n.page-resources #resources-table tbody tr.Epic {\n  display: none !important;\n}\n.author-template .tag-name,\n.home-template .tag-name,\n.paged .tag-name,\n.tag-template .tag-name {\n  font-size: 1.3em;\n  margin-top: 0;\n  font-family: 'soleil', sans-serif;\n}\n.author-template .tag-name i,\n.home-template .tag-name i,\n.paged .tag-name i,\n.tag-template .tag-name i {\n  font-size: 0.8em;\n  margin-right: 5px;\n  font-weight: 100;\n}\n@media (max-width: 800px) {\n  .author-template .main-header,\n  .home-template .main-header,\n  .paged .main-header,\n  .tag-template .main-header {\n    height: 200px;\n  }\n}\n/*====================================================\n\tTag page & author page cover\n====================================================*/\n.cover {\n  text-align: center;\n  background-color: white;\n  padding: 40px;\n  margin-bottom: 30px;\n  width: -webkit-fill-available;\n  width: -moz-fill-available;\n  box-shadow: 0 0 5px rgba(65, 67, 144, 0.15);\n}\n@media (max-width: 800px) {\n  .cover {\n    margin: 0 auto 20px;\n    width: 92%;\n    padding: 40px 0;\n  }\n}\n@media (max-width: 600px) {\n  .cover {\n    margin-left: calc(-50vw + 50%) !important;\n    margin-right: calc(-50vw + 50%) !important;\n    margin-top: 0;\n    padding: 30px 0;\n    width: 100%;\n  }\n}\n.cover .post-title {\n  font-weight: 500;\n}\n.cover .tag-name {\n  margin-top: 0;\n}\n.cover .tag-name i {\n  font-size: 20px;\n  margin-right: 5px;\n}\n.cover .tag-description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: 14px;\n  line-height: 1.5;\n}\n@media (max-width: 600px) {\n  .cover .tag-description {\n    width: 93%;\n    margin: 0 auto;\n    font-size: 0.95em;\n    line-height: 1.6;\n  }\n}\n.cover .post-excerpt {\n  font-family: 'soleil', sans-serif;\n}\n.cover h3 {\n  margin-bottom: 10px;\n  font-family: 'soleil', sans-serif;\n}\n@media (max-width: 600px) {\n  .cover h3 {\n    margin: 5px 10px;\n  }\n}\n.cover .meta-info {\n  font-family: 'soleil', sans-serif;\n  font-size: 0.9em;\n  display: flex;\n  justify-content: space-around;\n  width: 81%;\n  margin: auto;\n}\n@media (max-width: 600px) {\n  .cover .meta-info {\n    flex-direction: column;\n  }\n}\n.cover .meta-info span {\n  margin: 0 7px;\n  font-size: 0.9em;\n  line-height: 1.8;\n}\n.cover .meta-info span i {\n  margin-right: 7px;\n}\n@media (max-width: 600px) {\n  .cover .meta-info span {\n    display: block;\n    line-height: 1.6;\n  }\n}\n/* Table Styles for Resources Page */\n.post-template table,\n.page-resources table,\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  border: none;\n  max-width: 150px;\n  overflow: hidden;\n  text-align: left !important;\n  padding: 15px 20px;\n}\n.post-template td,\n.page-resources td {\n  font-weight: 300;\n}\n.post-template table,\n.page-resources table {\n  min-width: 100%;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid rgba(77, 87, 109, 0.25);\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: 100%;\n  }\n}\n.post-template table.left tbody td,\n.page-resources table.left tbody td {\n  text-align: left;\n  vertical-align: top;\n}\n.post-template table.left tbody .pre,\n.page-resources table.left tbody .pre {\n  font-size: 0.8em;\n  width: fit-content;\n}\n.post-template table thead tr,\n.page-resources table thead tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #5d6b8a !important;\n  color: white;\n}\n.post-template table thead th,\n.page-resources table thead th {\n  text-align: center;\n  font-family: 'soleil', sans-serif;\n  min-width: 30px;\n  padding: 10px;\n  font-size: 0.9em;\n}\n.post-template table thead th strong,\n.page-resources table thead th strong {\n  font-family: 'soleil', sans-serif;\n}\n.post-template table thead th::before,\n.page-resources table thead th::before {\n  font-family: 'soleil', sans-serif !important;\n}\n.post-template table.striped tr,\n.page-resources table.striped tr {\n  border-bottom: none;\n}\n.post-template table.striped tbody tr:nth-child(odd),\n.page-resources table.striped tbody tr:nth-child(odd) {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.striped tbody tr > td,\n.page-resources table.striped tbody tr > td {\n  border-radius: 0;\n}\n.post-template table.highlight > tbody > tr,\n.page-resources table.highlight > tbody > tr {\n  transition: background-color 0.25s ease;\n}\n.post-template table.highlight > tbody > tr:hover,\n.page-resources table.highlight > tbody > tr:hover {\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.post-template table.centered tbody tr td,\n.page-resources table.centered tbody tr td,\n.post-template table.centered thead tr th,\n.page-resources table.centered thead tr th {\n  text-align: center;\n}\n.post-template tr:nth-child(odd),\n.page-resources tr:nth-child(odd) {\n  background-color: #fff;\n}\n.post-template tr:nth-child(even),\n.page-resources tr:nth-child(even) {\n  background-color: #f5f8ff;\n}\n.post-template td,\n.page-resources td,\n.post-template th,\n.page-resources th {\n  padding: 15px;\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 0.8em;\n  text-align: center;\n  line-height: 1.2;\n}\n@media (max-width: 600px) {\n  .post-template table,\n  .page-resources table {\n    width: auto;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    position: relative;\n    overflow-x: scroll;\n  }\n  .post-template table tbody:hover,\n  .page-resources table tbody:hover {\n    cursor: grab !important;\n  }\n  .post-template table td:empty:before,\n  .page-resources table td:empty:before {\n    content: '\\00a0';\n  }\n  .post-template table td,\n  .page-resources table td,\n  .post-template table th,\n  .page-resources table th {\n    margin: 0;\n    vertical-align: top;\n    border-spacing: 0 !important;\n    border-collapse: collapse !important;\n    font-size: 0.8em;\n  }\n  .post-template table td,\n  .page-resources table td {\n    width: -webkit-fill-available;\n    width: -moz-available;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: soleil, sans-serif;\n  }\n  .post-template table thead,\n  .page-resources table thead {\n    position: absolute;\n    left: 0;\n    width: 120px;\n    height: 100%;\n    box-shadow: 1px 0 4px rgba(62, 69, 86, 0.7);\n    z-index: 2;\n  }\n  .post-template table thead th,\n  .page-resources table thead th {\n    display: block;\n    padding: 10px 5px !important;\n    font-family: 'soleil', sans-serif;\n    letter-spacing: 0.5px;\n    text-align: left;\n    text-transform: capitalize;\n    font-weight: 500;\n    font-size: 0.8em;\n  }\n  .post-template table thead th *,\n  .page-resources table thead th * {\n    font-size: 1em;\n  }\n  .post-template table thead tr,\n  .page-resources table thead tr {\n    display: block;\n    border-spacing: 0;\n    padding: 0;\n    height: 100%;\n  }\n  .post-template table tbody,\n  .page-resources table tbody {\n    margin-left: 120px;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: stretch;\n  }\n  .post-template table tbody > tr > th,\n  .page-resources table tbody > tr > th {\n    border-bottom: 1px solid #e0e0e0;\n    border-radius: 0;\n    border-spacing: 0;\n    border-collapse: collapse;\n  }\n  .post-template table tbody tr,\n  .page-resources table tbody tr {\n    width: 115px;\n    vertical-align: top;\n    display: flex;\n    flex-direction: column;\n    overflow-wrap: normal;\n    line-break: strict;\n    white-space: inherit;\n    padding: 0 15px;\n    border-bottom: none;\n  }\n  .post-template table tbody tr td,\n  .page-resources table tbody tr td {\n    display: block;\n    min-height: 1.25em;\n    padding: 10px 0 !important;\n    border-spacing: 0;\n    border-collapse: collapse;\n    overflow: hidden;\n    line-break: normal;\n    white-space: nowrap;\n    width: -webkit-fill-available;\n    text-overflow: ellipsis;\n    width: -moz-available;\n    min-width: -webkit-fill-available;\n  }\n  .post-template table tbody:last-child::after,\n  .page-resources table tbody:last-child::after {\n    content: \" \";\n    display: table-row;\n    max-width: 300px;\n    min-width: 300px;\n    margin-left: -300px;\n  }\n}\n.post-template .dataframe thead th,\n.page-resources .dataframe thead th {\n  text-align: center !important;\n  font-family: 'soleil', sans-serif !important;\n}\n.post-template .dataframe tbody tr th:only-of-type,\n.page-resources .dataframe tbody tr th:only-of-type {\n  vertical-align: middle;\n  text-align: center;\n}\n.post-template .tableContainer,\n.page-resources .tableContainer {\n  box-shadow: 0 0 5px #d1d4e8;\n  margin: 20px auto 40px;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 600px) {\n  .post-template .tableContainer,\n  .page-resources .tableContainer {\n    margin-left: calc(-50vw + 50%);\n    margin-right: calc(-50vw + 50%);\n    width: auto!important;\n  }\n  .post-template .tableContainer:hover,\n  .page-resources .tableContainer:hover {\n    cursor: grab;\n  }\n}\n.post-template .handscroller:hover,\n.page-resources .handscroller:hover {\n  cursor: grab !important;\n}\n.post-template .handscroller *:hover,\n.page-resources .handscroller *:hover {\n  cursor: grab !important;\n}\n.post-template .tablefade,\n.page-resources .tablefade {\n  position: absolute;\n  right: 0;\n  height: 100%;\n  width: 70px;\n  top: 0;\n  display: block;\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));\n}\n",""])},8:function(n,e,a){var t,i,r,s={},l=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=t.apply(this,arguments)),i}),o=(r={},function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}),d=null,g=0,p=[],m=a(11);function c(n,e){for(var t=0;t<n.length;t++){var a=n[t],i=s[a.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](a.parts[r]);for(;r<a.parts.length;r++)i.parts.push(w(a.parts[r],e))}else{var o=[];for(r=0;r<a.parts.length;r++)o.push(w(a.parts[r],e));s[a.id]={id:a.id,refs:1,parts:o}}}}function h(n,e){for(var t=[],a={},i=0;i<n.length;i++){var r=n[i],o=e.base?r[0]+e.base:r[0],p={css:r[1],media:r[2],sourceMap:r[3]};a[o]?a[o].parts.push(p):t.push(a[o]={id:o,parts:[p]})}return t}function f(n,e){var t=o(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=p[p.length-1];if("top"===n.insertAt)a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(n.insertAt.before,t);t.insertBefore(e,i)}}function u(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);0<=e&&p.splice(e,1)}function x(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return a.nc}();t&&(n.attrs.nonce=t)}return b(e,n.attrs),f(n,e),e}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function w(e,n){var t,a,i,r,o,p;if(n.transform&&e.css){if(!(r="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=r}if(n.singleton){var s=g++;t=d||(d=x(n)),a=k.bind(null,t,s,!1),i=k.bind(null,t,s,!0)}else i=e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=n,p=document.createElement("link"),void 0===o.attrs.type&&(o.attrs.type="text/css"),o.attrs.rel="stylesheet",b(p,o.attrs),f(o,p),a=function(n,e,t){var a=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(a=m(a));i&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([a],{type:"text/css"}),p=n.href;n.href=URL.createObjectURL(o),p&&URL.revokeObjectURL(p)}.bind(null,t=p,n),function(){u(t),t.href&&URL.revokeObjectURL(t.href)}):(t=x(n),a=function(n,e){var t=e.css,a=e.media;a&&n.setAttribute("media",a);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),function(){u(t)});return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}n.exports=function(n,o){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(o=o||{}).attrs="object"==typeof o.attrs?o.attrs:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=l()),o.insertInto||(o.insertInto="head"),o.insertAt||(o.insertAt="bottom");var p=h(n,o);return c(p,o),function(n){for(var e=[],t=0;t<p.length;t++){var a=p[t];(i=s[a.id]).refs--,e.push(i)}n&&c(h(n,o),o);for(t=0;t<e.length;t++){var i;if(0===(i=e[t]).refs){for(var r=0;r<i.parts.length;r++)i.parts[r]();delete s[i.id]}}}};var v,y=(v=[],function(n,e){return v[n]=e,v.filter(Boolean).join("\n")});function k(n,e,t,a){var i=t?"":a.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(r,o[e]):n.appendChild(r)}}}});