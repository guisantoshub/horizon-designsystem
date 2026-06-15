import{j as e}from"./jsx-runtime-D69pdnyW.js";import{I as r}from"./input-m_F3UOAC.js";import{L as a}from"./label-BS9NERQq.js";import{r as P}from"./iframe-CvSox_He.js";import{S as D}from"./search-CWHFyfhP.js";import{E as J,a as M}from"./eye-DyWtn0sP.js";import{M as O}from"./mail-CwyjpOMW.js";import"./utils-CytzSlOG.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./preload-helper-C1FmrZbK.js";import"./createLucideIcon-D6DUjI5c.js";const X={title:"Design System / Componentes / Input",parameters:{layout:"centered"}},s={render:()=>e.jsxs("div",{className:"w-72",children:[e.jsx(a,{htmlFor:"default-input",children:"Nome do cliente"}),e.jsx(r,{id:"default-input",placeholder:"Ex: João da Silva",className:"mt-1.5"})]})},t={name:"Com ícone de busca",render:()=>e.jsxs("div",{className:"relative w-72",children:[e.jsx(D,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground","aria-hidden":"true"}),e.jsx(r,{placeholder:"Buscar solicitações...",className:"pl-9"})]})},o={name:"Estado de erro",render:()=>e.jsxs("div",{className:"w-72",children:[e.jsx(a,{htmlFor:"error-input",className:"text-destructive",children:"E-mail"}),e.jsx(r,{id:"error-input",type:"email",defaultValue:"email-invalido","aria-invalid":"true","aria-describedby":"email-error",className:"mt-1.5 border-destructive focus-visible:ring-destructive"}),e.jsx("p",{id:"email-error",role:"alert",className:"text-xs text-destructive mt-1",children:"Formato de e-mail inválido."})]})},l={name:"Desabilitado",render:()=>e.jsxs("div",{className:"w-72",children:[e.jsx(a,{htmlFor:"disabled-input",children:"CPF/CNPJ"}),e.jsx(r,{id:"disabled-input",defaultValue:"123.456.789-00",disabled:!0,className:"mt-1.5"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Campo preenchido automaticamente."})]})},i={name:"Senha com toggle",render:function(){const[m,C]=P.useState(!1);return e.jsxs("div",{className:"w-72",children:[e.jsx(a,{htmlFor:"password-input",children:"Senha"}),e.jsxs("div",{className:"relative mt-1.5",children:[e.jsx(r,{id:"password-input",type:m?"text":"password",placeholder:"••••••••",className:"pr-10"}),e.jsx("button",{type:"button",onClick:()=>C(I=>!I),className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded","aria-label":m?"Ocultar senha":"Mostrar senha",children:m?e.jsx(J,{className:"h-4 w-4"}):e.jsx(M,{className:"h-4 w-4"})})]})]})}},d={name:"Grupo de campos",render:()=>e.jsxs("div",{className:"w-80 space-y-4 p-6 bg-card rounded-xl border",children:[e.jsxs("div",{children:[e.jsx(a,{htmlFor:"form-nome",children:"Nome completo"}),e.jsx(r,{id:"form-nome",placeholder:"João da Silva",className:"mt-1.5"})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"form-email",children:"E-mail"}),e.jsxs("div",{className:"relative mt-1.5",children:[e.jsx(O,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground","aria-hidden":"true"}),e.jsx(r,{id:"form-email",type:"email",placeholder:"joao@empresa.com",className:"pl-9"})]})]}),e.jsxs("div",{children:[e.jsx(a,{htmlFor:"form-cpf",children:"CPF"}),e.jsx(r,{id:"form-cpf",placeholder:"000.000.000-00",className:"mt-1.5"})]})]})};var c,n,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="w-72">\r
      <Label htmlFor="default-input">Nome do cliente</Label>\r
      <Input id="default-input" placeholder="Ex: João da Silva" className="mt-1.5" />\r
    </div>
}`,...(u=(n=s.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var p,h,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Com ícone de busca',
  render: () => <div className="relative w-72">\r
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />\r
      <Input placeholder="Buscar solicitações..." className="pl-9" />\r
    </div>
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,f,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Estado de erro',
  render: () => <div className="w-72">\r
      <Label htmlFor="error-input" className="text-destructive">E-mail</Label>\r
      <Input id="error-input" type="email" defaultValue="email-invalido" aria-invalid="true" aria-describedby="email-error" className="mt-1.5 border-destructive focus-visible:ring-destructive" />\r
      <p id="email-error" role="alert" className="text-xs text-destructive mt-1">\r
        Formato de e-mail inválido.\r
      </p>\r
    </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var N,w,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => <div className="w-72">\r
      <Label htmlFor="disabled-input">CPF/CNPJ</Label>\r
      <Input id="disabled-input" defaultValue="123.456.789-00" disabled className="mt-1.5" />\r
      <p className="text-xs text-muted-foreground mt-1">Campo preenchido automaticamente.</p>\r
    </div>
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var g,S,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Senha com toggle',
  render: function PasswordStory() {
    const [show, setShow] = useState(false);
    return <div className="w-72">\r
        <Label htmlFor="password-input">Senha</Label>\r
        <div className="relative mt-1.5">\r
          <Input id="password-input" type={show ? 'text' : 'password'} placeholder="••••••••" className="pr-10" />\r
          <button type="button" onClick={() => setShow(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded" aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}>\r
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}\r
          </button>\r
        </div>\r
      </div>;
  }
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var F,E,L;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Grupo de campos',
  render: () => <div className="w-80 space-y-4 p-6 bg-card rounded-xl border">\r
      <div>\r
        <Label htmlFor="form-nome">Nome completo</Label>\r
        <Input id="form-nome" placeholder="João da Silva" className="mt-1.5" />\r
      </div>\r
      <div>\r
        <Label htmlFor="form-email">E-mail</Label>\r
        <div className="relative mt-1.5">\r
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />\r
          <Input id="form-email" type="email" placeholder="joao@empresa.com" className="pl-9" />\r
        </div>\r
      </div>\r
      <div>\r
        <Label htmlFor="form-cpf">CPF</Label>\r
        <Input id="form-cpf" placeholder="000.000.000-00" className="mt-1.5" />\r
      </div>\r
    </div>
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Y=["Default","WithSearch","WithError","Disabled","Password","FormGroup"];export{s as Default,l as Disabled,d as FormGroup,i as Password,o as WithError,t as WithSearch,Y as __namedExportsOrder,X as default};
