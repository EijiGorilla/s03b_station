"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[3884],{83884:(r,e,t)=>{t.r(e),t.d(e,{l:()=>l});var n,a,o,i,u=t(54787),c={exports:{}};a=c,o="undefined"!=typeof document?null===(n=document.currentScript)||void 0===n?void 0:n.src:void 0,i=function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var e,t,n=Object.assign({},r),a=new Promise(((r,n)=>{e=r,t=n})),i=!0,u=Object.assign({},n),c="./this.program",s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),o&&(s=o),s=s.startsWith("blob:")?"":s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1),n.print||console.log.bind(console);var l,f,d=n.printErr||console.error.bind(console);Object.assign(n,u),u=null,n.arguments&&n.arguments,n.thisProgram&&(c=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(l=n.wasmBinary);var h,v,m,p,y,g,w,_,b=!1;function A(){var r=f.buffer;n.HEAP8=h=new Int8Array(r),n.HEAP16=m=new Int16Array(r),n.HEAPU8=v=new Uint8Array(r),n.HEAPU16=p=new Uint16Array(r),n.HEAP32=y=new Int32Array(r),n.HEAPU32=g=new Uint32Array(r),n.HEAPF32=w=new Float32Array(r),n.HEAPF64=_=new Float64Array(r)}var T=[],C=[],F=[];function P(r){T.unshift(r)}function W(r){F.unshift(r)}var E=0,S=null;function O(r){var e;null!==(e=n.onAbort)&&void 0!==e&&e.call(n,r),d(r="Aborted("+r+")"),b=!0,r+=". Build with -sASSERTIONS for more info.";var a=new WebAssembly.RuntimeError(r);throw t(a),a}var M,k=r=>r.startsWith("data:application/octet-stream;base64,");function D(r){if(r==M&&l)return new Uint8Array(l);throw"both async and sync fetching of the wasm failed"}function j(r,e,t){return function(r){return!l&&i&&"function"==typeof fetch?fetch(r,{credentials:"same-origin"}).then((e=>{if(!e.ok)throw"failed to load wasm binary file at '".concat(r,"'");return e.arrayBuffer()})).catch((()=>D(r))):Promise.resolve().then((()=>D(r)))}(r).then((r=>WebAssembly.instantiate(r,e))).then(t,(r=>{d("failed to asynchronously prepare wasm: ".concat(r)),O(r)}))}k(M="lclayout.wasm")||(M=function(r){return n.locateFile?n.locateFile(r,s):s+r}(M));var R=r=>{for(;r.length>0;)r.shift()(n)};n.noExitRuntime;class x{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){g[this.ptr+4>>2]=r}get_type(){return g[this.ptr+4>>2]}set_destructor(r){g[this.ptr+8>>2]=r}get_destructor(){return g[this.ptr+8>>2]}set_caught(r){r=r?1:0,h[this.ptr+12]=r}get_caught(){return 0!=h[this.ptr+12]}set_rethrown(r){r=r?1:0,h[this.ptr+13]=r}get_rethrown(){return 0!=h[this.ptr+13]}init(r,e){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(e)}set_adjusted_ptr(r){g[this.ptr+16>>2]=r}get_adjusted_ptr(){return g[this.ptr+16>>2]}get_exception_ptr(){if(Zr(this.get_type()))return g[this.excPtr>>2];var r=this.get_adjusted_ptr();return 0!==r?r:this.excPtr}}var I={},U=r=>{for(;r.length;){var e=r.pop();r.pop()(e)}};function Y(r){return this.fromWireType(g[r>>2])}var H,V,B,z={},N={},q={},G=r=>{throw new H(r)},J=(r,e,t)=>{function n(e){var n=t(e);n.length!==r.length&&G("Mismatched type converter count");for(var a=0;a<r.length;++a)K(r[a],n[a])}r.forEach((function(r){q[r]=e}));var a=new Array(e.length),o=[],i=0;e.forEach(((r,e)=>{N.hasOwnProperty(r)?a[e]=N[r]:(o.push(r),z.hasOwnProperty(r)||(z[r]=[]),z[r].push((()=>{a[e]=N[r],++i===o.length&&n(a)})))})),0===o.length&&n(a)},L=r=>{for(var e="",t=r;v[t];)e+=V[v[t++]];return e},X=r=>{throw new B(r)};function K(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=e.name;if(r||X('type "'.concat(n,'" must have a positive integer typeid pointer')),N.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;X("Cannot register type '".concat(n,"' twice"))}if(N[r]=e,delete q[r],z.hasOwnProperty(r)){var a=z[r];delete z[r],a.forEach((r=>r()))}}(r,e,t)}var Q=8,Z=[],$=[],rr=r=>{r>9&&0==--$[r+1]&&($[r]=void 0,Z.push(r))},er=()=>$.length/2-5-Z.length,tr=r=>(r||X("Cannot use deleted val. handle = "+r),$[r]),nr=r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Z.pop()||$.length;return $[e]=r,$[e+1]=1,e}}},ar={name:"emscripten::val",fromWireType:r=>{var e=tr(r);return rr(r),e},toWireType:(r,e)=>nr(e),argPackAdvance:Q,readValueFromPointer:Y,destructorFunction:null},or=r=>K(r,ar),ir=(r,e,t)=>{if(void 0===r[e].overloadTable){var n=r[e];r[e]=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r[e].overloadTable.hasOwnProperty(a.length)||X("Function '".concat(t,"' called with an invalid number of arguments (").concat(a.length,") - expects one of (").concat(r[e].overloadTable,")!")),r[e].overloadTable[a.length].apply(this,a)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},ur=(r,e,t)=>{n.hasOwnProperty(r)?((void 0===t||void 0!==n[r].overloadTable&&void 0!==n[r].overloadTable[t])&&X("Cannot register public name '".concat(r,"' twice")),ir(n,r,r),n.hasOwnProperty(t)&&X("Cannot register multiple overloads of a function with the same number of arguments (".concat(t,")!")),n[r].overloadTable[t]=e):(n[r]=e,void 0!==t&&(n[r].numArguments=t))},cr=(r,e,t)=>{switch(e){case 1:return t?function(r){return this.fromWireType(h[r])}:function(r){return this.fromWireType(v[r])};case 2:return t?function(r){return this.fromWireType(m[r>>1])}:function(r){return this.fromWireType(p[r>>1])};case 4:return t?function(r){return this.fromWireType(y[r>>2])}:function(r){return this.fromWireType(g[r>>2])};default:throw new TypeError("invalid integer width (".concat(e,"): ").concat(r))}},sr=(r,e)=>Object.defineProperty(e,"name",{value:r}),lr=r=>{var e=Xr(r),t=L(e);return Qr(e),t},fr=(r,e)=>{var t=N[r];return void 0===t&&X("".concat(e," has unknown type ").concat(lr(r))),t},dr=(r,e)=>{switch(e){case 4:return function(r){return this.fromWireType(w[r>>2])};case 8:return function(r){return this.fromWireType(_[r>>3])};default:throw new TypeError("invalid float width (".concat(e,"): ").concat(r))}};var hr,vr,mr,pr=(r,e,t)=>{n.hasOwnProperty(r)||G("Replacing nonexistent public symbol"),void 0!==n[r].overloadTable&&void 0!==t?n[r].overloadTable[t]=e:(n[r]=e,n[r].argCount=t)},yr=[],gr=r=>{var e=yr[r];return e||(r>=yr.length&&(yr.length=r+1),yr[r]=e=hr.get(r)),e},wr=function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return r.includes("j")?((r,e,t)=>(r=r.replace(/p/g,"i"),(0,n["dynCall_"+r])(e,...t)))(r,e,t):gr(e)(...t)},_r=(r,e)=>{var t=(r=L(r)).includes("j")?((r,e)=>function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return wr(r,e,n)})(r,e):gr(e);return"function"!=typeof t&&X("unknown function pointer with signature ".concat(r,": ").concat(e)),t},br=(r,e,t)=>{switch(e){case 1:return t?r=>h[r]:r=>v[r];case 2:return t?r=>m[r>>1]:r=>p[r>>1];case 4:return t?r=>y[r>>2]:r=>g[r>>2];default:throw new TypeError("invalid integer width (".concat(e,"): ").concat(r))}},Ar=(r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),u<=127){if(t>=o)break;e[t++]=u}else if(u<=2047){if(t+1>=o)break;e[t++]=192|u>>6,e[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;e[t++]=224|u>>12,e[t++]=128|u>>6&63,e[t++]=128|63&u}else{if(t+3>=o)break;e[t++]=240|u>>18,e[t++]=128|u>>12&63,e[t++]=128|u>>6&63,e[t++]=128|63&u}}return e[t]=0,t-a},Tr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},Cr="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Fr=(r,e)=>r?((r,e,t)=>{for(var n=e+t,a=e;r[a]&&!(a>=n);)++a;if(a-e>16&&r.buffer&&Cr)return Cr.decode(r.subarray(e,a));for(var o="";e<a;){var i=r[e++];if(128&i){var u=63&r[e++];if(192!=(224&i)){var c=63&r[e++];if((i=224==(240&i)?(15&i)<<12|u<<6|c:(7&i)<<18|u<<12|c<<6|63&r[e++])<65536)o+=String.fromCharCode(i);else{var s=i-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(v,r,e):"",Pr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Wr=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-r>32&&Pr)return Pr.decode(v.subarray(r,t));for(var o="",i=0;!(i>=e/2);++i){var u=m[r+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Er=(r,e,t)=>{var n;if(null!==(n=t)&&void 0!==n||(t=2147483647),t<2)return 0;for(var a=e,o=(t-=2)<2*r.length?t/2:r.length,i=0;i<o;++i){var u=r.charCodeAt(i);m[e>>1]=u,e+=2}return m[e>>1]=0,e-a},Sr=r=>2*r.length,Or=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=y[r+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Mr=(r,e,t)=>{var n;if(null!==(n=t)&&void 0!==n||(t=2147483647),t<4)return 0;for(var a=e,o=a+t-4,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),y[e>>2]=u,(e+=4)+4>o)break}return y[e>>2]=0,e-a},kr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Dr=(r,e,t)=>{var n=[],a=r.toWireType(n,t);return n.length&&(g[e>>2]=nr(n)),a},jr={},Rr=r=>{var e=jr[r];return void 0===e?L(r):e},xr=[],Ir=Reflect.construct;mr=()=>performance.now();var Ur=r=>{var e=(r-f.buffer.byteLength+65535)/65536;try{return f.grow(e),A(),1}catch(o){}},Yr={},Hr=()=>{if(!Hr.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:c||"./this.program"};for(var e in Yr)void 0===Yr[e]?delete r[e]:r[e]=Yr[e];var t=[];for(var e in r)t.push("".concat(e,"=").concat(r[e]));Hr.strings=t}return Hr.strings},Vr=r=>r%4==0&&(r%100!=0||r%400==0),Br=[31,29,31,30,31,30,31,31,30,31,30,31],zr=[31,28,31,30,31,30,31,31,30,31,30,31];var Nr=(r,e)=>{h.set(r,e)},qr=(r,e,t,n)=>{var a=g[n+40>>2],o={tm_sec:y[n>>2],tm_min:y[n+4>>2],tm_hour:y[n+8>>2],tm_mday:y[n+12>>2],tm_mon:y[n+16>>2],tm_year:y[n+20>>2],tm_wday:y[n+24>>2],tm_yday:y[n+28>>2],tm_isdst:y[n+32>>2],tm_gmtoff:y[n+36>>2],tm_zone:a?Fr(a):""},i=Fr(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var c in u)i=i.replace(new RegExp(c,"g"),u[c]);var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(r,e,t){for(var n="number"==typeof r?r.toString():r||"";n.length<e;)n=t[0]+n;return n}function d(r,e){return f(r,e,"0")}function h(r,e){function t(r){return r<0?-1:r>0?1:0}var n;return 0===(n=t(r.getFullYear()-e.getFullYear()))&&0===(n=t(r.getMonth()-e.getMonth()))&&(n=t(r.getDate()-e.getDate())),n}function v(r){switch(r.getDay()){case 0:return new Date(r.getFullYear()-1,11,29);case 1:return r;case 2:return new Date(r.getFullYear(),0,3);case 3:return new Date(r.getFullYear(),0,2);case 4:return new Date(r.getFullYear(),0,1);case 5:return new Date(r.getFullYear()-1,11,31);case 6:return new Date(r.getFullYear()-1,11,30)}}function m(r){var e=((r,e)=>{for(var t=new Date(r.getTime());e>0;){var n=Vr(t.getFullYear()),a=t.getMonth(),o=(n?Br:zr)[a];if(!(e>o-t.getDate()))return t.setDate(t.getDate()+e),t;e-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(r.tm_year+1900,0,1),r.tm_yday),t=new Date(e.getFullYear(),0,4),n=new Date(e.getFullYear()+1,0,4),a=v(t),o=v(n);return h(a,e)<=0?h(o,e)<=0?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var p={"%a":r=>s[r.tm_wday].substring(0,3),"%A":r=>s[r.tm_wday],"%b":r=>l[r.tm_mon].substring(0,3),"%B":r=>l[r.tm_mon],"%C":r=>d((r.tm_year+1900)/100|0,2),"%d":r=>d(r.tm_mday,2),"%e":r=>f(r.tm_mday,2," "),"%g":r=>m(r).toString().substring(2),"%G":m,"%H":r=>d(r.tm_hour,2),"%I":r=>{var e=r.tm_hour;return 0==e?e=12:e>12&&(e-=12),d(e,2)},"%j":r=>d(r.tm_mday+((r,e)=>{for(var t=0,n=0;n<=e;t+=r[n++]);return t})(Vr(r.tm_year+1900)?Br:zr,r.tm_mon-1),3),"%m":r=>d(r.tm_mon+1,2),"%M":r=>d(r.tm_min,2),"%n":()=>"\n","%p":r=>r.tm_hour>=0&&r.tm_hour<12?"AM":"PM","%S":r=>d(r.tm_sec,2),"%t":()=>"\t","%u":r=>r.tm_wday||7,"%U":r=>{var e=r.tm_yday+7-r.tm_wday;return d(Math.floor(e/7),2)},"%V":r=>{var e=Math.floor((r.tm_yday+7-(r.tm_wday+6)%7)/7);if((r.tm_wday+371-r.tm_yday-2)%7<=2&&e++,e){if(53==e){var t=(r.tm_wday+371-r.tm_yday)%7;4==t||3==t&&Vr(r.tm_year)||(e=1)}}else{e=52;var n=(r.tm_wday+7-r.tm_yday-1)%7;(4==n||5==n&&Vr(r.tm_year%400-1))&&e++}return d(e,2)},"%w":r=>r.tm_wday,"%W":r=>{var e=r.tm_yday+7-(r.tm_wday+6)%7;return d(Math.floor(e/7),2)},"%y":r=>(r.tm_year+1900).toString().substring(2),"%Y":r=>r.tm_year+1900,"%z":r=>{var e=r.tm_gmtoff,t=e>=0;return e=(e=Math.abs(e)/60)/60*100+e%60,(t?"+":"-")+String("0000"+e).slice(-4)},"%Z":r=>r.tm_zone,"%%":()=>"%"};for(var c in i=i.replace(/%%/g,"\0\0"),p)i.includes(c)&&(i=i.replace(new RegExp(c,"g"),p[c](o)));var w=function(r,e,t){var n=Tr(r)+1,a=new Array(n);return Ar(r,a,0,a.length),a}(i=i.replace(/\0\0/g,"%"));return w.length>e?0:(Nr(w,r),w.length-1)};H=n.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},(()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);V=r})(),B=n.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},$.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=er,vr=n.UnboundTypeError=((r,e)=>{var t=sr(e,(function(r){this.name=e,this.message=r;var t=new Error(r).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:"".concat(this.name,": ").concat(this.message)},t})(Error,"UnboundTypeError");var Gr,Jr={a:(r,e,t)=>{throw new x(r).init(e,t),r},k:r=>{var e=I[r];delete I[r];var t=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map((r=>r.getterReturnType)).concat(a.map((r=>r.setterArgumentType)));J([r],o,(r=>{var o={};return a.forEach(((e,t)=>{var n=e.fieldName,i=r[t],u=e.getter,c=e.getterContext,s=r[t+a.length],l=e.setter,f=e.setterContext;o[n]={read:r=>i.fromWireType(u(c,r)),write:(r,e)=>{var t=[];l(f,r,s.toWireType(t,e)),U(t)}}})),[{name:e.name,fromWireType:r=>{var e={};for(var t in o)e[t]=o[t].read(r);return n(r),e},toWireType:(r,e)=>{for(var a in o)if(!(a in e))throw new TypeError('Missing field: "'.concat(a,'"'));var i=t();for(a in o)o[a].write(i,e[a]);return null!==r&&r.push(n,i),i},argPackAdvance:Q,readValueFromPointer:Y,destructorFunction:n}]}))},w:(r,e,t,n,a)=>{},E:(r,e,t,n)=>{K(r,{name:e=L(e),fromWireType:function(r){return!!r},toWireType:function(r,e){return e?t:n},argPackAdvance:Q,readValueFromPointer:function(r){return this.fromWireType(v[r])},destructorFunction:null})},u:(r,e,t)=>{r=L(r),J([],[e],(e=>(e=e[0],n[r]=e.fromWireType(t),[])))},v:or,K:(r,e,t,n)=>{function a(){}e=L(e),a.values={},K(r,{name:e,constructor:a,fromWireType:function(r){return this.constructor.values[r]},toWireType:(r,e)=>e.value,argPackAdvance:Q,readValueFromPointer:cr(e,t,n),destructorFunction:null}),ur(e,a)},q:(r,e,t)=>{var n=fr(r,"enum");e=L(e);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:sr("".concat(n.name,"_").concat(e),(function(){}))}});a.values[t]=o,a[e]=o},t:(r,e,t)=>{K(r,{name:e=L(e),fromWireType:r=>r,toWireType:(r,e)=>e,argPackAdvance:Q,readValueFromPointer:dr(e,t),destructorFunction:null})},d:(r,e,t,n,a,o,i)=>{var u=((r,e)=>{for(var t=[],n=0;n<r;n++)t.push(g[e+4*n>>2]);return t})(e,t);r=(r=>{const e=(r=r.trim()).indexOf("(");return-1!==e?r.substr(0,e):r})(r=L(r)),a=_r(n,a),ur(r,(function(){((r,e)=>{var t=[],n={};throw e.forEach((function r(e){n[e]||N[e]||(q[e]?q[e].forEach(r):(t.push(e),n[e]=!0))})),new vr("".concat(r,": ")+t.map(lr).join([", "]))})("Cannot call ".concat(r," due to unbound types"),u)}),e-1),J([],u,(t=>{var n=[t[0],null].concat(t.slice(1));return pr(r,function(r,e,t,n,a,o){var i=e.length;i<2&&X("argTypes array size mismatch! Must at least get return value and 'this' types!");var u=null!==e[1]&&null!==t,c=function(r){for(var e=1;e<r.length;++e)if(null!==r[e]&&void 0===r[e].destructorFunction)return!0;return!1}(e),s="void"!==e[0].name,l=i-2,f=new Array(l),d=[],h=[];return sr(r,(function(){var t;arguments.length!==l&&X("function ".concat(r," called with ").concat(arguments.length," arguments, expected ").concat(l)),h.length=0,d.length=u?2:1,d[0]=a,u&&(t=e[1].toWireType(h,this),d[1]=t);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(h,o<0||arguments.length<=o?void 0:arguments[o]),d.push(f[o]);return function(r){if(c)U(h);else for(var n=u?1:2;n<e.length;n++){var a=1===n?t:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(a)}if(s)return e[0].fromWireType(r)}(n(...d))}))}(r,n,null,a,o),e-1),[]}))},j:(r,e,t,n,a)=>{e=L(e);var o=r=>r;if(0===n){var i=32-8*t;o=r=>r<<i>>>i}var u=e.includes("unsigned");K(r,{name:e,fromWireType:o,toWireType:u?function(r,e){return this.name,e>>>0}:function(r,e){return this.name,e},argPackAdvance:Q,readValueFromPointer:br(e,t,0!==n),destructorFunction:null})},f:(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(r){var e=g[r>>2],t=g[r+4>>2];return new n(h.buffer,t,e)}K(r,{name:t=L(t),fromWireType:a,argPackAdvance:Q,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},L:(r,e)=>{or(r)},s:(r,e)=>{var t="std::string"===(e=L(e));K(r,{name:e,fromWireType(r){var e,n=g[r>>2],a=r+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==v[u]){var c=Fr(o,u-o);void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),o=u+1}}else{var s=new Array(n);for(i=0;i<n;++i)s[i]=String.fromCharCode(v[a+i]);e=s.join("")}return Qr(r),e},toWireType(r,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||X("Cannot pass non-string to std::string"),n=t&&a?Tr(e):e.length;var o=Kr(4+n+1),i=o+4;if(g[o>>2]=n,t&&a)((r,e,t)=>{Ar(r,v,e,t)})(e,i,n+1);else if(a)for(var u=0;u<n;++u){var c=e.charCodeAt(u);c>255&&(Qr(i),X("String has UTF-16 code units that do not fit in 8 bits")),v[i+u]=c}else for(u=0;u<n;++u)v[i+u]=e[u];return null!==r&&r.push(Qr,o),o},argPackAdvance:Q,readValueFromPointer:Y,destructorFunction(r){Qr(r)}})},r:(r,e,t)=>{var n,a,o,i;t=L(t),2===e?(n=Wr,a=Er,i=Sr,o=r=>p[r>>1]):4===e&&(n=Or,a=Mr,i=kr,o=r=>g[r>>2]),K(r,{name:t,fromWireType:r=>{for(var t,a=g[r>>2],i=r+4,u=0;u<=a;++u){var c=r+4+u*e;if(u==a||0==o(c)){var s=n(i,c-i);void 0===t?t=s:(t+=String.fromCharCode(0),t+=s),i=c+e}}return Qr(r),t},toWireType:(r,n)=>{"string"!=typeof n&&X("Cannot pass non-string to C++ string type ".concat(t));var o=i(n),u=Kr(4+o+e);return g[u>>2]=o/e,a(n,u+4,o+e),null!==r&&r.push(Qr,u),u},argPackAdvance:Q,readValueFromPointer:Y,destructorFunction(r){Qr(r)}})},l:(r,e,t,n,a,o)=>{I[r]={name:L(e),rawConstructor:_r(t,n),rawDestructor:_r(a,o),fields:[]}},e:(r,e,t,n,a,o,i,u,c,s)=>{I[r].fields.push({fieldName:L(e),getterReturnType:t,getter:_r(n,a),getterContext:o,setterArgumentType:i,setter:_r(u,c),setterContext:s})},J:(r,e)=>{K(r,{isVoid:!0,name:e=L(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,e)=>{}})},C:()=>1,H:(r,e,t)=>v.copyWithin(r,e,e+t),g:(r,e,t)=>(r=tr(r),e=fr(e,"emval::as"),Dr(e,t,r)),n:(r,e,t,n,a)=>(r=xr[r])(e=tr(e),e[t=Rr(t)],n,a),b:rr,o:(r,e,t)=>{var n=((r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=fr(g[e+4*n>>2],"parameter "+n);return t})(r,e),a=n.shift();r--;var o=new Array(r),i="methodCaller<(".concat(n.map((r=>r.name)).join(", "),") => ").concat(a.name,">");return(r=>{var e=xr.length;return xr.push(r),e})(sr(i,((e,i,u,c)=>{for(var s=0,l=0;l<r;++l)o[l]=n[l].readValueFromPointer(c+s),s+=n[l].argPackAdvance;var f=1===t?Ir(i,o):i.apply(e,o);return Dr(a,u,f)})))},h:(r,e)=>(r=tr(r),e=tr(e),nr(r[e])),p:()=>nr([]),I:r=>{r=tr(r);for(var e=new Array(r.length),t=0;t<r.length;t++)e[t]=r[t];return nr(e)},m:r=>nr(Rr(r)),c:r=>{var e=tr(r);U(e),rr(r)},i:(r,e)=>{var t=(r=fr(r,"_emval_take_value")).readValueFromPointer(e);return nr(t)},B:()=>{O("")},D:()=>Date.now(),x:()=>2147483648,G:mr,F:r=>{var e=v.length,t=2147483648;if((r>>>=0)>t)return!1;for(var n=(r,e)=>r+(e-r%e)%e,a=1;a<=4;a*=2){var o=e*(1+.2/a);o=Math.min(o,r+100663296);var i=Math.min(t,n(Math.max(r,o),65536));if(Ur(i))return!0}return!1},z:(r,e)=>{var t=0;return Hr().forEach(((n,a)=>{var o=e+t;g[r+4*a>>2]=o,((r,e)=>{for(var t=0;t<r.length;++t)h[e++]=r.charCodeAt(t);h[e]=0})(n,o),t+=n.length+1})),0},A:(r,e)=>{var t=Hr();g[r>>2]=t.length;var n=0;return t.forEach((r=>n+=r.length+1)),g[e>>2]=n,0},y:(r,e,t,n,a)=>qr(r,e,t,n)},Lr=function(){var r={a:Jr};function e(r,e){return Lr=r.exports,f=Lr.M,A(),hr=Lr.P,function(r){C.unshift(r)}(Lr.N),function(r){var e;if(E--,null!==(e=n.monitorRunDependencies)&&void 0!==e&&e.call(n,E),0==E&&S){var t=S;S=null,t()}}(),Lr}if(function(r){var e;E++,null===(e=n.monitorRunDependencies)||void 0===e||e.call(n,E)}(),n.instantiateWasm)try{return n.instantiateWasm(r,e)}catch(a){d("Module.instantiateWasm callback failed with error: ".concat(a)),t(a)}return function(r,e,t,n){return r||"function"!=typeof WebAssembly.instantiateStreaming||k(e)||"function"!=typeof fetch?j(e,t,n):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,t).then(n,(function(r){return d("wasm streaming compile failed: ".concat(r)),d("falling back to ArrayBuffer instantiation"),j(e,t,n)}))))}(l,M,r,(function(r){e(r.instance)})).catch(t),{}}(),Xr=r=>(Xr=Lr.O)(r),Kr=n._malloc=r=>(Kr=n._malloc=Lr.Q)(r),Qr=n._free=r=>(Qr=n._free=Lr.R)(r),Zr=r=>(Zr=Lr.S)(r);function $r(){function r(){Gr||(Gr=!0,n.calledRun=!0,b||(R(C),e(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)W(n.postRun.shift());R(F)}()))}E>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)P(n.preRun.shift());R(T)}(),E>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),r()}),1)):r()))}if(n.dynCall_viijii=(r,e,t,a,o,i,u)=>(n.dynCall_viijii=Lr.T)(r,e,t,a,o,i,u),n.dynCall_iiiiij=(r,e,t,a,o,i,u)=>(n.dynCall_iiiiij=Lr.U)(r,e,t,a,o,i,u),n.dynCall_iiiiijj=(r,e,t,a,o,i,u,c,s)=>(n.dynCall_iiiiijj=Lr.V)(r,e,t,a,o,i,u,c,s),n.dynCall_iiiiiijj=(r,e,t,a,o,i,u,c,s,l)=>(n.dynCall_iiiiiijj=Lr.W)(r,e,t,a,o,i,u,c,s,l),S=function r(){Gr||$r(),Gr||(S=r)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return $r(),a},a.exports=i;const s=(0,u.g)(c.exports),l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=3884.33efe18a.chunk.js.map