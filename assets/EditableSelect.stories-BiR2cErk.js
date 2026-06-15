import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as o}from"./iframe-CvSox_He.js";import{u as R}from"./index-7nB1DTGT.js";import{P as ue,a as xe,b as ge}from"./popover-B-U2tnIT.js";import{A as fe,b as he,c as be,d as ve,e as Se,f as Ne,g as Ce,h as ye}from"./alert-dialog-GruZcWLR.js";import{I as _}from"./input-m_F3UOAC.js";import{B as J}from"./button-DXL5AZ1l.js";import{B as Le}from"./badge-CUxrm4Aj.js";import{C as we}from"./checkbox--P6nYUhC.js";import{S as Te}from"./switch-Dx3PtuCi.js";import{L as j}from"./label-BS9NERQq.js";import{c as q}from"./utils-CytzSlOG.js";import{C as De}from"./chevron-down-BQorgLkq.js";import{C as Ee}from"./check-DQZkpVpn.js";import{T as Me}from"./trash-2-Bg6OQw1i.js";import{P as G}from"./plus-BG87GyKl.js";import{X as Ae}from"./x-C6od2E8Y.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNOJwA3A.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-KMH598xy.js";import"./index-DyyxLNMW.js";import"./index-BwobEAja.js";import"./index-qqZAXNe6.js";import"./createLucideIcon-D6DUjI5c.js";function je(a,t){return t==="upper"?a.toUpperCase():t==="lower"?a.toLowerCase():t==="title"?a.split(/\s+/).map(s=>s&&s[0].toUpperCase()+s.slice(1).toLowerCase()).join(" "):a}function Oe({options:a,selected:t,onPick:s,onAskDelete:c,multiselect:r,creating:d,setCreating:m,draft:b,setDraft:C,onCreateAttempt:y,createLabel:L,searchable:v,searchValue:n,onSearchChange:p,createFlagLabel:f,createFlag:E,onCreateFlagChange:u}){const w=i=>{i.key==="Enter"?(i.preventDefault(),y()):i.key==="Escape"&&(i.preventDefault(),m(!1),C(""))},S=v&&(n!=null&&n.trim())?a.filter(i=>i.toLowerCase().includes(n.trim().toLowerCase())):a;return e.jsxs(e.Fragment,{children:[v&&e.jsx("div",{className:"p-2 border-b border-border",children:e.jsx(_,{value:n??"",onChange:i=>p==null?void 0:p(i.target.value),placeholder:"Buscar…",className:"h-8 text-sm",autoFocus:!0})}),S.length>0?e.jsx("ul",{className:"max-h-60 overflow-auto py-1",children:S.map(i=>{const x=t(i);return e.jsx("li",{children:e.jsxs("div",{role:"option","aria-selected":x,className:q("group flex items-center justify-between gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",x?"bg-primary text-primary-foreground":"hover:bg-muted"),onClick:()=>s(i),children:[e.jsxs("span",{className:"flex items-center gap-2 flex-1 min-w-0",children:[r&&e.jsx(we,{checked:x,className:q("pointer-events-none shrink-0",x&&"border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=checked]:text-primary"),"aria-hidden":!0}),e.jsx("span",{className:"truncate",children:i})]}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[!r&&x&&e.jsx(Ee,{className:"h-4 w-4"}),e.jsx("button",{type:"button","aria-label":`Excluir ${i}`,title:`Excluir ${i}`,onClick:M=>{M.stopPropagation(),c(i)},className:q("h-6 w-6 inline-flex items-center justify-center rounded-md transition-opacity","opacity-0 group-hover:opacity-100 focus-visible:opacity-100","focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",x?"hover:bg-primary-foreground/20 text-primary-foreground":"hover:bg-destructive/10 text-destructive"),children:e.jsx(Me,{className:"h-3.5 w-3.5"})})]})]})},i)})}):e.jsx("p",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:v&&(n!=null&&n.trim())?"Nenhum resultado":"Nenhum item cadastrado"}),e.jsx("div",{className:"border-t border-border bg-muted/30",children:d?e.jsxs("div",{className:"p-2 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(_,{value:b,onChange:i=>C(i.target.value),onKeyDown:w,placeholder:"Digite o nome…",autoFocus:!0,className:"h-8 text-sm flex-1"}),e.jsx(J,{type:"button",size:"sm",className:"h-8 px-2",onClick:y,"aria-label":"Adicionar",children:e.jsx(G,{className:"h-3.5 w-3.5"})}),e.jsx(J,{type:"button",variant:"ghost",size:"sm",className:"h-8 w-8 p-0",onClick:()=>{m(!1),C(""),u==null||u(!1)},"aria-label":"Cancelar",children:e.jsx(Ae,{className:"h-3.5 w-3.5"})})]}),f&&e.jsxs("div",{className:"flex items-center justify-between gap-2 rounded-md border border-border bg-background px-2.5 py-1.5",children:[e.jsx(j,{className:"font-body text-xs cursor-pointer",children:f}),e.jsx(Te,{checked:!!E,onCheckedChange:i=>u==null?void 0:u(i)})]})]}):e.jsxs("button",{type:"button",onClick:()=>m(!0),className:"w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left text-primary font-heading font-semibold hover:bg-primary/10 transition-colors",children:[e.jsx(G,{className:"h-4 w-4"}),L]})})]})}const $=o.forwardRef(({disabled:a,className:t,children:s,...c},r)=>e.jsxs("button",{ref:r,type:"button",disabled:a,className:q("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background text-foreground px-3 py-2 text-sm","ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50","[&>span]:line-clamp-1",t),...c,children:[s,e.jsx(De,{className:"h-4 w-4 opacity-50 shrink-0 ml-2"})]}));$.displayName="EditableSelectTrigger";function O({options:a,value:t,onValueChange:s,onCreateOption:c,onDeleteOption:r,placeholder:d="Selecione…",createLabel:m="Criar novo",itemLabel:b="item",disabled:C,className:y,createCase:L="preserve",searchable:v,createFlagLabel:n}){const[p,f]=o.useState(!1),[E,u]=o.useState(!1),[w,S]=o.useState(""),[i,x]=o.useState(!1),[M,A]=o.useState(""),[g,T]=o.useState(null),U=()=>{const h=w.trim();if(!h)return;const D=je(h,L);if(a.some(l=>l.toLowerCase()===D.toLowerCase())){R.error(`"${D}" já existe na lista.`);return}c(D,i),s(D),S(""),x(!1),u(!1)},z=()=>{g&&(r(g),t===g&&s(""),R.success(`"${g}" removido com sucesso.`),T(null))};return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{open:p,onOpenChange:h=>{f(h),h||(u(!1),S(""),x(!1),A(""))},children:[e.jsx(xe,{asChild:!0,children:e.jsx($,{disabled:C,className:y,role:"combobox","aria-expanded":p,"aria-haspopup":"listbox",children:e.jsx("span",{className:t?"":"text-muted-foreground",children:t||d})})}),e.jsx(ge,{className:"p-0 w-[--radix-popover-trigger-width]",align:"start",children:e.jsx(Oe,{options:a,selected:h=>h===t,onPick:h=>{s(h),f(!1)},onAskDelete:T,multiselect:!1,creating:E,setCreating:u,draft:w,setDraft:S,onCreateAttempt:U,createLabel:m,searchable:v,searchValue:M,onSearchChange:A,createFlagLabel:n,createFlag:i,onCreateFlagChange:x})})]}),e.jsx(fe,{open:!!g,onOpenChange:h=>{h||T(null)},children:e.jsxs(he,{children:[e.jsxs(be,{children:[e.jsxs(ve,{className:"font-heading",children:["Excluir ",b,"?"]}),e.jsxs(Se,{children:["Tem certeza que deseja excluir"," ",e.jsxs("span",{className:"font-semibold text-foreground",children:['"',g,'"']})," ","da lista de ",b,"s? Esta ação não pode ser desfeita."]})]}),e.jsxs(Ne,{children:[e.jsx(Ce,{children:"Não"}),e.jsx(ye,{onClick:z,className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sim, excluir"})]})]})})]})}function Y({options:a,values:t,onChange:s,onCreateOption:c,onDeleteOption:r,placeholder:d="Selecione um ou mais",createLabel:m="Criar novo",itemLabel:b="item",disabled:C,className:y,createCase:L="preserve",searchable:v,createFlagLabel:n}){const[p,f]=o.useState(!1),[E,u]=o.useState(!1),[w,S]=o.useState(""),[i,x]=o.useState(!1),[M,A]=o.useState(""),[g,T]=o.useState(null),U=l=>{t.includes(l)?s(t.filter(N=>N!==l)):s([...t,l])},z=(l,N)=>{N.stopPropagation(),s(t.filter(Q=>Q!==l))},h=()=>{const l=w.trim();if(!l)return;const N=je(l,L);if(a.some(Q=>Q.toLowerCase()===N.toLowerCase())){R.error(`"${N}" já existe na lista.`);return}c(N,i),s([...t,N]),S(""),x(!1),u(!1)},D=()=>{g&&(r(g),t.includes(g)&&s(t.filter(l=>l!==g)),R.success(`"${g}" removido com sucesso.`),T(null))};return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{open:p,onOpenChange:l=>{f(l),l||(u(!1),S(""),x(!1),A(""))},children:[e.jsx(xe,{asChild:!0,children:e.jsx($,{disabled:C,className:q(t.length>0&&"h-auto min-h-10 py-1.5",y),role:"combobox","aria-expanded":p,"aria-haspopup":"listbox",children:t.length===0?e.jsx("span",{className:"text-muted-foreground",children:d}):e.jsx("div",{className:"flex flex-wrap items-center gap-1 py-0.5",children:t.map(l=>e.jsxs(Le,{variant:"secondary",className:"font-body text-xs gap-1 pr-1",children:[l,e.jsx("span",{role:"button",tabIndex:-1,onClick:N=>z(l,N),className:"rounded-sm hover:bg-muted-foreground/20 px-0.5 cursor-pointer text-muted-foreground hover:text-foreground","aria-label":`Remover ${l}`,children:"×"})]},l))})})}),e.jsx(ge,{className:"p-0 w-[--radix-popover-trigger-width]",align:"start",children:e.jsx(Oe,{options:a,selected:l=>t.includes(l),onPick:U,onAskDelete:T,multiselect:!0,creating:E,setCreating:u,draft:w,setDraft:S,onCreateAttempt:h,createLabel:m,searchable:v,searchValue:M,onSearchChange:A,createFlagLabel:n,createFlag:i,onCreateFlagChange:x})})]}),e.jsx(fe,{open:!!g,onOpenChange:l=>{l||T(null)},children:e.jsxs(he,{children:[e.jsxs(be,{children:[e.jsxs(ve,{className:"font-heading",children:["Excluir ",b,"?"]}),e.jsxs(Se,{children:["Tem certeza que deseja excluir"," ",e.jsxs("span",{className:"font-semibold text-foreground",children:['"',g,'"']})," ","da lista de ",b,"s? Esta ação não pode ser desfeita."]})]}),e.jsxs(Ne,{children:[e.jsx(Ce,{children:"Não"}),e.jsx(ye,{onClick:D,className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Sim, excluir"})]})]})})]})}O.__docgenInfo={description:"",methods:[],displayName:"EditableSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onCreateOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string, flag?: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"boolean"},name:"flag"}],return:{name:"void"}}},description:""},onDeleteOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Selecione…"',computed:!1}},createLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Criar novo"',computed:!1}},itemLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"item"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},createCase:{required:!1,tsType:{name:"union",raw:'"upper" | "lower" | "title" | "preserve"',elements:[{name:"literal",value:'"upper"'},{name:"literal",value:'"lower"'},{name:"literal",value:'"title"'},{name:"literal",value:'"preserve"'}]},description:'Capitalização aplicada ao criar item (default: "preserve").',defaultValue:{value:'"preserve"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Quando true, exibe um campo de busca no topo do popover."},createFlagLabel:{required:!1,tsType:{name:"string"},description:"Quando definido, exibe um switch ao lado do input de criação com este label.\nO estado do switch é passado como segundo argumento de `onCreateOption`."},value:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};Y.__docgenInfo={description:"",methods:[],displayName:"EditableMultiSelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onCreateOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string, flag?: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"boolean"},name:"flag"}],return:{name:"void"}}},description:""},onDeleteOption:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Selecione um ou mais"',computed:!1}},createLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Criar novo"',computed:!1}},itemLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"item"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},createCase:{required:!1,tsType:{name:"union",raw:'"upper" | "lower" | "title" | "preserve"',elements:[{name:"literal",value:'"upper"'},{name:"literal",value:'"lower"'},{name:"literal",value:'"title"'},{name:"literal",value:'"preserve"'}]},description:'Capitalização aplicada ao criar item (default: "preserve").',defaultValue:{value:'"preserve"',computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Quando true, exibe um campo de busca no topo do popover."},createFlagLabel:{required:!1,tsType:{name:"string"},description:"Quando definido, exibe um switch ao lado do input de criação com este label.\nO estado do switch é passado como segundo argumento de `onCreateOption`."},values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"next"}],return:{name:"void"}}},description:""}}};const xt={title:"Design System / Componentes / EditableSelect",component:O,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## EditableSelect — Dropdown com criação e exclusão de itens

Variante de Select inspirada no padrão usado em **"Grupo Familiar"** do
cadastro de clientes. Combina:

1. 📋 **Lista de opções** — clicável para selecionar
2. 🗑️ **Trash on hover** — cada item revela botão de excluir, com **AlertDialog** de confirmação
3. ➕ **+ Criar novo X** — bottom row que vira input inline ao clicar (Enter para confirmar, Esc para cancelar)

### Onde é usado
Aplicado em todos os 7 dropdowns da tela **Novo Ativo**:
\`Tipo · Moeda · Classe · Subclasse · Mercados · Emissor · Indexador\`.

### Variantes
- **\`EditableSelect\`** — single value (padrão)
- **\`EditableMultiSelect\`** — múltiplos valores (chips removíveis no trigger)

### Uso básico
\`\`\`tsx
const [tipo, setTipo] = useState('');
const [tipos, setTipos] = useState(['Ação', 'FII', 'BDR']);

<EditableSelect
  options={tipos}
  value={tipo}
  onValueChange={setTipo}
  onCreateOption={(name) => setTipos((p) => [...p, name])}
  onDeleteOption={(name) => setTipos((p) => p.filter((x) => x !== name))}
  placeholder="Selecione o tipo"
  createLabel="+ Criar novo tipo"
  itemLabel="tipo"
/>
\`\`\`

### Props comuns

| Prop | Tipo | Descrição |
|------|------|-----------|
| \`options\` | \`string[]\` | Lista atual de opções |
| \`onCreateOption\` | \`(name: string) => void\` | Chamado quando o usuário cria um item novo (pai persiste) |
| \`onDeleteOption\` | \`(name: string) => void\` | Chamado **após** confirmação do AlertDialog |
| \`createLabel\` | \`string\` | Texto do botão de criação (ex.: "Criar nova classe") — o ícone \`+\` já é renderizado, **não inclua** "+" no texto |
| \`itemLabel\` | \`string\` | Singular usado no diálogo ("Excluir <itemLabel> X?") |
| \`createCase\` | \`'upper' \\| 'lower' \\| 'title' \\| 'preserve'\` | Capitalização aplicada ao criar |

### Acessibilidade
- Trigger com \`role="combobox"\`, \`aria-expanded\`, \`aria-haspopup="listbox"\`
- Itens da lista com \`role="option"\` e \`aria-selected\`
- Botões de excluir com \`aria-label\` e \`title\` descritivos
- Esc fecha o input de criação · Enter confirma
        `}}}},B={name:"Single — Tipo de Ativo",render:()=>{const[a,t]=o.useState(""),[s,c]=o.useState(["Ação","Fundo","FII","Renda Fixa","Tesouro Direto","ETF","BDR","Cripto"]);return e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsxs(j,{className:"font-heading text-sm",children:["Tipo ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(O,{options:s,value:a,onValueChange:t,onCreateOption:r=>c(d=>[...d,r]),onDeleteOption:r=>c(d=>d.filter(m=>m!==r)),placeholder:"Selecione o tipo",createLabel:"Criar novo tipo",itemLabel:"tipo"}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Selecionado: ",e.jsx("code",{className:"text-primary",children:a||"—"})]})]})}},k={name:"Single — Moeda (uppercase)",render:()=>{const[a,t]=o.useState(""),[s,c]=o.useState(["BRL","USD","EUR","GBP","JPY","CHF"]);return e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsxs(j,{className:"font-heading text-sm",children:["Moeda ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(O,{options:s,value:a,onValueChange:t,onCreateOption:r=>c(d=>[...d,r]),onDeleteOption:r=>c(d=>d.filter(m=>m!==r)),placeholder:"Selecione a moeda",createLabel:"Criar nova moeda",itemLabel:"moeda",createCase:"upper"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Itens criados são automaticamente convertidos para MAIÚSCULAS."})]})}},V={name:"Multi — Mercados",render:()=>{const[a,t]=o.useState([]),[s,c]=o.useState(["B3","Anbima","BM&F","CETIP","Selic","NYSE","NASDAQ","LSE"]);return e.jsxs("div",{className:"w-96 space-y-2",children:[e.jsx(j,{className:"font-heading text-sm",children:"Mercados"}),e.jsx(Y,{options:s,values:a,onChange:t,onCreateOption:r=>c(d=>[...d,r]),onDeleteOption:r=>c(d=>d.filter(m=>m!==r)),placeholder:"Selecione um ou mais mercados",createLabel:"Criar novo mercado",itemLabel:"mercado"}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Selecionados:"," ",e.jsx("code",{className:"text-primary",children:a.length>0?a.join(", "):"—"})]})]})}},F={name:"Lista Vazia",render:()=>{const[a,t]=o.useState(""),[s,c]=o.useState([]);return e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsx(j,{className:"font-heading text-sm",children:"Categoria"}),e.jsx(O,{options:s,value:a,onValueChange:t,onCreateOption:r=>c(d=>[...d,r]),onDeleteOption:r=>c(d=>d.filter(m=>m!==r)),placeholder:"Selecione uma categoria",createLabel:"Criar nova categoria",itemLabel:"categoria"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:'Quando não há itens, aparece "Nenhum item cadastrado". O usuário pode criar o primeiro pelo botão "Criar novo".'})]})}},I={name:"Desabilitado",render:()=>e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsx(j,{className:"font-heading text-sm",children:"Indisponível"}),e.jsx(O,{options:["A","B","C"],value:"",onValueChange:()=>{},onCreateOption:()=>{},onDeleteOption:()=>{},placeholder:"Não pode interagir",disabled:!0})]})},P={name:"Combinado (Tipo + Moeda + Mercados)",parameters:{layout:"padded"},render:()=>{const[a,t]=o.useState(""),[s,c]=o.useState(""),[r,d]=o.useState([]),[m,b]=o.useState(["Ação","FII","BDR","ETF"]),[C,y]=o.useState(["BRL","USD","EUR"]),[L,v]=o.useState(["B3","Anbima","BM&F","NYSE"]);return e.jsxs("div",{className:"max-w-3xl mx-auto p-6 space-y-6 bg-card border border-border rounded-lg",children:[e.jsx("h2",{className:"font-heading text-lg font-semibold text-foreground",children:"Exemplo combinado — Novo Ativo"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs(j,{className:"font-heading text-sm",children:["Tipo ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(O,{options:m,value:a,onValueChange:t,onCreateOption:n=>b(p=>[...p,n]),onDeleteOption:n=>b(p=>p.filter(f=>f!==n)),placeholder:"Selecione o tipo",createLabel:"Criar novo tipo",itemLabel:"tipo"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs(j,{className:"font-heading text-sm",children:["Moeda ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(O,{options:C,value:s,onValueChange:c,onCreateOption:n=>y(p=>[...p,n]),onDeleteOption:n=>y(p=>p.filter(f=>f!==n)),placeholder:"Selecione a moeda",createLabel:"Criar nova moeda",itemLabel:"moeda",createCase:"upper"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx(j,{className:"font-heading text-sm",children:"Mercados"}),e.jsx(Y,{options:L,values:r,onChange:d,onCreateOption:n=>v(p=>[...p,n]),onDeleteOption:n=>v(p=>p.filter(f=>f!==n)),placeholder:"Selecione um ou mais mercados",createLabel:"Criar novo mercado",itemLabel:"mercado"})]})]}),e.jsx("pre",{className:"text-xs bg-muted/40 p-3 rounded border border-border",children:JSON.stringify({tipo:a,moeda:s,mercados:r},null,2)})]})}};var H,X,K;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Single — Tipo de Ativo',
  render: () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState(['Ação', 'Fundo', 'FII', 'Renda Fixa', 'Tesouro Direto', 'ETF', 'BDR', 'Cripto']);
    return <div className="w-80 space-y-2">\r
        <Label className="font-heading text-sm">\r
          Tipo <span className="text-destructive">*</span>\r
        </Label>\r
        <EditableSelect options={options} value={value} onValueChange={setValue} onCreateOption={n => setOptions(p => [...p, n])} onDeleteOption={n => setOptions(p => p.filter(x => x !== n))} placeholder="Selecione o tipo" createLabel="Criar novo tipo" itemLabel="tipo" />\r
        <p className="text-xs text-muted-foreground">\r
          Selecionado: <code className="text-primary">{value || '—'}</code>\r
        </p>\r
      </div>;
  }
}`,...(K=(X=B.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var W,Z,ee;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Single — Moeda (uppercase)',
  render: () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState(['BRL', 'USD', 'EUR', 'GBP', 'JPY', 'CHF']);
    return <div className="w-80 space-y-2">\r
        <Label className="font-heading text-sm">\r
          Moeda <span className="text-destructive">*</span>\r
        </Label>\r
        <EditableSelect options={options} value={value} onValueChange={setValue} onCreateOption={n => setOptions(p => [...p, n])} onDeleteOption={n => setOptions(p => p.filter(x => x !== n))} placeholder="Selecione a moeda" createLabel="Criar nova moeda" itemLabel="moeda" createCase="upper" />\r
        <p className="text-xs text-muted-foreground">\r
          Itens criados são automaticamente convertidos para MAIÚSCULAS.\r
        </p>\r
      </div>;
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;V.parameters={...V.parameters,docs:{...(te=V.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Multi — Mercados',
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    const [options, setOptions] = useState(['B3', 'Anbima', 'BM&F', 'CETIP', 'Selic', 'NYSE', 'NASDAQ', 'LSE']);
    return <div className="w-96 space-y-2">\r
        <Label className="font-heading text-sm">Mercados</Label>\r
        <EditableMultiSelect options={options} values={values} onChange={setValues} onCreateOption={n => setOptions(p => [...p, n])} onDeleteOption={n => setOptions(p => p.filter(x => x !== n))} placeholder="Selecione um ou mais mercados" createLabel="Criar novo mercado" itemLabel="mercado" />\r
        <p className="text-xs text-muted-foreground">\r
          Selecionados:{" "}\r
          <code className="text-primary">\r
            {values.length > 0 ? values.join(', ') : '—'}\r
          </code>\r
        </p>\r
      </div>;
  }
}`,...(se=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,oe,ie;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Lista Vazia',
  render: () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    return <div className="w-80 space-y-2">\r
        <Label className="font-heading text-sm">Categoria</Label>\r
        <EditableSelect options={options} value={value} onValueChange={setValue} onCreateOption={n => setOptions(p => [...p, n])} onDeleteOption={n => setOptions(p => p.filter(x => x !== n))} placeholder="Selecione uma categoria" createLabel="Criar nova categoria" itemLabel="categoria" />\r
        <p className="text-xs text-muted-foreground">\r
          Quando não há itens, aparece "Nenhum item cadastrado". O usuário pode\r
          criar o primeiro pelo botão "Criar novo".\r
        </p>\r
      </div>;
  }
}`,...(ie=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,le,de;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => <div className="w-80 space-y-2">\r
      <Label className="font-heading text-sm">Indisponível</Label>\r
      <EditableSelect options={['A', 'B', 'C']} value="" onValueChange={() => undefined} onCreateOption={() => undefined} onDeleteOption={() => undefined} placeholder="Não pode interagir" disabled />\r
    </div>
}`,...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Combinado (Tipo + Moeda + Mercados)',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [tipo, setTipo] = useState('');
    const [moeda, setMoeda] = useState('');
    const [mercados, setMercados] = useState<string[]>([]);
    const [tipos, setTipos] = useState(['Ação', 'FII', 'BDR', 'ETF']);
    const [moedas, setMoedas] = useState(['BRL', 'USD', 'EUR']);
    const [mercadosOpts, setMercadosOpts] = useState(['B3', 'Anbima', 'BM&F', 'NYSE']);
    return <div className="max-w-3xl mx-auto p-6 space-y-6 bg-card border border-border rounded-lg">\r
        <h2 className="font-heading text-lg font-semibold text-foreground">\r
          Exemplo combinado — Novo Ativo\r
        </h2>\r
\r
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
          <div className="space-y-1.5">\r
            <Label className="font-heading text-sm">\r
              Tipo <span className="text-destructive">*</span>\r
            </Label>\r
            <EditableSelect options={tipos} value={tipo} onValueChange={setTipo} onCreateOption={n => setTipos(p => [...p, n])} onDeleteOption={n => setTipos(p => p.filter(x => x !== n))} placeholder="Selecione o tipo" createLabel="Criar novo tipo" itemLabel="tipo" />\r
          </div>\r
          <div className="space-y-1.5">\r
            <Label className="font-heading text-sm">\r
              Moeda <span className="text-destructive">*</span>\r
            </Label>\r
            <EditableSelect options={moedas} value={moeda} onValueChange={setMoeda} onCreateOption={n => setMoedas(p => [...p, n])} onDeleteOption={n => setMoedas(p => p.filter(x => x !== n))} placeholder="Selecione a moeda" createLabel="Criar nova moeda" itemLabel="moeda" createCase="upper" />\r
          </div>\r
          <div className="space-y-1.5">\r
            <Label className="font-heading text-sm">Mercados</Label>\r
            <EditableMultiSelect options={mercadosOpts} values={mercados} onChange={setMercados} onCreateOption={n => setMercadosOpts(p => [...p, n])} onDeleteOption={n => setMercadosOpts(p => p.filter(x => x !== n))} placeholder="Selecione um ou mais mercados" createLabel="Criar novo mercado" itemLabel="mercado" />\r
          </div>\r
        </div>\r
\r
        <pre className="text-xs bg-muted/40 p-3 rounded border border-border">\r
{JSON.stringify({
          tipo,
          moeda,
          mercados
        }, null, 2)}\r
        </pre>\r
      </div>;
  }
}`,...(me=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const gt=["SingleSelect","UpperCase","MultiSelect","EmptyList","Disabled","CombinedExample"];export{P as CombinedExample,I as Disabled,F as EmptyList,V as MultiSelect,B as SingleSelect,k as UpperCase,gt as __namedExportsOrder,xt as default};
