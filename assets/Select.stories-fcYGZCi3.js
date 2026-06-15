import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as F}from"./iframe-CvSox_He.js";import{S as o,a as c,b as i,c as d,d as r,e as m,f as u,g as S}from"./select-HyD8fhl7.js";import{L as n}from"./label-BS9NERQq.js";import"./preload-helper-C1FmrZbK.js";import"./index-DNOJwA3A.js";import"./index-BdQq_4o_.js";import"./index-CHv7tnzT.js";import"./index-T97G5T97.js";import"./index-fnuAKoKB.js";import"./index-DzzMxk2y.js";import"./index-BGqnW-RQ.js";import"./index-XFK3SrUu.js";import"./index-DQnb2Qv3.js";import"./index-DmOial3E.js";import"./index-CY7LN3Yz.js";import"./index-Bw6hP1Na.js";import"./index-BqRVx1yA.js";import"./index-C8mMGTVP.js";import"./index-KMH598xy.js";import"./index-qqZAXNe6.js";import"./index-CSC2Jsb6.js";import"./utils-CytzSlOG.js";import"./chevron-down-BQorgLkq.js";import"./createLucideIcon-D6DUjI5c.js";import"./chevron-up-BLyKixcO.js";import"./check-DQZkpVpn.js";import"./index-BwobEAja.js";const me={title:"Design System / Componentes / Select",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
## Select — Combo de seleção única

Wrapper sobre **Radix Select** com estilos do design system. Usado em
formulários (Cliente, Acessos), filtros do Boletador, e qualquer lugar
que precise de um single-choice de uma lista média (5–30 opções). Para
listas grandes ou busca, prefira o componente \`Combobox\`.

### Composição
\`\`\`tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger><SelectValue placeholder="Escolha…" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
  </SelectContent>
</Select>
\`\`\`
        `}}}},t={name:"Padrão",render:()=>{const[p,w]=F.useState("");return e.jsxs("div",{className:"w-72 space-y-2",children:[e.jsx(n,{htmlFor:"inst",children:"Instituição"}),e.jsxs(o,{value:p,onValueChange:w,children:[e.jsx(c,{id:"inst",children:e.jsx(i,{placeholder:"Selecione uma instituição"})}),e.jsxs(d,{children:[e.jsx(r,{value:"xp",children:"XP Investimentos"}),e.jsx(r,{value:"btg",children:"BTG Pactual"}),e.jsx(r,{value:"itau",children:"Itaú BBA"}),e.jsx(r,{value:"bradesco",children:"Bradesco BBI"}),e.jsx(r,{value:"santander",children:"Santander"}),e.jsx(r,{value:"genial",children:"Genial"})]})]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["Valor: ",e.jsx("code",{className:"font-mono text-primary",children:p||"—"})]})]})}},a={name:"Com Grupos",render:()=>e.jsxs("div",{className:"w-72 space-y-2",children:[e.jsx(n,{htmlFor:"ativo",children:"Ativo"}),e.jsxs(o,{children:[e.jsx(c,{id:"ativo",children:e.jsx(i,{placeholder:"Selecione um ativo"})}),e.jsxs(d,{children:[e.jsxs(m,{children:[e.jsx(u,{children:"Ações"}),e.jsx(r,{value:"petr4",children:"PETR4"}),e.jsx(r,{value:"vale3",children:"VALE3"}),e.jsx(r,{value:"itub4",children:"ITUB4"})]}),e.jsx(S,{}),e.jsxs(m,{children:[e.jsx(u,{children:"Renda Fixa"}),e.jsx(r,{value:"lci",children:"LCI Banco X"}),e.jsx(r,{value:"cdb",children:"CDB Y"})]}),e.jsx(S,{}),e.jsxs(m,{children:[e.jsx(u,{children:"Tesouro"}),e.jsx(r,{value:"ipca29",children:"Tesouro IPCA+ 2029"}),e.jsx(r,{value:"prefix26",children:"Tesouro Prefixado 2026"})]})]})]})]})},l={name:"Desabilitado",render:()=>e.jsxs("div",{className:"w-72 space-y-2",children:[e.jsx(n,{htmlFor:"dis",children:"Tipo de Conta"}),e.jsxs(o,{disabled:!0,children:[e.jsx(c,{id:"dis",children:e.jsx(i,{placeholder:"Indisponível"})}),e.jsx(d,{children:e.jsx(r,{value:"i",children:"Investimento"})})]})]})},s={name:"Item Desabilitado",render:()=>e.jsxs("div",{className:"w-72 space-y-2",children:[e.jsx(n,{children:"Perfil de Risco"}),e.jsxs(o,{children:[e.jsx(c,{children:e.jsx(i,{placeholder:"Selecione"})}),e.jsxs(d,{children:[e.jsx(r,{value:"conservador",children:"Conservador"}),e.jsx(r,{value:"moderado",children:"Moderado"}),e.jsx(r,{value:"arrojado",children:"Arrojado"}),e.jsx(r,{value:"agressivo",disabled:!0,children:"Agressivo (requer autorização)"})]})]})]})};var v,x,h,I,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Padrão',
  render: () => {
    const [value, setValue] = useState<string>('');
    return <div className="w-72 space-y-2">\r
        <Label htmlFor="inst">Instituição</Label>\r
        <Select value={value} onValueChange={setValue}>\r
          <SelectTrigger id="inst">\r
            <SelectValue placeholder="Selecione uma instituição" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="xp">XP Investimentos</SelectItem>\r
            <SelectItem value="btg">BTG Pactual</SelectItem>\r
            <SelectItem value="itau">Itaú BBA</SelectItem>\r
            <SelectItem value="bradesco">Bradesco BBI</SelectItem>\r
            <SelectItem value="santander">Santander</SelectItem>\r
            <SelectItem value="genial">Genial</SelectItem>\r
          </SelectContent>\r
        </Select>\r
        <p className="text-xs text-muted-foreground">\r
          Valor: <code className="font-mono text-primary">{value || '—'}</code>\r
        </p>\r
      </div>;
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:"Uso básico — instituições financeiras.",...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.description}}};var g,b,C,T,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Com Grupos',
  render: () => <div className="w-72 space-y-2">\r
      <Label htmlFor="ativo">Ativo</Label>\r
      <Select>\r
        <SelectTrigger id="ativo">\r
          <SelectValue placeholder="Selecione um ativo" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectGroup>\r
            <SelectLabel>Ações</SelectLabel>\r
            <SelectItem value="petr4">PETR4</SelectItem>\r
            <SelectItem value="vale3">VALE3</SelectItem>\r
            <SelectItem value="itub4">ITUB4</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>Renda Fixa</SelectLabel>\r
            <SelectItem value="lci">LCI Banco X</SelectItem>\r
            <SelectItem value="cdb">CDB Y</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>Tesouro</SelectLabel>\r
            <SelectItem value="ipca29">Tesouro IPCA+ 2029</SelectItem>\r
            <SelectItem value="prefix26">Tesouro Prefixado 2026</SelectItem>\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>\r
    </div>
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source},description:{story:"Com grupos e separador — útil para categorizar opções.",...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.description}}};var L,B,y,V,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Desabilitado',
  render: () => <div className="w-72 space-y-2">\r
      <Label htmlFor="dis">Tipo de Conta</Label>\r
      <Select disabled>\r
        <SelectTrigger id="dis">\r
          <SelectValue placeholder="Indisponível" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="i">Investimento</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </div>
}`,...(y=(B=l.parameters)==null?void 0:B.docs)==null?void 0:y.source},description:{story:"Estado desabilitado.",...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var G,P,D,N,E;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Item Desabilitado',
  render: () => <div className="w-72 space-y-2">\r
      <Label>Perfil de Risco</Label>\r
      <Select>\r
        <SelectTrigger>\r
          <SelectValue placeholder="Selecione" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="conservador">Conservador</SelectItem>\r
          <SelectItem value="moderado">Moderado</SelectItem>\r
          <SelectItem value="arrojado">Arrojado</SelectItem>\r
          <SelectItem value="agressivo" disabled>\r
            Agressivo (requer autorização)\r
          </SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </div>
}`,...(D=(P=s.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:"Item único desabilitado.",...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.description}}};const ue=["Default","WithGroups","Disabled","ItemDisabled"];export{t as Default,l as Disabled,s as ItemDisabled,a as WithGroups,ue as __namedExportsOrder,me as default};
