import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as p}from"./iframe-CvSox_He.js";import{C as o}from"./ClienteForm-BVhR7mMz.js";import{B as m}from"./button-DXL5AZ1l.js";import"./preload-helper-C1FmrZbK.js";import"./sheet-KeAmVOii.js";import"./index-DyyxLNMW.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-Bw6hP1Na.js";import"./index-KMH598xy.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-6LzbcUH8.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";import"./x-C6od2E8Y.js";import"./createLucideIcon-D6DUjI5c.js";import"./scroll-area-D-U4oTEh.js";import"./index-BGqnW-RQ.js";import"./index-BdQq_4o_.js";import"./card-DXKYvUuL.js";import"./input-m_F3UOAC.js";import"./label-BS9NERQq.js";import"./select-HyD8fhl7.js";import"./index-T97G5T97.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-qqZAXNe6.js";import"./index-CSC2Jsb6.js";import"./chevron-down-BQorgLkq.js";import"./chevron-up-BLyKixcO.js";import"./check-DQZkpVpn.js";import"./separator-C1oynVjU.js";import"./index-7nB1DTGT.js";import"./CadastroBankerAssessor-DiPc0ysq.js";import"./TablePage-Cf7NRF17.js";import"./PageShell-BuZEhXZM.js";import"./FilterBar-BtqTOquD.js";import"./search-CWHFyfhP.js";import"./sliders-horizontal-D0ILQE3J.js";import"./DataTable-qoaO1F4u.js";import"./ThemeContext-C8a8j4GO.js";import"./badge-CUxrm4Aj.js";import"./table-pagination-DIwIGWs7.js";import"./ellipsis-CO1mTZ9z.js";import"./chevron-left-xs_4jhcg.js";import"./chevron-right-Dq1_yaRh.js";import"./tooltip-BkbByxSS.js";import"./alert-dialog-GruZcWLR.js";import"./masterData-D0aRazVO.js";import"./dialog-mpwK8JRG.js";import"./upload-CP0IXo_d.js";import"./file-spreadsheet-Cyr9-mj8.js";import"./download-B8CPmMcB.js";import"./plus-BG87GyKl.js";import"./pencil-Dx-FwIp3.js";import"./trash-2-Bg6OQw1i.js";import"./user-DRpv8ztC.js";import"./users-_ZCg9YNi.js";import"./phone-DwlUX-C-.js";import"./building-2-Cvc1PU0n.js";import"./save-hz2sr0fL.js";const ye={title:"Design System / Componentes / ClienteSheet",component:o,parameters:{layout:"fullscreen",docs:{description:{component:'Side Sheet lateral para criação e edição de clientes. Abre pela direita com `side="right"`, contém formulário completo com dados do cliente, grupo familiar, contato, endereço, instituições financeiras e relacionamento. Padrão reutilizável para todos os formulários de edição do sistema.'}}},tags:["autodocs"]},n={name:"Novo Cliente",render:()=>{const[r,t]=p.useState(!1);return e.jsxs("div",{className:"p-8 bg-background min-h-screen flex items-start gap-4",children:[e.jsx(m,{onClick:()=>t(!0),children:"Abrir formulário — Novo Cliente"}),e.jsx(o,{open:r,onOpenChange:t,clienteData:null})]})}},S={id:"1",nome:"Carlos Silva",cpfCnpj:"123.456.789-12",tipo:"PF",grupoFamiliar:"Família Silva",telefone:"(11) 98765-4321",email:"carlos.silva@email.com",assessor:"Ricardo Mendes",perfilRisco:"Moderado",status:!0,instituicoes:[{id:"1a",instituicao:"XP Investimentos",conta:"12345-6",tipoConta:"Investimento",consolida:!0,ativo:!0},{id:"1b",instituicao:"BTG Pactual",conta:"78901-2",tipoConta:"Corrente",consolida:!0,ativo:!0}]},i={name:"Edição de Cliente",render:()=>{const[r,t]=p.useState(!1);return e.jsxs("div",{className:"p-8 bg-background min-h-screen flex items-start gap-4",children:[e.jsx(m,{onClick:()=>t(!0),children:"Abrir formulário — Editar Carlos Silva"}),e.jsx(o,{open:r,onOpenChange:t,clienteData:S})]})}},j={id:"2",nome:"Tech Corp LTDA",cpfCnpj:"12.345.678/0001-89",tipo:"PJ",grupoFamiliar:"Hurricane",telefone:"(21) 3456-7890",email:"contato@techcorp.com.br",assessor:"Fernanda Costa",perfilRisco:"Arrojado",status:!0,instituicoes:[{id:"2a",instituicao:"Safra",conta:"55432-1",tipoConta:"Corrente",consolida:!0,ativo:!0}]},a={name:"Edição de Cliente PJ",render:()=>{const[r,t]=p.useState(!1);return e.jsxs("div",{className:"p-8 bg-background min-h-screen flex items-start gap-4",children:[e.jsx(m,{onClick:()=>t(!0),children:"Abrir formulário — Editar Tech Corp LTDA"}),e.jsx(o,{open:r,onOpenChange:t,clienteData:j})]})}},s={name:"Aberto por Padrão (visualização)",render:()=>{const[r,t]=p.useState(!0);return e.jsxs("div",{className:"bg-background min-h-screen",children:[e.jsx("div",{className:"p-8",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Conteúdo da página por trás do Sheet"})}),e.jsx(o,{open:r,onOpenChange:t,clienteData:S})]})}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Novo Cliente",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-8 bg-background min-h-screen flex items-start gap-4">\r
        <Button onClick={() => setOpen(true)}>Abrir formulário — Novo Cliente</Button>\r
        <ClienteForm open={open} onOpenChange={setOpen} clienteData={null} />\r
      </div>;
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,C,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Edição de Cliente",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-8 bg-background min-h-screen flex items-start gap-4">\r
        <Button onClick={() => setOpen(true)}>Abrir formulário — Editar Carlos Silva</Button>\r
        <ClienteForm open={open} onOpenChange={setOpen} clienteData={clienteExemplo} />\r
      </div>;
  }
}`,...(g=(C=i.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Edição de Cliente PJ",
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="p-8 bg-background min-h-screen flex items-start gap-4">\r
        <Button onClick={() => setOpen(true)}>Abrir formulário — Editar Tech Corp LTDA</Button>\r
        <ClienteForm open={open} onOpenChange={setOpen} clienteData={clientePJ} />\r
      </div>;
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,b,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Aberto por Padrão (visualização)",
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="bg-background min-h-screen">\r
        <div className="p-8">\r
          <p className="text-sm text-muted-foreground">\r
            Conteúdo da página por trás do Sheet\r
          </p>\r
        </div>\r
        <ClienteForm open={open} onOpenChange={setOpen} clienteData={clienteExemplo} />\r
      </div>;
  }
}`,...(O=(b=s.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};const Ie=["NovoCliente","EdicaoCliente","EdicaoClientePJ","AbertoPorPadrao"];export{s as AbertoPorPadrao,i as EdicaoCliente,a as EdicaoClientePJ,n as NovoCliente,Ie as __namedExportsOrder,ye as default};
