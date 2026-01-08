"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=f(function(j,a){
var F=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/constants-float64-two-pi/dist'),O=require('@stdlib/constants-float64-pinf/dist'),v=require('@stdlib/math-base-assert-is-nan/dist');function P(r,e,i){var n,u;return v(r)||v(e)||v(i)||e<=0||i<0?NaN:i===0?r===e?O:0:r<=0||!isFinite(r)?0:(n=q(i/I),u=-i/(2*e*e),n/(r*q(r))*F(u*(r-e)*(r-e)/r))}a.exports=P
});var N=f(function(k,p){
var A=require('@stdlib/utils-constant-function/dist'),B=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,s=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-sqrt/dist'),T=require('@stdlib/math-base-special-exp/dist'),W=require('@stdlib/constants-float64-two-pi/dist');function _(r,e){var i,n;if(s(r)||s(e)||r<=0||e<0)return A(NaN);if(e===0)return B(r);return i=o(e/W),n=-e/(2*r*r),u;function u(t){return s(t)?NaN:t<=0||!isFinite(t)?0:i/(t*o(t))*T(n*(t-r)*(t-r)/t)}}p.exports=_
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),R=N();g(y,"factory",R);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
