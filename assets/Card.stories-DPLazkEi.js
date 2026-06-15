import{j as e}from"./jsx-runtime-D69pdnyW.js";import{C as s,a as y,b as w,d as T,c as i,e as S}from"./card-DXKYvUuL.js";import{B as n}from"./button-DXL5AZ1l.js";import{A as d}from"./activity-BSZF545S.js";import{T as E}from"./trending-up-D35GfjYV.js";import{c as F}from"./createLucideIcon-D6DUjI5c.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./utils-CytzSlOG.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=F("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),W={title:"Design System / Componentes / Card",parameters:{layout:"centered"}},r={render:()=>e.jsxs(s,{className:"w-80",children:[e.jsxs(y,{children:[e.jsx(w,{children:"Título do Card"}),e.jsx(T,{children:"Descrição opcional com contexto adicional."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Conteúdo do card vai aqui. Pode ser qualquer elemento."})})]})},a={name:"KPI / Stats Card",render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4 p-4 bg-background rounded-xl",children:[{label:"Boletas Abertas",value:"342",delta:"+5 hoje",trend:"up",icon:d},{label:"Volume Boletado",value:"R$ 45,2M",delta:"+8,3% vs mês",trend:"up",icon:E},{label:"Financeiro Total",value:"R$ 1,8M",delta:"-2,1% vs meta",trend:"down",icon:q},{label:"Pendentes",value:"18",delta:"3 aguardando",trend:"neutral",icon:d}].map(({label:l,value:B,delta:D,trend:c,icon:A})=>e.jsxs(s,{className:"p-5",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-xs font-medium text-muted-foreground",children:l}),e.jsx(A,{className:"h-4 w-4 text-muted-foreground","aria-hidden":"true"})]}),e.jsx("div",{className:"text-2xl font-bold font-heading text-foreground",children:B}),e.jsx("p",{className:`text-xs mt-1 ${c==="up"?"text-green-600":c==="down"?"text-red-600":"text-muted-foreground"}`,children:D})]},l))})},t={name:"Com Footer e Ação",render:()=>e.jsxs(s,{className:"w-80",children:[e.jsxs(y,{children:[e.jsx(w,{children:"Confirmar ação"}),e.jsx(T,{children:"Esta ação não pode ser desfeita."})]}),e.jsx(i,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Tem certeza que deseja excluir este item? Todos os dados associados serão removidos permanentemente."})}),e.jsxs(S,{className:"flex justify-end gap-2",children:[e.jsx(n,{variant:"outline",children:"Cancelar"}),e.jsx(n,{variant:"destructive",children:"Excluir"})]})]})},o={name:"Empty State",render:()=>e.jsx(s,{className:"w-96",children:e.jsxs(i,{className:"flex flex-col items-center justify-center py-16 text-center",children:[e.jsx(d,{className:"h-12 w-12 text-muted-foreground mb-4","aria-hidden":"true"}),e.jsx("h3",{className:"text-lg font-medium text-foreground mb-1",children:"Nenhuma boleta encontrada"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:"Ainda não há boletas criadas. Comece criando uma nova."}),e.jsxs(n,{children:[e.jsx("span",{className:"mr-2",children:"+"})," Nova Boleta"]})]})})};var m,u,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Card className="w-80">\r
      <CardHeader>\r
        <CardTitle>Título do Card</CardTitle>\r
        <CardDescription>Descrição opcional com contexto adicional.</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">Conteúdo do card vai aqui. Pode ser qualquer elemento.</p>\r
      </CardContent>\r
    </Card>
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var p,C,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'KPI / Stats Card',
  render: () => <div className="grid grid-cols-2 gap-4 p-4 bg-background rounded-xl">\r
      {[{
      label: 'Boletas Abertas',
      value: '342',
      delta: '+5 hoje',
      trend: 'up',
      icon: Activity
    }, {
      label: 'Volume Boletado',
      value: 'R$ 45,2M',
      delta: '+8,3% vs mês',
      trend: 'up',
      icon: TrendingUp
    }, {
      label: 'Financeiro Total',
      value: 'R$ 1,8M',
      delta: '-2,1% vs meta',
      trend: 'down',
      icon: TrendingDown
    }, {
      label: 'Pendentes',
      value: '18',
      delta: '3 aguardando',
      trend: 'neutral',
      icon: Activity
    }].map(({
      label,
      value,
      delta,
      trend,
      icon: Icon
    }) => <Card key={label} className="p-5">\r
          <div className="flex items-center justify-between mb-3">\r
            <span className="text-xs font-medium text-muted-foreground">{label}</span>\r
            <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />\r
          </div>\r
          <div className="text-2xl font-bold font-heading text-foreground">{value}</div>\r
          <p className={\`text-xs mt-1 \${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-muted-foreground'}\`}>\r
            {delta}\r
          </p>\r
        </Card>)}\r
    </div>
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var g,h,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Com Footer e Ação',
  render: () => <Card className="w-80">\r
      <CardHeader>\r
        <CardTitle>Confirmar ação</CardTitle>\r
        <CardDescription>Esta ação não pode ser desfeita.</CardDescription>\r
      </CardHeader>\r
      <CardContent>\r
        <p className="text-sm text-muted-foreground">Tem certeza que deseja excluir este item? Todos os dados associados serão removidos permanentemente.</p>\r
      </CardContent>\r
      <CardFooter className="flex justify-end gap-2">\r
        <Button variant="outline">Cancelar</Button>\r
        <Button variant="destructive">Excluir</Button>\r
      </CardFooter>\r
    </Card>
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var v,N,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Empty State',
  render: () => <Card className="w-96">\r
      <CardContent className="flex flex-col items-center justify-center py-16 text-center">\r
        <Activity className="h-12 w-12 text-muted-foreground mb-4" aria-hidden="true" />\r
        <h3 className="text-lg font-medium text-foreground mb-1">Nenhuma boleta encontrada</h3>\r
        <p className="text-sm text-muted-foreground mb-6">Ainda não há boletas criadas. Comece criando uma nova.</p>\r
        <Button>\r
          <span className="mr-2">+</span> Nova Boleta\r
        </Button>\r
      </CardContent>\r
    </Card>
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const _=["Default","KPI","WithFooter","EmptyState"];export{r as Default,o as EmptyState,a as KPI,t as WithFooter,_ as __namedExportsOrder,W as default};
