import{ag as b,a1 as L,ah as P,P as w,t as B,W as H,ad as q,J as G,ai as k,aj as U,ak as Y,x as p,G as c,al as N,y as V,A as O,am as R,an as F,ao as $,ap as A,B as T,aq as z,ar as J,as as K,at as Q,au as X,av as Z,D as ee,p as te,c as re,k as ae}from"./runtime.CY-7AVWH.js";function ne(e){var t=P,r=w;b(null),L(null);try{return e()}finally{b(t),L(r)}}const C=new Set,D=new Set;function oe(e,t,r,s){function n(a){if(s.capture||g.call(t,a),!a.cancelBubble)return ne(()=>r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function ve(e,t,r,s,n){var a={capture:s,passive:n},o=oe(e,t,r,a);(t===document.body||t===window||t===document)&&B(()=>{t.removeEventListener(e,o,a)})}function pe(e){for(var t=0;t<e.length;t++)C.add(e[t]);for(var r of D)r(e)}function g(e){var t=this,r=t.ownerDocument,s=e.type,n=e.composedPath?.()||[],a=n[0]||e.target,o=0,f=e.__root;if(f){var l=n.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var h=n.indexOf(t);if(h===-1)return;l<=h&&(o=l)}if(a=n[o]||e.target,a!==t){q(e,"currentTarget",{configurable:!0,get(){return a||r}});var S=P,d=w;b(null),L(null);try{for(var i,u=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var v=a["__"+s];if(v!==void 0&&!a.disabled)if(G(v)){var[W,...j]=v;W.apply(a,[e,...j])}else v.call(a,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||m===t||m===null)break;a=m}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=t,delete e.currentTarget,b(S),L(d)}}}function ie(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=w;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function he(e,t){var r=(t&U)!==0,s=(t&Y)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return _(c,null),c;n===void 0&&(n=ie(a?e:"<!>"+e),r||(n=k(n)));var o=s?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=k(o),l=o.lastChild;_(f,l)}else _(o,o);return o}}function me(e=""){if(!p){var t=N(e+"");return _(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=N()),O(r)),_(r,r),r}function ye(){if(p)return _(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=N();return e.append(t,r),_(t,r),e}function ge(e,t){if(p){w.nodes_end=c,V();return}e!==null&&e.before(t)}function we(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const se=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ee(e){return se.includes(e)}const ue={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Te(e){return e=e.toLowerCase(),ue[e]??e}const ce=["touchstart","touchmove"];function de(e){return ce.includes(e)}let M=!0;function be(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??=e.nodeValue)&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function le(e,t){return x(e,t)}function Le(e,t){R(),t.intro=t.intro??!1;const r=t.target,s=p,n=c;try{for(var a=k(r);a&&(a.nodeType!==8||a.data!==F);)a=$(a);if(!a)throw A;T(!0),O(a),V();const o=x(e,{...t,anchor:a});if(c===null||c.nodeType!==8||c.data!==z)throw J(),A;return T(!1),o}catch(o){if(o===A)return t.recover===!1&&K(),R(),Q(r),T(!1),le(e,t);throw o}finally{T(s),O(n)}}const y=new Map;function x(e,{target:t,anchor:r,props:s={},events:n,context:a,intro:o=!0}){R();var f=new Set,l=d=>{for(var i=0;i<d.length;i++){var u=d[i];if(!f.has(u)){f.add(u);var m=de(u);t.addEventListener(u,g,{passive:m});var v=y.get(u);v===void 0?(document.addEventListener(u,g,{passive:m}),y.set(u,1)):y.set(u,v+1)}}};l(X(C)),D.add(l);var h=void 0,S=Z(()=>{var d=r??t.appendChild(N());return ee(()=>{if(a){te({});var i=ae;i.c=a}n&&(s.$$events=n),p&&_(d,null),M=o,h=e(d,s)||{},M=!0,p&&(w.nodes_end=c),a&&re()}),()=>{for(var i of f){t.removeEventListener(i,g);var u=y.get(i);--u===0?(document.removeEventListener(i,g),y.delete(i)):y.set(i,u)}D.delete(l),d!==r&&d.parentNode?.removeChild(d)}});return I.set(h,S),h}let I=new WeakMap;function Ne(e,t){const r=I.get(e);return r?(I.delete(e),r(t)):Promise.resolve()}const fe="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(fe);export{ge as a,Ee as b,oe as c,pe as d,ve as e,ye as f,me as g,Le as h,we as i,M as j,le as m,Te as n,be as s,he as t,Ne as u,ne as w};
