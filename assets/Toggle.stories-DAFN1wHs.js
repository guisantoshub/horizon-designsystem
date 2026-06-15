import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as k}from"./iframe-CvSox_He.js";import{c as S}from"./index-CHv7tnzT.js";import{u as D}from"./index-KMH598xy.js";import{P as A}from"./index-DQnb2Qv3.js";import{c as E}from"./index-BwobEAja.js";import{c as U}from"./utils-CytzSlOG.js";import{c as g}from"./createLucideIcon-D6DUjI5c.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNOJwA3A.js";import"./index-DzzMxk2y.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=g("Bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=g("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=g("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);var C="Toggle",I=k.forwardRef((r,l)=>{const{pressed:i,defaultPressed:d,onPressedChange:c,...V}=r,[m,M]=D({prop:i,onChange:c,defaultProp:d??!1,caller:C});return e.jsx(A.button,{type:"button","aria-pressed":m,"data-state":m?"on":"off","data-disabled":r.disabled?"":void 0,...V,ref:l,onClick:S(r.onClick,()=>{r.disabled||M(!m)})})});I.displayName=C;var B=I;const z=E("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),a=k.forwardRef(({className:r,variant:l,size:i,...d},c)=>e.jsx(B,{ref:c,className:U(z({variant:l,size:i,className:r})),...d}));a.displayName=B.displayName;a.__docgenInfo={description:"",methods:[]};const X={title:"Design System / Componentes / Toggle",component:a,parameters:{layout:"centered",docs:{description:{component:"Botão de duas posições (pressed/not-pressed). Diferente do `Switch` (binário on/off em forms), o Toggle é típico em toolbars (bold/italic, view mode). Para alternar entre 2+ opções use `ToggleGroup`."}}},tags:["autodocs"]},s={render:()=>e.jsx(a,{"aria-label":"Toggle bold",children:e.jsx(u,{className:"h-4 w-4"})})},o={name:"Variantes — default / outline",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{"aria-label":"Bold",defaultPressed:!0,children:e.jsx(u,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"Italic",children:e.jsx(R,{className:"h-4 w-4"})}),e.jsx(a,{variant:"outline","aria-label":"Underline",defaultPressed:!0,children:e.jsx(_,{className:"h-4 w-4"})})]})},t={name:"Com texto",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{"aria-label":"Mostrar inativos",defaultPressed:!0,children:"Mostrar inativos"}),e.jsx(a,{variant:"outline","aria-label":"Apenas hoje",children:"Apenas hoje"})]})},n={render:()=>e.jsx(a,{disabled:!0,"aria-label":"Indisponível",children:e.jsx(u,{className:"h-4 w-4"})})};var p,f,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Toggle aria-label="Toggle bold">\r
      <Bold className="h-4 w-4" />\r
    </Toggle>
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,v,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Variantes — default / outline",
  render: () => <div className="flex items-center gap-2">\r
      <Toggle aria-label="Bold" defaultPressed>\r
        <Bold className="h-4 w-4" />\r
      </Toggle>\r
      <Toggle variant="outline" aria-label="Italic">\r
        <Italic className="h-4 w-4" />\r
      </Toggle>\r
      <Toggle variant="outline" aria-label="Underline" defaultPressed>\r
        <Underline className="h-4 w-4" />\r
      </Toggle>\r
    </div>
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var j,T,y;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Com texto",
  render: () => <div className="flex items-center gap-2">\r
      <Toggle aria-label="Mostrar inativos" defaultPressed>\r
        Mostrar inativos\r
      </Toggle>\r
      <Toggle variant="outline" aria-label="Apenas hoje">\r
        Apenas hoje\r
      </Toggle>\r
    </div>
}`,...(y=(T=t.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var N,P,w;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Toggle disabled aria-label="Indisponível">\r
      <Bold className="h-4 w-4" />\r
    </Toggle>
}`,...(w=(P=n.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};const Y=["Default","Variantes","ComTexto","Desabilitado"];export{t as ComTexto,s as Default,n as Desabilitado,o as Variantes,Y as __namedExportsOrder,X as default};
