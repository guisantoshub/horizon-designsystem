import{j as e}from"./jsx-runtime-D69pdnyW.js";import{B as r}from"./button-DXL5AZ1l.js";import{P as Z}from"./plus-BG87GyKl.js";import{A as $}from"./arrow-right-CbjUOza5.js";import{D as ee}from"./download-B8CPmMcB.js";import{L as re}from"./loader-circle-BngyZSZ8.js";import{T as ae}from"./trash-2-Bg6OQw1i.js";import{S as te}from"./search-CWHFyfhP.js";import{B as oe}from"./bell-XC7InOcy.js";import{M as se,S as ne}from"./sun-CmSO3Iue.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-D6DUjI5c.js";const we={title:"Design System / Componentes / Button",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","secondary","outline","ghost","destructive","link"]},size:{control:"select",options:["sm","default","lg","icon"]},disabled:{control:"boolean"}}},t={args:{children:"Confirmar",variant:"default"}},o={args:{children:"Cancelar",variant:"secondary"}},s={args:{children:"Ver detalhes",variant:"outline"}},n={args:{children:"Ignorar",variant:"ghost"}},c={args:{children:"Excluir",variant:"destructive"}},i={render:()=>e.jsxs(r,{children:[e.jsx(Z,{className:"h-4 w-4 mr-2","aria-hidden":"true"}),"Nova Boleta"]})},d={render:()=>e.jsxs(r,{variant:"outline",children:["Ver todas",e.jsx($,{className:"h-4 w-4 ml-2","aria-hidden":"true"})]})},l={render:()=>e.jsx(r,{size:"icon",variant:"outline","aria-label":"Baixar arquivo",children:e.jsx(ee,{className:"h-4 w-4"})})},u={render:()=>e.jsxs(r,{disabled:!0,children:[e.jsx(re,{className:"h-4 w-4 mr-2 animate-spin","aria-hidden":"true"}),"Processando..."]})},m={args:{children:"Indisponível",disabled:!0}},h={name:"Todas as Variantes",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center p-6 bg-background rounded-xl border",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"ghost",children:"Ghost"}),e.jsxs(r,{variant:"destructive",children:[e.jsx(ae,{className:"h-4 w-4 mr-2","aria-hidden":"true"}),"Destrutivo"]}),e.jsx(r,{variant:"link",children:"Link"}),e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"lg",children:"Large"}),e.jsx(r,{disabled:!0,children:"Desabilitado"})]})},a={name:"Icon Button — Padrão Header",render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("p",{className:"text-xs text-muted-foreground font-body uppercase tracking-wider",children:"Passe o mouse sobre os botões para ver o hover"}),e.jsxs("div",{className:"flex items-center gap-2 p-4 bg-background-secondary rounded-xl border h-14",children:[e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Buscar",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(te,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Notificações",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(oe,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Alternar tema (Light)",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(se,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Alternar tema (Dark)",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(ne,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-heading font-bold ml-1",children:"H"})]}),e.jsxs("div",{className:"text-xs font-mono bg-muted rounded p-3 text-muted-foreground",children:['className="text-muted-foreground ',e.jsx("strong",{children:"hover:bg-accent hover:text-accent-foreground"}),'"']})]})};var g,p,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Confirmar',
    variant: 'default'
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Cancelar',
    variant: 'secondary'
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var B,N,j;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Ver detalhes',
    variant: 'outline'
  }
}`,...(j=(N=s.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var w,y,S;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Ignorar',
    variant: 'ghost'
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var D,z,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Excluir',
    variant: 'destructive'
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var I,L,P;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Button>\r
      <Plus className="h-4 w-4 mr-2" aria-hidden="true" />\r
      Nova Boleta\r
    </Button>
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var A,V,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Button variant="outline">\r
      Ver todas\r
      <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />\r
    </Button>
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var H,O,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Button size="icon" variant="outline" aria-label="Baixar arquivo">\r
      <Download className="h-4 w-4" />\r
    </Button>
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var T,E,G;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Button disabled>\r
      <Loader2 className="h-4 w-4 mr-2 animate-spin" aria-hidden="true" />\r
      Processando...\r
    </Button>
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var W,M,q;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Indisponível',
    disabled: true
  }
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var _,F,J;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Todas as Variantes',
  render: () => <div className="flex flex-wrap gap-3 items-center p-6 bg-background rounded-xl border">\r
      <Button>Default</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="destructive">\r
        <Trash2 className="h-4 w-4 mr-2" aria-hidden="true" />\r
        Destrutivo\r
      </Button>\r
      <Button variant="link">Link</Button>\r
      <Button size="sm">Small</Button>\r
      <Button size="lg">Large</Button>\r
      <Button disabled>Desabilitado</Button>\r
    </div>
}`,...(J=(F=h.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,U,X,Y;a.parameters={...a.parameters,docs:{...(K=a.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Icon Button — Padrão Header',
  render: () => <div className="flex flex-col gap-6">\r
      <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">\r
        Passe o mouse sobre os botões para ver o hover\r
      </p>\r
      <div className="flex items-center gap-2 p-4 bg-background-secondary rounded-xl border h-14">\r
        <Button variant="ghost" size="icon" aria-label="Buscar" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
          <Search className="h-4 w-4" />\r
        </Button>\r
        <Button variant="ghost" size="icon" aria-label="Notificações" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
          <Bell className="h-4 w-4" />\r
        </Button>\r
        <Button variant="ghost" size="icon" aria-label="Alternar tema (Light)" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
          <Moon className="h-4 w-4" />\r
        </Button>\r
        <Button variant="ghost" size="icon" aria-label="Alternar tema (Dark)" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
          <Sun className="h-4 w-4" />\r
        </Button>\r
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-heading font-bold ml-1">\r
          H\r
        </div>\r
      </div>\r
      <div className="text-xs font-mono bg-muted rounded p-3 text-muted-foreground">\r
        className="text-muted-foreground <strong>hover:bg-accent hover:text-accent-foreground</strong>"\r
      </div>\r
    </div>
}`,...(U=(Q=a.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"Padrão de ícone do Header da aplicação.\r\n\nRegra de hover consistente em light e dark mode:\r\n- Fundo: `bg-accent` (navy escuro em ambos os modos)\r\n- Ícone: `text-accent-foreground` (branco em ambos os modos)\r\n\nClasse obrigatória: `hover:bg-accent hover:text-accent-foreground`",...(Y=(X=a.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const ye=["Default","Secondary","Outline","Ghost","Destructive","WithIconLeft","WithIconRight","IconOnly","Loading","Disabled","AllVariants","HeaderIconButton"];export{h as AllVariants,t as Default,c as Destructive,m as Disabled,n as Ghost,a as HeaderIconButton,l as IconOnly,u as Loading,s as Outline,o as Secondary,i as WithIconLeft,d as WithIconRight,ye as __namedExportsOrder,we as default};
