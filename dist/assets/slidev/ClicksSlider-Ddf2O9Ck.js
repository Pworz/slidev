import{d as I,z as x,t as D,E as T,n as z,O as F,D as P,o as v,b as f,i as k,e as u,x as C,l as V,B as R,F as E,ag as q,ae as K,af as j,h as A,p as O,a as U}from"../modules/vue-Si0Fd8DJ.js";import{C as N,q as X,r as G,_ as J}from"../index-CpbxVpc_.js";import{m as Q}from"../modules/unplugin-icons-DcExOKc0.js";const W=["innerHTML"],Y=["textContent"],Z=["textContent"],L="slidev-note-fade",b="slidev-note-click-mark",me=I({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(h,{emit:p}){const t=h,_=p,m=x(()=>{var s;return t.clicksContext!=null&&((s=t.noteHtml)==null?void 0:s.includes("slidev-note-click-mark"))}),n=D(null);function w(){var $,B;if(!n.value||!m.value)return;const s=Array.from(n.value.querySelectorAll(`.${b}`)),c=new Map,d=new Map;let a=0;for(const r of s){const l=Number(r.dataset.clicks);c.set(r,l);let o=r,e=r.parentElement;for(;e&&o!==n.value;)d.has(e)||d.set(e,[[null,a]]),d.get(e).push([o,l]),o=e,e=e.parentElement;a=l}const y=new Map;for(const[r,l]of d){let o=!1,e=0;for(const i of Array.from(r.childNodes)){let S=!1;for(;i===(($=l[e+1])==null?void 0:$[0]);)S=!0,e++;if(S)continue;let M=i;if(i.nodeType===3){if(!((B=i.textContent)!=null&&B.trim()))continue;M=document.createElement("span"),M.textContent=i.textContent,r.insertBefore(M,i),i.remove()}o||(o=e===0),y.set(M,l[e][1])}o||(l[0][1]=-1)}return r=>{const l=t.highlight;for(const[o,e]of d)o.classList.toggle(L,l&&!e.some(([i,S])=>S===r));for(const[o,e]of y)o.classList.toggle(L,l&&e!==r);for(const[o,e]of c)o.classList.remove(L),o.classList.toggle(`${b}-past`,l&&e<r),o.classList.toggle(`${b}-active`,l&&e===r),o.classList.toggle(`${b}-next`,l&&e===r+1),o.classList.toggle(`${b}-future`,l&&e>r+1),o.ondblclick=l?i=>{_("markerDblclick",i,e),!i.defaultPrevented&&(t.clicksContext.current=e,i.stopPropagation(),i.stopImmediatePropagation())}:null,o.onclick=l?i=>{_("markerClick",i,e)}:null,l&&t.autoScroll&&e===r&&o.scrollIntoView({block:"center",behavior:"smooth"})}}const g=D();return T(()=>[t.noteHtml,t.highlight],()=>{z(()=>{g.value=w()})},{immediate:!0}),F(()=>{w()}),P(()=>{var c,d;const s=((c=t.clicksContext)==null?void 0:c.current)??N;(d=g.value)==null||d.call(g,s)}),(s,c)=>s.noteHtml?(v(),f("div",{key:0,ref_key:"noteDisplay",ref:n,class:k(["prose overflow-auto outline-none slidev-note",[t.class,m.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,W)):s.note?(v(),f("div",{key:1,class:k(["prose overflow-auto outline-none slidev-note",t.class])},[u("p",{textContent:C(s.note)},null,8,Y)],2)):(v(),f("div",{key:2,class:k(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",t.class])},[u("p",{textContent:C(t.placeholder||"No notes.")},null,8,Z)],2))}}),H=h=>(O("data-v-df74d78a"),h=h(),U(),h),ee=["title"],te={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},oe=H(()=>u("div",{"flex-auto":""},null,-1)),se={"text-primary":""},le=H(()=>u("span",{op25:"","text-sm":""},"/",-1)),ne={op50:"","text-sm":""},ae={key:1,op50:"","flex-auto":"",pl1:""},re={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},ie=["min","max"],ce=I({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(h){const p=h,t=x(()=>p.clicksContext.total),_=x(()=>X(0,p.clicksContext.clicksStart,t.value)),m=x(()=>t.value-_.value+1),n=x({get(){return p.clicksContext.current>t.value?-1:p.clicksContext.current},set(s){p.clicksContext.current=s}}),w=x(()=>G(_.value,t.value+1));function g(){p.readonly||(n.value<0||n.value>t.value)&&(n.value=0)}return(s,c)=>{const d=Q;return v(),f("div",{class:k(["flex gap-1 items-center select-none",m.value&&p.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${m.value}`},[u("div",te,[V(d,{"text-sm":"",op50:""}),n.value>=0&&n.value!==R(N)&&s.active?(v(),f(E,{key:0},[oe,u("span",se,C(n.value),1),le,u("span",ne,C(t.value),1)],64)):(v(),f("div",ae,C(t.value),1))]),u("div",re,[(v(!0),f(E,null,q(w.value,a=>(v(),f("div",{key:a,border:"y main","of-hidden":"",relative:"",class:k([a===0?"rounded-l border-l":"",a===t.value?"rounded-r border-r":""]),style:A({width:m.value>0?`${1/m.value*100}%`:"100%"})},[u("div",{absolute:"","inset-0":"",class:k(a<=n.value&&s.active?"bg-primary op15":"")},null,2),u("div",{class:k([+a==+n.value&&s.active?"text-primary font-bold op100 border-primary":"op30 border-main",a===0?"rounded-l":"",a===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},C(a),3)],6))),128)),K(u("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>n.value=a),class:k(["range",s.readonly?"pointer-events-none":""]),type:"range",min:_.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:A({"--thumb-width":`${1/(m.value+1)*100}%`}),onMousedown:g,onFocus:c[1]||(c[1]=a=>{var y;return(y=a.currentTarget)==null?void 0:y.blur()})},null,46,ie),[[j,n.value]])])],10,ee)}}}),ve=J(ce,[["__scopeId","data-v-df74d78a"]]);export{ve as C,me as _};
