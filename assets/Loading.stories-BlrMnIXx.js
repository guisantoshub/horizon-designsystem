import{j as e}from"./jsx-runtime-D69pdnyW.js";import{r as t}from"./iframe-CvSox_He.js";import{H as o}from"./HorizonLoadingLogo-EcUb3Ml0.js";import{M as h}from"./index-AfVjuk3I.js";import"./preload-helper-C1FmrZbK.js";const M={title:"Design System / Páginas / Loading",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`
## LoadingPage — Tela de transição pós-login

Tela exibida entre o login e o dashboard. Fundo navy \`rgb(28,48,73)\` com logo animado centralizado.

### Fluxo
\`/login\` → **\`/loading\`** (2.4s de animação) → \`/\` (Dashboard)

### Sequência de animação (Figma \`node-id=75-1291\` — Horizon-anima-2)

| Fase | Duração | Descrição |
|---|---|---|
| **Slide-up** | 0–850ms | Ícone do logo sobe de fora do frame com spring |
| **Cascata H** | 850ms | Letra H aparece com fade + translateY |
| **Cascata O** | 950ms | Letra O |
| **Cascata R** | 1050ms | Letra R |
| **Cascata I** | 1150ms | Letra I |
| **Cascata Z** | 1250ms | Letra Z |
| **Cascata O** | 1350ms | Letra O |
| **Cascata N** | 1450ms | Letra N |
| **onComplete** | ~2400ms | Callback disparado → navega para \`/\` |

### Props do HorizonLoadingLogo

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| \`height\` | \`number\` | \`80\` | Altura em px (largura proporcional 152:41) |
| \`onComplete\` | \`() => void\` | — | Callback após ~2.4s quando animação termina |

### Uso na LoadingPage

\`\`\`tsx
import { HorizonLoadingLogo } from '@/components/HorizonLoadingLogo';
import { useNavigate } from 'react-router-dom';

export default function LoadingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: 'rgb(28,48,73)' }}
    >
      <HorizonLoadingLogo
        height={96}
        onComplete={() => navigate('/', { replace: true })}
      />
    </div>
  );
}
\`\`\`
        `}}}},r={name:"Tela de Loading — Animação completa",render:()=>{const[p,f]=t.useState(0),[u,n]=t.useState(!1),x=t.useCallback(()=>{n(!1),f(a=>a+1)},[]);return e.jsx(h,{children:e.jsxs("div",{className:"fixed inset-0 flex items-center justify-center",style:{backgroundColor:"rgb(28,48,73)"},children:[e.jsx(o,{height:96,onComplete:()=>n(!0)},p),u&&e.jsx("button",{onClick:x,style:{position:"absolute",bottom:40,left:"50%",transform:"translateX(-50%)",background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,color:"rgba(255,255,255,0.75)",fontFamily:"Montserrat, sans-serif",fontSize:12,fontWeight:600,padding:"8px 20px",cursor:"pointer",letterSpacing:"0.08em",transition:"background 0.15s ease"},onMouseEnter:a=>a.currentTarget.style.background="rgba(255,255,255,0.20)",onMouseLeave:a=>a.currentTarget.style.background="rgba(255,255,255,0.12)",children:"↺ REPLAY"})]})})}},s={name:"Variações de tamanho",render:()=>e.jsxs("div",{className:"flex items-center justify-around min-h-screen",style:{backgroundColor:"rgb(28,48,73)"},children:[e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(o,{height:48},Math.random()),e.jsx("span",{style:{color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:"Montserrat, sans-serif"},children:"48px"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(o,{height:80},Math.random()),e.jsx("span",{style:{color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:"Montserrat, sans-serif"},children:"80px (padrão)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(o,{height:96},Math.random()),e.jsx("span",{style:{color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:"Montserrat, sans-serif"},children:"96px (loading)"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(o,{height:128},Math.random()),e.jsx("span",{style:{color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:"Montserrat, sans-serif"},children:"128px"})]})]})};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Tela de Loading — Animação completa',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [finished, setFinished] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const replay = useCallback(() => {
      setFinished(false);
      setKey(k => k + 1);
    }, []);
    return <MemoryRouter>\r
        <div className="fixed inset-0 flex items-center justify-center" style={{
        backgroundColor: 'rgb(28,48,73)'
      }}>\r
          <HorizonLoadingLogo key={key} height={96} onComplete={() => setFinished(true)} />\r
\r
          {/* Botão de replay — aparece após animação terminar */}\r
          {finished && <button onClick={replay} style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 8,
          color: 'rgba(255,255,255,0.75)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 12,
          fontWeight: 600,
          padding: '8px 20px',
          cursor: 'pointer',
          letterSpacing: '0.08em',
          transition: 'background 0.15s ease'
        }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.20)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}>\r
              ↺ REPLAY\r
            </button>}\r
        </div>\r
      </MemoryRouter>;
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Variações de tamanho',
  render: () => <div className="flex items-center justify-around min-h-screen" style={{
    backgroundColor: 'rgb(28,48,73)'
  }}>\r
      <div className="flex flex-col items-center gap-4">\r
        <HorizonLoadingLogo key={Math.random()} height={48} />\r
        <span style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: 11,
        fontFamily: 'Montserrat, sans-serif'
      }}>\r
          48px\r
        </span>\r
      </div>\r
      <div className="flex flex-col items-center gap-4">\r
        <HorizonLoadingLogo key={Math.random()} height={80} />\r
        <span style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: 11,
        fontFamily: 'Montserrat, sans-serif'
      }}>\r
          80px (padrão)\r
        </span>\r
      </div>\r
      <div className="flex flex-col items-center gap-4">\r
        <HorizonLoadingLogo key={Math.random()} height={96} />\r
        <span style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: 11,
        fontFamily: 'Montserrat, sans-serif'
      }}>\r
          96px (loading)\r
        </span>\r
      </div>\r
      <div className="flex flex-col items-center gap-4">\r
        <HorizonLoadingLogo key={Math.random()} height={128} />\r
        <span style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: 11,
        fontFamily: 'Montserrat, sans-serif'
      }}>\r
          128px\r
        </span>\r
      </div>\r
    </div>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const j=["Default","Tamanhos"];export{r as Default,s as Tamanhos,j as __namedExportsOrder,M as default};
