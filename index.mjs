// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";function a(p,h,j,f){var b,v,u,c,g,w,x;if(!s(p)||r(p))throw new TypeError(m("0CZ4M",p));if(!s(h)||r(h))throw new TypeError(m("0CZ4N",h));if(3===arguments.length)if(t(j))g=j,c=10;else{if(!n(j))throw new TypeError(m("0CZ4R",j));if(g=100,o(j,"base")){if(!i(j.base))throw new TypeError(m("0CZ4Q","base",j.base));c=j.base}else c=10}else if(arguments.length>=4){if(!t(j))throw new TypeError(m("0CZ2y",j));if(g=j,!n(f))throw new TypeError(m("0CZ4G",f));if(o(f,"base")){if(!i(f.base))throw new TypeError(m("0CZ4Q","base",f.base));c=f.base}else c=10}else g=100,c=10;return b=(h-p)/(w=g-1),x=-1,e(v={},"next",y),e(v,"return",C),d&&e(v,d,E),v;function y(){return x+=1,u||x>=g?{done:!0}:0===x?{value:l(c,p),done:!1}:x===w?{value:l(c,h),done:!1}:{value:l(c,x*b+p),done:!1}}function C(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function E(){return a(p,h,g,{base:c})}}export{a as default};
//# sourceMappingURL=index.mjs.map
