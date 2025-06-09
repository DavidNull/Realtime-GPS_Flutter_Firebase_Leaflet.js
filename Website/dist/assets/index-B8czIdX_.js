(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},os=[],on=()=>{},av=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tc=t=>t.startsWith("onUpdate:"),st=Object.assign,Ic=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lv=Object.prototype.hasOwnProperty,xe=(t,e)=>lv.call(t,e),ie=Array.isArray,as=t=>Ui(t)==="[object Map]",As=t=>Ui(t)==="[object Set]",Ih=t=>Ui(t)==="[object Date]",ge=t=>typeof t=="function",Ze=t=>typeof t=="string",hn=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",qf=t=>(Fe(t)||ge(t))&&ge(t.then)&&ge(t.catch),$f=Object.prototype.toString,Ui=t=>$f.call(t),cv=t=>Ui(t).slice(8,-1),Hf=t=>Ui(t)==="[object Object]",bc=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uv=/-(\w)/g,Ht=_a(t=>t.replace(uv,(e,n)=>n?n.toUpperCase():"")),hv=/\B([A-Z])/g,$r=_a(t=>t.replace(hv,"-$1").toLowerCase()),va=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=_a(t=>t?`on${va(t)}`:""),er=(t,e)=>!Object.is(t,e),Po=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dv=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let bh;const ya=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?mv(r):Ac(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Fe(t))return t}const fv=/;(?![^(]*\))/g,pv=/:([^]+)/,gv=/\/\*[^]*?\*\//g;function mv(t){const e={};return t.replace(gv,"").split(fv).forEach(n=>{if(n){const r=n.split(pv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vt(t){let e="";if(Ze(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=vt(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _v="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=Ec(_v);function Wf(t){return!!t||t===""}function yv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nr(t[r],e[r]);return n}function Nr(t,e){if(t===e)return!0;let n=Ih(t),r=Ih(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=hn(t),r=hn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?yv(t,e):!1;if(n=Fe(t),r=Fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Nr(t[o],e[o]))return!1}}return String(t)===String(e)}function Rc(t,e){return t.findIndex(n=>Nr(n,e))}const Kf=t=>!!(t&&t.__v_isRef===!0),Le=t=>Ze(t)?t:t==null?"":ie(t)||Fe(t)&&(t.toString===$f||!ge(t.toString))?Kf(t)?Le(t.value):JSON.stringify(t,Gf,2):String(t),Gf=(t,e)=>Kf(e)?Gf(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cl(r,i)+" =>"]=s,n),{})}:As(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cl(n))}:hn(e)?cl(e):Fe(e)&&!ie(e)&&!Hf(e)?String(e):e,cl=(t,e="")=>{var n;return hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yf(t){return new Qf(t)}function Jf(){return At}function wv(t,e=!1){At&&At.cleanups.push(t)}let Me;const ul=new WeakSet;class Xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ul.has(this)&&(ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),tp(this);const e=Me,n=Gt;Me=this,Gt=!0;try{return this.fn()}finally{np(this),Me=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pc(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ol(this)&&this.run()}get dirty(){return Ol(this)}}let Zf=0,si,ii;function ep(t,e=!1){if(t.flags|=8,e){t.next=ii,ii=t;return}t.next=si,si=t}function Sc(){Zf++}function Cc(){if(--Zf>0)return;if(ii){let e=ii;for(ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;si;){let e=si;for(si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function tp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pc(r),Ev(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ol(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_i))return;t.globalVersion=_i;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ol(t)){t.flags&=-3;return}const n=Me,r=Gt;Me=t,Gt=!0;try{tp(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Gt=r,np(t),t.flags&=-3}}function Pc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ev(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const sp=[];function pr(){sp.push(Gt),Gt=!1}function gr(){const t=sp.pop();Gt=t===void 0?!0:t}function Ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let _i=0;class Tv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!Gt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Tv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,ip(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,_i++,this.notify(e)}notify(e){Sc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cc()}}}function ip(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ip(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,xr=Symbol(""),Nl=Symbol(""),vi=Symbol("");function yt(t,e,n){if(Gt&&Me){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new kc),s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=Ho.get(t);if(!o){_i++;return}const l=c=>{c&&c.trigger()};if(Sc(),e==="clear")o.forEach(l);else{const c=ie(t),h=c&&bc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===vi||!hn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(vi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(xr)),as(t)&&l(o.get(Nl)));break;case"delete":c||(l(o.get(xr)),as(t)&&l(o.get(Nl)));break;case"set":as(t)&&l(o.get(xr));break}}Cc()}function Iv(t,e){const n=Ho.get(t);return n&&n.get(e)}function Jr(t){const e=Ae(t);return e===t?e:(yt(e,"iterate",vi),Qt(t)?e:e.map(Rt))}function xc(t){return yt(t=Ae(t),"iterate",vi),t}const bv={__proto__:null,[Symbol.iterator](){return hl(this,Symbol.iterator,Rt)},concat(...t){return Jr(this).concat(...t.map(e=>ie(e)?Jr(e):e))},entries(){return hl(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(Rt),arguments)},find(t,e){return mn(this,"find",t,e,Rt,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return dl(this,"includes",t)},indexOf(...t){return dl(this,"indexOf",t)},join(t){return Jr(this).join(t)},lastIndexOf(...t){return dl(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return Ws(this,"pop")},push(...t){return Ws(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Ws(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return Ws(this,"splice",t)},toReversed(){return Jr(this).toReversed()},toSorted(t){return Jr(this).toSorted(t)},toSpliced(...t){return Jr(this).toSpliced(...t)},unshift(...t){return Ws(this,"unshift",t)},values(){return hl(this,"values",Rt)}};function hl(t,e,n){const r=xc(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Av=Array.prototype;function mn(t,e,n,r,s,i){const o=xc(t),l=o!==t&&!Qt(t),c=o[e];if(c!==Av[e]){const p=c.apply(t,i);return l?Rt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,Rt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Rh(t,e,n,r){const s=xc(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Rt(l),c,t)}),s[e](i,...r)}function dl(t,e,n){const r=Ae(t);yt(r,"iterate",vi);const s=r[e](...n);return(s===-1||s===!1)&&Oc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ws(t,e,n=[]){pr(),Sc();const r=Ae(t)[e].apply(t,n);return Cc(),gr(),r}const Rv=Ec("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hn));function Sv(t){hn(t)||(t=String(t));const e=Ae(this);return yt(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Lv:hp:i?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let c;if(o&&(c=bv[n]))return c;if(n==="hasOwnProperty")return Sv}const l=Reflect.get(e,n,Ye(e)?e:r);return(hn(n)?op.has(n):Rv(n))||(s||yt(e,"get",n),i)?l:Ye(l)?o&&bc(n)?l:l.value:Fe(l)?s?fp(l):Bi(l):l}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Mr(i);if(!Qt(r)&&!Mr(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&Ye(i)&&!Ye(r))return c?!1:(i.value=r,!0)}const o=ie(e)&&bc(n)?Number(n)<e.length:xe(e,n),l=Reflect.set(e,n,r,Ye(e)?e:s);return e===Ae(s)&&(o?er(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),l}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!hn(n)||!op.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ie(e)?"length":xr),Reflect.ownKeys(e)}}class Cv extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Pv=new lp,kv=new Cv,xv=new lp(!0);const Ml=t=>t,yo=t=>Reflect.getPrototypeOf(t);function Vv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=as(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Ml:e?Ll:Rt;return!e&&yt(i,"iterate",c?Nl:xr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);t||(er(s,l)&&yt(o,"get",s),yt(o,"get",l));const{has:c}=yo(o),h=e?Ml:t?Ll:Rt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Ae(s),"iterate",xr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ae(i),l=Ae(s);return t||(er(s,l)&&yt(o,"has",s),yt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ae(l),h=e?Ml:t?Ll:Rt;return!t&&yt(c,"iterate",xr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return st(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Qt(s)&&!Mr(s)&&(s=Ae(s));const i=Ae(this);return yo(i).has.call(i,s)||(i.add(s),En(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Mr(i)&&(i=Ae(i));const o=Ae(this),{has:l,get:c}=yo(o);let h=l.call(o,s);h||(s=Ae(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?er(i,d)&&En(o,"set",s,i):En(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:l}=yo(i);let c=o.call(i,s);c||(s=Ae(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&En(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&En(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Vv(s,t,e)}),n}function Vc(t,e){const n=Dv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const Ov={get:Vc(!1,!1)},Nv={get:Vc(!1,!0)},Mv={get:Vc(!0,!1)};const cp=new WeakMap,up=new WeakMap,hp=new WeakMap,Lv=new WeakMap;function Fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uv(t){return t.__v_skip||!Object.isExtensible(t)?0:Fv(cv(t))}function Bi(t){return Mr(t)?t:Dc(t,!1,Pv,Ov,cp)}function dp(t){return Dc(t,!1,xv,Nv,up)}function fp(t){return Dc(t,!0,kv,Mv,hp)}function Dc(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Vr(t){return Mr(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mr(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function Oc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Nc(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&zf(t,"__v_skip",!0),t}const Rt=t=>Fe(t)?Bi(t):t,Ll=t=>Fe(t)?fp(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function ve(t){return pp(t,!1)}function Bv(t){return pp(t,!0)}function pp(t,e){return Ye(t)?t:new jv(t,e)}class jv{constructor(e,n){this.dep=new kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Mr(e);e=r?e:Ae(e),er(e,n)&&(this._rawValue=e,this._value=r?e:Rt(e),this.dep.trigger())}}function ls(t){return Ye(t)?t.value:t}const qv={get:(t,e,n)=>e==="__v_raw"?t:ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gp(t){return Vr(t)?t:new Proxy(t,qv)}function $v(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=zv(t,n);return e}class Hv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iv(Ae(this._object),this._key)}}function zv(t,e,n){const r=t[e];return Ye(r)?r:new Hv(t,e,n)}class Wv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return rp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kv(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new Wv(r,s,n)}const Eo={},zo=new WeakMap;let Sr;function Gv(t,e=!1,n=Sr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function Qv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=q=>s?q:Qt(q)||s===!1||s===0?Tn(q,1):Tn(q);let d,p,g,_,C=!1,x=!1;if(Ye(t)?(p=()=>t.value,C=Qt(t)):Vr(t)?(p=()=>h(t),C=!0):ie(t)?(x=!0,C=t.some(q=>Vr(q)||Qt(q)),p=()=>t.map(q=>{if(Ye(q))return q.value;if(Vr(q))return h(q);if(ge(q))return c?c(q,2):q()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){pr();try{g()}finally{gr()}}const q=Sr;Sr=d;try{return c?c(t,3,[_]):t(_)}finally{Sr=q}}:p=on,e&&s){const q=p,X=s===!0?1/0:s;p=()=>Tn(q(),X)}const D=Jf(),B=()=>{d.stop(),D&&D.active&&Ic(D.effects,d)};if(i&&e){const q=e;e=(...X)=>{q(...X),B()}}let j=x?new Array(t.length).fill(Eo):Eo;const F=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const X=d.run();if(s||C||(x?X.some((ce,R)=>er(ce,j[R])):er(X,j))){g&&g();const ce=Sr;Sr=d;try{const R=[X,j===Eo?void 0:x&&j[0]===Eo?[]:j,_];c?c(e,3,R):e(...R),j=X}finally{Sr=ce}}}else d.run()};return l&&l(F),d=new Xf(p),d.scheduler=o?()=>o(F,!1):F,_=q=>Gv(q,!1,d),g=d.onStop=()=>{const q=zo.get(d);if(q){if(c)c(q,4);else for(const X of q)X();zo.delete(d)}},e?r?F(!0):j=d.run():o?o(F.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Tn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))Tn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(As(t)||as(t))t.forEach(r=>{Tn(r,e,n)});else if(Hf(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(t,e,n,r){try{return r?t(...r):t()}catch(s){wa(s,e,n)}}function Jt(t,e,n,r){if(ge(t)){const s=ji(t,e,n,r);return s&&qf(s)&&s.catch(i=>{wa(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Jt(t[i],e,n,r));return s}}function wa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){pr(),ji(i,null,10,[t,c,h]),gr();return}}Yv(t,n,s,r,o)}function Yv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let nn=-1;const cs=[];let zn=null,Zr=0;const mp=Promise.resolve();let Wo=null;function Ea(t){const e=Wo||mp;return t?e.then(this?t.bind(this):t):e}function Jv(t){let e=nn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Mc(t){if(!(t.flags&1)){const e=yi(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=yi(n)?St.push(t):St.splice(Jv(e),0,t),t.flags|=1,_p()}}function _p(){Wo||(Wo=mp.then(yp))}function Xv(t){ie(t)?cs.push(...t):zn&&t.id===-1?zn.splice(Zr+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),_p()}function Sh(t,e,n=nn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vp(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>yi(n)-yi(r));if(cs.length=0,zn){zn.push(...e);return}for(zn=e,Zr=0;Zr<zn.length;Zr++){const n=zn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,Zr=0}}const yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yp(t){try{for(nn=0;nn<St.length;nn++){const e=St[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<St.length;nn++){const e=St[nn];e&&(e.flags&=-2)}nn=-1,St.length=0,vp(),Wo=null,(St.length||cs.length)&&yp()}}let Ct=null,wp=null;function Ko(t){const e=Ct;return Ct=t,wp=t&&t.type.__scopeId||null,e}function Be(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Fh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ss(t,e){if(Ct===null)return t;const n=Ra(Ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ne]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(pr(),Jt(c,n,8,[t.el,l,t,e]),gr())}}const Zv=Symbol("_vte"),Ep=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),To=Symbol("_enterCb");function ey(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rs(()=>{t.isMounted=!0}),kp(()=>{t.isUnmounting=!0}),t}const jt=[Function,Array],Tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},Ip=t=>{const e=t.subTree;return e.component?Ip(e.component):e},ty={name:"BaseTransition",props:Tp,setup(t,{slots:e}){const n=Zy(),r=ey();return()=>{const s=e.default&&Rp(e.default(),!0);if(!s||!s.length)return;const i=bp(s),o=Ae(t),{mode:l}=o;if(r.isLeaving)return fl(i);const c=Ch(i);if(!c)return fl(i);let h=Fl(c,o,r,n,p=>h=p);c.type!==kt&&wi(c,h);let d=n.subTree&&Ch(n.subTree);if(d&&d.type!==kt&&!Pr(c,d)&&Ip(n).type!==kt){let p=Fl(d,o,r,n);if(wi(d,p),l==="out-in"&&c.type!==kt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},fl(i);l==="in-out"&&c.type!==kt?p.delayLeave=(g,_,C)=>{const x=Ap(r,d);x[String(d.key)]=d,g[Wn]=()=>{_(),g[Wn]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{C(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function bp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kt){e=n;break}}return e}const ny=ty;function Ap(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:C,onLeaveCancelled:x,onBeforeAppear:D,onAppear:B,onAfterAppear:j,onAppearCancelled:F}=e,q=String(t.key),X=Ap(n,t),ce=(v,T)=>{v&&Jt(v,r,9,T)},R=(v,T)=>{const S=T[1];ce(v,T),ie(v)?v.every(b=>b.length<=1)&&S():v.length<=1&&S()},y={mode:o,persisted:l,beforeEnter(v){let T=c;if(!n.isMounted)if(i)T=D||c;else return;v[Wn]&&v[Wn](!0);const S=X[q];S&&Pr(t,S)&&S.el[Wn]&&S.el[Wn](),ce(T,[v])},enter(v){let T=h,S=d,b=p;if(!n.isMounted)if(i)T=B||h,S=j||d,b=F||p;else return;let w=!1;const Pe=v[To]=Ge=>{w||(w=!0,Ge?ce(b,[v]):ce(S,[v]),y.delayedLeave&&y.delayedLeave(),v[To]=void 0)};T?R(T,[v,Pe]):Pe()},leave(v,T){const S=String(t.key);if(v[To]&&v[To](!0),n.isUnmounting)return T();ce(g,[v]);let b=!1;const w=v[Wn]=Pe=>{b||(b=!0,T(),Pe?ce(x,[v]):ce(C,[v]),v[Wn]=void 0,X[S]===t&&delete X[S])};X[S]=t,_?R(_,[v,w]):w()},clone(v){const T=Fl(v,e,n,r,s);return s&&s(T),T}};return y}function fl(t){if(Ta(t))return t=cr(t),t.children=null,t}function Ch(t){if(!Ta(t))return Ep(t.type)&&t.children?bp(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&s++,r=r.concat(Rp(o.children,e,l))):(e||o.type!==kt)&&r.push(l!=null?cr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sp(t,e){return ge(t)?st({name:t.name},e,{setup:t}):t}function Cp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Go(t,e,n,r,s=!1){if(ie(t)){t.forEach((C,x)=>Go(C,e&&(ie(e)?e[x]:e),n,r,s));return}if(oi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Go(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ra(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Ae(p),_=p===Ne?()=>!1:C=>xe(g,C);if(h!=null&&h!==c&&(Ze(h)?(d[h]=null,_(h)&&(p[h]=null)):Ye(h)&&(h.value=null)),ge(c))ji(c,l,12,[o,d]);else{const C=Ze(c),x=Ye(c);if(C||x){const D=()=>{if(t.f){const B=C?_(c)?p[c]:d[c]:c.value;s?ie(B)&&Ic(B,i):ie(B)?B.includes(i)||B.push(i):C?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,_(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Ot(D,n)):D()}}}ya().requestIdleCallback;ya().cancelIdleCallback;const oi=t=>!!t.type.__asyncLoader,Ta=t=>t.type.__isKeepAlive;function ry(t,e){Pp(t,"a",e)}function sy(t,e){Pp(t,"da",e)}function Pp(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ta(s.parent.vnode)&&iy(r,e,n,s),s=s.parent}}function iy(t,e,n,r){const s=Ia(e,t,r,!0);qi(()=>{Ic(r[e],s)},n)}function Ia(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pr();const l=$i(n),c=Jt(e,n,t,o);return l(),gr(),c});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=rt)=>{(!Ii||t==="sp")&&Ia(t,(...r)=>e(...r),n)},oy=On("bm"),Rs=On("m"),ay=On("bu"),ly=On("u"),kp=On("bum"),qi=On("um"),cy=On("sp"),uy=On("rtg"),hy=On("rtc");function dy(t,e=rt){Ia("ec",t,e)}const fy="components";function Sn(t,e){return gy(fy,t,!0,e)||t}const py=Symbol.for("v-ndc");function gy(t,e,n=!0,r=!1){const s=Ct||rt;if(s){const i=s.type;{const l=sw(i,!1);if(l&&(l===e||l===Ht(e)||l===va(Ht(e))))return i}const o=Ph(s[t]||i[t],e)||Ph(s.appContext[t],e);return!o&&r?i:o}}function Ph(t,e){return t&&(t[e]||t[Ht(e)]||t[va(Ht(e))])}const Ul=t=>t?Jp(t)?Ra(t):Ul(t.parent):null,ai=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ul(t.parent),$root:t=>Ul(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vp(t),$forceUpdate:t=>t.f||(t.f=()=>{Mc(t.update)}),$nextTick:t=>t.n||(t.n=Ea.bind(t.proxy)),$watch:t=>Ly.bind(t)}),pl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&xe(t,e),my={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pl(r,e))return o[e]=1,r[e];if(s!==Ne&&xe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&xe(h,e))return o[e]=3,i[e];if(n!==Ne&&xe(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const d=ai[e];let p,g;if(d)return e==="$attrs"&&yt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&xe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,xe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pl(s,e)?(s[e]=n,!0):r!==Ne&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ne&&xe(t,o)||pl(e,o)||(l=i[0])&&xe(l,o)||xe(r,o)||xe(ai,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function _y(t){const e=Vp(t),n=t.proxy,r=t.ctx;Bl=!1,e.beforeCreate&&xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:x,deactivated:D,beforeDestroy:B,beforeUnmount:j,destroyed:F,unmounted:q,render:X,renderTracked:ce,renderTriggered:R,errorCaptured:y,serverPrefetch:v,expose:T,inheritAttrs:S,components:b,directives:w,filters:Pe}=e;if(h&&vy(h,r,null),o)for(const de in o){const we=o[de];ge(we)&&(r[de]=we.bind(n))}if(s){const de=s.call(n,n);Fe(de)&&(t.data=Bi(de))}if(Bl=!0,i)for(const de in i){const we=i[de],Vt=ge(we)?we.bind(n,n):ge(we.get)?we.get.bind(n,n):on,zt=!ge(we)&&ge(we.set)?we.set.bind(n):on,Ft=Ke({get:Vt,set:zt});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:je=>Ft.value=je})}if(l)for(const de in l)xp(l[de],r,n,de);if(c){const de=ge(c)?c.call(n):c;Reflect.ownKeys(de).forEach(we=>{ko(we,de[we])})}d&&xh(d,t,"c");function Ve(de,we){ie(we)?we.forEach(Vt=>de(Vt.bind(n))):we&&de(we.bind(n))}if(Ve(oy,p),Ve(Rs,g),Ve(ay,_),Ve(ly,C),Ve(ry,x),Ve(sy,D),Ve(dy,y),Ve(hy,ce),Ve(uy,R),Ve(kp,j),Ve(qi,q),Ve(cy,v),ie(T))if(T.length){const de=t.exposed||(t.exposed={});T.forEach(we=>{Object.defineProperty(de,we,{get:()=>n[we],set:Vt=>n[we]=Vt})})}else t.exposed||(t.exposed={});X&&t.render===on&&(t.render=X),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),w&&(t.directives=w),v&&Cp(t)}function vy(t,e,n=on){ie(t)&&(t=jl(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xh(t,e,n){Jt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,r){let s=r.includes(".")?Wp(n,r):()=>n[r];if(Ze(t)){const i=e[t];ge(i)&&tr(s,i)}else if(ge(t))tr(s,t.bind(n));else if(Fe(t))if(ie(t))t.forEach(i=>xp(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&tr(s,i,t)}}function Vp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Qo(c,h,o,!0)),Qo(c,e,o)),Fe(e)&&i.set(e,c),c}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=yy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yy={data:Vh,props:Dh,emits:Dh,methods:Ys,computed:Ys,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ys,directives:Ys,watch:Ey,provide:Vh,inject:wy};function Vh(t,e){return e?t?function(){return st(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function wy(t,e){return Ys(jl(t),jl(e))}function jl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?st(Object.create(null),t,e):e}function Dh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:st(Object.create(null),kh(t),kh(e??{})):e}function Ey(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Dp(){return{app:null,config:{isNativeTag:av,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ty=0;function Iy(t,e){return function(r,s=null){ge(r)||(r=st({},r)),s!=null&&!Fe(s)&&(s=null);const i=Dp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Ty++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(h,...p)):ge(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const _=h._ceVNode||ye(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),c=!0,h._container=d,d.__vue_app__=h,Ra(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Jt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Dr;Dr=h;try{return d()}finally{Dr=p}}};return h}}let Dr=null;function ko(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=rt||Ct;if(r||Dr){const s=Dr?Dr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function by(){return!!(rt||Ct||Dr)}const Op={},Np=()=>Object.create(Op),Mp=t=>Object.getPrototypeOf(t)===Op;function Ay(t,e,n,r=!1){const s={},i=Np();t.propsDefaults=Object.create(null),Lp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ry(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ba(t.emitsOptions,g))continue;const _=e[g];if(c)if(xe(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=Ht(g);s[C]=ql(c,l,C,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Lp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!xe(e,p)&&((d=$r(p))===p||!xe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ql(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!xe(e,p))&&(delete i[p],h=!0)}h&&En(t.attrs,"set","")}function Lp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ri(c))continue;const h=e[c];let d;s&&xe(s,d=Ht(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ba(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ae(n),h=l||Ne;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ql(s,c,p,h[p],t,!xe(h,p))}}return o}function ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=xe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=$i(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===$r(n))&&(r=!0))}return r}const Sy=new WeakMap;function Fp(t,e,n=!1){const r=n?Sy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[g,_]=Fp(p,e,!0);st(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Fe(t)&&r.set(t,os),os;if(ie(i))for(let d=0;d<i.length;d++){const p=Ht(i[d]);Oh(p)&&(o[p]=Ne)}else if(i)for(const d in i){const p=Ht(d);if(Oh(p)){const g=i[d],_=o[p]=ie(g)||ge(g)?{type:g}:st({},g),C=_.type;let x=!1,D=!0;if(ie(C))for(let B=0;B<C.length;++B){const j=C[B],F=ge(j)&&j.name;if(F==="Boolean"){x=!0;break}else F==="String"&&(D=!1)}else x=ge(C)&&C.name==="Boolean";_[0]=x,_[1]=D,(x||xe(_,"default"))&&l.push(p)}}const h=[o,l];return Fe(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!ri(t)}const Up=t=>t[0]==="_"||t==="$stable",Lc=t=>ie(t)?t.map(rn):[rn(t)],Cy=(t,e,n)=>{if(e._n)return e;const r=Be((...s)=>Lc(e(...s)),n);return r._c=!1,r},Bp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Up(s))continue;const i=t[s];if(ge(i))e[s]=Cy(s,i,r);else if(i!=null){const o=Lc(i);e[s]=()=>o}}},jp=(t,e)=>{const n=Lc(e);t.slots.default=()=>n},qp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Py=(t,e,n)=>{const r=t.slots=Np();if(t.vnode.shapeFlag&32){const s=e._;s?(qp(r,e,n),n&&zf(r,"_",s,!0)):Bp(e,r)}else e&&jp(t,e)},ky=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:qp(s,e,n):(i=!e.$stable,Bp(e,s)),o=e}else e&&(jp(t,e),o={default:1});if(i)for(const l in s)!Up(l)&&o[l]==null&&delete s[l]},Ot=Hy;function xy(t){return Vy(t)}function Vy(t,e){const n=ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=on,insertStaticContent:C}=t,x=(E,I,P,N=null,L=null,M=null,G=void 0,W=null,z=!!I.dynamicChildren)=>{if(E===I)return;E&&!Pr(E,I)&&(N=O(E),je(E,L,M,!0),E=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:Y}=I;switch(H){case Aa:D(E,I,P,N);break;case kt:B(E,I,P,N);break;case xo:E==null&&j(I,P,N,G);break;case Nt:b(E,I,P,N,L,M,G,W,z);break;default:Y&1?X(E,I,P,N,L,M,G,W,z):Y&6?w(E,I,P,N,L,M,G,W,z):(Y&64||Y&128)&&H.process(E,I,P,N,L,M,G,W,z,Z)}oe!=null&&L&&Go(oe,E&&E.ref,M,I||E,!I)},D=(E,I,P,N)=>{if(E==null)r(I.el=l(I.children),P,N);else{const L=I.el=E.el;I.children!==E.children&&h(L,I.children)}},B=(E,I,P,N)=>{E==null?r(I.el=c(I.children||""),P,N):I.el=E.el},j=(E,I,P,N)=>{[E.el,E.anchor]=C(E.children,I,P,N,E.el,E.anchor)},F=({el:E,anchor:I},P,N)=>{let L;for(;E&&E!==I;)L=g(E),r(E,P,N),E=L;r(I,P,N)},q=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=g(E),s(E),E=P;s(I)},X=(E,I,P,N,L,M,G,W,z)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),E==null?ce(I,P,N,L,M,G,W,z):v(E,I,L,M,G,W,z)},ce=(E,I,P,N,L,M,G,W)=>{let z,H;const{props:oe,shapeFlag:Y,transition:re,dirs:ue}=E;if(z=E.el=o(E.type,M,oe&&oe.is,oe),Y&8?d(z,E.children):Y&16&&y(E.children,z,null,N,L,gl(E,M),G,W),ue&&Ir(E,null,N,"created"),R(z,E,E.scopeId,G,N),oe){for(const _e in oe)_e!=="value"&&!ri(_e)&&i(z,_e,null,oe[_e],M,N);"value"in oe&&i(z,"value",null,oe.value,M),(H=oe.onVnodeBeforeMount)&&tn(H,N,E)}ue&&Ir(E,null,N,"beforeMount");const ae=Dy(L,re);ae&&re.beforeEnter(z),r(z,I,P),((H=oe&&oe.onVnodeMounted)||ae||ue)&&Ot(()=>{H&&tn(H,N,E),ae&&re.enter(z),ue&&Ir(E,null,N,"mounted")},L)},R=(E,I,P,N,L)=>{if(P&&_(E,P),N)for(let M=0;M<N.length;M++)_(E,N[M]);if(L){let M=L.subTree;if(I===M||Gp(M.type)&&(M.ssContent===I||M.ssFallback===I)){const G=L.vnode;R(E,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(E,I,P,N,L,M,G,W,z=0)=>{for(let H=z;H<E.length;H++){const oe=E[H]=W?Kn(E[H]):rn(E[H]);x(null,oe,I,P,N,L,M,G,W)}},v=(E,I,P,N,L,M,G)=>{const W=I.el=E.el;let{patchFlag:z,dynamicChildren:H,dirs:oe}=I;z|=E.patchFlag&16;const Y=E.props||Ne,re=I.props||Ne;let ue;if(P&&br(P,!1),(ue=re.onVnodeBeforeUpdate)&&tn(ue,P,I,E),oe&&Ir(I,E,P,"beforeUpdate"),P&&br(P,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&d(W,""),H?T(E.dynamicChildren,H,W,P,N,gl(I,L),M):G||we(E,I,W,null,P,N,gl(I,L),M,!1),z>0){if(z&16)S(W,Y,re,P,L);else if(z&2&&Y.class!==re.class&&i(W,"class",null,re.class,L),z&4&&i(W,"style",Y.style,re.style,L),z&8){const ae=I.dynamicProps;for(let _e=0;_e<ae.length;_e++){const Ie=ae[_e],dt=Y[Ie],it=re[Ie];(it!==dt||Ie==="value")&&i(W,Ie,dt,it,L,P)}}z&1&&E.children!==I.children&&d(W,I.children)}else!G&&H==null&&S(W,Y,re,P,L);((ue=re.onVnodeUpdated)||oe)&&Ot(()=>{ue&&tn(ue,P,I,E),oe&&Ir(I,E,P,"updated")},N)},T=(E,I,P,N,L,M,G)=>{for(let W=0;W<I.length;W++){const z=E[W],H=I[W],oe=z.el&&(z.type===Nt||!Pr(z,H)||z.shapeFlag&70)?p(z.el):P;x(z,H,oe,null,N,L,M,G,!0)}},S=(E,I,P,N,L)=>{if(I!==P){if(I!==Ne)for(const M in I)!ri(M)&&!(M in P)&&i(E,M,I[M],null,L,N);for(const M in P){if(ri(M))continue;const G=P[M],W=I[M];G!==W&&M!=="value"&&i(E,M,W,G,L,N)}"value"in P&&i(E,"value",I.value,P.value,L)}},b=(E,I,P,N,L,M,G,W,z)=>{const H=I.el=E?E.el:l(""),oe=I.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:ue}=I;ue&&(W=W?W.concat(ue):ue),E==null?(r(H,P,N),r(oe,P,N),y(I.children||[],P,oe,L,M,G,W,z)):Y>0&&Y&64&&re&&E.dynamicChildren?(T(E.dynamicChildren,re,P,L,M,G,W),(I.key!=null||L&&I===L.subTree)&&$p(E,I,!0)):we(E,I,P,oe,L,M,G,W,z)},w=(E,I,P,N,L,M,G,W,z)=>{I.slotScopeIds=W,E==null?I.shapeFlag&512?L.ctx.activate(I,P,N,G,z):Pe(I,P,N,L,M,G,z):Ge(E,I,z)},Pe=(E,I,P,N,L,M,G)=>{const W=E.component=Xy(E,N,L);if(Ta(E)&&(W.ctx.renderer=Z),ew(W,!1,G),W.asyncDep){if(L&&L.registerDep(W,Ve,G),!E.el){const z=W.subTree=ye(kt);B(null,z,I,P)}}else Ve(W,E,I,P,L,M,G)},Ge=(E,I,P)=>{const N=I.component=E.component;if(qy(E,I,P))if(N.asyncDep&&!N.asyncResolved){de(N,I,P);return}else N.next=I,N.update();else I.el=E.el,N.vnode=I},Ve=(E,I,P,N,L,M,G)=>{const W=()=>{if(E.isMounted){let{next:Y,bu:re,u:ue,parent:ae,vnode:_e}=E;{const ft=Hp(E);if(ft){Y&&(Y.el=_e.el,de(E,Y,G)),ft.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Ie=Y,dt;br(E,!1),Y?(Y.el=_e.el,de(E,Y,G)):Y=_e,re&&Po(re),(dt=Y.props&&Y.props.onVnodeBeforeUpdate)&&tn(dt,ae,Y,_e),br(E,!0);const it=Mh(E),Ut=E.subTree;E.subTree=it,x(Ut,it,p(Ut.el),O(Ut),E,L,M),Y.el=it.el,Ie===null&&$y(E,it.el),ue&&Ot(ue,L),(dt=Y.props&&Y.props.onVnodeUpdated)&&Ot(()=>tn(dt,ae,Y,_e),L)}else{let Y;const{el:re,props:ue}=I,{bm:ae,m:_e,parent:Ie,root:dt,type:it}=E,Ut=oi(I);br(E,!1),ae&&Po(ae),!Ut&&(Y=ue&&ue.onVnodeBeforeMount)&&tn(Y,Ie,I),br(E,!0);{dt.ce&&dt.ce._injectChildStyle(it);const ft=E.subTree=Mh(E);x(null,ft,P,N,E,L,M),I.el=ft.el}if(_e&&Ot(_e,L),!Ut&&(Y=ue&&ue.onVnodeMounted)){const ft=I;Ot(()=>tn(Y,Ie,ft),L)}(I.shapeFlag&256||Ie&&oi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&Ot(E.a,L),E.isMounted=!0,I=P=N=null}};E.scope.on();const z=E.effect=new Xf(W);E.scope.off();const H=E.update=z.run.bind(z),oe=E.job=z.runIfDirty.bind(z);oe.i=E,oe.id=E.uid,z.scheduler=()=>Mc(oe),br(E,!0),H()},de=(E,I,P)=>{I.component=E;const N=E.vnode.props;E.vnode=I,E.next=null,Ry(E,I.props,N,P),ky(E,I.children,P),pr(),Sh(E),gr()},we=(E,I,P,N,L,M,G,W,z=!1)=>{const H=E&&E.children,oe=E?E.shapeFlag:0,Y=I.children,{patchFlag:re,shapeFlag:ue}=I;if(re>0){if(re&128){zt(H,Y,P,N,L,M,G,W,z);return}else if(re&256){Vt(H,Y,P,N,L,M,G,W,z);return}}ue&8?(oe&16&&Pt(H,L,M),Y!==H&&d(P,Y)):oe&16?ue&16?zt(H,Y,P,N,L,M,G,W,z):Pt(H,L,M,!0):(oe&8&&d(P,""),ue&16&&y(Y,P,N,L,M,G,W,z))},Vt=(E,I,P,N,L,M,G,W,z)=>{E=E||os,I=I||os;const H=E.length,oe=I.length,Y=Math.min(H,oe);let re;for(re=0;re<Y;re++){const ue=I[re]=z?Kn(I[re]):rn(I[re]);x(E[re],ue,P,null,L,M,G,W,z)}H>oe?Pt(E,L,M,!0,!1,Y):y(I,P,N,L,M,G,W,z,Y)},zt=(E,I,P,N,L,M,G,W,z)=>{let H=0;const oe=I.length;let Y=E.length-1,re=oe-1;for(;H<=Y&&H<=re;){const ue=E[H],ae=I[H]=z?Kn(I[H]):rn(I[H]);if(Pr(ue,ae))x(ue,ae,P,null,L,M,G,W,z);else break;H++}for(;H<=Y&&H<=re;){const ue=E[Y],ae=I[re]=z?Kn(I[re]):rn(I[re]);if(Pr(ue,ae))x(ue,ae,P,null,L,M,G,W,z);else break;Y--,re--}if(H>Y){if(H<=re){const ue=re+1,ae=ue<oe?I[ue].el:N;for(;H<=re;)x(null,I[H]=z?Kn(I[H]):rn(I[H]),P,ae,L,M,G,W,z),H++}}else if(H>re)for(;H<=Y;)je(E[H],L,M,!0),H++;else{const ue=H,ae=H,_e=new Map;for(H=ae;H<=re;H++){const ot=I[H]=z?Kn(I[H]):rn(I[H]);ot.key!=null&&_e.set(ot.key,H)}let Ie,dt=0;const it=re-ae+1;let Ut=!1,ft=0;const Ln=new Array(it);for(H=0;H<it;H++)Ln[H]=0;for(H=ue;H<=Y;H++){const ot=E[H];if(dt>=it){je(ot,L,M,!0);continue}let Bt;if(ot.key!=null)Bt=_e.get(ot.key);else for(Ie=ae;Ie<=re;Ie++)if(Ln[Ie-ae]===0&&Pr(ot,I[Ie])){Bt=Ie;break}Bt===void 0?je(ot,L,M,!0):(Ln[Bt-ae]=H+1,Bt>=ft?ft=Bt:Ut=!0,x(ot,I[Bt],P,null,L,M,G,W,z),dt++)}const Ds=Ut?Oy(Ln):os;for(Ie=Ds.length-1,H=it-1;H>=0;H--){const ot=ae+H,Bt=I[ot],no=ot+1<oe?I[ot+1].el:N;Ln[H]===0?x(null,Bt,P,no,L,M,G,W,z):Ut&&(Ie<0||H!==Ds[Ie]?Ft(Bt,P,no,2):Ie--)}}},Ft=(E,I,P,N,L=null)=>{const{el:M,type:G,transition:W,children:z,shapeFlag:H}=E;if(H&6){Ft(E.component.subTree,I,P,N);return}if(H&128){E.suspense.move(I,P,N);return}if(H&64){G.move(E,I,P,Z);return}if(G===Nt){r(M,I,P);for(let Y=0;Y<z.length;Y++)Ft(z[Y],I,P,N);r(E.anchor,I,P);return}if(G===xo){F(E,I,P);return}if(N!==2&&H&1&&W)if(N===0)W.beforeEnter(M),r(M,I,P),Ot(()=>W.enter(M),L);else{const{leave:Y,delayLeave:re,afterLeave:ue}=W,ae=()=>r(M,I,P),_e=()=>{Y(M,()=>{ae(),ue&&ue()})};re?re(M,ae,_e):_e()}else r(M,I,P)},je=(E,I,P,N=!1,L=!1)=>{const{type:M,props:G,ref:W,children:z,dynamicChildren:H,shapeFlag:oe,patchFlag:Y,dirs:re,cacheIndex:ue}=E;if(Y===-2&&(L=!1),W!=null&&Go(W,null,P,E,!0),ue!=null&&(I.renderCache[ue]=void 0),oe&256){I.ctx.deactivate(E);return}const ae=oe&1&&re,_e=!oi(E);let Ie;if(_e&&(Ie=G&&G.onVnodeBeforeUnmount)&&tn(Ie,I,E),oe&6)en(E.component,P,N);else{if(oe&128){E.suspense.unmount(P,N);return}ae&&Ir(E,null,I,"beforeUnmount"),oe&64?E.type.remove(E,I,P,Z,N):H&&!H.hasOnce&&(M!==Nt||Y>0&&Y&64)?Pt(H,I,P,!1,!0):(M===Nt&&Y&384||!L&&oe&16)&&Pt(z,I,P),N&&qe(E)}(_e&&(Ie=G&&G.onVnodeUnmounted)||ae)&&Ot(()=>{Ie&&tn(Ie,I,E),ae&&Ir(E,null,I,"unmounted")},P)},qe=E=>{const{type:I,el:P,anchor:N,transition:L}=E;if(I===Nt){Mn(P,N);return}if(I===xo){q(E);return}const M=()=>{s(P),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(E.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:W}=L,z=()=>G(P,M);W?W(E.el,M,z):z()}else M()},Mn=(E,I)=>{let P;for(;E!==I;)P=g(E),s(E),E=P;s(I)},en=(E,I,P)=>{const{bum:N,scope:L,job:M,subTree:G,um:W,m:z,a:H}=E;Nh(z),Nh(H),N&&Po(N),L.stop(),M&&(M.flags|=8,je(G,E,I,P)),W&&Ot(W,I),Ot(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Pt=(E,I,P,N=!1,L=!1,M=0)=>{for(let G=M;G<E.length;G++)je(E[G],I,P,N,L)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=g(E.anchor||E.el),P=I&&I[Zv];return P?g(P):I};let J=!1;const Q=(E,I,P)=>{E==null?I._vnode&&je(I._vnode,null,null,!0):x(I._vnode||null,E,I,null,null,null,P),I._vnode=E,J||(J=!0,Sh(),vp(),J=!1)},Z={p:x,um:je,m:Ft,r:qe,mt:Pe,mc:y,pc:we,pbc:T,n:O,o:t};return{render:Q,hydrate:void 0,createApp:Iy(Q)}}function gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $p(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$p(o,l)),l.type===Aa&&(l.el=o.el)}}function Oy(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}function Nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ny=Symbol.for("v-scx"),My=()=>Yt(Ny);function tr(t,e,n){return zp(t,e,n)}function zp(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,l=st({},n),c=e&&r||!e&&i!=="post";let h;if(Ii){if(i==="sync"){const _=My();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=on,_.resume=on,_.pause=on,_}}const d=rt;l.call=(_,C,x)=>Jt(_,d,C,x);let p=!1;i==="post"?l.scheduler=_=>{Ot(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():Mc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=Qv(t,e,l);return Ii&&(h?h.push(g):c&&g()),g}function Ly(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Wp(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=$i(this),l=zp(s,i.bind(r),n);return o(),l}function Wp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Fy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${$r(e)}Modifiers`];function Uy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Fy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map($o)));let l,c=r[l=ll(e)]||r[l=ll(Ht(e))];!c&&i&&(c=r[l=ll($r(e))]),c&&Jt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Jt(h,t,6,s)}}function Kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=h=>{const d=Kp(h,e,!0);d&&(l=!0,st(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>o[c]=null):st(o,i),Fe(t)&&r.set(t,o),o)}function ba(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,$r(e))||xe(t,e))}function Mh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:_,ctx:C,inheritAttrs:x}=t,D=Ko(t);let B,j;try{if(n.shapeFlag&4){const q=s||r,X=q;B=rn(h.call(X,q,d,p,_,g,C)),j=l}else{const q=e;B=rn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),j=e.props?l:By(l)}}catch(q){li.length=0,wa(q,t,1),B=ye(kt)}let F=B;if(j&&x!==!1){const q=Object.keys(j),{shapeFlag:X}=F;q.length&&X&7&&(i&&q.some(Tc)&&(j=jy(j,i)),F=cr(F,j,!1,!0))}return n.dirs&&(F=cr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&wi(F,n.transition),B=F,Ko(D),B}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},jy=(t,e)=>{const n={};for(const r in t)(!Tc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Lh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ba(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Lh(r,o,h):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ba(n,i))return!0}return!1}function $y({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gp=t=>t.__isSuspense;function Hy(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Xv(t)}const Nt=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),li=[];let Mt=null;function te(t=!1){li.push(Mt=t?null:[])}function zy(){li.pop(),Mt=li[li.length-1]||null}let Ei=1;function Fh(t,e=!1){Ei+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function Qp(t){return t.dynamicChildren=Ei>0?Mt||os:null,zy(),Ei>0&&Mt&&Mt.push(t),t}function ne(t,e,n,r,s,i){return Qp(A(t,e,n,r,s,i,!0))}function Wy(t,e,n,r,s){return Qp(ye(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function Pr(t,e){return t.type===e.type&&t.key===e.key}const Yp=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Ye(t)||ge(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function A(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yp(e),ref:e&&Vo(e),scopeId:wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return l?(Fc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),Ei>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const ye=Ky;function Ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===py)&&(t=kt),Yo(t)){const l=cr(t,e,!0);return n&&Fc(l,n),Ei>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag=-2,l}if(iw(t)&&(t=t.__vccOpts),e){e=Gy(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=vt(l)),Fe(c)&&(Oc(c)&&!ie(c)&&(c=st({},c)),e.style=Ac(c))}const o=Ze(t)?1:Gp(t)?128:Ep(t)?64:Fe(t)?4:ge(t)?2:0;return A(t,e,n,r,s,o,i,!0)}function Gy(t){return t?Oc(t)||Mp(t)?st({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Qy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Yp(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&wi(d,c.clone(d)),d}function $e(t=" ",e=0){return ye(Aa,null,t,e)}function Ti(t,e){const n=ye(xo,null,t);return n.staticCount=e,n}function Xe(t="",e=!1){return e?(te(),Wy(kt,null,t)):ye(kt,null,t)}function rn(t){return t==null||typeof t=="boolean"?ye(kt):ie(t)?ye(Nt,null,t.slice()):Yo(t)?Kn(t):ye(Aa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mp(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[$e(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vt([e.class,r.class]));else if(s==="style")e.style=Ac([e.style,r.style]);else if(ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Jt(t,e,7,[n,r])}const Yy=Dp();let Jy=0;function Xy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Yy,i={uid:Jy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(r,s),emitsOptions:Kp(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uy.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const Zy=()=>rt||Ct;let Jo,$l;{const t=ya(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),$l=e("__VUE_SSR_SETTERS__",n=>Ii=n)}const $i=t=>{const e=rt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Uh=()=>{rt&&rt.scope.off(),Jo(null)};function Jp(t){return t.vnode.shapeFlag&4}let Ii=!1;function ew(t,e=!1,n=!1){e&&$l(e);const{props:r,children:s}=t.vnode,i=Jp(t);Ay(t,r,i,e),Py(t,s,n);const o=i?tw(t,e):void 0;return e&&$l(!1),o}function tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,my);const{setup:r}=n;if(r){pr();const s=t.setupContext=r.length>1?rw(t):null,i=$i(t),o=ji(r,t,0,[t.props,s]),l=qf(o);if(gr(),i(),(l||t.sp)&&!oi(t)&&Cp(t),l){if(o.then(Uh,Uh),e)return o.then(c=>{Bh(t,c)}).catch(c=>{wa(c,t,0)});t.asyncDep=o}else Bh(t,o)}else Xp(t)}function Bh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=gp(e)),Xp(t)}function Xp(t,e,n){const r=t.type;t.render||(t.render=r.render||on);{const s=$i(t);pr();try{_y(t)}finally{gr(),s()}}}const nw={get(t,e){return yt(t,"get",""),t[e]}};function rw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,nw),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gp(Nc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}})):t.proxy}function sw(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function iw(t){return ge(t)&&"__vccOpts"in t}const Ke=(t,e)=>Kv(t,e,Ii);function Uc(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ie(e)?Yo(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),ye(t,e,n))}const ow="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hl;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{Hl=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const Zp=Hl?t=>Hl.createHTML(t):t=>t,aw="http://www.w3.org/2000/svg",lw="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,qh=yn&&yn.createElement("template"),cw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(aw,t):e==="mathml"?yn.createElementNS(lw,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=Zp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=qh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jn="transition",Ks="animation",bi=Symbol("_vtc"),eg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},uw=st({},Tp,eg),hw=t=>(t.displayName="Transition",t.props=uw,t),wn=hw((t,{slots:e})=>Uc(ny,dw(t),e)),Ar=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},$h=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function dw(t){const e={};for(const b in t)b in eg||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=fw(s),x=C&&C[0],D=C&&C[1],{onBeforeEnter:B,onEnter:j,onEnterCancelled:F,onLeave:q,onLeaveCancelled:X,onBeforeAppear:ce=B,onAppear:R=j,onAppearCancelled:y=F}=e,v=(b,w,Pe,Ge)=>{b._enterCancelled=Ge,Rr(b,w?d:l),Rr(b,w?h:o),Pe&&Pe()},T=(b,w)=>{b._isLeaving=!1,Rr(b,p),Rr(b,_),Rr(b,g),w&&w()},S=b=>(w,Pe)=>{const Ge=b?R:j,Ve=()=>v(w,b,Pe);Ar(Ge,[w,Ve]),Hh(()=>{Rr(w,b?c:i),_n(w,b?d:l),$h(Ge)||zh(w,r,x,Ve)})};return st(e,{onBeforeEnter(b){Ar(B,[b]),_n(b,i),_n(b,o)},onBeforeAppear(b){Ar(ce,[b]),_n(b,c),_n(b,h)},onEnter:S(!1),onAppear:S(!0),onLeave(b,w){b._isLeaving=!0;const Pe=()=>T(b,w);_n(b,p),b._enterCancelled?(_n(b,g),Gh()):(Gh(),_n(b,g)),Hh(()=>{b._isLeaving&&(Rr(b,p),_n(b,_),$h(q)||zh(b,r,D,Pe))}),Ar(q,[b,Pe])},onEnterCancelled(b){v(b,!1,void 0,!0),Ar(F,[b])},onAppearCancelled(b){v(b,!0,void 0,!0),Ar(y,[b])},onLeaveCancelled(b){T(b),Ar(X,[b])}})}function fw(t){if(t==null)return null;if(Fe(t))return[ml(t.enter),ml(t.leave)];{const e=ml(t);return[e,e]}}function ml(t){return dv(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[bi]||(t[bi]=new Set)).add(e)}function Rr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[bi];n&&(n.delete(e),n.size||(t[bi]=void 0))}function Hh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pw=0;function zh(t,e,n,r){const s=t._endId=++pw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=gw(t,e);if(!o)return r();const h=o+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=_=>{_.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,g)}function gw(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${jn}Delay`),i=r(`${jn}Duration`),o=Wh(s,i),l=r(`${Ks}Delay`),c=r(`${Ks}Duration`),h=Wh(l,c);let d=null,p=0,g=0;e===jn?o>0&&(d=jn,p=o,g=i.length):e===Ks?h>0&&(d=Ks,p=h,g=c.length):(p=Math.max(o,h),d=p>0?o>h?jn:Ks:null,g=d?d===jn?i.length:c.length:0);const _=d===jn&&/\b(transform|all)(,|$)/.test(r(`${jn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:_}}function Wh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Kh(n)+Kh(t[r])))}function Kh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gh(){return document.body.offsetHeight}function mw(t,e,n){const r=t[bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qh=Symbol("_vod"),_w=Symbol("_vsh"),vw=Symbol(""),yw=/(^|;)\s*display\s*:/;function ww(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Do(r,l,"")}else for(const o in e)n[o]==null&&Do(r,o,"");for(const o in n)o==="display"&&(i=!0),Do(r,o,n[o])}else if(s){if(e!==n){const o=r[vw];o&&(n+=";"+o),r.cssText=n,i=yw.test(n)}}else e&&t.removeAttribute("style");Qh in t&&(t[Qh]=i?r.display:"",t[_w]&&(r.display="none"))}const Yh=/\s*!important$/;function Do(t,e,n){if(ie(n))n.forEach(r=>Do(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ew(t,e);Yh.test(n)?t.setProperty($r(r),n.replace(Yh,""),"important"):t[r]=n}}const Jh=["Webkit","Moz","ms"],_l={};function Ew(t,e){const n=_l[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return _l[e]=r;r=va(r);for(let s=0;s<Jh.length;s++){const i=Jh[s]+r;if(i in t)return _l[e]=i}return e}const Xh="http://www.w3.org/1999/xlink";function Zh(t,e,n,r,s,i=vv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xh,e.slice(6,e.length)):t.setAttributeNS(Xh,e,n):n==null||i&&!Wf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":hn(n)?String(n):n)}function ed(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function In(t,e,n,r){t.addEventListener(e,n,r)}function Tw(t,e,n,r){t.removeEventListener(e,n,r)}const td=Symbol("_vei");function Iw(t,e,n,r,s=null){const i=t[td]||(t[td]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=bw(e);if(r){const h=i[e]=Sw(r,s);In(t,l,h,c)}else o&&(Tw(t,l,o,c),i[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function bw(t){let e;if(nd.test(t)){e={};let r;for(;r=t.match(nd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let vl=0;const Aw=Promise.resolve(),Rw=()=>vl||(Aw.then(()=>vl=0),vl=Date.now());function Sw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Jt(Cw(r,n.value),e,5,[r])};return n.value=t,n.attached=Rw(),n}function Cw(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?mw(t,r,o):e==="style"?ww(t,n,r):ma(e)?Tc(e)||Iw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kw(t,e,r,o))?(ed(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?ed(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zh(t,e,r,o))};function kw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rd(e)&&Ze(n)?!1:e in t}const ur=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Po(e,n):e};function xw(t){t.target.composing=!0}function sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign"),Ai={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$t]=ur(s);const i=r||s.props&&s.props.type==="number";In(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=$o(l)),t[$t](l)}),n&&In(t,"change",()=>{t.value=t.value.trim()}),e||(In(t,"compositionstart",xw),In(t,"compositionend",sd),In(t,"change",sd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[$t]=ur(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?$o(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Vw={deep:!0,created(t,e,n){t[$t]=ur(n),In(t,"change",()=>{const r=t._modelValue,s=ps(t),i=t.checked,o=t[$t];if(ie(r)){const l=Rc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),o(h)}}else if(As(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(tg(t,i))})},mounted:id,beforeUpdate(t,e,n){t[$t]=ur(n),id(t,e,n)}};function id(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=Rc(e,r.props.value)>-1;else if(As(e))s=e.has(r.props.value);else{if(e===n)return;s=Nr(e,tg(t,!0))}t.checked!==s&&(t.checked=s)}const Dw={created(t,{value:e},n){t.checked=Nr(e,n.props.value),t[$t]=ur(n),In(t,"change",()=>{t[$t](ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[$t]=ur(r),e!==n&&(t.checked=Nr(e,r.props.value))}},Ow={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=As(e);In(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(ps(o)):ps(o));t[$t](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ea(()=>{t._assigning=!1})}),t[$t]=ur(r)},mounted(t,{value:e}){od(t,e)},beforeUpdate(t,e,n){t[$t]=ur(n)},updated(t,{value:e}){t._assigning||od(t,e)}};function od(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!As(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ps(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=Rc(e,l)>-1}else o.selected=e.has(l);else if(Nr(ps(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ps(t){return"_value"in t?t._value:t.value}function tg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zl={created(t,e,n){Io(t,e,n,null,"created")},mounted(t,e,n){Io(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Io(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Io(t,e,n,r,"updated")}};function Nw(t,e){switch(t){case"SELECT":return Ow;case"TEXTAREA":return Ai;default:switch(e){case"checkbox":return Vw;case"radio":return Dw;default:return Ai}}}function Io(t,e,n,r,s){const o=Nw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Mw=["ctrl","shift","alt","meta"],Lw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mw.some(n=>t[`${n}Key`]&&!e.includes(n))},ng=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Lw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Fw=st({patchProp:Pw},cw);let ad;function Uw(){return ad||(ad=xy(Fw))}const Bw=(...t)=>{const e=Uw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qw(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,jw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function jw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qw(t){return Ze(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rg;const Sa=t=>rg=t,sg=Symbol();function Wl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ci||(ci={}));function $w(){const t=Yf(!0),e=t.run(()=>ve({}));let n=[],r=[];const s=Nc({install(i){Sa(s),s._a=i,i.provide(sg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ig=()=>{};function ld(t,e,n,r=ig){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jf()&&wv(s),s}function Xr(t,...e){t.slice().forEach(n=>{n(...e)})}const Hw=t=>t(),cd=Symbol(),yl=Symbol();function Kl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Wl(s)&&Wl(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!Vr(r)?t[n]=Kl(s,r):t[n]=r}return t}const zw=Symbol();function Ww(t){return!Wl(t)||!Object.prototype.hasOwnProperty.call(t,zw)}const{assign:Hn}=Object;function Kw(t){return!!(Ye(t)&&t.effect)}function Gw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=$v(n.state.value[t]);return Hn(d,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=Nc(Ke(()=>{Sa(n);const _=n._s.get(t);return o[g].call(_,_)})),p),{}))}return c=og(t,h,e,n,r,!0),c}function og(t,e,n={},r,s,i){let o;const l=Hn({actions:{}},n),c={deep:!0};let h,d,p=[],g=[],_;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),ve({});let x;function D(y){let v;h=d=!1,typeof y=="function"?(y(r.state.value[t]),v={type:ci.patchFunction,storeId:t,events:_}):(Kl(r.state.value[t],y),v={type:ci.patchObject,payload:y,storeId:t,events:_});const T=x=Symbol();Ea().then(()=>{x===T&&(h=!0)}),d=!0,Xr(p,v,r.state.value[t])}const B=i?function(){const{state:v}=n,T=v?v():{};this.$patch(S=>{Hn(S,T)})}:ig;function j(){o.stop(),p=[],g=[],r._s.delete(t)}const F=(y,v="")=>{if(cd in y)return y[yl]=v,y;const T=function(){Sa(r);const S=Array.from(arguments),b=[],w=[];function Pe(de){b.push(de)}function Ge(de){w.push(de)}Xr(g,{args:S,name:T[yl],store:X,after:Pe,onError:Ge});let Ve;try{Ve=y.apply(this&&this.$id===t?this:X,S)}catch(de){throw Xr(w,de),de}return Ve instanceof Promise?Ve.then(de=>(Xr(b,de),de)).catch(de=>(Xr(w,de),Promise.reject(de))):(Xr(b,Ve),Ve)};return T[cd]=!0,T[yl]=v,T},q={_p:r,$id:t,$onAction:ld.bind(null,g),$patch:D,$reset:B,$subscribe(y,v={}){const T=ld(p,y,v.detached,()=>S()),S=o.run(()=>tr(()=>r.state.value[t],b=>{(v.flush==="sync"?d:h)&&y({storeId:t,type:ci.direct,events:_},b)},Hn({},c,v)));return T},$dispose:j},X=Bi(q);r._s.set(t,X);const R=(r._a&&r._a.runWithContext||Hw)(()=>r._e.run(()=>(o=Yf()).run(()=>e({action:F}))));for(const y in R){const v=R[y];if(Ye(v)&&!Kw(v)||Vr(v))i||(C&&Ww(v)&&(Ye(v)?v.value=C[y]:Kl(v,C[y])),r.state.value[t][y]=v);else if(typeof v=="function"){const T=F(v,y);R[y]=T,l.actions[y]=v}}return Hn(X,R),Hn(Ae(X),R),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:y=>{D(v=>{Hn(v,y)})}}),r._p.forEach(y=>{Hn(X,o.run(()=>y({store:X,app:r._a,pinia:r,options:l})))}),C&&i&&n.hydrate&&n.hydrate(X.$state,C),h=!0,d=!0,X}/*! #__NO_SIDE_EFFECTS__ */function Qw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=by();return o=o||(c?Yt(sg,null):null),o&&Sa(o),o=rg,o._s.has(t)||(s?og(t,e,r,o):Gw(t,r,o)),o._s.get(t)}return i.$id=t,i}var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Jw;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(t){const e=ag(t);return lg.encodeByteArray(e,!0)},Xo=function(t){return Xw(t).replace(/\./g,"")},cg=function(t){try{return lg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=()=>Zw().__FIREBASE_DEFAULTS__,tE=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cg(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return eE()||tE()||nE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ug=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rE=t=>{const e=ug(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hg=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},dg=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function aE(){var t;const e=(t=Ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hE(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dE(){return!aE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gE,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Nn(s,l,r)}}function mE(t,e){return t.replace(_E,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _E=/\{\$([^}]+)}/g;function vE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hd(i)&&hd(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yE(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wl),s.error===void 0&&(s.error=wl),s.complete===void 0&&(s.complete=wl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bE(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IE(t){return t===Cr?void 0:t}function bE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const RE={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},SE=Te.INFO,CE={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},PE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=CE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=SE,this._logHandler=PE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const kE=(t,e)=>e.some(n=>t instanceof n);let dd,fd;function xE(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VE(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Gl=new WeakMap,pg=new WeakMap,El=new WeakMap,jc=new WeakMap;function DE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function OE(t){if(Gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NE(t){Ql=t(Ql)}function ME(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return pg.set(r,e.sort?e.sort():[e]),nr(r)}:VE().includes(t)?function(...e){return t.apply(Tl(this),e),nr(fg.get(this))}:function(...e){return nr(t.apply(Tl(this),e))}}function LE(t){return typeof t=="function"?ME(t):(t instanceof IDBTransaction&&OE(t),kE(t,xE())?new Proxy(t,Ql):t)}function nr(t){if(t instanceof IDBRequest)return DE(t);if(El.has(t))return El.get(t);const e=LE(t);return e!==t&&(El.set(t,e),jc.set(e,t)),e}const Tl=t=>jc.get(t);function FE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(nr(o.result),c.oldVersion,c.newVersion,nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const UE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],Il=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Il.get(e))return Il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=BE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UE.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Il.set(e,i),i}NE(t=>({...t,get:(e,n,r)=>pd(e,n)||t.get(e,n,r),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",gd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new Bc("@firebase/app"),$E="@firebase/app-compat",HE="@firebase/analytics-compat",zE="@firebase/analytics",WE="@firebase/app-check-compat",KE="@firebase/app-check",GE="@firebase/auth",QE="@firebase/auth-compat",YE="@firebase/database",JE="@firebase/data-connect",XE="@firebase/database-compat",ZE="@firebase/functions",e0="@firebase/functions-compat",t0="@firebase/installations",n0="@firebase/installations-compat",r0="@firebase/messaging",s0="@firebase/messaging-compat",i0="@firebase/performance",o0="@firebase/performance-compat",a0="@firebase/remote-config",l0="@firebase/remote-config-compat",c0="@firebase/storage",u0="@firebase/storage-compat",h0="@firebase/firestore",d0="@firebase/vertexai-preview",f0="@firebase/firestore-compat",p0="firebase",g0="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="[DEFAULT]",m0={[Yl]:"fire-core",[$E]:"fire-core-compat",[zE]:"fire-analytics",[HE]:"fire-analytics-compat",[KE]:"fire-app-check",[WE]:"fire-app-check-compat",[GE]:"fire-auth",[QE]:"fire-auth-compat",[YE]:"fire-rtdb",[JE]:"fire-data-connect",[XE]:"fire-rtdb-compat",[ZE]:"fire-fn",[e0]:"fire-fn-compat",[t0]:"fire-iid",[n0]:"fire-iid-compat",[r0]:"fire-fcm",[s0]:"fire-fcm-compat",[i0]:"fire-perf",[o0]:"fire-perf-compat",[a0]:"fire-rc",[l0]:"fire-rc-compat",[c0]:"fire-gcs",[u0]:"fire-gcs-compat",[h0]:"fire-fst",[f0]:"fire-fst-compat",[d0]:"fire-vertex","fire-js":"fire-js",[p0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Map,_0=new Map,Xl=new Map;function md(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(Xl.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of ea.values())md(n,t);for(const n of _0.values())md(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Hi("app","Firebase",v0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=g0;function gg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=hg()),!n)throw rr.create("no-options");const i=ea.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new AE(s);for(const c of Xl.values())o.addComponent(c);const l=new y0(n,r,o);return ea.set(s,l),l}function mg(t=Jl){const e=ea.get(t);if(!e&&t===Jl&&hg())return gg();if(!e)throw rr.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=m0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}gs(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="firebase-heartbeat-database",E0=1,Ri="firebase-heartbeat-store";let bl=null;function _g(){return bl||(bl=FE(w0,E0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),bl}async function T0(t){try{const n=(await _g()).transaction(Ri),r=await n.objectStore(Ri).get(vg(t));return await n.done,r}catch(e){if(e instanceof Nn)kn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function _d(t,e){try{const r=(await _g()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,vg(t)),await r.done}catch(n){if(n instanceof Nn)kn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function vg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1024,b0=30*24*60*60*1e3;class A0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=b0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:s}=R0(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function R0(t,e=I0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class S0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await T0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){gs(new Lr("platform-logger",e=>new jE(e),"PRIVATE")),gs(new Lr("heartbeat",e=>new A0(e),"PRIVATE")),sr(Yl,gd,t),sr(Yl,gd,"esm2017"),sr("fire-js","")}C0("");var P0="firebase",k0="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(P0,k0,"app");function $c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x0=yg,wg=new Hi("auth","Firebase",yg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Bc("@firebase/auth");function V0(t,...e){ta.logLevel<=Te.WARN&&ta.warn(`Auth (${Ss}): ${t}`,...e)}function Oo(t,...e){ta.logLevel<=Te.ERROR&&ta.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Hc(t,...e)}function an(t,...e){return Hc(t,...e)}function Eg(t,e,n){const r=Object.assign(Object.assign({},x0()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return Eg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wg.create(t,...e)}function he(t,e,...n){if(!t)throw Hc(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function xn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function D0(){return wd()==="http:"||wd()==="https:"}function wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(D0()||cE()||"connection"in navigator)?navigator.onLine:!0}function N0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=oE()||uE()}get(){return O0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new Wi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,s={}){return Ig(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return lE()||(h.referrerPolicy="no-referrer"),Tg.fetch()(bg(t,t.config.apiHost,n,l),h)})}async function Ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},M0),e);try{const s=new U0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Eg(t,d,h);Xt(t,d)}}catch(s){if(s instanceof Nn)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function Ki(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,s):`${t.config.apiScheme}://${s}`}function F0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),L0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Ed(t){return t!==void 0&&t.enterprise!==void 0}class B0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return F0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function j0(t,e){return _r(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function Ag(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $0(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Wc(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(Al(s.auth_time)),issuedAtTime:ui(Al(s.iat)),expirationTime:ui(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cg(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Td(t){const e=Wc(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&H0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function H0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,Ag(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],l=K0(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function W0(t){const e=xt(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(t){return t.map(e=>{var{providerId:n}=e,r=$c(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e){const n=await Ig(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Q0(t,e){return _r(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Td(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await G0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new us;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $0(this,e)}reload(){return W0(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Si(this,q0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:q,isAnonymous:X,providerData:ce,stsTokenManager:R}=n;he(F&&R,e,"internal-error");const y=us.fromJSON(this.name,R);he(typeof F=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),he(typeof q=="boolean",e,"internal-error"),he(typeof X=="boolean",e,"internal-error"),qn(_,e.name),qn(C,e.name),qn(x,e.name),qn(D,e.name),qn(B,e.name),qn(j,e.name);const v=new An({uid:F,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:X,photoURL:C,phoneNumber:_,tenantId:x,stsTokenManager:y,createdAt:B,lastLoginAt:j});return ce&&Array.isArray(ce)&&(v.providerData=ce.map(T=>Object.assign({},T))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new us;l.updateFromIdToken(r);const c=new An({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=new Map;function Rn(t){xn(t instanceof Function,"Expected a class definition");let e=Id.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Id.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const bd=Sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Rn(bd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Rn(bd);const o=No(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=An._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Og(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Vg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(t=Tt()){return/firefox\//i.test(t)}function Pg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(t=Tt()){return/crios\//i.test(t)}function xg(t=Tt()){return/iemobile/i.test(t)}function Vg(t=Tt()){return/android/i.test(t)}function Dg(t=Tt()){return/blackberry/i.test(t)}function Og(t=Tt()){return/webos/i.test(t)}function Kc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Y0(t=Tt()){var e;return Kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J0(){return hE()&&document.documentMode===10}function Ng(t=Tt()){return Kc(t)||Vg(t)||Og(t)||Dg(t)||/windows phone/i.test(t)||xg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e=[]){let n;switch(t){case"Browser":n=Ad(Tt());break;case"Worker":n=`${Ad(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e={}){return _r(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=6;class tT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new X0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ag(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Cn(this));const n=e?xt(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Z0(this),n=new tT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Q0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&V0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return xt(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yE(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rT(t){Pa=t}function Lg(t){return Pa.loadJS(t)}function sT(){return Pa.recaptchaEnterpriseScript}function iT(){return Pa.gapiScript}function oT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const aT="recaptcha-enterprise",lT="NO_RECAPTCHA";class cT{constructor(e){this.type=aT,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{j0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new B0(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Ed(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(lT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ed(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=sT();c.length!==0&&(c+=l),Lg(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Sd(t,e,n,r=!1){const s=new cT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){const n=qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function hT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dT(t,e,n){const r=Hr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fg(e),{host:o,port:l}=fT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),pT()}function Fg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fT(t){const e=Fg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cd(o)}}}function Cd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function gT(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e){return Ki(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function vT(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends Gc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,n,"signInWithPassword",mT);case"emailLink":return _T(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,r,"signUpPassword",gT);case"emailLink":return vT(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Ki(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="http://localhost";class Fr extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$c(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:yT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ET(t){const e=Js(Xs(t)).link,n=e?Js(Xs(e)).deep_link_id:null,r=Js(Xs(t)).deep_link_id;return(r?Js(Xs(r)).link:null)||r||n||e||t}class Qc{constructor(e){var n,r,s,i,o,l;const c=Js(Xs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=wT((s=c.mode)!==null&&s!==void 0?s:null);he(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ET(e);try{return new Qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qc.parseLink(n);return he(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Gi{constructor(){super("facebook.com")}static credential(e){return Fr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Gi{constructor(){super("github.com")}static credential(e){return Fr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Fr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e){return Ki(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=Pd(r);return new Ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Pd(r);return new Ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function Bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function IT(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await Si(t,Bg(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Wc(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(t,e,n=!1){if(sn(t.app))return Promise.reject(Cn(t));const r="signIn",s=await Bg(t,r,e),i=await Ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function AT(t,e){return jg(Hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $g(t,e,n){if(sn(t.app))return Promise.reject(Cn(t));const r=Hr(t),o=await tc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qg(t),c}),l=await Ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RT(t,e,n){return sn(t.app)?Promise.reject(Cn(t)):AT(xt(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qg(t),r})}function ST(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function CT(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function Yc(t,e,n,r){return xt(t).onAuthStateChanged(e,n,r)}function Hg(t){return xt(t).signOut()}const sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=1e3,kT=10;class Wg extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);J0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const xT=Wg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kg.type="SESSION";const Gg=Kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await VT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Jc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function OT(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function NT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LT(){return Qg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="firebaseLocalStorageDb",FT=1,ia="firebaseLocalStorage",Jg="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function UT(){const t=indexedDB.deleteDatabase(Yg);return new Qi(t).toPromise()}function nc(){const t=indexedDB.open(Yg,FT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:Jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await UT(),e(await nc()))})})}async function kd(t,e,n){const r=xa(t,!0).put({[Jg]:e,value:n});return new Qi(r).toPromise()}async function BT(t,e){const n=xa(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=xa(t,!0).delete(e);return new Qi(n).toPromise()}const jT=800,qT=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(LT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NT(),!this.activeServiceWorker)return;this.sender=new DT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await kd(e,sa,"1"),await xd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const $T=Xg;new Wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e){return e?Rn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zT(t){return jg(t.auth,new Xc(t),t.bypassAuthState)}function WT(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),bT(n,new Xc(t),t.bypassAuthState)}async function KT(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),IT(n,new Xc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zT;case"linkViaPopup":case"linkViaRedirect":return KT;case"reauthViaPopup":case"reauthViaRedirect":return WT;default:Xt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Wi(2e3,1e4);class is extends Zg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GT.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="pendingRedirect",Mo=new Map;class YT extends Zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await JT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JT(t,e){const n=eI(e),r=ZT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XT(t,e){Mo.set(t._key(),e)}function ZT(t){return Rn(t._redirectPersistence)}function eI(t){return No(QT,t.config.apiKey,t.name)}async function tI(t,e,n=!1){if(sn(t.app))return Promise.reject(Cn(t));const r=Hr(t),s=HT(r,e),o=await new YT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=10*60*1e3;class rI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!em(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function em({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return em(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aI=/^https?/;async function lI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iI(t);for(const n of e)try{if(cI(n))return}catch{}Xt(t,"unauthorized-domain")}function cI(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aI.test(n))return!1;if(oI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new Wi(3e4,6e4);function Dd(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hI(t){return new Promise((e,n)=>{var r,s,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(an(t,"network-request-failed"))},timeout:uI.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const l=oT("iframefcb");return ln()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Lg(`${iT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function dI(t){return Lo=Lo||hI(t),Lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new Wi(5e3,15e3),pI="__/auth/iframe",gI="emulator/auth/iframe",mI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,gI):`https://${t.config.authDomain}/${pI}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},s=_I.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function yI(t){const e=await dI(t),n=ln().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:vI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},fI.get());function c(){ln().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EI=500,TI=600,II="_blank",bI="http://localhost";class Od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AI(t,e,n,r=EI,s=TI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},wI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Tt().toLowerCase();n&&(l=kg(h)?II:n),Cg(h)&&(e=e||bI,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(Y0(h)&&l!=="_self")return RI(e||"",l),new Od(null);const p=window.open(e||"",l,d);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Od(p)}function RI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="__/auth/handler",CI="emulator/auth/handler",PI=encodeURIComponent("fac");async function Nd(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:s};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${PI}=${encodeURIComponent(c)}`:"";return`${kI(t)}?${zi(l).slice(1)}${h}`}function kI({config:t}){return t.emulator?zc(t,CI):`https://${t.authDomain}/${SI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="webStorageSupport";class xI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gg,this._completeRedirectFn=tI,this._overrideRedirectResult=XT}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nd(e,n,r,Zl(),s);return AI(e,o,Jc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nd(e,n,r,Zl(),s);return OT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yI(e),r=new rI(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rl];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ng()||Pg()||Kc()}}const VI=xI;var Md="@firebase/auth",Ld="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NI(t){gs(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mg(t)},h=new nT(r,s,i,c);return hT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gs(new Lr("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new DI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Md,Ld,OI(t)),sr(Md,Ld,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=5*60,LI=dg("authIdTokenMaxAge")||MI;let Fd=null;const FI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LI)return;const s=n==null?void 0:n.token;Fd!==s&&(Fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UI(t=mg()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uT(t,{popupRedirectResolver:VI,persistence:[$T,xT,Gg]}),r=dg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=FI(i.toString());CT(n,o,()=>o(n.currentUser)),ST(n,l=>o(l))}}const s=ug("auth");return s&&dT(n,`http://${s}`),n}function BI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NI("Browser");var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,tm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function v(){}v.prototype=y.prototype,R.D=y.prototype,R.prototype=new v,R.prototype.constructor=R,R.C=function(T,S,b){for(var w=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)w[Pe-2]=arguments[Pe];return y.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)T[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)T[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=R.g[0],v=R.g[1],S=R.g[2];var b=R.g[3],w=y+(b^v&(S^b))+T[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=b+(S^y&(v^S))+T[1]+3905402710&4294967295,b=y+(w<<12&4294967295|w>>>20),w=S+(v^b&(y^v))+T[2]+606105819&4294967295,S=b+(w<<17&4294967295|w>>>15),w=v+(y^S&(b^y))+T[3]+3250441966&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(b^v&(S^b))+T[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=b+(S^y&(v^S))+T[5]+1200080426&4294967295,b=y+(w<<12&4294967295|w>>>20),w=S+(v^b&(y^v))+T[6]+2821735955&4294967295,S=b+(w<<17&4294967295|w>>>15),w=v+(y^S&(b^y))+T[7]+4249261313&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(b^v&(S^b))+T[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=b+(S^y&(v^S))+T[9]+2336552879&4294967295,b=y+(w<<12&4294967295|w>>>20),w=S+(v^b&(y^v))+T[10]+4294925233&4294967295,S=b+(w<<17&4294967295|w>>>15),w=v+(y^S&(b^y))+T[11]+2304563134&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(b^v&(S^b))+T[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=b+(S^y&(v^S))+T[13]+4254626195&4294967295,b=y+(w<<12&4294967295|w>>>20),w=S+(v^b&(y^v))+T[14]+2792965006&4294967295,S=b+(w<<17&4294967295|w>>>15),w=v+(y^S&(b^y))+T[15]+1236535329&4294967295,v=S+(w<<22&4294967295|w>>>10),w=y+(S^b&(v^S))+T[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=b+(v^S&(y^v))+T[6]+3225465664&4294967295,b=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(b^y))+T[11]+643717713&4294967295,S=b+(w<<14&4294967295|w>>>18),w=v+(b^y&(S^b))+T[0]+3921069994&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^b&(v^S))+T[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=b+(v^S&(y^v))+T[10]+38016083&4294967295,b=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(b^y))+T[15]+3634488961&4294967295,S=b+(w<<14&4294967295|w>>>18),w=v+(b^y&(S^b))+T[4]+3889429448&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^b&(v^S))+T[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=b+(v^S&(y^v))+T[14]+3275163606&4294967295,b=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(b^y))+T[3]+4107603335&4294967295,S=b+(w<<14&4294967295|w>>>18),w=v+(b^y&(S^b))+T[8]+1163531501&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(S^b&(v^S))+T[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=b+(v^S&(y^v))+T[2]+4243563512&4294967295,b=y+(w<<9&4294967295|w>>>23),w=S+(y^v&(b^y))+T[7]+1735328473&4294967295,S=b+(w<<14&4294967295|w>>>18),w=v+(b^y&(S^b))+T[12]+2368359562&4294967295,v=S+(w<<20&4294967295|w>>>12),w=y+(v^S^b)+T[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=b+(y^v^S)+T[8]+2272392833&4294967295,b=y+(w<<11&4294967295|w>>>21),w=S+(b^y^v)+T[11]+1839030562&4294967295,S=b+(w<<16&4294967295|w>>>16),w=v+(S^b^y)+T[14]+4259657740&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^b)+T[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=b+(y^v^S)+T[4]+1272893353&4294967295,b=y+(w<<11&4294967295|w>>>21),w=S+(b^y^v)+T[7]+4139469664&4294967295,S=b+(w<<16&4294967295|w>>>16),w=v+(S^b^y)+T[10]+3200236656&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^b)+T[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=b+(y^v^S)+T[0]+3936430074&4294967295,b=y+(w<<11&4294967295|w>>>21),w=S+(b^y^v)+T[3]+3572445317&4294967295,S=b+(w<<16&4294967295|w>>>16),w=v+(S^b^y)+T[6]+76029189&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(v^S^b)+T[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=b+(y^v^S)+T[12]+3873151461&4294967295,b=y+(w<<11&4294967295|w>>>21),w=S+(b^y^v)+T[15]+530742520&4294967295,S=b+(w<<16&4294967295|w>>>16),w=v+(S^b^y)+T[2]+3299628645&4294967295,v=S+(w<<23&4294967295|w>>>9),w=y+(S^(v|~b))+T[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=b+(v^(y|~S))+T[7]+1126891415&4294967295,b=y+(w<<10&4294967295|w>>>22),w=S+(y^(b|~v))+T[14]+2878612391&4294967295,S=b+(w<<15&4294967295|w>>>17),w=v+(b^(S|~y))+T[5]+4237533241&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~b))+T[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=b+(v^(y|~S))+T[3]+2399980690&4294967295,b=y+(w<<10&4294967295|w>>>22),w=S+(y^(b|~v))+T[10]+4293915773&4294967295,S=b+(w<<15&4294967295|w>>>17),w=v+(b^(S|~y))+T[1]+2240044497&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~b))+T[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=b+(v^(y|~S))+T[15]+4264355552&4294967295,b=y+(w<<10&4294967295|w>>>22),w=S+(y^(b|~v))+T[6]+2734768916&4294967295,S=b+(w<<15&4294967295|w>>>17),w=v+(b^(S|~y))+T[13]+1309151649&4294967295,v=S+(w<<21&4294967295|w>>>11),w=y+(S^(v|~b))+T[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=b+(v^(y|~S))+T[11]+3174756917&4294967295,b=y+(w<<10&4294967295|w>>>22),w=S+(y^(b|~v))+T[2]+718787259&4294967295,S=b+(w<<15&4294967295|w>>>17),w=v+(b^(S|~y))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,R.g[2]=R.g[2]+S&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var v=y-this.blockSize,T=this.B,S=this.h,b=0;b<y;){if(S==0)for(;b<=v;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<y;)if(T[S++]=R.charCodeAt(b++),S==this.blockSize){s(this,T),S=0;break}}else for(;b<y;)if(T[S++]=R[b++],S==this.blockSize){s(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var v=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=v&255,v/=256;for(this.u(R),R=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)R[v++]=this.g[y]>>>T&255;return R};function i(R,y){var v=l;return Object.prototype.hasOwnProperty.call(v,R)?v[R]:v[R]=y(R)}function o(R,y){this.h=y;for(var v=[],T=!0,S=R.length-1;0<=S;S--){var b=R[S]|0;T&&b==y||(v[S]=b,T=!1)}this.g=v}var l={};function c(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return D(h(-R));for(var y=[],v=1,T=0;R>=v;T++)y[T]=R/v|0,v*=4294967296;return new o(y,0)}function d(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return D(d(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=p,S=0;S<R.length;S+=8){var b=Math.min(8,R.length-S),w=parseInt(R.substring(S,S+b),y);8>b?(b=h(Math.pow(y,b)),T=T.j(b).add(h(w))):(T=T.j(v),T=T.add(h(w)))}return T}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();for(var R=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);R+=(0<=T?T:4294967296+T)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(x(this))return"-"+D(this).toString(R);for(var y=h(Math.pow(R,6)),v=this,T="";;){var S=q(v,y).g;v=B(v,S.j(y));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(R);if(v=S,C(v))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function x(R){return R.h==-1}t.l=function(R){return R=B(this,R),x(R)?-1:C(R)?0:1};function D(R){for(var y=R.g.length,v=[],T=0;T<y;T++)v[T]=~R.g[T];return new o(v,~R.h).add(g)}t.abs=function(){return x(this)?D(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),v=[],T=0,S=0;S<=y;S++){var b=T+(this.i(S)&65535)+(R.i(S)&65535),w=(b>>>16)+(this.i(S)>>>16)+(R.i(S)>>>16);T=w>>>16,b&=65535,w&=65535,v[S]=w<<16|b}return new o(v,v[v.length-1]&-2147483648?-1:0)};function B(R,y){return R.add(D(y))}t.j=function(R){if(C(this)||C(R))return p;if(x(this))return x(R)?D(this).j(D(R)):D(D(this).j(R));if(x(R))return D(this.j(D(R)));if(0>this.l(_)&&0>R.l(_))return h(this.m()*R.m());for(var y=this.g.length+R.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<R.g.length;S++){var b=this.i(T)>>>16,w=this.i(T)&65535,Pe=R.i(S)>>>16,Ge=R.i(S)&65535;v[2*T+2*S]+=w*Ge,j(v,2*T+2*S),v[2*T+2*S+1]+=b*Ge,j(v,2*T+2*S+1),v[2*T+2*S+1]+=w*Pe,j(v,2*T+2*S+1),v[2*T+2*S+2]+=b*Pe,j(v,2*T+2*S+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function j(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function F(R,y){this.g=R,this.h=y}function q(R,y){if(C(y))throw Error("division by zero");if(C(R))return new F(p,p);if(x(R))return y=q(D(R),y),new F(D(y.g),D(y.h));if(x(y))return y=q(R,D(y)),new F(D(y.g),y.h);if(30<R.g.length){if(x(R)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,T=y;0>=T.l(R);)v=X(v),T=X(T);var S=ce(v,1),b=ce(T,1);for(T=ce(T,2),v=ce(v,2);!C(T);){var w=b.add(T);0>=w.l(R)&&(S=S.add(v),b=w),T=ce(T,1),v=ce(v,1)}return y=B(R,S.j(y)),new F(S,y)}for(S=p;0<=R.l(y);){for(v=Math.max(1,Math.floor(R.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(v),w=b.j(y);x(w)||0<w.l(R);)v-=T,b=h(v),w=b.j(y);C(b)&&(b=g),S=S.add(b),R=B(R,w)}return new F(S,R)}t.A=function(R){return q(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&R.i(T);return new o(v,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|R.i(T);return new o(v,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^R.i(T);return new o(v,this.h^R.h)};function X(R){for(var y=R.g.length+1,v=[],T=0;T<y;T++)v[T]=R.i(T)<<1|R.i(T-1)>>>31;return new o(v,R.h)}function ce(R,y){var v=y>>5;y%=32;for(var T=R.g.length-v,S=[],b=0;b<T;b++)S[b]=0<y?R.i(b+v)>>>y|R.i(b+v+1)<<32-y:R.i(b+v);return new o(S,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Or=o}).apply(typeof Ud<"u"?Ud:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nm,Zs,rm,Fo,rc,sm,im,om;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in f))break e;f=f[k]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,k={next:function(){if(!m&&f<a.length){var V=f++;return{value:u(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(u,k)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,k,V){for(var K=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)K[Oe-2]=arguments[Oe];return u.prototype[k].apply(m,K)}}function x(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const k=a.length||0,V=m.length||0;a.length=k+V;for(let K=0;K<V;K++)a[k+K]=m[K]}else a.push(m)}}class B{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var X=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function ce(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function R(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(f in m)a[f]=m[f];for(let V=0;V<v.length;V++)f=v[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function S(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function w(){var a=Vt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Pe{constructor(){this.h=this.g=null}add(u,f){const m=Ge.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ge=new B(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let de,we=!1,Vt=new Pe,zt=()=>{const a=l.Promise.resolve(void 0);de=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){b(f)}var u=Ge;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}we=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function en(a,u){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(X){e:{try{q(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&en.aa.h.call(this)}}C(en,qe);var Pt={2:"touch",3:"pen",4:"mouse"};en.prototype.h=function(){en.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,m,k){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=k,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,u,f,m,k){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var K=I(a,u,m,k);return-1<K?(u=a[K],f||(u.fa=!1)):(u=new Q(u,this.src,V,!!m,k),u.fa=f,a.push(u)),u};function E(a,u){var f=u.type;if(f in a.g){var m=a.g[f],k=Array.prototype.indexOf.call(m,u,void 0),V;(V=0<=k)&&Array.prototype.splice.call(m,k,1),V&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function I(a,u,f,m){for(var k=0;k<a.length;++k){var V=a[k];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==m)return k}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function L(a,u,f,m,k){if(Array.isArray(u)){for(var V=0;V<u.length;V++)L(a,u[V],f,m,k);return null}return f=ue(f),a&&a[O]?a.K(u,f,h(m)?!!m.capture:!1,k):M(a,u,f,!1,m,k)}function M(a,u,f,m,k,V){if(!u)throw Error("Invalid event type");var K=h(k)?!!k.capture:!!k,Oe=Y(a);if(Oe||(a[P]=Oe=new Re(a)),f=Oe.add(u,f,m,K,V),f.proxy)return f;if(m=G(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Mn||(k=K),k===void 0&&(k=!1),a.addEventListener(u.toString(),m,k);else if(a.attachEvent)a.attachEvent(H(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return u.call(a.src,a.listener,f)}const u=oe;return a}function W(a,u,f,m,k){if(Array.isArray(u))for(var V=0;V<u.length;V++)W(a,u[V],f,m,k);else m=h(m)?!!m.capture:!!m,f=ue(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(V=a.g[u],f=I(V,f,m,k),-1<f&&(Z(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=I(u,f,m,k)),(f=-1<a?u[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])E(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(H(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=Y(u))?(E(f,a),f.h==0&&(f.src=null,u[P]=null)):Z(a)}}}function H(a){return a in N?N[a]:N[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new en(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&z(a),a=f.call(m,u)}return a}function Y(a){return a=a[P],a instanceof Re?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function ae(){je.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ae,je),ae.prototype[O]=!0,ae.prototype.removeEventListener=function(a,u,f,m){W(this,a,u,f,m)};function _e(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new qe(u,a);else if(u instanceof qe)u.target=u.target||a;else{var k=u;u=new qe(m,a),T(u,k)}if(k=!0,f)for(var V=f.length-1;0<=V;V--){var K=u.g=f[V];k=Ie(K,m,!0,u)&&k}if(K=u.g=a,k=Ie(K,m,!0,u)&&k,k=Ie(K,m,!1,u)&&k,f)for(V=0;V<f.length;V++)K=u.g=f[V],k=Ie(K,m,!1,u)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)Z(f[m]);delete a.g[u],a.h--}}this.F=null},ae.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ae.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ie(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,V=0;V<u.length;++V){var K=u[V];if(K&&!K.da&&K.capture==f){var Oe=K.listener,at=K.ha||K.src;K.fa&&E(a.i,K),k=Oe.call(at,m)!==!1&&k}}return k&&!m.defaultPrevented}function dt(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function it(a){a.g=dt(()=>{a.g=null,a.i&&(a.i=!1,it(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ut extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){je.call(this),this.h=a,this.g={}}C(ft,je);var Ln=[];function Ds(a){ce(a.g,function(u,f){this.g.hasOwnProperty(f)&&z(u)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Ds(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=l.JSON.stringify,Bt=l.JSON.parse,no=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ka(){}Ka.prototype.h=null;function Vu(a){return a.h||(a.h=a.i())}function Du(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ga(){qe.call(this,"d")}C(Ga,qe);function Qa(){qe.call(this,"c")}C(Qa,qe);var yr={},Ou=null;function ro(){return Ou=Ou||new ae}yr.La="serverreachability";function Nu(a){qe.call(this,yr.La,a)}C(Nu,qe);function Ns(a){const u=ro();_e(u,new Nu(u))}yr.STAT_EVENT="statevent";function Mu(a,u){qe.call(this,yr.STAT_EVENT,a),this.stat=u}C(Mu,qe);function It(a){const u=ro();_e(u,new Mu(u,a))}yr.Ma="timingevent";function Lu(a,u){qe.call(this,yr.Ma,a),this.size=u}C(Lu,qe);function Ms(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function F_(a,u,f,m,k,V){a.info(function(){if(a.g)if(V)for(var K="",Oe=V.split("&"),at=0;at<Oe.length;at++){var Se=Oe[at].split("=");if(1<Se.length){var pt=Se[0];Se=Se[1];var gt=pt.split("_");K=2<=gt.length&&gt[1]=="type"?K+(pt+"="+Se+"&"):K+(pt+"=redacted&")}}else K=null;else K=V;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+f+`
`+K})}function U_(a,u,f,m,k,V,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+f+`
`+V+" "+K})}function Kr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+j_(a,f)+(m?" "+m:"")})}function B_(a,u){a.info(function(){return"TIMEOUT: "+u})}Ls.prototype.info=function(){};function j_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var V=k[0];if(V!="noop"&&V!="stop"&&V!="close")for(var K=1;K<k.length;K++)k[K]=""}}}}return ot(f)}catch{return u}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ya;function io(){}C(io,Ka),io.prototype.g=function(){return new XMLHttpRequest},io.prototype.i=function(){return{}},Ya=new io;function Fn(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var Bu={},Ja={};function Xa(a,u,f){a.L=1,a.v=co(pn(u)),a.m=f,a.P=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),oo(a),a.A=pn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),th(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Uu,a.g=yh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Ut(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Ln[0]=k.toString()),k=Ln);for(var V=0;V<k.length;V++){var K=L(f,k[V],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ns(),F_(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=gn(this.g);var u=this.g.Ba();const Yr=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||gt!=4||u==7||(u==8||0>=Yr?Ns(3):Ns(2)),Za(this);var f=this.g.Z();this.X=f;t:if(qu(this)){var m=lh(this.g);a="";var k=m.length,V=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),Fs(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(V&&u==k-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,U_(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,at=this.g;if((Oe=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Oe)){var Se=Oe;break t}}Se=null}if(f=Se)Kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,f);else{this.o=!1,this.s=3,It(12),wr(this),Fs(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<K.length;)if(Wt=q_(this,K),Wt==Ja){gt==4&&(this.s=4,It(14),f=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Bu){this.s=4,It(15),Kr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Kr(this.i,this.l,Wt,null),el(this,Wt);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||K.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)Kr(this.i,this.l,K,"[Invalid Chunked Response]"),wr(this),Fs(this);else if(0<K.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),ol(pt),pt.M=!0,It(11))}}else Kr(this.i,this.l,K,null),el(this,K);gt==4&&wr(this),this.o&&!this.J&&(gt==4?gh(this.j,this):(this.o=!1,oo(this)))}else iv(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),wr(this),Fs(this)}}}catch{}finally{}};function qu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function q_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ja:(f=Number(u.substring(f,m)),isNaN(f)?Bu:(m+=1,m+f>u.length?Ja:(u=u.slice(m,m+f),a.C=m+f,u)))}Fn.prototype.cancel=function(){this.J=!0,wr(this)};function oo(a){a.S=Date.now()+a.I,$u(a,a.I)}function $u(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(g(a.ba,a),u)}function Za(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(B_(this.i,this.A),this.L!=2&&(Ns(),It(17)),wr(this),this.s=2,Fs(this)):$u(this,this.S-a)};function Fs(a){a.j.G==0||a.J||gh(a.j,a)}function wr(a){Za(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ds(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function el(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||tl(f.h,a))){if(!a.K&&tl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)mo(f),po(f);else break e;il(f),It(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ms(g(f.Za,f),6e3));if(1>=Wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Tr(f,11)}else if((a.K||f.g==a)&&mo(f),!j(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let Se=k[u];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const pt=Se[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const gt=Se[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const Yr=Se[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(m=1.5*Yr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Wt=a.g;if(Wt){const vo=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var V=m.h;V.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(nl(V,V.h),V.h=null))}if(m.D){const al=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;al&&(m.ya=al,Ue(m.I,m.D,al))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var K=a;if(m.qa=vh(m,m.J?m.ia:null,m.W),K.K){Ku(m.h,K);var Oe=K,at=m.L;at&&(Oe.I=at),Oe.B&&(Za(Oe),oo(Oe)),m.g=K}else fh(m);0<f.i.length&&go(f)}else Se[0]!="stop"&&Se[0]!="close"||Tr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Tr(f,7):sl(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Ns(4)}catch{}}var $_=class{constructor(a,u){this.g=a,this.map=u}};function Hu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function tl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function nl(a,u){a.g?a.g.add(u):a.h=u}function Ku(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Hu.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return x(a.i)}function H_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function z_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Qu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=z_(a),m=H_(a),k=m.length,V=0;V<k;V++)u.call(void 0,m[V],f&&f[V],a)}var Yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function W_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),k=null;if(0<=m){var V=a[f].substring(0,m);k=a[f].substring(m+1)}else V=a[f];u(V,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,ao(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.s),this.l=a.l;var u=a.i,f=new js;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Ju(this,f),this.m=a.m}else a&&(u=String(a).match(Yu))?(this.h=!1,ao(this,u[1]||"",!0),this.o=Us(u[2]||""),this.g=Us(u[3]||"",!0),lo(this,u[4]),this.l=Us(u[5]||"",!0),Ju(this,u[6]||"",!0),this.m=Us(u[7]||"")):(this.h=!1,this.i=new js(null,this.h))}Er.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Bs(u,Xu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Bs(u,Xu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Bs(f,f.charAt(0)=="/"?Q_:G_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Bs(f,J_)),a.join("")};function pn(a){return new Er(a)}function ao(a,u,f){a.j=f?Us(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Ju(a,u,f){u instanceof js?(a.i=u,X_(a.i,a.h)):(f||(u=Bs(u,Y_)),a.i=new js(u,a.h))}function Ue(a,u,f){a.i.set(u,f)}function co(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Us(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,K_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function K_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,G_=/[#\?:]/g,Q_=/[#\?]/g,Y_=/[#\?@]/g,J_=/#/g;function js(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&W_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=js.prototype,t.add=function(a,u){Un(this),this.i=null,a=Gr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Zu(a,u){Un(a),u=Gr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function eh(a,u){return Un(a),u=Gr(a,u),a.g.has(u)}t.forEach=function(a,u){Un(this),this.g.forEach(function(f,m){f.forEach(function(k){a.call(u,k,m,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const k=a[m];for(let V=0;V<k.length;V++)f.push(u[m])}return f},t.V=function(a){Un(this);let u=[];if(typeof a=="string")eh(this,a)&&(u=u.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Un(this),this.i=null,a=Gr(this,a),eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function th(a,u,f){Zu(a,u),0<f.length&&(a.i=null,a.g.set(Gr(a,u),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const V=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var k=V;K[m]!==""&&(k+="="+encodeURIComponent(String(K[m]))),a.push(k)}}return this.i=a.join("&")};function Gr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function X_(a,u){u&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,m){var k=m.toLowerCase();m!=k&&(Zu(this,m),th(this,k,f))},a)),a.j=u}function Z_(a,u){const f=new Ls;if(l.Image){const m=new Image;m.onload=_(Bn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Bn,f,"TestLoadImage: error",!1,u,m),m.onabort=_(Bn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ev(a,u){const f=new Ls,m=new AbortController,k=setTimeout(()=>{m.abort(),Bn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(k),V.ok?Bn(f,"TestPingServer: ok",!0,u):Bn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),Bn(f,"TestPingServer: error",!1,u)})}function Bn(a,u,f,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(f)}catch{}}function tv(){this.g=new no}function nv(a,u,f){const m=f||"";try{Qu(a,function(k,V){let K=k;h(k)&&(K=ot(k)),u.push(m+V+"="+encodeURIComponent(K))})}catch(k){throw u.push(m+"type="+encodeURIComponent("_badmap")),k}}function uo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(uo,Ka),uo.prototype.g=function(){return new ho(this.l,this.j)},uo.prototype.i=function(a){return function(){return a}}({});function ho(a,u){ae.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ho,ae),t=ho.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?qs(this):$s(this),this.readyState==3&&nh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$s(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let u="";return ce(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function rl(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=rh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,u,f))}function ze(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ze,ae);var rv=/^https?$/i,sv=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ya.g(),this.v=this.o?Vu(this.o):Vu(Ya),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(V){sh(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)f.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(sv,u,void 0))||m||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,K]of f)this.g.setRequestHeader(V,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ah(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){sh(this,V)}};function sh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,ih(a),fo(a)}function ih(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oh(this):this.bb())},t.bb=function(){oh(this)};function oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)dt(a.Ea,0,a);else if(_e(a,"readystatechange"),gn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=K===0){var k=String(a.D).match(Yu)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!rv.test(k?k.toLowerCase():"")}f=m}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<gn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",ih(a)}}finally{fo(a)}}}}function fo(a,u){if(a.g){ah(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||_e(a,"ready");try{f.onreadystatechange=m}catch{}}}function ah(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Bt(u)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iv(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var f=S(a[m]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[k]||[];u[k]=V,V.push(f)}R(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ch(a){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,a),this.cb=Hs("retryDelaySeedMs",1e4,a),this.Wa=Hs("forwardChannelMaxRetries",2,a),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hu(a&&a.concurrentRequestLimit),this.Da=new tv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ch.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){It(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=vh(this,null,this.W),go(this)};function sl(a){if(uh(a),a.G==3){var u=a.U++,f=pn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",u),Ue(f,"TYPE","terminate"),zs(a,f),u=new Fn(a,a.j,u),u.L=2,u.v=co(pn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=yh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),oo(u)}_h(a)}function po(a){a.g&&(ol(a),a.g.cancel(),a.g=null)}function uh(a){po(a),a.u&&(l.clearTimeout(a.u),a.u=null),mo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function go(a){if(!zu(a.h)&&!a.s){a.s=!0;var u=a.Ga;de||zt(),we||(de(),we=!0),Vt.add(u,a),a.B=0}}function ov(a,u){return Wu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(g(a.Ga,a,u),mh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Fn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(k.H=V,V=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=dh(this,k,u),f=pn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),zs(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(rh(V)))+"&"+u:this.m&&rl(f,this.m,V)),nl(this.h,k),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",u),Ue(f,"SID","null"),k.T=!0,Xa(k,f,null)):Xa(k,f,u),this.G=2}}else this.G==3&&(a?hh(this,a):this.i.length==0||zu(this.h)||hh(this))};function hh(a,u){var f;u?f=u.l:f=a.U++;const m=pn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),zs(a,m),a.m&&a.o&&rl(m,a.m,a.o),f=new Fn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=dh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nl(a.h,f),Xa(f,m,u)}function zs(a,u){a.H&&ce(a.H,function(f,m){Ue(u,m,f)}),a.l&&Qu({},function(f,m){Ue(u,m,f)})}function dh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let V=-1;for(;;){const K=["count="+f];V==-1?0<f?(V=k[0].g,K.push("ofs="+V)):V=0:K.push("ofs="+V);let Oe=!0;for(let at=0;at<f;at++){let Se=k[at].g;const pt=k[at].map;if(Se-=V,0>Se)V=Math.max(0,k[at].g-100),Oe=!1;else try{nv(pt,K,"req"+Se+"_")}catch{m&&m(pt)}}if(Oe){m=K.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function fh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;de||zt(),we||(de(),we=!0),Vt.add(u,a),a.v=0}}function il(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(g(a.Fa,a),mh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),po(this),ph(this))};function ol(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ph(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);Ue(u,"RID","rpc"),Ue(u,"SID",a.K),Ue(u,"AID",a.T),Ue(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(u,"TO",a.ja),Ue(u,"TYPE","xmlhttp"),zs(a,u),a.m&&a.o&&rl(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=co(pn(u)),f.m=null,f.P=!0,ju(f,a)}t.Za=function(){this.C!=null&&(this.C=null,po(this),il(this),It(19))};function mo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function gh(a,u){var f=null;if(a.g==u){mo(a),ol(a),a.g=null;var m=2}else if(tl(a.h,u))f=u.D,Ku(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=a.B;m=ro(),_e(m,new Lu(m,f)),go(a)}else fh(a);else if(k=u.s,k==3||k==0&&0<u.X||!(m==1&&ov(a,u)||m==2&&il(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),k){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function mh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Tr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const k=!m;m=new Er(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ao(m,"https"),co(m),k?Z_(m.toString(),f):ev(m.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(u),_h(a),uh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function _h(a){if(a.G=0,a.ka=[],a.l){const u=Gu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function vh(a,u,f){var m=f instanceof Er?pn(f):new Er(f);if(m.g!="")u&&(m.g=u+"."+m.g),lo(m,m.s);else{var k=l.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var V=new Er(null);m&&ao(V,m),u&&(V.g=u),k&&lo(V,k),f&&(V.l=f),m=V}return f=a.D,u=a.ya,f&&u&&Ue(m,f,u),Ue(m,"VER",a.la),zs(a,m),m}function yh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ze(new uo({eb:f})):new ze(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _o(){}_o.prototype.g=function(a,u){return new Dt(a,u)};function Dt(a,u){ae.call(this),this.g=new ch(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Qr(this)}C(Dt,ae),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){sl(this.g)},Dt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ot(a),a=f);u.i.push(new $_(u.Ya++,a)),u.G==3&&go(u)},Dt.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,Dt.aa.N.call(this)};function Eh(a){Ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Eh,Ga);function Th(){Qa.call(this),this.status=1}C(Th,Qa);function Qr(a){this.g=a}C(Qr,wh),Qr.prototype.ua=function(){_e(this.g,"a")},Qr.prototype.ta=function(a){_e(this.g,new Eh(a))},Qr.prototype.sa=function(a){_e(this.g,new Th)},Qr.prototype.ra=function(){_e(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,om=function(){return new _o},im=function(){return ro()},sm=yr,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,Fo=so,Fu.COMPLETE="complete",rm=Fu,Du.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Zs=Du,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,nm=ze}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const Bd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new Bc("@firebase/firestore");function Gs(){return Br.logLevel}function ee(t,...e){if(Br.logLevel<=Te.DEBUG){const n=e.map(Zc);Br.debug(`Firestore (${Ps}): ${t}`,...n)}}function Vn(t,...e){if(Br.logLevel<=Te.ERROR){const n=e.map(Zc);Br.error(`Firestore (${Ps}): ${t}`,...n)}}function ms(t,...e){if(Br.logLevel<=Te.WARN){const n=e.map(Zc);Br.warn(`Firestore (${Ps}): ${t}`,...n)}}function Zc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function De(t,e){t||fe()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class qI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $I{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new _t(e)}}class HI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){De(this.o===void 0);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new WI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=GI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new tt(0,0))}static max(){return new pe(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&fe(),r===void 0?r=e.length-n:r>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Pi{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const QI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Pi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return QI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(We.fromString(e))}static fromName(e){return new le(We.fromString(e).popFirst(5))}static empty(){return new le(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new We(e.slice()))}}function YI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new hr(s,le.empty(),e)}function JI(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(pe.min(),le.empty(),-1)}static max(){return new hr(pe.max(),le.empty(),-1)}}function XI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==ZI)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eu.oe=-1;function Va(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function nb(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qd(this.data.getIterator())}getIteratorFrom(e){return new qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new ut(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new um("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const rb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(De(!!t),typeof t=="string"){let e=0;const n=rb.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nu(t){const e=t.mapValue.fields.__previous_value__;return tu(e)?nu(e):e}function ki(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={mapValue:{}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tu(t)?4:ob(t)?9007199254740991:ib(t)?10:11:fe()}function dn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dr(s.timestampValue),l=dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?oa(o)===oa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(jd(o)!==jd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!dn(o[c],l[c])))return!1;return!0}(t,e);default:return fe()}}function Vi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),c=Qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return $d(t.timestampValue,e.timestampValue);case 4:return $d(ki(t),ki(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const l=jr(i),c=jr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ce(l[h],c[h]);if(d!==0)return d}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ce(Qe(i.latitude),Qe(o.latitude));return l!==0?l:Ce(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=g.value)===null||c===void 0?void 0:c.arrayValue,x=Ce(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Hd(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Ce(c[p],d[p]);if(g!==0)return g;const _=vs(l[c[p]],h[d[p]]);if(_!==0)return _}return Ce(c.length,d.length)}(t.mapValue,e.mapValue);default:throw fe()}}function $d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=dr(t),r=dr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Hd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vs(n[s],r[s]);if(i)return i}return Ce(n.length,r.length)}function ys(t){return sc(t)}function sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sc(n.fields[o])}`;return s+"}"}(t.mapValue):fe()}function ic(t){return!!t&&"integerValue"in t}function ru(t){return!!t&&"arrayValue"in t}function zd(t){return!!t&&"nullValue"in t}function Wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function ib(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ob(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=hi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(hi(this.value))}}function hm(t){const e=[];return ks(t.fields,(n,r)=>{const s=new ct([n]);if(Uo(r)){const i=hm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new wt(e,0,pe.min(),pe.min(),pe.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,pe.min(),pe.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,pe.min(),pe.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function Kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{}class et extends dm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cb(e,n,r):n==="array-contains"?new db(e,r):n==="in"?new fb(e,r):n==="not-in"?new pb(e,r):n==="array-contains-any"?new gb(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ub(e,r):new hb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends dm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return fm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fm(t){return t.op==="and"}function pm(t){return lb(t)&&fm(t)}function lb(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function oc(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(pm(t))return t.filters.map(e=>oc(e)).join(",");{const e=t.filters.map(n=>oc(n)).join(",");return`${t.op}(${e})`}}function gm(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&gm(o,s.filters[l]),!0):!1}(t,e):void fe()}function mm(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(mm).join(" ,")+"}"}(t):"Filter"}class cb extends et{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class ub extends et{constructor(e,n){super(e,"in",n),this.keys=_m("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hb extends et{constructor(e,n){super(e,"not-in",n),this.keys=_m("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _m(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class db extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ru(n)&&Vi(n.arrayValue,this.value)}}class fb extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class pb extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class gb extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new mb(t,e,n,r,s,i,o)}function su(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ab(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gd(t.startAt,e.startAt)&&Gd(t.endAt,e.endAt)}function ac(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function _b(t,e,n,r,s,i,o,l){return new Da(t,e,n,r,s,i,o,l)}function Oa(t){return new Da(t)}function Yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vb(t){return t.collectionGroup!==null}function di(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(ct.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new la(i,r))}),n.has(ct.keyField().canonicalString())||e.ce.push(new la(ct.keyField(),r))}return e.ce}function cn(t){const e=me(t);return e.le||(e.le=yb(e,di(t))),e.le}function yb(t,e){if(t.limitType==="F")return Qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new la(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return Qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lc(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return iu(cn(t),cn(e))&&t.limitType===e.limitType}function vm(t){return`${su(cn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mm(s)).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=Kd(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,di(r),s)||r.endAt&&!function(o,l,c){const h=Kd(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,di(r),s))}(t,e)}function wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ym(t){return(e,n)=>{let r=!1;for(const s of di(t)){const i=Eb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Eb(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?vs(c,h):fe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=new He(le.comparator);function Dn(){return Tb}const wm=new He(le.comparator);function ei(...t){let e=wm;for(const n of t)e=e.insert(n.key,n);return e}function Em(t){let e=wm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return fi()}function Tm(){return fi()}function fi(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ib=new He(le.comparator),bb=new ut(le.comparator);function Ee(...t){let e=bb;for(const n of t)e=e.add(n);return e}const Ab=new ut(Ce);function Rb(){return Ab}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function Im(t){return{integerValue:""+t}}function Sb(t,e){return nb(e)?Im(e):ou(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this._=void 0}}function Cb(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tu(i)&&(i=nu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?Am(t,e):t instanceof Oi?Rm(t,e):function(s,i){const o=bm(s,i),l=Jd(o)+Jd(s.Pe);return ic(o)&&ic(s.Pe)?Im(l):ou(s.serializer,l)}(t,e)}function Pb(t,e,n){return t instanceof Di?Am(t,e):t instanceof Oi?Rm(t,e):n}function bm(t,e){return t instanceof ua?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends La{}class Di extends La{constructor(e){super(),this.elements=e}}function Am(t,e){const n=Sm(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends La{constructor(e){super(),this.elements=e}}function Rm(t,e){let n=Sm(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class ua extends La{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jd(t){return Qe(t.integerValue||t.doubleValue)}function Sm(t){return ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Oi&&s instanceof Oi?_s(r.elements,s.elements,dn):r instanceof ua&&s instanceof ua?dn(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class xb{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function Cm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new km(t.key,Pn.none()):new Xi(t.key,t.data,Pn.none());{const n=t.data,r=qt.empty();let s=new ut(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new Kt(s.toArray()),Pn.none())}}function Vb(t,e,n){t instanceof Xi?function(s,i,o){const l=s.value.clone(),c=Zd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Zd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Pm(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,r){return t instanceof Xi?function(i,o,l,c){if(!Bo(i.precondition,o))return l;const h=i.value.clone(),d=ef(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,l,c){if(!Bo(i.precondition,o))return l;const h=ef(i.fieldTransforms,c,o),d=o.data;return d.setAll(Pm(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Db(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bm(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function Xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_s(r,s,(i,o)=>kb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends Fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends Fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zd(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Pb(o,l,n[s]))}return r}function ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Cb(i,o,e))}return r}class km extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ob extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Vb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Cm(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Xd(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Xd(n,r))}}class au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return Ib}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new au(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,be;function Fb(t){switch(t){default:return fe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function xm(t){if(t===void 0)return Vn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Je.OK:return $.OK;case Je.CANCELLED:return $.CANCELLED;case Je.UNKNOWN:return $.UNKNOWN;case Je.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Je.INTERNAL:return $.INTERNAL;case Je.UNAVAILABLE:return $.UNAVAILABLE;case Je.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Je.NOT_FOUND:return $.NOT_FOUND;case Je.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Je.ABORTED:return $.ABORTED;case Je.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Je.DATA_LOSS:return $.DATA_LOSS;default:return fe()}}(be=Je||(Je={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb=new Or([4294967295,4294967295],0);function tf(t){const e=Ub().encode(t),n=new tm;return n.update(e),new Uint8Array(n.digest())}function nf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class lu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Or.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(Bb)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tf(e),[r,s]=nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=tf(e),[r,s]=nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ua(pe.min(),s,new He(Ce),Dn(),Ee())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vm{constructor(e,n){this.targetId=e,this.me=n}}class Dm{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rf{constructor(){this.fe=0,this.ge=of(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:fe()}}),new Zi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=of()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class jb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=sf(),this.Qe=new He(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ac(i))if(r===0){const o=new le(i.path);this.Ue(n,o,wt.newNoDocument(o,pe.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(c){if(c instanceof um)return ms("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lu(o,s,i)}catch(c){return ms(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ac(l.target)){const c=new le(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,wt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ua(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=sf(),this.Qe=new He(Ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sf(){return new He(le.comparator)}function of(){return new He(le.comparator)}const qb={asc:"ASCENDING",desc:"DESCENDING"},$b={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hb={and:"AND",or:"OR"};class zb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cc(t,e){return t.useProto3Json||Va(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Om(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Wb(t,e){return ha(t,e.toTimestamp())}function un(t){return De(!!t),pe.fromTimestamp(function(n){const r=dr(n);return new tt(r.seconds,r.nanos)}(t))}function cu(t,e){return uc(t,e).canonicalString()}function uc(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Nm(t){const e=We.fromString(t);return De(Bm(e)),e}function hc(t,e){return cu(t.databaseId,e.path)}function Sl(t,e){const n=Nm(e);if(n.get(1)!==t.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Lm(n))}function Mm(t,e){return cu(t.databaseId,e)}function Kb(t){const e=Nm(t);return e.length===4?We.emptyPath():Lm(e)}function dc(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lm(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function af(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function Gb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(De(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?$.UNKNOWN:xm(h.code);return new se(d,h.message||"")}(o);n=new Dm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sl(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):pe.min(),l=new qt({mapValue:{fields:r.document.fields}}),c=wt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new jo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sl(t,r.document),i=r.readTime?un(r.readTime):pe.min(),o=wt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sl(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return fe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Lb(s,i),l=r.targetId;n=new Vm(l,o)}}return n}function Qb(t,e){let n;if(e instanceof Xi)n={update:af(t,e.key,e.value)};else if(e instanceof km)n={delete:hc(t,e.key)};else if(e instanceof zr)n={update:af(t,e.key,e.data),updateMask:sA(e.fieldMask)};else{if(!(e instanceof Ob))return fe();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw fe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Wb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function Yb(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(pe.min())&&(o=un(i)),new xb(o,s.transformResults||[])}(n,e))):[]}function Jb(t,e){return{documents:[Mm(t,e.path)]}}function Xb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mm(t,s);const i=function(h){if(h.length!==0)return Um(fn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:ts(g.field),direction:tA(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function Zb(t){let e=Kb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Fm(p);return g instanceof fn&&pm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new la(ns(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Va(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new aa(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new aa(_,g)}(n.endAt)),_b(e,s,o,i,l,"F",c,h)}function eA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return et.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function tA(t){return qb[t]}function nA(t){return $b[t]}function rA(t){return Hb[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return ct.fromServerFormat(t.fieldPath)}function Um(t){return t instanceof et?function(n){if(n.op==="=="){if(Wd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(zd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(zd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:nA(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>Um(s));return r.length===1?r[0]:{compositeFilter:{op:rA(n.op),filters:r}}}(t):fe()}function sA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e){this.ct=e}}function oA(t){const e=Zb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.un=new lA}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(hr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class lA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ws(0)}static kn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&pi(r.mutation,s,Kt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ei();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dn();const o=fi(),l=function(){return fi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof zr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),pi(d.mutation,h,d.mutation.getFieldMask(),tt.now())):o.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new uA(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new He((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Tm();d.forEach(g=>{if(!i.has(g)){const _=Cm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(kr());let l=-1,c=i;return o.next(h=>U.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(d=>({batchId:l,changes:Em(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,g){return new Da(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,wt.newInvalidDocument(d)))});let l=ei();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&pi(d.mutation,h,Kt.empty(),tt.now()),Ma(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:oA(s.bundledQuery),readTime:un(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.overlays=new He(le.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=kr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mb(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.Tr=new ut(nt.Er),this.dr=new ut(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new nt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new le(new We([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new le(new We([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return le.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(nt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ce);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new nt(new le(i),0);let l=new ut(Ce);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new nt(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.Mr=e,this.docs=function(){return new He(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,l=new le(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||XI(JI(d),r)<=0||(s.has(d.key)||Ma(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){fe()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _A(this)}getSize(e){return U.resolve(this.size)}}class _A extends cA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.persistence=e,this.Nr=new xs(n=>su(n),iu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uu,this.targetCount=0,this.kr=ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new eu(0),this.Kr=!1,this.Kr=!0,this.$r=new pA,this.referenceDelegate=e(this),this.Ur=new vA(this),this.indexManager=new aA,this.remoteDocumentCache=function(s){return new mA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new iA(n),this.Gr=new dA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new wA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class wA extends eb{constructor(e){super(),this.currentSequenceNumber=e}}class hu{constructor(e){this.persistence=e,this.Jr=new uu,this.Yr=null}static Zr(e){return new hu(e)}get Xr(){if(this.Yr)return this.Yr;throw fe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=le.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new du(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return dE()?8:tb(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EA;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Gs()<=Te.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Gs()<=Te.DEBUG&&ee("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Gs()<=Te.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):U.resolve())}Yi(e,n){if(Yd(n))return U.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=lc(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,lc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return Yd(n)||s.isEqual(pe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Gs()<=Te.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.rs(e,o,n,YI(s,-1)).next(l=>l))})}ts(e,n){let r=new ut(ym(e));return n.forEach((s,i)=>{Ma(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Gs()<=Te.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ji.getDocumentsMatchingQuery(e,n,hr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new He(Ce),this._s=new xs(i=>su(i),iu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function bA(t,e,n,r){return new IA(t,e,n,r)}async function jm(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function AA(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let _=U.resolve();return g.forEach(C=>{_=_.next(()=>d.getEntry(c,C)).next(x=>{const D=h.docVersions.get(C);De(D!==null),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qm(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function RA(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ht.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(x,D,B){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,_,d)&&l.push(n.Ur.updateTargetData(i,_))});let c=Dn(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(SA(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(pe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function SA(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function CA(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PA(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fc(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function lf(t,e,n){const r=me(t);let s=pe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=me(c),g=p._s.get(d);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,d)}(r,o,cn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ee())).next(l=>(kA(r,wb(e),l),{documents:l,Ts:i})))}function kA(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class cf{constructor(){this.activeTargetIds=Rb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xA{constructor(){this.so=new cf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co=null;function Cl(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class NA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Cl(),c=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ms("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=DA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Cl();return new Promise((o,l)=>{const c=new nm;c.setWithCredentials(!0),c.listenOnce(rm.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fo.NO_ERROR:const d=c.getResponseJson();ee(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Fo.TIMEOUT:ee(mt,`RPC '${e}' ${i} timed out`),l(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const p=c.getStatus();if(ee(mt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const C=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(B)>=0?B:$.UNKNOWN}(_.status);l(new se(C,_.message))}else l(new se($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new se($.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ee(mt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);ee(mt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Cl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=om(),l=im(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(mt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,_=!1;const C=new OA({Io:D=>{_?ee(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(ee(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(mt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),x=(D,B,j)=>{D.listen(B,F=>{try{j(F)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,Zs.EventType.OPEN,()=>{_||(ee(mt,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),x(p,Zs.EventType.CLOSE,()=>{_||(_=!0,ee(mt,`RPC '${e}' stream ${s} transport closed`),C.So())}),x(p,Zs.EventType.ERROR,D=>{_||(_=!0,ms(mt,`RPC '${e}' stream ${s} transport errored:`,D),C.So(new se($.UNAVAILABLE,"The operation could not be completed")))}),x(p,Zs.EventType.MESSAGE,D=>{var B;if(!_){const j=D.data[0];De(!!j);const F=j,q=F.error||((B=F[0])===null||B===void 0?void 0:B.error);if(q){ee(mt,`RPC '${e}' stream ${s} received error:`,q);const X=q.status;let ce=function(v){const T=Je[v];if(T!==void 0)return xm(T)}(X),R=q.message;ce===void 0&&(ce=$.INTERNAL,R="Unknown error status: "+X+" with message "+q.message),_=!0,C.So(new se(ce,R)),p.close()}else ee(mt,`RPC '${e}' stream ${s} received:`,j),C.bo(j)}}),x(l,sm.STAT_EVENT,D=>{D.stat===rc.PROXY?ee(mt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===rc.NOPROXY&&ee(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new zb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $m(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new se($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MA extends Hm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Gb(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?un(o.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ac(c)?{documents:Jb(i,c)}:{query:Xb(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Om(i,o.resumeToken);const h=cc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=ha(i,o.snapshotVersion.toTimestamp());const h=cc(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=eA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dc(this.serializer),n.removeTarget=e,this.a_(n)}}class LA extends Hm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return De(!!e.streamToken),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Yb(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qb(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,uc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,uc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class UA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=me(c);h.L_.add(4),await eo(h),h.q_.set("Unknown"),h.L_.delete(4),await ja(h)}(this))})}),this.q_=new UA(r,s)}}async function ja(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function eo(t){for(const e of t.B_)await e(!1)}function zm(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mu(n)?gu(n):Vs(n).r_()&&pu(n,e))}function fu(t,e){const n=me(t),r=Vs(n);n.N_.delete(e),r.r_()&&Wm(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function pu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function Wm(t,e){t.Q_.xe(e),Vs(t).R_(e)}function gu(t){t.Q_=new jb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function mu(t){return Wr(t)&&!Vs(t).n_()&&t.N_.size>0}function Wr(t){return me(t).L_.size===0}function Km(t){t.Q_=void 0}async function jA(t){t.q_.set("Online")}async function qA(t){t.N_.forEach((e,n)=>{pu(t,e)})}async function $A(t,e){Km(t),mu(t)?(t.q_.M_(e),gu(t)):t.q_.set("Unknown")}async function HA(t,e,n){if(t.q_.set("Online"),e instanceof Dm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof jo?t.Q_.Ke(e):e instanceof Vm?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await qm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),Wm(i,c);const p=new Zn(d.target,c,h,d.sequenceNumber);pu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Ji(e))throw e;t.L_.add(1),await eo(t),t.q_.set("Offline"),n||(n=()=>qm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await ja(t)})}function Gm(t,e){return e().catch(n=>da(t,n,e))}async function qa(t){const e=me(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;zA(e);)try{const s=await CA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,WA(e,s)}catch(s){await da(e,s)}Qm(e)&&Ym(e)}function zA(t){return Wr(t)&&t.O_.length<10}function WA(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qm(t){return Wr(t)&&!fr(t).n_()&&t.O_.length>0}function Ym(t){fr(t).start()}async function KA(t){fr(t).p_()}async function GA(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function QA(t,e,n){const r=t.O_.shift(),s=au.from(r,e,n);await Gm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qa(t)}async function YA(t,e){e&&fr(t).V_&&await async function(r,s){if(function(o){return Fb(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();fr(r).s_(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qa(r)}}(t,e),Qm(t)&&Ym(t)}async function hf(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await eo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await ja(n)}async function JA(t,e){const n=me(t);e?(n.L_.delete(2),await ja(n)):e||(n.L_.add(2),await eo(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new MA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:jA.bind(null,t),Ro:qA.bind(null,t),mo:$A.bind(null,t),d_:HA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mu(t)?gu(t):t.q_.set("Unknown")):(await t.K_.stop(),Km(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new LA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:KA.bind(null,t),mo:YA.bind(null,t),f_:GA.bind(null,t),g_:QA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qa(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _u(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ji(t))return new se($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.W_=new He(le.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):fe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Es(e,n,fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class ZA{constructor(){this.queries=ff(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=ff(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new se($.ABORTED,"Firestore shutting down"))}}function ff(){return new xs(t=>vm(t),Na)}async function Jm(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new XA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vu(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&yu(n)}async function Xm(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function eR(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&yu(n)}function tR(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function yu(t){t.Y_.forEach(e=>{e.next()})}var pc,pf;(pf=pc||(pc={})).ea="default",pf.Cache="cache";class Zm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class nR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=ym(e),this.Ra=new fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new df,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=Ma(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?C!==x&&(r.track({type:3,doc:_}),D=!0):this.ga(g,_)||(r.track({type:2,doc:_}),D=!0,(c&&this.Aa(_,c)>0||h&&this.Aa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(_?(o=o.add(_),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,C){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return x(_)-x(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new Es(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new df,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new t_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new e_(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sR{constructor(e){this.key=e,this.va=!1}}class iR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xs(l=>vm(l),Na),this.Ma=new Map,this.xa=new Set,this.Oa=new He(le.comparator),this.Na=new Map,this.La=new uu,this.Ba={},this.ka=new Map,this.qa=ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oR(t,e,n=!0){const r=a_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await n_(r,e,n,!0),s}async function aR(t,e){const n=a_(t);await n_(n,e,!0,!1)}async function n_(t,e,n,r){const s=await PA(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await lR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zm(t.remoteStore,s),l}async function lR(t,e,n,r,s){t.Ka=(p,g,_)=>async function(x,D,B,j){let F=D.view.ma(B);F.ns&&(F=await lf(x.localStore,D.query,!1).then(({documents:R})=>D.view.ma(R,F)));const q=j&&j.targetChanges.get(D.targetId),X=j&&j.targetMismatches.get(D.targetId)!=null,ce=D.view.applyChanges(F,x.isPrimaryClient,q,X);return mf(x,D.targetId,ce.wa),ce.snapshot}(t,p,g,_);const i=await lf(t.localStore,e,!0),o=new nR(e,i.Ts),l=o.ma(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);mf(t,n,h.wa);const d=new rR(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function cR(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Na(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fu(r.remoteStore,s.targetId),gc(r,s.targetId)}).catch(Yi)):(gc(r,s.targetId),await fc(r.localStore,s.targetId,!0))}async function uR(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fu(n.remoteStore,r.targetId))}async function hR(t,e,n){const r=vR(t);try{const s=await function(o,l){const c=me(o),h=tt.now(),d=l.reduce((_,C)=>_.add(C.key),Ee());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Dn(),x=Ee();return c.cs.getEntries(_,d).next(D=>{C=D,C.forEach((B,j)=>{j.isValidDocument()||(x=x.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(D=>{p=D;const B=[];for(const j of l){const F=Db(j,p.get(j.key).overlayedDocument);F!=null&&B.push(new zr(j.key,F,hm(F.value.mapValue),Pn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,B,l)}).next(D=>{g=D;const B=D.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(_,D.batchId,B)})}).then(()=>({batchId:g.batchId,changes:Em(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new He(Ce)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await to(r,s.changes),await qa(r.remoteStore)}catch(s){const i=vu(s,"Failed to persist write");n.reject(i)}}async function r_(t,e){const n=me(t);try{const r=await RA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?De(o.va):s.removedDocuments.size>0&&(De(o.va),o.va=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function gf(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&yu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dR(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new He(le.comparator);o=o.insert(i,wt.newNoDocument(i,pe.min()));const l=Ee().add(i),c=new Ua(pe.min(),new Map,new He(Ce),o,l);await r_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),wu(r)}else await fc(r.localStore,e,!1).then(()=>gc(r,e,n)).catch(Yi)}async function fR(t,e){const n=me(t),r=e.batch.batchId;try{const s=await AA(n.localStore,e);i_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function pR(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(De(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);i_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function s_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function i_(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||o_(t,r)})}function o_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wu(t))}function mf(t,e,n){for(const r of n)r instanceof e_?(t.La.addReference(r.key,e),gR(t,r)):r instanceof t_?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||o_(t,r.key)):fe()}function gR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),wu(t))}function wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new le(We.fromString(e)),r=t.qa.next();t.Na.set(r,new sR(n)),t.Oa=t.Oa.insert(n,r),zm(t.remoteStore,new Zn(cn(Oa(n.path)),r,"TargetPurposeLimboResolution",eu.oe))}}async function to(t,e,n){const r=me(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=du.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>U.forEach(g.Ui,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ji(p))throw p;ee("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=d.os.get(g),C=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(g,x)}}}(r.localStore,i))}async function mR(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await jm(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new se($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.hs)}}function _R(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function a_(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_R.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dR.bind(null,e),e.Ca.d_=eR.bind(null,e.eventManager),e.Ca.$a=tR.bind(null,e.eventManager),e}function vR(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pR.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ba(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return bA(this.persistence,new TA,e.initialUser,this.serializer)}Ga(e){return new yA(hu.Zr,this.serializer)}Wa(e){return new xA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class mc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mR.bind(null,this.syncEngine),await JA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ZA}()}createDatastore(e){const n=Ba(e.databaseInfo.databaseId),r=function(i){return new NA(i)}(e.databaseInfo);return function(i,o,l,c){return new FA(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new BA(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>gf(this.syncEngine,n,0),function(){return uf.D()?new uf:new VA}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new iR(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);ee("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await eo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mc.provider={build:()=>new mc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wR(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hf(e.remoteStore,s)),t._onlineComponents=e}async function wR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await kl(t,new fa)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await kl(t,new fa);return t._offlineComponents}async function c_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await _f(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await _f(t,new mc))),t._onlineComponents}function ER(t){return c_(t).then(e=>e.syncEngine)}async function _c(t){const e=await c_(t),n=e.eventManager;return n.onListen=oR.bind(null,e.syncEngine),n.onUnlisten=cR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=uR.bind(null,e.syncEngine),n}function TR(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new l_({next:g=>{d.Za(),o.enqueueAndForget(()=>Xm(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new se($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new se($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Zm(Oa(l.path),d,{includeMetadataChanges:!0,_a:!0});return Jm(i,p)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e,n){if(!n)throw new se($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bR(t,e,n,r){if(e===!0&&r===!0)throw new se($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yf(t){if(!le.isDocumentKey(t))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jI;switch(r.type){case"firstParty":return new zI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vf.get(n);r&&(ee("ComponentProvider","Removing Datastore"),vf.delete(n),r.terminate())}(this),Promise.resolve()}}function AR(t,e,n,r={}){var s;const i=(t=or(t,Tu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_t.MOCK_USER;else{l=iE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(h)}t._authCredentials=new qI(new am(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $a(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Ni extends $a{constructor(e,n,r){super(e,n,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new le(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function ar(t,e,...n){if(t=xt(t),arguments.length===1&&(e=lm.newId()),IR("doc","path",e),t instanceof Tu){const r=We.fromString(e,...n);return yf(r),new Lt(t,null,new le(r))}{if(!(t instanceof Lt||t instanceof Ni))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return yf(r),new Lt(t.firestore,t instanceof Ni?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $m(this,"async_queue_retry"),this.Vu=()=>{const r=Pl();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=_u.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&fe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Tf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Mi extends Tu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ef,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ef(e),this._firestoreClient=void 0,await e}}}function RR(t,e){const n=typeof t=="object"?t:mg(),r=typeof t=="string"?t:"(default)",s=qc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rE("firestore");i&&AR(s,...i)}return s}function Iu(t){if(t._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||SR(t),t._firestoreClient}function SR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new sb(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,u_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new yR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(ht.fromBase64String(e))}catch(n){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^__.*__$/;class PR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}function d_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Su{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return pa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(d_(this.Cu)&&CR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ba(e)}Qu(e,n,r,s=!1){return new Su({Cu:e,methodName:n,qu:r,path:ct.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xR(t){const e=t._freezeSettings(),n=Ba(t._databaseId);return new kR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VR(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);m_("Data must be an object, but it was:",o,r);const l=p_(r,o);let c,h;if(i.merge)c=new Kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=DR(e,p,n);if(!o.contains(g))throw new se($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);NR(d,g)||d.push(g)}c=new Kt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new PR(new qt(l),c,h)}function f_(t,e){if(g_(t=xt(t)))return m_("Unsupported field value:",e,t),p_(t,e);if(t instanceof h_)return function(r,s){if(!d_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=f_(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof Au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:Om(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ru)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ou(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Eu(r)}`)}(t,e)}function p_(t,e){const n={};return cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=f_(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function g_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Au||t instanceof Ts||t instanceof Lt||t instanceof h_||t instanceof Ru)}function m_(t,e,n){if(!g_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Eu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function DR(t,e,n){if((e=xt(e))instanceof bu)return e._internalPath;if(typeof e=="string")return __(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const OR=new RegExp("[~\\*/\\[\\]]");function __(t,e,n){if(e.search(OR)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bu(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new se($.INVALID_ARGUMENT,l+t+c)}function NR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(y_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MR extends v_{data(){return super.data()}}function y_(t,e){return typeof e=="string"?__(t,e):e instanceof bu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FR{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new Ru(i)}convertGeoPoint(e){return new Au(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=dr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);De(Bm(r));const s=new xi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends v_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(y_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends w_{data(e={}){return super.data(e)}}class BR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:jR(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){t=or(t,Lt);const e=or(t.firestore,Mi);return TR(Iu(e),t._key).then(n=>T_(e,t,n))}class E_ extends FR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function ga(t,e,n){t=or(t,Lt);const r=or(t.firestore,Mi),s=UR(t.converter,e);return $R(r,[VR(xR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function qR(t,...e){var n,r,s;t=xt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Tf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Lt)h=or(t.firestore,Mi),d=Oa(t._key.path),c={next:p=>{e[o]&&e[o](T_(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=or(t,$a);h=or(p.firestore,Mi),d=p._query;const g=new E_(h);c={next:_=>{e[o]&&e[o](new BR(h,g,p,_))},error:e[o+1],complete:e[o+2]},LR(t._query)}return function(g,_,C,x){const D=new l_(x),B=new Zm(_,D,C);return g.asyncQueue.enqueueAndForget(async()=>Jm(await _c(g),B)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>Xm(await _c(g),B))}}(Iu(h),d,l,c)}function $R(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>hR(await ER(r),s,i)),i.promise}(Iu(t),e)}function T_(t,e,n){const r=n.docs.get(e._key),s=new E_(t);return new w_(t,s,e._key,r,new ni(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ps=s})(Ss),gs(new Lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mi(new $I(r.getProvider("auth-internal")),new KI(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),sr(Bd,"4.7.3",e),sr(Bd,"4.7.3","esm2017")})();const HR={apiKey:"AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",authDomain:"ubicacion-faf91.firebaseapp.com",projectId:"ubicacion-faf91",storageBucket:"ubicacion-faf91.firebasestorage.app",messagingSenderId:"87507844915",appId:"1:87507844915:web:60039ca325721053cac846",measurementId:"G-29NFK6PEW3"},I_=gg(HR),Et=UI(I_),lr=RR(I_),Ha=Qw("user",()=>{const t=ve(null),e=ve(null),n=ve(!1),r=ve(null),s=Ke(()=>!!t.value),i=Ke(()=>{var _;return((_=e.value)==null?void 0:_.dispositivoID)||null}),o=async _=>{try{n.value=!0,r.value=null;const C=await Cu(ar(lr,"usuarios",_));C.exists()?(e.value=C.data(),localStorage.setItem("dispositivoID",e.value.dispositivoID)):e.value=null}catch(C){console.error("Error fetching user data:",C),r.value=C.message}finally{n.value=!1}},l=async(_,C)=>{try{n.value=!0,r.value=null;const x=await RT(Et,_,C);return t.value=x.user,await o(t.value.uid),{success:!0}}catch(x){return console.error("Login error:",x),r.value=g(x.code),{success:!1,error:r.value}}finally{n.value=!1}},c=async(_,C,x)=>{try{n.value=!0,r.value=null;const D=p(),B=await $g(Et,C,x);return t.value=B.user,await ga(ar(lr,"usuarios",t.value.uid),{nombre:_,email:C,dispositivoID:D,fechaRegistro:new Date}),await ga(ar(lr,"ubicaciones",D),{latitud:0,longitud:0,ultimaActualizacion:new Date,usuario:t.value.uid}),await o(t.value.uid),{success:!0,deviceId:D}}catch(D){return console.error("Registration error:",D),r.value=g(D.code),{success:!1,error:r.value}}finally{n.value=!1}},h=async()=>{try{return n.value=!0,r.value=null,await Hg(Et),t.value=null,e.value=null,localStorage.removeItem("dispositivoID"),{success:!0}}catch(_){return console.error("Logout error:",_),r.value=_.message,{success:!1,error:r.value}}finally{n.value=!1}},d=async()=>{t.value=Et.currentUser,t.value&&await o(t.value.uid)},p=()=>{const _="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let C="";for(let x=0;x<6;x++)C+=_.charAt(Math.floor(Math.random()*_.length));return C},g=_=>{switch(_){case"auth/invalid-credential":return"Correo o contraseña incorrectos";case"auth/user-not-found":return"No existe una cuenta con este correo";case"auth/wrong-password":return"Contraseña incorrecta";case"auth/too-many-requests":return"Demasiados intentos fallidos. Intenta más tarde";case"auth/email-already-in-use":return"Este correo ya está registrado";case"auth/invalid-email":return"Correo electrónico inválido";case"auth/weak-password":return"La contraseña es demasiado débil. Mínimo 6 caracteres";default:return"Error de autenticación. Intenta nuevamente"}};return{user:t,userData:e,loading:n,error:r,isAuthenticated:s,deviceId:i,login:l,register:c,logout:h,fetchUserData:o,init:d}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function b_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&b_(t.default)}const ke=Object.assign;function xl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const gi=()=>{},Zt=Array.isArray,A_=/#/g,WR=/&/g,KR=/\//g,GR=/=/g,QR=/\?/g,R_=/\+/g,YR=/%5B/g,JR=/%5D/g,S_=/%5E/g,XR=/%60/g,C_=/%7B/g,ZR=/%7C/g,P_=/%7D/g,e1=/%20/g;function Pu(t){return encodeURI(""+t).replace(ZR,"|").replace(YR,"[").replace(JR,"]")}function t1(t){return Pu(t).replace(C_,"{").replace(P_,"}").replace(S_,"^")}function vc(t){return Pu(t).replace(R_,"%2B").replace(e1,"+").replace(A_,"%23").replace(WR,"%26").replace(XR,"`").replace(C_,"{").replace(P_,"}").replace(S_,"^")}function n1(t){return vc(t).replace(GR,"%3D")}function r1(t){return Pu(t).replace(A_,"%23").replace(QR,"%3F")}function s1(t){return t==null?"":r1(t).replace(KR,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const i1=/\/$/,o1=t=>t.replace(i1,"");function Vl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=u1(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Li(o)}}function a1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function If(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l1(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Is(e.matched[r],n.matched[s])&&k_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!c1(t[n],e[n]))return!1;return!0}function c1(t,e){return Zt(t)?bf(t,e):Zt(e)?bf(e,t):t===e}function bf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function u1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var mi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(mi||(mi={}));function h1(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o1(t)}const d1=/^[^#]+#/;function f1(t,e){return t.replace(d1,"#")+e}function p1(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function g1(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=p1(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Af(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function m1(t,e){yc.set(t,e)}function _1(t){const e=yc.get(t);return yc.delete(t),e}let v1=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),If(c,"")}return If(n,t)+r+s}function y1(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=x_(t,location),C=n.value,x=e.value;let D=0;if(g){if(n.value=_,e.value=g,o&&o===C){o=null;return}D=x?g.position-x.position:0}else r(_);s.forEach(B=>{B(n.value,C,{delta:D,type:Fi.pop,direction:D?D>0?mi.forward:mi.back:mi.unknown})})};function c(){o=n.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:za()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function Rf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?za():null}}function w1(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:v1()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,h){const d=ke({},e.state,Rf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=ke({},s.value,e.state,{forward:c,scroll:za()});i(d.current,d,!0);const p=ke({},Rf(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function E1(t){t=h1(t);const e=w1(t),n=y1(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:f1.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function T1(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const D_=Symbol("");var Sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sf||(Sf={}));function bs(t,e){return ke(new Error,{type:t,[D_]:!0},e)}function vn(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Cf="[^/]+?",I1={sensitive:!1,strict:!1,start:!0,end:!0},b1=/[.+*?^${}()[\]/\\]/g;function A1(t,e){const n=ke({},I1,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(b1,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:x,optional:D,regexp:B}=g;i.push({name:C,repeatable:x,optional:D});const j=B||Cf;if(j!==Cf){_+=10;try{new RegExp(`(${j})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${j}): `+q.message)}}let F=x?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(F=D&&h.length<2?`(?:/${F})`:"/"+F),D&&(F+="?"),s+=F,_+=20,D&&(_+=-8),x&&(_+=-20),j===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:x,optional:D}=_,B=C in h?h[C]:"";if(Zt(B)&&!x)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const j=Zt(B)?B.join("/"):B;if(!j)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function R1(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function O_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=R1(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pf(r))return 1;if(Pf(s))return-1}return s.length-r.length}function Pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S1={type:0,value:""},C1=/[a-zA-Z0-9_]/;function P1(t){if(!t)return[[]];if(t==="/")return[[S1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:C1.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function k1(t,e,n){const r=A1(P1(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function x1(t,e){const n=[],r=new Map;e=Df({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,x=xf(p);x.aliasOf=_&&_.record;const D=Df(e,p),B=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const X of q)B.push(xf(ke({},x,{components:_?_.record.components:x.components,path:X,aliasOf:_?_.record:x})))}let j,F;for(const q of B){const{path:X}=q;if(g&&X[0]!=="/"){const ce=g.record.path,R=ce[ce.length-1]==="/"?"":"/";q.path=g.record.path+(X&&R+X)}if(j=k1(q,g,D),_?_.alias.push(j):(F=F||j,F!==j&&F.alias.push(j),C&&p.name&&!Vf(j)&&o(p.name)),N_(j)&&c(j),x.children){const ce=x.children;for(let R=0;R<ce.length;R++)i(ce[R],j,_&&_.children[R])}_=_||j}return F?()=>{o(F)}:gi}function o(p){if(V_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=O1(p,n);n.splice(g,0,p),p.record.name&&!Vf(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},x,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw bs(1,{location:p});D=_.record.name,C=ke(kf(g.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&kf(p.params,_.keys.map(F=>F.name))),x=_.stringify(C)}else if(p.path!=null)x=p.path,_=n.find(F=>F.re.test(x)),_&&(C=_.parse(x),D=_.record.name);else{if(_=g.name?r.get(g.name):n.find(F=>F.re.test(g.path)),!_)throw bs(1,{location:p,currentLocation:g});D=_.record.name,C=ke({},g.params,p.params),x=_.stringify(C)}const B=[];let j=_;for(;j;)B.unshift(j.record),j=j.parent;return{name:D,path:x,params:C,matched:B,meta:D1(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function kf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:V1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function V1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function D1(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function O1(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;O_(t,e[i])<0?r=i:n=i+1}const s=N1(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function N1(t){let e=t;for(;e=e.parent;)if(N_(e)&&O_(t,e)===0)return e}function N_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function M1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(R_," "),o=i.indexOf("="),l=Li(o<0?i:i.slice(0,o)),c=o<0?null:Li(i.slice(o+1));if(l in e){let h=e[l];Zt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=n1(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&vc(i)):[r&&vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function L1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const F1=Symbol(""),Nf=Symbol(""),Wa=Symbol(""),M_=Symbol(""),wc=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(bs(4,{from:n,to:e})):g instanceof Error?c(g):T1(g)?c(bs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Dl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(b_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Gn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=zR(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Gn(_,n,r,o,l,s)()}))}}return i}function Mf(t){const e=Yt(Wa),n=Yt(M_),r=Ke(()=>{const c=ls(t.to);return e.resolve(c)}),s=Ke(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Is.bind(null,d));if(g>-1)return g;const _=Lf(c[h-2]);return h>1&&Lf(d)===_&&p[p.length-1].path!==_?p.findIndex(Is.bind(null,c[h-2])):g}),i=Ke(()=>s.value>-1&&$1(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&k_(n.params,r.value.params));function l(c={}){if(q1(c)){const h=e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(gi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function U1(t){return t.length===1?t[0]:t}const B1=Sp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mf,setup(t,{slots:e}){const n=Bi(Mf(t)),{options:r}=Yt(Wa),s=Ke(()=>({[Ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&U1(e.default(n));return t.custom?i:Uc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),j1=B1;function q1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ff=(t,e,n)=>t??e??n,H1=Sp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(wc),s=Ke(()=>t.route||r.value),i=Yt(Nf,0),o=Ke(()=>{let h=ls(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ke(()=>s.value.matched[o.value]);ko(Nf,Ke(()=>o.value+1)),ko(F1,l),ko(wc,s);const c=ve();return tr(()=>[c.value,l.value,t.name],([h,d,p],[g,_,C])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Is(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Uf(n.default,{Component:g,route:h});const _=p.props[d],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=Uc(g,ke({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Uf(n.default,{Component:D,route:h})||D}}});function Uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z1=H1;function W1(t){const e=x1(t.routes,t),n=t.parseQuery||M1,r=t.stringifyQuery||Of,s=t.history,i=Qs(),o=Qs(),l=Qs(),c=Bv($n);let h=$n;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xl.bind(null,O=>""+O),p=xl.bind(null,s1),g=xl.bind(null,Li);function _(O,J){let Q,Z;return V_(O)?(Q=e.getRecordMatcher(O),Z=J):Z=O,e.addRoute(Z,Q)}function C(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function B(O,J){if(J=ke({},J||c.value),typeof O=="string"){const P=Vl(n,O,J.path),N=e.resolve({path:P.path},J),L=s.createHref(P.fullPath);return ke(P,N,{params:g(N.params),hash:Li(P.hash),redirectedFrom:void 0,href:L})}let Q;if(O.path!=null)Q=ke({},O,{path:Vl(n,O.path,J.path).path});else{const P=ke({},O.params);for(const N in P)P[N]==null&&delete P[N];Q=ke({},O,{params:p(P)}),J.params=p(J.params)}const Z=e.resolve(Q,J),Re=O.hash||"";Z.params=d(g(Z.params));const E=a1(r,ke({},O,{hash:t1(Re),path:Z.path})),I=s.createHref(E);return ke({fullPath:E,hash:Re,query:r===Of?L1(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:I})}function j(O){return typeof O=="string"?Vl(n,O,c.value.path):ke({},O)}function F(O,J){if(h!==O)return bs(8,{from:J,to:O})}function q(O){return R(O)}function X(O){return q(ke(j(O),{replace:!0}))}function ce(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(O):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=j(Z):{path:Z},Z.params={}),ke({query:O.query,hash:O.hash,params:Z.path!=null?{}:O.params},Z)}}function R(O,J){const Q=h=B(O),Z=c.value,Re=O.state,E=O.force,I=O.replace===!0,P=ce(Q);if(P)return R(ke(j(P),{state:typeof P=="object"?ke({},Re,P.state):Re,force:E,replace:I}),J||Q);const N=Q;N.redirectedFrom=J;let L;return!E&&l1(r,Z,Q)&&(L=bs(16,{to:N,from:Z}),Ft(Z,Z,!0,!1)),(L?Promise.resolve(L):T(N,Z)).catch(M=>vn(M)?vn(M,2)?M:zt(M):we(M,N,Z)).then(M=>{if(M){if(vn(M,2))return R(ke({replace:I},j(M.to),{state:typeof M.to=="object"?ke({},Re,M.to.state):Re,force:E}),J||N)}else M=b(N,Z,!0,I,Re);return S(N,Z,M),M})}function y(O,J){const Q=F(O,J);return Q?Promise.reject(Q):Promise.resolve()}function v(O){const J=Mn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function T(O,J){let Q;const[Z,Re,E]=K1(O,J);Q=Dl(Z.reverse(),"beforeRouteLeave",O,J);for(const P of Z)P.leaveGuards.forEach(N=>{Q.push(Gn(N,O,J))});const I=y.bind(null,O,J);return Q.push(I),Pt(Q).then(()=>{Q=[];for(const P of i.list())Q.push(Gn(P,O,J));return Q.push(I),Pt(Q)}).then(()=>{Q=Dl(Re,"beforeRouteUpdate",O,J);for(const P of Re)P.updateGuards.forEach(N=>{Q.push(Gn(N,O,J))});return Q.push(I),Pt(Q)}).then(()=>{Q=[];for(const P of E)if(P.beforeEnter)if(Zt(P.beforeEnter))for(const N of P.beforeEnter)Q.push(Gn(N,O,J));else Q.push(Gn(P.beforeEnter,O,J));return Q.push(I),Pt(Q)}).then(()=>(O.matched.forEach(P=>P.enterCallbacks={}),Q=Dl(E,"beforeRouteEnter",O,J,v),Q.push(I),Pt(Q))).then(()=>{Q=[];for(const P of o.list())Q.push(Gn(P,O,J));return Q.push(I),Pt(Q)}).catch(P=>vn(P,8)?P:Promise.reject(P))}function S(O,J,Q){l.list().forEach(Z=>v(()=>Z(O,J,Q)))}function b(O,J,Q,Z,Re){const E=F(O,J);if(E)return E;const I=J===$n,P=rs?history.state:{};Q&&(Z||I?s.replace(O.fullPath,ke({scroll:I&&P&&P.scroll},Re)):s.push(O.fullPath,Re)),c.value=O,Ft(O,J,Q,I),zt()}let w;function Pe(){w||(w=s.listen((O,J,Q)=>{if(!en.listening)return;const Z=B(O),Re=ce(Z);if(Re){R(ke(Re,{replace:!0,force:!0}),Z).catch(gi);return}h=Z;const E=c.value;rs&&m1(Af(E.fullPath,Q.delta),za()),T(Z,E).catch(I=>vn(I,12)?I:vn(I,2)?(R(ke(j(I.to),{force:!0}),Z).then(P=>{vn(P,20)&&!Q.delta&&Q.type===Fi.pop&&s.go(-1,!1)}).catch(gi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),we(I,Z,E))).then(I=>{I=I||b(Z,E,!1),I&&(Q.delta&&!vn(I,8)?s.go(-Q.delta,!1):Q.type===Fi.pop&&vn(I,20)&&s.go(-1,!1)),S(Z,E,I)}).catch(gi)}))}let Ge=Qs(),Ve=Qs(),de;function we(O,J,Q){zt(O);const Z=Ve.list();return Z.length?Z.forEach(Re=>Re(O,J,Q)):console.error(O),Promise.reject(O)}function Vt(){return de&&c.value!==$n?Promise.resolve():new Promise((O,J)=>{Ge.add([O,J])})}function zt(O){return de||(de=!O,Pe(),Ge.list().forEach(([J,Q])=>O?Q(O):J()),Ge.reset()),O}function Ft(O,J,Q,Z){const{scrollBehavior:Re}=t;if(!rs||!Re)return Promise.resolve();const E=!Q&&_1(Af(O.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return Ea().then(()=>Re(O,J,E)).then(I=>I&&g1(I)).catch(I=>we(I,O,J))}const je=O=>s.go(O);let qe;const Mn=new Set,en={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:x,resolve:B,options:t,push:q,replace:X,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ve.add,isReady:Vt,install(O){const J=this;O.component("RouterLink",j1),O.component("RouterView",z1),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),rs&&!qe&&c.value===$n&&(qe=!0,q(s.location).catch(Re=>{}));const Q={};for(const Re in $n)Object.defineProperty(Q,Re,{get:()=>c.value[Re],enumerable:!0});O.provide(Wa,J),O.provide(M_,dp(Q)),O.provide(wc,c);const Z=O.unmount;Mn.add(O),O.unmount=function(){Mn.delete(O),Mn.size<1&&(h=$n,w&&w(),w=null,c.value=$n,qe=!1,de=!1),Z()}}};function Pt(O){return O.reduce((J,Q)=>J.then(()=>v(Q)),Promise.resolve())}return en}function K1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>Is(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>Is(h,c))||s.push(c))}return[n,r,s]}function ku(){return Yt(Wa)}const vr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},G1={name:"Navbar",setup(){const t=ku(),e=ve(!1),n=ve(!1),r=ve(null),s=ve(null),i=ve(Et.currentUser!==null),o=async _=>{if(_)try{const C=ar(lr,"usuarios",_),x=await Cu(C);x.exists()?s.value=x.data():(console.log("No such user document!"),s.value=null)}catch(C){console.error("Error fetching user data:",C),s.value=null}};Yc(Et,_=>{i.value=!!_,_?o(_.uid):s.value=null}),Rs(()=>{Et.currentUser&&o(Et.currentUser.uid),document.addEventListener("click",d)}),qi(()=>{document.removeEventListener("click",d)});const l=()=>{e.value=!e.value},c=()=>{n.value=!n.value},h=()=>{n.value=!1},d=_=>{r.value&&!r.value.contains(_.target)&&(e.value=!1)},p=async()=>{try{await Hg(Et),localStorage.removeItem("dispositivoID"),s.value=null,e.value=!1,t.push("/")}catch(_){console.error("Error logging out:",_)}};return{isAuthenticated:i,userData:s,isDropdownOpen:e,isMobileMenuOpen:n,dropdown:r,toggleDropdown:l,toggleMobileMenu:c,closeMobileMenu:h,handleLogout:p,handleMobileLogout:async()=>{await p(),h()}}}},Q1={class:"navbar-container"},Y1={class:"container mx-auto px-4 py-3"},J1={class:"md:hidden flex justify-between items-center"},X1={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Z1={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},eS={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},tS={class:"hidden md:flex justify-between items-center"},nS={class:"absolute left-1/2 transform -translate-x-1/2"},rS={class:"flex items-center space-x-4"},sS={key:0,class:"relative",ref:"dropdown"},iS=["src"],oS={key:1,class:"avatar-initials"},aS={class:"hidden sm:inline"},lS={key:0,class:"dropdown-menu"},cS={key:0,class:"md:hidden mt-4 pb-4 border-t border-white/20"},uS={class:"flex flex-col space-y-3 pt-4"},hS={class:"flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-lg"},dS=["src"],fS={key:1,class:"avatar-initials"},pS={class:"text-white font-medium"};function gS(t,e,n,r,s,i){var l,c,h,d,p,g;const o=Sn("router-link");return te(),ne("nav",Q1,[A("div",Y1,[A("div",J1,[A("button",{onClick:e[0]||(e[0]=(..._)=>r.toggleMobileMenu&&r.toggleMobileMenu(..._)),class:"mobile-menu-button"},[(te(),ne("svg",X1,[r.isMobileMenuOpen?(te(),ne("path",eS)):(te(),ne("path",Z1))]))]),ye(o,{to:"/",class:"logo-link mobile-logo"},{default:Be(()=>e[5]||(e[5]=[$e(" Where is my kid? 🧒🏻🌍 ")])),_:1}),e[6]||(e[6]=A("div",{class:"w-6"},null,-1))]),A("div",tS,[e[12]||(e[12]=A("div",{class:"flex items-center space-x-6"},null,-1)),A("div",nS,[ye(o,{to:"/",class:"logo-link"},{default:Be(()=>e[7]||(e[7]=[$e(" Where is my kid? 🧒🏻🌍 ")])),_:1})]),A("div",rS,[r.isAuthenticated?(te(),ne("div",sS,[A("button",{onClick:e[1]||(e[1]=(..._)=>r.toggleDropdown&&r.toggleDropdown(..._)),class:"profile-button"},[(l=r.userData)!=null&&l.photoURL?(te(),ne("img",{key:0,src:r.userData.photoURL,alt:"Avatar",class:"avatar-img"},null,8,iS)):(te(),ne("span",oS,Le((c=r.userData)!=null&&c.nombre?r.userData.nombre[0].toUpperCase():"U"),1)),A("span",aS,Le(((h=r.userData)==null?void 0:h.nombre)||"Usuario"),1),e[8]||(e[8]=A("svg",{class:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),r.isDropdownOpen?(te(),ne("div",lS,[ye(o,{to:"/profile",class:"dropdown-item",onClick:e[2]||(e[2]=_=>r.isDropdownOpen=!1)},{default:Be(()=>e[9]||(e[9]=[$e(" Ver Perfil ")])),_:1}),A("button",{onClick:e[3]||(e[3]=(..._)=>r.handleLogout&&r.handleLogout(..._)),class:"dropdown-item logout-item"}," Cerrar Sesión ")])):Xe("",!0)],512)):(te(),ne(Nt,{key:1},[ye(o,{to:"/login",class:"nav-link"},{default:Be(()=>e[10]||(e[10]=[$e(" Iniciar Sesión ")])),_:1}),ye(o,{to:"/register",class:"register-button"},{default:Be(()=>e[11]||(e[11]=[$e(" Registrarse ")])),_:1})],64))])]),r.isMobileMenuOpen?(te(),ne("div",cS,[A("div",uS,[r.isAuthenticated?(te(),ne(Nt,{key:0},[A("div",hS,[(d=r.userData)!=null&&d.photoURL?(te(),ne("img",{key:0,src:r.userData.photoURL,alt:"Avatar",class:"avatar-img"},null,8,dS)):(te(),ne("span",fS,Le((p=r.userData)!=null&&p.nombre?r.userData.nombre[0].toUpperCase():"U"),1)),A("span",pS,Le(((g=r.userData)==null?void 0:g.nombre)||"Usuario"),1)]),ye(o,{to:"/profile",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:Be(()=>e[13]||(e[13]=[$e(" Ver Perfil ")])),_:1},8,["onClick"]),A("button",{onClick:e[4]||(e[4]=(..._)=>r.handleMobileLogout&&r.handleMobileLogout(..._)),class:"mobile-nav-link text-left"}," Cerrar Sesión ")],64)):(te(),ne(Nt,{key:1},[ye(o,{to:"/login",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:Be(()=>e[14]||(e[14]=[$e(" Iniciar Sesión ")])),_:1},8,["onClick"]),ye(o,{to:"/register",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:Be(()=>e[15]||(e[15]=[$e(" Registrarse ")])),_:1},8,["onClick"])],64))])])):Xe("",!0)])])}const mS=vr(G1,[["render",gS],["__scopeId","data-v-9af6b352"]]),_S={name:"Footer",setup(){return{currentYear:ve(new Date().getFullYear())}}},vS={class:"bg-gray-800 text-white py-3"},yS={class:"container mx-auto px-6"},wS={class:"flex flex-col md:flex-row justify-between items-center"},ES={class:"text-gray-400 text-xs mb-2 md:mb-0 text-center md:text-left"};function TS(t,e,n,r,s,i){return te(),ne("footer",vS,[A("div",yS,[A("div",wS,[A("div",ES,[A("p",null,"© "+Le(r.currentYear)+" Where is my kid? | Desarrollado por David Cela Pedraza",1)]),e[0]||(e[0]=Ti('<div class="flex space-x-4"><a href="https://github.com/DavidNull" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200"><i class="fab fa-github fa-lg"></i><span class="sr-only">GitHub</span></a><a href="https://www.linkedin.com/in/david-cela-pedraza/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200"><i class="fab fa-linkedin fa-lg"></i><span class="sr-only">LinkedIn</span></a></div>',1))])])])}const IS=vr(_S,[["render",TS]]),bS={name:"App",components:{Navbar:mS,Footer:IS},setup(){const t=Ha(),e=["🌍 Where is my kid? 🌍","🧒🏻 Where is my kid? 🧒🏻","📍 Where is my kid? 📍"];let n=0,r=null;const s=()=>{document.title=e[n],n=(n+1)%e.length};return Rs(()=>{t.init(),Yc(Et,i=>{i?(console.log("App.vue: User is signed in:",i.uid),t.user=i,t.fetchUserData(i.uid)):(console.log("App.vue: User is signed out"),t.user=null,t.userData=null)}),s(),r=setInterval(s,2e3)}),qi(()=>{r&&clearInterval(r)}),{}}},AS={class:"min-h-screen flex flex-col app-container"},RS={class:"flex-grow"};function SS(t,e,n,r,s,i){const o=Sn("Navbar"),l=Sn("router-view"),c=Sn("Footer");return te(),ne("div",AS,[ye(o),A("main",RS,[ye(l)]),ye(c)])}const CS=vr(bS,[["render",SS]]),PS="/videos/Fondoindex.mp4",kS={name:"HomeView"},xS={class:"min-h-screen"},VS={class:"relative"},DS={class:"relative container mx-auto px-4 py-32 flex flex-col items-center text-white"},OS={class:"flex space-x-4 animate-fade-in"};function NS(t,e,n,r,s,i){const o=Sn("router-link");return te(),ne("div",xS,[A("div",VS,[e[3]||(e[3]=A("div",{class:"absolute inset-0 overflow-hidden"},[A("video",{autoplay:"",loop:"",muted:"",class:"min-w-full min-h-full object-cover animate-fade-from-black"},[A("source",{src:PS,type:"video/mp4"})]),A("div",{class:"absolute inset-0 bg-black bg-opacity-50 animate-fade-in"})],-1)),A("div",DS,[e[1]||(e[1]=A("h1",{class:"text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in"},"Where is my kid?",-1)),e[2]||(e[2]=A("p",{class:"text-xl md:text-2xl mb-8 text-center max-w-2xl animate-fade-in"}," La plataforma que te mantiene conectado con la ubicación de tus hijos en tiempo real ",-1)),A("div",OS,[ye(o,{to:"/register",class:"btn btn-primary text-lg px-6 py-3"},{default:Be(()=>e[0]||(e[0]=[$e(" Comenzar Ahora ")])),_:1})])])]),e[4]||(e[4]=Ti('<div class="bg-slate-800 text-white py-16 relative" data-v-42679da4><div class="background-elements" data-v-42679da4><div class="floating-element element-1" data-v-42679da4></div><div class="floating-element element-2" data-v-42679da4></div><div class="floating-element element-3" data-v-42679da4></div><div class="floating-element element-4" data-v-42679da4></div><div class="floating-element element-5" data-v-42679da4></div><div class="floating-element element-6" data-v-42679da4></div><div class="floating-element element-7" data-v-42679da4></div><div class="floating-element element-8" data-v-42679da4></div><div class="floating-element element-9" data-v-42679da4></div><div class="floating-element element-10" data-v-42679da4></div></div><div class="container mx-auto px-4 relative z-10" data-v-42679da4><h2 class="text-3xl font-bold text-center mb-12" data-v-42679da4>¿Sabías que?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-42679da4><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105" data-v-42679da4><h3 class="text-xl font-semibold mb-3 text-sky-400" data-v-42679da4>Atropellos infantiles</h3><p data-v-42679da4>En España <strong data-v-42679da4>el 16% de los atropellos al año son a menores de 14 años</strong>, eso son <strong data-v-42679da4>1540 niños al año.</strong></p></div><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105" data-v-42679da4><h3 class="text-xl font-semibold mb-3 text-green-400" data-v-42679da4>Accidentes en la calle</h3><p data-v-42679da4>Un estudio realizado en Andalucía indica que <strong data-v-42679da4>el 34,6% de los accidentes infantiles ocurren en la calle por ir desatendidos o solos.</strong></p></div><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-transform hover:scale-105" data-v-42679da4><h3 class="text-xl font-semibold mb-3 text-red-400" data-v-42679da4>Secuestros de menores</h3><p data-v-42679da4>Los <strong data-v-42679da4>secuestros de menores</strong> con fines criminales en España <strong data-v-42679da4>aumentaron un 125% de 2023 a 2024</strong>, pasando de 8 a 18.</p></div></div><div class="text-center mt-12" data-v-42679da4><h4 class="text-2xl font-bold mb-6" data-v-42679da4>¿Y si fuera tu hijo?</h4></div></div></div><div class="bg-gray-200 py-16" data-v-42679da4><div class="container mx-auto px-4" data-v-42679da4><h2 class="text-3xl font-bold text-center mb-12 text-gray-800" data-v-42679da4>¿Qué ofrecemos?</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-42679da4><div class="bg-white rounded-lg p-6 shadow-md" data-v-42679da4><div class="text-primary text-4xl mb-4" data-v-42679da4><i class="fas fa-map-marker-alt" data-v-42679da4></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700" data-v-42679da4>Seguimiento en Tiempo Real</h3><p class="text-gray-600" data-v-42679da4>Monitorea la ubicación exacta de tus hijos <strong data-v-42679da4>en tiempo real</strong>.</p></div><div class="bg-white rounded-lg p-6 shadow-md" data-v-42679da4><div class="text-primary text-4xl mb-4" data-v-42679da4><i class="fas fa-mobile-alt" data-v-42679da4></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700" data-v-42679da4>App Móvil Sencilla</h3><p class="text-gray-600" data-v-42679da4>Aplicación móvil fácil de usar para tus hijos con solo 2 opciones: <strong data-v-42679da4>Añadir ID</strong> y <strong data-v-42679da4>enviar ubicación</strong>.</p></div><div class="bg-white rounded-lg p-6 shadow-md" data-v-42679da4><div class="text-primary text-4xl mb-4" data-v-42679da4><i class="fas fa-lock" data-v-42679da4></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700" data-v-42679da4>Privacidad y Seguridad</h3><p class="text-gray-600" data-v-42679da4>Datos encriptados y sistema donde solo puede acceder a la ubicación el usuario que tiene el ID.</p></div></div></div></div>',2))])}const MS=vr(kS,[["render",NS],["__scopeId","data-v-42679da4"]]),LS="modulepreload",FS=function(t){return"/"+t},Bf={},US=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=FS(c),c in Bf)return;Bf[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":LS,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};class BS{subscribeToLocation(e,n){if(!e)return n({error:"No device ID provided"}),()=>{};const r=ar(lr,"ubicaciones",e);return qR(r,s=>{var i;if(s.exists()){const o=s.data();n({latitude:o.latitud,longitude:o.longitud,lastUpdate:((i=o.ultimaActualizacion)==null?void 0:i.toDate())||new Date,deviceId:e})}else n({error:"No location data found"})},s=>{console.error("Location subscription error:",s),n({error:s.message})})}async getLatestLocation(e){var n;try{if(!e)throw new Error("No device ID provided");const r=ar(lr,"ubicaciones",e),s=await Cu(r);if(s.exists()){const i=s.data();return{latitude:i.latitud,longitude:i.longitud,lastUpdate:((n=i.ultimaActualizacion)==null?void 0:n.toDate())||new Date,deviceId:e}}else throw new Error("No location data found")}catch(r){throw console.error("Error getting location:",r),r}}}const jf=new BS;class jS{constructor(e,n){this.latitude=e.latitud||0,this.longitude=e.longitud||0,this.lastUpdate=this._parseTimestamp(e.ultimaActualizacion)||new Date,this.userId=e.usuario||null,this.deviceId=n||null}_parseTimestamp(e){return e?e instanceof Date?e:typeof e.toDate=="function"?e.toDate():typeof e=="number"?e<1e12?new Date(e*1e3):new Date(e):new Date:new Date}getFormattedLastUpdate(){return this.lastUpdate.toLocaleString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}getTimeElapsed(){const n=new Date-this.lastUpdate,r=Math.floor(n/1e3);if(r<60)return`Hace ${r} segundos`;const s=Math.floor(r/60);if(s<60)return`Hace ${s} minutos`;const i=Math.floor(s/60);return i<24?`Hace ${i} horas`:`Hace ${Math.floor(i/24)} días`}isRecent(){return new Date-this.lastUpdate<5*60*1e3}}class qS{constructor(e){this.view=e,this.state={isAuthenticated:Ke(()=>Et.currentUser!==null),locationData:ve(null),locationError:ve(null),locationUpdating:ve(!1),map:ve(null),marker:ve(null),unsubscribeLocation:ve(null)},this._setupWatchers()}initMap(e,n){this.state.map.value=e.map(n,{zoomControl:!1}).setView([40,-4],6),e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(this.state.map.value),this.L=e,setTimeout(()=>{this.state.map.value&&(this.state.map.value.invalidateSize(),this.state.map.value.setView([40,-4],6),console.log("Map invalidSize called and recentered"))},200),window.addEventListener("resize",()=>{this.state.map.value&&this.state.map.value.invalidateSize()}),this.state.isAuthenticated.value&&this.loadLocationData()}async loadLocationData(){try{this.state.locationUpdating.value=!0,this.state.locationError.value=null;const e=Ha();let n=null;if(e.deviceId?n=e.deviceId:n=localStorage.getItem("dispositivoID"),!n&&(await e.fetchUserData(Et.currentUser.uid),n=e.deviceId,!n)){this.state.locationError.value="No se encontró ID de dispositivo",this.state.locationUpdating.value=!1;return}try{const r=await jf.getLatestLocation(n);this._updateLocationData(r)}catch(r){this.state.locationError.value="Error al cargar ubicación inicial",console.error(r)}this.state.unsubscribeLocation.value&&this.state.unsubscribeLocation.value(),this.state.unsubscribeLocation.value=jf.subscribeToLocation(n,r=>{r.error?this.state.locationError.value=r.error:this._updateLocationData(r),this.state.locationUpdating.value=!1})}catch(e){this.state.locationError.value="Error al cargar ubicación",console.error(e),this.state.locationUpdating.value=!1}}_updateLocationData(e){const n=new jS({latitud:e.latitude,longitud:e.longitude,ultimaActualizacion:e.lastUpdate},e.deviceId);if(this.state.locationData.value=n,this.state.map.value&&n.latitude&&n.longitude&&this.L){const r=this.L,s=r.icon({iconUrl:"/images/niño.png",iconSize:[50,50],iconAnchor:[25,50],popupAnchor:[0,-50]});this.state.marker.value?this.state.marker.value.setLatLng([n.latitude,n.longitude]):this.state.marker.value=r.marker([n.latitude,n.longitude],{icon:s}).addTo(this.state.map.value),this.state.map.value.setView([n.latitude,n.longitude],15)}}_setupWatchers(){tr(()=>this.state.isAuthenticated.value,e=>{e&&this.state.map.value?this.loadLocationData():e||(this.state.unsubscribeLocation.value&&(this.state.unsubscribeLocation.value(),this.state.unsubscribeLocation.value=null),this.state.marker.value&&this.state.map.value&&(this.state.map.value.removeLayer(this.state.marker.value),this.state.marker.value=null),this.state.locationData.value=null)})}cleanup(){this.state.unsubscribeLocation.value&&this.state.unsubscribeLocation.value(),this.state.map.value&&this.state.map.value.remove()}formatDateTime(e){if(!e)return"N/A";const n=new Date(e);return`${n.getDate().toString().padStart(2,"0")}/${(n.getMonth()+1).toString().padStart(2,"0")}/${n.getFullYear()} ${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}`}}const $S={name:"MapView",setup(){const t=new qS,e=Ke(()=>Et.currentUser!==null),n=ve(!1);return Rs(()=>{US(()=>import("./leaflet-src-DTmlu4rB.js").then(r=>r.l),[]).then(r=>{t.initMap(r.default||r,"map")}).catch(r=>{console.error("Failed loading Leaflet",r)})}),qi(()=>{t.cleanup()}),{presenter:t,isAuthenticated:e,isPanelExpanded:n}}},HS={id:"map-container"},zS={key:0,class:"absolute bottom-4 left-4 z-20"},WS={key:0,class:"p-4 space-y-3 text-sm"},KS={class:"flex justify-between"},GS={class:"font-mono text-gray-800"},QS={class:"flex justify-between"},YS={class:"font-mono text-gray-800"},JS={class:"flex justify-between"},XS={class:"text-gray-800"},ZS={class:"flex justify-between"},eC={key:1,class:"absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10"},tC={class:"text-center text-white p-8 bg-primary rounded-lg shadow-xl max-w-md mx-4"},nC={class:"space-y-3"};function rC(t,e,n,r,s,i){var l,c,h,d,p,g,_;const o=Sn("router-link");return te(),ne("div",HS,[e[12]||(e[12]=A("div",{id:"map",class:"w-full"},null,-1)),r.isAuthenticated&&r.presenter.state.locationData.value?(te(),ne("div",zS,[A("div",{class:vt(["bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300",{"max-h-12":!r.isPanelExpanded,"max-h-64":r.isPanelExpanded}])},[A("div",{onClick:e[0]||(e[0]=C=>r.isPanelExpanded=!r.isPanelExpanded),class:"flex items-center justify-between px-4 py-2 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors min-h-12"},[e[2]||(e[2]=A("div",{class:"flex items-center space-x-2"},[A("span",{class:"text-green-500 text-base"},"📍"),A("span",{class:"font-semibold text-gray-700 text-sm"},"Ubicación")],-1)),(te(),ne("svg",{class:vt(["w-4 h-4 text-gray-500 transition-transform duration-300",{"rotate-180":r.isPanelExpanded}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[1]||(e[1]=[A("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))]),r.isPanelExpanded?(te(),ne("div",WS,[A("div",KS,[e[3]||(e[3]=A("span",{class:"text-gray-600"},"Latitud:",-1)),A("span",GS,Le((c=(l=r.presenter.state.locationData.value)==null?void 0:l.latitude)==null?void 0:c.toFixed(6)),1)]),A("div",QS,[e[4]||(e[4]=A("span",{class:"text-gray-600"},"Longitud:",-1)),A("span",YS,Le((d=(h=r.presenter.state.locationData.value)==null?void 0:h.longitude)==null?void 0:d.toFixed(6)),1)]),A("div",JS,[e[5]||(e[5]=A("span",{class:"text-gray-600"},"Última actualización:",-1)),A("span",XS,Le((p=r.presenter.state.locationData.value)==null?void 0:p.getFormattedLastUpdate()),1)]),A("div",ZS,[e[6]||(e[6]=A("span",{class:"text-gray-600"},"Hace:",-1)),A("span",{class:vt(["text-gray-800",{"text-green-600":(g=r.presenter.state.locationData.value)==null?void 0:g.isRecent()}])},Le((_=r.presenter.state.locationData.value)==null?void 0:_.getTimeElapsed()),3)])])):Xe("",!0)],2)])):Xe("",!0),r.isAuthenticated?Xe("",!0):(te(),ne("div",eC,[A("div",tC,[e[9]||(e[9]=A("div",{class:"text-6xl mb-4"},"🔒",-1)),e[10]||(e[10]=A("h2",{class:"text-2xl font-bold mb-4"},"Acceso Restringido",-1)),e[11]||(e[11]=A("p",{class:"text-lg mb-6"},"Para ver la ubicación en tiempo real, necesitas iniciar sesión en tu cuenta.",-1)),A("div",nC,[ye(o,{to:"/login",class:"block w-full bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"},{default:Be(()=>e[7]||(e[7]=[$e(" Iniciar Sesión ")])),_:1}),ye(o,{to:"/register",class:"block w-full border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors duration-200"},{default:Be(()=>e[8]||(e[8]=[$e(" Crear Cuenta ")])),_:1})])])]))])}const sC=vr($S,[["render",rC],["__scopeId","data-v-c87f03dc"]]),iC={name:"LoginView",setup(){const t=ve(""),e=ve(""),n=ve(!1),r=ve(!1),s=ve(""),i=ve(!1),o=ve(!1),l=ve(""),c=ve(""),h=ve(!1),d=ve(!1),p=ku(),g=Ha(),_=Ke(()=>t.value&&e.value&&!l.value&&!c.value),C=()=>{const q=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t.value?q.test(t.value)?(l.value="",h.value=!0):(l.value="Introduce un correo válido",h.value=!1):(l.value="El correo es requerido",h.value=!1)},x=()=>{e.value?e.value.length<6?(c.value="La contraseña debe tener al menos 6 caracteres",d.value=!1):(c.value="",d.value=!0):(c.value="La contraseña es requerida",d.value=!1)},D=()=>{l.value=""},B=()=>{c.value=""},j=()=>{i.value=!i.value},F=async()=>{try{if(C(),x(),!_.value)return;r.value=!0,s.value="",o.value=!1;const q=await g.login(t.value,e.value);q.success?(n.value&&localStorage.setItem("rememberUser","true"),p.push("/map")):(s.value=q.error||"Error al iniciar sesión",o.value=!0,setTimeout(()=>o.value=!1,600))}catch(q){console.error("Login error:",q),s.value="Error al iniciar sesión",o.value=!0,setTimeout(()=>o.value=!1,600)}finally{r.value=!1}};return tr(t,()=>{(h.value||l.value)&&C()}),tr(e,()=>{(d.value||c.value)&&x()}),{email:t,password:e,rememberMe:n,isLoading:r,errorMessage:s,showPassword:i,hasError:o,emailError:l,passwordError:c,emailValid:h,passwordValid:d,isFormValid:_,validateEmail:C,validatePassword:x,clearEmailError:D,clearPasswordError:B,togglePasswordVisibility:j,handleLogin:F}}},oC={class:"login-page animate-fade-in"},aC={key:0,class:"error-message"},lC={class:"input-group"},cC={class:"input-wrapper"},uC=["disabled"],hC={class:"input-status"},dC={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fC={key:0,class:"field-error-message"},pC={class:"input-group"},gC={class:"input-wrapper"},mC=["type","disabled"],_C={class:"input-status"},vC={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},yC=["disabled"],wC={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},EC={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},TC={key:0,class:"field-error-message"},IC=["disabled"],bC={class:"submit-content"},AC={key:0,class:"loading-spinner",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},RC={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function SC(t,e,n,r,s,i){const o=Sn("router-link");return te(),ne("div",oC,[e[20]||(e[20]=A("div",{class:"background-elements"},[A("div",{class:"floating-element element-1"}),A("div",{class:"floating-element element-2"}),A("div",{class:"floating-element element-3"})],-1)),A("div",{class:vt(["form-container animate-fade-in-delay",{"form-shake":r.hasError}])},[e[18]||(e[18]=A("div",{class:"welcome-section"},[A("h1",{class:"welcome-title"},"¡Bienvenido de vuelta!"),A("p",{class:"welcome-subtitle"},"Inicia sesión para monitorear a tus hijos")],-1)),ye(wn,{name:"error-slide"},{default:Be(()=>[r.errorMessage?(te(),ne("div",aC,[e[8]||(e[8]=A("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"}),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"currentColor","stroke-width":"2"}),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"currentColor","stroke-width":"2"})],-1)),$e(" "+Le(r.errorMessage),1)])):Xe("",!0)]),_:1}),A("form",{onSubmit:e[7]||(e[7]=ng((...l)=>r.handleLogin&&r.handleLogin(...l),["prevent"])),class:"login-form"},[A("div",lC,[e[10]||(e[10]=A("label",{for:"email",class:"input-label"},[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),A("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),$e(" Correo electrónico ")],-1)),A("div",cC,[ss(A("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),type:"email",placeholder:"ejemplo@correo.com",class:vt(["input-field",{"input-valid":r.emailValid&&r.email.length>0,"input-error":r.emailError&&r.email.length>0}]),required:"",autocomplete:"email",disabled:r.isLoading,onBlur:e[1]||(e[1]=(...l)=>r.validateEmail&&r.validateEmail(...l)),onInput:e[2]||(e[2]=(...l)=>r.clearEmailError&&r.clearEmailError(...l))},null,42,uC),[[Ai,r.email]]),A("div",hC,[r.emailValid&&r.email.length>0?(te(),ne("svg",dC,e[9]||(e[9]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):Xe("",!0)])]),ye(wn,{name:"field-error"},{default:Be(()=>[r.emailError&&r.email.length>0?(te(),ne("div",fC,Le(r.emailError),1)):Xe("",!0)]),_:1})]),A("div",pC,[e[14]||(e[14]=Ti('<label for="password" class="input-label" data-v-2961323b><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2961323b><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-2961323b></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-2961323b></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-2961323b></path></svg> Contraseña </label>',1)),A("div",gC,[ss(A("input",{id:"password","onUpdate:modelValue":e[3]||(e[3]=l=>r.password=l),type:r.showPassword?"text":"password",placeholder:"Tu contraseña segura",class:vt(["input-field",{"input-valid":r.passwordValid&&r.password.length>0,"input-error":r.passwordError&&r.password.length>0}]),required:"",autocomplete:"current-password",disabled:r.isLoading,onBlur:e[4]||(e[4]=(...l)=>r.validatePassword&&r.validatePassword(...l)),onInput:e[5]||(e[5]=(...l)=>r.clearPasswordError&&r.clearPasswordError(...l))},null,42,mC),[[zl,r.password]]),A("div",_C,[r.passwordValid&&r.password.length>0?(te(),ne("svg",vC,e[11]||(e[11]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):Xe("",!0)]),A("button",{type:"button",onClick:e[6]||(e[6]=(...l)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...l)),class:"password-toggle",disabled:r.isLoading},[r.showPassword?(te(),ne("svg",wC,e[12]||(e[12]=[A("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(te(),ne("svg",EC,e[13]||(e[13]=[A("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),A("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,yC)]),ye(wn,{name:"field-error"},{default:Be(()=>[r.passwordError&&r.password.length>0?(te(),ne("div",TC,Le(r.passwordError),1)):Xe("",!0)]),_:1})]),A("button",{type:"submit",disabled:!r.isFormValid||r.isLoading,class:vt(["submit-button",{loading:r.isLoading}])},[A("div",bC,[r.isLoading?(te(),ne("svg",AC,e[15]||(e[15]=[A("path",{d:"M21 12a9 9 0 11-6.219-8.56",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)]))):(te(),ne("svg",RC,e[16]||(e[16]=[A("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))),$e(" "+Le(r.isLoading?"Iniciando sesión...":"Iniciar Sesión"),1)])],10,IC)],32),e[19]||(e[19]=A("div",{class:"divider"},[A("span",{class:"divider-text"},"¿Aún no tienes una cuenta?")],-1)),ye(o,{to:"/register",class:"register-link"},{default:Be(()=>e[17]||(e[17]=[A("div",{class:"register-content"},[A("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),A("circle",{cx:"8.5",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"}),A("line",{x1:"20",y1:"8",x2:"20",y2:"14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),A("line",{x1:"23",y1:"11",x2:"17",y2:"11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),$e(" Crear nueva cuenta ")],-1)])),_:1})],2)])}const CC=vr(iC,[["render",SC],["__scopeId","data-v-2961323b"]]),PC={name:"Register",setup(){const t=ku(),e=ve(""),n=ve(""),r=ve(""),s=ve(""),i=ve(!1),o=ve(!1),l=ve(!1),c=ve(""),h=ve(""),d=ve(!1),p=Ke(()=>e.value.length===0?{isValid:!0,message:""}:e.value.length<2?{isValid:!1,message:"El nombre debe tener al menos 2 caracteres"}:e.value.length>50?{isValid:!1,message:"El nombre no puede tener más de 50 caracteres"}:/^[a-zA-ZÀ-ÿ\s]+$/.test(e.value)?{isValid:!0,message:""}:{isValid:!1,message:"El nombre solo puede contener letras y espacios"}),g=Ke(()=>n.value.length===0?{isValid:!0,message:""}:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?{isValid:!0,message:""}:{isValid:!1,message:"Por favor, introduce un email válido"}),_=Ke(()=>r.value.length===0?{isValid:!0,message:""}:r.value.length<6?{isValid:!1,message:"La contraseña debe tener al menos 6 caracteres"}:r.value.length>128?{isValid:!1,message:"La contraseña es demasiado larga"}:{isValid:!0,message:""}),C=Ke(()=>s.value.length===0?{isValid:!0,message:""}:s.value!==r.value?{isValid:!1,message:"Las contraseñas no coinciden"}:{isValid:!0,message:""}),x=Ke(()=>p.value.isValid&&g.value.isValid&&_.value.isValid&&C.value.isValid&&e.value.length>0&&n.value.length>0&&r.value.length>0&&s.value.length>0),D=()=>{d.value=!0,setTimeout(()=>{d.value=!1},600)},B=()=>{const F="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let q="";for(let X=0;X<6;X++)q+=F.charAt(Math.floor(Math.random()*F.length));return q};return{name:e,email:n,password:r,confirmPassword:s,showPassword:i,showConfirmPassword:o,isLoading:l,errorMessage:c,successMessage:h,formShake:d,nameValidation:p,emailValidation:g,passwordValidation:_,confirmPasswordValidation:C,isFormValid:x,handleRegister:async()=>{if(c.value="",h.value="",!x.value){c.value="Por favor, completa todos los campos correctamente",D();return}l.value=!0;try{const F=B(),X=(await $g(Et,n.value,r.value)).user;await ga(ar(lr,"usuarios",X.uid),{nombre:e.value,email:n.value,fechaRegistro:new Date,dispositivoID:F}),await ga(ar(lr,"ubicaciones",F),{latitud:0,longitud:0,ultimaActualizacion:new Date,usuario:X.uid}),h.value="¡Cuenta creada exitosamente!",setTimeout(()=>{t.push("/login")},1500)}catch(F){switch(console.error("Error creating account:",F),F.code){case"auth/email-already-in-use":c.value="Este email ya está registrado";break;case"auth/invalid-email":c.value="Email inválido";break;case"auth/operation-not-allowed":c.value="Operación no permitida";break;case"auth/weak-password":c.value="La contraseña es muy débil";break;default:c.value="Error al crear la cuenta. Inténtalo de nuevo."}D()}finally{l.value=!1}},triggerFormShake:D}}},kC={class:"register-page animate-fade-in"},xC={key:0,class:"error-message"},VC={key:0,class:"success-message"},DC={class:"input-group"},OC={class:"input-wrapper"},NC=["aria-describedby"],MC={class:"input-status"},LC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},FC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},UC={key:0,id:"name-error",class:"field-error-message"},BC={class:"input-group"},jC={class:"input-wrapper"},qC=["aria-describedby"],$C={class:"input-status"},HC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},zC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},WC={key:0,id:"email-error",class:"field-error-message"},KC={class:"input-group"},GC={class:"input-wrapper"},QC=["type","aria-describedby"],YC={class:"input-status"},JC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},XC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ZC=["aria-label"],eP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nP={key:0,id:"password-error",class:"field-error-message"},rP={class:"input-group"},sP={class:"input-wrapper"},iP=["type","aria-describedby"],oP={class:"input-status"},aP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},lP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},cP=["aria-label"],uP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},hP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},dP={key:0,id:"confirm-password-error",class:"field-error-message"},fP=["disabled"],pP={class:"submit-content"},gP={key:0,class:"loading-spinner",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},mP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function _P(t,e,n,r,s,i){const o=Sn("router-link");return te(),ne("div",kC,[e[30]||(e[30]=A("div",{class:"background-elements"},[A("div",{class:"floating-element element-1"}),A("div",{class:"floating-element element-2"}),A("div",{class:"floating-element element-3"})],-1)),A("div",{class:vt(["form-container animate-fade-in-delay",{"form-shake":r.formShake}])},[e[28]||(e[28]=A("div",{class:"welcome-section"},[A("h1",{class:"welcome-title"},"Crea tu cuenta"),A("p",{class:"welcome-subtitle"},"Únete para proteger y localizar a tu familia")],-1)),ye(wn,{name:"error-slide"},{default:Be(()=>[r.errorMessage?(te(),ne("div",xC,[e[7]||(e[7]=A("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"}),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"currentColor","stroke-width":"2"}),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"currentColor","stroke-width":"2"})],-1)),$e(" "+Le(r.errorMessage),1)])):Xe("",!0)]),_:1}),ye(wn,{name:"error-slide"},{default:Be(()=>[r.successMessage?(te(),ne("div",VC,[e[8]||(e[8]=A("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M9 12l2 2 4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),A("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"})],-1)),$e(" "+Le(r.successMessage),1)])):Xe("",!0)]),_:1}),A("form",{onSubmit:e[6]||(e[6]=ng((...l)=>r.handleRegister&&r.handleRegister(...l),["prevent"])),class:"register-form"},[A("div",DC,[e[11]||(e[11]=A("label",{for:"name",class:"input-label"},[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),A("circle",{cx:"12",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"})]),$e(" Nombre completo ")],-1)),A("div",OC,[ss(A("input",{id:"name","onUpdate:modelValue":e[0]||(e[0]=l=>r.name=l),type:"text",placeholder:"Escribe tu nombre completo",class:vt(["input-field",{"input-valid":r.nameValidation.isValid&&r.name.length>0,"input-error":!r.nameValidation.isValid&&r.name.length>0}]),required:"",autocomplete:"name","aria-describedby":!r.nameValidation.isValid&&r.name.length>0?"name-error":null},null,10,NC),[[Ai,r.name]]),A("div",MC,[r.nameValidation.isValid&&r.name.length>0?(te(),ne("svg",LC,e[9]||(e[9]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.nameValidation.isValid&&r.name.length>0?(te(),ne("svg",FC,e[10]||(e[10]=[A("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):Xe("",!0)])]),ye(wn,{name:"field-error"},{default:Be(()=>[!r.nameValidation.isValid&&r.name.length>0?(te(),ne("div",UC,Le(r.nameValidation.message),1)):Xe("",!0)]),_:1})]),A("div",BC,[e[14]||(e[14]=A("label",{for:"email",class:"input-label"},[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),A("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),$e(" Correo electrónico ")],-1)),A("div",jC,[ss(A("input",{id:"email","onUpdate:modelValue":e[1]||(e[1]=l=>r.email=l),type:"email",placeholder:"ejemplo@correo.com",class:vt(["input-field",{"input-valid":r.emailValidation.isValid&&r.email.length>0,"input-error":!r.emailValidation.isValid&&r.email.length>0}]),required:"",autocomplete:"email","aria-describedby":!r.emailValidation.isValid&&r.email.length>0?"email-error":null},null,10,qC),[[Ai,r.email]]),A("div",$C,[r.emailValidation.isValid&&r.email.length>0?(te(),ne("svg",HC,e[12]||(e[12]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.emailValidation.isValid&&r.email.length>0?(te(),ne("svg",zC,e[13]||(e[13]=[A("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):Xe("",!0)])]),ye(wn,{name:"field-error"},{default:Be(()=>[!r.emailValidation.isValid&&r.email.length>0?(te(),ne("div",WC,Le(r.emailValidation.message),1)):Xe("",!0)]),_:1})]),A("div",KC,[e[19]||(e[19]=Ti('<label for="password" class="input-label" data-v-89f2994c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-89f2994c><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-89f2994c></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-89f2994c></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-89f2994c></path></svg> Contraseña </label>',1)),A("div",GC,[ss(A("input",{id:"password","onUpdate:modelValue":e[2]||(e[2]=l=>r.password=l),type:r.showPassword?"text":"password",placeholder:"Mínimo 6 caracteres",class:vt(["input-field",{"input-valid":r.passwordValidation.isValid&&r.password.length>0,"input-error":!r.passwordValidation.isValid&&r.password.length>0}]),required:"",autocomplete:"new-password","aria-describedby":!r.passwordValidation.isValid&&r.password.length>0?"password-error":null},null,10,QC),[[zl,r.password]]),A("div",YC,[r.passwordValidation.isValid&&r.password.length>0?(te(),ne("svg",JC,e[15]||(e[15]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.passwordValidation.isValid&&r.password.length>0?(te(),ne("svg",XC,e[16]||(e[16]=[A("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):Xe("",!0)]),A("button",{type:"button",onClick:e[3]||(e[3]=l=>r.showPassword=!r.showPassword),class:"password-toggle","aria-label":r.showPassword?"Ocultar contraseña":"Mostrar contraseña"},[r.showPassword?(te(),ne("svg",eP,e[17]||(e[17]=[A("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(te(),ne("svg",tP,e[18]||(e[18]=[A("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),A("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,ZC)]),ye(wn,{name:"field-error"},{default:Be(()=>[!r.passwordValidation.isValid&&r.password.length>0?(te(),ne("div",nP,Le(r.passwordValidation.message),1)):Xe("",!0)]),_:1})]),A("div",rP,[e[24]||(e[24]=Ti('<label for="confirmPassword" class="input-label" data-v-89f2994c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-89f2994c><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-89f2994c></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-89f2994c></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-89f2994c></path></svg> Confirmar contraseña </label>',1)),A("div",sP,[ss(A("input",{id:"confirmPassword","onUpdate:modelValue":e[4]||(e[4]=l=>r.confirmPassword=l),type:r.showConfirmPassword?"text":"password",placeholder:"Confirma tu contraseña",class:vt(["input-field",{"input-valid":r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0,"input-error":!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0}]),required:"",autocomplete:"new-password","aria-describedby":!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?"confirm-password-error":null},null,10,iP),[[zl,r.confirmPassword]]),A("div",oP,[r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(te(),ne("svg",aP,e[20]||(e[20]=[A("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(te(),ne("svg",lP,e[21]||(e[21]=[A("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),A("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):Xe("",!0)]),A("button",{type:"button",onClick:e[5]||(e[5]=l=>r.showConfirmPassword=!r.showConfirmPassword),class:"password-toggle","aria-label":r.showConfirmPassword?"Ocultar confirmar contraseña":"Mostrar confirmar contraseña"},[r.showConfirmPassword?(te(),ne("svg",uP,e[22]||(e[22]=[A("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(te(),ne("svg",hP,e[23]||(e[23]=[A("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),A("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,cP)]),ye(wn,{name:"field-error"},{default:Be(()=>[!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(te(),ne("div",dP,Le(r.confirmPasswordValidation.message),1)):Xe("",!0)]),_:1})]),A("button",{type:"submit",disabled:!r.isFormValid||r.isLoading,class:vt(["submit-button",{loading:r.isLoading}])},[A("div",pP,[r.isLoading?(te(),ne("svg",gP,e[25]||(e[25]=[A("path",{d:"M21 12a9 9 0 11-6.219-8.56",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)]))):(te(),ne("svg",mP,e[26]||(e[26]=[A("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("circle",{cx:"8.5",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"},null,-1),A("line",{x1:"20",y1:"8",x2:"20",y2:"14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A("line",{x1:"23",y1:"11",x2:"17",y2:"11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))),$e(" "+Le(r.isLoading?"Creando cuenta...":"Crear Cuenta"),1)])],10,fP)],32),e[29]||(e[29]=A("div",{class:"divider"},[A("span",{class:"divider-text"},"¿Ya tienes una cuenta?")],-1)),ye(o,{to:"/login",class:"login-link"},{default:Be(()=>e[27]||(e[27]=[A("div",{class:"login-content"},[A("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),$e(" Iniciar sesión ")],-1)])),_:1})],2)])}const vP=vr(PC,[["render",_P],["__scopeId","data-v-89f2994c"]]),yP={name:"ProfileView",setup(){const t=Ha();return Rs(()=>{const n=Et.currentUser;n&&!t.userData&&t.fetchUserData(n.uid)}),{userStore:t,formatDate:n=>n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}}},wP={class:"profile-container"},EP={key:0,class:"loading-container"},TP={key:1,class:"error-container"},IP={key:2,class:"profile-fields"},bP={class:"field-container sky"},AP={class:"field-value sky"},RP={class:"field-container emerald"},SP={class:"field-value emerald"},CP={class:"field-container amber"},PP={class:"field-value amber"},kP={class:"device-id"},xP={class:"field-container violet"},VP={class:"field-value violet"},DP={key:3,class:"no-data-container"},OP={class:"button-container"};function NP(t,e,n,r,s,i){const o=Sn("router-link");return te(),ne("div",wP,[e[9]||(e[9]=A("h1",{class:"profile-title"},"Mi Perfil",-1)),r.userStore.loading&&!r.userStore.userData?(te(),ne("div",EP,e[0]||(e[0]=[A("svg",{class:"loading-spinner",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[A("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),A("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),A("p",{class:"loading-text"},"Cargando perfil...",-1)]))):r.userStore.error?(te(),ne("div",TP,[e[1]||(e[1]=A("p",{class:"error-title"},"Error al cargar el perfil",-1)),A("p",null,Le(r.userStore.error),1)])):r.userStore.userData?(te(),ne("div",IP,[A("div",bP,[e[2]||(e[2]=A("label",{class:"field-label sky"},"Nombre",-1)),A("p",AP,Le(r.userStore.userData.nombre),1)]),A("div",RP,[e[3]||(e[3]=A("label",{class:"field-label emerald"},"Correo Electrónico",-1)),A("p",SP,Le(r.userStore.userData.email),1)]),A("div",CP,[e[4]||(e[4]=A("label",{class:"field-label amber"},"ID de Dispositivo",-1)),A("p",PP,[A("span",kP,Le(r.userStore.userData.dispositivoID),1)]),e[5]||(e[5]=A("p",{class:"device-id-hint"},"Usa esta ID en la aplicación móvil para sincronizar tu ubicación.",-1))]),A("div",xP,[e[6]||(e[6]=A("label",{class:"field-label violet"},"Fecha de Registro",-1)),A("p",VP,Le(r.formatDate(r.userStore.userData.fechaRegistro)),1)])])):(te(),ne("div",DP,e[7]||(e[7]=[A("p",{class:"no-data-text"},"No se pudieron cargar los datos del perfil. Asegúrate de haber iniciado sesión.",-1)]))),A("div",OP,[ye(o,{to:"/map",class:"back-to-map-button"},{default:Be(()=>e[8]||(e[8]=[A("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[A("path",{d:"M21 14.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-5c0-2.485 4.03-4.5 9-4.5s9 2.015 9 4.5v5z",stroke:"currentColor","stroke-width":"2"}),A("path",{d:"M21 9.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5",stroke:"currentColor","stroke-width":"2"})],-1),$e(" Volver al Mapa ")])),_:1})])])}const MP=vr(yP,[["render",NP],["__scopeId","data-v-0feddf99"]]),LP=[{path:"/",name:"Home",component:MS,meta:{requiresGuest:!0}},{path:"/map",name:"Map",component:sC,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:CC,meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:vP,meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:MP,meta:{requiresAuth:!0}}],L_=W1({history:E1(),routes:LP}),FP=()=>new Promise(t=>{const e=Yc(Et,n=>{e(),t(n)})});L_.beforeEach(async(t,e,n)=>{const r=await FP();if(t.meta.requiresAuth&&!r)return n("/login");if(t.meta.requiresGuest&&r)return n("/map");n()});const xu=Bw(CS);xu.use($w());xu.use(L_);xu.mount("#app");
