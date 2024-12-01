// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,d,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,v,"$1."),n=l.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,f,c,s,l,p,y,v,b;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,b=void 0,(b=y-p.length)<0?p:p=v?p+m(b):m(b)+p)),f+=n.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function P(r){var e,t;if("string"!=typeof r)throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var I,x=Object.prototype,F=x.toString,k=x.__defineGetter__,V=x.__defineSetter__,N=x.__lookupGetter__,C=x.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=x,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var G=I;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return H&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var B=Object.prototype.hasOwnProperty;function J(r,e){return null!=r&&B.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof M?M.toStringTag:"";var X=R()?function(r){var e,t,n;if(null==r)return W.call(r);t=r[Z],e=J(r,Z);try{r[Z]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[Z]=t:delete r[Z],n}:function(r){return W.call(r)},D=Number,Y=D.prototype.toString;var q=R();function z(r){return"object"==typeof r&&(r instanceof D||(q?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function K(r){return $(r)||z(r)}function Q(r){return r!=r}L(K,"isPrimitive",$),L(K,"isObject",z);var rr=Number.POSITIVE_INFINITY,er=D.NEGATIVE_INFINITY,tr=Math.floor;function nr(r){return tr(r)===r}function ir(r){return r<rr&&r>er&&nr(r)}function or(r){return $(r)&&ir(r)}function ar(r){return z(r)&&ir(r.valueOf())}function ur(r){return or(r)||ar(r)}function fr(r){return or(r)&&r>=0}function cr(r){return ar(r)&&r.valueOf()>=0}function sr(r){return fr(r)||cr(r)}function lr(r){return $(r)&&r>0}function pr(r){return z(r)&&r.valueOf()>0}function yr(r){return lr(r)||pr(r)}L(ur,"isPrimitive",or),L(ur,"isObject",ar),L(sr,"isPrimitive",fr),L(sr,"isObject",cr),L(yr,"isPrimitive",lr),L(yr,"isObject",pr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};var br=/./;function gr(r){return"boolean"==typeof r}var dr=Boolean,wr=Boolean.prototype.toString;var hr=R();function mr(r){return"object"==typeof r&&(r instanceof dr||(hr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===X(r)))}function jr(r){return gr(r)||mr(r)}L(jr,"isPrimitive",gr),L(jr,"isObject",mr);var Ar="object"==typeof self?self:null,Er="object"==typeof window?window:null,_r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Or="object"==typeof _r?_r:null,Sr="object"==typeof globalThis?globalThis:null;var Tr=function(r){if(arguments.length){if(!gr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Sr)return Sr;if(Ar)return Ar;if(Er)return Er;if(Or)return Or;throw new Error("unexpected error. Unable to resolve global object.")}(),Ur=Tr.document&&Tr.document.childNodes,Pr=Int8Array;function Ir(){return/^\s*function\s*([^(]*)/i}var xr=/^\s*function\s*([^(]*)/i;function Fr(r){return null!==r&&"object"==typeof r}function kr(r){var e,t,n,i;if(("Object"===(t=X(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xr.exec(n.toString()))return e[1]}return Fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(Ir,"REGEXP",xr),L(Fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Fr));var Vr="function"==typeof br||"object"==typeof Pr||"function"==typeof Ur?function(r){return kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?kr(r).toLowerCase():e};function Nr(r){return"function"===Vr(r)}var Cr,Gr=Object,Lr=Object.getPrototypeOf;Cr=Nr(Object.getPrototypeOf)?Lr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===X(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var $r=Cr;var Hr=Object.prototype;function Rr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(e=function(r){return null==r?null:(r=Gr(r),$r(r))}(r),!e||!J(r,"constructor")&&J(e,"constructor")&&Nr(e.constructor)&&"[object Function]"===X(e.constructor)&&J(e,"isPrototypeOf")&&Nr(e.isPrototypeOf)&&(e===Hr||function(r){var e;for(e in r)if(!J(r,e))return!1;return!0}(r)))}var Wr="function"==typeof M&&"symbol"==typeof M("foo")&&J(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null;function Br(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}function Jr(r){return nr(r/2)}function Mr(r){return Jr(r>0?r-1:r+1)}function Zr(r){return r===rr||r===er}var Xr=Math.sqrt;function Dr(r){return Math.abs(r)}var Yr="function"==typeof Uint32Array;var qr="function"==typeof Uint32Array?Uint32Array:null;var zr,Kr="function"==typeof Uint32Array?Uint32Array:void 0;zr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Yr&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr=zr,re="function"==typeof Float64Array;var ee="function"==typeof Float64Array?Float64Array:null;var te,ne="function"==typeof Float64Array?Float64Array:void 0;te=function(){var r,e,t;if("function"!=typeof ee)return!1;try{e=new ee([1,3.14,-3.14,NaN]),t=e,r=(re&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ne:function(){throw new Error("not implemented")};var ie=te,oe="function"==typeof Uint8Array;var ae="function"==typeof Uint8Array?Uint8Array:null;var ue,fe="function"==typeof Uint8Array?Uint8Array:void 0;ue=function(){var r,e,t;if("function"!=typeof ae)return!1;try{e=new ae(e=[1,3.14,-3.14,256,257]),t=e,r=(oe&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fe:function(){throw new Error("not implemented")};var ce=ue,se="function"==typeof Uint16Array;var le="function"==typeof Uint16Array?Uint16Array:null;var pe,ye="function"==typeof Uint16Array?Uint16Array:void 0;pe=function(){var r,e,t;if("function"!=typeof le)return!1;try{e=new le(e=[1,3.14,-3.14,65536,65537]),t=e,r=(se&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ye:function(){throw new Error("not implemented")};var ve,be={uint16:pe,uint8:ce};(ve=new be.uint16(1))[0]=4660;var ge,de,we=52===new be.uint8(ve.buffer)[0];!0===we?(ge=1,de=0):(ge=0,de=1);var he={HIGH:ge,LOW:de},me=new ie(1),je=new Qr(me.buffer),Ae=he.HIGH,Ee=he.LOW;function _e(r,e,t,n){return me[0]=r,e[n]=je[Ae],e[n+t]=je[Ee],e}function Oe(r){return _e(r,[0,0],1,0)}L(Oe,"assign",_e);var Se=!0===we?0:1,Te=new ie(1),Ue=new Qr(Te.buffer);function Pe(r,e){return Te[0]=r,Ue[Se]=e>>>0,Te[0]}function Ie(r){return 0|r}var xe,Fe,ke=2147483647,Ve=2147483648,Ne=!0===we?1:0,Ce=new ie(1),Ge=new Qr(Ce.buffer);function Le(r){return Ce[0]=r,Ge[Ne]}!0===we?(xe=1,Fe=0):(xe=0,Fe=1);var $e={HIGH:xe,LOW:Fe},He=new ie(1),Re=new Qr(He.buffer),We=$e.HIGH,Be=$e.LOW;function Je(r,e){return Re[We]=r,Re[Be]=e,He[0]}var Me=[0,0];function Ze(r,e){var t,n;return Oe.assign(r,Me,1,0),t=Me[0],t&=ke,n=Le(e),Je(t|=n&=Ve,Me[1])}var Xe=1072693247,De=1e300,Ye=1e-300;var qe=!0===we?1:0,ze=new ie(1),Ke=new Qr(ze.buffer);function Qe(r,e){return ze[0]=r,Ke[qe]=e>>>0,ze[0]}var rt=1023;var et=1048575,tt=1048576,nt=1072693248,it=536870912,ot=524288,at=20,ut=9007199254740992,ft=.9617966939259756,ct=.9617967009544373,st=-7.028461650952758e-9,lt=[1,1.5],pt=[0,.5849624872207642],yt=[0,1.350039202129749e-8];var vt=1.4426950408889634,bt=1.4426950216293335,gt=1.9259629911266175e-8;var dt=1023,wt=-1023,ht=-1074,mt=22250738585072014e-324,jt=4503599627370496;function At(r,e,t,n){return Q(r)||Zr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Dr(r)<mt?(e[n]=r*jt,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return At(r,[0,0],1,0)}),"assign",At);var Et=2146435072;var _t=2220446049250313e-31,Ot=2148532223,St=[0,0],Tt=[0,0];function Ut(r,e){var t,n;return 0===e||0===r||Q(r)||Zr(r)?r:(At(r,St,1,0),r=St[0],e+=St[1],e+=function(r){var e=Le(r);return(e=(e&Et)>>>20)-rt|0}(r),e<ht?Ze(0,r):e>dt?r<0?er:rr:(e<=wt?(e+=52,n=_t):n=1,Oe.assign(r,Tt,1,0),t=Tt[0],t&=Ot,n*Je(t|=e+rt<<20,Tt[1])))}var Pt=.6931471805599453,It=1048575;var xt=1048576,Ft=1071644672,kt=20,Vt=.6931471824645996,Nt=-1.904654299957768e-9;var Ct=1072693247,Gt=1105199104,Lt=1139802112,$t=1083179008,Ht=1072693248,Rt=1083231232,Wt=3230714880,Bt=31,Jt=1e300,Mt=1e-300,Zt=8008566259537294e-32,Xt=[0,0],Dt=[0,0];function Yt(r,e){var t,n,i,o,a,u,f,c,s,l,p,y,v,b;if(Q(r)||Q(e))return NaN;if(Oe.assign(e,Xt,1,0),a=Xt[0],0===Xt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Xr(r);if(-.5===e)return 1/Xr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Zr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Dr(r)<1==(e===rr)?0:rr}(r,e)}if(Oe.assign(r,Xt,1,0),o=Xt[0],0===Xt[1]){if(0===o)return function(r,e){return e===er?rr:e===rr?0:e>0?Mr(e)?r:0:Mr(e)?Ze(rr,r):rr}(r,e);if(1===r)return 1;if(-1===r&&Mr(e))return-1;if(Zr(r))return r===er?Yt(-0,-e):e<0?0:rr}if(r<0&&!1===nr(e))return(r-r)/(r-r);if(i=Dr(r),t=o&ke|0,n=a&ke|0,f=a>>>Bt|0,u=(u=o>>>Bt|0)&&Mr(e)?-1:1,n>Gt){if(n>Lt)return function(r,e){return(Le(r)&ke)<=Xe?e<0?De*De:Ye*Ye:e>0?De*De:Ye*Ye}(r,e);if(t<Ct)return 1===f?u*Jt*Jt:u*Mt*Mt;if(t>Ht)return 0===f?u*Jt*Jt:u*Mt*Mt;p=function(r,e){var t,n,i,o,a,u,f;return o=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*gt-o*vt)-((n=Pe(n=(a=bt*i)+u,0))-a),r[0]=n,r[1]=t,r}(Dt,i)}else p=function(r,e,t){var n,i,o,a,u,f,c,s,l,p,y,v,b,g,d,w,h,m,j,A,E;return m=0,t<tt&&(m-=53,t=Le(e*=ut)),m+=(t>>at)-rt|0,t=(j=t&et|0)|nt|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,t-=tt),a=Pe(i=(w=(e=Qe(e,t))-(c=lt[A]))*(h=1/(e+c)),0),n=(t>>1|it)+ot,f=Qe(0,n+=A<<18),d=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=Pe(f=3+(o=a*a)+(d+=(u=h*(w-a*f-a*(e-(f-c))))*(a+i)),0),l=Pe(l=(w=a*f)+(h=u*f+(d-(f-3-o))*i),0),p=ct*l,b=(y=st*l+(h-(l-w))*ft+yt[A])-((v=Pe(v=p+y+(s=pt[A])+(g=m),0))-g-s-p),r[0]=v,r[1]=b,r}(Dt,i,t);if(y=(l=(e-(c=Pe(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Oe.assign(y,Xt,1,0),v=Ie(Xt[0]),b=Ie(Xt[1]),v>=$t){if(0!=(v-$t|b))return u*Jt*Jt;if(l+Zt>y-s)return u*Jt*Jt}else if((v&ke)>=Rt){if(0!=(v-Wt|b))return u*Mt*Mt;if(l<=y-s)return u*Mt*Mt}return y=function(r,e,t){var n,i,o,a,u,f,c,s,l,p;return l=((s=r&ke|0)>>kt)-rt|0,c=0,s>Ft&&(i=Qe(0,((c=r+(xt>>l+1)>>>0)&~(It>>(l=((c&ke)>>kt)-rt|0)))>>>0),c=(c&It|xt)>>kt-l>>>0,r<0&&(c=-c),e-=i),r=Ie(r=Le(f=1-((f=(o=(i=Pe(i=t+e,0))*Vt)+(a=(t-(i-e))*Pt+i*Nt))*(n=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<kt>>>0)>>kt<=0?Ut(f,c):Qe(f,r)}(v,s,l),u*y}function qt(r,e,t,n){var i,o,a,u,f,c,s;if(!$(r)||Q(r))throw new TypeError(Br("0PJ49",r));if(!$(e)||Q(e))throw new TypeError(Br("0PJ4A",e));if(3===arguments.length)if(fr(t))f=t,u=10;else{if(!Rr(t))throw new TypeError(Br("0PJ4E",t));if(f=100,J(t,"base")){if(!lr(t.base))throw new TypeError(Br("0PJ4D","base",t.base));u=t.base}else u=10}else if(arguments.length>=4){if(!fr(t))throw new TypeError(Br("0PJ2m",t));if(f=t,!Rr(n))throw new TypeError(Br("0PJ43",n));if(J(n,"base")){if(!lr(n.base))throw new TypeError(Br("0PJ4D","base",n.base));u=n.base}else u=10}else f=100,u=10;return i=(e-r)/(c=f-1),s=-1,L(o={},"next",(function(){if(s+=1,a||s>=f)return{done:!0};if(0===s)return{value:Yt(u,r),done:!1};if(s===c)return{value:Yt(u,e),done:!1};return{value:Yt(u,s*i+r),done:!1}})),L(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Wr&&L(o,Wr,(function(){return qt(r,e,f,{base:u})})),o}export{qt as default};
//# sourceMappingURL=mod.js.map