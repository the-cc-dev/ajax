!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ajax=t():e.ajax=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=n(1);e.exports=function(){var e={urlencoded:"application/x-www-form-urlencoded",form:"multipart/form-data",json:"application/json"},t=function(e){return new Promise(function(t,n){e=o(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest");for(var a in e.headers){var u=e.headers[a];r.setRequestHeader(a,u)}r.upload.addEventListener("progress",function(t){var n=parseInt(t.loaded/t.total*100);e.progress(n,t.loaded,t.total)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}200===r.status?t(e):n(e)}},r.send(e.data)})},n=function(e){e=o(e);var n=a(e),r=u(e.data,n);return n!==ajax.contentType.form&&(e.headers["content-type"]=n),t({url:e.url,method:"POST",data:r,headers:e.headers})},o=function(e){if(!e.url||"string"!=typeof e.url)throw new Error("Url is missing");if(e.method=e.method||"GET",e.headers=e.headers||{},e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");return e.progress=e.progress||function(){},e},a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||e.urlencoded},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments[1]){case e.urlencoded:return r.urlEncode(t);case e.json:return r.jsonEncode(t);case e.form:return r.formEncode(t);default:return t}};return{contentType:e,request:t,post:n}}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();e.exports=function(){function e(){r(this,e)}return a(e,null,[{key:"urlEncode",value:function(e){var t=[];return"object"===(void 0===e?"undefined":o(e))&&Object.keys(e).forEach(function(n){var r=e[n];t.push(n+"="+r)}),t.join("&")}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(t){if(e.isFormData(t))return t;if(t instanceof HTMLElement&&"FORM"===t.tagName)return new FormData(t);if(t instanceof Object){var n=new FormData;for(var r in t){var o=t[r];n.append(r,o)}return n}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isFormData",value:function(e){return e instanceof FormData}}]),e}()}])});