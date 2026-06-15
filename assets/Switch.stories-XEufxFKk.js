import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as z}from"./iframe-CvSox_He.js";import{S as p}from"./switch-Dx3PtuCi.js";import{L as F}from"./label-BS9NERQq.js";import"./preload-helper-C1FmrZbK.js";import"./index-CHv7tnzT.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-C8mMGTVP.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./utils-CytzSlOG.js";import"./index-BwobEAja.js";const Z={title:"Design System / Componentes / Switch",component:p,parameters:{layout:"centered",docs:{description:{component:"Toggle switch for boolean on/off states. Uses primary color when checked (active) and muted input color when unchecked (inactive). Size: `h-4 w-8` track (16px height), `h-3 w-3` thumb — compact and subtle, designed to fit inline in table rows."}}},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the switch is on (checked) or off (unchecked)."},disabled:{control:"boolean",description:"Disables interaction with the switch."}}},r={name:"Ativo (On)",args:{checked:!0,disabled:!1}},o={name:"Inativo (Off)",args:{checked:!1,disabled:!1}},i={name:"Desabilitado — On",args:{checked:!0,disabled:!0}},d={name:"Desabilitado — Off",args:{checked:!1,disabled:!0}},c={name:"Interativo (com Label)",render:()=>{const[a,t]=z.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(p,{id:"demo-switch",checked:a,onCheckedChange:t}),e.jsx(F,{htmlFor:"demo-switch",className:"text-sm cursor-pointer select-none",children:a?"Ativo":"Inativo"})]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Estado: ",e.jsx("strong",{children:a?"ligado":"desligado"})]})]})}},l={name:"Todas as variantes",render:()=>e.jsx("div",{className:"flex flex-col gap-4",children:[{label:"On (ativo)",checked:!0,disabled:!1},{label:"Off (inativo)",checked:!1,disabled:!1},{label:"On — desabilitado",checked:!0,disabled:!0},{label:"Off — desabilitado",checked:!1,disabled:!0}].map(({label:a,checked:t,disabled:s})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(p,{checked:t,disabled:s}),e.jsx("span",{className:"text-sm text-foreground",children:a})]},a))})},m={name:"Exemplo — Status de cliente",render:()=>{const[a,t]=z.useState([{id:"1",nome:"Carlos Silva",ativo:!0},{id:"2",nome:"Tech Corp LTDA",ativo:!0},{id:"3",nome:"Ana Beatriz Silva",ativo:!1}]);return e.jsx("div",{className:"space-y-2 w-72",children:a.map(s=>e.jsxs("div",{className:"flex items-center justify-between rounded-md border border-border bg-card px-3 py-2.5",children:[e.jsx("span",{className:"text-sm font-medium",children:s.nome}),e.jsx(p,{checked:s.ativo,onCheckedChange:()=>t(B=>B.map(n=>n.id===s.id?{...n,ativo:!n.ativo}:n))})]},s.id))})}};var h,u,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Ativo (On)",
  args: {
    checked: true,
    disabled: false
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,v,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Inativo (Off)",
  args: {
    checked: false,
    disabled: false
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,k,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Desabilitado — On",
  args: {
    checked: true,
    disabled: true
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,C,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Desabilitado — Off",
  args: {
    checked: false,
    disabled: true
  }
}`,...(O=(C=d.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var N,j,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Interativo (com Label)",
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div className="flex flex-col gap-6">\r
        <div className="flex items-center gap-3">\r
          <Switch id="demo-switch" checked={checked} onCheckedChange={setChecked} />\r
          <Label htmlFor="demo-switch" className="text-sm cursor-pointer select-none">\r
            {checked ? "Ativo" : "Inativo"}\r
          </Label>\r
        </div>\r
        <p className="text-xs text-muted-foreground">\r
          Estado: <strong>{checked ? "ligado" : "desligado"}</strong>\r
        </p>\r
      </div>;
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var A,D,I;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Todas as variantes",
  render: () => <div className="flex flex-col gap-4">\r
      {[{
      label: "On (ativo)",
      checked: true,
      disabled: false
    }, {
      label: "Off (inativo)",
      checked: false,
      disabled: false
    }, {
      label: "On — desabilitado",
      checked: true,
      disabled: true
    }, {
      label: "Off — desabilitado",
      checked: false,
      disabled: true
    }].map(({
      label,
      checked,
      disabled
    }) => <div key={label} className="flex items-center gap-3">\r
          <Switch checked={checked} disabled={disabled} />\r
          <span className="text-sm text-foreground">{label}</span>\r
        </div>)}\r
    </div>
}`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,E,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Exemplo — Status de cliente",
  render: () => {
    const [clientes, setClientes] = useState([{
      id: "1",
      nome: "Carlos Silva",
      ativo: true
    }, {
      id: "2",
      nome: "Tech Corp LTDA",
      ativo: true
    }, {
      id: "3",
      nome: "Ana Beatriz Silva",
      ativo: false
    }]);
    return <div className="space-y-2 w-72">\r
        {clientes.map(c => <div key={c.id} className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2.5">\r
            <span className="text-sm font-medium">{c.nome}</span>\r
            <Switch checked={c.ativo} onCheckedChange={() => setClientes(prev => prev.map(x => x.id === c.id ? {
          ...x,
          ativo: !x.ativo
        } : x))} />\r
          </div>)}\r
      </div>;
  }
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const $=["Ativo","Inativo","DesabilitadoOn","DesabilitadoOff","Interativo","TodasAsVariantes","ExemploClienteStatus"];export{r as Ativo,d as DesabilitadoOff,i as DesabilitadoOn,m as ExemploClienteStatus,o as Inativo,c as Interativo,l as TodasAsVariantes,$ as __namedExportsOrder,Z as default};
