import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as k}from"./iframe-CvSox_He.js";import{H as T}from"./HorizonLoadingLogo-EcUb3Ml0.js";import{R as P}from"./refresh-cw-DdgTnMZv.js";import"./preload-helper-C1FmrZbK.js";import"./createLucideIcon-D6DUjI5c.js";const K={title:"Design System / Componentes / HorizonLoadingLogo",component:T,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## HorizonLoadingLogo — Logo animado

Componente de animação do logo para a tela de loading. Cada story possui um
botão **"Reproduzir novamente"** no canto superior direito que força o re-mount
do componente, permitindo revisitar a animação a qualquer momento.

### Sequência de animação (11 estados do Figma \`Horizon-anima-2\`)

| Estado Figma | Fase | Descrição |
|---|---|---|
| Estado 1 | Oculto | Ícone abaixo do frame (off-screen) |
| Estado 2-3 | Slide-up | Ícone sobe com spring animation |
| Estado 4-11 | Cascata | Letras H·O·R·I·Z·O·N aparecem em sequência |

### Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| \`height\` | number | 80 | Altura em px (largura proporcional 152:41) |
| \`onComplete\` | () => void | — | Callback após ~2.4s quando animação termina |

### Implementação

\`\`\`tsx
<HorizonLoadingLogo
  height={96}
  onComplete={() => navigate('/')}
/>
\`\`\`
        `}}}};function s({height:a=96,fullScreen:q=!1}){const[w,E]=k.useState(0);return e.jsxs("div",{className:q?"fixed inset-0 flex items-center justify-center":"flex items-center justify-center min-h-screen",style:{backgroundColor:"rgb(28,48,73)"},children:[e.jsx(T,{height:a},w),e.jsxs("button",{type:"button",onClick:()=>E(H=>H+1),className:"absolute top-6 right-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wide uppercase transition-colors",title:"Reproduzir animação novamente","aria-label":"Reproduzir animação novamente",children:[e.jsx(P,{className:"h-3.5 w-3.5"}),"Reproduzir novamente"]}),e.jsx("span",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[2px] text-white/40",children:"Animação reinicia automaticamente ao clicar"})]})}const o={name:"Animação Completa",args:{height:96},render:a=>e.jsx(s,{height:a.height??96})},r={name:"Tamanho Pequeno (64px)",args:{height:64},render:a=>e.jsx(s,{height:a.height??64})},t={name:"Tamanho Grande (128px)",args:{height:128},render:a=>e.jsx(s,{height:a.height??128})},n={name:"Tela de Loading Completa",parameters:{layout:"fullscreen"},render:()=>e.jsx(s,{height:96,fullScreen:!0})};var i,m,c,p,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Animação Completa',
  args: {
    height: 96
  },
  render: args => <Replayable height={args.height ?? 96} />
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Animação completa — ícone sobe + letras aparecem em cascata",...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};var l,g,h,u,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Tamanho Pequeno (64px)',
  args: {
    height: 64
  },
  render: args => <Replayable height={args.height ?? 64} />
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source},description:{story:"Tamanho compacto",...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var f,b,y,L,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Tamanho Grande (128px)',
  args: {
    height: 128
  },
  render: args => <Replayable height={args.height ?? 128} />
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"Tamanho grande",...(C=(L=t.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var S,j,R,v,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Tela de Loading Completa',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Replayable height={96} fullScreen />
}`,...(R=(j=n.parameters)==null?void 0:j.docs)==null?void 0:R.source},description:{story:"Contexto da tela de loading completa",...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.description}}};const _=["Default","Small","Large","LoadingScreen"];export{o as Default,t as Large,n as LoadingScreen,r as Small,_ as __namedExportsOrder,K as default};
