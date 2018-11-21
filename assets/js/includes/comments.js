!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.commentBox=t():e.commentBox=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";var o=r(4),n=r(5),a=r(2);e.exports={formats:a,parse:n,stringify:o}},function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],a=n.obj[n.prop],i=Object.keys(a),c=0;c<i.length;++c){var l=i[c],s=a[l];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:a,prop:l}),r.push(s))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var a=t.charCodeAt(o);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(o):a<128?r+=n[a]:a<2048?r+=n[192|a>>6]+n[128|63&a]:a<55296||a>=57344?r+=n[224|a>>12]+n[128|a>>6&63]+n[128|63&a]:(o+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(o)),r+=n[240|a>>18]+n[128|a>>12&63]+n[128|a>>6&63]+n[128|63&a])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(n.plainObjects||n.allowPrototypes||!o.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,n)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){o.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e(t[a],r,n):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return o.call(t,a)?t[a]=e(t[a],i,n):t[a]=i,t},i)}}},function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return a});var o=r(0);const n={className:"commentbox",defaultBoxId:"commentbox",tlcParam:"tlc",backgroundColor:null,textColor:null,subtextColor:null,createBoxUrl:(e,t)=>(t.search="",t.hash=e,t.href),onCommentCount(e){}};function a(e,t=n){if(!e)throw new Error("Please supply a valid projectId.");const{className:r,defaultBoxId:a,tlcParam:i,backgroundColor:c,textColor:l,subtextColor:s,createBoxUrl:u,onCommentCount:f}=Object.keys(n).reduce((e,r)=>(e[r]=t&&t[r]?t[r]:n[r],e),{}),d=document.createElement("a");d.href=window.location.href;const p=document.getElementsByClassName(r),y=p.length,m={};for(let t=0;t<y;t++){const r=p[t];if(r.getAttribute("data-loaded"))continue;const n=r.id||a,f=Object(o.parse)(d.search.replace("?",""))[i],y=document.createElement("a");if(m[n])throw new Error("Each box must have a unique ID");m[n]=!0,r.id=n,y.href=u(n,d);const b=Object(o.parse)(y.search.replace("?","")),h=Object.keys(b).reduce((e,t)=>(t.toLowerCase()!==i.toLowerCase()&&(e[t]=b[t]),e),{});y.search=Object.keys(h).length>0?`?${Object(o.stringify)(h)}`:"";const g=document.createElement("iframe"),v=document.createElement("a");v.href="https://app.commentbox.io",v.pathname=e,v.search=Object(o.stringify)({id:n,url:y.href,tlc_param:i,tlc:f,background_color:c,text_color:l,subtext_color:s}),g.setAttribute("src",v.href),g.setAttribute("frameborder","0"),g.setAttribute("scrolling","no"),g.setAttribute("style","width: 100%"),r.appendChild(g),r.setAttribute("data-loaded","true")}const b=function(e){const t=document.createElement("a");if(t.href=e.origin,e.data&&"localhost"===t.hostname||"app.commentbox.io"===t.hostname&&"https:"===t.protocol)try{const t=JSON.parse(e.data),{event:r,id:o,payload:n}=t,a=document.getElementById(o).firstChild;if(!m[o])return;switch(r){case"count":a.setAttribute("data-comments-loaded","true"),f(n);break;case"resize":a.height=`${n}px`;break;case"tlc":a.setAttribute("data-tlc",n)}if(a.getAttribute("data-comments-loaded")&&a.getAttribute("data-tlc")&&!a.getAttribute("data-tlc-scrolled")){const e=a.getBoundingClientRect();window.scrollTo(0,window.scrollY+e.top+parseInt(a.getAttribute("data-tlc"))),a.setAttribute("data-tlc-scrolled","true")}}catch(t){console.error(t),console.log(e)}};return window.addEventListener("message",b),function(){window.removeEventListener("message",b)}}},function(e,t,r){"use strict";var o=r(1),n=r(2),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,n,a,i,l,s,u,f,d,p,y){var m=t;if("function"==typeof s)m=s(r,m);else if(m instanceof Date)m=d(m);else if(null===m){if(a)return l&&!y?l(r,c.encoder):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||o.isBuffer(m))return l?[p(y?r:l(r,c.encoder))+"="+p(l(m,c.encoder))]:[p(r)+"="+p(String(m))];var b,h=[];if(void 0===m)return h;if(Array.isArray(s))b=s;else{var g=Object.keys(m);b=u?g.sort(u):g}for(var v=0;v<b.length;++v){var j=b[v];i&&null===m[j]||(h=Array.isArray(m)?h.concat(e(m[j],n(r,j),n,a,i,l,s,u,f,d,p,y)):h.concat(e(m[j],r+(f?"."+j:"["+j+"]"),n,a,i,l,s,u,f,d,p,y)))}return h};e.exports=function(e,t){var r=e,i=t?o.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?c.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:c.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:c.skipNulls,d="boolean"==typeof i.encode?i.encode:c.encode,p="function"==typeof i.encoder?i.encoder:c.encoder,y="function"==typeof i.sort?i.sort:null,m=void 0!==i.allowDots&&i.allowDots,b="function"==typeof i.serializeDate?i.serializeDate:c.serializeDate,h="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:c.encodeValuesOnly;if(void 0===i.format)i.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,i.format))throw new TypeError("Unknown format option provided.");var g,v,j=n.formatters[i.format];"function"==typeof i.filter?r=(v=i.filter)("",r):Array.isArray(i.filter)&&(g=v=i.filter);var O,x=[];if("object"!=typeof r||null===r)return"";O=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var w=a[O];g||(g=Object.keys(r)),y&&g.sort(y);for(var A=0;A<g.length;++A){var C=g[A];f&&null===r[C]||(x=x.concat(l(r[C],C,w,u,f,d?p:null,v,y,m,b,j,h)))}var P=x.join(s),k=!0===i.addQueryPrefix?"?":"";return P.length>0?k+P:""}},function(e,t,r){"use strict";var o=r(1),n=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:o.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(o),c=i?o.slice(0,i.index):o,l=[];if(c){if(!r.plainObjects&&n.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var s=0;null!==(i=a.exec(o))&&s<r.depth;){if(s+=1,!r.plainObjects&&n.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(i[1])}return i&&l.push("["+o.slice(i.index)+"]"),function(e,t,r){for(var o=t,n=e.length-1;n>=0;--n){var a,i=e[n];if("[]"===i)a=(a=[]).concat(o);else{a=r.plainObjects?Object.create(null):{};var c="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(c,10);!isNaN(l)&&i!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=o:a[c]=o}o=a}return o}(l,t,r)}};e.exports=function(e,t){var r=t?o.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||o.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,c=o.split(t.delimiter,i),l=0;l<c.length;++l){var s,u,f=c[l],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(s=t.decoder(f,a.decoder),u=t.strictNullHandling?null:""):(s=t.decoder(f.slice(0,p),a.decoder),u=t.decoder(f.slice(p+1),a.decoder)),n.call(r,s)?r[s]=[].concat(r[s]).concat(u):r[s]=u}return r}(e,r):e,l=r.plainObjects?Object.create(null):{},s=Object.keys(c),u=0;u<s.length;++u){var f=s[u],d=i(f,c[f],r);l=o.merge(l,d,r)}return o.compact(l)}}]).default});
