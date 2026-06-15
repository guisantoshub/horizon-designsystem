import{j as e}from"./jsx-runtime-D69pdnyW.js";import{S as r}from"./SkeletonCard-CLDyozQB.js";import{T as I}from"./trending-up-D35GfjYV.js";import{D as L}from"./dollar-sign-BEqnWDJm.js";import{F as p}from"./file-text-BwWNSdFz.js";import{C as U}from"./clock-DSVkRUU7.js";import{U as O}from"./users-_ZCg9YNi.js";import{A as z}from"./activity-BSZF545S.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./skeleton-CGmWP3WT.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-D6DUjI5c.js";function a({title:q,value:K,change:m,changeType:g="neutral",icon:_}){const G=g==="positive"?"text-success":g==="negative"?"text-destructive":"text-muted-foreground";return e.jsxs("div",{className:"rounded-lg border border-border bg-card px-5 pt-5 pb-5 transition-colors hover:border-primary/40 flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between h-9",children:[e.jsx("span",{className:"text-sm font-body font-normal text-muted-foreground leading-5",children:q}),e.jsx("div",{className:"w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",children:e.jsx(_,{className:"h-4 w-4 text-primary"})})]}),e.jsx("p",{className:"text-2xl font-heading font-bold text-foreground leading-8 mt-[10px]",children:K}),m&&e.jsx("p",{className:`text-xs font-normal leading-4 mt-2 ${G}`,children:m})]})}a.__docgenInfo={description:`Stats card — pixel-perfect ao Figma (node 152:6116)

Figma specs:
  Card: 272×142  bg:#ffffff  border:#dae0e7  r:8
  Inner pad: ~21px left/right, ~20px top/bottom
  Row 1 (h:36): label fs:14/400/#48566a  |  icon 36×36 bg:#bc965c@10% r:8
  Row 2 (h:32): value  fs:24/700/#0f1729
  Row 3 (h:16): change fs:12/400  (#16a249 | #ef4343 | #48566a)
  Gap row1→row2 ≈ 10px · gap row2→row3 ≈ 8px`,methods:[],displayName:"StatsCard",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},change:{required:!1,tsType:{name:"string"},description:""},changeType:{required:!1,tsType:{name:"union",raw:'"positive" | "negative" | "neutral"',elements:[{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"neutral"'}]},description:"",defaultValue:{value:'"neutral"',computed:!1}},icon:{required:!0,tsType:{name:"LucideIcon"},description:""}}};const se={title:"Design System / Componentes / StatsCard",component:a,parameters:{layout:"centered",docs:{description:{component:"Card de métrica/KPI exibido em dashboards e painéis de resumo. Mostra título, valor principal, ícone e indicador de variação colorido (positivo, negativo ou neutro). Usado em blocos de 4 cards no topo do Boletador."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Rótulo descritivo da métrica."},value:{control:"text",description:"Valor principal exibido em destaque."},change:{control:"text",description:"Texto de variação (opcional). Ex: '+5 hoje'."},changeType:{control:{type:"select"},options:["positive","negative","neutral"],description:"Cor do indicador de variação."},icon:{table:{disable:!0},description:"Componente de ícone Lucide."}}},o={name:"Variação positiva",args:{title:"Volume Boletado",value:"R$ 45,2M",change:"+8,3% vs mês anterior",changeType:"positive",icon:I}},n={name:"Variação negativa",args:{title:"Financeiro Total",value:"R$ 1,8M",change:"-2,1% vs meta",changeType:"negative",icon:L}},t={name:"Variação neutra",args:{title:"Boletas Abertas",value:"342",change:"+5 hoje",changeType:"neutral",icon:p}},s={name:"Sem indicador de variação",args:{title:"Pendentes",value:"18",icon:U}},i={name:"Painel — 4 KPIs do Boletador",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-[640px]",children:[e.jsx(a,{title:"Boletas Abertas",value:"342",change:"+5 hoje",changeType:"neutral",icon:p}),e.jsx(a,{title:"Volume Boletado",value:"R$ 45,2M",change:"+8,3% vs mês anterior",changeType:"positive",icon:I}),e.jsx(a,{title:"Financeiro Total",value:"R$ 1,8M",change:"-2,1% vs meta",changeType:"negative",icon:L}),e.jsx(a,{title:"Pendentes",value:"18",change:"3 aguardando aprovação",changeType:"neutral",icon:U})]})},c={name:"Exemplos — outros módulos",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-[640px]",children:[e.jsx(a,{title:"Total de Clientes",value:"1.204",change:"+12 este mês",changeType:"positive",icon:O}),e.jsx(a,{title:"Acessos Ativos",value:"87",change:"Sem alteração",changeType:"neutral",icon:z})]})},l={name:"Loading — SkeletonCard",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-[640px]",children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})},d={name:"Transição — Skeleton → Dado",render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4 w-[640px]",children:[e.jsx(a,{title:"Boletas Abertas",value:"342",change:"+5 hoje",changeType:"neutral",icon:p}),e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{})]})};var u,v,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Variação positiva",
  args: {
    title: "Volume Boletado",
    value: "R$ 45,2M",
    change: "+8,3% vs mês anterior",
    changeType: "positive",
    icon: TrendingUp
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,T,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Variação negativa",
  args: {
    title: "Financeiro Total",
    value: "R$ 1,8M",
    change: "-2,1% vs meta",
    changeType: "negative",
    icon: DollarSign
  }
}`,...(f=(T=n.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var S,y,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Variação neutra",
  args: {
    title: "Boletas Abertas",
    value: "342",
    change: "+5 hoje",
    changeType: "neutral",
    icon: FileText
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,b,N;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Sem indicador de variação",
  args: {
    title: "Pendentes",
    value: "18",
    icon: Clock
  }
}`,...(N=(b=s.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,P,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Painel — 4 KPIs do Boletador",
  render: () => <div className="grid grid-cols-2 gap-4 w-[640px]">\r
      <StatsCard title="Boletas Abertas" value="342" change="+5 hoje" changeType="neutral" icon={FileText} />\r
      <StatsCard title="Volume Boletado" value="R$ 45,2M" change="+8,3% vs mês anterior" changeType="positive" icon={TrendingUp} />\r
      <StatsCard title="Financeiro Total" value="R$ 1,8M" change="-2,1% vs meta" changeType="negative" icon={DollarSign} />\r
      <StatsCard title="Pendentes" value="18" change="3 aguardando aprovação" changeType="neutral" icon={Clock} />\r
    </div>
}`,...(k=(P=i.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var V,A,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Exemplos — outros módulos",
  render: () => <div className="grid grid-cols-2 gap-4 w-[640px]">\r
      <StatsCard title="Total de Clientes" value="1.204" change="+12 este mês" changeType="positive" icon={Users} />\r
      <StatsCard title="Acessos Ativos" value="87" change="Sem alteração" changeType="neutral" icon={Activity} />\r
    </div>
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,F,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Loading — SkeletonCard",
  render: () => <div className="grid grid-cols-2 gap-4 w-[640px]">\r
      <SkeletonCard />\r
      <SkeletonCard />\r
      <SkeletonCard />\r
      <SkeletonCard />\r
    </div>
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var E,M,$;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Transição — Skeleton → Dado",
  render: () => <div className="grid grid-cols-2 gap-4 w-[640px]">\r
      <StatsCard title="Boletas Abertas" value="342" change="+5 hoje" changeType="neutral" icon={FileText} />\r
      <SkeletonCard />\r
      <SkeletonCard />\r
      <SkeletonCard />\r
    </div>
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};const ie=["Positivo","Negativo","Neutro","SemVariacao","PainelKPIs","ExemplosExtras","Loading","TransicaoLoadingParaDado"];export{c as ExemplosExtras,l as Loading,n as Negativo,t as Neutro,i as PainelKPIs,o as Positivo,s as SemVariacao,d as TransicaoLoadingParaDado,ie as __namedExportsOrder,se as default};
