import{_ as w,a as A}from"../modules/unplugin-icons-C0ezAbgr.js";import{d as I,t as N,M as E,G as y,N as B,z as v,O as M,o as c,b as _,f as q,K as u,c as C,g as V,i as z,h as K}from"../modules/vue-BY2y9pTo.js";import{c as k}from"../monaco/bundled-types-BomO3YJD.js";import{m as $,C as D,a as R,u as G}from"../index-CjUswqsu.js";import{u as O}from"./context-Cv-l1RMc.js";const U=["title"],Q=I({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=O(),s=N(),d=$();E(()=>{a.unregister(d)}),y(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),B(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=v(()=>t?Math.max(0,a.current-t.start+1):D),n=v(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!s.value)return;let i=e.ranges[o.value]??n.value;const g=i==="hide";s.value.classList.toggle(R,g),g&&(i=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),m=Array.from(h.querySelectorAll("code > .line")),H=m.length;if(G(i,H,e.startLine,l=>[m[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((f,L)=>L.offsetHeight+f,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:b}=M();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&b(t)}return(t,o)=>{const n=w,r=A;return c(),_("div",{ref_key:"el",ref:s,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:K({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[q(t.$slots,"default"),u(k).codeCopy?(c(),_("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,U)):V("v-if",!0)],6)}}});export{Q as _};
