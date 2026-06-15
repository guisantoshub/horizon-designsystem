import{j as e}from"./jsx-runtime-D69pdnyW.js";import{N as r}from"./NavLink-rFMY6OgD.js";import{M as u}from"./index-AfVjuk3I.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNOJwA3A.js";import"./utils-CytzSlOG.js";const b={title:"Design System / Componentes / NavLink",component:r,parameters:{layout:"padded",docs:{description:{component:"Wrapper sobre `react-router-dom NavLink` que aceita `className`, `activeClassName` e `pendingClassName` como strings (compatibilidade com o estilo de classnames condicionais). Usado dentro do `AppSidebar` e em menus de navegação interna."}}},tags:["autodocs"]},c=({children:l,initialPath:p})=>e.jsx(u,{initialEntries:[p],children:e.jsx("div",{className:"flex flex-col gap-2 w-64",children:l})}),t={render:()=>e.jsxs(c,{initialPath:"/boletador",children:[e.jsx(r,{to:"/boletador",className:"px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",activeClassName:"!bg-primary !text-primary-foreground",children:"Boletador"}),e.jsx(r,{to:"/cadastro/clientes",className:"px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",activeClassName:"!bg-primary !text-primary-foreground",children:"Clientes"}),e.jsx(r,{to:"/autorizacao-acessos",className:"px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",activeClassName:"!bg-primary !text-primary-foreground",children:"Autorização de Acessos"}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-2",children:["Item ativo: ",e.jsx("code",{children:"/boletador"})]})]})},o={name:"Sem activeClassName",render:()=>e.jsx(c,{initialPath:"/relatorios",children:e.jsx(r,{to:"/relatorios",className:"px-3 py-2 rounded-md text-sm text-primary underline",children:"Relatórios (link simples — ainda assim usa NavLink do router)"})})};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Wrapper initialPath="/boletador">\r
      <NavLink to="/boletador" className="px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" activeClassName="!bg-primary !text-primary-foreground">\r
        Boletador\r
      </NavLink>\r
      <NavLink to="/cadastro/clientes" className="px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" activeClassName="!bg-primary !text-primary-foreground">\r
        Clientes\r
      </NavLink>\r
      <NavLink to="/autorizacao-acessos" className="px-3 py-2 rounded-md text-sm font-heading text-muted-foreground hover:bg-muted hover:text-foreground transition-colors" activeClassName="!bg-primary !text-primary-foreground">\r
        Autorização de Acessos\r
      </NavLink>\r
      <p className="text-xs text-muted-foreground mt-2">\r
        Item ativo: <code>/boletador</code>\r
      </p>\r
    </Wrapper>
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Sem activeClassName",
  render: () => <Wrapper initialPath="/relatorios">\r
      <NavLink to="/relatorios" className="px-3 py-2 rounded-md text-sm text-primary underline">\r
        Relatórios (link simples — ainda assim usa NavLink do router)\r
      </NavLink>\r
    </Wrapper>
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const k=["Default","SemActiveClassName"];export{t as Default,o as SemActiveClassName,k as __namedExportsOrder,b as default};
