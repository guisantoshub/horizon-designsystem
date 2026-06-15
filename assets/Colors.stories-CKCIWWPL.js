import{j as e}from"./jsx-runtime-D69pdnyW.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";const M={title:"Design System / Tokens / Cores",parameters:{layout:"fullscreen"}},F=[{shade:"50",hex:"#FEF9F2"},{shade:"100",hex:"#F9EEE0"},{shade:"200",hex:"#F1D19F"},{shade:"300",hex:"#E5BC7D"},{shade:"400",hex:"#D1B07F"},{shade:"500",hex:"#BC955C",label:"Brand Primary · PANTONE 465 C"},{shade:"600",hex:"#B08F5F"},{shade:"700",hex:"#8A6B3F"},{shade:"800",hex:"#6A5130"},{shade:"900",hex:"#4A3822"},{shade:"950",hex:"#2B2014"}],T=[{shade:"50",hex:"#E6F3F9"},{shade:"100",hex:"#C3E1EE"},{shade:"200",hex:"#97CADE"},{shade:"300",hex:"#6AAECB"},{shade:"400",hex:"#4490B5"},{shade:"500",hex:"#307499"},{shade:"600",hex:"#265E80"},{shade:"700",hex:"#1E4F6A"},{shade:"800",hex:"#243746",label:"Brand Dark · PANTONE 7546 C"},{shade:"900",hex:"#152130"},{shade:"950",hex:"#0C1420"}],j=[{shade:"50",hex:"#E8F5FE"},{shade:"100",hex:"#C6E6FD"},{shade:"200",hex:"#ACD2ED"},{shade:"300",hex:"#5EB5F2"},{shade:"400",hex:"#30A4F9"},{shade:"500",hex:"#1098F7",label:"Blue Bright"},{shade:"600",hex:"#0A7BCE"},{shade:"700",hex:"#0760A5"},{shade:"800",hex:"#044A7E"},{shade:"900",hex:"#023358"},{shade:"950",hex:"#011D32"}],y=[{shade:"50",hex:"#F0FAFA"},{shade:"100",hex:"#D4F2EE"},{shade:"200",hex:"#BEECF4"},{shade:"300",hex:"#98DCD7"},{shade:"400",hex:"#77CBB9",label:"Teal"},{shade:"500",hex:"#4DB5A1"},{shade:"600",hex:"#369684"},{shade:"700",hex:"#27756A"},{shade:"800",hex:"#1C5850"},{shade:"900",hex:"#133B36"},{shade:"950",hex:"#0A211E"}],B=[{shade:"50",hex:"#F4F4FF"},{shade:"100",hex:"#E8E6FF"},{shade:"200",hex:"#C9C5FF"},{shade:"300",hex:"#ABA4EA"},{shade:"400",hex:"#8A88C6",label:"Purple"},{shade:"500",hex:"#6E6BAF"},{shade:"600",hex:"#555292"},{shade:"700",hex:"#3E3C70"},{shade:"800",hex:"#2A2850"},{shade:"900",hex:"#1A1932"},{shade:"950",hex:"#0E0D1C"}],P=[{shade:"50",hex:"#FBF2FC"},{shade:"100",hex:"#F3D9F5"},{shade:"200",hex:"#D598D8"},{shade:"300",hex:"#C282C4"},{shade:"400",hex:"#AD76AF"},{shade:"500",hex:"#96619A"},{shade:"600",hex:"#855386",label:"Mauve"},{shade:"700",hex:"#6A4069"},{shade:"800",hex:"#4F2F4E"},{shade:"900",hex:"#352035"},{shade:"950",hex:"#1D111D"}],C=[{shade:"50",hex:"#F2F3F4"},{shade:"100",hex:"#E2E4E6"},{shade:"200",hex:"#C5C9CE"},{shade:"300",hex:"#A9AFB7"},{shade:"400",hex:"#88929E",label:"Slate"},{shade:"500",hex:"#737C87"},{shade:"600",hex:"#666D74"},{shade:"700",hex:"#555B61"},{shade:"800",hex:"#434749"},{shade:"900",hex:"#2E3135"},{shade:"950",hex:"#1A1C1F"}],w=[{shade:"50",hex:"#F9FAFB"},{shade:"100",hex:"#F3F4F6"},{shade:"200",hex:"#E5E7EB"},{shade:"300",hex:"#D1D5DB"},{shade:"400",hex:"#9CA3AF"},{shade:"500",hex:"#6B7280"},{shade:"600",hex:"#4B5563"},{shade:"700",hex:"#374151"},{shade:"800",hex:"#1F2937"},{shade:"900",hex:"#111827"},{shade:"950",hex:"#030712"}],k=[{shade:"50",hex:"#F0FDF4"},{shade:"100",hex:"#DCFCE7"},{shade:"200",hex:"#BBF7D0"},{shade:"300",hex:"#86EFAC"},{shade:"400",hex:"#4ADE80"},{shade:"500",hex:"#22C55E",label:"Success"},{shade:"600",hex:"#16A34A"},{shade:"700",hex:"#15803D"},{shade:"800",hex:"#166534"},{shade:"900",hex:"#14532D"},{shade:"950",hex:"#052E16"}],S=[{shade:"50",hex:"#FEF2F2"},{shade:"100",hex:"#FEE2E2"},{shade:"200",hex:"#FECACA"},{shade:"300",hex:"#FCA5A5"},{shade:"400",hex:"#F87171"},{shade:"500",hex:"#EF4444",label:"Error"},{shade:"600",hex:"#DC2626"},{shade:"700",hex:"#B91C1C"},{shade:"800",hex:"#991B1B"},{shade:"900",hex:"#7F1D1D"},{shade:"950",hex:"#450A0A"}],D=[{shade:"50",hex:"#FFFBEB"},{shade:"100",hex:"#FEF3C7"},{shade:"200",hex:"#FDE68A"},{shade:"300",hex:"#FCD34D"},{shade:"400",hex:"#FBBF24"},{shade:"500",hex:"#F59E0B",label:"Warning"},{shade:"600",hex:"#D97706"},{shade:"700",hex:"#B45309"},{shade:"800",hex:"#92400E"},{shade:"900",hex:"#78350F"},{shade:"950",hex:"#451A03"}],L=[{shade:"50",hex:"#EFF6FF"},{shade:"100",hex:"#DBEAFE"},{shade:"200",hex:"#BFDBFE"},{shade:"300",hex:"#93C5FD"},{shade:"400",hex:"#60A5FA"},{shade:"500",hex:"#3B82F6",label:"Info"},{shade:"600",hex:"#2563EB"},{shade:"700",hex:"#1D4ED8"},{shade:"800",hex:"#1E40AF"},{shade:"900",hex:"#1E3A8A"},{shade:"950",hex:"#172554"}];function I(a){const s=parseInt(a.slice(1,3),16),r=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16);return(s*299+r*587+d*114)/1e3>128}function _({shade:a,hex:s,label:r}){const d=I(s)?"#111827":"#F9FAFB";return e.jsxs("div",{style:{backgroundColor:s,color:d},className:"flex flex-col justify-end p-3 rounded-lg min-h-[80px] relative",title:s,children:[r&&e.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-wider opacity-80 mb-0.5",children:r}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-semibold",children:a}),e.jsx("span",{className:"text-xs font-mono opacity-70",children:s})]})]})}function t({name:a,swatches:s}){return e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3",children:a}),e.jsx("div",{className:"grid grid-cols-11 gap-2",children:s.map(r=>e.jsx(_,{...r},r.shade))})]})}const R=[{name:"Brand",var:"--semantic-color-brand",desc:"Cor principal da marca — botões primários, destaques"},{name:"Brand Hover",var:"--semantic-color-brand-hover",desc:"Estado hover do brand"},{name:"Brand Subtle",var:"--semantic-color-brand-subtle",desc:"Fundo suave de elementos com cor brand"},{name:"Surface",var:"--semantic-color-surface",desc:"Fundo de cards, painéis, formulários"},{name:"Surface Raised",var:"--semantic-color-surface-raised",desc:"Fundo de modais e dropdowns (elevados)"},{name:"Text Primary",var:"--semantic-color-text-primary",desc:"Títulos e labels principais"},{name:"Text Secondary",var:"--semantic-color-text-secondary",desc:"Subtextos, captions, placeholders"},{name:"Text Disabled",var:"--semantic-color-text-disabled",desc:"Texto e ícones desabilitados"},{name:"Text Inverse",var:"--semantic-color-text-inverse",desc:"Texto sobre fundos escuros"},{name:"Border",var:"--semantic-color-border",desc:"Bordas padrão de inputs e cards"},{name:"Border Strong",var:"--semantic-color-border-strong",desc:"Bordas com mais ênfase"},{name:"Border Focus",var:"--semantic-color-border-focus",desc:"Ring de foco — acessibilidade"},{name:"Success",var:"--semantic-color-feedback-success",desc:"Estados de sucesso"},{name:"Warning",var:"--semantic-color-feedback-warning",desc:"Estados de aviso"},{name:"Error",var:"--semantic-color-feedback-error",desc:"Estados de erro"},{name:"Info",var:"--semantic-color-feedback-info",desc:"Estados informativos"}],q=[{name:"Row Group Header",var:"--row-group-header",cssVar:"hsl(var(--row-group-header))",desc:"Fundo do header de agrupamento em tabelas hierárquicas (ex.: linha-pai do cliente em ClientesTable, ou da solicitação em BoletadorTable). Diferenciado do `--secondary` para garantir contraste com o sub-header de colunas em ambos light/dark.",used:"ClientesTable · BoletadorTable"},{name:"Card (sub-header)",var:"--card",cssVar:"hsl(var(--card))",desc:"Fundo padrão de cards. Em tabelas hierárquicas, é também o fundo do cabeçalho de colunas e das linhas-filhas — garante contraste com `--row-group-header`.",used:"Card · Tabela sub-header · Linhas filhas"},{name:"Muted (hover)",var:"--muted",cssVar:"hsl(var(--muted))",desc:"Fundo de hover em linhas e elementos desabilitados.",used:"Hover de linha · Skeletons"},{name:"Border",var:"--border",cssVar:"hsl(var(--border))",desc:"Bordas padrão entre linhas e em volta de cards.",used:"Bordas de tabela"}];function V({name:a,cssVar:s,varName:r,desc:d,used:i}){return e.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-xl border bg-card",children:[e.jsx("div",{className:"w-14 h-14 rounded-lg flex-shrink-0 border border-border",style:{backgroundColor:s}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-foreground",children:a}),e.jsx("p",{className:"text-xs font-mono text-muted-foreground mt-0.5",children:r}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:d}),e.jsxs("p",{className:"text-[11px] text-primary mt-1",children:[e.jsx("span",{className:"opacity-70",children:"Usado em:"})," ",i]})]})]})}function G({name:a,cssVar:s,desc:r}){return e.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-xl border bg-card",children:[e.jsx("div",{className:"w-14 h-14 rounded-lg flex-shrink-0 border border-black/10",style:{backgroundColor:`var(${s})`}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-foreground",children:a}),e.jsx("p",{className:"text-xs font-mono text-muted-foreground mt-0.5",children:s}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:r})]})]})}const o={name:"1 · Primitivos — Paletas",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground",children:"Cores Primitivas"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Valores brutos. 11 tons por paleta (50 → 950). Use apenas para definir tokens semânticos — nunca diretamente em componentes."})]}),e.jsx(t,{name:"Gold — Cor da Marca (PANTONE 465 C)",swatches:F}),e.jsx(t,{name:"Navy — Estrutural Escuro (PANTONE 7546 C)",swatches:T}),e.jsx(t,{name:"Gray — Neutro",swatches:w}),e.jsx(t,{name:"Green — Sucesso",swatches:k}),e.jsx(t,{name:"Red — Erro",swatches:S}),e.jsx(t,{name:"Amber — Aviso",swatches:D}),e.jsx(t,{name:"Blue — Informação",swatches:L}),e.jsx(t,{name:"Blue Bright — Destaque Vivo",swatches:j}),e.jsx(t,{name:"Teal — Verde-Azulado",swatches:y}),e.jsx(t,{name:"Purple — Lavanda / Violeta",swatches:B}),e.jsx(t,{name:"Mauve — Rosa-Lilás",swatches:P}),e.jsx(t,{name:"Slate — Neutro Frio",swatches:C})]})})},n={name:"2 · Semânticos — Intenção",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground",children:"Tokens Semânticos"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Referenciam primitivos. Mudam conforme o tema (light/dark). Use o seletor de tema no toolbar acima."})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:R.map(a=>e.jsx(G,{name:a.name,cssVar:a.var,desc:a.desc},a.var))})]})})},c={name:"3 · Tabelas Hierárquicas",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground",children:"Tokens de Tabela"}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"Tokens dedicados a tabelas hierárquicas — separação visual entre header de agrupamento (cliente / solicitação), sub-header de colunas e linhas-filhas. Funciona em ambos light e dark mode."})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10",children:q.map(a=>e.jsx(V,{name:a.name,cssVar:a.cssVar,varName:a.var,desc:a.desc,used:a.used},a.var))}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h2",{className:"text-base font-semibold text-foreground",children:"Preview da hierarquia"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:["Observe a diferença de tom: header do grupo ",">"," sub-header de colunas ",">"," linhas-filhas. Use o seletor de tema no toolbar para validar em light e dark."]})]}),e.jsx("div",{className:"rounded-lg border border-border overflow-hidden bg-card",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsxs("thead",{children:[e.jsx("tr",{style:{backgroundColor:"hsl(var(--row-group-header))"},children:e.jsx("th",{colSpan:4,className:"text-left px-4 py-2.5 text-foreground font-semibold",children:e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider text-muted-foreground",children:"Cliente"}),"Carlos Silva",e.jsx("span",{className:"text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary",children:"PF"})]})})}),e.jsxs("tr",{className:"bg-card",children:[e.jsx("th",{className:"text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border",children:"Instituição"}),e.jsx("th",{className:"text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border",children:"Conta"}),e.jsx("th",{className:"text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border",children:"Tipo"}),e.jsx("th",{className:"text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border",children:"Status"})]})]}),e.jsx("tbody",{children:[{inst:"XP Investimentos",conta:"10293-1",tipo:"Investimento",status:"Ativo"},{inst:"BTG Pactual",conta:"88812-4",tipo:"Investimento",status:"Ativo"},{inst:"Itaú BBA",conta:"00321-9",tipo:"Corrente",status:"Inativo"}].map(a=>e.jsxs("tr",{className:"bg-card hover:bg-muted/60 transition-colors border-t border-border",children:[e.jsx("td",{className:"px-4 py-2.5 text-foreground",children:a.inst}),e.jsx("td",{className:"px-4 py-2.5 text-foreground font-mono text-xs",children:a.conta}),e.jsx("td",{className:"px-4 py-2.5 text-muted-foreground",children:a.tipo}),e.jsx("td",{className:"px-4 py-2.5",children:e.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full ${a.status==="Ativo"?"bg-green-100 text-green-700 border border-green-200":"bg-gray-100 text-gray-700 border border-gray-200"}`,children:a.status})})]},a.conta))})]})}),e.jsxs("div",{className:"mt-6 p-4 rounded-lg border border-border bg-muted/30",children:[e.jsx("p",{className:"text-xs text-foreground font-semibold mb-2",children:"Por que um token dedicado?"}),e.jsxs("p",{className:"text-xs text-muted-foreground leading-relaxed",children:["Os tokens ",e.jsx("code",{className:"font-mono text-primary",children:"--secondary"})," e"," ",e.jsx("code",{className:"font-mono text-primary",children:"--muted"})," têm relações de luminosidade invertidas entre dark e light mode. Para garantir que o header do grupo seja"," ",e.jsx("strong",{children:"sempre mais escuro/forte"})," que o sub-header em qualquer tema, criamos ",e.jsx("code",{className:"font-mono text-primary",children:"--row-group-header"})," com valores explícitos por modo."]})]})]})})},l={name:"4 · Status — Feedback Visual",render:()=>e.jsx("div",{className:"p-8 bg-background min-h-screen",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold font-heading text-foreground mb-2",children:"Cores de Status"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-8",children:"Paleta semântica para feedback visual. Sempre use com texto e borda da mesma família."}),e.jsx("div",{className:"space-y-3",children:[{label:"Sucesso",text:"text-green-700",bg:"bg-green-100",border:"border-green-200",desc:"Executado · Aprovado · Ativo"},{label:"Aviso",text:"text-amber-700",bg:"bg-amber-100",border:"border-amber-200",desc:"Pendente · Em análise · Atenção"},{label:"Erro",text:"text-red-700",bg:"bg-red-100",border:"border-red-200",desc:"Recusado · Cancelado · Falha"},{label:"Info",text:"text-blue-700",bg:"bg-blue-100",border:"border-blue-200",desc:"Em execução · Informativo · Progresso"},{label:"Especial",text:"text-purple-700",bg:"bg-purple-100",border:"border-purple-200",desc:"Replicado · Destaque · VIP"},{label:"Neutro",text:"text-gray-600",bg:"bg-gray-100",border:"border-gray-200",desc:"Rascunho · Arquivado · Inativo"}].map(({label:a,text:s,bg:r,border:d,desc:i})=>e.jsxs("div",{className:`flex items-center gap-4 px-4 py-3 rounded-xl border ${r} ${d}`,children:[e.jsx("span",{className:`text-sm font-semibold w-20 ${s}`,children:a}),e.jsx("span",{className:`text-xs px-2.5 py-0.5 rounded-full border font-medium ${r} ${d} ${s}`,children:a}),e.jsx("span",{className:"text-xs text-muted-foreground",children:i})]},a))})]})})};var m,x,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '1 · Primitivos — Paletas',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-6xl mx-auto">\r
        <div className="mb-8">\r
          <h1 className="text-2xl font-bold font-heading text-foreground">Cores Primitivas</h1>\r
          <p className="text-sm text-muted-foreground mt-1">\r
            Valores brutos. 11 tons por paleta (50 → 950). Use apenas para definir tokens semânticos — nunca diretamente em componentes.\r
          </p>\r
        </div>\r
        <Palette name="Gold — Cor da Marca (PANTONE 465 C)" swatches={GOLD_PALETTE} />\r
        <Palette name="Navy — Estrutural Escuro (PANTONE 7546 C)" swatches={NAVY_PALETTE} />\r
        <Palette name="Gray — Neutro" swatches={GRAY_PALETTE} />\r
        <Palette name="Green — Sucesso" swatches={GREEN_PALETTE} />\r
        <Palette name="Red — Erro" swatches={RED_PALETTE} />\r
        <Palette name="Amber — Aviso" swatches={AMBER_PALETTE} />\r
        <Palette name="Blue — Informação" swatches={BLUE_PALETTE} />\r
        <Palette name="Blue Bright — Destaque Vivo" swatches={BLUE_BRIGHT_PALETTE} />\r
        <Palette name="Teal — Verde-Azulado" swatches={TEAL_PALETTE} />\r
        <Palette name="Purple — Lavanda / Violeta" swatches={PURPLE_PALETTE} />\r
        <Palette name="Mauve — Rosa-Lilás" swatches={MAUVE_PALETTE} />\r
        <Palette name="Slate — Neutro Frio" swatches={SLATE_PALETTE} />\r
      </div>\r
    </div>
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,b,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '2 · Semânticos — Intenção',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-4xl mx-auto">\r
        <div className="mb-8">\r
          <h1 className="text-2xl font-bold font-heading text-foreground">Tokens Semânticos</h1>\r
          <p className="text-sm text-muted-foreground mt-1">\r
            Referenciam primitivos. Mudam conforme o tema (light/dark). Use o seletor de tema no toolbar acima.\r
          </p>\r
        </div>\r
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">\r
          {SEMANTIC_TOKENS.map(t => <SemanticSwatch key={t.var} name={t.name} cssVar={t.var} desc={t.desc} />)}\r
        </div>\r
      </div>\r
    </div>
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,f,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '3 · Tabelas Hierárquicas',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-5xl mx-auto">\r
        <div className="mb-8">\r
          <h1 className="text-2xl font-bold font-heading text-foreground">Tokens de Tabela</h1>\r
          <p className="text-sm text-muted-foreground mt-1">\r
            Tokens dedicados a tabelas hierárquicas — separação visual entre header de\r
            agrupamento (cliente / solicitação), sub-header de colunas e linhas-filhas.\r
            Funciona em ambos light e dark mode.\r
          </p>\r
        </div>\r
\r
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">\r
          {TABLE_TOKENS.map(t => <TableTokenSwatch key={t.var} name={t.name} cssVar={t.cssVar} varName={t.var} desc={t.desc} used={t.used} />)}\r
        </div>\r
\r
        <div className="mb-3">\r
          <h2 className="text-base font-semibold text-foreground">Preview da hierarquia</h2>\r
          <p className="text-xs text-muted-foreground mt-1">\r
            Observe a diferença de tom: header do grupo {\`>\`} sub-header de colunas {\`>\`} linhas-filhas.\r
            Use o seletor de tema no toolbar para validar em light e dark.\r
          </p>\r
        </div>\r
\r
        <div className="rounded-lg border border-border overflow-hidden bg-card">\r
          <table className="w-full text-sm">\r
            {/* Linha-pai (group header) */}\r
            <thead>\r
              <tr style={{
              backgroundColor: 'hsl(var(--row-group-header))'
            }}>\r
                <th colSpan={4} className="text-left px-4 py-2.5 text-foreground font-semibold">\r
                  <span className="inline-flex items-center gap-2">\r
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">\r
                      Cliente\r
                    </span>\r
                    Carlos Silva\r
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary">\r
                      PF\r
                    </span>\r
                  </span>\r
                </th>\r
              </tr>\r
              {/* Sub-header de colunas */}\r
              <tr className="bg-card">\r
                <th className="text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border">\r
                  Instituição\r
                </th>\r
                <th className="text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border">\r
                  Conta\r
                </th>\r
                <th className="text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border">\r
                  Tipo\r
                </th>\r
                <th className="text-left px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground border-t border-border">\r
                  Status\r
                </th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              {[{
              inst: 'XP Investimentos',
              conta: '10293-1',
              tipo: 'Investimento',
              status: 'Ativo'
            }, {
              inst: 'BTG Pactual',
              conta: '88812-4',
              tipo: 'Investimento',
              status: 'Ativo'
            }, {
              inst: 'Itaú BBA',
              conta: '00321-9',
              tipo: 'Corrente',
              status: 'Inativo'
            }].map(row => <tr key={row.conta} className="bg-card hover:bg-muted/60 transition-colors border-t border-border">\r
                  <td className="px-4 py-2.5 text-foreground">{row.inst}</td>\r
                  <td className="px-4 py-2.5 text-foreground font-mono text-xs">{row.conta}</td>\r
                  <td className="px-4 py-2.5 text-muted-foreground">{row.tipo}</td>\r
                  <td className="px-4 py-2.5">\r
                    <span className={\`text-xs px-2 py-0.5 rounded-full \${row.status === 'Ativo' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-gray-100 text-gray-700 border border-gray-200'}\`}>\r
                      {row.status}\r
                    </span>\r
                  </td>\r
                </tr>)}\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div className="mt-6 p-4 rounded-lg border border-border bg-muted/30">\r
          <p className="text-xs text-foreground font-semibold mb-2">Por que um token dedicado?</p>\r
          <p className="text-xs text-muted-foreground leading-relaxed">\r
            Os tokens <code className="font-mono text-primary">--secondary</code> e{' '}\r
            <code className="font-mono text-primary">--muted</code> têm relações de luminosidade\r
            invertidas entre dark e light mode. Para garantir que o header do grupo seja{' '}\r
            <strong>sempre mais escuro/forte</strong> que o sub-header em qualquer tema,\r
            criamos <code className="font-mono text-primary">--row-group-header</code> com\r
            valores explícitos por modo.\r
          </p>\r
        </div>\r
      </div>\r
    </div>
}`,...(v=(f=c.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var E,N,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '4 · Status — Feedback Visual',
  render: () => <div className="p-8 bg-background min-h-screen">\r
      <div className="max-w-3xl mx-auto">\r
        <h1 className="text-2xl font-bold font-heading text-foreground mb-2">Cores de Status</h1>\r
        <p className="text-sm text-muted-foreground mb-8">Paleta semântica para feedback visual. Sempre use com texto e borda da mesma família.</p>\r
        <div className="space-y-3">\r
          {[{
          label: 'Sucesso',
          text: 'text-green-700',
          bg: 'bg-green-100',
          border: 'border-green-200',
          desc: 'Executado · Aprovado · Ativo'
        }, {
          label: 'Aviso',
          text: 'text-amber-700',
          bg: 'bg-amber-100',
          border: 'border-amber-200',
          desc: 'Pendente · Em análise · Atenção'
        }, {
          label: 'Erro',
          text: 'text-red-700',
          bg: 'bg-red-100',
          border: 'border-red-200',
          desc: 'Recusado · Cancelado · Falha'
        }, {
          label: 'Info',
          text: 'text-blue-700',
          bg: 'bg-blue-100',
          border: 'border-blue-200',
          desc: 'Em execução · Informativo · Progresso'
        }, {
          label: 'Especial',
          text: 'text-purple-700',
          bg: 'bg-purple-100',
          border: 'border-purple-200',
          desc: 'Replicado · Destaque · VIP'
        }, {
          label: 'Neutro',
          text: 'text-gray-600',
          bg: 'bg-gray-100',
          border: 'border-gray-200',
          desc: 'Rascunho · Arquivado · Inativo'
        }].map(({
          label,
          text,
          bg,
          border,
          desc
        }) => <div key={label} className={\`flex items-center gap-4 px-4 py-3 rounded-xl border \${bg} \${border}\`}>\r
              <span className={\`text-sm font-semibold w-20 \${text}\`}>{label}</span>\r
              <span className={\`text-xs px-2.5 py-0.5 rounded-full border font-medium \${bg} \${border} \${text}\`}>{label}</span>\r
              <span className="text-xs text-muted-foreground">{desc}</span>\r
            </div>)}\r
        </div>\r
      </div>\r
    </div>
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const H=["Primitivos","Semanticos","TabelasHierarquicas","StatusFeedback"];export{o as Primitivos,n as Semanticos,l as StatusFeedback,c as TabelasHierarquicas,H as __namedExportsOrder,M as default};
