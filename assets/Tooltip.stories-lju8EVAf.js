import{j as o}from"./jsx-runtime-D69pdnyW.js";import{T as s,c as M,a as n,b as l}from"./tooltip-BkbByxSS.js";import{B as d}from"./button-DXL5AZ1l.js";import{I as S}from"./info-CCMne8cq.js";import{P as A}from"./pencil-Dx-FwIp3.js";import{C as V}from"./copy-CAqNEjM1.js";import{R as E}from"./refresh-cw-DdgTnMZv.js";import{T as L}from"./trash-2-Bg6OQw1i.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-KMH598xy.js";import"./index-CSC2Jsb6.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./createLucideIcon-D6DUjI5c.js";const co={title:"Design System / Componentes / Tooltip",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Tooltip — Dica contextual

Wrapper sobre **Radix Tooltip**. Use para esclarecer ações de ícones
sem texto, mostrar valores truncados, ou explicar termos do domínio
(ex.: "Replicado", "DTVM"). Sempre dentro de um \`TooltipProvider\`
no nível da aplicação.

### Composição
\`\`\`tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button>…</Button></TooltipTrigger>
    <TooltipContent>Dica curta</TooltipContent>
  </Tooltip>
</TooltipProvider>
\`\`\`

> **Acessibilidade**: o Radix Tooltip já lida com \`aria-describedby\`
> e suporte a teclado. Não use para informação crítica — apenas dicas.
        `}}},decorators:[r=>o.jsx(M,{children:o.jsx(r,{})})]},e={name:"Padrão",render:()=>o.jsxs(s,{children:[o.jsx(n,{asChild:!0,children:o.jsx(d,{variant:"outline",size:"icon",children:o.jsx(S,{className:"h-4 w-4"})})}),o.jsx(l,{children:"Saiba mais sobre este indicador"})]})},i={name:"Linha de Ações",render:()=>o.jsx("div",{className:"flex items-center gap-1 p-2 rounded-lg border border-border bg-card",children:[{icon:A,label:"Editar"},{icon:V,label:"Duplicar"},{icon:E,label:"Atualizar"},{icon:L,label:"Excluir"}].map(({icon:r,label:c})=>o.jsxs(s,{children:[o.jsx(n,{asChild:!0,children:o.jsx(d,{variant:"ghost",size:"icon",children:o.jsx(r,{className:"h-4 w-4"})})}),o.jsx(l,{children:c})]},c))})},t={name:"Posicionamento",render:()=>o.jsx("div",{className:"grid grid-cols-2 gap-12 p-12",children:["top","right","bottom","left"].map(r=>o.jsxs(s,{children:[o.jsx(n,{asChild:!0,children:o.jsx(d,{variant:"outline",children:r})}),o.jsxs(l,{side:r,children:["Tooltip posicionado em ",o.jsx("strong",{children:r})]})]},r))})},a={name:"Texto Longo (glossário)",render:()=>o.jsxs(s,{children:[o.jsx(n,{asChild:!0,children:o.jsx("span",{className:"text-sm font-mono underline decoration-dotted cursor-help text-foreground",children:"DTVM"})}),o.jsx(l,{className:"max-w-xs",children:"Distribuidora de Títulos e Valores Mobiliários — instituição autorizada pela CVM a intermediar a compra e venda de ativos financeiros para clientes."})]})};var p,m,T,u,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Padrão',
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <Button variant="outline" size="icon">\r
          <Info className="h-4 w-4" />\r
        </Button>\r
      </TooltipTrigger>\r
      <TooltipContent>Saiba mais sobre este indicador</TooltipContent>\r
    </Tooltip>
}`,...(T=(m=e.parameters)==null?void 0:m.docs)==null?void 0:T.source},description:{story:"Padrão — botão com ícone e dica.",...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var x,h,b,C,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Linha de Ações',
  render: () => <div className="flex items-center gap-1 p-2 rounded-lg border border-border bg-card">\r
      {[{
      icon: Pencil,
      label: 'Editar'
    }, {
      icon: Copy,
      label: 'Duplicar'
    }, {
      icon: RefreshCw,
      label: 'Atualizar'
    }, {
      icon: Trash2,
      label: 'Excluir'
    }].map(({
      icon: Icon,
      label
    }) => <Tooltip key={label}>\r
          <TooltipTrigger asChild>\r
            <Button variant="ghost" size="icon">\r
              <Icon className="h-4 w-4" />\r
            </Button>\r
          </TooltipTrigger>\r
          <TooltipContent>{label}</TooltipContent>\r
        </Tooltip>)}\r
    </div>
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Múltiplos ícones em sequência (linha de ações).",...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var j,v,P,N,D;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Posicionamento',
  render: () => <div className="grid grid-cols-2 gap-12 p-12">\r
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <Tooltip key={side}>\r
          <TooltipTrigger asChild>\r
            <Button variant="outline">{side}</Button>\r
          </TooltipTrigger>\r
          <TooltipContent side={side}>\r
            Tooltip posicionado em <strong>{side}</strong>\r
          </TooltipContent>\r
        </Tooltip>)}\r
    </div>
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source},description:{story:"Posicionamento — top, right, bottom, left.",...(D=(N=t.parameters)==null?void 0:N.docs)==null?void 0:D.description}}};var y,w,B,R,z;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Texto Longo (glossário)',
  render: () => <Tooltip>\r
      <TooltipTrigger asChild>\r
        <span className="text-sm font-mono underline decoration-dotted cursor-help text-foreground">\r
          DTVM\r
        </span>\r
      </TooltipTrigger>\r
      <TooltipContent className="max-w-xs">\r
        Distribuidora de Títulos e Valores Mobiliários — instituição autorizada\r
        pela CVM a intermediar a compra e venda de ativos financeiros para clientes.\r
      </TooltipContent>\r
    </Tooltip>
}`,...(B=(w=a.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Texto longo — explicação de um termo do domínio.",...(z=(R=a.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};const po=["Default","ActionRow","Positioning","LongText"];export{i as ActionRow,e as Default,a as LongText,t as Positioning,po as __namedExportsOrder,co as default};
