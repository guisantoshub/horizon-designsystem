import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r}from"./iframe-CvSox_He.js";import{c as d}from"./utils-CytzSlOG.js";import{B as u}from"./badge-CUxrm4Aj.js";import"./preload-helper-C1FmrZbK.js";import"./index-BwobEAja.js";const m=r.forwardRef(({className:a,...l},t)=>e.jsx("div",{className:"relative w-full overflow-hidden",children:e.jsx("table",{ref:t,className:d("w-full caption-bottom text-sm",a),...l})}));m.displayName="Table";const c=r.forwardRef(({className:a,...l},t)=>e.jsx("thead",{ref:t,className:d("[&_tr]:border-b",a),...l}));c.displayName="TableHeader";const b=r.forwardRef(({className:a,...l},t)=>e.jsx("tbody",{ref:t,className:d("[&_tr:last-child]:border-0",a),...l}));b.displayName="TableBody";const T=r.forwardRef(({className:a,...l},t)=>e.jsx("tfoot",{ref:t,className:d("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...l}));T.displayName="TableFooter";const n=r.forwardRef(({className:a,...l},t)=>e.jsx("tr",{ref:t,className:d("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",a),...l}));n.displayName="TableRow";const o=r.forwardRef(({className:a,...l},t)=>e.jsx("th",{ref:t,className:d("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...l}));o.displayName="TableHead";const s=r.forwardRef(({className:a,...l},t)=>e.jsx("td",{ref:t,className:d("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...l}));s.displayName="TableCell";const p=r.forwardRef(({className:a,...l},t)=>e.jsx("caption",{ref:t,className:d("mt-4 text-sm text-muted-foreground",a),...l}));p.displayName="TableCaption";m.__docgenInfo={description:"",methods:[],displayName:"Table"};c.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};T.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};o.__docgenInfo={description:"",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};s.__docgenInfo={description:"",methods:[],displayName:"TableCell"};p.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const w={title:"Design System / Componentes / Table (primitivo)",parameters:{layout:"padded",docs:{description:{component:"Primitivos de tabela HTML estilizados. **Para tabelas de domínio** (cadastros, boletador) use o `DataTable` (AG Grid). Este primitivo é apropriado para tabelas pequenas dentro de cards, modais e relatórios."}}},tags:["autodocs"]},N=[{id:"BOL-413",ativo:"ITUB4",tipo:"COMPRA",qtd:"1.200",valor:"R$ 125.000,00",status:"Executado"},{id:"BOL-414",ativo:"PETR4",tipo:"VENDA",qtd:"800",valor:"R$ 24.800,00",status:"Em Execução"},{id:"BOL-415",ativo:"VALE3",tipo:"COMPRA",qtd:"500",valor:"R$ 32.500,00",status:"Nova Solicitação"}],i={render:()=>e.jsxs(m,{className:"max-w-2xl",children:[e.jsx(p,{children:"Boletas da última hora"}),e.jsx(c,{children:e.jsxs(n,{children:[e.jsx(o,{children:"ID"}),e.jsx(o,{children:"Ativo"}),e.jsx(o,{children:"Tipo"}),e.jsx(o,{className:"text-right",children:"Quantidade"}),e.jsx(o,{className:"text-right",children:"Valor"}),e.jsx(o,{children:"Status"})]})}),e.jsx(b,{children:N.map(a=>e.jsxs(n,{children:[e.jsx(s,{className:"font-mono",children:a.id}),e.jsx(s,{children:a.ativo}),e.jsx(s,{className:a.tipo==="VENDA"?"text-destructive font-semibold":"text-emerald-600 font-semibold",children:a.tipo}),e.jsx(s,{className:"text-right tabular-nums",children:a.qtd}),e.jsx(s,{className:"text-right tabular-nums",children:a.valor}),e.jsx(s,{children:e.jsx(u,{variant:"outline",className:"font-medium",children:a.status})})]},a.id))}),e.jsx(T,{children:e.jsxs(n,{children:[e.jsx(s,{colSpan:4,className:"font-heading",children:"Total"}),e.jsx(s,{className:"text-right tabular-nums font-semibold",children:"R$ 182.300,00"}),e.jsx(s,{})]})})]})};var x,h,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Table className="max-w-2xl">\r
      <TableCaption>Boletas da última hora</TableCaption>\r
      <TableHeader>\r
        <TableRow>\r
          <TableHead>ID</TableHead>\r
          <TableHead>Ativo</TableHead>\r
          <TableHead>Tipo</TableHead>\r
          <TableHead className="text-right">Quantidade</TableHead>\r
          <TableHead className="text-right">Valor</TableHead>\r
          <TableHead>Status</TableHead>\r
        </TableRow>\r
      </TableHeader>\r
      <TableBody>\r
        {rows.map(r => <TableRow key={r.id}>\r
            <TableCell className="font-mono">{r.id}</TableCell>\r
            <TableCell>{r.ativo}</TableCell>\r
            <TableCell className={r.tipo === "VENDA" ? "text-destructive font-semibold" : "text-emerald-600 font-semibold"}>\r
              {r.tipo}\r
            </TableCell>\r
            <TableCell className="text-right tabular-nums">{r.qtd}</TableCell>\r
            <TableCell className="text-right tabular-nums">{r.valor}</TableCell>\r
            <TableCell>\r
              <Badge variant="outline" className="font-medium">\r
                {r.status}\r
              </Badge>\r
            </TableCell>\r
          </TableRow>)}\r
      </TableBody>\r
      <TableFooter>\r
        <TableRow>\r
          <TableCell colSpan={4} className="font-heading">\r
            Total\r
          </TableCell>\r
          <TableCell className="text-right tabular-nums font-semibold">\r
            R$ 182.300,00\r
          </TableCell>\r
          <TableCell />\r
        </TableRow>\r
      </TableFooter>\r
    </Table>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const H=["Default"];export{i as Default,H as __namedExportsOrder,w as default};
