import{j as e}from"./jsx-runtime-D69pdnyW.js";import{P as l,a as c,b as n}from"./popover-B-U2tnIT.js";import{B as s}from"./button-DXL5AZ1l.js";import{I as m}from"./input-m_F3UOAC.js";import{L as d}from"./label-BS9NERQq.js";import{S}from"./switch-Dx3PtuCi.js";import{S as A}from"./sliders-horizontal-D0ILQE3J.js";import{F as D}from"./filter-CfrhGbtB.js";import{B as I}from"./bell-XC7InOcy.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-KMH598xy.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./index-qqZAXNe6.js";import"./createLucideIcon-D6DUjI5c.js";const ne={title:"Design System / Componentes / Popover",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Popover — Painel flutuante leve

Wrapper sobre **Radix Popover**. Use para conteúdo interativo curto
(filtros de coluna em tabelas, ajustes rápidos, listas curtas) que
não justifica abrir um modal ou um sheet. Diferente do Tooltip,
o Popover **aceita interação** (inputs, botões, switches).

### Composição
\`\`\`tsx
<Popover>
  <PopoverTrigger asChild><Button>Abrir</Button></PopoverTrigger>
  <PopoverContent>conteúdo interativo</PopoverContent>
</Popover>
\`\`\`
        `}}}},a={name:"Padrão",render:()=>e.jsxs(l,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(s,{variant:"outline",children:[e.jsx(A,{className:"h-4 w-4 mr-2"}),"Ajustes rápidos"]})}),e.jsx(n,{className:"w-72",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-semibold text-foreground",children:"Dimensões"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Configure largura e altura do painel."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-2 items-center gap-2",children:[e.jsx(d,{htmlFor:"w",children:"Largura"}),e.jsx(m,{id:"w",defaultValue:"320px",className:"h-8"})]}),e.jsxs("div",{className:"grid grid-cols-2 items-center gap-2",children:[e.jsx(d,{htmlFor:"h",children:"Altura"}),e.jsx(m,{id:"h",defaultValue:"240px",className:"h-8"})]})]})]})})]})},t={name:"Filtro de Coluna",render:()=>e.jsxs(l,{children:[e.jsx(c,{asChild:!0,children:e.jsx(s,{variant:"ghost",size:"icon",className:"h-7 w-7",children:e.jsx(D,{className:"h-3.5 w-3.5"})})}),e.jsx(n,{className:"w-64",align:"start",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx(d,{htmlFor:"filter",className:"text-xs uppercase tracking-wide",children:"Filtrar por nome"}),e.jsx(m,{id:"filter",placeholder:"Digite para filtrar…",className:"mt-1.5 h-8 text-sm",autoFocus:!0})]}),e.jsxs("div",{className:"flex items-center justify-end gap-2",children:[e.jsx(s,{variant:"ghost",size:"sm",children:"Limpar"}),e.jsx(s,{size:"sm",children:"Aplicar"})]})]})})]})},o={name:"Notificações",render:()=>e.jsxs(l,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(s,{variant:"ghost",size:"icon",className:"relative",children:[e.jsx(I,{className:"h-4 w-4"}),e.jsx("span",{className:"absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"})]})}),e.jsxs(n,{className:"w-80 p-0",align:"end",children:[e.jsxs("div",{className:"px-4 py-3 border-b border-border",children:[e.jsx("h4",{className:"text-sm font-semibold text-foreground",children:"Notificações"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"3 não lidas"})]}),e.jsx("div",{className:"divide-y divide-border max-h-64 overflow-auto",children:[{title:"Boleta BOL-1234 executada",time:"há 2 min"},{title:"Novo cliente cadastrado",time:"há 1 h"},{title:"Importação de acessos concluída",time:"há 3 h"}].map(r=>e.jsxs("div",{className:"px-4 py-3 hover:bg-muted/40 cursor-pointer",children:[e.jsx("p",{className:"text-sm text-foreground",children:r.title}),e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:r.time})]},r.title))}),e.jsx("div",{className:"px-4 py-2 border-t border-border",children:e.jsx(s,{variant:"ghost",size:"sm",className:"w-full",children:"Ver todas"})})]})]})},i={name:"Preferências",render:()=>e.jsxs(l,{children:[e.jsx(c,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Preferências"})}),e.jsxs(n,{className:"w-72",children:[e.jsx("h4",{className:"text-sm font-semibold text-foreground mb-3",children:"Notificações por e-mail"}),e.jsx("div",{className:"space-y-3",children:[{id:"email-boleta",label:"Atualização de boleta",defaultChecked:!0},{id:"email-cliente",label:"Novos clientes",defaultChecked:!1},{id:"email-acesso",label:"Mudanças de permissão",defaultChecked:!0}].map(r=>e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(d,{htmlFor:r.id,className:"text-sm font-normal",children:r.label}),e.jsx(S,{id:r.id,defaultChecked:r.defaultChecked})]},r.id))})]})]})};var p,u,h,x,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Padrão',
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">\r
          <SlidersHorizontal className="h-4 w-4 mr-2" />\r
          Ajustes rápidos\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-72">\r
        <div className="grid gap-3">\r
          <div className="space-y-1">\r
            <h4 className="text-sm font-semibold text-foreground">Dimensões</h4>\r
            <p className="text-xs text-muted-foreground">\r
              Configure largura e altura do painel.\r
            </p>\r
          </div>\r
          <div className="grid gap-2">\r
            <div className="grid grid-cols-2 items-center gap-2">\r
              <Label htmlFor="w">Largura</Label>\r
              <Input id="w" defaultValue="320px" className="h-8" />\r
            </div>\r
            <div className="grid grid-cols-2 items-center gap-2">\r
              <Label htmlFor="h">Altura</Label>\r
              <Input id="h" defaultValue="240px" className="h-8" />\r
            </div>\r
          </div>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Padrão — mini-form em popover.",...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.description}}};var f,g,N,j,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Filtro de Coluna',
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="ghost" size="icon" className="h-7 w-7">\r
          <Filter className="h-3.5 w-3.5" />\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-64" align="start">\r
        <div className="space-y-3">\r
          <div>\r
            <Label htmlFor="filter" className="text-xs uppercase tracking-wide">\r
              Filtrar por nome\r
            </Label>\r
            <Input id="filter" placeholder="Digite para filtrar…" className="mt-1.5 h-8 text-sm" autoFocus />\r
          </div>\r
          <div className="flex items-center justify-end gap-2">\r
            <Button variant="ghost" size="sm">\r
              Limpar\r
            </Button>\r
            <Button size="sm">Aplicar</Button>\r
          </div>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(N=(g=t.parameters)==null?void 0:g.docs)==null?void 0:N.source},description:{story:"Filtro de coluna — padrão usado em ClientesTable e BoletadorTable.",...(b=(j=t.parameters)==null?void 0:j.docs)==null?void 0:b.description}}};var P,C,w,y,B;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Notificações',
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="ghost" size="icon" className="relative">\r
          <Bell className="h-4 w-4" />\r
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />\r
        </Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-80 p-0" align="end">\r
        <div className="px-4 py-3 border-b border-border">\r
          <h4 className="text-sm font-semibold text-foreground">Notificações</h4>\r
          <p className="text-xs text-muted-foreground">3 não lidas</p>\r
        </div>\r
        <div className="divide-y divide-border max-h-64 overflow-auto">\r
          {[{
          title: 'Boleta BOL-1234 executada',
          time: 'há 2 min'
        }, {
          title: 'Novo cliente cadastrado',
          time: 'há 1 h'
        }, {
          title: 'Importação de acessos concluída',
          time: 'há 3 h'
        }].map(n => <div key={n.title} className="px-4 py-3 hover:bg-muted/40 cursor-pointer">\r
              <p className="text-sm text-foreground">{n.title}</p>\r
              <p className="text-xs text-muted-foreground mt-0.5">{n.time}</p>\r
            </div>)}\r
        </div>\r
        <div className="px-4 py-2 border-t border-border">\r
          <Button variant="ghost" size="sm" className="w-full">\r
            Ver todas\r
          </Button>\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source},description:{story:"Notificações — lista flutuante.",...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var F,L,k,z,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Preferências',
  render: () => <Popover>\r
      <PopoverTrigger asChild>\r
        <Button variant="outline">Preferências</Button>\r
      </PopoverTrigger>\r
      <PopoverContent className="w-72">\r
        <h4 className="text-sm font-semibold text-foreground mb-3">\r
          Notificações por e-mail\r
        </h4>\r
        <div className="space-y-3">\r
          {[{
          id: 'email-boleta',
          label: 'Atualização de boleta',
          defaultChecked: true
        }, {
          id: 'email-cliente',
          label: 'Novos clientes',
          defaultChecked: false
        }, {
          id: 'email-acesso',
          label: 'Mudanças de permissão',
          defaultChecked: true
        }].map(p => <div key={p.id} className="flex items-center justify-between">\r
              <Label htmlFor={p.id} className="text-sm font-normal">\r
                {p.label}\r
              </Label>\r
              <Switch id={p.id} defaultChecked={p.defaultChecked} />\r
            </div>)}\r
        </div>\r
      </PopoverContent>\r
    </Popover>
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"Preferências rápidas — switches em popover.",...(T=(z=i.parameters)==null?void 0:z.docs)==null?void 0:T.description}}};const me=["Default","ColumnFilter","Notifications","Preferences"];export{t as ColumnFilter,a as Default,o as Notifications,i as Preferences,me as __namedExportsOrder,ne as default};
