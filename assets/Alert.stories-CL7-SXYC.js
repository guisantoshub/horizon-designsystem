import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as p}from"./iframe-CvSox_He.js";import{c as _}from"./index-BwobEAja.js";import{c as u}from"./utils-CytzSlOG.js";import{I as y}from"./info-CCMne8cq.js";import{C as O}from"./circle-alert-HrRCwhGW.js";import{C as B}from"./circle-check-BNWy9OQk.js";import{T as L}from"./triangle-alert-DTLhCcVa.js";import"./preload-helper-C1FmrZbK.js";import"./createLucideIcon-D6DUjI5c.js";const R=_("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),r=p.forwardRef(({className:s,variant:o,...n},I)=>e.jsx("div",{ref:I,role:"alert",className:u(R({variant:o}),s),...n}));r.displayName="Alert";const t=p.forwardRef(({className:s,...o},n)=>e.jsx("h5",{ref:n,className:u("mb-1 font-medium leading-none tracking-tight",s),...o}));t.displayName="AlertTitle";const a=p.forwardRef(({className:s,...o},n)=>e.jsx("div",{ref:n,className:u("text-sm [&_p]:leading-relaxed",s),...o}));a.displayName="AlertDescription";r.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};a.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const J={title:"Design System / Componentes / Alert",component:r,parameters:{layout:"padded",docs:{description:{component:"Mensagem inline para feedback persistente (não-temporário). Use para validações de formulário, avisos contextuais, ou estados informativos. Para mensagens temporárias use `toast` (Sonner)."}}},tags:["autodocs"]},l={render:()=>e.jsxs(r,{className:"max-w-lg",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(t,{children:"Informação"}),e.jsx(a,{children:"O sistema realizará manutenção programada no domingo, das 22h às 02h."})]})},i={name:"Destrutivo (erro)",render:()=>e.jsxs(r,{variant:"destructive",className:"max-w-lg",children:[e.jsx(O,{className:"h-4 w-4"}),e.jsx(t,{children:"Não foi possível salvar"}),e.jsx(a,{children:"O CPF informado já está cadastrado para outro cliente. Verifique e tente novamente."})]})},d={name:"Sucesso (custom)",render:()=>e.jsxs(r,{className:"max-w-lg border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-300",children:[e.jsx(B,{className:"h-4 w-4"}),e.jsx(t,{children:"Boleta executada"}),e.jsx(a,{children:"BOL-413 foi confirmada pela corretora às 14:32."})]})},m={name:"Atenção (custom)",render:()=>e.jsxs(r,{className:"max-w-lg border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-300",children:[e.jsx(L,{className:"h-4 w-4"}),e.jsx(t,{children:"Boleta acima do limite diário"}),e.jsx(a,{children:"Aprovação da gestão será necessária antes de avançar para execução."})]})},c={name:"Sem título",render:()=>e.jsxs(r,{className:"max-w-lg",children:[e.jsx(y,{className:"h-4 w-4"}),e.jsx(a,{children:"Lembrete: o filtro de período afeta toda a página, inclusive a contagem de boletas paradas."})]})};var g,x,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Alert className="max-w-lg">\r
      <Info className="h-4 w-4" />\r
      <AlertTitle>Informação</AlertTitle>\r
      <AlertDescription>\r
        O sistema realizará manutenção programada no domingo, das 22h às 02h.\r
      </AlertDescription>\r
    </Alert>
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,A,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Destrutivo (erro)",
  render: () => <Alert variant="destructive" className="max-w-lg">\r
      <AlertCircle className="h-4 w-4" />\r
      <AlertTitle>Não foi possível salvar</AlertTitle>\r
      <AlertDescription>\r
        O CPF informado já está cadastrado para outro cliente. Verifique e tente\r
        novamente.\r
      </AlertDescription>\r
    </Alert>
}`,...(b=(A=i.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var h,N,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Sucesso (custom)",
  render: () => <Alert className="max-w-lg border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-300">\r
      <CheckCircle2 className="h-4 w-4" />\r
      <AlertTitle>Boleta executada</AlertTitle>\r
      <AlertDescription>\r
        BOL-413 foi confirmada pela corretora às 14:32.\r
      </AlertDescription>\r
    </Alert>
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,k,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Atenção (custom)",
  render: () => <Alert className="max-w-lg border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-300">\r
      <AlertTriangle className="h-4 w-4" />\r
      <AlertTitle>Boleta acima do limite diário</AlertTitle>\r
      <AlertDescription>\r
        Aprovação da gestão será necessária antes de avançar para execução.\r
      </AlertDescription>\r
    </Alert>
}`,...(D=(k=m.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var S,T,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Sem título",
  render: () => <Alert className="max-w-lg">\r
      <Info className="h-4 w-4" />\r
      <AlertDescription>\r
        Lembrete: o filtro de período afeta toda a página, inclusive a contagem\r
        de boletas paradas.\r
      </AlertDescription>\r
    </Alert>
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const K=["Default","Destrutivo","Sucesso","Atencao","SomenteDescricao"];export{m as Atencao,l as Default,i as Destrutivo,c as SomenteDescricao,d as Sucesso,K as __namedExportsOrder,J as default};
