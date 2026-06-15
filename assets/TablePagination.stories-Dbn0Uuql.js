import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as F}from"./iframe-CvSox_He.js";import{T as c}from"./table-pagination-DIwIGWs7.js";import"./preload-helper-C1FmrZbK.js";import"./button-DXL5AZ1l.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./ellipsis-CO1mTZ9z.js";import"./createLucideIcon-D6DUjI5c.js";import"./select-HyD8fhl7.js";import"./index-DNOJwA3A.js";import"./index-BdQq_4o_.js";import"./index-CHv7tnzT.js";import"./index-T97G5T97.js";import"./index-fnuAKoKB.js";import"./index-BGqnW-RQ.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-CSC2Jsb6.js";import"./chevron-down-BQorgLkq.js";import"./chevron-up-BLyKixcO.js";import"./check-DQZkpVpn.js";import"./chevron-left-xs_4jhcg.js";import"./chevron-right-Dq1_yaRh.js";const ve={title:"Design System / Componentes / TablePagination",component:c,parameters:{layout:"padded",docs:{description:{component:`
Rodapé de paginação para tabelas. Exibe contador de itens, botões Anterior/Próximo
e números de página com reticências inteligentes para muitas páginas.

### Composição no design system
\`\`\`
TablePagination          ← este componente
  ├── Pagination          ← primitivo base (ui/pagination)
  │     └── PaginationContent
  │           └── PaginationItem
  │                 ├── Button      ← ação de página (não link)
  │                 └── PaginationEllipsis
  └── Contador "1–20 de 47 itens"
\`\`\`

> Usa \`Button\` (não \`PaginationLink\`) para as ações porque é paginação
> interna de tabela — sem mudança de URL — e não navegação por âncora.

### Quando usar diretamente
Use \`<TablePagination>\` apenas ao construir tabelas customizadas que não
usam \`<DataTable>\`. Em todos os outros casos, \`<TablePage>\` e \`<DataTable>\`
já o incluem automaticamente.
        `}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"Página atual (1-based)."},totalPages:{control:{type:"number",min:1},description:"Total de páginas."},totalItems:{control:{type:"number",min:0},description:"Total de itens no dataset."},itemsPerPage:{control:{type:"number",min:1},description:"Itens exibidos por página."},itemLabel:{control:"text",description:"Rótulo do tipo de item (ex: solicitações, clientes)."}}},n={name:"Primeira Página",args:{currentPage:1,totalPages:5,totalItems:47,itemsPerPage:10,itemLabel:"solicitações",onPageChange:()=>{}}},s={name:"Página Intermediária",args:{currentPage:3,totalPages:5,totalItems:47,itemsPerPage:10,itemLabel:"solicitações",onPageChange:()=>{}}},o={name:"Última Página",args:{currentPage:5,totalPages:5,totalItems:47,itemsPerPage:10,itemLabel:"solicitações",onPageChange:()=>{}}},i={name:"Muitas Páginas (reticências)",args:{currentPage:6,totalPages:20,totalItems:196,itemsPerPage:10,itemLabel:"clientes",onPageChange:()=>{}}},l={name:"Apenas 2 Páginas",args:{currentPage:1,totalPages:2,totalItems:14,itemsPerPage:10,itemLabel:"itens",onPageChange:()=>{}}},b=Array.from({length:47},(r,a)=>({id:`SOL-${String(a+1).padStart(5,"0")}`,solicitante:["M. Laurentino","C. Almeida","R. Mendes","A. Santos"][a%4],ativo:["PETR4","VALE3","ITUB4","BBDC4","ABEV3"][a%5],status:["Nova Solicitação","Em Execução","Executado","Replicado"][a%4]})),m={name:"Interativo — Demo com tabela",render:()=>{const[a,p]=F.useState(1),P=Math.ceil(b.length/10),B=b.slice((a-1)*10,a*10);return e.jsxs("div",{className:"w-full max-w-3xl border border-border rounded-lg overflow-hidden bg-card",children:[e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-muted/40 border-b border-border",children:e.jsx("tr",{children:["ID","Solicitante","Ativo","Status"].map(t=>e.jsx("th",{className:"text-left px-4 py-2.5 text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider",children:t},t))})}),e.jsx("tbody",{children:B.map((t,U)=>e.jsxs("tr",{className:`border-b border-border last:border-0 ${U%2===0?"":"bg-muted/10"}`,children:[e.jsx("td",{className:"px-4 py-2.5 font-mono text-xs text-primary",children:t.id}),e.jsx("td",{className:"px-4 py-2.5 text-foreground",children:t.solicitante}),e.jsx("td",{className:"px-4 py-2.5 font-mono text-foreground",children:t.ativo}),e.jsx("td",{className:"px-4 py-2.5 text-muted-foreground",children:t.status})]},t.id))})]}),e.jsx(c,{currentPage:a,totalPages:P,onPageChange:p,totalItems:b.length,itemsPerPage:10,itemLabel:"solicitações"})]})}},d={name:"Todas as variantes",render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-full max-w-3xl",children:[{label:"Primeira página (anterior desabilitado)",currentPage:1,totalPages:8,totalItems:75},{label:"Página intermediária",currentPage:4,totalPages:8,totalItems:75},{label:"Última página (próximo desabilitado)",currentPage:8,totalPages:8,totalItems:75},{label:"Muitas páginas — início",currentPage:2,totalPages:20,totalItems:196},{label:"Muitas páginas — meio",currentPage:10,totalPages:20,totalItems:196},{label:"Muitas páginas — fim",currentPage:19,totalPages:20,totalItems:196}].map(({label:r,currentPage:a,totalPages:p,totalItems:P})=>e.jsxs("div",{className:"border border-border rounded-lg overflow-hidden bg-card",children:[e.jsx("div",{className:"px-4 py-2 border-b border-border bg-muted/20",children:e.jsx("span",{className:"text-xs text-muted-foreground font-body",children:r})}),e.jsx(c,{currentPage:a,totalPages:p,onPageChange:()=>{},totalItems:P,itemsPerPage:10,itemLabel:"itens"})]},r))})},g={name:"Variações de itemLabel",render:()=>e.jsx("div",{className:"flex flex-col gap-3 w-full max-w-3xl",children:[{label:"solicitações",totalItems:47},{label:"clientes",totalItems:132},{label:"boletas",totalItems:89},{label:"registros",totalItems:204}].map(({label:r,totalItems:a})=>e.jsx("div",{className:"border border-border rounded-lg overflow-hidden bg-card",children:e.jsx(c,{currentPage:2,totalPages:Math.ceil(a/10),onPageChange:()=>{},totalItems:a,itemsPerPage:10,itemLabel:r})},r))})};var u,x,I;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Primeira Página",
  args: {
    currentPage: 1,
    totalPages: 5,
    totalItems: 47,
    itemsPerPage: 10,
    itemLabel: "solicitações",
    onPageChange: () => {}
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var h,f,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Página Intermediária",
  args: {
    currentPage: 3,
    totalPages: 5,
    totalItems: 47,
    itemsPerPage: 10,
    itemLabel: "solicitações",
    onPageChange: () => {}
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var E,A,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Última Página",
  args: {
    currentPage: 5,
    totalPages: 5,
    totalItems: 47,
    itemsPerPage: 10,
    itemLabel: "solicitações",
    onPageChange: () => {}
  }
}`,...(y=(A=o.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var N,S,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Muitas Páginas (reticências)",
  args: {
    currentPage: 6,
    totalPages: 20,
    totalItems: 196,
    itemsPerPage: 10,
    itemLabel: "clientes",
    onPageChange: () => {}
  }
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,T,j;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Apenas 2 Páginas",
  args: {
    currentPage: 1,
    totalPages: 2,
    totalItems: 14,
    itemsPerPage: 10,
    itemLabel: "itens",
    onPageChange: () => {}
  }
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,_,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Interativo — Demo com tabela",
  render: () => {
    const PAGE_SIZE = 10;
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(FAKE_DATA.length / PAGE_SIZE);
    const rows = FAKE_DATA.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    return <div className="w-full max-w-3xl border border-border rounded-lg overflow-hidden bg-card">\r
        <table className="w-full text-sm">\r
          <thead className="bg-muted/40 border-b border-border">\r
            <tr>\r
              {["ID", "Solicitante", "Ativo", "Status"].map(h => <th key={h} className="text-left px-4 py-2.5 text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">\r
                  {h}\r
                </th>)}\r
            </tr>\r
          </thead>\r
          <tbody>\r
            {rows.map((row, i) => <tr key={row.id} className={\`border-b border-border last:border-0 \${i % 2 === 0 ? "" : "bg-muted/10"}\`}>\r
                <td className="px-4 py-2.5 font-mono text-xs text-primary">{row.id}</td>\r
                <td className="px-4 py-2.5 text-foreground">{row.solicitante}</td>\r
                <td className="px-4 py-2.5 font-mono text-foreground">{row.ativo}</td>\r
                <td className="px-4 py-2.5 text-muted-foreground">{row.status}</td>\r
              </tr>)}\r
          </tbody>\r
        </table>\r
\r
        <TablePagination currentPage={page} totalPages={totalPages} onPageChange={setPage} totalItems={FAKE_DATA.length} itemsPerPage={PAGE_SIZE} itemLabel="solicitações" />\r
      </div>;
  }
}`,...(D=(_=m.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var M,G,Z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Todas as variantes",
  render: () => <div className="flex flex-col gap-4 w-full max-w-3xl">\r
      {[{
      label: "Primeira página (anterior desabilitado)",
      currentPage: 1,
      totalPages: 8,
      totalItems: 75
    }, {
      label: "Página intermediária",
      currentPage: 4,
      totalPages: 8,
      totalItems: 75
    }, {
      label: "Última página (próximo desabilitado)",
      currentPage: 8,
      totalPages: 8,
      totalItems: 75
    }, {
      label: "Muitas páginas — início",
      currentPage: 2,
      totalPages: 20,
      totalItems: 196
    }, {
      label: "Muitas páginas — meio",
      currentPage: 10,
      totalPages: 20,
      totalItems: 196
    }, {
      label: "Muitas páginas — fim",
      currentPage: 19,
      totalPages: 20,
      totalItems: 196
    }].map(({
      label,
      currentPage,
      totalPages,
      totalItems
    }) => <div key={label} className="border border-border rounded-lg overflow-hidden bg-card">\r
          <div className="px-4 py-2 border-b border-border bg-muted/20">\r
            <span className="text-xs text-muted-foreground font-body">{label}</span>\r
          </div>\r
          <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={() => {}} totalItems={totalItems} itemsPerPage={10} itemLabel="itens" />\r
        </div>)}\r
    </div>
}`,...(Z=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var k,V,R;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Variações de itemLabel",
  render: () => <div className="flex flex-col gap-3 w-full max-w-3xl">\r
      {[{
      label: "solicitações",
      totalItems: 47
    }, {
      label: "clientes",
      totalItems: 132
    }, {
      label: "boletas",
      totalItems: 89
    }, {
      label: "registros",
      totalItems: 204
    }].map(({
      label,
      totalItems
    }) => <div key={label} className="border border-border rounded-lg overflow-hidden bg-card">\r
          <TablePagination currentPage={2} totalPages={Math.ceil(totalItems / 10)} onPageChange={() => {}} totalItems={totalItems} itemsPerPage={10} itemLabel={label} />\r
        </div>)}\r
    </div>
}`,...(R=(V=g.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const Ee=["PrimeiraPagina","PaginaIntermediaria","UltimaPagina","MuitasPaginas","DuasPaginas","Interativo","TodasAsVariantes","VariacoesDeLabel"];export{l as DuasPaginas,m as Interativo,i as MuitasPaginas,s as PaginaIntermediaria,n as PrimeiraPagina,d as TodasAsVariantes,o as UltimaPagina,g as VariacoesDeLabel,Ee as __namedExportsOrder,ve as default};
