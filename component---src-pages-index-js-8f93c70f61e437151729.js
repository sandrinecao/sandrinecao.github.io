/*! For license information please see component---src-pages-index-js-8f93c70f61e437151729.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293],{115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!==c--;)if(!o(e[c],i[c]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!==c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!==c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!==c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,a=r(6540),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map(function(e){return e.props})),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(d,"canUseDOM",s),d}}},2729:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),c=new RegExp("\\d+"+a.source,"gu"),l=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),l=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,n,a)=>{let o=!1,i=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];o&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),o=!1,s=i,i=!0,c++):i&&s&&r.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=i,i=!1,o=!0):(o=n(l)===l&&a(l)!==l,s=i,i=a(l)===l&&n(l)!==l)}return e})(e,o,l)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,e=>t(e))))(e,o):o(e),a.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,(e,r)=>t(r)).replace(c,e=>t(e))))(e,l)};e.exports=l,e.exports.default=l},2799:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case d:case o:case s:case i:case f:return e;default:switch(e=e&&e.$$typeof){case l:case p:case g:case h:case c:return e;default:return t}}case a:return t}}}function x(e){return E(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=f,t.isAsyncMode=function(e){return x(e)||E(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return E(e)===l},t.isContextProvider=function(e){return E(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===p},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===g},t.isMemo=function(e){return E(e)===h},t.isPortal=function(e){return E(e)===a},t.isProfiler=function(e){return E(e)===s},t.isStrictMode=function(e){return E(e)===i},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===d||e===s||e===i||e===f||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===p||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=E},4146:function(e,t,r){"use strict";var n=r(4363),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||a}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var a=f(r);a&&a!==m&&e(t,a,n)}var i=u(r);d&&(i=i.concat(d(r)));for(var s=c(t),h=c(r),g=0;g<i.length;++g){var y=i[g];if(!(o[y]||n&&n[y]||h&&h[y]||s&&s[y])){var b=p(r,y);try{l(t,y,b)}catch(v){}}}}return t}},4363:function(e,t,r){"use strict";e.exports=r(2799)},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5588:function(e,t,r){"use strict";r.d(t,{G:function(){return j},L:function(){return h},M:function(){return k},P:function(){return x},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return l},g:function(){return p},h:function(){return c}});var n=r(6540),a=(r(2729),r(5556)),o=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,r,n,a={}){return i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function p(e,t,r,n,a,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===r?(l.width=n,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===r||"fullWidth"===r)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],m=function({layout:e,width:t,height:r}){return"fullWidth"===e?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/t*100+"%"}}):"constrained"===e?n.createElement("div",{style:{maxWidth:t,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(m,i({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:a,alt:o="",shouldLoad:c}=e,l=s(e,g);return n.createElement("img",i({},l,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:o}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,o=s(e,y);const c=o.sizes||(null==t?void 0:t.sizes),l=n.createElement(b,i({},o,t,{sizes:c,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map(({media:e,srcSet:t,type:r})=>n.createElement("source",{key:`${e}-${r}-${t}`,type:r,media:e,srcSet:a?t:void 0,"data-srcset":a?void 0:t,sizes:c})),l):l};var w;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,r=s(e,E);return t?n.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(v,i({},e)),n.createElement("noscript",null,n.createElement(v,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],A=["style","className"],S=e=>e.replace(/\n/g,""),T=(e,t,r,...n)=>e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`),O={image:o().object.isRequired,alt:T},M=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],P=["style","className"],N=new Set;let $,L;const _=function(e){let{as:t="div",image:a,style:o,backgroundColor:l,className:d,class:p,onStartLoad:f,onLoad:m,onError:h}=e,g=s(e,M);const{width:y,height:b,layout:v}=a,w=u(y,b,v),{style:E,className:x}=w,k=s(w,P),C=(0,n.useRef)(),A=(0,n.useMemo)(()=>JSON.stringify(a.images),[a.images]);p&&(d=p);const S=function(e,t,r){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(v,y,b),T=(0,n.useMemo)(()=>({__html:S}),[S]);return(0,n.useEffect)(()=>{$||($=r.e(551).then(r.bind(r,551)).then(({renderImageToString:e,swapPlaceholderImage:t})=>(L=e,{renderImageToString:e,swapPlaceholderImage:t})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr")},0)):(null==f||f({wasCached:!0}),e.addEventListener("load",function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr")},0)})),void N.add(A);if(L&&N.has(A))return;let t,n;return $.then(({renderImageToString:e,swapPlaceholderImage:r})=>{C.current&&(C.current.innerHTML=e(i({isLoading:!0,isLoaded:N.has(A),image:a},g)),N.has(A)||(t=requestAnimationFrame(()=>{C.current&&(n=r(C.current,A,N,o,f,m,h))})))}),()=>{t&&cancelAnimationFrame(t),n&&n()}},[a]),(0,n.useLayoutEffect)(()=>{N.has(A)&&L&&(C.current.innerHTML=L(i({isLoading:N.has(A),isLoaded:N.has(A),image:a},g)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))},[a]),(0,n.createElement)(t,i({},k,{style:i({},E,o,{backgroundColor:l}),className:`${x}${d?` ${d}`:""}`,ref:C,dangerouslySetInnerHTML:T,suppressHydrationWarning:!0}))},j=(0,n.memo)(function(e){return e.image?(0,n.createElement)(_,e):null});j.propTypes=O,j.displayName="GatsbyImage";const I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:r,__imageData:a,__error:o}=t,c=s(t,I);return o&&console.warn(o),a?n.createElement(e,i({image:a},c)):(console.warn("Image not loaded",r),null)}}const R=z(function(e){let{as:t="div",className:r,class:a,style:o,image:c,loading:l="lazy",imgClassName:f,imgStyle:m,backgroundColor:g,objectFit:y,objectPosition:b}=e,v=s(e,C);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),m=i({objectFit:y,objectPosition:b,backgroundColor:g},m);const{width:w,height:E,layout:T,images:O,placeholder:M,backgroundColor:P}=c,N=u(w,E,T),{style:$,className:L}=N,_=s(N,A),j={fallback:void 0,sources:[]};return O.fallback&&(j.fallback=i({},O.fallback,{srcSet:O.fallback.srcSet?S(O.fallback.srcSet):void 0})),O.sources&&(j.sources=O.sources.map(e=>i({},e,{srcSet:S(e.srcSet)}))),n.createElement(t,i({},_,{style:i({},$,o,{backgroundColor:g}),className:`${L}${r?` ${r}`:""}`}),n.createElement(h,{layout:T,width:w,height:E},n.createElement(x,i({},p(M,!1,T,w,E,P,y,b))),n.createElement(k,i({"data-gatsby-image-ssr":"",className:f},v,d("eager"===l,!1,j,l,m)))))}),F=(e,t,...r)=>"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`),Y=new Set(["fixed","fullWidth","constrained"]),X={src:o().string.isRequired,alt:T,width:F,height:F,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!Y.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=X;const D=z(j);D.displayName="StaticImage",D.propTypes=X},6289:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Wn}});var n,a,o,i,s=r(6540),c=r.t(s,2),l=r(5556),u=r.n(l),d=r(2098),p=r.n(d),f=r(115),m=r.n(f),h=r(8828),g=r.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map(function(e){return w[e]}),"charset"),x="cssText",k="href",C="http-equiv",A="innerHTML",S="itemprop",T="name",O="property",M="rel",P="src",N="target",$={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",_="defer",j="encodeSpecialCharacters",I="onChangeClientState",z="titleTemplate",R=Object.keys($).reduce(function(e,t){return e[$[t]]=t,e},{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Y="data-react-helmet",X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,w.TITLE),r=J(e,z);if(r&&t)return r.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var n=J(e,L);return t||n||void 0},H=function(e){return J(e,I)||function(){}},B=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return V({},e,t)},{})},Z=function(e,t){return t.filter(function(e){return void 0!==e[w.BASE]}).map(function(e){return e[w.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},U=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+X(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var a={};r.filter(function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||r===M&&"canonical"===e[r].toLowerCase()||c===M&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==A&&s!==x&&s!==S||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=g()({},n[s],a[s]);n[s]=c}return e},[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},K=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout(function(){K(e)},0)}),Q=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||K:r.g.requestAnimationFrame||K,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:r.g.cancelAnimationFrame||Q,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;se(w.BODY,n),se(w.HTML,a),ie(d,p);var f={baseTag:ce(w.BASE,r),linkTags:ce(w.LINK,o),metaTags:ce(w.META,i),noscriptTags:ce(w.NOSCRIPT,s),scriptTags:ce(w.SCRIPT,l),styleTags:ce(w.STYLE,u)},m={},h={};Object.keys(f).forEach(function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=f[e].oldTags)}),t&&t(),c(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Y),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(Y):r.getAttribute(Y)!==i.join(",")&&r.setAttribute(Y,i.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+Y+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(Y,"true"),a.some(function(e,t){return i=t,r.isEqualNode(e)})?a.splice(i,1):o.push(r)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return r.appendChild(e)}),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[$[r]||r]=e[r],t},t)},de=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Y]=!0,a=ue(r,n),[s.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=le(r),o=oe(t);return a?"<"+e+" "+Y+'="true" '+a+">"+W(o,n)+"</"+e+">":"<"+e+" "+Y+'="true">'+W(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,a=((n={key:r})[Y]=!0,n);return Object.keys(t).forEach(function(e){var r=$[e]||e;if(r===A||r===x){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]}),s.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var a=Object.keys(n).filter(function(e){return!(e===A||e===x)}).reduce(function(e,t){var a=void 0===n[t]?t:t+'="'+W(n[t],r)+'"';return e?e+" "+a:a},""),o=n.innerHTML||n.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+" "+Y+'="true" '+a+(i?"/>":">"+o+"</"+e+">")},"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:de(w.BASE,t,n),bodyAttributes:de(y,r,n),htmlAttributes:de(b,a,n),link:de(w.LINK,o,n),meta:de(w.META,i,n),noscript:de(w.NOSCRIPT,s,n),script:de(w.SCRIPT,c,n),style:de(w.STYLE,l,n),title:de(w.TITLE,{title:d,titleAttributes:p},n)}},fe=p()(function(e){return{baseTag:Z([k,N],e),bodyAttributes:B(y,e),defer:J(e,_),encode:J(e,j),htmlAttributes:B(b,e),linkTags:U(w.LINK,[M,k],e),metaTags:U(w.META,[T,E,C,O,S],e),noscriptTags:U(w.NOSCRIPT,[A],e),onChangeClientState:H(e),scriptTags:U(w.SCRIPT,[P,A],e),styleTags:U(w.STYLE,[x],e),title:G(e),titleAttributes:B(v,e)}},function(e){ne&&te(ne),e.defer?ne=ee(function(){ae(e,function(){ne=null})}):(ae(e),ne=null)},pe)(function(){return null}),me=(a=fe,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return V({},n,((t={})[r.type]=[].concat(n[r.type]||[],[V({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return V({},a,((t={})[n.type]=i,t.titleAttributes=V({},o),t));case w.BODY:return V({},a,{bodyAttributes:V({},o)});case w.HTML:return V({},a,{htmlAttributes:V({},o)})}return V({},a,((r={})[n.type]=V({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=V({},t);return Object.keys(e).forEach(function(t){var n;r=V({},r,((n={})[t]=e[t],n))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[R[r]||r]=e[r],t},t)}(q(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=V({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind;var he=r(4506),ge=r(6942),ye=r.n(ge),be=r(4848);const ve=["xxl","xl","lg","md","sm","xs"],we=s.createContext({prefixes:{},breakpoints:ve,minBreakpoint:"xs"}),{Consumer:Ee,Provider:xe}=we;function ke(e,t){const{prefixes:r}=(0,s.useContext)(we);return e||r[t]||t}function Ce(){const{breakpoints:e}=(0,s.useContext)(we);return e}function Ae(){const{minBreakpoint:e}=(0,s.useContext)(we);return e}const Se=s.forwardRef(({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...a},o)=>{const i=ke(e,"container"),s="string"==typeof t?`-${t}`:"-fluid";return(0,be.jsx)(r,{ref:o,...a,className:ye()(n,t?`${i}${s}`:i)})});Se.displayName="Container";var Te=Se;var Oe=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),Me=Math.abs,Pe=String.fromCharCode,Ne=Object.assign;function $e(e){return e.trim()}function Le(e,t,r){return e.replace(t,r)}function _e(e,t){return e.indexOf(t)}function je(e,t){return 0|e.charCodeAt(t)}function Ie(e,t,r){return e.slice(t,r)}function ze(e){return e.length}function Re(e){return e.length}function Fe(e,t){return t.push(e),e}var Ye=1,Xe=1,De=0,Ve=0,qe=0,We="";function Ge(e,t,r,n,a,o,i){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:Ye,column:Xe,length:i,return:""}}function He(e,t){return Ne(Ge("",null,null,"",null,null,0),e,{length:-e.length},t)}function Be(){return qe=Ve>0?je(We,--Ve):0,Xe--,10===qe&&(Xe=1,Ye--),qe}function Ze(){return qe=Ve<De?je(We,Ve++):0,Xe++,10===qe&&(Xe=1,Ye++),qe}function Ue(){return je(We,Ve)}function Je(){return Ve}function Ke(e,t){return Ie(We,e,t)}function Qe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function et(e){return Ye=Xe=1,De=ze(We=e),Ve=0,[]}function tt(e){return We="",e}function rt(e){return $e(Ke(Ve-1,ot(91===e?e+2:40===e?e+1:e)))}function nt(e){for(;(qe=Ue())&&qe<33;)Ze();return Qe(e)>2||Qe(qe)>3?"":" "}function at(e,t){for(;--t&&Ze()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Ke(e,Je()+(t<6&&32==Ue()&&32==Ze()))}function ot(e){for(;Ze();)switch(qe){case e:return Ve;case 34:case 39:34!==e&&39!==e&&ot(qe);break;case 40:41===e&&ot(e);break;case 92:Ze()}return Ve}function it(e,t){for(;Ze()&&e+qe!==57&&(e+qe!==84||47!==Ue()););return"/*"+Ke(t,Ve-1)+"*"+Pe(47===e?e:Ze())}function st(e){for(;!Qe(Ue());)Ze();return Ke(e,Ve)}var ct="-ms-",lt="-moz-",ut="-webkit-",dt="comm",pt="rule",ft="decl",mt="@keyframes";function ht(e,t){for(var r="",n=Re(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function gt(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ft:return e.return=e.return||e.value;case dt:return"";case mt:return e.return=e.value+"{"+ht(e.children,n)+"}";case pt:e.value=e.props.join(",")}return ze(r=ht(e.children,n))?e.return=e.value+"{"+r+"}":""}function yt(e){return tt(bt("",null,null,null,[""],e=et(e),0,[0],e))}function bt(e,t,r,n,a,o,i,s,c){for(var l=0,u=0,d=i,p=0,f=0,m=0,h=1,g=1,y=1,b=0,v="",w=a,E=o,x=n,k=v;g;)switch(m=b,b=Ze()){case 40:if(108!=m&&58==je(k,d-1)){-1!=_e(k+=Le(rt(b),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:k+=rt(b);break;case 9:case 10:case 13:case 32:k+=nt(m);break;case 92:k+=at(Je()-1,7);continue;case 47:switch(Ue()){case 42:case 47:Fe(wt(it(Ze(),Je()),t,r),c);break;default:k+="/"}break;case 123*h:s[l++]=ze(k)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:-1==y&&(k=Le(k,/\f/g,"")),f>0&&ze(k)-d&&Fe(f>32?Et(k+";",n,r,d-1):Et(Le(k," ","")+";",n,r,d-2),c);break;case 59:k+=";";default:if(Fe(x=vt(k,t,r,l,u,a,s,v,w=[],E=[],d),o),123===b)if(0===u)bt(k,t,x,x,w,o,d,s,E);else switch(99===p&&110===je(k,3)?100:p){case 100:case 108:case 109:case 115:bt(e,x,x,n&&Fe(vt(e,x,x,0,0,a,s,v,a,w=[],d),E),a,E,d,s,n?w:E);break;default:bt(k,x,x,x,[""],E,0,s,E)}}l=u=f=0,h=y=1,v=k="",d=i;break;case 58:d=1+ze(k),f=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==Be())continue;switch(k+=Pe(b),b*h){case 38:y=u>0?1:(k+="\f",-1);break;case 44:s[l++]=(ze(k)-1)*y,y=1;break;case 64:45===Ue()&&(k+=rt(Ze())),p=Ue(),u=d=ze(v=k+=st(Je())),b++;break;case 45:45===m&&2==ze(k)&&(h=0)}}return o}function vt(e,t,r,n,a,o,i,s,c,l,u){for(var d=a-1,p=0===a?o:[""],f=Re(p),m=0,h=0,g=0;m<n;++m)for(var y=0,b=Ie(e,d+1,d=Me(h=i[m])),v=e;y<f;++y)(v=$e(h>0?p[y]+" "+b:Le(b,/&\f/g,p[y])))&&(c[g++]=v);return Ge(e,t,r,0===a?pt:s,c,l,u)}function wt(e,t,r){return Ge(e,t,r,dt,Pe(qe),Ie(e,2,-2),0)}function Et(e,t,r,n){return Ge(e,t,r,ft,Ie(e,0,n),Ie(e,n+1,-1),n)}var xt=function(e,t,r){for(var n=0,a=0;n=a,a=Ue(),38===n&&12===a&&(t[r]=1),!Qe(a);)Ze();return Ke(e,Ve)},kt=function(e,t){return tt(function(e,t){var r=-1,n=44;do{switch(Qe(n)){case 0:38===n&&12===Ue()&&(t[r]=1),e[r]+=xt(Ve-1,t,r);break;case 2:e[r]+=rt(n);break;case 4:if(44===n){e[++r]=58===Ue()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=Pe(n)}}while(n=Ze());return e}(et(e),t))},Ct=new WeakMap,At=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ct.get(r))&&!n){Ct.set(e,!0);for(var a=[],o=kt(t,a),i=r.props,s=0,c=0;s<o.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=a[s]?o[s].replace(/&\f/g,i[l]):i[l]+" "+o[s]}}},St=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Tt(e,t){switch(function(e,t){return 45^je(e,0)?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}(e,t)){case 5103:return ut+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ut+e+lt+e+ct+e+e;case 6828:case 4268:return ut+e+ct+e+e;case 6165:return ut+e+ct+"flex-"+e+e;case 5187:return ut+e+Le(e,/(\w+).+(:[^]+)/,ut+"box-$1$2"+ct+"flex-$1$2")+e;case 5443:return ut+e+ct+"flex-item-"+Le(e,/flex-|-self/,"")+e;case 4675:return ut+e+ct+"flex-line-pack"+Le(e,/align-content|flex-|-self/,"")+e;case 5548:return ut+e+ct+Le(e,"shrink","negative")+e;case 5292:return ut+e+ct+Le(e,"basis","preferred-size")+e;case 6060:return ut+"box-"+Le(e,"-grow","")+ut+e+ct+Le(e,"grow","positive")+e;case 4554:return ut+Le(e,/([^-])(transform)/g,"$1"+ut+"$2")+e;case 6187:return Le(Le(Le(e,/(zoom-|grab)/,ut+"$1"),/(image-set)/,ut+"$1"),e,"")+e;case 5495:case 3959:return Le(e,/(image-set\([^]*)/,ut+"$1$`$1");case 4968:return Le(Le(e,/(.+:)(flex-)?(.*)/,ut+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ut+e+e;case 4095:case 3583:case 4068:case 2532:return Le(e,/(.+)-inline(.+)/,ut+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ze(e)-1-t>6)switch(je(e,t+1)){case 109:if(45!==je(e,t+4))break;case 102:return Le(e,/(.+:)(.+)-([^]+)/,"$1"+ut+"$2-$3$1"+lt+(108==je(e,t+3)?"$3":"$2-$3"))+e;case 115:return~_e(e,"stretch")?Tt(Le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==je(e,t+1))break;case 6444:switch(je(e,ze(e)-3-(~_e(e,"!important")&&10))){case 107:return Le(e,":",":"+ut)+e;case 101:return Le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ut+(45===je(e,14)?"inline-":"")+"box$3$1"+ut+"$2$3$1"+ct+"$2box$3")+e}break;case 5936:switch(je(e,t+11)){case 114:return ut+e+ct+Le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ut+e+ct+Le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ut+e+ct+Le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ut+e+ct+e+e}return e}var Ot=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case ft:e.return=Tt(e.value,e.length);break;case mt:return ht([He(e,{value:Le(e.value,"@","@"+ut)})],n);case pt:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ht([He(e,{props:[Le(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return ht([He(e,{props:[Le(t,/:(plac\w+)/,":"+ut+"input-$1")]}),He(e,{props:[Le(t,/:(plac\w+)/,":-moz-$1")]}),He(e,{props:[Le(t,/:(plac\w+)/,ct+"input-$1")]})],n)}return""})}}],Mt=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var n,a,o=e.stylisPlugins||Ot,i={},s=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)i[t[r]]=!0;s.push(e)});var c,l,u,d,p=[gt,(d=function(e){c.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],f=(l=[At,St].concat(o,p),u=Re(l),function(e,t,r,n){for(var a="",o=0;o<u;o++)a+=l[o](e,t,r,n)||"";return a});a=function(e,t,r,n){c=r,ht(yt(e?e+"{"+t.styles+"}":t.styles),f),n&&(m.inserted[t.name]=!0)};var m={key:t,sheet:new Oe({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:a};return m.sheet.hydrate(s),m};function Pt(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")}),n}var Nt=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},$t=function(e,t,r){Nt(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var Lt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function _t(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var jt=/[A-Z]|^ms/g,It=/_EMO_([^_]+?)_([^]*?)_EMO_/g,zt=function(e){return 45===e.charCodeAt(1)},Rt=function(e){return null!=e&&"boolean"!=typeof e},Ft=_t(function(e){return zt(e)?e:e.replace(jt,"-$&").toLowerCase()}),Yt=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(It,function(e,t,r){return Dt={name:t,styles:r,next:Dt},t})}return 1===Lt[e]||zt(e)||"number"!=typeof t||0===t?t:t+"px"};function Xt(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return Dt={name:a.name,styles:a.styles,next:Dt},a.name;var o=r;if(void 0!==o.styles){var i=o.next;if(void 0!==i)for(;void 0!==i;)Dt={name:i.name,styles:i.styles,next:Dt},i=i.next;return o.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=Xt(e,t,r[a])+";";else for(var o in r){var i=r[o];if("object"!=typeof i){var s=i;null!=t&&void 0!==t[s]?n+=o+"{"+t[s]+"}":Rt(s)&&(n+=Ft(o)+":"+Yt(o,s)+";")}else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=Xt(e,t,i);switch(o){case"animation":case"animationName":n+=Ft(o)+":"+c+";";break;default:n+=o+"{"+c+"}"}}else for(var l=0;l<i.length;l++)Rt(i[l])&&(n+=Ft(o)+":"+Yt(o,i[l])+";")}return n}(e,t,r);case"function":if(void 0!==e){var s=Dt,c=r(e);return Dt=s,Xt(e,t,c)}}var l=r;if(null==t)return l;var u=t[l];return void 0!==u?u:l}var Dt,Vt=/label:\s*([^\s;{]+)\s*(;|$)/g;function qt(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";Dt=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=Xt(r,t,o)):a+=o[0];for(var i=1;i<e.length;i++){if(a+=Xt(r,t,e[i]),n)a+=o[i]}Vt.lastIndex=0;for(var s,c="";null!==(s=Vt.exec(a));)c+="-"+s[1];var l=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+c;return{name:l,styles:a,next:Dt}}var Wt=!!c.useInsertionEffect&&c.useInsertionEffect,Gt=Wt||function(e){return e()},Ht=(Wt||s.useLayoutEffect,s.createContext("undefined"!=typeof HTMLElement?Mt({key:"css"}):null)),Bt=(Ht.Provider,function(e){return(0,s.forwardRef)(function(t,r){var n=(0,s.useContext)(Ht);return e(t,n,r)})}),Zt=s.createContext({});var Ut={}.hasOwnProperty,Jt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Kt=function(e,t){var r={};for(var n in t)Ut.call(t,n)&&(r[n]=t[n]);return r[Jt]=e,r},Qt=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return Nt(t,r,n),Gt(function(){return $t(t,r,n)}),null},er=Bt(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[Jt],o=[n],i="";"string"==typeof e.className?i=Pt(t.registered,o,e.className):null!=e.className&&(i=e.className+" ");var c=qt(o,void 0,s.useContext(Zt));i+=t.key+"-"+c.name;var l={};for(var u in e)Ut.call(e,u)&&"css"!==u&&u!==Jt&&(l[u]=e[u]);return l.className=i,r&&(l.ref=r),s.createElement(s.Fragment,null,s.createElement(Qt,{cache:t,serialized:c,isStringTag:"string"==typeof a}),s.createElement(a,l))}),tr=(r(4634),r(4146),be.Fragment),rr=function(e,t,r){return Ut.call(t,"css")?be.jsx(er,Kt(e,t),r):be.jsx(e,t,r)},nr=function(e,t){var r=arguments;if(null==t||!Ut.call(t,"css"))return s.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=er,a[1]=Kt(e,t);for(var o=2;o<n;o++)a[o]=r[o];return s.createElement.apply(null,a)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(nr||(nr={}));function ar(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return qt(t)}function or(){var e=ar.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var ir=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(null!=o){var i=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))i=e(o);else for(var s in i="",o)o[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};var sr=function(e){var t=e.cache,r=e.serializedArr;return Gt(function(){for(var e=0;e<r.length;e++)$t(t,r[e],!1)}),null},cr=Bt(function(e,t){var r=[],n=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var o=qt(n,t.registered);return r.push(o),Nt(t,o,!1),t.key+"-"+o.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(e,t,r){var n=[],a=Pt(e,n,r);return n.length<2?r:a+t(n)}(t.registered,n,ir(r))},theme:s.useContext(Zt)},o=e.children(a);return s.createElement(s.Fragment,null,s.createElement(sr,{cache:t,serializedArr:r}),o)}),lr=Object.defineProperty,ur=(e,t,r)=>((e,t,r)=>t in e?lr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r),dr=new Map,pr=new WeakMap,fr=0,mr=void 0;function hr(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(r=e.root,r?(pr.has(r)||(fr+=1,pr.set(r,fr.toString())),pr.get(r)):"0"):e[t]}`;var r}).toString()}function gr(e,t,r={},n=mr){if(void 0===window.IntersectionObserver&&void 0!==n){const a=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:i}=function(e){const t=hr(e);let r=dr.get(t);if(!r){const n=new Map;let a;const o=new IntersectionObserver(t=>{t.forEach(t=>{var r;const o=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach(e=>{e(o,t)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},dr.set(t,r)}return r}(r),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(i.delete(e),o.unobserve(e)),0===i.size&&(o.disconnect(),dr.delete(a))}}var yr=class extends s.Component{constructor(e){super(e),ur(this,"node",null),ur(this,"_unobserveCb",null),ur(this,"handleNode",e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ur(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=gr(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:a,rootMargin:o,onChange:i,skip:c,trackVisibility:l,delay:u,initialInView:d,fallbackInView:p,...f}=this.props;return s.createElement(t||"div",{ref:this.handleNode,...f},e)}};function br({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:c,fallbackInView:l,onChange:u}={}){var d;const[p,f]=s.useState(null),m=s.useRef(u),[h,g]=s.useState({inView:!!c,entry:void 0});m.current=u,s.useEffect(()=>{if(i||!p)return;let s;return s=gr(p,(e,t)=>{g({inView:e,entry:t}),m.current&&m.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,p,a,n,o,i,r,l,t]);const y=null==(d=h.entry)?void 0:d.target,b=s.useRef(void 0);p||!y||o||i||b.current===y||(b.current=y,g({inView:!!c,entry:void 0}));const v=[f,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var vr=r(8338);or`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,or`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,or`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,or`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,or`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,or`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,or`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,or`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,or`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,or`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,or`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,or`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,or`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const wr=or`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Er=or`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xr=or`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,kr=or`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Cr=or`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ar=or`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sr=or`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tr=or`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Or=or`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mr=or`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pr=or`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Nr=or`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$r=or`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Lr(e,t){return r=>r?e():t()}function _r(e){return Lr(e,()=>null)}function jr(e){return _r(()=>({opacity:0}))(e)}const Ir=e=>{const{cascade:t=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=Ar,triggerOnce:c=!1,className:l,style:u,childClassName:d,childStyle:p,children:f,onVisibilityChange:m}=e,h=(0,s.useMemo)(()=>function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=Ar,iterationCount:a=1}){return ar`
    animation-duration: ${e}ms;
    animation-timing-function: ${r};
    animation-delay: ${t}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:a}),[a,i]);return function(e){return null==e}(f)?null:"string"==typeof(g=f)||"number"==typeof g||"boolean"==typeof g?rr(Rr,{...e,animationStyles:h,children:String(f)}):(0,vr.isFragment)(f)?rr(Fr,{...e,animationStyles:h}):rr(tr,{children:s.Children.map(f,(i,f)=>{if(!(0,s.isValidElement)(i))return null;const g=n+(t?f*a*r:0);switch(i.type){case"ol":case"ul":return rr(cr,{children:({cx:t})=>rr(i.type,{...i.props,className:t(l,i.props.className),style:Object.assign({},u,i.props.style),children:rr(Ir,{...e,children:i.props.children})})});case"li":return rr(yr,{threshold:o,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>rr(cr,{children:({cx:r})=>rr(i.type,{...i.props,ref:t,className:r(d,i.props.className),css:_r(()=>h)(e),style:Object.assign({},p,i.props.style,jr(!e),{animationDelay:g+"ms"})})})});default:return rr(yr,{threshold:o,triggerOnce:c,onChange:m,children:({inView:e,ref:t})=>rr("div",{ref:t,className:l,css:_r(()=>h)(e),style:Object.assign({},u,jr(!e),{animationDelay:g+"ms"}),children:rr(cr,{children:({cx:e})=>rr(i.type,{...i.props,className:e(d,i.props.className),style:Object.assign({},p,i.props.style)})})})})}})});var g},zr={display:"inline-block",whiteSpace:"pre"},Rr=e=>{const{animationStyles:t,cascade:r=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:s=!1,className:c,style:l,children:u,onVisibilityChange:d}=e,{ref:p,inView:f}=br({triggerOnce:s,threshold:i,onChange:d});return Lr(()=>rr("div",{ref:p,className:c,style:Object.assign({},l,zr),children:u.split("").map((e,r)=>rr("span",{css:_r(()=>t)(f),style:{animationDelay:a+r*o*n+"ms"},children:e},r))}),()=>rr(Fr,{...e,children:u}))(r)},Fr=e=>{const{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:s}=e,{ref:c,inView:l}=br({triggerOnce:n,threshold:r,onChange:s});return rr("div",{ref:c,className:a,css:_r(()=>t)(l),style:Object.assign({},o,jr(!l)),children:i})};or`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,or`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,or`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,or`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,or`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,or`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Yr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Xr=or`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Dr=or`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Vr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,qr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Wr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Gr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Hr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Br=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Zr=or`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ur=or`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Jr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Kr=or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Qr=e=>{const{big:t=!1,direction:r,reverse:n=!1,...a}=e,o=(0,s.useMemo)(()=>function(e,t,r){switch(r){case"bottom-left":return t?Xr:Er;case"bottom-right":return t?Dr:xr;case"down":return e?t?qr:Cr:t?Vr:kr;case"left":return e?t?Gr:Sr:t?Wr:Ar;case"right":return e?t?Br:Or:t?Hr:Tr;case"top-left":return t?Zr:Mr;case"top-right":return t?Ur:Pr;case"up":return e?t?Kr:$r:t?Jr:Nr;default:return t?Yr:wr}}(t,n,r),[t,r,n]);return rr(Ir,{keyframes:o,...a})};or`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,or`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,or`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,or`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,or`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;or`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,or`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,or`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;or`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,or`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,or`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,or`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,or`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,or`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;or`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,or`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,or`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,or`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,or`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;or`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,or`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,or`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,or`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,or`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,or`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,or`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,or`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,or`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,or`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const en=s.createContext(),tn=en.Provider;en.Consumer;var rn=en;var nn=()=>{const{hero:e}=(0,s.useContext)(rn),{title:t,name:r,subtitle:n,cta:a}=e,{0:o,1:i}=(0,s.useState)(!1),{0:c,1:l}=(0,s.useState)(!1);return(0,s.useEffect)(()=>{window.innerWidth>769?(i(!0),l(!1)):(l(!0),i(!1))},[]),s.createElement("section",{id:"hero",className:"jumbotron"},s.createElement(Te,null,s.createElement(Qr,{direction:o?"left":"up",duration:1e3,delay:500,triggerOnce:!0},s.createElement("h1",{className:"hero-title"},t||"Hi, my name is"," ",s.createElement("span",{className:"text-color-main"},r||"Your Name"),s.createElement("br",null),n||"I'm the Unknown Developer.")),s.createElement(Qr,{direction:o?"left":"up",duration:1e3,delay:1e3,triggerOnce:!0},s.createElement("p",{className:"hero-cta"},s.createElement("a",{className:"cta-btn cta-btn--hero",href:"#about"},a||"Know more")))))};const an=s.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},a)=>{const o=ke(e,"row"),i=Ce(),s=Ae(),c=`${o}-cols`,l=[];return i.forEach(e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==s?`-${e}`:"";null!=r&&l.push(`${c}${a}-${r}`)}),(0,be.jsx)(r,{ref:a,...n,className:ye()(t,o,...l)})});an.displayName="Row";var on=an;const sn=s.forwardRef((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:o,spans:i}]=function({as:e,bsPrefix:t,className:r,...n}){t=ke(t,"col");const a=Ce(),o=Ae(),i=[],s=[];return a.forEach(e=>{const r=n[e];let a,c,l;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:c,order:l}=r):a=r;const u=e!==o?`-${e}`:"";a&&i.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=l&&s.push(`order${u}-${l}`),null!=c&&s.push(`offset${u}-${c}`)}),[{...n,className:ye()(r,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,be.jsx)(a,{...n,ref:t,className:ye()(r,!i.length&&o)})});sn.displayName="Col";var cn=sn;var ln=({title:e})=>s.createElement(Qr,{direction:"up",duration:1e3,delay:300,triggerOnce:!0},s.createElement("h2",{className:"section-title"},e)),un=r(4794),dn=r(5588);var pn=({filename:e,alt:t})=>{const r=(0,un.useStaticQuery)("2999487669").images.edges.find(t=>t.node.relativePath.includes(e));return r?s.createElement(dn.G,{className:"rounded shadow-lg",alt:t,image:(0,dn.c)(r.node.childImageSharp)}):null};var fn=()=>{const{about:e}=(0,s.useContext)(rn),{img:t,paragraphOne:r,paragraphTwo:n,paragraphThree:a,resume:o}=e,{0:i,1:c}=(0,s.useState)(!1),{0:l,1:u}=(0,s.useState)(!1);return(0,s.useEffect)(()=>{window.innerWidth>769?(c(!0),u(!1)):(u(!0),c(!1))},[]),s.createElement("section",{id:"about"},s.createElement(Te,null,s.createElement(ln,{title:"About Me"}),s.createElement(on,{className:"about-wrapper"},s.createElement(cn,{md:6,sm:12},s.createElement(Qr,{direction:"up",duration:1e3,delay:600,triggerOnce:!0},s.createElement("div",{className:"about-wrapper__image"},s.createElement(pn,{alt:"profile picture",filename:t})))),s.createElement(cn,{md:6,sm:12},s.createElement(Qr,{direction:i?"left":"up",duration:1e3,delay:1e3,triggerOnce:!0},s.createElement("div",{className:"about-wrapper__info"},s.createElement("p",{className:"about-wrapper__info-text"},r||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),s.createElement("p",{className:"about-wrapper__info-text"},n||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),s.createElement("p",{className:"about-wrapper__info-text"},a||"Lorem ipsum dolor sit, amet consectetur adipisicing elit."),o&&s.createElement("span",{className:"d-flex mt-3"},s.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:o},"Resume"))))))))};const mn=(e,t,r,n)=>{e.style.transition=`${t} ${r}ms ${n}`},hn=(e,t,r)=>Math.min(Math.max(e,t),r);class gn{glareWrapperEl;glareEl;glareAngle=0;glareOpacity=0;constructor(e,t){this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const r={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(e),a={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,r),Object.assign(this.glareEl.style,a)}calculateGlareSize=e=>{const{width:t,height:r}=e,n=Math.sqrt(t**2+r**2);return{width:n,height:n}};setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`};update=(e,t,r,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,r,n)};updateAngle=(e,t)=>{const{xPercentage:r,yPercentage:n}=e,a=180/Math.PI,o=r?Math.atan2(n,-r)*a:0;this.glareAngle=o-(t?180:0)};updateOpacity=(e,t,r,n)=>{const{xPercentage:a,yPercentage:o}=e,{glarePosition:i,glareReverse:s,glareMaxOpacity:c}=t,l=r?-1:1,u=n?-1:1,d=s?-1:1;let p=0;switch(i){case"top":p=-a*l*d;break;case"right":p=o*u*d;break;case"bottom":case void 0:p=a*l*d;break;case"left":p=-o*u*d;break;case"all":p=Math.hypot(a,o)}const f=hn(p,0,100);this.glareOpacity=f*c/100};render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`}}class yn{tiltAngleX=0;tiltAngleY=0;tiltAngleXPercentage=0;tiltAngleYPercentage=0;update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)};updateTilt=(e,t)=>{const{xPercentage:r,yPercentage:n}=e,{tiltMaxAngleX:a,tiltMaxAngleY:o}=t;this.tiltAngleX=r*a/100,this.tiltAngleY=n*o/100*-1};updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:r,tiltAngleYManual:n,tiltMaxAngleX:a,tiltMaxAngleY:o}=t;(null!==r||null!==n)&&(this.tiltAngleX=null!==r?r:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/a,e.yPercentage=100*this.tiltAngleY/o)};updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY};updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=hn(this.tiltAngleX,-90,90),this.tiltAngleY=hn(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)};updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:r}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/r*100};render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}const bn={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class vn extends s.PureComponent{static defaultProps=bn;wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1};tilt=null;glare=null;componentDidMount(){if(this.tilt=new yn,this.initGlare(),this.setSize(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;("function"!=typeof e||"granted"===await e())&&window.addEventListener("deviceorientation",this.onMove)};removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)};setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new gn(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)};onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t({event:e})};onMove=e=>{this.mainLoop(e),this.emitOnMove(e)};emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let r=0,n=0;this.glare&&(r=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:r,glareOpacity:n,event:e})}onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t({event:e}),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}};processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":{const{tiltAngleXInitial:e,tiltAngleYInitial:t,tiltMaxAngleX:r,tiltMaxAngleY:n}=this.props,a=t/n*100;this.wrapperEl.clientPosition.xPercentage=hn(e/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=hn(a,-100,100),this.wrapperEl.scale=1;break}}};processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:r}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/r*100,this.wrapperEl.clientPosition.xPercentage=hn(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=hn(this.wrapperEl.clientPosition.yPercentage,-100,100)};update=e=>{const{tiltEnable:t,flipVertically:r,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,r,n)};updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,r;if(e){const{x:e,y:n}=this.wrapperEl.clientPosition;t=n/window.innerHeight*200-100,r=e/window.innerWidth*200-100}else{const{size:{width:e,height:n,left:a,top:o},clientPosition:{x:i,y:s}}=this.wrapperEl;t=(s-o)/n*200-100,r=(i-a)/e*200-100}this.wrapperEl.clientPosition.xPercentage=hn(t,-100,100),this.wrapperEl.clientPosition.yPercentage=hn(r,-100,100)};updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)};renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)};resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;mn(this.wrapperEl.node,"all",e,t),this.glare&&mn(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:r}=this.props;return(0,be.jsx)("div",{ref:e=>{this.wrapperEl.node=e},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:r,children:e})}}var wn=({filename:e,alt:t})=>{const r=(0,un.useStaticQuery)("2175775800").images.edges.find(t=>t.node.relativePath.includes(e));return r?s.createElement(dn.G,{alt:t,image:(0,dn.c)(r.node.childImageSharp)}):null};var En=()=>{const{projects:e}=(0,s.useContext)(rn),{0:t,1:r}=(0,s.useState)(!1),{0:n,1:a}=(0,s.useState)(!1);return(0,s.useEffect)(()=>{window.innerWidth>769?(r(!0),a(!1)):(a(!0),r(!1))},[]),s.createElement("section",{id:"projects"},s.createElement(Te,null,s.createElement("div",{className:"project-wrapper"},s.createElement(ln,{title:"Projects"}),e.map((e,r)=>{const{title:n,info:a,info2:o,url:i,repo:c,img:l}=e;return s.createElement(on,{key:r},s.createElement(cn,{lg:4,sm:12},s.createElement(Qr,{direction:t?"left":"up",duration:1e3,delay:500,triggerOnce:!0},s.createElement("div",{className:"project-wrapper__text"},s.createElement("h3",{className:"project-wrapper__text-title"},n||"Project Title"),s.createElement("div",null,s.createElement("p",null,a||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."),s.createElement("p",{className:"mb-4"},o||"")),s.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:i||"#!"},"See Live"),c&&s.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:c},"Source Code")))),s.createElement(cn,{lg:8,sm:12},s.createElement(Qr,{direction:t?"right":"up",duration:1e3,delay:1e3,triggerOnce:!0},s.createElement("div",{className:"project-wrapper__image"},s.createElement("a",{href:i||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},s.createElement(vn,{tiltMaxAngleDegrees:8,perspective:1e3,scale:1,transitionSpeed:300,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)"},s.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},s.createElement(wn,{alt:n,filename:l}))))))))}))))};var xn=()=>{const{contact:e}=(0,s.useContext)(rn),{cta:t,btn:r,email:n}=e;return s.createElement("section",{id:"contact"},s.createElement(Te,null,s.createElement(ln,{title:"Contact"}),s.createElement(Qr,{direction:"up",duration:1e3,delay:800,triggerOnce:!0},s.createElement("div",{className:"contact-wrapper"},s.createElement("p",{className:"contact-wrapper__text"},t||"Would you like to work with me? Awesome!"),s.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:n?`mailto:${n}`:"https://github.com/cobidev/react-simplefolio"},r||"Let's Talk")))))};class kn extends s.PureComponent{constructor(e){super(e),this.$=s.createRef(),this._=s.createRef()}render(){return s.createElement("span",{ref:this.$},s.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,9867)).then(({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}})})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var Cn=kn;var An=()=>s.createElement(s.Fragment,null,s.createElement(Cn,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork cobidev/gatsby-simplefolio on GitHub"},"Fork"),s.createElement(Cn,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star cobidev/gatsby-simplefolio on GitHub"},"Star"));let Sn;const Tn=new Uint8Array(16);function On(){if(!Sn&&(Sn="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Sn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Sn(Tn)}const Mn=[];for(let Gn=0;Gn<256;++Gn)Mn.push((Gn+256).toString(16).slice(1));function Pn(e,t=0){return Mn[e[t+0]]+Mn[e[t+1]]+Mn[e[t+2]]+Mn[e[t+3]]+"-"+Mn[e[t+4]]+Mn[e[t+5]]+"-"+Mn[e[t+6]]+Mn[e[t+7]]+"-"+Mn[e[t+8]]+Mn[e[t+9]]+"-"+Mn[e[t+10]]+Mn[e[t+11]]+Mn[e[t+12]]+Mn[e[t+13]]+Mn[e[t+14]]+Mn[e[t+15]]}let Nn,$n,Ln=0,_n=0;var jn=function(e,t,r){let n=t&&r||0;const a=t||new Array(16);let o=(e=e||{}).node||Nn,i=void 0!==e.clockseq?e.clockseq:$n;if(null==o||null==i){const t=e.random||(e.rng||On)();null==o&&(o=Nn=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==i&&(i=$n=16383&(t[6]<<8|t[7]))}let s=void 0!==e.msecs?e.msecs:Date.now(),c=void 0!==e.nsecs?e.nsecs:_n+1;const l=s-Ln+(c-_n)/1e4;if(l<0&&void 0===e.clockseq&&(i=i+1&16383),(l<0||s>Ln)&&void 0===e.nsecs&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Ln=s,_n=c,$n=i,s+=122192928e5;const u=(1e4*(268435455&s)+c)%4294967296;a[n++]=u>>>24&255,a[n++]=u>>>16&255,a[n++]=u>>>8&255,a[n++]=255&u;const d=s/4294967296*1e4&268435455;a[n++]=d>>>8&255,a[n++]=255&d,a[n++]=d>>>24&15|16,a[n++]=d>>>16&255,a[n++]=i>>>8|128,a[n++]=255&i;for(let p=0;p<6;++p)a[n+p]=o[p];return t||Pn(a)};const In={title:"Sandrine Cao | Developer",lang:"fr",description:"Welcome to my website"},zn={title:"Hello, my name is",name:"Sandrine Cao.",subtitle:"A French Software Developer looking for a six-month-internship.",cta:"Read More"},Rn={img:"profile.png",paragraphOne:"Living in Paris, I am currently studying at 42 - a software engineering and computer programming program that uses project-based learning, skills mastery, peer-to-peer correction, and gamification to foster learning.",paragraphTwo:"I have recently mastered JavaScript, Node.js, React.js and I am eager to learn more technologies.",paragraphThree:"Becoming a developer is a career change - I used to work at PlayStation as a Video Games Quality Assurance Tester in the UK for over 5 years and this dream led me to discover programming, and a love for crafting code and building products.",resume:"https://github.com/sandrinecao/sandrinecao.github.io/blob/source/CV_Sandrine_Cao.pdf"},Fn=[{id:jn(),img:"hypertube.jpg",title:"IMDb-Clone",info:"MERN app (MongoDB, Express, NodeJS, ReactJS). Final project for searching movies, filtering by year or genre and such.",info2:"Grade: 125/100",url:"https://hypertube-scao.herokuapp.com/",repo:"https://github.com/sandrinecao/IMDb-Clone"},{id:jn(),img:"matcha.jpg",title:"Tinder-Clone",info:"Tinder-like web application using Node.js, Express, MySQL and Handlebars.",info2:"Grade: 125/100",url:"https://matcha-scao.herokuapp.com/",repo:"https://github.com/sandrinecao/Dating-App-Matcha"},{id:jn(),img:"camagru.jpg",title:"Instagram-clone",info:"An Instagram clone web app using PHP, CSS and Javascript as part of 42's web branch.",info2:"Grade: 106/100",url:"https://camagru-scao.herokuapp.com/",repo:"https://github.com/cobidev/react-simplefolio"}],Yn={cta:"sandrine.cao@gmail.com - +33 6 18 14 03 52",btn:"",email:"sandrine.cao@gmail.com"},Xn={networks:[{id:jn(),name:"linkedin",url:"https://linkedin.com/in/sandrinecao"},{id:jn(),name:"github",url:"https://github.com/sandrinecao"}]},Dn={isEnabled:!1};var Vn=()=>{const{footer:e}=(0,s.useContext)(rn),{networks:t}=e,{isEnabled:r}=Dn;return s.createElement("footer",{className:"footer navbar-static-bottom"},s.createElement(Te,null,s.createElement("a",{href:"#top","aria-label":"Back To Top",className:"back-to-top"},s.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})),s.createElement("div",{className:"social-links"},t&&t.map(e=>{const{id:t,name:r,url:n}=e;return s.createElement("a",{key:t,href:n||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":r},s.createElement("i",{className:`fa fa-${r||"refresh"} fa-inverse`}))})),s.createElement("hr",null),s.createElement("p",{className:"footer__text"},"© ",(new Date).getFullYear()," - Template developed by"," ",s.createElement("a",{href:"https://github.com/cobidev",target:"_blank",rel:"noopener noreferrer"},"Jacobo Martínez")),r&&s.createElement(An,null)))};var qn=function(){const{0:e,1:t}=(0,s.useState)({}),{0:r,1:n}=(0,s.useState)({}),{0:a,1:o}=(0,s.useState)([]),{0:i,1:c}=(0,s.useState)({}),{0:l,1:u}=(0,s.useState)({});return(0,s.useEffect)(()=>{t({...zn}),n({...Rn}),o((0,he.A)(Fn)),c({...Yn}),u({...Xn})},[]),s.createElement(tn,{value:{hero:e,about:r,projects:a,contact:i,footer:l}},s.createElement(nn,null),s.createElement(fn,null),s.createElement(En,null),s.createElement(xn,null),s.createElement(Vn,null))};function Wn(){const{title:e,lang:t,description:r}=In;return s.createElement(s.Fragment,null,s.createElement(me,null,s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,e||"Gatsby Simplefolio"),s.createElement("html",{lang:t||"en"}),s.createElement("meta",{name:"description",content:r||"Gatsby Simplefolio"})),s.createElement(qn,null))}},6942:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8338:function(e,t,r){"use strict";e.exports=r(9998)},8828:function(e){"use strict";e.exports=Object.assign},9867:function(e,t,r){"use strict";r.r(t),r.d(t,{render:function(){return M}});var n=window.document,a=window.Math,o=window.HTMLElement,i=window.XMLHttpRequest,s=function(e,t){for(var r=0,n=e.length;r<n;r++)t(e[r])},c=function(e){return function(t,r,n){var a=e.createElement(t);if(null!=r)for(var o in r){var i=r[o];null!=i&&(null!=a[o]?a[o]=i:a.setAttribute(o,i))}return null!=n&&s(n,function(t){a.appendChild("string"==typeof t?e.createTextNode(t):t)}),a}},l=c(n),u=function(e,t){return{}.hasOwnProperty.call(e,t)},d=function(e){return(""+e).toLowerCase()},p="github.com",f="https://api."+p,m=i&&"prototype"in i&&"withCredentials"in i.prototype,h=m&&o&&"attachShadow"in o.prototype&&!("prototype"in o.prototype.attachShadow),g=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},y=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},b={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#25292e;background-color:#ebf0f4;border-color:#d1d9e0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e5eaee;background-position:0 -0.5em;border-color:#d1d9e0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23eff2f5'/%3e%3cstop offset='90%25' stop-color='%23e5eaee'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #eff2f5, #e5eaee 90%);background-image:linear-gradient(180deg, #eff2f5, #e5eaee 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFEFF2F5', endColorstr='#FFE4E9ED')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e6eaef;border-color:#d1d9e0;background-image:none;filter:none}.social-count{color:#25292e;background-color:#fff;border-color:#d1d9e0}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#25292e;background-color:#e0e6eb;border-color:#454c54;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#d0d7e0;background-position:0 -0.5em;border-color:#454c54;background-image:none;filter:none}.btn:active{background-color:#d1d9e0;border-color:#454c54}.social-count{color:#25292e;background-color:#fff;border-color:#454c54}.social-count:hover,.social-count:focus{color:#023b95}.octicon-heart{color:#7d0c57}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #1f6feb;outline-offset:-2px}.btn{color:#f0f6fc;background-color:#1a2026;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23212830'/%3e%3cstop offset='90%25' stop-color='%231a2026'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #212830, #1a2026 90%);background-image:linear-gradient(180deg, #212830, #1a2026 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF212830', endColorstr='#FF191F25')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#1f242c;background-position:0 -0.5em;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23262c36'/%3e%3cstop offset='90%25' stop-color='%231f242c'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #262c36, #1f242c 90%);background-image:linear-gradient(180deg, #262c36, #1f242c 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF262C36', endColorstr='#FF1E232B')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2a313c;border-color:#3d444d;background-image:none;filter:none}.social-count{color:#f0f6fc;background-color:#0d1117;border-color:#3d444d}.social-count:hover,.social-count:focus{color:#388bfd}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #316dca;outline-offset:-2px}.btn{color:#d1d7e0;background-color:#232932;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232a313c'/%3e%3cstop offset='90%25' stop-color='%23232932'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2a313c, #232932 90%);background-image:linear-gradient(180deg, #2a313c, #232932 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2A313C', endColorstr='#FF222831')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#282f38;background-position:0 -0.5em;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f3742'/%3e%3cstop offset='90%25' stop-color='%23282f38'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f3742, #282f38 90%);background-image:linear-gradient(180deg, #2f3742, #282f38 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F3742', endColorstr='#FF272E37')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#3d444d;border-color:#3d444d;background-image:none;filter:none}.social-count{color:#d1d7e0;background-color:#212830;border-color:#3d444d}.social-count:hover,.social-count:focus{color:#4184e4}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #409eff;outline-offset:-2px}.btn{color:#fff;background-color:#262c36;border-color:#b7bdc8;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#232932;background-position:0 -0.5em;border-color:#b7bdc8;background-image:none;filter:none}.btn:active{background-color:#2f3742;border-color:#b7bdc8}.social-count{color:#fff;background-color:#010409;border-color:#b7bdc8}.social-count:hover,.social-count:focus{color:#5cacff}.octicon-heart{color:#ff90c8}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[u(b,t)?t:e]+"}"},w=function(e){if(null==e)return b.light;if(u(b,e))return b[e];var t=function(e,t,r,n){null==n&&(n=window.decodeURIComponent);var a={};return s(e.split(t),function(e){if(""!==e){var t=e.split(r);a[n(t[0])]=null!=t[1]?n(t.slice(1).join(r)):void 0}}),a}(e,";",":",function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")});return b[u(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},E={"comment-discussion":{heights:{16:{width:16,path:'<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>'}}},download:{heights:{16:{width:16,path:'<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>'}}},eye:{heights:{16:{width:16,path:'<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>'}}},heart:{heights:{16:{width:16,path:'<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"></path>'}}},package:{heights:{16:{width:16,path:'<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>'}}},star:{heights:{16:{width:16,path:'<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>'}}},play:{heights:{16:{width:16,path:'<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>'}}}},x=function(e,t){e=d(e).replace(/^octicon-/,""),u(E,e)||(e="mark-github");var r=t>=24&&24 in E[e].heights?24:16,n=E[e].heights[r];return'<svg viewBox="0 0 '+n.width+" "+r+'" width="'+t*n.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+n.path+"</svg>"},k={},C=function(e,t){var r=k[e]||(k[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}(function(){for(delete k[e];t=r.shift();)t.apply(null,arguments)});if(m){var a=new i;g(a,"abort",n),g(a,"error",n),g(a,"load",function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void n(t)}n(200!==this.status,e)}),a.open("GET",e),a.send()}else{var o=this||window;o._=function(e){o._=null,n(200!==e.meta.status,e.data)};var s=c(o.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),l=function(){o._&&o._({meta:{}})};g(s,"load",l),g(s,"error",l),function(e,t,r){if(null!=e.readyState){var n="readystatechange",a=function(){if(t.test(e.readyState))return y(e,n,a),r.apply(this,arguments)};g(e,n,a)}}(s,/de|m/,l),o.document.getElementsByTagName("head")[0].appendChild(s)}}},A=function(e,t,r){var n=c(e.ownerDocument),a=e.appendChild(n("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+w(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.ownerDocument.createTextNode(o));var i="large"===d(t["data-size"]),s=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:x(t["data-icon"],i?16:14)+"&nbsp;"},[n("span",{},[t["data-text"]||""])]),l=e.appendChild(n("div",{className:"widget"+(i?" widget-lg":"")},[s])),u=s.hostname.replace(/\.$/,"");if(("."+u).substring(u.length-10)!=="."+p)return s.removeAttribute("href"),void r(l);var m=(" /"+s.pathname).split(/\/+/);if(((u===p||u==="gist."+p)&&"archive"===m[3]||u===p&&"releases"===m[3]&&("download"===m[4]||"latest"===m[4]&&"download"===m[5])||u==="codeload."+p)&&(s.target="_top"),"true"===d(t["data-show-count"])&&u===p&&"marketplace"!==m[1]&&"sponsors"!==m[1]&&"orgs"!==m[1]&&"users"!==m[1]&&"-"!==m[1]){var h,g;if(!m[2]&&m[1])g="followers",h="?tab=followers";else if(!m[3]&&m[2])g="stargazers_count",h="";else if(m[4]||"subscription"!==m[3])if(m[4]||"fork"!==m[3]){if("issues"!==m[3])return void r(l);g="open_issues_count",h="/issues"}else g="forks_count",h="/forks";else g="subscribers_count",h="";var y=m[2]?"/repos/"+m[1]+"/"+m[2]:"/users/"+m[1];C.call(this,f+y,function(e,t){if(!e){var a=t[g];l.appendChild(n("a",{className:"social-count",href:t.html_url+h,rel:"noopener",target:"_blank","aria-label":a+" "+g.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(l)})}else r(l)},S=window.devicePixelRatio||1,T=function(e){return(S>1?a.ceil(a.round(e*S)/S*2)/2:a.ceil(e))||0},O=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},M=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return s(["icon","color-scheme","text","size","show-count"],function(r){var n="data-"+r;t[n]=e.getAttribute(n)}),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),h){var r=l("span");A(r.attachShadow({mode:"closed"}),e,function(){t(r)})}else{var o=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});O(o,[0,0]),o.style.border="none",o.style.colorScheme="light";var i=function(){var r,s=o.contentWindow;try{r=s.document.body}catch(c){return void n.body.appendChild(o.parentNode.removeChild(o))}y(o,"load",i),A.call(s,r,e,function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=a.max(t,T(n.width)),r=a.max(r,T(n.height))}return[t,r]}(r);o.parentNode.removeChild(o),function(e,t,r){var n=function(){return y(e,t,n),r.apply(this,arguments)};g(e,t,n)}(o,"load",function(){O(o,n)}),o.src="https://unpkg.com/github-buttons@2.33.1/dist/buttons.html#"+(o.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var a=[];for(var o in e){var i=e[o];null!=i&&a.push(n(o)+r+n(i))}return a.join(t)}(e)),t(o)})};g(o,"load",i),n.body.appendChild(o)}}},9998:function(e,t){"use strict";var r,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case s:case i:case p:case f:return e;default:switch(e=e&&e.$$typeof){case u:case l:case d:case h:case m:case c:return e;default:return t}}case a:return t}}}r=Symbol.for("react.module.reference"),t.isFragment=function(e){return y(e)===o}}}]);
//# sourceMappingURL=component---src-pages-index-js-8f93c70f61e437151729.js.map