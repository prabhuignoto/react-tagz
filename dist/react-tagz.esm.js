import e,{forwardRef as t,useContext as n,createContext as r,createElement as o,Fragment as a,useRef as i,useLayoutEffect as s,useState as c,useEffect as l,useMemo as u,useCallback as d}from"react";var f;function p(e){var t={exports:{}};return e(t,t.exports),t.exports}!function(e){e[e.INLINE=0]="INLINE",e[e.LIST_MODE=1]="LIST_MODE"}(f||(f={}));p((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=t[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}e.exports=t}));function m(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var h=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,g=m((function(e){return h.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));function y(){return(y=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var r=t[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var v=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy?"production"===process.env.NODE_ENV:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if("production"!==process.env.NODE_ENV){var n=64===e.charCodeAt(0)&&105===e.charCodeAt(1);n&&this._alreadyInsertedOrderInsensitiveRule&&console.error("You're attempting to insert the following rule:\n"+e+"\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."),this._alreadyInsertedOrderInsensitiveRule=this._alreadyInsertedOrderInsensitiveRule||!n}if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(t){"production"===process.env.NODE_ENV||/:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(e)||console.error('There was a problem inserting the following rule: "'+e+'"',t)}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0,"production"!==process.env.NODE_ENV&&(this._alreadyInsertedOrderInsensitiveRule=!1)},e}(),b="-ms-",E="-moz-",w="-webkit-",x="comm",k="rule",_="decl",S=Math.abs,N=String.fromCharCode;function O(e){return e.trim()}function C(e,t,n){return e.replace(t,n)}function $(e,t){return e.indexOf(t)}function A(e,t){return 0|e.charCodeAt(t)}function T(e,t,n){return e.slice(t,n)}function D(e){return e.length}function I(e){return e.length}function M(e,t){return t.push(e),e}var P=1,L=1,R=0,j=0,V=0,z="";function F(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:P,column:L,length:i,return:""}}function q(e,t,n){return F(e,t.root,t.parent,n,t.props,t.children,0)}function U(){return V=j<R?A(z,j++):0,L++,10===V&&(L=1,P++),V}function Y(){return A(z,j)}function H(){return j}function B(e,t){return T(z,e,t)}function W(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return P=L=1,R=D(z=e),j=0,[]}function X(e){return z="",e}function J(e){return O(B(j-1,Z(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(V=Y())&&V<33;)U();return W(e)>2||W(V)>3?"":" "}function Z(e){for(;U();)switch(V){case e:return j;case 34:case 39:return Z(34===e||39===e?e:V);case 40:41===e&&Z(e);break;case 92:U()}return j}function Q(e,t){for(;U()&&e+V!==57&&(e+V!==84||47!==Y()););return"/*"+B(t,j-1)+"*"+N(47===e?e:U())}function ee(e){for(;!W(Y());)U();return B(e,j)}function te(e){return X(ne("",null,null,null,[""],e=G(e),0,[0],e))}function ne(e,t,n,r,o,a,i,s,c){for(var l=0,u=0,d=i,f=0,p=0,m=0,h=1,g=1,y=1,v=0,b="",E=o,w=a,x=r,k=b;g;)switch(m=v,v=U()){case 34:case 39:case 91:case 40:k+=J(v);break;case 9:case 10:case 13:case 32:k+=K(m);break;case 47:switch(Y()){case 42:case 47:M(oe(Q(U(),H()),t,n),c);break;default:k+="/"}break;case 123*h:s[l++]=D(k)*y;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:p>0&&M(p>32?ae(k+";",r,n,d-1):ae(C(k," ","")+";",r,n,d-2),c);break;case 59:k+=";";default:if(M(x=re(k,t,n,l,u,o,s,b,E=[],w=[],d),a),123===v)if(0===u)ne(k,t,x,x,E,a,d,s,w);else switch(f){case 100:case 109:case 115:ne(e,x,x,r&&M(re(e,x,x,0,0,o,s,b,o,E=[],d),w),o,w,d,s,r?E:w);break;default:ne(k,x,x,x,[""],w,d,s,w)}}l=u=p=0,h=y=1,b=k="",d=i;break;case 58:d=1+D(k),p=m;default:switch(k+=N(v),v*h){case 38:y=u>0?1:(k+="\f",-1);break;case 44:s[l++]=(D(k)-1)*y,y=1;break;case 64:45===Y()&&(k+=J(U())),f=Y(),u=D(b=k+=ee(H())),v++;break;case 45:45===m&&2==D(k)&&(h=0)}}return a}function re(e,t,n,r,o,a,i,s,c,l,u){for(var d=o-1,f=0===o?a:[""],p=I(f),m=0,h=0,g=0;m<r;++m)for(var y=0,v=T(e,d+1,d=S(h=i[m])),b=e;y<p;++y)(b=O(h>0?f[y]+" "+v:C(v,/&\f/g,f[y])))&&(c[g++]=b);return F(e,t,n,0===o?k:s,c,l,u)}function oe(e,t,n){return F(e,t,n,x,N(V),T(e,2,-2),0)}function ae(e,t,n,r){return F(e,t,n,_,T(e,0,r),T(e,r+1,-1),r)}function ie(e,t){switch(function(e,t){return(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3)}(e,t)){case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return w+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return w+e+E+e+b+e+e;case 6828:case 4268:return w+e+b+e+e;case 6165:return w+e+b+"flex-"+e+e;case 5187:return w+e+C(e,/(\w+).+(:[^]+)/,w+"box-$1$2"+b+"flex-$1$2")+e;case 5443:return w+e+b+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return w+e+b+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return w+e+b+C(e,"shrink","negative")+e;case 5292:return w+e+b+C(e,"basis","preferred-size")+e;case 6060:return w+"box-"+C(e,"-grow","")+w+e+b+C(e,"grow","positive")+e;case 4554:return w+C(e,/([^-])(transform)/g,"$1"+w+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,w+"$1"),/(image-set)/,w+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,w+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,w+"box-pack:$3"+b+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+w+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,w+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(D(e)-1-t>6)switch(A(e,t+1)){case 102:t=A(e,t+3);case 109:return C(e,/(.+:)(.+)-([^]+)/,"$1"+w+"$2-$3$1"+E+(108==t?"$3":"$2-$3"))+e;case 115:return~$(e,"stretch")?ie(C(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==A(e,t+1))break;case 6444:switch(A(e,D(e)-3-(~$(e,"!important")&&10))){case 107:case 111:return C(e,e,w+e)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+w+(45===A(e,14)?"inline-":"")+"box$3$1"+w+"$2$3$1"+b+"$2box$3")+e}break;case 5936:switch(A(e,t+11)){case 114:return w+e+b+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return w+e+b+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return w+e+b+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return w+e+b+e+e}return e}function se(e,t){for(var n="",r=I(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function ce(e,t,n,r){switch(e.type){case"@import":case _:return e.return=e.return||e.value;case x:return"";case k:e.value=e.props.join(",")}return D(n=se(e.children,r))?e.return=e.value+"{"+n+"}":""}function le(e){var t=I(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function ue(e){return function(t){t.root||(t=t.return)&&e(t)}}var de,fe,pe=function(e,t){return X(function(e,t){var n=-1,r=44;do{switch(W(r)){case 0:38===r&&12===Y()&&(t[n]=1),e[n]+=ee(j-1);break;case 2:e[n]+=J(r);break;case 4:if(44===r){e[++n]=58===Y()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=N(r)}}while(r=U());return e}(G(e),t))},me=new WeakMap,he=function(e){if("rule"===e.type&&e.parent&&e.length){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||me.get(n))&&!r){me.set(e,!0);for(var o=[],a=pe(t,o),i=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},ge=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ye=function(e){return 105===e.type.charCodeAt(1)&&64===e.type.charCodeAt(0)},ve=function(e){e.type="",e.value="",e.return="",e.children="",e.props=""},be=function(e,t,n){ye(e)&&(e.parent?(console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."),ve(e)):function(e,t){for(var n=e-1;n>=0;n--)if(!ye(t[n]))return!0;return!1}(t,n)&&(console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."),ve(e)))},Ee="undefined"!=typeof document,we=Ee?void 0:(de=function(){return m((function(){var e={};return function(t){return e[t]}}))},fe=new WeakMap,function(e){if(fe.has(e))return fe.get(e);var t=de(e);return fe.set(e,t),t}),xe=[function(e,t,n,r){if(!e.return)switch(e.type){case _:e.return=ie(e.value,e.length);break;case"@keyframes":return se([q(C(e.value,"@","@"+w),e,"")],r);case k:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return se([q(C(t,/:(read-\w+)/,":-moz-$1"),e,"")],r);case"::placeholder":return se([q(C(t,/:(plac\w+)/,":"+w+"input-$1"),e,""),q(C(t,/:(plac\w+)/,":-moz-$1"),e,""),q(C(t,/:(plac\w+)/,b+"input-$1"),e,"")],r)}return""}))}}],ke=function(e){var t=e.key;if("production"!==process.env.NODE_ENV&&!t)throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");if(Ee&&"css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){document.head.appendChild(e),e.setAttribute("data-s","")}))}var r=e.stylisPlugins||xe;if("production"!==process.env.NODE_ENV&&/[^a-z-]/.test(t))throw new Error('Emotion key must only contain lower case alphabetical characters and - but "'+t+'" was passed');var o,a,i={},s=[];Ee&&(o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion]"),(function(e){var n=e.getAttribute("data-emotion").split(" ");if(n[0]===t){for(var r=1;r<n.length;r++)i[n[r]]=!0;s.push(e)}})));var c=[he,ge];if("production"!==process.env.NODE_ENV&&c.push(function(e){return function(t,n,r){if("rule"===t.type){var o,a=t.value.match(/(:first|:nth|:nth-last)-child/g);if(a&&!0!==e.compat){var i=n>0?r[n-1]:null;if(i&&function(e){return!!e&&"comm"===e.type&&e.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason")>-1}((o=i.children).length?o[o.length-1]:null))return;a.forEach((function(e){console.error('The pseudo class "'+e+'" is potentially unsafe when doing server-side rendering. Try changing it to "'+e.split("-child")[0]+'-of-type".')}))}}}}({get compat(){return g.compat}}),be),Ee){var l,u=[ce,"production"!==process.env.NODE_ENV?function(e){e.root||(e.return?l.insert(e.return):e.value&&e.type!==x&&l.insert(e.value+"{}"))}:ue((function(e){l.insert(e)}))],d=le(c.concat(r,u));a=function(e,t,n,r){l=n,"production"!==process.env.NODE_ENV&&void 0!==t.map&&(l={insert:function(e){n.insert(e+t.map)}}),se(te(e?e+"{"+t.styles+"}":t.styles),d),r&&(g.inserted[t.name]=!0)}}else{var f=[ce],p=le(c.concat(r,f)),m=we(r)(t),h=function(e,t){var n=t.name;return void 0===m[n]&&(m[n]=se(te(e?e+"{"+t.styles+"}":t.styles),p)),m[n]};a=function(e,t,n,r){var o=t.name,a=h(e,t);return void 0===g.compat?(r&&(g.inserted[o]=!0),"development"===process.env.NODE_ENV&&void 0!==t.map?a+t.map:a):r?void(g.inserted[o]=a):a}}var g={key:t,sheet:new v({key:t,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:i,registered:{},insert:a};return g.sheet.hydrate(s),g},_e="function"==typeof Symbol&&Symbol.for,Se=_e?Symbol.for("react.element"):60103,Ne=_e?Symbol.for("react.portal"):60106,Oe=_e?Symbol.for("react.fragment"):60107,Ce=_e?Symbol.for("react.strict_mode"):60108,$e=_e?Symbol.for("react.profiler"):60114,Ae=_e?Symbol.for("react.provider"):60109,Te=_e?Symbol.for("react.context"):60110,De=_e?Symbol.for("react.async_mode"):60111,Ie=_e?Symbol.for("react.concurrent_mode"):60111,Me=_e?Symbol.for("react.forward_ref"):60112,Pe=_e?Symbol.for("react.suspense"):60113,Le=_e?Symbol.for("react.suspense_list"):60120,Re=_e?Symbol.for("react.memo"):60115,je=_e?Symbol.for("react.lazy"):60116,Ve=_e?Symbol.for("react.block"):60121,ze=_e?Symbol.for("react.fundamental"):60117,Fe=_e?Symbol.for("react.responder"):60118,qe=_e?Symbol.for("react.scope"):60119;function Ue(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case Se:switch(e=e.type){case De:case Ie:case Oe:case $e:case Ce:case Pe:return e;default:switch(e=e&&e.$$typeof){case Te:case Me:case je:case Re:case Ae:return e;default:return t}}case Ne:return t}}}function Ye(e){return Ue(e)===Ie}var He={AsyncMode:De,ConcurrentMode:Ie,ContextConsumer:Te,ContextProvider:Ae,Element:Se,ForwardRef:Me,Fragment:Oe,Lazy:je,Memo:Re,Portal:Ne,Profiler:$e,StrictMode:Ce,Suspense:Pe,isAsyncMode:function(e){return Ye(e)||Ue(e)===De},isConcurrentMode:Ye,isContextConsumer:function(e){return Ue(e)===Te},isContextProvider:function(e){return Ue(e)===Ae},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Se},isForwardRef:function(e){return Ue(e)===Me},isFragment:function(e){return Ue(e)===Oe},isLazy:function(e){return Ue(e)===je},isMemo:function(e){return Ue(e)===Re},isPortal:function(e){return Ue(e)===Ne},isProfiler:function(e){return Ue(e)===$e},isStrictMode:function(e){return Ue(e)===Ce},isSuspense:function(e){return Ue(e)===Pe},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===Oe||e===Ie||e===$e||e===Ce||e===Pe||e===Le||"object"==typeof e&&null!==e&&(e.$$typeof===je||e.$$typeof===Re||e.$$typeof===Ae||e.$$typeof===Te||e.$$typeof===Me||e.$$typeof===ze||e.$$typeof===Fe||e.$$typeof===qe||e.$$typeof===Ve)},typeOf:Ue},Be=p((function(e,t){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case u:case o:case i:case a:case f:return p;default:var g=p&&p.$$typeof;switch(g){case c:case d:case h:case m:case s:return g;default:return t}}case r:return t}}}var w=l,x=u,k=c,_=s,S=n,N=d,O=o,C=h,$=m,A=r,T=i,D=a,I=f,M=!1;function P(e){return E(e)===u}t.AsyncMode=w,t.ConcurrentMode=x,t.ContextConsumer=k,t.ContextProvider=_,t.Element=S,t.ForwardRef=N,t.Fragment=O,t.Lazy=C,t.Memo=$,t.Portal=A,t.Profiler=T,t.StrictMode=D,t.Suspense=I,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||E(e)===l},t.isConcurrentMode=P,t.isContextConsumer=function(e){return E(e)===c},t.isContextProvider=function(e){return E(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===o},t.isLazy=function(e){return E(e)===h},t.isMemo=function(e){return E(e)===m},t.isPortal=function(e){return E(e)===r},t.isProfiler=function(e){return E(e)===i},t.isStrictMode=function(e){return E(e)===a},t.isSuspense=function(e){return E(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===i||e===a||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=E}()})),We=p((function(e){"production"===process.env.NODE_ENV?e.exports=He:e.exports=Be})),Ge={};Ge[We.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ge[We.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var Xe="undefined"!=typeof document;function Je(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var Ke=function(e,t,n){var r=e.key+"-"+t.name;if((!1===n||!1===Xe&&void 0!==e.compat)&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var o="",a=t;do{var i=e.insert(t===a?"."+r:"",a,e.sheet,!0);Xe||void 0===i||(o+=i),a=a.next}while(void 0!==a);if(!Xe&&0!==o.length)return o}};var Ze={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qe="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",et="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",tt=/[A-Z]|^ms/g,nt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rt=function(e){return 45===e.charCodeAt(1)},ot=function(e){return null!=e&&"boolean"!=typeof e},at=m((function(e){return rt(e)?e:e.replace(tt,"-$&").toLowerCase()})),it=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(nt,(function(e,t,n){return ht={name:t,styles:n,next:ht},t}))}return 1===Ze[e]||rt(e)||"number"!=typeof t||0===t?t:t+"px"};if("production"!==process.env.NODE_ENV){var st=/(attr|calc|counters?|url)\(/,ct=["normal","none","counter","open-quote","close-quote","no-open-quote","no-close-quote","initial","inherit","unset"],lt=it,ut=/^-ms-/,dt=/-(.)/g,ft={};it=function(e,t){if("content"===e&&("string"!=typeof t||-1===ct.indexOf(t)&&!st.test(t)&&(t.charAt(0)!==t.charAt(t.length-1)||'"'!==t.charAt(0)&&"'"!==t.charAt(0))))throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\""+t+"\"'`");var n=lt(e,t);return""===n||rt(e)||-1===e.indexOf("-")||void 0!==ft[e]||(ft[e]=!0,console.error("Using kebab-case for css properties in objects is not supported. Did you mean "+e.replace(ut,"ms-").replace(dt,(function(e,t){return t.toUpperCase()}))+"?")),n}}function pt(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles){if("production"!==process.env.NODE_ENV&&"NO_COMPONENT_SELECTOR"===n.toString())throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");return n}switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return ht={name:n.name,styles:n.styles,next:ht},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)ht={name:r.name,styles:r.styles,next:ht},r=r.next;var o=n.styles+";";return"production"!==process.env.NODE_ENV&&void 0!==n.map&&(o+=n.map),o}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=pt(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":ot(i)&&(r+=at(a)+":"+it(a,i)+";");else{if("NO_COMPONENT_SELECTOR"===a&&"production"!==process.env.NODE_ENV)throw new Error("Component selectors can only be used in conjunction with @emotion/babel-plugin.");if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=pt(e,t,i);switch(a){case"animation":case"animationName":r+=at(a)+":"+s+";";break;default:"production"!==process.env.NODE_ENV&&"undefined"===a&&console.error(et),r+=a+"{"+s+"}"}}else for(var c=0;c<i.length;c++)ot(i[c])&&(r+=at(a)+":"+it(a,i[c])+";")}}return r}(e,t,n);case"function":if(void 0!==e){var a=ht,i=n(e);return ht=a,pt(e,t,i)}"production"!==process.env.NODE_ENV&&console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");break;case"string":if("production"!==process.env.NODE_ENV){var s=[],c=n.replace(nt,(function(e,t,n){var r="animation"+s.length;return s.push("const "+r+" = keyframes`"+n.replace(/^@keyframes animation-\w+/,"")+"`"),"${"+r+"}"}));s.length&&console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n"+[].concat(s,["`"+c+"`"]).join("\n")+"\n\nYou should wrap it with `css` like this:\n\ncss`"+c+"`")}}if(null==t)return n;var l=t[n];return void 0!==l?l:n}var mt,ht,gt=/label:\s*([^\s;\n{]+)\s*;/g;"production"!==process.env.NODE_ENV&&(mt=/\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);var yt=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";ht=void 0;var a,i=e[0];null==i||void 0===i.raw?(r=!1,o+=pt(n,t,i)):("production"!==process.env.NODE_ENV&&void 0===i[0]&&console.error(Qe),o+=i[0]);for(var s=1;s<e.length;s++)o+=pt(n,t,e[s]),r&&("production"!==process.env.NODE_ENV&&void 0===i[s]&&console.error(Qe),o+=i[s]);"production"!==process.env.NODE_ENV&&(o=o.replace(mt,(function(e){return a=e,""}))),gt.lastIndex=0;for(var c,l="";null!==(c=gt.exec(o));)l+="-"+c[1];var u=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+l;return"production"!==process.env.NODE_ENV?{name:u,styles:o,map:a,next:ht,toString:function(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}}:{name:u,styles:o,next:ht}},vt="undefined"!=typeof document,bt=Object.prototype.hasOwnProperty,Et=r("undefined"!=typeof HTMLElement?ke({key:"css"}):null),wt=(Et.Provider,function(e){return t((function(t,r){var o=n(Et);return e(t,o,r)}))});vt||(wt=function(e){return function(t){var r=n(Et);return null===r?(r=ke({key:"css"}),o(Et.Provider,{value:r},e(t,r))):e(t,r)}});var xt=r({}),kt=wt((function(e,t,r){var i=e.css;"string"==typeof i&&void 0!==t.registered[i]&&(i=t.registered[i]);var s=e.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,c=[i],l="";"string"==typeof e.className?l=Je(t.registered,c,e.className):null!=e.className&&(l=e.className+" ");var u=yt(c,void 0,"function"==typeof i||Array.isArray(i)?n(xt):void 0);if("production"!==process.env.NODE_ENV&&-1===u.name.indexOf("-")){var d=e.__EMOTION_LABEL_PLEASE_DO_NOT_USE__;d&&(u=yt([u,"label:"+d+";"]))}var f=Ke(t,u,"string"==typeof s);l+=t.key+"-"+u.name;var p={};for(var m in e)!bt.call(e,m)||"css"===m||"__EMOTION_TYPE_PLEASE_DO_NOT_USE__"===m||"production"!==process.env.NODE_ENV&&"__EMOTION_LABEL_PLEASE_DO_NOT_USE__"===m||(p[m]=e[m]);p.ref=r,p.className=l;var h=o(s,p);if(!vt&&void 0!==f){for(var g,y=u.name,v=u.next;void 0!==v;)y+=" "+v.name,v=v.next;return o(a,null,o("style",((g={})["data-emotion"]=t.key+" "+y,g.dangerouslySetInnerHTML={__html:f},g.nonce=t.sheet.nonce,g)),h)}return h}));"production"!==process.env.NODE_ENV&&(kt.displayName="EmotionCssPropInternal");var _t=!1,St=wt((function(e,t){"production"===process.env.NODE_ENV||_t||!e.className&&!e.css||(console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),_t=!0);var r=e.styles,a=yt([r],void 0,"function"==typeof r||Array.isArray(r)?n(xt):void 0);if(!vt){for(var c,l=a.name,u=a.styles,d=a.next;void 0!==d;)l+=" "+d.name,u+=d.styles,d=d.next;var f=!0===t.compat,p=t.insert("",{name:l,styles:u},t.sheet,f);return f?null:o("style",((c={})["data-emotion"]=t.key+"-global "+l,c.dangerouslySetInnerHTML={__html:p},c.nonce=t.sheet.nonce,c))}var m=i();return s((function(){var e=t.key+"-global",n=new v({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=document.querySelector('style[data-emotion="'+e+" "+a.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==r&&n.hydrate([r]),m.current=n,function(){n.flush()}}),[t]),s((function(){void 0!==a.next&&Ke(t,a.next,!0);var e=m.current;if(e.tags.length){var n=e.tags[e.tags.length-1].nextElementSibling;e.before=n,e.flush()}t.insert("",a,e,!1)}),[t,a.name]),null}));function Nt(){for(var e=arguments,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=e[r];return yt(n)}"production"!==process.env.NODE_ENV&&(St.displayName="EmotionGlobal");var Ot=function(){var e=Nt.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ct=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var a=t[r];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in"production"!==process.env.NODE_ENV&&void 0!==a.styles&&void 0!==a.name&&console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."),i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o};function $t(e,t,n){var r=[],o=Je(e,r,n);return r.length<2?n:o+t(r)}var At=wt((function(e,t){var r,i="",s="",c=!1,l=function(){var e=arguments;if(c&&"production"!==process.env.NODE_ENV)throw new Error("css can only be used during render");for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=e[o];var a=yt(r,t.registered);if(vt)Ke(t,a,!1);else{var l=Ke(t,a,!1);void 0!==l&&(i+=l)}return vt||(s+=" "+a.name),t.key+"-"+a.name},u={css:l,cx:function(){var e=arguments;if(c&&"production"!==process.env.NODE_ENV)throw new Error("cx can only be used during render");for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=e[o];return $t(t.registered,l,Ct(r))},theme:n(xt)},d=e.children(u);return c=!0,vt||0===i.length?d:o(a,null,o("style",((r={})["data-emotion"]=t.key+" "+s.substring(1),r.dangerouslySetInnerHTML={__html:i},r.nonce=t.sheet.nonce,r)),d)}));if("production"!==process.env.NODE_ENV&&(At.displayName="EmotionClassNames"),"production"!==process.env.NODE_ENV){var Tt="undefined"!=typeof document,Dt="undefined"!=typeof jest;if(Tt&&!Dt){var It=Tt?window:global,Mt="__EMOTION_REACT_"+"11.1.4".split(".")[0]+"__";It[Mt]&&console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."),It[Mt]=!0}}var Pt=g,Lt=function(e){return"theme"!==e},Rt=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?Pt:Lt},jt=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},Vt="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",zt="undefined"!=typeof document,Ft=function e(t,r){if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");var i,s,c=t.__emotion_real===t,l=c&&t.__emotion_base||t;void 0!==r&&(i=r.label,s=r.target);var u=jt(t,r,c),d=u||Rt(l),f=!d("as");return function(){var p=arguments,m=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==i&&m.push("label:"+i+";"),null==p[0]||void 0===p[0].raw)m.push.apply(m,p);else{"production"!==process.env.NODE_ENV&&void 0===p[0][0]&&console.error(Vt),m.push(p[0][0]);for(var h=p.length,g=1;g<h;g++)"production"!==process.env.NODE_ENV&&void 0===p[0][g]&&console.error(Vt),m.push(p[g],p[0][g])}var v=wt((function(e,t,r){var i=f&&e.as||l,c="",p=[],h=e;if(null==e.theme){for(var g in h={},e)h[g]=e[g];h.theme=n(xt)}"string"==typeof e.className?c=Je(t.registered,p,e.className):null!=e.className&&(c=e.className+" ");var y=yt(m.concat(p),t.registered,h),v=Ke(t,y,"string"==typeof i);c+=t.key+"-"+y.name,void 0!==s&&(c+=" "+s);var b=f&&void 0===u?Rt(i):d,E={};for(var w in e)f&&"as"===w||b(w)&&(E[w]=e[w]);E.className=c,E.ref=r;var x=o(i,E);if(!zt&&void 0!==v){for(var k,_=y.name,S=y.next;void 0!==S;)_+=" "+S.name,S=S.next;return o(a,null,o("style",((k={})["data-emotion"]=t.key+" "+_,k.dangerouslySetInnerHTML={__html:v},k.nonce=t.sheet.nonce,k)),x)}return x}));return v.displayName=void 0!==i?i:"Styled("+("string"==typeof l?l:l.displayName||l.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=l,v.__emotion_styles=m,v.__emotion_forwardProp=u,Object.defineProperty(v,"toString",{value:function(){return void 0===s&&"production"!==process.env.NODE_ENV?"NO_COMPONENT_SELECTOR":"."+s}}),v.withComponent=function(t,n){return e(t,y({},r,{},n,{shouldForwardProp:jt(v,n,!0)})).apply(void 0,m)},v}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ft[e]=Ft(e)}));var qt=Ft.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 600px;
`,Ut=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"20 6 9 17 4 12"}))},Yt=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))},Ht=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"3 6 5 6 21 6"}),e.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))},Bt=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))},Wt=Ft.div`
  background: #fff;
  border-radius: 4px;
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
  left: 50%;
  margin-top: 1rem;
  position: absolute;
  top: calc(100%);
  transform: translateX(-50%);
  padding: 0.5rem;
  width: 100%;
`,Gt=Ft.ul`
  display: ${function(e){return e.mode===f.INLINE?"flex":"column"}};
  list-style: none;
  margin-top: 2rem;
  margin: 0;
  padding: 0;
  width: 100%;
  
  overflow-y: auto;
  max-height: 350px;
  min-height: 100px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;        /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #494949;    /* color of the scroll thumb */
    border-radius: 10px;       /* roundness of the scroll thumb */
  }
`,Xt=Ft.li`
  align-self: flex-start;
  background: ${function(e){return e.selected?"#f5f5f5":""}};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  filter: ${function(e){return e.disable?"opacity(0.4) grayscale(90%)":""}};
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  pointer-events: ${function(e){return e.disable?"none":""}};
  text-align: ${function(e){return e.mode===f.LIST_MODE?"left":"center"}};
  user-select: none;
  ${function(e){return e.mode===f.LIST_MODE?"width: 98%":""}};
  &:hover {
    background: rgba(248,222,126,1.0);
  }
`,Jt=Ft.span`
  font-size: 0.8rem;
`,Kt=Ft.span`
  border-radius: 50%;
  height: 1rem;
  margin-left: auto;
  margin-right: 0.5rem;
  width: 1rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Zt=Ft.button`
  align-items: center;
  background: #494949;
  border: 0;
  color: rgba(248,222,126,1.0);
  display: flex;
  height: 1.5rem;
  padding: 0;
  width: 1.5rem;
  margin-left: auto;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`,Qt=Ft.header`
  display: flex;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
`,en=Ft.span`
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`,tn=function(t){var n=t.items,r=t.mode,o=t.exclude,a=t.onSelection,i=t.onDelete,s=t.onCloseSuggestion,d=t.disableInput,f=c(n.map((function(e){return{value:e,selected:!1}}))),p=f[0],m=f[1];l((function(){o&&m(p.map((function(e){return Object.assign({},e,{selected:o.indexOf(e.value)>-1})})))}),[null==o?void 0:o.length]);var h=u((function(){return`${p.filter((function(e){return e.selected})).length} out of ${p.length} selected`}),[JSON.stringify(p)]);return p.length?e.createElement(Wt,null,e.createElement(Qt,null,e.createElement(en,null,h),e.createElement(Zt,{onClick:s},e.createElement(Yt,null))),e.createElement(Gt,{mode:r},p.map((function(t,n){return e.createElement(Xt,{key:n,mode:r,onClick:function(){t.selected?i(t.value):a(t.value)},disable:!t.selected&&d,selected:t.selected},e.createElement(Jt,{style:{paddingLeft:"1rem"}},t.value),t.selected&&e.createElement(Kt,null,e.createElement(Ut,null)))})))):null},nn=Ft.nav`
  padding: 0.2rem 0;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`,rn=Ft.ul`
  align-items: center;
  display: flex;
  margin: 0;
  margin-left: auto;
  padding: 0;
  width: 30%;
  justify-content: flex-end;
`,on=(Ft.li``,Ft.button`
  background: none;
  border: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${function(e){if(e.disable)return"\n        filter: opacity(0.5);\n        pointer-events: none;\n      "}}

  svg {
    width: 100%;
    height: 100%;
  }
`),an=Ft.span`
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 500;
  max-width: 65%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,sn=e.memo((function(t){var n=t.message,r=t.onClear,o=t.onShowSuggestions,a=t.disableTrash;return e.createElement(nn,null,e.createElement(an,null,n),e.createElement(rn,null,e.createElement(on,{onClick:r,disable:a?1:0},e.createElement(Ht,null)),e.createElement(on,{onClick:o},e.createElement(Bt,null))))}),(function(e,t){return e.message===t.message&&e.disableTrash===t.disableTrash})),cn=Ft.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  outline: 0;
  padding-left: 0.2rem;
`,ln=Ot`
  from, to {
    background: #000;
  }
  50% {
    background: transparent;
  }
`,un=Ft.span`
  background: ${function(e){return e.selectAll?"#ccc":"transparent"}};
  color: ${function(e){return e.selectAll?"#000":""}};
  user-select: none;
  align-items: center;
  display: flex;
  min-width: 5px;
  font-size: 0.85rem;
  order: 1;
  min-width: 4px;
  padding: 0.2rem;
`,dn=Ft.span`
  animation: ${ln};
  align-items: center;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
  display: flex;
  order: ${function(e){return"front"===e.position?1:2}};
  visibility: ${function(e){return e.visible?"visibility":"hidden"}};
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  justify-content: flex-start;
  width: 1px;
  height: 18px;
  margin-left: 1px;
`,fn=Ft.span`
  order: ${function(e){return"front"===e.position?2:1}};
`,pn=Ft.span`
  align-items: center;
  display: flex;
`,mn=function(t){var n=t.hasFocus,r=t.cursorSize,o=t.selectAll,a=t.order;return e.createElement(dn,{visible:n?1:0,size:r,selectAll:o?1:0,style:{order:a}})},hn=Ft.div`
  order: 2;

  &:hover {
    cursor: text;
  }
`,gn=Ft.span`
  font-style: italic;
  font-size: 0.85rem;
  opacity: 0.65;
`,yn=function(t){return e.createElement(hn,{onClick:t.onClick,onBlur:t.onBlr},e.createElement(gn,null,t.value),t.children)},vn=e.forwardRef((function(t,n){var r=t.value,o=t.onSaveEdit,a=t.cursorSize;void 0===a&&(a="SMALL");var s=t.onEditStatusChanged,f=t.placeholder;void 0===f&&(f="Enter a value...");var p=t.mode,m=t.editable;void 0===m&&(m=!1);var h=t.maxLength;void 0===h&&(h=20);var g=c(r),y=g[0],v=g[1],b=c(!1),E=b[0],w=b[1],x=c(),k=x[0],_=x[1],S=d((function(){!k&&m&&_(!0)}),[k]),N=d((function(){_(!1)}),[E,y]),O=c(r.length-1),C=O[0],$=O[1],A=i(!0),T=i(!1),D=d((function(e){var t=e.key,n=y.length;if(e.ctrlKey&&"a"===t)w(!0);else if(1===t.length&&n<h){E&&(v(""),E&&w(!1));var r=" "===t?String.fromCharCode(160):t;A.current?v((function(e){return`${e}${r}`})):(v((function(e){var t=[].concat(e);return t.splice(C+1,0,r),t.join("")})),$(C+1))}else switch(t){case"Enter":y&&(o&&o(y.trim()),s(!1),"INPUT"===p&&v(""));break;case"Escape":_(!1),E&&w(!1),s(!1);break;case"Backspace":E?v(""):(v((function(e){return[].concat(e).filter((function(e,t){return t!==C})).join("")})),C>=0&&$(C-1));break;case"Home":case"End":$("Home"===t?-1:n-1),A.current="Home"===t,T.current="Home"===t,E&&w(!1);break;case"ArrowLeft":case"ArrowRight":"ArrowLeft"===t&&C>=0?$(C-1):"ArrowRight"===t&&C<n-1&&$(C+1),C>0&&C<n?(T.current=!1,A.current=!1):(T.current=!0,A.current=!1),E&&w(!1);break;case"Delete":E?v(""):n&&C<n&&v((function(e){return[].concat(e).filter((function(e,t){return t!==C+1})).join("")}))}}),[y,k,E,C]);l((function(){null!=k&&(k?s(!0):(s(!1),w(!1),$(y.length-1)))}),[k]),l((function(){y.length?A.current&&$(y.length-1):(w(!1),$(-1))}),[y]);var I=u((function(){return C<0?"front":(y.length,"back")}),[C,y]),M=u((function(){return C<0||k?e.createElement(mn,{hasFocus:k,selectAll:E,cursorSize:a,order:0}):null}),[k,E,C,y]);return e.createElement(cn,{onBlur:N,onKeyDown:D,tabIndex:0,onFocus:S,ref:n},"INPUT"===p&&!y.length&&e.createElement(yn,{value:f,onClick:S,onBlr:N}),e.createElement(un,{selectAll:E},C<0&&M,[].concat(y).map((function(t,n){return e.createElement(pn,{key:n},e.createElement(fn,{position:I},t),n===C&&e.createElement(mn,{hasFocus:k,selectAll:E,cursorSize:a,order:n+1}))}))))})),bn=Ft.div`
  align-items: center;
  display: flex;
`,En=Ft.li`
  align-items: center;
  background: ${function(e){return e.hasFocus?"#fff":"rgba(248,222,126,1.0)"}};
  border-radius: 4px;
  border: ${function(e){return e.hasFocus?"1px solid #494949":"1px solid transparent"}};
  display: flex;
  font-size: 1rem;
  margin: 0.25rem 0.25rem;
  outline: 0;
`,wn=Ft.span`
  align-items: center;
  background: #494949;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 1rem;
  justify-content: center;
  margin-left: auto;
  margin-right: 0.25rem;
  width: 1rem;

  svg {
    width: 100%;
    height: 100%;
  }
`,xn=Ot`
  from, to {
    color: transparent;
  }
  50% {
    color: black;
  }
`,kn=(Ft.span`
  background: ${function(e){return e.selectAll?"blue":""}};
  color: ${function(e){return e.selectAll?"#fff":""}};
  user-select: none;
`,Ft.span`
  animation: ${xn};
  animation-duration: 1.25s;
  animation-iteration-count: infinite;
  animation-timing-function: step-end;
  display: block;
  visibility: ${function(e){return e.visible?"visibility":"hidden"}};
`,function(t){var n=t.name,r=t.id,o=t.onDelete,a=t.readOnly,s=(t.onDragEnded,t.onDragStarted,t.hide,t.onSaveEdit),l=d((function(e){r&&s&&s(r,e)}),[]),u=c(!1),f=u[0],p=u[1],m=d((function(e){p(e),e?h.current&&h.current.focus():h.current&&h.current.blur()}),[]),h=i(null);return e.createElement(En,{tabIndex:0,hasFocus:f?1:0},e.createElement(bn,null,e.createElement(vn,{value:n,onSaveEdit:l,onEditStatusChanged:m,ref:h,mode:"EDIT",editable:!a})),!a&&e.createElement(wn,{onClick:function(){return r&&o&&o(r)},tabIndex:0},e.createElement(Yt,null)))}),_n=Ft.ul`
  background: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 1rem 1rem 0.5rem 1rem;
  position: relative;
  transition: height 0.3s ease-out;
  user-select: none;
  width: 450px;
`,Sn=Ft.div`
  align-self: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`,Nn=(Ft.input`
  border: 0;
  border-radius: 0;
  outline: 0;
  font-size: 1rem;
  padding: 0.25rem;
  background: transparent;
  border: 1px solid red;
`,function(t){var n=t.onInput,r=t.inputRef,o=t.onStatusChange;return e.createElement(Sn,null,e.createElement(vn,{value:"",onSaveEdit:function(e){n(e)},onEditStatusChanged:o,showCursor:!0,ref:r,mode:"INPUT",editable:!0}))}),On=function(t){var n=t.disableInput,r=t.inputRef,o=t.items,a=t.onClearTags,i=t.onDelete,s=t.onDragEnded,c=t.onDragStarted,l=t.onInput,u=t.onSaveEdit,d=t.onToggleSuggestions,f=t.readOnly,p=t.validationMessage,m=t.onInputStatusChanged;return e.createElement(_n,null,o.map((function(t){return e.createElement(kn,Object.assign({},t,{key:t.id,onDelete:i,onDragEnded:s,onDragStarted:c,onSaveEdit:u}))})),!n&&e.createElement(Nn,{onInput:l,inputRef:r,onStatusChange:m}),!f&&e.createElement(sn,{onShowSuggestions:d,message:p,onClear:a,disableTrash:!o.length}))},Cn=function(t){var n=t.items,r=t.maxTags;void 0===r&&(r=5);var o=t.allowDuplicates;void 0===o&&(o=!1);var a=t.allowParsing;void 0===a&&(a={delimiter:","});var s=t.readOnly;void 0===s&&(s=!1);var p=t.suggestions;void 0===p&&(p=[]);var m=t.suggestionMode;void 0===m&&(m=f.LIST_MODE);var h=t.placeholder;void 0===h&&(h="Choose an option ...");var g=c([]),y=g[0],v=g[1],b=c(""),E=b[0],w=b[1],x=c([]),k=x[0],_=x[1],S=c(!1),N=S[0],O=S[1],C=c(h),$=C[0],A=C[1],T=i(null),D=u((function(){return y.length===r}),[y.length]),I=u((function(){return!o&&y.some((function(e){return e.name===E}))}),[E,y.length]),M=u((function(){return D||s}),[D,s]),P=u((function(){return!D&&!I}),[D,I]),L=d((function(e){return w(e)}),[]),R=d((function(e){var t=y.find((function(t){return t.id===e}));v((function(t){return t.filter((function(t){return t.id!==e}))})),t&&_((function(e){return e.filter((function(e){return e!==t.name}))})),A(h),T.current&&T.current.focus()}),[y.length]),j=d((function(){return O(!N)}),[N]),V=u((function(){return N&&!s}),[N,s]),z=d((function(){v([]),_([]),A(h),T.current&&T.current.focus()}),[]),F=d((function(e,t){var n=y.find((function(t){return t.id===e}));p.indexOf(t)>-1&&k.every((function(e){return e!==t}))&&_((function(e){return e.concat(t)})),n&&p.some((function(e){return e===n.name}))&&k.some((function(e){return e===n.name}))&&_((function(e){return e.filter((function(e){return e!==n.name}))})),v((function(n){return n.map((function(n){return n.id===e?Object.assign({},n,{name:t,value:t}):n}))})),T.current&&T.current.focus()}),[k]),q=d((function(e){_((function(t){return null==t?void 0:t.concat(e)})),w(e)}),[]),U=d((function(e){T.current&&e&&T.current.focus()}),[]);return l((function(){D?A("You have reached the maximum tags allowed."):I&&A("You already have that tag.")}),[D,I]),l((function(){if(P&&E){var e=E.split(a.delimiter).slice(0,Math.max(0,r-y.length)).map((function(e){return{name:e,value:e,id:Math.random().toString(16).slice(2),order:y.length+1}}));v((function(t){return t.concat(e)})),A(""),p.some((function(e){return e===E}))&&_((function(e){return e.concat(E)}))}E&&w("")}),[E]),l((function(){var e;e=n.map((function(e,t){return Object.assign({},e,{id:Math.random().toString(16).slice(2),readOnly:s,order:t})})).slice(0,r),v(e),_(n.map((function(e){return e.name})))}),[]),e.createElement(qt,null,e.createElement(On,{disableInput:M,inputRef:T,items:y,onClearTags:z,onDelete:R,onInput:L,onSaveEdit:F,onToggleSuggestions:j,readOnly:s,validationMessage:$,onInputStatusChanged:U}),V&&e.createElement(tn,{disableInput:M,exclude:k,items:p,mode:m,onCloseSuggestion:j,onDelete:function(e){var t=y.find((function(t){return t.name===e}));null!=t&&t.id&&R(t.id)},onSelection:q}))};export{Cn as ReactTagz};
