import{j as e}from"./jsx-runtime-D69pdnyW.js";import{D as u,a as l,b as h,e as w,d as t,c as r,f as g}from"./dropdown-menu-DH6tQy2V.js";import{B as M}from"./button-DXL5AZ1l.js";import{r as k}from"./iframe-CvSox_He.js";import{E as v}from"./ellipsis-CO1mTZ9z.js";import{A as N}from"./arrow-right-CbjUOza5.js";import{P as f}from"./pencil-Dx-FwIp3.js";import{C as I}from"./copy-CAqNEjM1.js";import{E as A}from"./external-link-V2KSb47v.js";import{T as E}from"./trash-2-Bg6OQw1i.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-KMH598xy.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-T97G5T97.js";import"./index-BGqnW-RQ.js";import"./index-XFK3SrUu.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-j88A8ARN.js";import"./index-Bw6hP1Na.js";import"./utils-CytzSlOG.js";import"./chevron-right-Dq1_yaRh.js";import"./createLucideIcon-D6DUjI5c.js";import"./check-DQZkpVpn.js";import"./index-BwobEAja.js";import"./preload-helper-C1FmrZbK.js";const me={title:"Design System / Componentes / DropdownMenu",parameters:{layout:"centered",docs:{description:{component:"Menu de ações suspenso. Usado tipicamente em linhas de tabela (ícone `MoreHorizontal`) e botões de mais opções. Suporta itens, separadores, checkbox items e sub-menus."}}},tags:["autodocs"]},o={render:()=>e.jsxs(u,{children:[e.jsx(l,{asChild:!0,children:e.jsx(M,{variant:"ghost",size:"icon","aria-label":"Mais ações",children:e.jsx(v,{className:"h-4 w-4"})})}),e.jsxs(h,{align:"end",className:"w-48",children:[e.jsx(w,{children:"Ações da boleta"}),e.jsx(t,{}),e.jsxs(r,{children:[e.jsx(N,{className:"h-4 w-4 mr-2"}),"Avançar status"]}),e.jsxs(r,{children:[e.jsx(f,{className:"h-4 w-4 mr-2"}),"Editar"]}),e.jsxs(r,{children:[e.jsx(I,{className:"h-4 w-4 mr-2"}),"Duplicar"]}),e.jsxs(r,{children:[e.jsx(A,{className:"h-4 w-4 mr-2"}),"Abrir detalhes"]}),e.jsx(t,{}),e.jsxs(r,{className:"text-destructive focus:text-destructive",children:[e.jsx(E,{className:"h-4 w-4 mr-2"}),"Cancelar boleta"]})]})]})},s={name:"Com itens checkbox",render:()=>{const[D,x]=k.useState({ativo:!0,tipo:!0,qtd:!0,status:!0});return e.jsxs(u,{children:[e.jsx(l,{asChild:!0,children:e.jsx(M,{variant:"outline",size:"sm",children:"Colunas visíveis"})}),e.jsxs(h,{align:"start",className:"w-48",children:[e.jsx(w,{children:"Mostrar colunas"}),e.jsx(t,{}),Object.entries(D).map(([n,C])=>e.jsx(g,{checked:C,onCheckedChange:j=>x(b=>({...b,[n]:!!j})),children:n.charAt(0).toUpperCase()+n.slice(1)},n))]})]})}};var a,i,m;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DropdownMenu>\r
      <DropdownMenuTrigger asChild>\r
        <Button variant="ghost" size="icon" aria-label="Mais ações">\r
          <MoreHorizontal className="h-4 w-4" />\r
        </Button>\r
      </DropdownMenuTrigger>\r
      <DropdownMenuContent align="end" className="w-48">\r
        <DropdownMenuLabel>Ações da boleta</DropdownMenuLabel>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem>\r
          <ArrowRight className="h-4 w-4 mr-2" />\r
          Avançar status\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Pencil className="h-4 w-4 mr-2" />\r
          Editar\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <Copy className="h-4 w-4 mr-2" />\r
          Duplicar\r
        </DropdownMenuItem>\r
        <DropdownMenuItem>\r
          <ExternalLink className="h-4 w-4 mr-2" />\r
          Abrir detalhes\r
        </DropdownMenuItem>\r
        <DropdownMenuSeparator />\r
        <DropdownMenuItem className="text-destructive focus:text-destructive">\r
          <Trash2 className="h-4 w-4 mr-2" />\r
          Cancelar boleta\r
        </DropdownMenuItem>\r
      </DropdownMenuContent>\r
    </DropdownMenu>
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Com itens checkbox",
  render: () => {
    const [cols, setCols] = useState({
      ativo: true,
      tipo: true,
      qtd: true,
      status: true
    });
    return <DropdownMenu>\r
        <DropdownMenuTrigger asChild>\r
          <Button variant="outline" size="sm">\r
            Colunas visíveis\r
          </Button>\r
        </DropdownMenuTrigger>\r
        <DropdownMenuContent align="start" className="w-48">\r
          <DropdownMenuLabel>Mostrar colunas</DropdownMenuLabel>\r
          <DropdownMenuSeparator />\r
          {Object.entries(cols).map(([key, value]) => <DropdownMenuCheckboxItem key={key} checked={value} onCheckedChange={checked => setCols(p => ({
          ...p,
          [key]: !!checked
        }))}>\r
              {key.charAt(0).toUpperCase() + key.slice(1)}\r
            </DropdownMenuCheckboxItem>)}\r
        </DropdownMenuContent>\r
      </DropdownMenu>;
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const pe=["Default","ComCheckbox"];export{s as ComCheckbox,o as Default,pe as __namedExportsOrder,me as default};
