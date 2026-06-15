import{j as a}from"./jsx-runtime-D69pdnyW.js";import{T as c}from"./ThemeContext-C8a8j4GO.js";import{P as p}from"./PageShell-BuZEhXZM.js";import{E as h}from"./EmptyState-D6Tal5x6.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./FilterBar-BtqTOquD.js";import"./input-m_F3UOAC.js";import"./utils-CytzSlOG.js";import"./button-DXL5AZ1l.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./search-CWHFyfhP.js";import"./createLucideIcon-D6DUjI5c.js";import"./sliders-horizontal-D0ILQE3J.js";import"./inbox-D-ryp9s4.js";function l(){return a.jsx(p,{title:"Dashboard",description:"Visão geral das operações",showFilters:!1,children:a.jsx(h,{title:"Em construção",description:"O dashboard com os indicadores operacionais da Fami Capital está sendo desenvolvido e estará disponível em breve."})})}l.__docgenInfo={description:"",methods:[],displayName:"Dashboard"};const w={title:"Design System / Páginas / Dashboard",component:l,parameters:{layout:"fullscreen",docs:{description:{component:`
## Dashboard — Visão Geral Operacional

Painel principal do Horizon Suite com foco em **boletas paradas** (estagnadas há mais de 10 dias em algum estágio do workflow).

### Funcionalidades

| Elemento | Descrição |
|----------|-----------|
| **Gráfico de barras** | Quantidade de boletas paradas por estágio (Recharts \`BarChart\`) |
| **Clique na barra** | Abre modal listando as boletas paradas naquele estágio |
| **Clique em boleta** | Abre Sheet lateral com detalhes e histórico da boleta |
| **Observações** | Campo para registrar notas no histórico da boleta |

### Cores por estágio

| Estágio | Cor (token) |
|---------|-------------|
| Nova Solicitação | \`--primary\` (dourado) |
| Em Execução | \`--warning\` (âmbar) |
| Executado | \`--success\` (verde) |
| Replicado | \`--info\` (azul) |

### Fluxo de interação
\`Barra do gráfico → Modal com lista → Sheet de detalhes + histórico\`
        `}}},tags:["autodocs"],decorators:[r=>a.jsx(c,{children:a.jsx("div",{className:"p-6 bg-background min-h-screen",children:a.jsx(r,{})})})]},e={name:"Dashboard — Visão padrão"},o={name:"Dark Mode",globals:{theme:"dark"},decorators:[r=>a.jsx(c,{children:a.jsx("div",{className:"p-6 bg-background min-h-screen",children:a.jsx(r,{})})})]};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Dashboard — Visão padrão"
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,n,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Dark Mode",
  globals: {
    theme: "dark"
  },
  decorators: [Story => <ThemeProvider>\r
        <div className="p-6 bg-background min-h-screen">\r
          <Story />\r
        </div>\r
      </ThemeProvider>]
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const F=["Padrao","DarkMode"];export{o as DarkMode,e as Padrao,F as __namedExportsOrder,w as default};
