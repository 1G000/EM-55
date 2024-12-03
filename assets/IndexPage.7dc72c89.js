import{z as ce,q as V,A as de,B as ve,b as z,C as X,t as te,s as K,e as Z,r as O,a as g,w as T,g as G,h,u as fe,a0 as me,c as J,H as ne,a1 as pe,o as ee,d as se,a2 as ge,N as q,Q as M,W as H,P as Y,R as oe,S as ae,_ as he,a3 as _e,O as ue,Y as F,V as U,a4 as ye,Z as be}from"./index.8811a837.js";import{g as re,s as ie,c as xe,b as Ce,u as Pe,a as we,_ as Se}from"./plugin-vue_export-helper.16975e29.js";import{m as qe,h as W,v as ke,k as $e,i as L,l as Te}from"./QBtn.5fc29d3b.js";function Ie(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,s)=>{const u=parseFloat(i);u&&(n[s]=u)}),n}var Ae=ce({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:s}){if(s.mouse!==!0&&V.has.touch!==!0)return;const u=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ie(i),direction:re(s),noop:de,mouseStart(o){ie(o,t)&&ve(o)&&(z(t,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(ie(o,t)){const a=o.target;z(t,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","notPassiveCapture"],[a,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,a){V.is.firefox===!0&&X(e,!0);const d=te(o);t.event={x:d.left,y:d.top,time:Date.now(),mouse:a===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){K(o);return}const a=Date.now()-t.event.time;if(a===0)return;const d=te(o),m=d.left-t.event.x,l=Math.abs(m),v=d.top-t.event.y,f=Math.abs(v);if(t.event.mouse!==!0){if(l<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(l<t.sensitivity[2]&&f<t.sensitivity[2])return;const y=l/a,b=f/a;t.direction.vertical===!0&&l<f&&l<100&&b>t.sensitivity[0]&&(t.event.dir=v<0?"up":"down"),t.direction.horizontal===!0&&l>f&&f<100&&y>t.sensitivity[0]&&(t.event.dir=m<0?"left":"right"),t.direction.up===!0&&l<f&&v<0&&l<100&&b>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&l<f&&v>0&&l<100&&b>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&l>f&&m<0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&l>f&&m>0&&f<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(K(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xe(),t.styleCleanup=k=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};k===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:a,distance:{x:l,y:f}})):t.end(o)},end(o){t.event!==void 0&&(Z(t,"temp"),V.is.firefox===!0&&X(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&K(o),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const o=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";z(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}V.has.touch===!0&&z(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=re(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(Z(n,"main"),Z(n,"temp"),V.is.firefox===!0&&X(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Be(){let e=Object.create(null);return{getCache:(n,i)=>e[n]===void 0?e[n]=typeof i=="function"?i():i:e[n],setCache(n,i){e[n]=i},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ee={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},W(n.default))}},Ne={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ve=["update:modelValue","beforeTransition","transition"];function Me(){const{props:e,emit:n,proxy:i}=G(),{getCache:s}=Be(),{registerTimeout:u}=Ce();let t,o;const a=O(null),d=O(null);function m(r){const c=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(r.direction===c?1:-1))}const l=g(()=>[[Ae,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),f=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),y=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),k=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(r,c)=>{const x=w(r)===!0?B(r):-1;o!==!0&&$(x===-1?0:x<B(c)?-1:1),a.value!==x&&(a.value=x,n("beforeTransition",r,c),u(()=>{n("transition",r,c)},e.transitionDuration))});function I(){P(1)}function j(){P(-1)}function A(r){n("update:modelValue",r)}function w(r){return r!=null&&r!==""}function B(r){return t.findIndex(c=>c.props.name===r&&c.props.disable!==""&&c.props.disable!==!0)}function E(){return t.filter(r=>r.props.disable!==""&&r.props.disable!==!0)}function $(r){const c=r!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(r===-1?v.value:f.value):null;d.value!==c&&(d.value=c)}function P(r,c=a.value){let x=c+r;for(;x!==-1&&x<t.length;){const R=t[x];if(R!==void 0&&R.props.disable!==""&&R.props.disable!==!0){$(r),o=!0,n("update:modelValue",R.props.name),setTimeout(()=>{o=!1});return}x+=r}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&P(r,r===-1?t.length:-1)}function Q(){const r=B(e.modelValue);return a.value!==r&&(a.value=r),!0}function p(){const r=w(e.modelValue)===!0&&Q()&&t[a.value];return e.keepAlive===!0?[h(me,k.value,[h(C.value===!0?s(b.value,()=>({...le,name:b.value})):le,{key:b.value,style:y.value},()=>r)])]:[h("div",{class:"q-panel scroll",style:y.value,key:b.value,role:"tabpanel"},[r])]}function S(){if(t.length!==0)return e.animated===!0?[h(fe,{name:d.value},p)]:p()}function N(r){return t=qe(W(r.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function _(){return t}return Object.assign(i,{next:I,previous:j,goTo:A}),{panelIndex:a,panelDirectives:l,updatePanelsList:N,updatePanelIndex:Q,getPanelContent:S,getEnabledPanels:E,getPanels:_,isValidPanelName:w,keepAliveProps:k,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:P,goToPanel:A,nextPanel:I,previousPanel:j}}var Fe=J({name:"QCarouselSlide",props:{...Ee,imgSrc:String},setup(e,{slots:n}){const i=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:i.value},W(n.default))}}),De=J({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:n}){const i=g(()=>`q-carousel__control absolute absolute-${e.position}`),s=g(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>h("div",{class:i.value,style:s.value},W(n.default))}});let D=0;const Le={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Oe=["update:fullscreen","fullscreen"];function je(){const e=G(),{props:n,emit:i,proxy:s}=e;let u,t,o;const a=O(!1);ke(e)===!0&&T(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&l()}),T(()=>n.fullscreen,v=>{a.value!==v&&d()}),T(a,v=>{i("update:fullscreen",v),i("fullscreen",v)});function d(){a.value===!0?l():m()}function m(){a.value!==!0&&(a.value=!0,o=s.$el.parentNode,o.replaceChild(t,s.$el),document.body.appendChild(s.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:l},ne.add(u))}function l(){a.value===!0&&(u!==void 0&&(ne.remove(u),u=void 0),o.replaceChild(s.$el,t),a.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return pe(()=>{t=document.createElement("span")}),ee(()=>{n.fullscreen===!0&&m()}),se(l),Object.assign(s,{toggleFullscreen:d,setFullscreen:m,exitFullscreen:l}),{inFullscreen:a,toggleFullscreen:d}}const Qe=["top","right","bottom","left"],Re=["regular","flat","outline","push","unelevated"];var ze=J({name:"QCarousel",props:{...Pe,...Ne,...Le,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Re.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Qe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Oe,...Ve],setup(e,{slots:n}){const{proxy:{$q:i}}=G(),s=we(e,i);let u=null,t;const{updatePanelsList:o,getPanelContent:a,panelDirectives:d,goToPanel:m,previousPanel:l,nextPanel:v,getEnabledPanels:f,panelIndex:y}=Me(),{inFullscreen:b}=je(),k=g(()=>b.value!==!0&&e.height!==void 0?{height:e.height}:{}),C=g(()=>e.vertical===!0?"vertical":"horizontal"),I=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),j=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(b.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${C.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${I.value}`:"")),A=g(()=>{const p=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?p.reverse():p}),w=g(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),B=g(()=>e.navigationActiveIcon||w.value),E=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&$()}),T(()=>e.autoplay,p=>{p?$():u!==null&&(clearTimeout(u),u=null)});function $(){const p=ge(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,p>=0?v():l()},p)}ee(()=>{e.autoplay&&$()}),se(()=>{u!==null&&clearTimeout(u)});function P(p,S){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${p} q-carousel__navigation--${I.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(S))])}function Q(){const p=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:_=>h(L,{key:"nav"+_.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${_.active===!0?"":"in"}active`,..._.btnProps,onClick:_.onClick}),N=t-1;p.push(P("buttons",(_,r)=>{const c=_.props.name,x=y.value===r;return S({index:r,maxIndex:N,name:c,active:x,btnProps:{icon:x===!0?B.value:w.value,size:"sm",...E.value},onClick:()=>{m(c)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";p.push(P("thumbnails",N=>{const _=N.props;return h("img",{key:"tmb#"+_.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${_.name===e.modelValue?"":"in"}active`+S,src:_.imgSrc||_["img-src"],onClick:()=>{m(_.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&p.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${C.value} absolute flex flex-center`},[h(L,{icon:A.value[0],...E.value,onClick:l})])),(e.infinite===!0||y.value<t-1)&&p.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${C.value} absolute flex flex-center`},[h(L,{icon:A.value[1],...E.value,onClick:v})]))),Te(n.control,p)}return()=>(t=o(n),h("div",{class:j.value,style:k.value},[$e("div",{class:"q-carousel__slides-container"},a(),"sl-cont",e.swipeable,()=>d.value)].concat(Q())))}});const He={class:"q-pa-md"},Ye={class:"carousel-wrapper"},Ue={class:"text-overlay"},We={class:"slide__title"},Xe={class:"slide__subtitle"},Ke={class:"slide__textcontent"},Ze={key:0,class:"buttons__container"},Ge=["onMousemove"],Je={__name:"TheSlider",setup(e){let n=O(1);const i=O(null);ee(async()=>{try{const t=await fetch("./sliderData.json");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);i.value=(await t.json()).sliderData}catch(t){console.error("Error fetching navItems:",t),navItems.value=[]}});const s=(t,o)=>{const a=o.currentTarget,d=o.offsetX,m=o.offsetY,l=a.offsetWidth,v=a.offsetHeight,f=d/l*100,y=m/v*100,b=`radial-gradient(circle at ${f}% ${y}%, rgba(225, 225, 225,1), transparent)`;a.style.backgroundImage=b},u=t=>{const o=t.currentTarget;o.style.backgroundImage=""};return(t,o)=>(q(),M("div",He,[H(ze,{animated:"",modelValue:he(n),"onUpdate:modelValue":o[3]||(o[3]=a=>_e(n)?n.value=a:n=a),navigation:"",infinite:"","autoplay-speed":5e3,swipeable:"",ref:"carousel"},{control:Y(()=>[H(De,{position:"bottom-right",offset:[30,30],class:"q-gutter-xs"},{default:Y(()=>[H(L,{push:"",color:"white","text-color":"red",icon:"arrow_left",onClick:o[1]||(o[1]=a=>t.$refs.carousel.previous())}),H(L,{push:"",color:"white","text-color":"red",icon:"arrow_right",onClick:o[2]||(o[2]=a=>t.$refs.carousel.next())})]),_:1})]),default:Y(()=>[(q(!0),M(oe,null,ae(i.value,(a,d)=>(q(),ue(Fe,{key:d,name:d+1,class:"slide","img-src":a.imgSrc},{default:Y(()=>[F("div",Ye,[F("div",Ue,[F("h2",We,U(a.title),1),F("h3",Xe,U(a.subtitle),1),F("span",Ke,U(a.textcontent),1),a.buttons&&a.buttons.length>0?(q(),M("div",Ze,[(q(!0),M(oe,null,ae(a.buttons,(m,l)=>(q(),M("button",{key:l,class:ye(m.style),ref_for:!0,ref:"button",onMousemove:v=>s(l,v),onMouseleave:o[0]||(o[0]=v=>u(v))},U(m.btnTitle),43,Ge))),128))])):be("",!0)])])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue"])]))}};var et=Se(Je,[["__scopeId","data-v-13f13e40"]]);const at=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(e){return(n,i)=>(q(),ue(et))}});export{at as default};
