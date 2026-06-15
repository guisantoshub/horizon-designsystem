import{j as e}from"./jsx-runtime-D69pdnyW.js";import{P as a}from"./PageShell-BuZEhXZM.js";import{B as s}from"./button-DXL5AZ1l.js";import{E as G}from"./EmptyState-D6Tal5x6.js";import{r as p}from"./iframe-CvSox_He.js";import{U}from"./upload-CP0IXo_d.js";import{P as h}from"./plus-BG87GyKl.js";import"./FilterBar-BtqTOquD.js";import"./input-m_F3UOAC.js";import"./utils-CytzSlOG.js";import"./search-CWHFyfhP.js";import"./createLucideIcon-D6DUjI5c.js";import"./sliders-horizontal-D0ILQE3J.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./inbox-D-ryp9s4.js";import"./preload-helper-C1FmrZbK.js";const ee={title:"Design System / Componentes / PageShell",component:a,parameters:{layout:"padded",docs:{description:{component:"Container padrão para todas as páginas internas do Horizon Suite. Agrupa o cabeçalho da página (título + descrição + ações) com a `FilterBar` e o conteúdo principal. Garante espaçamento e animação de entrada consistentes em todos os módulos."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Título principal da página."},description:{control:"text",description:"Subtítulo/descrição exibido abaixo do título."},showFilters:{control:"boolean",description:"Exibe ou oculta a barra de filtros. Padrão: true."}}},o={name:"Simples — apenas título",args:{title:"Cadastro de Ativos",showFilters:!1},render:r=>e.jsx(a,{...r,children:e.jsx("div",{className:"h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm",children:"Conteúdo da página"})})},n={name:"Com descrição",args:{title:"Cadastro de Clientes",description:"Gerencie clientes PF e PJ com suas contas institucionais.",showFilters:!1},render:r=>e.jsx(a,{...r,children:e.jsx("div",{className:"h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm",children:"Conteúdo da página"})})},d={name:"Com FilterBar",render:()=>{const[r,t]=p.useState("");return e.jsx(a,{title:"Cadastro de Ativos",description:"Ativos disponíveis para boletagem",searchValue:r,onSearchChange:t,children:e.jsx("div",{className:"h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm",children:"Tabela de Ativos"})})}},i={name:"Com ações no header",render:()=>{const[r,t]=p.useState("");return e.jsx(a,{title:"Cadastro de Ativos",description:"Ativos disponíveis para boletagem",searchValue:r,onSearchChange:t,actions:e.jsxs(e.Fragment,{children:[e.jsxs(s,{size:"sm",variant:"outline",className:"font-heading",children:[e.jsx(U,{className:"h-4 w-4 mr-2"}),"Importar"]}),e.jsxs(s,{size:"sm",className:"font-heading",children:[e.jsx(h,{className:"h-4 w-4 mr-2"}),"Novo Ativo"]})]}),children:e.jsx("div",{className:"h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm",children:"Tabela de Ativos"})})}},c={name:"Com EmptyState",render:()=>e.jsx(a,{title:"Cadastro de Contrapartes",description:"Gerenciamento de contrapartes",actions:e.jsxs(s,{size:"sm",className:"font-heading",children:[e.jsx(h,{className:"h-4 w-4 mr-2"}),"Nova Contraparte"]}),children:e.jsx(G,{title:"Nenhuma contraparte cadastrada",description:"Adicione a primeira contraparte para começar.",actionLabel:"Nova Contraparte"})})},l={name:"Exemplo — Boletador",render:()=>{const[r,t]=p.useState("");return e.jsx(a,{title:"Boletador",description:"Gerencie solicitações de compra e venda de ativos",searchValue:r,onSearchChange:t,actions:e.jsxs(e.Fragment,{children:[e.jsxs(s,{size:"sm",variant:"outline",className:"font-heading",children:[e.jsx(U,{className:"h-4 w-4 mr-2"}),"Upload Boletas"]}),e.jsxs(s,{size:"sm",className:"font-heading",children:[e.jsx(h,{className:"h-4 w-4 mr-2"}),"Nova Boleta"]})]}),children:e.jsx("div",{className:"h-64 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm",children:"BoletadorTable / BoletadorKanban"})})}},m={name:"Sem FilterBar (showFilters=false)",args:{title:"Dashboard",description:"Visão geral operacional da Fami Capital",showFilters:!1},render:r=>e.jsx(a,{...r,children:e.jsx(G,{title:"Em construção",description:"O Dashboard estará disponível em breve."})})};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Simples — apenas título",
  args: {
    title: "Cadastro de Ativos",
    showFilters: false
  },
  render: args => <PageShell {...args}>\r
      <div className="h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">\r
        Conteúdo da página\r
      </div>\r
    </PageShell>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var b,S,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Com descrição",
  args: {
    title: "Cadastro de Clientes",
    description: "Gerencie clientes PF e PJ com suas contas institucionais.",
    showFilters: false
  },
  render: args => <PageShell {...args}>\r
      <div className="h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">\r
        Conteúdo da página\r
      </div>\r
    </PageShell>
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,C,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Com FilterBar",
  render: () => {
    const [search, setSearch] = useState("");
    return <PageShell title="Cadastro de Ativos" description="Ativos disponíveis para boletagem" searchValue={search} onSearchChange={setSearch}>\r
        <div className="h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">\r
          Tabela de Ativos\r
        </div>\r
      </PageShell>;
  }
}`,...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,B,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Com ações no header",
  render: () => {
    const [search, setSearch] = useState("");
    return <PageShell title="Cadastro de Ativos" description="Ativos disponíveis para boletagem" searchValue={search} onSearchChange={setSearch} actions={<>\r
            <Button size="sm" variant="outline" className="font-heading">\r
              <Upload className="h-4 w-4 mr-2" />\r
              Importar\r
            </Button>\r
            <Button size="sm" className="font-heading">\r
              <Plus className="h-4 w-4 mr-2" />\r
              Novo Ativo\r
            </Button>\r
          </>}>\r
        <div className="h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">\r
          Tabela de Ativos\r
        </div>\r
      </PageShell>;
  }
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var F,A,w;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Com EmptyState",
  render: () => <PageShell title="Cadastro de Contrapartes" description="Gerenciamento de contrapartes" actions={<Button size="sm" className="font-heading">\r
          <Plus className="h-4 w-4 mr-2" />\r
          Nova Contraparte\r
        </Button>}>\r
      <EmptyState title="Nenhuma contraparte cadastrada" description="Adicione a primeira contraparte para começar." actionLabel="Nova Contraparte" />\r
    </PageShell>
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var y,E,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Exemplo — Boletador",
  render: () => {
    const [search, setSearch] = useState("");
    return <PageShell title="Boletador" description="Gerencie solicitações de compra e venda de ativos" searchValue={search} onSearchChange={setSearch} actions={<>\r
            <Button size="sm" variant="outline" className="font-heading">\r
              <Upload className="h-4 w-4 mr-2" />\r
              Upload Boletas\r
            </Button>\r
            <Button size="sm" className="font-heading">\r
              <Plus className="h-4 w-4 mr-2" />\r
              Nova Boleta\r
            </Button>\r
          </>}>\r
        <div className="h-64 rounded-lg border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">\r
          BoletadorTable / BoletadorKanban\r
        </div>\r
      </PageShell>;
  }
}`,...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var V,T,D;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Sem FilterBar (showFilters=false)",
  args: {
    title: "Dashboard",
    description: "Visão geral operacional da Fami Capital",
    showFilters: false
  },
  render: args => <PageShell {...args}>\r
      <EmptyState title="Em construção" description="O Dashboard estará disponível em breve." />\r
    </PageShell>
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const re=["Simples","ComDescricao","ComFiltros","ComAcoes","EstadoVazio","ModuloBoletador","SemFiltros"];export{i as ComAcoes,n as ComDescricao,d as ComFiltros,c as EstadoVazio,l as ModuloBoletador,m as SemFiltros,o as Simples,re as __namedExportsOrder,ee as default};
