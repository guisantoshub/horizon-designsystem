import{j as e}from"./jsx-runtime-D69pdnyW.js";import{B as A}from"./badge-CUxrm4Aj.js";import{P as y,a as B,b as j}from"./popover-B-U2tnIT.js";import{c as N}from"./utils-CytzSlOG.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-BwobEAja.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-KMH598xy.js";const c={Dashboard:"bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",Boletador:"bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300","Cadastro de Ativos":"bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300","Cadastro de Ativos - Tipos":"bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300","Cadastro de Ativos - Emissores":"bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300","Cadastro de Ativos - Marcação":"bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300","Cadastro de Ativos - Moedas":"bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300","Cadastro de Ativos - Classes":"bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300","Cadastro de Ativos - Subclasses":"bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300","Cadastro de Ativos - Indexadores":"bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-300","Cadastro de Colaboradores":"bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300","Cadastro de Clientes":"bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300","Cadastro de Instituições":"bg-stone-200 text-stone-700 dark:bg-stone-500/20 dark:text-stone-300","Autorização de Acessos":"bg-zinc-200 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300"},u=["bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300","bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300","bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"];function M(a){if(c[a])return c[a];let r=0;for(let o=0;o<a.length;o++)r=r*31+a.charCodeAt(o)|0;return u[Math.abs(r)%u.length]}function s({name:a,className:r}){return e.jsx(A,{variant:"outline",className:N("border-0 font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap",M(a),r),children:a})}function l({modules:a,visibleCount:r=2}){if(a.length===0)return e.jsx("span",{className:"text-xs text-muted-foreground italic",children:"Sem permissões"});const o=a.slice(0,r),m=a.slice(r);return e.jsxs("div",{className:"flex items-center gap-1.5 flex-nowrap min-w-0",children:[o.map(t=>e.jsx(s,{name:t},t)),m.length>0&&e.jsxs(y,{children:[e.jsx(B,{asChild:!0,children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-full bg-foreground/85 text-background px-2.5 py-0.5 text-xs font-semibold hover:bg-foreground transition-colors cursor-pointer",onMouseEnter:t=>t.currentTarget.click(),children:["+",m.length]})}),e.jsx(j,{className:"w-auto p-2",align:"start",children:e.jsx("div",{className:"flex flex-col gap-1.5",children:m.map(t=>e.jsx(s,{name:t},t))})})]})]})}s.__docgenInfo={description:"",methods:[],displayName:"ModuleBadge",props:{name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"ModuleBadgeList",props:{modules:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},visibleCount:{required:!1,tsType:{name:"number"},description:'Quantos exibir antes do "+N" com hover. Padrão: 2.',defaultValue:{value:"2",computed:!1}}}};const J={title:"Design System / Componentes / ModuleBadge",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
Badge colorido para representar **módulos do sistema**. A cor é determinística:
o mesmo nome de módulo sempre recebe a mesma cor (hash sobre o nome → paleta de 8 cores).

Use o componente \`<ModuleBadgeList>\` para listas com truncamento e popover de
"+N" — útil em células de tabela onde o espaço é limitado.

\`\`\`tsx
<ModuleBadge name="Dashboard" />
<ModuleBadgeList modules={["Dashboard", "Boletador", "Clientes", "Ativos"]} visibleCount={2} />
\`\`\`
        `}}}},d={args:{name:"Dashboard"}},n={name:"Paleta de cores por módulo",render:()=>e.jsx("div",{className:"flex flex-wrap gap-2 p-6 bg-background rounded-xl border max-w-md",children:["Dashboard","Boletador","Cadastro de cliente","Cadastro de Ativos","Cadastro de Colaborador","Cadastro de Instituições","Autorização de Acessos","Relatórios"].map(a=>e.jsx(s,{name:a},a))})},i={name:"ModuleBadgeList — com hover +N",render:()=>e.jsxs("div",{className:"space-y-3 p-6 bg-background rounded-xl border max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"2 módulos (sem +N)"}),e.jsx(l,{modules:["Dashboard","Boletador"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"5 módulos (com +3, passe o mouse)"}),e.jsx(l,{modules:["Dashboard","Cadastro de cliente","Boletador","Cadastro de Ativos","Autorização de Acessos"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs text-muted-foreground mb-1",children:"Sem módulos"}),e.jsx(l,{modules:[]})]})]})};var p,g,x;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "Dashboard"
  }
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,h,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Paleta de cores por módulo",
  render: () => <div className="flex flex-wrap gap-2 p-6 bg-background rounded-xl border max-w-md">\r
      {["Dashboard", "Boletador", "Cadastro de cliente", "Cadastro de Ativos", "Cadastro de Colaborador", "Cadastro de Instituições", "Autorização de Acessos", "Relatórios"].map(m => <ModuleBadge key={m} name={m} />)}\r
    </div>
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,f,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "ModuleBadgeList — com hover +N",
  render: () => <div className="space-y-3 p-6 bg-background rounded-xl border max-w-md">\r
      <div>\r
        <p className="text-xs text-muted-foreground mb-1">2 módulos (sem +N)</p>\r
        <ModuleBadgeList modules={["Dashboard", "Boletador"]} />\r
      </div>\r
      <div>\r
        <p className="text-xs text-muted-foreground mb-1">5 módulos (com +3, passe o mouse)</p>\r
        <ModuleBadgeList modules={["Dashboard", "Cadastro de cliente", "Boletador", "Cadastro de Ativos", "Autorização de Acessos"]} />\r
      </div>\r
      <div>\r
        <p className="text-xs text-muted-foreground mb-1">Sem módulos</p>\r
        <ModuleBadgeList modules={[]} />\r
      </div>\r
    </div>
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const W=["Default","Paleta","Lista"];export{d as Default,i as Lista,n as Paleta,W as __namedExportsOrder,J as default};
