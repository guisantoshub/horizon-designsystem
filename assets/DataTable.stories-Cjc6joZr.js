import{j as a}from"./jsx-runtime-D69pdnyW.js";import{D as z,s as p}from"./DataTable-qoaO1F4u.js";import{T as l}from"./ThemeContext-C8a8j4GO.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNOJwA3A.js";import"./badge-CUxrm4Aj.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./table-pagination-DIwIGWs7.js";import"./button-DXL5AZ1l.js";import"./index-DzzMxk2y.js";import"./ellipsis-CO1mTZ9z.js";import"./createLucideIcon-D6DUjI5c.js";import"./select-HyD8fhl7.js";import"./index-BdQq_4o_.js";import"./index-CHv7tnzT.js";import"./index-T97G5T97.js";import"./index-fnuAKoKB.js";import"./index-BGqnW-RQ.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-CSC2Jsb6.js";import"./chevron-down-BQorgLkq.js";import"./chevron-up-BLyKixcO.js";import"./check-DQZkpVpn.js";import"./chevron-left-xs_4jhcg.js";import"./chevron-right-Dq1_yaRh.js";import"./tooltip-BkbByxSS.js";import"./index-6LzbcUH8.js";const fa={title:"Design System / Componentes / DataTable",component:z,parameters:{layout:"padded",docs:{description:{component:`
Wrapper sobre o **AG Grid** com tema dark/light sincronizado com o Horizon Suite.

Inclui paginação dinâmica (sem scroll interno), ordenação, filtros por coluna,
redimensionamento de colunas e busca rápida via \`quickFilterText\`.

### Hierarquia de composição
\`\`\`
TablePage          ← página completa (PageShell + busca + DataTable)
  └── DataTable    ← grid com paginação (AG Grid + TablePagination)
        └── TablePagination  ← rodapé (Pagination primitives + Button)
\`\`\`

> **Nota de uso:** prefira \`<TablePage>\` para montar páginas completas.
> Use \`<DataTable>\` diretamente apenas quando precisar de controle
> sobre o container ou quando o componente fizer parte de um layout custom.
        `}}},tags:["autodocs"],decorators:[o=>a.jsx(l,{children:a.jsx("div",{style:{height:"420px"},children:a.jsx(o,{})})})],argTypes:{quickFilterText:{control:"text",description:"Texto de busca global aplicado em todas as colunas visíveis."},itemLabel:{control:"text",description:'Rótulo do tipo de item no contador da paginação (padrão: "itens").'}}},d=[{field:"codigo",headerName:"Código",maxWidth:120},{field:"nome",headerName:"Nome"},{field:"tipo",headerName:"Tipo",maxWidth:120},{field:"mercado",headerName:"Mercado",maxWidth:120},{field:"status",headerName:"Status",maxWidth:130,cellRenderer:p}],L=[{codigo:"PETR4",nome:"Petrobras PN",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"VALE3",nome:"Vale ON",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"ITUB4",nome:"Itaú Unibanco PN",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"BBDC4",nome:"Bradesco PN",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"WEGE3",nome:"Weg ON",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"MGLU3",nome:"Magazine Luiza ON",tipo:"Ação",mercado:"B3",status:"Inativo"},{codigo:"RENT3",nome:"Localiza ON",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"LREN3",nome:"Lojas Renner ON",tipo:"Ação",mercado:"B3",status:"Ativo"},{codigo:"TESOURO SELIC 2029",nome:"Tesouro Selic 2029",tipo:"Renda Fixa",mercado:"B3",status:"Ativo"},{codigo:"LTN 2026",nome:"Letra do Tesouro Nacional 2026",tipo:"Renda Fixa",mercado:"B3",status:"Ativo"}],j=[{field:"nome",headerName:"Nome"},{field:"tipo",headerName:"Tipo"},{field:"pais",headerName:"País",maxWidth:120},{field:"status",headerName:"Status",maxWidth:130,cellRenderer:p}],W=[{nome:"XP Investimentos",tipo:"Corretora",pais:"Brasil",status:"Ativo"},{nome:"BTG Pactual",tipo:"Banco de Investimento",pais:"Brasil",status:"Ativo"},{nome:"Goldman Sachs",tipo:"Banco de Investimento",pais:"EUA",status:"Ativo"},{nome:"Morgan Stanley",tipo:"Banco de Investimento",pais:"EUA",status:"Ativo"},{nome:"Safra",tipo:"Banco",pais:"Brasil",status:"Ativo"},{nome:"Modal",tipo:"Corretora",pais:"Brasil",status:"Inativo"}],G=[{field:"nome",headerName:"Nome"},{field:"tipo",headerName:"Tipo",maxWidth:140},{field:"escritorio",headerName:"Escritório"},{field:"clientes",headerName:"Clientes",maxWidth:120},{field:"status",headerName:"Status",maxWidth:130,cellRenderer:p}],M=[{nome:"Ricardo Mendes",tipo:"Banker",escritorio:"São Paulo",clientes:"42",status:"Ativo"},{nome:"Fernanda Oliveira",tipo:"Colaborador",escritorio:"Rio de Janeiro",clientes:"28",status:"Ativo"},{nome:"Carlos Souza",tipo:"Colaborador",escritorio:"São Paulo",clientes:"35",status:"Ativo"},{nome:"Ana Lima",tipo:"Banker",escritorio:"Curitiba",clientes:"19",status:"Inativo"}],t={name:"Cadastro de Ativos",args:{columnDefs:d,rowData:L}},r={name:"Cadastro de Contrapartes",args:{columnDefs:j,rowData:W}},s={name:"Cadastro de Banker / Colaborador",args:{columnDefs:G,rowData:M}},i={name:"Com busca global — 'Banco'",args:{columnDefs:j,rowData:W,quickFilterText:"Banco"}},n={name:"Tabela vazia",args:{columnDefs:d,rowData:[]}},m={name:"Altura maior — 600px",decorators:[o=>a.jsx(l,{children:a.jsx("div",{style:{height:"600px"},children:a.jsx(o,{})})})],args:{columnDefs:d,rowData:L}},c={name:"Paginação — muitos registros",decorators:[o=>a.jsx(l,{children:a.jsx("div",{style:{height:"500px"},children:a.jsx(o,{})})})],args:{columnDefs:d,rowData:Array.from({length:80},(o,e)=>({codigo:`TICK${String(e+1).padStart(2,"0")}`,nome:`Ativo de Teste ${e+1}`,tipo:e%2===0?"Ação":"Renda Fixa",mercado:"B3",status:e%7===0?"Inativo":"Ativo"})),itemLabel:"ativos"}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Cadastro de Ativos",
  args: {
    columnDefs: colunasAtivos,
    rowData: ativosData
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var A,h,T;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Cadastro de Contrapartes",
  args: {
    columnDefs: colunasContrapartes,
    rowData: contrapartesData
  }
}`,...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var D,b,x;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Cadastro de Banker / Colaborador",
  args: {
    columnDefs: colunasBanker,
    rowData: bankerData
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var B,f,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Com busca global — 'Banco'",
  args: {
    columnDefs: colunasContrapartes,
    rowData: contrapartesData,
    quickFilterText: "Banco"
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var N,S,P;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Tabela vazia",
  args: {
    columnDefs: colunasAtivos,
    rowData: []
  }
}`,...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var R,y,k;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Altura maior — 600px",
  decorators: [Story => <ThemeProvider>\r
        <div style={{
      height: "600px"
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  args: {
    columnDefs: colunasAtivos,
    rowData: ativosData
  }
}`,...(k=(y=m.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,w,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Paginação — muitos registros",
  decorators: [Story => <ThemeProvider>\r
        <div style={{
      height: "500px"
    }}>\r
          <Story />\r
        </div>\r
      </ThemeProvider>],
  args: {
    columnDefs: colunasAtivos,
    rowData: Array.from({
      length: 80
    }, (_, i) => ({
      codigo: \`TICK\${String(i + 1).padStart(2, "0")}\`,
      nome: \`Ativo de Teste \${i + 1}\`,
      tipo: i % 2 === 0 ? "Ação" : "Renda Fixa",
      mercado: "B3",
      status: i % 7 === 0 ? "Inativo" : "Ativo"
    })),
    itemLabel: "ativos"
  }
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const Ca=["TabelaAtivos","TabelaContrapartes","TabelaBanker","ComBuscaGlobal","TabelaVazia","AlturaMaior","PaginacaoComMuitosRegistros"];export{m as AlturaMaior,i as ComBuscaGlobal,c as PaginacaoComMuitosRegistros,t as TabelaAtivos,s as TabelaBanker,r as TabelaContrapartes,n as TabelaVazia,Ca as __namedExportsOrder,fa as default};
