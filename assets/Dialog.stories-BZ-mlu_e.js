import{j as a}from"./jsx-runtime-D69pdnyW.js";import{D as p,a as u,b as g,c as D,d as h,e as x,f}from"./dialog-mpwK8JRG.js";import{B as r}from"./button-DXL5AZ1l.js";import{I as o}from"./input-m_F3UOAC.js";import{L as n}from"./label-BS9NERQq.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DyyxLNMW.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-Bw6hP1Na.js";import"./index-KMH598xy.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-6LzbcUH8.js";import"./utils-CytzSlOG.js";import"./x-C6od2E8Y.js";import"./createLucideIcon-D6DUjI5c.js";import"./index-BwobEAja.js";const $={title:"Design System / Componentes / Dialog",parameters:{layout:"centered",docs:{description:{component:"Modal centralizado para fluxos curtos (1-3 campos) ou confirmações que precisam de input. Para ações destrutivas use `AlertDialog`. Para fluxos longos com muitos campos, prefira `Sheet` (drawer lateral)."}}},tags:["autodocs"]},e={render:()=>a.jsxs(p,{children:[a.jsx(u,{asChild:!0,children:a.jsx(r,{children:"Abrir dialog"})}),a.jsxs(g,{children:[a.jsxs(D,{children:[a.jsx(h,{children:"Editar boleta"}),a.jsx(x,{children:"Atualize a quantidade ou valor financeiro. As mudanças ficam registradas no histórico da boleta."})]}),a.jsxs("div",{className:"space-y-3 py-2",children:[a.jsxs("div",{className:"space-y-1.5",children:[a.jsx(n,{htmlFor:"qtd",children:"Quantidade"}),a.jsx(o,{id:"qtd",defaultValue:"1.200"})]}),a.jsxs("div",{className:"space-y-1.5",children:[a.jsx(n,{htmlFor:"vlr",children:"Valor financeiro"}),a.jsx(o,{id:"vlr",defaultValue:"R$ 125.000,00"})]})]}),a.jsxs(f,{children:[a.jsx(r,{variant:"outline",children:"Cancelar"}),a.jsx(r,{children:"Salvar alterações"})]})]})]})},i={name:"Confirmação simples",render:()=>a.jsxs(p,{children:[a.jsx(u,{asChild:!0,children:a.jsx(r,{variant:"outline",children:"Replicar boleta"})}),a.jsxs(g,{className:"sm:max-w-md",children:[a.jsxs(D,{children:[a.jsx(h,{children:"Confirmar replicação"}),a.jsx(x,{children:"A boleta será replicada nos sistemas de custódia. Esta operação não pode ser desfeita."})]}),a.jsxs(f,{children:[a.jsx(r,{variant:"outline",children:"Cancelar"}),a.jsx(r,{children:"Confirmar"})]})]})]})};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button>Abrir dialog</Button>\r
      </DialogTrigger>\r
      <DialogContent>\r
        <DialogHeader>\r
          <DialogTitle>Editar boleta</DialogTitle>\r
          <DialogDescription>\r
            Atualize a quantidade ou valor financeiro. As mudanças ficam\r
            registradas no histórico da boleta.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <div className="space-y-3 py-2">\r
          <div className="space-y-1.5">\r
            <Label htmlFor="qtd">Quantidade</Label>\r
            <Input id="qtd" defaultValue="1.200" />\r
          </div>\r
          <div className="space-y-1.5">\r
            <Label htmlFor="vlr">Valor financeiro</Label>\r
            <Input id="vlr" defaultValue="R$ 125.000,00" />\r
          </div>\r
        </div>\r
        <DialogFooter>\r
          <Button variant="outline">Cancelar</Button>\r
          <Button>Salvar alterações</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Confirmação simples",
  render: () => <Dialog>\r
      <DialogTrigger asChild>\r
        <Button variant="outline">Replicar boleta</Button>\r
      </DialogTrigger>\r
      <DialogContent className="sm:max-w-md">\r
        <DialogHeader>\r
          <DialogTitle>Confirmar replicação</DialogTitle>\r
          <DialogDescription>\r
            A boleta será replicada nos sistemas de custódia. Esta operação não\r
            pode ser desfeita.\r
          </DialogDescription>\r
        </DialogHeader>\r
        <DialogFooter>\r
          <Button variant="outline">Cancelar</Button>\r
          <Button>Confirmar</Button>\r
        </DialogFooter>\r
      </DialogContent>\r
    </Dialog>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["Default","ConfirmacaoSimples"];export{i as ConfirmacaoSimples,e as Default,M as __namedExportsOrder,$ as default};
