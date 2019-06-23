!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){y&&y(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function t(e){var t={},n=void 0;for(n in e)g(h,e,[n])&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),u=function(e){return r(e)};if(u.version="1.0.11",u.removed=[],!o||!o.document||9!==o.document.nodeType)return u.isSupported=!1,u;var h=o.document,y=!1,g=!1,v=o.document,D=o.DocumentFragment,R=o.HTMLTemplateElement,C=o.Node,H=o.NodeFilter,F=o.NamedNodeMap,z=void 0===F?o.NamedNodeMap||o.MozNamedAttrMap:F,I=o.Text,j=o.Comment,P=o.DOMParser,U=o.TrustedTypes;if("function"==typeof R){var W=v.createElement("template");W.content&&W.content.ownerDocument&&(v=W.content.ownerDocument)}var B=N(U,h),G=B?B.createHTML(""):"",q=v,V=q.implementation,Y=q.createNodeIterator,K=q.getElementsByTagName,X=q.createDocumentFragment,$=h.importNode,J={};u.isSupported=V&&void 0!==V.createHTMLDocument&&9!==v.documentMode;var Q=b,Z=T,ee=A,te=x,ne=S,re=M,oe=L,ie=null,ae=e({},[].concat(n(i),n(a),n(l),n(c),n(s))),le=null,ce=e({},[].concat(n(d),n(f),n(p),n(m))),se=null,ue=null,de=!0,fe=!0,pe=!1,me=!1,he=!1,ye=!1,ge=!1,ve=!1,be=!1,Te=!1,Ae=!1,xe=!0,Le=!0,Se=!1,Me={},ke=e({},["audio","head","math","script","style","template","svg","video"]),we=e({},["audio","video","img","source","image"]),Ee=null,Oe=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),_e=null,Ne=v.createElement("form"),De=function(r){_e&&_e===r||(r&&"object"===(void 0===r?"undefined":k(r))||(r={}),ie="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):ae,le="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):ce,Ee="ADD_URI_SAFE_ATTR"in r?e({},r.ADD_URI_SAFE_ATTR):Oe,se="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},ue="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},Me="USE_PROFILES"in r&&r.USE_PROFILES,de=!1!==r.ALLOW_ARIA_ATTR,fe=!1!==r.ALLOW_DATA_ATTR,pe=r.ALLOW_UNKNOWN_PROTOCOLS||!1,me=r.SAFE_FOR_JQUERY||!1,he=r.SAFE_FOR_TEMPLATES||!1,ye=r.WHOLE_DOCUMENT||!1,be=r.RETURN_DOM||!1,Te=r.RETURN_DOM_FRAGMENT||!1,Ae=r.RETURN_DOM_IMPORT||!1,ve=r.FORCE_BODY||!1,xe=!1!==r.SANITIZE_DOM,Le=!1!==r.KEEP_CONTENT,Se=r.IN_PLACE||!1,oe=r.ALLOWED_URI_REGEXP||oe,he&&(fe=!1),Te&&(be=!0),Me&&(ie=e({},[].concat(n(s))),le=[],!0===Me.html&&(e(ie,i),e(le,d)),!0===Me.svg&&(e(ie,a),e(le,f),e(le,m)),!0===Me.svgFilters&&(e(ie,l),e(le,f),e(le,m)),!0===Me.mathMl&&(e(ie,c),e(le,p),e(le,m))),r.ADD_TAGS&&(ie===ae&&(ie=t(ie)),e(ie,r.ADD_TAGS)),r.ADD_ATTR&&(le===ce&&(le=t(le)),e(le,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(Ee,r.ADD_URI_SAFE_ATTR),Le&&(ie["#text"]=!0),ye&&e(ie,["html","head","body"]),ie.table&&e(ie,["tbody"]),O&&O(r),_e=r)},Re=function(e){u.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=G}},Ce=function(e,t){try{u.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){u.removed.push({attribute:null,from:t})}t.removeAttribute(e)},He=function(t){var n=void 0,r=void 0;if(ve)t="<remove></remove>"+t;else{var o=t.match(/^[\s]+/);(r=o&&o[0])&&(t=t.slice(r.length))}if(y)try{n=(new P).parseFromString(t,"text/html")}catch(e){}if(g&&e(se,["title"]),!n||!n.documentElement){var i=(n=V.createHTMLDocument("")).body;i.parentNode.removeChild(i.parentNode.firstElementChild),i.outerHTML=B?B.createHTML(t):t}return r&&n.body.insertBefore(v.createTextNode(r),n.body.childNodes[0]||null),K.call(n,ye?"html":"body")[0]};u.isSupported&&(function(){try{He('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(y=!0)}catch(e){}}(),function(){try{He("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(g=!0)}catch(e){}}());var Fe=function(e){return Y.call(e.ownerDocument||e,e,H.SHOW_ELEMENT|H.SHOW_COMMENT|H.SHOW_TEXT,function(){return H.FILTER_ACCEPT},!1)},ze=function(e){return!(e instanceof I||e instanceof j)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof z&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Ie=function(e){return"object"===(void 0===C?"undefined":k(C))?e instanceof C:e&&"object"===(void 0===e?"undefined":k(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},je=function(e,t,n){J[e]&&J[e].forEach(function(e){e.call(u,t,n,_e)})},Pe=function(e){var t=void 0;if(je("beforeSanitizeElements",e,null),ze(e))return Re(e),!0;var n=e.nodeName.toLowerCase();if(je("uponSanitizeElement",e,{tagName:n,allowedTags:ie}),!ie[n]||se[n]){if(Le&&!ke[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",B?B.createHTML(r):r)}catch(e){}return Re(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)?(Re(e),!0):"noembed"===n&&e.innerHTML.match(/<\/noembed/i)?(Re(e),!0):(!me||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(u.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),he&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Q," ")).replace(Z," "),e.textContent!==t&&(u.removed.push({element:e.cloneNode()}),e.textContent=t)),je("afterSanitizeElements",e,null),!1)},Ue=function(e,t,n){if(xe&&("id"===t||"name"===t)&&(n in v||n in Ne))return!1;if(fe&&ee.test(t));else if(de&&te.test(t));else{if(!le[t]||ue[t])return!1;if(Ee[t]);else if(oe.test(n.replace(re,"")));else if("src"!==t&&"xlink:href"!==t||"script"===e||0!==n.indexOf("data:")||!we[e]){if(pe&&!ne.test(n.replace(re,"")));else if(n)return!1}else;}return!0},We=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;je("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:le};for(i=a.length;i--;){var c=t=a[i],s=c.name,d=c.namespaceURI;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,je("uponSanitizeAttribute",e,l),n=l.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=w(E,a,[]),Ce("id",e),Ce(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&l.keepAttr&&(le[r]||!ue[r]))continue;"id"===s&&e.setAttribute(s,""),Ce(s,e)}if(l.keepAttr){he&&(n=(n=n.replace(Q," ")).replace(Z," "));var f=e.nodeName.toLowerCase();if(Ue(f,r,n))try{d?e.setAttributeNS(d,s,n):e.setAttribute(s,n),u.removed.pop()}catch(e){}}}je("afterSanitizeAttributes",e,null)}},Be=function e(t){var n=void 0,r=Fe(t);for(je("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)je("uponSanitizeShadowNode",n,null),Pe(n)||(n.content instanceof D&&e(n.content),We(n));je("afterSanitizeShadowDOM",t,null)};return u.sanitize=function(e,t){var n=void 0,r=void 0,i=void 0,a=void 0,l=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ie(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!u.isSupported){if("object"===k(o.toStaticHTML)||"function"==typeof o.toStaticHTML){if("string"==typeof e)return o.toStaticHTML(e);if(Ie(e))return o.toStaticHTML(e.outerHTML)}return e}if(ge||De(t),u.removed=[],Se);else if(e instanceof C)1===(r=(n=He("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!be&&!he&&!ye&&-1===e.indexOf("<"))return B?B.createHTML(e):e;if(!(n=He(e)))return be?null:G}n&&ve&&Re(n.firstChild);for(var c=Fe(Se?e:n);i=c.nextNode();)3===i.nodeType&&i===a||Pe(i)||(i.content instanceof D&&Be(i.content),We(i),a=i);if(a=null,Se)return e;if(be){if(Te)for(l=X.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return Ae&&(l=$.call(h,l,!0)),l}var s=ye?n.outerHTML:n.innerHTML;return he&&(s=(s=s.replace(Q," ")).replace(Z," ")),B?B.createHTML(s):s},u.setConfig=function(e){De(e),ge=!0},u.clearConfig=function(){_e=null,ge=!1},u.isValidAttribute=function(e,t,n){_e||De({});var r=e.toLowerCase(),o=t.toLowerCase();return Ue(r,o,n)},u.addHook=function(e,t){"function"==typeof t&&(J[e]=J[e]||[],J[e].push(t))},u.removeHook=function(e){J[e]&&J[e].pop()},u.removeHooks=function(e){J[e]&&(J[e]=[])},u.removeAllHooks=function(){J={}},u}var o=Object.freeze||function(e){return e},i=o(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),a=o(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),l=o(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),c=o(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),s=o(["#text"]),u=Object.freeze||function(e){return e},d=u(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),f=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),p=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),m=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),h=Object.hasOwnProperty,y=Object.setPrototypeOf,g=("undefined"!=typeof Reflect&&Reflect).apply;g||(g=function(e,t,n){return e.apply(t,n)});var v=Object.seal||function(e){return e},b=v(/\{\{[\s\S]*|[\s\S]*\}\}/gm),T=v(/<%[\s\S]*|[\s\S]*%>/gm),A=v(/^data-[\-\w.\u00B7-\uFFFF]/),x=v(/^aria-[\-\w]+$/),L=v(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),S=v(/^(?:\w+script|data):/i),M=v(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,O=Object.freeze,_=function(){return"undefined"==typeof window?null:window};w||(w=function(e,t,n){return e.apply(t,n)});var N=function(e,t){if("object"!==(void 0===e?"undefined":k(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return r()});
