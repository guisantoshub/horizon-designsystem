import{j as e}from"./jsx-runtime-D69pdnyW.js";import{S as d,d as c,a as h,b as m,c as p,e as u,f as q,g as S}from"./sheet-KeAmVOii.js";import{B as r}from"./button-DXL5AZ1l.js";import{I as l}from"./input-m_F3UOAC.js";import{L as n}from"./label-BS9NERQq.js";import{U as R}from"./user-DRpv8ztC.js";import{S as V}from"./settings-DXhjKUDw.js";import{F as U}from"./filter-CfrhGbtB.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DyyxLNMW.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-Bw6hP1Na.js";import"./index-KMH598xy.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-6LzbcUH8.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./x-C6od2E8Y.js";import"./createLucideIcon-D6DUjI5c.js";const me={title:"Design System / Componentes / Sheet",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Sheet — Painel deslizante (drawer)

Wrapper sobre **Radix Dialog** apresentado como painel lateral. Ideal
para edição contextual de registros (ex.: ClienteSheet), filtros
avançados, ou menus longos. Suporta 4 lados: \`top | right | bottom | left\`.

### Composição
\`\`\`tsx
<Sheet>
  <SheetTrigger asChild><Button>Abrir</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>…</SheetTitle>
      <SheetDescription>…</SheetDescription>
    </SheetHeader>
    {/* conteúdo */}
    <SheetFooter>
      <SheetClose asChild><Button>Fechar</Button></SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
\`\`\`
        `}}}},a={name:"Padrão (Direita)",render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(r,{variant:"outline",children:[e.jsx(R,{className:"h-4 w-4 mr-2"}),"Editar perfil"]})}),e.jsxs(h,{side:"right",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Editar perfil"}),e.jsx(u,{children:"Faça alterações em suas informações. Clique em salvar quando terminar."})]}),e.jsxs("div",{className:"grid gap-4 py-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"nome",children:"Nome"}),e.jsx(l,{id:"nome",defaultValue:"Carlos Silva"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"email",children:"E-mail"}),e.jsx(l,{id:"email",type:"email",defaultValue:"carlos@famicapital.com.br"})]})]}),e.jsxs(q,{children:[e.jsx(S,{asChild:!0,children:e.jsx(r,{variant:"ghost",children:"Cancelar"})}),e.jsx(S,{asChild:!0,children:e.jsx(r,{children:"Salvar alterações"})})]})]})]})},i={name:"Da Esquerda",render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(r,{variant:"outline",children:[e.jsx(V,{className:"h-4 w-4 mr-2"}),"Configurações"]})}),e.jsxs(h,{side:"left",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Configurações"}),e.jsx(u,{children:"Ajustes gerais do sistema e preferências do usuário."})]}),e.jsx("nav",{className:"grid gap-1 py-6 text-sm",children:["Conta","Notificações","Aparência","Privacidade","Integrações"].map(t=>e.jsx("button",{className:"flex items-center px-3 py-2 rounded-md hover:bg-muted text-foreground text-left",children:t},t))})]})]})},s={name:"Painel de Filtros",render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsxs(r,{variant:"outline",children:[e.jsx(U,{className:"h-4 w-4 mr-2"}),"Filtros avançados"]})}),e.jsxs(h,{side:"right",className:"w-[420px]",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Filtrar boletas"}),e.jsx(u,{children:"Refine os resultados por critérios específicos."})]}),e.jsxs("div",{className:"grid gap-4 py-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"ativo",children:"Ativo"}),e.jsx(l,{id:"ativo",placeholder:"Ex.: PETR4"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"cliente",children:"Cliente"}),e.jsx(l,{id:"cliente",placeholder:"Nome do cliente final"})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsx(n,{htmlFor:"periodo",children:"Período"}),e.jsx(l,{id:"periodo",type:"date"})]})]}),e.jsxs(q,{children:[e.jsx(r,{variant:"ghost",children:"Limpar"}),e.jsx(S,{asChild:!0,children:e.jsx(r,{children:"Aplicar"})})]})]})]})},o={name:"Do Topo",render:()=>e.jsxs(d,{children:[e.jsx(c,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Abrir do topo"})}),e.jsxs(h,{side:"top",children:[e.jsxs(m,{children:[e.jsx(p,{children:"Atalhos rápidos"}),e.jsx(u,{children:"Acesse ações comuns sem sair do contexto."})]}),e.jsx("div",{className:"grid grid-cols-3 gap-3 py-6",children:["Nova Boleta","Novo Cliente","Importar CSV"].map(t=>e.jsx(r,{variant:"outline",children:t},t))})]})]})};var g,x,v,j,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Padrão (Direita)',
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">\r
          <User className="h-4 w-4 mr-2" />\r
          Editar perfil\r
        </Button>\r
      </SheetTrigger>\r
      <SheetContent side="right">\r
        <SheetHeader>\r
          <SheetTitle>Editar perfil</SheetTitle>\r
          <SheetDescription>\r
            Faça alterações em suas informações. Clique em salvar quando\r
            terminar.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <div className="grid gap-4 py-6">\r
          <div className="grid gap-2">\r
            <Label htmlFor="nome">Nome</Label>\r
            <Input id="nome" defaultValue="Carlos Silva" />\r
          </div>\r
          <div className="grid gap-2">\r
            <Label htmlFor="email">E-mail</Label>\r
            <Input id="email" type="email" defaultValue="carlos@famicapital.com.br" />\r
          </div>\r
        </div>\r
        <SheetFooter>\r
          <SheetClose asChild>\r
            <Button variant="ghost">Cancelar</Button>\r
          </SheetClose>\r
          <SheetClose asChild>\r
            <Button>Salvar alterações</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Padrão — painel da direita com formulário simples.",...(C=(j=a.parameters)==null?void 0:j.docs)==null?void 0:C.description}}};var f,N,F,b,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Da Esquerda',
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">\r
          <Settings className="h-4 w-4 mr-2" />\r
          Configurações\r
        </Button>\r
      </SheetTrigger>\r
      <SheetContent side="left">\r
        <SheetHeader>\r
          <SheetTitle>Configurações</SheetTitle>\r
          <SheetDescription>\r
            Ajustes gerais do sistema e preferências do usuário.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <nav className="grid gap-1 py-6 text-sm">\r
          {['Conta', 'Notificações', 'Aparência', 'Privacidade', 'Integrações'].map(item => <button key={item} className="flex items-center px-3 py-2 rounded-md hover:bg-muted text-foreground text-left">\r
                {item}\r
              </button>)}\r
        </nav>\r
      </SheetContent>\r
    </Sheet>
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Lado esquerdo — útil para menus de navegação ou settings.",...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var B,y,D,L,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Painel de Filtros',
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">\r
          <Filter className="h-4 w-4 mr-2" />\r
          Filtros avançados\r
        </Button>\r
      </SheetTrigger>\r
      <SheetContent side="right" className="w-[420px]">\r
        <SheetHeader>\r
          <SheetTitle>Filtrar boletas</SheetTitle>\r
          <SheetDescription>\r
            Refine os resultados por critérios específicos.\r
          </SheetDescription>\r
        </SheetHeader>\r
        <div className="grid gap-4 py-6">\r
          <div className="grid gap-2">\r
            <Label htmlFor="ativo">Ativo</Label>\r
            <Input id="ativo" placeholder="Ex.: PETR4" />\r
          </div>\r
          <div className="grid gap-2">\r
            <Label htmlFor="cliente">Cliente</Label>\r
            <Input id="cliente" placeholder="Nome do cliente final" />\r
          </div>\r
          <div className="grid gap-2">\r
            <Label htmlFor="periodo">Período</Label>\r
            <Input id="periodo" type="date" />\r
          </div>\r
        </div>\r
        <SheetFooter>\r
          <Button variant="ghost">Limpar</Button>\r
          <SheetClose asChild>\r
            <Button>Aplicar</Button>\r
          </SheetClose>\r
        </SheetFooter>\r
      </SheetContent>\r
    </Sheet>
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source},description:{story:"Filtros avançados — caso comum de uso em telas com tabela.",...(A=(L=s.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var E,P,I,H,w;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Do Topo',
  render: () => <Sheet>\r
      <SheetTrigger asChild>\r
        <Button variant="outline">Abrir do topo</Button>\r
      </SheetTrigger>\r
      <SheetContent side="top">\r
        <SheetHeader>\r
          <SheetTitle>Atalhos rápidos</SheetTitle>\r
          <SheetDescription>Acesse ações comuns sem sair do contexto.</SheetDescription>\r
        </SheetHeader>\r
        <div className="grid grid-cols-3 gap-3 py-6">\r
          {['Nova Boleta', 'Novo Cliente', 'Importar CSV'].map(label => <Button key={label} variant="outline">\r
              {label}\r
            </Button>)}\r
        </div>\r
      </SheetContent>\r
    </Sheet>
}`,...(I=(P=o.parameters)==null?void 0:P.docs)==null?void 0:I.source},description:{story:"Top — para anúncios ou ações rápidas.",...(w=(H=o.parameters)==null?void 0:H.docs)==null?void 0:w.description}}};const pe=["Default","FromLeft","FilterPanel","FromTop"];export{a as Default,s as FilterPanel,i as FromLeft,o as FromTop,pe as __namedExportsOrder,me as default};
