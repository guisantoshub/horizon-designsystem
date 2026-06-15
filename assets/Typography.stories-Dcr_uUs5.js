import{j as e}from"./jsx-runtime-D69pdnyW.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";const N={title:"Design System / Tokens / Tipografia",parameters:{layout:"fullscreen"}},g=[{token:"--primitive-font-size-xs",name:"xs",rem:"0.75rem",px:"12px",weight:"400",use:"Captions, hints, labels auxiliares"},{token:"--primitive-font-size-sm",name:"sm",rem:"0.875rem",px:"14px",weight:"400/500",use:"Corpo secundário, labels de campo"},{token:"--primitive-font-size-base",name:"base",rem:"1rem",px:"16px",weight:"400",use:"Corpo de texto padrão"},{token:"--primitive-font-size-lg",name:"lg",rem:"1.125rem",px:"18px",weight:"500/600",use:"Subtítulos, labels destacados"},{token:"--primitive-font-size-xl",name:"xl",rem:"1.25rem",px:"20px",weight:"600",use:"Títulos de seção"},{token:"--primitive-font-size-2xl",name:"2xl",rem:"1.5rem",px:"24px",weight:"700",use:"Títulos de página"},{token:"--primitive-font-size-3xl",name:"3xl",rem:"1.875rem",px:"30px",weight:"700",use:"KPIs, números grandes"},{token:"--primitive-font-size-4xl",name:"4xl",rem:"2.25rem",px:"36px",weight:"800",use:"Títulos de destaque / hero"}],f=[{name:"Título de Página",classes:"text-2xl font-bold font-heading",sample:"Visão Geral do Sistema"},{name:"Título de Seção",classes:"text-lg font-semibold font-heading",sample:"Solicitações Recentes"},{name:"Label de Campo",classes:"text-sm font-medium",sample:"Nome do Cliente"},{name:"Corpo de Texto",classes:"text-sm",sample:"Texto corrido padrão para descrições e informações gerais do sistema."},{name:"Caption / Hint",classes:"text-xs text-muted-foreground",sample:"Atualizado há 5 minutos"},{name:"KPI / Número",classes:"text-3xl font-bold font-heading",sample:"R$ 45,2M"},{name:"Badge / Chip",classes:"text-xs font-medium",sample:"Em Execução"},{name:"Link",classes:"text-sm font-medium text-primary underline-offset-4 hover:underline",sample:"Ver todas as solicitações →"}],a={name:"1 · Escala Tipográfica",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Escala Tipográfica"}),e.jsxs("p",{className:"text-sm text-muted-foreground mb-8",children:["Base 16px. Família principal: ",e.jsx("strong",{children:"Inter"})," (body), ",e.jsx("strong",{children:"Montserrat"})," (heading)."]}),e.jsx("div",{className:"space-y-2",children:g.map(s=>e.jsxs("div",{className:"flex items-center gap-6 py-4 border-b border-border last:border-0",children:[e.jsx("div",{className:"w-16 text-right flex-shrink-0",children:e.jsx("span",{className:"text-xs font-mono text-muted-foreground",children:s.name})}),e.jsx("div",{className:"flex-1 min-w-0",children:e.jsx("span",{style:{fontSize:s.rem},className:"text-foreground font-body",children:"ABCDEFGH abcdefgh 0123456789"})}),e.jsxs("div",{className:"flex-shrink-0 text-right space-y-0.5",children:[e.jsxs("p",{className:"text-xs font-mono text-muted-foreground",children:[s.rem," / ",s.px]}),e.jsx("p",{className:"text-xs text-muted-foreground",children:s.use})]})]},s.name))})]})})},r={name:"2 · Uso Semântico",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Tipografia Semântica"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-8",children:"Como cada nível tipográfico é aplicado na interface."}),e.jsx("div",{className:"space-y-6",children:f.map(s=>e.jsxs("div",{className:"flex flex-col gap-1 pb-6 border-b border-border last:border-0",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-widest text-muted-foreground",children:s.name}),e.jsx("code",{className:"text-xs bg-muted px-2 py-0.5 rounded font-mono text-muted-foreground",children:s.classes})]}),e.jsx("span",{className:s.classes,children:s.sample})]},s.name))})]})})},t={name:"3 · Famílias Tipográficas",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading mb-8",children:"Famílias Tipográficas"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"p-6 rounded-xl border bg-card",children:[e.jsx("p",{className:"text-xs uppercase tracking-widest text-muted-foreground mb-4",children:"Heading — Montserrat"}),e.jsx("div",{className:"space-y-2",children:[800,700,600,500].map(s=>e.jsxs("p",{className:"font-heading text-2xl text-foreground",style:{fontWeight:s},children:["HORIZON Suite — ",s]},s))})]}),e.jsxs("div",{className:"p-6 rounded-xl border bg-card",children:[e.jsx("p",{className:"text-xs uppercase tracking-widest text-muted-foreground mb-4",children:"Body — Inter"}),e.jsx("div",{className:"space-y-2",children:[700,600,500,400,300].map(s=>e.jsxs("p",{className:"font-body text-base text-foreground",style:{fontWeight:s},children:["Sistema de gestão financeira FAMI Capital — ",s]},s))})]})]})]})})};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '1 · Escala Tipográfica',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-4xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Escala Tipográfica</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Base 16px. Família principal: <strong>Inter</strong> (body), <strong>Montserrat</strong> (heading).</p>\r
        <div className="space-y-2">\r
          {TYPE_SCALE.map(t => <div key={t.name} className="flex items-center gap-6 py-4 border-b border-border last:border-0">\r
              <div className="w-16 text-right flex-shrink-0">\r
                <span className="text-xs font-mono text-muted-foreground">{t.name}</span>\r
              </div>\r
              <div className="flex-1 min-w-0">\r
                <span style={{
              fontSize: t.rem
            }} className="text-foreground font-body">\r
                  ABCDEFGH abcdefgh 0123456789\r
                </span>\r
              </div>\r
              <div className="flex-shrink-0 text-right space-y-0.5">\r
                <p className="text-xs font-mono text-muted-foreground">{t.rem} / {t.px}</p>\r
                <p className="text-xs text-muted-foreground">{t.use}</p>\r
              </div>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,m,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '2 · Uso Semântico',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Tipografia Semântica</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Como cada nível tipográfico é aplicado na interface.</p>\r
        <div className="space-y-6">\r
          {SEMANTIC_TYPES.map(t => <div key={t.name} className="flex flex-col gap-1 pb-6 border-b border-border last:border-0">\r
              <div className="flex items-center gap-3 mb-2">\r
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.name}</span>\r
                <code className="text-xs bg-muted px-2 py-0.5 rounded font-mono text-muted-foreground">{t.classes}</code>\r
              </div>\r
              <span className={t.classes}>{t.sample}</span>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,x,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '3 · Famílias Tipográficas',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading mb-8">Famílias Tipográficas</h1>\r
        <div className="space-y-8">\r
          <div className="p-6 rounded-xl border bg-card">\r
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Heading — Montserrat</p>\r
            <div className="space-y-2">\r
              {[800, 700, 600, 500].map(w => <p key={w} className="font-heading text-2xl text-foreground" style={{
              fontWeight: w
            }}>\r
                  HORIZON Suite — {w}\r
                </p>)}\r
            </div>\r
          </div>\r
          <div className="p-6 rounded-xl border bg-card">\r
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Body — Inter</p>\r
            <div className="space-y-2">\r
              {[700, 600, 500, 400, 300].map(w => <p key={w} className="font-body text-base text-foreground" style={{
              fontWeight: w
            }}>\r
                  Sistema de gestão financeira FAMI Capital — {w}\r
                </p>)}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const v=["Escala","Semantica","Familias"];export{a as Escala,t as Familias,r as Semantica,v as __namedExportsOrder,N as default};
