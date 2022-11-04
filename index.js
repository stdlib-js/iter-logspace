// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLogspace=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,c=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var a,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(a=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=a):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),p&&i&&i.call(r,t,n.set),r};var a=t;function l(r,t,n){a(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function y(r){return"number"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&b.call(r,t)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(r){var t,n,e;if(null==r)return v.call(r);n=r[d],t=w(r,d);try{r[d]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[d]=n:delete r[d],e}:function(r){return v.call(r)},j=Number,h=j.prototype.toString;var A=s();function g(r){return"object"==typeof r&&(r instanceof j||(A?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function _(r){return y(r)||g(r)}function O(r){return r!=r}l(_,"isPrimitive",y),l(_,"isObject",g);var E=Number.POSITIVE_INFINITY,U=j.NEGATIVE_INFINITY,S=Math.floor;function T(r){return S(r)===r}function P(r){return r<E&&r>U&&T(r)}function I(r){return y(r)&&P(r)}function N(r){return g(r)&&P(r.valueOf())}function F(r){return I(r)||N(r)}function C(r){return I(r)&&r>=0}function G(r){return N(r)&&r.valueOf()>=0}function H(r){return C(r)||G(r)}function L(r){return y(r)&&r>0}function B(r){return g(r)&&r.valueOf()>0}function Z(r){return L(r)||B(r)}l(F,"isPrimitive",I),l(F,"isObject",N),l(H,"isPrimitive",C),l(H,"isObject",G),l(Z,"isPrimitive",L),l(Z,"isObject",B);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var M=/./;function V(r){return"boolean"==typeof r}var W=Boolean.prototype.toString;var k=s();function R(r){return"object"==typeof r&&(r instanceof Boolean||(k?function(r){try{return W.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function Q(r){return V(r)||R(r)}function Y(){return new Function("return this;")()}l(Q,"isPrimitive",V),l(Q,"isObject",R);var q="object"==typeof self?self:null,X="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;var J=function(r){if(arguments.length){if(!V(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(q)return q;if(X)return X;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")}(),K=J.document&&J.document.childNodes,$=Int8Array;function rr(){return/^\s*function\s*([^(]*)/i}var tr=/^\s*function\s*([^(]*)/i;function nr(r){return null!==r&&"object"==typeof r}function er(r){var t,n,e,o;if(("Object"===(n=m(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=tr.exec(e.toString()))return t[1]}return nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(rr,"REGEXP",tr),l(nr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(nr));var or="function"==typeof M||"object"==typeof $||"function"==typeof K?function(r){return er(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?er(r).toLowerCase():t};function ur(r){return"function"===or(r)}var ir,fr=Object.getPrototypeOf;ir=ur(Object.getPrototypeOf)?fr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var cr=ir;var ar=Object.prototype;function lr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),cr(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&ur(t.constructor)&&"[object Function]"===m(t.constructor)&&w(t,"isPrototypeOf")&&ur(t.isPrototypeOf)&&(t===ar||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}var yr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function pr(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function sr(r){return T(r/2)}function vr(r){return sr(r>0?r-1:r+1)}function br(r){return r===E||r===U}var wr=Math.sqrt;function dr(r){return Math.abs(r)}var mr="function"==typeof Uint32Array;var jr="function"==typeof Uint32Array?Uint32Array:null;var hr,Ar="function"==typeof Uint32Array?Uint32Array:void 0;hr=function(){var r,t,n;if("function"!=typeof jr)return!1;try{t=new jr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(mr&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var gr=hr,_r="function"==typeof Float64Array;var Or="function"==typeof Float64Array?Float64Array:null;var Er,Ur="function"==typeof Float64Array?Float64Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Or)return!1;try{t=new Or([1,3.14,-3.14,NaN]),n=t,r=(_r&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Sr=Er,Tr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null;var Ir,Nr="function"==typeof Uint8Array?Uint8Array:void 0;Ir=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr(t=[1,3.14,-3.14,256,257]),n=t,r=(Tr&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Fr=Ir,Cr="function"==typeof Uint16Array;var Gr="function"==typeof Uint16Array?Uint16Array:null;var Hr,Lr="function"==typeof Uint16Array?Uint16Array:void 0;Hr=function(){var r,t,n;if("function"!=typeof Gr)return!1;try{t=new Gr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Cr&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Br,Zr={uint16:Hr,uint8:Fr};(Br=new Zr.uint16(1))[0]=4660;var xr,Mr,Vr=52===new Zr.uint8(Br.buffer)[0];!0===Vr?(xr=1,Mr=0):(xr=0,Mr=1);var Wr={HIGH:xr,LOW:Mr},kr=new Sr(1),Rr=new gr(kr.buffer),Qr=Wr.HIGH,Yr=Wr.LOW;function qr(r,t){return kr[0]=t,r[0]=Rr[Qr],r[1]=Rr[Yr],r}function Xr(r,t){return 1===arguments.length?qr([0,0],r):qr(r,t)}var zr=!0===Vr?0:1,Dr=new Sr(1),Jr=new gr(Dr.buffer);function Kr(r,t){return Dr[0]=r,Jr[zr]=t>>>0,Dr[0]}function $r(r){return 0|r}var rt,tt,nt=!0===Vr?1:0,et=new Sr(1),ot=new gr(et.buffer);function ut(r){return et[0]=r,ot[nt]}!0===Vr?(rt=1,tt=0):(rt=0,tt=1);var it={HIGH:rt,LOW:tt},ft=new Sr(1),ct=new gr(ft.buffer),at=it.HIGH,lt=it.LOW;function yt(r,t){return ct[at]=r,ct[lt]=t,ft[0]}var pt=[0,0];function st(r,t){var n,e;return Xr(pt,r),n=pt[0],n&=2147483647,e=ut(t),yt(n|=e&=2147483648,pt[1])}var vt=!0===Vr?1:0,bt=new Sr(1),wt=new gr(bt.buffer);function dt(r,t){return bt[0]=r,wt[vt]=t>>>0,bt[0]}var mt=1023;var jt=1048576,ht=[1,1.5],At=[0,.5849624872207642],gt=[0,1.350039202129749e-8];function _t(r,t,n,e){return O(r)||br(r)?(t[e]=r,t[e+n]=0,t):0!==r&&dr(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}l((function(r){return _t(r,[0,0],1,0)}),"assign",_t);var Ot=[0,0],Et=[0,0];function Ut(r,t){var n,e;return 0===t||0===r||O(r)||br(r)?r:(_t(r,Ot,1,0),t+=Ot[1],t+=function(r){var t=ut(r);return(t=(2146435072&t)>>>20)-mt|0}(r=Ot[0]),t<-1074?st(0,r):t>1023?r<0?U:E:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Xr(Et,r),n=Et[0],n&=2148532223,e*yt(n|=t+mt<<20,Et[1])))}var St=2147483647,Tt=1048575,Pt=1048576;var It=2147483647,Nt=1083179008,Ft=1e300,Ct=1e-300,Gt=[0,0],Ht=[0,0];function Lt(r,t){var n,e,o,u,i,f,c,a,l,y,p,s,v,b;if(O(r)||O(t))return NaN;if(Xr(Gt,t),i=Gt[0],0===Gt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return wr(r);if(-.5===t)return 1/wr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(br(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(t===E)?0:E}(r,t)}if(Xr(Gt,r),u=Gt[0],0===Gt[1]){if(0===u)return function(r,t){return t===U?E:t===E?0:t>0?vr(t)?r:0:vr(t)?st(E,r):E}(r,t);if(1===r)return 1;if(-1===r&&vr(t))return-1;if(br(r))return r===U?Lt(-0,-t):t<0?0:E}if(r<0&&!1===T(t))return(r-r)/(r-r);if(o=dr(r),n=u&It|0,e=i&It|0,c=i>>>31|0,f=(f=u>>>31|0)&&vr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&ut(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?f*Ft*Ft:f*Ct*Ct;if(n>1072693248)return 0===c?f*Ft*Ft:f*Ct*Ct;p=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Kr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Ht,o)}else p=function(r,t,n){var e,o,u,i,f,c,a,l,y,p,s,v,b,w,d,m,j,h,A,g,_;return h=0,n<jt&&(h-=53,n=ut(t*=9007199254740992)),h+=(n>>20)-mt|0,n=1072693248|(A=1048575&n|0),A<=235662?g=0:A<767610?g=1:(g=0,h+=1,n-=jt),i=Kr(o=(m=(t=dt(t,n))-(a=ht[g]))*(j=1/(t+a)),0),e=524288+(n>>1|536870912),c=dt(0,e+=g<<18),d=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Kr(c=3+(u=i*i)+(d+=(f=j*(m-i*c-i*(t-(c-a))))*(i+o)),0),b=(s=-7.028461650952758e-9*(y=Kr(y=(m=i*c)+(j=f*c+(d-(c-3-u))*o),0))+.9617966939259756*(j-(y-m))+gt[g])-((v=Kr(v=(p=.9617967009544373*y)+s+(l=At[g])+(w=h),0))-w-l-p),r[0]=v,r[1]=b,r}(Ht,o,n);if(y=(t-(a=Kr(t,0)))*p[0]+t*p[1],l=a*p[0],Xr(Gt,s=y+l),v=$r(Gt[0]),b=$r(Gt[1]),v>=Nt){if(0!=(v-Nt|b))return f*Ft*Ft;if(y+8008566259537294e-32>s-l)return f*Ft*Ft}else if((v&It)>=1083231232){if(0!=(v-3230714880|b))return f*Ct*Ct;if(y<=s-l)return f*Ct*Ct}return s=function(r,t,n){var e,o,u,i,f,c,a,l,y,p;return y=((l=r&St|0)>>20)-mt|0,a=0,l>1071644672&&(o=dt(0,((a=r+(Pt>>y+1)>>>0)&~(Tt>>(y=((a&St)>>20)-mt|0)))>>>0),a=(a&Tt|Pt)>>20-y>>>0,r<0&&(a=-a),t-=o),r=$r(r=ut(c=1-((c=(u=.6931471824645996*(o=Kr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(c-u))+c*f)-c))),(r+=a<<20>>>0)>>20<=0?Ut(c,a):dt(c,r)}(v,l,y),f*s}var Bt=10,Zt=100;return function r(t,n,e,o){var u,i,f,c,a,p,s;if(!y(t)||O(t))throw new TypeError(pr("0CZ4M",t));if(!y(n)||O(n))throw new TypeError(pr("0CZ4N",n));if(3===arguments.length)if(C(e))a=e,c=Bt;else{if(!lr(e))throw new TypeError(pr("0CZ4R",e));if(a=Zt,w(e,"base")){if(!L(e.base))throw new TypeError(pr("0CZ4Q","base",e.base));c=e.base}else c=Bt}else if(arguments.length>=4){if(!C(e))throw new TypeError(pr("0CZ2y",e));if(a=e,!lr(o))throw new TypeError(pr("0CZ4G",o));if(w(o,"base")){if(!L(o.base))throw new TypeError(pr("0CZ4Q","base",o.base));c=o.base}else c=Bt}else a=Zt,c=Bt;return u=(n-t)/(p=a-1),s=-1,l(i={},"next",v),l(i,"return",b),yr&&l(i,yr,d),i;function v(){return s+=1,f||s>=a?{done:!0}:0===s?{value:Lt(c,t),done:!1}:s===p?{value:Lt(c,n),done:!1}:{value:Lt(c,s*u+t),done:!1}}function b(r){return f=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){return r(t,n,a,{base:c})}}}));
//# sourceMappingURL=index.js.map
