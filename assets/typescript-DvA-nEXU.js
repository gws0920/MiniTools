import{y as P,B as S,C as Q,D as A,F as N,G as L,e as R,H as T}from"./base-bflHmD82.js";import{A as C,m as j}from"./index-DpTwNufQ.js";function O(e){var r;const t=S(e);return(r=t==null?void 0:t.$el)!=null?r:t}const y=R?window:void 0;function v(...e){let r,t,n,u;if(Q(e[0])||Array.isArray(e[0])?([t,n,u]=e,r=y):[r,t,n,u]=e,!r)return A;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const p=[],i=()=>{p.forEach(a=>a()),p.length=0},l=(a,f,s,o)=>(a.addEventListener(f,s,o),()=>a.removeEventListener(f,s,o)),d=C(()=>[O(r),S(u)],([a,f])=>{i(),a&&p.push(...t.flatMap(s=>n.map(o=>l(a,s,o,f))))},{immediate:!0,flush:"post"}),m=()=>{d(),i()};return P(m),m}let _=!1;function q(e,r,t={}){const{window:n=y,ignore:u=[],capture:p=!0,detectIframe:i=!1}=t;if(!n)return;T&&!_&&(_=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",A)));let l=!0;const d=s=>u.some(o=>{if(typeof o=="string")return Array.from(n.document.querySelectorAll(o)).some(c=>c===s.target||s.composedPath().includes(c));{const c=O(o);return c&&(s.target===c||s.composedPath().includes(c))}}),a=[v(n,"click",s=>{const o=O(e);if(!(!o||o===s.target||s.composedPath().includes(o))){if(s.detail===0&&(l=!d(s)),!l){l=!0;return}r(s)}},{passive:!0,capture:p}),v(n,"pointerdown",s=>{const o=O(e);o&&(l=!s.composedPath().includes(o)&&!d(s))},{passive:!0}),i&&v(n,"blur",s=>{var o;const c=O(e);((o=n.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(n.document.activeElement))&&r(s)})].filter(Boolean);return()=>a.forEach(s=>s())}function B(e,r=!1){const t=j(),n=()=>t.value=!!e();return n(),N(n,r),t}const b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";b[I]=b[I]||{};var h=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,r)=>{var t={};for(var n in e)W.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&h)for(var n of h(e))r.indexOf(n)<0&&k.call(e,n)&&(t[n]=e[n]);return t};function D(e,r,t={}){const n=t,{window:u=y}=n,p=x(n,["window"]);let i;const l=B(()=>u&&"ResizeObserver"in u),d=()=>{i&&(i.disconnect(),i=void 0)},m=C(()=>O(e),f=>{d(),l.value&&u&&f&&(i=new ResizeObserver(r),i.observe(f,p))},{immediate:!0,flush:"post"}),a=()=>{d(),m()};return P(a),{isSupported:l,stop:a}}var w;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(w||(w={}));var $=Object.defineProperty,E=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?$(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,G=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&g(e,t,r[t]);if(E)for(var t of E(r))z.call(r,t)&&g(e,t,r[t]);return e};const H={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};G({linear:L},H);const K=e=>e;export{v as a,O as b,K as m,q as o,D as u};
