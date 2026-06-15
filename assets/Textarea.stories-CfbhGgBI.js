import{j as e}from"./jsx-runtime-D69pdnyW.js";import{T as o}from"./textarea-CWFdrZIn.js";import{L as b}from"./label-BS9NERQq.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";import"./utils-CytzSlOG.js";import"./index-DQnb2Qv3.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";import"./index-BwobEAja.js";const y={title:"Design System / Componentes / Textarea",component:o,parameters:{layout:"padded",docs:{description:{component:"Campo de texto multi-linha. Usa os mesmos tokens do `Input` (border, focus ring). Para descrições longas, observações em boletas, e comentários."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},rows:{control:{type:"number",min:2,max:10}}}},a={args:{placeholder:"Digite aqui...",rows:4},render:x=>e.jsx("div",{className:"w-80",children:e.jsx(o,{...x})})},r={name:"Com Label",render:()=>e.jsxs("div",{className:"w-80 space-y-2",children:[e.jsx(b,{htmlFor:"obs",children:"Observações"}),e.jsx(o,{id:"obs",placeholder:"Detalhes para a equipe de Middle Office...",rows:5}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Será registrada no histórico da boleta."})]})},s={render:()=>e.jsx("div",{className:"w-80",children:e.jsx(o,{defaultValue:"Boleta cancelada — cliente solicitou pausa por mudança de estratégia.",disabled:!0,rows:3})})};var t,d,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: "Digite aqui...",
    rows: 4
  },
  render: args => <div className="w-80">\r
      <Textarea {...args} />\r
    </div>
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Com Label",
  render: () => <div className="w-80 space-y-2">\r
      <Label htmlFor="obs">Observações</Label>\r
      <Textarea id="obs" placeholder="Detalhes para a equipe de Middle Office..." rows={5} />\r
      <p className="text-xs text-muted-foreground">\r
        Será registrada no histórico da boleta.\r
      </p>\r
    </div>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="w-80">\r
      <Textarea defaultValue="Boleta cancelada — cliente solicitou pausa por mudança de estratégia." disabled rows={3} />\r
    </div>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const C=["Default","ComLabel","Desabilitado"];export{r as ComLabel,a as Default,s as Desabilitado,C as __namedExportsOrder,y as default};
