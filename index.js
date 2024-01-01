// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLogspace=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,f,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function V(r){var e,t,n;if(!I(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var k,P=Object.prototype,N=P.toString,L=P.__defineGetter__,G=P.__defineSetter__,$=P.__lookupGetter__,C=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(r,e,t.get),a&&G&&G.call(r,e,t.set),r};var H=k;function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(r){return"number"==typeof r}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return R&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&X.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var D=M()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[z],e=Y(r,z);try{r[z]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[z]=t:delete r[z],n}:function(r){return Z.call(r)},J=Number,K=J.prototype.toString;var Q=M();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function er(r){return B(r)||rr(r)}function tr(r){return r!=r}W(er,"isPrimitive",B),W(er,"isObject",rr);var nr=Number.POSITIVE_INFINITY,ir=J.NEGATIVE_INFINITY,or=Math.floor;function ar(r){return or(r)===r}function ur(r){return r<nr&&r>ir&&ar(r)}function cr(r){return B(r)&&ur(r)}function fr(r){return rr(r)&&ur(r.valueOf())}function sr(r){return cr(r)||fr(r)}function lr(r){return cr(r)&&r>=0}function pr(r){return fr(r)&&r.valueOf()>=0}function yr(r){return lr(r)||pr(r)}function vr(r){return B(r)&&r>0}function br(r){return rr(r)&&r.valueOf()>0}function gr(r){return vr(r)||br(r)}W(sr,"isPrimitive",cr),W(sr,"isObject",fr),W(yr,"isPrimitive",lr),W(yr,"isObject",pr),W(gr,"isPrimitive",vr),W(gr,"isObject",br);var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};var hr=/./;function wr(r){return"boolean"==typeof r}var mr=Boolean,jr=Boolean.prototype.toString;var Ar=M();function Er(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function Or(r){return wr(r)||Er(r)}function _r(){return new Function("return this;")()}W(Or,"isPrimitive",wr),W(Or,"isObject",Er);var Tr="object"==typeof self?self:null,Sr="object"==typeof window?window:null,Ur="object"==typeof global?global:null,Fr="object"==typeof globalThis?globalThis:null;var xr=function(r){if(arguments.length){if(!wr(r))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _r()}if(Fr)return Fr;if(Tr)return Tr;if(Sr)return Sr;if(Ur)return Ur;throw new Error("unexpected error. Unable to resolve global object.")}(),Ir=xr.document&&xr.document.childNodes,Vr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Pr=/^\s*function\s*([^(]*)/i;function Nr(r){return null!==r&&"object"==typeof r}function Lr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Pr.exec(n.toString()))return e[1]}return Nr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(kr,"REGEXP",Pr),W(Nr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Nr));var Gr="function"==typeof hr||"object"==typeof Vr||"function"==typeof Ir?function(r){return Lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Lr(r).toLowerCase():e};function $r(r){return"function"===Gr(r)}var Cr,Hr=Object,Wr=Object.getPrototypeOf;Cr=$r(Object.getPrototypeOf)?Wr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Br=Cr;var Rr=Object.prototype;function Mr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!dr(r)}(r)&&(e=function(r){return null==r?null:(r=Hr(r),Br(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&$r(e.constructor)&&"[object Function]"===D(e.constructor)&&Y(e,"isPrototypeOf")&&$r(e.isPrototypeOf)&&(e===Rr||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}var Zr="function"==typeof q&&"symbol"==typeof q("foo")&&Y(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;function Xr(r){return ar(r/2)}function Yr(r){return Xr(r>0?r-1:r+1)}function qr(r){return r===nr||r===ir}var zr=Math.sqrt;function Dr(r){return Math.abs(r)}var Jr="function"==typeof Uint32Array;var Kr="function"==typeof Uint32Array?Uint32Array:null;var Qr,re="function"==typeof Uint32Array?Uint32Array:void 0;Qr=function(){var r,e,t;if("function"!=typeof Kr)return!1;try{e=new Kr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Jr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?re:function(){throw new Error("not implemented")};var ee=Qr,te="function"==typeof Float64Array;var ne="function"==typeof Float64Array?Float64Array:null;var ie,oe="function"==typeof Float64Array?Float64Array:void 0;ie=function(){var r,e,t;if("function"!=typeof ne)return!1;try{e=new ne([1,3.14,-3.14,NaN]),t=e,r=(te&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?oe:function(){throw new Error("not implemented")};var ae=ie,ue="function"==typeof Uint8Array;var ce="function"==typeof Uint8Array?Uint8Array:null;var fe,se="function"==typeof Uint8Array?Uint8Array:void 0;fe=function(){var r,e,t;if("function"!=typeof ce)return!1;try{e=new ce(e=[1,3.14,-3.14,256,257]),t=e,r=(ue&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?se:function(){throw new Error("not implemented")};var le=fe,pe="function"==typeof Uint16Array;var ye="function"==typeof Uint16Array?Uint16Array:null;var ve,be="function"==typeof Uint16Array?Uint16Array:void 0;ve=function(){var r,e,t;if("function"!=typeof ye)return!1;try{e=new ye(e=[1,3.14,-3.14,65536,65537]),t=e,r=(pe&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?be:function(){throw new Error("not implemented")};var ge,de={uint16:ve,uint8:le};(ge=new de.uint16(1))[0]=4660;var he,we,me=52===new de.uint8(ge.buffer)[0];!0===me?(he=1,we=0):(he=0,we=1);var je={HIGH:he,LOW:we},Ae=new ae(1),Ee=new ee(Ae.buffer),Oe=je.HIGH,_e=je.LOW;function Te(r,e,t,n){return Ae[0]=r,e[n]=Ee[Oe],e[n+t]=Ee[_e],e}function Se(r){return Te(r,[0,0],1,0)}W(Se,"assign",Te);var Ue=!0===me?0:1,Fe=new ae(1),xe=new ee(Fe.buffer);function Ie(r,e){return Fe[0]=r,xe[Ue]=e>>>0,Fe[0]}function Ve(r){return 0|r}var ke,Pe,Ne=2147483647,Le=!0===me?1:0,Ge=new ae(1),$e=new ee(Ge.buffer);function Ce(r){return Ge[0]=r,$e[Le]}!0===me?(ke=1,Pe=0):(ke=0,Pe=1);var He={HIGH:ke,LOW:Pe},We=new ae(1),Be=new ee(We.buffer),Re=He.HIGH,Me=He.LOW;function Ze(r,e){return Be[Re]=r,Be[Me]=e,We[0]}var Xe=[0,0];function Ye(r,e){var t,n;return Se.assign(r,Xe,1,0),t=Xe[0],t&=Ne,n=Ce(e),Ze(t|=n&=2147483648,Xe[1])}var qe=!0===me?1:0,ze=new ae(1),De=new ee(ze.buffer);function Je(r,e){return ze[0]=r,De[qe]=e>>>0,ze[0]}var Ke=1023;var Qe=1048576,rt=[1,1.5],et=[0,.5849624872207642],tt=[0,1.350039202129749e-8];function nt(r,e,t,n){return tr(r)||qr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Dr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var it=[0,0],ot=[0,0];function at(r,e){var t,n;return 0===e||0===r||tr(r)||qr(r)?r:(nt(r,it,1,0),e+=it[1],e+=function(r){var e=Ce(r);return(e=(2146435072&e)>>>20)-Ke|0}(r=it[0]),e<-1074?Ye(0,r):e>1023?r<0?ir:nr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Se.assign(r,ot,1,0),t=ot[0],t&=2148532223,n*Ze(t|=e+Ke<<20,ot[1])))}var ut=1048575;var ct=1048576;var ft=1083179008,st=1e300,lt=1e-300,pt=[0,0],yt=[0,0];function vt(r,e){var t,n,i,o,a,u,c,f,s,l,p,y,v,b;if(tr(r)||tr(e))return NaN;if(Se.assign(e,pt,1,0),a=pt[0],0===pt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return zr(r);if(-.5===e)return 1/zr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(qr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(e===nr)?0:nr}(r,e)}if(Se.assign(r,pt,1,0),o=pt[0],0===pt[1]){if(0===o)return function(r,e){return e===ir?nr:e===nr?0:e>0?Yr(e)?r:0:Yr(e)?Ye(nr,r):nr}(r,e);if(1===r)return 1;if(-1===r&&Yr(e))return-1;if(qr(r))return r===ir?vt(-0,-e):e<0?0:nr}if(r<0&&!1===ar(e))return(r-r)/(r-r);if(i=Dr(r),t=o&Ne|0,n=a&Ne|0,c=a>>>31|0,u=(u=o>>>31|0)&&Yr(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(Ce(r)&Ne)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*st*st:u*lt*lt;if(t>1072693248)return 0===c?u*st*st:u*lt*lt;p=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Ie(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(yt,i)}else p=function(r,e,t){var n,i,o,a,u,c,f,s,l,p,y,v,b,g,d,h,w,m,j,A,E;return m=0,t<Qe&&(m-=53,t=Ce(e*=9007199254740992)),m+=(t>>20)-Ke|0,t=1072693248|(j=1048575&t|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,t-=Qe),a=Ie(i=(h=(e=Je(e,t))-(f=rt[A]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Je(0,n+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),c=Ie(c=3+(o=a*a)+(d+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),b=(y=-7.028461650952758e-9*(l=Ie(l=(h=a*c)+(w=u*c+(d-(c-3-o))*i),0))+.9617966939259756*(w-(l-h))+tt[A])-((v=Ie(v=(p=.9617967009544373*l)+y+(s=et[A])+(g=m),0))-g-s-p),r[0]=v,r[1]=b,r}(yt,i,t);if(y=(l=(e-(f=Ie(e,0)))*p[0]+e*p[1])+(s=f*p[0]),Se.assign(y,pt,1,0),v=Ve(pt[0]),b=Ve(pt[1]),v>=ft){if(0!=(v-ft|b))return u*st*st;if(l+8008566259537294e-32>y-s)return u*st*st}else if((v&Ne)>=1083231232){if(0!=(v-3230714880|b))return u*lt*lt;if(l<=y-s)return u*lt*lt}return y=function(r,e,t){var n,i,o,a,u,c,f,s,l,p;return l=((s=r&Ne|0)>>20)-Ke|0,f=0,s>1071644672&&(i=Je(0,((f=r+(ct>>l+1)>>>0)&~(ut>>(l=((f&Ne)>>20)-Ke|0)))>>>0),f=(f&ut|ct)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Ve(r=Ce(c=1-((c=(o=.6931471824645996*(i=Ie(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?at(c,f):Je(c,r)}(v,s,l),u*y}var bt=10,gt=100;return function r(e,t,n,i){var o,a,u,c,f,s,l;if(!B(e)||tr(e))throw new TypeError(V("invalid argument. First argument must be a number. Value: `%s`.",e));if(!B(t)||tr(t))throw new TypeError(V("invalid argument. Second argument must be a number. Value: `%s`.",t));if(3===arguments.length)if(lr(n))f=n,c=bt;else{if(!Mr(n))throw new TypeError(V("invalid argument. Third argument must be either a nonnegative integer or an object. Value: `%s`.",n));if(f=gt,Y(n,"base")){if(!vr(n.base))throw new TypeError(V("invalid option. `%s` option must be a positive number. Option: `%s`.","base",n.base));c=n.base}else c=bt}else if(arguments.length>=4){if(!lr(n))throw new TypeError(V("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(f=n,!Mr(i))throw new TypeError(V("invalid argument. Fourth argument must be an object. Value: `%s`.",i));if(Y(i,"base")){if(!vr(i.base))throw new TypeError(V("invalid option. `%s` option must be a positive number. Option: `%s`.","base",i.base));c=i.base}else c=bt}else f=gt,c=bt;return o=(t-e)/(s=f-1),l=-1,W(a={},"next",p),W(a,"return",y),Zr&&W(a,Zr,v),a;function p(){return l+=1,u||l>=f?{done:!0}:0===l?{value:vt(c,e),done:!1}:l===s?{value:vt(c,t),done:!1}:{value:vt(c,l*o+e),done:!1}}function y(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function v(){return r(e,t,f,{base:c})}}}));
//# sourceMappingURL=index.js.map
