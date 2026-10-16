/*! For license information please see component---src-pages-index-js-2634ed9c9556903614e2.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293],{115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var i,l,c,u;if(Array.isArray(e)){if((i=e.length)!=s.length)return!1;for(l=i;0!==l--;)if(!o(e[l],s[l]))return!1;return!0}if(r&&e instanceof Map&&s instanceof Map){if(e.size!==s.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],s.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&s instanceof Set){if(e.size!==s.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(s)){if((i=e.length)!=s.length)return!1;for(l=i;0!==l--;)if(e[l]!==s[l])return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof s.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof s.toString)return e.toString()===s.toString();if((i=(c=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(l=i;0!==l--;)if(!Object.prototype.hasOwnProperty.call(s,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=i;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!o(e[c[l]],s[c[l]]))return!1;return!0}return e!=e&&s!=s}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,a=r(6540),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,c=[];function u(){l=e(c.map(function(e){return e.props})),p.canUseDOM?t(l):r&&(l=r(l))}var p=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,c=[],e};var s=a.prototype;return s.UNSAFE_componentWillMount=function(){c.push(this),u()},s.componentDidUpdate=function(){u()},s.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),u()},s.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return s(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),s(p,"canUseDOM",i),p}}},2241:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return io}});var n,a,o,s,i=r(6540),l=r.t(i,2),c=r(5556),u=r.n(c),p=r(2098),d=r.n(p),f=r(115),h=r.n(f),g=r(8828),m=r.n(g),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map(function(e){return w[e]}),"charset"),E="cssText",k="href",S="http-equiv",C="innerHTML",O="itemprop",A="name",L="property",N="rel",T="src",$="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",R="defer",I="encodeSpecialCharacters",M="onChangeClientState",_="titleTemplate",F=Object.keys(P).reduce(function(e,t){return e[P[t]]=t,e},{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},B=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=Z(e,w.TITLE),r=Z(e,_);if(r&&t)return r.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var n=Z(e,j);return t||n||void 0},q=function(e){return Z(e,M)||function(){}},W=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return H({},e,t)},{})},K=function(e,t){return t.filter(function(e){return void 0!==e[w.BASE]}).map(function(e){return e[w.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},G=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var a={};r.filter(function(e){for(var r=void 0,o=Object.keys(e),s=0;s<o.length;s++){var i=o[s],l=i.toLowerCase();-1===t.indexOf(l)||r===N&&"canonical"===e[r].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(i)||i!==C&&i!==E&&i!==O||(r=i)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),s=0;s<o.length;s++){var i=o[s],l=m()({},n[i],a[i]);n[i]=l}return e},[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout(function(){J(e)},0)}),Q=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:r.g.cancelAnimationFrame||Q,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,s=e.metaTags,i=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;ie(w.BODY,n),ie(w.HTML,a),se(p,d);var f={baseTag:le(w.BASE,r),linkTags:le(w.LINK,o),metaTags:le(w.META,s),noscriptTags:le(w.NOSCRIPT,i),scriptTags:le(w.SCRIPT,c),styleTags:le(w.STYLE,u)},h={},g={};Object.keys(f).forEach(function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(g[e]=f[e].oldTags)}),t&&t(),l(e,h,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ie(w.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(z),a=n?n.split(","):[],o=[].concat(a),s=Object.keys(t),i=0;i<s.length;i++){var l=s[i],c=t[l]||"";r.getAttribute(l)!==c&&r.setAttribute(l,c),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)r.removeAttribute(o[p]);a.length===o.length?r.removeAttribute(z):r.getAttribute(z)!==s.join(",")&&r.setAttribute(z,s.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+z+"]"),a=Array.prototype.slice.call(n),o=[],s=void 0;return t&&t.length&&t.forEach(function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var i=void 0===t[n]?"":t[n];r.setAttribute(n,i)}r.setAttribute(z,"true"),a.some(function(e,t){return s=t,r.isEqualNode(e)})?a.splice(s,1):o.push(r)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return r.appendChild(e)}),{oldTags:a,newTags:o}},ce=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[P[r]||r]=e[r],t},t)},pe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[z]=!0,a=ue(r,n),[i.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ce(r),o=oe(t);return a?"<"+e+" "+z+'="true" '+a+">"+B(o,n)+"</"+e+">":"<"+e+" "+z+'="true">'+B(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case b:return{toComponent:function(){return ue(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,a=((n={key:r})[z]=!0,n);return Object.keys(t).forEach(function(e){var r=P[e]||e;if(r===C||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]}),i.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var a=Object.keys(n).filter(function(e){return!(e===C||e===E)}).reduce(function(e,t){var a=void 0===n[t]?t:t+'="'+B(n[t],r)+'"';return e?e+" "+a:a},""),o=n.innerHTML||n.cssText||"",s=-1===D.indexOf(e);return t+"<"+e+" "+z+'="true" '+a+(s?"/>":">"+o+"</"+e+">")},"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,s=e.metaTags,i=e.noscriptTags,l=e.scriptTags,c=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:pe(w.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(b,a,n),link:pe(w.LINK,o,n),meta:pe(w.META,s,n),noscript:pe(w.NOSCRIPT,i,n),script:pe(w.SCRIPT,l,n),style:pe(w.STYLE,c,n),title:pe(w.TITLE,{title:p,titleAttributes:d},n)}},fe=d()(function(e){return{baseTag:K([k,$],e),bodyAttributes:W(y,e),defer:Z(e,R),encode:Z(e,I),htmlAttributes:W(b,e),linkTags:G(w.LINK,[N,k],e),metaTags:G(w.META,[A,x,S,L,O],e),noscriptTags:G(w.NOSCRIPT,[C],e),onChangeClientState:q(e),scriptTags:G(w.SCRIPT,[T,C],e),styleTags:G(w.STYLE,[E],e),title:X(e),titleAttributes:W(v,e)}},function(e){ne&&te(ne),e.defer?ne=ee(function(){ae(e,function(){ne=null})}):(ae(e),ne=null)},de)(function(){return null}),he=(a=fe,s=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(n.type){case w.TITLE:return H({},a,((t={})[n.type]=s,t.titleAttributes=H({},o),t));case w.BODY:return H({},a,{bodyAttributes:H({},o)});case w.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach(function(t){var n;r=H({},r,((n={})[t]=e[t],n))}),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,r){return t[F[r]||r]=e[r],t},t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),i.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(i.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},s);he.renderStatic=he.rewind;const ge=e=>"string"==typeof e,me=()=>{let e,t;const r=new Promise((r,n)=>{e=r,t=n});return r.resolve=e,r.reject=t,r},ye=e=>null==e?"":String(e),be=/###/g,ve=e=>e&&e.includes("###")?e.replace(be,"."):e,we=e=>!e||ge(e),xe=(e,t,r)=>{const n=ge(t)?t.split("."):t;let a=0;for(;a<n.length-1;){if(we(e))return{};const t=ve(n[a]);!e[t]&&r&&(e[t]=new r),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++a}return we(e)?{}:{obj:e,k:ve(n[a])}},Ee=(e,t,r)=>{const{obj:n,k:a}=xe(e,t,Object);if(void 0!==n||1===t.length)return void(n[a]=r);let o=t[t.length-1],s=t.slice(0,t.length-1),i=xe(e,s,Object);for(;void 0===i.obj&&s.length;)o=`${s[s.length-1]}.${o}`,s=s.slice(0,s.length-1),i=xe(e,s,Object),i?.obj&&void 0!==i.obj[`${i.k}.${o}`]&&(i.obj=void 0);i.obj[`${i.k}.${o}`]=r},ke=(e,t)=>{const{obj:r,k:n}=xe(e,t);if(r&&Object.prototype.hasOwnProperty.call(r,n))return r[n]},Se=(e,t,r)=>{for(const n in t)"__proto__"!==n&&"constructor"!==n&&(Object.prototype.hasOwnProperty.call(e,n)?ge(e[n])||e[n]instanceof String||ge(t[n])||t[n]instanceof String?r&&(e[n]=t[n]):Se(e[n],t[n],r):e[n]=t[n]);return e},Ce=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),Oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},Ae=e=>ge(e)?e.replace(/[&<>"'\/]/g,e=>Oe[e]):e;const Le=[" ",",","?","!",";"],Ne=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const r=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,r),this.regExpQueue.push(e),r}}(20),Te=(e,t,r=".")=>{if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const n=t.split(r);let a=e;for(let o=0;o<n.length;){if(!a||"object"!=typeof a)return;let e,t="";for(let s=o;s<n.length;++s)if(s!==o&&(t+=r),t+=n[s],e=a[t],void 0!==e){if(["string","number","boolean"].includes(typeof e)&&s<n.length-1)continue;o+=s-o+1;break}a=e}return a},$e=e=>e?.replace(/_/g,"-"),Pe={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class je{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||Pe,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,r,n){return n&&!this.debug?null:(e=e.map(e=>ge(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g," "):e),ge(e[0])&&(e[0]=`${r}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new je(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new je(this.logger,e)}}var Re=new je;class Ie{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const r=this.observers[e].get(t)||0;this.observers[e].set(t,r+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}once(e,t){const r=(...n)=>{t(...n),this.off(e,r)};return this.on(e,r),this}emit(e,...t){if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(([e,r])=>{for(let n=0;n<r;n++)e(...t)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(([r,n])=>{for(let a=0;a<n;a++)r(e,...t)})}}}const Me=new WeakSet;class _e extends Ie{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,r,n={}){const a=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,o=void 0!==n.ignoreJSONStructure?n.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.includes(".")?s=e.split("."):(s=[e,t],r&&(Array.isArray(r)?s.push(...r):ge(r)&&a?s.push(...r.split(a)):s.push(r)));const i=ke(this.data,s);return i||t||r||!e.includes(".")||(e=s[0],t=s[1],r=s.slice(2).join(".")),!i&&o&&ge(r)?Te(this.data?.[e]?.[t],r,a):i}addResource(e,t,r,n,a={silent:!1}){const o=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator;let s=[e,t];r&&(s=s.concat(o?r.split(o):r)),e.includes(".")&&(s=e.split("."),n=t,t=s[1]),this.addNamespaces(t),Ee(this.data,s,n),a.silent||this.emit("added",e,t,r,n)}addResources(e,t,r,n={silent:!1}){for(const a in r)(ge(r[a])||Array.isArray(r[a]))&&this.addResource(e,t,a,r[a],{silent:!0});n.silent||this.emit("added",e,t,r)}addResourceBundle(e,t,r,n,a,o={silent:!1,skipCopy:!1}){let s=[e,t];e.includes(".")&&(s=e.split("."),n=r,r=t,t=s[1]),this.addNamespaces(t);let i=ke(this.data,s)||{};o.skipCopy||(r=JSON.parse(JSON.stringify(r))),n?Se(i,r,a):i={...i,...r},Ee(this.data,s,i),o.silent||this.emit("added",e,t,r)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>{const r=t[e];return!!Me.has(r)||!(!r||0===Object.keys(r).length)&&("object"==typeof r&&Me.add(r),!0)})}toJSON(){return this.data}}var Fe={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,r,n,a){return e.forEach(e=>{t=this.processors[e]?.process(t,r,n,a)??t}),t}};const De=Symbol("i18next/PATH_KEY");function ze(e,t){const{[De]:r}=e(function(){const e=[],t=Object.create(null);let r;return t.get=(n,a)=>(r?.revoke?.(),a===De?e:(e.push(a),r=Proxy.revocable(n,t),r.proxy)),Proxy.revocable(Object.create(null),t).proxy}()),n=t?.keySeparator??".",a=t?.nsSeparator??":",o="strict"===t?.enableSelector;if(r.length>1&&a){const e=t?.ns,s=o?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(s){if((o?s:s.length>1?s.slice(1):[]).includes(r[0]))return`${r[0]}${a}${r.slice(1).join(n)}`}}return r.join(n)}const Ve=e=>!ge(e)&&"boolean"!=typeof e&&"number"!=typeof e;class Ye extends Ie{constructor(e,t={}){super(),((e,t,r)=>{e.forEach(e=>{t[e]&&(r[e]=t[e])})})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=Re.create("translator"),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const r={...t};if(null==e)return!1;const n=this.resolve(e,r);if(void 0===n?.res)return!1;const a=Ve(n.res);return!1!==r.returnObjects||!a}extractFromKey(e,t){let r=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===r&&(r=":");const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let a=t.ns||this.options.defaultNS||[];const o=r&&e.includes(r),s=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||((e,t,r)=>{t=t||"",r=r||"";const n=Le.filter(e=>!t.includes(e)&&!r.includes(e));if(0===n.length)return!0;const a=Ne.getRegExp(`(${n.map(e=>"?"===e?"\\?":e).join("|")})`);let o=!a.test(e);if(!o){const t=e.indexOf(r);t>0&&!a.test(e.substring(0,t))&&(o=!0)}return o})(e,r,n));if(o&&!s){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:ge(a)?[a]:a};const o=e.split(r);(r!==n||r===n&&this.options.ns.includes(o[0]))&&(a=o.shift()),e=o.join(n)}return{key:e,namespaces:ge(a)?[a]:a}}translate(e,t,r){let n="object"==typeof t?{...t}:t;if("object"!=typeof n&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof n&&(n={...n}),n||(n={}),null==e)return"";"function"==typeof e&&(e=ze(e,{...this.options,...n})),Array.isArray(e)||(e=[String(e)]),e=e.map(e=>"function"==typeof e?ze(e,{...this.options,...n}):String(e));const a=void 0!==n.returnDetails?n.returnDetails:this.options.returnDetails,o=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,{key:s,namespaces:i}=this.extractFromKey(e[e.length-1],n),l=i[i.length-1];let c=void 0!==n.nsSeparator?n.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const u=n.lng||this.language,p=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===u?.toLowerCase())return p?a?{res:`${l}${c}${s}`,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${c}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:s;const d=this.resolve(e,n);let f=d?.res;const h=d?.usedKey||s,g=d?.exactUsedKey||s,m=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=void 0!==n.count&&!ge(n.count),v=Ye.hasDefaultValue(n),w=b?this.pluralResolver.getSuffix(u,n.count,n):"",x=n.ordinal&&b?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",E=b&&!n.ordinal&&0===n.count,k=E&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${w}`]||n[`defaultValue${x}`]||n.defaultValue;let S=f;y&&!f&&v&&(S=k);const C=Ve(S),O=Object.prototype.toString.apply(S);if(!(y&&S&&C)||["[object Number]","[object Function]","[object RegExp]"].includes(O)||ge(m)&&Array.isArray(S))if(y&&ge(m)&&Array.isArray(f))f=f.join(m),f&&(f=this.extendTranslation(f,e,n,r));else{let t=!1,a=!1;!this.isValidLookup(f)&&v&&(t=!0,f=k),this.isValidLookup(f)||(a=!0,f=s);const i=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&a?void 0:f,p=v&&k!==f&&this.options.updateMissing;if(a||t||p){if(this.logger.log(p?"updateKey":"missingKey",u,l,b&&!p?`${s}${this.pluralResolver.getSuffix(u,n.count,n)}`:s,p?k:f),o){const e=this.resolve(s,{...n,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(n.lng||this.language):e.push(n.lng||this.language);const r=(e,t,r)=>{const a=v&&r!==f?r:i;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,a,p,n):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,a,p,n),this.emit("missingKey",e,l,t,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,n);E&&n[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{r([e],s+t,n[`defaultValue${t}`]||k)})}):r(e,s,k))}f=this.extendTranslation(f,e,n,d,r),a&&f===s&&this.options.appendNamespaceToMissingKey&&(f=`${l}${c}${s}`),(a||t)&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${c}${s}`:s,t?f:void 0,n))}else{if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,S,{...n,ns:i}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(d.res=e,d.usedParams=this.getUsedParamsDetails(n),d):e}if(o){const e=Array.isArray(S),t=e?[]:{},r=e?g:h;for(const a in S)if(Object.prototype.hasOwnProperty.call(S,a)){const e=`${r}${o}${a}`;t[a]=v&&!f?this.translate(e,{...n,defaultValue:Ve(k)?k[a]:void 0,joinArrays:!1,ns:i}):this.translate(e,{...n,joinArrays:!1,ns:i}),t[a]===e&&(t[a]=S[a])}f=t}}return a?(d.res=f,d.usedParams=this.getUsedParamsDetails(n),d):f}extendTranslation(e,t,r,n,a){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||n.usedLng,n.usedNS,n.usedKey,{resolved:n});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const o=ge(e)&&(void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let s;if(o){const t=e.match(this.interpolator.nestingRegexp);s=t&&t.length}let i=r.replace&&!ge(r.replace)?r.replace:r;if(this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),e=this.interpolator.interpolate(e,i,r.lng||this.language||n.usedLng,r),o){const t=e.match(this.interpolator.nestingRegexp);s<(t&&t.length)&&(r.nest=!1)}!r.lng&&n&&n.res&&(r.lng=this.language||n.usedLng),!1!==r.nest&&(e=this.interpolator.nest(e,(...e)=>a?.[0]!==e[0]||r.context?this.translate(...e,t):(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null),r)),r.interpolation&&this.interpolator.reset()}const o=r.postProcess||this.options.postProcess,s=ge(o)?[o]:o;return null!=e&&s?.length&&!1!==r.applyPostProcessor&&(e=Fe.handle(s,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...n,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),e}resolve(e,t={}){let r,n,a,o,s;return ge(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>"function"==typeof e?ze(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(r))return;const i=this.extractFromKey(e,t),l=i.key;n=l;let c=i.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const u=void 0!==t.count&&!ge(t.count),p=u&&!t.ordinal&&0===t.count,d=void 0!==t.context&&(ge(t.context)||"number"==typeof t.context)&&""!==t.context,f=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);c.forEach(e=>{this.isValidLookup(r)||(s=e,this.checkedLoadedFor[`${f[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(s)||(this.checkedLoadedFor[`${f[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${f.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach(n=>{if(this.isValidLookup(r))return;o=n;const s=[l];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(s,l,n,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(n,t.count,t));const r=`${this.options.pluralSeparator}zero`,a=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(a)&&s.push(l+e.replace(a,this.options.pluralSeparator)),s.push(l+e),p&&s.push(l+r)),d){const n=`${l}${this.options.contextSeparator||"_"}${t.context}`;s.push(n),u&&(t.ordinal&&e.startsWith(a)&&s.push(n+e.replace(a,this.options.pluralSeparator)),s.push(n+e),p&&s.push(n+r))}}let i;for(;i=s.pop();)this.isValidLookup(r)||(a=i,r=this.getResource(n,e,i,t))}))})}),{res:r,usedKey:n,exactUsedKey:a,usedLng:o,usedNS:s}}isValidLookup(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}getResource(e,t,r,n={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,r,n):this.resourceStore.getResource(e,t,r,n)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=e.replace&&!ge(e.replace);let n=r?e.replace:e;if(r&&void 0!==e.count&&(n={...n,count:e.count}),this.options.interpolation.defaultVariables&&(n={...this.options.interpolation.defaultVariables,...n}),!r){n={...n};for(const e of t)delete n[e]}return n}static hasDefaultValue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith("defaultValue")&&void 0!==e[t])return!0;return!1}}class He{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Re.create("languageUtils"),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(!(e=$e(e))||!e.includes("-"))return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=$e(e))||!e.includes("-"))return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(ge(e)&&e.includes("-")){let r;try{r=Intl.getCanonicalLocales(e)[0]}catch(t){}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const r=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(r)||(t=r)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const r=this.getScriptPartFromCode(e);if(this.isSupportedCode(r))return t=r;const n=this.getLanguagePartFromCode(e);if(this.isSupportedCode(n))return t=n;t=this.options.supportedLngs.find(e=>e===n||!(!e.includes("-")&&!n.includes("-"))&&(!(!e.includes("-")||n.includes("-")||e.slice(0,e.indexOf("-"))!==n)||!!(e.startsWith(n)&&n.length>1)))}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),ge(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let r=e[t];return r||(r=e[this.getScriptPartFromCode(t)]),r||(r=e[this.formatLanguageCode(t)]),r||(r=e[this.getLanguagePartFromCode(t)]),r||(r=e.default),r||[]}toResolveHierarchy(e,t){const r=this.options.fallbackLng,n=Array.isArray(r)?r.join("|"):r;n!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=n);const a=void 0===t||!1===t||ge(t),o=void 0===t&&"function"==typeof this.options.fallbackLng;let s=null;if(ge(e)&&a&&!o){let r;r=void 0===t?"undefined":!1===t?"boolean:false":`string:${t}`,s=`${e.length}:${e}|${r}`}if(null!==s){const e=this.resolveHierarchyCache[s];if(void 0!==e)return e.slice()}const i=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),l=[],c=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return ge(e)&&(e.includes("-")||e.includes("_"))?("languageOnly"!==this.options.load&&c(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&c(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&c(this.getLanguagePartFromCode(e))):ge(e)&&c(this.formatLanguageCode(e)),i.forEach(e=>{const t=this.formatLanguageCode(e);l.includes(t)||c(t)}),null!==s?(this.resolveHierarchyCache[s]=l,l.slice()):l}}const Ue={zero:0,one:1,two:2,few:3,many:4,other:5},Be={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class Xe{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Re.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const r=$e("dev"===e?"en":e),n=t.ordinal?"ordinal":"cardinal",a=JSON.stringify({cleanedCode:r,type:n});if(a in this.pluralRulesCache)return this.pluralRulesCache[a];let o;try{o=new Intl.PluralRules(r,{type:n})}catch(s){if("undefined"==typeof Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Be;if(!e.match(/-|_/))return Be;const r=this.languageUtils.getLanguagePartFromCode(e);o=this.getRule(r,t)}return this.pluralRulesCache[a]=o,o}needsPlural(e,t={}){let r=this.getRule(e,t);return r||(r=this.getRule("dev",t)),r?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,r={}){return this.getSuffixes(e,r).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let r=this.getRule(e,t);return r||(r=this.getRule("dev",t)),r?r.resolvedOptions().pluralCategories.sort((e,t)=>Ue[e]-Ue[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t,r={}){const n=this.getRule(e,r);return n?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,r))}}const qe=(e,t,r,n=".",a=!0)=>{let o=((e,t,r)=>{const n=ke(e,r);return void 0!==n?n:ke(t,r)})(e,t,r);return!o&&a&&ge(r)&&(o=Te(e,r,n),void 0===o&&(o=Te(t,r,n))),o},We=e=>e.replace(/\$/g,"$$$$");class Ke{constructor(e={}){this.logger=Re.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:r,useRawValueToEscape:n,prefix:a,prefixEscaped:o,suffix:s,suffixEscaped:i,formatSeparator:l,unescapeSuffix:c,unescapePrefix:u,nestingPrefix:p,nestingPrefixEscaped:d,nestingSuffix:f,nestingSuffixEscaped:h,nestingOptionsSeparator:g,maxReplaces:m,alwaysFormat:y}=e.interpolation;this.escape=void 0!==t?t:Ae,this.escapeValue=void 0===r||r,this.useRawValueToEscape=void 0!==n&&n,this.prefix=a?Ce(a):o||"{{",this.suffix=s?Ce(s):i||"}}",this.formatSeparator=l||",",this.unescapePrefix=c?"":u?Ce(u):"-",this.unescapeSuffix=this.unescapePrefix?"":c?Ce(c):"",this.nestingPrefix=p?Ce(p):d||Ce("$t("),this.nestingSuffix=f?Ce(f):h||Ce(")"),this.nestingOptionsSeparator=g||",",this.maxReplaces=m||1e3,this.alwaysFormat=void 0!==y&&y,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']|"[^"]*"|'[^']*'|\\((?:[^()"']|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,r,n){let a,o,s;const i=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=e=>{if(!e.includes(this.formatSeparator)){const a=qe(t,i,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(a,void 0,r,{...n,...t,interpolationkey:e}):a}const a=e.split(this.formatSeparator),o=a.shift().trim(),s=a.join(this.formatSeparator).trim();return this.format(qe(t,i,o,this.options.keySeparator,this.options.ignoreJSONStructure),s,r,{...n,...t,interpolationkey:o})};this.resetRegExp(),!this.escapeValue&&"string"==typeof e&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn("nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.");const c=n?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=void 0!==n?.interpolation?.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(s=0;a=t.regex.exec(e);){const r=a[1].trim();if(o=l(r),void 0===o)if("function"==typeof c){const t=c(e,a,n);o=ge(t)?t:""}else if(n&&Object.prototype.hasOwnProperty.call(n,r))o="";else{if(u){o=a[0];continue}this.logger.warn(`missed to pass in variable ${r} for interpolating ${e}`),o=""}else ge(o)||this.useRawValueToEscape||(o=ye(o));const i=t.safeValue(o);if(e=e.replace(a[0],We(i)),u?(t.regex.lastIndex+=i.length,t.regex.lastIndex-=a[0].length):t.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,t,r={}){let n,a,o;const s=(e,t)=>{const r=this.nestingOptionsSeparator;if(!e.includes(r))return e;const n=e.split(new RegExp(`${Ce(r)}[ ]*{`));let a=`{${n[1]}`;e=n[0],a=this.interpolate(a,o);const s=a.match(/'/g),i=a.match(/"/g);((s?.length??0)%2==0&&!i||(i?.length??0)%2!=0)&&(a=a.replace(/'/g,'"'));try{o=JSON.parse(a),t&&(o={...t,...o})}catch(l){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,l),`${e}${r}${a}`}return o.defaultValue&&o.defaultValue.includes(this.prefix)&&delete o.defaultValue,e},i=new RegExp(this.nestingRegexp);let l="",c=0;for(;n=i.exec(e);){let u=[];o={...r},o=o.replace&&!ge(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;const p=/{.*}/s.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==p&&(u=n[1].slice(p).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,p)),a=t(s.call(this,n[1].trim(),o),o),a&&n[0]===e&&!ge(a))return a;ge(a)||(a=ye(a)),a||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),a=""),u.length&&(a=u.reduce((e,t)=>this.format(e,t,r.lng,{...r,interpolationkey:n[1].trim()}),a.trim())),l+=e.slice(c,n.index)+ye(a),c=i.lastIndex,this.regexp.lastIndex=0}return c?l+e.slice(c):e}}const Ge=e=>{const t={};return(r,n,a)=>{let o=a;a&&a.interpolationkey&&a.formatParams&&a.formatParams[a.interpolationkey]&&a[a.interpolationkey]&&(o={...o,[a.interpolationkey]:void 0});const s=n+JSON.stringify(o);let i=t[s];return i||(i=e($e(n),a),t[s]=i),i(r)}},Ze=e=>(t,r,n)=>e($e(r),n)(t);class Je{constructor(e={}){this.logger=Re.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const r=t.cacheInBuiltFormats?Ge:Ze;this.formats={number:r((e,t)=>{const r=new Intl.NumberFormat(e,{...t});return e=>r.format(e)}),currency:r((e,t)=>{const r=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>r.format(e)}),datetime:r((e,t)=>{const r=new Intl.DateTimeFormat(e,{...t});return e=>r.format(e)}),relativetime:r((e,t)=>{const r=new Intl.RelativeTimeFormat(e,{...t});return e=>r.format(e,t.range||"day")}),list:r((e,t)=>{const r=new Intl.ListFormat(e,{...t});return e=>r.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ge(t)}format(e,t,r,n={}){if(!t)return e;if(null==e)return e;const a=t.split(this.formatSeparator),o=[];for(let i=0;i<a.length;i++){let e=a[i];for(;e.indexOf("(")>-1&&!e.includes(")")&&i+1<a.length;)e=`${e}${this.formatSeparator}${a[++i]}`;o.push(e)}const s=o.reduce((e,t)=>{const{formatName:a,formatOptions:o}=(e=>{let t=e.toLowerCase().trim();const r={};if(e.includes("(")){const n=e.split("(");t=n[0].toLowerCase().trim();const a=n[1].slice(0,-1);"currency"!==t||a.includes(":")?"relativetime"!==t||a.includes(":")?a.split(";").forEach(e=>{if(e){const[t,...n]=e.split(":"),a=n.join(":").trim().replace(/^'+|'+$/g,""),o=t.trim();r[o]||(r[o]=a),"false"===a&&(r[o]=!1),"true"===a&&(r[o]=!0),isNaN(a)||(r[o]=parseInt(a,10))}}):r.range||(r.range=a.trim()):r.currency||(r.currency=a.trim())}return{formatName:t,formatOptions:r}})(t);if(this.formats[a]){let t=e;try{const s=n?.formatParams?.[n.interpolationkey]||{},i=s.locale||s.lng||n.locale||n.lng||r;t=this.formats[a](e,i,{...o,...n,...s})}catch(s){this.logger.warn(s)}return t}return this.logger.warn(`there was no format function for ${a}`),e},e);return s}}class Qe extends Ie{constructor(e,t,r,n={}){super(),this.backend=e,this.store=t,this.services=r,this.languageUtils=r.languageUtils,this.options=n,this.logger=Re.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=n.maxParallelReads||10,this.readingCalls=0,this.maxRetries=n.maxRetries>=0?n.maxRetries:5,this.retryTimeout=n.retryTimeout>=1?n.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(r,n.backend,n)}queueLoad(e,t,r,n){const a={},o={},s={},i={};return e.forEach(e=>{let n=!0;t.forEach(t=>{const s=`${e}|${t}`;!r.reload&&this.store.hasResourceBundle(e,t)?this.state[s]=2:this.state[s]<0||(1===this.state[s]?void 0===o[s]&&(o[s]=!0):(this.state[s]=1,n=!1,void 0===o[s]&&(o[s]=!0),void 0===a[s]&&(a[s]=!0),void 0===i[t]&&(i[t]=!0)))}),n||(s[e]=!0)}),(Object.keys(a).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:n}),{toLoad:Object.keys(a),pending:Object.keys(o),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(i)}}loaded(e,t,r){const n=e.split("|"),a=n[0],o=n[1];t&&this.emit("failedLoading",a,o,t),!t&&r&&this.store.addResourceBundle(a,o,r,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&r&&(this.state[e]=0);const s={};this.queue.forEach(r=>{((e,t,r)=>{const{obj:n,k:a}=xe(e,t,Object);n[a]=n[a]||[],n[a].push(r)})(r.loaded,[a],o),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(r,e),t&&r.errors.push(t),0!==r.pendingCount||r.done||(Object.keys(r.loaded).forEach(e=>{s[e]||(s[e]={});const t=r.loaded[e];t.length&&t.forEach(t=>{void 0===s[e][t]&&(s[e][t]=!0)})}),r.done=!0,r.errors.length?r.callback(r.errors):r.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(e=>!e.done)}read(e,t,r,n=0,a=this.retryTimeout,o){if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:r,tried:n,wait:a,callback:o});this.readingCalls++;const s=(s,i)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}s&&i&&n<this.maxRetries?setTimeout(()=>{this.read(e,t,r,n+1,2*a,o)},a):o(s,i)},i=this.backend[r].bind(this.backend);if(2!==i.length)return i(e,t,s);try{const r=i(e,t);r&&"function"==typeof r.then?r.then(e=>s(null,e)).catch(s):s(null,r)}catch(l){s(l)}}prepareLoading(e,t,r={},n){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();ge(e)&&(e=this.languageUtils.toResolveHierarchy(e)),ge(t)&&(t=[t]);const a=this.queueLoad(e,t,r,n);if(!a.toLoad.length)return a.pending.length||n(),null;a.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,r){this.prepareLoading(e,t,{},r)}reload(e,t,r){this.prepareLoading(e,t,{reload:!0},r)}loadOne(e,t=""){const r=e.split("|"),n=r[0],a=r[1];this.read(n,a,"read",void 0,void 0,(r,o)=>{r&&this.logger.warn(`${t}loading namespace ${a} for language ${n} failed`,r),!r&&o&&this.logger.log(`${t}loaded namespace ${a} for language ${n}`,o),this.loaded(e,r,o)})}saveMissing(e,t,r,n,a,o={},s=()=>{}){if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(null!=r&&""!==r){if(this.backend?.create){const l={...o,isUpdate:a},c=this.backend.create.bind(this.backend);if(c.length<6)try{let a;a=5===c.length?c(e,t,r,n,l):c(e,t,r,n),a&&"function"==typeof a.then?a.then(e=>s(null,e)).catch(s):s(null,a)}catch(i){s(i)}else c(e,t,r,n,s,l)}e&&e[0]&&this.store.addResource(e[0],t,r,n)}}else this.logger.warn(`did not save key "${r}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const et=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"==typeof e[1]&&(t=e[1]),ge(e[1])&&(t.defaultValue=e[1]),ge(e[2])&&(t.tDescription=e[2]),"object"==typeof e[2]||"object"==typeof e[3]){const r=e[3]||e[2];Object.keys(r).forEach(e=>{t[e]=r[e]})}return t},interpolation:{escapeValue:!0,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),tt=e=>(ge(e.ns)&&(e.ns=[e.ns]),ge(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),ge(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes("cimode")&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),rt=()=>{};class nt extends Ie{constructor(e={},t){var r;if(super(),this.options=tt(e),this.services={},this.logger=Re,this.modules={external:[]},r=this,Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach(e=>{"function"==typeof r[e]&&(r[e]=r[e].bind(r))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,"function"==typeof e&&(t=e,e={}),null==e.defaultNS&&e.ns&&(ge(e.ns)?e.defaultNS=e.ns:e.ns.includes("translation")||(e.defaultNS=e.ns[0]));const r=et();this.options={...r,...this.options,...tt(e)},this.options.interpolation={...r.interpolation,...this.options.interpolation},void 0!==e.keySeparator&&(this.options.userDefinedKeySeparator=e.keySeparator),void 0!==e.nsSeparator&&(this.options.userDefinedNsSeparator=e.nsSeparator),"function"!=typeof this.options.overloadTranslationOptionHandler&&(this.options.overloadTranslationOptionHandler=r.overloadTranslationOptionHandler);const n=e=>e?"function"==typeof e?new e:e:null;if(!this.options.isClone){let e;this.modules.logger?Re.init(n(this.modules.logger),this.options):Re.init(null,this.options),e=this.modules.formatter?this.modules.formatter:Je;const t=new He(this.options);this.store=new _e(this.options.resources,this.options);const r=this.services;r.logger=Re,r.resourceStore=this.store,r.languageUtils=t,r.pluralResolver=new Xe(t,{prepend:this.options.pluralSeparator}),e&&(r.formatter=n(e),r.formatter.init&&r.formatter.init(r,this.options),this.options.interpolation.format=r.formatter.format.bind(r.formatter)),r.interpolator=new Ke(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new Qe(n(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(r.languageDetector=n(this.modules.languageDetector),r.languageDetector.init&&r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=n(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new Ye(this.services,this.options),this.translator.on("*",(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||(t=rt),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(e=>{this[e]=(...t)=>this.store[e](...t)});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});const a=me(),o=()=>{const e=(e,r)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(r),t(e,r)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?o():setTimeout(o,0),a}loadResources(e,t=rt){let r=t;const n=ge(e)?e:this.language;if("function"==typeof e&&(r=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===n?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return r();const e=[],t=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&(e.includes(t)||e.push(t))})};if(n)t(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e))}this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),r(e)})}else r(null)}reloadResources(e,t,r){const n=me();return"function"==typeof e&&(r=e,e=void 0),"function"==typeof t&&(r=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),r||(r=rt),this.services.backendConnector.reload(e,t,e=>{n.resolve(),r(e)}),n}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Fe.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!["cimode","dev"].includes(e)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!["cimode","dev"].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}this.resolvedLanguage||this.languages.includes(e)||!this.store.hasLanguageSomeTranslations(e)||(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const r=me();this.emit("languageChanging",e);const n=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},a=(a,o)=>{o?this.isLanguageChangingTo===e&&(n(o),this.translator.changeLanguage(o),this.isLanguageChangingTo=void 0,this.emit("languageChanged",o),this.logger.log("languageChanged",o)):this.isLanguageChangingTo=void 0,r.resolve((...e)=>this.t(...e)),t&&t(a,(...e)=>this.t(...e))},o=t=>{e||t||!this.services.languageDetector||(t=[]);const r=ge(t)?t:t&&t[0],o=this.store.hasLanguageSomeTranslations(r)?r:this.services.languageUtils.getBestMatchFromCodes(ge(t)?[t]:t);o&&(this.language||n(o),this.translator.language||this.translator.changeLanguage(o),this.services.languageDetector?.cacheUserLanguage?.(o)),this.loadResources(o,e=>{a(e,o)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),r}getFixedT(e,t,r,n){const a=n?.scopeNs,o=(e,t,...n)=>{let s;s="object"!=typeof t?this.options.overloadTranslationOptionHandler([e,t].concat(n)):{...t},s.lng=s.lng||o.lng,s.lngs=s.lngs||o.lngs;const i=void 0!==s.ns&&null!==s.ns;s.ns=s.ns||o.ns,""!==s.keyPrefix&&(s.keyPrefix=s.keyPrefix||r||o.keyPrefix);const l={...this.options,...s};Array.isArray(a)&&!i&&(l.ns=a),"function"==typeof s.keyPrefix&&(s.keyPrefix=ze(s.keyPrefix,l));const c=this.options.keySeparator||".";let u;return s.keyPrefix&&Array.isArray(e)?u=e.map(e=>("function"==typeof e&&(e=ze(e,l)),`${s.keyPrefix}${c}${e}`)):("function"==typeof e&&(e=ze(e,l)),u=s.keyPrefix?`${s.keyPrefix}${c}${e}`:e),this.t(u,s)};return ge(e)?o.lng=e:o.lngs=e,o.ns=t,o.keyPrefix=r,o}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=t.lng||this.resolvedLanguage||this.languages[0],n=!!this.options&&this.options.fallbackLng,a=this.languages[this.languages.length-1];if("cimode"===r.toLowerCase())return!0;const o=(e,t)=>{const r=this.services.backendConnector.state[`${e}|${t}`];return-1===r||0===r||2===r};if(t.precheck){const e=t.precheck(this,o);if(void 0!==e)return e}if(this.hasResourceBundle(r,e))return!0;if(!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages)return!0;const{languageUtils:s}=this.services,i=t.lng?s.isSupportedCode(r)&&s.toResolveHierarchy(r,!1)[0]:r;return!(i&&!o(i,e)||n&&!o(a,e))}loadNamespaces(e,t){const r=me();return this.options.ns?(ge(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}loadLanguages(e,t){const r=me();ge(e)&&(e=[e]);const n=this.options.preload||[],a=e.filter(e=>!n.includes(e)&&this.services.languageUtils.isSupportedCode(e));return a.length?(this.options.preload=n.concat(a),this.loadResources(e=>{r.resolve(),t&&t(e)}),r):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(r){}const t=this.services?.languageUtils||new He(et());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].includes(t.getLanguagePartFromCode(e))||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const r=new nt(e,t);return r.createInstance=nt.createInstance,r}cloneInstance(e={},t=rt){const r=e.forkResourceStore;r&&delete e.forkResourceStore;const n={...this.options,preload:!1,...e,isClone:!0},a=new nt(n);void 0===e.debug&&void 0===e.prefix||(a.logger=a.logger.clone(e));if(["store","services","language"].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((r,n)=>(r[n]={...e[t][n]},r),e[t]),e),{});a.store=new _e(e,n),a.services.resourceStore=a.store}if(e.interpolation){const t={...et().interpolation,...this.options.interpolation,...e.interpolation},r={...n,interpolation:t};a.services.interpolator=new Ke(r)}return a.translator=new Ye(a.services,n),a.translator.on("*",(e,...t)=>{a.emit(e,...t)}),a.init(n,t),a.translator.options=n,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const at=nt.createInstance();at.createInstance,at.dir,at.init,at.loadResources,at.reloadResources,at.use,at.changeLanguage,at.getFixedT,at.t,at.exists,at.setDefaultNamespace,at.hasLoadedNamespace,at.loadNamespaces,at.loadLanguages;Object.create(null);const ot=(e,t,r,n)=>{const a=[r,{code:t,...n||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(a,"warn","react-i18next::",!0);pt(a[0])&&(a[0]=`react-i18next:: ${a[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...a):console?.warn&&console.warn(...a)},st={},it=(e,t,r,n)=>{pt(r)&&st[r]||(pt(r)&&(st[r]=new Date),ot(e,t,r,n))},lt=(e,t)=>()=>{if(e.isInitialized)t();else{const r=()=>{setTimeout(()=>{e.off("initialized",r)},0),t()};e.on("initialized",r)}},ct=(e,t,r)=>{e.loadNamespaces(t,lt(e,r))},ut=(e,t,r,n)=>{if(pt(r)&&(r=[r]),e.options.preload&&e.options.preload.indexOf(t)>-1)return ct(e,r,n);r.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,lt(e,n))},pt=e=>"string"==typeof e,dt=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ft={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},ht=e=>ft[e];let gt={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(dt,ht),transDefaultProps:void 0};let mt;const yt=()=>mt,bt={type:"3rdParty",init(e){((e={})=>{gt={...gt,...e}})(e.options.react),(e=>{mt=e})(e)}},vt=(0,i.createContext)();class wt{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}class xt extends Error{constructor(e,t,r){super(e),this.name="TranslationParserError",this.position=t,this.translationString=r,Error.captureStackTrace&&Error.captureStackTrace(this,xt)}}const Et={"&nbsp;":" ","&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&copy;":"©","&reg;":"®","&trade;":"™","&hellip;":"…","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&bull;":"•","&prime;":"′","&Prime;":"″","&lsaquo;":"‹","&rsaquo;":"›","&sect;":"§","&para;":"¶","&middot;":"·","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&euro;":"€","&pound;":"£","&yen;":"¥","&cent;":"¢","&curren;":"¤","&times;":"×","&divide;":"÷","&minus;":"−","&plusmn;":"±","&ne;":"≠","&le;":"≤","&ge;":"≥","&asymp;":"≈","&equiv;":"≡","&infin;":"∞","&int;":"∫","&sum;":"∑","&prod;":"∏","&radic;":"√","&part;":"∂","&permil;":"‰","&deg;":"°","&micro;":"µ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&iexcl;":"¡","&iquest;":"¿","&fnof;":"ƒ","&circ;":"ˆ","&tilde;":"˜","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&ordf;":"ª","&ordm;":"º","&macr;":"¯","&acute;":"´","&cedil;":"¸","&sup1;":"¹","&sup2;":"²","&sup3;":"³","&frac14;":"¼","&frac12;":"½","&frac34;":"¾","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦","&loz;":"◊","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&alefsym;":"ℵ"},kt=new RegExp(Object.keys(Et).map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|"),"g"),St=(e,t=[])=>{if(!e)return[];const r=(e=>{const t=[];let r=0,n="";const a=()=>{n&&(t.push({type:"Text",value:n,position:r-n.length}),n="")};for(;r<e.length;){const o=e[r];if("<"===o){const s=e.slice(r).match(/^<(\d+)>/);if(s)a(),t.push({type:"TagOpen",value:s[0],position:r,tagNumber:parseInt(s[1],10)}),r+=s[0].length;else{const s=e.slice(r).match(/^<\/(\d+)>/);s?(a(),t.push({type:"TagClose",value:s[0],position:r,tagNumber:parseInt(s[1],10)}),r+=s[0].length):(n+=o,r+=1)}}else n+=o,r+=1}return a(),t})(e),n=[],a=[],o=new Set;if(r.forEach(r=>{switch(r.type){case"Text":{const e=r.value.replace(kt,e=>Et[e]).replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(parseInt(t,10))).replace(/&#x([0-9a-fA-F]+);/g,(e,t)=>String.fromCharCode(parseInt(t,16)));(a.length>0?a[a.length-1].children:n).push(e)}break;case"TagOpen":{const{tagNumber:e}=r,s=(()=>{if(0===a.length)return t;const e=a[a.length-1];return e.declaration.props?.children&&Array.isArray(e.declaration.props.children)?e.declaration.props.children:e.declarations})(),i=s[e];if(!i){o.add(e);const t=`<${e}>`;(a.length>0?a[a.length-1].children:n).push(t);break}a.push({tagNumber:e,children:[],position:r.position,declaration:i,declarations:s})}break;case"TagClose":{const{tagNumber:t}=r;if(o.has(t)){const e=`</${t}>`;(a.length>0?a[a.length-1].children:n).push(e),o.delete(t);break}if(0===a.length)throw new xt(`Unexpected closing tag </${t}> at position ${r.position}`,r.position,e);const s=a.pop();if(s.tagNumber!==t)throw new xt(`Mismatched tags: expected </${s.tagNumber}> but got </${t}> at position ${r.position}`,r.position,e);const l=((e,t,r)=>{const{type:n,props:a={}}=e;if(a.children&&Array.isArray(a.children)&&r){const{children:e,...r}=a;return i.createElement(n,r,...t)}return 0===t.length?i.createElement(n,a):1===t.length?i.createElement(n,a,t[0]):i.createElement(n,a,...t)})(s.declaration,s.children,s.declarations);(a.length>0?a[a.length-1].children:n).push(l)}}}),a.length>0){const t=a[a.length-1];throw new xt(`Unclosed tag <${t.tagNumber}> at position ${t.position}`,t.position,e)}return n};function Ct({i18nKey:e,defaultTranslation:t,content:r,ns:n,values:a={},i18n:o,t:s}){const l=o||yt();if(!l)return it(l,"NO_I18NEXT_INSTANCE","IcuTrans: You need to pass in an i18next instance using i18nextReactModule",{i18nKey:e}),i.createElement(i.Fragment,{},t);const c=s||l.t?.bind(l)||(e=>e);let u=n||c.ns||l.options?.defaultNS;u=pt(u)?[u]:u||["translation"];let p=a;l.options?.interpolation?.defaultVariables&&(p=a&&Object.keys(a).length>0?{...a,...l.options.interpolation.defaultVariables}:{...l.options.interpolation.defaultVariables});const d=c(e||t,{defaultValue:t,...p,ns:u});try{const e=St(d,r);return i.createElement(i.Fragment,{},...e)}catch(f){return ot(l,"ICU_TRANS_RENDER_ERROR",`IcuTrans component error for key "${e}": ${f.message}`,{i18nKey:e,error:f}),i.createElement(i.Fragment,{},d)}}Ct.displayName="IcuTransWithoutContext";var Ot=r(9888);const At={t:(e,t)=>{if(pt(t))return t;if("object"==typeof(r=t)&&null!==r&&pt(t.defaultValue))return t.defaultValue;var r;if("function"==typeof e)return"";if(Array.isArray(e)){const t=e[e.length-1];return"function"==typeof t?"":t}return e},ready:!1},Lt=()=>()=>{},Nt=(e,t={})=>{const{i18n:r}=t,{i18n:n,defaultNS:a}=(0,i.useContext)(vt)||{},o=r||n||yt();o&&!o.reportNamespaces&&(o.reportNamespaces=new wt),o||it(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");const s=(0,i.useMemo)(()=>({...gt,...o?.options?.react,...t}),[o,t]),{useSuspense:l,keyPrefix:c,bindI18n:u,bindI18nStore:p}=s,d=e||a||o?.options?.defaultNS,f=pt(d)?[d]:d||["translation"],h=(0,i.useMemo)(()=>f,f);o?.reportNamespaces?.addUsedNamespaces?.(h);const g=(0,i.useRef)(0),m=(0,i.useCallback)(e=>{if(!o)return Lt;const t=()=>{g.current+=1,e()};return u&&o.on(u,t),p&&o.store.on(p,t),()=>{u&&u.split(" ").forEach(e=>o.off(e,t)),p&&p.split(" ").forEach(e=>o.store.off(e,t))}},[o,u,p]),y=(0,i.useRef)(),b=(0,i.useCallback)(()=>{if(!o)return At;const e=!(!o.isInitialized&&!o.initializedStoreOnce)&&h.every(e=>((e,t,r={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:r.lng,precheck:(t,n)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!n(t.isLanguageChangingTo,e))return!1}}):(it(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0))(e,o,s)),r=t.lng||o.language,n=g.current,a="function"==typeof c?ze(c,{...o.options,ns:h}):c,i=y.current;if(i&&i.i18n===o&&i.ready===e&&i.lng===r&&i.namespaces===h&&i.keyPrefix===a&&i.revision===n)return i;const l={t:o.getFixedT(r,"fallback"===s.nsMode?h:h[0],c,{scopeNs:h}),i18n:o,ready:e,lng:r,namespaces:h,keyPrefix:a,revision:n};return y.current=l,l},[o,h,c,s,t.lng]),[v,w]=(0,i.useState)(0),{t:x,ready:E}=(0,Ot.useSyncExternalStore)(m,b,b);(0,i.useEffect)(()=>{if(o&&!E&&!l){const e=()=>w(e=>e+1);t.lng?ut(o,t.lng,h,e):ct(o,h,e)}},[o,t.lng,h,E,l,v]);const k=o||{},S=(0,i.useRef)(null),C=(0,i.useRef)(),O=e=>{const t=Object.getOwnPropertyDescriptors(e);t.__original&&delete t.__original;const r=Object.create(Object.getPrototypeOf(e),t);if(!Object.prototype.hasOwnProperty.call(r,"__original"))try{Object.defineProperty(r,"__original",{value:e,writable:!1,enumerable:!1,configurable:!1})}catch(n){}return r},A=(0,i.useMemo)(()=>{const e=k,t=e&&`${(r=e).language}|${r.resolvedLanguage}|${r.languages?.join(",")}`;var r;let n=e;e&&(S.current&&S.current.__original===e?C.current!==t?(n=O(e),S.current=n,C.current=t):n=S.current:(n=O(e),S.current=n,C.current=t));const a=E||l?x:(...e)=>(it(o,"USE_T_BEFORE_READY","useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."),x(...e)),s=[a,n,E];return s.t=a,s.i18n=n,s.ready=E,s},[x,k,E,k.resolvedLanguage,k.language,k.languages]);if(o&&l&&!E){let e=!1;try{e=!1}catch(L){}throw e&&it(o,"SUSPENDED_WHILE_LOADING","useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"),new Promise(e=>{const r=()=>e();t.lng?ut(o,t.lng,h,r):ct(o,h,r)})}return A};var Tt=r(4506),$t=r(6942),Pt=r.n($t),jt=r(4848);const Rt=["xxl","xl","lg","md","sm","xs"],It=i.createContext({prefixes:{},breakpoints:Rt,minBreakpoint:"xs"}),{Consumer:Mt,Provider:_t}=It;function Ft(e,t){const{prefixes:r}=(0,i.useContext)(It);return e||r[t]||t}function Dt(){const{breakpoints:e}=(0,i.useContext)(It);return e}function zt(){const{minBreakpoint:e}=(0,i.useContext)(It);return e}const Vt=i.forwardRef(({bsPrefix:e,fluid:t=!1,as:r="div",className:n,...a},o)=>{const s=Ft(e,"container"),i="string"==typeof t?`-${t}`:"-fluid";return(0,jt.jsx)(r,{ref:o,...a,className:Pt()(n,t?`${s}${i}`:s)})});Vt.displayName="Container";var Yt=Vt;var Ht=()=>{const{t:e,i18n:t}=Nt(),{0:r,1:n}=(0,i.useState)(!1);return i.createElement("nav",{className:"navbar-custom"},i.createElement(Yt,null,i.createElement("div",{className:"navbar-custom__brand"},i.createElement("a",{href:"#hero"},"Sandrine Cao")),i.createElement("button",{className:"navbar-custom__toggle"+(r?" open":""),"aria-label":"Toggle navigation",onClick:()=>n(e=>!e)},i.createElement("span",null),i.createElement("span",null),i.createElement("span",null)),i.createElement("ul",{className:"navbar-custom__links"+(r?" open":"")},[{key:"about",href:"#about"},{key:"projects",href:"#projects"},{key:"contact",href:"#contact"}].map(({key:t,href:r})=>i.createElement("li",{key:t},i.createElement("a",{href:r,onClick:()=>n(!1)},e(`navbar.${t}`)))),i.createElement("li",{className:"navbar-custom__flag"},i.createElement("button",{onClick:()=>{t.changeLanguage("fr"===t.language?"en":"fr")},"aria-label":"Switch language"},i.createElement("img",{src:"fr"===t.language?"https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_30/v1585483466/france-flag-button-round-icon-64_uqllrc.png":"https://res.cloudinary.com/dkyqbngya/image/upload/c_scale,w_30/v1585483470/united-states-of-america-flag-button-round-xs_xgcefz.png",alt:"fr"===t.language?"French Flag":"US Flag"}))))))};var Ut=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),Bt=Math.abs,Xt=String.fromCharCode,qt=Object.assign;function Wt(e){return e.trim()}function Kt(e,t,r){return e.replace(t,r)}function Gt(e,t){return e.indexOf(t)}function Zt(e,t){return 0|e.charCodeAt(t)}function Jt(e,t,r){return e.slice(t,r)}function Qt(e){return e.length}function er(e){return e.length}function tr(e,t){return t.push(e),e}var rr=1,nr=1,ar=0,or=0,sr=0,ir="";function lr(e,t,r,n,a,o,s){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:rr,column:nr,length:s,return:""}}function cr(e,t){return qt(lr("",null,null,"",null,null,0),e,{length:-e.length},t)}function ur(){return sr=or>0?Zt(ir,--or):0,nr--,10===sr&&(nr=1,rr--),sr}function pr(){return sr=or<ar?Zt(ir,or++):0,nr++,10===sr&&(nr=1,rr++),sr}function dr(){return Zt(ir,or)}function fr(){return or}function hr(e,t){return Jt(ir,e,t)}function gr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mr(e){return rr=nr=1,ar=Qt(ir=e),or=0,[]}function yr(e){return ir="",e}function br(e){return Wt(hr(or-1,xr(91===e?e+2:40===e?e+1:e)))}function vr(e){for(;(sr=dr())&&sr<33;)pr();return gr(e)>2||gr(sr)>3?"":" "}function wr(e,t){for(;--t&&pr()&&!(sr<48||sr>102||sr>57&&sr<65||sr>70&&sr<97););return hr(e,fr()+(t<6&&32==dr()&&32==pr()))}function xr(e){for(;pr();)switch(sr){case e:return or;case 34:case 39:34!==e&&39!==e&&xr(sr);break;case 40:41===e&&xr(e);break;case 92:pr()}return or}function Er(e,t){for(;pr()&&e+sr!==57&&(e+sr!==84||47!==dr()););return"/*"+hr(t,or-1)+"*"+Xt(47===e?e:pr())}function kr(e){for(;!gr(dr());)pr();return hr(e,or)}var Sr="-ms-",Cr="-moz-",Or="-webkit-",Ar="comm",Lr="rule",Nr="decl",Tr="@keyframes";function $r(e,t){for(var r="",n=er(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function Pr(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Nr:return e.return=e.return||e.value;case Ar:return"";case Tr:return e.return=e.value+"{"+$r(e.children,n)+"}";case Lr:e.value=e.props.join(",")}return Qt(r=$r(e.children,n))?e.return=e.value+"{"+r+"}":""}function jr(e){return yr(Rr("",null,null,null,[""],e=mr(e),0,[0],e))}function Rr(e,t,r,n,a,o,s,i,l){for(var c=0,u=0,p=s,d=0,f=0,h=0,g=1,m=1,y=1,b=0,v="",w=a,x=o,E=n,k=v;m;)switch(h=b,b=pr()){case 40:if(108!=h&&58==Zt(k,p-1)){-1!=Gt(k+=Kt(br(b),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:k+=br(b);break;case 9:case 10:case 13:case 32:k+=vr(h);break;case 92:k+=wr(fr()-1,7);continue;case 47:switch(dr()){case 42:case 47:tr(Mr(Er(pr(),fr()),t,r),l);break;default:k+="/"}break;case 123*g:i[c++]=Qt(k)*y;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:-1==y&&(k=Kt(k,/\f/g,"")),f>0&&Qt(k)-p&&tr(f>32?_r(k+";",n,r,p-1):_r(Kt(k," ","")+";",n,r,p-2),l);break;case 59:k+=";";default:if(tr(E=Ir(k,t,r,c,u,a,i,v,w=[],x=[],p),o),123===b)if(0===u)Rr(k,t,E,E,w,o,p,i,x);else switch(99===d&&110===Zt(k,3)?100:d){case 100:case 108:case 109:case 115:Rr(e,E,E,n&&tr(Ir(e,E,E,0,0,a,i,v,a,w=[],p),x),a,x,p,i,n?w:x);break;default:Rr(k,E,E,E,[""],x,0,i,x)}}c=u=f=0,g=y=1,v=k="",p=s;break;case 58:p=1+Qt(k),f=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==ur())continue;switch(k+=Xt(b),b*g){case 38:y=u>0?1:(k+="\f",-1);break;case 44:i[c++]=(Qt(k)-1)*y,y=1;break;case 64:45===dr()&&(k+=br(pr())),d=dr(),u=p=Qt(v=k+=kr(fr())),b++;break;case 45:45===h&&2==Qt(k)&&(g=0)}}return o}function Ir(e,t,r,n,a,o,s,i,l,c,u){for(var p=a-1,d=0===a?o:[""],f=er(d),h=0,g=0,m=0;h<n;++h)for(var y=0,b=Jt(e,p+1,p=Bt(g=s[h])),v=e;y<f;++y)(v=Wt(g>0?d[y]+" "+b:Kt(b,/&\f/g,d[y])))&&(l[m++]=v);return lr(e,t,r,0===a?Lr:i,l,c,u)}function Mr(e,t,r){return lr(e,t,r,Ar,Xt(sr),Jt(e,2,-2),0)}function _r(e,t,r,n){return lr(e,t,r,Nr,Jt(e,0,n),Jt(e,n+1,-1),n)}var Fr=function(e,t,r){for(var n=0,a=0;n=a,a=dr(),38===n&&12===a&&(t[r]=1),!gr(a);)pr();return hr(e,or)},Dr=function(e,t){return yr(function(e,t){var r=-1,n=44;do{switch(gr(n)){case 0:38===n&&12===dr()&&(t[r]=1),e[r]+=Fr(or-1,t,r);break;case 2:e[r]+=br(n);break;case 4:if(44===n){e[++r]=58===dr()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=Xt(n)}}while(n=pr());return e}(mr(e),t))},zr=new WeakMap,Vr=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||zr.get(r))&&!n){zr.set(e,!0);for(var a=[],o=Dr(t,a),s=r.props,i=0,l=0;i<o.length;i++)for(var c=0;c<s.length;c++,l++)e.props[l]=a[i]?o[i].replace(/&\f/g,s[c]):s[c]+" "+o[i]}}},Yr=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function Hr(e,t){switch(function(e,t){return 45^Zt(e,0)?(((t<<2^Zt(e,0))<<2^Zt(e,1))<<2^Zt(e,2))<<2^Zt(e,3):0}(e,t)){case 5103:return Or+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Or+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Or+e+Cr+e+Sr+e+e;case 6828:case 4268:return Or+e+Sr+e+e;case 6165:return Or+e+Sr+"flex-"+e+e;case 5187:return Or+e+Kt(e,/(\w+).+(:[^]+)/,Or+"box-$1$2"+Sr+"flex-$1$2")+e;case 5443:return Or+e+Sr+"flex-item-"+Kt(e,/flex-|-self/,"")+e;case 4675:return Or+e+Sr+"flex-line-pack"+Kt(e,/align-content|flex-|-self/,"")+e;case 5548:return Or+e+Sr+Kt(e,"shrink","negative")+e;case 5292:return Or+e+Sr+Kt(e,"basis","preferred-size")+e;case 6060:return Or+"box-"+Kt(e,"-grow","")+Or+e+Sr+Kt(e,"grow","positive")+e;case 4554:return Or+Kt(e,/([^-])(transform)/g,"$1"+Or+"$2")+e;case 6187:return Kt(Kt(Kt(e,/(zoom-|grab)/,Or+"$1"),/(image-set)/,Or+"$1"),e,"")+e;case 5495:case 3959:return Kt(e,/(image-set\([^]*)/,Or+"$1$`$1");case 4968:return Kt(Kt(e,/(.+:)(flex-)?(.*)/,Or+"box-pack:$3"+Sr+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Or+e+e;case 4095:case 3583:case 4068:case 2532:return Kt(e,/(.+)-inline(.+)/,Or+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Qt(e)-1-t>6)switch(Zt(e,t+1)){case 109:if(45!==Zt(e,t+4))break;case 102:return Kt(e,/(.+:)(.+)-([^]+)/,"$1"+Or+"$2-$3$1"+Cr+(108==Zt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Gt(e,"stretch")?Hr(Kt(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==Zt(e,t+1))break;case 6444:switch(Zt(e,Qt(e)-3-(~Gt(e,"!important")&&10))){case 107:return Kt(e,":",":"+Or)+e;case 101:return Kt(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Or+(45===Zt(e,14)?"inline-":"")+"box$3$1"+Or+"$2$3$1"+Sr+"$2box$3")+e}break;case 5936:switch(Zt(e,t+11)){case 114:return Or+e+Sr+Kt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Or+e+Sr+Kt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Or+e+Sr+Kt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Or+e+Sr+e+e}return e}var Ur=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Nr:e.return=Hr(e.value,e.length);break;case Tr:return $r([cr(e,{value:Kt(e.value,"@","@"+Or)})],n);case Lr:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return $r([cr(e,{props:[Kt(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return $r([cr(e,{props:[Kt(t,/:(plac\w+)/,":"+Or+"input-$1")]}),cr(e,{props:[Kt(t,/:(plac\w+)/,":-moz-$1")]}),cr(e,{props:[Kt(t,/:(plac\w+)/,Sr+"input-$1")]})],n)}return""})}}],Br=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var n,a,o=e.stylisPlugins||Ur,s={},i=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)s[t[r]]=!0;i.push(e)});var l,c,u,p,d=[Pr,(p=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&p(e)})],f=(c=[Vr,Yr].concat(o,d),u=er(c),function(e,t,r,n){for(var a="",o=0;o<u;o++)a+=c[o](e,t,r,n)||"";return a});a=function(e,t,r,n){l=r,$r(jr(e?e+"{"+t.styles+"}":t.styles),f),n&&(h.inserted[t.name]=!0)};var h={key:t,sheet:new Ut({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:a};return h.sheet.hydrate(i),h};function Xr(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(n+=r+" ")}),n}var qr=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},Wr=function(e,t,r){qr(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+n:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var Kr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Gr(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}var Zr=/[A-Z]|^ms/g,Jr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Qr=function(e){return 45===e.charCodeAt(1)},en=function(e){return null!=e&&"boolean"!=typeof e},tn=Gr(function(e){return Qr(e)?e:e.replace(Zr,"-$&").toLowerCase()}),rn=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Jr,function(e,t,r){return an={name:t,styles:r,next:an},t})}return 1===Kr[e]||Qr(e)||"number"!=typeof t||0===t?t:t+"px"};function nn(e,t,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var a=r;if(1===a.anim)return an={name:a.name,styles:a.styles,next:an},a.name;var o=r;if(void 0!==o.styles){var s=o.next;if(void 0!==s)for(;void 0!==s;)an={name:s.name,styles:s.styles,next:an},s=s.next;return o.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=nn(e,t,r[a])+";";else for(var o in r){var s=r[o];if("object"!=typeof s){var i=s;null!=t&&void 0!==t[i]?n+=o+"{"+t[i]+"}":en(i)&&(n+=tn(o)+":"+rn(o,i)+";")}else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var l=nn(e,t,s);switch(o){case"animation":case"animationName":n+=tn(o)+":"+l+";";break;default:n+=o+"{"+l+"}"}}else for(var c=0;c<s.length;c++)en(s[c])&&(n+=tn(o)+":"+rn(o,s[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=an,l=r(e);return an=i,nn(e,t,l)}}var c=r;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var an,on=/label:\s*([^\s;{]+)\s*(;|$)/g;function sn(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";an=void 0;var o=e[0];null==o||void 0===o.raw?(n=!1,a+=nn(r,t,o)):a+=o[0];for(var s=1;s<e.length;s++){if(a+=nn(r,t,e[s]),n)a+=o[s]}on.lastIndex=0;for(var i,l="";null!==(i=on.exec(a));)l+="-"+i[1];var c=function(e){for(var t,r=0,n=0,a=e.length;a>=4;++n,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(a)+l;return{name:c,styles:a,next:an}}var ln=!!l.useInsertionEffect&&l.useInsertionEffect,cn=ln||function(e){return e()},un=(ln||i.useLayoutEffect,i.createContext("undefined"!=typeof HTMLElement?Br({key:"css"}):null)),pn=(un.Provider,function(e){return(0,i.forwardRef)(function(t,r){var n=(0,i.useContext)(un);return e(t,n,r)})}),dn=i.createContext({});var fn={}.hasOwnProperty,hn="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",gn=function(e,t){var r={};for(var n in t)fn.call(t,n)&&(r[n]=t[n]);return r[hn]=e,r},mn=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return qr(t,r,n),cn(function(){return Wr(t,r,n)}),null},yn=pn(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var a=e[hn],o=[n],s="";"string"==typeof e.className?s=Xr(t.registered,o,e.className):null!=e.className&&(s=e.className+" ");var l=sn(o,void 0,i.useContext(dn));s+=t.key+"-"+l.name;var c={};for(var u in e)fn.call(e,u)&&"css"!==u&&u!==hn&&(c[u]=e[u]);return c.className=s,r&&(c.ref=r),i.createElement(i.Fragment,null,i.createElement(mn,{cache:t,serialized:l,isStringTag:"string"==typeof a}),i.createElement(a,c))}),bn=(r(4634),r(4146),jt.Fragment),vn=function(e,t,r){return fn.call(t,"css")?jt.jsx(yn,gn(e,t),r):jt.jsx(e,t,r)},wn=function(e,t){var r=arguments;if(null==t||!fn.call(t,"css"))return i.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=yn,a[1]=gn(e,t);for(var o=2;o<n;o++)a[o]=r[o];return i.createElement.apply(null,a)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(wn||(wn={}));function xn(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return sn(t)}function En(){var e=xn.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var kn=function e(t){for(var r=t.length,n=0,a="";n<r;n++){var o=t[n];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=e(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(a&&(a+=" "),a+=s)}}return a};var Sn=function(e){var t=e.cache,r=e.serializedArr;return cn(function(){for(var e=0;e<r.length;e++)Wr(t,r[e],!1)}),null},Cn=pn(function(e,t){var r=[],n=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var o=sn(n,t.registered);return r.push(o),qr(t,o,!1),t.key+"-"+o.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(e,t,r){var n=[],a=Xr(e,n,r);return n.length<2?r:a+t(n)}(t.registered,n,kn(r))},theme:i.useContext(dn)},o=e.children(a);return i.createElement(i.Fragment,null,i.createElement(Sn,{cache:t,serializedArr:r}),o)}),On=Object.defineProperty,An=(e,t,r)=>((e,t,r)=>t in e?On(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!=typeof t?t+"":t,r),Ln=new Map,Nn=new WeakMap,Tn=0,$n=void 0;function Pn(e){return Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{return`${t}_${"root"===t?(r=e.root,r?(Nn.has(r)||(Tn+=1,Nn.set(r,Tn.toString())),Nn.get(r)):"0"):e[t]}`;var r}).toString()}function jn(e,t,r={},n=$n){if(void 0===window.IntersectionObserver&&void 0!==n){const a=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:o,elements:s}=function(e){const t=Pn(e);let r=Ln.get(t);if(!r){const n=new Map;let a;const o=new IntersectionObserver(t=>{t.forEach(t=>{var r;const o=t.isIntersecting&&a.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach(e=>{e(o,t)})})},e);a=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},Ln.set(t,r)}return r}(r),i=s.get(e)||[];return s.has(e)||s.set(e,i),i.push(t),o.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),Ln.delete(a))}}var Rn=class extends i.Component{constructor(e){super(e),An(this,"node",null),An(this,"_unobserveCb",null),An(this,"handleNode",e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),An(this,"handleChange",(e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!=typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=jn(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"==typeof e){const{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:c,delay:u,initialInView:p,fallbackInView:d,...f}=this.props;return i.createElement(t||"div",{ref:this.handleNode,...f},e)}};function In({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}={}){var p;const[d,f]=i.useState(null),h=i.useRef(u),[g,m]=i.useState({inView:!!l,entry:void 0});h.current=u,i.useEffect(()=>{if(s||!d)return;let i;return i=jn(d,(e,t)=>{m({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&i&&(i(),i=void 0)},{root:a,rootMargin:n,threshold:e,trackVisibility:r,delay:t},c),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,d,a,n,o,s,r,c,t]);const y=null==(p=g.entry)?void 0:p.target,b=i.useRef(void 0);d||!y||o||s||b.current===y||(b.current=y,m({inView:!!l,entry:void 0}));const v=[f,g.inView,g.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Mn=r(8338);En`
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
`,En`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,En`
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
`,En`
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
`,En`
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
`,En`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`;const _n=En`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Fn=En`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dn=En`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zn=En`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vn=En`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yn=En`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hn=En`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Un=En`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bn=En`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xn=En`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qn=En`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wn=En`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Kn=En`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Gn(e,t){return r=>r?e():t()}function Zn(e){return Gn(e,()=>null)}function Jn(e){return Zn(()=>({opacity:0}))(e)}const Qn=e=>{const{cascade:t=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:s=Yn,triggerOnce:l=!1,className:c,style:u,childClassName:p,childStyle:d,children:f,onVisibilityChange:h}=e,g=(0,i.useMemo)(()=>function({duration:e=1e3,delay:t=0,timingFunction:r="ease",keyframes:n=Yn,iterationCount:a=1}){return xn`
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
  `}({keyframes:s,duration:a}),[a,s]);return function(e){return null==e}(f)?null:"string"==typeof(m=f)||"number"==typeof m||"boolean"==typeof m?vn(ta,{...e,animationStyles:g,children:String(f)}):(0,Mn.isFragment)(f)?vn(ra,{...e,animationStyles:g}):vn(bn,{children:i.Children.map(f,(s,f)=>{if(!(0,i.isValidElement)(s))return null;const m=n+(t?f*a*r:0);switch(s.type){case"ol":case"ul":return vn(Cn,{children:({cx:t})=>vn(s.type,{...s.props,className:t(c,s.props.className),style:Object.assign({},u,s.props.style),children:vn(Qn,{...e,children:s.props.children})})});case"li":return vn(Rn,{threshold:o,triggerOnce:l,onChange:h,children:({inView:e,ref:t})=>vn(Cn,{children:({cx:r})=>vn(s.type,{...s.props,ref:t,className:r(p,s.props.className),css:Zn(()=>g)(e),style:Object.assign({},d,s.props.style,Jn(!e),{animationDelay:m+"ms"})})})});default:return vn(Rn,{threshold:o,triggerOnce:l,onChange:h,children:({inView:e,ref:t})=>vn("div",{ref:t,className:c,css:Zn(()=>g)(e),style:Object.assign({},u,Jn(!e),{animationDelay:m+"ms"}),children:vn(Cn,{children:({cx:e})=>vn(s.type,{...s.props,className:e(p,s.props.className),style:Object.assign({},d,s.props.style)})})})})}})});var m},ea={display:"inline-block",whiteSpace:"pre"},ta=e=>{const{animationStyles:t,cascade:r=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:l,style:c,children:u,onVisibilityChange:p}=e,{ref:d,inView:f}=In({triggerOnce:i,threshold:s,onChange:p});return Gn(()=>vn("div",{ref:d,className:l,style:Object.assign({},c,ea),children:u.split("").map((e,r)=>vn("span",{css:Zn(()=>t)(f),style:{animationDelay:a+r*o*n+"ms"},children:e},r))}),()=>vn(ra,{...e,children:u}))(r)},ra=e=>{const{animationStyles:t,fraction:r=0,triggerOnce:n=!1,className:a,style:o,children:s,onVisibilityChange:i}=e,{ref:l,inView:c}=In({triggerOnce:n,threshold:r,onChange:i});return vn("div",{ref:l,className:a,css:Zn(()=>t)(c),style:Object.assign({},o,Jn(!c)),children:s})};En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,En`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,En`
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
`;const na=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,aa=En`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,oa=En`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,sa=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ia=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,la=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ca=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ua=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,pa=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,da=En`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,fa=En`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ha=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,ga=En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const ma=e=>{const{big:t=!1,direction:r,reverse:n=!1,...a}=e,o=(0,i.useMemo)(()=>function(e,t,r){switch(r){case"bottom-left":return t?aa:Fn;case"bottom-right":return t?oa:Dn;case"down":return e?t?ia:Vn:t?sa:zn;case"left":return e?t?ca:Hn:t?la:Yn;case"right":return e?t?pa:Bn:t?ua:Un;case"top-left":return t?da:Xn;case"top-right":return t?fa:qn;case"up":return e?t?ga:Kn:t?ha:Wn;default:return t?na:_n}}(t,n,r),[t,r,n]);return vn(Qn,{keyframes:o,...a})};En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`;En`
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
`,En`
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
`,En`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;En`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,En`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,En`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,En`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,En`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,En`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;En`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,En`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,En`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,En`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,En`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,En`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,En`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,En`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;En`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
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
`,En`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,En`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,En`
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
`;var ya=()=>{const{t:e}=Nt(),{0:t,1:r}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{r(window.innerWidth>769)},[]),i.createElement("section",{id:"hero",className:"jumbotron"},i.createElement(Yt,null,i.createElement(ma,{direction:t?"left":"up",duration:1e3,delay:500,triggerOnce:!0},i.createElement("h1",{className:"hero-title"},e("heroData.title")," ",i.createElement("span",{className:"text-color-main"},e("heroData.name")),i.createElement("br",null),e("heroData.subtitle"))),i.createElement(ma,{direction:t?"left":"up",duration:1e3,delay:1e3,triggerOnce:!0},i.createElement("p",{className:"hero-cta"},i.createElement("a",{className:"cta-btn cta-btn--hero",href:"#about"},e("heroData.cta"))))))};const ba=i.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},a)=>{const o=Ft(e,"row"),s=Dt(),i=zt(),l=`${o}-cols`,c=[];return s.forEach(e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==i?`-${e}`:"";null!=r&&c.push(`${l}${a}-${r}`)}),(0,jt.jsx)(r,{ref:a,...n,className:Pt()(t,o,...c)})});ba.displayName="Row";var va=ba;const wa=i.forwardRef((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:o,spans:s}]=function({as:e,bsPrefix:t,className:r,...n}){t=Ft(t,"col");const a=Dt(),o=zt(),s=[],i=[];return a.forEach(e=>{const r=n[e];let a,l,c;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:l,order:c}=r):a=r;const u=e!==o?`-${e}`:"";a&&s.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=c&&i.push(`order${u}-${c}`),null!=l&&i.push(`offset${u}-${l}`)}),[{...n,className:Pt()(r,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,jt.jsx)(a,{...n,ref:t,className:Pt()(r,!s.length&&o)})});wa.displayName="Col";var xa=wa;var Ea=({title:e})=>i.createElement(ma,{direction:"up",duration:1e3,delay:300,triggerOnce:!0},i.createElement("h2",{className:"section-title"},e)),ka=r(4794),Sa=r(5588);var Ca=({filename:e,alt:t})=>{const r=(0,ka.useStaticQuery)("3888831929").images.edges.find(t=>t.node.relativePath.includes(e));return r?i.createElement(Sa.G,{className:"rounded shadow-lg",alt:t,image:(0,Sa.c)(r.node.childImageSharp)}):null};const Oa=i.createContext(),Aa=Oa.Provider;Oa.Consumer;var La=Oa;var Na=()=>{const{about:e}=(0,i.useContext)(La),{img:t}=e,{t:r}=Nt(),{0:n,1:a}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a(window.innerWidth>769)},[]),i.createElement("section",{id:"about"},i.createElement(Yt,null,i.createElement(Ea,{title:r("aboutData.aboutMe")}),i.createElement(va,{className:"about-wrapper"},i.createElement(xa,{md:6,sm:12},i.createElement(ma,{direction:"up",duration:1e3,delay:600,triggerOnce:!0},i.createElement("div",{className:"about-wrapper__image"},i.createElement(Ca,{alt:"profile picture",filename:t})))),i.createElement(xa,{md:6,sm:12},i.createElement(ma,{direction:n?"left":"up",duration:1e3,delay:1e3,triggerOnce:!0},i.createElement("div",{className:"about-wrapper__info"},i.createElement("p",{className:"about-wrapper__info-text"},r("aboutData.paragraphOne")),i.createElement("p",{className:"about-wrapper__info-text"},r("aboutData.paragraphTwo")),i.createElement("p",{className:"about-wrapper__info-text"},r("aboutData.paragraphThree")),i.createElement("span",{className:"d-flex mt-3"},i.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:r("aboutData.resume")},r("aboutData.resumeButton")))))))))};const Ta=(e,t,r,n)=>{e.style.transition=`${t} ${r}ms ${n}`},$a=(e,t,r)=>Math.min(Math.max(e,t),r);class Pa{glareWrapperEl;glareEl;glareAngle=0;glareOpacity=0;constructor(e,t){this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const r={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(e),a={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,r),Object.assign(this.glareEl.style,a)}calculateGlareSize=e=>{const{width:t,height:r}=e,n=Math.sqrt(t**2+r**2);return{width:n,height:n}};setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`};update=(e,t,r,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,r,n)};updateAngle=(e,t)=>{const{xPercentage:r,yPercentage:n}=e,a=180/Math.PI,o=r?Math.atan2(n,-r)*a:0;this.glareAngle=o-(t?180:0)};updateOpacity=(e,t,r,n)=>{const{xPercentage:a,yPercentage:o}=e,{glarePosition:s,glareReverse:i,glareMaxOpacity:l}=t,c=r?-1:1,u=n?-1:1,p=i?-1:1;let d=0;switch(s){case"top":d=-a*c*p;break;case"right":d=o*u*p;break;case"bottom":case void 0:d=a*c*p;break;case"left":d=-o*u*p;break;case"all":d=Math.hypot(a,o)}const f=$a(d,0,100);this.glareOpacity=f*l/100};render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`}}class ja{tiltAngleX=0;tiltAngleY=0;tiltAngleXPercentage=0;tiltAngleYPercentage=0;update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)};updateTilt=(e,t)=>{const{xPercentage:r,yPercentage:n}=e,{tiltMaxAngleX:a,tiltMaxAngleY:o}=t;this.tiltAngleX=r*a/100,this.tiltAngleY=n*o/100*-1};updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:r,tiltAngleYManual:n,tiltMaxAngleX:a,tiltMaxAngleY:o}=t;(null!==r||null!==n)&&(this.tiltAngleX=null!==r?r:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/a,e.yPercentage=100*this.tiltAngleY/o)};updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY};updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=$a(this.tiltAngleX,-90,90),this.tiltAngleY=$a(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)};updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:r}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/r*100};render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}const Ra={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class Ia extends i.PureComponent{static defaultProps=Ra;wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1};tilt=null;glare=null;componentDidMount(){if(this.tilt=new ja,this.initGlare(),this.setSize(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;("function"!=typeof e||"granted"===await e())&&window.addEventListener("deviceorientation",this.onMove)};removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)};setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new Pa(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)};onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t({event:e})};onMove=e=>{this.mainLoop(e),this.emitOnMove(e)};emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let r=0,n=0;this.glare&&(r=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:r,glareOpacity:n,event:e})}onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t({event:e}),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}};processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":{const{tiltAngleXInitial:e,tiltAngleYInitial:t,tiltMaxAngleX:r,tiltMaxAngleY:n}=this.props,a=t/n*100;this.wrapperEl.clientPosition.xPercentage=$a(e/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=$a(a,-100,100),this.wrapperEl.scale=1;break}}};processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:r}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/r*100,this.wrapperEl.clientPosition.xPercentage=$a(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=$a(this.wrapperEl.clientPosition.yPercentage,-100,100)};update=e=>{const{tiltEnable:t,flipVertically:r,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,r,n)};updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,r;if(e){const{x:e,y:n}=this.wrapperEl.clientPosition;t=n/window.innerHeight*200-100,r=e/window.innerWidth*200-100}else{const{size:{width:e,height:n,left:a,top:o},clientPosition:{x:s,y:i}}=this.wrapperEl;t=(i-o)/n*200-100,r=(s-a)/e*200-100}this.wrapperEl.clientPosition.xPercentage=$a(t,-100,100),this.wrapperEl.clientPosition.yPercentage=$a(r,-100,100)};updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)};renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)};resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;Ta(this.wrapperEl.node,"all",e,t),this.glare&&Ta(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:r}=this.props;return(0,jt.jsx)("div",{ref:e=>{this.wrapperEl.node=e},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:r,children:e})}}var Ma=({filename:e,alt:t})=>{const r=(0,ka.useStaticQuery)("2175775800").images.edges.find(t=>t.node.relativePath.includes(e));return r?i.createElement(Sa.G,{alt:t,image:(0,Sa.c)(r.node.childImageSharp)}):null};var _a=()=>{const{projects:e}=(0,i.useContext)(La),{t:t}=Nt(),{0:r,1:n}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n(window.innerWidth>769)},[]),i.createElement("section",{id:"projects"},i.createElement(Yt,null,i.createElement("div",{className:"project-wrapper"},i.createElement(Ea,{title:t("projectsData.title")}),e.map(e=>{const{id:n,title:a,infoKey:o,info2Key:s,url:l,repo:c,img:u}=e;return i.createElement(va,{key:n},i.createElement(xa,{lg:4,sm:12},i.createElement(ma,{direction:r?"left":"up",duration:1e3,delay:500,triggerOnce:!0},i.createElement("div",{className:"project-wrapper__text"},i.createElement("h3",{className:"project-wrapper__text-title"},a||"Project Title"),i.createElement("div",null,i.createElement("p",null,t(o)),i.createElement("p",{className:"mb-4"},t(s))),i.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--hero",href:l||"#!"},t("projectsData.seelive")),c&&i.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:c},t("projectsData.sourcecode"))))),i.createElement(xa,{lg:8,sm:12},i.createElement(ma,{direction:r?"right":"up",duration:1e3,delay:1e3,triggerOnce:!0},i.createElement("div",{className:"project-wrapper__image"},i.createElement("a",{href:l||"#!",target:"_blank","aria-label":"Project Link",rel:"noopener noreferrer"},i.createElement(Ia,{tiltMaxAngleDegrees:8,perspective:1e3,scale:1,transitionSpeed:300,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)"},i.createElement("div",{"data-tilt":!0,className:"thumbnail rounded"},i.createElement(Ma,{alt:a,filename:u}))))))))}))))};var Fa=()=>{const{contact:e}=(0,i.useContext)(La),{email:t}=e,{t:r}=Nt();return i.createElement("section",{id:"contact"},i.createElement(Yt,null,i.createElement(Ea,{title:r("navbar.contact")}),i.createElement(ma,{direction:"up",duration:1e3,delay:800,triggerOnce:!0},i.createElement("div",{className:"contact-wrapper"},i.createElement("p",{className:"contact-wrapper__text"},r("contactData.cta")),i.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:`mailto:${t||r("contactData.email")}`},r("contactData.btn"))))))};class Da extends i.PureComponent{constructor(e){super(e),this.$=i.createRef(),this._=i.createRef()}render(){return i.createElement("span",{ref:this.$},i.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(r,9867)).then(({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}})})}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}var za=Da;var Va=()=>i.createElement(i.Fragment,null,i.createElement(za,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork cobidev/gatsby-simplefolio on GitHub"},"Fork"),i.createElement(za,{className:"github-button",href:"https://github.com/cobidev/gatsby-simplefolio","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star cobidev/gatsby-simplefolio on GitHub"},"Star"));let Ya;const Ha=new Uint8Array(16);function Ua(){if(!Ya&&(Ya="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ya))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ya(Ha)}const Ba=[];for(let lo=0;lo<256;++lo)Ba.push((lo+256).toString(16).slice(1));function Xa(e,t=0){return Ba[e[t+0]]+Ba[e[t+1]]+Ba[e[t+2]]+Ba[e[t+3]]+"-"+Ba[e[t+4]]+Ba[e[t+5]]+"-"+Ba[e[t+6]]+Ba[e[t+7]]+"-"+Ba[e[t+8]]+Ba[e[t+9]]+"-"+Ba[e[t+10]]+Ba[e[t+11]]+Ba[e[t+12]]+Ba[e[t+13]]+Ba[e[t+14]]+Ba[e[t+15]]}let qa,Wa,Ka=0,Ga=0;var Za=function(e,t,r){let n=t&&r||0;const a=t||new Array(16);let o=(e=e||{}).node||qa,s=void 0!==e.clockseq?e.clockseq:Wa;if(null==o||null==s){const t=e.random||(e.rng||Ua)();null==o&&(o=qa=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==s&&(s=Wa=16383&(t[6]<<8|t[7]))}let i=void 0!==e.msecs?e.msecs:Date.now(),l=void 0!==e.nsecs?e.nsecs:Ga+1;const c=i-Ka+(l-Ga)/1e4;if(c<0&&void 0===e.clockseq&&(s=s+1&16383),(c<0||i>Ka)&&void 0===e.nsecs&&(l=0),l>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Ka=i,Ga=l,Wa=s,i+=122192928e5;const u=(1e4*(268435455&i)+l)%4294967296;a[n++]=u>>>24&255,a[n++]=u>>>16&255,a[n++]=u>>>8&255,a[n++]=255&u;const p=i/4294967296*1e4&268435455;a[n++]=p>>>8&255,a[n++]=255&p,a[n++]=p>>>24&15|16,a[n++]=p>>>16&255,a[n++]=s>>>8|128,a[n++]=255&s;for(let d=0;d<6;++d)a[n+d]=o[d];return t||Xa(a)};const Ja={img:"profile.png"},Qa=[{id:Za(),img:"hypertube.jpg",title:"IMDb-Clone",infoKey:"projectsData.hyperInfo",info2Key:"projectsData.hyperInfo2",url:"https://hypertube-scao.herokuapp.com/",repo:"https://github.com/sandrinecao/IMDb-Clone"},{id:Za(),img:"matcha.jpg",title:"Tinder-Clone",infoKey:"projectsData.matchaInfo",info2Key:"projectsData.matchaInfo2",url:"https://matcha-scao.herokuapp.com/",repo:"https://github.com/sandrinecao/Dating-App-Matcha"},{id:Za(),img:"camagru.jpg",title:"Instagram-clone",infoKey:"projectsData.camaInfo",info2Key:"projectsData.camaInfo2",url:"https://camagru-scao.herokuapp.com/",repo:"https://github.com/sandrinecao/camagru"}],eo={email:"sandrine.cao@gmail.com"},to={networks:[{id:Za(),name:"linkedin",url:"https://linkedin.com/in/sandrinecao"},{id:Za(),name:"github",url:"https://github.com/sandrinecao"}]},ro={isEnabled:!1};var no=()=>{const{footer:e}=(0,i.useContext)(La),{networks:t}=e,{isEnabled:r}=ro;return i.createElement("footer",{className:"footer navbar-static-bottom"},i.createElement(Yt,null,i.createElement("a",{href:"#top","aria-label":"Back To Top",className:"back-to-top"},i.createElement("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})),i.createElement("div",{className:"social-links"},t&&t.map(e=>{const{id:t,name:r,url:n}=e;return i.createElement("a",{key:t,href:n||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":r},i.createElement("i",{className:`fa fa-${r||"refresh"} fa-inverse`}))})),i.createElement("hr",null),i.createElement("p",{className:"footer__text"},"© ",(new Date).getFullYear()," - Template developed by"," ",i.createElement("a",{href:"https://github.com/cobidev",target:"_blank",rel:"noopener noreferrer"},"Jacobo Martínez")),r&&i.createElement(Va,null)))};var ao=function(){const{0:e,1:t}=(0,i.useState)({}),{0:r,1:n}=(0,i.useState)([]),{0:a,1:o}=(0,i.useState)({}),{0:s,1:l}=(0,i.useState)({});return(0,i.useEffect)(()=>{t({...Ja}),n((0,Tt.A)(Qa)),o({...eo}),l({...to})},[]),i.createElement(Aa,{value:{about:e,projects:r,contact:a,footer:s}},i.createElement(Ht,null),i.createElement(ya,null),i.createElement(Na,null),i.createElement(_a,null),i.createElement(Fa,null),i.createElement(no,null))},oo=JSON.parse('{"headData":{"title":"Sandrine Cao | Developer"},"navbar":{"about":"About","projects":"Projects","contact":"Contact"},"heroData":{"title":"Hello, my name is","name":"Sandrine Cao","subtitle":"A French Full-Stack Developer.","cta":"Read More"},"aboutData":{"aboutMe":"About Me","paragraphOne":"I am a Back-end Developer at LeBonCoin in Paris and I am still studying at 42 - a software engineering and computer programming school that uses project-based learning.","paragraphTwo":"I have recently worked with TypeScript, JavaScript, Go, Python, Node.js, React.js and I am eager to learn more about these languages.","paragraphThree":"I used to work at PlayStation as a Video Games Quality Assurance Tester in the UK for over 5 years - however I have always wanted to discover programming and this led me to a career change, a love for crafting code and building products.","resumeButton":"View Resume","resume":"https://sandrinecao.github.io/CV_Sandrine_Cao.pdf"},"projectsData":{"title":"Projects","seelive":"See Live","sourcecode":"Source Code","hyperInfo":"MERN app (MongoDB, Express, NodeJS, ReactJS). Final project for searching movies, watching trailers, filtering by year or genre, and adding them to your favorites via your personal account.","hyperInfo2":"Grade: 125/100","matchaInfo":"Tinder-like web application using Node.js, Express, MySQL and Handlebars.","matchaInfo2":"Grade: 125/100","camaInfo":"An Instagram clone web app using PHP, Javascript, and MySQL as part of 42\'s web branch.","camaInfo2":"Grade: 106/100"},"contactData":{"cta":"+33 6 18 14 03 52","btn":"sandrine.cao@gmail.com","email":"sandrine.cao@gmail.com"}}'),so=JSON.parse('{"headData":{"title":"Sandrine Cao | Développeuse"},"navbar":{"about":"À propos","projects":"Projets","contact":"Contact"},"heroData":{"title":"Bonjour, je suis","name":"Sandrine Cao","subtitle":"Développeuse Full-Stack.","cta":"En savoir plus"},"aboutData":{"aboutMe":"À propos","paragraphOne":"Je travaille chez LeBonCoin à Paris en tant que développeuse back-end et je suis toujours active à l\'École 42.","paragraphTwo":"J\'ai rapidement appris à coder en TypeScript, Javascript, Go, Python, Node.js, React.js et j\'aimerais continuer à approfondir mes connaissances dans ces langages.","paragraphThree":"Auparavant j\'ai travaillé pour PlayStation en tant que testeuse Assurance Qualité en Angleterre durant plus de 5 ans, mais j\'ai toujours eu envie d\'approfondir mes connaissances en programmation. D\'où cette reconversion professionnelle avec une passion du code qui ne m\'a plus quittée.","resumeButton":"Consulter le CV","resume":"https://sandrinecao.github.io/CV_Sandrine_Cao_FR.pdf"},"projectsData":{"title":"Projets","seelive":"Démo Live","sourcecode":"Code source","hyperInfo":"Appli MERN (MongoDB, Express, NodeJS, ReactJS). Projet final qui permet de rechercher des infos sur une vaste variétés de films, avec la possibilité de les trier par intervalle d\'année ou par genre, visionner des bande-annonces et les ajouter en favoris dans un compte personnel.","hyperInfo2":"Note : 125/100","matchaInfo":"Une application web de rencontres qui utilise Node.js, Express, MySQL et Handlebars.","matchaInfo2":"Note : 125/100","camaInfo":"Un clone d\'Instagram qui utilise PHP, Javascript, et MySQL.","camaInfo2":"Note : 106/100"},"contactData":{"cta":"06 18 14 03 52","btn":"sandrine.cao@gmail.com","email":"sandrine.cao@gmail.com"}}');at.use(bt).init({resources:{en:{translation:oo},fr:{translation:so}},lng:"fr",fallbackLng:"en",interpolation:{escapeValue:!1}});function io(){const{t:e,i18n:t}=Nt();return i.createElement(i.Fragment,null,i.createElement(he,null,i.createElement("meta",{charSet:"utf-8"}),i.createElement("title",null,e("headData.title")),i.createElement("html",{lang:t.language}),i.createElement("meta",{name:"description",content:e("headData.title")})),i.createElement(ao,null))}},2729:function(e){"use strict";const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),i=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,a)=>{let o=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,i=s,s=!0,l++):s&&i&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,o=!0):(o=n(c)===c&&a(c)!==c,i=s,s=a(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,e=>t(e))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,(e,r)=>t(r)).replace(l,e=>t(e))))(e,c)};e.exports=c,e.exports.default=c},2799:function(e,t){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case p:case o:case i:case s:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case m:case g:case l:return e;default:return t}}case a:return t}}}function E(e){return x(e)===p}t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=d,t.Fragment=o,t.Lazy=m,t.Memo=g,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=f,t.isAsyncMode=function(e){return E(e)||x(e)===u},t.isConcurrentMode=E,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===i},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===p||e===i||e===s||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===y)},t.typeOf=x},4146:function(e,t,r){"use strict";var n=r(4363),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function l(e){return n.isMemo(e)?s:i[e.$$typeof]||a}i[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[n.Memo]=s;var c=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(h){var a=f(r);a&&a!==h&&e(t,a,n)}var s=u(r);p&&(s=s.concat(p(r)));for(var i=l(t),g=l(r),m=0;m<s.length;++m){var y=s[m];if(!(o[y]||n&&n[y]||g&&g[y]||i&&i[y])){var b=d(r,y);try{c(t,y,b)}catch(v){}}}}return t}},4363:function(e,t,r){"use strict";e.exports=r(2799)},4634:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5588:function(e,t,r){"use strict";r.d(t,{G:function(){return I},L:function(){return g},M:function(){return k},P:function(){return E},_:function(){return i},a:function(){return s},b:function(){return p},c:function(){return c},g:function(){return d},h:function(){return l}});var n=r(6540),a=(r(2729),r(5556)),o=r.n(a);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function p(e,t,r,n,a={}){return s({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},a,{opacity:t?1:0})})}function d(e,t,r,n,a,o,i,l){const c={};o&&(c.backgroundColor=o,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const f=["children"],h=function({layout:e,width:t,height:r}){return"fullWidth"===e?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/t*100+"%"}}):"constrained"===e?n.createElement("div",{style:{maxWidth:t,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=i(e,f);return n.createElement(n.Fragment,null,n.createElement(h,s({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:a,alt:o="",shouldLoad:l}=e,c=i(e,m);return n.createElement("img",s({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:o}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,o=i(e,y);const l=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,s({},o,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map(({media:e,srcSet:t,type:r})=>n.createElement("source",{key:`${e}-${r}-${t}`,type:r,media:e,srcSet:a?t:void 0,"data-srcset":a?void 0:t,sizes:l})),c):c};var w;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const x=["fallback"],E=function(e){let{fallback:t}=e,r=i(e,x);return t?n.createElement(v,s({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},r))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],O=e=>e.replace(/\n/g,""),A=(e,t,r,...n)=>e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`),L={image:o().object.isRequired,alt:A},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],$=new Set;let P,j;const R=function(e){let{as:t="div",image:a,style:o,backgroundColor:c,className:p,class:d,onStartLoad:f,onLoad:h,onError:g}=e,m=i(e,N);const{width:y,height:b,layout:v}=a,w=u(y,b,v),{style:x,className:E}=w,k=i(w,T),S=(0,n.useRef)(),C=(0,n.useMemo)(()=>JSON.stringify(a.images),[a.images]);d&&(p=d);const O=function(e,t,r){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(v,y,b),A=(0,n.useMemo)(()=>({__html:O}),[O]);return(0,n.useEffect)(()=>{P||(P=r.e(551).then(r.bind(r,551)).then(({renderImageToString:e,swapPlaceholderImage:t})=>(j=e,{renderImageToString:e,swapPlaceholderImage:t})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==f||f({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr")},0)):(null==f||f({wasCached:!0}),e.addEventListener("load",function t(){e.removeEventListener("load",t),null==h||h({wasCached:!0}),setTimeout(()=>{e.removeAttribute("data-gatsby-image-ssr")},0)})),void $.add(C);if(j&&$.has(C))return;let t,n;return P.then(({renderImageToString:e,swapPlaceholderImage:r})=>{S.current&&(S.current.innerHTML=e(s({isLoading:!0,isLoaded:$.has(C),image:a},m)),$.has(C)||(t=requestAnimationFrame(()=>{S.current&&(n=r(S.current,C,$,o,f,h,g))})))}),()=>{t&&cancelAnimationFrame(t),n&&n()}},[a]),(0,n.useLayoutEffect)(()=>{$.has(C)&&j&&(S.current.innerHTML=j(s({isLoading:$.has(C),isLoaded:$.has(C),image:a},m)),null==f||f({wasCached:!0}),null==h||h({wasCached:!0}))},[a]),(0,n.createElement)(t,s({},k,{style:s({},x,o,{backgroundColor:c}),className:`${E}${p?` ${p}`:""}`,ref:S,dangerouslySetInnerHTML:A,suppressHydrationWarning:!0}))},I=(0,n.memo)(function(e){return e.image?(0,n.createElement)(R,e):null});I.propTypes=L,I.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function _(e){return function(t){let{src:r,__imageData:a,__error:o}=t,l=i(t,M);return o&&console.warn(o),a?n.createElement(e,s({image:a},l)):(console.warn("Image not loaded",r),null)}}const F=_(function(e){let{as:t="div",className:r,class:a,style:o,image:l,loading:c="lazy",imgClassName:f,imgStyle:h,backgroundColor:m,objectFit:y,objectPosition:b}=e,v=i(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),h=s({objectFit:y,objectPosition:b,backgroundColor:m},h);const{width:w,height:x,layout:A,images:L,placeholder:N,backgroundColor:T}=l,$=u(w,x,A),{style:P,className:j}=$,R=i($,C),I={fallback:void 0,sources:[]};return L.fallback&&(I.fallback=s({},L.fallback,{srcSet:L.fallback.srcSet?O(L.fallback.srcSet):void 0})),L.sources&&(I.sources=L.sources.map(e=>s({},e,{srcSet:O(e.srcSet)}))),n.createElement(t,s({},R,{style:s({},P,o,{backgroundColor:m}),className:`${j}${r?` ${r}`:""}`}),n.createElement(g,{layout:A,width:w,height:x},n.createElement(E,s({},d(N,!1,A,w,x,T,y,b))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:f},v,p("eager"===c,!1,I,c,h)))))}),D=(e,t,...r)=>"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`),z=new Set(["fixed","fullWidth","constrained"]),V={src:o().string.isRequired,alt:A,width:D,height:D,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};F.displayName="StaticImage",F.propTypes=V;const Y=_(I);Y.displayName="StaticImage",Y.propTypes=V},6942:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},8338:function(e,t,r){"use strict";e.exports=r(9998)},8493:function(e,t,r){"use strict";var n=r(6540);var a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,i=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(n){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),a=n[0].inst,u=n[1];return i(function(){a.value=r,a.getSnapshot=t,c(a)&&u({inst:a})},[e,r,t]),s(function(){return c(a)&&u({inst:a}),e(function(){c(a)&&u({inst:a})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},8828:function(e){"use strict";e.exports=Object.assign},9867:function(e,t,r){"use strict";r.r(t),r.d(t,{render:function(){return N}});var n=window.document,a=window.Math,o=window.HTMLElement,s=window.XMLHttpRequest,i=function(e,t){for(var r=0,n=e.length;r<n;r++)t(e[r])},l=function(e){return function(t,r,n){var a=e.createElement(t);if(null!=r)for(var o in r){var s=r[o];null!=s&&(null!=a[o]?a[o]=s:a.setAttribute(o,s))}return null!=n&&i(n,function(t){a.appendChild("string"==typeof t?e.createTextNode(t):t)}),a}},c=l(n),u=function(e,t){return{}.hasOwnProperty.call(e,t)},p=function(e){return(""+e).toLowerCase()},d="github.com",f="https://api."+d,h=s&&"prototype"in s&&"withCredentials"in s.prototype,g=h&&o&&"attachShadow"in o.prototype&&!("prototype"in o.prototype.attachShadow),m=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},y=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},b={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#25292e;background-color:#ebf0f4;border-color:#d1d9e0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e5eaee;background-position:0 -0.5em;border-color:#d1d9e0;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23eff2f5'/%3e%3cstop offset='90%25' stop-color='%23e5eaee'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #eff2f5, #e5eaee 90%);background-image:linear-gradient(180deg, #eff2f5, #e5eaee 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFEFF2F5', endColorstr='#FFE4E9ED')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e6eaef;border-color:#d1d9e0;background-image:none;filter:none}.social-count{color:#25292e;background-color:#fff;border-color:#d1d9e0}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#25292e;background-color:#e0e6eb;border-color:#454c54;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#d0d7e0;background-position:0 -0.5em;border-color:#454c54;background-image:none;filter:none}.btn:active{background-color:#d1d9e0;border-color:#454c54}.social-count{color:#25292e;background-color:#fff;border-color:#454c54}.social-count:hover,.social-count:focus{color:#023b95}.octicon-heart{color:#7d0c57}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #1f6feb;outline-offset:-2px}.btn{color:#f0f6fc;background-color:#1a2026;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23212830'/%3e%3cstop offset='90%25' stop-color='%231a2026'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #212830, #1a2026 90%);background-image:linear-gradient(180deg, #212830, #1a2026 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF212830', endColorstr='#FF191F25')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#1f242c;background-position:0 -0.5em;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23262c36'/%3e%3cstop offset='90%25' stop-color='%231f242c'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #262c36, #1f242c 90%);background-image:linear-gradient(180deg, #262c36, #1f242c 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF262C36', endColorstr='#FF1E232B')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2a313c;border-color:#3d444d;background-image:none;filter:none}.social-count{color:#f0f6fc;background-color:#0d1117;border-color:#3d444d}.social-count:hover,.social-count:focus{color:#388bfd}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #316dca;outline-offset:-2px}.btn{color:#d1d7e0;background-color:#232932;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232a313c'/%3e%3cstop offset='90%25' stop-color='%23232932'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2a313c, #232932 90%);background-image:linear-gradient(180deg, #2a313c, #232932 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2A313C', endColorstr='#FF222831')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#282f38;background-position:0 -0.5em;border-color:#3d444d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f3742'/%3e%3cstop offset='90%25' stop-color='%23282f38'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f3742, #282f38 90%);background-image:linear-gradient(180deg, #2f3742, #282f38 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F3742', endColorstr='#FF272E37')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#3d444d;border-color:#3d444d;background-image:none;filter:none}.social-count{color:#d1d7e0;background-color:#212830;border-color:#3d444d}.social-count:hover,.social-count:focus{color:#4184e4}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #409eff;outline-offset:-2px}.btn{color:#fff;background-color:#262c36;border-color:#b7bdc8;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#232932;background-position:0 -0.5em;border-color:#b7bdc8;background-image:none;filter:none}.btn:active{background-color:#2f3742;border-color:#b7bdc8}.social-count{color:#fff;background-color:#010409;border-color:#b7bdc8}.social-count:hover,.social-count:focus{color:#5cacff}.octicon-heart{color:#ff90c8}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[u(b,t)?t:e]+"}"},w=function(e){if(null==e)return b.light;if(u(b,e))return b[e];var t=function(e,t,r,n){null==n&&(n=window.decodeURIComponent);var a={};return i(e.split(t),function(e){if(""!==e){var t=e.split(r);a[n(t[0])]=null!=t[1]?n(t.slice(1).join(r)):void 0}}),a}(e,";",":",function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")});return b[u(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},x={"comment-discussion":{heights:{16:{width:16,path:'<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>'}}},download:{heights:{16:{width:16,path:'<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>'}}},eye:{heights:{16:{width:16,path:'<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>'}}},heart:{heights:{16:{width:16,path:'<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656"></path>'}}},package:{heights:{16:{width:16,path:'<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>'}}},star:{heights:{16:{width:16,path:'<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>'}}},play:{heights:{16:{width:16,path:'<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>'}}}},E=function(e,t){e=p(e).replace(/^octicon-/,""),u(x,e)||(e="mark-github");var r=t>=24&&24 in x[e].heights?24:16,n=x[e].heights[r];return'<svg viewBox="0 0 '+n.width+" "+r+'" width="'+t*n.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+n.path+"</svg>"},k={},S=function(e,t){var r=k[e]||(k[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}(function(){for(delete k[e];t=r.shift();)t.apply(null,arguments)});if(h){var a=new s;m(a,"abort",n),m(a,"error",n),m(a,"load",function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void n(t)}n(200!==this.status,e)}),a.open("GET",e),a.send()}else{var o=this||window;o._=function(e){o._=null,n(200!==e.meta.status,e.data)};var i=l(o.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),c=function(){o._&&o._({meta:{}})};m(i,"load",c),m(i,"error",c),function(e,t,r){if(null!=e.readyState){var n="readystatechange",a=function(){if(t.test(e.readyState))return y(e,n,a),r.apply(this,arguments)};m(e,n,a)}}(i,/de|m/,c),o.document.getElementsByTagName("head")[0].appendChild(i)}}},C=function(e,t,r){var n=l(e.ownerDocument),a=e.appendChild(n("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+w(t["data-color-scheme"]);a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.ownerDocument.createTextNode(o));var s="large"===p(t["data-size"]),i=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:E(t["data-icon"],s?16:14)+"&nbsp;"},[n("span",{},[t["data-text"]||""])]),c=e.appendChild(n("div",{className:"widget"+(s?" widget-lg":"")},[i])),u=i.hostname.replace(/\.$/,"");if(("."+u).substring(u.length-10)!=="."+d)return i.removeAttribute("href"),void r(c);var h=(" /"+i.pathname).split(/\/+/);if(((u===d||u==="gist."+d)&&"archive"===h[3]||u===d&&"releases"===h[3]&&("download"===h[4]||"latest"===h[4]&&"download"===h[5])||u==="codeload."+d)&&(i.target="_top"),"true"===p(t["data-show-count"])&&u===d&&"marketplace"!==h[1]&&"sponsors"!==h[1]&&"orgs"!==h[1]&&"users"!==h[1]&&"-"!==h[1]){var g,m;if(!h[2]&&h[1])m="followers",g="?tab=followers";else if(!h[3]&&h[2])m="stargazers_count",g="";else if(h[4]||"subscription"!==h[3])if(h[4]||"fork"!==h[3]){if("issues"!==h[3])return void r(c);m="open_issues_count",g="/issues"}else m="forks_count",g="/forks";else m="subscribers_count",g="";var y=h[2]?"/repos/"+h[1]+"/"+h[2]:"/users/"+h[1];S.call(this,f+y,function(e,t){if(!e){var a=t[m];c.appendChild(n("a",{className:"social-count",href:t.html_url+g,rel:"noopener",target:"_blank","aria-label":a+" "+m.replace(/_count$/,"").replace("_"," ").slice(0,a<2?-1:void 0)+" on GitHub"},[(""+a).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(c)})}else r(c)},O=window.devicePixelRatio||1,A=function(e){return(O>1?a.ceil(a.round(e*O)/O*2)/2:a.ceil(e))||0},L=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},N=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return i(["icon","color-scheme","text","size","show-count"],function(r){var n="data-"+r;t[n]=e.getAttribute(n)}),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),g){var r=c("span");C(r.attachShadow({mode:"closed"}),e,function(){t(r)})}else{var o=c("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});L(o,[0,0]),o.style.border="none",o.style.colorScheme="light";var s=function(){var r,i=o.contentWindow;try{r=i.document.body}catch(l){return void n.body.appendChild(o.parentNode.removeChild(o))}y(o,"load",s),C.call(i,r,e,function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=a.max(t,A(n.width)),r=a.max(r,A(n.height))}return[t,r]}(r);o.parentNode.removeChild(o),function(e,t,r){var n=function(){return y(e,t,n),r.apply(this,arguments)};m(e,t,n)}(o,"load",function(){L(o,n)}),o.src="https://unpkg.com/github-buttons@2.33.1/dist/buttons.html#"+(o.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var a=[];for(var o in e){var s=e[o];null!=s&&a.push(n(o)+r+n(s))}return a.join(t)}(e)),t(o)})};m(o,"load",s),n.body.appendChild(o)}}},9888:function(e,t,r){"use strict";e.exports=r(8493)},9998:function(e,t){"use strict";var r,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case s:case d:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case p:case g:case h:case l:return e;default:return t}}case a:return t}}}r=Symbol.for("react.module.reference"),t.isFragment=function(e){return y(e)===o}}}]);
//# sourceMappingURL=component---src-pages-index-js-2634ed9c9556903614e2.js.map