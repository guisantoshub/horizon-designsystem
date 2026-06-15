import{E as T}from"./EmptyState-D6Tal5x6.js";import"./jsx-runtime-D69pdnyW.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./button-DXL5AZ1l.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./inbox-D-ryp9s4.js";import"./createLucideIcon-D6DUjI5c.js";const _={title:"Design System / Componentes / EmptyState",component:T,parameters:{layout:"centered",docs:{description:{component:"Estado vazio exibido quando não há registros para mostrar. Inclui ícone, título, descrição e ação opcional. Usado em páginas de listagem quando o resultado está vazio (busca sem resultados, módulo em construção, etc.)."}}},tags:["autodocs"],argTypes:{title:{control:"text",description:"Título principal exibido abaixo do ícone."},description:{control:"text",description:"Texto explicativo secundário."},actionLabel:{control:"text",description:"Texto do botão de ação. Se ausente, o botão não é exibido."},onAction:{action:"onAction",description:"Callback disparado ao clicar no botão de ação."}}},o={name:"Padrão",args:{}},e={name:"Texto personalizado",args:{title:"Nenhuma boleta encontrada",description:"Ajuste os filtros ou crie uma nova boleta para começar."}},a={name:"Com botão de ação",args:{title:"Nenhum ativo cadastrado",description:"Adicione o primeiro ativo para começar a operar.",actionLabel:"Novo Ativo",onAction:()=>alert("Ação disparada")}},r={name:"Módulo em construção",args:{title:"Em construção",description:"Este módulo está sendo desenvolvido e estará disponível em breve."}},t={name:"Sem resultado de busca",args:{title:"Nenhum resultado encontrado",description:"Nenhum registro corresponde ao filtro aplicado. Tente buscar por outro termo."}},s={name:"Cadastro vazio — Clientes",args:{title:"Nenhum cliente cadastrado",description:"Cadastre o primeiro cliente para começar a gerenciar a carteira.",actionLabel:"Novo Cliente"}};var n,i,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Padrão",
  args: {}
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Texto personalizado",
  args: {
    title: "Nenhuma boleta encontrada",
    description: "Ajuste os filtros ou crie uma nova boleta para começar."
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Com botão de ação",
  args: {
    title: "Nenhum ativo cadastrado",
    description: "Adicione o primeiro ativo para começar a operar.",
    actionLabel: "Novo Ativo",
    onAction: () => alert("Ação disparada")
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,v,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Módulo em construção",
  args: {
    title: "Em construção",
    description: "Este módulo está sendo desenvolvido e estará disponível em breve."
  }
}`,...(C=(v=r.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,S,A;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Sem resultado de busca",
  args: {
    title: "Nenhum resultado encontrado",
    description: 'Nenhum registro corresponde ao filtro aplicado. Tente buscar por outro termo.'
  }
}`,...(A=(S=t.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var N,h,E;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Cadastro vazio — Clientes",
  args: {
    title: "Nenhum cliente cadastrado",
    description: "Cadastre o primeiro cliente para começar a gerenciar a carteira.",
    actionLabel: "Novo Cliente"
  }
}`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};const k=["Padrao","ComTextoCustom","ComAcao","ModuloEmConstrucao","SemResultadoBusca","SemClientes"];export{a as ComAcao,e as ComTextoCustom,r as ModuloEmConstrucao,o as Padrao,s as SemClientes,t as SemResultadoBusca,k as __namedExportsOrder,_ as default};
