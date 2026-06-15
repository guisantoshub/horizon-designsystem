import{j as e}from"./jsx-runtime-D69pdnyW.js";import{T as d,a as u,b as a,c as r}from"./tabs-Dg30xXbt.js";import{C as n,a as l,b as i,c as m}from"./card-DXKYvUuL.js";import{B as c}from"./badge-CUxrm4Aj.js";import{L as y,C as H}from"./layout-list-BLyC4HCb.js";import{C as K}from"./chart-column-AKOgn7eu.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-CHv7tnzT.js";import"./index-fnuAKoKB.js";import"./index-j88A8ARN.js";import"./index-T97G5T97.js";import"./index-DzzMxk2y.js";import"./index-Bw6hP1Na.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-KMH598xy.js";import"./index-BGqnW-RQ.js";import"./index-6LzbcUH8.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./createLucideIcon-D6DUjI5c.js";const ee={title:"Design System / Componentes / Tabs",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Tabs — Navegação por abas

Wrapper sobre **Radix Tabs**. Usado para alternar entre visualizações
no mesmo contexto — ex.: Tabela vs Kanban no Boletador, ou seções de
configuração lado a lado.

### Composição
\`\`\`tsx
<Tabs defaultValue="a">
  <TabsList>
    <TabsTrigger value="a">Aba A</TabsTrigger>
    <TabsTrigger value="b">Aba B</TabsTrigger>
  </TabsList>
  <TabsContent value="a">…</TabsContent>
  <TabsContent value="b">…</TabsContent>
</Tabs>
\`\`\`
        `}}}},s={name:"Padrão",render:()=>e.jsxs(d,{defaultValue:"overview",className:"w-[480px]",children:[e.jsxs(u,{children:[e.jsx(a,{value:"overview",children:"Visão Geral"}),e.jsx(a,{value:"details",children:"Detalhes"}),e.jsx(a,{value:"history",children:"Histórico"})]}),e.jsx(r,{value:"overview",children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx(i,{children:"Visão Geral"})}),e.jsx(m,{className:"text-sm text-muted-foreground",children:"Resumo das informações principais do cliente, com KPIs e status atual."})]})}),e.jsx(r,{value:"details",children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx(i,{children:"Detalhes"})}),e.jsx(m,{className:"text-sm text-muted-foreground",children:"Informações completas: documentos, endereço, telefone, e-mail."})]})}),e.jsx(r,{value:"history",children:e.jsxs(n,{children:[e.jsx(l,{children:e.jsx(i,{children:"Histórico"})}),e.jsx(m,{className:"text-sm text-muted-foreground",children:"Cronologia de operações, alterações e eventos importantes."})]})})]})},t={name:"Tabela ↔ Kanban (Boletador)",render:()=>e.jsxs(d,{defaultValue:"table",className:"w-[560px]",children:[e.jsxs(u,{children:[e.jsxs(a,{value:"table",children:[e.jsx(y,{className:"h-4 w-4 mr-2"}),"Tabela"]}),e.jsxs(a,{value:"kanban",children:[e.jsx(H,{className:"h-4 w-4 mr-2"}),"Kanban"]}),e.jsxs(a,{value:"chart",children:[e.jsx(K,{className:"h-4 w-4 mr-2"}),"Gráficos"]})]}),e.jsx(r,{value:"table",children:e.jsxs("div",{className:"rounded-lg border border-border p-4 bg-card",children:[e.jsx("p",{className:"text-sm text-foreground font-medium mb-2",children:"Visualização em Tabela"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Estrutura hierárquica com solicitações expandindo em boletas filhas."})]})}),e.jsx(r,{value:"kanban",children:e.jsxs("div",{className:"rounded-lg border border-border p-4 bg-card",children:[e.jsx("p",{className:"text-sm text-foreground font-medium mb-2",children:"Visualização em Kanban"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"4 colunas (workflow) com drag-and-drop entre estágios."})]})}),e.jsx(r,{value:"chart",children:e.jsxs("div",{className:"rounded-lg border border-border p-4 bg-card",children:[e.jsx("p",{className:"text-sm text-foreground font-medium mb-2",children:"Gráficos"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Análise visual de volume, tipos e instituições."})]})})]})},o={name:"Com Badges",render:()=>e.jsxs(d,{defaultValue:"all",className:"w-[560px]",children:[e.jsxs(u,{children:[e.jsxs(a,{value:"all",className:"gap-2",children:["Todas ",e.jsx(c,{variant:"secondary",children:"128"})]}),e.jsxs(a,{value:"pending",className:"gap-2",children:["Pendentes ",e.jsx(c,{children:"18"})]}),e.jsxs(a,{value:"done",className:"gap-2",children:["Concluídas ",e.jsx(c,{variant:"outline",children:"110"})]})]}),e.jsx(r,{value:"all",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Listagem completa."})}),e.jsx(r,{value:"pending",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"18 boletas aguardando ação."})}),e.jsx(r,{value:"done",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"110 boletas finalizadas no período."})})]})};var b,p,g,x,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Padrão',
  render: () => <Tabs defaultValue="overview" className="w-[480px]">\r
      <TabsList>\r
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>\r
        <TabsTrigger value="details">Detalhes</TabsTrigger>\r
        <TabsTrigger value="history">Histórico</TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="overview">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Visão Geral</CardTitle>\r
          </CardHeader>\r
          <CardContent className="text-sm text-muted-foreground">\r
            Resumo das informações principais do cliente, com KPIs e status atual.\r
          </CardContent>\r
        </Card>\r
      </TabsContent>\r
      <TabsContent value="details">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Detalhes</CardTitle>\r
          </CardHeader>\r
          <CardContent className="text-sm text-muted-foreground">\r
            Informações completas: documentos, endereço, telefone, e-mail.\r
          </CardContent>\r
        </Card>\r
      </TabsContent>\r
      <TabsContent value="history">\r
        <Card>\r
          <CardHeader>\r
            <CardTitle>Histórico</CardTitle>\r
          </CardHeader>\r
          <CardContent className="text-sm text-muted-foreground">\r
            Cronologia de operações, alterações e eventos importantes.\r
          </CardContent>\r
        </Card>\r
      </TabsContent>\r
    </Tabs>
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source},description:{story:"Uso básico — duas abas com conteúdo.",...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.description}}};var h,C,v,f,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Tabela ↔ Kanban (Boletador)',
  render: () => <Tabs defaultValue="table" className="w-[560px]">\r
      <TabsList>\r
        <TabsTrigger value="table">\r
          <LayoutList className="h-4 w-4 mr-2" />\r
          Tabela\r
        </TabsTrigger>\r
        <TabsTrigger value="kanban">\r
          <Columns3 className="h-4 w-4 mr-2" />\r
          Kanban\r
        </TabsTrigger>\r
        <TabsTrigger value="chart">\r
          <BarChart3 className="h-4 w-4 mr-2" />\r
          Gráficos\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="table">\r
        <div className="rounded-lg border border-border p-4 bg-card">\r
          <p className="text-sm text-foreground font-medium mb-2">\r
            Visualização em Tabela\r
          </p>\r
          <p className="text-xs text-muted-foreground">\r
            Estrutura hierárquica com solicitações expandindo em boletas filhas.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="kanban">\r
        <div className="rounded-lg border border-border p-4 bg-card">\r
          <p className="text-sm text-foreground font-medium mb-2">\r
            Visualização em Kanban\r
          </p>\r
          <p className="text-xs text-muted-foreground">\r
            4 colunas (workflow) com drag-and-drop entre estágios.\r
          </p>\r
        </div>\r
      </TabsContent>\r
      <TabsContent value="chart">\r
        <div className="rounded-lg border border-border p-4 bg-card">\r
          <p className="text-sm text-foreground font-medium mb-2">Gráficos</p>\r
          <p className="text-xs text-muted-foreground">\r
            Análise visual de volume, tipos e instituições.\r
          </p>\r
        </div>\r
      </TabsContent>\r
    </Tabs>
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source},description:{story:"Toggle Tabela ↔ Kanban — padrão usado no Boletador.",...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var N,w,B,V,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Com Badges',
  render: () => <Tabs defaultValue="all" className="w-[560px]">\r
      <TabsList>\r
        <TabsTrigger value="all" className="gap-2">\r
          Todas <Badge variant="secondary">128</Badge>\r
        </TabsTrigger>\r
        <TabsTrigger value="pending" className="gap-2">\r
          Pendentes <Badge>18</Badge>\r
        </TabsTrigger>\r
        <TabsTrigger value="done" className="gap-2">\r
          Concluídas <Badge variant="outline">110</Badge>\r
        </TabsTrigger>\r
      </TabsList>\r
      <TabsContent value="all">\r
        <p className="text-sm text-muted-foreground p-4">Listagem completa.</p>\r
      </TabsContent>\r
      <TabsContent value="pending">\r
        <p className="text-sm text-muted-foreground p-4">\r
          18 boletas aguardando ação.\r
        </p>\r
      </TabsContent>\r
      <TabsContent value="done">\r
        <p className="text-sm text-muted-foreground p-4">\r
          110 boletas finalizadas no período.\r
        </p>\r
      </TabsContent>\r
    </Tabs>
}`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Com badge de contador na aba.",...(L=(V=o.parameters)==null?void 0:V.docs)==null?void 0:L.description}}};const ae=["Default","ViewToggle","WithBadges"];export{s as Default,t as ViewToggle,o as WithBadges,ae as __namedExportsOrder,ee as default};
