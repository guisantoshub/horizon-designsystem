import{j as a}from"./jsx-runtime-D69pdnyW.js";import{S as o}from"./SkeletonCard-CLDyozQB.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./skeleton-CGmWP3WT.js";import"./utils-CytzSlOG.js";const f={title:"Design System / Componentes / SkeletonCard",component:o,parameters:{layout:"padded",docs:{description:{component:"Composição pronta de `Skeleton` no formato de um `StatsCard` (mesmo layout: título + ícone + valor grande + delta). Usar para preservar layout enquanto métricas carregam."}}},tags:["autodocs"]},r={render:()=>a.jsx(o,{})},e={name:"Grid 4 cards (estado de loading do dashboard)",render:()=>a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl",children:Array.from({length:4}).map((l,c)=>a.jsx(o,{},c))})};var s,d,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <SkeletonCard />
}`,...(t=(d=r.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var n,m,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Grid 4 cards (estado de loading do dashboard)",
  render: () => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">\r
      {Array.from({
      length: 4
    }).map((_, i) => <SkeletonCard key={i} />)}\r
    </div>
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const y=["Default","GridDeCards"];export{r as Default,e as GridDeCards,y as __namedExportsOrder,f as default};
