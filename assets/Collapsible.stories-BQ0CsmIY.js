import{j as e}from"./jsx-runtime-D69pdnyW.js";import{C as i,a as d,b as p}from"./collapsible-Cvn6B3Lj.js";import{B as l}from"./button-DXL5AZ1l.js";import{r as m}from"./iframe-CvSox_He.js";import{C as c}from"./chevron-down-BQorgLkq.js";import"./index-CHv7tnzT.js";import"./index-fnuAKoKB.js";import"./index-KMH598xy.js";import"./index-DzzMxk2y.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-6LzbcUH8.js";import"./index-Bw6hP1Na.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./preload-helper-C1FmrZbK.js";import"./createLucideIcon-D6DUjI5c.js";const B={title:"Design System / Componentes / Collapsible",parameters:{layout:"padded",docs:{description:{component:"Container expandível para esconder/mostrar conteúdo secundário. Para múltiplas seções com apenas uma aberta use `Accordion`. Para detalhes de linha de tabela use o expand row do `DataTable`."}}},tags:["autodocs"]},r={render:()=>{const[o,n]=m.useState(!1);return e.jsxs(i,{open:o,onOpenChange:n,className:"w-80 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-border bg-card px-3 py-2",children:[e.jsx("span",{className:"text-sm font-heading font-semibold",children:"Filtros avançados"}),e.jsx(d,{asChild:!0,children:e.jsx(l,{variant:"ghost",size:"sm",children:e.jsx(c,{className:`h-4 w-4 transition-transform ${o?"rotate-180":""}`})})})]}),e.jsxs(p,{className:"space-y-2 rounded-md border border-border bg-card p-3 text-sm",children:[e.jsx("p",{children:"Período: últimos 30 dias"}),e.jsx("p",{children:"Status: Em Execução, Executado"}),e.jsx("p",{children:"Solicitante: Todos"})]})]})}};var s,a,t;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Collapsible open={open} onOpenChange={setOpen} className="w-80 space-y-2">\r
        <div className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">\r
          <span className="text-sm font-heading font-semibold">\r
            Filtros avançados\r
          </span>\r
          <CollapsibleTrigger asChild>\r
            <Button variant="ghost" size="sm">\r
              <ChevronDown className={\`h-4 w-4 transition-transform \${open ? "rotate-180" : ""}\`} />\r
            </Button>\r
          </CollapsibleTrigger>\r
        </div>\r
        <CollapsibleContent className="space-y-2 rounded-md border border-border bg-card p-3 text-sm">\r
          <p>Período: últimos 30 dias</p>\r
          <p>Status: Em Execução, Executado</p>\r
          <p>Solicitante: Todos</p>\r
        </CollapsibleContent>\r
      </Collapsible>;
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,B as default};
