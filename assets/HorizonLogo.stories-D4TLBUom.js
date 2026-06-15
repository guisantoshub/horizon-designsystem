import{j as e}from"./jsx-runtime-D69pdnyW.js";import{H as a}from"./HorizonLogo-Bh991djV.js";import"./iframe-CvSox_He.js";import"./preload-helper-C1FmrZbK.js";const B={title:"Design System / Identidade / Logo",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"radio",options:["icon","full"]},scheme:{control:"radio",options:["light","dark"]},iconSize:{control:{type:"range",min:20,max:64,step:4}}}},o={name:"Light — Completo",args:{variant:"full",scheme:"light",iconSize:32},parameters:{backgrounds:{default:"light"}},decorators:[r=>e.jsx("div",{className:"p-8 bg-white rounded-xl",children:r()})]},s={name:"Dark — Completo",args:{variant:"full",scheme:"dark",iconSize:32},decorators:[r=>e.jsx("div",{className:"p-8 bg-[#0D1B35] rounded-xl",children:r()})]},i={name:"Ícone isolado",args:{variant:"icon",iconSize:48},decorators:[r=>e.jsx("div",{className:"p-8 bg-white rounded-xl border",children:r()})]},d={name:"Tamanhos",render:()=>e.jsx("div",{className:"flex flex-col gap-6 p-8 bg-white rounded-xl border",children:[20,24,32,40,48].map(r=>e.jsx(a,{variant:"full",scheme:"light",iconSize:r},r))})},c={name:"Sidebar Dark (colapsado + expandido)",render:()=>e.jsxs("div",{className:"flex gap-6 p-8 bg-[#0B1929] rounded-xl",children:[e.jsx("div",{className:"flex flex-col items-center justify-center w-16 h-20 rounded-lg bg-[#0F2240]",children:e.jsx(a,{variant:"icon",scheme:"dark",iconSize:32})}),e.jsx("div",{className:"flex items-center px-4 h-20 rounded-lg bg-[#0F2240]",children:e.jsx(a,{variant:"full",scheme:"dark",iconSize:32})})]})},n={name:"Sidebar Light (colapsado + expandido)",render:()=>e.jsxs("div",{className:"flex gap-6 p-8 bg-gray-100 rounded-xl",children:[e.jsx("div",{className:"flex flex-col items-center justify-center w-16 h-20 rounded-lg bg-white border",children:e.jsx(a,{variant:"icon",scheme:"light",iconSize:32})}),e.jsx("div",{className:"flex items-center px-4 h-20 rounded-lg bg-white border",children:e.jsx(a,{variant:"full",scheme:"light",iconSize:32})})]})};var t,l,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Light — Completo',
  args: {
    variant: 'full',
    scheme: 'light',
    iconSize: 32
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  decorators: [Story => <div className="p-8 bg-white rounded-xl">{Story()}</div>]
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Dark — Completo',
  args: {
    variant: 'full',
    scheme: 'dark',
    iconSize: 32
  },
  decorators: [Story => <div className="p-8 bg-[#0D1B35] rounded-xl">{Story()}</div>]
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,x,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Ícone isolado',
  args: {
    variant: 'icon',
    iconSize: 48
  },
  decorators: [Story => <div className="p-8 bg-white rounded-xl border">{Story()}</div>]
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,S,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Tamanhos',
  render: () => <div className="flex flex-col gap-6 p-8 bg-white rounded-xl border">\r
      {[20, 24, 32, 40, 48].map(size => <HorizonLogo key={size} variant="full" scheme="light" iconSize={size} />)}\r
    </div>
}`,...(b=(S=d.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var z,j,N;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Sidebar Dark (colapsado + expandido)',
  render: () => <div className="flex gap-6 p-8 bg-[#0B1929] rounded-xl">\r
      <div className="flex flex-col items-center justify-center w-16 h-20 rounded-lg bg-[#0F2240]">\r
        <HorizonLogo variant="icon" scheme="dark" iconSize={32} />\r
      </div>\r
      <div className="flex items-center px-4 h-20 rounded-lg bg-[#0F2240]">\r
        <HorizonLogo variant="full" scheme="dark" iconSize={32} />\r
      </div>\r
    </div>
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,k,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sidebar Light (colapsado + expandido)',
  render: () => <div className="flex gap-6 p-8 bg-gray-100 rounded-xl">\r
      <div className="flex flex-col items-center justify-center w-16 h-20 rounded-lg bg-white border">\r
        <HorizonLogo variant="icon" scheme="light" iconSize={32} />\r
      </div>\r
      <div className="flex items-center px-4 h-20 rounded-lg bg-white border">\r
        <HorizonLogo variant="full" scheme="light" iconSize={32} />\r
      </div>\r
    </div>
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const C=["LightFull","DarkFull","IconOnly","Sizes","DarkSidebar","LightSidebar"];export{s as DarkFull,c as DarkSidebar,i as IconOnly,o as LightFull,n as LightSidebar,d as Sizes,C as __namedExportsOrder,B as default};
