function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequireff88;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequireff88=r),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var n=s.default(e,t,"get");return a.default(e,n)};var s=l(r("fExtF")),a=l(r("iaRLo"));function l(e){return e&&e.__esModule?e:{default:e}}var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,n){d.default(e,t),t.set(e,n)};var u,d=(u=r("7K24o"))&&u.__esModule?u:{default:u};var h={};function f(e,t){return function(){return e.apply(t,arguments)}}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};const{toString:p}=Object.prototype,{getPrototypeOf:m}=Object,g=(y=Object.create(null),e=>{const t=p.call(e);return y[t]||(y[t]=t.slice(8,-1).toLowerCase())});var y;const b=e=>(e=e.toLowerCase(),t=>g(t)===e),v=e=>t=>typeof t===e,{isArray:_}=Array,w=v("undefined");const x=b("ArrayBuffer");const k=v("string"),C=v("function"),I=v("number"),E=e=>null!==e&&"object"==typeof e,S=e=>{if("object"!==g(e))return!1;const t=m(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},T=b("Date"),N=b("File"),R=b("Blob"),A=b("FileList"),O=b("URLSearchParams");function L(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),_(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function P(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,M=e=>!w(e)&&e!==D;const U=(F="undefined"!=typeof Uint8Array&&m(Uint8Array),e=>F&&e instanceof F);var F;const B=b("HTMLFormElement"),z=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),j=b("RegExp"),W=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};L(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var q={isArray:_,isArrayBuffer:x,isBuffer:function(e){return null!==e&&!w(e)&&null!==e.constructor&&!w(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||p.call(e)===t||C(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&x(e.buffer),t},isString:k,isNumber:I,isBoolean:e=>!0===e||!1===e,isObject:E,isPlainObject:S,isUndefined:w,isDate:T,isFile:N,isBlob:R,isRegExp:j,isFunction:C,isStream:e=>E(e)&&C(e.pipe),isURLSearchParams:O,isTypedArray:U,isFileList:A,forEach:L,merge:function e(){const{caseless:t}=M(this)&&this||{},n={},i=(i,r)=>{const o=t&&P(n,r)||r;S(n[o])&&S(i)?n[o]=e(n[o],i):S(i)?n[o]=e({},i):_(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&L(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(L(t,((t,i)=>{n&&C(t)?e[i]=f(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&m(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:g,kindOfTest:b,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!I(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:B,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:W,freezeMethods:e=>{W(e,((t,n)=>{if(C(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];C(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return _(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:P,global:D,isContextDefined:M,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=_(e)?[]:{};return L(e,((e,t)=>{const o=n(e,i+1);!w(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)}};function H(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}q.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $=H.prototype,V={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{V[e]={value:e}})),Object.defineProperties(H,V),Object.defineProperty($,"isAxiosError",{value:!0}),H.from=(e,t,n,i,r,o)=>{const s=Object.create($);return q.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),H.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var X,G,K,J=H,Y=e("object"==typeof self?self.FormData:window.FormData);G=function(e){var t,n,i=se(e),r=i[0],o=i[1],s=new ne(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),a=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)t=te[e.charCodeAt(n)]<<18|te[e.charCodeAt(n+1)]<<12|te[e.charCodeAt(n+2)]<<6|te[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=te[e.charCodeAt(n)]<<2|te[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=te[e.charCodeAt(n)]<<10|te[e.charCodeAt(n+1)]<<4|te[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},K=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(ae(e,s,s+o>a?a:s+o));1===i?(t=e[n-1],r.push(ee[t>>2]+ee[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(ee[t>>10]+ee[t>>4&63]+ee[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Q,Z,ee=[],te=[],ne="undefined"!=typeof Uint8Array?Uint8Array:Array,ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",re=0,oe=ie.length;re<oe;++re)ee[re]=ie[re],te[ie.charCodeAt(re)]=re;function se(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ae(e,t,n){for(var i,r,o=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(ee[(r=i)>>18&63]+ee[r>>12&63]+ee[r>>6&63]+ee[63&r]);return o.join("")}te["-".charCodeAt(0)]=62,te["_".charCodeAt(0)]=63,Q=function(e,t,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?r-1:0,h=n?-1:1,f=e[t+d];for(d+=h,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+d],d+=h,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+e[t+d],d+=h,u-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},Z=function(e,t,n,i,r,o){var s,a,l,c=8*o-r-1,u=(1<<c)-1,d=u>>1,h=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(t*l-1)*Math.pow(2,r),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m};const le="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;X=ue;function ce(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,ue.prototype),t}function ue(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return fe(e)}return de(e,t,n)}function de(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ue.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|ye(e,t);let i=ce(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Je(e,Uint8Array)){const t=new Uint8Array(e);return me(t.buffer,t.byteOffset,t.byteLength)}return pe(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Je(e,ArrayBuffer)||e&&Je(e.buffer,ArrayBuffer))return me(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Je(e,SharedArrayBuffer)||e&&Je(e.buffer,SharedArrayBuffer)))return me(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return ue.from(i,t,n);const r=function(e){if(ue.isBuffer(e)){const t=0|ge(e.length),n=ce(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Ye(e.length)?ce(0):pe(e);if("Buffer"===e.type&&Array.isArray(e.data))return pe(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ue.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function he(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function fe(e){return he(e),ce(e<0?0:0|ge(e))}function pe(e){const t=e.length<0?0:0|ge(e.length),n=ce(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function me(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,ue.prototype),i}function ge(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function ye(e,t){if(ue.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Je(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Xe(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ge(e).length;default:if(r)return i?-1:Xe(e).length;t=(""+t).toLowerCase(),r=!0}}function be(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ae(this,t,n);case"utf8":case"utf-8":return Te(this,t,n);case"ascii":return Ne(this,t,n);case"latin1":case"binary":return Re(this,t,n);case"base64":return Se(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Oe(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function ve(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function _e(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Ye(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=ue.from(t,i)),ue.isBuffer(t))return 0===t.length?-1:we(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):we(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function we(e,t,n,i,r){let o,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){n=!1;break}if(n)return o}return-1}function xe(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Ye(i))return s;e[n+s]=i}return s}function ke(e,t,n,i){return Ke(Xe(t,e.length-n),e,n,i)}function Ce(e,t,n,i){return Ke(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Ie(e,t,n,i){return Ke(Ge(t),e,n,i)}function Ee(e,t,n,i){return Ke(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function Se(e,t,n){return 0===t&&n===e.length?K(e):K(e.slice(t,n))}function Te(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(o=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}ue.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ue.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ue.prototype,"parent",{enumerable:!0,get:function(){if(ue.isBuffer(this))return this.buffer}}),Object.defineProperty(ue.prototype,"offset",{enumerable:!0,get:function(){if(ue.isBuffer(this))return this.byteOffset}}),ue.poolSize=8192,ue.from=function(e,t,n){return de(e,t,n)},Object.setPrototypeOf(ue.prototype,Uint8Array.prototype),Object.setPrototypeOf(ue,Uint8Array),ue.alloc=function(e,t,n){return function(e,t,n){return he(e),e<=0?ce(e):void 0!==t?"string"==typeof n?ce(e).fill(t,n):ce(e).fill(t):ce(e)}(e,t,n)},ue.allocUnsafe=function(e){return fe(e)},ue.allocUnsafeSlow=function(e){return fe(e)},ue.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ue.prototype},ue.compare=function(e,t){if(Je(e,Uint8Array)&&(e=ue.from(e,e.offset,e.byteLength)),Je(t,Uint8Array)&&(t=ue.from(t,t.offset,t.byteLength)),!ue.isBuffer(e)||!ue.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},ue.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ue.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ue.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=ue.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Je(t,Uint8Array))r+t.length>i.length?(ue.isBuffer(t)||(t=ue.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!ue.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},ue.byteLength=ye,ue.prototype._isBuffer=!0,ue.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)ve(this,t,t+1);return this},ue.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)ve(this,t,t+3),ve(this,t+1,t+2);return this},ue.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)ve(this,t,t+7),ve(this,t+1,t+6),ve(this,t+2,t+5),ve(this,t+3,t+4);return this},ue.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?Te(this,0,e):be.apply(this,arguments)},ue.prototype.toLocaleString=ue.prototype.toString,ue.prototype.equals=function(e){if(!ue.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ue.compare(this,e)},ue.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},le&&(ue.prototype[le]=ue.prototype.inspect),ue.prototype.compare=function(e,t,n,i,r){if(Je(e,Uint8Array)&&(e=ue.from(e,e.offset,e.byteLength)),!ue.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){o=l[e],s=c[e];break}return o<s?-1:s<o?1:0},ue.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ue.prototype.indexOf=function(e,t,n){return _e(this,e,t,n,!0)},ue.prototype.lastIndexOf=function(e,t,n){return _e(this,e,t,n,!1)},ue.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return xe(this,e,t,n);case"utf8":case"utf-8":return ke(this,e,t,n);case"ascii":case"latin1":case"binary":return Ce(this,e,t,n);case"base64":return Ie(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ee(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},ue.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Ne(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function Re(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function Ae(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Qe[e[i]];return r}function Oe(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function Le(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Pe(e,t,n,i,r,o){if(!ue.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function De(e,t,n,i,r){qe(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function Me(e,t,n,i,r){qe(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Ue(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Fe(e,t,n,i,r){return t=+t,n>>>=0,r||Ue(e,0,n,4),Z(e,t,n,i,23,4),n+4}function Be(e,t,n,i,r){return t=+t,n>>>=0,r||Ue(e,0,n,8),Z(e,t,n,i,52,8),n+8}ue.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,ue.prototype),i},ue.prototype.readUintLE=ue.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},ue.prototype.readUintBE=ue.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},ue.prototype.readUint8=ue.prototype.readUInt8=function(e,t){return e>>>=0,t||Le(e,1,this.length),this[e]},ue.prototype.readUint16LE=ue.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Le(e,2,this.length),this[e]|this[e+1]<<8},ue.prototype.readUint16BE=ue.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Le(e,2,this.length),this[e]<<8|this[e+1]},ue.prototype.readUint32LE=ue.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Le(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ue.prototype.readUint32BE=ue.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Le(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ue.prototype.readBigUInt64LE=Ze((function(e){He(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),ue.prototype.readBigUInt64BE=Ze((function(e){He(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),ue.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},ue.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Le(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},ue.prototype.readInt8=function(e,t){return e>>>=0,t||Le(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ue.prototype.readInt16LE=function(e,t){e>>>=0,t||Le(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ue.prototype.readInt16BE=function(e,t){e>>>=0,t||Le(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ue.prototype.readInt32LE=function(e,t){return e>>>=0,t||Le(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ue.prototype.readInt32BE=function(e,t){return e>>>=0,t||Le(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ue.prototype.readBigInt64LE=Ze((function(e){He(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),ue.prototype.readBigInt64BE=Ze((function(e){He(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||$e(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),ue.prototype.readFloatLE=function(e,t){return e>>>=0,t||Le(e,4,this.length),Q(this,e,!0,23,4)},ue.prototype.readFloatBE=function(e,t){return e>>>=0,t||Le(e,4,this.length),Q(this,e,!1,23,4)},ue.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Le(e,8,this.length),Q(this,e,!0,52,8)},ue.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Le(e,8,this.length),Q(this,e,!1,52,8)},ue.prototype.writeUintLE=ue.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Pe(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},ue.prototype.writeUintBE=ue.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){Pe(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},ue.prototype.writeUint8=ue.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,1,255,0),this[t]=255&e,t+1},ue.prototype.writeUint16LE=ue.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ue.prototype.writeUint16BE=ue.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ue.prototype.writeUint32LE=ue.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ue.prototype.writeUint32BE=ue.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ue.prototype.writeBigUInt64LE=Ze((function(e,t=0){return De(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ue.prototype.writeBigUInt64BE=Ze((function(e,t=0){return Me(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),ue.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Pe(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},ue.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);Pe(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},ue.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ue.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ue.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ue.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ue.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Pe(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ue.prototype.writeBigInt64LE=Ze((function(e,t=0){return De(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ue.prototype.writeBigInt64BE=Ze((function(e,t=0){return Me(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),ue.prototype.writeFloatLE=function(e,t,n){return Fe(this,e,t,!0,n)},ue.prototype.writeFloatBE=function(e,t,n){return Fe(this,e,t,!1,n)},ue.prototype.writeDoubleLE=function(e,t,n){return Be(this,e,t,!0,n)},ue.prototype.writeDoubleBE=function(e,t,n){return Be(this,e,t,!1,n)},ue.prototype.copy=function(e,t,n,i){if(!ue.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},ue.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!ue.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=ue.isBuffer(e)?e:ue.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const ze={};function je(e,t,n){ze[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function We(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function qe(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new ze.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){He(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||$e(t,e.length-(n+1))}(i,r,o)}function He(e,t){if("number"!=typeof e)throw new ze.ERR_INVALID_ARG_TYPE(t,"number",e)}function $e(e,t,n){if(Math.floor(e)!==e)throw He(e,n),new ze.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new ze.ERR_BUFFER_OUT_OF_BOUNDS;throw new ze.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}je("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),je("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),je("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=We(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=We(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ve=/[^+/0-9A-Za-z-_]/g;function Xe(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Ge(e){return G(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ve,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ke(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Je(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Ye(e){return e!=e}const Qe=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Ze(e){return"undefined"==typeof BigInt?et:e}function et(){throw new Error("BigInt not supported")}var tt=X;function nt(e){return q.isPlainObject(e)||q.isArray(e)}function it(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function rt(e,t,n){return e?e.concat(t).map((function(e,t){return e=it(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const ot=q.toFlatObject(q,{},null,(function(e){return/^is[A-Z]/.test(e)}));var st=function(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new(Y||FormData);const i=(n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!q.isUndefined(t[e])}))).metaTokens,r=n.visitor||u,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=t)&&q.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!q.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(q.isDate(e))return e.toISOString();if(!a&&q.isBlob(e))throw new J("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(e)||q.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):tt.from(e):e}function u(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(q.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(q.isArray(e)&&function(e){return q.isArray(e)&&!e.some(nt)}(e)||q.isFileList(e)||q.endsWith(n,"[]")&&(a=q.toArray(e)))return n=it(n),a.forEach((function(e,i){!q.isUndefined(e)&&null!==e&&t.append(!0===s?rt([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!nt(e)||(t.append(rt(r,n,o),c(e)),!1)}const d=[],h=Object.assign(ot,{defaultVisitor:u,convertValue:c,isVisitable:nt});if(!q.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!q.isUndefined(n)){if(-1!==d.indexOf(n))throw Error("Circular reference detected in "+i.join("."));d.push(n),q.forEach(n,(function(n,o){!0===(!(q.isUndefined(n)||null===n)&&r.call(t,n,q.isString(o)?o.trim():o,i,h))&&e(n,i?i.concat(o):[o])})),d.pop()}}(e),t};function at(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function lt(e,t){this._pairs=[],e&&st(e,this,t)}const ct=lt.prototype;ct.append=function(e,t){this._pairs.push([e,t])},ct.toString=function(e){const t=e?function(t){return e.call(this,t,at)}:at;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ut=lt;function dt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ht(e,t,n){if(!t)return e;const i=n&&n.encode||dt,r=n&&n.serialize;let o;if(o=r?r(t,n):q.isURLSearchParams(t)?t.toString():new ut(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}var ft=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},pt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mt="undefined"!=typeof URLSearchParams?URLSearchParams:ut,gt=FormData;const yt=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),bt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var vt={isBrowser:!0,classes:{URLSearchParams:mt,FormData:gt,Blob:Blob},isStandardBrowserEnv:yt,isStandardBrowserWebWorkerEnv:bt,protocols:["http","https","file","blob","url","data"]};function _t(e,t){return st(e,new vt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return vt.isNode&&q.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var wt=function(e){function t(e,n,i,r){let o=e[r++];const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&q.isArray(i)?i.length:o,a)return q.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&q.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],r)&&q.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(i[o])),!s}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,((e,i)=>{t(function(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const xt={"Content-Type":void 0};const kt={transitional:pt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=q.isObject(e);r&&q.isHTMLForm(e)&&(e=new FormData(e));if(q.isFormData(e))return i&&i?JSON.stringify(wt(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return _t(e,this.formSerializer).toString();if((o=q.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return st(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||kt.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&q.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw J.from(e,J.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vt.classes.FormData,Blob:vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],(function(e){kt.headers[e]={}})),q.forEach(["post","put","patch"],(function(e){kt.headers[e]=q.merge(xt)}));var Ct=kt;const It=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Et=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&It[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const St=Symbol("internals");function Tt(e){return e&&String(e).trim().toLowerCase()}function Nt(e){return!1===e||null==e?e:q.isArray(e)?e.map(Nt):String(e)}function Rt(e,t,n,i){return q.isFunction(i)?i.call(this,t,n):q.isString(t)?q.isString(i)?-1!==t.indexOf(i):q.isRegExp(i)?i.test(t):void 0:void 0}let At=Symbol.iterator,Ot=Symbol.toStringTag;class Lt{set(e,t,n){const i=this;function r(e,t,n){const r=Tt(t);if(!r)throw new Error("header name must be a non-empty string");const o=q.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=Nt(e))}const o=(e,t)=>q.forEach(e,((e,n)=>r(e,n,t)));return q.isPlainObject(e)||e instanceof this.constructor?o(e,t):q.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?o(Et(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=Tt(e)){const n=q.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(q.isFunction(t))return t.call(this,e,n);if(q.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Tt(e)){const n=q.findKey(this,e);return!(!n||t&&!Rt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=Tt(e)){const r=q.findKey(n,e);!r||t&&!Rt(0,n[r],r,t)||(delete n[r],i=!0)}}return q.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return q.forEach(this,((i,r)=>{const o=q.findKey(n,r);if(o)return t[o]=Nt(i),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=Nt(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return q.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&q.isArray(n)?n.join(", "):n)})),t}[At](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Ot](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[St]=this[St]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=Tt(e);t[i]||(!function(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return q.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}Lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),q.freezeMethods(Lt.prototype),q.freezeMethods(Lt);var Pt=Lt;function Dt(e,t){const n=this||Ct,i=t||n,r=Pt.from(i.headers);let o=i.data;return q.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function Mt(e){return!(!e||!e.__CANCEL__)}function Ut(e,t,n){J.call(this,null==e?"canceled":e,J.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(Ut,J,{__CANCEL__:!0});var Ft=Ut;function Bt(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var zt=vt.isStandardBrowserEnv?{write:function(e,t,n,i,r,o){const s=[];s.push(e+"="+encodeURIComponent(t)),q.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),q.isString(i)&&s.push("path="+i),q.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function jt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Wt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?jt(e,t):t}var qt=vt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=q.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Ht(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var $t=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let u=s,d=0;for(;u!==o;)d+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-r<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function Vt(e,t){let n=0;const i=$t(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var Xt="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=Pt.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}q.isFormData(i)&&(vt.isStandardBrowserEnv||vt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=Wt(e.baseURL,e.url);function u(){if(!l)return;const i=Pt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Bt((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),ht(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new J("Request aborted",J.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new J("Network Error",J.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||pt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new J(t,i.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,e,l)),l=null},vt.isStandardBrowserEnv){const t=(e.withCredentials||qt(c))&&e.xsrfCookieName&&zt.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&q.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),q.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&"json"!==o&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Vt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Vt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new Ft(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const d=Ht(c);d&&-1===vt.protocols.indexOf(d)?n(new J("Unsupported protocol "+d+":",J.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const Gt={http:null,xhr:Xt};q.forEach(Gt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Kt={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=q.isString(n)?Gt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new J(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(q.hasOwnProp(Gt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!q.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Gt};function Jt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ft(null,e)}function Yt(e){Jt(e),e.headers=Pt.from(e.headers),e.data=Dt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Kt.getAdapter(e.adapter||Ct.adapter)(e).then((function(t){return Jt(e),t.data=Dt.call(e,e.transformResponse,t),t.headers=Pt.from(t.headers),t}),(function(t){return Mt(t)||(Jt(e),t&&t.response&&(t.response.data=Dt.call(e,e.transformResponse,t.response),t.response.headers=Pt.from(t.response.headers))),Promise.reject(t)}))}const Qt=e=>e instanceof Pt?e.toJSON():e;function Zt(e,t){t=t||{};const n={};function i(e,t,n){return q.isPlainObject(e)&&q.isPlainObject(t)?q.merge.call({caseless:n},e,t):q.isPlainObject(t)?q.merge({},t):q.isArray(t)?t.slice():t}function r(e,t,n){return q.isUndefined(t)?q.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!q.isUndefined(t))return i(void 0,t)}function s(e,t){return q.isUndefined(t)?q.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Qt(e),Qt(t),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const o=l[i]||r,s=o(e[i],t[i],i);q.isUndefined(s)&&o!==a||(n[i]=s)})),n}const en={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{en[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const tn={};en.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.6] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new J(i(r," has been removed"+(t?" in "+t:"")),J.ERR_DEPRECATED);return t&&!tn[r]&&(tn[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var nn={assertOptions:function(e,t,n){if("object"!=typeof e)throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new J("option "+o+" must be "+n,J.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new J("Unknown option "+o,J.ERR_BAD_OPTION)}},validators:en};const rn=nn.validators;class on{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Zt(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let o;void 0!==n&&nn.assertOptions(n,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),void 0!==i&&nn.assertOptions(i,{encode:rn.function,serialize:rn.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=r&&q.merge(r.common,r[t.method]),o&&q.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Pt.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[Yt.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=s.length;let h=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{c=Yt.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return ht(Wt((e=Zt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new ft,response:new ft}}}q.forEach(["delete","get","head","options"],(function(e){on.prototype[e]=function(t,n){return this.request(Zt(n||{},{method:e,url:t,data:(n||{}).data}))}})),q.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Zt(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}on.prototype[e]=t(),on.prototype[e+"Form"]=t(!0)}));var sn=on;class an{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new an((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Ft(e,i,r),t(n.reason))}))}}var ln=an;const cn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cn).forEach((([e,t])=>{cn[t]=e}));var un=cn;const dn=function e(t){const n=new sn(t),i=f(sn.prototype.request,n);return q.extend(i,sn.prototype,n,{allOwnKeys:!0}),q.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Zt(t,n))},i}(Ct);dn.Axios=sn,dn.CanceledError=Ft,dn.CancelToken=ln,dn.isCancel=Mt,dn.VERSION="1.2.6",dn.toFormData=st,dn.AxiosError=J,dn.Cancel=dn.CanceledError,dn.all=function(e){return Promise.all(e)},dn.spread=function(e){return function(t){return e.apply(null,t)}},dn.isAxiosError=function(e){return q.isObject(e)&&!0===e.isAxiosError},dn.mergeConfig=Zt,dn.AxiosHeaders=Pt,dn.formToJSON=e=>wt(q.isHTMLForm(e)?new FormData(e):e),dn.HttpStatusCode=un,dn.default=dn;var hn=dn;const{Axios:fn,AxiosError:pn,CanceledError:mn,isCancel:gn,CancelToken:yn,VERSION:bn,all:vn,Cancel:_n,isAxiosError:wn,spread:xn,toFormData:kn,AxiosHeaders:Cn,HttpStatusCode:In,formToJSON:En,mergeConfig:Sn}=hn;hn.defaults.baseURL="https://api.themoviedb.org/3";var Tn=new WeakMap;class Nn{async fetchMovieRating(e=1){try{this.BASEURL="https://api.themoviedb.org/3/trending/movie/day?";const t="&page="+e,n=await hn.get(`${this.BASEURL}${this.api_key}${t}`);return localStorage.setItem(this.STORAGE_PAGINATION_TYPE,"rating"),n}catch(e){console.log(e)}}async fetchGenresId(){this.BASEURLGENRES="https://api.themoviedb.org/3/genre/movie/list?";try{return(await hn.get(`${this.BASEURLGENRES}${this.api_key}`)).data.genres}catch(e){console.log(e)}}async fetchSearchId(e,t=1){this.STORAGE_TOTAL_PAGES="totalPages";try{const n=await hn.get(`https://api.themoviedb.org/3/search/movie?${this.api_key}&language=en-US&page=${t}&include_adult=false&query=${e}`);return localStorage.setItem(this.STORAGE_TOTAL_PAGES,n.data.total_pages),localStorage.setItem(this.STORAGE_PAGINATION_TYPE,"seach"),n.data.results}catch(e){console.log(e)}}async fetchTrailerById(t){const n=new URLSearchParams({api_key:e(o)(this,Tn)});return await fetch(`https://api.themoviedb.org/3/movie/${t}/videos?${n}`).then((e=>{if(!e.ok)throw new Error("Oops, there is no movie with that name");return e.json()}))}async fetchMovies(e="",t=1){this.BASEURL_MOVIES=`https://api.themoviedb.org/3/discover/movie?${this.api_key}&with_genres=`;try{const n=await hn.get(`${this.BASEURL_MOVIES}${e}&page=${t}`);return localStorage.setItem(this.STORAGE_PAGINATION_TYPE,"genres"),n}catch(e){console.log(e)}}constructor(){e(c)(this,Tn,{writable:!0,value:"faab19b092cac6c59a97dec233a38f4d"}),e(h)(this,"totalMovies",0),e(h)(this,"query",""),e(h)(this,"genres",[]),this.api_key="api_key=faab19b092cac6c59a97dec233a38f4d",this.STORAGE_PAGINATION_TYPE="paginationType"}}var Rn={};Rn=function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var l=void 0;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return r(t[s][1][e]||e)}),u,u.exports,e,t,n,i)}return n[s].exports}for(var o=void 0,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=r(o,"IMG"),a=r(o,"VIDEO"),l=r(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);var An={spinner:Rn.create('<div class="sk-chase">\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n    <div class="sk-chase-dot"></div>\n  </div>')};const On=document.querySelector(".films__list"),Ln=new Nn;let Pn,Dn,Mn,Un,Fn,Bn,zn,jn,Wn,qn,Hn,$n,Vn,Xn,Gn,Kn,Jn,Yn,Qn,Zn,ei,ti;!async function(){try{const e=await Ln.fetchGenresId();localStorage.setItem("genresId",JSON.stringify(e))}catch(e){console.log(e)}}(),async function(){try{An.spinner.show();const e=await Ln.fetchMovieRating();localStorage.setItem("totalPages",e.data.total_pages);const t=e.data.results;localStorage.setItem("storagePage",JSON.stringify(t)),function(e){const t="https://image.tmdb.org/t/p/w500/",n="https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d",i=localStorage.getItem("genresId"),r=JSON.parse(i),o=e.map((({id:e,poster_path:i,title:o,genre_ids:s,release_date:a})=>{let l=[];for(const e of r)s.includes(e.id)&&l.push(e.name);return`\n            <li class="films__card" data-id="${e}" id="film_card">\n<img class="films__img" src="${t}${i}" alt="${o}" loading="lazy" onerror="this.onerror=null; this.src='${n}';";"\n/>\n  <div class="films__desc">\n    <h3 class="films__title">${o}</h3>\n    <p class="films__genre">\n    ${l.slice(0,2).join(", ")}\n      <span>|</span>\n      ${a.slice(0,4)}\n    </p>\n  </div>\n</li>\n            `})).join("");On&&(On.innerHTML=o)}(t)}catch(e){console.log(e.message)}finally{An.spinner.close()}}();const ni=[];let ii,ri,oi,si,ai,li,ci,ui,di,hi,fi,pi={};var mi=e=>{var t;return Dn||function(e){let t,n;function i(e){const t=document.createElement("button");return t.className=e,t.innerHTML='<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>',t}function r(e,t){const n=document.createElement("button");return n.className="bp-lr",n.innerHTML='<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>',Si(n,t),n.onclick=t=>{t.stopPropagation(),yi(e)},n}const o=document.createElement("STYLE"),s=e&&e.overlayColor?e.overlayColor:"rgba(0,0,0,.7)";o.innerHTML=`#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:${s};opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}`,document.head.appendChild(o),Mn=document.createElement("DIV"),Mn.id="bp_container",Mn.onclick=Ii,Hn=i("bp-x"),Mn.appendChild(Hn),"ontouchend"in window&&window.visualViewport&&(hi=!0,Mn.ontouchstart=({touches:e,changedTouches:i})=>{n=e.length>1,t=i[0].pageX},Mn.ontouchend=({changedTouches:e})=>{if(ei&&!n&&window.visualViewport.scale<=1){let n=e[0].pageX-t;n<-30&&yi(1),n>30&&yi(-1)}});Fn=document.createElement("IMG"),Bn=document.createElement("VIDEO"),Bn.id="bp_vid",Bn.setAttribute("playsinline",!0),Bn.controls=!0,Bn.loop=!0,zn=document.createElement("audio"),zn.id="bp_aud",zn.controls=!0,zn.loop=!0,di=document.createElement("span"),di.id="bp_count",Kn=document.createElement("DIV"),Kn.id="bp_caption",Qn=i("bp-xc"),Qn.onclick=xi.bind(null,!1),Kn.appendChild(Qn),Jn=document.createElement("SPAN"),Kn.appendChild(Jn),Mn.appendChild(Kn),ai=r(1,"transform:scalex(-1)"),li=r(-1,"left:0;right:auto"),Gn=document.createElement("DIV"),Gn.id="bp_loader",Gn.innerHTML='<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>',jn=document.createElement("DIV"),jn.id="bp_sv",Wn=document.createElement("IFRAME"),Wn.setAttribute("allowfullscreen",!0),Wn.allow="autoplay; fullscreen",Wn.onload=()=>jn.removeChild(Gn),Si(Wn,"border:0;position:absolute;height:100%;width:100%;left:0;top:0"),jn.appendChild(Wn),Fn.onload=Ci,Fn.onerror=Ci.bind(null,"image"),window.addEventListener("resize",(()=>{ei||Vn&&wi(!0),Un===jn&&vi()})),document.addEventListener("keyup",(({keyCode:e})=>{27===e&&Zn&&Ii(),ei&&(39===e&&yi(1),37===e&&yi(-1),38===e&&yi(10),40===e&&yi(-10))})),document.addEventListener("keydown",(e=>{ei&&~[37,38,39,40].indexOf(e.keyCode)&&e.preventDefault()})),document.addEventListener("focus",(e=>{Zn&&!Mn.contains(e.target)&&(e.stopPropagation(),Hn.focus())}),!0),Dn=!0}(e),Vn&&(clearTimeout(Xn),Ei()),fi=e,$n=e.ytSrc||e.vimeoSrc,ri=e.animationStart,oi=e.animationEnd,si=e.onChangeImage,Pn=e.el,ii=!1,Yn=Pn.getAttribute("data-caption"),e.gallery?function(e,t){let n=fi.galleryAttribute||"data-bp";if(Array.isArray(e))ci=t||0,ui=e,Yn=e[ci].caption;else{ui=[].slice.call("string"==typeof e?document.querySelectorAll(`${e} [${n}]`):e);const i=ui.indexOf(Pn);ci=0===t||t?t:-1!==i?i:0,ui=ui.map((e=>({el:e,src:e.getAttribute(n),caption:e.getAttribute("data-caption")})))}ii=!0,qn=ui[ci].src,!~ni.indexOf(qn)&&wi(!0),ui.length>1?(Mn.appendChild(di),di.innerHTML=`${ci+1}/${ui.length}`,hi||(Mn.appendChild(ai),Mn.appendChild(li))):ui=!1;Un=Fn,Un.src=qn}(e.gallery,e.position):$n||e.iframeSrc?(Un=jn,function(){let e;const t="https://",n="autoplay=1";fi.ytSrc?e=`${t}www.youtube${fi.ytNoCookie?"-nocookie":""}.com/embed/${$n}?html5=1&rel=0&playsinline=1&${n}`:fi.vimeoSrc?e=`${t}player.vimeo.com/video/${$n}?${n}`:fi.iframeSrc&&(e=fi.iframeSrc);Si(Gn,""),jn.appendChild(Gn),Wn.src=e,vi(),setTimeout(Ci,9)}()):e.imgSrc?(ii=!0,qn=e.imgSrc,!~ni.indexOf(qn)&&wi(!0),Un=Fn,Un.src=qn):e.audio?(wi(!0),Un=zn,Un.src=e.audio,_i("audio file")):e.vidSrc?(wi(!0),e.dimensions&&Si(Bn,`width:${e.dimensions[0]}px`),t=e.vidSrc,Array.isArray(t)?(Un=Bn.cloneNode(),t.forEach((e=>{const t=document.createElement("SOURCE");t.src=e,t.type=`video/${e.match(/.(\w+)$/)[1]}`,Un.appendChild(t)}))):(Un=Bn,Un.src=t),_i("video")):(Un=Fn,Un.src="IMG"===Pn.tagName?Pn.src:window.getComputedStyle(Pn).backgroundImage.replace(/^url|[(|)|'|"]/g,"")),Mn.appendChild(Un),document.body.appendChild(Mn),{close:Ii,opts:fi,updateDimensions:vi,display:Un,next:()=>yi(1),prev:()=>yi(-1)}};function gi(){const{top:e,left:t,width:n,height:i}=Pn.getBoundingClientRect();return`transform:translate3D(${t-(Mn.clientWidth-n)/2}px, ${e-(Mn.clientHeight-i)/2}px, 0) scale3D(${Pn.clientWidth/Un.clientWidth}, ${Pn.clientHeight/Un.clientHeight}, 0)`}function yi(e){const t=ui.length-1;if(Vn)return;if(e>0&&ci===t||e<0&&!ci){if(!fi.loop)return Si(Fn,""),void setTimeout(Si,9,Fn,`animation:${e>0?"bpl":"bpf"} .3s;transition:transform .35s`);ci=e>0?-1:t+1}if(ci=Math.max(0,Math.min(ci+e,t)),[ci-1,ci,ci+1].forEach((e=>{if(e=Math.max(0,Math.min(e,t)),pi[e])return;const n=ui[e].src,i=document.createElement("IMG");i.addEventListener("load",ki.bind(null,n)),i.src=n,pi[e]=i})),pi[ci].complete)return bi(e);Vn=!0,Si(Gn,"opacity:.4;"),Mn.appendChild(Gn),pi[ci].onload=()=>{ei&&bi(e)},pi[ci].onerror=()=>{ui[ci]={error:"Error loading image"},ei&&bi(e)}}function bi(e){Vn&&(Mn.removeChild(Gn),Vn=!1);const t=ui[ci];if(t.error)alert(t.error);else{const n=Mn.querySelector("img:last-of-type");Fn=Un=pi[ci],Si(Fn,`animation:${e>0?"bpfl":"bpfr"} .35s;transition:transform .35s`),Si(n,`animation:${e>0?"bpfol":"bpfor"} .35s both`),Mn.appendChild(Fn),t.el&&(Pn=t.el)}di.innerHTML=`${ci+1}/${ui.length}`,xi(ui[ci].caption),si&&si([Fn,ui[ci]])}function vi(){let e,t;const n=.95*window.innerHeight,i=.95*window.innerWidth,r=n/i,[o,s]=fi.dimensions||[1920,1080],a=s/o;a>r?(e=Math.min(s,n),t=e/a):(t=Math.min(o,i),e=t*a),jn.style.cssText+=`width:${t}px;height:${e}px;`}function _i(e){~[1,4].indexOf(Un.readyState)?(Ci(),setTimeout((()=>{Un.play()}),99)):Un.error?Ci(e):Xn=setTimeout(_i,35,e)}function wi(e){fi.noLoader||(e&&Si(Gn,`top:${Pn.offsetTop}px;left:${Pn.offsetLeft}px;height:${Pn.clientHeight}px;width:${Pn.clientWidth}px`),Pn.parentElement[e?"appendChild":"removeChild"](Gn),Vn=e)}function xi(e){e&&(Jn.innerHTML=e),Si(Kn,"opacity:"+(e?"1;pointer-events:auto":"0"))}function ki(e){!~ni.indexOf(e)&&ni.push(e)}function Ci(e){if(Vn&&wi(),ri&&ri(),"string"==typeof e)return Ei(),fi.onError?fi.onError():alert(`Error: The requested ${e} could not be loaded.`);ii&&ki(qn),Un.style.cssText+=gi(),Si(Mn,"opacity:1;pointer-events:auto"),oi&&(oi=setTimeout(oi,410)),Zn=!0,ei=!!ui,setTimeout((()=>{Un.style.cssText+="transition:transform .35s;transform:none",Yn&&setTimeout(xi,250,Yn)}),60)}function Ii(e){const t=e?e.target:Mn,n=[Kn,Qn,Bn,zn,Jn,li,ai,Gn];t.blur(),ti||~n.indexOf(t)||(Un.style.cssText+=gi(),Si(Mn,"pointer-events:auto"),setTimeout(Ei,350),clearTimeout(oi),Zn=!1,ti=!0)}function Ei(){if((Un===jn?Wn:Un).removeAttribute("src"),document.body.removeChild(Mn),Mn.removeChild(Un),Si(Mn,""),Si(Un,""),xi(!1),ei){const e=Mn.querySelectorAll("img");for(let t=0;t<e.length;t++)Mn.removeChild(e[t]);Vn&&Mn.removeChild(Gn),Mn.removeChild(di),ei=ui=!1,pi={},hi||Mn.removeChild(ai),hi||Mn.removeChild(li),Fn.onload=Ci,Fn.onerror=Ci.bind(null,"image")}fi.onClose&&fi.onClose(),ti=Vn=!1}function Si({style:e},t){e.cssText=t}function Ti(e,t){try{t.fetchTrailerById(e).then((e=>{const t=e.results,n=document.querySelector(".button--trailer");if(t.length>0){n.classList.remove("is-hidden");const e=t.find((e=>"Official Trailer"===e.name||e.name.includes("Official")||e.name[0])).key;n.addEventListener("click",(function(t){mi({el:t.target,ytSrc:`${e}`})}))}else n.innerHTML="Trailer Not Found"}))}catch{}}var Ni,Ri=/^\s+|\s+$/g,Ai=/^[-+]0x[0-9a-f]+$/i,Oi=/^0b[01]+$/i,Li=/^0o[0-7]+$/i,Pi=parseInt,Di="object"==typeof t&&t&&t.Object===Object&&t,Mi="object"==typeof self&&self&&self.Object===Object&&self,Ui=Di||Mi||Function("return this")(),Fi=Object.prototype.toString,Bi=Math.max,zi=Math.min,ji=function(){return Ui.Date.now()};function Wi(e,t,n){var i,r,o,s,a,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,o=r;return i=r=void 0,c=t,s=e.apply(o,n)}function p(e){return c=e,a=setTimeout(g,t),u?f(e):s}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=ji();if(m(e))return y(e);a=setTimeout(g,function(e){var n=t-(e-l);return d?zi(n,o-(e-c)):n}(e))}function y(e){return a=void 0,h&&i?f(e):(i=r=void 0,s)}function b(){var e=ji(),n=m(e);if(i=arguments,r=this,l=e,n){if(void 0===a)return p(l);if(d)return a=setTimeout(g,t),f(l)}return void 0===a&&(a=setTimeout(g,t)),s}return t=Hi(t)||0,qi(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Bi(Hi(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=r=a=void 0},b.flush=function(){return void 0===a?s:y(ji())},b}function qi(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Hi(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Fi.call(e)}(e))return NaN;if(qi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=qi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ri,"");var n=Oi.test(e);return n||Li.test(e)?Pi(e.slice(2),n?2:8):Ai.test(e)?NaN:+e}Ni=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return qi(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Wi(e,t,{leading:i,maxWait:t,trailing:r})};const $i={disabledScroll(){document.body.style.cssText=`\n    overflow: hidden;\n    position: fixed;\n    top: 0;\n    left:0;\n    height: 100vh;\n    width: 100vw;\n    padding-right: ${window.innerWidth-document.body.offsetWidth}px`},enabledScroll(){document.body.style.cssText="\n    position: relative;",window.scroll({top:$i.scrollPosition})}},Vi=new Nn,Xi=document.querySelector(".films__list"),Gi=document.querySelector(".renderModal"),Ki=localStorage.getItem("watched"),Ji=(JSON.parse(Ki),localStorage.getItem("queue")),Yi=(JSON.parse(Ji||"[]"),document.querySelector(".backdrop"));let Qi=[];function Zi(e){if("films__list"===e.target.className||"films-library__list"===e.target.className)return;document.addEventListener("keydown",(e=>{"Escape"===e.key&&(Yi.classList.add("isHidden"),Qi=[])})),$i.disabledScroll();let t=e.srcElement;for(;"film_card"!=t.id;)t=t.parentElement;Ti(t.dataset.id,Vi),Yi.classList.remove("isHidden");const n=localStorage.getItem("storagePage"),i=JSON.parse(n);for(let t=0;t<i.length;t+=1)if(i[t],i[t].title===e.target.alt||i[t].title===e.target.textContent||i[t].title===e.target.parentElement.children[0].textContent){Qi.push(i[t]);const e=localStorage.getItem("genresId"),n=JSON.parse(e),r=Qi.map((({id:e,poster_path:t,vote_average:i,vote_count:r,title:o,popularity:s,genre_ids:a,overview:l})=>{let c=[];for(const e of n)a.includes(e.id)&&c.push(e.name);return localStorage.setItem("current-film-id",e),`<div class="film-modal film-modal-dark" >\n  <button\n    class="film-modal__btn-icon"\n    data-modal-close-p\n    type="button"\n    id="btnClose"\n  >\n  </button>\n  <div class="film-modal__thumb">\n    <img class="film-modal__img" src="https://image.tmdb.org/t/p/w500/${t}" alt="${o}" onerror="this.onerror=null; this.src='https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d';"/>\n  </div>\n  <div class="film-modal__info-container">\n    <h2 class="film-modal__title film-modal__title-dark">${o}</h2>\n    <table class="film-modal__table">\n      <tbody class="film-modal__cell1 film-modal__cell1-dark">\n        <tr>\n          <td class="film-modal__cell film-modal__modal-text film-modal__cell-dark">Vote / Votes</td>\n          <td class="film-modal__cell film-modal__modal-text">\n            <span class="film-modal__span film-modal__span-vote film-modal__span-dark">${i.toFixed(1)}</span> /\n            <span class="film-modal__span film-modal__span--votes ">${r}</span>\n          </td>\n        </tr>\n        <tr>\n          <td class="film-modal__cell film-modal__modal-text">Popularity</td>\n          <td class="film-modal__cell film-modal__modal-text--popularity film-modal__cell1-dark">\n            ${s}\n          </td>\n        </tr>\n        <tr>\n          <td class="film-modal__cell film-modal__modal-text">\n            Original Title\n          </td>\n          <td class="film-modal__cell film-modal__modal-text--original">\n            ${o}\n          </td>\n        </tr>\n        <tr>\n          <td class="film-modal__cell film-modal__modal-text">Genre</td>\n          <td class="film-modal__cell film-modal__modal-text--genre film-modal__cell1-dark">\n            ${c.join(", ")}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button type='button' class='btn modal__btn modal__btn-dark button--trailer'>\n    <img\n      class='img-trailer'\n      src=''\n      id='btntrailer'\n    />START TRAILER</button>\n\n    <h3 class="film-modal__subtitle">ABOUT</h3>\n    <p class="fil-modal__text fil-modal__text-dark">${l}</p>\n    <ul class="film-modal__btn-list">\n      <li class="film-modal__btn-item">\n        <button class="btn modal__btn modal__btn-dark" type="button" data-action="watch">\n          ADD TO WATCHED\n        </button>\n      </li>\n      <li class="film-modal__btn-item">\n        <button class=" btn modal__btn modal__btn-dark" type="" data-action="queue">\n          ADD TO QUEUE\n        </button>\n      </li>\n    </ul>\n  </div>\n</div>`})).join("");Gi.innerHTML=r;document.querySelector("#btnClose").addEventListener("click",er);const o=document.querySelector('button[data-action="queue"]');tr(),o.addEventListener("click",ir);const s=document.querySelector('button[data-action="watch"]');nr(),s.addEventListener("click",rr)}}function er(e){Yi.classList.add("isHidden"),Qi=[]}function tr(){if(null==localStorage.getItem("queue"))return;let e=JSON.parse(localStorage.getItem("queue")||[]),t=JSON.parse(localStorage.getItem("current-film-id"));if(e.find((e=>e.id===t))){document.querySelector('button[data-action="queue"]').textContent="DELETE FROM QUEUE"}}function nr(){if(null==localStorage.getItem("watched"))return;let e=JSON.parse(localStorage.getItem("watched")||[]),t=JSON.parse(localStorage.getItem("current-film-id"));if(e.find((e=>e.id===t))){document.querySelector('button[data-action="watch"]').textContent="DELETE FROM WATCHED"}}function ir(){const e=document.querySelector('button[data-action="queue"]');if("ADD TO QUEUE"===e.textContent.trim()){let t=JSON.parse(localStorage.getItem("storagePage")),n=JSON.parse(localStorage.getItem("current-film-id"));if(null==localStorage.getItem("queue")){let i=t.filter((e=>e.id===n));return localStorage.setItem("queue",JSON.stringify(i)),e.textContent="DELETE FROM QUEUE",void pr()}let i=JSON.parse(localStorage.getItem("queue")),r=t.filter((e=>e.id===n));i.push(r[0]),localStorage.setItem("queue",JSON.stringify(i)),e.textContent="DELETE FROM QUEUE"}else{let t=JSON.parse(localStorage.getItem("queue")),n=JSON.parse(localStorage.getItem("current-film-id"));const i=t.findIndex((e=>e.id===n));t.splice(i,1);e.textContent="ADD TO QUEUE",localStorage.setItem("queue",JSON.stringify(t)),pr()}}function rr(){const e=document.querySelector('button[data-action="watch"]');if("ADD TO WATCHED"===e.textContent.trim()){let t=JSON.parse(localStorage.getItem("storagePage")),n=JSON.parse(localStorage.getItem("current-film-id"));if(null==localStorage.getItem("watched")){let i=t.filter((e=>e.id===n));return localStorage.setItem("watched",JSON.stringify(i)),e.textContent="DELETE FROM WATCHED",void fr()}let i=JSON.parse(localStorage.getItem("watched")),r=t.filter((e=>e.id===n));i.push(r[0]),localStorage.setItem("watched",JSON.stringify(i)),e.textContent="DELETE FROM WATCHED"}else{let t=JSON.parse(localStorage.getItem("watched")),n=JSON.parse(localStorage.getItem("current-film-id"));const i=t.findIndex((e=>e.id===n));t.splice(i,1);e.textContent="ADD TO WATCHED",localStorage.setItem("watched",JSON.stringify(t)),fr()}}Xi&&Xi.addEventListener("click",Zi),Yi.addEventListener("click",(function(e){if($i.enabledScroll(),"backdrop"!==e.target.classList[0])return;Yi.classList.add("isHidden"),Qi=[]}));const or=document.querySelector(".film-modal");window.addEventListener("scroll",e(Ni)((function(){window.scrollY>150&&(or.classList.add("transitionBtn"),or.classList.remove("is-hidden-button"));window.scrollY<150&&or.classList.add("is-hidden-button")}),150)),or.addEventListener("click",(function(){window.scrollTo(100,100,"smooth")}));var sr,ar,lr={};sr=void 0===t?"undefined"==typeof window?lr:window:t,ar=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,o,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",u="Warning",d="Info",h={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},f="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",v="Ask",_="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},x="Standard",k="Hourglass",C="Circle",I="Arrows",E="Dots",S="Pulse",T="Custom",N="Notiflix",R={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",O="Hourglass",L="Circle",P="Arrows",D="Dots",M="Pulse",U={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},F=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},B=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},z=function(t){return t||(t="head"),null!==e.document[t]||(F('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},j=function(t,n){if(!z("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?W(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},q=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,o){if(!z("body"))return!1;t||le.Notify.init({});var s=W(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),t=W(!0,t,f)}var p=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=q(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(h.wrapID)||e.document.createElement("div");if(m.id=h.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(h.overlayID)||e.document.createElement("div");g.id=h.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(h.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(h.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+p.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+a,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var b="";if(t.closeButton&&"function"!=typeof r&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"");else{var v="";n===l?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===c?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===d&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?b:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?b:"");if("left-bottom"===t.position||"right-bottom"===t.position){var _=e.document.getElementById(h.wrapID);_.insertBefore(y,_.firstChild)}else e.document.getElementById(h.wrapID).appendChild(y);var w=e.document.getElementById(y.id);if(w){var x,k,C=function(){w.classList.add("nx-remove");var t=e.document.getElementById(h.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(x)},I=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(h.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(k)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof r&&r(),C();var e=setTimeout((function(){I(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var E=function(){x=setTimeout((function(){C()}),t.timeout),k=setTimeout((function(){I()}),t.timeout+t.cssAnimationDuration)};E(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(x),clearTimeout(k)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),E()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var S,T=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),N=0;N<T.length;N++)null!==(S=T[N]).parentNode&&S.parentNode.removeChild(S);t=W(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,o,s,l){if(!z("body"))return!1;n||le.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var u={};"object"==typeof s?u=s:"object"==typeof l&&(u=l),c=W(!0,n,{}),n=W(!0,n,u)}var d=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===f?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=q(i),r=q(r),o=q(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=y.ID,h.className=n.className,h.style.zIndex=n.zindex,h.style.borderRadius=n.borderRadius,h.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.display="flex",h.style.flexWrap="wrap",h.style.flexDirection="column",h.style.alignItems="center",h.style.justifyContent="center";var b="",v=!0===n.backOverlayClickToClose;n.backOverlay&&(b='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(d.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var _,w,x="";if(t===f?(_=n.svgSize,w=d.svgColor,_||(_="110px"),w||(w="#32c682"),x='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+_+'" height="'+_+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===p?x=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):t===m?x=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):t===g&&(x=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor)),h.innerHTML=b+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+x+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+d.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+d.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+d.buttonBackground+"; color:"+d.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var k=function(){var t=e.document.getElementById(h.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),k()})),b&&v&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){k()}))}n=W(!0,n,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,o,s,l,c,u,d){if(!z("body"))return!1;i||le.Confirm.init({});var h=W(!0,i,{});"object"!=typeof d||Array.isArray(d)||(i=W(!0,i,d)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=q(n),r=q(r),s=q(s),l=q(l)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonsMaxLength&&(s=s.substring(0,i.buttonsMaxLength)+"..."),l.length>i.buttonsMaxLength&&(l=l.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=w.ID,f.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),f.style.zIndex=i.zindex,f.style.padding=i.distance,i.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";f.classList.add("nx-position-"+p),f.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+l+"</a>");var y="",b=null,x=void 0;if(t===v||t===_){b=o||"";var k=t===v||200<b.length?Math.ceil(1.5*b.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===_?'value="'+b+'"':"")+' maxlength="'+k+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(f.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var C=e.document.getElementById(f.id),I=e.document.getElementById("NXConfirmButtonOk"),E=e.document.getElementById("NXConfirmValidationInput");E&&(E.focus(),E.setSelectionRange(0,(E.value||"").length),E.addEventListener("keyup",(function(e){var n=e.target.value;t===v&&n!==b?(e.preventDefault(),E.classList.add("nx-validation-failure"),E.classList.remove("nx-validation-success")):(t===v&&(E.classList.remove("nx-validation-failure"),E.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&I.dispatchEvent(new Event("click")))}))),I.addEventListener("click",(function(e){if(t===v&&b&&E){if((E.value||"").toString()!==b)return E.focus(),E.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;E.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===_&&E&&(x=E.value||""),c(x)),C.classList.add("nx-remove");var n=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===_&&E&&(x=E.value||""),u(x)),C.classList.add("nx-remove");var e=setTimeout((function(){null!==C.parentNode&&(C.parentNode.removeChild(C),clearTimeout(e))}),i.cssAnimationDuration)}))}i=W(!0,i,h)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,o,s){if(!z("body"))return!1;r||le.Loading.init({});var l=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var c={};"object"==typeof n?c=n:"object"==typeof i&&(c=i),r=W(!0,r,c)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var d="";0<(u=u.length>r.messageMaxLength?q(u).toString().substring(0,r.messageMaxLength)+"...":q(u).toString()).length&&(d='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var h="";if(t===x)h=H(r.svgSize,r.svgColor);else if(t===k)h=$(r.svgSize,r.svgColor);else if(t===C)h=V(r.svgSize,r.svgColor);else if(t===I)h=X(r.svgSize,r.svgColor);else if(t===E)h=G(r.svgSize,r.svgColor);else if(t===S)h=K(r.svgSize,r.svgColor);else if(t===T&&null!==r.customSvgCode&&null===r.customSvgUrl)h=r.customSvgCode||"";else if(t===T&&null!==r.customSvgUrl&&null===r.customSvgCode)h='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===T&&(null===r.customSvgUrl||null===r.customSvgCode))return F('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;h=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var f=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=e.innerWidth,m=f>=p?p-40+"px":f+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+h+"</div>",y=e.document.createElement("div");y.id=R.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+d,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(R.ID))var b=e.document.getElementById(R.ID),v=setTimeout((function(){b.classList.add("nx-remove");var e=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(v)}),s);r=W(!0,r,l)},oe=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},se=0,ae=function(t,n,i,r,s,l){var c;if(Array.isArray(i)){if(1>i.length)return F("Array of HTMLElements should contains at least one HTMLElement."),!1;c=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return F("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return F("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return F('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;c=u}o||le.Block.init({});var d=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var h={};"object"==typeof r?h=r:"object"==typeof s&&(h=s),o=W(!0,o,h)}var f="";"string"==typeof r&&0<r.length&&(f=r),o.cssAnimation||(o.cssAnimationDuration=0);var p=U.className;"string"==typeof o.className&&(p=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,y="nx-block-temporary-position";if(t){for(var b,v=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],_=0;_<g;_++)if(b=c[_]){if(-1<v.indexOf(b.tagName.toLocaleLowerCase("en")))break;var w=b.querySelectorAll("[id^="+U.ID+"]");if(1>w.length){var x="";n&&(x=n===O?$(o.svgSize,o.svgColor):n===L?V(o.svgSize,o.svgColor):n===P?X(o.svgSize,o.svgColor):n===D?G(o.svgSize,o.svgColor):n===M?K(o.svgSize,o.svgColor):H(o.svgSize,o.svgColor));var k='<span class="'+p+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+x+"</span>",C="";0<f.length&&(f=f.length>o.messageMaxLength?q(f).substring(0,o.messageMaxLength)+"...":q(f),C='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+p+'-message">'+f+"</span>"),se++;var I=e.document.createElement("div");I.id=U.ID+"-"+se,I.className=p+(o.cssAnimation?" nx-with-animation":""),I.style.position=o.position,I.style.zIndex=o.zindex,I.style.background=o.backgroundColor,I.style.animationDuration=o.cssAnimationDuration+"ms",I.style.fontFamily='"'+o.fontFamily+'", '+a,I.style.display="flex",I.style.flexWrap="wrap",I.style.flexDirection="column",I.style.alignItems="center",I.style.justifyContent="center",o.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.innerHTML=k+C;var E,S=e.getComputedStyle(b).getPropertyValue("position"),T="string"==typeof S?S.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(o.svgSize))+40,R="";N>(b.offsetHeight||0)&&(R="min-height:"+N+"px;"),E=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var A="",j=-1>=["absolute","relative","fixed","sticky"].indexOf(T);if(j||0<R.length){if(!z("head"))return!1;j&&(A="position:relative!important;");var J='<style id="Style-'+U.ID+"-"+se+'">'+E+"."+y+"{"+A+R+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var Q=Y.createContextualFragment(J);e.document.head.appendChild(Q),b.classList.add(y)}b.appendChild(I)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else B("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+U.ID+"]"),ee(w));clearTimeout(ne)}),l);o=W(!0,o,d)},le={Notify:{init:function(e){t=W(!0,h,e),j(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(F("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(l,e,t,n)},failure:function(e,t,n){Q(c,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(d,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),j(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(F("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(f,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(p,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=W(!0,w,e),j(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(F("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,o,s){ne(b,e,t,null,n,i,r,o,s)},ask:function(e,t,n,i,r,o,s,a){ne(v,e,t,n,i,r,o,s,a)},prompt:function(e,t,n,i,r,o,s,a){ne(_,e,t,n,i,r,o,s,a)}},Loading:{init:function(e){r=W(!0,R,e),j(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(F("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(x,e,t,!0,0)},hourglass:function(e,t){re(k,e,t,!0,0)},circle:function(e,t){re(C,e,t,!0,0)},arrows:function(e,t){re(I,e,t,!0,0)},dots:function(e,t){re(E,e,t,!0,0)},pulse:function(e,t){re(S,e,t,!0,0)},custom:function(e,t){re(T,e,t,!0,0)},notiflix:function(e,t){re(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(R.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?q(t).substring(0,r.messageMaxLength)+"...":q(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else F("Where is the new message?")}(t)}},Block:{init:function(e){o=W(!0,U,e),j(oe,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(F('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ae(!0,A,e,t,n)},hourglass:function(e,t,n){ae(!0,O,e,t,n)},circle:function(e,t,n){ae(!0,L,e,t,n)},arrows:function(e,t,n){ae(!0,P,e,t,n)},dots:function(e,t,n){ae(!0,D,e,t,n)},pulse:function(e,t,n){ae(!0,M,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ae(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return ar(sr)})):"object"==typeof lr?lr=ar(sr):sr.Notiflix=ar(sr);const cr=document.querySelector(".js-btn__watched"),ur=document.querySelector(".js-btn__queue"),dr=document.querySelector(".films-library__list"),hr=document.querySelector(".pagination-container");function fr(t=1){const n=localStorage.getItem("watched"),i=JSON.parse(n||"[]"),r=localStorage.getItem("genresId"),o=JSON.parse(r),s=20*(t-1),a=i.slice(s,s+20);localStorage.setItem("pseudoPaginationType","wached"),localStorage.setItem("totalPages",Math.ceil(i.length/20));const l=a.map((({id:e,poster_path:t,title:n,genre_ids:i,release_date:r})=>{let s=[];for(const e of o)i.includes(e.id)&&s.push(e.name);return`<li class="films__card" data-id="${e}" id="film_card">\n<img class="films__img" src="https://image.tmdb.org/t/p/w500/${t}" alt="${n}" loading="lazy" onerror="this.onerror=null; this.src='https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d';";"\n/>\n  <div class="films__desc">\n    <h3 class="films__title">${n}</h3>\n    <p class="films__genre">\n    ${s.slice(0,2).join(", ")}\n      <span>|</span>\n      ${r.slice(0,4)}\n    </p>\n  </div>\n</li>\n`})).join("");l||(console.log("Hello!"),e(lr).Notify.info("Додайте сюди Ваш перший фільм!")),dr&&(dr.innerHTML=l)}function pr(t=1){const n=localStorage.getItem("queue"),i=JSON.parse(n||"[]"),r=localStorage.getItem("genresId"),o=JSON.parse(r),s=20*(t-1),a=i.slice(s,s+20).map((({id:e,poster_path:t,title:n,genre_ids:i,release_date:r})=>{let s=[];for(const e of o)i.includes(e.id)&&s.push(e.name);return`\n            <li class="films__card" data-id="${e}" id="film_card">\n<img class="films__img" src="https://image.tmdb.org/t/p/w500/${t}" alt="${n}" loading="lazy" onerror="this.onerror=null; this.src='https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d';";"\n/>\n  <div class="films__desc">\n    <h3 class="films__title">${n}</h3>\n    <p class="films__genre">\n    ${s.slice(0,2).join(", ")}\n      <span>|</span>\n      ${r.slice(0,4)}\n    </p>\n  </div>\n</li>\n            `})).join("");a||(console.log("Hello!"),e(lr).Notify.info("Додайте сюди Ваш перший фільм!")),dr.innerHTML=a}localStorage.setItem("pseudoPaginationType","wached"),ur&&(setTimeout((()=>{const e=localStorage.getItem("watched"),t=JSON.parse(e||"[]");localStorage.setItem("pseudoPaginationType","wached"),localStorage.setItem("totalPages",Math.ceil(t.length/20));let n=new Event("reset");hr.dispatchEvent(n)}),0),fr(),ur.addEventListener("click",(e=>{const t=localStorage.getItem("queue"),n=JSON.parse(t||"[]");localStorage.setItem("pseudoPaginationType","queue"),localStorage.setItem("totalPages",Math.ceil(n.length/20));let i=new Event("reset");hr.dispatchEvent(i),cr.classList.remove("isActive")||ur.classList.add("isActive")||pr()})),cr.addEventListener("click",(e=>{const t=localStorage.getItem("watched"),n=JSON.parse(t||"[]");localStorage.setItem("pseudoPaginationType","wached"),localStorage.setItem("totalPages",Math.ceil(n.length/20));let i=new Event("reset");hr.dispatchEvent(i),fr(),"isActive"!==cr.classList[3]&&(cr.classList.add("isActive")||ur.classList.remove("isActive"))}))),dr&&dr.addEventListener("click",Zi);const mr=document.querySelector(".js-modal-open"),gr=document.querySelector(".js-modal-close"),yr=document.querySelector(".js-modal-team");function br(){yr.classList.toggle("is-hidden")}function vr(){br(),gr.removeEventListener("click",vr),document.body.removeAttribute("style")}function _r(e){e.currentTarget===e.target&&(document.body.removeAttribute("style"),br(),document.removeEventListener("keydown",wr),yr.removeEventListener("click",_r))}function wr(e){"Escape"==e.code&&(br(),document.removeEventListener("keydown",wr),gr.removeEventListener("click",vr),yr.removeEventListener("click",_r))}mr.addEventListener("click",(function(e){e.preventDefault(),br(),document.addEventListener("keydown",wr),document.body.style.overflow="hidden",gr.addEventListener("click",vr),yr.addEventListener("click",_r)}));const xr=new Nn,kr=document.querySelector(".search-form"),Cr=document.querySelector(".search-form__input"),Ir=document.querySelector(".films__list"),Er=document.querySelector(".pagination-container"),Sr=document.querySelector(".bad-request");function Tr(){const e=JSON.parse(localStorage.getItem("genresId")),t=JSON.parse(localStorage.getItem("storagePage"));let n="";t.forEach((t=>{let i=[];t.genre_ids.forEach((t=>{const n=e.filter((e=>e.id===t));i.push(n[0].name)})),n+=`\n        <li class="films__card" data-id="${t.id}" id="film_card">\n            <img class="films__img" src="https://image.tmdb.org/t/p/w500/${t.poster_path}" alt="${t.title}" loading="lazy" onerror="this.onerror=null; this.src='https://i.scdn.co/image/ab67616d0000b273d9495d198c584e0e64f3ad9d';" />\n            <div class="films__desc">\n                <h3 class="films__title">${t.title}</h3>\n                <p class="films__genre">\n                    ${i.slice(0,2).join(", ")}\n                    <span>|</span>\n                    ${t.release_date.slice(0,4)}\n                </p>\n            </div>\n        </li>`})),Ir.innerHTML=n}kr&&(kr.addEventListener("submit",(async function(e){e.preventDefault(),Sr.innerHTML="";const t=Cr.value.trim();if(!t)return;An.spinner.show(),buttonList=document.querySelectorAll(".tag"),buttonList.forEach((e=>{e.classList.remove("tag--active")}));const n=await xr.fetchSearchId(t);if(n.length>0){localStorage.setItem("currentRequest",t),localStorage.setItem("storagePage",JSON.stringify(n));let e=new Event("reset");Er.dispatchEvent(e),Tr()}else Sr.innerHTML="Search result not successful. Enter the correct movie name and try again.",console.log("Search result not successful. Enter the correct movie name and try again.");An.spinner.close()})),Cr.value="");const Nr=new Nn;async function Rr(e){const t=localStorage.getItem("paginationType"),n=localStorage.getItem("pseudoPaginationType");!!document.querySelector(".js-btn__queue")?"wached"===n?fr(e):pr(e):"seach"===t?await async function(e){const t=localStorage.getItem("currentRequest"),n=await Nr.fetchSearchId(t,e);localStorage.setItem("storagePage",JSON.stringify(n)),Tr()}(e):"rating"===t?await async function(e){const t=(await Nr.fetchMovieRating(e)).data.results;localStorage.setItem("storagePage",JSON.stringify(t)),Tr()}(e):"genres"===t?await async function(e){const t=localStorage.getItem("genresList"),n=(await Nr.fetchMovies(t,e)).data.results;localStorage.setItem("storagePage",JSON.stringify(n)),Tr()}(e):console.log("Unknown pagination type!")}const Ar=document.querySelector('[data-index="1"]'),Or=document.querySelector('[data-index="2"]'),Lr=document.querySelector('[data-index="3"]'),Pr=document.querySelector('[data-index="4"]'),Dr=document.querySelector('[data-index="5"]'),Mr=document.querySelector(".first-btn"),Ur=document.querySelector(".last-btn"),Fr=document.querySelector(".pagination-container"),Br=document.querySelector(".arrow-right"),zr=document.querySelector(".arrow-left"),jr=document.querySelector("#previous"),Wr=document.querySelector("#after");Fr.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){let t=Number(localStorage.getItem("totalPages"));Ur.textContent=t,Number(e.target.textContent)&&(qr=Number(e.target.textContent)),jr.style.display="none",Wr.style.display="none",e.target.classList.contains("pagin-btn")&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&qr<t&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.classList.add("pagination--current"),Ar.textContent=Number(Ar.textContent)+5,Or.textContent=Number(Or.textContent)+5,Lr.textContent=Number(Lr.textContent)+5,Pr.textContent=Number(Pr.textContent)+5,Dr.textContent=Number(Dr.textContent)+5,qr=Ar.textContent,function(e){e-Number(qr)<5&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=Number(Ur.textContent)-4,Or.textContent=Number(Ur.textContent)-3,Lr.textContent=Number(Ur.textContent)-2,Pr.textContent=Number(Ur.textContent)-1,Dr.textContent=Ur.textContent,Dr.classList.add("pagination--current"),qr=Dr.textContent,Br.style.display="none",Wr.style.display="none",Ur.style.display="none")}(t)),e.target.classList.contains("arrow-left")&&qr>=5&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=Number(Ar.textContent)-5,Or.textContent=Number(Or.textContent)-5,Lr.textContent=Number(Lr.textContent)-5,Pr.textContent=Number(Pr.textContent)-5,Dr.textContent=Number(Dr.textContent)-5,Dr.classList.add("pagination--current"),qr=Dr.textContent,Number(Ar.textContent)<1&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=1,Or.textContent=2,Lr.textContent=3,Pr.textContent=4,Dr.textContent=5,Ar.classList.add("pagination--current"),qr=Dr.textContent,zr.style.display="none",jr.style.display="none",Mr.style.display="none")),e.target.classList.contains("first-btn")&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=1,Or.textContent=2,Lr.textContent=3,Pr.textContent=4,Dr.textContent=5,Ar.classList.add("pagination--current"),qr=Ar.textContent,zr.style.display="none",jr.style.display="none",Mr.style.display="none"),e.target.classList.contains("last-btn")&&(Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=Number(Ur.textContent)-4,Or.textContent=Number(Ur.textContent)-3,Lr.textContent=Number(Ur.textContent)-2,Pr.textContent=Number(Ur.textContent)-1,Dr.textContent=Ur.textContent,Dr.classList.add("pagination--current"),qr=Dr.textContent,Br.style.display="none",Wr.style.display="none",Ur.style.display="none"),Number(qr)>5?(zr.style.display="inline",jr.style.display="inline",Mr.style.display="inline"):(zr.style.display="none",jr.style.display="none",Mr.style.display="none"),Number(qr)<t-4&&(Br.style.display="inline",Wr.style.display="inline",Ur.style.display="inline"),Rr(qr),window.scrollTo({top:0,behavior:"smooth"})}})),Fr.addEventListener("reset",(function(e){Wr.style.display="inline",Br.style.display="inline",Ur.style.display="inline",Or.style.display="inline",Lr.style.display="inline",Pr.style.display="inline",Dr.style.display="inline",Hr.forEach((e=>e.classList.remove("pagination--current"))),Ar.textContent=1,Or.textContent=2,Lr.textContent=3,Pr.textContent=4,Dr.textContent=5,Ar.classList.add("pagination--current"),qr=Ar.textContent,zr.style.display="none",jr.style.display="none",Mr.style.display="none";const t=Number(localStorage.getItem("totalPages"));Ur.textContent=t,t<7&&function(e){Wr.style.display="none",Br.style.display="none",e<6&&(Ur.style.display="none");e<5&&(Dr.style.display="none");e<4&&(Pr.style.display="none");e<3&&(Lr.style.display="none");e<2&&(Or.style.display="none")}(t)}));let qr=1,Hr=document.querySelectorAll(".pagin-btn");jr.style.display="none",zr.style.display="none",Mr.style.display="none";var $r,Vr,Xr,Gr=$r={};function Kr(){throw new Error("setTimeout has not been defined")}function Jr(){throw new Error("clearTimeout has not been defined")}function Yr(e){if(Vr===setTimeout)return setTimeout(e,0);if((Vr===Kr||!Vr)&&setTimeout)return Vr=setTimeout,setTimeout(e,0);try{return Vr(e,0)}catch(t){try{return Vr.call(null,e,0)}catch(t){return Vr.call(this,e,0)}}}!function(){try{Vr="function"==typeof setTimeout?setTimeout:Kr}catch(e){Vr=Kr}try{Xr="function"==typeof clearTimeout?clearTimeout:Jr}catch(e){Xr=Jr}}();var Qr,Zr=[],eo=!1,to=-1;function no(){eo&&Qr&&(eo=!1,Qr.length?Zr=Qr.concat(Zr):to=-1,Zr.length&&io())}function io(){if(!eo){var e=Yr(no);eo=!0;for(var t=Zr.length;t;){for(Qr=Zr,Zr=[];++to<t;)Qr&&Qr[to].run();to=-1,t=Zr.length}Qr=null,eo=!1,function(e){if(Xr===clearTimeout)return clearTimeout(e);if((Xr===Jr||!Xr)&&clearTimeout)return Xr=clearTimeout,clearTimeout(e);try{Xr(e)}catch(t){try{return Xr.call(null,e)}catch(t){return Xr.call(this,e)}}}(e)}}function ro(e,t){this.fun=e,this.array=t}function oo(){}Gr.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Zr.push(new ro(e,t)),1!==Zr.length||eo||Yr(io)},ro.prototype.run=function(){this.fun.apply(null,this.array)},Gr.title="browser",Gr.browser=!0,Gr.env={},Gr.argv=[],Gr.version="",Gr.versions={},Gr.on=oo,Gr.addListener=oo,Gr.once=oo,Gr.off=oo,Gr.removeListener=oo,Gr.removeAllListeners=oo,Gr.emit=oo,Gr.prependListener=oo,Gr.prependOnceListener=oo,Gr.listeners=function(e){return[]},Gr.binding=function(e){throw new Error("process.binding is not supported")},Gr.cwd=function(){return"/"},Gr.chdir=function(e){throw new Error("process.chdir is not supported")},Gr.umask=function(){return 0};
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
const so=!1,ao=!1,lo="${JSCORE_VERSION}",co=function(e,t){if(!e)throw uo(t)},uo=function(e){return new Error("Firebase Database ("+lo+") INTERNAL ASSERT FAILED: "+e)},ho=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),i.push(n[c],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ho(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw Error();const l=r<<2|o>>4;if(i.push(l),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},po=function(e){const t=ho(e);return fo.encodeByteArray(t,!0)},mo=function(e){return po(e).replace(/\./g,"")},go=function(e){try{return fo.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function yo(e){return bo(void 0,e)}function bo(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=bo(e[n],t[n]));return e}
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
const vo=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_o=()=>{try{return vo()||(()=>{if(void 0===$r||void 0===$r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&go(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},wo=e=>{var t,n;return null===(n=null===(t=_o())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},xo=e=>{const t=wo(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},ko=e=>{var t;return null===(t=_o())||void 0===t?void 0:t[`_${e}`]};
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
class Co{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function Io(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[mo(JSON.stringify({alg:"none",type:"JWT"})),mo(JSON.stringify(o)),""].join(".")}
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
 */function Eo(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function So(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Eo())}function To(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function No(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ro(){const e=Eo();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ao(){return!0===so||!0===ao}function Oo(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Lo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Lo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(Do,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Lo(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Do=/\{\$([^}]+)}/g;
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
 */function Mo(e){return JSON.parse(e)}function Uo(e){return JSON.stringify(e)}
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
 */const Fo=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=Mo(go(o[0])||""),n=Mo(go(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Bo=function(e){const t=Fo(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},zo=function(e){const t=Fo(e).claims;return"object"==typeof t&&!0===t.admin};
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
function jo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Wo(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function qo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ho(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function $o(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(Vo(n)&&Vo(o)){if(!$o(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Vo(e){return null!==e&&"object"==typeof e}
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
function Xo(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Go(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Ko(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Jo{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),r=1518500249):(i=s^a^l,r=1859775393):e<60?(i=s&a|l&(s|a),r=2400959708):(i=s^a^l,r=3395469782);const t=(o<<5|o>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Yo(e,t){const n=new Qo(e,t);return n.subscribe.bind(n)}class Qo{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Zo),void 0===i.error&&(i.error=Zo),void 0===i.complete&&(i.complete=Zo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Zo(){}
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
 */function es(e,t){return`${e} failed: ${t} argument `}
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
const ts=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,co(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ns=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function is(e){return e&&e._delegate?e._delegate:e}class rs{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class os{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Co;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ss{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new os(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const as=[];var ls,cs;(cs=ls||(ls={}))[cs.DEBUG=0]="DEBUG",cs[cs.VERBOSE=1]="VERBOSE",cs[cs.INFO=2]="INFO",cs[cs.WARN=3]="WARN",cs[cs.ERROR=4]="ERROR",cs[cs.SILENT=5]="SILENT";const us={debug:ls.DEBUG,verbose:ls.VERBOSE,info:ls.INFO,warn:ls.WARN,error:ls.ERROR,silent:ls.SILENT},ds=ls.INFO,hs={[ls.DEBUG]:"log",[ls.VERBOSE]:"log",[ls.INFO]:"info",[ls.WARN]:"warn",[ls.ERROR]:"error"},fs=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=hs[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ps{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ls))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?us[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ls.DEBUG,...e),this._logHandler(this,ls.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ls.VERBOSE,...e),this._logHandler(this,ls.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ls.INFO,...e),this._logHandler(this,ls.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ls.WARN,...e),this._logHandler(this,ls.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ls.ERROR,...e),this._logHandler(this,ls.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ds,this._logHandler=fs,this._userLogHandler=null,as.push(this)}}let ms,gs;const ys=new WeakMap,bs=new WeakMap,vs=new WeakMap,_s=new WeakMap,ws=new WeakMap;let xs={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return bs.get(e);if("objectStoreNames"===t)return e.objectStoreNames||vs.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Is(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ks(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(gs||(gs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Es(this),t),Is(ys.get(this))}:function(...t){return Is(e.apply(Es(this),t))}:function(t,...n){const i=e.call(Es(this),t,...n);return vs.set(i,t.sort?t.sort():[t]),Is(i)}}function Cs(e){return"function"==typeof e?ks(e):(e instanceof IDBTransaction&&function(e){if(bs.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));bs.set(e,t)}(e),t=e,(ms||(ms=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,xs):e);var t}function Is(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Is(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&ys.set(t,e)})).catch((()=>{})),ws.set(t,e),t}(e);if(_s.has(e))return _s.get(e);const t=Cs(e);return t!==e&&(_s.set(e,t),ws.set(t,e)),t}const Es=e=>ws.get(e);function Ss(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=Is(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Is(s.result),e.oldVersion,e.newVersion,Is(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Ts=["get","getKey","getAll","getAllKeys","count"],Ns=["put","add","delete","clear"],Rs=new Map;function As(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Rs.get(t))return Rs.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Ns.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ts.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return Rs.set(t,o),o}xs=(e=>({...e,get:(t,n,i)=>As(t,n)||e.get(t,n,i),has:(t,n)=>!!As(t,n)||e.has(t,n)}))(xs);
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
class Os{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ls=new ps("@firebase/app"),Ps={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ds=new Map,Ms=new Map;function Us(e,t){try{e.container.addComponent(t)}catch(n){Ls.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Fs(e){const t=e.name;if(Ms.has(t))return Ls.debug(`There were multiple attempts to register component ${t}.`),!1;Ms.set(t,e);for(const t of Ds.values())Us(t,e);return!0}function Bs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const zs=new Po("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class js{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zs.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new rs("app",(()=>this),"PUBLIC"))}}
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
 */function Ws(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw zs.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=_o())||void 0===o?void 0:o.config),!n)throw zs.create("no-options");const s=Ds.get(r);if(s){if($o(n,s.options)&&$o(i,s.config))return s;throw zs.create("duplicate-app",{appName:r})}const a=new ss(r);for(const e of Ms.values())a.addComponent(e);const l=new js(n,i,a);return Ds.set(r,l),l}function qs(e="[DEFAULT]"){const t=Ds.get(e);if(!t&&"[DEFAULT]"===e)return Ws();if(!t)throw zs.create("no-app",{appName:e});return t}function Hs(e,t,n){var i;let r=null!==(i=Ps[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ls.warn(e.join(" "))}Fs(new rs(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let $s=null;function Vs(){return $s||($s=Ss("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw zs.create("idb-open",{originalErrorMessage:e.message})}))),$s}async function Xs(e,t){try{const n=(await Vs()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,Gs(e)),n.done}catch(e){if(e instanceof Lo)Ls.warn(e.message);else{const t=zs.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ls.warn(t.message)}}}function Gs(e){return`${e.name}!${e.options.appId}`}
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
 */class Ks{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Js();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Js(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Qs(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qs(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ys(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Js(){return(new Date).toISOString().substring(0,10)}class Ys{async runIndexedDBEnvironmentCheck(){return!!Oo()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await Vs()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Gs(e))}catch(e){if(e instanceof Lo)Ls.warn(e.message);else{const t=zs.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ls.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xs(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Xs(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Qs(e){return mo(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Zs;Zs="",Fs(new rs("platform-logger",(e=>new Os(e)),"PRIVATE")),Fs(new rs("heartbeat",(e=>new Ks(e)),"PRIVATE")),Hs("@firebase/app","0.9.3",Zs),Hs("@firebase/app","0.9.3","esm2017"),Hs("fire-js","");
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
Hs("firebase","9.17.1","app");
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
 */let ea="";
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
class ta{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Uo(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Mo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class na{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return jo(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const ia=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ta(t)}}catch(e){}return new na},ra=ia("localStorage"),oa=ia("sessionStorage"),sa=new ps("@firebase/database"),aa=function(){let e=1;return function(){return e++}}(),la=function(e){const t=ts(e),n=new Jo;n.update(t);const i=n.digest();return fo.encodeByteArray(i)},ca=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=ca.apply(null,i):t+="object"==typeof i?Uo(i):i,t+=" "}return t};let ua=null,da=!0;const ha=function(e,t){co(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(sa.logLevel=ls.VERBOSE,ua=sa.log.bind(sa),t&&oa.set("logging_enabled",!0)):"function"==typeof e?ua=e:(ua=null,oa.remove("logging_enabled"))},fa=function(...e){if(!0===da&&(da=!1,null===ua&&!0===oa.get("logging_enabled")&&ha(!0)),ua){const t=ca.apply(null,e);ua(t)}},pa=function(e){return function(...t){fa(e,...t)}},ma=function(...e){const t="FIREBASE INTERNAL ERROR: "+ca(...e);sa.error(t)},ga=function(...e){const t=`FIREBASE FATAL ERROR: ${ca(...e)}`;throw sa.error(t),new Error(t)},ya=function(...e){const t="FIREBASE WARNING: "+ca(...e);sa.warn(t)},ba=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},va=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Sa(e),i=Sa(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},_a=function(e,t){return e===t?0:e<t?-1:1},wa=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Uo(t))},xa=function(e){if("object"!=typeof e||null===e)return Uo(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Uo(t[i]),n+=":",n+=xa(e[t[i]]);return n+="}",n},ka=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ca(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ia=function(e){co(!ba(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ea=new RegExp("^-?(0*)\\d{1,10}$"),Sa=function(e){if(Ea.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ta=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ya("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Na=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Ra{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ya(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class Aa{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(fa("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ya(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Oa{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Oa.OWNER="owner";
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
const La=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Pa{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ra.get("host:"+e)||this._host}}function Da(e,t,n){let i;if(co("string"==typeof t,"typeof type must == string"),co("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ca(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class Ma{incrementCounter(e,t=1){jo(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yo(this.counters_)}constructor(){this.counters_={}}}
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
 */const Ua={},Fa={};function Ba(e){const t=e.toString();return Ua[t]||(Ua[t]=new Ma),Ua[t]}
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
class za{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Ta((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class ja{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new za(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Ao()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wa(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&La.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ja.forceAllow_=!0}static forceDisallow(){ja.forceDisallow_=!0}static isAvailable(){return!Ao()&&(!!ja.forceAllow_||!(ja.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Uo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=po(t),i=ka(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Ao())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Uo(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pa(e),this.stats_=Ba(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Da(t,"long_polling",e))}}class Wa{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||fa("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){Ao()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{fa("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ao())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=aa(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wa.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){fa("frame writing exception"),e.stack&&fa(e.stack),fa(e)}}}}
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
 */let qa=null;"undefined"!=typeof MozWebSocket?qa=MozWebSocket:"undefined"!=typeof WebSocket&&(qa=WebSocket);class Ha{static connectionURL_(e,t,n,i,r){const o={v:"5"};return!Ao()&&"undefined"!=typeof location&&location.hostname&&La.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),Da(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ra.set("previous_websocket_failure",!0);try{let e;if(Ao()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ea}/${$r.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new qa(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ha.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qa&&!Ha.forceDisallow_}static previouslyFailed(){return ra.isInMemoryStorage||!0===ra.get("previous_websocket_failure")}markConnectionHealthy(){ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Mo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(co(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Uo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ka(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pa(this.connId),this.stats_=Ba(t),this.connURL=Ha.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}}Ha.responsesRequiredToBeHealthy=2,Ha.healthyTimeout=3e4;
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
class $a{static get ALL_TRANSPORTS(){return[ja,Ha]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ha&&Ha.isAvailable();let n=t&&!Ha.previouslyFailed();if(e.webSocketOnly&&(t||ya("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ha];else{const e=this.transports_=[];for(const t of $a.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);$a.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}$a.globalTransportInitialized_=!1;class Va{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Na((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wa("t",e),n=wa("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wa("t",e),n=wa("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wa("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ma("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ya("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Na((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Na((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pa("c:"+this.id+":"),this.transportManager_=new $a(t),this.log_("Connection created"),this.start_()}}
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
 */class Xa{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Ga{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){co(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},co(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class Ka extends Ga{static getInstance(){return new Ka}getInitialEvent(e){return co("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||So()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class Ja{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function Ya(){return new Ja("")}function Qa(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Za(e){return e.pieces_.length-e.pieceNum_}function el(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Ja(e.pieces_,t)}function tl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nl(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function il(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Ja(t,0)}function rl(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Ja)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Ja(n,0)}function ol(e){return e.pieceNum_>=e.pieces_.length}function sl(e,t){const n=Qa(e),i=Qa(t);if(null===n)return t;if(n===i)return sl(el(e),el(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function al(e,t){const n=nl(e,0),i=nl(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=va(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function ll(e,t){if(Za(e)!==Za(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function cl(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Za(e)>Za(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ul{constructor(e,t){this.errorPrefix_=t,this.parts_=nl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ns(this.parts_[e]);dl(this)}}function dl(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+hl(e))}function hl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class fl extends Ga{static getInstance(){return new fl}getInitialEvent(e){return co("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class pl extends Xa{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Uo(r)),co(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Co,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),co(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),co(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;pl.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&jo(e,"w")){const n=Wo(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ya(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||zo(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Bo(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),co(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Uo(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ma("Unrecognized action received from server: "+Uo(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){co(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+pl.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},l=function(e){co(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?fa("getToken() completed but was canceled"):(fa("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new Va(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ya(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&ya(e),a())}}}interrupt(e){fa("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){fa("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qo(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>xa(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Ja(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){fa("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){fa("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Ao()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ea.replace(/\./g,"-")]=1,So()?e["framework.cordova"]=1:No()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ka.getInstance().currentlyOnline();return qo(this.interruptReasons_)&&e}constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=pl.nextPersistentConnectionId_++,this.log_=pa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ao())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Ka.getInstance().on("online",this.onOnline_,this)}}pl.nextPersistentConnectionId_=0,pl.nextConnectionId_=0;
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
class ml{static Wrap(e,t){return new ml(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ml("[MIN_NAME]",e),i=new ml("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return ml.MIN}}
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
 */let yl;class bl extends gl{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(e){yl=e}compare(e,t){return va(e.name,t.name)}isDefinedOn(e){throw uo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ml.MIN}maxPost(){return new ml("[MAX_NAME]",yl)}makePost(e,t){return co("string"==typeof e,"KeyIndex indexValue must always be a string."),new ml(e,yl)}toString(){return".key"}}const vl=new bl;
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
 */class _l{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class wl{copy(e,t,n,i,r){return new wl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xl.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return xl.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:wl.RED,this.left=null!=i?i:xl.EMPTY_NODE,this.right=null!=r?r:xl.EMPTY_NODE}}wl.RED=!0,wl.BLACK=!1;class xl{insert(e,t){return new xl(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,wl.BLACK,null,null))}remove(e){return new xl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _l(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _l(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _l(this.root_,null,this.comparator_,!0,e)}constructor(e,t=xl.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function kl(e,t){return va(e.name,t.name)}function Cl(e,t){return va(e,t)}
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
 */let Il;xl.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new wl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const El=function(e){return"number"==typeof e?"number:"+Ia(e):"string:"+e},Sl=function(e){if(e.isLeafNode()){const t=e.val();co("string"==typeof t||"number"==typeof t||"object"==typeof t&&jo(t,".sv"),"Priority must be a string or number.")}else co(e===Il||e.isEmpty(),"priority of unexpected type.");co(e===Il||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Tl,Nl,Rl;class Al{static set __childrenNodeConstructor(e){Tl=e}static get __childrenNodeConstructor(){return Tl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Al(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Al.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ol(e)?this:".priority"===Qa(e)?this.priorityNode_:Al.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Al.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Qa(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(co(".priority"!==n||1===Za(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Al.__childrenNodeConstructor.EMPTY_NODE.updateChild(el(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+El(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ia(this.value_):this.value_,this.lazyHash_=la(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Al.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Al.__childrenNodeConstructor?-1:(co(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Al.VALUE_TYPE_ORDER.indexOf(t),r=Al.VALUE_TYPE_ORDER.indexOf(n);return co(i>=0,"Unknown leaf type: "+t),co(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Al.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,co(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Sl(this.priorityNode_)}}Al.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ol=new class extends gl{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?va(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ml.MIN}maxPost(){return new ml("[MAX_NAME]",new Al("[PRIORITY-POST]",Rl))}makePost(e,t){const n=Nl(e);return new ml(t,new Al("[PRIORITY-POST]",n))}toString(){return".priority"}},Ll=Math.log(2);
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
 */class Pl{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ll,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Dl=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new wl(a,s.node,wl.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=r(t,l),u=r(l+1,i);return s=e[l],a=n?n(s):s,new wl(a,s.node,wl.BLACK,c,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const c=r(o+1,a),u=e[o],d=n?n(u):u;l(new wl(d,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,wl.BLACK):(a(i,wl.BLACK),a(i,wl.RED))}return o}(new Pl(e.length));return new xl(i||t,o)};
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
 */let Ml;const Ul={};class Fl{static get Default(){return co(Ul&&Ol,"ChildrenNode.ts has not been loaded"),Ml=Ml||new Fl({".priority":Ul},{".priority":Ol}),Ml}get(e){const t=Wo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xl?t:null}hasIndex(e){return jo(this.indexSet_,e.toString())}addIndex(e,t){co(e!==vl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(ml.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?Dl(n,e.getCompare()):Ul;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new Fl(c,l)}addToIndexes(e,t){const n=Ho(this.indexes_,((n,i)=>{const r=Wo(this.indexSet_,i);if(co(r,"Missing index implementation for "+i),n===Ul){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(ml.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),Dl(n,r.getCompare())}return Ul}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new ml(e.name,i))),r.insert(e,e.node)}}));return new Fl(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ho(this.indexes_,(n=>{if(n===Ul)return n;{const i=t.get(e.name);return i?n.remove(new ml(e.name,i)):n}}));return new Fl(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let Bl;class zl{static get EMPTY_NODE(){return Bl||(Bl=new zl(new xl(Cl),null,Fl.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bl}updatePriority(e){return this.children_.isEmpty()?this:new zl(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Bl:t}}getChild(e){const t=Qa(e);return null===t?this:this.getImmediateChild(t).getChild(el(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(co(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ml(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?Bl:this.priorityNode_;return new zl(i,o,r)}}updateChild(e,t){const n=Qa(e);if(null===n)return t;{co(".priority"!==Qa(e)||1===Za(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(el(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Ol,((o,s)=>{t[o]=s.val(e),n++,r&&zl.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+El(this.getPriority().val())+":"),this.forEachChild(Ol,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":la(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ml(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ml(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ml(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ml.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ml.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===jl?-1:0}withIndex(e){if(e===vl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new zl(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===vl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ol),n=t.getIterator(Ol);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===vl?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Sl(this.priorityNode_),this.children_.isEmpty()&&co(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}zl.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const jl=new class extends zl{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return zl.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new xl(Cl),zl.EMPTY_NODE,Fl.Default)}};Object.defineProperties(ml,{MIN:{value:new ml("[MIN_NAME]",zl.EMPTY_NODE)},MAX:{value:new ml("[MAX_NAME]",jl)}}),bl.__EMPTY_NODE=zl.EMPTY_NODE,Al.__childrenNodeConstructor=zl,Il=jl,function(e){Rl=e}(jl);function Wl(e,t=null){if(null===e)return zl.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),co(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Al(e,Wl(t))}if(e instanceof Array){let n=zl.EMPTY_NODE;return Ca(e,((t,i)=>{if(jo(e,t)&&"."!==t.substring(0,1)){const e=Wl(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Wl(t))}{const n=[];let i=!1;if(Ca(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Wl(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new ml(e,r)))}})),0===n.length)return zl.EMPTY_NODE;const r=Dl(n,kl,(e=>e.name),Cl);if(i){const e=Dl(n,Ol.getCompare());return new zl(r,Wl(t),new Fl({".priority":e},{".priority":Ol}))}return new zl(r,Wl(t),Fl.Default)}}!function(e){Nl=e}(Wl);
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
class ql extends gl{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?va(e.name,t.name):r}makePost(e,t){const n=Wl(e),i=zl.EMPTY_NODE.updateChild(this.indexPath_,n);return new ml(t,i)}maxPost(){const e=zl.EMPTY_NODE.updateChild(this.indexPath_,jl);return new ml("[MAX_NAME]",e)}toString(){return nl(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,co(!ol(e)&&".priority"!==Qa(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const Hl=new class extends gl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?va(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ml.MIN}maxPost(){return ml.MAX}makePost(e,t){const n=Wl(e);return new ml(t,n)}toString(){return".value"}};
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
 */function $l(e){return{type:"value",snapshotNode:e}}function Vl(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Xl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Gl(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Kl{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return co(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return co(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return co(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return co(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return co(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ol}copy(){const e=new Kl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ol}}function Jl(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ol?n="$priority":e.index_===Hl?n="$value":e.index_===vl?n="$key":(co(e.index_ instanceof ql,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Uo(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Uo(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Uo(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Uo(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Uo(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Yl(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ol&&(t.i=e.index_.toString()),t}
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
 */class Ql extends Xa{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(co(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ql.getListenId_(e,n),s={};this.listens_[o]=s;const a=Jl(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Wo(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ql.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Jl(e._queryParams),n=e._path.toString(),i=new Co;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xo(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Mo(s.responseText)}catch(e){ya("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&ya("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=pa("p:rest:"),this.listens_={}}}
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
 */class Zl{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=zl.EMPTY_NODE}}
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
 */function ec(){return{value:null,children:new Map}}function tc(e,t,n){if(ol(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Qa(t);e.children.has(i)||e.children.set(i,ec());tc(e.children.get(i),t=el(t),n)}}function nc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{nc(i,new Ja(t.toString()+"/"+e),n)}))}class ic{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ca(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class rc{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ca(e,((e,i)=>{i>0&&jo(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Na(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ic(e);const n=1e4+2e4*Math.random();Na(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var oc,sc;function ac(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(sc=oc||(oc={}))[sc.OVERWRITE=0]="OVERWRITE",sc[sc.MERGE=1]="MERGE",sc[sc.ACK_USER_WRITE=2]="ACK_USER_WRITE",sc[sc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class lc{operationForChild(e){if(ol(this.path)){if(null!=this.affectedTree.value)return co(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ja(e));return new lc(Ya(),t,this.revert)}}return co(Qa(this.path)===e,"operationForChild called for unrelated child."),new lc(el(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=oc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class cc{operationForChild(e){return ol(this.path)?new cc(this.source,Ya(),this.snap.getImmediateChild(e)):new cc(this.source,el(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=oc.OVERWRITE}}
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
 */class uc{operationForChild(e){if(ol(this.path)){const t=this.children.subtree(new Ja(e));return t.isEmpty()?null:t.value?new cc(this.source,Ya(),t.value):new uc(this.source,Ya(),t)}return co(Qa(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new uc(this.source,el(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=oc.MERGE}}
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
 */class dc{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ol(e))return this.isFullyInitialized()&&!this.filtered_;const t=Qa(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */function hc(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw uo("Should only compare child_ events.");const i=new ml(t.childName,t.snapshotNode),r=new ml(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function fc(e,t){return{eventCache:e,serverCache:t}}function pc(e,t,n,i){return fc(new dc(t,n,i),e.serverCache)}function mc(e,t,n,i){return fc(e.eventCache,new dc(t,n,i))}function gc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let bc;class vc{static fromObject(e){let t=new vc(null);return Ca(e,((e,n)=>{t=t.set(new Ja(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ya(),value:this.value};if(ol(e))return null;{const n=Qa(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(el(e),t);if(null!=r){return{path:rl(new Ja(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ol(e))return this;{const t=Qa(e),n=this.children.get(t);return null!==n?n.subtree(el(e)):new vc(null)}}set(e,t){if(ol(e))return new vc(t,this.children);{const n=Qa(e),i=(this.children.get(n)||new vc(null)).set(el(e),t),r=this.children.insert(n,i);return new vc(this.value,r)}}remove(e){if(ol(e))return this.children.isEmpty()?new vc(null):new vc(null,this.children);{const t=Qa(e),n=this.children.get(t);if(n){const i=n.remove(el(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new vc(null):new vc(this.value,r)}return this}}get(e){if(ol(e))return this.value;{const t=Qa(e),n=this.children.get(t);return n?n.get(el(e)):null}}setTree(e,t){if(ol(e))return t;{const n=Qa(e),i=(this.children.get(n)||new vc(null)).setTree(el(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new vc(this.value,r)}}fold(e){return this.fold_(Ya(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(rl(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ya(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ol(e))return null;{const i=Qa(e),r=this.children.get(i);return r?r.findOnPath_(el(e),rl(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ya(),t)}foreachOnPath_(e,t,n){if(ol(e))return this;{this.value&&n(t,this.value);const i=Qa(e),r=this.children.get(i);return r?r.foreachOnPath_(el(e),rl(t,i),n):new vc(null)}}foreach(e){this.foreach_(Ya(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(rl(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(bc||(bc=new xl(_a)),bc))()){this.value=e,this.children=t}}
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
 */class _c{static empty(){return new _c(new vc(null))}constructor(e){this.writeTree_=e}}function wc(e,t,n){if(ol(t))return new _c(new vc(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=sl(r,t);return o=o.updateChild(s,n),new _c(e.writeTree_.set(r,o))}{const i=new vc(n),r=e.writeTree_.setTree(t,i);return new _c(r)}}}function xc(e,t,n){let i=e;return Ca(n,((e,n)=>{i=wc(i,rl(t,e),n)})),i}function kc(e,t){if(ol(t))return _c.empty();{const n=e.writeTree_.setTree(t,new vc(null));return new _c(n)}}function Cc(e,t){return null!=Ic(e,t)}function Ic(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(sl(n.path,t)):null}function Ec(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ol,((e,n)=>{t.push(new ml(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ml(e,n.value))})),t}function Sc(e,t){if(ol(t))return e;{const n=Ic(e,t);return new _c(null!=n?new vc(n):e.writeTree_.subtree(t))}}function Tc(e){return e.writeTree_.isEmpty()}function Nc(e,t){return Rc(Ya(),e.writeTree_,t)}function Rc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(co(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Rc(rl(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(rl(e,".priority"),i)),n}}
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
 */function Ac(e,t){return Hc(t,e)}function Oc(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));co(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&Lc(t,i.path)?r=!1:cl(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=Dc(e.allWrites,Pc,Ya()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=kc(e.visibleWrites,i.path);else{Ca(i.children,(t=>{e.visibleWrites=kc(e.visibleWrites,rl(i.path,t))}))}return!0}return!1}function Lc(e,t){if(e.snap)return cl(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&cl(rl(e.path,n),t))return!0;return!1}function Pc(e){return e.visible}function Dc(e,t,n){let i=_c.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)cl(n,e)?(t=sl(n,e),i=wc(i,t,o.snap)):cl(e,n)&&(t=sl(e,n),i=wc(i,Ya(),o.snap.getChild(t)));else{if(!o.children)throw uo("WriteRecord should have .snap or .children");if(cl(n,e))t=sl(n,e),i=xc(i,t,o.children);else if(cl(e,n))if(t=sl(e,n),ol(t))i=xc(i,Ya(),o.children);else{const e=Wo(o.children,Qa(t));if(e){const n=e.getChild(el(t));i=wc(i,Ya(),n)}}}}}return i}function Mc(e,t,n,i,r){if(i||r){const o=Sc(e.visibleWrites,t);if(!r&&Tc(o))return n;if(r||null!=n||Cc(o,Ya())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(cl(e.path,t)||cl(t,e.path))};return Nc(Dc(e.allWrites,o,t),n||zl.EMPTY_NODE)}return null}{const i=Ic(e.visibleWrites,t);if(null!=i)return i;{const i=Sc(e.visibleWrites,t);if(Tc(i))return n;if(null!=n||Cc(i,Ya())){return Nc(i,n||zl.EMPTY_NODE)}return null}}}function Uc(e,t,n,i){return Mc(e.writeTree,e.treePath,t,n,i)}function Fc(e,t){return function(e,t,n){let i=zl.EMPTY_NODE;const r=Ic(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Ol,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Sc(e.visibleWrites,t);return n.forEachChild(Ol,((e,t)=>{const n=Nc(Sc(r,new Ja(e)),t);i=i.updateImmediateChild(e,n)})),Ec(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Ec(Sc(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Bc(e,t,n,i){return function(e,t,n,i,r){co(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=rl(t,n);if(Cc(e.visibleWrites,o))return null;{const t=Sc(e.visibleWrites,o);return Tc(t)?r.getChild(n):Nc(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function zc(e,t){return function(e,t){return Ic(e.visibleWrites,t)}(e.writeTree,rl(e.treePath,t))}function jc(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const l=Sc(e.visibleWrites,t),c=Ic(l,Ya());if(null!=c)a=c;else{if(null==n)return[];a=Nc(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function Wc(e,t,n){return function(e,t,n,i){const r=rl(t,n),o=Ic(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return Nc(Sc(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function qc(e,t){return Hc(rl(e.treePath,t),e.writeTree)}function Hc(e,t){return{treePath:e,writeTree:t}}
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
 */class $c{trackChildChange(e){const t=e.type,n=e.childName;co("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),co(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Gl(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Xl(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Vl(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw uo("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Gl(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const Vc=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Xc{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new dc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:yc(this.viewCache_),r=jc(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function Gc(e,t,n,i,r){const o=new $c;let s,a;if(n.type===oc.OVERWRITE){const l=n;l.source.fromUser?s=Yc(e,t,l.path,l.snap,i,r,o):(co(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ol(l.path),s=Jc(e,t,l.path,l.snap,i,r,a,o))}else if(n.type===oc.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,l)=>{const c=rl(n,i);Qc(t,Qa(c))&&(a=Yc(e,a,c,l,r,o,s))})),i.foreach(((i,l)=>{const c=rl(n,i);Qc(t,Qa(c))||(a=Yc(e,a,c,l,r,o,s))})),a}(e,t,l.path,l.children,i,r,o):(co(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=eu(e,t,l.path,l.children,i,r,a,o))}else if(n.type===oc.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=zc(i,n))return t;{const a=new Xc(i,t,r),l=t.eventCache.getNode();let c;if(ol(n)||".priority"===Qa(n)){let n;if(t.serverCache.isFullyInitialized())n=Uc(i,yc(t));else{const e=t.serverCache.getNode();co(e instanceof zl,"serverChildren would be complete if leaf node"),n=Fc(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const r=Qa(n);let u=Wc(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,el(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,zl.EMPTY_NODE,el(n),a,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Uc(i,yc(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=zc(i,Ya()),pc(t,c,s,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=zc(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ol(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jc(e,t,n,l.getNode().getChild(n),r,o,a,s);if(ol(n)){let i=new vc(null);return l.getNode().forEachChild(vl,((e,t)=>{i=i.set(new Ja(e),t)})),eu(e,t,n,i,r,o,a,s)}return t}{let c=new vc(null);return i.foreach(((e,t)=>{const i=rl(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),eu(e,t,n,c,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==oc.LISTEN_COMPLETE)throw uo("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=mc(t,o.getNode(),o.isFullyInitialized()||ol(n),o.isFiltered());return Kc(e,s,n,i,Vc,r)}(e,t,n.path,i,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=gc(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push($l(gc(t)))}}(t,s,l),{viewCache:s,changes:l}}function Kc(e,t,n,i,r,o){const s=t.eventCache;if(null!=zc(i,n))return t;{let a,l;if(ol(n))if(co(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=yc(t),r=Fc(i,n instanceof zl?n:zl.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Uc(i,yc(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Qa(n);if(".priority"===c){co(1===Za(n),"Can't have a priority with additional path components");const r=s.getNode();l=t.serverCache.getNode();const o=Bc(i,n,r,l);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=el(n);let d;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Bc(i,n,s.getNode(),l);d=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else d=Wc(i,c,t.serverCache);a=null!=d?e.filter.updateChild(s.getNode(),c,d,u,r,o):s.getNode()}}return pc(t,a,s.isFullyInitialized()||ol(n),e.filter.filtersNodes())}}function Jc(e,t,n,i,r,o,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(ol(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Qa(n);if(!l.isCompleteForPath(n)&&Za(n)>1)return t;const r=el(n),o=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),o):u.updateChild(l.getNode(),e,o,r,Vc,null)}const d=mc(t,c,l.isFullyInitialized()||ol(n),u.filtersNodes());return Kc(e,d,n,r,new Xc(r,d,o),a)}function Yc(e,t,n,i,r,o,s){const a=t.eventCache;let l,c;const u=new Xc(r,t,o);if(ol(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=pc(t,c,!0,e.filter.filtersNodes());else{const r=Qa(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=pc(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=el(n),c=a.getNode().getImmediateChild(r);let d;if(ol(o))d=i;else{const e=u.getCompleteChild(r);d=null!=e?".priority"===tl(o)&&e.getChild(il(o)).isEmpty()?e:e.updateChild(o,i):zl.EMPTY_NODE}if(c.equals(d))l=t;else{l=pc(t,e.filter.updateChild(a.getNode(),r,d,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Qc(e,t){return e.eventCache.isCompleteForChild(t)}function Zc(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function eu(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ol(n)?i:new vc(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Zc(0,t.serverCache.getNode().getImmediateChild(n),i);c=Jc(e,c,new Ja(n),l,r,o,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=Zc(0,t.serverCache.getNode().getImmediateChild(n),i);c=Jc(e,c,new Ja(n),l,r,o,s,a)}})),c}function tu(e,t){const n=yc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ol(t)&&!n.getImmediateChild(Qa(t)).isEmpty())?n.getChild(t):null}function nu(e,t,n,i){t.type===oc.MERGE&&null!==t.source.queryId&&(co(yc(e.viewCache_),"We should always have a full cache before handling merges"),co(gc(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Gc(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,co(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),co(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),co(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,iu(e,o.changes,o.viewCache.eventCache.getNode(),null)}function iu(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),hc(e,r,"child_removed",t,i,n),hc(e,r,"child_added",t,i,n),hc(e,r,"child_moved",o,i,n),hc(e,r,"child_changed",t,i,n),hc(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let ru,ou;function su(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return co(null!=o,"SyncTree gave us an op for an invalid query."),nu(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(nu(o,t,n,i));return r}}function au(e,t){let n=null;for(const i of e.views.values())n=n||tu(i,t);return n}class lu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vc(null),this.pendingWriteTree_={visibleWrites:_c.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cu(e,t,n,i,r){return function(e,t,n,i,r){co(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=wc(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?mu(e,new cc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function uu(e,t,n,i){!function(e,t,n,i){co(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=xc(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const r=vc.fromObject(n);return mu(e,new uc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function du(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Oc(e.pendingWriteTree_,t)){let t=new vc(null);return null!=i.snap?t=t.set(Ya(),!0):Ca(i.children,(e=>{t=t.set(new Ja(e),!0)})),mu(e,new lc(i.path,t,n))}return[]}function hu(e,t,n){return mu(e,new cc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function fu(e,t,n,i){const r=bu(e,i);if(null!=r){const i=vu(r),o=i.path,s=i.queryId,a=sl(o,t);return _u(e,o,new cc(ac(s),a,n))}return[]}function pu(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=au(n,sl(e,t));if(i)return i}));return Mc(i,t,r,n,!0)}function mu(e,t){return gu(t,e.syncPointTree_,null,Ac(e.pendingWriteTree_,Ya()))}function gu(e,t,n,i){if(ol(e.path))return yu(e,t,n,i);{const r=t.get(Ya());null==n&&null!=r&&(n=au(r,Ya()));let o=[];const s=Qa(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=qc(i,s);o=o.concat(gu(a,l,e,t))}return r&&(o=o.concat(su(r,e,i,n))),o}}function yu(e,t,n,i){const r=t.get(Ya());null==n&&null!=r&&(n=au(r,Ya()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=qc(i,t),l=e.operationForChild(t);l&&(o=o.concat(yu(l,r,s,a)))})),r&&(o=o.concat(su(r,e,i,n))),o}function bu(e,t){return e.tagToQueryMap.get(t)}function vu(e){const t=e.indexOf("$");return co(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Ja(e.substr(0,t))}}function _u(e,t,n){const i=e.syncPointTree_.get(t);co(i,"Missing sync point for query tag that we're tracking");return su(i,n,Ac(e.pendingWriteTree_,t),null)}
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
class wu{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wu(t)}node(){return this.node_}constructor(e){this.node_=e}}class xu{getImmediateChild(e){const t=rl(this.path_,e);return new xu(this.syncTree_,t)}node(){return pu(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const ku=function(e,t,n){return e&&"object"==typeof e?(co(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Cu(e[".sv"],t,n):"object"==typeof e[".sv"]?Iu(e[".sv"],t):void co(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Cu=function(e,t,n){if("timestamp"===e)return n.timestamp;co(!1,"Unexpected server value: "+e)},Iu=function(e,t,n){e.hasOwnProperty("increment")||co(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&co(!1,"Unexpected increment value: "+i);const r=t.node();if(co(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},Eu=function(e,t,n,i){return Tu(t,new xu(n,e),i)},Su=function(e,t,n){return Tu(e,new wu(t),n)};function Tu(e,t,n){const i=e.getPriority().val(),r=ku(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=ku(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new Al(o,Wl(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new Al(r))),i.forEachChild(Ol,((e,i)=>{const r=Tu(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
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
 */class Nu{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ru(e,t){let n=t instanceof Ja?t:new Ja(t),i=e,r=Qa(n);for(;null!==r;){const e=Wo(i.node.children,r)||{children:{},childCount:0};i=new Nu(r,i,e),n=el(n),r=Qa(n)}return i}function Au(e){return e.node.value}function Ou(e,t){e.node.value=t,Uu(e)}function Lu(e){return e.node.childCount>0}function Pu(e,t){Ca(e.node.children,((n,i)=>{t(new Nu(n,e,i))}))}function Du(e,t,n,i){n&&!i&&t(e),Pu(e,(e=>{Du(e,t,!0,i)})),n&&i&&t(e)}function Mu(e){return new Ja(null===e.parent?e.name:Mu(e.parent)+"/"+e.name)}function Uu(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Au(e)&&!Lu(e)}(n),r=jo(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Uu(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Uu(e))}
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
 */(e.parent,e.name,e)}const Fu=/[\[\].#$\/\u0000-\u001F\u007F]/,Bu=/[\[\].#$\u0000-\u001F\u007F]/,zu=function(e){return"string"==typeof e&&0!==e.length&&!Fu.test(e)},ju=function(e){return"string"==typeof e&&0!==e.length&&!Bu.test(e)},Wu=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!ba(e)||e&&"object"==typeof e&&jo(e,".sv")},qu=function(e,t,n,i){i&&void 0===t||Hu(es(e,"value"),t,n)},Hu=function(e,t,n){const i=n instanceof Ja?new ul(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+hl(i));if("function"==typeof t)throw new Error(e+"contains a function "+hl(i)+" with contents = "+t.toString());if(ba(t))throw new Error(e+"contains "+t.toString()+" "+hl(i));if("string"==typeof t&&t.length>10485760/3&&ns(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+hl(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ca(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!zu(t)))throw new Error(e+" contains an invalid key ("+t+") "+hl(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=ns(a),dl(s),Hu(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=ns(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+hl(i)+" in addition to actual children.")}},$u=function(e,t,n,i){if(i&&void 0===t)return;const r=es(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];Ca(t,((e,t)=>{const i=new Ja(e);if(Hu(r,t,rl(n,i)),".priority"===tl(i)&&!Wu(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=nl(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!zu(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(al);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&cl(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}}(r,o)},Vu=function(e,t,n,i){if(!(i&&void 0===n||ju(n)))throw new Error(es(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Xu=function(e,t){if(".info"===Qa(t))throw new Error(e+" failed = Can't modify data under /.info/")},Gu=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!zu(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ju(e)}(n))throw new Error(es(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Ku{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ju(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||ll(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function Yu(e,t,n){Ju(e,n),Qu(e,(e=>cl(e,t)||cl(t,e)))}function Qu(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Zu(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Zu(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();ua&&fa("event: "+n.toString()),Ta(i)}}}
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
 */class ed{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ku,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ec(),this.transactionQueueTree_=new Nu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function td(e,t,n){if(e.stats_=Ba(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ql(e.repoInfo_,((t,n,i,r)=>{rd(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>od(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Uo(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new pl(e.repoInfo_,t,((t,n,i,r)=>{rd(e,t,n,i,r)}),(t=>{od(e,t)}),(t=>{!function(e,t){Ca(t,((t,n)=>{sd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Fa[n]||(Fa[n]=t()),Fa[n]}(e.repoInfo_,(()=>new rc(e.stats_,e.server_))),e.infoData_=new Zl,e.infoSyncTree_=new lu({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=hu(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),sd(e,"connected",!1),e.serverSyncTree_=new lu({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);Yu(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function nd(e){const t=e.infoData_.getNode(new Ja(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function id(e){return(t=(t={timestamp:nd(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function rd(e,t,n,i,r){e.dataUpdateCount++;const o=new Ja(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=Ho(n,(e=>Wl(e)));s=function(e,t,n,i){const r=bu(e,i);if(r){const i=vu(r),o=i.path,s=i.queryId,a=sl(o,t),l=vc.fromObject(n);return _u(e,o,new uc(ac(s),a,l))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=Wl(n);s=fu(e.serverSyncTree_,o,t,r)}else if(i){const t=Ho(n,(e=>Wl(e)));s=function(e,t,n){const i=vc.fromObject(n);return mu(e,new uc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=Wl(n);s=hu(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=pd(e,o)),Yu(e.eventQueue_,a,s)}function od(e,t){sd(e,"connected",t),!1===t&&function(e){ud(e,"onDisconnectEvents");const t=id(e),n=ec();nc(e.onDisconnect_,Ya(),((i,r)=>{const o=Eu(i,r,e.serverSyncTree_,t);tc(n,i,o)}));let i=[];nc(n,Ya(),((t,n)=>{i=i.concat(hu(e.serverSyncTree_,t,n));const r=vd(e,t);pd(e,r)})),e.onDisconnect_=ec(),Yu(e.eventQueue_,Ya(),i)}(e)}function sd(e,t,n){const i=new Ja("/.info/"+t),r=Wl(n);e.infoData_.updateSnapshot(i,r);const o=hu(e.infoSyncTree_,i,r);Yu(e.eventQueue_,i,o)}function ad(e){return e.nextWriteId_++}function ld(e,t,n,i,r){ud(e,"set",{path:t.toString(),value:n,priority:i});const o=id(e),s=Wl(n,i),a=pu(e.serverSyncTree_,t),l=Su(s,a,o),c=ad(e),u=cu(e.serverSyncTree_,t,l,c,!0);Ju(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||ya("set at "+t+" failed: "+n);const s=du(e.serverSyncTree_,c,!o);Yu(e.eventQueue_,t,s),dd(e,r,n,i)}));const d=vd(e,t);pd(e,d),Yu(e.eventQueue_,d,[])}function cd(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function ud(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),fa(n,...t)}function dd(e,t,n,i){t&&Ta((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function hd(e,t,n){return pu(e.serverSyncTree_,t,n)||zl.EMPTY_NODE}function fd(e,t=e.transactionQueueTree_){if(t||bd(e,t),Au(t)){const n=gd(e,t);co(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=hd(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];co(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=sl(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{ud(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(du(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();bd(e,Ru(e.transactionQueueTree_,t)),fd(e,e.transactionQueueTree_),Yu(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Ta(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ya("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}pd(e,t)}}),s)}(e,Mu(t),n)}else Lu(t)&&Pu(t,(t=>{fd(e,t)}))}function pd(e,t){const n=md(e,t),i=Mu(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=sl(n,l.path);let u,d=!1;if(co(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,u=l.abortReason,r=r.concat(du(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,u="maxretry",r=r.concat(du(e.serverSyncTree_,l.currentWriteId,!0));else{const n=hd(e,l.path,o);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Hu("transaction failed: Data returned ",i,l.path);let t=Wl(i);"object"==typeof i&&null!=i&&jo(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=id(e),c=Su(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=ad(e),o.splice(o.indexOf(s),1),r=r.concat(cu(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(du(e.serverSyncTree_,s,!0))}else d=!0,u="nodata",r=r.concat(du(e.serverSyncTree_,l.currentWriteId,!0))}Yu(e.eventQueue_,n,r),r=[],d&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;bd(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Ta(i[e]);fd(e,e.transactionQueueTree_)}(e,gd(e,n),i),i}function md(e,t){let n,i=e.transactionQueueTree_;for(n=Qa(t);null!==n&&void 0===Au(i);)i=Ru(i,n),n=Qa(t=el(t));return i}function gd(e,t){const n=[];return yd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function yd(e,t,n){const i=Au(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Pu(t,(t=>{yd(e,t,n)}))}function bd(e,t){const n=Au(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ou(t,n.length>0?n:void 0)}Pu(t,(t=>{bd(e,t)}))}function vd(e,t){const n=Mu(md(e,t)),i=Ru(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{_d(e,t)})),_d(e,i),Du(i,(t=>{_d(e,t)})),n}function _d(e,t){const n=Au(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(co(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(co(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(du(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ou(t,void 0):n.length=o+1,Yu(e.eventQueue_,Mu(t),r);for(let e=0;e<i.length;e++)Ta(i[e])}}
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
 */const wd=function(e,t){const n=xd(e),i=n.namespace;"firebase.com"===n.domain&&ga(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ga("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ya("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Pa(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Ja(n.pathString)}},xd=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ya(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in h&&(o=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}};!function(){let e=0;const t=[]}();
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
class kd{get key(){return ol(this._path)?null:tl(this._path)}get ref(){return new Cd(this._repo,this._path)}get _queryIdentifier(){const e=Yl(this._queryParams),t=xa(e);return"{}"===t?"default":t}get _queryObject(){return Yl(this._queryParams)}isEqual(e){if(!((e=is(e))instanceof kd))return!1;const t=this._repo===e._repo,n=ll(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Cd extends kd{get parent(){const e=il(this._path);return null===e?null:new Cd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Kl,!1)}}function Id(e,t){return(e=is(e))._checkNotDeleted("ref"),void 0!==t?Ed(e._root,t):e._root}function Ed(e,t){var n,i,r,o;return null===Qa((e=is(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Vu(n,i,r,o)):Vu("child","path",t,!1),new Cd(e._repo,rl(e._path,t))}function Sd(e,t){e=is(e),Xu("set",e._path),qu("set",t,e._path,!1);const n=new Co;return ld(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Td(e,t){$u("update",t,e._path,!1);const n=new Co;return function(e,t,n,i){ud(e,"update",{path:t.toString(),value:n});let r=!0;const o=id(e),s={};if(Ca(n,((n,i)=>{r=!1,s[n]=Eu(rl(t,n),Wl(i),e.serverSyncTree_,o)})),r)fa("update() called with empty data.  Don't do anything."),dd(0,i,"ok",void 0);else{const r=ad(e),o=uu(e.serverSyncTree_,t,s,r);Ju(e.eventQueue_,o),e.server_.merge(t.toString(),n,((n,o)=>{const s="ok"===n;s||ya("update at "+t+" failed: "+n);const a=du(e.serverSyncTree_,r,!s),l=a.length>0?pd(e,t):t;Yu(e.eventQueue_,l,a),dd(0,i,n,o)})),Ca(n,(n=>{const i=vd(e,rl(t,n));pd(e,i)})),Yu(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}!function(e){co(!ru,"__referenceConstructor has already been defined"),ru=e}(Cd),function(e){co(!ou,"__referenceConstructor has already been defined"),ou=e}(Cd);
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
const Nd={};let Rd=!1;function Ad(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||ga("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),fa("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=wd(o,r),c=l.repoInfo;void 0!==$r&&$r.env&&(a=$r.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${c.namespace}`,l=wd(o,r),c=l.repoInfo):s=!l.repoInfo.secure;const u=r&&s?new Oa(Oa.OWNER):new Aa(e.name,e.options,t);Gu("Invalid Firebase Database URL",l),ol(l.path)||ga("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Nd[t.name];r||(r={},Nd[t.name]=r);let o=r[e.toURLString()];o&&ga("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new ed(e,Rd,n,i),r[e.toURLString()]=o,o}(c,e,u,new Ra(e.name,n));return new Od(d,e)}class Od{get _repo(){return this._instanceStarted||(td(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cd(this._repo,Ya())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Nd[t];n&&n[e.key]===e||ga(`Database ${t}(${e.repoInfo_}) has already been deleted.`),cd(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ga("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}pl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},pl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){ea="9.17.1",Fs(new rs("database",((e,{instanceIdentifier:t})=>Ad(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Hs("@firebase/database","0.14.3",e),Hs("@firebase/database","0.14.3","esm2017")}
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
 */();function Ld(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dd=Pd,Md=new Po("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ud=new ps("@firebase/auth");function Fd(e,...t){Ud.logLevel<=ls.ERROR&&Ud.error(`Auth (9.17.1): ${e}`,...t)}
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
 */function Bd(e,...t){throw Wd(e,...t)}function zd(e,...t){return Wd(e,...t)}function jd(e,t,n){const i=Object.assign(Object.assign({},Dd()),{[t]:n});return new Po("auth","Firebase",i).create(t,{appName:e.name})}function Wd(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Md.create(e,...t)}function qd(e,t,...n){if(!e)throw Wd(t,...n)}function Hd(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fd(t),new Error(t)}function $d(e,t){e||Hd(t)}
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
 */const Vd=new Map;function Xd(e){$d(e instanceof Function,"Expected a class definition");let t=Vd.get(e);return t?($d(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vd.set(e,t),t)}
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
function Gd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Kd(){return"http:"===Jd()||"https:"===Jd()}function Jd(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Yd(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Kd()||To()||"connection"in navigator))||navigator.onLine}
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
class Qd{get(){return Yd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,$d(t>e,"Short delay should be less than long delay!"),this.isMobile=So()||No()}}
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
 */function Zd(e,t){$d(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class eh{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Hd("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Hd("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Hd("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const th={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},nh=new Qd(3e4,6e4);
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
 */function ih(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function rh(e,t,n,i,r={}){return oh(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=Xo(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),eh.fetch()(ah(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function oh(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},th),t);try{const t=new lh(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ch(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ch(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw ch(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw ch(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw jd(e,a,s);Bd(e,a)}}catch(t){if(t instanceof Lo)throw t;Bd(e,"network-request-failed")}}async function sh(e,t,n,i,r={}){const o=await rh(e,t,n,i,r);return"mfaPendingCredential"in o&&Bd(e,"multi-factor-auth-required",{_serverResponse:o}),o}function ah(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Zd(e.config,r):`${e.config.apiScheme}://${r}`}class lh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(zd(this.auth,"network-request-failed"))),nh.get())}))}}function ch(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=zd(e,t,i);return r.customData._tokenResponse=n,r}
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
function uh(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function dh(e){return 1e3*Number(e)}function hh(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Fd("JWT malformed, contained fewer than 3 sections"),null;try{const e=go(n);return e?JSON.parse(e):(Fd("Failed to decode base64 JWT payload"),null)}catch(e){return Fd("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function fh(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Lo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ph{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class mh{_initializeTime(){this.lastSignInTime=uh(this.lastLoginAt),this.creationTime=uh(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function gh(e){var t;const n=e.auth,i=await e.getIdToken(),r=await fh(e,async function(e,t){return rh(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));qd(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ld(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new mh(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
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
class yh{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qd(e.idToken,"internal-error"),qd(void 0!==e.idToken,"internal-error"),qd(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=hh(e);return qd(t,"internal-error"),qd(void 0!==t.exp,"internal-error"),qd(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qd(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await oh(e,{},(async()=>{const n=Xo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=ah(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",eh.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new yh;return n&&(qd("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(qd("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(qd("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yh,this.toJSON())}_performRefresh(){return Hd("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function bh(e,t){qd("string"==typeof e||void 0===e,"internal-error",{appName:t})}class vh{async getIdToken(e){const t=await fh(this,this.stsTokenManager.getToken(this.auth,e));return qd(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=is(e),i=await n.getIdToken(t),r=hh(i);qd(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:uh(dh(r.auth_time)),issuedAtTime:uh(dh(r.iat)),expirationTime:uh(dh(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=is(e);await gh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qd(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vh(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){qd(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await gh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fh(this,async function(e,t){return rh(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:v,isAnonymous:_,providerData:w,stsTokenManager:x}=t;qd(b&&x,e,"internal-error");const k=yh.fromJSON(this.name,x);qd("string"==typeof b,e,"internal-error"),bh(u,e.name),bh(d,e.name),qd("boolean"==typeof v,e,"internal-error"),qd("boolean"==typeof _,e,"internal-error"),bh(h,e.name),bh(f,e.name),bh(p,e.name),bh(m,e.name),bh(g,e.name),bh(y,e.name);const C=new vh({uid:b,auth:e,email:d,emailVerified:v,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(C.providerData=w.map((e=>Object.assign({},e)))),m&&(C._redirectEventId=m),C}static async _fromIdTokenResponse(e,t,n=!1){const i=new yh;i.updateFromServerResponse(t);const r=new vh({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await gh(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ph(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mh(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class _h{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}_h.type="NONE";const wh=_h;
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
 */function xh(e,t,n){return`firebase:${e}:${t}:${n}`}class kh{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vh._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new kh(Xd(wh),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Xd(wh);const o=xh(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=vh._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new kh(r,e,n)):new kh(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=xh(this.userKey,i.apiKey,r),this.fullPersistenceKey=xh("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Ch(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Th(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ih(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Rh(t))return"Blackberry";if(Ah(t))return"Webos";if(Eh(t))return"Safari";if((t.includes("chrome/")||Sh(t))&&!t.includes("edge/"))return"Chrome";if(Nh(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ih(e=Eo()){return/firefox\//i.test(e)}function Eh(e=Eo()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Sh(e=Eo()){return/crios\//i.test(e)}function Th(e=Eo()){return/iemobile/i.test(e)}function Nh(e=Eo()){return/android/i.test(e)}function Rh(e=Eo()){return/blackberry/i.test(e)}function Ah(e=Eo()){return/webos/i.test(e)}function Oh(e=Eo()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Lh(){return Ro()&&10===document.documentMode}function Ph(e=Eo()){return Oh(e)||Nh(e)||Ah(e)||Rh(e)||/windows phone/i.test(e)||Th(e)}
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
function Dh(e,t=[]){let n;switch(e){case"Browser":n=Ch(Eo());break;case"Worker":n=`${Ch(Eo())}-${e}`;break;default:n=e}return`${n}/JsCore/9.17.1/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Mh{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Uh{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xd(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await kh.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return qd(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gh(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?is(e):null;return t&&qd(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qd(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Xd(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xd(e)||this._popupRedirectResolver;qd(t,this,"argument-error"),this.redirectPersistenceManager=await kh.create(this,[Xd(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return qd(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qd(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new Mh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Md,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Fh(e){return is(e)}class Bh{get next(){return qd(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Yo((e=>this.observer=e))}}function zh(e,t,n){const i=Fh(e);qd(i._canInitEmulator,i,"emulator-config-failed"),qd(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=jh(t),{host:s,port:a}=function(e){const t=jh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Wh(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Wh(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function jh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class qh{toJSON(){return Hd("not implemented")}_getIdTokenResponse(e){return Hd("not implemented")}_linkToIdToken(e,t){return Hd("not implemented")}_getReauthenticationResolver(e){return Hd("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Hh(e,t){return rh(e,"POST","/v1/accounts:update",t)}
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
class $h extends qh{static _fromEmailAndPassword(e,t){return new $h(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new $h(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return sh(e,"POST","/v1/accounts:signInWithPassword",ih(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return sh(e,"POST","/v1/accounts:signInWithEmailLink",ih(e,t))}(e,{email:this._email,oobCode:this._password});default:Bd(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return sh(e,"POST","/v1/accounts:signInWithEmailLink",ih(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Bd(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Vh(e,t){return sh(e,"POST","/v1/accounts:signInWithIdp",ih(e,t))}
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
 */class Xh extends qh{static _fromParams(e){const t=new Xh(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bd("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Ld(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Xh(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return Vh(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Vh(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vh(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xo(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Gh={USER_NOT_FOUND:"user-not-found"};
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
class Kh extends qh{static _fromVerification(e,t){return new Kh({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Kh({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return sh(e,"POST","/v1/accounts:signInWithPhoneNumber",ih(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await sh(e,"POST","/v1/accounts:signInWithPhoneNumber",ih(e,t));if(n.temporaryProof)throw ch(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return sh(e,"POST","/v1/accounts:signInWithPhoneNumber",ih(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Gh)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Kh({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Jh{static parseLink(e){const t=function(e){const t=Go(Ko(e)).link,n=t?Go(Ko(t)).deep_link_id:null,i=Go(Ko(e)).deep_link_id;return(i?Go(Ko(i)).link:null)||i||n||t||e}(e);try{return new Jh(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,s;const a=Go(Ko(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);qd(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
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
class Yh{static credential(e,t){return $h._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Jh.parseLink(t);return qd(n,"argument-error"),$h._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Yh.PROVIDER_ID}}Yh.PROVIDER_ID="password",Yh.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yh.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Qh{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Zh extends Qh{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ef extends Zh{static credential(e){return Xh._fromParams({providerId:ef.PROVIDER_ID,signInMethod:ef.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ef.credentialFromTaggedObject(e)}static credentialFromError(e){return ef.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ef.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ef.FACEBOOK_SIGN_IN_METHOD="facebook.com",ef.PROVIDER_ID="facebook.com";
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
class tf extends Zh{static credential(e,t){return Xh._fromParams({providerId:tf.PROVIDER_ID,signInMethod:tf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tf.credentialFromTaggedObject(e)}static credentialFromError(e){return tf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tf.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}tf.GOOGLE_SIGN_IN_METHOD="google.com",tf.PROVIDER_ID="google.com";
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
class nf extends Zh{static credential(e){return Xh._fromParams({providerId:nf.PROVIDER_ID,signInMethod:nf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nf.credentialFromTaggedObject(e)}static credentialFromError(e){return nf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nf.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}nf.GITHUB_SIGN_IN_METHOD="github.com",nf.PROVIDER_ID="github.com";
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
class rf extends Zh{static credential(e,t){return Xh._fromParams({providerId:rf.PROVIDER_ID,signInMethod:rf.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rf.credentialFromTaggedObject(e)}static credentialFromError(e){return rf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rf.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function of(e,t){return sh(e,"POST","/v1/accounts:signUp",ih(e,t))}
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
 */rf.TWITTER_SIGN_IN_METHOD="twitter.com",rf.PROVIDER_ID="twitter.com";class sf{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await vh._fromIdTokenResponse(e,n,i),o=af(n);return new sf({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=af(n);return new sf({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function af(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class lf extends Lo{static _fromErrorAndOperation(e,t,n,i){return new lf(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,lf.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function cf(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw lf._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function uf(e,t,n=!1){const i=await fh(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sf._forOperation(e,"link",i)}
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
async function df(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await fh(e,cf(i,r,t,e),n);qd(o.idToken,i,"internal-error");const s=hh(o.idToken);qd(s,i,"internal-error");const{sub:a}=s;return qd(e.uid===a,i,"user-mismatch"),sf._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Bd(i,"user-mismatch"),e}}
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
 */async function hf(e,t,n=!1){const i="signIn",r=await cf(e,i,t),o=await sf._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function ff(e,t){return hf(Fh(e),t)}async function pf(e,t,n){const i=Fh(e),r=await of(i,{returnSecureToken:!0,email:t,password:n}),o=await sf._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function mf(e,t,n){return ff(is(e),Yh.credential(t,n))}
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
 */new WeakMap;
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
class gf{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class yf extends gf{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Lh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Eo();return Eh(e)||Oh(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ph(),this._shouldAllowMigration=!0}}yf.type="LOCAL";const bf=yf;
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
 */class vf extends gf{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}vf.type="SESSION";const _f=vf;
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
class wf{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wf(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function xf(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */wf.receivers=[];class kf{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=xf("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Cf(){return window}
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
function If(){return void 0!==Cf().WorkerGlobalScope&&"function"==typeof Cf().importScripts}class Ef{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Sf(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Tf(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ef(e).toPromise()}(),t(await Tf()))}))}))}async function Nf(e,t,n){const i=Sf(e,!0).put({fbase_key:t,value:n});return new Ef(i).toPromise()}function Rf(e,t){const n=Sf(e,!0).delete(t);return new Ef(n).toPromise()}class Af{async _openDb(){return this.db||(this.db=await Tf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wf._getInstance(If()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new kf(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tf();return await Nf(e,"__sak","1"),await Rf(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Nf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Sf(e,!1).get(t),i=await new Ef(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Rf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Sf(e,!1).getAll();return new Ef(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Af.type="LOCAL";const Of=Af;
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
 */function Lf(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=zd("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Pf(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Pf("rcb"),new Qd(3e4,6e4);async function Df(e,t,n){var i;const r=await n.verify();try{let o;if(qd("string"==typeof r,e,"argument-error"),qd("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){qd("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return rh(e,"POST","/v2/accounts/mfaEnrollment:start",ih(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{qd("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;qd(n,e,"missing-multi-factor-info");const s=await function(e,t){return rh(e,"POST","/v2/accounts/mfaSignIn:start",ih(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return rh(e,"POST","/v1/accounts:sendVerificationCode",ih(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Mf{verifyPhoneNumber(e,t){return Df(this.auth,e,is(t))}static credential(e,t){return Kh._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Mf.credentialFromTaggedObject(t)}static credentialFromError(e){return Mf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Kh._fromTokenResponse(t,n):null}constructor(e){this.providerId=Mf.PROVIDER_ID,this.auth=Fh(e)}}
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
function Uf(e,t){return t?Xd(t):(qd(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Mf.PROVIDER_ID="phone",Mf.PHONE_SIGN_IN_METHOD="phone";class Ff extends qh{_getIdTokenResponse(e){return Vh(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vh(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vh(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Bf(e){return hf(e.auth,new Ff(e),e.bypassAuthState)}function zf(e){const{auth:t,user:n}=e;return qd(n,t,"internal-error"),df(n,new Ff(e),e.bypassAuthState)}async function jf(e){const{auth:t,user:n}=e;return qd(n,t,"internal-error"),uf(n,new Ff(e),e.bypassAuthState)}
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
 */class Wf{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bf;case"linkViaPopup":case"linkViaRedirect":return jf;case"reauthViaPopup":case"reauthViaRedirect":return zf;default:Bd(this.auth,"internal-error")}}resolve(e){$d(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$d(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const qf=new Qd(2e3,1e4);class Hf extends Wf{async executeNotNull(){const e=await this.execute();return qd(e,this.auth,"internal-error"),e}async onExecution(){$d(1===this.filter.length,"Popup operations only handle one event");const e=xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(zd(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(zd(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hf.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(zd(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qf.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Hf.currentPopupAction&&Hf.currentPopupAction.cancel(),Hf.currentPopupAction=this}}Hf.currentPopupAction=null;
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
const $f=new Map;class Vf extends Wf{async execute(){let e=$f.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Kf(t),i=Gf(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}$f.set(this.auth._key(),e)}return this.bypassAuthState||$f.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Xf(e,t){$f.set(e._key(),t)}function Gf(e){return Xd(e._redirectPersistence)}function Kf(e){return xh("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Jf(e,t,n=!1){const i=Fh(e),r=Uf(i,t),o=new Vf(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Yf{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zf(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zf(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(zd(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Qf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Zf({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const ep=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tp=/^https?/;async function np(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return rh(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ip(e))return}catch(e){}Bd(e,"unauthorized-domain")}function ip(e){const t=Gd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!tp.test(n))return!1;if(ep.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const rp=new Qd(3e4,6e4);function op(){const e=Cf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let sp=null;function ap(e){return sp=sp||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{op(),n(zd(e,"network-request-failed"))},timeout:rp.get()})}if(null===(r=null===(i=Cf().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Cf().gapi)||void 0===o?void 0:o.load)){const t=Pf("iframefcb");return Cf()[t]=()=>{gapi.load?s():n(zd(e,"network-request-failed"))},Lf(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw sp=null,e}))}(e),sp}
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
 */const lp=new Qd(5e3,15e3),cp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},up=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dp(e){const t=e.config;qd(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Zd(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.17.1"},r=up.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Xo(i).slice(1)}`}
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
const hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class fp{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function pp(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hp),{width:i.toString(),height:r.toString(),top:o,left:s}),c=Eo().toLowerCase();n&&(a=Sh(c)?"_blank":n),Ih(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Eo()){var t;return Oh(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new fp(null);const d=window.open(t||"",a,u);qd(d,e,"popup-blocked");try{d.focus()}catch(e){}return new fp(d)}function mp(e,t,n,i,r,o){qd(e.config.authDomain,e,"auth-domain-config-required"),qd(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.17.1",eventId:r};if(t instanceof Qh){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",qo(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Zh){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Zd(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${Xo(a).slice(1)}`}const gp=class{async _openPopup(e,t,n,i){var r;$d(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return pp(e,mp(e,t,n,Gd(),i),xf())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=mp(e,t,n,Gd(),i),Cf().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):($d(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ap(e),n=Cf().gapi;return qd(n,e,"internal-error"),t.open({where:document.body,url:dp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cp,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=zd(e,"network-request-failed"),o=Cf().setTimeout((()=>{i(r)}),lp.get());function s(){Cf().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Yf(e);return t.register("authEvent",(t=>{qd(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Bd(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=np(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ph()||Eh()||Oh()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_f,this._completeRedirectFn=Jf,this._overrideRedirectResult=Xf}};
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
class yp{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qd(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const bp=ko("authIdTokenMaxAge")||300;let vp=null;var _p;function wp(){document.querySelector("body").classList.contains("dark")?(e(lr).Report.init({borderRadius:"15px",backgroundColor:"rgba(0, 0, 0, 0.2)",info:{svgColor:"#ff6b08",titleColor:"bisque",messageColor:"bisque",buttonBackground:"#ff6b08",buttonColor:"bisque",backOverlayColor:"rgba(0, 0, 0, 0.2)"},success:{svgColor:"#ff6b08",titleColor:"bisque",messageColor:"bisque",buttonBackground:"#ff6b08",buttonColor:"bisque",backOverlayColor:"rgba(0, 0, 0, 0.2)"},warning:{svgColor:"#ff6b08",titleColor:"bisque",messageColor:"bisque",buttonBackground:"#ff6b08",buttonColor:"bisque",backOverlayColor:"rgba(0, 0, 0, 0.2)"}}),e(lr).Confirm.init({borderRadius:"15px",backgroundColor:"rgba(0, 0, 0, 0.2)",titleColor:"bisque",backOverlayColor:"rgba(0, 0, 0, 0.2)",messageColor:"bisque",okButtonColor:"bisque",okButtonBackground:"#ff6b08",cancelButtonColor:"bisque",cancelButtonBackground:"#ff6b08"})):(e(lr).Report.init({borderRadius:"15px",info:{svgColor:"#ff6b08",buttonBackground:"#ff6b08",backOverlayColor:"rgba(0, 0, 0, 0.2)"},success:{svgColor:"#ff6b08",buttonBackground:"#ff6b08",backOverlayColor:"rgba(0, 0, 0, 0.2)"},warning:{svgColor:"#ff6b08",buttonBackground:"#ff6b08",backOverlayColor:"rgba(0, 0, 0, 0.2)"}}),e(lr).Confirm.init({borderRadius:"15px",backOverlayColor:"rgba(0, 0, 0, 0.2)",titleColor:"#ff6b08",okButtonBackground:"#ff6b08",cancelButtonBackground:"#ff6b08"}))}_p="Browser",Fs(new rs("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{qd(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),qd(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:_p,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dh(_p)},s=new Uh(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Xd);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Fs(new rs("auth-internal",(e=>{const t=Fh(e.getProvider("auth").getImmediate());return new yp(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Hs("@firebase/auth","0.21.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_p)),Hs("@firebase/auth","0.21.3","esm2017");const xp=function(e=qs(),t){const n=Bs(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=xo("database");e&&function(e,t,n,i={}){(e=is(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&ga("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ga('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Oa(Oa.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:Io(i.mockUserToken,e.app.options.projectId);o=new Oa(t)}!function(e,t,n,i){e.repoInfo_=new Pa(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...e)}return n}(Ws({apiKey:"AIzaSyCT3xbHZQ820MQlv13DaR9eYdlGcCeUNEE",authDomain:"filmogram-6d876.firebaseapp.com",databaseURL:"https://filmogram-6d876-default-rtdb.firebaseio.com",projectId:"filmogram-6d876",storageBucket:"filmogram-6d876.appspot.com",messagingSenderId:"766146491455",appId:"1:766146491455:web:e2843b8d054e83cd60748a"})),kp=function(e=qs()){const t=Bs(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Bs(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if($o(n.getOptions(),null!=t?t:{}))return e;Bd(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gp,persistence:[Of,bf,_f]}),i=ko("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>bp)return;const i=null==t?void 0:t.token;vp!==i&&(vp=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){is(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){is(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=wo("auth");return o&&zh(n,`http://${o}`),n}();let Cp;const Ip=document.querySelector("#myLibrary"),Ep=document.querySelector(".auth-modal__form"),Sp=document.querySelector("#checkbox"),Tp=document.querySelector(".auth-modal__button_register"),Np=document.querySelector(".header-nav__logout-btn"),Rp=document.querySelector(".header-nav__login-btn"),Ap=document.querySelector(".login"),Op=document.querySelector(".logout");function Lp(t){t.preventDefault(),wp();const n=document.querySelector("#email").value,i=document.querySelector("#password").value;!1!==Dp(n)&&!1!==Mp(i)?(mf(kp,n,i).then((t=>{const n=t.user,i=new Date;Td(Id(xp,"users/"+n.uid),{last_login:i}),nm(),Ep.reset(),Up(),e(lr).Report.success("Hello there!","Welcome back to Filmoteka!","Thanks!")})).catch((t=>{e(lr).Report.warning("Something went wrong","Please, try to sign up","Okay")})),Cp=kp.currentUser):e(lr).Notify.failure("Sorry, the email or password doesn't meet the criteria")}function Pp(t){t.preventDefault(),wp();const n=document.querySelector("#name").value,i=document.querySelector("#email").value,r=document.querySelector("#password").value;!1!==Dp(i)&&!1!==Mp(r)?(pf(kp,i,r).then((t=>{const r=t.user;Sd(Id(xp,"users/"+r.uid),{username:n,email:i}),nm(),Ep.reset(),e(lr).Report.success("Cool!","Welcome to Filmoteka! Enjoy your movies 😎","Thanks!")})).catch((t=>{e(lr).Report.warning("User with such email already exists!")})),Cp=kp.currentUser):e(lr).Notify.failure("Sorry, the email or password doesn't meet the criteria")}function Dp(e){return!0===/^[^@]+@\w+(\.\w+)+\w$/.test(e)}function Mp(e){return!(e.length<6)}function Up(){Rp&&Np&&(Ap.classList.add("visually-hidden"),Op.classList.remove("visually-hidden"))}var Fp,Bp,zp;Ip.addEventListener("click",(function(){null===kp.currentUser?(Ip.removeAttribute("href"),e(lr).Notify.failure("Oops, please Sign In first")):Ip.setAttribute("href","./library.html")})),Ep&&Ep.addEventListener("submit",Lp),Sp&&(Sp.onchange=function(){this.checked?(Tp.classList.remove("disabled_for_signUp"),Tp.removeAttribute("disabled")):(Tp.classList.add("disabled_for_signUp"),Tp.setAttribute("disabled","disabled"))}),Np&&Np.addEventListener("click",(t=>{wp(),e(lr).Confirm.show("Exit confirmation","We hope you had a good time! Confirm exit?","Yes","No",(function(){var t;(t=kp,is(t).signOut()).catch((t=>{e(lr).Report.warning("Hah","Did you think you would escape so easily? Have one more try 😁","Dammit")})),e(lr).Report.success("Log out successful")}),(function(){}))})),Fp=e=>{e?(e.uid,Up()):Rp&&Np&&(Ap.classList.remove("visually-hidden"),Op.classList.add("visually-hidden"))},is(kp).onAuthStateChanged(Fp,Bp,zp);const jp=document.querySelector(".js-open"),Wp=document.querySelector(".js-close"),qp=document.querySelector(".js-auth-modal"),Hp=document.querySelector(".signUp_now__link"),$p=document.querySelector(".signIn_now__link"),Vp=document.querySelector(".auth-modal__name"),Xp=document.querySelector(".auth-modal__wrap_checkbox"),Gp=document.querySelector(".auth-modal__titleIn"),Kp=document.querySelector(".auth-modal__titleUp"),Jp=document.querySelector(".auth-modal__button_confirm"),Yp=document.querySelector(".auth-modal__button_register"),Qp=document.querySelector(".signUp_now"),Zp=document.querySelector(".signIn_now"),em=document.querySelector(".auth-modal__form");function tm(){qp.classList.toggle("is-hidden")}function nm(){qp.classList.add("is-hidden"),Wp.removeEventListener("click",nm),document.body.removeAttribute("style")}function im(e){e.currentTarget===e.target&&(document.body.removeAttribute("style"),tm(),document.removeEventListener("keydown",rm),qp.removeEventListener("click",im))}function rm(e){"Escape"==e.code&&(tm(),document.removeEventListener("keydown",rm),Wp.removeEventListener("click",nm),qp.removeEventListener("click",im))}jp.addEventListener("click",(function(e){e.preventDefault(),tm(),document.addEventListener("keydown",rm),document.body.style.overflow="hidden",Wp.addEventListener("click",nm),qp.addEventListener("click",im)})),Wp.addEventListener("click",nm),qp.addEventListener("click",im),Hp.addEventListener("click",(function(e){e.preventDefault(),Vp.classList.remove("visually-hidden"),Xp.classList.remove("visually-hidden"),Gp.classList.add("visually-hidden"),Kp.classList.remove("visually-hidden"),Jp.classList.add("visually-hidden"),Yp.classList.remove("visually-hidden"),Qp.classList.add("visually-hidden"),Zp.classList.remove("visually-hidden"),em.addEventListener("submit",Pp),em.removeEventListener("submit",Lp)})),$p.addEventListener("click",(function(e){e.preventDefault(),Vp.classList.add("visually-hidden"),Xp.classList.add("visually-hidden"),Gp.classList.remove("visually-hidden"),Kp.classList.add("visually-hidden"),Jp.classList.remove("visually-hidden"),Yp.classList.add("visually-hidden"),Qp.classList.remove("visually-hidden"),Zp.classList.add("visually-hidden"),em.addEventListener("submit",Lp),em.removeEventListener("submit",Pp)}));const om=document.querySelector(".brightness__btn"),sm=window.matchMedia("(prefers-color-scheme: dark)");sm.matches?(document.body.classList.remove("dark"),om.style.fill="$red-font-color"):(document.body.classList.add("dark"),om.style.fill="$white-font-color"),sm.addListener((e=>{document.body.classList.add("dark");!1===e.matches&&document.body.classList.remove("dark")})),om.addEventListener("click",(()=>document.body.classList.toggle("dark")));({el:document.querySelector(".up-btn__icon"),show(){this.el.classList.remove("up-btn-wrapper")},hide(){this.el.classList.add("up-btn-wrapper")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>400?this.show():this.hide()})),document.querySelector(".up-btn__icon").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();const am=document.querySelector(".search-form__input"),lm=new Nn,cm=document.getElementById("tags"),um=(document.querySelector(".films__list"),document.querySelector(".pagination-container"));let dm=[];!async function(){try{(await lm.fetchGenresId()).forEach((e=>{const t=document.createElement("li");t.classList.add("tag"),t.id=e.id,t.innerHTML=e.name,cm.append(t),t.addEventListener("click",(()=>{am.value="",t.classList.toggle("tag--active"),0==dm.length?dm.push(e.id):dm.includes(e.id)?dm.forEach(((t,n)=>{t==e.id&&dm.splice(n,1)})):dm.push(e.id);!async function(e){try{const t=await lm.fetchMovies(e),n=t.data.results;localStorage.setItem("genresList",e),localStorage.setItem("totalPages",t.data.total_pages);let i=new Event("reset");um.dispatchEvent(i),function(e){localStorage.setItem("storagePage",JSON.stringify(e)),Tr()}(n)}catch(e){console.log(e.message)}}(dm.join(","))}))}))}catch(e){console.log(e)}}();
//# sourceMappingURL=library.2329ce11.js.map
