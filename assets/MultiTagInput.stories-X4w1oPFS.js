import{j as a}from"./jsx-runtime-D69pdnyW.js";import{r as c}from"./iframe-CvSox_He.js";import{I as A}from"./input-m_F3UOAC.js";import{M as L}from"./mail-CwyjpOMW.js";import{X as q}from"./x-C6od2E8Y.js";import{L as M}from"./label-BS9NERQq.js";import"./preload-helper-C1FmrZbK.js";import"./utils-CytzSlOG.js";import"./createLucideIcon-D6DUjI5c.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";function o({values:r,onChange:t,placeholder:E="Digite e pressione ; ou Enter",separator:d=";",type:f="email",id:C,showIcon:I}){const[s,g]=c.useState(""),D=I??f==="email",h=e=>{const n=e.split(d).map(u=>u.trim()).filter(u=>u.length>0);if(n.length===0)return;const p=Array.from(new Set([...r,...n]));t(p),g("")},S=e=>{e.key===d||e.key==="Enter"||e.key==="Tab"?s.trim()&&(e.preventDefault(),h(s)):e.key==="Backspace"&&s===""&&r.length>0&&(e.preventDefault(),t(r.slice(0,-1)))},k=e=>{t(r.filter((n,p)=>p!==e))};return a.jsxs("div",{className:"rounded-md border border-input bg-background px-2 py-1.5 flex flex-wrap items-center gap-1.5 min-h-10 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background transition-shadow",children:[r.map((e,n)=>a.jsxs("span",{className:"inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary pl-2 pr-1 py-0.5 text-xs font-body font-medium max-w-full",children:[D&&a.jsx(L,{className:"h-3 w-3 shrink-0 opacity-80"}),a.jsx("span",{className:"truncate max-w-[220px]",title:e,children:e}),a.jsx("button",{type:"button","aria-label":`Remover ${e}`,onClick:()=>k(n),className:"rounded-full p-0.5 hover:bg-destructive/20 hover:text-destructive transition-colors shrink-0",children:a.jsx(q,{className:"h-3 w-3"})})]},`${e}-${n}`)),a.jsx(A,{id:C,type:f,value:s,onChange:e=>g(e.target.value),onKeyDown:S,onBlur:()=>s.trim()&&h(s),placeholder:r.length===0?E:"",className:"border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-7 px-1 flex-1 min-w-[160px] bg-transparent"})]})}o.__docgenInfo={description:`Input estilo "tag" — converte cada valor terminado por separator (default ";"),
Enter ou blur em uma chip removível. Visual aprimorado: chips com ícone de
envelope, cor primary suave e botão de remoção destacado.`,methods:[],displayName:"MultiTagInput",props:{values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"next"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Digite e pressione ; ou Enter"',computed:!1}},separator:{required:!1,tsType:{name:"string"},description:'Caracter usado para separar os e-mails ao colar/digitar (default ";")',defaultValue:{value:'";"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"email" | "text"',elements:[{name:"literal",value:'"email"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"email"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"Mostra o ícone de envelope dentro de cada chip (default true para email)"}}};const Q={title:"Design System / Componentes / MultiTagInput",component:o,parameters:{layout:"padded",docs:{description:{component:"Input estilo 'tag chip' — converte cada valor terminado por separator (default `;`), Enter ou Tab em uma chip removível. Originalmente desenhado para múltiplos e-mails (destinatários) mas suporta texto livre via `type=\"text\"`."}}},tags:["autodocs"]},i={name:"E-mails (default)",render:()=>{const[r,t]=c.useState(["ana@famicapital.com","carlos@famicapital.com"]);return a.jsxs("div",{className:"w-96 space-y-2",children:[a.jsx(M,{children:"Destinatários"}),a.jsx(o,{values:r,onChange:t,placeholder:"Digite e-mails separados por ;"}),a.jsxs("p",{className:"text-xs text-muted-foreground",children:[r.length," destinatário(s) — pressione `;`, Enter ou Tab para adicionar."]})]})}},l={name:"Texto livre (sem ícone)",render:()=>{const[r,t]=c.useState(["B3","Anbima","CVM"]);return a.jsxs("div",{className:"w-96 space-y-2",children:[a.jsx(M,{children:"Mercados"}),a.jsx(o,{values:r,onChange:t,placeholder:"B3, Anbima, CVM...",type:"text",separator:","})]})}},m={render:()=>{const[r,t]=c.useState([]);return a.jsx("div",{className:"w-96",children:a.jsx(o,{values:r,onChange:t})})}};var v,x,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "E-mails (default)",
  render: () => {
    const [values, setValues] = useState<string[]>(["ana@famicapital.com", "carlos@famicapital.com"]);
    return <div className="w-96 space-y-2">\r
        <Label>Destinatários</Label>\r
        <MultiTagInput values={values} onChange={setValues} placeholder="Digite e-mails separados por ;" />\r
        <p className="text-xs text-muted-foreground">\r
          {values.length} destinatário(s) — pressione \`;\`, Enter ou Tab para\r
          adicionar.\r
        </p>\r
      </div>;
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,w,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Texto livre (sem ícone)",
  render: () => {
    const [values, setValues] = useState<string[]>(["B3", "Anbima", "CVM"]);
    return <div className="w-96 space-y-2">\r
        <Label>Mercados</Label>\r
        <MultiTagInput values={values} onChange={setValues} placeholder="B3, Anbima, CVM..." type="text" separator="," />\r
      </div>;
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var V,j,N;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return <div className="w-96">\r
        <MultiTagInput values={values} onChange={setValues} />\r
      </div>;
  }
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const U=["Emails","TextoLivre","Vazio"];export{i as Emails,l as TextoLivre,m as Vazio,U as __namedExportsOrder,Q as default};
