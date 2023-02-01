!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=32)}([function(e,t,n){"use strict";e.exports=n(16)},function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return A})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return P})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return d})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return y})),n.d(t,"q",(function(){return I})),n.d(t,"r",(function(){return w})),n.d(t,"s",(function(){return T})),n.d(t,"t",(function(){return v})),n.d(t,"u",(function(){return b})),n.d(t,"v",(function(){return E})),n.d(t,"w",(function(){return O})),n.d(t,"x",(function(){return R})),n.d(t,"y",(function(){return k}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4;let h=(15&a)<<2|l>>6,f=63&l;s||(f=64,o||(h=64)),r.push(n[u],n[c],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==o||null==a||null==s)throw Error();const l=i<<2|o>>4;if(r.push(l),64!==a){const e=o<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){return function(e){const t=i(e);return o.encodeByteArray(t,!0)}(e).replace(/\./g,"")},s=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,u=()=>{try{return l()||(()=>{if(void 0===r||void 0===r.env)return;const e=r.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&s(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},c=e=>{var t,n;return null===(n=null===(t=u())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},h=e=>{const t=c(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},f=()=>{var e;return null===(e=u())||void 0===e?void 0:e.config},d=e=>{var t;return null===(t=u())||void 0===t?void 0:t["_"+e]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function b(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function w(){const e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){return!function(){var t;const n=null===(t=u())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(e){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"==typeof indexedDB}catch(e){return!1}}function k(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(x,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new _(r,a,n)}}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(N(n)&&N(o)){if(!C(n,o))return!1}else if(n!==o)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function N(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function P(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){return e&&e._delegate?e._delegate:e}}).call(this,n(12),n(13))},function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return R})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return M})),n.d(t,"g",(function(){return U}));var r=n(6),i=n(3),o=n(1);let a,s;const l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,f=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(v(this),t),g(l.get(this))}:function(...t){return g(e.apply(v(this),t))}:function(t,...n){const r=e.call(v(this),t,...n);return c.set(r,t.sort?t.sort():[t]),g(r)}}function m(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(u.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});u.set(e,t)}(e),t=e,(a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,d):e);var t}function g(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(g(e.result)),r()},o=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=m(e);return t!==e&&(h.set(e,t),f.set(t,e)),t}const v=e=>f.get(e);const y=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function E(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(w.get(t))return w.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,i?"readwrite":"readonly");let a=o.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&o.done]))[0]};return w.set(t,o),o}d=(e=>({...e,get:(t,n,r)=>E(t,n)||e.get(t,n,r),has:(t,n)=>!!E(t,n)||e.has(t,n)}))(d);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const k="@firebase/app",_=new i.b("@firebase/app"),S={[k]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,I=new Map;function C(e,t){try{e.container.addComponent(t)}catch(n){_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function N(e){const t=e.name;if(I.has(t))return _.debug(`There were multiple attempts to register component ${t}.`),!1;I.set(t,e);for(const t of x.values())C(t,e);return!0}function O(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function R(e,t,n="[DEFAULT]"){O(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},A=new o.b("app","Firebase",P);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw A.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="9.16.0";function M(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw A.create("bad-app-name",{appName:String(a)});if(n||(n=Object(o.j)()),!n)throw A.create("no-options");const s=x.get(a);if(s){if(Object(o.h)(n,s.options)&&Object(o.h)(i,s.config))return s;throw A.create("duplicate-app",{appName:a})}const l=new r.b(a);for(const e of I.values())l.addComponent(e);const u=new L(n,i,l);return x.set(a,u),u}function j(e="[DEFAULT]"){const t=x.get(e);if(!t&&"[DEFAULT]"===e)return M();if(!t)throw A.create("no-app",{appName:e});return t}function U(e,t,n){var i;let o=null!==(i=S[e])&&void 0!==i?i:e;n&&(o+="-"+n);const a=o.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void _.warn(e.join(" "))}N(new r.a(o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const F="firebase-heartbeat-store";let z=null;function V(){return z||(z=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),s=g(a);return r&&a.addEventListener("upgradeneeded",e=>{r(g(a.result),e.oldVersion,e.newVersion,g(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}}).catch(e=>{throw A.create("idb-open",{originalErrorMessage:e.message})})),z}async function B(e,t){try{const n=(await V()).transaction(F,"readwrite"),r=n.objectStore(F);return await r.put(t,H(e)),n.done}catch(e){if(e instanceof o.c)_.warn(e.message);else{const t=A.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});_.warn(t.message)}}}function H(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new K(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=$();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=$(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),q(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Object(o.e)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $(){return(new Date).toISOString().substring(0,10)}class K{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o.s)()&&Object(o.y)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await V()).transaction(F).objectStore(F).get(H(e))}catch(e){if(e instanceof o.c)_.warn(e.message);else{const t=A.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});_.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return B(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function q(e){return Object(o.e)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;G="",N(new r.a("platform-logger",e=>new T(e),"PRIVATE")),N(new r.a("heartbeat",e=>new W(e),"PRIVATE")),U(k,"0.9.1",G),U(k,"0.9.1","esm2017"),U("fire-js","")},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,s={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=s[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function c(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const a=o.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:a,args:o,type:t.name})}}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Qn})),n.d(t,"b",(function(){return Yn})),n.d(t,"c",(function(){return Jn})),n.d(t,"d",(function(){return er})),n.d(t,"e",(function(){return Zn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return nr})),n.d(t,"h",(function(){return Gn})),n.d(t,"i",(function(){return Xn}));var r,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},s=i||self;function l(){}function u(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function c(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var h="closure_uid_"+(1e9*Math.random()>>>0),f=0;function d(e,t,n){return e.call.apply(e.bind,arguments)}function p(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function m(e,t,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:p).apply(null,arguments)}function g(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return t.prototype[n].apply(e,i)}}function y(){this.s=this.s,this.o=this.o}y.prototype.s=!1,y.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++f))},y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function w(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(u(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{s.addEventListener("test",l,t),s.removeEventListener("test",l,t)}catch(e){}return e}();function _(e){return/^[\s\xa0]*$/.test(e)}var S=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function x(e,t){return e<t?-1:e>t?1:0}function I(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return-1!=I().indexOf(e)}function N(e){return N[" "](e),e}N[" "]=l;var O,R,P=C("Opera"),A=C("Trident")||C("MSIE"),L=C("Edge"),D=L||A,M=C("Gecko")&&!(-1!=I().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),j=-1!=I().toLowerCase().indexOf("webkit")&&!C("Edge");function U(){var e=s.document;return e?e.documentMode:void 0}e:{var F="",z=(R=I(),M?/rv:([^\);]+)(\)|;)/.exec(R):L?/Edge\/([\d\.]+)/.exec(R):A?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(R):j?/WebKit\/(\S+)/.exec(R):P?/(?:Version)[ \/]?(\S+)/.exec(R):void 0);if(z&&(F=z?z[1]:""),A){var V=U();if(null!=V&&V>parseFloat(F)){O=String(V);break e}}O=F}var B,H={};function W(){return function(e){var t=H;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=S(String(O)).split("."),n=S("9").split("."),r=Math.max(t.length,n.length);for(let a=0;0==e&&a<r;a++){var i=t[a]||"",o=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;e=x(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||x(0==i[2].length,0==o[2].length)||x(i[2],o[2]),i=i[3],o=o[3]}while(0==e)}return 0<=e}))}if(s.document&&A){var $=U();B=$||(parseInt(O,10)||void 0)}else B=void 0;var K=B;function q(e,t){if(T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(M){e:{try{N(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&q.X.h.call(this)}}v(q,T);var G={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),Q=0;function J(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++Q,this.ba=this.ea=!1}function Y(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Z(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ee(e){const t={};for(const n in e)t[n]=e[n];return t}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<te.length;t++)n=te[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function re(e){this.src=e,this.g={},this.h=0}function ie(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],o=b(i,t);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(Y(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function oe(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}re.prototype.add=function(e,t,n,r,i){var o=e.toString();(e=this.g[o])||(e=this.g[o]=[],this.h++);var a=oe(e,t,r,i);return-1<a?(t=e[a],n||(t.ea=!1)):((t=new J(t,this.src,o,!!r,i)).ea=n,e.push(t)),t};var ae="closure_lm_"+(1e6*Math.random()|0),se={};function le(e,t,n,r,i){if(r&&r.once)return function e(t,n,r,i,o){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,o);return null}return r=me(r),t&&t[X]?t.O(n,r,c(i)?!!i.capture:!!i,o):ue(t,n,r,!0,i,o)}(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)le(e,t[o],n,r,i);return null}return n=me(n),e&&e[X]?e.N(t,n,c(r)?!!r.capture:!!r,i):ue(e,t,n,!1,r,i)}function ue(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var a=c(i)?!!i.capture:!!i,s=de(e);if(s||(e[ae]=s=new re(e)),(n=s.add(t,n,r,a,o)).proxy)return n;if(r=function(){const e=fe;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)k||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(he(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ce(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[X])ie(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(he(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=de(t))?(ie(n,e),0==n.h&&(n.src=null,t[ae]=null)):Y(e)}}}function he(e){return e in se?se[e]:se[e]="on"+e}function fe(e,t){if(e.ba)e=!0;else{t=new q(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&ce(e),e=n.call(r,t)}return e}function de(e){return(e=e[ae])instanceof re?e:null}var pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function me(e){return"function"==typeof e?e:(e[pe]||(e[pe]=function(t){return e.handleEvent(t)}),e[pe])}function ge(){y.call(this),this.i=new re(this),this.P=this,this.I=null}function ve(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var i=t;ne(t=new T(r,e),i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.g=n[o];i=ye(a,r,!0,t)&&i}if(i=ye(a=t.g=e,r,!0,t)&&i,i=ye(a,r,!1,t)&&i,n)for(o=0;o<n.length;o++)i=ye(a=t.g=n[o],r,!1,t)&&i}function ye(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var a=t[o];if(a&&!a.ba&&a.capture==n){var s=a.listener,l=a.ha||a.src;a.ea&&ie(e.i,a),i=!1!==s.call(l,r)&&i}}return i&&!r.defaultPrevented}v(ge,y),ge.prototype[X]=!0,ge.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,o){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,o);else i=c(i)?!!i.capture:!!i,r=me(r),t&&t[X]?(t=t.i,(n=String(n).toString())in t.g&&(-1<(r=oe(a=t.g[n],r,i,o))&&(Y(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--)))):t&&(t=de(t))&&(n=t.g[n.toString()],t=-1,n&&(t=oe(n,r,i,o)),(r=-1<t?n[t]:null)&&ce(r))}(this,e,t,n,r)},ge.prototype.M=function(){if(ge.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Y(n[r]);delete t.g[e],t.h--}}this.I=null},ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var be=s.JSON.stringify;function we(){var e=Ie;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ee,Te=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new ke,e=>e.reset());class ke{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function _e(e){s.setTimeout(()=>{throw e},0)}function Se(e,t){Ee||function(){var e=s.Promise.resolve(void 0);Ee=function(){e.then(Ce)}}(),xe||(Ee(),xe=!0),Ie.add(e,t)}var xe=!1,Ie=new class{constructor(){this.h=this.g=null}add(e,t){const n=Te.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function Ce(){for(var e;e=we();){try{e.h.call(e.g)}catch(e){_e(e)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1}function Ne(e,t){ge.call(this),this.h=e||1,this.g=t||s,this.j=m(this.lb,this),this.l=Date.now()}function Oe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Re(e,t,n){if("function"==typeof e)n&&(e=m(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=m(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}v(Ne,ge),(r=Ne.prototype).ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ve(this,"tick"),this.ca&&(Oe(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ne.X.M.call(this),Oe(this),delete this.g};class Pe extends y{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=Re(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);const n=t.h;t.h=null,t.m.apply(null,n)}(this)}M(){super.M(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(e){y.call(this),this.h=e,this.g={}}v(Ae,y);var Le=[];function De(e,t,n,r){Array.isArray(n)||(n&&(Le[0]=n.toString()),n=Le);for(var i=0;i<n.length;i++){var o=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Me(e){Z(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ce(e)}),e),e.g={}}function je(){this.g=!0}function Ue(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var a=1;a<i.length;a++)i[a]=""}}}return be(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ae.prototype.M=function(){Ae.X.M.call(this),Me(this)},Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Aa=function(){this.g=!1},je.prototype.info=function(){};var Fe={},ze=null;function Ve(){return ze=ze||new ge}function Be(e){T.call(this,Fe.Pa,e)}function He(e){const t=Ve();ve(t,new Be(t))}function We(e,t){T.call(this,Fe.STAT_EVENT,e),this.stat=t}function $e(e){const t=Ve();ve(t,new We(t,e))}function Ke(e,t){T.call(this,Fe.Qa,e),this.size=t}function qe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){e()}),t)}Fe.Pa="serverreachability",v(Be,T),Fe.STAT_EVENT="statevent",v(We,T),Fe.Qa="timingevent",v(Ke,T);var Ge={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xe={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qe(){}function Je(e){return e.h||(e.h=e.i())}function Ye(){}Qe.prototype.h=null;var Ze,et={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function tt(){T.call(this,"d")}function nt(){T.call(this,"c")}function rt(){}function it(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ae(this),this.O=at,e=D?125:void 0,this.T=new Ne(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ot}function ot(){this.i=null,this.g="",this.h=!1}v(tt,T),v(nt,T),v(rt,Qe),rt.prototype.g=function(){return new XMLHttpRequest},rt.prototype.i=function(){return{}},Ze=new rt;var at=45e3,st={},lt={};function ut(e,t,n){e.K=1,e.v=Ct(kt(t)),e.s=n,e.P=!0,ct(e,null)}function ct(e,t){e.F=Date.now(),pt(e),e.A=kt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Vt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new ot,e.g=Vn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Pe(m(e.La,e,e.g),e.N)),De(e.S,e.g,"readystatechange",e.ib),t=e.H?ee(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),He(),function(e,t,n,r,i,o){e.info((function(){if(e.g)if(o)for(var a="",s=o.split("&"),l=0;l<s.length;l++){var u=s[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function ht(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function ft(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=dt(e,n),r==lt){4==t&&(e.o=4,$e(14),i=!1),Ue(e.j,e.m,null,"[Incomplete Response]");break}if(r==st){e.o=4,$e(15),Ue(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ue(e.j,e.m,r,null),bt(e,r)}ht(e)&&r!=lt&&r!=st&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,$e(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),An(t),t.K=!0,$e(11))):(Ue(e.j,e.m,n,"[Invalid Chunked Response]"),yt(e),vt(e))}function dt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?lt:(n=Number(t.substring(n,r)),isNaN(n)?st:(r+=1)+n>t.length?lt:(t=t.substr(r,n),e.C=r+n,t))}function pt(e){e.V=Date.now()+e.O,mt(e,e.O)}function mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=qe(m(e.gb,e),t)}function gt(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function vt(e){0==e.l.G||e.I||Mn(e.l,e)}function yt(e){gt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Oe(e.T),Me(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||qt(n.h,e)))if(!e.J&&qt(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Dn(n),Sn(n)}Pn(n),$e(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=qe(m(n.cb,n),6e3));if(1>=Kt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Un(n,11)}else if((e.J||n.g==e)&&Dn(n),!_(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var o=r.h;o.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(Gt(o,o.h),o.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,It(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var a=e;if((r=n).sa=zn(r,r.H?r.ka:null,r.V),a.J){Xt(r.h,a);var s=a,l=r.J;l&&s.setTimeout(l),s.B&&(gt(s),pt(s)),r.g=a}else Rn(r);0<n.i.length&&In(n)}else"stop"!=u[0]&&"close"!=u[0]||Un(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Un(n,7):_n(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}He()}catch(e){}}function wt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(u(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(u(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(u(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}(r=it.prototype).setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==yn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const h=yn(this.g);var t=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||D||this.g&&(this.h.h||this.g.fa()||bn(this.g)))){this.I||4!=h||7==t||He(),gt(this);var n=this.g.aa();this.Y=n;t:if(ht(this)){var r=bn(this.g);e="";var i=r.length,o=4==yn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){yt(this),vt(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,o,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+o+" "+a}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(l)){var c=l;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,$e(12),yt(this),vt(this);break e}Ue(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bt(this,n)}this.P?(ft(this,h,a),D&&this.i&&3==h&&(De(this.S,this.T,"tick",this.hb),this.T.start())):(Ue(this.j,this.m,a,null),bt(this,a)),4==h&&yt(this),this.i&&!this.I&&(4==h?Mn(this.l,this):(this.i=!1,pt(this)))}else 400==n&&0<a.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),yt(this),vt(this)}}}catch(e){}},r.hb=function(){if(this.g){var e=yn(this.g),t=this.g.fa();this.C<t.length&&(gt(this),ft(this,e,t),this.i&&4!=e&&pt(this))}},r.cancel=function(){this.I=!0,yt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(He(),$e(17)),yt(this),this.o=2,vt(this)):mt(this,this.V-e)};var Et=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Tt){this.h=void 0!==t?t:e.h,_t(this,e.j),this.s=e.s,this.g=e.g,St(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),xt(this,n),this.o=e.o}else e&&(n=String(e).match(Et))?(this.h=!!t,_t(this,n[1]||"",!0),this.s=Nt(n[2]||""),this.g=Nt(n[3]||"",!0),St(this,n[4]),this.l=Nt(n[5]||"",!0),xt(this,n[6]||"",!0),this.o=Nt(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function kt(e){return new Tt(e)}function _t(e,t,n){e.j=n?Nt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function St(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xt(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ft(this,t),Vt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Ot(t,Dt)),e.i=new jt(t,e.h))}function It(e,t,n){e.i.set(t,n)}function Ct(e){return It(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Nt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ot(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Rt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Rt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Tt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ot(t,Pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ot(t,Pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ot(n,"/"==n.charAt(0)?Lt:At,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ot(n,Mt)),e.join("")};var Pt=/[#\/\?@]/g,At=/[#\?:]/g,Lt=/[#\?]/g,Dt=/[#\?@]/g,Mt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ft(e,t){Ut(e),t=Bt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function zt(e,t){return Ut(e),t=Bt(e,t),e.g.has(t)}function Vt(e,t,n){Ft(e,t),0<n.length&&(e.i=null,e.g.set(Bt(e,t),w(n)),e.h+=n.length)}function Bt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(r=jt.prototype).add=function(e,t){Ut(this),this.i=null,e=Bt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){Ut(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){Ut(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){Ut(this);let t=[];if("string"==typeof e)zt(this,e)&&(t=t.concat(this.g.get(Bt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return Ut(this),this.i=null,zt(this,e=Bt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),a=this.W(r);for(r=0;r<a.length;r++){var i=o;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};function Ht(e){this.l=e||Wt,s.PerformanceNavigationTiming?e=0<(e=s.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.g&&s.g.Ga&&s.g.Ga()&&s.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wt=10;function $t(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Kt(e){return e.h?1:e.g?e.g.size:0}function qt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Gt(e,t){e.g?e.g.add(t):e.h=t}function Xt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Qt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return w(e.i)}function Jt(){}function Yt(){this.g=new Jt}function Zt(e,t,n){const r=n||"";try{wt(e,(function(e,n){let i=e;c(e)&&(i=be(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function en(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function tn(e){this.l=e.ac||null,this.j=e.jb||!1}function nn(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=rn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ht.prototype.cancel=function(){if(this.i=Qt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Jt.prototype.stringify=function(e){return s.JSON.stringify(e,void 0)},Jt.prototype.parse=function(e){return s.JSON.parse(e,void 0)},v(tn,Qe),tn.prototype.g=function(){return new nn(this.l,this.j)},tn.prototype.i=function(e){return function(){return e}}({}),v(nn,ge);var rn=0;function on(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function an(e){e.readyState=4,e.l=null,e.j=null,e.A=null,sn(e)}function sn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(r=nn.prototype).open=function(e,t){if(this.readyState!=rn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,sn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,an(this)),this.readyState=rn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;on(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?an(this):sn(this),3==this.readyState&&on(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,an(this))},r.Ua=function(e){this.g&&(this.response=e,an(this))},r.ga=function(){this.g&&an(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ln=s.JSON.parse;function un(e){ge.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cn,this.K=this.L=!1}v(un,ge);var cn="",hn=/^https?$/i,fn=["POST","PUT"];function dn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,pn(e),gn(e)}function pn(e){e.D||(e.D=!0,ve(e,"complete"),ve(e,"error"))}function mn(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=yn(e)||2!=e.aa()))if(e.v&&4==yn(e))Re(e.Ha,0,e);else if(ve(e,"readystatechange"),4==yn(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(Et)[1]||null;if(!i&&s.self&&s.self.location){var o=s.self.location.protocol;i=o.substr(0,o.length-1)}r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)ve(e,"complete"),ve(e,"success");else{e.m=6;try{var l=2<yn(e)?e.g.statusText:""}catch(e){l=""}e.j=l+" ["+e.aa()+"]",pn(e)}}finally{gn(e)}}}function gn(e,t){if(e.g){vn(e);const n=e.g,r=e.C[0]?l:null;e.g=null,e.C=null,t||ve(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(s.clearTimeout(e.A),e.A=null)}function yn(e){return e.g?e.g.readyState:0}function bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case cn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function wn(e){let t="";return Z(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function En(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):It(e,t,n))}function Tn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kn(e){this.Ca=0,this.i=[],this.j=new je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tn("baseRetryDelayMs",5e3,e),this.bb=Tn("retryDelaySeedMs",1e4,e),this.$a=Tn("forwardChannelMaxRetries",2,e),this.ta=Tn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ht(e&&e.concurrentRequestLimit),this.Fa=new Yt,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function _n(e){if(xn(e),3==e.G){var t=e.U++,n=kt(e.F);It(n,"SID",e.I),It(n,"RID",t),It(n,"TYPE","terminate"),Nn(e,n),(t=new it(e,e.j,t,void 0)).K=2,t.v=Ct(kt(n)),n=!1,s.navigator&&s.navigator.sendBeacon&&(n=s.navigator.sendBeacon(t.v.toString(),"")),!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=Vn(t.l,null),t.g.da(t.v)),t.F=Date.now(),pt(t)}Fn(e)}function Sn(e){e.g&&(An(e),e.g.cancel(),e.g=null)}function xn(e){Sn(e),e.u&&(s.clearTimeout(e.u),e.u=null),Dn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&s.clearTimeout(e.m),e.m=null)}function In(e){$t(e.h)||e.m||(e.m=!0,Se(e.Ja,e),e.C=0)}function Cn(e,t){var n;n=t?t.m:e.U++;const r=kt(e.F);It(r,"SID",e.I),It(r,"RID",n),It(r,"AID",e.T),Nn(e,r),e.o&&e.s&&En(r,e.o,e.s),n=new it(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=On(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Gt(e.h,n),ut(n,r,t)}function Nn(e,t){e.ia&&Z(e.ia,(function(e,n){It(t,n,e)})),e.l&&wt({},(function(e,n){It(t,n,e)}))}function On(e,t,n){n=Math.min(e.i.length,n);var r=e.l?m(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const s=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{Zt(s,e,"req"+n+"_")}catch(e){r&&r(s)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Rn(e){e.g||e.u||(e.Z=1,Se(e.Ia,e),e.A=0)}function Pn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=qe(m(e.Ia,e),jn(e,e.A)),e.A++,!0)}function An(e){null!=e.B&&(s.clearTimeout(e.B),e.B=null)}function Ln(e){e.g=new it(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=kt(e.sa);It(t,"RID","rpc"),It(t,"SID",e.I),It(t,"CI",e.L?"0":"1"),It(t,"AID",e.T),It(t,"TYPE","xmlhttp"),Nn(e,t),e.o&&e.s&&En(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Ct(kt(t)),n.s=null,n.P=!0,ct(n,e)}function Dn(e){null!=e.v&&(s.clearTimeout(e.v),e.v=null)}function Mn(e,t){var n=null;if(e.g==t){Dn(e),An(e),e.g=null;var r=2}else{if(!qt(e.h,t))return;n=t.D,Xt(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ve(r=Ve(),new Ke(r,n)),In(e)}else Rn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Kt(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=qe(m(e.Ja,e,t),jn(e,e.C)),e.C++,!0))}(e,t)||2==r&&Pn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Un(e,5);break;case 4:Un(e,10);break;case 3:Un(e,6);break;default:Un(e,2)}}function jn(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Un(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=m(e.kb,e);n||(n=new Tt("//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||_t(n,"https"),Ct(n)),function(e,t){const n=new je;if(s.Image){const r=new Image;r.onload=g(en,n,r,"TestLoadImage: loaded",!0,t),r.onerror=g(en,n,r,"TestLoadImage: error",!1,t),r.onabort=g(en,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=g(en,n,r,"TestLoadImage: timeout",!1,t),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else $e(2);e.G=0,e.l&&e.l.va(t),Fn(e),xn(e)}function Fn(e){if(e.G=0,e.la=[],e.l){const t=Qt(e.h);0==t.length&&0==e.i.length||(E(e.la,t),E(e.la,e.i),e.h.i.length=0,w(e.i),e.i.length=0),e.l.ua()}}function zn(e,t,n){var r=n instanceof Tt?kt(n):new Tt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),St(r,r.m);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Tt(null,void 0);r&&_t(o,r),t&&(o.g=t),i&&St(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&It(r,n,t),It(r,"VER",e.ma),Nn(e,r),r}function Vn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new un(new tn({jb:!0})):new un(e.ra)).Ka(e.H),t}function Bn(){}function Hn(){if(A&&!(10<=Number(K)))throw Error("Environmental error: no available transport.")}function Wn(e,t){ge.call(this),this.g=new kn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!_(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new qn(this)}function $n(e){tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Kn(){nt.call(this),this.status=1}function qn(e){this.g=e}(r=un.prototype).Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ze.g(),this.C=this.u?Je(this.u):Je(Ze),this.g.onreadystatechange=m(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void dn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=s.FormData&&e instanceof s.FormData,!(0<=b(fn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vn(this),0<this.B&&((this.K=function(e){return A&&W()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.qa,this)):this.A=Re(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){dn(this,e)}},r.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ve(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ve(this,"complete"),ve(this,"abort"),gn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gn(this,!0)),un.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?mn(this):this.fb())},r.fb=function(){mn(this)},r.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ln(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(r=kn.prototype).ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new it(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=ee(o),ne(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=On(this,i,t),It(n=kt(this.F),"RID",e),It(n,"CVER",22),this.D&&It(n,"X-HTTP-Session-Id",this.D),Nn(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(wn(o)))+"&"+t:this.o&&En(n,this.o,o)),Gt(this.h,i),this.Ya&&It(n,"TYPE","init"),this.O?(It(n,"$req",t),It(n,"SID","null"),i.Z=!0,ut(i,n,null)):ut(i,n,t),this.G=2}}else 3==this.G&&(e?Cn(this,e):0==this.i.length||$t(this.h)||Cn(this))},r.Ia=function(){if(this.u=null,Ln(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=qe(m(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$e(10),Sn(this),Ln(this))},r.cb=function(){null!=this.v&&(this.v=null,Sn(this),Pn(this),$e(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),$e(2)):(this.j.info("Failed to ping google.com"),$e(1))},(r=Bn.prototype).xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},Hn.prototype.g=function(e,t){return new Wn(e,t)},v(Wn,ge),Wn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;$e(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=zn(e,null,e.V),In(e)},Wn.prototype.close=function(){_n(this.g)},Wn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=be(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.ab++,e)),3==t.G&&In(t)},Wn.prototype.M=function(){this.g.l=null,delete this.j,_n(this.g),delete this.g,Wn.X.M.call(this)},v($n,tt),v(Kn,nt),v(qn,Bn),qn.prototype.xa=function(){ve(this.g,"a")},qn.prototype.wa=function(e){ve(this.g,new $n(e))},qn.prototype.va=function(e){ve(this.g,new Kn)},qn.prototype.ua=function(){ve(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,Wn.prototype.send=Wn.prototype.u,Wn.prototype.open=Wn.prototype.m,Wn.prototype.close=Wn.prototype.close,Ge.NO_ERROR=0,Ge.TIMEOUT=8,Ge.HTTP_ERROR=6,Xe.COMPLETE="complete",Ye.EventType=et,et.OPEN="a",et.CLOSE="b",et.ERROR="c",et.MESSAGE="d",ge.prototype.listen=ge.prototype.N,un.prototype.listenOnce=un.prototype.O,un.prototype.getLastError=un.prototype.Oa,un.prototype.getLastErrorCode=un.prototype.Ea,un.prototype.getStatus=un.prototype.aa,un.prototype.getResponseJson=un.prototype.Sa,un.prototype.getResponseText=un.prototype.fa,un.prototype.send=un.prototype.da,un.prototype.setWithCredentials=un.prototype.Ka;var Gn=o.createWebChannelTransport=function(){return new Hn},Xn=o.getStatEventTarget=function(){return Ve()},Qn=o.ErrorCode=Ge,Jn=o.EventType=Xe,Yn=o.Event=Fe,Zn=o.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},er=o.FetchXmlHttpFactory=tn,tr=o.WebChannel=Ye,nr=o.XhrIo=un}).call(this,n(12))},function(e,t,n){var r=n(24),i=n(25),o=n(26),a=n(28);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||a()}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(1);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.a;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class a{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},function(e,t,n){e.exports=n(29)},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t){function n(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,l,"next",e)}function l(e){n(a,i,o,s,l,"throw",e)}s(void 0)}))}}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var h=s(c),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(a[h].references++,a[h].updater(f)):a.push({identifier:c,updater:g(f,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,h=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function d(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var n,r,i;if(t.singleton){var o=m++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(t),r=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=l(e,t),u=0;u<n.length;u++){var c=s(n[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=o}}}},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,l=a(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))i.call(n,c)&&(l[c]=n[c]);if(r){s=r(n);for(var h=0;h<s.length;h++)o.call(n,s[h])&&(l[s[h]]=n[s[h]])}}return l}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,u=[],c=!1,h=-1;function f(){c&&l&&(c=!1,l.length?u=l.concat(u):h=-1,u.length&&d())}function d(){if(!c){var e=s(f);c=!0;for(var t=u.length;t;){for(l=u,u=[];++h<t;)l&&l[h].run();h=-1,t=u.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return pe}));var r=n(2),i=n(6),o=n(3),a=n(1);n(4);const s="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.16.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c=new o.b("@firebase/firestore");function h(e,...t){if(c.logLevel<=o.a.DEBUG){const n=t.map(p);c.debug(`Firestore (${u}): ${e}`,...n)}}function f(e,...t){if(c.logLevel<=o.a.ERROR){const n=t.map(p);c.error(`Firestore (${u}): ${e}`,...n)}}function d(e,...t){if(c.logLevel<=o.a.WARN){const n=t.map(p);c.warn(`Firestore (${u}): ${e}`,...n)}}function p(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e="Unexpected state"){const t=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+e;throw f(t),new Error(t)}function g(e,t){e||m()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends a.c{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(l.UNAUTHENTICATED))}shutdown(){}}class T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(e){this.t=e,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new b;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new b,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{h("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(h("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new b)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(h("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(g("string"==typeof t.accessToken),new w(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return g(null===e||"string"==typeof e),new l(e)}}class _{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=l.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(g(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class S{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new _(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&h("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+e.error.message);const n=e.token!==this.A;return this.A=e.token,h("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{h("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):h("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(g("string"==typeof e.token),this.A=e.token,new x(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=C(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function O(e,t){return e<t?-1:e>t?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e,t,n){void 0===t?t=0:t>e.length&&m(),void 0===n?n=e.length-t:n>e.length-t&&m(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===R.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof R?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class P extends R{construct(e,t,n){return new P(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new y(v.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new P(t)}static emptyPath(){return new P([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.path=e}static fromPath(e){return new A(P.fromString(e))}static fromName(e){return new A(P.fromString(e).popFirst(5))}static empty(){return new A(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===P.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return P.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new A(new P(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}L.UNKNOWN_ID=-1;function D(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}M.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(e,t,n,r,i,o,a,s){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=s}}class U{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new U("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof U&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new z(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new z(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}z.EMPTY_BYTE_STRING=new z("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function V(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function B(e){return"string"==typeof e?z.fromBase64String(e):z.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(e,t){this.comparator=e,this.root=t||K.EMPTY}insert(e,t){return new W(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,K.BLACK,null,null))}remove(e){return new W(this.comparator,this.root.remove(e,this.comparator).copy(null,null,K.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $(this.root,e,this.comparator,!1)}getReverseIterator(){return new $(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $(this.root,e,this.comparator,!0)}}class ${constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class K{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:K.RED,this.left=null!=r?r:K.EMPTY,this.right=null!=i?i:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new K(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return K.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw m();if(this.right.isRed())throw m();const e=this.left.check();if(e!==this.right.check())throw m();return e+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1,K.EMPTY=new class{constructor(){this.size=0}get key(){throw m()}get value(){throw m()}get color(){throw m()}get left(){throw m()}get right(){throw m()}copy(e,t,n,r,i){return this}insert(e,t,n){return new K(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(e){this.comparator=e,this.data=new W(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new G(this.data.getIterator())}getIteratorFrom(e){return new G(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof q))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class G{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var X,Q;(Q=X||(X={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new W(A.comparator);new W(A.comparator);new W(A.comparator),new q(A.comparator);new q(O);const J=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Y=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Z=Y;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ee{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(V(e.integerValue));else if("doubleValue"in e){const n=V(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),F(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(""+(n.seconds||"")),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(B(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?H(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):m()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const e of Object.keys(n))this.de(e,t),this.ce(n[e],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const e of n)this.ce(e,t)}me(e,t){this.he(t,37),A.fromName(e).path.forEach(e=>{this.he(t,60),this.pe(e,t)})}he(e,t){e.le(t)}_e(e){e.le(2)}}ee.Ie=new ee;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class te{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new te(e,te.DEFAULT_COLLECTION_PERCENTILE,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te.DEFAULT_COLLECTION_PERCENTILE=10,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,te.DEFAULT=new te(41943040,te.DEFAULT_COLLECTION_PERCENTILE,te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),te.DISABLED=new te(-1,0,0);function ne(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&h("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new ie(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new y(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oe(e,t){if(f("AsyncQueue",`${t}: ${e}`),D(e))return new y(v.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":m()}function se(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ae(e);throw new y(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const le=new Map;class ue{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new y(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new y(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new y(v.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ue({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new y(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ue(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new E;switch(e.type){case"gapi":const t=e.client;return new S(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new y(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=le.get(e);t&&(h("ComponentProvider","Removing Datastore"),le.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=N.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{h("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(h("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=oe(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}class fe{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new re(this,"async_queue_retry"),this.Wc=()=>{const e=ne();e&&h("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=ne();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=ne();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const t=new b;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!D(e))throw e;h("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{this.Kc=e,this.Gc=!1;throw f("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=ie.createAndSchedule(this,e,t,n,e=>this.Yc(e));return this.Uc.push(r),r}zc(){this.Kc&&m()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class de extends ce{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new fe,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||me(this),this._firestoreClient.terminate()}}function pe(e,t){const n="object"==typeof e?e:Object(r.e)(),i="string"==typeof e?e:t||"(default)",o=Object(r.b)(n,"firestore").getImmediate({identifier:i});if(!o._initialized){const e=Object(a.l)("firestore");e&&function(e,t,n,r={}){var i;const o=(e=se(e,ce))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==t&&d("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=l.MOCK_USER;else{t=Object(a.f)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new y(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(o)}e._authCredentials=new T(new w(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(o,...e)}return o}function me(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new j(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new he(e._authCredentials,e._appCheckCredentials,e._queue,r)}new RegExp("[~\\*/\\[\\]]");!function(e,t=!0){!function(e){u=e}(r.a),Object(r.c)(new i.a("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),o=new de(new k(e.getProvider("auth-internal")),new I(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new y(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new U(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Object(r.g)(s,"3.8.1",e),Object(r.g)(s,"3.8.1","esm2017")}()}).call(this,n(13))},function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(17)},function(e,t,n){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(11),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function E(){}function T(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=w.prototype;var k=T.prototype=new E;k.constructor=T,r(k,w.prototype),k.isPureReactComponent=!0;var _={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g,O=[];function R(e,t,n,r){if(O.length){var i=O.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>O.length&&O.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,i){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var l=!1;if(null===t)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case a:l=!0}}if(l)return r(i,t,""===n?"."+L(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=n+L(s=t[u],u);l+=e(s,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=g&&t[g]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),u=0;!(s=t.next()).done;)l+=e(s=s.value,c=n+L(s,u++),r,i);else if("object"===s)throw r=""+t,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?j(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function j(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(N,"$&/")+"/"),A(e,M,t=R(t,o,r,i)),P(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(v(321));return e}var z={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return j(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,D,t=R(null,null,t,n)),P(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return j(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(v(143));return e}},t.Component=w,t.Fragment=s,t.Profiler=u,t.PureComponent=T,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var i=r({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)S.call(t,c)&&!x.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=I,t.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(11),o=n(18);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(a(227));function s(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var l=!1,u=null,c=!1,h=null,f={onError:function(e){l=!0,u=e}};function d(e,t,n,r,i,o,a,c,h){l=!1,u=null,s.apply(f,arguments)}var p=null,m=null,g=null;function v(e,t,n){var r=e.type||"unknown-event";e.currentTarget=g(n),function(e,t,n,r,i,o,s,f,p){if(d.apply(this,arguments),l){if(!l)throw Error(a(198));var m=u;l=!1,u=null,c||(c=!0,h=m)}}(r,t,void 0,e),e.currentTarget=null}var y=null,b={};function w(){if(y)for(var e in b){var t=b[e],n=y.indexOf(e);if(!(-1<n))throw Error(a(96,e));if(!T[n]){if(!t.extractEvents)throw Error(a(97,e));for(var r in T[n]=t,n=t.eventTypes){var i=void 0,o=n[r],s=t,l=r;if(k.hasOwnProperty(l))throw Error(a(99,l));k[l]=o;var u=o.phasedRegistrationNames;if(u){for(i in u)u.hasOwnProperty(i)&&E(u[i],s,l);i=!0}else o.registrationName?(E(o.registrationName,s,l),i=!0):i=!1;if(!i)throw Error(a(98,r,e))}}}}function E(e,t,n){if(_[e])throw Error(a(100,e));_[e]=t,S[e]=t.eventTypes[n].dependencies}var T=[],k={},_={},S={};function x(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!b.hasOwnProperty(t)||b[t]!==r){if(b[t])throw Error(a(102,t));b[t]=r,n=!0}}n&&w()}var I=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),C=null,N=null,O=null;function R(e){if(e=m(e)){if("function"!=typeof C)throw Error(a(280));var t=e.stateNode;t&&(t=p(t),C(e.stateNode,e.type,t))}}function P(e){N?O?O.push(e):O=[e]:N=e}function A(){if(N){var e=N,t=O;if(O=N=null,R(e),t)for(e=0;e<t.length;e++)R(t[e])}}function L(e,t){return e(t)}function D(e,t,n,r,i){return e(t,n,r,i)}function M(){}var j=L,U=!1,F=!1;function z(){null===N&&null===O||(M(),A())}function V(e,t,n){if(F)return e(t,n);F=!0;try{return j(e,t,n)}finally{F=!1,z()}}var B=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H=Object.prototype.hasOwnProperty,W={},$={};function K(e,t,n,r,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){q[e]=new K(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];q[t]=new K(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){q[e]=new K(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){q[e]=new K(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){q[e]=new K(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){q[e]=new K(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){q[e]=new K(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){q[e]=new K(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){q[e]=new K(e,5,!1,e.toLowerCase(),null,!1)}));var G=/[\-:]([a-z])/g;function X(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(G,X);q[t]=new K(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(G,X);q[t]=new K(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(G,X);q[t]=new K(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){q[e]=new K(e,1,!1,e.toLowerCase(),null,!1)})),q.xlinkHref=new K("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){q[e]=new K(e,1,!1,e.toLowerCase(),null,!0)}));var Q=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function J(e,t,n,r){var i=q.hasOwnProperty(t)?q[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!H.call($,e)||!H.call(W,e)&&(B.test(e)?$[e]=!0:(W[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}Q.hasOwnProperty("ReactCurrentDispatcher")||(Q.ReactCurrentDispatcher={current:null}),Q.hasOwnProperty("ReactCurrentBatchConfig")||(Q.ReactCurrentBatchConfig={suspense:null});var Y=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,oe=Z?Symbol.for("react.provider"):60109,ae=Z?Symbol.for("react.context"):60110,se=Z?Symbol.for("react.concurrent_mode"):60111,le=Z?Symbol.for("react.forward_ref"):60112,ue=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,he=Z?Symbol.for("react.memo"):60115,fe=Z?Symbol.for("react.lazy"):60116,de=Z?Symbol.for("react.block"):60121,pe="function"==typeof Symbol&&Symbol.iterator;function me(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=pe&&e[pe]||e["@@iterator"])?e:null}function ge(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case ue:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ae:return"Context.Consumer";case oe:return"Context.Provider";case le:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case he:return ge(e.type);case de:return ge(e.render);case fe:if(e=1===e._status?e._result:null)return ge(e)}return null}function ve(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,o=ge(e.type);n=null,r&&(n=ge(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(Y,"")+":"+i.lineNumber+")":n&&(o=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function ye(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function we(e){e._valueTracker||(e._valueTracker=function(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Te(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ke(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ye(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function _e(e,t){null!=(t=t.checked)&&J(e,"checked",t,!1)}function Se(e,t){_e(e,t);var n=ye(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ie(e,t.type,ye(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function xe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ie(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Ce(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ye(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Re(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ye(n)}}function Pe(e,t){var n=ye(t.value),r=ye(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Le="http://www.w3.org/1999/xhtml",De="http://www.w3.org/2000/svg";function Me(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Me(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var Ue,Fe=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==De||"innerHTML"in e)e.innerHTML=t;else{for((Ue=Ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Ve(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Be={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},He={},We={};function $e(e){if(He[e])return He[e];if(!Be[e])return e;var t,n=Be[e];for(t in n)if(n.hasOwnProperty(t)&&t in We)return He[e]=n[t];return e}I&&(We=document.createElement("div").style,"AnimationEvent"in window||(delete Be.animationend.animation,delete Be.animationiteration.animation,delete Be.animationstart.animation),"TransitionEvent"in window||delete Be.transitionend.transition);var Ke=$e("animationend"),qe=$e("animationiteration"),Ge=$e("animationstart"),Xe=$e("transitionend"),Qe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Je=new("function"==typeof WeakMap?WeakMap:Map);function Ye(e){var t=Je.get(e);return void 0===t&&(t=new Map,Je.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(a(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tt(i),e;if(o===r)return tt(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(a(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ot=null;function at(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)v(e,t[r],n[r]);else t&&v(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function st(e){if(null!==e&&(ot=rt(ot,e)),e=ot,ot=null,e){if(it(e,at),ot)throw Error(a(95));if(c)throw e=h,c=!1,h=null,e}}function lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function ut(e){if(!I)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ht(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function ft(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function dt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=In(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=lt(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,a=e.eventSystemFlags;0===n&&(a|=64);for(var s=null,l=0;l<T.length;l++){var u=T[l];u&&(u=u.extractEvents(r,t,o,i,a))&&(s=rt(s,u))}st(s)}}function pt(e,t,n){if(!n.has(e)){switch(e){case"scroll":Gt(t,"scroll",!0);break;case"focus":case"blur":Gt(t,"focus",!0),Gt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":ut(e)&&Gt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Qe.indexOf(e)&&qt(e,t)}n.set(e,null)}}var mt,gt,vt,yt=!1,bt=[],wt=null,Et=null,Tt=null,kt=new Map,_t=new Map,St=[],xt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),It="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ct(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function Nt(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":kt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_t.delete(t.pointerId)}}function Ot(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=Ct(t,n,r,i,o),null!==t&&(null!==(t=Cn(t))&&gt(t)),e):(e.eventSystemFlags|=r,e)}function Rt(e){var t=In(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void o.unstable_runWithPriority(e.priority,(function(){vt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Pt(e){if(null!==e.blockedOn)return!1;var t=Yt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=Cn(t);return null!==n&&gt(n),e.blockedOn=t,!1}return!0}function At(e,t,n){Pt(e)&&n.delete(t)}function Lt(){for(yt=!1;0<bt.length;){var e=bt[0];if(null!==e.blockedOn){null!==(e=Cn(e.blockedOn))&&mt(e);break}var t=Yt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:bt.shift()}null!==wt&&Pt(wt)&&(wt=null),null!==Et&&Pt(Et)&&(Et=null),null!==Tt&&Pt(Tt)&&(Tt=null),kt.forEach(At),_t.forEach(At)}function Dt(e,t){e.blockedOn===t&&(e.blockedOn=null,yt||(yt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Lt)))}function Mt(e){function t(t){return Dt(t,e)}if(0<bt.length){Dt(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wt&&Dt(wt,e),null!==Et&&Dt(Et,e),null!==Tt&&Dt(Tt,e),kt.forEach(t),_t.forEach(t),n=0;n<St.length;n++)(r=St[n]).blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&null===(n=St[0]).blockedOn;)Rt(n),null===n.blockedOn&&St.shift()}var jt={},Ut=new Map,Ft=new Map,zt=["abort","abort",Ke,"animationEnd",qe,"animationIteration",Ge,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Xe,"transitionEnd","waiting","waiting"];function Vt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},Ft.set(r,t),Ut.set(r,o),jt[i]=o}}Vt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Vt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Vt(zt,2);for(var Bt="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ht=0;Ht<Bt.length;Ht++)Ft.set(Bt[Ht],0);var Wt=o.unstable_UserBlockingPriority,$t=o.unstable_runWithPriority,Kt=!0;function qt(e,t){Gt(t,e,!1)}function Gt(e,t,n){var r=Ft.get(t);switch(void 0===r?2:r){case 0:r=Xt.bind(null,t,1,e);break;case 1:r=Qt.bind(null,t,1,e);break;default:r=Jt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Xt(e,t,n,r){U||M();var i=Jt,o=U;U=!0;try{D(i,e,t,n,r)}finally{(U=o)||z()}}function Qt(e,t,n,r){$t(Wt,Jt.bind(null,e,t,n,r))}function Jt(e,t,n,r){if(Kt)if(0<bt.length&&-1<xt.indexOf(e))e=Ct(null,e,t,n,r),bt.push(e);else{var i=Yt(e,t,n,r);if(null===i)Nt(e,r);else if(-1<xt.indexOf(e))e=Ct(i,e,t,n,r),bt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return wt=Ot(wt,e,t,n,r,i),!0;case"dragenter":return Et=Ot(Et,e,t,n,r,i),!0;case"mouseover":return Tt=Ot(Tt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return kt.set(o,Ot(kt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_t.set(o,Ot(_t.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){Nt(e,r),e=ft(e,r,null,t);try{V(dt,e)}finally{ht(e)}}}}function Yt(e,t,n,r){if(null!==(n=In(n=lt(r)))){var i=Ze(n);if(null===i)n=null;else{var o=i.tag;if(13===o){if(null!==(n=et(i)))return n;n=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=ft(e,r,n,t);try{V(dt,e)}finally{ht(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function on(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(a(62,""))}}function an(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sn=Le;function ln(e,t){var n=Ye(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=S[t];for(var r=0;r<t.length;r++)pt(t[r],e,n)}function un(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function hn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fn(e,t){var n,r=hn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=hn(r)}}function dn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function pn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var mn=null,gn=null;function vn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function yn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var bn="function"==typeof setTimeout?setTimeout:void 0,wn="function"==typeof clearTimeout?clearTimeout:void 0;function En(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Tn(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),_n="__reactInternalInstance$"+kn,Sn="__reactEventHandlers$"+kn,xn="__reactContainere$"+kn;function In(e){var t=e[_n];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[_n]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Tn(e);null!==e;){if(n=e[_n])return n;e=Tn(e)}return t}n=(e=n).parentNode}return null}function Cn(e){return!(e=e[_n]||e[xn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Nn(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function On(e){return e[Sn]||null}function Rn(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function Pn(e,t){var n=e.stateNode;if(!n)return null;var r=p(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(a(231,t,typeof n));return n}function An(e,t,n){(t=Pn(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Ln(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Rn(t);for(t=n.length;0<t--;)An(n[t],"captured",e);for(t=0;t<n.length;t++)An(n[t],"bubbled",e)}}function Dn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=Pn(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Mn(e){e&&e.dispatchConfig.registrationName&&Dn(e._targetInst,null,e)}function jn(e){it(e,Ln)}var Un=null,Fn=null,zn=null;function Vn(){if(zn)return zn;var e,t,n=Fn,r=n.length,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return zn=i.slice(e,1<t?1-t:void 0)}function Bn(){return!0}function Hn(){return!1}function Wn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Bn:Hn,this.isPropagationStopped=Hn,this}function $n(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function Kn(e){if(!(e instanceof this))throw Error(a(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function qn(e){e.eventPool=[],e.getPooled=$n,e.release=Kn}i(Wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){this.isPersistent=Bn},isPersistent:Hn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Hn,this._dispatchInstances=this._dispatchListeners=null}}),Wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Wn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,qn(n),n},qn(Wn);var Gn=Wn.extend({data:null}),Xn=Wn.extend({data:null}),Qn=[9,13,27,32],Jn=I&&"CompositionEvent"in window,Yn=null;I&&"documentMode"in document&&(Yn=document.documentMode);var Zn=I&&"TextEvent"in window&&!Yn,er=I&&(!Jn||Yn&&8<Yn&&11>=Yn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Qn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function or(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var ar=!1;var sr={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Jn)e:{switch(e){case"compositionstart":var o=nr.compositionStart;break e;case"compositionend":o=nr.compositionEnd;break e;case"compositionupdate":o=nr.compositionUpdate;break e}o=void 0}else ar?ir(e,n)&&(o=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=nr.compositionStart);return o?(er&&"ko"!==n.locale&&(ar||o!==nr.compositionStart?o===nr.compositionEnd&&ar&&(i=Vn()):(Fn="value"in(Un=r)?Un.value:Un.textContent,ar=!0)),o=Gn.getPooled(o,t,n,r),i?o.data=i:null!==(i=or(n))&&(o.data=i),jn(o),i=o):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return or(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(ar)return"compositionend"===e||!Jn&&ir(e,t)?(e=Vn(),zn=Fn=Un=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Xn.getPooled(nr.beforeInput,t,n,r)).data=e,jn(t)):t=null,null===i?t:null===t?i:[i,t]}},lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!lr[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function hr(e,t,n){return(e=Wn.getPooled(cr.change,e,t,n)).type="change",P(n),jn(e),e}var fr=null,dr=null;function pr(e){st(e)}function mr(e){if(Ee(Nn(e)))return e}function gr(e,t){if("change"===e)return t}var vr=!1;function yr(){fr&&(fr.detachEvent("onpropertychange",br),dr=fr=null)}function br(e){if("value"===e.propertyName&&mr(dr))if(e=hr(dr,e,lt(e)),U)st(e);else{U=!0;try{L(pr,e)}finally{U=!1,z()}}}function wr(e,t,n){"focus"===e?(yr(),dr=n,(fr=t).attachEvent("onpropertychange",br)):"blur"===e&&yr()}function Er(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return mr(dr)}function Tr(e,t){if("click"===e)return mr(t)}function kr(e,t){if("input"===e||"change"===e)return mr(t)}I&&(vr=ut("input")&&(!document.documentMode||9<document.documentMode));var _r={eventTypes:cr,_isInputEventSupported:vr,extractEvents:function(e,t,n,r){var i=t?Nn(t):window,o=i.nodeName&&i.nodeName.toLowerCase();if("select"===o||"input"===o&&"file"===i.type)var a=gr;else if(ur(i))if(vr)a=kr;else{a=Er;var s=wr}else(o=i.nodeName)&&"input"===o.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(a=Tr);if(a&&(a=a(e,t)))return hr(a,n,r);s&&s(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Ie(i,"number",i.value)}},Sr=Wn.extend({view:null,detail:null}),xr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ir(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xr[e])&&!!t[e]}function Cr(){return Ir}var Nr=0,Or=0,Rr=!1,Pr=!1,Ar=Sr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Cr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Nr;return Nr=e.screenX,Rr?"mousemove"===e.type?e.screenX-t:0:(Rr=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Or;return Or=e.screenY,Pr?"mousemove"===e.type?e.screenY-t:0:(Pr=!0,0)}}),Lr=Ar.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Dr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Mr={eventTypes:Dr,extractEvents:function(e,t,n,r,i){var o="mouseover"===e||"pointerover"===e,a="mouseout"===e||"pointerout"===e;if(o&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!a&&!o)return null;(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,a)?(a=t,null!==(t=(t=n.relatedTarget||n.toElement)?In(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):a=null;if(a===t)return null;if("mouseout"===e||"mouseover"===e)var s=Ar,l=Dr.mouseLeave,u=Dr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(s=Lr,l=Dr.pointerLeave,u=Dr.pointerEnter,c="pointer");if(e=null==a?o:Nn(a),o=null==t?o:Nn(t),(l=s.getPooled(l,a,n,r)).type=c+"leave",l.target=e,l.relatedTarget=o,(n=s.getPooled(u,t,n,r)).type=c+"enter",n.target=o,n.relatedTarget=e,c=t,(r=a)&&c)e:{for(u=c,a=0,e=s=r;e;e=Rn(e))a++;for(e=0,t=u;t;t=Rn(t))e++;for(;0<a-e;)s=Rn(s),a--;for(;0<e-a;)u=Rn(u),e--;for(;a--;){if(s===u||s===u.alternate)break e;s=Rn(s),u=Rn(u)}s=null}else s=null;for(u=s,s=[];r&&r!==u&&(null===(a=r.alternate)||a!==u);)s.push(r),r=Rn(r);for(r=[];c&&c!==u&&(null===(a=c.alternate)||a!==u);)r.push(c),c=Rn(c);for(c=0;c<s.length;c++)Dn(s[c],"bubbled",l);for(c=r.length;0<c--;)Dn(r[c],"captured",n);return 0==(64&i)?[l]:[l,n]}};var jr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Ur=Object.prototype.hasOwnProperty;function Fr(e,t){if(jr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Ur.call(t,n[r])||!jr(e[n[r]],t[n[r]]))return!1;return!0}var zr=I&&"documentMode"in document&&11>=document.documentMode,Vr={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Br=null,Hr=null,Wr=null,$r=!1;function Kr(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return $r||null==Br||Br!==cn(n)?null:("selectionStart"in(n=Br)&&pn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Wr&&Fr(Wr,n)?null:(Wr=n,(e=Wn.getPooled(Vr.select,Hr,e,t)).type="select",e.target=Br,jn(e),e))}var qr={eventTypes:Vr,extractEvents:function(e,t,n,r,i,o){if(!(o=!(i=o||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Ye(i),o=S.onSelect;for(var a=0;a<o.length;a++)if(!i.has(o[a])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=t?Nn(t):window,e){case"focus":(ur(i)||"true"===i.contentEditable)&&(Br=i,Hr=t,Wr=null);break;case"blur":Wr=Hr=Br=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":return $r=!1,Kr(n,r);case"selectionchange":if(zr)break;case"keydown":case"keyup":return Kr(n,r)}return null}},Gr=Wn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Xr=Wn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qr=Sr.extend({relatedTarget:null});function Jr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Yr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=Sr.extend({key:function(e){if(e.key){var t=Yr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Jr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Cr,charCode:function(e){return"keypress"===e.type?Jr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Jr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=Ar.extend({dataTransfer:null}),ni=Sr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Cr}),ri=Wn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Ar.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),oi={eventTypes:jt,extractEvents:function(e,t,n,r){var i=Ut.get(e);if(!i)return null;switch(e){case"keypress":if(0===Jr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Qr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case Ke:case qe:case Ge:e=Gr;break;case Xe:e=ri;break;case"scroll":e=Sr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Xr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Lr;break;default:e=Wn}return jn(t=e.getPooled(i,t,n,r)),t}};if(y)throw Error(a(101));y=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),p=On,m=Cn,g=Nn,x({SimpleEventPlugin:oi,EnterLeaveEventPlugin:Mr,ChangeEventPlugin:_r,SelectEventPlugin:qr,BeforeInputEventPlugin:sr});var ai=[],si=-1;function li(e){0>si||(e.current=ai[si],ai[si]=null,si--)}function ui(e,t){si++,ai[si]=e.current,e.current=t}var ci={},hi={current:ci},fi={current:!1},di=ci;function pi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function mi(e){return null!=(e=e.childContextTypes)}function gi(){li(fi),li(hi)}function vi(e,t,n){if(hi.current!==ci)throw Error(a(168));ui(hi,t),ui(fi,n)}function yi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(a(108,ge(t)||"Unknown",o));return i({},n,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,di=hi.current,ui(hi,e),ui(fi,fi.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=yi(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,li(fi),li(hi),ui(hi,e)):li(fi),ui(fi,n)}var Ei=o.unstable_runWithPriority,Ti=o.unstable_scheduleCallback,ki=o.unstable_cancelCallback,_i=o.unstable_requestPaint,Si=o.unstable_now,xi=o.unstable_getCurrentPriorityLevel,Ii=o.unstable_ImmediatePriority,Ci=o.unstable_UserBlockingPriority,Ni=o.unstable_NormalPriority,Oi=o.unstable_LowPriority,Ri=o.unstable_IdlePriority,Pi={},Ai=o.unstable_shouldYield,Li=void 0!==_i?_i:function(){},Di=null,Mi=null,ji=!1,Ui=Si(),Fi=1e4>Ui?Si:function(){return Si()-Ui};function zi(){switch(xi()){case Ii:return 99;case Ci:return 98;case Ni:return 97;case Oi:return 96;case Ri:return 95;default:throw Error(a(332))}}function Vi(e){switch(e){case 99:return Ii;case 98:return Ci;case 97:return Ni;case 96:return Oi;case 95:return Ri;default:throw Error(a(332))}}function Bi(e,t){return e=Vi(e),Ei(e,t)}function Hi(e,t,n){return e=Vi(e),Ti(e,t,n)}function Wi(e){return null===Di?(Di=[e],Mi=Ti(Ii,Ki)):Di.push(e),Pi}function $i(){if(null!==Mi){var e=Mi;Mi=null,ki(e)}Ki()}function Ki(){if(!ji&&null!==Di){ji=!0;var e=0;try{var t=Di;Bi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Di=null}catch(t){throw null!==Di&&(Di=Di.slice(e+1)),Ti(Ii,$i),t}finally{ji=!1}}}function qi(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Gi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Xi={current:null},Qi=null,Ji=null,Yi=null;function Zi(){Yi=Ji=Qi=null}function eo(e){var t=Xi.current;li(Xi),e.type._context._currentValue=t}function to(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function no(e,t){Qi=e,Yi=Ji=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Oa=!0),e.firstContext=null)}function ro(e,t){if(Yi!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Yi=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Ji){if(null===Qi)throw Error(a(308));Ji=t,Qi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Ji=Ji.next=t;return e._currentValue}var io=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function so(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function lo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function uo(e,t){var n=e.alternate;null!==n&&ao(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function co(e,t,n,r){var o=e.updateQueue;io=!1;var a=o.baseQueue,s=o.shared.pending;if(null!==s){if(null!==a){var l=a.next;a.next=s.next,s.next=l}a=s,o.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=s))}if(null!==a){l=a.next;var u=o.baseState,c=0,h=null,f=null,d=null;if(null!==l)for(var p=l;;){if((s=p.expirationTime)<r){var m={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===d?(f=d=m,h=u):d=d.next=m,s>c&&(c=s)}else{null!==d&&(d=d.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null}),ol(s,p.suspenseConfig);e:{var g=e,v=p;switch(s=t,m=n,v.tag){case 1:if("function"==typeof(g=v.payload)){u=g.call(m,u,s);break e}u=g;break e;case 3:g.effectTag=-4097&g.effectTag|64;case 0:if(null==(s="function"==typeof(g=v.payload)?g.call(m,u,s):g))break e;u=i({},u,s);break e;case 2:io=!0}}null!==p.callback&&(e.effectTag|=32,null===(s=o.effects)?o.effects=[p]:s.push(p))}if(null===(p=p.next)||p===l){if(null===(s=o.shared.pending))break;p=a.next=s.next,s.next=l,o.baseQueue=a=s,o.shared.pending=null}}null===d?h=u:d.next=f,o.baseState=h,o.baseQueue=d,al(c),e.expirationTime=c,e.memoizedState=u}}function ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(a(191,r));r.call(i)}}}var fo=Q.ReactCurrentBatchConfig,po=(new r.Component).refs;function mo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Ks(),i=fo.suspense;(i=so(r=qs(r,e,i),i)).payload=t,null!=n&&(i.callback=n),lo(e,i),Gs(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Ks(),i=fo.suspense;(i=so(r=qs(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),lo(e,i),Gs(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Ks(),r=fo.suspense;(r=so(n=qs(n,e,r),r)).tag=2,null!=t&&(r.callback=t),lo(e,r),Gs(e,n)}};function vo(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!Fr(n,r)||!Fr(i,o))}function yo(e,t,n){var r=!1,i=ci,o=t.contextType;return"object"==typeof o&&null!==o?o=ro(o):(i=mi(t)?di:hi.current,o=(r=null!=(r=t.contextTypes))?pi(e,i):ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=go,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=po,oo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=ro(o):(o=mi(t)?di:hi.current,i.context=pi(e,o)),co(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(mo(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&go.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var Eo=Array.isArray;function To(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===po&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ko(e,t){if("textarea"!==e.type)throw Error(a(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function _o(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=xl(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function s(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Nl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=To(e,t,n),r.return=e,r):((r=Il(n.type,n.key,n.props,null,e.mode,r)).ref=To(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ol(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function h(e,t,n,r,o){return null===t||7!==t.tag?((t=Cl(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Nl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Il(t.type,t.key,t.props,null,e.mode,n)).ref=To(e,null,t),n.return=e,n;case te:return(t=Ol(t,e.mode,n)).return=e,t}if(Eo(t)||me(t))return(t=Cl(t,e.mode,n,null)).return=e,t;ko(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?h(e,t,n.props.children,r,i):u(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(Eo(n)||me(n))return null!==i?null:h(e,t,n,r,null);ko(e,n)}return null}function p(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?h(t,e,r.props.children,i,r.key):u(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(Eo(r)||me(r))return h(t,e=e.get(n)||null,r,i,null);ko(t,r)}return null}function m(i,a,s,l){for(var u=null,c=null,h=a,m=a=0,g=null;null!==h&&m<s.length;m++){h.index>m?(g=h,h=null):g=h.sibling;var v=d(i,h,s[m],l);if(null===v){null===h&&(h=g);break}e&&h&&null===v.alternate&&t(i,h),a=o(v,a,m),null===c?u=v:c.sibling=v,c=v,h=g}if(m===s.length)return n(i,h),u;if(null===h){for(;m<s.length;m++)null!==(h=f(i,s[m],l))&&(a=o(h,a,m),null===c?u=h:c.sibling=h,c=h);return u}for(h=r(i,h);m<s.length;m++)null!==(g=p(h,i,m,s[m],l))&&(e&&null!==g.alternate&&h.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&h.forEach((function(e){return t(i,e)})),u}function g(i,s,l,u){var c=me(l);if("function"!=typeof c)throw Error(a(150));if(null==(l=c.call(l)))throw Error(a(151));for(var h=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=d(i,m,y.value,u);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),s=o(b,s,g),null===h?c=b:h.sibling=b,h=b,m=v}if(y.done)return n(i,m),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(i,y.value,u))&&(s=o(y,s,g),null===h?c=y:h.sibling=y,h=y);return c}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=p(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=o(y,s,g),null===h?c=y:h.sibling=y,h=y);return e&&m.forEach((function(e){return t(i,e)})),c}return function(e,r,o,l){var u="object"==typeof o&&null!==o&&o.type===ne&&null===o.key;u&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case ee:e:{for(c=o.key,u=r;null!==u;){if(u.key===c){switch(u.tag){case 7:if(o.type===ne){n(e,u.sibling),(r=i(u,o.props.children)).return=e,e=r;break e}break;default:if(u.elementType===o.type){n(e,u.sibling),(r=i(u,o.props)).ref=To(e,u,o),r.return=e,e=r;break e}}n(e,u);break}t(e,u),u=u.sibling}o.type===ne?((r=Cl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Il(o.type,o.key,o.props,null,e.mode,l)).ref=To(e,r,o),l.return=e,e=l)}return s(e);case te:e:{for(u=o.key;null!==r;){if(r.key===u){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Ol(o,e.mode,l)).return=e,e=r}return s(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,o)).return=e,e=r):(n(e,r),(r=Nl(o,e.mode,l)).return=e,e=r),s(e);if(Eo(o))return m(e,r,o,l);if(me(o))return g(e,r,o,l);if(c&&ko(e,o),void 0===o&&!u)switch(e.tag){case 1:case 0:throw e=e.type,Error(a(152,e.displayName||e.name||"Component"))}return n(e,r)}}var So=_o(!0),xo=_o(!1),Io={},Co={current:Io},No={current:Io},Oo={current:Io};function Ro(e){if(e===Io)throw Error(a(174));return e}function Po(e,t){switch(ui(Oo,t),ui(No,e),ui(Co,Io),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:je(null,"");break;default:t=je(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}li(Co),ui(Co,t)}function Ao(){li(Co),li(No),li(Oo)}function Lo(e){Ro(Oo.current);var t=Ro(Co.current),n=je(t,e.type);t!==n&&(ui(No,e),ui(Co,n))}function Do(e){No.current===e&&(li(Co),li(No))}var Mo={current:0};function jo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Uo(e,t){return{responder:e,props:t}}var Fo=Q.ReactCurrentDispatcher,zo=Q.ReactCurrentBatchConfig,Vo=0,Bo=null,Ho=null,Wo=null,$o=!1;function Ko(){throw Error(a(321))}function qo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,o){if(Vo=o,Bo=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Fo.current=null===e||null===e.memoizedState?va:ya,e=n(r,i),t.expirationTime===Vo){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(a(301));o+=1,Wo=Ho=null,t.updateQueue=null,Fo.current=ba,e=n(r,i)}while(t.expirationTime===Vo)}if(Fo.current=ga,t=null!==Ho&&null!==Ho.next,Vo=0,Wo=Ho=Bo=null,$o=!1,t)throw Error(a(300));return e}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Wo?Bo.memoizedState=Wo=e:Wo=Wo.next=e,Wo}function Qo(){if(null===Ho){var e=Bo.alternate;e=null!==e?e.memoizedState:null}else e=Ho.next;var t=null===Wo?Bo.memoizedState:Wo.next;if(null!==t)Wo=t,Ho=e;else{if(null===e)throw Error(a(310));e={memoizedState:(Ho=e).memoizedState,baseState:Ho.baseState,baseQueue:Ho.baseQueue,queue:Ho.queue,next:null},null===Wo?Bo.memoizedState=Wo=e:Wo=Wo.next=e}return Wo}function Jo(e,t){return"function"==typeof t?t(e):t}function Yo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=Ho,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=s=o=null,u=i;do{var c=u.expirationTime;if(c<Vo){var h={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};null===l?(s=l=h,o=r):l=l.next=h,c>Bo.expirationTime&&(Bo.expirationTime=c,al(c))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),ol(c,u.suspenseConfig),r=u.eagerReducer===e?u.eagerState:e(r,u.action);u=u.next}while(null!==u&&u!==i);null===l?o=r:l.next=s,jr(r,t.memoizedState)||(Oa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Zo(e){var t=Qo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);jr(o,t.memoizedState)||(Oa=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ea(e){var t=Xo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Jo,lastRenderedState:e}).dispatch=ma.bind(null,Bo,e),[t.memoizedState,e]}function ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Bo.updateQueue)?(t={lastEffect:null},Bo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function na(){return Qo().memoizedState}function ra(e,t,n,r){var i=Xo();Bo.effectTag|=e,i.memoizedState=ta(1|t,n,void 0,void 0===r?null:r)}function ia(e,t,n,r){var i=Qo();r=void 0===r?null:r;var o=void 0;if(null!==Ho){var a=Ho.memoizedState;if(o=a.destroy,null!==r&&qo(r,a.deps))return void ta(t,n,o,r)}Bo.effectTag|=e,i.memoizedState=ta(1|t,n,o,r)}function oa(e,t){return ra(516,4,e,t)}function aa(e,t){return ia(516,4,e,t)}function sa(e,t){return ia(4,2,e,t)}function la(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ua(e,t,n){return n=null!=n?n.concat([e]):null,ia(4,2,la.bind(null,t,e),n)}function ca(){}function ha(e,t){return Xo().memoizedState=[e,void 0===t?null:t],e}function fa(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function da(e,t){var n=Qo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&qo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pa(e,t,n){var r=zi();Bi(98>r?98:r,(function(){e(!0)})),Bi(97<r?97:r,(function(){var r=zo.suspense;zo.suspense=void 0===t?null:t;try{e(!1),n()}finally{zo.suspense=r}}))}function ma(e,t,n){var r=Ks(),i=fo.suspense;i={expirationTime:r=qs(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===Bo||null!==o&&o===Bo)$o=!0,i.expirationTime=Vo,Bo.expirationTime=Vo;else{if(0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.eagerReducer=o,i.eagerState=s,jr(s,a))return}catch(e){}Gs(e,r)}}var ga={readContext:ro,useCallback:Ko,useContext:Ko,useEffect:Ko,useImperativeHandle:Ko,useLayoutEffect:Ko,useMemo:Ko,useReducer:Ko,useRef:Ko,useState:Ko,useDebugValue:Ko,useResponder:Ko,useDeferredValue:Ko,useTransition:Ko},va={readContext:ro,useCallback:ha,useContext:ro,useEffect:oa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,la.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Xo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=ma.bind(null,Bo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Xo().memoizedState=e},useState:ea,useDebugValue:ca,useResponder:Uo,useDeferredValue:function(e,t){var n=ea(e),r=n[0],i=n[1];return oa((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=ea(!1),n=t[0];return t=t[1],[ha(pa.bind(null,t,e),[t,e]),n]}},ya={readContext:ro,useCallback:fa,useContext:ro,useEffect:aa,useImperativeHandle:ua,useLayoutEffect:sa,useMemo:da,useReducer:Yo,useRef:na,useState:function(){return Yo(Jo)},useDebugValue:ca,useResponder:Uo,useDeferredValue:function(e,t){var n=Yo(Jo),r=n[0],i=n[1];return aa((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Yo(Jo),n=t[0];return t=t[1],[fa(pa.bind(null,t,e),[t,e]),n]}},ba={readContext:ro,useCallback:fa,useContext:ro,useEffect:aa,useImperativeHandle:ua,useLayoutEffect:sa,useMemo:da,useReducer:Zo,useRef:na,useState:function(){return Zo(Jo)},useDebugValue:ca,useResponder:Uo,useDeferredValue:function(e,t){var n=Zo(Jo),r=n[0],i=n[1];return aa((function(){var n=zo.suspense;zo.suspense=void 0===t?null:t;try{i(e)}finally{zo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Zo(Jo),n=t[0];return t=t[1],[fa(pa.bind(null,t,e),[t,e]),n]}},wa=null,Ea=null,Ta=!1;function ka(e,t){var n=_l(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function _a(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Sa(e){if(Ta){var t=Ea;if(t){var n=t;if(!_a(e,t)){if(!(t=En(n.nextSibling))||!_a(e,t))return e.effectTag=-1025&e.effectTag|2,Ta=!1,void(wa=e);ka(wa,n)}wa=e,Ea=En(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,Ta=!1,wa=e}}function xa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;wa=e}function Ia(e){if(e!==wa)return!1;if(!Ta)return xa(e),Ta=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!yn(t,e.memoizedProps))for(t=Ea;t;)ka(e,t),t=En(t.nextSibling);if(xa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Ea=En(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Ea=null}}else Ea=wa?En(e.stateNode.nextSibling):null;return!0}function Ca(){Ea=wa=null,Ta=!1}var Na=Q.ReactCurrentOwner,Oa=!1;function Ra(e,t,n,r){t.child=null===e?xo(t,null,n,r):So(t,e.child,n,r)}function Pa(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Go(e,t,n,r,o,i),null===e||Oa?(t.effectTag|=1,Ra(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Ga(e,t,i))}function Aa(e,t,n,r,i,o){if(null===e){var a=n.type;return"function"!=typeof a||Sl(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Il(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,La(e,t,a,r,i,o))}return a=e.child,i<o&&(i=a.memoizedProps,(n=null!==(n=n.compare)?n:Fr)(i,r)&&e.ref===t.ref)?Ga(e,t,o):(t.effectTag|=1,(e=xl(a,r)).ref=t.ref,e.return=t,t.child=e)}function La(e,t,n,r,i,o){return null!==e&&Fr(e.memoizedProps,r)&&e.ref===t.ref&&(Oa=!1,i<o)?(t.expirationTime=e.expirationTime,Ga(e,t,o)):Ma(e,t,n,r,o)}function Da(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ma(e,t,n,r,i){var o=mi(n)?di:hi.current;return o=pi(t,o),no(t,i),n=Go(e,t,n,r,o,i),null===e||Oa?(t.effectTag|=1,Ra(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Ga(e,t,i))}function ja(e,t,n,r,i){if(mi(n)){var o=!0;bi(t)}else o=!1;if(no(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),yo(t,n,r),wo(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=ro(u):u=pi(t,u=mi(n)?di:hi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&bo(t,a,r,u),io=!1;var f=t.memoizedState;a.state=f,co(t,r,a,i),l=t.memoizedState,s!==r||f!==l||fi.current||io?("function"==typeof c&&(mo(t,n,c,r),l=t.memoizedState),(s=io||vo(t,n,s,r,f,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.effectTag|=4)):("function"==typeof a.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"==typeof a.componentDidMount&&(t.effectTag|=4),r=!1)}else a=t.stateNode,ao(e,t),s=t.memoizedProps,a.props=t.type===t.elementType?s:Gi(t.type,s),l=a.context,"object"==typeof(u=n.contextType)&&null!==u?u=ro(u):u=pi(t,u=mi(n)?di:hi.current),(h="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==r||l!==u)&&bo(t,a,r,u),io=!1,l=t.memoizedState,a.state=l,co(t,r,a,i),f=t.memoizedState,s!==r||l!==f||fi.current||io?("function"==typeof c&&(mo(t,n,c,r),f=t.memoizedState),(c=io||vo(t,n,s,r,l,f,u))?(h||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,u),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,u)),"function"==typeof a.componentDidUpdate&&(t.effectTag|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=u,r=c):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),r=!1);return Ua(e,t,n,r,o,i)}function Ua(e,t,n,r,i,o){Da(e,t);var a=0!=(64&t.effectTag);if(!r&&!a)return i&&wi(t,n,!1),Ga(e,t,o);r=t.stateNode,Na.current=t;var s=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&a?(t.child=So(t,e.child,null,o),t.child=So(t,null,s,o)):Ra(e,t,s,o),t.memoizedState=r.state,i&&wi(t,n,!0),t.child}function Fa(e){var t=e.stateNode;t.pendingContext?vi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&vi(0,t.context,!1),Po(e,t.containerInfo)}var za,Va,Ba,Ha={dehydrated:null,retryTime:0};function Wa(e,t,n){var r,i=t.mode,o=t.pendingProps,a=Mo.current,s=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&a)&&(null===e||null!==e.memoizedState)),r?(s=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),ui(Mo,1&a),null===e){if(void 0!==o.fallback&&Sa(t),s){if(s=o.fallback,(o=Cl(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Cl(s,i,n,null)).return=t,o.sibling=n,t.memoizedState=Ha,t.child=o,n}return i=o.children,t.memoizedState=null,t.child=xo(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,s){if(o=o.fallback,(n=xl(e,e.pendingProps)).return=t,0==(2&t.mode)&&(s=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=s;null!==s;)s.return=n,s=s.sibling;return(i=xl(i,o)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=Ha,t.child=n,i}return n=So(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,s){if(s=o.fallback,(o=Cl(null,i,0,null)).return=t,o.child=e,null!==e&&(e.return=o),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Cl(s,i,n,null)).return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=Ha,t.child=o,n}return t.memoizedState=null,t.child=So(t,e,o.children,n)}function $a(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),to(e.return,t)}function Ka(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=i,a.lastEffect=o)}function qa(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ra(e,t,r.children,n),0!=(2&(r=Mo.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$a(e,n);else if(19===e.tag)$a(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ui(Mo,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===jo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ka(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===jo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ka(t,!0,n,null,o,t.lastEffect);break;case"together":Ka(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Ga(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&al(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=xl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=xl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xa(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qa(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return mi(t.type)&&gi(),null;case 3:return Ao(),li(fi),li(hi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Ia(t)||(t.effectTag|=4),null;case 5:Do(t),n=Ro(Oo.current);var o=t.type;if(null!==e&&null!=t.stateNode)Va(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(a(166));return null}if(e=Ro(Co.current),Ia(t)){r=t.stateNode,o=t.type;var s=t.memoizedProps;switch(r[_n]=t,r[Sn]=s,o){case"iframe":case"object":case"embed":qt("load",r);break;case"video":case"audio":for(e=0;e<Qe.length;e++)qt(Qe[e],r);break;case"source":qt("error",r);break;case"img":case"image":case"link":qt("error",r),qt("load",r);break;case"form":qt("reset",r),qt("submit",r);break;case"details":qt("toggle",r);break;case"input":ke(r,s),qt("invalid",r),ln(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!s.multiple},qt("invalid",r),ln(n,"onChange");break;case"textarea":Re(r,s),qt("invalid",r),ln(n,"onChange")}for(var l in on(o,s),e=null,s)if(s.hasOwnProperty(l)){var u=s[l];"children"===l?"string"==typeof u?r.textContent!==u&&(e=["children",u]):"number"==typeof u&&r.textContent!==""+u&&(e=["children",""+u]):_.hasOwnProperty(l)&&null!=u&&ln(n,l)}switch(o){case"input":we(r),xe(r,s,!0);break;case"textarea":we(r),Ae(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=un)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(l=9===n.nodeType?n:n.ownerDocument,e===sn&&(e=Me(o)),e===sn?"script"===o?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),"select"===o&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[_n]=t,e[Sn]=r,za(e,t),t.stateNode=e,l=an(o,r),o){case"iframe":case"object":case"embed":qt("load",e),u=r;break;case"video":case"audio":for(u=0;u<Qe.length;u++)qt(Qe[u],e);u=r;break;case"source":qt("error",e),u=r;break;case"img":case"image":case"link":qt("error",e),qt("load",e),u=r;break;case"form":qt("reset",e),qt("submit",e),u=r;break;case"details":qt("toggle",e),u=r;break;case"input":ke(e,r),u=Te(e,r),qt("invalid",e),ln(n,"onChange");break;case"option":u=Ce(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=i({},r,{value:void 0}),qt("invalid",e),ln(n,"onChange");break;case"textarea":Re(e,r),u=Oe(e,r),qt("invalid",e),ln(n,"onChange");break;default:u=r}on(o,u);var c=u;for(s in c)if(c.hasOwnProperty(s)){var h=c[s];"style"===s?nn(e,h):"dangerouslySetInnerHTML"===s?null!=(h=h?h.__html:void 0)&&Fe(e,h):"children"===s?"string"==typeof h?("textarea"!==o||""!==h)&&ze(e,h):"number"==typeof h&&ze(e,""+h):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(_.hasOwnProperty(s)?null!=h&&ln(n,s):null!=h&&J(e,s,h,l))}switch(o){case"input":we(e),xe(e,r,!1);break;case"textarea":we(e),Ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ye(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?Ne(e,!!r.multiple,n,!1):null!=r.defaultValue&&Ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof u.onClick&&(e.onclick=un)}vn(o,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Ba(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(a(166));n=Ro(Oo.current),Ro(Co.current),Ia(t)?(n=t.stateNode,r=t.memoizedProps,n[_n]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[_n]=t,t.stateNode=n)}return null;case 13:return li(Mo),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ia(t):(r=null!==(o=e.memoizedState),n||null===o||null!==(o=e.child.sibling)&&(null!==(s=t.firstEffect)?(t.firstEffect=o,o.nextEffect=s):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Mo.current)?Is===ws&&(Is=Es):(Is!==ws&&Is!==Es||(Is=Ts),0!==Ps&&null!==_s&&(Al(_s,xs),Ll(_s,Ps)))),(n||r)&&(t.effectTag|=4),null);case 4:return Ao(),null;case 10:return eo(t),null;case 17:return mi(t.type)&&gi(),null;case 19:if(li(Mo),null===(r=t.memoizedState))return null;if(o=0!=(64&t.effectTag),null===(s=r.rendering)){if(o)Xa(r,!1);else if(Is!==ws||null!==e&&0!=(64&e.effectTag))for(s=t.child;null!==s;){if(null!==(e=jo(s))){for(t.effectTag|=64,Xa(r,!1),null!==(o=e.updateQueue)&&(t.updateQueue=o,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)s=n,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=s,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,s=e.dependencies,o.dependencies=null===s?null:{expirationTime:s.expirationTime,firstContext:s.firstContext,responders:s.responders}),r=r.sibling;return ui(Mo,1&Mo.current|2),t.child}s=s.sibling}}else{if(!o)if(null!==(e=jo(s))){if(t.effectTag|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Xa(r,!0),null===r.tail&&"hidden"===r.tailMode&&!s.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Fi()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Xa(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=r.last)?n.sibling=s:t.child=s,r.last=s)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Fi()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Fi(),n.sibling=null,t=Mo.current,ui(Mo,o?1&t|2:1&t),n):null}throw Error(a(156,t.tag))}function Ja(e){switch(e.tag){case 1:mi(e.type)&&gi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(Ao(),li(fi),li(hi),0!=(64&(t=e.effectTag)))throw Error(a(285));return e.effectTag=-4097&t|64,e;case 5:return Do(e),null;case 13:return li(Mo),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return li(Mo),null;case 4:return Ao(),null;case 10:return eo(e),null;default:return null}}function Ya(e,t){return{value:e,source:t,stack:ve(t)}}za=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Va=function(e,t,n,r,o){var a=e.memoizedProps;if(a!==r){var s,l,u=t.stateNode;switch(Ro(Co.current),e=null,n){case"input":a=Te(u,a),r=Te(u,r),e=[];break;case"option":a=Ce(u,a),r=Ce(u,r),e=[];break;case"select":a=i({},a,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":a=Oe(u,a),r=Oe(u,r),e=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(u.onclick=un)}for(s in on(n,r),n=null,a)if(!r.hasOwnProperty(s)&&a.hasOwnProperty(s)&&null!=a[s])if("style"===s)for(l in u=a[s])u.hasOwnProperty(l)&&(n||(n={}),n[l]="");else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(_.hasOwnProperty(s)?e||(e=[]):(e=e||[]).push(s,null));for(s in r){var c=r[s];if(u=null!=a?a[s]:void 0,r.hasOwnProperty(s)&&c!==u&&(null!=c||null!=u))if("style"===s)if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(e||(e=[]),e.push(s,n)),n=c;else"dangerouslySetInnerHTML"===s?(c=c?c.__html:void 0,u=u?u.__html:void 0,null!=c&&u!==c&&(e=e||[]).push(s,c)):"children"===s?u===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(s,""+c):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(_.hasOwnProperty(s)?(null!=c&&ln(o,s),e||u===c||(e=[])):(e=e||[]).push(s,c))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}},Ba=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Za="function"==typeof WeakSet?WeakSet:Set;function es(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=ve(n)),null!==n&&ge(n.type),t=t.value,null!==e&&1===e.tag&&ge(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function ts(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){yl(e,t)}else t.current=null}function ns(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Gi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(a(163))}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function is(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void is(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Gi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&ho(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ho(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&vn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Mt(n)))));case 19:case 17:case 20:case 21:return}throw Error(a(163))}function as(e,t,n){switch("function"==typeof Tl&&Tl(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Bi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){yl(i,e)}}e=e.next}while(e!==r)}))}break;case 1:ts(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){yl(e,t)}}(t,n);break;case 5:ts(t);break;case 4:cs(e,t,n)}}function ss(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&ss(t)}function ls(e){return 5===e.tag||3===e.tag||4===e.tag}function us(e){e:{for(var t=e.return;null!==t;){if(ls(t)){var n=t;break e}t=t.return}throw Error(a(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(a(161))}16&n.effectTag&&(ze(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||ls(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=un));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function cs(e,t,n){for(var r,i,o=t,s=!1;;){if(!s){s=o.return;e:for(;;){if(null===s)throw Error(a(160));switch(r=s.stateNode,s.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}s=s.return}s=!0}if(5===o.tag||6===o.tag){e:for(var l=e,u=o,c=n,h=u;;)if(as(l,h,c),null!==h.child&&4!==h.tag)h.child.return=h,h=h.child;else{if(h===u)break e;for(;null===h.sibling;){if(null===h.return||h.return===u)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i?(l=r,u=o.stateNode,8===l.nodeType?l.parentNode.removeChild(u):l.removeChild(u)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,i=!0,o.child.return=o,o=o.child;continue}}else if(as(e,o,n),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(s=!1)}o.sibling.return=o.return,o=o.sibling}}function hs(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void rs(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[Sn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&_e(n,r),an(e,i),t=an(e,r),i=0;i<o.length;i+=2){var s=o[i],l=o[i+1];"style"===s?nn(n,l):"dangerouslySetInnerHTML"===s?Fe(n,l):"children"===s?ze(n,l):J(n,s,l,t)}switch(e){case"input":Se(n,r);break;case"textarea":Pe(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Ne(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Ne(n,!!r.multiple,r.defaultValue,!0):Ne(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(a(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Mt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Ls=Fi()),null!==n)e:for(e=n;;){if(5===e.tag)o=e.stateNode,r?"function"==typeof(o=o.style).setProperty?o.setProperty("display","none","important"):o.display="none":(o=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,o.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void fs(t);case 19:return void fs(t);case 17:return}throw Error(a(163))}function fs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Za),t.forEach((function(t){var r=wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var ds="function"==typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=so(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ms||(Ms=!0,js=r),es(e,t)},n}function ms(e,t,n){(n=so(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return es(e,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Us?Us=new Set([this]):Us.add(this),es(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var gs,vs=Math.ceil,ys=Q.ReactCurrentDispatcher,bs=Q.ReactCurrentOwner,ws=0,Es=3,Ts=4,ks=0,_s=null,Ss=null,xs=0,Is=ws,Cs=null,Ns=1073741823,Os=1073741823,Rs=null,Ps=0,As=!1,Ls=0,Ds=null,Ms=!1,js=null,Us=null,Fs=!1,zs=null,Vs=90,Bs=null,Hs=0,Ws=null,$s=0;function Ks(){return 0!=(48&ks)?1073741821-(Fi()/10|0):0!==$s?$s:$s=1073741821-(Fi()/10|0)}function qs(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=zi();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&ks))return xs;if(null!==n)e=qi(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=qi(e,150,100);break;case 97:case 96:e=qi(e,5e3,250);break;case 95:e=2;break;default:throw Error(a(326))}return null!==_s&&e===xs&&--e,e}function Gs(e,t){if(50<Hs)throw Hs=0,Ws=null,Error(a(185));if(null!==(e=Xs(e,t))){var n=zi();1073741823===t?0!=(8&ks)&&0==(48&ks)?Zs(e):(Js(e),0===ks&&$i()):Js(e),0==(4&ks)||98!==n&&99!==n||(null===Bs?Bs=new Map([[e,t]]):(void 0===(n=Bs.get(e))||n>t)&&Bs.set(e,t))}}function Xs(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(_s===i&&(al(t),Is===Ts&&Al(i,xs)),Ll(i,t)),i}function Qs(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Pl(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Js(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Wi(Zs.bind(null,e));else{var t=Qs(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Ks();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Pi&&ki(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Wi(Zs.bind(null,e)):Hi(r,Ys.bind(null,e),{timeout:10*(1073741821-t)-Fi()}),e.callbackNode=t}}}function Ys(e,t){if($s=0,t)return Dl(e,t=Ks()),Js(e),null;var n=Qs(e);if(0!==n){if(t=e.callbackNode,0!=(48&ks))throw Error(a(327));if(ml(),e===_s&&n===xs||nl(e,n),null!==Ss){var r=ks;ks|=16;for(var i=il();;)try{ll();break}catch(t){rl(e,t)}if(Zi(),ks=r,ys.current=i,1===Is)throw t=Cs,nl(e,n),Al(e,n),Js(e),t;if(null===Ss)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Is,_s=null,r){case ws:case 1:throw Error(a(345));case 2:Dl(e,2<n?2:n);break;case Es:if(Al(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),1073741823===Ns&&10<(i=Ls+500-Fi())){if(As){var o=e.lastPingedTime;if(0===o||o>=n){e.lastPingedTime=n,nl(e,n);break}}if(0!==(o=Qs(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=bn(fl.bind(null,e),i);break}fl(e);break;case Ts:if(Al(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=hl(i)),As&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nl(e,n);break}if(0!==(i=Qs(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Os?r=10*(1073741821-Os)-Fi():1073741823===Ns?r=0:(r=10*(1073741821-Ns)-5e3,0>(r=(i=Fi())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vs(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=bn(fl.bind(null,e),r);break}fl(e);break;case 5:if(1073741823!==Ns&&null!==Rs){o=Ns;var s=Rs;if(0>=(r=0|s.busyMinDurationMs)?r=0:(i=0|s.busyDelayMs,r=(o=Fi()-(10*(1073741821-o)-(0|s.timeoutMs||5e3)))<=i?0:i+r-o),10<r){Al(e,n),e.timeoutHandle=bn(fl.bind(null,e),r);break}}fl(e);break;default:throw Error(a(329))}if(Js(e),e.callbackNode===t)return Ys.bind(null,e)}}return null}function Zs(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&ks))throw Error(a(327));if(ml(),e===_s&&t===xs||nl(e,t),null!==Ss){var n=ks;ks|=16;for(var r=il();;)try{sl();break}catch(t){rl(e,t)}if(Zi(),ks=n,ys.current=r,1===Is)throw n=Cs,nl(e,t),Al(e,t),Js(e),n;if(null!==Ss)throw Error(a(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,_s=null,fl(e),Js(e)}return null}function el(e,t){var n=ks;ks|=1;try{return e(t)}finally{0===(ks=n)&&$i()}}function tl(e,t){var n=ks;ks&=-2,ks|=8;try{return e(t)}finally{0===(ks=n)&&$i()}}function nl(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,wn(n)),null!==Ss)for(n=Ss.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&gi();break;case 3:Ao(),li(fi),li(hi);break;case 5:Do(r);break;case 4:Ao();break;case 13:case 19:li(Mo);break;case 10:eo(r)}n=n.return}_s=e,Ss=xl(e.current,null),xs=t,Is=ws,Cs=null,Os=Ns=1073741823,Rs=null,Ps=0,As=!1}function rl(e,t){for(;;){try{if(Zi(),Fo.current=ga,$o)for(var n=Bo.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Vo=0,Wo=Ho=Bo=null,$o=!1,null===Ss||null===Ss.return)return Is=1,Cs=t,Ss=null;e:{var i=e,o=Ss.return,a=Ss,s=t;if(t=xs,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,null!==s&&"object"==typeof s&&"function"==typeof s.then){var l=s;if(0==(2&a.mode)){var u=a.alternate;u?(a.updateQueue=u.updateQueue,a.memoizedState=u.memoizedState,a.expirationTime=u.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var c=0!=(1&Mo.current),h=o;do{var f;if(f=13===h.tag){var d=h.memoizedState;if(null!==d)f=null!==d.dehydrated;else{var p=h.memoizedProps;f=void 0!==p.fallback&&(!0!==p.unstable_avoidThisFallback||!c)}}if(f){var m=h.updateQueue;if(null===m){var g=new Set;g.add(l),h.updateQueue=g}else m.add(l);if(0==(2&h.mode)){if(h.effectTag|=64,a.effectTag&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var v=so(1073741823,null);v.tag=2,lo(a,v)}a.expirationTime=1073741823;break e}s=void 0,a=t;var y=i.pingCache;if(null===y?(y=i.pingCache=new ds,s=new Set,y.set(l,s)):void 0===(s=y.get(l))&&(s=new Set,y.set(l,s)),!s.has(a)){s.add(a);var b=bl.bind(null,i,l,a);l.then(b,b)}h.effectTag|=4096,h.expirationTime=t;break e}h=h.return}while(null!==h);s=Error((ge(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+ve(a))}5!==Is&&(Is=2),s=Ya(s,a),h=o;do{switch(h.tag){case 3:l=s,h.effectTag|=4096,h.expirationTime=t,uo(h,ps(h,l,t));break e;case 1:l=s;var w=h.type,E=h.stateNode;if(0==(64&h.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===Us||!Us.has(E)))){h.effectTag|=4096,h.expirationTime=t,uo(h,ms(h,l,t));break e}}h=h.return}while(null!==h)}Ss=cl(Ss)}catch(e){t=e;continue}break}}function il(){var e=ys.current;return ys.current=ga,null===e?ga:e}function ol(e,t){e<Ns&&2<e&&(Ns=e),null!==t&&e<Os&&2<e&&(Os=e,Rs=t)}function al(e){e>Ps&&(Ps=e)}function sl(){for(;null!==Ss;)Ss=ul(Ss)}function ll(){for(;null!==Ss&&!Ai();)Ss=ul(Ss)}function ul(e){var t=gs(e.alternate,e,xs);return e.memoizedProps=e.pendingProps,null===t&&(t=cl(e)),bs.current=null,t}function cl(e){Ss=e;do{var t=Ss.alternate;if(e=Ss.return,0==(2048&Ss.effectTag)){if(t=Qa(t,Ss,xs),1===xs||1!==Ss.childExpirationTime){for(var n=0,r=Ss.child;null!==r;){var i=r.expirationTime,o=r.childExpirationTime;i>n&&(n=i),o>n&&(n=o),r=r.sibling}Ss.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=Ss.firstEffect),null!==Ss.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=Ss.firstEffect),e.lastEffect=Ss.lastEffect),1<Ss.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=Ss:e.firstEffect=Ss,e.lastEffect=Ss))}else{if(null!==(t=Ja(Ss)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=Ss.sibling))return t;Ss=e}while(null!==Ss);return Is===ws&&(Is=5),null}function hl(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function fl(e){var t=zi();return Bi(99,dl.bind(null,e,t)),null}function dl(e,t){do{ml()}while(null!==zs);if(0!=(48&ks))throw Error(a(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=hl(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===_s&&(Ss=_s=null,xs=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var o=ks;ks|=32,bs.current=null,mn=Kt;var s=dn();if(pn(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{var u=(l=(l=s.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(u&&0!==u.rangeCount){l=u.anchorNode;var c=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{l.nodeType,h.nodeType}catch(e){l=null;break e}var f=0,d=-1,p=-1,m=0,g=0,v=s,y=null;t:for(;;){for(var b;v!==l||0!==c&&3!==v.nodeType||(d=f+c),v!==h||0!==u&&3!==v.nodeType||(p=f+u),3===v.nodeType&&(f+=v.nodeValue.length),null!==(b=v.firstChild);)y=v,v=b;for(;;){if(v===s)break t;if(y===l&&++m===c&&(d=f),y===h&&++g===u&&(p=f),null!==(b=v.nextSibling))break;y=(v=y).parentNode}v=b}l=-1===d||-1===p?null:{start:d,end:p}}else l=null}l=l||{start:0,end:0}}else l=null;gn={activeElementDetached:null,focusedElem:s,selectionRange:l},Kt=!1,Ds=i;do{try{pl()}catch(e){if(null===Ds)throw Error(a(330));yl(Ds,e),Ds=Ds.nextEffect}}while(null!==Ds);Ds=i;do{try{for(s=e,l=t;null!==Ds;){var w=Ds.effectTag;if(16&w&&ze(Ds.stateNode,""),128&w){var E=Ds.alternate;if(null!==E){var T=E.ref;null!==T&&("function"==typeof T?T(null):T.current=null)}}switch(1038&w){case 2:us(Ds),Ds.effectTag&=-3;break;case 6:us(Ds),Ds.effectTag&=-3,hs(Ds.alternate,Ds);break;case 1024:Ds.effectTag&=-1025;break;case 1028:Ds.effectTag&=-1025,hs(Ds.alternate,Ds);break;case 4:hs(Ds.alternate,Ds);break;case 8:cs(s,c=Ds,l),ss(c)}Ds=Ds.nextEffect}}catch(e){if(null===Ds)throw Error(a(330));yl(Ds,e),Ds=Ds.nextEffect}}while(null!==Ds);if(T=gn,E=dn(),w=T.focusedElem,l=T.selectionRange,E!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==l&&pn(w)&&(E=l.start,void 0===(T=l.end)&&(T=E),"selectionStart"in w?(w.selectionStart=E,w.selectionEnd=Math.min(T,w.value.length)):(T=(E=w.ownerDocument||document)&&E.defaultView||window).getSelection&&(T=T.getSelection(),c=w.textContent.length,s=Math.min(l.start,c),l=void 0===l.end?s:Math.min(l.end,c),!T.extend&&s>l&&(c=l,l=s,s=c),c=fn(w,s),h=fn(w,l),c&&h&&(1!==T.rangeCount||T.anchorNode!==c.node||T.anchorOffset!==c.offset||T.focusNode!==h.node||T.focusOffset!==h.offset)&&((E=E.createRange()).setStart(c.node,c.offset),T.removeAllRanges(),s>l?(T.addRange(E),T.extend(h.node,h.offset)):(E.setEnd(h.node,h.offset),T.addRange(E))))),E=[];for(T=w;T=T.parentNode;)1===T.nodeType&&E.push({element:T,left:T.scrollLeft,top:T.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<E.length;w++)(T=E[w]).element.scrollLeft=T.left,T.element.scrollTop=T.top}Kt=!!mn,gn=mn=null,e.current=n,Ds=i;do{try{for(w=e;null!==Ds;){var k=Ds.effectTag;if(36&k&&os(w,Ds.alternate,Ds),128&k){E=void 0;var _=Ds.ref;if(null!==_){var S=Ds.stateNode;switch(Ds.tag){case 5:E=S;break;default:E=S}"function"==typeof _?_(E):_.current=E}}Ds=Ds.nextEffect}}catch(e){if(null===Ds)throw Error(a(330));yl(Ds,e),Ds=Ds.nextEffect}}while(null!==Ds);Ds=null,Li(),ks=o}else e.current=n;if(Fs)Fs=!1,zs=e,Vs=t;else for(Ds=i;null!==Ds;)t=Ds.nextEffect,Ds.nextEffect=null,Ds=t;if(0===(t=e.firstPendingTime)&&(Us=null),1073741823===t?e===Ws?Hs++:(Hs=0,Ws=e):Hs=0,"function"==typeof El&&El(n.stateNode,r),Js(e),Ms)throw Ms=!1,e=js,js=null,e;return 0!=(8&ks)||$i(),null}function pl(){for(;null!==Ds;){var e=Ds.effectTag;0!=(256&e)&&ns(Ds.alternate,Ds),0==(512&e)||Fs||(Fs=!0,Hi(97,(function(){return ml(),null}))),Ds=Ds.nextEffect}}function ml(){if(90!==Vs){var e=97<Vs?97:Vs;return Vs=90,Bi(e,gl)}}function gl(){if(null===zs)return!1;var e=zs;if(zs=null,0!=(48&ks))throw Error(a(331));var t=ks;for(ks|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:rs(5,n),is(5,n)}}catch(t){if(null===e)throw Error(a(330));yl(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return ks=t,$i(),!0}function vl(e,t,n){lo(e,t=ps(e,t=Ya(n,t),1073741823)),null!==(e=Xs(e,1073741823))&&Js(e)}function yl(e,t){if(3===e.tag)vl(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){vl(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Us||!Us.has(r))){lo(n,e=ms(n,e=Ya(t,e),1073741823)),null!==(n=Xs(n,1073741823))&&Js(n);break}}n=n.return}}function bl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),_s===e&&xs===n?Is===Ts||Is===Es&&1073741823===Ns&&Fi()-Ls<500?nl(e,xs):As=!0:Pl(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Js(e)))}function wl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=qs(t=Ks(),e,null)),null!==(e=Xs(e,t))&&Js(e)}gs=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||fi.current)Oa=!0;else{if(r<n){switch(Oa=!1,t.tag){case 3:Fa(t),Ca();break;case 5:if(Lo(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:mi(t.type)&&bi(t);break;case 4:Po(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,ui(Xi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Wa(e,t,n):(ui(Mo,1&Mo.current),null!==(t=Ga(e,t,n))?t.sibling:null);ui(Mo,1&Mo.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return qa(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),ui(Mo,Mo.current),!r)return null}return Ga(e,t,n)}Oa=!1}}else Oa=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=pi(t,hi.current),no(t,n),i=Go(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,mi(r)){var o=!0;bi(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,oo(t);var s=r.getDerivedStateFromProps;"function"==typeof s&&mo(t,r,s,e),i.updater=go,t.stateNode=i,i._reactInternalFiber=t,wo(t,r,e,n),t=Ua(null,t,r,!0,o,n)}else t.tag=0,Ra(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,o=t.tag=function(e){if("function"==typeof e)return Sl(e)?1:0;if(null!=e){if((e=e.$$typeof)===le)return 11;if(e===he)return 14}return 2}(i),e=Gi(i,e),o){case 0:t=Ma(null,t,i,e,n);break e;case 1:t=ja(null,t,i,e,n);break e;case 11:t=Pa(null,t,i,e,n);break e;case 14:t=Aa(null,t,i,Gi(i.type,e),r,n);break e}throw Error(a(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ma(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 1:return r=t.type,i=t.pendingProps,ja(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 3:if(Fa(t),r=t.updateQueue,null===e||null===r)throw Error(a(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ao(e,t),co(t,r,null,n),(r=t.memoizedState.element)===i)Ca(),t=Ga(e,t,n);else{if((i=t.stateNode.hydrate)&&(Ea=En(t.stateNode.containerInfo.firstChild),wa=t,i=Ta=!0),i)for(n=xo(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Ra(e,t,r,n),Ca();t=t.child}return t;case 5:return Lo(t),null===e&&Sa(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,yn(r,i)?s=null:null!==o&&yn(r,o)&&(t.effectTag|=16),Da(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Ra(e,t,s,n),t=t.child),t;case 6:return null===e&&Sa(t),null;case 13:return Wa(e,t,n);case 4:return Po(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=So(t,null,r,n):Ra(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Pa(e,t,r,i=t.elementType===r?i:Gi(r,i),n);case 7:return Ra(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ra(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var l=t.type._context;if(ui(Xi,l._currentValue),l._currentValue=o,null!==s)if(l=s.value,0===(o=jr(l,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(s.children===i.children&&!fi.current){t=Ga(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var u=l.dependencies;if(null!==u){s=l.child;for(var c=u.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===l.tag&&((c=so(n,null)).tag=2,lo(l,c)),l.expirationTime<n&&(l.expirationTime=n),null!==(c=l.alternate)&&c.expirationTime<n&&(c.expirationTime=n),to(l.return,n),u.expirationTime<n&&(u.expirationTime=n);break}c=c.next}}else s=10===l.tag&&l.type===t.type?null:l.child;if(null!==s)s.return=l;else for(s=l;null!==s;){if(s===t){s=null;break}if(null!==(l=s.sibling)){l.return=s.return,s=l;break}s=s.return}l=s}Ra(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,no(t,n),r=r(i=ro(i,o.unstable_observedBits)),t.effectTag|=1,Ra(e,t,r,n),t.child;case 14:return o=Gi(i=t.type,t.pendingProps),Aa(e,t,i,o=Gi(i.type,o),r,n);case 15:return La(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Gi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,mi(r)?(e=!0,bi(t)):e=!1,no(t,n),yo(t,r,i),wo(t,r,i,n),Ua(null,t,r,!0,e,n);case 19:return qa(e,t,n)}throw Error(a(156,t.tag))};var El=null,Tl=null;function kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function _l(e,t,n,r){return new kl(e,t,n,r)}function Sl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function xl(e,t){var n=e.alternate;return null===n?((n=_l(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Il(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Sl(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case ne:return Cl(n.children,i,o,t);case se:s=8,i|=7;break;case re:s=8,i|=1;break;case ie:return(e=_l(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=o,e;case ue:return(e=_l(13,n,t,i)).type=ue,e.elementType=ue,e.expirationTime=o,e;case ce:return(e=_l(19,n,t,i)).elementType=ce,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case oe:s=10;break e;case ae:s=9;break e;case le:s=11;break e;case he:s=14;break e;case fe:s=16,r=null;break e;case de:s=22;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=_l(s,n,t,i)).elementType=e,t.type=r,t.expirationTime=o,t}function Cl(e,t,n,r){return(e=_l(7,e,r,t)).expirationTime=n,e}function Nl(e,t,n){return(e=_l(6,e,null,t)).expirationTime=n,e}function Ol(e,t,n){return(t=_l(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rl(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Pl(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function Al(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Ll(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Dl(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Ml(e,t,n,r){var i=t.current,o=Ks(),s=fo.suspense;o=qs(o,i,s);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(a(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(mi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(a(171))}if(1===n.tag){var u=n.type;if(mi(u)){n=yi(n,u,l);break e}}n=l}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=so(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),lo(i,t),Gs(i,o),o}function jl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Ul(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Fl(e,t){Ul(e,t),(e=e.alternate)&&Ul(e,t)}function zl(e,t,n){var r=new Rl(e,t,n=null!=n&&!0===n.hydrate),i=_l(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,oo(i),e[xn]=r.current,n&&0!==t&&function(e,t){var n=Ye(t);xt.forEach((function(e){pt(e,t,n)})),It.forEach((function(e){pt(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Vl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Bl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if("function"==typeof i){var s=i;i=function(){var e=jl(a);s.call(e)}}Ml(t,a,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new zl(e,0,t?{hydrate:!0}:void 0)}(n,r),a=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=jl(a);l.call(e)}}tl((function(){Ml(t,a,e,i)}))}return jl(a)}function Hl(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Wl(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Vl(t))throw Error(a(200));return Hl(e,t,null,n)}zl.prototype.render=function(e){Ml(e,this._internalRoot,null,null)},zl.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Ml(null,e,null,(function(){t[xn]=null}))},mt=function(e){if(13===e.tag){var t=qi(Ks(),150,100);Gs(e,t),Fl(e,t)}},gt=function(e){13===e.tag&&(Gs(e,3),Fl(e,3))},vt=function(e){if(13===e.tag){var t=Ks();Gs(e,t=qs(t,e,null)),Fl(e,t)}},C=function(e,t,n){switch(t){case"input":if(Se(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=On(r);if(!i)throw Error(a(90));Ee(r),Se(r,i)}}}break;case"textarea":Pe(e,n);break;case"select":null!=(t=n.value)&&Ne(e,!!n.multiple,t,!1)}},L=el,D=function(e,t,n,r,i){var o=ks;ks|=4;try{return Bi(98,e.bind(null,t,n,r,i))}finally{0===(ks=o)&&$i()}},M=function(){0==(49&ks)&&(function(){if(null!==Bs){var e=Bs;Bs=null,e.forEach((function(e,t){Dl(t,e),Js(t)})),$i()}}(),ml())},j=function(e,t){var n=ks;ks|=2;try{return e(t)}finally{0===(ks=n)&&$i()}};var $l,Kl,ql={Events:[Cn,Nn,On,x,k,jn,function(e){it(e,Mn)},P,A,Jt,st,ml,{current:!1}]};Kl=($l={findFiberByHostInstance:In,bundleType:0,version:"16.13.1",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);El=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},Tl=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},$l,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Q.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return Kl?Kl(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ql,t.createPortal=Wl,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(a(188));throw Error(a(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&ks))throw Error(a(187));var n=ks;ks|=1;try{return Bi(99,e.bind(null,t))}finally{ks=n,$i()}},t.hydrate=function(e,t,n){if(!Vl(t))throw Error(a(200));return Bl(null,e,t,!0,n)},t.render=function(e,t,n){if(!Vl(t))throw Error(a(200));return Bl(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Vl(e))throw Error(a(40));return!!e._reactRootContainer&&(tl((function(){Bl(null,null,e,!1,(function(){e._reactRootContainer=null,e[xn]=null}))})),!0)},t.unstable_batchedUpdates=el,t.unstable_createPortal=function(e,t){return Wl(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vl(n))throw Error(a(200));if(null==e||void 0===e._reactInternalFiber)throw Error(a(38));return Bl(e,t,n,!1,r)},t.version="16.13.1"},function(e,t,n){"use strict";e.exports=n(19)},function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,o,a,s;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},h=Date.now();t.unstable_now=function(){return Date.now()-h},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(c,0))},i=function(e,t){u=setTimeout(e,t)},o=function(){clearTimeout(u)},a=function(){return!1},s=t.unstable_forceFrameRate=function(){}}else{var f=window.performance,d=window.Date,p=window.setTimeout,m=window.clearTimeout;if("undefined"!=typeof console){var g=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)t.unstable_now=function(){return f.now()};else{var v=d.now();t.unstable_now=function(){return d.now()-v}}var y=!1,b=null,w=-1,E=5,T=0;a=function(){return t.unstable_now()>=T},s=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):E=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,_=k.port2;k.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();T=e+E;try{b(!0,e)?_.postMessage(null):(y=!1,b=null)}catch(e){throw _.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,_.postMessage(null))},i=function(e,n){w=p((function(){e(t.unstable_now())}),n)},o=function(){m(w),w=-1}}function S(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<C(i,t)))break e;e[r]=t,e[n]=i,n=r}}function x(e){return void 0===(e=e[0])?null:e}function I(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,a=e[o],s=o+1,l=e[s];if(void 0!==a&&0>C(a,n))void 0!==l&&0>C(l,a)?(e[r]=l,e[s]=n,r=s):(e[r]=a,e[o]=n,r=o);else{if(!(void 0!==l&&0>C(l,n)))break e;e[r]=l,e[s]=n,r=s}}}return t}return null}function C(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var N=[],O=[],R=1,P=null,A=3,L=!1,D=!1,M=!1;function j(e){for(var t=x(O);null!==t;){if(null===t.callback)I(O);else{if(!(t.startTime<=e))break;I(O),t.sortIndex=t.expirationTime,S(N,t)}t=x(O)}}function U(e){if(M=!1,j(e),!D)if(null!==x(N))D=!0,r(F);else{var t=x(O);null!==t&&i(U,t.startTime-e)}}function F(e,n){D=!1,M&&(M=!1,o()),L=!0;var r=A;try{for(j(n),P=x(N);null!==P&&(!(P.expirationTime>n)||e&&!a());){var s=P.callback;if(null!==s){P.callback=null,A=P.priorityLevel;var l=s(P.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?P.callback=l:P===x(N)&&I(N),j(n)}else I(N);P=x(N)}if(null!==P)var u=!0;else{var c=x(O);null!==c&&i(U,c.startTime-n),u=!1}return u}finally{P=null,A=r,L=!1}}function z(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var V=s;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){D||L||(D=!0,r(F))},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_getFirstCallbackNode=function(){return x(N)},t.unstable_next=function(e){switch(A){case 1:case 2:case 3:var t=3;break;default:t=A}var n=A;A=t;try{return e()}finally{A=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=V,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=A;A=e;try{return t()}finally{A=n}},t.unstable_scheduleCallback=function(e,n,a){var s=t.unstable_now();if("object"==typeof a&&null!==a){var l=a.delay;l="number"==typeof l&&0<l?s+l:s,a="number"==typeof a.timeout?a.timeout:z(e)}else a=z(e),l=s;return e={id:R++,callback:n,priorityLevel:e,startTime:l,expirationTime:a=l+a,sortIndex:-1},l>s?(e.sortIndex=l,S(O,e),null===x(N)&&e===x(O)&&(M?o():M=!0,i(U,l-s))):(e.sortIndex=a,S(N,e),D||L||(D=!0,r(F))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();j(e);var n=x(N);return n!==P&&null!==P&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<P.expirationTime||a()},t.unstable_wrapCallback=function(e){var t=A;return function(){var n=A;A=t;try{return e.apply(this,arguments)}finally{A=n}}}},function(e,t,n){var r=n(10),i=n(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\nbody {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n    monospace;\r\n}\r\n",""]),t.default=i},function(e,t,n){var r=n(10),i=n(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,".App {\r\n    text-align: center;\r\n  }\r\n  \r\n  .App-logo {\r\n    height: 40vmin;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  @media (prefers-reduced-motion: no-preference) {\r\n    .App-logo {\r\n      animation: App-logo-spin infinite 20s linear;\r\n    }\r\n  }\r\n  \r\n  .App-header {\r\n    background-color: #282c34;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(10px + 2vmin);\r\n    color: white;\r\n  }\r\n  \r\n  .App-link {\r\n    color: #61dafb;\r\n  }\r\n  \r\n  @keyframes App-logo-spin {\r\n    From {\r\n      transform: rotate(0deg);\r\n    }\r\n    To {\r\n      transform: rotate(360deg);\r\n    }\r\n  }",""]),t.default=i},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}},function(e,t,n){var r=n(27);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof h?t:h,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return S()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===c)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var c={};function h(){}function f(){}function d(){}var p={};p[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==t&&n.call(g,i)&&(p=g);var v=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(i,o){function a(){return new t((function(r,a){!function r(i,o,a,s){var l=u(e[i],e,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,c;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function _(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=v.constructor=d,d.constructor=f,f.displayName=s(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[o]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new b(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),s(v,a,"Generator"),v[i]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){var r=n(10),i=n(31);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r)()(!1);i.push([e.i,'.loader {\r\n    background: #000;\r\n    background: radial-gradient(#222, #000);\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 99999;\r\n}\r\n\r\n.loader-inner {\r\n    bottom: 0;\r\n    height: 60px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n}\r\n\r\n.loader-line-wrap {\r\n    animation: \r\n    spin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite;\r\n    box-sizing: border-box;\r\n    height: 50px;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    transform-origin: 50% 100%;\r\n    width: 100px;\r\n}\r\n.loader-line {\r\n    border: 4px solid transparent;\r\n    border-radius: 100%;\r\n    box-sizing: border-box;\r\n    height: 100px;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100px;\r\n}\r\n.loader-line-wrap:nth-child(1) { animation-delay: -50ms; }\r\n.loader-line-wrap:nth-child(2) { animation-delay: -100ms; }\r\n.loader-line-wrap:nth-child(3) { animation-delay: -150ms; }\r\n.loader-line-wrap:nth-child(4) { animation-delay: -200ms; }\r\n.loader-line-wrap:nth-child(5) { animation-delay: -250ms; }\r\n\r\n.loader-line-wrap:nth-child(1) .loader-line {\r\n    border-color: hsl(0, 80%, 60%);\r\n    height: 90px;\r\n    width: 90px;\r\n    top: 7px;\r\n}\r\n.loader-line-wrap:nth-child(2) .loader-line {\r\n    border-color: hsl(60, 80%, 60%);\r\n    height: 76px;\r\n    width: 76px;\r\n    top: 14px;\r\n}\r\n.loader-line-wrap:nth-child(3) .loader-line {\r\n    border-color: hsl(120, 80%, 60%);\r\n    height: 62px;\r\n    width: 62px;\r\n    top: 21px;\r\n}\r\n.loader-line-wrap:nth-child(4) .loader-line {\r\n    border-color: hsl(180, 80%, 60%);\r\n    height: 48px;\r\n    width: 48px;\r\n    top: 28px;\r\n}\r\n.loader-line-wrap:nth-child(5) .loader-line {\r\n    border-color: hsl(240, 80%, 60%);\r\n    height: 34px;\r\n    width: 34px;\r\n    top: 35px;\r\n}\r\n\r\n@keyframes spin {\r\n    0%, 15% {\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n/* navbar */\r\n\r\n.navbar{\r\n    background-color: #f88017;\r\n\r\n}\r\n.logo {\r\n    height: auto;\r\n    width: 93px;\r\n    float: left;\r\n    padding-top: 47px;\r\n}\r\n.logo1 {\r\n    height: 44px;\r\n    display: flow-root;\r\n}\r\n\r\n.navbar1{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    \r\n}\r\n.navbar1 a{\r\n    margin-right: 812px;\r\n    margin-left: 20px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.login{\r\n    background-color: greenyellow;\r\n    \r\n}\r\n.logged li{\r\n    list-style: none;\r\n}\r\n.logged li button{\r\n    background-color: navy;\r\n    border-radius: 545px;\r\n    width: 55px;\r\n    height: 25px;\r\n    color: white;\r\n}\r\n.logged li button:hover{\r\n    cursor: pointer;\r\n    background-color: red;\r\n}\r\n\r\ninput[type="text" i] {\r\n    border-color: white;\r\n}\r\ninput[type="date" i] {\r\n    border-color: white;\r\n}\r\n\r\n/* search */\r\n\r\n.search{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    background-color: #e8e4c9;\r\n    margin: auto;\r\n    width: 70%;\r\n    padding: 20px;\r\n    gap: 20px;\r\n}\r\n\r\n.searchflight{\r\n    background-color: #f88017;\r\n    margin: auto;\r\n    width: 60%;\r\n    padding: 5 px;\r\n    margin-bottom: 2px;\r\n    border-color: white;\r\n}\r\n.searchflight:hover{\r\n    cursor: pointer;\r\n    background-color: red;\r\n}\r\n.journey h1{\r\n    text-align: center;\r\n    color: white;\r\n    margin-top: auto;\r\n    padding-top: 50px;\r\n}\r\n.journey{\r\n    text-align: center;\r\n    color: black;\r\n    text-align: start;\r\n}\r\n/* Dashboard */\r\n.dashboard{\r\n    background-color: #033e3e;\r\n}\r\n.no_flight{\r\n    color: ghostwhite;\r\n}\r\n.cancle_button{\r\n    background-color: #222;\r\n    color: white;\r\n}\r\n.cancle_button:hover{\r\n    cursor: pointer;\r\n    background-color: brown;\r\n}\r\n\r\n/* Available */\r\n.available{\r\n    text-align: center;\r\n    color: white;\r\n}\r\n.flight_details{\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    background-color:  #ffffe0;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    color: navy;\r\n    text-align: center;\r\n}\r\n\r\n/* payment */\r\n\r\n.payment{\r\n    background-color: #e68099;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.payment h1{\r\n    font-size: 1em;\r\n}\r\n\r\n.card{\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background-color: #f88017;\r\n}\r\n.card h3{\r\n    color: white;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n.card button{\r\n    color: white;\r\n    background-color: navy;\r\n}\r\n.card button:hover{\r\n    cursor: pointer;\r\n    background-color: aqua;\r\n}\r\n\r\n/* flight */\r\n\r\n.flightbrand{\r\n    height: auto;\r\n    width: 20px;\r\n}\r\n\r\n/* detail */\r\n\r\n\r\n.price{\r\n    background-color: greenyellow;\r\n    align-items: flex-start;\r\n    display: flex;\r\n}\r\n\r\n.checkout{\r\n    background-color: red;\r\n    height: 50px; ;\r\n    width: 200px;\r\n}\r\n\r\n\r\n\r\n',""]),t.default=i},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(15),a=n.n(o),s=(n(20),n(22),n(5)),l=n.n(s),u=n(7),c=n.n(u),h=n(9),f=n.n(h),d=n(1),p=n(2),m=n(3);function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var v=n(6);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b=y,w=new d.b("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),E=new m.b("@firebase/auth");function T(e,...t){E.logLevel<=m.a.ERROR&&E.error(`Auth (${p.a}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,...t){throw I(e,...t)}function _(e,...t){return I(e,...t)}function S(e,t,n){const r=Object.assign(Object.assign({},b()),{[t]:n});return new d.b("auth","Firebase",r).create(t,{appName:e.name})}function x(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&k(e,"argument-error"),S(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return w.create(e,...t)}function C(e,t,...n){if(!e)throw I(t,...n)}function N(e){const t="INTERNAL ASSERTION FAILED: "+e;throw T(t),new Error(t)}function O(e,t){e||N(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=new Map;function P(e){O(e instanceof Function,"Expected a class definition");let t=R.get(e);return t?(O(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,R.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function L(){return"http:"===D()||"https:"===D()}function D(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class M{constructor(e,t){this.shortDelay=e,this.longDelay=t,O(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(d.t)()||Object(d.u)()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(L()||Object(d.p)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){O(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void N("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void N("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void N("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},z=new M(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,i={}){return H(e,i,async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=Object(d.w)(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),U.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))})}async function H(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new K(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw q(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw q(e,"user-disabled",o);const s=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw S(e,s,a);k(e,s)}}catch(t){if(t instanceof d.c)throw t;k(e,"network-request-failed")}}async function W(e,t,n,r,i={}){const o=await B(e,t,n,r,i);return"mfaPendingCredential"in o&&k(e,"multi-factor-auth-required",{_serverResponse:o}),o}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?j(e.config,i):`${e.config.apiScheme}://${i}`}class K{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(_(this.auth,"network-request-failed")),z.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e){return 1e3*Number(e)}function Q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return T("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(d.d)(n);return e?JSON.parse(e):(T("Failed to decode base64 JWT payload"),null)}catch(e){return T("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function J(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof d.c&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){var t;const n=e.auth,r=await e.getIdToken(),i=await J(e,async function(e,t){return B(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));C(null==i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,n=g(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}):[];const s=(l=e.providerData,u=a,[...l.filter(e=>!u.some(t=>t.providerId===e.providerId)),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),f=!!c&&h,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Z(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(void 0!==e.idToken,"internal-error"),C(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Q(e);return C(t,"internal-error"),C(void 0!==t.exp,"internal-error"),C(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await H(e,{},async()=>{const n=Object(d.w)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=$(e,r,"/v1/token","key="+i),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new te;return n&&(C("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(C("string"==typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(C("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return N("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){C("string"==typeof e||void 0===e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=g(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Z(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await J(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Object(d.n)(e),r=await n.getIdToken(t),i=Q(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:G(X(i.auth_time)),issuedAtTime:G(X(i.iat)),expirationTime:G(X(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Object(d.n)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await J(this,async function(e,t){return B(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:T}=t;C(y&&T,e,"internal-error");const k=te.fromJSON(this.name,T);C("string"==typeof y,e,"internal-error"),ne(c,e.name),ne(h,e.name),C("boolean"==typeof b,e,"internal-error"),C("boolean"==typeof w,e,"internal-error"),ne(f,e.name),ne(d,e.name),ne(p,e.name),ne(m,e.name),ne(g,e.name),ne(v,e.name);const _=new re({uid:y,auth:e,email:h,emailVerified:b,displayName:c,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(_.providerData=E.map(e=>Object.assign({},e))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new te;r.updateFromServerResponse(t);const i=new re({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ie.type="NONE";const oe=ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t,n){return`firebase:${e}:${t}:${n}`}class se{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ae(this.userKey,r.apiKey,i),this.fullPersistenceKey=ae("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new se(P(oe),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||P(oe);const o=ae(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const r=re._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}})),new se(i,e,n)):new se(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ue(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pe(t))return"Blackberry";if(me(t))return"Webos";if(ce(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(de(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ue(e=Object(d.o)()){return/firefox\//i.test(e)}function ce(e=Object(d.o)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(d.o)()){return/crios\//i.test(e)}function fe(e=Object(d.o)()){return/iemobile/i.test(e)}function de(e=Object(d.o)()){return/android/i.test(e)}function pe(e=Object(d.o)()){return/blackberry/i.test(e)}function me(e=Object(d.o)()){return/webos/i.test(e)}function ge(e=Object(d.o)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=Object(d.o)()){return ge(e)||de(e)||me(e)||pe(e)||/windows phone/i.test(e)||fe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(e,t=[]){let n;switch(e){case"Browser":n=le(Object(d.o)());break;case"Worker":n=`${le(Object(d.o)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${p.a}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Te(this),this.idTokenSubscription=new Te(this),this.beforeStateQueue=new be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=w,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=P(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await se.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(d.n)(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(P(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new d.b("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&P(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await se.create(this,[P(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ye(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ee(e){return Object(d.n)(e)}class Te{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(d.g)(e=>this.observer=e)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ke(e,t,n){const r=Ee(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),o=_e(t),{host:a,port:s}=function(e){const t=_e(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Se(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Se(t)}}}(t),l=null===s?"":":"+s;r.config.emulator={url:`${o}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function _e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Se(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return N("not implemented")}_getIdTokenResponse(e){return N("not implemented")}_linkToIdToken(e,t){return N("not implemented")}_getReauthenticationResolver(e){return N("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ie(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ce(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ce(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return W(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return W(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}(e,{email:this._email,oobCode:this._password});default:k(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ie(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return W(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:k(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e,t){return W(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):k("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=g(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Oe(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){return Ne(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Object(d.w)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Pe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Pe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return W(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await W(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return W(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Re)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Pe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){var t,n,r,i,o,a;const s=Object(d.x)(Object(d.i)(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(n=s.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=s.mode)&&void 0!==r?r:null);C(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Object(d.x)(Object(d.i)(e)).link,n=t?Object(d.x)(Object(d.i)(t)).deep_link_id:null,r=Object(d.x)(Object(d.i)(e)).deep_link_id;return(r?Object(d.x)(Object(d.i)(r)).link:null)||r||n||t||e}(e);try{return new Ae(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le{constructor(){this.providerId=Le.PROVIDER_ID}static credential(e,t){return Ce._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ae.parseLink(t);return C(n,"argument-error"),Ce._fromEmailAndCode(e,n.code,n.tenantId)}}Le.PROVIDER_ID="password",Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends De{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je extends Me{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch(e){return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com",je.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue extends Me{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Oe._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ue.credential(t,n)}catch(e){return null}}}Ue.GOOGLE_SIGN_IN_METHOD="google.com",Ue.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Me{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ze extends Me{constructor(){super("twitter.com")}static credential(e,t){return Oe._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ze.credential(t,n)}catch(e){return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com",ze.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await re._fromIdTokenResponse(e,n,r),o=Be(n);return new Ve({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Be(n);return new Ve({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Be(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He extends d.c{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,He.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new He(e,t,n,r)}}function We(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw He._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t,n=!1){const r=await J(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ve._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ke(e,t,n=!1){const{auth:r}=e;try{const i=await J(e,We(r,"reauthenticate",t,e),n);C(i.idToken,r,"internal-error");const o=Q(i.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(e.uid===a,r,"user-mismatch"),Ve._forOperation(e,"reauthenticate",i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&k(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t,n=!1){const r=await We(e,"signIn",t),i=await Ve._fromIdTokenResponse(e,"signIn",r);return n||await e._updateCurrentUser(i.user),i}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Ge{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Object(d.o)();return ce(e)||ge(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ve(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Object(d.r)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xe.type="LOCAL";const Qe=Xe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ge{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Je.type="SESSION";const Ye=Je;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ze(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.receivers=[];class tt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const l=et("",20);r.port1.start();const u=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),s(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rt(){return void 0!==nt().WorkerGlobalScope&&"function"==typeof nt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const it="firebaseLocalStorageDb";class ot{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function at(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function st(){const e=indexedDB.open(it,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(it);return new ot(e).toPromise()}(),t(await st()))})})}async function lt(e,t,n){const r=at(e,!0).put({fbase_key:t,value:n});return new ot(r).toPromise()}function ut(e,t){const n=at(e,!0).delete(t);return new ot(n).toPromise()}class ct{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await st()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ze._getInstance(rt()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new tt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await st();return await lt(e,"__sak","1"),await ut(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=at(e,!1).get(t),r=await new ot(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ut(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=at(e,!1).getAll();return new ot(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ct.type="LOCAL";const ht=ct;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return new Promise((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,o;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(o=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==o?o:document).appendChild(r)})}function dt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dt("rcb"),new M(3e4,6e4);async function pt(e,t,n){var r;const i=await n.verify();try{let o;if(C("string"==typeof i,e,"argument-error"),C("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){C("enroll"===t.type,e,"internal-error");return(await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo}{C("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;C(n,e,"missing-multi-factor-info");return(await function(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this.providerId=mt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,t){return pt(this.auth,e,Object(d.n)(t))}static credential(e,t){return Pe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return mt.credentialFromTaggedObject(t)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Pe._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t){return t?P(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.PROVIDER_ID="phone",mt.PHONE_SIGN_IN_METHOD="phone";class vt extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yt(e){return qe(e.auth,new vt(e),e.bypassAuthState)}function bt(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),Ke(n,new vt(e),e.bypassAuthState)}async function wt(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),$e(n,new vt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yt;case"linkViaPopup":case"linkViaRedirect":return wt;case"reauthViaPopup":case"reauthViaRedirect":return bt;default:k(this.auth,"internal-error")}}resolve(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){O(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new M(2e3,1e4);async function kt(e,t,n){const r=Ee(e);x(e,t,De);const i=gt(r,n);return new _t(r,"signInViaPopup",t,i).executeNotNull()}class _t extends Et{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,_t.currentPopupAction&&_t.currentPopupAction.cancel(),_t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){O(1===this.filter.length,"Popup operations only handle one event");const e=et();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(_(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Tt.get())};e()}}_t.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const St=new Map;class xt extends Et{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=St.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Nt(t),r=Ct(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}St.set(this.auth._key(),e)}return this.bypassAuthState||St.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function It(e,t){St.set(e._key(),t)}function Ct(e){return P(e._redirectPersistence)}function Nt(e){return ae("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t,n=!1){const r=Ee(e),i=gt(r,t),o=new xt(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class Rt{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return At(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!At(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pt(e))}saveEventToCache(e){this.cachedEventUids.add(Pt(e)),this.lastProcessedEventTime=Date.now()}}function Pt(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function At({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dt=/^https?/;async function Mt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return B(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(jt(e))return}catch(e){}k(e,"unauthorized-domain")}function jt(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dt.test(n))return!1;if(Lt.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new M(3e4,6e4);function Ft(){const e=nt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let zt=null;function Vt(e){return zt=zt||function(e){return new Promise((t,n)=>{var r,i,o;function a(){Ft(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ft(),n(_(e,"network-request-failed"))},timeout:Ut.get()})}if(null===(i=null===(r=nt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=nt().gapi)||void 0===o?void 0:o.load)){const t=dt("iframefcb");return nt()[t]=()=>{gapi.load?a():n(_(e,"network-request-failed"))},ft("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}a()}}).catch(e=>{throw zt=null,e})}(e),zt}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=new M(5e3,15e3),Ht={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $t(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:p.a},i=Wt.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Object(d.w)(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gt(e,t,n,r=500,i=600){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let s="";const l=Object.assign(Object.assign({},Kt),{width:r.toString(),height:i.toString(),top:o,left:a}),u=Object(d.o)().toLowerCase();n&&(s=he(u)?"_blank":n),ue(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=Object(d.o)()){var t;return ge(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new qt(null);const h=window.open(t||"",s,c);C(h,e,"popup-blocked");try{h.focus()}catch(e){}return new qt(h)}function Xt(e,t,n,r,i,o){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:p.a,eventId:i};if(t instanceof De){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Object(d.q)(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof Me){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return j(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Object(d.w)(s).slice(1)}`}const Qt=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ye,this._completeRedirectFn=Ot,this._overrideRedirectResult=It}async _openPopup(e,t,n,r){var i;O(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Gt(e,Xt(e,t,n,A(),r),et())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Xt(e,t,n,A(),r),nt().location.href=i,new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(O(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await async function(e){const t=await Vt(e),n=nt().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:$t(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ht,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=_(e,"network-request-failed"),o=nt().setTimeout(()=>{r(i)},Bt.get());function a(){nt().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}(e),n=new Rt(e);return t.register("authEvent",t=>{C(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),k(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ve()||ce()||ge()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt=Object(d.m)("authIdTokenMaxAge")||300;let Zt=null;var en;en="Browser",Object(p.c)(new v.a("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=n.options;return((e,n)=>{C(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),C(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:o,clientPlatform:en,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ye(en)},a=new we(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(P);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Object(p.c)(new v.a("auth-internal",e=>(e=>new Jt(e))(Ee(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),Object(p.g)("@firebase/auth","0.21.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(en)),Object(p.g)("@firebase/auth","0.21.1","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(p.g)("firebase","9.16.0","app");var tn,nn=n(14),rn=Object(p.f)({apiKey:"AIzaSyD66C-hvG4bP00LS0VEe4nL-817wS2qK8E",authDomain:"airbus-2110.firebaseapp.com",projectId:"airbus-2110",storageBucket:"airbus-2110.appspot.com",messagingSenderId:"744430483656",appId:"1:744430483656:web:423bb0b437a0d09e724dfd",measurementId:"G-FZVM8227JY"}),on=function(e=Object(p.e)()){const t=Object(p.b)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Object(p.b)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(d.h)(r,null!=t?t:{}))return e;k(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Qt,persistence:[ht,Qe,Ye]}),r=Object(d.m)("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Yt)return;const r=null==t?void 0:t.token;Zt!==r&&(Zt=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:"Bearer "+r}:{}}))});!function(e,t,n){Object(d.n)(e).beforeAuthStateChanged(t,n)}(n,e,()=>e(n.currentUser)),function(e,t,n,r){Object(d.n)(e).onIdTokenChanged(t,n,r)}(n,t=>e(t))}var i;const o=Object(d.k)("auth");return o&&ke(n,"http://"+o),n}(rn),an=new Ue,sn=(Object(nn.a)(rn),Object(r.createContext)()),ln=function(e){var t=e.children,n=Object(r.useState)(null),i=l()(n,2),o=i[0],a=i[1],s=Object(r.useState)(null),u=l()(s,2),h=u[0],d=u[1],p=Object(r.useState)(""),m=l()(p,2),g=m[0],v=m[1],y=Object(r.useState)(""),b=l()(y,2),w=b[0],E=b[1],T=function(){var e=f()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:kt(on,an).then((function(e){var t=e.user;a(t)})).catch((function(e){console.error(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return React.createElement(sn.Provider,{value:{user:o,handleUserAuth:T,st:h,des:g,setdes:v,setst:d,ret:w,setret:E}},t)},un=function(e){var t=e.start,n=e.last,o=e.switch1,a=Object(r.useContext)(sn),s=a.setdes,l=a.setret;return i.a.createElement("div",{className:"flex items-center justify-center flex-col"},i.a.createElement("div",{className:"journey "},i.a.createElement("h1",{className:"start"},"Let the Journey begin"),i.a.createElement("div",{className:"search"},i.a.createElement("div",{className:"Air_flight "},i.a.createElement("p",{className:"place"},"From"),i.a.createElement("input",{type:"text",onChange:function(e){t(e.target.value)},placeholder:"DELHI",className:"border-b-4 "})),i.a.createElement("div",{className:"Air_flight "},i.a.createElement("p",{className:"place"},"To"),i.a.createElement("input",{type:"text",onChange:function(e){n(e.target.value)},placeholder:"MUMBAI",className:"border-b-4 "})),i.a.createElement("div",{className:"Air_flight "},i.a.createElement("p",{className:"place"},"Depart"),i.a.createElement("input",{type:"date",className:"border-b-4 ",onChange:function(e){s(e.target.value)}})),i.a.createElement("div",{className:"Air_flight "},i.a.createElement("p",{className:"place"},"Return"),i.a.createElement("input",{type:"date",className:"border-b-4 ",onChange:function(e){l(e.target.value)}})),i.a.createElement("button",{className:"searchflight ",onClick:o},"SEARCH FLIGHTS"))))},cn=(n(30),function(e){var t=e.plane;return i.a.createElement("div",{className:"flight_details "},i.a.createElement("div",{className:"flight_post"},i.a.createElement("p",{className:"place-self-start text-slate-400 text-sm "},"Airline Name"),i.a.createElement("p",{className:"text-lg "},t.airlineName)),i.a.createElement("div",{className:"flight_post"},i.a.createElement("p",{className:"place-self-start text-slate-400 text-sm "},"From"),i.a.createElement("p",{className:"text-lg "},t.from)),i.a.createElement("div",{className:"flight_post"},i.a.createElement("img",{src:"https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif",alt:"light",width:100,height:70})),i.a.createElement("div",{className:"flight_post"},i.a.createElement("p",{className:"place-self-start text-slate-400 text-sm "},"To"),i.a.createElement("p",{className:"text-lg "},t.to)),i.a.createElement("div",{className:"flight_post"},i.a.createElement("p",{className:"place-self-start text-slate-400 text-sm "},"Depart"),i.a.createElement("p",{className:"text-lg "},t.departure.departureDate)),i.a.createElement("div",{className:"flight_post"},i.a.createElement("p",{className:"place-self-start text-slate-400 text-sm "},"Flight Brand"),i.a.createElement("p",{className:"text-lg "},t.airlineName)))}),hn=function(){var e=Object(r.useState)([]),t=l()(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){function e(){return(e=f()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights").then((function(e){return e.json()})).then((function(e){return o(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i.a.createElement("div",{className:"available"},i.a.createElement("h1",{className:"text-5xl my-3 text-white font-medium place-self-start"},"Available flights"),i.a.createElement("div",{className:"flex flex-col bg-white items-center overflow-y-auto w-full"},n.map((function(e,t){return i.a.createElement(cn,{key:t,plane:e})}))))};
/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fn(){return(fn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(tn||(tn={}));function dn(e){return void 0===e&&(e={}),bn((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return gn("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:vn(t)}),null,e)}function pn(e,t){if(!1===e||null==e)throw new Error(t)}function mn(e,t){return{usr:e.state,key:e.key,idx:t}}function gn(e,t,n,r){return void 0===n&&(n=null),fn({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?yn(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function vn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function yn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function bn(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=tn.Pop,l=null,u=c();function c(){return(a.state||{idx:null}).idx}function h(){s=tn.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:d.location,delta:t})}function f(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:vn(e);return pn(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,a.replaceState(fn({},a.state,{idx:u}),""));let d={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener("popstate",h),l=e,()=>{i.removeEventListener("popstate",h),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=tn.Push;let r=gn(d.location,e,t);n&&n(r,e),u=c()+1;let h=mn(r,u),f=d.createHref(r);try{a.pushState(h,"",f)}catch(e){i.location.assign(f)}o&&l&&l({action:s,location:d.location,delta:1})},replace:function(e,t){s=tn.Replace;let r=gn(d.location,e,t);n&&n(r,e),u=c();let i=mn(r,u),h=d.createHref(r);a.replaceState(i,"",h),o&&l&&l({action:s,location:d.location,delta:0})},go:e=>a.go(e)};return d}var wn;function En(e,t,n){void 0===n&&(n="/");let r=Cn(("string"==typeof t?yn(t):t).pathname||"/",n);if(null==r)return null;let i=function e(t,n,r,i){void 0===n&&(n=[]);void 0===r&&(r=[]);void 0===i&&(i="");let o=(t,o,a)=>{let s={relativePath:void 0===a?t.path||"":a,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};s.relativePath.startsWith("/")&&(pn(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),s.relativePath=s.relativePath.slice(i.length));let l=An([i,s.relativePath]),u=r.concat(s);t.children&&t.children.length>0&&(pn(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),e(t.children,n,u,l)),(null!=t.path||t.index)&&n.push({path:l,score:_n(l,t.index),routesMeta:u})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...i]=n,o=r.endsWith("?"),a=r.replace(/\?$/,"");if(0===i.length)return o?[a,""]:[a];let s=e(i.join("/")),l=[];l.push(...s.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...s);return l.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))o(e,t,n);else o(e,t)}),n}(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=Sn(i[e],In(r));return o}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(wn||(wn={}));const Tn=/^:\w+$/,kn=e=>"*"===e;function _n(e,t){let n=e.split("/"),r=n.length;return n.some(kn)&&(r+=-2),t&&(r+=2),n.filter(e=>!kn(e)).reduce((e,t)=>e+(Tn.test(t)?3:""===t?1:10),r)}function Sn(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let e=0;e<n.length;++e){let a=n[e],s=e===n.length-1,l="/"===i?t:t.slice(i.length)||"/",u=xn({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},l);if(!u)return null;Object.assign(r,u.params);let c=a.route;o.push({params:r,pathname:An([i,u.pathname]),pathnameBase:Ln(An([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=An([i,u.pathnameBase]))}return o}function xn(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Nn("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(e,t)=>(r.push(t),"/([^\\/]+)"));e.endsWith("*")?(r.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");return[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((e,t,n)=>{if("*"===t){let e=s[n]||"";a=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return Nn(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+n+")."),e}}(s[n]||"",t),e},{}),pathname:o,pathnameBase:a,pattern:e}}function In(e){try{return decodeURI(e)}catch(t){return Nn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Cn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Nn(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function On(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Rn(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Pn(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=yn(e):(i=fn({},e),pn(!i.pathname||!i.pathname.includes("?"),On("?","pathname","search",i)),pn(!i.pathname||!i.pathname.includes("#"),On("#","pathname","hash",i)),pn(!i.search||!i.search.includes("#"),On("#","search","hash",i)));let o,a=""===e||""===i.pathname,s=a?"/":i.pathname;if(r||null==s)o=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?yn(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:Dn(r),hash:Mn(i)}}(i,o),u=s&&"/"!==s&&s.endsWith("/"),c=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const An=e=>e.join("/").replace(/\/\/+/g,"/"),Ln=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Mn=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function jn(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const Un=["post","put","patch","delete"],Fn=(new Set(Un),["get",...Un]);new Set(Fn),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred");
/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zn(){return(zn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Vn="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:Bn,useEffect:Hn,useLayoutEffect:Wn,useDebugValue:$n}=r;function Kn(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!Vn(n,e)}catch(e){return!0}}const qn=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,n){return t()}:function(e,t,n){const r=t(),[{inst:i},o]=Bn({inst:{value:r,getSnapshot:t}});return Wn(()=>{i.value=r,i.getSnapshot=t,Kn(i)&&o({inst:i})},[e,r,t]),Hn(()=>{Kn(i)&&o({inst:i});return e(()=>{Kn(i)&&o({inst:i})})},[e]),$n(r),r},Gn=("useSyncExternalStore"in r&&(e=>{e.useSyncExternalStore})(r),r.createContext(null));const Xn=r.createContext(null);const Qn=r.createContext(null);const Jn=r.createContext(null);const Yn=r.createContext({outlet:null,matches:[]});const Zn=r.createContext(null);function er(){return null!=r.useContext(Jn)}function tr(){return er()||pn(!1),r.useContext(Jn).location}function nr(){er()||pn(!1);let{basename:e,navigator:t}=r.useContext(Qn),{matches:n}=r.useContext(Yn),{pathname:i}=tr(),o=JSON.stringify(Rn(n).map(e=>e.pathnameBase)),a=r.useRef(!1);return r.useEffect(()=>{a.current=!0}),r.useCallback((function(n,r){if(void 0===r&&(r={}),!a.current)return;if("number"==typeof n)return void t.go(n);let s=Pn(n,JSON.parse(o),i,"path"===r.relative);"/"!==e&&(s.pathname="/"===s.pathname?e:An([e,s.pathname])),(r.replace?t.replace:t.push)(s,r.state,r)}),[e,t,o,i])}function rr(e,t){let{relative:n}=void 0===t?{}:t,{matches:i}=r.useContext(Yn),{pathname:o}=tr(),a=JSON.stringify(Rn(i).map(e=>e.pathnameBase));return r.useMemo(()=>Pn(e,JSON.parse(a),o,"path"===n),[e,a,o,n])}function ir(){let e=function(){var e;let t=r.useContext(Zn),n=cr(ur.UseRouteError),i=hr(ur.UseRouteError);if(t)return t;return null==(e=n.errors)?void 0:e[i]}(),t=jn(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}class or extends r.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?r.createElement(Yn.Provider,{value:this.props.routeContext},r.createElement(Zn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ar(e){let{routeContext:t,match:n,children:i}=e,o=r.useContext(Gn);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(Yn.Provider,{value:t},i)}function sr(e,t,n){if(void 0===t&&(t=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let i=e,o=null==n?void 0:n.errors;if(null!=o){let e=i.findIndex(e=>e.route.id&&(null==o?void 0:o[e.route.id]));e>=0||pn(!1),i=i.slice(0,Math.min(i.length,e+1))}return i.reduceRight((e,a,s)=>{let l=a.route.id?null==o?void 0:o[a.route.id]:null,u=n?a.route.errorElement||r.createElement(ir,null):null,c=t.concat(i.slice(0,s+1)),h=()=>r.createElement(ar,{match:a,routeContext:{outlet:e,matches:c}},l?u:void 0!==a.route.element?a.route.element:e);return n&&(a.route.errorElement||0===s)?r.createElement(or,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var lr,ur;function cr(e){let t=r.useContext(Xn);return t||pn(!1),t}function hr(e){let t=function(e){let t=r.useContext(Yn);return t||pn(!1),t}(),n=t.matches[t.matches.length-1];return n.route.id||pn(!1),n.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(lr||(lr={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(ur||(ur={}));function fr(e){pn(!1)}function dr(e){let{basename:t="/",children:n=null,location:i,navigationType:o=tn.Pop,navigator:a,static:s=!1}=e;er()&&pn(!1);let l=t.replace(/^\/*/,"/"),u=r.useMemo(()=>({basename:l,navigator:a,static:s}),[l,a,s]);"string"==typeof i&&(i=yn(i));let{pathname:c="/",search:h="",hash:f="",state:d=null,key:p="default"}=i,m=r.useMemo(()=>{let e=Cn(c,l);return null==e?null:{pathname:e,search:h,hash:f,state:d,key:p}},[l,c,h,f,d,p]);return null==m?null:r.createElement(Qn.Provider,{value:u},r.createElement(Jn.Provider,{children:n,value:{location:m,navigationType:o}}))}function pr(e){let{children:t,location:n}=e,i=r.useContext(Gn);return function(e,t){er()||pn(!1);let{navigator:n}=r.useContext(Qn),i=r.useContext(Xn),{matches:o}=r.useContext(Yn),a=o[o.length-1],s=a?a.params:{},l=(a&&a.pathname,a?a.pathnameBase:"/");a&&a.route;let u,c=tr();if(t){var h;let e="string"==typeof t?yn(t):t;"/"===l||(null==(h=e.pathname)?void 0:h.startsWith(l))||pn(!1),u=e}else u=c;let f=u.pathname||"/",d=En(e,{pathname:"/"===l?f:f.slice(l.length)||"/"}),p=sr(d&&d.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:An([l,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:An([l,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,i||void 0);return t&&p?r.createElement(Jn.Provider,{value:{location:zn({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tn.Pop}},p):p}(i&&!t?i.router.routes:function e(t,n){void 0===n&&(n=[]);let i=[];return r.Children.forEach(t,(t,o)=>{if(!r.isValidElement(t))return;if(t.type===r.Fragment)return void i.push.apply(i,e(t.props.children,n));t.type!==fr&&pn(!1),t.props.index&&t.props.children&&pn(!1);let a=[...n,o],s={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,hasErrorBoundary:null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle};t.props.children&&(s.children=e(t.props.children,a)),i.push(s)}),i}(t),n)}var mr;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(mr||(mr={}));new Promise(()=>{});r.Component;
/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gr(){return(gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function vr(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}const yr=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function br(e){let{basename:t,children:n,window:i}=e,o=r.useRef();null==o.current&&(o.current=dn({window:i,v5Compat:!0}));let a=o.current,[s,l]=r.useState({action:a.action,location:a.location});return r.useLayoutEffect(()=>a.listen(l),[a]),r.createElement(dr,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}const wr="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,Er=r.forwardRef((function(e,t){let{onClick:n,relative:i,reloadDocument:o,replace:a,state:s,target:l,to:u,preventScrollReset:c}=e,h=vr(e,yr),f="string"==typeof u?u:vn(u),d=/^[a-z+]+:\/\//i.test(f)||f.startsWith("//"),p=f,m=!1;if(wr&&d){let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f);t.origin===e.origin?p=t.pathname+t.search+t.hash:m=!0}let g=function(e,t){let{relative:n}=void 0===t?{}:t;er()||pn(!1);let{basename:i,navigator:o}=r.useContext(Qn),{hash:a,pathname:s,search:l}=rr(e,{relative:n}),u=s;return"/"!==i&&(u="/"===s?i:An([i,s])),o.createHref({pathname:u,search:l,hash:a})}(p,{relative:i}),v=function(e,t){let{target:n,replace:i,state:o,preventScrollReset:a,relative:s}=void 0===t?{}:t,l=nr(),u=tr(),c=rr(e,{relative:s});return r.useCallback(t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==i?i:vn(u)===vn(c);l(e,{replace:n,state:o,preventScrollReset:a,relative:s})}},[u,l,c,i,o,n,e,a,s])}(p,{replace:a,state:s,target:l,preventScrollReset:c,relative:i});return r.createElement("a",gr({},h,{href:d?f:g,onClick:m||o?n:function(e){n&&n(e),e.defaultPrevented||v(e)},ref:t,target:l}))}));var Tr,kr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Tr||(Tr={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(kr||(kr={}));var _r=function(e){var t=Object(r.useState)([]),n=l()(t,2),o=n[0],a=n[1];Object(r.useEffect)((function(){function t(){return(t=f()(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.start.charAt(0).toUpperCase()+e.start.slice(1).toLowerCase(),r=e.Last.charAt(0).toUpperCase()+e.Last.slice(1).toLowerCase(),t.next=4,fetch("https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=".concat(n,"&to=").concat(r)).then((function(e){return e.json()})).then((function(e){a(e)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var s=Object(r.useContext)(sn).setst;return i.a.createElement("div",{className:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},i.a.createElement("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),i.a.createElement("div",{className:"fixed inset-0 z-10 overflow-y-auto"},i.a.createElement("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},i.a.createElement("div",{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},o.length>0?i.a.createElement("div",{className:"price"},i.a.createElement("div",{className:"flex justify-evenly border-b-4 bg-amber-400 text-white"},i.a.createElement("div",{className:"text-3xl font-medium place-self-center"},o[0].from),i.a.createElement("div",{className:"flex flex-col"},i.a.createElement("h2",{className:"text-base my-2"},o[0].duration),i.a.createElement("img",{src:"https://download.logo.wine/logo/Airbus/Airbus-Logo.wine.png",alt:"logo",width:100,height:50})),i.a.createElement("div",{className:"text-3xl font-medium place-self-center"},o[0].to)),i.a.createElement("div",{className:"flex justify-around items-center py-2"},i.a.createElement("div",{className:"flex flex-col justify-center content-around border-r-1 "},i.a.createElement("h2",{className:"border-b-2 text-base my-1 "},i.a.createElement("span",{className:"font-lg"},"Departure Time : "),o[0].departure.departureTime),i.a.createElement("h2",{className:"border-b-2 text-base my-1 "},i.a.createElement("span",{className:"font-lg"},"Return Time : "),o[0].return.returnTime),i.a.createElement("h2",{className:"border-b-2 text-base my-1 "},i.a.createElement("span",{className:"font-lg"},"Airplane Name : "),o[0].airlineName)),i.a.createElement("div",{className:"flex flex-col justify-center items-center border-l-1"},i.a.createElement("h1",{className:"text-xl my-2"},i.a.createElement("span",{className:"font-xl"},"PRICE : "),o[0].price),i.a.createElement(Er,{to:"/checkout"},i.a.createElement("button",{onClick:function(){s(o[0])},className:"checkout"},"Checkout"))))):i.a.createElement("div",{className:"no_flight"},"No Flight For Given Filter"),i.a.createElement("div",{className:"Cancle"},i.a.createElement("button",{type:"button",className:"cancle_button",onClick:e.switch},"Cancel"))))))},Sr=function(){var e=Object(r.useState)(!1),t=l()(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),s=l()(a,2),u=s[0],c=s[1],h=Object(r.useState)(""),f=l()(h,2),d=f[0],p=f[1];return i.a.createElement("div",{className:"dashboard"},i.a.createElement("div",{className:"dashboard_detail"},i.a.createElement(un,{start:c,last:p,switch1:function(){return o(!0)}}),i.a.createElement(hn,null)),n&&i.a.createElement(_r,{start:u,Last:d,switch:function(){return o(!1)}}))},xr=n.p+"3d18db4feed3e2c6065a73fefd115a91.png",Ir=n.p+"d78701e6159dfe85e8429aa3238f37d3.png",Cr=function(){var e=Object(r.useContext)(sn),t=e.user,n=e.handleUserAuth;return i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar1"},i.a.createElement("div",null,i.a.createElement("a",{href:"/",className:"flex items-center"},i.a.createElement("img",{src:xr,className:"logo",alt:"Flowbite Logo"})),i.a.createElement("img",{src:Ir,className:"logo1",alt:"airplane Logo"})),i.a.createElement("div",{className:"logged",id:"navbar-default"},i.a.createElement("ul",{className:"log"},i.a.createElement("li",null,t?i.a.createElement("img",{src:t.photoURL,alt:"logo",width:30,height:30,className:"rounded"}):i.a.createElement("button",{onClick:n,className:"login"},"Login"))))))},Nr=function(e){var t=e.data,n=Object(r.useContext)(sn),o=n.des,a=n.ret;return i.a.createElement("div",{className:"payment"},i.a.createElement("div",{className:"Ticket_details "},i.a.createElement("h1",{className:"Ticket"},"Ticket Detail"),i.a.createElement("div",{className:"flex justify-evenly border-b-4 bg-amber-400 text-white"},i.a.createElement("div",{className:"text-6xl font-medium place-self-center"},t.from),i.a.createElement("div",{className:"flex flex-col"},i.a.createElement("img",{src:"https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif",alt:"logo",width:130,height:80})),i.a.createElement("div",{className:"text-6xl font-medium place-self-center"},t.to)),i.a.createElement("div",{className:"flex flex-col justify-center items-center border-b-1"},i.a.createElement("h1",{className:"text-xl my-1"},i.a.createElement("span",{className:"text-xl"},"Duration: ")," ",t.duration," "),i.a.createElement("h1",{className:"text-xl my-1"},i.a.createElement("span",{className:"text-xl"},"Airplane Name: "),t.airlineName)),i.a.createElement("div",{className:"flex justify-around items-center p-2 mt-5"},i.a.createElement("div",{className:"mr-5 flex flex-col items-center"},i.a.createElement("div",{className:"Ticket_details"},i.a.createElement("h1",{className:"text-3xl  font-lg"},"Departure"),i.a.createElement("p",{className:"text-xl"},i.a.createElement("span",null,"Date: "),o),i.a.createElement("p",{className:"text-xl"},i.a.createElement("span",null,"Time: "),t.departure.departureTime)),i.a.createElement("div",{className:"Ticket_details"},i.a.createElement("h1",{className:"text-3xl font-lg"},"Return"),i.a.createElement("p",{className:"text-xl"},i.a.createElement("span",null,"Date: ")," ",a),i.a.createElement("p",{className:"text-xl"},i.a.createElement("span",null,"Time: ")," ",t.return.returnTime))),i.a.createElement("div",{className:"ml-5"},i.a.createElement("div",{className:"Ticket_details"},i.a.createElement("h1",{className:"text-5xl mb-3 "},"Fare Summary"),i.a.createElement("div",{className:"border-b-1 mb-3"},i.a.createElement("h1",{className:"text-xl"},i.a.createElement("span",{className:"text-2xl"},"Flight Price: "),"Rs. ",t.price),i.a.createElement("h1",{className:"text-xl"},i.a.createElement("span",{className:"text-2xl"},"Extra Charge: "),"Rs. 500")),i.a.createElement("h1",{className:"text-xl border-b-2 border-t-2 "},i.a.createElement("span",{className:"text-2xl"},"Total "),"Rs. ",parseInt(t.price)+500))))))},Or=function(){var e=Object(r.useContext)(sn).st;return i.a.createElement("div",{className:"flex justify-center w-full "},e?i.a.createElement(Nr,{data:e}):i.a.createElement("div",{className:"flex flex-col p-4 bg-blue-400 justify-center items-center w-3/5"},i.a.createElement("h1",{className:"text-3xl font-xl mt-2 mb-4"},"No ticket in your cart"),i.a.createElement("h3",{className:"text-xl font-xl mt-2 mb-4"},"Make a safe journey by airbus"),i.a.createElement("img",{src:"https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif",alt:"light",width:200,height:150})),i.a.createElement("div",{className:"card"},i.a.createElement("h3",{className:"Add_card"},"ADD CARD TO PAY"),i.a.createElement("form",{className:"bg-white p-4"},i.a.createElement("div",{className:"relative z-0 w-full mb-6 group"},i.a.createElement("input",{type:"text",name:"floating_email",id:"floating_email",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"NAME ON CARD",required:!0})),i.a.createElement("div",{className:"relative z-0 w-full mb-6 group"},i.a.createElement("input",{type:"text",name:"floating_password",id:"floating_password",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"CARD NUMBER",required:!0})),i.a.createElement("div",{className:"grid md:grid-cols-2 md:gap-6"},i.a.createElement("div",{className:"relative z-0 w-full mb-6 group"},i.a.createElement("input",{type:"date",name:"floating_first_name",id:"floating_first_name",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"expire date",required:!0})),i.a.createElement("div",{className:"relative z-0 w-full mb-6 group"},i.a.createElement("input",{type:"number",name:"floating_last_name",id:"floating_last_name",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:"CVV",required:!0}))),i.a.createElement("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Submit"))))};var Rr=function(){return React.createElement("div",null,React.createElement(ln,null,React.createElement(br,null,React.createElement(Cr,null),React.createElement(pr,null,React.createElement(fr,{exact:!0,path:"/",element:React.createElement(Sr,null)}),React.createElement(fr,{exact:!0,path:"/:id",element:React.createElement(Sr,null)}),React.createElement(fr,{exact:!0,path:"/checkout",element:React.createElement(Or,null)})))))};a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Rr,null)),document.getElementById("root"))}]);