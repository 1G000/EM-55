import{a as u,$ as a,m as l,d as s,g as c}from"./index.8811a837.js";import{c as d}from"./QBtn.5fc29d3b.js";const p={dark:{type:Boolean,default:null}};function y(t,e){return u(()=>t.dark===null?e.dark.isActive:t.dark)}function h(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),a.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function k(){let t=null;const e=c();function r(){t!==null&&(clearTimeout(t),t=null)}return l(r),s(r),{removeTimeout:r,registerTimeout(o,i){r(),d(e)===!1&&(t=setTimeout(()=>{t=null,o()},i))}}}const n={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},f=Object.keys(n);n.all=!0;function T(t){const e={};for(const r of f)t[r]===!0&&(e[r]=!0);return Object.keys(e).length===0?n:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const m=["INPUT","TEXTAREA"];function w(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&m.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}var A=(t,e)=>{const r=t.__vccOpts||t;for(const[o,i]of e)r[o]=i;return r};export{A as _,y as a,k as b,h as c,T as g,w as s,p as u};
