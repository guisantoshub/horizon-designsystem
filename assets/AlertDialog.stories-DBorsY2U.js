import{j as r}from"./jsx-runtime-D69pdnyW.js";import{A as t,a as l,b as i,c as s,d as n,e as c,f as d,g,h as m}from"./alert-dialog-GruZcWLR.js";import{B as A,b as S}from"./button-DXL5AZ1l.js";import{T as F}from"./trash-2-Bg6OQw1i.js";import{T as H}from"./triangle-alert-DTLhCcVa.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-fnuAKoKB.js";import"./index-DzzMxk2y.js";import"./index-DyyxLNMW.js";import"./index-CHv7tnzT.js";import"./index-Bw6hP1Na.js";import"./index-KMH598xy.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-6LzbcUH8.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";import"./createLucideIcon-D6DUjI5c.js";const rr={title:"Design System / Componentes / AlertDialog",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## AlertDialog — Confirmação de ações destrutivas

Wrapper sobre **Radix AlertDialog**. Diferente do \`Dialog\` comum,
**bloqueia** a interação com o fundo e exige uma ação explícita
(confirmar ou cancelar). Use SEMPRE para ações irreversíveis:
exclusão de cliente, cancelamento de boleta, remoção de permissão.

### Composição
\`\`\`tsx
<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Excluir</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
      <AlertDialogDescription>Esta ação é irreversível.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Confirmar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`
        `}}}},e={name:"Excluir Cliente",render:()=>r.jsxs(t,{children:[r.jsx(l,{asChild:!0,children:r.jsxs(A,{variant:"destructive",children:[r.jsx(F,{className:"h-4 w-4 mr-2"}),"Excluir cliente"]})}),r.jsxs(i,{children:[r.jsxs(s,{children:[r.jsx(n,{children:"Excluir Carlos Silva?"}),r.jsxs(c,{children:["Esta ação é ",r.jsx("strong",{children:"irreversível"}),". Todas as boletas e contas associadas serão desvinculadas do cliente. Considere desativar em vez de excluir."]})]}),r.jsxs(d,{children:[r.jsx(g,{children:"Cancelar"}),r.jsx(m,{className:S({variant:"destructive"}),children:"Sim, excluir"})]})]})]})},a={name:"Cancelar Boleta",render:()=>r.jsxs(t,{children:[r.jsx(l,{asChild:!0,children:r.jsx(A,{variant:"outline",children:"Cancelar boleta BOL-1234"})}),r.jsxs(i,{children:[r.jsxs(s,{children:[r.jsxs(n,{className:"flex items-center gap-2",children:[r.jsx(H,{className:"h-5 w-5 text-warning"}),"Cancelar boleta?"]}),r.jsxs(c,{children:["A boleta ",r.jsx("strong",{children:"BOL-1234"})," (COMPRA · ITUB4 · 2.500) será marcada como cancelada e removida do workflow ativo. O Backoffice será notificado."]})]}),r.jsxs(d,{children:[r.jsx(g,{children:"Voltar"}),r.jsx(m,{className:S({variant:"destructive"}),children:"Confirmar cancelamento"})]})]})]})},o={name:"Confirmação Neutra",render:()=>r.jsxs(t,{children:[r.jsx(l,{asChild:!0,children:r.jsx(A,{children:"Avançar todas as boletas"})}),r.jsxs(i,{children:[r.jsxs(s,{children:[r.jsx(n,{children:"Avançar 12 boletas?"}),r.jsxs(c,{children:["Todas as boletas em ",r.jsx("strong",{children:"Em Execução"})," serão movidas para"," ",r.jsx("strong",{children:"Executado"}),". Esta ação pode ser revertida individualmente depois."]})]}),r.jsxs(d,{children:[r.jsx(g,{children:"Cancelar"}),r.jsx(m,{children:"Avançar"})]})]})]})};var D,p,u,x,C;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Excluir Cliente',
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="destructive">\r
          <Trash2 className="h-4 w-4 mr-2" />\r
          Excluir cliente\r
        </Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Excluir Carlos Silva?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Esta ação é <strong>irreversível</strong>. Todas as boletas e contas\r
            associadas serão desvinculadas do cliente. Considere desativar em vez\r
            de excluir.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancelar</AlertDialogCancel>\r
          <AlertDialogAction className={buttonVariants({
          variant: 'destructive'
        })}>\r
            Sim, excluir\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"Padrão — exclusão com confirmação.",...(C=(x=e.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var v,h,j,f,T;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Cancelar Boleta',
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button variant="outline">Cancelar boleta BOL-1234</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle className="flex items-center gap-2">\r
            <AlertTriangle className="h-5 w-5 text-warning" />\r
            Cancelar boleta?\r
          </AlertDialogTitle>\r
          <AlertDialogDescription>\r
            A boleta <strong>BOL-1234</strong> (COMPRA · ITUB4 · 2.500) será\r
            marcada como cancelada e removida do workflow ativo. O Backoffice\r
            será notificado.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Voltar</AlertDialogCancel>\r
          <AlertDialogAction className={buttonVariants({
          variant: 'destructive'
        })}>\r
            Confirmar cancelamento\r
          </AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source},description:{story:"Cancelamento de boleta — variação do padrão.",...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.description}}};var b,B,E,N,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Confirmação Neutra',
  render: () => <AlertDialog>\r
      <AlertDialogTrigger asChild>\r
        <Button>Avançar todas as boletas</Button>\r
      </AlertDialogTrigger>\r
      <AlertDialogContent>\r
        <AlertDialogHeader>\r
          <AlertDialogTitle>Avançar 12 boletas?</AlertDialogTitle>\r
          <AlertDialogDescription>\r
            Todas as boletas em <strong>Em Execução</strong> serão movidas para{' '}\r
            <strong>Executado</strong>. Esta ação pode ser revertida individualmente\r
            depois.\r
          </AlertDialogDescription>\r
        </AlertDialogHeader>\r
        <AlertDialogFooter>\r
          <AlertDialogCancel>Cancelar</AlertDialogCancel>\r
          <AlertDialogAction>Avançar</AlertDialogAction>\r
        </AlertDialogFooter>\r
      </AlertDialogContent>\r
    </AlertDialog>
}`,...(E=(B=o.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:"Sem ação destrutiva — confirmação positiva.",...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.description}}};const er=["Default","CancelarBoleta","ConfirmacaoNeutra"];export{a as CancelarBoleta,o as ConfirmacaoNeutra,e as Default,er as __namedExportsOrder,rr as default};
