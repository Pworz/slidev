import{m as h,n as b,o as g}from"../modules/unplugin-icons-C0ezAbgr.js";import{d as x,z as $,o as p,b as k,e as t,f as y,h as C,c as w,k as P,K as r,J as S,l as c,q as B,s as z}from"../modules/vue-BY2y9pTo.js";import{u as _,f as E}from"./context-Cv-l1RMc.js";import"../index-CjUswqsu.js";import"../monaco/bundled-types-BomO3YJD.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-Ib1F0Tte.js";function d(e){return e.startsWith("/")?"/"+e.slice(1):e}function N(e,o=!1){const s=e&&["#","rgb","hsl"].some(a=>e.indexOf(a)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const O={class:"my-auto w-full"},V=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){_();const o=e,s=$(()=>N(o.background,!0));return(n,a)=>(p(),k("div",{class:"slidev-layout cover text-center",style:C(s.value)},[t("div",O,[y(n.$slots,"default")])],4))}}),G=t("h1",null,"Welcome to Slidev",-1),H=t("p",null,"Presentation slides for developers",-1),I={class:"pt-12"},R={class:"abs-br m-6 flex gap-2"},T={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},W={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:n,$clicks:a,$page:j,$renderContext:q,$frontmatter:u}=_();return n.setup(),(A,i)=>{const m=h,v=b,f=g;return p(),w(V,B(z(r(E)(r(u),0))),{default:P(()=>[G,H,t("div",I,[t("span",{onClick:i[0]||(i[0]=(...l)=>r(o).nav.next&&r(o).nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[S(" Press Space for next page "),c(m,{class:"inline"})])]),t("div",R,[t("button",{onClick:i[1]||(i[1]=l=>r(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[c(v)]),t("a",T,[c(f)])])]),_:1},16)}}},Q=W;export{Q as default};
