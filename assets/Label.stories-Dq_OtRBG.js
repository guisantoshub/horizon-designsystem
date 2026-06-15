import{j as e}from"./jsx-runtime-D69pdnyW.js";import{L as r}from"./label-BS9NERQq.js";import{I as v}from"./input-m_F3UOAC.js";import{C as g}from"./checkbox--P6nYUhC.js";import{S as C}from"./switch-Dx3PtuCi.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./index-fnuAKoKB.js";import"./index-CHv7tnzT.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./check-DQZkpVpn.js";import"./createLucideIcon-D6DUjI5c.js";const G={title:"Design System / Componentes / Label",component:r,parameters:{layout:"padded",docs:{description:{component:"Rótulo acessível para inputs. Sempre usar `htmlFor` apontando para o `id` do controle correspondente — garante leitor de tela e expansão da área clicável."}}},tags:["autodocs"]},a={render:()=>e.jsxs("div",{className:"space-y-2 w-72",children:[e.jsx(r,{htmlFor:"email",children:"E-mail corporativo"}),e.jsx(v,{id:"email",type:"email",placeholder:"usuario@famicapital.com"})]})},o={name:"Com Checkbox",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{id:"aceito-termos"}),e.jsx(r,{htmlFor:"aceito-termos",className:"cursor-pointer select-none",children:"Aceito os termos de uso"})]})},s={name:"Com Switch",render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(C,{id:"notif-email"}),e.jsx(r,{htmlFor:"notif-email",className:"cursor-pointer select-none",children:"Receber notificações por e-mail"})]})},t={name:"Obrigatório (com asterisco)",render:()=>e.jsxs("div",{className:"space-y-2 w-72",children:[e.jsxs(r,{htmlFor:"cpf",children:["CPF ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(v,{id:"cpf",placeholder:"000.000.000-00"}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Use o padrão `",e.jsx("span",{children:"*"}),"` em `text-destructive` para sinalizar campo obrigatório."]})]})};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-72">\r
      <Label htmlFor="email">E-mail corporativo</Label>\r
      <Input id="email" type="email" placeholder="usuario@famicapital.com" />\r
    </div>
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var n,p,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Com Checkbox",
  render: () => <div className="flex items-center gap-2">\r
      <Checkbox id="aceito-termos" />\r
      <Label htmlFor="aceito-termos" className="cursor-pointer select-none">\r
        Aceito os termos de uso\r
      </Label>\r
    </div>
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,u,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Com Switch",
  render: () => <div className="flex items-center gap-3">\r
      <Switch id="notif-email" />\r
      <Label htmlFor="notif-email" className="cursor-pointer select-none">\r
        Receber notificações por e-mail\r
      </Label>\r
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,f,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Obrigatório (com asterisco)",
  render: () => <div className="space-y-2 w-72">\r
      <Label htmlFor="cpf">\r
        CPF <span className="text-destructive">*</span>\r
      </Label>\r
      <Input id="cpf" placeholder="000.000.000-00" />\r
      <p className="text-xs text-muted-foreground">\r
        Use o padrão \`<span>*</span>\` em \`text-destructive\` para sinalizar campo\r
        obrigatório.\r
      </p>\r
    </div>
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const H=["Default","ComCheckbox","ComSwitch","Obrigatorio"];export{o as ComCheckbox,s as ComSwitch,a as Default,t as Obrigatorio,H as __namedExportsOrder,G as default};
