import{r as i,R as A,a as y,j as n}from"./jsx-runtime.fb270f66.js";import{A as G}from"./index.fdf8a341.js";import{u as E,T as m,i as V,c as Y,C as L,a as J,S as O,b as k,K,U as X,o as D,d as x,e as N}from"./index.a2cc927e.js";import{V as Q}from"./fixtures.e9667a2d.js";import{b as Z,t as ee,C as te,s as w}from"./theme.10af8ddf.js";import"./index.484a71f2.js";import{L as $}from"./index.c0d34b2c.js";import{n as p}from"./index.e9c15f57.js";import"./index.9164127d.js";import"./index.8d59778b.js";import{c as oe}from"./index.890f6bc9.js";import"./index.acc69706.js";import"./index.6a9a1cdd.js";import"./index.26d86877.js";import"./index.dfb91306.js";import"./index.0fdd5087.js";import"./index.85d826cb.js";import"./index.eefebc5c.js";import"./index.4735fa4b.js";import"./index.1346586c.js";import"./iframe.cfc7c1a5.js";import"./index.7595f211.js";import"./variants.0ee486e5.js";import"./top-caret.6f3f719e.js";import"./is-plain-object.ed97bcae.js";const j=e=>{const[r,s]=i.exports.useState("");return i.exports.useEffect(()=>{e!=null&&e.color&&s(Z({color:e.color}))},[e==null?void 0:e.color]),r},re=380,ie=800,M=ee(te.WIDGET),d=w(M("div","chat"),{width:re,overflow:"hidden",borderRadius:"$2",boxShadow:"0 2px 48px rgba(19,33,68,0.16), 0 0 0 1px $shadow4",height:"90%",maxHeight:ie,"@mobile":{position:"fixed",height:"unset",maxHeight:"unset",width:"unset",left:0,right:0,top:0,bottom:0,borderRadius:0,boxShadow:"none"}}),u=w(M("div","launcher"),{}),H={opacity:1,pointerEvents:"auto",transform:"translateY(0%)",transition:"transform 300ms cubic-bezier(0, 0.95, 0.1, 1), opacity 150ms linear"},_={opacity:0,pointerEvents:"none",transform:"translateY(100%)",transition:"transform 300ms cubic-bezier(0.85, 0, 0.6, 1), opacity 150ms linear"},W=w(M("div"),{position:"fixed",inset:0,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",pointerEvents:"none",zIndex:1e4,[`
    & > ${u},
    & > ${d}
  `]:{position:"absolute"},variants:{withChat:{true:{[`& > ${d}`]:{...H},[`& > ${u}`]:{..._}},false:{[`& > ${d}`]:{..._},[`& > ${u}`]:{...H}}},isHidden:{true:{display:"none"}}}}),ne=({children:e,chatAPI:r,sendMessage:s,assistant:o})=>{var c;const[T,h]=i.exports.useState(!1),[C,f]=i.exports.useState(!1),t=i.exports.useMemo(()=>window.matchMedia("(max-width: 768px)").matches,[]),g=j(o);E(m.CLOSE,()=>h(!1)),E(m.OPEN,()=>h(!0));const b=A.useCallback(()=>s({type:m.OPEN}),[]),v=A.useCallback(()=>s({type:m.CLOSE}),[]);i.exports.useEffect(()=>{if(!!V(r))return Object.assign(r,{open:b,close:v,hide:()=>f(!0),show:()=>f(!1),interact:l=>s({type:m.INTERACT,payload:l})}),()=>{Object.assign(r,{open:p,hide:p,show:p,close:p,interact:p})}},[]);const R=(c=o==null?void 0:o.position)!=null?c:Y.ChatPosition.RIGHT,a={bottom:o==null?void 0:o.spacing.bottom,[R]:o==null?void 0:o.spacing.side};return y(W,{withChat:T,isHidden:C,className:g,children:[!!o&&n(u,{style:a,children:n($,{onClick:b,image:o.launcher})}),n(d,{style:t?{}:a,children:e})]})},se=Object.assign(ne,{Launcher:$,Container:W,ChatContainer:d,LauncherContainer:u});const F=w("div",{height:"100%",[`& ${L.Container}`]:{height:"100%"}}),I=e=>{const r=JSON.stringify(e);window.postMessage(r),window.parent.postMessage(r,"*")},ae=({assistant:e,versionID:r,verify:s,user:o,url:T,session:h})=>{const C=i.exports.useCallback(()=>I({type:m.CLOSE}),[]),f=i.exports.useCallback(a=>I({type:m.SAVE_SESSION,payload:a}),[]),t=J({versionID:r,verify:s,url:T,user:o,session:h,saveSession:f},[s.projectID]);E(m.INTERACT,({payload:a})=>t.interact(a)),E(m.OPEN,async()=>{t.isStatus(O.IDLE)&&await g()});const g=async()=>{await t.launch()},b=i.exports.useCallback(()=>{t.setStatus(O.ENDED),C()},[]),v=j(e),R=i.exports.useCallback(a=>{const c=t.session.turns[a-1];return(c==null?void 0:c.type)===k.USER?c:null},[t.session.turns]);return n(oe,{...t,children:n(F,{className:v,children:y(L,{title:e.title,description:e.description,image:e.image,avatar:e.avatar,withWatermark:e.watermark,startTime:t.session.startTime,hasEnded:t.isStatus(O.ENDED),isLoading:!t.session.turns.length,onStart:g,onEnd:b,onSend:t.reply,onMinimize:C,children:[t.session.turns.map((a,c)=>K(a).with({type:k.USER},({id:l,...S})=>i.exports.createElement(X,{...D(S,["type"]),key:l})).with({type:k.SYSTEM},({id:l,...S})=>n(x,{...D(S,["type"]),feedback:e.feedback?{onClick:B=>{t.feedback(B,S.messages,R(c))}}:void 0,avatar:e.avatar,isLast:c===t.session.turns.length-1},l)).exhaustive()),t.indicator&&n(x.Indicator,{avatar:e.avatar})]})})})};Object.assign(ae,{sendMessage:I,Container:F});const q="https://source.unsplash.com/featured/248x150",P={title:"First Card",description:"Lorem ipsum dolor sit amet",image:q,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]},U=[P,{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:q},{title:"Third Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",actions:[{request:{},name:"Fourth Button"},{request:{},name:"Fifth Button"}]}],$e={title:"Components/Carousel",component:N},z=e=>n(N,{...e}),ce=z.bind({});ce.args={cards:[P]};const me=z.bind({});me.args={cards:U};const le=e=>{const r=i.exports.useRef(null),s=i.exports.useRef(null);return n(se.ChatContainer,{children:y(L.Dialog,{children:[n(x.Controls,{ref:s}),y(x.Container,{ref:r,withImage:!0,scrollable:!0,children:[n(G,{avatar:Q}),n(N,{...e,controlsRef:s,containerRef:r})]})]})})},pe=le.bind({});pe.args={cards:U};export{me as MultipleCards,ce as SingleCard,pe as WithControls,$e as default};
//# sourceMappingURL=Carousel.story.a006afbc.js.map
