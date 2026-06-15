import{j as r}from"./jsx-runtime-D69pdnyW.js";import{S as t}from"./scroll-area-D-U4oTEh.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";import"./index-6LzbcUH8.js";import"./index-CHv7tnzT.js";import"./index-fnuAKoKB.js";import"./index-DmOial3E.js";import"./index-BGqnW-RQ.js";import"./index-BdQq_4o_.js";import"./utils-CytzSlOG.js";const w={title:"Design System / Componentes / ScrollArea",component:t,parameters:{layout:"centered",docs:{description:{component:"Wrapper de scroll com scrollbar custom estilizada (overlay, thin). Use quando o conteúdo tem altura fixa e precisa scrollar dentro do container — comum em listas dentro de Sheet ou cards densos."}}},tags:["autodocs"]},a=["ITUB4","PETR4","VALE3","WEGE3","BBDC4","MGLU3","RENT3","CYRE3","MRVE3","EZTC3","BPAC11","SANB11","BRML3","LREN3","AMER3","PETZ3","VIIA3","BHIA3","HGLG11","XPML11","MXRF11","HAPV3","RDOR3","GNDI3","QUAL3","AZUL4","GOLL4","CVC3","ABEV3","BEEF3","BRFS3","JBSS3"],o={render:()=>r.jsxs(t,{className:"h-64 w-72 rounded-md border border-border bg-card p-3",children:[r.jsxs("h4",{className:"mb-2 text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground",children:["Ativos disponíveis (",a.length,")"]}),r.jsx("ul",{className:"space-y-1",children:a.map(e=>r.jsx("li",{className:"text-sm font-mono",children:e},e))})]})},s={render:()=>r.jsx(t,{className:"w-96 whitespace-nowrap rounded-md border border-border bg-card p-3",children:r.jsx("div",{className:"flex gap-3",children:a.map(e=>r.jsx("span",{className:"shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-mono",children:e},e))})})};var n,d,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-64 w-72 rounded-md border border-border bg-card p-3">\r
      <h4 className="mb-2 text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">\r
        Ativos disponíveis ({ativos.length})\r
      </h4>\r
      <ul className="space-y-1">\r
        {ativos.map(a => <li key={a} className="text-sm font-mono">\r
            {a}\r
          </li>)}\r
      </ul>\r
    </ScrollArea>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-96 whitespace-nowrap rounded-md border border-border bg-card p-3">\r
      <div className="flex gap-3">\r
        {ativos.map(a => <span key={a} className="shrink-0 rounded-full bg-muted px-3 py-1 text-xs font-mono">\r
            {a}\r
          </span>)}\r
      </div>\r
    </ScrollArea>
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const L=["Default","Horizontal"];export{o as Default,s as Horizontal,L as __namedExportsOrder,w as default};
