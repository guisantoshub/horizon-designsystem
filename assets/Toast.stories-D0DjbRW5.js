import{j as e}from"./jsx-runtime-D69pdnyW.js";import{B as s}from"./button-DXL5AZ1l.js";import{T as j}from"./sonner-DQmngBsu.js";import{u as r}from"./index-7nB1DTGT.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./index-DNOJwA3A.js";const y={title:"Design System / Componentes / Toast (Sonner)",parameters:{layout:"centered",docs:{description:{component:"Notificações temporárias (toasts) via [Sonner](https://sonner.emilkowal.ski/). Usar para feedback de ação de curta duração — sucesso, erro, info. Para mensagens persistentes inline use `Alert`. Há **uma única `<Toaster />`** montada na raiz do app (`App.tsx`); aqui ela é incluída para demonstração isolada."}}},tags:["autodocs"],decorators:[o=>e.jsxs(e.Fragment,{children:[e.jsx(o,{}),e.jsx(j,{})]})]},n={render:()=>e.jsx(s,{onClick:()=>r.success("Boleta executada com sucesso"),children:"Disparar sucesso"})},t={render:()=>e.jsx(s,{variant:"destructive",onClick:()=>r.error("Falha ao avançar boleta — verifique a boleta pai"),children:"Disparar erro"})},i={render:()=>e.jsx(s,{variant:"outline",onClick:()=>r.info("Sincronização com B3 em andamento..."),children:"Disparar info"})},c={name:"Com ação (undo)",render:()=>e.jsx(s,{variant:"outline",onClick:()=>r("Boleta movida para Em Execução",{action:{label:"Desfazer",onClick:()=>r.message("Movimentação revertida")}}),children:"Disparar com ação"})},a={name:"Promise (loading + resolução)",render:()=>e.jsx(s,{onClick:()=>r.promise(new a(o=>setTimeout(()=>o("Replicação concluída"),1500)),{loading:"Replicando boleta em custódia...",success:o=>o,error:"Falha na replicação"}),children:"Disparar promise"})};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Button onClick={() => toast.success("Boleta executada com sucesso")}>\r
      Disparar sucesso\r
    </Button>
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,p,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Button variant="destructive" onClick={() => toast.error("Falha ao avançar boleta — verifique a boleta pai")}>\r
      Disparar erro\r
    </Button>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,g,B;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast.info("Sincronização com B3 em andamento...")}>\r
      Disparar info\r
    </Button>
}`,...(B=(g=i.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var x,C,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Com ação (undo)",
  render: () => <Button variant="outline" onClick={() => toast("Boleta movida para Em Execução", {
    action: {
      label: "Desfazer",
      onClick: () => toast.message("Movimentação revertida")
    }
  })}>\r
      Disparar com ação\r
    </Button>
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,S,h;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Promise (loading + resolução)",
  render: () => <Button onClick={() => toast.promise(new Promise<string>(resolve => setTimeout(() => resolve("Replicação concluída"), 1500)), {
    loading: "Replicando boleta em custódia...",
    success: msg => msg,
    error: "Falha na replicação"
  })}>\r
      Disparar promise\r
    </Button>
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const I=["Sucesso","Erro","Info","ComAcao","Promise"];export{c as ComAcao,t as Erro,i as Info,a as Promise,n as Sucesso,I as __namedExportsOrder,y as default};
