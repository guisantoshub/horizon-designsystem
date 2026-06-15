import{j as e}from"./jsx-runtime-D69pdnyW.js";import{C as p}from"./checkbox--P6nYUhC.js";import{L as h}from"./label-BS9NERQq.js";import{r as _}from"./iframe-CvSox_He.js";import"./index-DzzMxk2y.js";import"./index-fnuAKoKB.js";import"./index-CHv7tnzT.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-C8mMGTVP.js";import"./index-6LzbcUH8.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./utils-CytzSlOG.js";import"./check-DQZkpVpn.js";import"./createLucideIcon-D6DUjI5c.js";import"./index-BwobEAja.js";import"./preload-helper-C1FmrZbK.js";const oe={title:"Design System / Componentes / Checkbox",component:p,parameters:{layout:"centered",docs:{description:{component:"Caixa de seleção (binária) com indicador `Check`. Variantes: unchecked, checked, indeterminate, disabled. Usa `rounded-sm` (não confundir com radio circular). O AG Grid também aplica este visual em colunas de seleção via override CSS em `index.css`."}}},tags:["autodocs"]},t={args:{checked:!1}},o={name:"Selecionado",args:{checked:!0}},c={name:"Indeterminado (parcial)",args:{checked:"indeterminate"}},i={name:"Desabilitado — não selecionado",args:{checked:!1,disabled:!0}},d={name:"Desabilitado — selecionado",args:{checked:!0,disabled:!0}},l={name:"Com Label clicável",render:()=>{const[a,s]=_.useState(!1);return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{id:"aceito",checked:a,onCheckedChange:n=>s(!!n)}),e.jsx(h,{htmlFor:"aceito",className:"cursor-pointer select-none",children:"Aceito os termos de uso"})]})}},m={name:"Lista com selecionar todos",render:()=>{const a=["BOL-413","BOL-414","BOL-415","BOL-416"],[s,n]=_.useState([]),u=s.length===a.length,R=s.length>0&&!u,U=u?!0:R?"indeterminate":!1;return e.jsxs("div",{className:"w-64 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 border-b border-border pb-2",children:[e.jsx(p,{id:"all",checked:U,onCheckedChange:r=>{n(r===!0?a:[])}}),e.jsxs(h,{htmlFor:"all",className:"cursor-pointer text-sm font-heading",children:["Selecionar todas (",s.length,"/",a.length,")"]})]}),a.map(r=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{id:r,checked:s.includes(r),onCheckedChange:q=>n(g=>q?[...g,r]:g.filter(z=>z!==r))}),e.jsx(h,{htmlFor:r,className:"cursor-pointer font-mono text-sm",children:r})]},r))]})}};var k,b,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,C,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Selecionado",
  args: {
    checked: true
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,L,N;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Indeterminado (parcial)",
  args: {
    checked: "indeterminate"
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,j,D;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Desabilitado — não selecionado",
  args: {
    checked: false,
    disabled: true
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var B,F,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Desabilitado — selecionado",
  args: {
    checked: true,
    disabled: true
  }
}`,...(y=(F=d.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var I,V,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Com Label clicável",
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex items-center gap-2">\r
        <Checkbox id="aceito" checked={checked} onCheckedChange={v => setChecked(!!v)} />\r
        <Label htmlFor="aceito" className="cursor-pointer select-none">\r
          Aceito os termos de uso\r
        </Label>\r
      </div>;
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var E,w,G;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Lista com selecionar todos",
  render: () => {
    const items = ["BOL-413", "BOL-414", "BOL-415", "BOL-416"];
    const [sel, setSel] = useState<string[]>([]);
    const allChecked = sel.length === items.length;
    const indeterminate = sel.length > 0 && !allChecked;
    const checkedValue: boolean | "indeterminate" = allChecked ? true : indeterminate ? "indeterminate" : false;
    return <div className="w-64 space-y-2">\r
        <div className="flex items-center gap-2 border-b border-border pb-2">\r
          <Checkbox id="all" checked={checkedValue} onCheckedChange={v => {
          if (v === true) setSel(items);else setSel([]);
        }} />\r
          <Label htmlFor="all" className="cursor-pointer text-sm font-heading">\r
            Selecionar todas ({sel.length}/{items.length})\r
          </Label>\r
        </div>\r
        {items.map(it => <div key={it} className="flex items-center gap-2">\r
            <Checkbox id={it} checked={sel.includes(it)} onCheckedChange={v => setSel(prev => v ? [...prev, it] : prev.filter(x => x !== it))} />\r
            <Label htmlFor={it} className="cursor-pointer font-mono text-sm">\r
              {it}\r
            </Label>\r
          </div>)}\r
      </div>;
  }
}`,...(G=(w=m.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const ce=["Default","Selecionado","Indeterminado","DesabilitadoOff","DesabilitadoOn","ComLabel","ListaSelecionavel"];export{l as ComLabel,t as Default,i as DesabilitadoOff,d as DesabilitadoOn,c as Indeterminado,m as ListaSelecionavel,o as Selecionado,ce as __namedExportsOrder,oe as default};
