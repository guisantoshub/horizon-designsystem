import{j as e}from"./jsx-runtime-D69pdnyW.js";import{A as h}from"./arrow-right-CbjUOza5.js";import{U as N}from"./user-DRpv8ztC.js";import{B as v}from"./briefcase-DZnBzTwn.js";import{C as j}from"./circle-check-BNWy9OQk.js";import{C as S}from"./copy-CAqNEjM1.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./createLucideIcon-D6DUjI5c.js";const c=[{label:"Nova Solicitação",area:"Portfolio Specialist (PS)",icon:N,description:"PS cria a solicitação com uma ou múltiplas boletas"},{label:"Em Execução",area:"Middle",icon:v,description:"Middle pega a solicitação para executar"},{label:"Executado",area:"Middle",icon:j,description:"Middle confirma execução boleta a boleta"},{label:"Replicado",area:"Backoffice",icon:S,description:"Backoffice replica no sistema e marca como concluído"}];function d(){return e.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-2",children:c.map((a,o)=>{const g=a.icon;return e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("div",{className:"flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 min-w-[180px]",children:[e.jsx("div",{className:"h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0",children:e.jsx(g,{className:"h-4 w-4 text-primary"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-heading font-semibold text-foreground",children:a.label}),e.jsx("p",{className:"text-[10px] text-muted-foreground",children:a.area})]})]}),o<c.length-1&&e.jsx(h,{className:"h-4 w-4 text-muted-foreground shrink-0"})]},a.label)})})}d.__docgenInfo={description:"",methods:[],displayName:"BoletadorSteps"};const D={title:"Design System / Componentes / BoletadorSteps",component:d,parameters:{layout:"padded",docs:{description:{component:"Visualização linear do workflow de 4 estágios do Boletador: **Nova Solicitação → Em Execução → Executado → Replicado**. Cada etapa exibe o rótulo, a área responsável e um ícone. Componente sem props — os passos são definidos internamente e refletem o processo operacional fixo da Fami Capital."}}},tags:["autodocs"]},r={name:"Workflow — 4 estágios"},s={name:"Em contexto — topo do Boletador",render:()=>e.jsxs("div",{className:"space-y-4 rounded-lg border border-border bg-card p-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base font-heading font-semibold text-foreground",children:"Boletador"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:"Fluxo operacional de boletas"})]}),e.jsx(d,{})]})},t={name:"Com descrição das responsabilidades",render:()=>{const a=[{label:"Nova Solicitação",area:"Portfolio Specialist (PS)",desc:"PS cria a solicitação com uma ou múltiplas boletas"},{label:"Em Execução",area:"Middle",desc:"Middle pega a solicitação para executar"},{label:"Executado",area:"Middle",desc:"Middle confirma execução boleta a boleta"},{label:"Replicado",area:"Backoffice",desc:"Backoffice replica no sistema e marca como concluído"}];return e.jsxs("div",{className:"space-y-6 w-[720px]",children:[e.jsx(d,{}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:a.map(o=>e.jsxs("div",{className:"rounded-md border border-border bg-card p-3 space-y-1",children:[e.jsx("p",{className:"text-xs font-heading font-semibold text-foreground",children:o.label}),e.jsx("p",{className:"text-[10px] font-medium text-primary",children:o.area}),e.jsx("p",{className:"text-[11px] text-muted-foreground leading-snug",children:o.desc})]},o.label))})]})}};var i,n,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Workflow — 4 estágios"
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,p,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Em contexto — topo do Boletador",
  render: () => <div className="space-y-4 rounded-lg border border-border bg-card p-4">\r
      <div>\r
        <h2 className="text-base font-heading font-semibold text-foreground">\r
          Boletador\r
        </h2>\r
        <p className="text-xs text-muted-foreground mt-0.5">\r
          Fluxo operacional de boletas\r
        </p>\r
      </div>\r
      <BoletadorSteps />\r
    </div>
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,f,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Com descrição das responsabilidades",
  render: () => {
    const etapas = [{
      label: "Nova Solicitação",
      area: "Portfolio Specialist (PS)",
      desc: "PS cria a solicitação com uma ou múltiplas boletas"
    }, {
      label: "Em Execução",
      area: "Middle",
      desc: "Middle pega a solicitação para executar"
    }, {
      label: "Executado",
      area: "Middle",
      desc: "Middle confirma execução boleta a boleta"
    }, {
      label: "Replicado",
      area: "Backoffice",
      desc: "Backoffice replica no sistema e marca como concluído"
    }];
    return <div className="space-y-6 w-[720px]">\r
        <BoletadorSteps />\r
        <div className="grid grid-cols-4 gap-3">\r
          {etapas.map(e => <div key={e.label} className="rounded-md border border-border bg-card p-3 space-y-1">\r
              <p className="text-xs font-heading font-semibold text-foreground">\r
                {e.label}\r
              </p>\r
              <p className="text-[10px] font-medium text-primary">{e.area}</p>\r
              <p className="text-[11px] text-muted-foreground leading-snug">\r
                {e.desc}\r
              </p>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const W=["Workflow","EmContexto","ComDescricaoDeEtapas"];export{t as ComDescricaoDeEtapas,s as EmContexto,r as Workflow,W as __namedExportsOrder,D as default};
