import{j as e}from"./jsx-runtime-D69pdnyW.js";import{T as E}from"./TablePage-Cf7NRF17.js";import{s as R}from"./DataTable-qoaO1F4u.js";import{T as W}from"./ThemeContext-C8a8j4GO.js";import{B as o}from"./button-DXL5AZ1l.js";import{P as a}from"./plus-BG87GyKl.js";import{U as M}from"./upload-CP0IXo_d.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./PageShell-BuZEhXZM.js";import"./FilterBar-BtqTOquD.js";import"./input-m_F3UOAC.js";import"./utils-CytzSlOG.js";import"./search-CWHFyfhP.js";import"./createLucideIcon-D6DUjI5c.js";import"./sliders-horizontal-D0ILQE3J.js";import"./index-DNOJwA3A.js";import"./badge-CUxrm4Aj.js";import"./index-BwobEAja.js";import"./table-pagination-DIwIGWs7.js";import"./ellipsis-CO1mTZ9z.js";import"./select-HyD8fhl7.js";import"./index-BdQq_4o_.js";import"./index-CHv7tnzT.js";import"./index-T97G5T97.js";import"./index-fnuAKoKB.js";import"./index-DzzMxk2y.js";import"./index-BGqnW-RQ.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-CSC2Jsb6.js";import"./chevron-down-BQorgLkq.js";import"./chevron-up-BLyKixcO.js";import"./check-DQZkpVpn.js";import"./chevron-left-xs_4jhcg.js";import"./chevron-right-Dq1_yaRh.js";import"./tooltip-BkbByxSS.js";import"./index-6LzbcUH8.js";const Re={title:"Design System / Componentes / TablePage",component:E,parameters:{layout:"fullscreen",docs:{description:{component:`
Componente padrão para **páginas de listagem** com tabela AG Grid.

É o ponto de entrada recomendado para qualquer nova tela de cadastro ou listagem
no Horizon Suite. Encapsula toda a infraestrutura necessária:

| Aspecto | Comportamento |
|---|---|
| **Busca** | Estado gerenciado internamente, filtro em tempo real |
| **Altura** | Preenche 100% da tela — tabela sempre visível sem scroll externo |
| **Scroll interno** | Inexistente — page size calculado dinamicamente via \`ResizeObserver\` |
| **Paginação** | Sempre visível no rodapé, números de página sempre mostrados |

### Hierarquia de composição completa

\`\`\`
TablePage                    ← USE ESTE para novas páginas
  └── PageShell (fillHeight) ← título, descrição, busca, ações
        └── DataTable        ← AG Grid com paginação dinâmica
              └── TablePagination  ← rodapé de paginação
                    ├── Pagination (primitivo)
                    │     └── PaginationContent → PaginationItem
                    │           ├── Button (Anterior / Próximo / nº)
                    │           └── PaginationEllipsis
                    └── Contador "1–20 de 47 itens"
\`\`\`

### Modais e Sheets
Dialogs, Sheets e AlertDialogs devem ser renderizados **fora** do \`TablePage\`,
como irmãos em um Fragment. Eles usam portais Radix e não afetam o layout:

\`\`\`tsx
<>
  <TablePage title="..." columnDefs={cols} rowData={rows} actions={<Button>Novo</Button>} />
  <Dialog open={open}>...</Dialog>
  <Sheet open={sheetOpen}>...</Sheet>
</>
\`\`\`
        `}}},tags:["autodocs"],decorators:[l=>e.jsx(W,{children:e.jsx("div",{className:"flex flex-col overflow-hidden bg-background",style:{height:"100vh",padding:"24px"},children:e.jsx(l,{})})})],argTypes:{title:{control:"text",description:"Título da página."},description:{control:"text",description:"Subtítulo descritivo."},itemLabel:{control:"text",description:'Rótulo do item na paginação (padrão: "itens").'}}},c=[{field:"codigo",headerName:"Código",maxWidth:120},{field:"nome",headerName:"Nome"},{field:"tipo",headerName:"Tipo",maxWidth:120},{field:"mercado",headerName:"Mercado",maxWidth:120},{field:"status",headerName:"Status",maxWidth:130,cellRenderer:R}],j=[{field:"nome",headerName:"Nome"},{field:"tipo",headerName:"Tipo"},{field:"pais",headerName:"País",maxWidth:120},{field:"status",headerName:"Status",maxWidth:130,cellRenderer:R}],_=[{field:"grupoWindows",headerName:"Grupo Windows",flex:1},{field:"modulo",headerName:"Módulo",flex:1},{field:"tipoAcesso",headerName:"Tipo de Acesso",maxWidth:160}],G=Array.from({length:80},(l,s)=>({codigo:`TICK${String(s+1).padStart(2,"0")}`,nome:`Ativo de Teste ${s+1}`,tipo:s%2===0?"Ação":"Renda Fixa",mercado:"B3",status:s%7===0?"Inativo":"Ativo"})),I=[{nome:"XP Investimentos",tipo:"Corretora",pais:"Brasil",status:"Ativo"},{nome:"BTG Pactual",tipo:"Banco de Investimento",pais:"Brasil",status:"Ativo"},{nome:"Goldman Sachs",tipo:"Banco de Investimento",pais:"EUA",status:"Ativo"},{nome:"Morgan Stanley",tipo:"Banco de Investimento",pais:"EUA",status:"Ativo"},{nome:"Safra",tipo:"Banco",pais:"Brasil",status:"Ativo"},{nome:"Modal",tipo:"Corretora",pais:"Brasil",status:"Inativo"}],y=[{id:1,grupoWindows:"GRP_ADMIN",modulo:"Dashboard",tipoAcesso:"Change"},{id:2,grupoWindows:"GRP_OPERACAO",modulo:"Boletador",tipoAcesso:"Change"},{id:3,grupoWindows:"GRP_BACKOFFICE",modulo:"Cadastro de Clientes",tipoAcesso:"Read"},{id:4,grupoWindows:"GRP_FINANCEIRO",modulo:"Cadastro de Ativos",tipoAcesso:"Read"},{id:5,grupoWindows:"GRP_ADMIN",modulo:"Autorização de Acessos",tipoAcesso:"Change"}],t={name:"Cadastro de Ativos",args:{title:"Cadastro de Ativos",description:"Gerenciamento de ativos do sistema",columnDefs:c,rowData:G,itemLabel:"ativos",actions:e.jsxs(o,{size:"sm",className:"font-heading",children:[e.jsx(a,{className:"h-4 w-4 mr-2"}),"Novo Ativo"]})}},r={name:"Cadastro de Contrapartes",args:{title:"Cadastro de Contrapartes",description:"Gerenciamento de contrapartes",columnDefs:j,rowData:I,actions:e.jsxs(o,{size:"sm",className:"font-heading",children:[e.jsx(a,{className:"h-4 w-4 mr-2"}),"Nova Contraparte"]})}},i={name:"Autorização de Acessos",args:{title:"Autorização de Acessos",description:"Gerencie as permissões e acessos por grupo",columnDefs:_,rowData:y,actions:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(o,{size:"sm",variant:"outline",className:"font-heading",children:[e.jsx(M,{className:"h-4 w-4 mr-2"}),"Importar"]}),e.jsxs(o,{size:"sm",className:"font-heading",children:[e.jsx(a,{className:"h-4 w-4 mr-2"}),"Novo Acesso"]})]})}},n={name:"Sem botões de ação",args:{title:"Listagem Simples",description:"Página sem botões de ação no header",columnDefs:j,rowData:I}},m={name:"Paginação — 80 registros",args:{title:"Cadastro de Ativos",description:"80 registros — paginação dinâmica sem scroll interno",columnDefs:c,rowData:G,itemLabel:"ativos",actions:e.jsxs(o,{size:"sm",className:"font-heading",children:[e.jsx(a,{className:"h-4 w-4 mr-2"}),"Novo Ativo"]})}},d={name:"Tabela vazia",args:{title:"Cadastro de Ativos",description:"Nenhum registro cadastrado",columnDefs:c,rowData:[],actions:e.jsxs(o,{size:"sm",className:"font-heading",children:[e.jsx(a,{className:"h-4 w-4 mr-2"}),"Novo Ativo"]})}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Cadastro de Ativos",
  args: {
    title: "Cadastro de Ativos",
    description: "Gerenciamento de ativos do sistema",
    columnDefs: colunasAtivos,
    rowData: muitosAtivos,
    itemLabel: "ativos",
    actions: <Button size="sm" className="font-heading">\r
        <Plus className="h-4 w-4 mr-2" />\r
        Novo Ativo\r
      </Button>
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,h,A;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Cadastro de Contrapartes",
  args: {
    title: "Cadastro de Contrapartes",
    description: "Gerenciamento de contrapartes",
    columnDefs: colunasContrapartes,
    rowData: contrapartesData,
    actions: <Button size="sm" className="font-heading">\r
        <Plus className="h-4 w-4 mr-2" />\r
        Nova Contraparte\r
      </Button>
  }
}`,...(A=(h=r.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var f,N,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Autorização de Acessos",
  args: {
    title: "Autorização de Acessos",
    description: "Gerencie as permissões e acessos por grupo",
    columnDefs: colunasAcessos,
    rowData: acessosData,
    actions: <div className="flex items-center gap-2">\r
        <Button size="sm" variant="outline" className="font-heading">\r
          <Upload className="h-4 w-4 mr-2" />\r
          Importar\r
        </Button>\r
        <Button size="sm" className="font-heading">\r
          <Plus className="h-4 w-4 mr-2" />\r
          Novo Acesso\r
        </Button>\r
      </div>
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var x,D,P;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Sem botões de ação",
  args: {
    title: "Listagem Simples",
    description: "Página sem botões de ação no header",
    columnDefs: colunasContrapartes,
    rowData: contrapartesData
  }
}`,...(P=(D=n.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var w,S,B;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Paginação — 80 registros",
  args: {
    title: "Cadastro de Ativos",
    description: "80 registros — paginação dinâmica sem scroll interno",
    columnDefs: colunasAtivos,
    rowData: muitosAtivos,
    itemLabel: "ativos",
    actions: <Button size="sm" className="font-heading">\r
        <Plus className="h-4 w-4 mr-2" />\r
        Novo Ativo\r
      </Button>
  }
}`,...(B=(S=m.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var b,z,T;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Tabela vazia",
  args: {
    title: "Cadastro de Ativos",
    description: "Nenhum registro cadastrado",
    columnDefs: colunasAtivos,
    rowData: [],
    actions: <Button size="sm" className="font-heading">\r
        <Plus className="h-4 w-4 mr-2" />\r
        Novo Ativo\r
      </Button>
  }
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const je=["CadastroAtivos","CadastroContrapartes","AutorizacaoAcessos","SemAcoes","MuitosRegistros","TabelaVazia"];export{i as AutorizacaoAcessos,t as CadastroAtivos,r as CadastroContrapartes,m as MuitosRegistros,n as SemAcoes,d as TabelaVazia,je as __namedExportsOrder,Re as default};
