import{l as u}from"./QBtn.f362baf4.js";import{X as a,d as l,g as s,a as c,a0 as d}from"./index.9afded18.js";function p(){let t=null;const e=s();function r(){t!==null&&(clearTimeout(t),t=null)}return a(r),l(r),{removeTimeout:r,registerTimeout(o,i){r(),u(e)===!1&&(t=setTimeout(()=>{t=null,o()},i))}}}const y={dark:{type:Boolean,default:null}};function h(t,e){return c(()=>t.dark===null?e.dark.isActive:t.dark)}const n={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},f=Object.keys(n);n.all=!0;function k(t){const e={};for(const r of f)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?n:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const m=["INPUT","TEXTAREA"];function T(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&m.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function w(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),d.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var A=(t,e)=>{const r=t.__vccOpts||t;for(const[o,i]of e)r[o]=i;return r};export{A as _,h as a,p as b,w as c,k as g,T as s,y as u};
