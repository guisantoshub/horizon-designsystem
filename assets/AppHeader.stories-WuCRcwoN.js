import{j as e}from"./jsx-runtime-D69pdnyW.js";import{B as r}from"./button-DXL5AZ1l.js";import{S as c}from"./search-CWHFyfhP.js";import{B as d}from"./bell-XC7InOcy.js";import{M as l,S as y}from"./sun-CmSO3Iue.js";import{P as w}from"./panel-left-DpHwlING.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-D6DUjI5c.js";const _={title:"Design System / Componentes / AppHeader",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## AppHeader — Barra Superior

Barra de navegação superior da aplicação Horizon.

### Anatomia
- **Esquerda**: SidebarTrigger + Breadcrumbs
- **Direita**: Busca · Notificações · Toggle Tema · Avatar

### Regra de hover para ícones
Todo botão de ícone no header usa o padrão:

\`\`\`tsx
className="text-muted-foreground hover:bg-accent hover:text-accent-foreground"
\`\`\`

Isso garante que o ícone fique **branco** sobre o fundo **navy escuro** do \`--accent\`
tanto em **light mode** quanto em **dark mode**.

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| \`--accent\` | \`210 50% 24%\` (navy) | \`210 50% 24%\` (navy) |
| \`--accent-foreground\` | \`0 0% 100%\` (branco) | \`38 30% 93%\` (creme) |

> **Nunca usar** \`hover:text-foreground\` em ícones sobre fundo accent — o foreground
> em light mode é navy escuro, invisível sobre fundo navy.
        `}}}},j=({theme:s})=>e.jsxs("header",{className:"h-14 border-b border-border flex items-center justify-between px-4 bg-background-secondary",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Alternar sidebar",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(w,{className:"h-4 w-4"})}),e.jsx("nav",{"aria-label":"Breadcrumb",children:e.jsx("span",{className:"text-sm text-muted-foreground",children:"Dashboard"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Buscar",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(c,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Notificações",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon","aria-label":"Alternar tema",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:s==="dark"?e.jsx(y,{className:"h-4 w-4"}):e.jsx(l,{className:"h-4 w-4"})}),e.jsx("div",{className:"w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-heading font-bold ml-2",children:"H"})]})]}),o={name:"Light Mode",render:(s,n)=>e.jsx(j,{theme:n.globals.theme??"light"})},t={name:"Dark Mode",globals:{theme:"dark"},render:(s,n)=>e.jsx(j,{theme:n.globals.theme??"dark"})},a={name:"Hover — Ícone branco sobre navy",render:()=>e.jsxs("div",{className:"flex flex-col gap-6 p-8 bg-background min-h-screen",children:[e.jsx("h2",{className:"text-sm font-heading font-semibold text-foreground uppercase tracking-wider",children:"Comportamento de hover — header icons"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-xs text-muted-foreground font-body",children:"Estado normal"}),e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-background-secondary rounded-lg border w-fit",children:[e.jsx(r,{variant:"ghost",size:"icon",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(c,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon",className:"text-muted-foreground hover:bg-accent hover:text-accent-foreground",children:e.jsx(l,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"text-xs text-muted-foreground font-body",children:"Estado hover (simulado)"}),e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-background-secondary rounded-lg border w-fit",children:[e.jsx(r,{variant:"ghost",size:"icon",className:"bg-accent text-accent-foreground",children:e.jsx(c,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon",className:"bg-accent text-accent-foreground",children:e.jsx(d,{className:"h-4 w-4"})}),e.jsx(r,{variant:"ghost",size:"icon",className:"bg-accent text-accent-foreground",children:e.jsx(l,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("p",{className:"text-xs text-muted-foreground font-body uppercase tracking-wider",children:"Tokens utilizados"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 max-w-sm",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"h-10 rounded-md border",style:{background:"hsl(210 50% 24%)"}}),e.jsx("span",{className:"text-xs font-mono text-muted-foreground",children:"--accent"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Fundo hover"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"h-10 rounded-md border",style:{background:"hsl(0 0% 100%)",outline:"1px solid hsl(214 20% 88%)"}}),e.jsx("span",{className:"text-xs font-mono text-muted-foreground",children:"--accent-foreground"}),e.jsx("span",{className:"text-xs text-muted-foreground",children:"Cor do ícone"})]})]})]}),e.jsxs("div",{className:"bg-muted rounded-lg p-4 font-mono text-xs text-muted-foreground max-w-lg",children:[e.jsx("p",{className:"text-foreground font-semibold mb-2",children:"Regra de implementação"}),e.jsx("p",{children:'className="text-muted-foreground'}),e.jsx("p",{className:"text-primary pl-4",children:"hover:bg-accent"}),e.jsx("p",{className:"text-primary pl-4",children:'hover:text-accent-foreground"'}),e.jsx("p",{className:"mt-3 text-destructive",children:"// ERRADO — nunca usar:"}),e.jsx("p",{className:"line-through opacity-60 pl-4",children:"hover:text-foreground"})]})]})};var i,m,x;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Light Mode',
  render: (_, context) => <HeaderPreview theme={context.globals.theme as 'light' | 'dark' ?? 'light'} />
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,u,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Dark Mode',
  globals: {
    theme: 'dark'
  },
  render: (_, context) => <HeaderPreview theme={context.globals.theme as 'light' | 'dark' ?? 'dark'} />
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var p,f,v,N,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Hover — Ícone branco sobre navy',
  render: () => <div className="flex flex-col gap-6 p-8 bg-background min-h-screen">\r
      <h2 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wider">\r
        Comportamento de hover — header icons\r
      </h2>\r
\r
      {/* Estado normal */}\r
      <div className="flex flex-col gap-2">\r
        <p className="text-xs text-muted-foreground font-body">Estado normal</p>\r
        <div className="flex items-center gap-2 p-3 bg-background-secondary rounded-lg border w-fit">\r
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
            <Search className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
            <Bell className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">\r
            <Moon className="h-4 w-4" />\r
          </Button>\r
        </div>\r
      </div>\r
\r
      {/* Estado hover simulado */}\r
      <div className="flex flex-col gap-2">\r
        <p className="text-xs text-muted-foreground font-body">Estado hover (simulado)</p>\r
        <div className="flex items-center gap-2 p-3 bg-background-secondary rounded-lg border w-fit">\r
          {/* Simula hover fixo com as classes inline */}\r
          <Button variant="ghost" size="icon" className="bg-accent text-accent-foreground">\r
            <Search className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="icon" className="bg-accent text-accent-foreground">\r
            <Bell className="h-4 w-4" />\r
          </Button>\r
          <Button variant="ghost" size="icon" className="bg-accent text-accent-foreground">\r
            <Moon className="h-4 w-4" />\r
          </Button>\r
        </div>\r
      </div>\r
\r
      {/* Token reference */}\r
      <div className="flex flex-col gap-3">\r
        <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Tokens utilizados</p>\r
        <div className="grid grid-cols-2 gap-3 max-w-sm">\r
          <div className="flex flex-col gap-1">\r
            <div className="h-10 rounded-md border" style={{
            background: 'hsl(210 50% 24%)'
          }} />\r
            <span className="text-xs font-mono text-muted-foreground">--accent</span>\r
            <span className="text-xs text-muted-foreground">Fundo hover</span>\r
          </div>\r
          <div className="flex flex-col gap-1">\r
            <div className="h-10 rounded-md border" style={{
            background: 'hsl(0 0% 100%)',
            outline: '1px solid hsl(214 20% 88%)'
          }} />\r
            <span className="text-xs font-mono text-muted-foreground">--accent-foreground</span>\r
            <span className="text-xs text-muted-foreground">Cor do ícone</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      {/* Regra */}\r
      <div className="bg-muted rounded-lg p-4 font-mono text-xs text-muted-foreground max-w-lg">\r
        <p className="text-foreground font-semibold mb-2">Regra de implementação</p>\r
        <p>className="text-muted-foreground</p>\r
        <p className="text-primary pl-4">hover:bg-accent</p>\r
        <p className="text-primary pl-4">hover:text-accent-foreground"</p>\r
        <p className="mt-3 text-destructive">// ERRADO — nunca usar:</p>\r
        <p className="line-through opacity-60 pl-4">hover:text-foreground</p>\r
      </div>\r
    </div>
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Demonstração do estado de hover no ícone.\r\nO fundo `--accent` (navy) exige ícone branco (`--accent-foreground`).",...(b=(N=a.parameters)==null?void 0:N.docs)==null?void 0:b.description}}};const C=["LightMode","DarkMode","HoverState"];export{t as DarkMode,a as HoverState,o as LightMode,C as __namedExportsOrder,_ as default};
