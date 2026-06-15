import{j as e}from"./jsx-runtime-D69pdnyW.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";const b={title:"Design System / Tokens / Espaçamento & Radius",parameters:{layout:"fullscreen"}},u=[{token:"space-1",tw:"p-1",rem:"0.25rem",px:"4px",use:"Ícone + label inline"},{token:"space-2",tw:"p-2",rem:"0.5rem",px:"8px",use:"Elementos internos de componente"},{token:"space-3",tw:"p-3",rem:"0.75rem",px:"12px",use:"Padding de badge, chip"},{token:"space-4",tw:"p-4",rem:"1rem",px:"16px",use:"Padding de card pequeno"},{token:"space-5",tw:"p-5",rem:"1.25rem",px:"20px",use:"Padding interno de seções compactas"},{token:"space-6",tw:"p-6",rem:"1.5rem",px:"24px",use:"Padding de card/seção padrão"},{token:"space-8",tw:"p-8",rem:"2rem",px:"32px",use:"Separação entre blocos"},{token:"space-10",tw:"p-10",rem:"2.5rem",px:"40px",use:"Margens generosas de layout"},{token:"space-12",tw:"p-12",rem:"3rem",px:"48px",use:"Separação entre seções de página"},{token:"space-16",tw:"p-16",rem:"4rem",px:"64px",use:"Hero, seções de destaque"}],g=[{name:"none",tw:"rounded-none",px:"0px",use:"Nunca usar em componentes interativos"},{name:"sm",tw:"rounded-sm",px:"2px",use:"Detalhe interno muito pequeno"},{name:"md",tw:"rounded-md",px:"6px",use:"Tags inline, chips"},{name:"lg",tw:"rounded-lg",px:"8px",use:"Inputs, botões, badges"},{name:"xl",tw:"rounded-xl",px:"12px",use:"Cards, painéis"},{name:"2xl",tw:"rounded-2xl",px:"16px",use:"Modais, drawers"},{name:"3xl",tw:"rounded-3xl",px:"24px",use:"Superfícies grandes de destaque"},{name:"full",tw:"rounded-full",px:"9999px",use:"Avatares, pills de navegação, toggles"}],f=[{name:"xs",tw:"shadow-xs",use:"Hover sutil de cards"},{name:"sm",tw:"shadow-sm",use:"Cards padrão, inputs focus"},{name:"md",tw:"shadow-md",use:"Dropdowns, popovers"},{name:"lg",tw:"shadow-lg",use:"Modais, sidesheets"},{name:"xl",tw:"shadow-xl",use:"Elementos flutuantes de alto impacto"}],a={name:"1 · Espaçamento (base 4px)",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Espaçamento"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-8",children:"Base 4px. Todos os valores seguem múltiplos de 4. Use classes Tailwind — nunca valores arbitrários."}),e.jsx("div",{className:"space-y-3",children:u.map(s=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-28 flex-shrink-0",children:e.jsx("span",{className:"text-xs font-mono text-muted-foreground",children:s.tw})}),e.jsx("div",{className:"flex-shrink-0",children:e.jsx("div",{className:"bg-primary/20 border-2 border-primary/40 rounded",style:{width:s.px,height:"24px",minWidth:"4px"}})}),e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("span",{className:"text-xs font-mono text-muted-foreground w-14",children:s.px}),e.jsx("span",{className:"text-xs text-muted-foreground",children:s.use})]})]},s.token))})]})})},r={name:"2 · Border Radius",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Border Radius"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-8",children:"Escala de arredondamento. Cada nível tem um uso semântico específico."}),e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-4",children:g.map(s=>e.jsxs("div",{className:"flex flex-col items-center gap-3 p-4 border rounded-xl bg-card",children:[e.jsx("div",{className:`w-16 h-16 bg-primary/20 border-2 border-primary/50 ${s.tw}`}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xs font-semibold text-foreground",children:s.name}),e.jsx("p",{className:"text-xs font-mono text-muted-foreground",children:s.px}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:s.use})]})]},s.name))})]})})},d={name:"3 · Sombras",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Sombras"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-8",children:"Escala de elevação. Indica hierarquia e profundidade na interface."}),e.jsx("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5",children:f.map(s=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:`w-full h-20 bg-card rounded-xl ${s.tw}`}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-foreground",children:s.name}),e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:s.use})]})]},s.name))})]})})};var n,t,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '1 · Espaçamento (base 4px)',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Espaçamento</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Base 4px. Todos os valores seguem múltiplos de 4. Use classes Tailwind — nunca valores arbitrários.</p>\r
        <div className="space-y-3">\r
          {SPACING_SCALE.map(s => <div key={s.token} className="flex items-center gap-4">\r
              <div className="w-28 flex-shrink-0">\r
                <span className="text-xs font-mono text-muted-foreground">{s.tw}</span>\r
              </div>\r
              <div className="flex-shrink-0">\r
                <div className="bg-primary/20 border-2 border-primary/40 rounded" style={{
              width: s.px,
              height: '24px',
              minWidth: '4px'
            }} />\r
              </div>\r
              <div className="flex items-center gap-3 flex-1">\r
                <span className="text-xs font-mono text-muted-foreground w-14">{s.px}</span>\r
                <span className="text-xs text-muted-foreground">{s.use}</span>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var m,l,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '2 · Border Radius',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Border Radius</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Escala de arredondamento. Cada nível tem um uso semântico específico.</p>\r
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">\r
          {RADIUS_SCALE.map(r => <div key={r.name} className="flex flex-col items-center gap-3 p-4 border rounded-xl bg-card">\r
              <div className={\`w-16 h-16 bg-primary/20 border-2 border-primary/50 \${r.tw}\`} />\r
              <div className="text-center">\r
                <p className="text-xs font-semibold text-foreground">{r.name}</p>\r
                <p className="text-xs font-mono text-muted-foreground">{r.px}</p>\r
                <p className="text-xs text-muted-foreground mt-1">{r.use}</p>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var i,c,p;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '3 · Sombras',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Sombras</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Escala de elevação. Indica hierarquia e profundidade na interface.</p>\r
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">\r
          {SHADOW_SCALE.map(s => <div key={s.name} className="flex flex-col gap-3">\r
              <div className={\`w-full h-20 bg-card rounded-xl \${s.tw}\`} />\r
              <div>\r
                <p className="text-xs font-semibold text-foreground">{s.name}</p>\r
                <p className="text-xs text-muted-foreground mt-0.5">{s.use}</p>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(p=(c=d.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const w=["Espacamento","BorderRadius","Sombras"];export{r as BorderRadius,a as Espacamento,d as Sombras,w as __namedExportsOrder,b as default};
