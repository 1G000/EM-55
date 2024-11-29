import{c as P,a as g,h as x,r as q,g as $,i as be,s as Ge,P as qt,p as He,n as j,b as Pe,w as C,o as R,d as A,e as Ct,l as N,f as $e,j as Xe,k as St,T as kt,m as Ye,q as ye,t as Bt,u as Lt,v as we,x as Tt,y as Ze,z as Je,A as I,B as pe,C as et,D as Et,E as J,F as Ht,G as O,H as ee,I as M,J as Q,K as z,L as ce,M as _e,N as ze,O as Me,Q as Pt}from"./index.badb667f.js";import{h as F,a as tt,b as $t}from"./render.f1930b0f.js";import{u as _t,a as zt,v as Mt,g as de,b as nt,c as At,d as Ae,e as Rt,n as lt,Q as Qt,f as X,h as Wt}from"./QBtn.2d286876.js";var Dt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const n=g(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>x("div",{class:n.value},F(l.default))}});const xe={dark:{type:Boolean,default:null}};function qe(e,l){return g(()=>e.dark===null?l.dark.isActive:e.dark)}var Vt=P({name:"QItem",props:{...xe,..._t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=$(),o=qe(e,t),{hasLink:r,linkAttrs:i,linkClass:f,linkTag:d,navigateOnClick:s}=zt(),v=q(null),b=q(null),p=g(()=>e.clickable===!0||r.value===!0||e.tag==="label"),a=g(()=>e.disable!==!0&&p.value===!0),m=g(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=g(()=>{if(e.insetLevel===void 0)return null;const h=t.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function L(h){a.value===!0&&(b.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===v.value?b.value.focus():document.activeElement===b.value&&v.value.focus()),s(h))}function S(h){if(a.value===!0&&be(h,[13,32])===!0){Ge(h),h.qKeyEvent=!0;const c=new MouseEvent("click",h);c.qKeyEvent=!0,v.value.dispatchEvent(c)}n("keyup",h)}function u(){const h=tt(l.default,[]);return a.value===!0&&h.unshift(x("div",{class:"q-focus-helper",tabindex:-1,ref:b})),h}return()=>{const h={ref:v,class:m.value,style:T.value,role:"listitem",onClick:L,onKeyup:S};return a.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,i.value)):p.value===!0&&(h["aria-disabled"]="true"),x(d.value,h,u())}}});const Ft=["ul","ol"];var Ot=P({name:"QList",props:{...xe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=$(),t=qe(e,n.proxy.$q),o=g(()=>Ft.includes(e.tag)?null:"list"),r=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>x(e.tag,{class:r.value,role:o.value},F(l.default))}}),It=P({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:l}){const n=g(()=>{const t=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${t.length!==0?" "+t:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>x("div",{class:n.value},F(l.default))}});function jt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),qt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Nt={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Kt={...Nt,contextMenu:Boolean};function Ut({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:o,emit:r}=$(),i=q(null);let f=null;function d(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&s.toggle(a)},contextClick(a){o.hide(a),He(a),j(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:He,mobileTouch(a){if(s.mobileCleanup(a),d(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const m=a.target;Pe(s,"anchor",[[m,"touchmove","mobileCleanup","passive"],[m,"touchend","mobileCleanup","passive"],[m,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&jt()}}),n=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let m;a===!0?o.$q.platform.is.mobile===!0?m=[[i.value,"touchstart","mobileTouch","passive"]]:m=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:m=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Pe(s,"anchor",m)});function v(){Ct(s,"anchor")}function b(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function p(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)b(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,a=>{i.value!==null&&(v(),n(a))}),C(()=>t.target,()=>{i.value!==null&&v(),p()}),C(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?v():n())}),R(()=>{p(),l!==!0&&t.modelValue===!0&&i.value===null&&r("update:modelValue",!1)}),A(()=>{f!==null&&clearTimeout(f),v()}),{anchorEl:i,canShow:d,anchorEvents:s}}function Gt(e,l){const n=q(null);let t;function o(f,d){const s=`${d!==void 0?"add":"remove"}EventListener`,v=d!==void 0?d:t;f!==window&&f[s]("scroll",v,N.passive),window[s]("scroll",v,N.passive),t=d}function r(){n.value!==null&&(o(n.value),n.value=null)}const i=C(()=>e.noParentEvent,()=>{n.value!==null&&(r(),l())});return A(i),{localScrollTarget:n,unconfigureScrollTarget:r,changeScrollEvent:o}}const Xt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Yt=["beforeShow","show","beforeHide","hide"];function Zt({showing:e,canShow:l,hideOnRouteChange:n,handleShow:t,handleHide:o,processOnMount:r}){const i=$(),{props:f,emit:d,proxy:s}=i;let v;function b(u){e.value===!0?m(u):p(u)}function p(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||l!==void 0&&l(u)!==!0)return;const h=f["onUpdate:modelValue"]!==void 0;h===!0&&(d("update:modelValue",!0),v=u,j(()=>{v===u&&(v=void 0)})),(f.modelValue===null||h===!1)&&a(u)}function a(u){e.value!==!0&&(e.value=!0,d("beforeShow",u),t!==void 0?t(u):d("show",u))}function m(u){if(f.disable===!0)return;const h=f["onUpdate:modelValue"]!==void 0;h===!0&&(d("update:modelValue",!1),v=u,j(()=>{v===u&&(v=void 0)})),(f.modelValue===null||h===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,d("beforeHide",u),o!==void 0?o(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?a:T)(v)}C(()=>f.modelValue,L),n!==void 0&&Mt(i)===!0&&C(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),r===!0&&R(()=>{L(f.modelValue)});const S={show:p,hide:m,toggle:b};return Object.assign(s,S),S}let G=[],Z=[];function ot(e){Z=Z.filter(l=>l!==e)}function Jt(e){ot(e),Z.push(e)}function Re(e){ot(e),Z.length===0&&G.length!==0&&(G[G.length-1](),G=[])}function en(e){Z.length===0?e():G.push(e)}let tn=1,nn=document.body;function ln(e,l){const n=document.createElement("div");if(n.id=l!==void 0?`q-portal--${l}--${tn++}`:e,$e.globalNodes!==void 0){const t=$e.globalNodes.class;t!==void 0&&(n.className=t)}return nn.appendChild(n),n}function on(e){e.remove()}const Y=[];function an(e,l){do{if(e.$options.name==="QMenu"){if(e.hide(l),e.$props.separateClosePopup===!0)return de(e)}else if(e.__qPortal===!0){const n=de(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(l),n):e}e=de(e)}while(e!=null)}const rn=P({name:"QPortal",setup(e,{slots:l}){return()=>l.default()}});function un(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function sn(e,l,n,t){const o=q(!1),r=q(!1);let i=null;const f={},d=t==="dialog"&&un(e);function s(b){if(b===!0){Re(f),r.value=!0;return}r.value=!1,o.value===!1&&(d===!1&&i===null&&(i=ln(!1,t)),o.value=!0,Y.push(e.proxy),Jt(f))}function v(b){if(r.value=!1,b!==!0)return;Re(f),o.value=!1;const p=Y.indexOf(e.proxy);p!==-1&&Y.splice(p,1),i!==null&&(on(i),i=null)}return Xe(()=>{v(!0)}),e.proxy.__qPortal=!0,St(e.proxy,"contentEl",()=>l.value),{showPortal:s,hidePortal:v,portalIsActive:o,portalIsAccessible:r,renderPortal:()=>d===!0?n():o.value===!0?[x(kt,{to:i},x(rn,n))]:void 0}}const it={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function cn(e,l=()=>{},n=()=>{}){return{transitionProps:g(()=>{const t=`q-transition--${e.transitionShow||l()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function dn(){let e;const l=$();function n(){e=void 0}return Ye(n),A(n),{removeTick:n,registerTick(t){e=t,j(()=>{e===t&&(nt(l)===!1&&e(),e=void 0)})}}}function fn(){let e=null;const l=$();function n(){e!==null&&(clearTimeout(e),e=null)}return Ye(n),A(n),{removeTimeout:n,registerTimeout(t,o){n(),nt(l)===!1&&(e=setTimeout(()=>{e=null,t()},o))}}}const at=[Element,String],vn=[null,document,document.body,document.scrollingElement,document.documentElement];function rt(e,l){let n=At(l);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return vn.includes(n)?window:n}function hn(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function mn(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let te;function le(){if(te!==void 0)return te;const e=document.createElement("p"),l=document.createElement("div");Ae(e,{width:"100%",height:"200px"}),Ae(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const n=e.offsetWidth;l.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=l.clientWidth),l.remove(),te=n-t,te}const W=[];let K;function gn(e){K=e.keyCode===27}function bn(){K===!0&&(K=!1)}function yn(e){K===!0&&(K=!1,be(e,27)===!0&&W[W.length-1](e))}function ut(e){window[e]("keydown",gn),window[e]("blur",bn),window[e]("keyup",yn),K=!1}function wn(e){ye.is.desktop===!0&&(W.push(e),W.length===1&&ut("addEventListener"))}function Qe(e){const l=W.indexOf(e);l!==-1&&(W.splice(l,1),W.length===0&&ut("removeEventListener"))}const D=[];function st(e){D[D.length-1](e)}function pn(e){ye.is.desktop===!0&&(D.push(e),D.length===1&&document.body.addEventListener("focusin",st))}function xn(e){const l=D.indexOf(e);l!==-1&&(D.splice(l,1),D.length===0&&document.body.removeEventListener("focusin",st))}const{notPassiveCapture:oe}=N,V=[];function ie(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=Y.length-1;for(;n>=0;){const t=Y[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=V.length-1;t>=0;t--){const o=V[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(l)===!1)&&(l===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(l)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function qn(e){V.push(e),V.length===1&&(document.addEventListener("mousedown",ie,oe),document.addEventListener("touchstart",ie,oe))}function We(e){const l=V.findIndex(n=>n===e);l!==-1&&(V.splice(l,1),V.length===0&&(document.removeEventListener("mousedown",ie,oe),document.removeEventListener("touchstart",ie,oe)))}let De,Ve;function Fe(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Cn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const he={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{he[`${e}#ltr`]=e,he[`${e}#rtl`]=e});function Oe(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:he[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function Sn(e,l){let{top:n,left:t,right:o,bottom:r,width:i,height:f}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],r+=l[1],o+=l[0],i+=l[0],f+=l[1]),{top:n,bottom:r,height:f,left:t,right:o,width:i,middle:t+(o-t)/2,center:n+(r-n)/2}}function kn(e,l,n){let{top:t,left:o}=e.getBoundingClientRect();return t+=l.top,o+=l.left,n!==void 0&&(t+=n[1],o+=n[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function Bn(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Ie(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function ct(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ct(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:o,anchorOrigin:r,selfOrigin:i,absoluteOffset:f,fit:d,cover:s,maxHeight:v,maxWidth:b}=e;if(ye.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:k,offsetTop:H}=window.visualViewport;k!==De&&(E.setProperty("--q-pe-left",k+"px"),De=k),H!==Ve&&(E.setProperty("--q-pe-top",H+"px"),Ve=H)}const{scrollLeft:p,scrollTop:a}=n,m=f===void 0?Sn(o,s===!0?[0,0]:t):kn(o,f,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b,maxHeight:v,visibility:"visible"});const{offsetWidth:T,offsetHeight:L}=n,{elWidth:S,elHeight:u}=d===!0||s===!0?{elWidth:Math.max(m.width,T),elHeight:s===!0?Math.max(m.height,L):L}:{elWidth:T,elHeight:L};let h={maxWidth:b,maxHeight:v};(d===!0||s===!0)&&(h.minWidth=m.width+"px",s===!0&&(h.minHeight=m.height+"px")),Object.assign(n.style,h);const c=Bn(S,u);let w=Ie(m,c,r,i);if(f===void 0||t===void 0)fe(w,m,c,r,i);else{const{top:E,left:k}=w;fe(w,m,c,r,i);let H=!1;if(w.top!==E){H=!0;const _=2*t[1];m.center=m.top-=_,m.bottom-=_+2}if(w.left!==k){H=!0;const _=2*t[0];m.middle=m.left-=_,m.right-=_+2}H===!0&&(w=Ie(m,c,r,i),fe(w,m,c,r,i))}h={top:w.top+"px",left:w.left+"px"},w.maxHeight!==void 0&&(h.maxHeight=w.maxHeight+"px",m.height>w.maxHeight&&(h.minHeight=h.maxHeight)),w.maxWidth!==void 0&&(h.maxWidth=w.maxWidth+"px",m.width>w.maxWidth&&(h.minWidth=h.maxWidth)),Object.assign(n.style,h),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==p&&(n.scrollLeft=p)}function fe(e,l,n,t,o){const r=n.bottom,i=n.right,f=le(),d=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+r>d)if(o.vertical==="center")e.top=l[t.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(l[t.vertical]>d/2){const v=Math.min(d,t.vertical==="center"?l.center:t.vertical===o.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,v),e.top=Math.max(0,v-r)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===o.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),o.horizontal==="middle")e.left=l[t.horizontal]>s/2?Math.max(0,s-i):0;else if(l[t.horizontal]>s/2){const v=Math.min(s,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.right:l.left);e.maxWidth=Math.min(i,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.left:l.right),e.maxWidth=Math.min(i,s-e.left)}var Ln=P({name:"QMenu",inheritAttrs:!1,props:{...Kt,...Xt,...xe,...it,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Fe},self:{type:String,validator:Fe},offset:{type:Array,validator:Cn},scrollTarget:at,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Yt,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:t}){let o=null,r,i,f;const d=$(),{proxy:s}=d,{$q:v}=s,b=q(null),p=q(!1),a=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),m=qe(e,v),{registerTick:T,removeTick:L}=dn(),{registerTimeout:S}=fn(),{transitionProps:u,transitionStyle:h}=cn(e),{localScrollTarget:c,changeScrollEvent:w,unconfigureScrollTarget:E}=Gt(e,Te),{anchorEl:k,canShow:H}=Ut({showing:p}),{hide:_}=Zt({showing:p,canShow:H,handleShow:gt,handleHide:bt,hideOnRouteChange:a,processOnMount:!0}),{showPortal:Ce,hidePortal:Se,renderPortal:ft}=sn(d,b,wt,"menu"),ae={anchorEl:k,innerRef:b,onClickOutside(y){if(e.persistent!==!0&&p.value===!0)return _(y),(y.type==="touchstart"||y.target.classList.contains("q-dialog__backdrop"))&&Ge(y),!0}},ke=g(()=>Oe(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),vt=g(()=>e.cover===!0?ke.value:Oe(e.self||"top start",v.lang.rtl)),ht=g(()=>(e.square===!0?" q-menu--square":"")+(m.value===!0?" q-menu--dark q-dark":"")),mt=g(()=>e.autoClose===!0?{onClick:yt}:{}),Be=g(()=>p.value===!0&&e.persistent!==!0);C(Be,y=>{y===!0?(wn(ue),qn(ae)):(Qe(ue),We(ae))});function re(){en(()=>{let y=b.value;y&&y.contains(document.activeElement)!==!0&&(y=y.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||y.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||y.querySelector("[autofocus], [data-autofocus]")||y,y.focus({preventScroll:!0}))})}function gt(y){if(o=e.noRefocus===!1?document.activeElement:null,pn(Ee),Ce(),Te(),r=void 0,y!==void 0&&(e.touchPosition||e.contextMenu)){const se=Bt(y);if(se.left!==void 0){const{top:pt,left:xt}=k.value.getBoundingClientRect();r={left:se.left-xt,top:se.top-pt}}}i===void 0&&(i=C(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{U(),e.noFocus!==!0&&re()}),S(()=>{v.platform.is.ios===!0&&(f=e.autoClose,b.value.click()),U(),Ce(!0),n("show",y)},e.transitionDuration)}function bt(y){L(),Se(),Le(!0),o!==null&&(y===void 0||y.qClickOutside!==!0)&&(((y&&y.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),S(()=>{Se(!0),n("hide",y)},e.transitionDuration)}function Le(y){r=void 0,i!==void 0&&(i(),i=void 0),(y===!0||p.value===!0)&&(xn(Ee),E(),We(ae),Qe(ue)),y!==!0&&(o=null)}function Te(){(k.value!==null||e.scrollTarget!==void 0)&&(c.value=rt(k.value,e.scrollTarget),w(c.value,U))}function yt(y){f!==!0?(an(s,y),n("click",y)):f=!1}function Ee(y){Be.value===!0&&e.noFocus!==!0&&Rt(b.value,y.target)!==!0&&re()}function ue(y){n("escapeKey"),_(y)}function U(){ct({targetEl:b.value,offset:e.offset,anchorEl:k.value,anchorOrigin:ke.value,selfOrigin:vt.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function wt(){return x(Lt,u.value,()=>p.value===!0?x("div",{role:"menu",...t,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+ht.value,t.class],style:[t.style,h.value],...mt.value},F(l.default)):null)}return A(Le),Object.assign(s,{focus:re,updatePosition:U}),ft}});let ve,ne=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const Tn=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return l=>{const n=new Uint8Array(l);return e.getRandomValues(n),n}}return l=>{const n=[];for(let t=l;t>0;t--)n.push(Math.floor(Math.random()*256));return n}})(),je=4096;function me(){(ve===void 0||ne+16>je)&&(ne=0,ve=Tn(je));const e=Array.prototype.slice.call(ve,ne,ne+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}function En(e){return e==null?null:e}function Ne(e,l){return e==null?l===!0?`f_${me()}`:null:e}function Hn({getValue:e,required:l=!0}={}){if(we.value===!0){const n=e!==void 0?q(En(e())):q(null);return l===!0&&n.value===null&&R(()=>{n.value=`f_${me()}`}),e!==void 0&&C(e,t=>{n.value=Ne(t,l)}),n}return e!==void 0?g(()=>Ne(e(),l)):q(`f_${me()}`)}const Pn=Object.keys(lt);function $n(e){return Pn.reduce((l,n)=>{const t=e[n];return t!==void 0&&(l[n]=t),l},{})}var _n=P({name:"QBtnDropdown",props:{...lt,...it,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:l,emit:n}){const{proxy:t}=$(),o=q(e.modelValue),r=q(null),i=Hn(),f=g(()=>{const c={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":i.value,"aria-label":e.toggleAriaLabel||t.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(c["aria-disabled"]="true"),c}),d=g(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),s=g(()=>Wt(e)),v=g(()=>$n(e));C(()=>e.modelValue,c=>{r.value!==null&&r.value[c?"show":"hide"]()}),C(()=>e.split,h);function b(c){o.value=!0,n("beforeShow",c)}function p(c){n("show",c),n("update:modelValue",!0)}function a(c){o.value=!1,n("beforeHide",c)}function m(c){n("hide",c),n("update:modelValue",!1)}function T(c){n("click",c)}function L(c){Tt(c),h(),n("click",c)}function S(c){r.value!==null&&r.value.toggle(c)}function u(c){r.value!==null&&r.value.show(c)}function h(c){r.value!==null&&r.value.hide(c)}return Object.assign(t,{show:u,hide:h,toggle:S}),R(()=>{e.modelValue===!0&&u()}),()=>{const c=[x(Qt,{class:d.value,name:e.dropdownIcon||t.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&c.push(x(Ln,{ref:r,id:i.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:b,onShow:p,onBeforeHide:a,onHide:m},l.default)),e.split===!1?x(X,{class:"q-btn-dropdown q-btn-dropdown--simple",...v.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:T},{default:()=>F(l.label,[]).concat(c),loading:l.loading}):x(It,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...s.value,glossy:e.glossy,stretch:e.stretch},()=>[x(X,{class:"q-btn-dropdown--current",...v.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:L},{default:l.label,loading:l.loading}),x(X,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...s.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>c)])}}}),zn=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const n=g(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>x("div",{class:n.value,role:"toolbar"},F(l.default))}});function Mn(){const e=q(!we.value);return e.value===!1&&R(()=>{e.value=!0}),{isHydrated:e}}const dt=typeof ResizeObserver!="undefined",Ke=dt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ge=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,o={width:-1,height:-1};function r(d){d===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:d,offsetHeight:s}=t;(d!==o.width||s!==o.height)&&(o={width:d,height:s},l("resize",o))}}const{proxy:f}=$();if(f.trigger=r,dt===!0){let d;const s=v=>{t=f.$el.parentNode,t?(d=new ResizeObserver(r),d.observe(t),i()):v!==!0&&j(()=>{s(!0)})};return R(()=>{s()}),A(()=>{n!==null&&clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():t&&d.unobserve(t))}),Ze}else{let v=function(){n!==null&&(clearTimeout(n),n=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",r,N.passive),s=void 0)},b=function(){v(),t&&t.contentDocument&&(s=t.contentDocument.defaultView,s.addEventListener("resize",r,N.passive),i())};const{isHydrated:d}=Mn();let s;return R(()=>{j(()=>{t=f.$el,t&&b()})}),A(v),()=>{if(d.value===!0)return x("object",{class:"q--avoid-card-border",style:Ke.style,tabindex:-1,type:"text/html",data:Ke.url,"aria-hidden":"true",onLoad:b})}}}}),An=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=$(),o=Je(pe,I);if(o===I)return console.error("QHeader needs to be child of QLayout"),I;const r=q(parseInt(e.heightHint,10)),i=q(!0),f=g(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),d=g(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return i.value===!0?r.value:0;const u=r.value-o.scroll.value.position;return u>0?u:0}),s=g(()=>e.modelValue!==!0||f.value===!0&&i.value!==!0),v=g(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),b=g(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=g(()=>{const u=o.rows.value.top,h={};return u[0]==="l"&&o.left.space===!0&&(h[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(h[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),h});function a(u,h){o.update("header",u,h)}function m(u,h){u.value!==h&&(u.value=h)}function T({height:u}){m(r,u),a("size",u)}function L(u){v.value===!0&&m(i,!0),n("focusin",u)}C(()=>e.modelValue,u=>{a("space",u),m(i,!0),o.animate()}),C(d,u=>{a("offset",u)}),C(()=>e.reveal,u=>{u===!1&&m(i,e.modelValue)}),C(i,u=>{o.animate(),n("reveal",u)}),C(o.scroll,u=>{e.reveal===!0&&m(i,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const S={};return o.instances.header=S,e.modelValue===!0&&a("size",r.value),a("space",e.modelValue),a("offset",d.value),A(()=>{o.instances.header===S&&(o.instances.header=void 0,a("size",0),a("offset",0),a("space",!1))}),()=>{const u=tt(l.default,[]);return e.elevated===!0&&u.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(x(ge,{debounce:0,onResize:T})),x("header",{class:b.value,style:p.value,onFocusin:L},u)}}}),Rn=P({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=$(),t=Je(pe,I);if(t===I)return console.error("QPageContainer needs to be child of QLayout"),I;et(Et,!0);const o=g(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>x("div",{class:"q-page-container",style:o.value},F(l.default))}});const{passive:Ue}=N,Qn=["both","horizontal","vertical"];var Wn=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Qn.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:at},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,r;C(()=>e.scrollTarget,()=>{d(),f()});function i(){t!==null&&t();const b=Math.max(0,hn(o)),p=mn(o),a={top:b-n.position.top,left:p-n.position.left};if(e.axis==="vertical"&&a.top===0||e.axis==="horizontal"&&a.left===0)return;const m=Math.abs(a.top)>=Math.abs(a.left)?a.top<0?"up":"down":a.left<0?"left":"right";n.position={top:b,left:p},n.directionChanged=n.direction!==m,n.delta=a,n.directionChanged===!0&&(n.direction=m,n.inflectionPoint=n.position),l("scroll",{...n})}function f(){o=rt(r,e.scrollTarget),o.addEventListener("scroll",s,Ue),s(!0)}function d(){o!==void 0&&(o.removeEventListener("scroll",s,Ue),o=void 0)}function s(b){if(b===!0||e.debounce===0||e.debounce==="0")i();else if(t===null){const[p,a]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];t=()=>{a(p),t=null}}}const{proxy:v}=$();return C(()=>v.$q.lang.rtl,i),R(()=>{r=v.$el.parentNode,f()}),A(()=>{t!==null&&t(),d()}),Object.assign(v,{trigger:s,getPosition:()=>n}),Ze}}),Dn=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=$(),o=q(null),r=q(t.screen.height),i=q(e.container===!0?0:t.screen.width),f=q({position:0,direction:"down",inflectionPoint:0}),d=q(0),s=q(we.value===!0?0:le()),v=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),p=g(()=>s.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),a=g(()=>s.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function m(c){if(e.container===!0||document.qScrollPrevented!==!0){const w={position:c.position.top,direction:c.direction,directionChanged:c.directionChanged,inflectionPoint:c.inflectionPoint.top,delta:c.delta.top};f.value=w,e.onScroll!==void 0&&n("scroll",w)}}function T(c){const{height:w,width:E}=c;let k=!1;r.value!==w&&(k=!0,r.value=w,e.onScrollHeight!==void 0&&n("scrollHeight",w),S()),i.value!==E&&(k=!0,i.value=E),k===!0&&e.onResize!==void 0&&n("resize",c)}function L({height:c}){d.value!==c&&(d.value=c,S())}function S(){if(e.container===!0){const c=r.value>d.value?le():0;s.value!==c&&(s.value=c)}}let u=null;const h={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:o,height:r,containerHeight:d,scrollbarWidth:s,totalWidth:g(()=>i.value+s.value),rows:g(()=>{const c=e.view.toLowerCase().split(" ");return{top:c[0].split(""),middle:c[1].split(""),bottom:c[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(c,w,E){h[c][w]=E}};if(et(pe,h),le()>0){let E=function(){c=null,w.classList.remove("hide-scrollbar")},k=function(){if(c===null){if(w.scrollHeight>t.screen.height)return;w.classList.add("hide-scrollbar")}else clearTimeout(c);c=setTimeout(E,300)},H=function(_){c!==null&&_==="remove"&&(clearTimeout(c),E()),window[`${_}EventListener`]("resize",k)},c=null;const w=document.body;C(()=>e.container!==!0?"add":"remove",H),e.container!==!0&&H("add"),Xe(()=>{H("remove")})}return()=>{const c=$t(l.default,[x(Wn,{onScroll:m}),x(ge,{onResize:T})]),w=x("div",{class:v.value,style:b.value,ref:e.container===!0?void 0:o,tabindex:-1},c);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:o},[x(ge,{onResize:L}),x("div",{class:"absolute-full",style:p.value},[x("div",{class:"scroll",style:a.value},[w])])]):w}}});var Vn=(e,l)=>{const n=e.__vccOpts||e;for(const[t,o]of l)n[t]=o;return n};const Fn={class:"navigation"},On=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const l=[{label:"\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",secondLevel:!0,secondLevelItems:["\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438","\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E","\u0418\u0441\u0442\u043E\u0440\u0438\u044F","\u041D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B","\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438","\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B"]},{label:"\u041F\u0440\u043E\u0435\u043A\u0442\u044B",secondLevel:!1},{label:"\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435",secondLevel:!1},{label:"\u0423\u0441\u043B\u0443\u0433\u0438",secondLevel:!1},{label:"\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438",secondLevel:!1},{label:"\u0421\u043E\u0431\u044B\u0442\u0438\u044F",secondLevel:!1}];return(n,t)=>{const o=Ht("router-view");return O(),ee(Dn,{view:"lHh Lpr lFf"},{default:M(()=>[Q(An,{elevated:"",class:"header"},{default:M(()=>[t[2]||(t[2]=z("div",{class:"logo__container"},[z("img",{src:"/src/assets/logo.png",class:"navbar__logo"})],-1)),t[3]||(t[3]=z("div",{class:"firstline"},null,-1)),t[4]||(t[4]=z("div",{class:"secondline"},null,-1)),Q(zn,{class:"toolbar"},{default:M(()=>[Q(Dt,{class:"nav__title"},{default:M(()=>t[0]||(t[0]=[ce(" \u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F"),z("br",null,null,-1),ce(" \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440\u043D\u044B\u0445 \u043F\u043E\u0434\u0441\u0442\u0430\u043D\u0446\u0438\u0439 ")])),_:1}),z("div",Fn,[(O(),_e(Me,null,ze(l,(r,i)=>z("div",{key:i},[r.secondLevel?(O(),ee(_n,{key:0,label:r.label},{default:M(()=>[Q(Ot,null,{default:M(()=>[(O(!0),_e(Me,null,ze(r.secondLevelItems,(f,d)=>(O(),ee(Vt,{class:"dropdown",key:d},{default:M(()=>[Q(X,{class:"dropdown__item"},{default:M(()=>[ce(Pt(f),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["label"])):(O(),ee(X,{key:1,label:r.label},null,8,["label"]))])),64))]),t[1]||(t[1]=z("div",{class:"nav__phone"},[z("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[z("path",{d:"M16.7291 12.2598L14.1891 11.9698C13.8904 11.9347 13.5877 11.9678 13.3036 12.0665C13.0196 12.1652 12.7616 12.327 12.5491 12.5398L10.7091 14.3798C7.87046 12.9357 5.56313 10.6284 4.11906 7.78977L5.96906 5.93977C6.39906 5.50977 6.60906 4.90977 6.53906 4.29977L6.24906 1.77977C6.19258 1.29186 5.95853 0.841791 5.59153 0.515361C5.22452 0.188932 4.75023 0.00896555 4.25906 0.0097683H2.52906C1.39906 0.0097683 0.459064 0.949768 0.529064 2.07977C1.05906 10.6198 7.88906 17.4398 16.4191 17.9698C17.5491 18.0398 18.4891 17.0998 18.4891 15.9698V14.2398C18.4991 13.2298 17.7391 12.3798 16.7291 12.2598Z",fill:"#810225"})]),z("a",null,"8 (812) 294\u201320\u201313")],-1))]),_:1})]),_:1}),Q(Rn,null,{default:M(()=>[Q(o)]),_:1})]),_:1})}}});var Kn=Vn(On,[["__scopeId","data-v-47bb3b74"]]);export{Kn as default};