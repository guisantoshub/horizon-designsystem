import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as b}from"./iframe-CvSox_He.js";import{F as m}from"./FilterBar-BtqTOquD.js";import"./preload-helper-C1FmrZbK.js";import"./input-m_F3UOAC.js";import"./utils-CytzSlOG.js";import"./button-DXL5AZ1l.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./search-CWHFyfhP.js";import"./createLucideIcon-D6DUjI5c.js";import"./sliders-horizontal-D0ILQE3J.js";const O={title:"Design System / Componentes / FilterBar",component:m,parameters:{layout:"padded",docs:{description:{component:"Barra de filtro composta por campo de busca (com ícone de lupa) e botão de filtros avançados. Integrada no `PageShell` e usada em todos os módulos de listagem. A busca é controlada externamente via `searchValue` + `onSearchChange`."}}},tags:["autodocs"],argTypes:{searchValue:{control:"text",description:"Valor atual do campo de busca (controlled)."},onSearchChange:{action:"onSearchChange",description:"Callback chamado a cada alteração no campo de busca."}}},o={name:"Vazia (sem valor)",args:{searchValue:""}},s={name:"Com valor de busca",args:{searchValue:"PETR4"}},t={name:"Interativa (controlled)",render:()=>{const[a,c]=b.useState("");return e.jsxs("div",{className:"space-y-4 w-[480px]",children:[e.jsx(m,{searchValue:a,onSearchChange:c}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Valor atual:"," ",e.jsx("strong",{className:"text-foreground",children:a||"(vazio)"})]})]})}},n={name:"Exemplo — contexto de página",render:()=>{const[a,c]=b.useState(""),d=["PETR4 — Petrobras PN","VALE3 — Vale ON","ITUB4 — Itaú PN","BBDC4 — Bradesco PN","WEGE3 — Weg ON"].filter(r=>r.toLowerCase().includes(a.toLowerCase()));return e.jsxs("div",{className:"space-y-4 w-[560px]",children:[e.jsx(m,{searchValue:a,onSearchChange:c}),e.jsx("ul",{className:"space-y-1",children:d.length>0?d.map(r=>e.jsx("li",{className:"text-sm px-3 py-2 rounded-md border border-border bg-card text-foreground",children:r},r)):e.jsx("li",{className:"text-sm text-muted-foreground px-3 py-2",children:"Nenhum ativo encontrado."})})]})}};var l,i,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Vazia (sem valor)",
  args: {
    searchValue: ""
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Com valor de busca",
  args: {
    searchValue: "PETR4"
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,N,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Interativa (controlled)",
  render: () => {
    const [search, setSearch] = useState("");
    return <div className="space-y-4 w-[480px]">\r
        <FilterBar searchValue={search} onSearchChange={setSearch} />\r
        <p className="text-xs text-muted-foreground">\r
          Valor atual:{" "}\r
          <strong className="text-foreground">{search || "(vazio)"}</strong>\r
        </p>\r
      </div>;
  }
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var S,V,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Exemplo — contexto de página",
  render: () => {
    const [search, setSearch] = useState("");
    const ativos = ["PETR4 — Petrobras PN", "VALE3 — Vale ON", "ITUB4 — Itaú PN", "BBDC4 — Bradesco PN", "WEGE3 — Weg ON"].filter(a => a.toLowerCase().includes(search.toLowerCase()));
    return <div className="space-y-4 w-[560px]">\r
        <FilterBar searchValue={search} onSearchChange={setSearch} />\r
        <ul className="space-y-1">\r
          {ativos.length > 0 ? ativos.map(a => <li key={a} className="text-sm px-3 py-2 rounded-md border border-border bg-card text-foreground">\r
                {a}\r
              </li>) : <li className="text-sm text-muted-foreground px-3 py-2">\r
              Nenhum ativo encontrado.\r
            </li>}\r
        </ul>\r
      </div>;
  }
}`,...(C=(V=n.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const R=["Vazia","ComValor","Interativa","ExemploPaginaCompleta"];export{s as ComValor,n as ExemploPaginaCompleta,t as Interativa,o as Vazia,R as __namedExportsOrder,O as default};
