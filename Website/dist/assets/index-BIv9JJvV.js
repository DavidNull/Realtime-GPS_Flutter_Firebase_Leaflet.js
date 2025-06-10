(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},os=[],an=()=>{},lv=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Tc=t=>t.startsWith("onUpdate:"),lt=Object.assign,bc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cv=Object.prototype.hasOwnProperty,Oe=(t,e)=>cv.call(t,e),le=Array.isArray,as=t=>Ui(t)==="[object Map]",As=t=>Ui(t)==="[object Set]",bh=t=>Ui(t)==="[object Date]",_e=t=>typeof t=="function",rt=t=>typeof t=="string",dn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",qf=t=>(Be(t)||_e(t))&&_e(t.then)&&_e(t.catch),$f=Object.prototype.toString,Ui=t=>$f.call(t),uv=t=>Ui(t).slice(8,-1),Hf=t=>Ui(t)==="[object Object]",Ic=t=>rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hv=/-(\w)/g,Kt=_a(t=>t.replace(hv,(e,n)=>n?n.toUpperCase():"")),dv=/\B([A-Z])/g,$r=_a(t=>t.replace(dv,"-$1").toLowerCase()),va=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=_a(t=>t?`on${va(t)}`:""),er=(t,e)=>!Object.is(t,e),Co=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},zf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fv=t=>{const e=rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ih;const ya=()=>Ih||(Ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=rt(r)?_v(r):Ac(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(rt(t)||Be(t))return t}const pv=/;(?![^(]*\))/g,mv=/:([^]+)/,gv=/\/\*[^]*?\*\//g;function _v(t){const e={};return t.replace(gv,"").split(pv).forEach(n=>{if(n){const r=n.split(mv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function It(t){let e="";if(rt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=It(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yv=Ec(vv);function Wf(t){return!!t||t===""}function wv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nr(t[r],e[r]);return n}function Nr(t,e){if(t===e)return!0;let n=bh(t),r=bh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=dn(t),r=dn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?wv(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Nr(t[o],e[o]))return!1}}return String(t)===String(e)}function Rc(t,e){return t.findIndex(n=>Nr(n,e))}const Kf=t=>!!(t&&t.__v_isRef===!0),je=t=>rt(t)?t:t==null?"":le(t)||Be(t)&&(t.toString===$f||!_e(t.toString))?Kf(t)?je(t.value):JSON.stringify(t,Gf,2):String(t),Gf=(t,e)=>Kf(e)?Gf(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[cl(r,i)+" =>"]=s,n),{})}:As(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cl(n))}:dn(e)?cl(e):Be(e)&&!le(e)&&!Hf(e)?String(e):e,cl=(t,e="")=>{var n;return dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yf(t){return new Qf(t)}function Jf(){return xt}function Ev(t,e=!1){xt&&xt.cleanups.push(t)}let Ue;const ul=new WeakSet;class Xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ul.has(this)&&(ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),tp(this);const e=Ue,n=Yt;Ue=this,Yt=!0;try{return this.fn()}finally{np(this),Ue=e,Yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cc(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ol(this)&&this.run()}get dirty(){return Ol(this)}}let Zf=0,si,ii;function ep(t,e=!1){if(t.flags|=8,e){t.next=ii,ii=t;return}t.next=si,si=t}function Sc(){Zf++}function Pc(){if(--Zf>0)return;if(ii){let e=ii;for(ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;si;){let e=si;for(si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function tp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function np(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Cc(r),Tv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ol(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_i))return;t.globalVersion=_i;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ol(t)){t.flags&=-3;return}const n=Ue,r=Yt;Ue=t,Yt=!0;try{tp(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,Yt=r,np(t),t.flags&=-3}}function Cc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Cc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yt=!0;const sp=[];function pr(){sp.push(Yt),Yt=!1}function mr(){const t=sp.pop();Yt=t===void 0?!0:t}function Ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let _i=0;class bv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!Yt||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new bv(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,ip(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,_i++,this.notify(e)}notify(e){Sc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pc()}}}function ip(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ip(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ho=new WeakMap,xr=Symbol(""),Nl=Symbol(""),vi=Symbol("");function At(t,e,n){if(Yt&&Ue){let r=Ho.get(t);r||Ho.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new kc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Ho.get(t);if(!o){_i++;return}const l=c=>{c&&c.trigger()};if(Sc(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&Ic(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===vi||!dn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(xr)),as(t)&&l(o.get(Nl)));break;case"delete":c||(l(o.get(xr)),as(t)&&l(o.get(Nl)));break;case"set":as(t)&&l(o.get(xr));break}}Pc()}function Iv(t,e){const n=Ho.get(t);return n&&n.get(e)}function Jr(t){const e=ke(t);return e===t?e:(At(e,"iterate",vi),Jt(t)?e:e.map(Vt))}function xc(t){return At(t=ke(t),"iterate",vi),t}const Av={__proto__:null,[Symbol.iterator](){return hl(this,Symbol.iterator,Vt)},concat(...t){return Jr(this).concat(...t.map(e=>le(e)?Jr(e):e))},entries(){return hl(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return _n(this,"find",t,e,Vt,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return dl(this,"includes",t)},indexOf(...t){return dl(this,"indexOf",t)},join(t){return Jr(this).join(t)},lastIndexOf(...t){return dl(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Ws(this,"pop")},push(...t){return Ws(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return Ws(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Ws(this,"splice",t)},toReversed(){return Jr(this).toReversed()},toSorted(t){return Jr(this).toSorted(t)},toSpliced(...t){return Jr(this).toSpliced(...t)},unshift(...t){return Ws(this,"unshift",t)},values(){return hl(this,"values",Vt)}};function hl(t,e,n){const r=xc(t),s=r[e]();return r!==t&&!Jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Rv=Array.prototype;function _n(t,e,n,r,s,i){const o=xc(t),l=o!==t&&!Jt(t),c=o[e];if(c!==Rv[e]){const p=c.apply(t,i);return l?Vt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Vt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Rh(t,e,n,r){const s=xc(t);let i=n;return s!==t&&(Jt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Vt(l),c,t)}),s[e](i,...r)}function dl(t,e,n){const r=ke(t);At(r,"iterate",vi);const s=r[e](...n);return(s===-1||s===!1)&&Oc(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function Ws(t,e,n=[]){pr(),Sc();const r=ke(t)[e].apply(t,n);return Pc(),mr(),r}const Sv=Ec("__proto__,__v_isRef,__isVue"),op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn));function Pv(t){dn(t)||(t=String(t));const e=ke(this);return At(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Fv:hp:i?up:cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=Av[n]))return c;if(n==="hasOwnProperty")return Pv}const l=Reflect.get(e,n,et(e)?e:r);return(dn(n)?op.has(n):Sv(n))||(s||At(e,"get",n),i)?l:et(l)?o&&Ic(n)?l:l.value:Be(l)?s?fp(l):ji(l):l}}class lp extends ap{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Mr(i);if(!Jt(r)&&!Mr(r)&&(i=ke(i),r=ke(r)),!le(e)&&et(i)&&!et(r))return c?!1:(i.value=r,!0)}const o=le(e)&&Ic(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,et(e)?e:s);return e===ke(s)&&(o?er(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!dn(n)||!op.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",le(e)?"length":xr),Reflect.ownKeys(e)}}class Cv extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const kv=new lp,xv=new Cv,Vv=new lp(!0);const Ml=t=>t,yo=t=>Reflect.getPrototypeOf(t);function Dv(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=as(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Ml:e?Ll:Vt;return!e&&At(i,"iterate",c?Nl:xr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ov(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(er(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=yo(o),u=e?Ml:t?Ll:Vt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(ke(s),"iterate",xr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(er(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Ml:t?Ll:Vt;return!t&&At(c,"iterate",xr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return lt(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Jt(s)&&!Mr(s)&&(s=ke(s));const i=ke(this);return yo(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Jt(i)&&!Mr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=yo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?er(i,d)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=yo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Tn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Dv(s,t,e)}),n}function Vc(t,e){const n=Ov(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const Nv={get:Vc(!1,!1)},Mv={get:Vc(!1,!0)},Lv={get:Vc(!0,!1)};const cp=new WeakMap,up=new WeakMap,hp=new WeakMap,Fv=new WeakMap;function Uv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Uv(uv(t))}function ji(t){return Mr(t)?t:Dc(t,!1,kv,Nv,cp)}function dp(t){return Dc(t,!1,Vv,Mv,up)}function fp(t){return Dc(t,!0,xv,Lv,hp)}function Dc(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jv(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Vr(t){return Mr(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Mr(t){return!!(t&&t.__v_isReadonly)}function Jt(t){return!!(t&&t.__v_isShallow)}function Oc(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function Nc(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&zf(t,"__v_skip",!0),t}const Vt=t=>Be(t)?ji(t):t,Ll=t=>Be(t)?fp(t):t;function et(t){return t?t.__v_isRef===!0:!1}function Te(t){return pp(t,!1)}function Bv(t){return pp(t,!0)}function pp(t,e){return et(t)?t:new qv(t,e)}class qv{constructor(e,n){this.dep=new kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Jt(e)||Mr(e);e=r?e:ke(e),er(e,n)&&(this._rawValue=e,this._value=r?e:Vt(e),this.dep.trigger())}}function ls(t){return et(t)?t.value:t}const $v={get:(t,e,n)=>e==="__v_raw"?t:ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return et(s)&&!et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function mp(t){return Vr(t)?t:new Proxy(t,$v)}function Hv(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Wv(t,n);return e}class zv{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Iv(ke(this._object),this._key)}}function Wv(t,e,n){const r=t[e];return et(r)?r:new zv(t,e,n)}class Kv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_i-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return ep(this,!0),!0}get value(){const e=this.dep.track();return rp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Gv(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new Kv(r,s,n)}const Eo={},zo=new WeakMap;let Sr;function Qv(t,e=!1,n=Sr){if(n){let r=zo.get(n);r||zo.set(n,r=[]),r.push(t)}}function Yv(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=B=>s?B:Jt(B)||s===!1||s===0?bn(B,1):bn(B);let d,p,m,g,P=!1,k=!1;if(et(t)?(p=()=>t.value,P=Jt(t)):Vr(t)?(p=()=>u(t),P=!0):le(t)?(k=!0,P=t.some(B=>Vr(B)||Jt(B)),p=()=>t.map(B=>{if(et(B))return B.value;if(Vr(B))return u(B);if(_e(B))return c?c(B,2):B()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){pr();try{m()}finally{mr()}}const B=Sr;Sr=d;try{return c?c(t,3,[g]):t(g)}finally{Sr=B}}:p=an,e&&s){const B=p,Z=s===!0?1/0:s;p=()=>bn(B(),Z)}const V=Jf(),U=()=>{d.stop(),V&&V.active&&bc(V.effects,d)};if(i&&e){const B=e;e=(...Z)=>{B(...Z),U()}}let j=k?new Array(t.length).fill(Eo):Eo;const F=B=>{if(!(!(d.flags&1)||!d.dirty&&!B))if(e){const Z=d.run();if(s||P||(k?Z.some((te,R)=>er(te,j[R])):er(Z,j))){m&&m();const te=Sr;Sr=d;try{const R=[Z,j===Eo?void 0:k&&j[0]===Eo?[]:j,g];c?c(e,3,R):e(...R),j=Z}finally{Sr=te}}}else d.run()};return l&&l(F),d=new Xf(p),d.scheduler=o?()=>o(F,!1):F,g=B=>Qv(B,!1,d),m=d.onStop=()=>{const B=zo.get(d);if(B){if(c)c(B,4);else for(const Z of B)Z();zo.delete(d)}},e?r?F(!0):j=d.run():o?o(F.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function bn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,et(t))bn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(As(t)||as(t))t.forEach(r=>{bn(r,e,n)});else if(Hf(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bi(t,e,n,r){try{return r?t(...r):t()}catch(s){wa(s,e,n)}}function Zt(t,e,n,r){if(_e(t)){const s=Bi(t,e,n,r);return s&&qf(s)&&s.catch(i=>{wa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function wa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){pr(),Bi(i,null,10,[t,c,u]),mr();return}}Jv(t,n,s,r,o)}function Jv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let rn=-1;const cs=[];let zn=null,Zr=0;const gp=Promise.resolve();let Wo=null;function Ea(t){const e=Wo||gp;return t?e.then(this?t.bind(this):t):e}function Xv(t){let e=rn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Mc(t){if(!(t.flags&1)){const e=yi(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=yi(n)?Dt.push(t):Dt.splice(Xv(e),0,t),t.flags|=1,_p()}}function _p(){Wo||(Wo=gp.then(yp))}function Zv(t){le(t)?cs.push(...t):zn&&t.id===-1?zn.splice(Zr+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),_p()}function Sh(t,e,n=rn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vp(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>yi(n)-yi(r));if(cs.length=0,zn){zn.push(...e);return}for(zn=e,Zr=0;Zr<zn.length;Zr++){const n=zn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,Zr=0}}const yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function yp(t){try{for(rn=0;rn<Dt.length;rn++){const e=Dt[rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rn<Dt.length;rn++){const e=Dt[rn];e&&(e.flags&=-2)}rn=-1,Dt.length=0,vp(),Wo=null,(Dt.length||cs.length)&&yp()}}let Ot=null,wp=null;function Ko(t){const e=Ot;return Ot=t,wp=t&&t.type.__scopeId||null,e}function He(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fh(-1);const i=Ko(e);let o;try{o=t(...s)}finally{Ko(i),r._d&&Fh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ss(t,e){if(Ot===null)return t;const n=Ra(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(pr(),Zt(c,n,8,[t.el,l,t,e]),mr())}}const ey=Symbol("_vte"),Ep=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),To=Symbol("_enterCb");function ty(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rs(()=>{t.isMounted=!0}),kp(()=>{t.isUnmounting=!0}),t}const Ht=[Function,Array],Tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ht,onEnter:Ht,onAfterEnter:Ht,onEnterCancelled:Ht,onBeforeLeave:Ht,onLeave:Ht,onAfterLeave:Ht,onLeaveCancelled:Ht,onBeforeAppear:Ht,onAppear:Ht,onAfterAppear:Ht,onAppearCancelled:Ht},bp=t=>{const e=t.subTree;return e.component?bp(e.component):e},ny={name:"BaseTransition",props:Tp,setup(t,{slots:e}){const n=ew(),r=ty();return()=>{const s=e.default&&Rp(e.default(),!0);if(!s||!s.length)return;const i=Ip(s),o=ke(t),{mode:l}=o;if(r.isLeaving)return fl(i);const c=Ph(i);if(!c)return fl(i);let u=Fl(c,o,r,n,p=>u=p);c.type!==Nt&&wi(c,u);let d=n.subTree&&Ph(n.subTree);if(d&&d.type!==Nt&&!Cr(c,d)&&bp(n).type!==Nt){let p=Fl(d,o,r,n);if(wi(d,p),l==="out-in"&&c.type!==Nt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},fl(i);l==="in-out"&&c.type!==Nt?p.delayLeave=(m,g,P)=>{const k=Ap(r,d);k[String(d.key)]=d,m[Wn]=()=>{g(),m[Wn]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Ip(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nt){e=n;break}}return e}const ry=ny;function Ap(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fl(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:V,onAppear:U,onAfterAppear:j,onAppearCancelled:F}=e,B=String(t.key),Z=Ap(n,t),te=(y,A)=>{y&&Zt(y,r,9,A)},R=(y,A)=>{const T=A[1];te(y,A),le(y)?y.every(w=>w.length<=1)&&T():y.length<=1&&T()},v={mode:o,persisted:l,beforeEnter(y){let A=c;if(!n.isMounted)if(i)A=V||c;else return;y[Wn]&&y[Wn](!0);const T=Z[B];T&&Cr(t,T)&&T.el[Wn]&&T.el[Wn](),te(A,[y])},enter(y){let A=u,T=d,w=p;if(!n.isMounted)if(i)A=U||u,T=j||d,w=F||p;else return;let E=!1;const J=y[To]=Ie=>{E||(E=!0,Ie?te(w,[y]):te(T,[y]),v.delayedLeave&&v.delayedLeave(),y[To]=void 0)};A?R(A,[y,J]):J()},leave(y,A){const T=String(t.key);if(y[To]&&y[To](!0),n.isUnmounting)return A();te(m,[y]);let w=!1;const E=y[Wn]=J=>{w||(w=!0,A(),J?te(k,[y]):te(P,[y]),y[Wn]=void 0,Z[T]===t&&delete Z[T])};Z[T]=t,g?R(g,[y,E]):E()},clone(y){const A=Fl(y,e,n,r,s);return s&&s(A),A}};return v}function fl(t){if(Ta(t))return t=cr(t),t.children=null,t}function Ph(t){if(!Ta(t))return Ep(t.type)&&t.children?Ip(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&_e(n.default))return n.default()}}function wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ut?(o.patchFlag&128&&s++,r=r.concat(Rp(o.children,e,l))):(e||o.type!==Nt)&&r.push(l!=null?cr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Sp(t,e){return _e(t)?lt({name:t.name},e,{setup:t}):t}function Pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Go(t,e,n,r,s=!1){if(le(t)){t.forEach((P,k)=>Go(P,e&&(le(e)?e[k]:e),n,r,s));return}if(oi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Go(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ra(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=ke(p),g=p===Fe?()=>!1:P=>Oe(m,P);if(u!=null&&u!==c&&(rt(u)?(d[u]=null,g(u)&&(p[u]=null)):et(u)&&(u.value=null)),_e(c))Bi(c,l,12,[o,d]);else{const P=rt(c),k=et(c);if(P||k){const V=()=>{if(t.f){const U=P?g(c)?p[c]:d[c]:c.value;s?le(U)&&bc(U,i):le(U)?U.includes(i)||U.push(i):P?(d[c]=[i],g(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,g(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(d[t.k]=o))};o?(V.id=-1,Ft(V,n)):V()}}}ya().requestIdleCallback;ya().cancelIdleCallback;const oi=t=>!!t.type.__asyncLoader,Ta=t=>t.type.__isKeepAlive;function sy(t,e){Cp(t,"a",e)}function iy(t,e){Cp(t,"da",e)}function Cp(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ta(s.parent.vnode)&&oy(r,e,n,s),s=s.parent}}function oy(t,e,n,r){const s=ba(e,t,r,!0);qi(()=>{bc(r[e],s)},n)}function ba(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{pr();const l=$i(n),c=Zt(e,n,t,o);return l(),mr(),c});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=at)=>{(!bi||t==="sp")&&ba(t,(...r)=>e(...r),n)},ay=Nn("bm"),Rs=Nn("m"),ly=Nn("bu"),cy=Nn("u"),kp=Nn("bum"),qi=Nn("um"),uy=Nn("sp"),hy=Nn("rtg"),dy=Nn("rtc");function fy(t,e=at){ba("ec",t,e)}const py="components";function Pn(t,e){return gy(py,t,!0,e)||t}const my=Symbol.for("v-ndc");function gy(t,e,n=!0,r=!1){const s=Ot||at;if(s){const i=s.type;{const l=iw(i,!1);if(l&&(l===e||l===Kt(e)||l===va(Kt(e))))return i}const o=Ch(s[t]||i[t],e)||Ch(s.appContext[t],e);return!o&&r?i:o}}function Ch(t,e){return t&&(t[e]||t[Kt(e)]||t[va(Kt(e))])}const Ul=t=>t?Jp(t)?Ra(t):Ul(t.parent):null,ai=lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ul(t.parent),$root:t=>Ul(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vp(t),$forceUpdate:t=>t.f||(t.f=()=>{Mc(t.update)}),$nextTick:t=>t.n||(t.n=Ea.bind(t.proxy)),$watch:t=>Fy.bind(t)}),pl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),_y={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pl(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];jl&&(o[e]=0)}}const d=ai[e];let p,m;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pl(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&Oe(t,o)||pl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(ai,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let jl=!0;function vy(t){const e=Vp(t),n=t.proxy,r=t.ctx;jl=!1,e.beforeCreate&&xh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:P,activated:k,deactivated:V,beforeDestroy:U,beforeUnmount:j,destroyed:F,unmounted:B,render:Z,renderTracked:te,renderTriggered:R,errorCaptured:v,serverPrefetch:y,expose:A,inheritAttrs:T,components:w,directives:E,filters:J}=e;if(u&&yy(u,r,null),o)for(const ie in o){const me=o[ie];_e(me)&&(r[ie]=me.bind(n))}if(s){const ie=s.call(n,n);Be(ie)&&(t.data=ji(ie))}if(jl=!0,i)for(const ie in i){const me=i[ie],Ye=_e(me)?me.bind(n,n):_e(me.get)?me.get.bind(n,n):an,gt=!_e(me)&&_e(me.set)?me.set.bind(n):an,_t=Qe({get:Ye,set:gt});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Ne=>_t.value=Ne})}if(l)for(const ie in l)xp(l[ie],r,n,ie);if(c){const ie=_e(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(me=>{ko(me,ie[me])})}d&&xh(d,t,"c");function we(ie,me){le(me)?me.forEach(Ye=>ie(Ye.bind(n))):me&&ie(me.bind(n))}if(we(ay,p),we(Rs,m),we(ly,g),we(cy,P),we(sy,k),we(iy,V),we(fy,v),we(dy,te),we(hy,R),we(kp,j),we(qi,B),we(uy,y),le(A))if(A.length){const ie=t.exposed||(t.exposed={});A.forEach(me=>{Object.defineProperty(ie,me,{get:()=>n[me],set:Ye=>n[me]=Ye})})}else t.exposed||(t.exposed={});Z&&t.render===an&&(t.render=Z),T!=null&&(t.inheritAttrs=T),w&&(t.components=w),E&&(t.directives=E),y&&Pp(t)}function yy(t,e,n=an){le(t)&&(t=Bl(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=Xt(s.from||r,s.default,!0):i=Xt(s.from||r):i=Xt(s),et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xh(t,e,n){Zt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xp(t,e,n,r){let s=r.includes(".")?Wp(n,r):()=>n[r];if(rt(t)){const i=e[t];_e(i)&&tr(s,i)}else if(_e(t))tr(s,t.bind(n));else if(Be(t))if(le(t))t.forEach(i=>xp(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&tr(s,i,t)}}function Vp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qo(c,u,o,!0)),Qo(c,e,o)),Be(e)&&i.set(e,c),c}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=wy[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const wy={data:Vh,props:Dh,emits:Dh,methods:Ys,computed:Ys,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ys,directives:Ys,watch:Ty,provide:Vh,inject:Ey};function Vh(t,e){return e?t?function(){return lt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Ey(t,e){return Ys(Bl(t),Bl(e))}function Bl(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?lt(Object.create(null),t,e):e}function Dh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:lt(Object.create(null),kh(t),kh(e??{})):e}function Ty(t,e){if(!t)return e;if(!e)return t;const n=lt(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Dp(){return{app:null,config:{isNativeTag:lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let by=0;function Iy(t,e){return function(r,s=null){_e(r)||(r=lt({},r)),s!=null&&!Be(s)&&(s=null);const i=Dp(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:by++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aw,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...p)):_e(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const g=u._ceVNode||be(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,Ra(g.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Zt(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Dr;Dr=u;try{return d()}finally{Dr=p}}};return u}}let Dr=null;function ko(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Xt(t,e,n=!1){const r=at||Ot;if(r||Dr){const s=Dr?Dr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}function Ay(){return!!(at||Ot||Dr)}const Op={},Np=()=>Object.create(Op),Mp=t=>Object.getPrototypeOf(t)===Op;function Ry(t,e,n,r=!1){const s={},i=Np();t.propsDefaults=Object.create(null),Lp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Sy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ia(t.emitsOptions,m))continue;const g=e[m];if(c)if(Oe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const P=Kt(m);s[P]=ql(c,l,P,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{Lp(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=$r(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ql(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&Tn(t.attrs,"set","")}function Lp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ri(c))continue;const u=e[c];let d;s&&Oe(s,d=Kt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ia(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ql(s,c,p,u[p],t,!Oe(u,p))}}return o}function ql(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=$i(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===$r(n))&&(r=!0))}return r}const Py=new WeakMap;function Fp(t,e,n=!1){const r=n?Py:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=p=>{c=!0;const[m,g]=Fp(p,e,!0);lt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Be(t)&&r.set(t,os),os;if(le(i))for(let d=0;d<i.length;d++){const p=Kt(i[d]);Oh(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=Kt(d);if(Oh(p)){const m=i[d],g=o[p]=le(m)||_e(m)?{type:m}:lt({},m),P=g.type;let k=!1,V=!0;if(le(P))for(let U=0;U<P.length;++U){const j=P[U],F=_e(j)&&j.name;if(F==="Boolean"){k=!0;break}else F==="String"&&(V=!1)}else k=_e(P)&&P.name==="Boolean";g[0]=k,g[1]=V,(k||Oe(g,"default"))&&l.push(p)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function Oh(t){return t[0]!=="$"&&!ri(t)}const Up=t=>t[0]==="_"||t==="$stable",Lc=t=>le(t)?t.map(sn):[sn(t)],Cy=(t,e,n)=>{if(e._n)return e;const r=He((...s)=>Lc(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Up(s))continue;const i=t[s];if(_e(i))e[s]=Cy(s,i,r);else if(i!=null){const o=Lc(i);e[s]=()=>o}}},Bp=(t,e)=>{const n=Lc(e);t.slots.default=()=>n},qp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ky=(t,e,n)=>{const r=t.slots=Np();if(t.vnode.shapeFlag&32){const s=e._;s?(qp(r,e,n),n&&zf(r,"_",s,!0)):jp(e,r)}else e&&Bp(t,e)},xy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:qp(s,e,n):(i=!e.$stable,jp(e,s)),o=e}else e&&(Bp(t,e),o={default:1});if(i)for(const l in s)!Up(l)&&o[l]==null&&delete s[l]},Ft=zy;function Vy(t){return Dy(t)}function Dy(t,e){const n=ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=an,insertStaticContent:P}=t,k=(I,b,C,N=null,M=null,L=null,Y=void 0,G=null,K=!!b.dynamicChildren)=>{if(I===b)return;I&&!Cr(I,b)&&(N=O(I),Ne(I,M,L,!0),I=null),b.patchFlag===-2&&(K=!1,b.dynamicChildren=null);const{type:H,ref:ce,shapeFlag:X}=b;switch(H){case Aa:V(I,b,C,N);break;case Nt:U(I,b,C,N);break;case xo:I==null&&j(b,C,N,Y);break;case Ut:w(I,b,C,N,M,L,Y,G,K);break;default:X&1?Z(I,b,C,N,M,L,Y,G,K):X&6?E(I,b,C,N,M,L,Y,G,K):(X&64||X&128)&&H.process(I,b,C,N,M,L,Y,G,K,ee)}ce!=null&&M&&Go(ce,I&&I.ref,L,b||I,!b)},V=(I,b,C,N)=>{if(I==null)r(b.el=l(b.children),C,N);else{const M=b.el=I.el;b.children!==I.children&&u(M,b.children)}},U=(I,b,C,N)=>{I==null?r(b.el=c(b.children||""),C,N):b.el=I.el},j=(I,b,C,N)=>{[I.el,I.anchor]=P(I.children,b,C,N,I.el,I.anchor)},F=({el:I,anchor:b},C,N)=>{let M;for(;I&&I!==b;)M=m(I),r(I,C,N),I=M;r(b,C,N)},B=({el:I,anchor:b})=>{let C;for(;I&&I!==b;)C=m(I),s(I),I=C;s(b)},Z=(I,b,C,N,M,L,Y,G,K)=>{b.type==="svg"?Y="svg":b.type==="math"&&(Y="mathml"),I==null?te(b,C,N,M,L,Y,G,K):y(I,b,M,L,Y,G,K)},te=(I,b,C,N,M,L,Y,G)=>{let K,H;const{props:ce,shapeFlag:X,transition:oe,dirs:de}=I;if(K=I.el=o(I.type,L,ce&&ce.is,ce),X&8?d(K,I.children):X&16&&v(I.children,K,null,N,M,ml(I,L),Y,G),de&&br(I,null,N,"created"),R(K,I,I.scopeId,Y,N),ce){for(const ye in ce)ye!=="value"&&!ri(ye)&&i(K,ye,null,ce[ye],L,N);"value"in ce&&i(K,"value",null,ce.value,L),(H=ce.onVnodeBeforeMount)&&nn(H,N,I)}de&&br(I,null,N,"beforeMount");const ue=Oy(M,oe);ue&&oe.beforeEnter(K),r(K,b,C),((H=ce&&ce.onVnodeMounted)||ue||de)&&Ft(()=>{H&&nn(H,N,I),ue&&oe.enter(K),de&&br(I,null,N,"mounted")},M)},R=(I,b,C,N,M)=>{if(C&&g(I,C),N)for(let L=0;L<N.length;L++)g(I,N[L]);if(M){let L=M.subTree;if(b===L||Gp(L.type)&&(L.ssContent===b||L.ssFallback===b)){const Y=M.vnode;R(I,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},v=(I,b,C,N,M,L,Y,G,K=0)=>{for(let H=K;H<I.length;H++){const ce=I[H]=G?Kn(I[H]):sn(I[H]);k(null,ce,b,C,N,M,L,Y,G)}},y=(I,b,C,N,M,L,Y)=>{const G=b.el=I.el;let{patchFlag:K,dynamicChildren:H,dirs:ce}=b;K|=I.patchFlag&16;const X=I.props||Fe,oe=b.props||Fe;let de;if(C&&Ir(C,!1),(de=oe.onVnodeBeforeUpdate)&&nn(de,C,b,I),ce&&br(b,I,C,"beforeUpdate"),C&&Ir(C,!0),(X.innerHTML&&oe.innerHTML==null||X.textContent&&oe.textContent==null)&&d(G,""),H?A(I.dynamicChildren,H,G,C,N,ml(b,M),L):Y||me(I,b,G,null,C,N,ml(b,M),L,!1),K>0){if(K&16)T(G,X,oe,C,M);else if(K&2&&X.class!==oe.class&&i(G,"class",null,oe.class,M),K&4&&i(G,"style",X.style,oe.style,M),K&8){const ue=b.dynamicProps;for(let ye=0;ye<ue.length;ye++){const Pe=ue[ye],vt=X[Pe],ct=oe[Pe];(ct!==vt||Pe==="value")&&i(G,Pe,vt,ct,M,C)}}K&1&&I.children!==b.children&&d(G,b.children)}else!Y&&H==null&&T(G,X,oe,C,M);((de=oe.onVnodeUpdated)||ce)&&Ft(()=>{de&&nn(de,C,b,I),ce&&br(b,I,C,"updated")},N)},A=(I,b,C,N,M,L,Y)=>{for(let G=0;G<b.length;G++){const K=I[G],H=b[G],ce=K.el&&(K.type===Ut||!Cr(K,H)||K.shapeFlag&70)?p(K.el):C;k(K,H,ce,null,N,M,L,Y,!0)}},T=(I,b,C,N,M)=>{if(b!==C){if(b!==Fe)for(const L in b)!ri(L)&&!(L in C)&&i(I,L,b[L],null,M,N);for(const L in C){if(ri(L))continue;const Y=C[L],G=b[L];Y!==G&&L!=="value"&&i(I,L,G,Y,M,N)}"value"in C&&i(I,"value",b.value,C.value,M)}},w=(I,b,C,N,M,L,Y,G,K)=>{const H=b.el=I?I.el:l(""),ce=b.anchor=I?I.anchor:l("");let{patchFlag:X,dynamicChildren:oe,slotScopeIds:de}=b;de&&(G=G?G.concat(de):de),I==null?(r(H,C,N),r(ce,C,N),v(b.children||[],C,ce,M,L,Y,G,K)):X>0&&X&64&&oe&&I.dynamicChildren?(A(I.dynamicChildren,oe,C,M,L,Y,G),(b.key!=null||M&&b===M.subTree)&&$p(I,b,!0)):me(I,b,C,ce,M,L,Y,G,K)},E=(I,b,C,N,M,L,Y,G,K)=>{b.slotScopeIds=G,I==null?b.shapeFlag&512?M.ctx.activate(b,C,N,Y,K):J(b,C,N,M,L,Y,K):Ie(I,b,K)},J=(I,b,C,N,M,L,Y)=>{const G=I.component=Zy(I,N,M);if(Ta(I)&&(G.ctx.renderer=ee),tw(G,!1,Y),G.asyncDep){if(M&&M.registerDep(G,we,Y),!I.el){const K=G.subTree=be(Nt);U(null,K,b,C)}}else we(G,I,b,C,M,L,Y)},Ie=(I,b,C)=>{const N=b.component=I.component;if($y(I,b,C))if(N.asyncDep&&!N.asyncResolved){ie(N,b,C);return}else N.next=b,N.update();else b.el=I.el,N.vnode=b},we=(I,b,C,N,M,L,Y)=>{const G=()=>{if(I.isMounted){let{next:X,bu:oe,u:de,parent:ue,vnode:ye}=I;{const yt=Hp(I);if(yt){X&&(X.el=ye.el,ie(I,X,Y)),yt.asyncDep.then(()=>{I.isUnmounted||G()});return}}let Pe=X,vt;Ir(I,!1),X?(X.el=ye.el,ie(I,X,Y)):X=ye,oe&&Co(oe),(vt=X.props&&X.props.onVnodeBeforeUpdate)&&nn(vt,ue,X,ye),Ir(I,!0);const ct=Mh(I),qt=I.subTree;I.subTree=ct,k(qt,ct,p(qt.el),O(qt),I,M,L),X.el=ct.el,Pe===null&&Hy(I,ct.el),de&&Ft(de,M),(vt=X.props&&X.props.onVnodeUpdated)&&Ft(()=>nn(vt,ue,X,ye),M)}else{let X;const{el:oe,props:de}=b,{bm:ue,m:ye,parent:Pe,root:vt,type:ct}=I,qt=oi(b);Ir(I,!1),ue&&Co(ue),!qt&&(X=de&&de.onVnodeBeforeMount)&&nn(X,Pe,b),Ir(I,!0);{vt.ce&&vt.ce._injectChildStyle(ct);const yt=I.subTree=Mh(I);k(null,yt,C,N,I,M,L),b.el=yt.el}if(ye&&Ft(ye,M),!qt&&(X=de&&de.onVnodeMounted)){const yt=b;Ft(()=>nn(X,Pe,yt),M)}(b.shapeFlag&256||Pe&&oi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&I.a&&Ft(I.a,M),I.isMounted=!0,b=C=N=null}};I.scope.on();const K=I.effect=new Xf(G);I.scope.off();const H=I.update=K.run.bind(K),ce=I.job=K.runIfDirty.bind(K);ce.i=I,ce.id=I.uid,K.scheduler=()=>Mc(ce),Ir(I,!0),H()},ie=(I,b,C)=>{b.component=I;const N=I.vnode.props;I.vnode=b,I.next=null,Sy(I,b.props,N,C),xy(I,b.children,C),pr(),Sh(I),mr()},me=(I,b,C,N,M,L,Y,G,K=!1)=>{const H=I&&I.children,ce=I?I.shapeFlag:0,X=b.children,{patchFlag:oe,shapeFlag:de}=b;if(oe>0){if(oe&128){gt(H,X,C,N,M,L,Y,G,K);return}else if(oe&256){Ye(H,X,C,N,M,L,Y,G,K);return}}de&8?(ce&16&&qe(H,M,L),X!==H&&d(C,X)):ce&16?de&16?gt(H,X,C,N,M,L,Y,G,K):qe(H,M,L,!0):(ce&8&&d(C,""),de&16&&v(X,C,N,M,L,Y,G,K))},Ye=(I,b,C,N,M,L,Y,G,K)=>{I=I||os,b=b||os;const H=I.length,ce=b.length,X=Math.min(H,ce);let oe;for(oe=0;oe<X;oe++){const de=b[oe]=K?Kn(b[oe]):sn(b[oe]);k(I[oe],de,C,null,M,L,Y,G,K)}H>ce?qe(I,M,L,!0,!1,X):v(b,C,N,M,L,Y,G,K,X)},gt=(I,b,C,N,M,L,Y,G,K)=>{let H=0;const ce=b.length;let X=I.length-1,oe=ce-1;for(;H<=X&&H<=oe;){const de=I[H],ue=b[H]=K?Kn(b[H]):sn(b[H]);if(Cr(de,ue))k(de,ue,C,null,M,L,Y,G,K);else break;H++}for(;H<=X&&H<=oe;){const de=I[X],ue=b[oe]=K?Kn(b[oe]):sn(b[oe]);if(Cr(de,ue))k(de,ue,C,null,M,L,Y,G,K);else break;X--,oe--}if(H>X){if(H<=oe){const de=oe+1,ue=de<ce?b[de].el:N;for(;H<=oe;)k(null,b[H]=K?Kn(b[H]):sn(b[H]),C,ue,M,L,Y,G,K),H++}}else if(H>oe)for(;H<=X;)Ne(I[H],M,L,!0),H++;else{const de=H,ue=H,ye=new Map;for(H=ue;H<=oe;H++){const ut=b[H]=K?Kn(b[H]):sn(b[H]);ut.key!=null&&ye.set(ut.key,H)}let Pe,vt=0;const ct=oe-ue+1;let qt=!1,yt=0;const Ln=new Array(ct);for(H=0;H<ct;H++)Ln[H]=0;for(H=de;H<=X;H++){const ut=I[H];if(vt>=ct){Ne(ut,M,L,!0);continue}let $t;if(ut.key!=null)$t=ye.get(ut.key);else for(Pe=ue;Pe<=oe;Pe++)if(Ln[Pe-ue]===0&&Cr(ut,b[Pe])){$t=Pe;break}$t===void 0?Ne(ut,M,L,!0):(Ln[$t-ue]=H+1,$t>=yt?yt=$t:qt=!0,k(ut,b[$t],C,null,M,L,Y,G,K),vt++)}const Ds=qt?Ny(Ln):os;for(Pe=Ds.length-1,H=ct-1;H>=0;H--){const ut=ue+H,$t=b[ut],no=ut+1<ce?b[ut+1].el:N;Ln[H]===0?k(null,$t,C,no,M,L,Y,G,K):qt&&(Pe<0||H!==Ds[Pe]?_t($t,C,no,2):Pe--)}}},_t=(I,b,C,N,M=null)=>{const{el:L,type:Y,transition:G,children:K,shapeFlag:H}=I;if(H&6){_t(I.component.subTree,b,C,N);return}if(H&128){I.suspense.move(b,C,N);return}if(H&64){Y.move(I,b,C,ee);return}if(Y===Ut){r(L,b,C);for(let X=0;X<K.length;X++)_t(K[X],b,C,N);r(I.anchor,b,C);return}if(Y===xo){F(I,b,C);return}if(N!==2&&H&1&&G)if(N===0)G.beforeEnter(L),r(L,b,C),Ft(()=>G.enter(L),M);else{const{leave:X,delayLeave:oe,afterLeave:de}=G,ue=()=>r(L,b,C),ye=()=>{X(L,()=>{ue(),de&&de()})};oe?oe(L,ue,ye):ye()}else r(L,b,C)},Ne=(I,b,C,N=!1,M=!1)=>{const{type:L,props:Y,ref:G,children:K,dynamicChildren:H,shapeFlag:ce,patchFlag:X,dirs:oe,cacheIndex:de}=I;if(X===-2&&(M=!1),G!=null&&Go(G,null,C,I,!0),de!=null&&(b.renderCache[de]=void 0),ce&256){b.ctx.deactivate(I);return}const ue=ce&1&&oe,ye=!oi(I);let Pe;if(ye&&(Pe=Y&&Y.onVnodeBeforeUnmount)&&nn(Pe,b,I),ce&6)Xe(I.component,C,N);else{if(ce&128){I.suspense.unmount(C,N);return}ue&&br(I,null,b,"beforeUnmount"),ce&64?I.type.remove(I,b,C,ee,N):H&&!H.hasOnce&&(L!==Ut||X>0&&X&64)?qe(H,b,C,!1,!0):(L===Ut&&X&384||!M&&ce&16)&&qe(K,b,C),N&&Se(I)}(ye&&(Pe=Y&&Y.onVnodeUnmounted)||ue)&&Ft(()=>{Pe&&nn(Pe,b,I),ue&&br(I,null,b,"unmounted")},C)},Se=I=>{const{type:b,el:C,anchor:N,transition:M}=I;if(b===Ut){Je(C,N);return}if(b===xo){B(I);return}const L=()=>{s(C),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(I.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:G}=M,K=()=>Y(C,L);G?G(I.el,L,K):K()}else L()},Je=(I,b)=>{let C;for(;I!==b;)C=m(I),s(I),I=C;s(b)},Xe=(I,b,C)=>{const{bum:N,scope:M,job:L,subTree:Y,um:G,m:K,a:H}=I;Nh(K),Nh(H),N&&Co(N),M.stop(),L&&(L.flags|=8,Ne(Y,I,b,C)),G&&Ft(G,b),Ft(()=>{I.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},qe=(I,b,C,N=!1,M=!1,L=0)=>{for(let Y=L;Y<I.length;Y++)Ne(I[Y],b,C,N,M)},O=I=>{if(I.shapeFlag&6)return O(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const b=m(I.anchor||I.el),C=b&&b[ey];return C?m(C):b};let z=!1;const W=(I,b,C)=>{I==null?b._vnode&&Ne(b._vnode,null,null,!0):k(b._vnode||null,I,b,null,null,null,C),b._vnode=I,z||(z=!0,Sh(),vp(),z=!1)},ee={p:k,um:Ne,m:_t,r:Se,mt:J,mc:v,pc:me,pbc:A,n:O,o:t};return{render:W,hydrate:void 0,createApp:Iy(W)}}function ml({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ir({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Oy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $p(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&$p(o,l)),l.type===Aa&&(l.el=o.el)}}function Ny(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Hp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hp(e)}function Nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const My=Symbol.for("v-scx"),Ly=()=>Xt(My);function tr(t,e,n){return zp(t,e,n)}function zp(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=lt({},n),c=e&&r||!e&&i!=="post";let u;if(bi){if(i==="sync"){const g=Ly();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=an,g.resume=an,g.pause=an,g}}const d=at;l.call=(g,P,k)=>Zt(g,d,P,k);let p=!1;i==="post"?l.scheduler=g=>{Ft(g,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(g,P)=>{P?g():Mc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=Yv(t,e,l);return bi&&(u?u.push(m):c&&m()),m}function Fy(t,e,n){const r=this.proxy,s=rt(t)?t.includes(".")?Wp(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=$i(this),l=zp(s,i.bind(r),n);return o(),l}function Wp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Uy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${$r(e)}Modifiers`];function jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&Uy(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>rt(d)?d.trim():d)),o.number&&(s=n.map($o)));let l,c=r[l=ll(e)]||r[l=ll(Kt(e))];!c&&i&&(c=r[l=ll($r(e))]),c&&Zt(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Zt(u,t,6,s)}}function Kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=Kp(u,e,!0);d&&(l=!0,lt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):lt(o,i),Be(t)&&r.set(t,o),o)}function Ia(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,$r(e))||Oe(t,e))}function Mh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:g,ctx:P,inheritAttrs:k}=t,V=Ko(t);let U,j;try{if(n.shapeFlag&4){const B=s||r,Z=B;U=sn(u.call(Z,B,d,p,g,m,P)),j=l}else{const B=e;U=sn(B.length>1?B(p,{attrs:l,slots:o,emit:c}):B(p,null)),j=e.props?l:By(l)}}catch(B){li.length=0,wa(B,t,1),U=be(Nt)}let F=U;if(j&&k!==!1){const B=Object.keys(j),{shapeFlag:Z}=F;B.length&&Z&7&&(i&&B.some(Tc)&&(j=qy(j,i)),F=cr(F,j,!1,!0))}return n.dirs&&(F=cr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&wi(F,n.transition),U=F,Ko(V),U}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},qy=(t,e)=>{const n={};for(const r in t)(!Tc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $y(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Lh(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ia(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Lh(r,o,u):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ia(n,i))return!0}return!1}function Hy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Gp=t=>t.__isSuspense;function zy(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):Zv(t)}const Ut=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),li=[];let jt=null;function re(t=!1){li.push(jt=t?null:[])}function Wy(){li.pop(),jt=li[li.length-1]||null}let Ei=1;function Fh(t,e=!1){Ei+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function Qp(t){return t.dynamicChildren=Ei>0?jt||os:null,Wy(),Ei>0&&jt&&jt.push(t),t}function se(t,e,n,r,s,i){return Qp(S(t,e,n,r,s,i,!0))}function Ky(t,e,n,r,s){return Qp(be(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function Cr(t,e){return t.type===e.type&&t.key===e.key}const Yp=({key:t})=>t??null,Vo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?rt(t)||et(t)||_e(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,r=0,s=null,i=t===Ut?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yp(e),ref:e&&Vo(e),scopeId:wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return l?(Fc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=rt(n)?8:16),Ei>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const be=Gy;function Gy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===my)&&(t=Nt),Yo(t)){const l=cr(t,e,!0);return n&&Fc(l,n),Ei>0&&!i&&jt&&(l.shapeFlag&6?jt[jt.indexOf(t)]=l:jt.push(l)),l.patchFlag=-2,l}if(ow(t)&&(t=t.__vccOpts),e){e=Qy(e);let{class:l,style:c}=e;l&&!rt(l)&&(e.class=It(l)),Be(c)&&(Oc(c)&&!le(c)&&(c=lt({},c)),e.style=Ac(c))}const o=rt(t)?1:Gp(t)?128:Ep(t)?64:Be(t)?4:_e(t)?2:0;return S(t,e,n,r,s,o,i,!0)}function Qy(t){return t?Oc(t)||Mp(t)?lt({},t):t:null}function cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?Yy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Yp(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Vo(e)):[i,Vo(e)]:Vo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cr(t.ssContent),ssFallback:t.ssFallback&&cr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&wi(d,c.clone(d)),d}function ze(t=" ",e=0){return be(Aa,null,t,e)}function Ti(t,e){const n=be(xo,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(re(),Ky(Nt,null,t)):be(Nt,null,t)}function sn(t){return t==null||typeof t=="boolean"?be(Nt):le(t)?be(Ut,null,t.slice()):Yo(t)?Kn(t):be(Aa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cr(t)}function Fc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=It([e.class,r.class]));else if(s==="style")e.style=Ac([e.style,r.style]);else if(ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){Zt(t,e,7,[n,r])}const Jy=Dp();let Xy=0;function Zy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Jy,i={uid:Xy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fp(r,s),emitsOptions:Kp(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let at=null;const ew=()=>at||Ot;let Jo,$l;{const t=ya(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>at=n),$l=e("__VUE_SSR_SETTERS__",n=>bi=n)}const $i=t=>{const e=at;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Uh=()=>{at&&at.scope.off(),Jo(null)};function Jp(t){return t.vnode.shapeFlag&4}let bi=!1;function tw(t,e=!1,n=!1){e&&$l(e);const{props:r,children:s}=t.vnode,i=Jp(t);Ry(t,r,i,e),ky(t,s,n);const o=i?nw(t,e):void 0;return e&&$l(!1),o}function nw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_y);const{setup:r}=n;if(r){pr();const s=t.setupContext=r.length>1?sw(t):null,i=$i(t),o=Bi(r,t,0,[t.props,s]),l=qf(o);if(mr(),i(),(l||t.sp)&&!oi(t)&&Pp(t),l){if(o.then(Uh,Uh),e)return o.then(c=>{jh(t,c)}).catch(c=>{wa(c,t,0)});t.asyncDep=o}else jh(t,o)}else Xp(t)}function jh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=mp(e)),Xp(t)}function Xp(t,e,n){const r=t.type;t.render||(t.render=r.render||an);{const s=$i(t);pr();try{vy(t)}finally{mr(),s()}}}const rw={get(t,e){return At(t,"get",""),t[e]}};function sw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rw),slots:t.slots,emit:t.emit,expose:e}}function Ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(mp(Nc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ai)return ai[n](t)},has(e,n){return n in e||n in ai}})):t.proxy}function iw(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function ow(t){return _e(t)&&"__vccOpts"in t}const Qe=(t,e)=>Gv(t,e,bi);function Uc(t,e,n){const r=arguments.length;return r===2?Be(e)&&!le(e)?Yo(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),be(t,e,n))}const aw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hl;const Bh=typeof window<"u"&&window.trustedTypes;if(Bh)try{Hl=Bh.createPolicy("vue",{createHTML:t=>t})}catch{}const Zp=Hl?t=>Hl.createHTML(t):t=>t,lw="http://www.w3.org/2000/svg",cw="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,qh=wn&&wn.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(lw,t):e==="mathml"?wn.createElementNS(cw,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qh.innerHTML=Zp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=qh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bn="transition",Ks="animation",Ii=Symbol("_vtc"),em={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hw=lt({},Tp,em),dw=t=>(t.displayName="Transition",t.props=hw,t),En=dw((t,{slots:e})=>Uc(ry,fw(t),e)),Ar=(t,e=[])=>{le(t)?t.forEach(n=>n(...e)):t&&t(...e)},$h=t=>t?le(t)?t.some(e=>e.length>1):t.length>1:!1;function fw(t){const e={};for(const w in t)w in em||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,P=pw(s),k=P&&P[0],V=P&&P[1],{onBeforeEnter:U,onEnter:j,onEnterCancelled:F,onLeave:B,onLeaveCancelled:Z,onBeforeAppear:te=U,onAppear:R=j,onAppearCancelled:v=F}=e,y=(w,E,J,Ie)=>{w._enterCancelled=Ie,Rr(w,E?d:l),Rr(w,E?u:o),J&&J()},A=(w,E)=>{w._isLeaving=!1,Rr(w,p),Rr(w,g),Rr(w,m),E&&E()},T=w=>(E,J)=>{const Ie=w?R:j,we=()=>y(E,w,J);Ar(Ie,[E,we]),Hh(()=>{Rr(E,w?c:i),vn(E,w?d:l),$h(Ie)||zh(E,r,k,we)})};return lt(e,{onBeforeEnter(w){Ar(U,[w]),vn(w,i),vn(w,o)},onBeforeAppear(w){Ar(te,[w]),vn(w,c),vn(w,u)},onEnter:T(!1),onAppear:T(!0),onLeave(w,E){w._isLeaving=!0;const J=()=>A(w,E);vn(w,p),w._enterCancelled?(vn(w,m),Gh()):(Gh(),vn(w,m)),Hh(()=>{w._isLeaving&&(Rr(w,p),vn(w,g),$h(B)||zh(w,r,V,J))}),Ar(B,[w,J])},onEnterCancelled(w){y(w,!1,void 0,!0),Ar(F,[w])},onAppearCancelled(w){y(w,!0,void 0,!0),Ar(v,[w])},onLeaveCancelled(w){A(w),Ar(Z,[w])}})}function pw(t){if(t==null)return null;if(Be(t))return[gl(t.enter),gl(t.leave)];{const e=gl(t);return[e,e]}}function gl(t){return fv(t)}function vn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ii]||(t[Ii]=new Set)).add(e)}function Rr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ii];n&&(n.delete(e),n.size||(t[Ii]=void 0))}function Hh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mw=0;function zh(t,e,n,r){const s=t._endId=++mw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=gw(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function gw(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Bn}Delay`),i=r(`${Bn}Duration`),o=Wh(s,i),l=r(`${Ks}Delay`),c=r(`${Ks}Duration`),u=Wh(l,c);let d=null,p=0,m=0;e===Bn?o>0&&(d=Bn,p=o,m=i.length):e===Ks?u>0&&(d=Ks,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?Bn:Ks:null,m=d?d===Bn?i.length:c.length:0);const g=d===Bn&&/\b(transform|all)(,|$)/.test(r(`${Bn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:g}}function Wh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Kh(n)+Kh(t[r])))}function Kh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gh(){return document.body.offsetHeight}function _w(t,e,n){const r=t[Ii];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qh=Symbol("_vod"),vw=Symbol("_vsh"),yw=Symbol(""),ww=/(^|;)\s*display\s*:/;function Ew(t,e,n){const r=t.style,s=rt(n);let i=!1;if(n&&!s){if(e)if(rt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Do(r,l,"")}else for(const o in e)n[o]==null&&Do(r,o,"");for(const o in n)o==="display"&&(i=!0),Do(r,o,n[o])}else if(s){if(e!==n){const o=r[yw];o&&(n+=";"+o),r.cssText=n,i=ww.test(n)}}else e&&t.removeAttribute("style");Qh in t&&(t[Qh]=i?r.display:"",t[vw]&&(r.display="none"))}const Yh=/\s*!important$/;function Do(t,e,n){if(le(n))n.forEach(r=>Do(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tw(t,e);Yh.test(n)?t.setProperty($r(r),n.replace(Yh,""),"important"):t[r]=n}}const Jh=["Webkit","Moz","ms"],_l={};function Tw(t,e){const n=_l[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return _l[e]=r;r=va(r);for(let s=0;s<Jh.length;s++){const i=Jh[s]+r;if(i in t)return _l[e]=i}return e}const Xh="http://www.w3.org/1999/xlink";function Zh(t,e,n,r,s,i=yv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xh,e.slice(6,e.length)):t.setAttributeNS(Xh,e,n):n==null||i&&!Wf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":dn(n)?String(n):n)}function ed(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Wf(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function In(t,e,n,r){t.addEventListener(e,n,r)}function bw(t,e,n,r){t.removeEventListener(e,n,r)}const td=Symbol("_vei");function Iw(t,e,n,r,s=null){const i=t[td]||(t[td]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Aw(e);if(r){const u=i[e]=Pw(r,s);In(t,l,u,c)}else o&&(bw(t,l,o,c),i[e]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function Aw(t){let e;if(nd.test(t)){e={};let r;for(;r=t.match(nd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let vl=0;const Rw=Promise.resolve(),Sw=()=>vl||(Rw.then(()=>vl=0),vl=Date.now());function Pw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(Cw(r,n.value),e,5,[r])};return n.value=t,n.attached=Sw(),n}function Cw(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?_w(t,r,o):e==="style"?Ew(t,n,r):ga(e)?Tc(e)||Iw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xw(t,e,r,o))?(ed(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!rt(r))?ed(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zh(t,e,r,o))};function xw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rd(e)&&rt(n)?!1:e in t}const ur=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Co(e,n):e};function Vw(t){t.target.composing=!0}function sd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wt=Symbol("_assign"),Ai={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wt]=ur(s);const i=r||s.props&&s.props.type==="number";In(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=$o(l)),t[Wt](l)}),n&&In(t,"change",()=>{t.value=t.value.trim()}),e||(In(t,"compositionstart",Vw),In(t,"compositionend",sd),In(t,"change",sd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wt]=ur(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?$o(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Dw={deep:!0,created(t,e,n){t[Wt]=ur(n),In(t,"change",()=>{const r=t._modelValue,s=ps(t),i=t.checked,o=t[Wt];if(le(r)){const l=Rc(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(As(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(tm(t,i))})},mounted:id,beforeUpdate(t,e,n){t[Wt]=ur(n),id(t,e,n)}};function id(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=Rc(e,r.props.value)>-1;else if(As(e))s=e.has(r.props.value);else{if(e===n)return;s=Nr(e,tm(t,!0))}t.checked!==s&&(t.checked=s)}const Ow={created(t,{value:e},n){t.checked=Nr(e,n.props.value),t[Wt]=ur(n),In(t,"change",()=>{t[Wt](ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Wt]=ur(r),e!==n&&(t.checked=Nr(e,r.props.value))}},Nw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=As(e);In(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(ps(o)):ps(o));t[Wt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ea(()=>{t._assigning=!1})}),t[Wt]=ur(r)},mounted(t,{value:e}){od(t,e)},beforeUpdate(t,e,n){t[Wt]=ur(n)},updated(t,{value:e}){t._assigning||od(t,e)}};function od(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!As(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=ps(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Rc(e,l)>-1}else o.selected=e.has(l);else if(Nr(ps(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ps(t){return"_value"in t?t._value:t.value}function tm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zl={created(t,e,n){bo(t,e,n,null,"created")},mounted(t,e,n){bo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){bo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){bo(t,e,n,r,"updated")}};function Mw(t,e){switch(t){case"SELECT":return Nw;case"TEXTAREA":return Ai;default:switch(e){case"checkbox":return Dw;case"radio":return Ow;default:return Ai}}}function bo(t,e,n,r,s){const o=Mw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Lw=["ctrl","shift","alt","meta"],Fw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lw.some(n=>t[`${n}Key`]&&!e.includes(n))},nm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Fw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Uw=lt({patchProp:kw},uw);let ad;function jw(){return ad||(ad=Vy(Uw))}const Bw=(...t)=>{const e=jw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=$w(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $w(t){return rt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rm;const Sa=t=>rm=t,sm=Symbol();function Wl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ci;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ci||(ci={}));function Hw(){const t=Yf(!0),e=t.run(()=>Te({}));let n=[],r=[];const s=Nc({install(i){Sa(s),s._a=i,i.provide(sm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const im=()=>{};function ld(t,e,n,r=im){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jf()&&Ev(s),s}function Xr(t,...e){t.slice().forEach(n=>{n(...e)})}const zw=t=>t(),cd=Symbol(),yl=Symbol();function Kl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Wl(s)&&Wl(r)&&t.hasOwnProperty(n)&&!et(r)&&!Vr(r)?t[n]=Kl(s,r):t[n]=r}return t}const Ww=Symbol();function Kw(t){return!Wl(t)||!Object.prototype.hasOwnProperty.call(t,Ww)}const{assign:Hn}=Object;function Gw(t){return!!(et(t)&&t.effect)}function Qw(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function u(){l||(n.state.value[t]=s?s():{});const d=Hv(n.state.value[t]);return Hn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Nc(Qe(()=>{Sa(n);const g=n._s.get(t);return o[m].call(g,g)})),p),{}))}return c=om(t,u,e,n,r,!0),c}function om(t,e,n={},r,s,i){let o;const l=Hn({actions:{}},n),c={deep:!0};let u,d,p=[],m=[],g;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Te({});let k;function V(v){let y;u=d=!1,typeof v=="function"?(v(r.state.value[t]),y={type:ci.patchFunction,storeId:t,events:g}):(Kl(r.state.value[t],v),y={type:ci.patchObject,payload:v,storeId:t,events:g});const A=k=Symbol();Ea().then(()=>{k===A&&(u=!0)}),d=!0,Xr(p,y,r.state.value[t])}const U=i?function(){const{state:y}=n,A=y?y():{};this.$patch(T=>{Hn(T,A)})}:im;function j(){o.stop(),p=[],m=[],r._s.delete(t)}const F=(v,y="")=>{if(cd in v)return v[yl]=y,v;const A=function(){Sa(r);const T=Array.from(arguments),w=[],E=[];function J(ie){w.push(ie)}function Ie(ie){E.push(ie)}Xr(m,{args:T,name:A[yl],store:Z,after:J,onError:Ie});let we;try{we=v.apply(this&&this.$id===t?this:Z,T)}catch(ie){throw Xr(E,ie),ie}return we instanceof Promise?we.then(ie=>(Xr(w,ie),ie)).catch(ie=>(Xr(E,ie),Promise.reject(ie))):(Xr(w,we),we)};return A[cd]=!0,A[yl]=y,A},B={_p:r,$id:t,$onAction:ld.bind(null,m),$patch:V,$reset:U,$subscribe(v,y={}){const A=ld(p,v,y.detached,()=>T()),T=o.run(()=>tr(()=>r.state.value[t],w=>{(y.flush==="sync"?d:u)&&v({storeId:t,type:ci.direct,events:g},w)},Hn({},c,y)));return A},$dispose:j},Z=ji(B);r._s.set(t,Z);const R=(r._a&&r._a.runWithContext||zw)(()=>r._e.run(()=>(o=Yf()).run(()=>e({action:F}))));for(const v in R){const y=R[v];if(et(y)&&!Gw(y)||Vr(y))i||(P&&Kw(y)&&(et(y)?y.value=P[v]:Kl(y,P[v])),r.state.value[t][v]=y);else if(typeof y=="function"){const A=F(y,v);R[v]=A,l.actions[v]=y}}return Hn(Z,R),Hn(ke(Z),R),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:v=>{V(y=>{Hn(y,v)})}}),r._p.forEach(v=>{Hn(Z,o.run(()=>v({store:Z,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(Z.$state,P),u=!0,d=!0,Z}/*! #__NO_SIDE_EFFECTS__ */function Yw(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(o,l){const c=Ay();return o=o||(c?Xt(sm,null):null),o&&Sa(o),o=rm,o._s.has(t)||(s?om(t,e,r,o):Qw(t,r,o)),o._s.get(t)}return i.$id=t,i}var ud={};/**
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
 */const am=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Xw;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zw=function(t){const e=am(t);return lm.encodeByteArray(e,!0)},Xo=function(t){return Zw(t).replace(/\./g,"")},cm=function(t){try{return lm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function e0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const t0=()=>e0().__FIREBASE_DEFAULTS__,n0=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cm(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return t0()||n0()||r0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},um=t=>{var e,n;return(n=(e=Pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s0=t=>{const e=um(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hm=()=>{var t;return(t=Pa())===null||t===void 0?void 0:t.config},dm=t=>{var e;return(e=Pa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class i0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function o0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function l0(){var t;const e=(t=Pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function c0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function u0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function h0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function d0(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function f0(){return!l0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function p0(){try{return typeof indexedDB=="object"}catch{return!1}}function m0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const g0="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g0,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?_0(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,l,r)}}function _0(t,e){return t.replace(v0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const v0=/\{\$([^}]+)}/g;function y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hd(i)&&hd(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hd(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function w0(t,e){const n=new E0(t,e);return n.subscribe.bind(n)}class E0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");T0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wl),s.error===void 0&&(s.error=wl),s.complete===void 0&&(s.complete=wl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function T0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wl(){}/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class b0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(A0(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===Pr?void 0:t}function A0(t){return t.instantiationMode==="EAGER"}/**
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
 */class R0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new b0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const S0={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},P0=Re.INFO,C0={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},k0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=C0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=P0,this._logHandler=k0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const x0=(t,e)=>e.some(n=>t instanceof n);let dd,fd;function V0(){return dd||(dd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D0(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fm=new WeakMap,Gl=new WeakMap,pm=new WeakMap,El=new WeakMap,Bc=new WeakMap;function O0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fm.set(n,t)}).catch(()=>{}),Bc.set(e,t),e}function N0(t){if(Gl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Gl.set(t,e)}let Ql={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function M0(t){Ql=t(Ql)}function L0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return pm.set(r,e.sort?e.sort():[e]),nr(r)}:D0().includes(t)?function(...e){return t.apply(Tl(this),e),nr(fm.get(this))}:function(...e){return nr(t.apply(Tl(this),e))}}function F0(t){return typeof t=="function"?L0(t):(t instanceof IDBTransaction&&N0(t),x0(t,V0())?new Proxy(t,Ql):t)}function nr(t){if(t instanceof IDBRequest)return O0(t);if(El.has(t))return El.get(t);const e=F0(t);return e!==t&&(El.set(t,e),Bc.set(e,t)),e}const Tl=t=>Bc.get(t);function U0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(nr(o.result),c.oldVersion,c.newVersion,nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const j0=["get","getKey","getAll","getAllKeys","count"],B0=["put","add","delete","clear"],bl=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bl.get(e))return bl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=B0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||j0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return bl.set(e,i),i}M0(t=>({...t,get:(e,n,r)=>pd(e,n)||t.get(e,n,r),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
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
 */class q0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yl="@firebase/app",md="0.10.13";/**
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
 */const xn=new jc("@firebase/app"),H0="@firebase/app-compat",z0="@firebase/analytics-compat",W0="@firebase/analytics",K0="@firebase/app-check-compat",G0="@firebase/app-check",Q0="@firebase/auth",Y0="@firebase/auth-compat",J0="@firebase/database",X0="@firebase/data-connect",Z0="@firebase/database-compat",eE="@firebase/functions",tE="@firebase/functions-compat",nE="@firebase/installations",rE="@firebase/installations-compat",sE="@firebase/messaging",iE="@firebase/messaging-compat",oE="@firebase/performance",aE="@firebase/performance-compat",lE="@firebase/remote-config",cE="@firebase/remote-config-compat",uE="@firebase/storage",hE="@firebase/storage-compat",dE="@firebase/firestore",fE="@firebase/vertexai-preview",pE="@firebase/firestore-compat",mE="firebase",gE="10.14.1";/**
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
 */const Jl="[DEFAULT]",_E={[Yl]:"fire-core",[H0]:"fire-core-compat",[W0]:"fire-analytics",[z0]:"fire-analytics-compat",[G0]:"fire-app-check",[K0]:"fire-app-check-compat",[Q0]:"fire-auth",[Y0]:"fire-auth-compat",[J0]:"fire-rtdb",[X0]:"fire-data-connect",[Z0]:"fire-rtdb-compat",[eE]:"fire-fn",[tE]:"fire-fn-compat",[nE]:"fire-iid",[rE]:"fire-iid-compat",[sE]:"fire-fcm",[iE]:"fire-fcm-compat",[oE]:"fire-perf",[aE]:"fire-perf-compat",[lE]:"fire-rc",[cE]:"fire-rc-compat",[uE]:"fire-gcs",[hE]:"fire-gcs-compat",[dE]:"fire-fst",[pE]:"fire-fst-compat",[fE]:"fire-vertex","fire-js":"fire-js",[mE]:"fire-js-all"};/**
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
 */const ea=new Map,vE=new Map,Xl=new Map;function gd(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Xl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Xl.set(e,t);for(const n of ea.values())gd(n,t);for(const n of vE.values())gd(n,t);return!0}function qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
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
 */const yE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Hi("app","Firebase",yE);/**
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
 */class wE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=gE;function mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=hm()),!n)throw rr.create("no-options");const i=ea.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new R0(s);for(const c of Xl.values())o.addComponent(c);const l=new wE(n,r,o);return ea.set(s,l),l}function gm(t=Jl){const e=ea.get(t);if(!e&&t===Jl&&hm())return mm();if(!e)throw rr.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=_E[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}ms(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const EE="firebase-heartbeat-database",TE=1,Ri="firebase-heartbeat-store";let Il=null;function _m(){return Il||(Il=U0(EE,TE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Il}async function bE(t){try{const n=(await _m()).transaction(Ri),r=await n.objectStore(Ri).get(vm(t));return await n.done,r}catch(e){if(e instanceof Mn)xn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function _d(t,e){try{const r=(await _m()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,vm(t)),await r.done}catch(n){if(n instanceof Mn)xn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function vm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IE=1024,AE=30*24*60*60*1e3;class RE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:r,unsentEntries:s}=SE(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function SE(t,e=IE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),yd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return p0()?m0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CE(t){ms(new Lr("platform-logger",e=>new q0(e),"PRIVATE")),ms(new Lr("heartbeat",e=>new RE(e),"PRIVATE")),sr(Yl,md,t),sr(Yl,md,"esm2017"),sr("fire-js","")}CE("");var kE="firebase",xE="10.14.1";/**
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
 */sr(kE,xE,"app");function $c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=ym,wm=new Hi("auth","Firebase",ym());/**
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
 */const ta=new jc("@firebase/auth");function DE(t,...e){ta.logLevel<=Re.WARN&&ta.warn(`Auth (${Ss}): ${t}`,...e)}function Oo(t,...e){ta.logLevel<=Re.ERROR&&ta.error(`Auth (${Ss}): ${t}`,...e)}/**
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
 */function en(t,...e){throw Hc(t,...e)}function ln(t,...e){return Hc(t,...e)}function Em(t,e,n){const r=Object.assign(Object.assign({},VE()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function Cn(t){return Em(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wm.create(t,...e)}function fe(t,e,...n){if(!t)throw Hc(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function Vn(t,e){t||An(e)}/**
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
 */function Zl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OE(){return wd()==="http:"||wd()==="https:"}function wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OE()||u0()||"connection"in navigator)?navigator.onLine:!0}function ME(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=a0()||h0()}get(){return NE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zc(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FE=new Wi(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,s={}){return bm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=zi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return c0()||(u.referrerPolicy="no-referrer"),Tm.fetch()(Im(t,t.config.apiHost,n,l),u)})}async function bm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LE),e);try{const s=new jE(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Io(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Em(t,d,u);en(t,d)}}catch(s){if(s instanceof Mn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function Ki(t,e,n,r,s={}){const i=await _r(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Im(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,s):`${t.config.apiScheme}://${s}`}function UE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),FE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Ed(t){return t!==void 0&&t.enterprise!==void 0}class BE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qE(t,e){return _r(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
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
 */async function $E(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function Am(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=Wc(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(Al(s.auth_time)),issuedAtTime:ui(Al(s.iat)),expirationTime:ui(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function Wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cm(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Td(t){const e=Wc(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&zE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,Am(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rm(i.providerUserInfo):[],l=GE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new ec(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function KE(t){const e=Mt(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rm(t){return t.map(e=>{var{providerId:n}=e,r=$c(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QE(t,e){const n=await bm(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Im(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Tm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YE(t,e){return _r(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
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
 */class us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Td(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Td(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new us;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new us,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function qn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ec(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HE(this,e)}reload(){return KE(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Si(this,$E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:B,isAnonymous:Z,providerData:te,stsTokenManager:R}=n;fe(F&&R,e,"internal-error");const v=us.fromJSON(this.name,R);fe(typeof F=="string",e,"internal-error"),qn(p,e.name),qn(m,e.name),fe(typeof B=="boolean",e,"internal-error"),fe(typeof Z=="boolean",e,"internal-error"),qn(g,e.name),qn(P,e.name),qn(k,e.name),qn(V,e.name),qn(U,e.name),qn(j,e.name);const y=new Rn({uid:F,auth:e,email:m,emailVerified:B,displayName:p,isAnonymous:Z,photoURL:P,phoneNumber:g,tenantId:k,stsTokenManager:v,createdAt:U,lastLoginAt:j});return te&&Array.isArray(te)&&(y.providerData=te.map(A=>Object.assign({},A))),V&&(y._redirectEventId=V),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new us;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new us;l.updateFromIdToken(r);const c=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ec(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const bd=new Map;function Sn(t){Vn(t instanceof Function,"Expected a class definition");let e=bd.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bd.set(t,e),e)}/**
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
 */class Sm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sm.type="NONE";const Id=Sm;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(Sn(Id),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(Id);const o=No(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Rn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hs(i,e,r))}}/**
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
 */function Ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dm(e))return"Blackberry";if(Om(e))return"Webos";if(Cm(e))return"Safari";if((e.includes("chrome/")||km(e))&&!e.includes("edge/"))return"Chrome";if(Vm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pm(t=Pt()){return/firefox\//i.test(t)}function Cm(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function km(t=Pt()){return/crios\//i.test(t)}function xm(t=Pt()){return/iemobile/i.test(t)}function Vm(t=Pt()){return/android/i.test(t)}function Dm(t=Pt()){return/blackberry/i.test(t)}function Om(t=Pt()){return/webos/i.test(t)}function Kc(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JE(t=Pt()){var e;return Kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XE(){return d0()&&document.documentMode===10}function Nm(t=Pt()){return Kc(t)||Vm(t)||Om(t)||Dm(t)||/windows phone/i.test(t)||xm(t)}/**
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
 */function Mm(t,e=[]){let n;switch(t){case"Browser":n=Ad(Pt());break;case"Worker":n=`${Ad(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
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
 */class ZE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eT(t,e={}){return _r(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
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
 */const tT=6;class nT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rd(this),this.idTokenSubscription=new Rd(this),this.beforeStateQueue=new ZE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Am(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ME()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(Cn(this));const n=e?Mt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eT(this),n=new nT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return Mt(t)}class Rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=w0(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sT(t){Ca=t}function Lm(t){return Ca.loadJS(t)}function iT(){return Ca.recaptchaEnterpriseScript}function oT(){return Ca.gapiScript}function aT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lT="recaptcha-enterprise",cT="NO_RECAPTCHA";class uT{constructor(e){this.type=lT,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{qE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new BE(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Ed(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(cT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Ed(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=iT();c.length!==0&&(c+=l),Lm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Sd(t,e,n,r=!1){const s=new uT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tc(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function hT(t,e){const n=qc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function dT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fT(t,e,n){const r=Hr(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fm(e),{host:o,port:l}=pT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),mT()}function Fm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pT(t){const e=Fm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function gT(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _T(t,e){return Ki(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
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
 */async function vT(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function yT(t,e){return Ki(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
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
 */class Pi extends Gc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,n,"signInWithPassword",_T);case"emailLink":return vT(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tc(e,r,"signUpPassword",gT);case"emailLink":return yT(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ds(t,e){return Ki(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
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
 */const wT="http://localhost";class Fr extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$c(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:wT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */function ET(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TT(t){const e=Js(Xs(t)).link,n=e?Js(Xs(e)).deep_link_id:null,r=Js(Xs(t)).deep_link_id;return(r?Js(Xs(r)).link:null)||r||n||e||t}class Qc{constructor(e){var n,r,s,i,o,l;const c=Js(Xs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=ET((s=c.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=TT(e);try{return new Qc(n)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qc.parseLink(n);return fe(r,"argument-error"),Pi._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Um{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gi extends Um{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */async function bT(t,e){return Ki(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
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
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=Cd(r);return new Ur({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cd(r);return new Ur({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ra extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function jm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function IT(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
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
 */async function AT(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await Si(t,jm(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Wc(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function Bm(t,e,n=!1){if(on(t.app))return Promise.reject(Cn(t));const r="signIn",s=await jm(t,r,e),i=await Ur._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function RT(t,e){return Bm(Hr(t),e)}/**
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
 */async function qm(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $m(t,e,n){if(on(t.app))return Promise.reject(Cn(t));const r=Hr(t),o=await tc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qm(t),c}),l=await Ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ST(t,e,n){return on(t.app)?Promise.reject(Cn(t)):RT(Mt(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qm(t),r})}function PT(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function CT(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function Yc(t,e,n,r){return Mt(t).onAuthStateChanged(e,n,r)}function Hm(t){return Mt(t).signOut()}const sa="__sak";/**
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
 */class zm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kT=1e3,xT=10;class Wm extends zm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);XE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const VT=Wm;/**
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
 */class Km extends zm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Km.type="SESSION";const Gm=Km;/**
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
 */function DT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await DT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
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
 */class OT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Jc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function NT(t){cn().location.href=t}/**
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
 */function Qm(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function MT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function FT(){return Qm()?self:null}/**
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
 */const Ym="firebaseLocalStorageDb",UT=1,ia="firebaseLocalStorage",Jm="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xa(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function jT(){const t=indexedDB.deleteDatabase(Ym);return new Qi(t).toPromise()}function nc(){const t=indexedDB.open(Ym,UT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:Jm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await jT(),e(await nc()))})})}async function kd(t,e,n){const r=xa(t,!0).put({[Jm]:e,value:n});return new Qi(r).toPromise()}async function BT(t,e){const n=xa(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=xa(t,!0).delete(e);return new Qi(n).toPromise()}const qT=800,$T=3;class Xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(FT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await kd(e,sa,"1"),await xd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xa(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xm.type="LOCAL";const HT=Xm;new Wi(3e4,6e4);/**
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
 */function zT(t,e){return e?Sn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xc extends Gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WT(t){return Bm(t.auth,new Xc(t),t.bypassAuthState)}function KT(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),AT(n,new Xc(t),t.bypassAuthState)}async function GT(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),IT(n,new Xc(t),t.bypassAuthState)}/**
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
 */class Zm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WT;case"linkViaPopup":case"linkViaRedirect":return GT;case"reauthViaPopup":case"reauthViaRedirect":return KT;default:en(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QT=new Wi(2e3,1e4);class is extends Zm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QT.get())};e()}}is.currentPopupAction=null;/**
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
 */const YT="pendingRedirect",Mo=new Map;class JT extends Zm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await XT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XT(t,e){const n=tb(e),r=eb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZT(t,e){Mo.set(t._key(),e)}function eb(t){return Sn(t._redirectPersistence)}function tb(t){return No(YT,t.config.apiKey,t.name)}async function nb(t,e,n=!1){if(on(t.app))return Promise.reject(Cn(t));const r=Hr(t),s=zT(r,e),o=await new JT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rb=10*60*1e3;class sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ib(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vd(e))}saveEventToCache(e){this.cachedEventUids.add(Vd(e)),this.lastProcessedEventTime=Date.now()}}function Vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ib(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eg(t);default:return!1}}/**
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
 */async function ob(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
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
 */const ab=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lb=/^https?/;async function cb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ob(t);for(const n of e)try{if(ub(n))return}catch{}en(t,"unauthorized-domain")}function ub(t){const e=Zl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lb.test(n))return!1;if(ab.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hb=new Wi(3e4,6e4);function Dd(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function db(t){return new Promise((e,n)=>{var r,s,i;function o(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(ln(t,"network-request-failed"))},timeout:hb.get()})}if(!((s=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=cn().gapi)===null||i===void 0)&&i.load)o();else{const l=aT("iframefcb");return cn()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},Lm(`${oT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function fb(t){return Lo=Lo||db(t),Lo}/**
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
 */const pb=new Wi(5e3,15e3),mb="__/auth/iframe",gb="emulator/auth/iframe",_b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yb(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,gb):`https://${t.config.authDomain}/${mb}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},s=vb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function wb(t){const e=await fb(t),n=cn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:yb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_b,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=cn().setTimeout(()=>{i(o)},pb.get());function c(){cn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tb=500,bb=600,Ib="_blank",Ab="http://localhost";class Od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rb(t,e,n,r=Tb,s=bb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Eb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();n&&(l=km(u)?Ib:n),Pm(u)&&(e=e||Ab,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,P])=>`${m}${g}=${P},`,"");if(JE(u)&&l!=="_self")return Sb(e||"",l),new Od(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Od(p)}function Sb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Pb="__/auth/handler",Cb="emulator/auth/handler",kb=encodeURIComponent("fac");async function Nd(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:s};if(e instanceof Um){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Gi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${kb}=${encodeURIComponent(c)}`:"";return`${xb(t)}?${zi(l).slice(1)}${u}`}function xb({config:t}){return t.emulator?zc(t,Cb):`https://${t.authDomain}/${Pb}`}/**
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
 */const Rl="webStorageSupport";class Vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gm,this._completeRedirectFn=nb,this._overrideRedirectResult=ZT}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nd(e,n,r,Zl(),s);return Rb(e,o,Jc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nd(e,n,r,Zl(),s);return NT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wb(e),r=new sb(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rl];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nm()||Cm()||Kc()}}const Db=Vb;var Md="@firebase/auth",Ld="1.7.9";/**
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
 */class Ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Mb(t){ms(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mm(t)},u=new rT(r,s,i,c);return dT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Lr("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new Ob(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Md,Ld,Nb(t)),sr(Md,Ld,"esm2017")}/**
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
 */const Lb=5*60,Fb=dm("authIdTokenMaxAge")||Lb;let Fd=null;const Ub=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fb)return;const s=n==null?void 0:n.token;Fd!==s&&(Fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jb(t=gm()){const e=qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hT(t,{popupRedirectResolver:Db,persistence:[HT,VT,Gm]}),r=dm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ub(i.toString());CT(n,o,()=>o(n.currentUser)),PT(n,l=>o(l))}}const s=um("auth");return s&&fT(n,`http://${s}`),n}function Bb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Bb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Mb("Browser");var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Or,tg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,v){function y(){}y.prototype=v.prototype,R.D=v.prototype,R.prototype=new y,R.prototype.constructor=R,R.C=function(A,T,w){for(var E=Array(arguments.length-2),J=2;J<arguments.length;J++)E[J-2]=arguments[J];return v.prototype[T].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,v,y){y||(y=0);var A=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)A[T]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(T=0;16>T;++T)A[T]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=R.g[0],y=R.g[1],T=R.g[2];var w=R.g[3],E=v+(w^y&(T^w))+A[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=w+(T^v&(y^T))+A[1]+3905402710&4294967295,w=v+(E<<12&4294967295|E>>>20),E=T+(y^w&(v^y))+A[2]+606105819&4294967295,T=w+(E<<17&4294967295|E>>>15),E=y+(v^T&(w^v))+A[3]+3250441966&4294967295,y=T+(E<<22&4294967295|E>>>10),E=v+(w^y&(T^w))+A[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=w+(T^v&(y^T))+A[5]+1200080426&4294967295,w=v+(E<<12&4294967295|E>>>20),E=T+(y^w&(v^y))+A[6]+2821735955&4294967295,T=w+(E<<17&4294967295|E>>>15),E=y+(v^T&(w^v))+A[7]+4249261313&4294967295,y=T+(E<<22&4294967295|E>>>10),E=v+(w^y&(T^w))+A[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=w+(T^v&(y^T))+A[9]+2336552879&4294967295,w=v+(E<<12&4294967295|E>>>20),E=T+(y^w&(v^y))+A[10]+4294925233&4294967295,T=w+(E<<17&4294967295|E>>>15),E=y+(v^T&(w^v))+A[11]+2304563134&4294967295,y=T+(E<<22&4294967295|E>>>10),E=v+(w^y&(T^w))+A[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=w+(T^v&(y^T))+A[13]+4254626195&4294967295,w=v+(E<<12&4294967295|E>>>20),E=T+(y^w&(v^y))+A[14]+2792965006&4294967295,T=w+(E<<17&4294967295|E>>>15),E=y+(v^T&(w^v))+A[15]+1236535329&4294967295,y=T+(E<<22&4294967295|E>>>10),E=v+(T^w&(y^T))+A[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=w+(y^T&(v^y))+A[6]+3225465664&4294967295,w=v+(E<<9&4294967295|E>>>23),E=T+(v^y&(w^v))+A[11]+643717713&4294967295,T=w+(E<<14&4294967295|E>>>18),E=y+(w^v&(T^w))+A[0]+3921069994&4294967295,y=T+(E<<20&4294967295|E>>>12),E=v+(T^w&(y^T))+A[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=w+(y^T&(v^y))+A[10]+38016083&4294967295,w=v+(E<<9&4294967295|E>>>23),E=T+(v^y&(w^v))+A[15]+3634488961&4294967295,T=w+(E<<14&4294967295|E>>>18),E=y+(w^v&(T^w))+A[4]+3889429448&4294967295,y=T+(E<<20&4294967295|E>>>12),E=v+(T^w&(y^T))+A[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=w+(y^T&(v^y))+A[14]+3275163606&4294967295,w=v+(E<<9&4294967295|E>>>23),E=T+(v^y&(w^v))+A[3]+4107603335&4294967295,T=w+(E<<14&4294967295|E>>>18),E=y+(w^v&(T^w))+A[8]+1163531501&4294967295,y=T+(E<<20&4294967295|E>>>12),E=v+(T^w&(y^T))+A[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=w+(y^T&(v^y))+A[2]+4243563512&4294967295,w=v+(E<<9&4294967295|E>>>23),E=T+(v^y&(w^v))+A[7]+1735328473&4294967295,T=w+(E<<14&4294967295|E>>>18),E=y+(w^v&(T^w))+A[12]+2368359562&4294967295,y=T+(E<<20&4294967295|E>>>12),E=v+(y^T^w)+A[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=w+(v^y^T)+A[8]+2272392833&4294967295,w=v+(E<<11&4294967295|E>>>21),E=T+(w^v^y)+A[11]+1839030562&4294967295,T=w+(E<<16&4294967295|E>>>16),E=y+(T^w^v)+A[14]+4259657740&4294967295,y=T+(E<<23&4294967295|E>>>9),E=v+(y^T^w)+A[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=w+(v^y^T)+A[4]+1272893353&4294967295,w=v+(E<<11&4294967295|E>>>21),E=T+(w^v^y)+A[7]+4139469664&4294967295,T=w+(E<<16&4294967295|E>>>16),E=y+(T^w^v)+A[10]+3200236656&4294967295,y=T+(E<<23&4294967295|E>>>9),E=v+(y^T^w)+A[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=w+(v^y^T)+A[0]+3936430074&4294967295,w=v+(E<<11&4294967295|E>>>21),E=T+(w^v^y)+A[3]+3572445317&4294967295,T=w+(E<<16&4294967295|E>>>16),E=y+(T^w^v)+A[6]+76029189&4294967295,y=T+(E<<23&4294967295|E>>>9),E=v+(y^T^w)+A[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=w+(v^y^T)+A[12]+3873151461&4294967295,w=v+(E<<11&4294967295|E>>>21),E=T+(w^v^y)+A[15]+530742520&4294967295,T=w+(E<<16&4294967295|E>>>16),E=y+(T^w^v)+A[2]+3299628645&4294967295,y=T+(E<<23&4294967295|E>>>9),E=v+(T^(y|~w))+A[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=w+(y^(v|~T))+A[7]+1126891415&4294967295,w=v+(E<<10&4294967295|E>>>22),E=T+(v^(w|~y))+A[14]+2878612391&4294967295,T=w+(E<<15&4294967295|E>>>17),E=y+(w^(T|~v))+A[5]+4237533241&4294967295,y=T+(E<<21&4294967295|E>>>11),E=v+(T^(y|~w))+A[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=w+(y^(v|~T))+A[3]+2399980690&4294967295,w=v+(E<<10&4294967295|E>>>22),E=T+(v^(w|~y))+A[10]+4293915773&4294967295,T=w+(E<<15&4294967295|E>>>17),E=y+(w^(T|~v))+A[1]+2240044497&4294967295,y=T+(E<<21&4294967295|E>>>11),E=v+(T^(y|~w))+A[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=w+(y^(v|~T))+A[15]+4264355552&4294967295,w=v+(E<<10&4294967295|E>>>22),E=T+(v^(w|~y))+A[6]+2734768916&4294967295,T=w+(E<<15&4294967295|E>>>17),E=y+(w^(T|~v))+A[13]+1309151649&4294967295,y=T+(E<<21&4294967295|E>>>11),E=v+(T^(y|~w))+A[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=w+(y^(v|~T))+A[11]+3174756917&4294967295,w=v+(E<<10&4294967295|E>>>22),E=T+(v^(w|~y))+A[2]+718787259&4294967295,T=w+(E<<15&4294967295|E>>>17),E=y+(w^(T|~v))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+v&4294967295,R.g[1]=R.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+T&4294967295,R.g[3]=R.g[3]+w&4294967295}r.prototype.u=function(R,v){v===void 0&&(v=R.length);for(var y=v-this.blockSize,A=this.B,T=this.h,w=0;w<v;){if(T==0)for(;w<=y;)s(this,R,w),w+=this.blockSize;if(typeof R=="string"){for(;w<v;)if(A[T++]=R.charCodeAt(w++),T==this.blockSize){s(this,A),T=0;break}}else for(;w<v;)if(A[T++]=R[w++],T==this.blockSize){s(this,A),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var v=1;v<R.length-8;++v)R[v]=0;var y=8*this.o;for(v=R.length-8;v<R.length;++v)R[v]=y&255,y/=256;for(this.u(R),R=Array(16),v=y=0;4>v;++v)for(var A=0;32>A;A+=8)R[y++]=this.g[v]>>>A&255;return R};function i(R,v){var y=l;return Object.prototype.hasOwnProperty.call(y,R)?y[R]:y[R]=v(R)}function o(R,v){this.h=v;for(var y=[],A=!0,T=R.length-1;0<=T;T--){var w=R[T]|0;A&&w==v||(y[T]=w,A=!1)}this.g=y}var l={};function c(R){return-128<=R&&128>R?i(R,function(v){return new o([v|0],0>v?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return V(u(-R));for(var v=[],y=1,A=0;R>=y;A++)v[A]=R/y|0,y*=4294967296;return new o(v,0)}function d(R,v){if(R.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R.charAt(0)=="-")return V(d(R.substring(1),v));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),A=p,T=0;T<R.length;T+=8){var w=Math.min(8,R.length-T),E=parseInt(R.substring(T,T+w),v);8>w?(w=u(Math.pow(v,w)),A=A.j(w).add(u(E))):(A=A.j(y),A=A.add(u(E)))}return A}var p=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();for(var R=0,v=1,y=0;y<this.g.length;y++){var A=this.i(y);R+=(0<=A?A:4294967296+A)*v,v*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(k(this))return"-"+V(this).toString(R);for(var v=u(Math.pow(R,6)),y=this,A="";;){var T=B(y,v).g;y=U(y,T.j(v));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(R);if(y=T,P(y))return w+A;for(;6>w.length;)w="0"+w;A=w+A}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var v=0;v<R.g.length;v++)if(R.g[v]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=U(this,R),k(R)?-1:P(R)?0:1};function V(R){for(var v=R.g.length,y=[],A=0;A<v;A++)y[A]=~R.g[A];return new o(y,~R.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],A=0,T=0;T<=v;T++){var w=A+(this.i(T)&65535)+(R.i(T)&65535),E=(w>>>16)+(this.i(T)>>>16)+(R.i(T)>>>16);A=E>>>16,w&=65535,E&=65535,y[T]=E<<16|w}return new o(y,y[y.length-1]&-2147483648?-1:0)};function U(R,v){return R.add(V(v))}t.j=function(R){if(P(this)||P(R))return p;if(k(this))return k(R)?V(this).j(V(R)):V(V(this).j(R));if(k(R))return V(this.j(V(R)));if(0>this.l(g)&&0>R.l(g))return u(this.m()*R.m());for(var v=this.g.length+R.g.length,y=[],A=0;A<2*v;A++)y[A]=0;for(A=0;A<this.g.length;A++)for(var T=0;T<R.g.length;T++){var w=this.i(A)>>>16,E=this.i(A)&65535,J=R.i(T)>>>16,Ie=R.i(T)&65535;y[2*A+2*T]+=E*Ie,j(y,2*A+2*T),y[2*A+2*T+1]+=w*Ie,j(y,2*A+2*T+1),y[2*A+2*T+1]+=E*J,j(y,2*A+2*T+1),y[2*A+2*T+2]+=w*J,j(y,2*A+2*T+2)}for(A=0;A<v;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=v;A<2*v;A++)y[A]=0;return new o(y,0)};function j(R,v){for(;(R[v]&65535)!=R[v];)R[v+1]+=R[v]>>>16,R[v]&=65535,v++}function F(R,v){this.g=R,this.h=v}function B(R,v){if(P(v))throw Error("division by zero");if(P(R))return new F(p,p);if(k(R))return v=B(V(R),v),new F(V(v.g),V(v.h));if(k(v))return v=B(R,V(v)),new F(V(v.g),v.h);if(30<R.g.length){if(k(R)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=m,A=v;0>=A.l(R);)y=Z(y),A=Z(A);var T=te(y,1),w=te(A,1);for(A=te(A,2),y=te(y,2);!P(A);){var E=w.add(A);0>=E.l(R)&&(T=T.add(y),w=E),A=te(A,1),y=te(y,1)}return v=U(R,T.j(v)),new F(T,v)}for(T=p;0<=R.l(v);){for(y=Math.max(1,Math.floor(R.m()/v.m())),A=Math.ceil(Math.log(y)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),w=u(y),E=w.j(v);k(E)||0<E.l(R);)y-=A,w=u(y),E=w.j(v);P(w)&&(w=m),T=T.add(w),R=U(R,E)}return new F(T,R)}t.A=function(R){return B(this,R).h},t.and=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)&R.i(A);return new o(y,this.h&R.h)},t.or=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)|R.i(A);return new o(y,this.h|R.h)},t.xor=function(R){for(var v=Math.max(this.g.length,R.g.length),y=[],A=0;A<v;A++)y[A]=this.i(A)^R.i(A);return new o(y,this.h^R.h)};function Z(R){for(var v=R.g.length+1,y=[],A=0;A<v;A++)y[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(y,R.h)}function te(R,v){var y=v>>5;v%=32;for(var A=R.g.length-y,T=[],w=0;w<A;w++)T[w]=0<v?R.i(w+y)>>>v|R.i(w+y+1)<<32-v:R.i(w+y);return new o(T,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Or=o}).apply(typeof Ud<"u"?Ud:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ng,Zs,rg,Fo,rc,sg,ig,og;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var x=a[_];if(!(x in f))break e;f=f[x]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,x={next:function(){if(!_&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function g(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,x,D){for(var Q=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)Q[Le-2]=arguments[Le];return h.prototype[x].apply(_,Q)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function V(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const x=a.length||0,D=_.length||0;a.length=x+D;for(let Q=0;Q<D;Q++)a[x+Q]=_[Q]}else a.push(_)}}class U{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function B(a){return B[" "](a),a}B[" "]=function(){};var Z=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function te(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function R(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(f in _)a[f]=_[f];for(let D=0;D<y.length;D++)f=y[D],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function T(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function w(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Ye;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class J{constructor(){this.h=this.g=null}add(h,f){const _=Ie.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var Ie=new U(()=>new we,a=>a.reset());class we{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,me=!1,Ye=new J,gt=()=>{const a=l.Promise.resolve(void 0);ie=()=>{a.then(_t)}};var _t=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){w(f)}var h=Ie;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}me=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var Je=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Xe(a,h){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{B(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:qe[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xe.aa.h.call(this)}}P(Xe,Se);var qe={2:"touch",3:"pen",4:"mouse"};Xe.prototype.h=function(){Xe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),z=0;function W(a,h,f,_,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=x,this.key=++z,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,_,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var Q=b(a,h,_,x);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new W(h,this.src,D,!!_,x),h.fa=f,a.push(h)),h};function I(a,h){var f=h.type;if(f in a.g){var _=a.g[f],x=Array.prototype.indexOf.call(_,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(_,x,1),D&&(ee(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,h,f,_){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==_)return x}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function M(a,h,f,_,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)M(a,h[D],f,_,x);return null}return f=de(f),a&&a[O]?a.K(h,f,u(_)?!!_.capture:!1,x):L(a,h,f,!1,_,x)}function L(a,h,f,_,x,D){if(!h)throw Error("Invalid event type");var Q=u(x)?!!x.capture:!!x,Le=X(a);if(Le||(a[C]=Le=new Ee(a)),f=Le.add(h,f,_,Q,D),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Je||(x=Q),x===void 0&&(x=!1),a.addEventListener(h.toString(),_,x);else if(a.attachEvent)a.attachEvent(H(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=ce;return a}function G(a,h,f,_,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],f,_,x);else _=u(_)?!!_.capture:!!_,f=de(f),a&&a[O]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=b(D,f,_,x),-1<f&&(ee(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,f,_,x)),(f=-1<a?h[a]:null)&&K(f))}function K(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[O])I(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(H(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=X(h))?(I(f,a),f.h==0&&(f.src=null,h[C]=null)):ee(a)}}}function H(a){return a in N?N[a]:N[a]="on"+a}function ce(a,h){if(a.da)a=!0;else{h=new Xe(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&K(a),a=f.call(_,h)}return a}function X(a){return a=a[C],a instanceof Ee?a:null}var oe="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[oe]||(a[oe]=function(h){return a.handleEvent(h)}),a[oe])}function ue(){Ne.call(this),this.i=new Ee(this),this.M=this,this.F=null}P(ue,Ne),ue.prototype[O]=!0,ue.prototype.removeEventListener=function(a,h,f,_){G(this,a,h,f,_)};function ye(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Se(h,a);else if(h instanceof Se)h.target=h.target||a;else{var x=h;h=new Se(_,a),A(h,x)}if(x=!0,f)for(var D=f.length-1;0<=D;D--){var Q=h.g=f[D];x=Pe(Q,_,!0,h)&&x}if(Q=h.g=a,x=Pe(Q,_,!0,h)&&x,x=Pe(Q,_,!1,h)&&x,f)for(D=0;D<f.length;D++)Q=h.g=f[D],x=Pe(Q,_,!1,h)&&x}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ee(f[_]);delete a.g[h],a.h--}}this.F=null},ue.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ue.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Pe(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var Q=h[D];if(Q&&!Q.da&&Q.capture==f){var Le=Q.listener,ht=Q.ha||Q.src;Q.fa&&I(a.i,Q),x=Le.call(ht,_)!==!1&&x}}return x&&!_.defaultPrevented}function vt(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function ct(a){a.g=vt(()=>{a.g=null,a.i&&(a.i=!1,ct(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qt extends Ne{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(a){Ne.call(this),this.h=a,this.g={}}P(yt,Ne);var Ln=[];function Ds(a){te(a.g,function(h,f){this.g.hasOwnProperty(f)&&K(h)},a),a.g={}}yt.prototype.N=function(){yt.aa.N.call(this),Ds(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=l.JSON.stringify,$t=l.JSON.parse,no=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ka(){}Ka.prototype.h=null;function Vu(a){return a.h||(a.h=a.i())}function Du(){}var Os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ga(){Se.call(this,"d")}P(Ga,Se);function Qa(){Se.call(this,"c")}P(Qa,Se);var yr={},Ou=null;function ro(){return Ou=Ou||new ue}yr.La="serverreachability";function Nu(a){Se.call(this,yr.La,a)}P(Nu,Se);function Ns(a){const h=ro();ye(h,new Nu(h))}yr.STAT_EVENT="statevent";function Mu(a,h){Se.call(this,yr.STAT_EVENT,a),this.stat=h}P(Mu,Se);function Ct(a){const h=ro();ye(h,new Mu(h,a))}yr.Ma="timingevent";function Lu(a,h){Se.call(this,yr.Ma,a),this.size=h}P(Lu,Se);function Ms(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function U_(a,h,f,_,x,D){a.info(function(){if(a.g)if(D)for(var Q="",Le=D.split("&"),ht=0;ht<Le.length;ht++){var xe=Le[ht].split("=");if(1<xe.length){var wt=xe[0];xe=xe[1];var Et=wt.split("_");Q=2<=Et.length&&Et[1]=="type"?Q+(wt+"="+xe+"&"):Q+(wt+"=redacted&")}}else Q=null;else Q=D;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+h+`
`+f+`
`+Q})}function j_(a,h,f,_,x,D,Q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+Q})}function Kr(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+q_(a,f)+(_?" "+_:"")})}function B_(a,h){a.info(function(){return"TIMEOUT: "+h})}Ls.prototype.info=function(){};function q_(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var Q=1;Q<x.length;Q++)x[Q]=""}}}}return ut(f)}catch{return h}}var so={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ya;function io(){}P(io,Ka),io.prototype.g=function(){return new XMLHttpRequest},io.prototype.i=function(){return{}},Ya=new io;function Fn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uu}function Uu(){this.i=null,this.g="",this.h=!1}var ju={},Ja={};function Xa(a,h,f){a.L=1,a.v=co(mn(h)),a.m=f,a.P=!0,Bu(a,null)}function Bu(a,h){a.F=Date.now(),oo(a),a.A=mn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),th(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Uu,a.g=yh(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Ln[0]=x.toString()),x=Ln);for(var D=0;D<x.length;D++){var Q=M(f,x[D],_||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ns(),U_(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const h=this.M;h&&gn(a)==3?h.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const Et=gn(this.g);var h=this.g.Ba();const Yr=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||Et!=4||h==7||(h==8||0>=Yr?Ns(3):Ns(2)),Za(this);var f=this.g.Z();this.X=f;t:if(qu(this)){var _=lh(this.g);a="";var x=_.length,D=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),Fs(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(D&&h==x-1)});_.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,j_(this.i,this.u,this.A,this.l,this.R,Et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ht=this.g;if((Le=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Le)){var xe=Le;break t}}xe=null}if(f=xe)Kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,f);else{this.o=!1,this.s=3,Ct(12),wr(this),Fs(this);break e}}if(this.P){f=!0;let Gt;for(;!this.J&&this.C<Q.length;)if(Gt=$_(this,Q),Gt==Ja){Et==4&&(this.s=4,Ct(14),f=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==ju){this.s=4,Ct(15),Kr(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else Kr(this.i,this.l,Gt,null),el(this,Gt);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||Q.length!=0||this.h.h||(this.s=1,Ct(16),f=!1),this.o=this.o&&f,!f)Kr(this.i,this.l,Q,"[Invalid Chunked Response]"),wr(this),Fs(this);else if(0<Q.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),ol(wt),wt.M=!0,Ct(11))}}else Kr(this.i,this.l,Q,null),el(this,Q);Et==4&&wr(this),this.o&&!this.J&&(Et==4?mh(this.j,this):(this.o=!1,oo(this)))}else ov(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),wr(this),Fs(this)}}}catch{}finally{}};function qu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $_(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Ja:(f=Number(h.substring(f,_)),isNaN(f)?ju:(_+=1,_+f>h.length?Ja:(h=h.slice(_,_+f),a.C=_+f,h)))}Fn.prototype.cancel=function(){this.J=!0,wr(this)};function oo(a){a.S=Date.now()+a.I,$u(a,a.I)}function $u(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ms(m(a.ba,a),h)}function Za(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(B_(this.i,this.A),this.L!=2&&(Ns(),Ct(17)),wr(this),this.s=2,Fs(this)):$u(this,this.S-a)};function Fs(a){a.j.G==0||a.J||mh(a.j,a)}function wr(a){Za(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ds(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function el(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||tl(f.h,a))){if(!a.K&&tl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)go(f),po(f);else break e;il(f),Ct(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ms(m(f.Za,f),6e3));if(1>=Wu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Tr(f,11)}else if((a.K||f.g==a)&&go(f),!j(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let xe=x[h];if(f.T=xe[0],xe=xe[1],f.G==2)if(xe[0]=="c"){f.K=xe[1],f.ia=xe[2];const wt=xe[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const Et=xe[4];Et!=null&&(f.Aa=Et,f.j.info("SVER="+f.Aa));const Yr=xe[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(_=1.5*Yr,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const Gt=a.g;if(Gt){const vo=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vo){var D=_.h;D.g||vo.indexOf("spdy")==-1&&vo.indexOf("quic")==-1&&vo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(nl(D,D.h),D.h=null))}if(_.D){const al=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;al&&(_.ya=al,$e(_.I,_.D,al))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var Q=a;if(_.qa=vh(_,_.J?_.ia:null,_.W),Q.K){Ku(_.h,Q);var Le=Q,ht=_.L;ht&&(Le.I=ht),Le.B&&(Za(Le),oo(Le)),_.g=Q}else fh(_);0<f.i.length&&mo(f)}else xe[0]!="stop"&&xe[0]!="close"||Tr(f,7);else f.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Tr(f,7):sl(f):xe[0]!="noop"&&f.l&&f.l.ta(xe),f.v=0)}}Ns(4)}catch{}}var H_=class{constructor(a,h){this.g=a,this.map=h}};function Hu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function tl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function nl(a,h){a.g?a.g.add(h):a.h=h}function Ku(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Hu.prototype.cancel=function(){if(this.i=Gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function z_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function W_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Qu(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=W_(a),_=z_(a),x=_.length,D=0;D<x;D++)h.call(void 0,_[D],f&&f[D],a)}var Yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function K_(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),x=null;if(0<=_){var D=a[f].substring(0,_);x=a[f].substring(_+1)}else D=a[f];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Er(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Er){this.h=a.h,ao(this,a.j),this.o=a.o,this.g=a.g,lo(this,a.s),this.l=a.l;var h=a.i,f=new Bs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ju(this,f),this.m=a.m}else a&&(h=String(a).match(Yu))?(this.h=!1,ao(this,h[1]||"",!0),this.o=Us(h[2]||""),this.g=Us(h[3]||"",!0),lo(this,h[4]),this.l=Us(h[5]||"",!0),Ju(this,h[6]||"",!0),this.m=Us(h[7]||"")):(this.h=!1,this.i=new Bs(null,this.h))}Er.prototype.toString=function(){var a=[],h=this.j;h&&a.push(js(h,Xu,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,Xu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?Y_:Q_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,X_)),a.join("")};function mn(a){return new Er(a)}function ao(a,h,f){a.j=f?Us(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function lo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ju(a,h,f){h instanceof Bs?(a.i=h,Z_(a.i,a.h)):(f||(h=js(h,J_)),a.i=new Bs(h,a.h))}function $e(a,h,f){a.i.set(h,f)}function co(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Us(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,G_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function G_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,Q_=/[#\?:]/g,Y_=/[#\?]/g,J_=/[#\?@]/g,X_=/#/g;function Bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&K_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Bs.prototype,t.add=function(a,h){Un(this),this.i=null,a=Gr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Zu(a,h){Un(a),h=Gr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function eh(a,h){return Un(a),h=Gr(a,h),a.g.has(h)}t.forEach=function(a,h){Un(this),this.g.forEach(function(f,_){f.forEach(function(x){a.call(h,x,_,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const x=a[_];for(let D=0;D<x.length;D++)f.push(h[_])}return f},t.V=function(a){Un(this);let h=[];if(typeof a=="string")eh(this,a)&&(h=h.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Un(this),this.i=null,a=Gr(this,a),eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function th(a,h,f){Zu(a,h),0<f.length&&(a.i=null,a.g.set(Gr(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const D=encodeURIComponent(String(_)),Q=this.V(_);for(_=0;_<Q.length;_++){var x=D;Q[_]!==""&&(x+="="+encodeURIComponent(String(Q[_]))),a.push(x)}}return this.i=a.join("&")};function Gr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Z_(a,h){h&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,_){var x=_.toLowerCase();_!=x&&(Zu(this,_),th(this,x,f))},a)),a.j=h}function ev(a,h){const f=new Ls;if(l.Image){const _=new Image;_.onload=g(jn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=g(jn,f,"TestLoadImage: error",!1,h,_),_.onabort=g(jn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(jn,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function tv(a,h){const f=new Ls,_=new AbortController,x=setTimeout(()=>{_.abort(),jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(D=>{clearTimeout(x),D.ok?jn(f,"TestPingServer: ok",!0,h):jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),jn(f,"TestPingServer: error",!1,h)})}function jn(a,h,f,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(f)}catch{}}function nv(){this.g=new no}function rv(a,h,f){const _=f||"";try{Qu(a,function(x,D){let Q=x;u(x)&&(Q=ut(x)),h.push(_+D+"="+encodeURIComponent(Q))})}catch(x){throw h.push(_+"type="+encodeURIComponent("_badmap")),x}}function uo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(uo,Ka),uo.prototype.g=function(){return new ho(this.l,this.j)},uo.prototype.i=function(a){return function(){return a}}({});function ho(a,h){ue.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ho,ue),t=ho.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,$s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?qs(this):$s(this),this.readyState==3&&nh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,qs(this))},t.Qa=function(a){this.g&&(this.response=a,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,$s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function $s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rh(a){let h="";return te(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function rl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=rh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):$e(a,h,f))}function Ke(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Ke,ue);var sv=/^https?$/i,iv=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ya.g(),this.v=this.o?Vu(this.o):Vu(Ya),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){sh(this,D);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)f.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const D of _.keys())f.set(D,_.get(D));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iv,h,void 0))||_||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Q]of f)this.g.setRequestHeader(D,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ah(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){sh(this,D)}};function sh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ih(a),fo(a)}function ih(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fo(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oh(this):this.bb())},t.bb=function(){oh(this)};function oh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)vt(a.Ea,0,a);else if(ye(a,"readystatechange"),gn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=Q===0){var x=String(a.D).match(Yu)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),_=!sv.test(x?x.toLowerCase():"")}f=_}if(f)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var D=2<gn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",ih(a)}}finally{fo(a)}}}}function fo(a,h){if(a.g){ah(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{f.onreadystatechange=_}catch{}}}function ah(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),$t(h)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ov(a){const h={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(j(a[_]))continue;var f=T(a[_]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}R(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ch(a){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,a),this.cb=Hs("retryDelaySeedMs",1e4,a),this.Wa=Hs("forwardChannelMaxRetries",2,a),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hu(a&&a.concurrentRequestLimit),this.Da=new nv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ch.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){Ct(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=vh(this,null,this.W),mo(this)};function sl(a){if(uh(a),a.G==3){var h=a.U++,f=mn(a.I);if($e(f,"SID",a.K),$e(f,"RID",h),$e(f,"TYPE","terminate"),zs(a,f),h=new Fn(a,a.j,h),h.L=2,h.v=co(mn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=yh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),oo(h)}_h(a)}function po(a){a.g&&(ol(a),a.g.cancel(),a.g=null)}function uh(a){po(a),a.u&&(l.clearTimeout(a.u),a.u=null),go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function mo(a){if(!zu(a.h)&&!a.s){a.s=!0;var h=a.Ga;ie||gt(),me||(ie(),me=!0),Ye.add(h,a),a.B=0}}function av(a,h){return Wu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ms(m(a.Ga,a,h),gh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Fn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=dh(this,x,h),f=mn(this.I),$e(f,"RID",a),$e(f,"CVER",22),this.D&&$e(f,"X-HTTP-Session-Id",this.D),zs(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(rh(D)))+"&"+h:this.m&&rl(f,this.m,D)),nl(this.h,x),this.Ua&&$e(f,"TYPE","init"),this.P?($e(f,"$req",h),$e(f,"SID","null"),x.T=!0,Xa(x,f,null)):Xa(x,f,h),this.G=2}}else this.G==3&&(a?hh(this,a):this.i.length==0||zu(this.h)||hh(this))};function hh(a,h){var f;h?f=h.l:f=a.U++;const _=mn(a.I);$e(_,"SID",a.K),$e(_,"RID",f),$e(_,"AID",a.T),zs(a,_),a.m&&a.o&&rl(_,a.m,a.o),f=new Fn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=dh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),nl(a.h,f),Xa(f,_,h)}function zs(a,h){a.H&&te(a.H,function(f,_){$e(h,_,f)}),a.l&&Qu({},function(f,_){$e(h,_,f)})}function dh(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const Q=["count="+f];D==-1?0<f?(D=x[0].g,Q.push("ofs="+D)):D=0:Q.push("ofs="+D);let Le=!0;for(let ht=0;ht<f;ht++){let xe=x[ht].g;const wt=x[ht].map;if(xe-=D,0>xe)D=Math.max(0,x[ht].g-100),Le=!1;else try{rv(wt,Q,"req"+xe+"_")}catch{_&&_(wt)}}if(Le){_=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function fh(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ie||gt(),me||(ie(),me=!0),Ye.add(h,a),a.v=0}}function il(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ms(m(a.Fa,a),gh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ph(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ms(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),po(this),ph(this))};function ol(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ph(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=mn(a.qa);$e(h,"RID","rpc"),$e(h,"SID",a.K),$e(h,"AID",a.T),$e(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(h,"TO",a.ja),$e(h,"TYPE","xmlhttp"),zs(a,h),a.m&&a.o&&rl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=co(mn(h)),f.m=null,f.P=!0,Bu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,po(this),il(this),Ct(19))};function go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function mh(a,h){var f=null;if(a.g==h){go(a),ol(a),a.g=null;var _=2}else if(tl(a.h,h))f=h.D,Ku(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;_=ro(),ye(_,new Lu(_,f)),mo(a)}else fh(a);else if(x=h.s,x==3||x==0&&0<h.X||!(_==1&&av(a,h)||_==2&&il(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Tr(a,5);break;case 4:Tr(a,10);break;case 3:Tr(a,6);break;default:Tr(a,2)}}}function gh(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Tr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const x=!_;_=new Er(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ao(_,"https"),co(_),x?ev(_.toString(),f):tv(_.toString(),f)}else Ct(2);a.G=0,a.l&&a.l.sa(h),_h(a),uh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function _h(a){if(a.G=0,a.ka=[],a.l){const h=Gu(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function vh(a,h,f){var _=f instanceof Er?mn(f):new Er(f);if(_.g!="")h&&(_.g=h+"."+_.g),lo(_,_.s);else{var x=l.location;_=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new Er(null);_&&ao(D,_),h&&(D.g=h),x&&lo(D,x),f&&(D.l=f),_=D}return f=a.D,h=a.ya,f&&h&&$e(_,f,h),$e(_,"VER",a.la),zs(a,_),_}function yh(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new uo({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _o(){}_o.prototype.g=function(a,h){return new Lt(a,h)};function Lt(a,h){ue.call(this),this.g=new ch(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!j(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Qr(this)}P(Lt,ue),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){sl(this.g)},Lt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ut(a),a=f);h.i.push(new H_(h.Ya++,a)),h.G==3&&mo(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,Lt.aa.N.call(this)};function Eh(a){Ga.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Eh,Ga);function Th(){Qa.call(this),this.status=1}P(Th,Qa);function Qr(a){this.g=a}P(Qr,wh),Qr.prototype.ua=function(){ye(this.g,"a")},Qr.prototype.ta=function(a){ye(this.g,new Eh(a))},Qr.prototype.sa=function(a){ye(this.g,new Th)},Qr.prototype.ra=function(){ye(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,og=function(){return new _o},ig=function(){return ro()},sg=yr,rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,Fo=so,Fu.COMPLETE="complete",rg=Fu,Du.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",ue.prototype.listen=ue.prototype.K,Zs=Du,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,ng=Ke}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const jd="@firebase/firestore";/**
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
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
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
 */let Cs="10.14.0";/**
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
 */const jr=new jc("@firebase/firestore");function Gs(){return jr.logLevel}function ne(t,...e){if(jr.logLevel<=Re.DEBUG){const n=e.map(Zc);jr.debug(`Firestore (${Cs}): ${t}`,...n)}}function Dn(t,...e){if(jr.logLevel<=Re.ERROR){const n=e.map(Zc);jr.error(`Firestore (${Cs}): ${t}`,...n)}}function gs(t,...e){if(jr.logLevel<=Re.WARN){const n=e.map(Zc);jr.warn(`Firestore (${Cs}): ${t}`,...n)}}function Zc(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function Me(t,e){t||pe()}function ve(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class $b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Hb{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new ag(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new bt(e)}}class zb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new Kb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Qb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Qb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ve(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ae($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new it(0,0))}static max(){return new ge(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ge extends Ci{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ae($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const Yb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ci{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return Yb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ae($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ae($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ae($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ae($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Ge.fromString(e))}static fromName(e){return new he(Ge.fromString(e).popFirst(5))}static empty(){return new he(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Ge(e.slice()))}}function Jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new hr(s,he.empty(),e)}function Xb(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ge.min(),he.empty(),-1)}static max(){return new hr(ge.max(),he.empty(),-1)}}function Zb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const eI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==eI)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class eu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}eu.oe=-1;function Va(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function rI(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qd(this.data.getIterator())}getIteratorFrom(e){return new qd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class qd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ug("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const sI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(Me(!!t),typeof t=="string"){let e=0;const n=sI.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nu(t){const e=t.mapValue.fields.__previous_value__;return tu(e)?nu(e):e}function ki(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class iI{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const So={mapValue:{}};function qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tu(t)?4:aI(t)?9007199254740991:oI(t)?10:11:pe()}function fn(t,e){if(t===e)return!0;const n=qr(t);if(n!==qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=dr(s.timestampValue),l=dr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Br(s.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?oa(o)===oa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Bd(o)!==Bd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!fn(o[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function Vi(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=qr(t),r=qr(e);if(n!==r)return Ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return $d(t.timestampValue,e.timestampValue);case 4:return $d(ki(t),ki(e));case 5:return Ve(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Br(i),c=Br(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ve(l[u],c[u]);if(d!==0)return d}return Ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ve(Ze(i.latitude),Ze(o.latitude));return l!==0?l:Ve(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Hd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},g=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=Ve(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Hd(g,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ve(c[p],d[p]);if(m!==0)return m;const g=vs(l[c[p]],u[d[p]]);if(g!==0)return g}return Ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw pe()}}function $d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=dr(t),r=dr(e),s=Ve(n.seconds,r.seconds);return s!==0?s:Ve(n.nanos,r.nanos)}function Hd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=vs(n[s],r[s]);if(i)return i}return Ve(n.length,r.length)}function ys(t){return sc(t)}function sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sc(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function ic(t){return!!t&&"integerValue"in t}function ru(t){return!!t&&"arrayValue"in t}function zd(t){return!!t&&"nullValue"in t}function Wd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function oI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=hi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Uo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ks(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(hi(this.value))}}function hg(t){const e=[];return ks(t.fields,(n,r)=>{const s=new ft([n]);if(Uo(r)){const i=hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
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
 */class Rt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Rt(e,0,ge.min(),ge.min(),ge.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new Rt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Rt(e,2,n,ge.min(),ge.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ge.min(),ge.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function Kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function lI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dg{}class st extends dg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uI(e,n,r):n==="array-contains"?new fI(e,r):n==="in"?new pI(e,r):n==="not-in"?new mI(e,r):n==="array-contains-any"?new gI(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hI(e,r):new dI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&qr(this.value)===qr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends dg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return fg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fg(t){return t.op==="and"}function pg(t){return cI(t)&&fg(t)}function cI(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function oc(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(pg(t))return t.filters.map(e=>oc(e)).join(",");{const e=t.filters.map(n=>oc(n)).join(",");return`${t.op}(${e})`}}function mg(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&fn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&mg(o,s.filters[l]),!0):!1}(t,e):void pe()}function gg(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(gg).join(" ,")+"}"}(t):"Filter"}class uI extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class hI extends st{constructor(e,n){super(e,"in",n),this.keys=_g("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dI extends st{constructor(e,n){super(e,"not-in",n),this.keys=_g("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _g(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class fI extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ru(n)&&Vi(n.arrayValue,this.value)}}class pI extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class mI extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class gI extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ru(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
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
 */class _I{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Qd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _I(t,e,n,r,s,i,o)}function su(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>oc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gd(t.startAt,e.startAt)&&Gd(t.endAt,e.endAt)}function ac(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Da{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vI(t,e,n,r,s,i,o,l){return new Da(t,e,n,r,s,i,o,l)}function Oa(t){return new Da(t)}function Yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yI(t){return t.collectionGroup!==null}function di(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new pt(ft.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new la(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new la(ft.keyField(),r))}return e.ce}function un(t){const e=ve(t);return e.le||(e.le=wI(e,di(t))),e.le}function wI(t,e){if(t.limitType==="F")return Qd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new la(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return Qd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lc(t,e,n){return new Da(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return iu(un(t),un(e))&&t.limitType===e.limitType}function vg(t){return`${su(un(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gg(s)).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Kd(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,di(r),s)||r.endAt&&!function(o,l,c){const u=Kd(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,di(r),s))}(t,e)}function EI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yg(t){return(e,n)=>{let r=!1;for(const s of di(t)){const i=TI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function TI(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?vs(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
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
 */const bI=new We(he.comparator);function On(){return bI}const wg=new We(he.comparator);function ei(...t){let e=wg;for(const n of t)e=e.insert(n.key,n);return e}function Eg(t){let e=wg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return fi()}function Tg(){return fi()}function fi(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const II=new We(he.comparator),AI=new pt(he.comparator);function Ae(...t){let e=AI;for(const n of t)e=e.add(n);return e}const RI=new pt(Ve);function SI(){return RI}/**
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
 */function ou(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function bg(t){return{integerValue:""+t}}function PI(t,e){return rI(e)?bg(e):ou(t,e)}/**
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
 */class La{constructor(){this._=void 0}}function CI(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tu(i)&&(i=nu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?Ag(t,e):t instanceof Oi?Rg(t,e):function(s,i){const o=Ig(s,i),l=Jd(o)+Jd(s.Pe);return ic(o)&&ic(s.Pe)?bg(l):ou(s.serializer,l)}(t,e)}function kI(t,e,n){return t instanceof Di?Ag(t,e):t instanceof Oi?Rg(t,e):n}function Ig(t,e){return t instanceof ua?function(r){return ic(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends La{}class Di extends La{constructor(e){super(),this.elements=e}}function Ag(t,e){const n=Sg(e);for(const r of t.elements)n.some(s=>fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oi extends La{constructor(e){super(),this.elements=e}}function Rg(t,e){let n=Sg(e);for(const r of t.elements)n=n.filter(s=>!fn(s,r));return{arrayValue:{values:n}}}class ua extends La{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jd(t){return Ze(t.integerValue||t.doubleValue)}function Sg(t){return ru(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Oi&&s instanceof Oi?_s(r.elements,s.elements,fn):r instanceof ua&&s instanceof ua?fn(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class VI{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function Pg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,kn.none()):new Xi(t.key,t.data,kn.none());{const n=t.data,r=zt.empty();let s=new pt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new Qt(s.toArray()),kn.none())}}function DI(t,e,n){t instanceof Xi?function(s,i,o){const l=s.value.clone(),c=Zd(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(s,i,o){if(!jo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Zd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Cg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,r){return t instanceof Xi?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=i.value.clone(),d=ef(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,o,l,c){if(!jo(i.precondition,o))return l;const u=ef(i.fieldTransforms,c,o),d=o.data;return d.setAll(Cg(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return jo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function OI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ig(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function Xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_s(r,s,(i,o)=>xI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends Fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends Fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zd(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,kI(o,l,n[s]))}return r}function ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CI(i,o,e))}return r}class kg extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NI extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&DI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Pg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>Xd(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>Xd(n,r))}}class au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return II}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new au(e,n,r,s)}}/**
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
 */class LI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Ce;function UI(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function xg(t){if(t===void 0)return Dn("GRPC error has no .code"),$.UNKNOWN;switch(t){case tt.OK:return $.OK;case tt.CANCELLED:return $.CANCELLED;case tt.UNKNOWN:return $.UNKNOWN;case tt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case tt.INTERNAL:return $.INTERNAL;case tt.UNAVAILABLE:return $.UNAVAILABLE;case tt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case tt.NOT_FOUND:return $.NOT_FOUND;case tt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case tt.ABORTED:return $.ABORTED;case tt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case tt.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Ce=tt||(tt={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jI(){return new TextEncoder}/**
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
 */const BI=new Or([4294967295,4294967295],0);function tf(t){const e=jI().encode(t),n=new tg;return n.update(e),new Uint8Array(n.digest())}function nf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class lu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Or.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(BI)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tf(e),[r,s]=nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=tf(e),[r,s]=nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ua{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ua(ge.min(),s,new We(Ve),On(),Ae())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,Ae(),Ae(),Ae())}}/**
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
 */class Bo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vg{constructor(e,n){this.targetId=e,this.me=n}}class Dg{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rf{constructor(){this.fe=0,this.ge=of(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new Zi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=of()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class qI{constructor(e){this.Le=e,this.Be=new Map,this.ke=On(),this.qe=sf(),this.Qe=new We(Ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ac(i))if(r===0){const o=new he(i.path);this.Ue(n,o,Rt.newNoDocument(o,ge.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Br(r).toUint8Array()}catch(c){if(c instanceof ug)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new lu(o,s,i)}catch(c){return gs(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&ac(l.target)){const c=new he(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Rt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ae();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ua(e,n,this.Qe,this.ke,r);return this.ke=On(),this.qe=sf(),this.Qe=new We(Ve),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(Ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sf(){return new We(he.comparator)}function of(){return new We(he.comparator)}const $I={asc:"ASCENDING",desc:"DESCENDING"},HI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zI={and:"AND",or:"OR"};class WI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cc(t,e){return t.useProto3Json||Va(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KI(t,e){return ha(t,e.toTimestamp())}function hn(t){return Me(!!t),ge.fromTimestamp(function(n){const r=dr(n);return new it(r.seconds,r.nanos)}(t))}function cu(t,e){return uc(t,e).canonicalString()}function uc(t,e){const n=function(s){return new Ge(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ng(t){const e=Ge.fromString(t);return Me(jg(e)),e}function hc(t,e){return cu(t.databaseId,e.path)}function Sl(t,e){const n=Ng(e);if(n.get(1)!==t.databaseId.projectId)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ae($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Lg(n))}function Mg(t,e){return cu(t.databaseId,e)}function GI(t){const e=Ng(t);return e.length===4?Ge.emptyPath():Lg(e)}function dc(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lg(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function af(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function QI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:xg(u.code);return new ae(d,u.message||"")}(o);n=new Dg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Sl(t,r.document.name),i=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):ge.min(),l=new zt({mapValue:{fields:r.document.fields}}),c=Rt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Bo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Sl(t,r.document),i=r.readTime?hn(r.readTime):ge.min(),o=Rt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Bo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Sl(t,r.document),i=r.removedTargetIds||[];n=new Bo([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FI(s,i),l=r.targetId;n=new Vg(l,o)}}return n}function YI(t,e){let n;if(e instanceof Xi)n={update:af(t,e.key,e.value)};else if(e instanceof kg)n={delete:hc(t,e.key)};else if(e instanceof zr)n={update:af(t,e.key,e.data),updateMask:iA(e.fieldMask)};else{if(!(e instanceof NI))return pe();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:KI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function JI(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?hn(s.updateTime):hn(i);return o.isEqual(ge.min())&&(o=hn(i)),new VI(o,s.transformResults||[])}(n,e))):[]}function XI(t,e){return{documents:[Mg(t,e.path)]}}function ZI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mg(t,s);const i=function(u){if(u.length!==0)return Ug(pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:ts(m.field),direction:nA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function eA(t){let e=GI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Fg(p);return m instanceof pn&&pg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new la(ns(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Va(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,g=p.values||[];return new aa(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,g=p.values||[];return new aa(g,m)}(n.endAt)),vI(e,s,o,i,l,"F",c,u)}function tA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return st.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>Fg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function nA(t){return $I[t]}function rA(t){return HI[t]}function sA(t){return zI[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return ft.fromServerFormat(t.fieldPath)}function Ug(t){return t instanceof st?function(n){if(n.op==="=="){if(Wd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(zd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(zd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:rA(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>Ug(s));return r.length===1?r[0]:{compositeFilter:{op:sA(n.op),filters:r}}}(t):pe()}function iA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zn{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class oA{constructor(e){this.ct=e}}function aA(t){const e=eA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
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
 */class lA{constructor(){this.un=new cA}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(hr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class cA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(Ge.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(Ge.comparator)).toArray()}}/**
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
 */class uA{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&pi(r.mutation,s,Qt.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ei();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=On();const o=fi(),l=function(){return fi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof zr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),pi(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new hA(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new We((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Qt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Tg();d.forEach(m=>{if(!i.has(m)){const g=Pg(n.get(m),r.get(m));g!==null&&p.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):yI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(kr());let l=-1,c=i;return o.next(u=>q.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(d=>({batchId:l,changes:Eg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ei();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,m){return new Da(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Rt.newInvalidDocument(d)))});let l=ei();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&pi(d.mutation,u,Qt.empty(),it.now()),Ma(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class fA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:aA(s.bundledQuery),readTime:hn(s.readTime)}}(n)),q.resolve()}}/**
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
 */class pA{constructor(){this.overlays=new We(he.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new he(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=kr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=kr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return q.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LI(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ae(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class mA{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class uu{constructor(){this.Tr=new pt(ot.Er),this.dr=new pt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new Ge([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new Ge([])),r=new ot(n,e),s=new ot(n,e+1);let i=Ae();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||Ve(e.wr,n.wr)}static Ar(e,n){return Ve(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
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
 */class gA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(ot.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MI(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Ve);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),q.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ot(new he(i),0);let l=new pt(Ve);return this.br.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.wr)),!0)},o),q.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return q.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),s=this.br.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _A{constructor(e){this.Mr=e,this.docs=function(){return new We(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=On();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=On();const o=n.path,l=new he(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Zb(Xb(d),r)<=0||(s.has(d.key)||Ma(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vA(this)}getSize(e){return q.resolve(this.size)}}class vA extends uA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class yA{constructor(e){this.persistence=e,this.Nr=new xs(n=>su(n),iu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uu,this.targetCount=0,this.kr=ws.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
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
 */class wA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new eu(0),this.Kr=!1,this.Kr=!0,this.$r=new mA,this.referenceDelegate=e(this),this.Ur=new yA(this),this.indexManager=new lA,this.remoteDocumentCache=function(s){return new _A(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new oA(n),this.Gr=new fA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new gA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new EA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return q.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class EA extends tI{constructor(e){super(),this.currentSequenceNumber=e}}class hu{constructor(e){this.persistence=e,this.Jr=new uu,this.Yr=null}static Zr(e){return new hu(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class du{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new du(e,n.fromCache,r,s)}}/**
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
 */class TA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return f0()?8:nI(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new TA;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Gs()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Gs()<=Re.DEBUG&&ne("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Gs()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):q.resolve())}Yi(e,n){if(Yd(n))return q.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=lc(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,lc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,r,s){return Yd(n)||s.isEqual(ge.min())?q.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?q.resolve(null):(Gs()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.rs(e,o,n,Jb(s,-1)).next(l=>l))})}ts(e,n){let r=new pt(yg(e));return n.forEach((s,i)=>{Ma(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Gs()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",es(n)),this.Ji.getDocumentsMatchingQuery(e,n,hr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class IA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Ve),this._s=new xs(i=>su(i),iu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function AA(t,e,n,r){return new IA(t,e,n,r)}async function Bg(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function RA(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let g=q.resolve();return m.forEach(P=>{g=g.next(()=>d.getEntry(c,P)).next(k=>{const V=u.docVersions.get(P);Me(V!==null),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qg(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function SA(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(p,g),function(k,V,U){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,g,d)&&l.push(n.Ur.updateTargetData(i,g))});let c=On(),u=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(PA(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!r.isEqual(ge.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=s,i))}function PA(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=On();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function CA(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kA(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function fc(t,e,n){const r=ve(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function lf(t,e,n){const r=ve(t);let s=ge.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ve(c),m=p._s.get(d);return m!==void 0?q.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Ae())).next(l=>(xA(r,EI(e),l),{documents:l,Ts:i})))}function xA(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class cf{constructor(){this.activeTargetIds=SI()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VA{constructor(){this.so=new cf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DA{_o(e){}shutdown(){}}/**
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
 */class uf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Po=null;function Pl(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
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
 */const OA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class NA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Tt="WebChannelConnection";class MA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Pl(),c=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw gs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=OA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Pl();return new Promise((o,l)=>{const c=new ng;c.setWithCredentials(!0),c.listenOnce(rg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fo.NO_ERROR:const d=c.getResponseJson();ne(Tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Fo.TIMEOUT:ne(Tt,`RPC '${e}' ${i} timed out`),l(new ae($.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const p=c.getStatus();if(ne(Tt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const P=function(V){const U=V.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(U)>=0?U:$.UNKNOWN}(g.status);l(new ae(P,g.message))}else l(new ae($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ae($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{ne(Tt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(Tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Pl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=og(),l=ig(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(Tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,g=!1;const P=new NA({Io:V=>{g?ne(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(ne(Tt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(Tt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},To:()=>p.close()}),k=(V,U,j)=>{V.listen(U,F=>{try{j(F)}catch(B){setTimeout(()=>{throw B},0)}})};return k(p,Zs.EventType.OPEN,()=>{g||(ne(Tt,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),k(p,Zs.EventType.CLOSE,()=>{g||(g=!0,ne(Tt,`RPC '${e}' stream ${s} transport closed`),P.So())}),k(p,Zs.EventType.ERROR,V=>{g||(g=!0,gs(Tt,`RPC '${e}' stream ${s} transport errored:`,V),P.So(new ae($.UNAVAILABLE,"The operation could not be completed")))}),k(p,Zs.EventType.MESSAGE,V=>{var U;if(!g){const j=V.data[0];Me(!!j);const F=j,B=F.error||((U=F[0])===null||U===void 0?void 0:U.error);if(B){ne(Tt,`RPC '${e}' stream ${s} received error:`,B);const Z=B.status;let te=function(y){const A=tt[y];if(A!==void 0)return xg(A)}(Z),R=B.message;te===void 0&&(te=$.INTERNAL,R="Unknown error status: "+Z+" with message "+B.message),g=!0,P.So(new ae(te,R)),p.close()}else ne(Tt,`RPC '${e}' stream ${s} received:`,j),P.bo(j)}}),k(l,sg.STAT_EVENT,V=>{V.stat===rc.PROXY?ne(Tt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===rc.NOPROXY&&ne(Tt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Cl(){return typeof document<"u"?document:null}/**
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
 */function ja(t){return new WI(t,!0)}/**
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
 */class $g{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Hg{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $g(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ae($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class LA extends Hg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=QI(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?hn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=ac(c)?{documents:XI(i,c)}:{query:ZI(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Og(i,o.resumeToken);const u=cc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=ha(i,o.snapshotVersion.toTimestamp());const u=cc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=tA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dc(this.serializer),n.removeTarget=e,this.a_(n)}}class FA extends Hg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=JI(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>YI(this.serializer,r))};this.a_(n)}}/**
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
 */class UA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,uc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ae($.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,uc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ae($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class jA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Dn(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class BA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.L_.add(4),await eo(u),u.q_.set("Unknown"),u.L_.delete(4),await Ba(u)}(this))})}),this.q_=new jA(r,s)}}async function Ba(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function eo(t){for(const e of t.B_)await e(!1)}function zg(t,e){const n=ve(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),gu(n)?mu(n):Vs(n).r_()&&pu(n,e))}function fu(t,e){const n=ve(t),r=Vs(n);n.N_.delete(e),r.r_()&&Wg(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function pu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).A_(e)}function Wg(t,e){t.Q_.xe(e),Vs(t).R_(e)}function mu(t){t.Q_=new qI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.q_.v_()}function gu(t){return Wr(t)&&!Vs(t).n_()&&t.N_.size>0}function Wr(t){return ve(t).L_.size===0}function Kg(t){t.Q_=void 0}async function qA(t){t.q_.set("Online")}async function $A(t){t.N_.forEach((e,n)=>{pu(t,e)})}async function HA(t,e){Kg(t),gu(t)?(t.q_.M_(e),mu(t)):t.q_.set("Unknown")}async function zA(t,e,n){if(t.q_.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof Bo?t.Q_.Ke(e):e instanceof Vg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await qg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),Wg(i,c);const p=new Zn(d.target,c,u,d.sequenceNumber);pu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Ji(e))throw e;t.L_.add(1),await eo(t),t.q_.set("Offline"),n||(n=()=>qg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ba(t)})}function Gg(t,e){return e().catch(n=>da(t,n,e))}async function qa(t){const e=ve(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;WA(e);)try{const s=await CA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,KA(e,s)}catch(s){await da(e,s)}Qg(e)&&Yg(e)}function WA(t){return Wr(t)&&t.O_.length<10}function KA(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Qg(t){return Wr(t)&&!fr(t).n_()&&t.O_.length>0}function Yg(t){fr(t).start()}async function GA(t){fr(t).p_()}async function QA(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function YA(t,e,n){const r=t.O_.shift(),s=au.from(r,e,n);await Gg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qa(t)}async function JA(t,e){e&&fr(t).V_&&await async function(r,s){if(function(o){return UI(o)&&o!==$.ABORTED}(s.code)){const i=r.O_.shift();fr(r).s_(),await Gg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qa(r)}}(t,e),Qg(t)&&Yg(t)}async function hf(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await eo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ba(n)}async function XA(t,e){const n=ve(t);e?(n.L_.delete(2),await Ba(n)):e||(n.L_.add(2),await eo(n),n.q_.set("Unknown"))}function Vs(t){return t.K_||(t.K_=function(n,r,s){const i=ve(n);return i.w_(),new LA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:qA.bind(null,t),Ro:$A.bind(null,t),mo:HA.bind(null,t),d_:zA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),gu(t)?mu(t):t.q_.set("Unknown")):(await t.K_.stop(),Kg(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,s){const i=ve(n);return i.w_(),new FA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:GA.bind(null,t),mo:JA.bind(null,t),f_:QA.bind(null,t),g_:YA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await qa(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class _u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _u(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vu(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Ji(t))return new ae($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class df{constructor(){this.W_=new We(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Es(e,n,fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Na(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ZA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class e1{constructor(){this.queries=ff(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=ff(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ae($.ABORTED,"Firestore shutting down"))}}function ff(){return new xs(t=>vg(t),Na)}async function Jg(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new ZA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vu(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&yu(n)}async function Xg(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function t1(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&yu(n)}function n1(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function yu(t){t.Y_.forEach(e=>{e.next()})}var pc,pf;(pf=pc||(pc={})).ea="default",pf.Cache="cache";class Zg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==pc.Cache}}/**
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
 */class e_{constructor(e){this.key=e}}class t_{constructor(e){this.key=e}}class r1{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ae(),this.mutatedKeys=Ae(),this.Aa=yg(e),this.Ra=new fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new df,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),g=Ma(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let V=!1;m&&g?m.data.isEqual(g.data)?P!==k&&(r.track({type:3,doc:g}),V=!0):this.ga(m,g)||(r.track({type:2,doc:g}),V=!0,(c&&this.Aa(g,c)>0||u&&this.Aa(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),V=!0):m&&!g&&(r.track({type:1,doc:m}),V=!0,(c||u)&&(l=!0)),V&&(g?(o=o.add(g),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(g,P){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(g)-k(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new Es(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new df,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ae(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new t_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new e_(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ae();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class s1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class i1{constructor(e){this.key=e,this.va=!1}}class o1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xs(l=>vg(l),Na),this.Ma=new Map,this.xa=new Set,this.Oa=new We(he.comparator),this.Na=new Map,this.La=new uu,this.Ba={},this.ka=new Map,this.qa=ws.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function a1(t,e,n=!0){const r=a_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await n_(r,e,n,!0),s}async function l1(t,e){const n=a_(t);await n_(n,e,!0,!1)}async function n_(t,e,n,r){const s=await kA(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await c1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zg(t.remoteStore,s),l}async function c1(t,e,n,r,s){t.Ka=(p,m,g)=>async function(k,V,U,j){let F=V.view.ma(U);F.ns&&(F=await lf(k.localStore,V.query,!1).then(({documents:R})=>V.view.ma(R,F)));const B=j&&j.targetChanges.get(V.targetId),Z=j&&j.targetMismatches.get(V.targetId)!=null,te=V.view.applyChanges(F,k.isPrimaryClient,B,Z);return gf(k,V.targetId,te.wa),te.snapshot}(t,p,m,g);const i=await lf(t.localStore,e,!0),o=new r1(e,i.Ts),l=o.ma(i.documents),c=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);gf(t,n,u.wa);const d=new s1(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function u1(t,e,n){const r=ve(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Na(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await fc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fu(r.remoteStore,s.targetId),mc(r,s.targetId)}).catch(Yi)):(mc(r,s.targetId),await fc(r.localStore,s.targetId,!0))}async function h1(t,e){const n=ve(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fu(n.remoteStore,r.targetId))}async function d1(t,e,n){const r=y1(t);try{const s=await function(o,l){const c=ve(o),u=it.now(),d=l.reduce((g,P)=>g.add(P.key),Ae());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let P=On(),k=Ae();return c.cs.getEntries(g,d).next(V=>{P=V,P.forEach((U,j)=>{j.isValidDocument()||(k=k.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,P)).next(V=>{p=V;const U=[];for(const j of l){const F=OI(j,p.get(j.key).overlayedDocument);F!=null&&U.push(new zr(j.key,F,hg(F.value.mapValue),kn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,U,l)}).next(V=>{m=V;const U=V.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(g,V.batchId,U)})}).then(()=>({batchId:m.batchId,changes:Eg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new We(Ve)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await to(r,s.changes),await qa(r.remoteStore)}catch(s){const i=vu(s,"Failed to persist write");n.reject(i)}}async function r_(t,e){const n=ve(t);try{const r=await SA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Me(o.va):s.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function mf(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&yu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f1(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(he.comparator);o=o.insert(i,Rt.newNoDocument(i,ge.min()));const l=Ae().add(i),c=new Ua(ge.min(),new Map,new We(Ve),o,l);await r_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),wu(r)}else await fc(r.localStore,e,!1).then(()=>mc(r,e,n)).catch(Yi)}async function p1(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await RA(n.localStore,e);i_(n,r,null),s_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function m1(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);i_(r,e,n),s_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function s_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function i_(t,e,n){const r=ve(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function mc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||o_(t,r)})}function o_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(fu(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),wu(t))}function gf(t,e,n){for(const r of n)r instanceof e_?(t.La.addReference(r.key,e),g1(t,r)):r instanceof t_?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||o_(t,r.key)):pe()}function g1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),wu(t))}function wu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he(Ge.fromString(e)),r=t.qa.next();t.Na.set(r,new i1(n)),t.Oa=t.Oa.insert(n,r),zg(t.remoteStore,new Zn(un(Oa(n.path)),r,"TargetPurposeLimboResolution",eu.oe))}}async function to(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=du.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.$i,g=>d.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>q.forEach(m.Ui,g=>d.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Ji(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const g=d.os.get(m),P=g.snapshotVersion,k=g.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(m,k)}}}(r.localStore,i))}async function _1(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await Bg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ae($.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.hs)}}function v1(t,e){const n=ve(t),r=n.Na.get(e);if(r&&r.va)return Ae().add(r.key);{let s=Ae();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function a_(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f1.bind(null,e),e.Ca.d_=t1.bind(null,e.eventManager),e.Ca.$a=n1.bind(null,e.eventManager),e}function y1(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=p1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=m1.bind(null,e),e}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return AA(this.persistence,new bA,e.initialUser,this.serializer)}Ga(e){return new wA(hu.Zr,this.serializer)}Wa(e){return new VA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class gc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_1.bind(null,this.syncEngine),await XA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new e1}()}createDatastore(e){const n=ja(e.databaseInfo.databaseId),r=function(i){return new MA(i)}(e.databaseInfo);return function(i,o,l,c){return new UA(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new BA(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>mf(this.syncEngine,n,0),function(){return uf.D()?new uf:new DA}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new o1(s,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);ne("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await eo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}gc.provider={build:()=>new gc};/**
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
 */class l_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class w1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=lg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kl(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await E1(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hf(e.remoteStore,s)),t._onlineComponents=e}async function E1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await kl(t,new fa)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await kl(t,new fa);return t._offlineComponents}async function c_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await _f(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await _f(t,new gc))),t._onlineComponents}function T1(t){return c_(t).then(e=>e.syncEngine)}async function _c(t){const e=await c_(t),n=e.eventManager;return n.onListen=a1.bind(null,e.syncEngine),n.onUnlisten=u1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=l1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=h1.bind(null,e.syncEngine),n}function b1(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new l_({next:m=>{d.Za(),o.enqueueAndForget(()=>Xg(i,p));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new ae($.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new ae($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Zg(Oa(l.path),d,{includeMetadataChanges:!0,_a:!0});return Jg(i,p)}(await _c(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function I1(t,e,n){if(!n)throw new ae($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function A1(t,e,n,r){if(e===!0&&r===!0)throw new ae($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yf(t){if(!he.isDocumentKey(t))throw new ae($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ae($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new ae($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ae($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ae($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=u_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ae($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qb;switch(r.type){case"firstParty":return new Wb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ae($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vf.get(n);r&&(ne("ComponentProvider","Removing Datastore"),vf.delete(n),r.terminate())}(this),Promise.resolve()}}function R1(t,e,n,r={}){var s;const i=(t=or(t,Tu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=bt.MOCK_USER;else{l=o0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ae($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(u)}t._authCredentials=new $b(new ag(l,c))}}/**
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
 */class $a{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $a(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ni(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Ni extends $a{constructor(e,n,r){super(e,n,Oa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new he(e))}withConverter(e){return new Ni(this.firestore,e,this._path)}}function ar(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=lg.newId()),I1("doc","path",e),t instanceof Tu){const r=Ge.fromString(e,...n);return yf(r),new Bt(t,null,new he(r))}{if(!(t instanceof Bt||t instanceof Ni))throw new ae($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return yf(r),new Bt(t.firestore,t instanceof Ni?t.converter:null,new he(r))}}/**
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
 */class Ef{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $g(this,"async_queue_retry"),this.Vu=()=>{const r=Cl();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ir;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=_u.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&pe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Tf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Mi extends Tu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ef,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ef(e),this._firestoreClient=void 0,await e}}}function S1(t,e){const n=typeof t=="object"?t:gm(),r=typeof t=="string"?t:"(default)",s=qc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=s0("firestore");i&&R1(s,...i)}return s}function bu(t){if(t._terminated)throw new ae($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||P1(t),t._firestoreClient}function P1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new iI(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,u_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new w1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(mt.fromBase64String(e))}catch(n){throw new ae($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ae($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Au{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ae($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ae($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
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
 */const C1=/^__.*__$/;class k1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}function d_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Su{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return pa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(d_(this.Cu)&&C1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class x1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ja(e)}Qu(e,n,r,s=!1){return new Su({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V1(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new x1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function D1(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);g_("Data must be an object, but it was:",o,r);const l=p_(r,o);let c,u;if(i.merge)c=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=O1(e,p,n);if(!o.contains(m))throw new ae($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);M1(d,m)||d.push(m)}c=new Qt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new k1(new zt(l),c,u)}function f_(t,e){if(m_(t=Mt(t)))return g_("Unsupported field value:",e,t),p_(t,e);if(t instanceof h_)return function(r,s){if(!d_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=f_(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof Au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:Og(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ru)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ou(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Eu(r)}`)}(t,e)}function p_(t,e){const n={};return cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,(r,s)=>{const i=f_(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function m_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof Au||t instanceof Ts||t instanceof Bt||t instanceof h_||t instanceof Ru)}function g_(t,e,n){if(!m_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Eu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function O1(t,e,n){if((e=Mt(e))instanceof Iu)return e._internalPath;if(typeof e=="string")return __(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const N1=new RegExp("[~\\*/\\[\\]]");function __(t,e,n){if(e.search(N1)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Iu(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ae($.INVALID_ARGUMENT,l+t+c)}function M1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class v_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new L1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(y_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class L1 extends v_{data(){return super.data()}}function y_(t,e){return typeof e=="string"?__(t,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}/**
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
 */function F1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ae($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class U1{convertValue(e,n="none"){switch(qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ks(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Ru(i)}convertGeoPoint(e){return new Au(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=dr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Me(jg(r));const s=new xi(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function j1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w_ extends v_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(y_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends w_{data(e={}){return super.data(e)}}class B1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ae($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ni(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:q1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function q1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function Pu(t){t=or(t,Bt);const e=or(t.firestore,Mi);return b1(bu(e),t._key).then(n=>T_(e,t,n))}class E_ extends U1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function ma(t,e,n){t=or(t,Bt);const r=or(t.firestore,Mi),s=j1(t.converter,e);return H1(r,[D1(V1(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kn.none())])}function $1(t,...e){var n,r,s;t=Mt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Tf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Tf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Bt)u=or(t.firestore,Mi),d=Oa(t._key.path),c={next:p=>{e[o]&&e[o](T_(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=or(t,$a);u=or(p.firestore,Mi),d=p._query;const m=new E_(u);c={next:g=>{e[o]&&e[o](new B1(u,m,p,g))},error:e[o+1],complete:e[o+2]},F1(t._query)}return function(m,g,P,k){const V=new l_(k),U=new Zg(g,V,P);return m.asyncQueue.enqueueAndForget(async()=>Jg(await _c(m),U)),()=>{V.Za(),m.asyncQueue.enqueueAndForget(async()=>Xg(await _c(m),U))}}(bu(u),d,l,c)}function H1(t,e){return function(r,s){const i=new ir;return r.asyncQueue.enqueueAndForget(async()=>d1(await T1(r),s,i)),i.promise}(bu(t),e)}function T_(t,e,n){const r=n.docs.get(e._key),s=new E_(t);return new w_(t,s,e._key,r,new ni(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Cs=s})(Ss),ms(new Lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Mi(new Hb(r.getProvider("auth-internal")),new Gb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ae($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),sr(jd,"4.7.3",e),sr(jd,"4.7.3","esm2017")})();const z1={apiKey:"AIzaSyCF6ycf52hW9Ypz9Vw-OHH0LuZ2-J4t6sM",authDomain:"ubicacion-faf91.firebaseapp.com",projectId:"ubicacion-faf91",storageBucket:"ubicacion-faf91.firebasestorage.app",messagingSenderId:"87507844915",appId:"1:87507844915:web:60039ca325721053cac846",measurementId:"G-29NFK6PEW3"},b_=mm(z1),St=jb(b_),lr=S1(b_),Ha=Yw("user",()=>{const t=Te(null),e=Te(null),n=Te(!1),r=Te(null),s=Qe(()=>!!t.value),i=Qe(()=>{var g;return((g=e.value)==null?void 0:g.dispositivoID)||null}),o=async g=>{try{n.value=!0,r.value=null;const P=await Pu(ar(lr,"usuarios",g));P.exists()?(e.value=P.data(),localStorage.setItem("dispositivoID",e.value.dispositivoID)):e.value=null}catch(P){console.error("Error fetching user data:",P),r.value=P.message}finally{n.value=!1}},l=async(g,P)=>{try{n.value=!0,r.value=null;const k=await ST(St,g,P);return t.value=k.user,await o(t.value.uid),{success:!0}}catch(k){return console.error("Login error:",k),r.value=m(k.code),{success:!1,error:r.value}}finally{n.value=!1}},c=async(g,P,k)=>{try{n.value=!0,r.value=null;const V=p(),U=await $m(St,P,k);return t.value=U.user,await ma(ar(lr,"usuarios",t.value.uid),{nombre:g,email:P,dispositivoID:V,fechaRegistro:new Date}),await ma(ar(lr,"ubicaciones",V),{latitud:0,longitud:0,ultimaActualizacion:new Date,usuario:t.value.uid}),await o(t.value.uid),{success:!0,deviceId:V}}catch(V){return console.error("Registration error:",V),r.value=m(V.code),{success:!1,error:r.value}}finally{n.value=!1}},u=async()=>{try{return n.value=!0,r.value=null,await Hm(St),t.value=null,e.value=null,localStorage.removeItem("dispositivoID"),{success:!0}}catch(g){return console.error("Logout error:",g),r.value=g.message,{success:!1,error:r.value}}finally{n.value=!1}},d=async()=>{t.value=St.currentUser,t.value&&await o(t.value.uid)},p=()=>{const g="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let P="";for(let k=0;k<6;k++)P+=g.charAt(Math.floor(Math.random()*g.length));return P},m=g=>{switch(g){case"auth/invalid-credential":return"Correo o contraseña incorrectos";case"auth/user-not-found":return"No existe una cuenta con este correo";case"auth/wrong-password":return"Contraseña incorrecta";case"auth/too-many-requests":return"Demasiados intentos fallidos. Intenta más tarde";case"auth/email-already-in-use":return"Este correo ya está registrado";case"auth/invalid-email":return"Correo electrónico inválido";case"auth/weak-password":return"La contraseña es demasiado débil. Mínimo 6 caracteres";default:return"Error de autenticación. Intenta nuevamente"}};return{user:t,userData:e,loading:n,error:r,isAuthenticated:s,deviceId:i,login:l,register:c,logout:u,fetchUserData:o,init:d}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function I_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function W1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&I_(t.default)}const De=Object.assign;function xl(t,e){const n={};for(const r in e){const s=e[r];n[r]=tn(s)?s.map(t):t(s)}return n}const mi=()=>{},tn=Array.isArray,A_=/#/g,K1=/&/g,G1=/\//g,Q1=/=/g,Y1=/\?/g,R_=/\+/g,J1=/%5B/g,X1=/%5D/g,S_=/%5E/g,Z1=/%60/g,P_=/%7B/g,eR=/%7C/g,C_=/%7D/g,tR=/%20/g;function Cu(t){return encodeURI(""+t).replace(eR,"|").replace(J1,"[").replace(X1,"]")}function nR(t){return Cu(t).replace(P_,"{").replace(C_,"}").replace(S_,"^")}function vc(t){return Cu(t).replace(R_,"%2B").replace(tR,"+").replace(A_,"%23").replace(K1,"%26").replace(Z1,"`").replace(P_,"{").replace(C_,"}").replace(S_,"^")}function rR(t){return vc(t).replace(Q1,"%3D")}function sR(t){return Cu(t).replace(A_,"%23").replace(Y1,"%3F")}function iR(t){return t==null?"":sR(t).replace(G1,"%2F")}function Li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oR=/\/$/,aR=t=>t.replace(oR,"");function Vl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=hR(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Li(o)}}function lR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&bs(e.matched[r],n.matched[s])&&k_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uR(t[n],e[n]))return!1;return!0}function uR(t,e){return tn(t)?If(t,e):tn(e)?If(e,t):t===e}function If(t,e){return tn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gi||(gi={}));function dR(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aR(t)}const fR=/^[^#]+#/;function pR(t,e){return t.replace(fR,"#")+e}function mR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const za=()=>({left:window.scrollX,top:window.scrollY});function gR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Af(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function _R(t,e){yc.set(t,e)}function vR(t){const e=yc.get(t);return yc.delete(t),e}let yR=()=>location.protocol+"//"+location.host;function x_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),bf(c,"")}return bf(n,t)+r+s}function wR(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=x_(t,location),P=n.value,k=e.value;let V=0;if(m){if(n.value=g,e.value=m,o&&o===P){o=null;return}V=k?m.position-k.position:0}else r(g);s.forEach(U=>{U(n.value,P,{delta:V,type:Fi.pop,direction:V?V>0?gi.forward:gi.back:gi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:za()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Rf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?za():null}}function ER(t){const{history:e,location:n}=window,r={value:x_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:yR()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,Rf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:za()});i(d.current,d,!0);const p=De({},Rf(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function TR(t){t=dR(t);const e=ER(t),n=wR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:pR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bR(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const D_=Symbol("");var Sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sf||(Sf={}));function Is(t,e){return De(new Error,{type:t,[D_]:!0},e)}function yn(t,e){return t instanceof Error&&D_ in t&&(e==null||!!(t.type&e))}const Pf="[^/]+?",IR={sensitive:!1,strict:!1,start:!0,end:!0},AR=/[.+*?^${}()[\]/\\]/g;function RR(t,e){const n=De({},IR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(AR,"\\$&"),g+=40;else if(m.type===1){const{value:P,repeatable:k,optional:V,regexp:U}=m;i.push({name:P,repeatable:k,optional:V});const j=U||Pf;if(j!==Pf){g+=10;try{new RegExp(`(${j})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+B.message)}}let F=k?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(F=V&&u.length<2?`(?:/${F})`:"/"+F),V&&(F+="?"),s+=F,g+=20,V&&(g+=-8),k&&(g+=-20),j===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",P=i[m-1];p[P.name]=g&&P.repeatable?g.split("/"):g}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:P,repeatable:k,optional:V}=g,U=P in u?u[P]:"";if(tn(U)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=tn(U)?U.join("/"):U;if(!j)if(V)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function SR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function O_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Cf(r))return 1;if(Cf(s))return-1}return s.length-r.length}function Cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PR={type:0,value:""},CR=/[a-zA-Z0-9_]/;function kR(t){if(!t)return[[]];if(t==="/")return[[PR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:CR.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function xR(t,e,n){const r=RR(kR(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function VR(t,e){const n=[],r=new Map;e=Df({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,g){const P=!g,k=xf(p);k.aliasOf=g&&g.record;const V=Df(e,p),U=[k];if("alias"in p){const B=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of B)U.push(xf(De({},k,{components:g?g.record.components:k.components,path:Z,aliasOf:g?g.record:k})))}let j,F;for(const B of U){const{path:Z}=B;if(m&&Z[0]!=="/"){const te=m.record.path,R=te[te.length-1]==="/"?"":"/";B.path=m.record.path+(Z&&R+Z)}if(j=xR(B,m,V),g?g.alias.push(j):(F=F||j,F!==j&&F.alias.push(j),P&&p.name&&!Vf(j)&&o(p.name)),N_(j)&&c(j),k.children){const te=k.children;for(let R=0;R<te.length;R++)i(te[R],j,g&&g.children[R])}g=g||j}return F?()=>{o(F)}:mi}function o(p){if(V_(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=NR(p,n);n.splice(m,0,p),p.record.name&&!Vf(p)&&r.set(p.record.name,p)}function u(p,m){let g,P={},k,V;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw Is(1,{location:p});V=g.record.name,P=De(kf(m.params,g.keys.filter(F=>!F.optional).concat(g.parent?g.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&kf(p.params,g.keys.map(F=>F.name))),k=g.stringify(P)}else if(p.path!=null)k=p.path,g=n.find(F=>F.re.test(k)),g&&(P=g.parse(k),V=g.record.name);else{if(g=m.name?r.get(m.name):n.find(F=>F.re.test(m.path)),!g)throw Is(1,{location:p,currentLocation:m});V=g.record.name,P=De({},m.params,p.params),k=g.stringify(P)}const U=[];let j=g;for(;j;)U.unshift(j.record),j=j.parent;return{name:V,path:k,params:P,matched:U,meta:OR(U)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function kf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:DR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function DR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Vf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OR(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function NR(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;O_(t,e[i])<0?r=i:n=i+1}const s=MR(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function MR(t){let e=t;for(;e=e.parent;)if(N_(e)&&O_(t,e)===0)return e}function N_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(R_," "),o=i.indexOf("="),l=Li(o<0?i:i.slice(0,o)),c=o<0?null:Li(i.slice(o+1));if(l in e){let u=e[l];tn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=rR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(tn(r)?r.map(i=>i&&vc(i)):[r&&vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=tn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const UR=Symbol(""),Nf=Symbol(""),Wa=Symbol(""),M_=Symbol(""),wc=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Is(4,{from:n,to:e})):m instanceof Error?c(m):bR(m)?c(Is(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function Dl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(I_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Gn(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=W1(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&Gn(g,n,r,o,l,s)()}))}}return i}function Mf(t){const e=Xt(Wa),n=Xt(M_),r=Qe(()=>{const c=ls(t.to);return e.resolve(c)}),s=Qe(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(bs.bind(null,d));if(m>-1)return m;const g=Lf(c[u-2]);return u>1&&Lf(d)===g&&p[p.length-1].path!==g?p.findIndex(bs.bind(null,c[u-2])):m}),i=Qe(()=>s.value>-1&&HR(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&k_(n.params,r.value.params));function l(c={}){if($R(c)){const u=e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function jR(t){return t.length===1?t[0]:t}const BR=Sp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mf,setup(t,{slots:e}){const n=ji(Mf(t)),{options:r}=Xt(Wa),s=Qe(()=>({[Ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&jR(e.default(n));return t.custom?i:Uc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qR=BR;function $R(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ff=(t,e,n)=>t??e??n,zR=Sp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Xt(wc),s=Qe(()=>t.route||r.value),i=Xt(Nf,0),o=Qe(()=>{let u=ls(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Qe(()=>s.value.matched[o.value]);ko(Nf,Qe(()=>o.value+1)),ko(UR,l),ko(wc,s);const c=Te();return tr(()=>[c.value,l.value,t.name],([u,d,p],[m,g,P])=>{d&&(d.instances[p]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!bs(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Uf(n.default,{Component:m,route:u});const g=p.props[d],P=g?g===!0?u.params:typeof g=="function"?g(u):g:null,V=Uc(m,De({},P,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Uf(n.default,{Component:V,route:u})||V}}});function Uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WR=zR;function KR(t){const e=VR(t.routes,t),n=t.parseQuery||LR,r=t.stringifyQuery||Of,s=t.history,i=Qs(),o=Qs(),l=Qs(),c=Bv($n);let u=$n;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xl.bind(null,O=>""+O),p=xl.bind(null,iR),m=xl.bind(null,Li);function g(O,z){let W,ee;return V_(O)?(W=e.getRecordMatcher(O),ee=z):ee=O,e.addRoute(ee,W)}function P(O){const z=e.getRecordMatcher(O);z&&e.removeRoute(z)}function k(){return e.getRoutes().map(O=>O.record)}function V(O){return!!e.getRecordMatcher(O)}function U(O,z){if(z=De({},z||c.value),typeof O=="string"){const C=Vl(n,O,z.path),N=e.resolve({path:C.path},z),M=s.createHref(C.fullPath);return De(C,N,{params:m(N.params),hash:Li(C.hash),redirectedFrom:void 0,href:M})}let W;if(O.path!=null)W=De({},O,{path:Vl(n,O.path,z.path).path});else{const C=De({},O.params);for(const N in C)C[N]==null&&delete C[N];W=De({},O,{params:p(C)}),z.params=p(z.params)}const ee=e.resolve(W,z),Ee=O.hash||"";ee.params=d(m(ee.params));const I=lR(r,De({},O,{hash:nR(Ee),path:ee.path})),b=s.createHref(I);return De({fullPath:I,hash:Ee,query:r===Of?FR(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:b})}function j(O){return typeof O=="string"?Vl(n,O,c.value.path):De({},O)}function F(O,z){if(u!==O)return Is(8,{from:z,to:O})}function B(O){return R(O)}function Z(O){return B(De(j(O),{replace:!0}))}function te(O){const z=O.matched[O.matched.length-1];if(z&&z.redirect){const{redirect:W}=z;let ee=typeof W=="function"?W(O):W;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=j(ee):{path:ee},ee.params={}),De({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function R(O,z){const W=u=U(O),ee=c.value,Ee=O.state,I=O.force,b=O.replace===!0,C=te(W);if(C)return R(De(j(C),{state:typeof C=="object"?De({},Ee,C.state):Ee,force:I,replace:b}),z||W);const N=W;N.redirectedFrom=z;let M;return!I&&cR(r,ee,W)&&(M=Is(16,{to:N,from:ee}),_t(ee,ee,!0,!1)),(M?Promise.resolve(M):A(N,ee)).catch(L=>yn(L)?yn(L,2)?L:gt(L):me(L,N,ee)).then(L=>{if(L){if(yn(L,2))return R(De({replace:b},j(L.to),{state:typeof L.to=="object"?De({},Ee,L.to.state):Ee,force:I}),z||N)}else L=w(N,ee,!0,b,Ee);return T(N,ee,L),L})}function v(O,z){const W=F(O,z);return W?Promise.reject(W):Promise.resolve()}function y(O){const z=Je.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(O):O()}function A(O,z){let W;const[ee,Ee,I]=GR(O,z);W=Dl(ee.reverse(),"beforeRouteLeave",O,z);for(const C of ee)C.leaveGuards.forEach(N=>{W.push(Gn(N,O,z))});const b=v.bind(null,O,z);return W.push(b),qe(W).then(()=>{W=[];for(const C of i.list())W.push(Gn(C,O,z));return W.push(b),qe(W)}).then(()=>{W=Dl(Ee,"beforeRouteUpdate",O,z);for(const C of Ee)C.updateGuards.forEach(N=>{W.push(Gn(N,O,z))});return W.push(b),qe(W)}).then(()=>{W=[];for(const C of I)if(C.beforeEnter)if(tn(C.beforeEnter))for(const N of C.beforeEnter)W.push(Gn(N,O,z));else W.push(Gn(C.beforeEnter,O,z));return W.push(b),qe(W)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),W=Dl(I,"beforeRouteEnter",O,z,y),W.push(b),qe(W))).then(()=>{W=[];for(const C of o.list())W.push(Gn(C,O,z));return W.push(b),qe(W)}).catch(C=>yn(C,8)?C:Promise.reject(C))}function T(O,z,W){l.list().forEach(ee=>y(()=>ee(O,z,W)))}function w(O,z,W,ee,Ee){const I=F(O,z);if(I)return I;const b=z===$n,C=rs?history.state:{};W&&(ee||b?s.replace(O.fullPath,De({scroll:b&&C&&C.scroll},Ee)):s.push(O.fullPath,Ee)),c.value=O,_t(O,z,W,b),gt()}let E;function J(){E||(E=s.listen((O,z,W)=>{if(!Xe.listening)return;const ee=U(O),Ee=te(ee);if(Ee){R(De(Ee,{replace:!0,force:!0}),ee).catch(mi);return}u=ee;const I=c.value;rs&&_R(Af(I.fullPath,W.delta),za()),A(ee,I).catch(b=>yn(b,12)?b:yn(b,2)?(R(De(j(b.to),{force:!0}),ee).then(C=>{yn(C,20)&&!W.delta&&W.type===Fi.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(W.delta&&s.go(-W.delta,!1),me(b,ee,I))).then(b=>{b=b||w(ee,I,!1),b&&(W.delta&&!yn(b,8)?s.go(-W.delta,!1):W.type===Fi.pop&&yn(b,20)&&s.go(-1,!1)),T(ee,I,b)}).catch(mi)}))}let Ie=Qs(),we=Qs(),ie;function me(O,z,W){gt(O);const ee=we.list();return ee.length?ee.forEach(Ee=>Ee(O,z,W)):console.error(O),Promise.reject(O)}function Ye(){return ie&&c.value!==$n?Promise.resolve():new Promise((O,z)=>{Ie.add([O,z])})}function gt(O){return ie||(ie=!O,J(),Ie.list().forEach(([z,W])=>O?W(O):z()),Ie.reset()),O}function _t(O,z,W,ee){const{scrollBehavior:Ee}=t;if(!rs||!Ee)return Promise.resolve();const I=!W&&vR(Af(O.fullPath,0))||(ee||!W)&&history.state&&history.state.scroll||null;return Ea().then(()=>Ee(O,z,I)).then(b=>b&&gR(b)).catch(b=>me(b,O,z))}const Ne=O=>s.go(O);let Se;const Je=new Set,Xe={currentRoute:c,listening:!0,addRoute:g,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:U,options:t,push:B,replace:Z,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:we.add,isReady:Ye,install(O){const z=this;O.component("RouterLink",qR),O.component("RouterView",WR),O.config.globalProperties.$router=z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),rs&&!Se&&c.value===$n&&(Se=!0,B(s.location).catch(Ee=>{}));const W={};for(const Ee in $n)Object.defineProperty(W,Ee,{get:()=>c.value[Ee],enumerable:!0});O.provide(Wa,z),O.provide(M_,dp(W)),O.provide(wc,c);const ee=O.unmount;Je.add(O),O.unmount=function(){Je.delete(O),Je.size<1&&(u=$n,E&&E(),E=null,c.value=$n,Se=!1,ie=!1),ee()}}};function qe(O){return O.reduce((z,W)=>z.then(()=>y(W)),Promise.resolve())}return Xe}function GR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>bs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>bs(u,c))||s.push(c))}return[n,r,s]}function ku(){return Xt(Wa)}const vr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},QR={name:"Navbar",setup(){const t=ku(),e=Te(!1),n=Te(!1),r=Te(null),s=Te(null),i=Te(St.currentUser!==null),o=async g=>{if(g)try{const P=ar(lr,"usuarios",g),k=await Pu(P);k.exists()?s.value=k.data():(console.log("No such user document!"),s.value=null)}catch(P){console.error("Error fetching user data:",P),s.value=null}};Yc(St,g=>{i.value=!!g,g?o(g.uid):s.value=null}),Rs(()=>{St.currentUser&&o(St.currentUser.uid),document.addEventListener("click",d)}),qi(()=>{document.removeEventListener("click",d)});const l=()=>{e.value=!e.value},c=()=>{n.value=!n.value},u=()=>{n.value=!1},d=g=>{r.value&&!r.value.contains(g.target)&&(e.value=!1)},p=async()=>{try{await Hm(St),localStorage.removeItem("dispositivoID"),s.value=null,e.value=!1,t.push("/")}catch(g){console.error("Error logging out:",g)}};return{isAuthenticated:i,userData:s,isDropdownOpen:e,isMobileMenuOpen:n,dropdown:r,toggleDropdown:l,toggleMobileMenu:c,closeMobileMenu:u,handleLogout:p,handleMobileLogout:async()=>{await p(),u()}}}},YR={class:"navbar-container"},JR={class:"container mx-auto px-4 py-3"},XR={class:"md:hidden flex justify-between items-center"},ZR={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},eS={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},tS={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},nS={class:"hidden md:flex justify-between items-center"},rS={class:"absolute left-1/2 transform -translate-x-1/2"},sS={class:"flex items-center space-x-4"},iS={key:0,class:"relative",ref:"dropdown"},oS=["src"],aS={key:1,class:"avatar-initials"},lS={class:"hidden sm:inline"},cS={key:0,class:"dropdown-menu"},uS={key:0,class:"md:hidden mt-4 pb-4 border-t border-white/20"},hS={class:"flex flex-col space-y-3 pt-4"},dS={class:"flex items-center space-x-3 px-4 py-2 bg-white/10 rounded-lg"},fS=["src"],pS={key:1,class:"avatar-initials"},mS={class:"text-white font-medium"};function gS(t,e,n,r,s,i){var l,c,u,d,p,m;const o=Pn("router-link");return re(),se("nav",YR,[S("div",JR,[S("div",XR,[S("button",{onClick:e[0]||(e[0]=(...g)=>r.toggleMobileMenu&&r.toggleMobileMenu(...g)),class:"mobile-menu-button"},[(re(),se("svg",ZR,[r.isMobileMenuOpen?(re(),se("path",tS)):(re(),se("path",eS))]))]),be(o,{to:"/",class:"logo-link mobile-logo"},{default:He(()=>e[5]||(e[5]=[ze(" Where is my kid? 🧒🏻🌍 ")])),_:1}),e[6]||(e[6]=S("div",{class:"w-6"},null,-1))]),S("div",nS,[e[12]||(e[12]=S("div",{class:"flex items-center space-x-6"},null,-1)),S("div",rS,[be(o,{to:"/",class:"logo-link"},{default:He(()=>e[7]||(e[7]=[ze(" Where is my kid? 🧒🏻🌍 ")])),_:1})]),S("div",sS,[r.isAuthenticated?(re(),se("div",iS,[S("button",{onClick:e[1]||(e[1]=(...g)=>r.toggleDropdown&&r.toggleDropdown(...g)),class:"profile-button"},[(l=r.userData)!=null&&l.photoURL?(re(),se("img",{key:0,src:r.userData.photoURL,alt:"Avatar",class:"avatar-img"},null,8,oS)):(re(),se("span",aS,je((c=r.userData)!=null&&c.nombre?r.userData.nombre[0].toUpperCase():"U"),1)),S("span",lS,je(((u=r.userData)==null?void 0:u.nombre)||"Usuario"),1),e[8]||(e[8]=S("svg",{class:"dropdown-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))]),r.isDropdownOpen?(re(),se("div",cS,[be(o,{to:"/profile",class:"dropdown-item",onClick:e[2]||(e[2]=g=>r.isDropdownOpen=!1)},{default:He(()=>e[9]||(e[9]=[ze(" Ver Perfil ")])),_:1}),S("button",{onClick:e[3]||(e[3]=(...g)=>r.handleLogout&&r.handleLogout(...g)),class:"dropdown-item logout-item"}," Cerrar Sesión ")])):nt("",!0)],512)):(re(),se(Ut,{key:1},[be(o,{to:"/login",class:"nav-link"},{default:He(()=>e[10]||(e[10]=[ze(" Iniciar Sesión ")])),_:1}),be(o,{to:"/register",class:"register-button"},{default:He(()=>e[11]||(e[11]=[ze(" Registrarse ")])),_:1})],64))])]),r.isMobileMenuOpen?(re(),se("div",uS,[S("div",hS,[r.isAuthenticated?(re(),se(Ut,{key:0},[S("div",dS,[(d=r.userData)!=null&&d.photoURL?(re(),se("img",{key:0,src:r.userData.photoURL,alt:"Avatar",class:"avatar-img"},null,8,fS)):(re(),se("span",pS,je((p=r.userData)!=null&&p.nombre?r.userData.nombre[0].toUpperCase():"U"),1)),S("span",mS,je(((m=r.userData)==null?void 0:m.nombre)||"Usuario"),1)]),be(o,{to:"/profile",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:He(()=>e[13]||(e[13]=[ze(" Ver Perfil ")])),_:1},8,["onClick"]),S("button",{onClick:e[4]||(e[4]=(...g)=>r.handleMobileLogout&&r.handleMobileLogout(...g)),class:"mobile-nav-link text-left"}," Cerrar Sesión ")],64)):(re(),se(Ut,{key:1},[be(o,{to:"/login",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:He(()=>e[14]||(e[14]=[ze(" Iniciar Sesión ")])),_:1},8,["onClick"]),be(o,{to:"/register",class:"mobile-nav-link",onClick:r.closeMobileMenu},{default:He(()=>e[15]||(e[15]=[ze(" Registrarse ")])),_:1},8,["onClick"])],64))])])):nt("",!0)])])}const _S=vr(QR,[["render",gS],["__scopeId","data-v-9af6b352"]]),vS={name:"Footer",setup(){return{currentYear:Te(new Date().getFullYear())}}},yS={class:"bg-gray-800 text-white py-3"},wS={class:"container mx-auto px-6"},ES={class:"flex flex-col md:flex-row justify-between items-center"},TS={class:"text-gray-400 text-xs mb-2 md:mb-0 text-center md:text-left"};function bS(t,e,n,r,s,i){return re(),se("footer",yS,[S("div",wS,[S("div",ES,[S("div",TS,[S("p",null,"© "+je(r.currentYear)+" Where is my kid? | Desarrollado por David Cela Pedraza",1)]),e[0]||(e[0]=Ti('<div class="flex space-x-4"><a href="https://github.com/DavidNull" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200"><i class="fab fa-github fa-lg"></i><span class="sr-only">GitHub</span></a><a href="https://www.linkedin.com/in/david-cela-pedraza/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-primary transition-colors duration-200"><i class="fab fa-linkedin fa-lg"></i><span class="sr-only">LinkedIn</span></a></div>',1))])])])}const IS=vr(vS,[["render",bS]]),AS={name:"App",components:{Navbar:_S,Footer:IS},setup(){const t=Ha(),e=["🌍 Where is my kid? 🌍","🧒🏻 Where is my kid? 🧒🏻","📍 Where is my kid? 📍"];let n=0,r=null;const s=()=>{document.title=e[n],n=(n+1)%e.length};return Rs(()=>{t.init(),Yc(St,i=>{i?(console.log("App.vue: User is signed in:",i.uid),t.user=i,t.fetchUserData(i.uid)):(console.log("App.vue: User is signed out"),t.user=null,t.userData=null)}),s(),r=setInterval(s,2e3)}),qi(()=>{r&&clearInterval(r)}),{}}},RS={class:"min-h-screen flex flex-col app-container"},SS={class:"flex-grow"};function PS(t,e,n,r,s,i){const o=Pn("Navbar"),l=Pn("router-view"),c=Pn("Footer");return re(),se("div",RS,[be(o),S("main",SS,[be(l)]),be(c)])}const CS=vr(AS,[["render",PS]]),kS="/videos/Fondoindex.mp4",xS={name:"HomeView"},VS={class:"min-h-screen"},DS={class:"relative"},OS={class:"relative container mx-auto px-4 py-32 flex flex-col items-center text-white"},NS={class:"flex space-x-4 animate__animated animate__fadeInUp animate__delay-2s"};function MS(t,e,n,r,s,i){const o=Pn("router-link");return re(),se("div",VS,[S("div",DS,[e[3]||(e[3]=S("div",{class:"absolute inset-0 overflow-hidden"},[S("video",{autoplay:"",loop:"",muted:"",class:"min-w-full min-h-full object-cover animate-fade-from-black"},[S("source",{src:kS,type:"video/mp4"})]),S("div",{class:"absolute inset-0 bg-black bg-opacity-50 animate-fade-in"})],-1)),S("div",OS,[e[1]||(e[1]=S("h1",{class:"text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown"},"Where is my kid?",-1)),e[2]||(e[2]=S("p",{class:"text-xl md:text-2xl mb-8 text-center max-w-2xl animate__animated animate__fadeInUp animate__delay-1s"}," La plataforma que te mantiene conectado con la ubicación de tus hijos en tiempo real ",-1)),S("div",NS,[be(o,{to:"/register",class:"btn btn-primary text-lg px-6 py-3 hover:animate__animated hover:animate__pulse"},{default:He(()=>e[0]||(e[0]=[ze(" Comenzar Ahora ")])),_:1})])])]),e[4]||(e[4]=Ti('<div class="bg-slate-800 text-white py-16 relative" data-v-3e7c3a12><div class="background-elements" data-v-3e7c3a12><div class="floating-element element-1" data-v-3e7c3a12></div><div class="floating-element element-2" data-v-3e7c3a12></div><div class="floating-element element-3" data-v-3e7c3a12></div><div class="floating-element element-4" data-v-3e7c3a12></div><div class="floating-element element-5" data-v-3e7c3a12></div><div class="floating-element element-6" data-v-3e7c3a12></div><div class="floating-element element-7" data-v-3e7c3a12></div><div class="floating-element element-8" data-v-3e7c3a12></div><div class="floating-element element-9" data-v-3e7c3a12></div><div class="floating-element element-10" data-v-3e7c3a12></div></div><div class="container mx-auto px-4 relative z-10" data-v-3e7c3a12><h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up" data-v-3e7c3a12>¿Sabías que?</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-3e7c3a12><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="100" data-v-3e7c3a12><h3 class="text-xl font-semibold mb-3 text-sky-400" data-v-3e7c3a12>Atropellos infantiles</h3><p data-v-3e7c3a12>En España <strong data-v-3e7c3a12>el 16% de los atropellos al año son a menores de 14 años</strong>, eso son <strong data-v-3e7c3a12>1540 niños al año.</strong></p></div><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="200" data-v-3e7c3a12><h3 class="text-xl font-semibold mb-3 text-green-400" data-v-3e7c3a12>Accidentes en la calle</h3><p data-v-3e7c3a12>Un estudio realizado en Andalucía indica que <strong data-v-3e7c3a12>el 34,6% de los accidentes infantiles ocurren en la calle por ir desatendidos o solos.</strong></p></div><div class="bg-slate-700 rounded-lg p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:animate__animated hover:animate__pulse" data-aos="fade-up" data-aos-delay="300" data-v-3e7c3a12><h3 class="text-xl font-semibold mb-3 text-red-400" data-v-3e7c3a12>Secuestros de menores</h3><p data-v-3e7c3a12>Los <strong data-v-3e7c3a12>secuestros de menores</strong> con fines criminales en España <strong data-v-3e7c3a12>aumentaron un 125% de 2023 a 2024</strong>, pasando de 8 a 18.</p></div></div><div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400" data-v-3e7c3a12><h4 class="text-2xl font-bold mb-6 animate__animated animate__pulse animate__infinite animate__slower" data-v-3e7c3a12>¿Y si fuera tu hijo?</h4></div></div></div><div class="bg-gray-200 py-16" data-v-3e7c3a12><div class="container mx-auto px-4" data-v-3e7c3a12><h2 class="text-3xl font-bold text-center mb-12 text-gray-800" data-aos="zoom-in" data-v-3e7c3a12>¿Qué ofrecemos?</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-v-3e7c3a12><div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-right" data-aos-delay="100" data-v-3e7c3a12><div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="200" data-v-3e7c3a12><i class="fas fa-map-marker-alt" data-v-3e7c3a12></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand" data-v-3e7c3a12>Seguimiento en Tiempo Real</h3><p class="text-gray-600" data-v-3e7c3a12>Monitorea la ubicación exacta de tus hijos <strong data-v-3e7c3a12>en tiempo real</strong>.</p></div><div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-up" data-aos-delay="200" data-v-3e7c3a12><div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="300" data-v-3e7c3a12><i class="fas fa-mobile-alt" data-v-3e7c3a12></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand" data-v-3e7c3a12>App Móvil Sencilla</h3><p class="text-gray-600" data-v-3e7c3a12>Aplicación móvil fácil de usar para tus hijos con solo 2 opciones: <strong data-v-3e7c3a12>Añadir ID</strong> y <strong data-v-3e7c3a12>enviar ubicación</strong>.</p></div><div class="bg-white rounded-lg p-6 shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:animate__animated hover:animate__bounceIn" data-aos="fade-left" data-aos-delay="300" data-v-3e7c3a12><div class="text-primary text-4xl mb-4" data-aos="bounce-in" data-aos-delay="400" data-v-3e7c3a12><i class="fas fa-lock" data-v-3e7c3a12></i></div><h3 class="text-xl font-semibold mb-3 text-gray-700 hover:animate__animated hover:animate__rubberBand" data-v-3e7c3a12>Privacidad y Seguridad</h3><p class="text-gray-600" data-v-3e7c3a12>Datos encriptados y sistema donde solo puede acceder a la ubicación el usuario que tiene el ID.</p></div></div></div></div>',2))])}const LS=vr(xS,[["render",MS],["__scopeId","data-v-3e7c3a12"]]),FS="modulepreload",US=function(t){return"/"+t},jf={},jS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=US(c),c in jf)return;jf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":FS,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};class BS{subscribeToLocation(e,n){if(!e)return n({error:"No device ID provided"}),()=>{};const r=ar(lr,"ubicaciones",e);return $1(r,s=>{var i;if(s.exists()){const o=s.data();n({latitude:o.latitud,longitude:o.longitud,lastUpdate:((i=o.ultimaActualizacion)==null?void 0:i.toDate())||new Date,deviceId:e})}else n({error:"No location data found"})},s=>{console.error("Location subscription error:",s),n({error:s.message})})}async getLatestLocation(e){var n;try{if(!e)throw new Error("No device ID provided");const r=ar(lr,"ubicaciones",e),s=await Pu(r);if(s.exists()){const i=s.data();return{latitude:i.latitud,longitude:i.longitud,lastUpdate:((n=i.ultimaActualizacion)==null?void 0:n.toDate())||new Date,deviceId:e}}else throw new Error("No location data found")}catch(r){throw console.error("Error getting location:",r),r}}}const Bf=new BS;class qS{constructor(e,n){this.latitude=e.latitud||0,this.longitude=e.longitud||0,this.lastUpdate=this._parseTimestamp(e.ultimaActualizacion)||new Date,this.userId=e.usuario||null,this.deviceId=n||null}_parseTimestamp(e){return e?e instanceof Date?e:typeof e.toDate=="function"?e.toDate():typeof e=="number"?e<1e12?new Date(e*1e3):new Date(e):new Date:new Date}getFormattedLastUpdate(){return this.lastUpdate.toLocaleString("es-ES",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}getTimeElapsed(){const n=new Date-this.lastUpdate,r=Math.floor(n/1e3);if(r<60)return`Hace ${r} segundos`;const s=Math.floor(r/60);if(s<60)return`Hace ${s} minutos`;const i=Math.floor(s/60);return i<24?`Hace ${i} horas`:`Hace ${Math.floor(i/24)} días`}isRecent(){return new Date-this.lastUpdate<5*60*1e3}}class $S{constructor(e){this.view=e,this.state={isAuthenticated:Qe(()=>St.currentUser!==null),locationData:Te(null),locationError:Te(null),locationUpdating:Te(!1),map:Te(null),marker:Te(null),unsubscribeLocation:Te(null)},this._setupWatchers()}initMap(e,n){this.state.map.value=e.map(n,{zoomControl:!1}).setView([40,-4],6),e.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(this.state.map.value),this.L=e,setTimeout(()=>{this.state.map.value&&(this.state.map.value.invalidateSize(),this.state.map.value.setView([40,-4],6),console.log("Map invalidSize called and recentered"))},200),window.addEventListener("resize",()=>{this.state.map.value&&this.state.map.value.invalidateSize()}),this.state.isAuthenticated.value&&this.loadLocationData()}async loadLocationData(){try{this.state.locationUpdating.value=!0,this.state.locationError.value=null;const e=Ha();let n=null;if(e.deviceId?n=e.deviceId:n=localStorage.getItem("dispositivoID"),!n&&(await e.fetchUserData(St.currentUser.uid),n=e.deviceId,!n)){this.state.locationError.value="No se encontró ID de dispositivo",this.state.locationUpdating.value=!1;return}try{const r=await Bf.getLatestLocation(n);this._updateLocationData(r)}catch(r){this.state.locationError.value="Error al cargar ubicación inicial",console.error(r)}this.state.unsubscribeLocation.value&&this.state.unsubscribeLocation.value(),this.state.unsubscribeLocation.value=Bf.subscribeToLocation(n,r=>{r.error?this.state.locationError.value=r.error:this._updateLocationData(r),this.state.locationUpdating.value=!1})}catch(e){this.state.locationError.value="Error al cargar ubicación",console.error(e),this.state.locationUpdating.value=!1}}_updateLocationData(e){const n=new qS({latitud:e.latitude,longitud:e.longitude,ultimaActualizacion:e.lastUpdate},e.deviceId);if(this.state.locationData.value=n,this.state.map.value&&n.latitude&&n.longitude&&this.L){const r=this.L,s=r.icon({iconUrl:"/images/niño.png",iconSize:[50,50],iconAnchor:[25,50],popupAnchor:[0,-50]});this.state.marker.value?this.state.marker.value.setLatLng([n.latitude,n.longitude]):this.state.marker.value=r.marker([n.latitude,n.longitude],{icon:s}).addTo(this.state.map.value),this.state.map.value.setView([n.latitude,n.longitude],15)}}_setupWatchers(){tr(()=>this.state.isAuthenticated.value,e=>{e&&this.state.map.value?this.loadLocationData():e||(this.state.unsubscribeLocation.value&&(this.state.unsubscribeLocation.value(),this.state.unsubscribeLocation.value=null),this.state.marker.value&&this.state.map.value&&(this.state.map.value.removeLayer(this.state.marker.value),this.state.marker.value=null),this.state.locationData.value=null)})}cleanup(){this.state.unsubscribeLocation.value&&this.state.unsubscribeLocation.value(),this.state.map.value&&this.state.map.value.remove()}formatDateTime(e){if(!e)return"N/A";const n=new Date(e);return`${n.getDate().toString().padStart(2,"0")}/${(n.getMonth()+1).toString().padStart(2,"0")}/${n.getFullYear()} ${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}:${n.getSeconds().toString().padStart(2,"0")}`}}const HS={name:"MapView",setup(){const t=new $S,e=Qe(()=>St.currentUser!==null),n=Te(!1);return Rs(()=>{jS(()=>import("./leaflet-src-BPqh-lBm.js").then(r=>r.l),[]).then(r=>{t.initMap(r.default||r,"map")}).catch(r=>{console.error("Failed loading Leaflet",r)})}),qi(()=>{t.cleanup()}),{presenter:t,isAuthenticated:e,isPanelExpanded:n}}},zS={id:"map-container"},WS={key:0,class:"absolute bottom-4 left-4 z-20"},KS={key:0,class:"p-4 space-y-3 text-sm"},GS={class:"flex justify-between"},QS={class:"font-mono text-gray-800"},YS={class:"flex justify-between"},JS={class:"font-mono text-gray-800"},XS={class:"flex justify-between"},ZS={class:"text-gray-800"},eP={class:"flex justify-between"},tP={key:1,class:"absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center z-10"},nP={class:"text-center text-white p-8 bg-primary rounded-lg shadow-xl max-w-md mx-4"},rP={class:"space-y-3"};function sP(t,e,n,r,s,i){var l,c,u,d,p,m,g;const o=Pn("router-link");return re(),se("div",zS,[e[12]||(e[12]=S("div",{id:"map",class:"w-full"},null,-1)),r.isAuthenticated&&r.presenter.state.locationData.value?(re(),se("div",WS,[S("div",{class:It(["bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300",{"max-h-12":!r.isPanelExpanded,"max-h-64":r.isPanelExpanded}])},[S("div",{onClick:e[0]||(e[0]=P=>r.isPanelExpanded=!r.isPanelExpanded),class:"flex items-center justify-between px-4 py-2 cursor-pointer bg-blue-50 hover:bg-blue-100 transition-colors min-h-12"},[e[2]||(e[2]=S("div",{class:"flex items-center space-x-2"},[S("span",{class:"text-green-500 text-base"},"📍"),S("span",{class:"font-semibold text-gray-700 text-sm"},"Ubicación")],-1)),(re(),se("svg",{class:It(["w-4 h-4 text-gray-500 transition-transform duration-300",{"rotate-180":r.isPanelExpanded}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},e[1]||(e[1]=[S("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))]),r.isPanelExpanded?(re(),se("div",KS,[S("div",GS,[e[3]||(e[3]=S("span",{class:"text-gray-600"},"Latitud:",-1)),S("span",QS,je((c=(l=r.presenter.state.locationData.value)==null?void 0:l.latitude)==null?void 0:c.toFixed(6)),1)]),S("div",YS,[e[4]||(e[4]=S("span",{class:"text-gray-600"},"Longitud:",-1)),S("span",JS,je((d=(u=r.presenter.state.locationData.value)==null?void 0:u.longitude)==null?void 0:d.toFixed(6)),1)]),S("div",XS,[e[5]||(e[5]=S("span",{class:"text-gray-600"},"Última actualización:",-1)),S("span",ZS,je((p=r.presenter.state.locationData.value)==null?void 0:p.getFormattedLastUpdate()),1)]),S("div",eP,[e[6]||(e[6]=S("span",{class:"text-gray-600"},"Hace:",-1)),S("span",{class:It(["text-gray-800",{"text-green-600":(m=r.presenter.state.locationData.value)==null?void 0:m.isRecent()}])},je((g=r.presenter.state.locationData.value)==null?void 0:g.getTimeElapsed()),3)])])):nt("",!0)],2)])):nt("",!0),r.isAuthenticated?nt("",!0):(re(),se("div",tP,[S("div",nP,[e[9]||(e[9]=S("div",{class:"text-6xl mb-4"},"🔒",-1)),e[10]||(e[10]=S("h2",{class:"text-2xl font-bold mb-4"},"Acceso Restringido",-1)),e[11]||(e[11]=S("p",{class:"text-lg mb-6"},"Para ver la ubicación en tiempo real, necesitas iniciar sesión en tu cuenta.",-1)),S("div",rP,[be(o,{to:"/login",class:"block w-full bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"},{default:He(()=>e[7]||(e[7]=[ze(" Iniciar Sesión ")])),_:1}),be(o,{to:"/register",class:"block w-full border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors duration-200"},{default:He(()=>e[8]||(e[8]=[ze(" Crear Cuenta ")])),_:1})])])]))])}const iP=vr(HS,[["render",sP],["__scopeId","data-v-c87f03dc"]]),oP={name:"LoginView",setup(){const t=Te(""),e=Te(""),n=Te(!1),r=Te(!1),s=Te(""),i=Te(!1),o=Te(!1),l=Te(""),c=Te(""),u=Te(!1),d=Te(!1),p=ku(),m=Ha(),g=Qe(()=>t.value&&e.value&&!l.value&&!c.value),P=()=>{const B=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;t.value?B.test(t.value)?(l.value="",u.value=!0):(l.value="Introduce un correo válido",u.value=!1):(l.value="El correo es requerido",u.value=!1)},k=()=>{e.value?e.value.length<6?(c.value="La contraseña debe tener al menos 6 caracteres",d.value=!1):(c.value="",d.value=!0):(c.value="La contraseña es requerida",d.value=!1)},V=()=>{l.value=""},U=()=>{c.value=""},j=()=>{i.value=!i.value},F=async()=>{try{if(P(),k(),!g.value)return;r.value=!0,s.value="",o.value=!1;const B=await m.login(t.value,e.value);B.success?(n.value&&localStorage.setItem("rememberUser","true"),p.push("/map")):(s.value=B.error||"Error al iniciar sesión",o.value=!0,setTimeout(()=>o.value=!1,600))}catch(B){console.error("Login error:",B),s.value="Error al iniciar sesión",o.value=!0,setTimeout(()=>o.value=!1,600)}finally{r.value=!1}};return tr(t,()=>{(u.value||l.value)&&P()}),tr(e,()=>{(d.value||c.value)&&k()}),{email:t,password:e,rememberMe:n,isLoading:r,errorMessage:s,showPassword:i,hasError:o,emailError:l,passwordError:c,emailValid:u,passwordValid:d,isFormValid:g,validateEmail:P,validatePassword:k,clearEmailError:V,clearPasswordError:U,togglePasswordVisibility:j,handleLogin:F}}},aP={class:"login-page animate-fade-in"},lP={key:0,class:"error-message"},cP={class:"input-group"},uP={class:"input-wrapper"},hP=["disabled"],dP={class:"input-status"},fP={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pP={key:0,class:"field-error-message"},mP={class:"input-group"},gP={class:"input-wrapper"},_P=["type","disabled"],vP={class:"input-status"},yP={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},wP=["disabled"],EP={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},TP={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bP={key:0,class:"field-error-message"},IP=["disabled"],AP={class:"submit-content"},RP={key:0,class:"loading-spinner",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},SP={key:1,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function PP(t,e,n,r,s,i){const o=Pn("router-link");return re(),se("div",aP,[e[20]||(e[20]=S("div",{class:"background-elements"},[S("div",{class:"floating-element element-1"}),S("div",{class:"floating-element element-2"}),S("div",{class:"floating-element element-3"})],-1)),S("div",{class:It(["form-container animate-fade-in-delay",{"form-shake":r.hasError}])},[e[18]||(e[18]=S("div",{class:"welcome-section"},[S("h1",{class:"welcome-title"},"¡Bienvenido de vuelta!"),S("p",{class:"welcome-subtitle"},"Inicia sesión para monitorear a tus hijos")],-1)),be(En,{name:"error-slide"},{default:He(()=>[r.errorMessage?(re(),se("div",lP,[e[8]||(e[8]=S("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"}),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"currentColor","stroke-width":"2"}),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"currentColor","stroke-width":"2"})],-1)),ze(" "+je(r.errorMessage),1)])):nt("",!0)]),_:1}),S("form",{onSubmit:e[7]||(e[7]=nm((...l)=>r.handleLogin&&r.handleLogin(...l),["prevent"])),class:"login-form"},[S("div",cP,[e[10]||(e[10]=S("label",{for:"email",class:"input-label"},[S("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),S("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),ze(" Correo electrónico ")],-1)),S("div",uP,[ss(S("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),type:"email",placeholder:"ejemplo@correo.com",class:It(["input-field",{"input-valid":r.emailValid&&r.email.length>0,"input-error":r.emailError&&r.email.length>0}]),required:"",autocomplete:"email",disabled:r.isLoading,onBlur:e[1]||(e[1]=(...l)=>r.validateEmail&&r.validateEmail(...l)),onInput:e[2]||(e[2]=(...l)=>r.clearEmailError&&r.clearEmailError(...l))},null,42,hP),[[Ai,r.email]]),S("div",dP,[r.emailValid&&r.email.length>0?(re(),se("svg",fP,e[9]||(e[9]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):nt("",!0)])]),be(En,{name:"field-error"},{default:He(()=>[r.emailError&&r.email.length>0?(re(),se("div",pP,je(r.emailError),1)):nt("",!0)]),_:1})]),S("div",mP,[e[14]||(e[14]=Ti('<label for="password" class="input-label" data-v-2961323b><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2961323b><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-2961323b></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-2961323b></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-2961323b></path></svg> Contraseña </label>',1)),S("div",gP,[ss(S("input",{id:"password","onUpdate:modelValue":e[3]||(e[3]=l=>r.password=l),type:r.showPassword?"text":"password",placeholder:"Tu contraseña segura",class:It(["input-field",{"input-valid":r.passwordValid&&r.password.length>0,"input-error":r.passwordError&&r.password.length>0}]),required:"",autocomplete:"current-password",disabled:r.isLoading,onBlur:e[4]||(e[4]=(...l)=>r.validatePassword&&r.validatePassword(...l)),onInput:e[5]||(e[5]=(...l)=>r.clearPasswordError&&r.clearPasswordError(...l))},null,42,_P),[[zl,r.password]]),S("div",vP,[r.passwordValid&&r.password.length>0?(re(),se("svg",yP,e[11]||(e[11]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):nt("",!0)]),S("button",{type:"button",onClick:e[6]||(e[6]=(...l)=>r.togglePasswordVisibility&&r.togglePasswordVisibility(...l)),class:"password-toggle",disabled:r.isLoading},[r.showPassword?(re(),se("svg",EP,e[12]||(e[12]=[S("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(re(),se("svg",TP,e[13]||(e[13]=[S("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),S("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,wP)]),be(En,{name:"field-error"},{default:He(()=>[r.passwordError&&r.password.length>0?(re(),se("div",bP,je(r.passwordError),1)):nt("",!0)]),_:1})]),S("button",{type:"submit",disabled:!r.isFormValid||r.isLoading,class:It(["submit-button",{loading:r.isLoading}])},[S("div",AP,[r.isLoading?(re(),se("svg",RP,e[15]||(e[15]=[S("path",{d:"M21 12a9 9 0 11-6.219-8.56",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)]))):(re(),se("svg",SP,e[16]||(e[16]=[S("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))),ze(" "+je(r.isLoading?"Iniciando sesión...":"Iniciar Sesión"),1)])],10,IP)],32),e[19]||(e[19]=S("div",{class:"divider"},[S("span",{class:"divider-text"},"¿Aún no tienes una cuenta?")],-1)),be(o,{to:"/register",class:"register-link"},{default:He(()=>e[17]||(e[17]=[S("div",{class:"register-content"},[S("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),S("circle",{cx:"8.5",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"}),S("line",{x1:"20",y1:"8",x2:"20",y2:"14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),S("line",{x1:"23",y1:"11",x2:"17",y2:"11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),ze(" Crear nueva cuenta ")],-1)])),_:1})],2)])}const CP=vr(oP,[["render",PP],["__scopeId","data-v-2961323b"]]),kP={name:"Register",setup(){const t=ku(),e=Te(""),n=Te(""),r=Te(""),s=Te(""),i=Te(!1),o=Te(!1),l=Te(!1),c=Te(""),u=Te(""),d=Te(!1),p=Qe(()=>e.value.length===0?{isValid:!0,message:""}:e.value.length<2?{isValid:!1,message:"El nombre debe tener al menos 2 caracteres"}:e.value.length>50?{isValid:!1,message:"El nombre no puede tener más de 50 caracteres"}:/^[a-zA-ZÀ-ÿ\s]+$/.test(e.value)?{isValid:!0,message:""}:{isValid:!1,message:"El nombre solo puede contener letras y espacios"}),m=Qe(()=>n.value.length===0?{isValid:!0,message:""}:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.value)?{isValid:!0,message:""}:{isValid:!1,message:"Por favor, introduce un email válido"}),g=Qe(()=>r.value.length===0?{isValid:!0,message:""}:r.value.length<6?{isValid:!1,message:"La contraseña debe tener al menos 6 caracteres"}:r.value.length>128?{isValid:!1,message:"La contraseña es demasiado larga"}:{isValid:!0,message:""}),P=Qe(()=>s.value.length===0?{isValid:!0,message:""}:s.value!==r.value?{isValid:!1,message:"Las contraseñas no coinciden"}:{isValid:!0,message:""}),k=Qe(()=>p.value.isValid&&m.value.isValid&&g.value.isValid&&P.value.isValid&&e.value.length>0&&n.value.length>0&&r.value.length>0&&s.value.length>0),V=()=>{d.value=!0,setTimeout(()=>{d.value=!1},600)},U=()=>{const F="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";let B="";for(let Z=0;Z<6;Z++)B+=F.charAt(Math.floor(Math.random()*F.length));return B};return{name:e,email:n,password:r,confirmPassword:s,showPassword:i,showConfirmPassword:o,isLoading:l,errorMessage:c,successMessage:u,formShake:d,nameValidation:p,emailValidation:m,passwordValidation:g,confirmPasswordValidation:P,isFormValid:k,handleRegister:async()=>{if(c.value="",u.value="",!k.value){c.value="Por favor, completa todos los campos correctamente",V();return}l.value=!0;try{const F=U(),Z=(await $m(St,n.value,r.value)).user;await ma(ar(lr,"usuarios",Z.uid),{nombre:e.value,email:n.value,fechaRegistro:new Date,dispositivoID:F}),await ma(ar(lr,"ubicaciones",F),{latitud:0,longitud:0,ultimaActualizacion:new Date,usuario:Z.uid}),u.value="¡Cuenta creada exitosamente!",setTimeout(()=>{t.push("/login")},1500)}catch(F){switch(console.error("Error creating account:",F),F.code){case"auth/email-already-in-use":c.value="Este email ya está registrado";break;case"auth/invalid-email":c.value="Email inválido";break;case"auth/operation-not-allowed":c.value="Operación no permitida";break;case"auth/weak-password":c.value="La contraseña es muy débil";break;default:c.value="Error al crear la cuenta. Inténtalo de nuevo."}V()}finally{l.value=!1}},triggerFormShake:V}}},xP={class:"register-page animate-fade-in"},VP={key:0,class:"error-message"},DP={key:0,class:"success-message"},OP={class:"input-group"},NP={class:"input-wrapper"},MP=["aria-describedby"],LP={class:"input-status"},FP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},UP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},jP={key:0,id:"name-error",class:"field-error-message"},BP={class:"input-group"},qP={class:"input-wrapper"},$P=["aria-describedby"],HP={class:"input-status"},zP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},WP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},KP={key:0,id:"email-error",class:"field-error-message"},GP={class:"input-group"},QP={class:"input-wrapper"},YP=["type","aria-describedby"],JP={class:"input-status"},XP={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ZP={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},eC=["aria-label"],tC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rC={key:0,id:"password-error",class:"field-error-message"},sC={class:"input-group"},iC={class:"input-wrapper"},oC=["type","aria-describedby"],aC={class:"input-status"},lC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},cC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},uC=["aria-label"],hC={key:0,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},dC={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fC={key:0,id:"confirm-password-error",class:"field-error-message"},pC=["disabled"],mC={class:"submit-content"},gC={key:0,class:"loading-spinner",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_C={key:1,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function vC(t,e,n,r,s,i){const o=Pn("router-link");return re(),se("div",xP,[e[30]||(e[30]=S("div",{class:"background-elements"},[S("div",{class:"floating-element element-1"}),S("div",{class:"floating-element element-2"}),S("div",{class:"floating-element element-3"})],-1)),S("div",{class:It(["form-container animate-fade-in-delay",{"form-shake":r.formShake}])},[e[28]||(e[28]=S("div",{class:"welcome-section"},[S("h1",{class:"welcome-title"},"Crea tu cuenta"),S("p",{class:"welcome-subtitle"},"Únete para proteger y localizar a tu familia")],-1)),be(En,{name:"error-slide"},{default:He(()=>[r.errorMessage?(re(),se("div",VP,[e[7]||(e[7]=S("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"}),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"currentColor","stroke-width":"2"}),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"currentColor","stroke-width":"2"})],-1)),ze(" "+je(r.errorMessage),1)])):nt("",!0)]),_:1}),be(En,{name:"error-slide"},{default:He(()=>[r.successMessage?(re(),se("div",DP,[e[8]||(e[8]=S("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M9 12l2 2 4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),S("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2"})],-1)),ze(" "+je(r.successMessage),1)])):nt("",!0)]),_:1}),S("form",{onSubmit:e[6]||(e[6]=nm((...l)=>r.handleRegister&&r.handleRegister(...l),["prevent"])),class:"register-form"},[S("div",OP,[e[11]||(e[11]=S("label",{for:"name",class:"input-label"},[S("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),S("circle",{cx:"12",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"})]),ze(" Nombre completo ")],-1)),S("div",NP,[ss(S("input",{id:"name","onUpdate:modelValue":e[0]||(e[0]=l=>r.name=l),type:"text",placeholder:"Escribe tu nombre completo",class:It(["input-field",{"input-valid":r.nameValidation.isValid&&r.name.length>0,"input-error":!r.nameValidation.isValid&&r.name.length>0}]),required:"",autocomplete:"name","aria-describedby":!r.nameValidation.isValid&&r.name.length>0?"name-error":null},null,10,MP),[[Ai,r.name]]),S("div",LP,[r.nameValidation.isValid&&r.name.length>0?(re(),se("svg",FP,e[9]||(e[9]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.nameValidation.isValid&&r.name.length>0?(re(),se("svg",UP,e[10]||(e[10]=[S("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):nt("",!0)])]),be(En,{name:"field-error"},{default:He(()=>[!r.nameValidation.isValid&&r.name.length>0?(re(),se("div",jP,je(r.nameValidation.message),1)):nt("",!0)]),_:1})]),S("div",BP,[e[14]||(e[14]=S("label",{for:"email",class:"input-label"},[S("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",stroke:"currentColor","stroke-width":"2"}),S("polyline",{points:"22,6 12,13 2,6",stroke:"currentColor","stroke-width":"2"})]),ze(" Correo electrónico ")],-1)),S("div",qP,[ss(S("input",{id:"email","onUpdate:modelValue":e[1]||(e[1]=l=>r.email=l),type:"email",placeholder:"ejemplo@correo.com",class:It(["input-field",{"input-valid":r.emailValidation.isValid&&r.email.length>0,"input-error":!r.emailValidation.isValid&&r.email.length>0}]),required:"",autocomplete:"email","aria-describedby":!r.emailValidation.isValid&&r.email.length>0?"email-error":null},null,10,$P),[[Ai,r.email]]),S("div",HP,[r.emailValidation.isValid&&r.email.length>0?(re(),se("svg",zP,e[12]||(e[12]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.emailValidation.isValid&&r.email.length>0?(re(),se("svg",WP,e[13]||(e[13]=[S("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):nt("",!0)])]),be(En,{name:"field-error"},{default:He(()=>[!r.emailValidation.isValid&&r.email.length>0?(re(),se("div",KP,je(r.emailValidation.message),1)):nt("",!0)]),_:1})]),S("div",GP,[e[19]||(e[19]=Ti('<label for="password" class="input-label" data-v-89f2994c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-89f2994c><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-89f2994c></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-89f2994c></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-89f2994c></path></svg> Contraseña </label>',1)),S("div",QP,[ss(S("input",{id:"password","onUpdate:modelValue":e[2]||(e[2]=l=>r.password=l),type:r.showPassword?"text":"password",placeholder:"Mínimo 6 caracteres",class:It(["input-field",{"input-valid":r.passwordValidation.isValid&&r.password.length>0,"input-error":!r.passwordValidation.isValid&&r.password.length>0}]),required:"",autocomplete:"new-password","aria-describedby":!r.passwordValidation.isValid&&r.password.length>0?"password-error":null},null,10,YP),[[zl,r.password]]),S("div",JP,[r.passwordValidation.isValid&&r.password.length>0?(re(),se("svg",XP,e[15]||(e[15]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.passwordValidation.isValid&&r.password.length>0?(re(),se("svg",ZP,e[16]||(e[16]=[S("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):nt("",!0)]),S("button",{type:"button",onClick:e[3]||(e[3]=l=>r.showPassword=!r.showPassword),class:"password-toggle","aria-label":r.showPassword?"Ocultar contraseña":"Mostrar contraseña"},[r.showPassword?(re(),se("svg",tC,e[17]||(e[17]=[S("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(re(),se("svg",nC,e[18]||(e[18]=[S("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),S("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,eC)]),be(En,{name:"field-error"},{default:He(()=>[!r.passwordValidation.isValid&&r.password.length>0?(re(),se("div",rC,je(r.passwordValidation.message),1)):nt("",!0)]),_:1})]),S("div",sC,[e[24]||(e[24]=Ti('<label for="confirmPassword" class="input-label" data-v-89f2994c><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-89f2994c><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2" data-v-89f2994c></rect><circle cx="12" cy="16" r="1" stroke="currentColor" stroke-width="2" data-v-89f2994c></circle><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" data-v-89f2994c></path></svg> Confirmar contraseña </label>',1)),S("div",iC,[ss(S("input",{id:"confirmPassword","onUpdate:modelValue":e[4]||(e[4]=l=>r.confirmPassword=l),type:r.showConfirmPassword?"text":"password",placeholder:"Confirma tu contraseña",class:It(["input-field",{"input-valid":r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0,"input-error":!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0}]),required:"",autocomplete:"new-password","aria-describedby":!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?"confirm-password-error":null},null,10,oC),[[zl,r.confirmPassword]]),S("div",aC,[r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(re(),se("svg",lC,e[20]||(e[20]=[S("path",{d:"M9 12l2 2 4-4",stroke:"#48bb78","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"12",cy:"12",r:"10",stroke:"#48bb78","stroke-width":"2"},null,-1)]))):!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(re(),se("svg",cC,e[21]||(e[21]=[S("circle",{cx:"12",cy:"12",r:"10",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"15",y1:"9",x2:"9",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1),S("line",{x1:"9",y1:"9",x2:"15",y2:"15",stroke:"#f56565","stroke-width":"2"},null,-1)]))):nt("",!0)]),S("button",{type:"button",onClick:e[5]||(e[5]=l=>r.showConfirmPassword=!r.showConfirmPassword),class:"password-toggle","aria-label":r.showConfirmPassword?"Ocultar confirmar contraseña":"Mostrar confirmar contraseña"},[r.showConfirmPassword?(re(),se("svg",hC,e[22]||(e[22]=[S("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):(re(),se("svg",dC,e[23]||(e[23]=[S("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z",stroke:"currentColor","stroke-width":"2"},null,-1),S("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor","stroke-width":"2"},null,-1)])))],8,uC)]),be(En,{name:"field-error"},{default:He(()=>[!r.confirmPasswordValidation.isValid&&r.confirmPassword.length>0?(re(),se("div",fC,je(r.confirmPasswordValidation.message),1)):nt("",!0)]),_:1})]),S("button",{type:"submit",disabled:!r.isFormValid||r.isLoading,class:It(["submit-button",{loading:r.isLoading}])},[S("div",mC,[r.isLoading?(re(),se("svg",gC,e[25]||(e[25]=[S("path",{d:"M21 12a9 9 0 11-6.219-8.56",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"},null,-1)]))):(re(),se("svg",_C,e[26]||(e[26]=[S("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("circle",{cx:"8.5",cy:"7",r:"4",stroke:"currentColor","stroke-width":"2"},null,-1),S("line",{x1:"20",y1:"8",x2:"20",y2:"14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S("line",{x1:"23",y1:"11",x2:"17",y2:"11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))),ze(" "+je(r.isLoading?"Creando cuenta...":"Crear Cuenta"),1)])],10,pC)],32),e[29]||(e[29]=S("div",{class:"divider"},[S("span",{class:"divider-text"},"¿Ya tienes una cuenta?")],-1)),be(o,{to:"/login",class:"login-link"},{default:He(()=>e[27]||(e[27]=[S("div",{class:"login-content"},[S("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h1",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]),ze(" Iniciar sesión ")],-1)])),_:1})],2)])}const yC=vr(kP,[["render",vC],["__scopeId","data-v-89f2994c"]]),wC={name:"ProfileView",setup(){const t=Ha();return Rs(()=>{const n=St.currentUser;n&&!t.userData&&t.fetchUserData(n.uid)}),{userStore:t,formatDate:n=>n?(n.toDate?n.toDate():new Date(n)).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}):"N/A"}}},EC={class:"profile-container"},TC={key:0,class:"loading-container"},bC={key:1,class:"error-container animate__animated animate__shakeX"},IC={key:2,class:"profile-fields"},AC={class:"field-container sky","data-aos":"fade-up","data-aos-delay":"100"},RC={class:"field-value sky"},SC={class:"field-container emerald","data-aos":"fade-up","data-aos-delay":"200"},PC={class:"field-value emerald"},CC={class:"field-container amber","data-aos":"fade-up","data-aos-delay":"300"},kC={class:"field-value amber"},xC={class:"device-id"},VC={class:"field-container violet","data-aos":"fade-up","data-aos-delay":"400"},DC={class:"field-value violet"},OC={key:3,class:"no-data-container"},NC={class:"button-container","data-aos":"zoom-in","data-aos-delay":"500"};function MC(t,e,n,r,s,i){const o=Pn("router-link");return re(),se("div",EC,[e[9]||(e[9]=S("h1",{class:"profile-title animate__animated animate__fadeInDown"},"Mi Perfil",-1)),r.userStore.loading&&!r.userStore.userData?(re(),se("div",TC,e[0]||(e[0]=[S("svg",{class:"loading-spinner animate__animated animate__rotateIn animate__infinite",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[S("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),S("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),S("p",{class:"loading-text animate__animated animate__pulse animate__infinite"},"Cargando perfil...",-1)]))):r.userStore.error?(re(),se("div",bC,[e[1]||(e[1]=S("p",{class:"error-title"},"Error al cargar el perfil",-1)),S("p",null,je(r.userStore.error),1)])):r.userStore.userData?(re(),se("div",IC,[S("div",AC,[e[2]||(e[2]=S("label",{class:"field-label sky"},"Nombre",-1)),S("p",RC,je(r.userStore.userData.nombre),1)]),S("div",SC,[e[3]||(e[3]=S("label",{class:"field-label emerald"},"Correo Electrónico",-1)),S("p",PC,je(r.userStore.userData.email),1)]),S("div",CC,[e[4]||(e[4]=S("label",{class:"field-label amber"},"ID de Dispositivo",-1)),S("p",kC,[S("span",xC,je(r.userStore.userData.dispositivoID),1)]),e[5]||(e[5]=S("p",{class:"device-id-hint","data-aos":"fade-up","data-aos-delay":"800"},"Usa esta ID en la aplicación móvil para sincronizar tu ubicación.",-1))]),S("div",VC,[e[6]||(e[6]=S("label",{class:"field-label violet"},"Fecha de Registro",-1)),S("p",DC,je(r.formatDate(r.userStore.userData.fechaRegistro)),1)])])):(re(),se("div",OC,e[7]||(e[7]=[S("p",{class:"no-data-text"},"No se pudieron cargar los datos del perfil. Asegúrate de haber iniciado sesión.",-1)]))),S("div",NC,[be(o,{to:"/map",class:"back-to-map-button"},{default:He(()=>e[8]||(e[8]=[S("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[S("path",{d:"M21 14.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5v-5c0-2.485 4.03-4.5 9-4.5s9 2.015 9 4.5v5z",stroke:"currentColor","stroke-width":"2"}),S("path",{d:"M21 9.5c0 2.485-4.03 4.5-9 4.5s-9-2.015-9-4.5",stroke:"currentColor","stroke-width":"2"})],-1),ze(" Volver al Mapa ")])),_:1})])])}const LC=vr(wC,[["render",MC],["__scopeId","data-v-af96e400"]]),FC=[{path:"/",name:"Home",component:LS,meta:{requiresGuest:!0}},{path:"/map",name:"Map",component:iP,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:CP,meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:yC,meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:LC,meta:{requiresAuth:!0}}],L_=KR({history:TR(),routes:FC}),UC=()=>new Promise(t=>{const e=Yc(St,n=>{e(),t(n)})});L_.beforeEach(async(t,e,n)=>{const r=await UC();if(t.meta.requiresAuth&&!r)return n("/login");if(t.meta.requiresGuest&&r)return n("/map");n()});var jC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function BC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(jC,function(){return function(n){function r(i){if(s[i])return s[i].exports;var o=s[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var s={};return r.m=n,r.c=s,r.p="dist/",r(0)}([function(n,r,s){function i(J){return J&&J.__esModule?J:{default:J}}var o=Object.assign||function(J){for(var Ie=1;Ie<arguments.length;Ie++){var we=arguments[Ie];for(var ie in we)Object.prototype.hasOwnProperty.call(we,ie)&&(J[ie]=we[ie])}return J},l=s(1),c=(i(l),s(6)),u=i(c),d=s(7),p=i(d),m=s(8),g=i(m),P=s(9),k=i(P),V=s(10),U=i(V),j=s(11),F=i(j),B=s(14),Z=i(B),te=[],R=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},y=function(){var J=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(J&&(R=!0),R)return te=(0,F.default)(te,v),(0,U.default)(te,v.once),te},A=function(){te=(0,Z.default)(),y()},T=function(){te.forEach(function(J,Ie){J.node.removeAttribute("data-aos"),J.node.removeAttribute("data-aos-easing"),J.node.removeAttribute("data-aos-duration"),J.node.removeAttribute("data-aos-delay")})},w=function(J){return J===!0||J==="mobile"&&k.default.mobile()||J==="phone"&&k.default.phone()||J==="tablet"&&k.default.tablet()||typeof J=="function"&&J()===!0},E=function(J){v=o(v,J),te=(0,Z.default)();var Ie=document.all&&!window.atob;return w(v.disable)||Ie?T():(v.disableMutationObserver||g.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?y(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){y(!0)}):document.addEventListener(v.startEvent,function(){y(!0)}),window.addEventListener("resize",(0,p.default)(y,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,p.default)(y,v.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,U.default)(te,v.once)},v.throttleDelay)),v.disableMutationObserver||g.default.ready("[data-aos]",A),te)};n.exports={init:E,refresh:y,refreshHard:A}},function(n,r){},,,,,function(n,r){(function(s){function i(w,E,J){function Ie(C){var N=Je,M=Xe;return Je=Xe=void 0,ee=C,O=w.apply(M,N)}function we(C){return ee=C,z=setTimeout(Ye,E),Ee?Ie(C):O}function ie(C){var N=C-W,M=C-ee,L=E-N;return I?A(L,qe-M):L}function me(C){var N=C-W,M=C-ee;return W===void 0||N>=E||N<0||I&&M>=qe}function Ye(){var C=T();return me(C)?gt(C):void(z=setTimeout(Ye,ie(C)))}function gt(C){return z=void 0,b&&Je?Ie(C):(Je=Xe=void 0,O)}function _t(){z!==void 0&&clearTimeout(z),ee=0,Je=W=Xe=z=void 0}function Ne(){return z===void 0?O:gt(T())}function Se(){var C=T(),N=me(C);if(Je=arguments,Xe=this,W=C,N){if(z===void 0)return we(W);if(I)return z=setTimeout(Ye,E),Ie(W)}return z===void 0&&(z=setTimeout(Ye,E)),O}var Je,Xe,qe,O,z,W,ee=0,Ee=!1,I=!1,b=!0;if(typeof w!="function")throw new TypeError(m);return E=d(E)||0,l(J)&&(Ee=!!J.leading,I="maxWait"in J,qe=I?y(d(J.maxWait)||0,E):qe,b="trailing"in J?!!J.trailing:b),Se.cancel=_t,Se.flush=Ne,Se}function o(w,E,J){var Ie=!0,we=!0;if(typeof w!="function")throw new TypeError(m);return l(J)&&(Ie="leading"in J?!!J.leading:Ie,we="trailing"in J?!!J.trailing:we),i(w,E,{leading:Ie,maxWait:E,trailing:we})}function l(w){var E=typeof w>"u"?"undefined":p(w);return!!w&&(E=="object"||E=="function")}function c(w){return!!w&&(typeof w>"u"?"undefined":p(w))=="object"}function u(w){return(typeof w>"u"?"undefined":p(w))=="symbol"||c(w)&&v.call(w)==P}function d(w){if(typeof w=="number")return w;if(u(w))return g;if(l(w)){var E=typeof w.valueOf=="function"?w.valueOf():w;w=l(E)?E+"":E}if(typeof w!="string")return w===0?w:+w;w=w.replace(k,"");var J=U.test(w);return J||j.test(w)?F(w.slice(2),J?2:8):V.test(w)?g:+w}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},m="Expected a function",g=NaN,P="[object Symbol]",k=/^\s+|\s+$/g,V=/^[-+]0x[0-9a-f]+$/i,U=/^0b[01]+$/i,j=/^0o[0-7]+$/i,F=parseInt,B=(typeof s>"u"?"undefined":p(s))=="object"&&s&&s.Object===Object&&s,Z=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,te=B||Z||Function("return this")(),R=Object.prototype,v=R.toString,y=Math.max,A=Math.min,T=function(){return te.Date.now()};n.exports=o}).call(r,function(){return this}())},function(n,r){(function(s){function i(T,w,E){function J(b){var C=Se,N=Je;return Se=Je=void 0,W=b,qe=T.apply(N,C)}function Ie(b){return W=b,O=setTimeout(me,w),ee?J(b):qe}function we(b){var C=b-z,N=b-W,M=w-C;return Ee?y(M,Xe-N):M}function ie(b){var C=b-z,N=b-W;return z===void 0||C>=w||C<0||Ee&&N>=Xe}function me(){var b=A();return ie(b)?Ye(b):void(O=setTimeout(me,we(b)))}function Ye(b){return O=void 0,I&&Se?J(b):(Se=Je=void 0,qe)}function gt(){O!==void 0&&clearTimeout(O),W=0,Se=z=Je=O=void 0}function _t(){return O===void 0?qe:Ye(A())}function Ne(){var b=A(),C=ie(b);if(Se=arguments,Je=this,z=b,C){if(O===void 0)return Ie(z);if(Ee)return O=setTimeout(me,w),J(z)}return O===void 0&&(O=setTimeout(me,w)),qe}var Se,Je,Xe,qe,O,z,W=0,ee=!1,Ee=!1,I=!0;if(typeof T!="function")throw new TypeError(p);return w=u(w)||0,o(E)&&(ee=!!E.leading,Ee="maxWait"in E,Xe=Ee?v(u(E.maxWait)||0,w):Xe,I="trailing"in E?!!E.trailing:I),Ne.cancel=gt,Ne.flush=_t,Ne}function o(T){var w=typeof T>"u"?"undefined":d(T);return!!T&&(w=="object"||w=="function")}function l(T){return!!T&&(typeof T>"u"?"undefined":d(T))=="object"}function c(T){return(typeof T>"u"?"undefined":d(T))=="symbol"||l(T)&&R.call(T)==g}function u(T){if(typeof T=="number")return T;if(c(T))return m;if(o(T)){var w=typeof T.valueOf=="function"?T.valueOf():T;T=o(w)?w+"":w}if(typeof T!="string")return T===0?T:+T;T=T.replace(P,"");var E=V.test(T);return E||U.test(T)?j(T.slice(2),E?2:8):k.test(T)?m:+T}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},p="Expected a function",m=NaN,g="[object Symbol]",P=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,U=/^0o[0-7]+$/i,j=parseInt,F=(typeof s>"u"?"undefined":d(s))=="object"&&s&&s.Object===Object&&s,B=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,Z=F||B||Function("return this")(),te=Object.prototype,R=te.toString,v=Math.max,y=Math.min,A=function(){return Z.Date.now()};n.exports=i}).call(r,function(){return this}())},function(n,r){function s(d){var p=void 0,m=void 0;for(p=0;p<d.length;p+=1)if(m=d[p],m.dataset&&m.dataset.aos||m.children&&s(m.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function l(d,p){var m=window.document,g=i(),P=new g(c);u=p,P.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(d){d&&d.forEach(function(p){var m=Array.prototype.slice.call(p.addedNodes),g=Array.prototype.slice.call(p.removedNodes),P=m.concat(g);if(s(P))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:o,ready:l}},function(n,r){function s(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function m(g,P){for(var k=0;k<P.length;k++){var V=P[k];V.enumerable=V.enumerable||!1,V.configurable=!0,"value"in V&&(V.writable=!0),Object.defineProperty(g,V.key,V)}}return function(g,P,k){return P&&m(g.prototype,P),k&&m(g,k),g}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,p=function(){function m(){s(this,m)}return o(m,[{key:"phone",value:function(){var g=i();return!(!l.test(g)&&!c.test(g.substr(0,4)))}},{key:"mobile",value:function(){var g=i();return!(!u.test(g)&&!d.test(g.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();r.default=new p},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(o,l,c){var u=o.node.getAttribute("data-aos-once");l>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!c&&u!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,l){var c=window.pageYOffset,u=window.innerHeight;o.forEach(function(d,p){s(d,u+c,l)})};r.default=i},function(n,r,s){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=s(12),l=i(o),c=function(u,d){return u.forEach(function(p,m){p.node.classList.add("aos-init"),p.position=(0,l.default)(p.node,d.offset)}),u};r.default=c},function(n,r,s){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=s(13),l=i(o),c=function(u,d){var p=0,m=0,g=window.innerHeight,P={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(P.offset&&!isNaN(P.offset)&&(m=parseInt(P.offset)),P.anchor&&document.querySelectorAll(P.anchor)&&(u=document.querySelectorAll(P.anchor)[0]),p=(0,l.default)(u).top,P.anchorPlacement){case"top-bottom":break;case"center-bottom":p+=u.offsetHeight/2;break;case"bottom-bottom":p+=u.offsetHeight;break;case"top-center":p+=g/2;break;case"bottom-center":p+=g/2+u.offsetHeight;break;case"center-center":p+=g/2+u.offsetHeight/2;break;case"top-top":p+=g;break;case"bottom-top":p+=u.offsetHeight+g;break;case"center-top":p+=u.offsetHeight/2+g}return P.anchorPlacement||P.offset||isNaN(d)||(m=d),p+m};r.default=c},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(i){for(var o=0,l=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),l+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:l,left:o}};r.default=s},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var s=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};r.default=s}])})})(F_);var qC=F_.exports;const $C=BC(qC),xu=Bw(CS),HC=Hw();xu.use(HC);xu.use(L_);xu.mount("#app").$nextTick(()=>{$C.init({duration:800,easing:"ease-in-out",once:!0,mirror:!1})});export{jC as c,BC as g};
