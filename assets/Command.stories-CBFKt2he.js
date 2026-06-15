import{j as r}from"./jsx-runtime-D69pdnyW.js";import{C as d,a as c,b as i,c as l,d as e,e as m,f as o,g as p}from"./command-DTsh8jsz.js";import{S as C}from"./search-CWHFyfhP.js";import{U as h}from"./user-DRpv8ztC.js";import{F as u}from"./file-text-BwWNSdFz.js";import{S as x}from"./settings-DXhjKUDw.js";import{L as j}from"./log-out-DVwIAot_.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DyyxLNMW.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-Bw6hP1Na.js";import"./index-KMH598xy.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-6LzbcUH8.js";import"./utils-CytzSlOG.js";import"./dialog-mpwK8JRG.js";import"./x-C6od2E8Y.js";import"./createLucideIcon-D6DUjI5c.js";const z={title:"Design System / Componentes / Command (paleta de comandos)",parameters:{layout:"centered",docs:{description:{component:"Paleta de comandos com busca rápida (estilo `cmdk` / Linear / Raycast). Usado dentro do `Combobox` e em paletas globais (Ctrl/⌘K). Suporta agrupamento, separadores e atalhos."}}},tags:["autodocs"]},a={render:()=>r.jsxs(d,{className:"rounded-lg border border-border shadow-md w-80",children:[r.jsx(c,{placeholder:"Buscar comando..."}),r.jsxs(i,{children:[r.jsx(l,{children:"Nenhum resultado encontrado."}),r.jsxs(e,{heading:"Navegação",children:[r.jsxs(m,{children:[r.jsx(C,{className:"h-4 w-4 mr-2"}),"Buscar boletas",r.jsx(o,{children:"⌘B"})]}),r.jsxs(m,{children:[r.jsx(h,{className:"h-4 w-4 mr-2"}),"Cadastro de clientes",r.jsx(o,{children:"⌘C"})]}),r.jsxs(m,{children:[r.jsx(u,{className:"h-4 w-4 mr-2"}),"Modelos de e-mail"]})]}),r.jsx(p,{}),r.jsxs(e,{heading:"Sistema",children:[r.jsxs(m,{children:[r.jsx(x,{className:"h-4 w-4 mr-2"}),"Preferências",r.jsx(o,{children:"⌘,"})]}),r.jsxs(m,{className:"text-destructive",children:[r.jsx(j,{className:"h-4 w-4 mr-2"}),"Sair"]})]})]})]})};var s,n,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Command className="rounded-lg border border-border shadow-md w-80">\r
      <CommandInput placeholder="Buscar comando..." />\r
      <CommandList>\r
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>\r
        <CommandGroup heading="Navegação">\r
          <CommandItem>\r
            <Search className="h-4 w-4 mr-2" />\r
            Buscar boletas\r
            <CommandShortcut>⌘B</CommandShortcut>\r
          </CommandItem>\r
          <CommandItem>\r
            <User className="h-4 w-4 mr-2" />\r
            Cadastro de clientes\r
            <CommandShortcut>⌘C</CommandShortcut>\r
          </CommandItem>\r
          <CommandItem>\r
            <FileText className="h-4 w-4 mr-2" />\r
            Modelos de e-mail\r
          </CommandItem>\r
        </CommandGroup>\r
        <CommandSeparator />\r
        <CommandGroup heading="Sistema">\r
          <CommandItem>\r
            <Settings className="h-4 w-4 mr-2" />\r
            Preferências\r
            <CommandShortcut>⌘,</CommandShortcut>\r
          </CommandItem>\r
          <CommandItem className="text-destructive">\r
            <LogOut className="h-4 w-4 mr-2" />\r
            Sair\r
          </CommandItem>\r
        </CommandGroup>\r
      </CommandList>\r
    </Command>
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,z as default};
