import{j as e}from"./jsx-runtime-D69pdnyW.js";import{S as a}from"./skeleton-CGmWP3WT.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./utils-CytzSlOG.js";const y={title:"Design System / Componentes / Skeleton",component:a,parameters:{layout:"padded",docs:{description:{component:"Placeholder animado para conteúdo em carregamento. Usar para preservar layout antes dos dados chegarem (evita layout shift). Veja também `SkeletonCard` (composição pronta para cards de stats)."}}},tags:["autodocs"]},r={render:()=>e.jsx(a,{className:"h-4 w-48"})},s={name:"Composição: card de stats",render:()=>e.jsxs("div",{className:"w-72 rounded-lg border border-border bg-card p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(a,{className:"h-4 w-24"}),e.jsx(a,{className:"h-9 w-9 rounded-lg"})]}),e.jsx(a,{className:"h-8 w-20"}),e.jsx(a,{className:"h-3 w-16"})]})},o={name:"Composição: lista",render:()=>e.jsx("div",{className:"w-80 space-y-3",children:Array.from({length:4}).map((n,l)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"space-y-1.5 flex-1",children:[e.jsx(a,{className:"h-3 w-3/4"}),e.jsx(a,{className:"h-3 w-1/2"})]})]},l))})},d={name:"Composição: linhas de tabela",render:()=>e.jsxs("div",{className:"w-full max-w-2xl rounded-md border border-border",children:[e.jsx("div",{className:"grid grid-cols-4 gap-3 border-b border-border bg-muted/30 p-3",children:["ID","Ativo","Quantidade","Status"].map(n=>e.jsx(a,{className:"h-3 w-20"},n))}),Array.from({length:5}).map((n,l)=>e.jsxs("div",{className:"grid grid-cols-4 gap-3 p-3 border-b border-border last:border-0",children:[e.jsx(a,{className:"h-3 w-24"}),e.jsx(a,{className:"h-3 w-14"}),e.jsx(a,{className:"h-3 w-16"}),e.jsx(a,{className:"h-5 w-20 rounded-full"})]},l))]})};var t,m,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-4 w-48" />
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,p,h;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Composição: card de stats",
  render: () => <div className="w-72 rounded-lg border border-border bg-card p-5 space-y-3">\r
      <div className="flex items-center justify-between">\r
        <Skeleton className="h-4 w-24" />\r
        <Skeleton className="h-9 w-9 rounded-lg" />\r
      </div>\r
      <Skeleton className="h-8 w-20" />\r
      <Skeleton className="h-3 w-16" />\r
    </div>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,N,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Composição: lista",
  render: () => <div className="w-80 space-y-3">\r
      {Array.from({
      length: 4
    }).map((_, i) => <div key={i} className="flex items-center gap-3">\r
          <Skeleton className="h-10 w-10 rounded-full" />\r
          <div className="space-y-1.5 flex-1">\r
            <Skeleton className="h-3 w-3/4" />\r
            <Skeleton className="h-3 w-1/2" />\r
          </div>\r
        </div>)}\r
    </div>
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var w,x,g;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Composição: linhas de tabela",
  render: () => <div className="w-full max-w-2xl rounded-md border border-border">\r
      <div className="grid grid-cols-4 gap-3 border-b border-border bg-muted/30 p-3">\r
        {["ID", "Ativo", "Quantidade", "Status"].map(h => <Skeleton key={h} className="h-3 w-20" />)}\r
      </div>\r
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="grid grid-cols-4 gap-3 p-3 border-b border-border last:border-0">\r
          <Skeleton className="h-3 w-24" />\r
          <Skeleton className="h-3 w-14" />\r
          <Skeleton className="h-3 w-16" />\r
          <Skeleton className="h-5 w-20 rounded-full" />\r
        </div>)}\r
    </div>
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const C=["Default","CardSkeleton","ListaSkeleton","TabelaSkeleton"];export{s as CardSkeleton,r as Default,o as ListaSkeleton,d as TabelaSkeleton,C as __namedExportsOrder,y as default};
