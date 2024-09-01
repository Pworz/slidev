import{j as te,k as ne,b as oe,l as le}from"../modules/unplugin-icons-C0ezAbgr.js";import{d as Q,U as ie,Q as se,t as T,V as ae,E as O,G as ce,L as re,n as Y,K as c,o as i,c as g,i as S,h as z,I as ue,W as de,b,j as me,X as pe,z as j,Y as ve,N as fe,e as a,F as P,Z as q,k as N,x as y,g as B,l as w}from"../modules/vue-BY2y9pTo.js";import{j as he,k as ge,q as ke,C as X,r as G}from"../index-CjUswqsu.js";import{s as _e,i as be,b as W,d as xe,p as ye}from"../monaco/bundled-types-BomO3YJD.js";import{a as we,S as Ce,_ as $e,b as De}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-Ck9XUvZi.js";import{_ as K}from"./IconButton.vue_vue_type_script_setup_true_lang-BBVC7fM-.js";import{_ as Se,C as Ee}from"./ClicksSlider-BU1VynAL.js";import"../modules/shiki-Ib1F0Tte.js";import"../modules/file-saver-igGfcqei.js";const Me=["placeholder"],He=Q({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:U}){const o=C,x=U,r=ie(o,"editing",x,{passive:!0}),{info:f,update:$}=we(se(o,"no")),p=T("");let E;const{ignoreUpdates:k}=ae(p,s=>{if(!r.value)return;const m=o.no;clearTimeout(E),E=setTimeout(()=>{$({note:s},m)},500)});O(()=>{var s;return(s=f.value)==null?void 0:s.note},(s="")=>{r.value||(clearTimeout(E),k(()=>{p.value=s}))},{immediate:!0,flush:"sync"});const d=T(),_=T();ce(()=>{var s;r.value&&((s=d.value)==null||s.focus())}),re(d,()=>{r.value=!1});function I(){!o.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function L(s){r.value&&s.metaKey&&s.key==="s"&&(s.preventDefault(),$({note:p.value},o.no))}return O([p,r],()=>{Y(()=>{I()})},{flush:"post",immediate:!0}),(s,m)=>{var M;return c(r)?ue((i(),b("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=h=>p.value=h),class:S(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",o.class]),style:z([{"line-height":"1.75"},[o.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=me(h=>r.value=!1,["esc"])),L]},null,46,Me)),[[de,p.value]]):(i(),g(Se,{key:0,class:S(["border-transparent border-2",[o.class,p.value?"":"opacity-25 italic select-none"]]),style:z(o.style),note:p.value||C.placeholder,"note-html":(M=c(f))==null?void 0:M.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:o.highlight,onMarkerClick:m[0]||(m[0]=(h,H)=>x("markerClick",h,H)),onMarkerDblclick:m[1]||(m[1]=(h,H)=>x("markerDblclick",h,H))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Ne={class:"h-screen w-screen of-hidden flex"},Te={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ie={class:"relative"},Ve={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},Be=["onClick"],We={p2:"",border:"t main"},Ke={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},ze={class:"text-3xl op20 mb2"},Le=["onDblclick"],je={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},Re={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Ue={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},Ae={class:"text-xs op50"},R=450,et=Q({__name:"overview",setup(C){he({title:`Overview - ${_e}`});const{openInEditor:U,slides:o}=ge(),x=pe(new Map),r=T([]),f=T(null),$=j(()=>o.value.map(t=>{var e,l;return s(((l=(e=t.meta)==null?void 0:e.slide)==null?void 0:l.note)||"")})),p=j(()=>$.value.reduce((t,e)=>t+e,0)),E=j(()=>o.value.map(t=>I(t)).reduce((t,e)=>t+e,0)),k=ve(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,ke(t,X)),d.get(t)}function I(t){var e,l;return((e=t.meta)==null?void 0:e.clicks)||((l=_(t))==null?void 0:l.total)}function L(t){k.value===t?k.value=void 0:k.value=t}function s(t){var e;return((e=t.match(/[\w`'\-]+/g))==null?void 0:e.length)||0}function m(t){const e=t.getBoundingClientRect(),l=20;return e.top>=0-l&&e.left>=0-l&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+l&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+l}function M(){const t=[];Array.from(x.entries()).forEach(([e,l])=>{m(l)&&t.push(e)}),r.value=t}function h(t){const e=document.createElement("a");e.target="_blank",e.href=ye+t.slice(1),e.click()}function H(t){const e=x.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Z(t,e,l){const D=_(l);D.current===e?D.current=X:D.current=e,t.preventDefault()}return fe(()=>{Y(()=>{M()})}),(t,e)=>{const l=te,D=ne,J=oe,ee=le;return i(),b("div",Ne,[a("nav",Te,[a("div",Ie,[a("div",Ve,[(i(!0),b(P,null,q(c(o),(n,v)=>{var u,V,A,F;return i(),b("div",{key:n.no,class:"relative",style:{direction:"ltr"}},[a("button",{class:S(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:Fe=>H(v)},[a("div",null,y(v+1),1)],10,Be),(V=(u=n.meta)==null?void 0:u.slide)!=null&&V.title?(i(),b("div",{key:0,class:S(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},y((F=(A=n.meta)==null?void 0:A.slide)==null?void 0:F.title),3)):B("v-if",!0)])}),128))])]),a("div",We,[c(be)?(i(),g(K,{key:1,title:c(W)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:N(()=>[c(W)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"])):(i(),g(K,{key:0,title:c(W)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=n=>c(xe)())},{default:N(()=>[c(W)?(i(),g(l,{key:0})):(i(),g(D,{key:1}))]),_:1},8,["title"]))])]),a("main",{class:"flex-1 h-full of-auto",style:z(`grid-template-columns: repeat(auto-fit,minmax(${R}px,1fr))`),onScroll:M},[(i(!0),b(P,null,q(c(o),(n,v)=>(i(),b("div",{key:n.no,ref_for:!0,ref:u=>x.set(v,u),class:S(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[a("div",Ke,[a("div",ze,y(v+1),1),w(K,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>h(c(G)(n,!1))},{default:N(()=>[w(J)]),_:2},1032,["onClick"]),B("v-if",!0)]),a("div",{class:"flex flex-col gap-2 my5",style:z({width:`${R}px`})},[a("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>h(c(G)(n,!1))},[(i(),g(De,{key:n.no,width:R,class:"pointer-events-none important:[&_*]:select-none"},{default:N(()=>[w(Ce,{"clicks-context":_(n),route:n,"render-context":"overview"},null,8,["clicks-context","route"]),w($e,{page:n.no},null,8,["page"])]),_:2},1024))],40,Le),I(n)?(i(),g(Ee,{key:0,active:k.value===n,"clicks-context":_(n),class:"w-full mt-2",onDblclick:u=>L(n),onClick:u=>k.value=n},null,8,["active","clicks-context","onDblclick","onClick"])):B("v-if",!0)],4),a("div",je,[w(K,{title:"Edit Note",class:S(["rounded-full w-9 h-9 text-sm",f.value===n.no?"important:op0":""]),onClick:u=>f.value=n.no},{default:N(()=>[w(ee)]),_:2},1032,["class","onClick"])]),w(He,{no:n.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:k.value===n,editing:f.value===n.no,"clicks-context":_(n),onDblclick:u=>f.value!==n.no?f.value=n.no:null,"onUpdate:editing":e[1]||(e[1]=u=>f.value=null),onMarkerClick:(u,V)=>Z(u,V,n)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),$.value[v]>0?(i(),b("div",Re,y($.value[v])+" words ",1)):B("v-if",!0)],2))),128))],36),a("div",Ue,[a("div",Ae,y(c(o).length)+" slides · "+y(E.value+c(o).length-1)+" clicks · "+y(p.value)+" words ",1)])])}}});export{et as default};
