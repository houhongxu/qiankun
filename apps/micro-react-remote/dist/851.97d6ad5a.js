(window["webpackJsonp_micro-react-remote"]=window["webpackJsonp_micro-react-remote"]||[]).push([[851],{684:(e,t,r)=>{var n;self,n=e=>(()=>{var t={53:(e,t,r)=>{"use strict";var n=r(156),o=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,c={},u=null,s=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:s,props:c,_owner:l.current}}t.jsx=c,t.jsxs=c},458:(e,t,r)=>{"use strict";e.exports=r(53)},156:t=>{"use strict";t.exports=e},865:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n.d(o,{Image:()=>Y,Masonry:()=>b,ScrollView:()=>s,VirtualList:()=>K}),"undefined"==typeof window||!window.document||window.document.createElement;var e=n(865),t=n.n(e),r=n(156),i=n(458);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}var a=["onScroll","className","onScrollToHeader","onScrollToFooter","scrollToPosition","isSmooth","scrollDirection","scrollCallbackRange","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==l(a)?a:String(a))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var n=e.onScroll,o=e.className,l=e.onScrollToHeader,c=e.onScrollToFooter,s=e.scrollToPosition,f=e.isSmooth,p=e.scrollDirection,y=void 0===p?"vertical":p,h=e.scrollCallbackRange,b=void 0===h?2:h,m=e.children,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),g=(0,r.useRef)(null),v=(0,r.useCallback)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];r||(r=setTimeout((function(){e.apply(n,i),r=null}),t))}}((function(e){if(g.current){if("vertical"===y){var t=g.current,r=t.scrollTop,n=t.clientHeight,o=t.scrollHeight;r<=b&&l?l(e):r+n>=o-b&&c&&c(e)}if("horizontal"===y){var i=g.current,a=i.scrollLeft,u=i.scrollWidth,s=i.clientWidth;a<=b&&l?l(e):a+s>=u-b&&c&&c(e)}}}),200),[]);return(0,r.useEffect)((function(){void 0!==s&&g.current&&g.current.scrollTo(u(u({},"vertical"===y?{top:s}:{left:s}),{},{behavior:f?"smooth":"auto"}))}),[s,y,f]),(0,i.jsx)("div",u(u({},d),{},{ref:g,onScroll:function(e){n&&n(e),v(u(u({},e),{},{currentTarget:e.currentTarget}))},className:t()(f&&"scroll-smooth","vertical"===y?"overflow-y-scroll":"overflow-x-scroll",o),children:m}))};function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var p=["columnCount","columnSpace","items","renderItem"];function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){var n,o,i,l;n=e,o=t,i=r[t],l=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==f(l)?l:String(l))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){var t=e.columnCount,n=void 0===t?2:t,o=e.columnSpace,l=e.items,a=e.renderItem,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,p),u=(0,r.useMemo)((function(){for(var e=Array.from({length:n}).map((function(){return{height:0,list:[]}})),t=0;t<l.length;t++){var r=l[t],o=e.reduce((function(e,t,r,n){return n[e].height<=t.height?e:r}),0),i=e[o];i.list.push(r),i.height+=r.itemHeight}return e}),[l,n]);return(0,i.jsx)(s,h(h({},c),{},{children:(0,i.jsx)("div",{className:"flex justify-between",children:u.map((function(e,t){return(0,i.jsx)("div",{style:{width:"calc(".concat(100/n,"% - ").concat(o/2,"px)")},children:e.list.map((function(e,t){return(0,i.jsx)("div",{children:a(e.data)},e.itemHeight+t/1e3||t)}))},e.height+t/1e3||t)}))})}))}var m=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],d=e=>{let t=0;for(let r=0;r<e.length;r++){let n=e[r];t=83*t+m.indexOf(n)}return t},g=e=>{let t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)},v=e=>{let t=Math.max(0,Math.min(1,e));return t<=.0031308?Math.trunc(12.92*t*255+.5):Math.trunc(255*(1.055*Math.pow(t,.4166666666666667)-.055)+.5)},O=(e,t)=>(e=>e<0?-1:1)(e)*Math.pow(Math.abs(e),t),j=class extends Error{constructor(e){super(e),this.name="ValidationError",this.message=e}},w=e=>{let t=e>>8&255,r=255&e;return[g(e>>16),g(t),g(r)]},S=(e,t)=>{let r=Math.floor(e/361),n=Math.floor(e/19)%19,o=e%19;return[O((r-9)/9,2)*t,O((n-9)/9,2)*t,O((o-9)/9,2)*t]},P=Object.defineProperty,x=Object.defineProperties,E=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&N(e,r,t[r]);if(k)for(var r of k(t))A.call(t,r)&&N(e,r,t[r]);return e},T=(e,t)=>x(e,E(t)),D=(e,t)=>{var r={};for(var n in e)I.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&A.call(e,n)&&(r[n]=e[n]);return r},C=class extends r.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=e=>{this.canvas=e,this.draw()},this.draw=()=>{let{hash:e,height:t,punch:r,width:n}=this.props;if(this.canvas){let o=((e,t,r,n)=>{(e=>{if(!e||e.length<6)throw new j("The blurhash string must be at least 6 characters");let t=d(e[0]),r=Math.floor(t/9)+1,n=t%9+1;if(e.length!==4+2*n*r)throw new j(`blurhash length mismatch: length is ${e.length} but it should be ${4+2*n*r}`)})(e),n|=1;let o=d(e[0]),i=Math.floor(o/9)+1,l=o%9+1,a=(d(e[1])+1)/166,c=new Array(l*i);for(let t=0;t<c.length;t++)if(0===t){let r=d(e.substring(2,6));c[t]=w(r)}else{let r=d(e.substring(4+2*t,6+2*t));c[t]=S(r,a*n)}let u=4*t,s=new Uint8ClampedArray(u*r);for(let e=0;e<r;e++)for(let n=0;n<t;n++){let o=0,a=0,f=0;for(let u=0;u<i;u++)for(let i=0;i<l;i++){let s=Math.cos(Math.PI*n*i/t)*Math.cos(Math.PI*e*u/r),p=c[i+u*l];o+=p[0]*s,a+=p[1]*s,f+=p[2]*s}let p=v(o),y=v(a),h=v(f);s[4*n+0+e*u]=p,s[4*n+1+e*u]=y,s[4*n+2+e*u]=h,s[4*n+3+e*u]=255}return s})(e,n,t,r),i=this.canvas.getContext("2d"),l=i.createImageData(n,t);l.data.set(o),i.putImageData(l,0,0)}}}componentDidUpdate(){this.draw()}render(){let e=this.props,{hash:t,height:n,width:o}=e,i=D(e,["hash","height","width"]);return r.createElement("canvas",T(F({},i),{height:n,width:o,ref:this.handleRef}))}};C.defaultProps={height:128,width:128};var M={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},R=class extends r.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let e=this.props,{hash:t,height:n,width:o,punch:i,resolutionX:l,resolutionY:a,style:c}=e,u=D(e,["hash","height","width","punch","resolutionX","resolutionY","style"]);return r.createElement("div",T(F({},u),{style:T(F({display:"inline-block",height:n,width:o},c),{position:"relative"})}),r.createElement(C,{hash:t,height:a,width:l,punch:i,style:M}))}};function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}R.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};var $=["width","height","blurhash","src","alt","className","children","onLoad","isLazy"];function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){var n,o,i,l;n=e,o=t,i=r[t],l=function(e){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==_(l)?l:String(l))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var z=new Set,Y=function(e){var n,o=e.width,l=e.height,a=e.blurhash,c=e.src,u=e.alt,s=e.className,f=e.children,p=e.onLoad,y=e.isLazy,h=void 0===y||y,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,$),m=function(e){if(Array.isArray(e))return e}(n=(0,r.useState)(!0))||function(e){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,o,i,l=[],a=!0,c=!1;try{for(o=(t=t.call(e)).next;!(a=(r=o.call(t)).done)&&(l.push(r.value),2!==l.length);a=!0);}catch(e){c=!0,n=e}finally{try{if(!a&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw n}}return l}}(n)||function(e){if(e){if("string"==typeof e)return H(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?H(e,2):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=m[0],g=m[1],v=!f&&d&&a&&!z.has(c),O=f&&d&&!z.has(c);return(0,i.jsxs)("div",L(L({},b),{},{className:t()("relative",s),children:[(0,i.jsx)("div",{style:{paddingBottom:l/o*100+"%"}}),(0,i.jsx)("img",{loading:h?"lazy":"eager",className:"absolute top-0 left-0 w-full h-full",onLoad:function(e){null==p||p(e),g(!1),z.add(c)},src:c,alt:u}),v&&(0,i.jsx)(R,{className:"!absolute top-0 left-0",hash:a,width:"100%",height:"100%"}),O&&(0,i.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full",children:[" ",f]})]}))};function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}var X=["items","renderItem","className","overRender"];function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){var n,o,i,l;n=e,o=t,i=r[t],l=function(e){if("object"!=B(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==B(l)?l:String(l))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function K(e){var n=e.items,o=e.renderItem,l=e.className,a=e.overRender,c=void 0===a?2:a,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,X),f=W((0,r.useState)(0),2),p=f[0],y=f[1],h=W((0,r.useState)(0),2),b=h[0],m=h[1],d=n.reduce((function(e,t){return e+t.itemHeight}),0),g=(0,r.useMemo)((function(){var e={0:0};return n.reduce((function(t,r,n){return t+=r.itemHeight,e[n+1]=t,t}),0),e}),[n]),v=n.slice(b,b+p);return(0,r.useEffect)((function(){for(var e=0;e<n.length;e++)if(g[e]>window.innerHeight){y(e);break}}),[n,g]),(0,i.jsxs)(s,V(V({onScroll:function(e){for(var t=0;t<n.length&&!(g[t]>e.currentTarget.scrollTop);t++);var r=t-1-c>=0?t-1-c:0;for(t=r;t<n.length&&!(g[t]-g[r]>e.currentTarget.clientHeight);t++);m(r),y(t-r+c)},className:t()("relative",l)},u),{},{children:[(0,i.jsx)("div",{style:{height:d}}),v.map((function(e,t){return(0,i.jsx)("div",{className:"absolute",style:{height:e.itemHeight,top:g[b+t]},children:o(e.data)},t)}))]}))}})(),o})(),e.exports=n(r(1526))},644:(e,t,r)=>{"use strict";r.d(t,{A:()=>k});var n={};r.r(n),r.d(n,{exclude:()=>E,extract:()=>O,parse:()=>j,parseUrl:()=>S,pick:()=>x,stringify:()=>w,stringifyUrl:()=>P});const o="%[a-f0-9]{2}",i=new RegExp("("+o+")|([^%]+?)","gi"),l=new RegExp("("+o+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function c(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(i)||[];return e}}function u(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function s(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable&&t(n,e[n],e)&&Object.defineProperty(r,n,o)}return r}const f=e=>null==e,p=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),y=Symbol("encodeFragmentIdentifier");function h(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function b(e,t){return t.encode?t.strict?p(e):encodeURIComponent(e):e}function m(e,t){return t.decode?function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=l.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=c(r[0]);e!==r[0]&&(t[r[0]]=e)}r=l.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const r of n)e=e.replace(new RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function d(e){return Array.isArray(e)?e.sort():"object"==typeof e?d(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function g(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function O(e){const t=(e=g(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function j(e,t){h((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),i="string"==typeof r&&!o&&m(r,e).includes(e.arrayFormatSeparator);r=i?m(r,e):r;const l=o||i?r.split(e.arrayFormatSeparator).map((t=>m(t,e))):null===r?r:m(r,e);n[t]=l};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?m(r,e):r);const i=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>m(t,e)));void 0!==n[t]?n[t]=[...n[t],...i]:n[t]=i};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[i,l]=u(e,"=");void 0===i&&(i=e),l=void 0===l?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?l:m(l,t),r(m(i,t),l,n)}for(const[e,r]of Object.entries(n))if("object"==typeof r&&null!==r)for(const[e,n]of Object.entries(r))r[e]=v(n,t);else n[e]=v(r,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return e[t]=Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?d(r):r,e}),Object.create(null))}function w(e,t){if(!e)return"";h((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&f(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),"[",o,"]"].join("")]:[...r,[b(t,e),"[",b(o,e),"]=",b(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),"[]"].join("")]:[...r,[b(t,e),"[]=",b(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),":list="].join("")]:[...r,[b(t,e),":list=",b(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[b(r,e),t,b(o,e)].join("")]:[[n,b(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,b(t,e)]:[...r,[b(t,e),"=",b(n,e)].join("")]}}(t),o={};for(const[t,n]of Object.entries(e))r(t)||(o[t]=n);const i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map((r=>{const o=e[r];return void 0===o?"":null===o?b(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?b(r,t)+"[]":o.reduce(n(r),[]).join("&"):b(r,t)+"="+b(o,t)})).filter((e=>e.length>0)).join("&")}function S(e,t){t={decode:!0,...t};let[r,n]=u(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:j(O(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:m(n,t)}:{}}}function P(e,t){t={encode:!0,strict:!0,[y]:!0,...t};const r=g(e.url).split("?")[0]||"";let n=w({...j(O(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[y]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function x(e,t,r){r={parseFragmentIdentifier:!0,[y]:!1,...r};const{url:n,query:o,fragmentIdentifier:i}=S(e,r);return P({url:n,query:s(o,t),fragmentIdentifier:i},r)}function E(e,t,r){return x(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}const k=n}}]);