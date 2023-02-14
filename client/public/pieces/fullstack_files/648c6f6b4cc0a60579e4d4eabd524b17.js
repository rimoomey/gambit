(function(){'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a){var b;a:{if(b=p.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function ca(a){ca[" "](a);return a}ca[" "]=function(){};var da={},q=null;var ea="undefined"!==typeof Uint8Array;const fa=!(aa("Trident")||aa("MSIE"))&&"function"===typeof p.btoa;
function ha(a){if(!fa){var b;void 0===b&&(b=0);if(!q){q={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var g=c.concat(d[e].split(""));da[e]=g;for(var f=0;f<g.length;f++){var h=g[f];void 0===q[h]&&(q[h]=f)}}}b=da[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=g=0;g<a.length-2;g+=3){var k=a[g],l=a[g+1];h=a[g+2];f=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=f+k+l+h}f=0;h=d;switch(a.length-
g){case 2:f=a[g+1],h=b[(f&15)<<2]||d;case 1:a=a[g],c[e]=b[a>>2]+b[(a&3)<<4|f>>4]+h+d}return c.join("")}for(b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);return btoa(b)}var ia={};let ka;var la=class{constructor(a){if(ia!==ia)throw Error("illegal external caller");this.H=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}};const u=Symbol();function v(a,b){if(u)return a[u]|=b;if(void 0!==a.o)return a.o|=b;Object.defineProperties(a,{o:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function ma(a,b){const c=w(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),x(a,c|b));return a}function w(a){let b;u?b=a[u]:b=a.o;return null==b?0:b}function x(a,b){u?a[u]=b:void 0!==a.o?a.o=b:Object.defineProperties(a,{o:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function y(a){v(a,1);return a}function z(a){return!!(w(a)&2)}function na(a){v(a,16);return a}function oa(a,b){x(b,(a|0)&-51)}function A(a,b){x(b,(a|18)&-41)};var C={};function D(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let pa;const qa=[];x(qa,23);var E=Object.freeze(qa);function G(a){if(z(a.j))throw Error("Cannot mutate an immutable Message");}function ra(a){var b=a.length;(b=b?a[b-1]:void 0)&&D(b)?b.g=1:a.push({g:1})};let J;function sa(a,b){J=b;a=new a(b);J=void 0;return a};function ta(a){const b=a.i+a.s;return a.l||(a.l=a.j[b]={})}function L(a,b,c){return-1===b?null:b>=a.i?a.l?a.l[b]:void 0:c&&a.l&&(c=a.l[b],null!=c)?c:a.j[b+a.s]}function M(a,b,c,d){a.m&&(a.m=void 0);b>=a.i||d?ta(a)[b]=c:(a.j[b+a.s]=c,(a=a.l)&&b in a&&delete a[b])}
function ua(a,b,c,d){let e=L(a,b);Array.isArray(e)||(e=E);const g=w(e);g&1||y(e);if(d)g&2||v(e,2),c&1||Object.freeze(e);else{d=!(c&2);const f=g&2;c&1||!f?d&&g&16&&!f&&(a=e,u?a[u]&&(a[u]&=-17):void 0!==a.o&&(a.o&=-17)):(e=y(Array.prototype.slice.call(e)),M(a,b,e))}return e}function va(a,b){G(a);""!==b?M(a,2,b):M(a,2,void 0,!1)}
function ya(a,b,c){var d=L(a,c,!1);{let g=!1;var e=null==d||"object"!==typeof d||(g=Array.isArray(d))||d.B!==C?g?new b(d):void 0:d}e!==d&&null!=e&&(M(a,c,e,!1),v(e.j,w(a.j)&18));b=e;if(null==b)return b;z(a.j)||(d=za(b),d!==b&&(b=d,M(a,c,b,!1)));return b}
function N(a,b,c){var d=z(a.j);a.h||(a.h={});var e=a.h[c];var g=ua(a,c,3,d);if(e)d||(g=Object.isFrozen(e),d&&!g?Object.freeze(e):!d&&g&&(e=Array.prototype.slice.call(e),a.h[c]=e));else{var f=g;e=[];var h=!!(w(a.j)&16);g=z(f);const r=f;!d&&g&&(f=Array.prototype.slice.call(f));var k=g;let n=0;for(;n<f.length;n++){var l=f[n];var m=b;m=Array.isArray(l)?new m(l):void 0;if(void 0===m)continue;l=m.j;const B=w(l);let t=B;g&&(t|=2);h&&(t|=16);t!=B&&x(l,t);l=t;k||(k=!!(2&l));e.push(m)}a.h[c]=e;h=w(f);b=h|33;
b=k?b&-9:b|8;h!=b&&(k=f,Object.isFrozen(k)&&(k=Array.prototype.slice.call(k)),x(k,b),f=k);r!==f&&M(a,c,f);(d||d&&g)&&v(e,2);d&&Object.freeze(e)}a=ua(a,c,3,d);if(!(d||w(a)&8)){for(d=0;d<e.length;d++)c=e[d],g=za(c),c!==g&&(e[d]=g,a[d]=g.j);v(a,8)}return e}function O(a,b){a=L(a,b);return null==a?"":a}function P(a,b){a=L(a,b);a=null==a?a:!!a;return null==a?!1:a};function Aa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(w(a)&128))return a=Array.prototype.slice.call(a),ra(a),a}else{if(ea&&null!=a&&a instanceof Uint8Array)return ha(a);if(a instanceof la){const b=a.H;return null==b?"":"string"===typeof b?b:a.H=ha(b)}}}return a};function Ba(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Ca(a,b,c,void 0!==d);else if(D(a)){const e={};for(let g in a)e[g]=Ba(a[g],b,c,d);a=e}else a=b(a,d);return a}}function Ca(a,b,c,d){const e=w(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(let g=0;g<a.length;g++)a[g]=Ba(a[g],b,c,d);c(e,a);return a}function Da(a){return a.B===C?a.toJSON():Aa(a)}function Ea(a,b){a&128&&ra(b)};function Fa(a,b,c=A){if(null!=a){if(ea&&a instanceof Uint8Array)return a.length?new la(new Uint8Array(a)):ka||(ka=new la(null));if(Array.isArray(a)){const d=w(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return x(a,d|2),a;a=Ca(a,Fa,d&4?A:c,!0);b=w(a);b&4&&b&2&&Object.freeze(a);return a}return a.B===C?Ga(a):a}}
function Ha(a,b,c,d,e,g,f){if(a=a.h&&a.h[c]){d=w(a);d&2?d=a:(g=Array.prototype.map.call(a,Ga,void 0),A(d,g),Object.freeze(g),d=g);G(b);g=null==d?E:y([]);if(null!=d){f=!!d.length;for(a=0;a<d.length;a++){const h=d[a];f=f&&!z(h.j);g[a]=h.j}g=ma(g,(f?8:0)|1);b.h||(b.h={});b.h[c]=d}else b.h&&(b.h[c]=void 0);M(b,c,g,e)}else d=Fa(d,g,f),G(b),M(b,c,d,e)}function Ga(a){if(z(a.j))return a;a=Ia(a,!0);v(a.j,2);return a}
function Ia(a,b){const c=a.j;var d=na([]),e=a.constructor.h;e&&d.push(e);e=a.l;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var g={};d[d.length-1]=g}0!==(w(c)&128)&&ra(d);b=b||z(a.j)?A:oa;d=sa(a.constructor,d);a.F&&(d.F=a.F.slice());g=!!(w(c)&16);const f=e?c.length-1:c.length;for(let h=0;h<f;h++)Ha(a,d,h-a.s,c[h],!1,g,b);if(e)for(const h in e)Ha(a,d,+h,e[h],!0,g,b);return d}function za(a){if(!z(a.j))return a;const b=Ia(a,!1);b.m=a;return b};var Q=class{constructor(a,b,c){null==a&&(a=J);J=void 0;var d=0<(this.constructor.i||0),e=this.constructor.h,g=!1;if(null==a){a=e?[e]:[];var f=48;var h=!0;d&&(f|=128);x(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();let k=f=v(a,0);if(h=0!==(16&k))(g=0!==(32&k))||(k|=32);if(d){if(0<a.length){const l=a[a.length-1];if(D(l)&&"g"in l){k|=128;delete l.g;let m=!0;for(let r in l){m=!1;break}m&&a.pop()}else throw Error();}}else if(128&k)throw Error();f!==k&&x(a,k)}this.s=e?0:-1;this.h=
void 0;this.j=a;a:{f=this.j.length;e=f-1;if(f&&(f=this.j[e],D(f))){this.l=f;this.i=e-this.s;break a}void 0!==b&&-1<b?(this.i=Math.max(b,e+1-this.s),this.l=void 0):this.i=Number.MAX_VALUE}if(!d&&this.l&&"g"in this.l)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=h&&!g&&!0;d=this.i;let k;for(h=0;h<c.length;h++)g=c[h],g<d?(g+=this.s,(e=a[g])?Ja(e,b):a[g]=E):(k||(k=ta(this)),(e=k[g])?Ja(e,b):k[g]=E)}}toJSON(){const a=this.j;return pa?a:Ca(a,Da,Ea)}};
function Ja(a,b){if(Array.isArray(a)){var c=w(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&x(a,c|d)}}Q.prototype.B=C;Q.prototype.toString=function(){return this.j.toString()};function Ka(a,b){return Aa(b)};var La=class extends Q{constructor(a){super(a)}};function Ma(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{C:a.slice(0,b)+"&act=1"+a.slice(b),D:decodeURIComponent(c[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;let d="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),d=a.slice(b)));return{C:`${c}&act=1${d}`,D:`${c}&dct=1${d}`}}return null};function Na(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var S=class{constructor(a,b){this.h=b===R?a:""}toString(){return this.h.toString()}};S.prototype.i=!0;var Oa;try{new URL("s://g"),Oa=!0}catch(a){Oa=!1}var Pa=Oa,R={},Qa=new S("about:invalid#zClosurez",R);function T(a,b){if(!(b instanceof S||b instanceof S)){b="object"==typeof b&&b.i?b.h.toString():String(b);b:{var c=b;if(Pa){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"===c&&(b="about:invalid#zClosurez");b=new S(b,R)}a.href=b instanceof S&&b.constructor===S?b.h:"type_error:SafeUrl"};var Ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ta(a,b){var c=[];for(d in b)Sa(d,b[d],c);b=c.join("&");if(b){c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a};/*

 SPDX-License-Identifier: Apache-2.0
*/
class Ua{constructor(a){this.I=a}}function U(a){return new Ua(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Va=new Ua(a=>/^[^:]*([/?#]|$)/.test(a));var Wa=U("http"),Xa=U("https"),Ya=U("ftp"),Za=U("mailto"),$a=U("intent"),ab=U("market"),bb=U("itms"),cb=U("itms-appss");const db=[U("data"),Wa,Xa,Za,Ya,Va];function eb(a,b=db){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof Ua&&d.I(a))return new S(a,R)}}function fb(a,b=db){return eb(a,b)||Qa};function gb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}function ib(a=document){return a.createElement("img")};function jb(a,b,c=null,d=!1){kb(a,b,c,d)}function kb(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=ib(a.document);if(c||d){const g=f=>{c&&c(f);if(d){f=a.google_image_requests;const h=Array.prototype.indexOf.call(f,e,void 0);0<=h&&Array.prototype.splice.call(f,h,1)}e.removeEventListener&&e.removeEventListener("load",g,!1);e.removeEventListener&&e.removeEventListener("error",g,!1)};Na(e,"load",g);Na(e,"error",g)}e.src=b;a.google_image_requests.push(e)}
function lb(a){var b;if(b=p.navigator)b=p.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&p.navigator.sendBeacon?p.navigator.sendBeacon(a):jb(p,a,void 0,!1)};var nb=window;const ob=[Wa,Xa,Za,Ya,Va,ab,bb,$a,cb];function pb(a,b){if(a instanceof S)return a;const c=fb(a,ob);c===Qa&&b(a);return c}var qb=()=>{var a=`${"http:"===nb.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b=Ta(a,{id:"unsafeurl",ctx:599,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};class rb{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const sb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var tb=class{constructor(a,b){this.h=a;this.i=b}},ub=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function V(a,b){const c={};c[a]=b;return[c]}function vb(a,b,c,d,e){const g=[];gb(a,function(f,h){(f=wb(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)}
function wb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const g=[];for(let f=0;f<a.length;f++)g.push(wb(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(vb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function xb(a){let b=1;for(const c in a.i)b=c.length>b?c.length:b;return 3997-b-a.m.length-1}
function yb(a,b){let c="https://pagead2.googlesyndication.com"+b,d=xb(a)-b.length;if(0>d)return"";a.h.sort(function(g,f){return g-f});b=null;let e="";for(let g=0;g<a.h.length;g++){const f=a.h[g],h=a.i[f];for(let k=0;k<h.length;k++){if(!d){b=null==b?f:b;break}let l=vb(h[k],a.m,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.m;break}b=null==b?f:b}}}a="";null!=b&&(a=e+"trn="+b);return c+a}class Db{constructor(){this.m="&";this.i={};this.u=0;this.h=[]}};function Eb(){var a=Fb,b=window.google_srt;0<=b&&1>=b&&(a.u=b)}function Gb(a){var b=Hb.h;if(Math.random()<b.i)try{let c;a instanceof Db?c=a:(c=new Db,gb(a,(e,g)=>{var f=c;const h=f.u++;e=V(g,e);f.h.push(h);f.i[h]=e}));const d=yb(c,b.m+"unsafeurl&");d&&(b.h?lb(d):jb(p,d))}catch(c){}}class Ib{constructor(a,b,c=!1){this.m=a;this.i=b;this.h=c;this.u=Math.random()}};let Jb=null;function Kb(){const a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Lb(){const a=p.performance;return a&&a.now?a.now():null};class Mb{constructor(a,b){var c=Lb()||Kb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const W=p.performance,Nb=!!(W&&W.mark&&W.measure&&W.clearMarks),X=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Nb){var b;if(null===Jb){Jb="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Jb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Jb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ob(a){a&&W&&X()&&(W.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),W.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Pb{constructor(){var a=window;this.events=[];this.i=a||p;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=X()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new Mb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;W&&X()&&W.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(Lb()||Kb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;W&&X()&&W.mark(b);!this.h||
2048<this.events.length||this.events.push(a)}}};function Qb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}class Rb{constructor(){this.h=new Ib("/pagead/gen_204",1,!0)}pinger(){return this.h}};let Fb;const Y=new Pb;var Sb=()=>{window.google_measure_js_timing||(Y.h=!1,Y.events!=Y.i.google_js_reporting_queue&&(X()&&Array.prototype.forEach.call(Y.events,Ob,void 0),Y.events.length=0))};(a=>{Fb=null!=a?a:new Ib("/pagead/gen_204?id=",.01);"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Eb();"complete"==window.document.readyState?Sb():Y.h&&Na(window,"load",()=>{Sb()})})();function Tb(a){const {A:b,v:c}=Ub(a.href);T(a,pb(b,qb()));return c}function Vb(a,b,c=-1){if(b)if(300>Date.now()-c)a=!1;else if(b=a.getAttribute("data-orig-async-clicktrack-url")){const {A:d,v:e}=Ub(b);T(a,pb(d,qb()));a=e}else a.setAttribute("data-orig-async-clicktrack-url",a.href),a=Tb(a);else a=Tb(a);return a}function Ub(a){const b=Ma(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(Wb(b.C,"&ri=1"),"")?{A:b.D,v:!0}:{A:Wb(a,"&ri=2"),v:!1}:{A:Wb(a,"&ri=16"),v:!1}:{A:a,v:!1}}
function Wb(a,b){const c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)}function Xb(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==Ma(a)};function Yb(a=!1){var b=Z,c=Date.now();if(!isNaN(c)&&0<c){var d=b.dataset.onReadyTs;d=d?parseInt(d,10):NaN;!a&&!isNaN(d)&&0<d||(b.dataset.onReadyTs=String(c))}};var Zb=class extends Q{constructor(a){super(a)}};var ac=class extends Q{constructor(a){super(a,-1,$b)}},$b=[1];var cc=class extends Q{constructor(a){super(a,-1,bc)}},bc=[1,2];var dc=class extends Q{constructor(a){super(a)}};function ec(a,b){(a=O(a,5))&&jb(nb,a+"&label="+b)}function fc(a,b){!isNaN(b)&&0<b&&(isNaN(a.h)||a.h<b)&&(a.h=b)}
class gc{constructor(){this.h=NaN}filter(a,b){const c=ya(a,cc,4);if(!c)return!0;for(var d of N(c,ac,1)){a:{var e=d;var g=b,f=O(e,2);f=f?document.querySelectorAll(f):[g.currentTarget];for(let r=0;r<f.length;++r){const n=f[r].getBoundingClientRect();var h=e,k=z(h.j),l=ua(h,1,1,k);const B=w(l);if(!(B&4)){Object.isFrozen(l)&&(l=y(l.slice()),M(h,1,l));let t=0,F=0;for(;t<l.length;t++){var m=l[t];m=null==m?m:"number"===typeof m||"NaN"===m||"Infinity"===m||"-Infinity"===m?Number(m):void 0;null!=m&&(l[F++]=
m)}F<t&&(l.length=F);v(l,5);k&&(v(l,2),Object.freeze(l))}!k&&(B&2||Object.isFrozen(l))&&(l=Array.prototype.slice.call(l),v(l,5),k=l,k=null==k?E:ma(k,1),G(h),M(h,1,k));h=g.clientX;k=g.clientY;if(h>=n.left&&h<=n.right&&k>=n.top&&k<=n.bottom&&(k-l[0]<n.top||h+l[1]>n.right||k+l[2]>n.bottom||h-l[3]<n.left)){e=!1;break a}}e=!0}if(!e)return ec(a,"blocked_border_click"),!1}for(const r of N(c,Zb,2))if(d=r,e=b.currentTarget,g=e.dataset.onReadyTs,fc(this,g?parseInt(g,10):NaN),e=e.dataset.onShowTs,fc(this,e?
parseInt(e,10):NaN),e=this.h,(e=isNaN(e)||!(0<e))||(d=L(d,1),e=Date.now()<this.h+(null==d?0:d)),e)return ec(a,"blocked_fast_click"),!1;return P(c,3)&&"function"==typeof p.copfcChm?(p.copfcChm(b),ec(a,"onepointfiveclick_first_click"),!1):!0}};var Hb=new Rb;function hc(){return a=>{a=Ta("https://pagead2.googlesyndication.com/pagead/gen_204",{id:"unsafeurl",ctx:620,url:a});navigator.sendBeacon&&navigator.sendBeacon(a,"")}};function ic(a,b){const c=fb(a,jc);if(c===Qa){a=Error("URL not recognized as safe: "+a);let H;try{const I=new Db;var d=I;d.h.push(1);d.i[1]=V("context",b);a.error&&a.meta&&a.id||(a=new rb(a,{message:Qb(a)}));if(a.msg){d=I;var e=a.msg.substring(0,512);d.h.push(2);d.i[2]=V("msg",e)}e=I;var g=[a.meta||{}];e.h.push(3);e.i[3]=g;a=p;g=[];let ba;e=null;do{var f=a;try{var h;if(h=!!f&&null!=f.location.href)b:{try{ca(f.foo);h=!0;break b}catch(K){}h=!1}var k=h}catch(K){k=!1}k?(ba=f.location.href,e=f.document&&
f.document.referrer||null):(ba=e,e=null);g.push(new ub(ba||""));try{a=f.parent}catch(K){a=null}}while(a&&f!=a);for(let K=0,zb=g.length-1;K<=zb;++K)g[K].depth=zb-K;f=p;if(f.location&&f.location.ancestorOrigins&&f.location.ancestorOrigins.length==g.length-1)for(k=1;k<g.length;++k){var l=g[k];l.url||(l.url=f.location.ancestorOrigins[k-1]||"",l.G=!0)}var m=g;let wa=new ub(p.location.href,!1);f=null;const xa=m.length-1;for(l=xa;0<=l;--l){var r=m[l];!f&&sb.test(r.url)&&(f=r);if(r.url&&!r.G){wa=r;break}}r=
null;const nc=m.length&&m[xa].url;0!=wa.depth&&nc&&(r=m[xa]);H=new tb(wa,r);if(H.i){m=I;var n=H.i.url||"";m.h.push(4);m.i[4]=V("top",n)}var B={url:H.h.url||""};if(H.h.url){var t=H.h.url.match(Ra),F=t[1],Ab=t[3],Bb=t[4];n="";F&&(n+=F+":");Ab&&(n+="//",n+=Ab,Bb&&(n+=":"+Bb));var Cb=n}else Cb="";F=I;B=[B,{url:Cb}];F.h.push(5);F.i[5]=B;Gb(I)}catch(I){try{Gb({context:"ecmserr",rctx:b,msg:Qb(I),url:H&&H.h.url})}catch(ba){}}}return c}var jc=[Xa,$a,ab,bb,cb];function kc(a,b){a.dispatchEvent(new CustomEvent("customError",{detail:{message:b}}))}
function lc(a){const b=a.currentTarget;let c=a.type;null!=a.clientX&&null!=a.clientY&&(c+=` [${a.clientX},${a.clientY}]`);a=a.target;let d=!1,e=!1,g=!1;for(;a!==b;){var f=a.attributes;for(var h=0;h<f.length;++h){var k=f[h];!d&&k.name.match(/^x-.+-l$/)?(c="[l="+k.value+"]"+c,d=!0):!e&&k.name.match(/^x-.+-v$/)?(c="[v="+k.value+"]"+c,e=!0):!g&&k.name.match(/^x-.+-e$/)&&(c="[e="+k.value+"]"+c,g=!0)}f=a.parentElement||b;if(!g)for(h=f.children,k=0;k<h.length;k++)if(h[k]===a){c=`>${k}`+c;break}a=f}return c}
;function mc(a){for(;!a.id;){const b="goog-js-util-"+Math.random().toString(36).substr(2,5);if(!document.getElementById(b)){a.id=b;break}}return a.id}var oc=class{constructor(){this.h=!1}};var qc=function(a){return b=>{if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);b=sa(a,na(b))}return b}}(class extends Q{constructor(a){super(a,-1,pc)}}),pc=[1];function rc(a,b){var c=Z;a.u.h=P(b,2);P(b,4)&&(c.dataset.useCustomTabsInSdk="true");if(O(b,5))for(a=c.querySelectorAll(O(b,5)),b=0;b<a.length;++b)a[b].addEventListener("click",()=>{})}
function sc(a){var b=Z;let c=null,d=null;b.addEventListener("mousedown",e=>{for(var g=e.currentTarget,f=e.target;null!==f&&f!==g.parentElement&&"A"!==f.tagName;)f=f.parentElement;c=f===g.parentElement?null:f;a:{if(null!=a.h){g=e.currentTarget;f=e.target;if(P(a.h,2)&&1==f.children.length&&"SPAN"==f.children[0].tagName){var h=f.children[0],k=h.getBoundingClientRect();k.left<=e.clientX&&e.clientX<=k.right&&k.top<=e.clientY&&e.clientY<=k.bottom&&(f=h)}for(h=N(a.h,dc,1);f!=g.parentElement;){f.matches=
f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.msMatchesSelector||f.oMatchesSelector;for(k=0;k<h.length;++k){const m=h[k];if(f.matches(O(m,1))){d=m;break a}}f=f.parentElement}}d=null}if(c&&d&&O(d,2)){f=d;g=c;if(h=O(f,2))T(g,ic(h,618)),g.target=O(f,3)||"_top";delete g.dataset.u2FinalUrl;delete g.dataset.u2TrackingUrl;(h=O(f,6))&&(g.dataset.u2FinalUrl=h);(h=O(f,7))&&(g.dataset.u2TrackingUrl=h);delete g.dataset.appClickInfo;if(f=ya(f,La,9)){g=g.dataset;a:{pa=!0;try{var l=JSON.stringify(f.toJSON(),
Ka);break a}finally{pa=!1}l=void 0}g.appClickInfo=l}l=e.currentTarget;"function"===typeof window.st?window.st(mc(c)):kc(l,`js-util: st() missing: ${lc(e)}`);P(a.h,6)&&c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN",{bubbles:!0}))}});b.addEventListener("click",e=>{if(c&&d&&O(d,2)&&a.J.filter(d,e)&&!e.defaultPrevented){var g=c,f=e.currentTarget;a:{var h=e.currentTarget;var k=e.target;if(a.u.h&&1==k.children.length&&"SPAN"==k.children[0].tagName){var l=k.children[0];const m=l.getBoundingClientRect();
m.left<=e.clientX&&e.clientX<=m.right&&m.top<=e.clientY&&e.clientY<=m.bottom&&(k=l)}for(;k!=h;){l=k.getAttribute("x-code");if(null!=l){h=parseInt(l,10);break a}k=k.parentElement}h=17}k=h;"function"===typeof window.ja?window.ja(mc(g),k):kc(f,`js-util: ja() missing: ${lc(e)}`);f=e.currentTarget;(h=g.href)?(l=[],0==/&nb=[^&]+/i.test(h)&&l.push("&nb="+k),0==/&nx=[^&]+/i.test(h)&&l.push("&nx="+Math.round(e.clientX-f.offsetLeft)),0==/&ny=[^&]+/i.test(h)&&l.push("&ny="+Math.round(e.clientY-f.offsetTop)),
0<l.length&&(k=l.join(""),l=h.indexOf("&adurl="),h=0>l?h+k:h.substring(0,l)+k+h.substring(l),T(g,pb(h,hc())),kc(f,`js-util: ja() filling: ${k} ${lc(e)}`))):kc(f,`js-util: href is empty: ${lc(e)}`);g=O(d,2);f=g.indexOf("&adurl=");0>f||(g=g.slice(f),f=c.href||"",h=f.indexOf(g),0>h||(k=f.slice(h+g.length))&&T(c,ic(f.slice(0,h)+k+g,619)));P(a.h,6)?(c.dispatchEvent(new CustomEvent("CUSTOM_CLICK",{bubbles:!0})),e.stopImmediatePropagation(),e.preventDefault()):(e=c,(Xb(e.href)||e.getAttribute("data-orig-async-clicktrack-url")&&
Xb(e.getAttribute("data-orig-async-clicktrack-url")))&&P(d,8)&&Vb(c,P(d,10),a.m)&&(a.m=Date.now()))}else e.stopImmediatePropagation(),e.preventDefault()})}function tc(a,b){if(b instanceof CustomEvent)for(const c of b.detail.changeConfigs)b=N(a.h,dc,1).find(d=>O(d,1)===c.selector),void 0!==b&&va(b,c.href)}var uc=class{constructor(){this.h=null;this.J=new gc;this.u=new oc;this.i=!1;this.m=-1}};const Z=document.getElementById("mys-content");if(Z){const a=new uc;Z.addEventListener("browserReady",()=>{a:{var b=Z.getElementsByTagName("META");for(let c=0;c<b.length;++c)if("exit"===b[c].getAttribute("name")){b=b[c].getAttribute("content")||"";break a}b=""}b=b?qc(b):null;a.h=b;a.h&&(Yb(P(a.h,7)),rc(a,a.h),a.i||(a.i=!0,sc(a)))});Z.addEventListener("changeExitConfig",b=>void tc(a,b))};}).call(this);