/* Cure.js (v0.0.5) (learn@algorithmiv.com)
 * Author: Adam Smith (adamsmith@algorithmiv.com)
 * Copyright (c) 2015 Adam A Smith (github.com/imaginate)
 * The Apache License (algorithmiv.com/cure/license)
 *
 * 3RD PARTY SCRIPTS USED IN Cure.js:
 * JSON3 (v3.3.2) (bestiejs.github.io/json3)
 * Copyright (c) 2012-2015 Kit Cambridge, Benjamin Tan
 * MIT License (kit.mit-license.org) */
(function(q,y){function r(a,g){return"object"===a||!g&&"function"===a||null}function a(a,g){a&&(g&&a.nodeType||!g&&!a.Object)&&(a=null);return a}var g=r(typeof g)&&a(g,!0),e=r(typeof e)&&a(e,!0),c=r(typeof c)&&a(c);q=function(a,g,e,c){return g||e||c||a}(q,g&&e&&r(typeof global,!0)&&a(global),c&&q&&c===q.window?null:c,r(typeof self)&&a(self));y.call(q,!!c)})(this,function(q,y){(function(){function a(c,
h){function n(a,w){try{a()}catch(d){w&&w()}}function k(a){if(null!=k[a])return k[a];var w;if("bug-string-char-index"==a)w="a"!="a"[0];else if("json"==a)w=k("json-stringify")&&k("date-serialization")&&k("json-parse");else if("date-serialization"==a){if(w=k("json-stringify")&&x){var d=h.stringify;n(function(){w='"-271821-04-20T00:00:00.000Z"'==d(new r(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==d(new r(864E13))&&'"-000001-01-01T00:00:00.000Z"'==d(new r(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==
d(new r(-1))})}}else{var b;if("json-stringify"==a){var d=h.stringify,p="function"==typeof d;p&&((b=function(){return 1}).toJSON=b,n(function(){p="0"===d(0)&&"0"===d(new q)&&'""'==d(new t)&&d(u)===v&&d(v)===v&&d()===v&&"1"===d(b)&&"[1]"==d([b])&&"[null]"==d([v])&&"null"==d(null)&&"[null,null,null]"==d([v,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==d({a:[b,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===d(null,b)&&"[\n 1,\n 2\n]"==d([1,2],null,1)},function(){p=!1}));w=p}if("json-parse"==a){var c=
h.parse,f;"function"==typeof c&&n(function(){0===c("0")&&!c(!1)&&(b=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'),f=5==b.a.length&&1===b.a[0])&&(n(function(){f=!c('"\t"')}),f&&n(function(){f=1!==c("01")}),f&&n(function(){f=1!==c("1.")}))},function(){f=!1});w=f}}return k[a]=!!w}c||(c=e.Object());h||(h=e.Object());var q=c.Number||e.Number,t=c.String||e.String,B=c.Object||e.Object,r=c.Date||e.Date,y=c.SyntaxError||e.SyntaxError,Q=c.TypeError||e.TypeError,R=c.Math||e.Math,F=c.JSON||e.JSON;"object"==
typeof F&&F&&(h.stringify=F.stringify,h.parse=F.parse);var B=B.prototype,u=B.toString,G=B.hasOwnProperty,v,x=new r(-0xc782b5b800cec);n(function(){x=-109252==x.getUTCFullYear()&&0===x.getUTCMonth()&&1===x.getUTCDate()&&10==x.getUTCHours()&&37==x.getUTCMinutes()&&6==x.getUTCSeconds()&&708==x.getUTCMilliseconds()});k["bug-string-char-index"]=k["date-serialization"]=k.json=k["json-stringify"]=k["json-parse"]=null;if(!k("json")){var I=k("bug-string-char-index"),E=function(a,b){var d=0,c,p,e;(c=function(){this.valueOf=
0}).prototype.valueOf=0;p=new c;for(e in p)G.call(p,e)&&d++;c=p=null;d?E=function(a,d){var D="[object Function]"==u.call(a),b,c;for(b in a)D&&"prototype"==b||!G.call(a,b)||(c="constructor"===b)||d(b);(c||G.call(a,b="constructor"))&&d(b)}:(p="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),E=function(a,d){var D="[object Function]"==u.call(a),b,c=!D&&"function"!=typeof a.constructor&&g[typeof a.hasOwnProperty]&&a.hasOwnProperty||G;for(b in a)D&&
"prototype"==b||!c.call(a,b)||d(b);for(D=p.length;b=p[--D];c.call(a,b)&&d(b));});return E(a,b)};if(!k("json-stringify")||!k(" date-serialization")){var S={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},A=function(a,b){return("000000"+(b||0)).slice(-a)},T=function(a){a=a.charCodeAt(0);var b=S[a];return b?b:"\\u00"+A(2,a.toString(16))},J=/[\x00-\x1f\x22\x5c]/g,N=function(a){J.lastIndex=0;return'"'+(J.test(a)?a.replace(J,T):a)+'"'},K=function(a){var b,d,c,p,g,f,e,n,h;if(x)b=function(a){d=
a.getUTCFullYear();c=a.getUTCMonth();p=a.getUTCDate();f=a.getUTCHours();e=a.getUTCMinutes();n=a.getUTCSeconds();h=a.getUTCMilliseconds()};else{var z=R.floor,m=[0,31,59,90,120,151,181,212,243,273,304,334],k=function(a,d){return m[d]+365*(a-1970)+z((a-1969+(d=+(1<d)))/4)-z((a-1901+d)/100)+z((a-1601+d)/400)};b=function(a){p=z(a/864E5);for(d=z(p/365.2425)+1970-1;k(d+1,0)<=p;d++);for(c=z((p-k(d,0))/30.42);k(d,c+1)<=p;c++);p=1+p-k(d,c);g=(a%864E5+864E5)%864E5;f=z(g/36E5)%24;e=z(g/6E4)%60;n=z(g/1E3)%60;
h=g%1E3}}K=function(a){a>-1/0&&a<1/0?(b(a),a=(0>=d||1E4<=d?(0>d?"-":"+")+A(6,0>d?-d:d):A(4,d))+"-"+A(2,c+1)+"-"+A(2,p)+"T"+A(2,f)+":"+A(2,e)+":"+A(2,n)+"."+A(3,h)+"Z",d=c=p=f=e=n=h=null):a=null;return a};return K(a)},L=function(a,b,d,c,g,e,f){var l,h,k,m,q,t;n(function(){l=b[a]});"object"==typeof l&&l&&(l.getUTCFullYear&&"[object Date]"==u.call(l)&&l.toJSON===r.prototype.toJSON?l=K(l):"function"==typeof l.toJSON&&(l=l.toJSON(a)));d&&(l=d.call(b,a,l));if(l==v)return l===v?l:"null";h=typeof l;"object"==
h&&(k=u.call(l));switch(k||h){case "boolean":case "[object Boolean]":return""+l;case "number":case "[object Number]":return l>-1/0&&l<1/0?""+l:"null";case "string":case "[object String]":return N(""+l)}if("object"==typeof l){for(h=f.length;h--;)if(f[h]===l)throw Q();f.push(l);m=[];t=e;e+=g;if("[object Array]"==k){q=0;for(h=l.length;q<h;q++)k=L(q,l,d,c,g,e,f),m.push(k===v?"null":k);h=m.length?g?"[\n"+e+m.join(",\n"+e)+"\n"+t+"]":"["+m.join(",")+"]":"[]"}else E(c||l,function(a){var b=L(a,l,d,c,g,e,
f);b!==v&&m.push(N(a)+":"+(g?" ":"")+b)}),h=m.length?g?"{\n"+e+m.join(",\n"+e)+"\n"+t+"}":"{"+m.join(",")+"}":"{}";f.pop();return h}};h.stringify=function(a,b,d){var c,e,h,f;if(g[typeof b]&&b)if(f=u.call(b),"[object Function]"==f)e=b;else if("[object Array]"==f){h={};for(var l=0,m=b.length,k;l<m;k=b[l++],(f=u.call(k),"[object String]"==f||"[object Number]"==f)&&(h[k]=1));}if(d)if(f=u.call(d),"[object Number]"==f){if(0<(d-=d%1))for(c="",10<d&&(d=10);c.length<d;c+=" ");}else"[object String]"==f&&(c=
10>=d.length?d:d.slice(0,10));return L("",(k={},k[""]=a,k),e,h,c,"",[])}}if(!k("json-parse")){var U=t.fromCharCode,V={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,H,m=function(){b=H=null;throw y();},C=function(){for(var a=H,c=a.length,d,g,e,h,f;b<c;)switch(f=a.charCodeAt(b),f){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return d=I?a.charAt(b):a[b],b++,d;case 34:d="@";for(b++;b<c;)if(f=a.charCodeAt(b),32>f)m();else if(92==f)switch(f=
a.charCodeAt(++b),f){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:d+=V[f];b++;break;case 117:g=++b;for(e=b+4;b<e;b++)f=a.charCodeAt(b),48<=f&&57>=f||97<=f&&102>=f||65<=f&&70>=f||m();d+=U("0x"+a.slice(g,b));break;default:m()}else{if(34==f)break;f=a.charCodeAt(b);for(g=b;32<=f&&92!=f&&34!=f;)f=a.charCodeAt(++b);d+=a.slice(g,b)}if(34==a.charCodeAt(b))return b++,d;m();default:g=b;45==f&&(h=!0,f=a.charCodeAt(++b));if(48<=f&&57>=f){for(48==f&&(f=a.charCodeAt(b+1),48<=f&&57>=f)&&m();b<
c&&(f=a.charCodeAt(b),48<=f&&57>=f);b++);if(46==a.charCodeAt(b)){for(e=++b;e<c&&(f=a.charCodeAt(e),48<=f&&57>=f);e++);e==b&&m();b=e}f=a.charCodeAt(b);if(101==f||69==f){f=a.charCodeAt(++b);43!=f&&45!=f||b++;for(e=b;e<c&&(f=a.charCodeAt(e),48<=f&&57>=f);e++);e==b&&m();b=e}return+a.slice(g,b)}h&&m();d=a.slice(b,b+4);if("true"==d)return b+=4,!0;if("fals"==d&&101==a.charCodeAt(b+4))return b+=5,!1;if("null"==d)return b+=4,null;m()}return"$"},M=function(a){var b,d;"$"==a&&m();if("string"==typeof a){if("@"==
(I?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];;){a=C();if("]"==a)break;d?","==a?(a=C(),"]"==a&&m()):m():d=!0;","==a&&m();b.push(M(a))}return b}if("{"==a){for(b={};;){a=C();if("}"==a)break;d?","==a?(a=C(),"}"==a&&m()):m():d=!0;","!=a&&"string"==typeof a&&"@"==(I?a.charAt(0):a[0])&&":"==C()||m();b[a.slice(1)]=M(C())}return b}m()}return a},P=function(a,b,d){d=O(a,b,d);d===v?delete a[b]:a[b]=d},O=function(a,b,d){var c=a[b],e;if("object"==typeof c&&c)if("[object Array]"==u.call(c))for(e=c.length;e--;P(c,
e,d));else E(c,function(a){P(c,a,d)});return d.call(a,b,c)};h.parse=function(a,c){var d,e;b=0;H=""+a;d=M(C());"$"!=C()&&m();b=H=null;return c&&"[object Function]"==u.call(c)?O((e={},e[""]=d,e),"",c):d}}}h.runInContext=a;return h}var g={"function":!0,object:!0},e=g[typeof window]&&window||this,c=g[typeof exports]&&exports&&!exports.nodeType&&exports&&g[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!c||c.global!==c&&c.window!==c&&c.self!==c||(e=c);var n=e.JSON,q=e.JSON3,
t=!1,B=a(e,e.JSON3={noConflict:function(){t||(t=!0,e.JSON=n,e.JSON3=q,n=q=null);return B}});e.JSON={parse:B.parse,stringify:B.stringify}}).call(this);q&&!window.XMLHttpRequest&&(window.XMLHttpRequest=function(){var a;try{a=new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(g){try{a=new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(c){throw Error("Your browser does not support XMLHttpRequest.");}}}return a});Array.isArray||(Array.isArray=function(a){return"[object Array]"===
Object.prototype.toString.call(a)});Array.prototype.indexOf&&function(a){return-1===a.indexOf(8,2)&&-1===a.indexOf(9,-1)}([8,9])||(Array.prototype.indexOf=function(a,g){var e,c,n;if(!Array.isArray(this))throw new TypeError("An Array.prototype.indexOf call was made on a non-array.");"number"!==typeof g&&(g=0);c=this.length;e=-1;if(0!==c&&Math.abs(g)<c)for(0>g&&(c-=g),n=0>g?-1:--g;++n<c;)if(this[n]===a){e=n;break}return e});q?window.console=window.console||{}:this.console=this.console||{};(function(a,
g){a.log||(a.log=g);a.error||(a.error=a.log);a.assert||(a.assert=function(e){var c;if(!e)return c=1<arguments.length?Array.prototype.slice.call(arguments,1):["A console.assert call failed."],a.error.apply(this,c)});a.clear||(a.clear=g);a.count||(a.count=g);a.debug||(a.debug=a.log);a.dir||(a.dir=a.log);a.dirxml||(a.dirxml=a.log);a.exception||(a.exception=a.error);a.group||(a.group=g);a.groupCollapsed||(a.groupCollapsed=a.group);a.groupEnd||(a.groupEnd=g);a.info||(a.info=a.log);a.markTimeline||(a.markTimeline=
a.timeStamp?a.timeStamp:g);a.profile||(a.profile=g);a.profileEnd||(a.profileEnd=g);a.table||(a.table=g);a.time||(a.time=g);a.timeEnd||(a.timeEnd=g);a.timeline||(a.timeline=g);a.timelineEnd||(a.timelineEnd=g);a.timeStamp||(a.timeStamp=a.markTimeline);a.trace||(a.trace=a.log);a.warn||(a.warn=a.error);(function(e,c,g,q){var t,r,y,h;if(e)if(y=["assert","error","info","log","warn"],h=["clear","dir","profile","profileEnd"],h=y.concat(h),c)for(t=h.length;t--;)r=a[h[t]],a[h[t]]=c.call(r,a);else for(t=y.length;t--;)r=
a[y[t]],g.call(r,a,q.call(arguments))})("object"===typeof a.log,Function.prototype.bind,Function.prototype.call,Array.prototype.slice)})(q?window.console:this.console,function(){});Object.keys||(Object.keys=function(){var a,g;a=!{toString:null}.propertyIsEnumerable("toString");g="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ");return function(e){var c,n;if(!e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("An Object.keys call received an invalid object parameter. Note: It only accepts non-null objects and functions.");
n=[];for(c in e)e.hasOwnProperty(c)&&n.push(c);if(a)for(c=g.length;c--;)e.hasOwnProperty(g[c])&&n.push(g[c]);return n}}());Object.freeze||(Object.freeze=function(a){if(!a||"object"!==typeof a&&"function"!==typeof a)throw new TypeError("An Object.freeze call received an invalid object parameter. Note: It only accepts non-null objects and functions.");return a});try{Object.freeze(function(){})}catch(r){Object.freeze=function(a){return function(g){return"function"===typeof g?g:a(g)}}(Object.freeze)}Object.isFrozen||
(Object.isFrozen=function(a){if(!a||"object"!==typeof a&&"function"!==typeof a)throw new TypeError("An Object.isFrozen call received an invalid object parameter. Note: It only accepts non-null objects and functions.");return!0})});
