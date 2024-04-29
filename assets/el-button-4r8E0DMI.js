import{b as O,d as Y,u as E,E as T,_ as D,c as H,h as J}from"./base-bflHmD82.js";import{A as K,g as c,a1 as Q,c as d,m as k,q as g,s as W,_ as $,ap as X,Y as Z,ak as M,d as h,o as f,h as y,w as I,a as N,F as oo,l as B,x as w,i as C,j as F,y as to,p as eo,z as so}from"./index-DpTwNufQ.js";import{a0 as ao,v as P,w as A,b as no,s as lo,z as ro,i as G,a1 as io,P as co}from"./index-Xv_KeUan.js";const uo=({from:o,replacement:s,scope:e,version:a,ref:n,type:t="API"},r)=>{K(()=>c(r),i=>{},{immediate:!0})},U=o=>{const s=Q();return d(()=>{var e,a;return(a=(e=s==null?void 0:s.proxy)==null?void 0:e.$props)==null?void 0:a[o]})},vo=(o,s={})=>{const e=k(void 0),a=s.prop?e:U("size"),n=s.global?e:ao(),t=s.form?{size:void 0}:g(P,void 0),r=s.formItem?{size:void 0}:g(A,void 0);return d(()=>a.value||c(o)||(r==null?void 0:r.size)||(t==null?void 0:t.size)||n.value||"")},j=o=>{const s=U("disabled"),e=g(P,void 0);return d(()=>s.value||c(o)||(e==null?void 0:e.disabled)||!1)},bo=()=>{const o=g(P,void 0),s=g(A,void 0);return{form:o,formItem:s}},No=(o,{formItemContext:s,disableIdGeneration:e,disableIdManagement:a})=>{e||(e=k(!1)),a||(a=k(!1));const n=k();let t;const r=d(()=>{var i;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((i=s.inputIds)==null?void 0:i.length)<=1)});return W(()=>{t=K([$(o,"id"),e],([i,v])=>{const u=i??(v?void 0:no().value);u!==n.value&&(s!=null&&s.removeInputId&&(n.value&&s.removeInputId(n.value),!(a!=null&&a.value)&&!v&&u&&s.addInputId(u)),n.value=u)},{immediate:!0})}),X(()=>{t&&t(),s!=null&&s.removeInputId&&n.value&&s.removeInputId(n.value)}),{isLabeledByFormItem:r,inputId:n}},L=Symbol("buttonGroupContextKey"),fo=(o,s)=>{uo({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},d(()=>o.type==="text"));const e=g(L,void 0),a=lo("button"),{form:n}=bo(),t=vo(d(()=>e==null?void 0:e.size)),r=j(),i=k(),v=Z(),u=d(()=>o.type||(e==null?void 0:e.type)||""),S=d(()=>{var l,p,m;return(m=(p=o.autoInsertSpace)!=null?p:(l=a.value)==null?void 0:l.autoInsertSpace)!=null?m:!1}),_=d(()=>o.tag==="button"?{ariaDisabled:r.value||o.loading,disabled:r.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),z=d(()=>{var l;const p=(l=v.default)==null?void 0:l.call(v);if(S.value&&(p==null?void 0:p.length)===1){const m=p[0];if((m==null?void 0:m.type)===M){const q=m.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(q.trim())}}return!1});return{_disabled:r,_size:t,_type:u,_ref:i,_props:_,shouldAddSpace:z,handleClick:l=>{o.nativeType==="reset"&&(n==null||n.resetFields()),s("click",l)}}},po=["default","primary","success","warning","info","danger","text",""],mo=["button","submit","reset"],V=O({size:ro,disabled:Boolean,type:{type:String,values:po,default:""},icon:{type:G},nativeType:{type:String,values:mo,default:"button"},loading:Boolean,loadingIcon:{type:G,default:()=>io},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:Y([String,Object]),default:"button"}}),go={click:o=>o instanceof MouseEvent};function b(o,s=20){return o.mix("#141414",s).toString()}function yo(o){const s=j(),e=E("button");return d(()=>{let a={};const n=o.color;if(n){const t=new co(n),r=o.dark?t.tint(20).toString():b(t,20);if(o.plain)a=e.cssVarBlock({"bg-color":o.dark?b(t,90):t.tint(90).toString(),"text-color":n,"border-color":o.dark?b(t,50):t.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":n,"hover-border-color":n,"active-bg-color":r,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":r}),s.value&&(a[e.cssVarBlockName("disabled-bg-color")]=o.dark?b(t,90):t.tint(90).toString(),a[e.cssVarBlockName("disabled-text-color")]=o.dark?b(t,50):t.tint(50).toString(),a[e.cssVarBlockName("disabled-border-color")]=o.dark?b(t,80):t.tint(80).toString());else{const i=o.dark?b(t,30):t.tint(30).toString(),v=t.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(a=e.cssVarBlock({"bg-color":n,"text-color":v,"border-color":n,"hover-bg-color":i,"hover-text-color":v,"hover-border-color":i,"active-bg-color":r,"active-border-color":r}),s.value){const u=o.dark?b(t,50):t.tint(50).toString();a[e.cssVarBlockName("disabled-bg-color")]=u,a[e.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,a[e.cssVarBlockName("disabled-border-color")]=u}}}return a})}const ko=h({name:"ElButton"}),_o=h({...ko,props:V,emits:go,setup(o,{expose:s,emit:e}){const a=o,n=yo(a),t=E("button"),{_ref:r,_size:i,_type:v,_disabled:u,_props:S,shouldAddSpace:_,handleClick:z}=fo(a,e),x=d(()=>[t.b(),t.m(v.value),t.m(i.value),t.is("disabled",u.value),t.is("loading",a.loading),t.is("plain",a.plain),t.is("round",a.round),t.is("circle",a.circle),t.is("text",a.text),t.is("link",a.link),t.is("has-bg",a.bg)]);return s({ref:r,size:i,type:v,disabled:u,shouldAddSpace:_}),(l,p)=>(f(),y(C(l.tag),to({ref_key:"_ref",ref:r},c(S),{class:c(x),style:c(n),onClick:c(z)}),{default:I(()=>[l.loading?(f(),N(oo,{key:0},[l.$slots.loading?B(l.$slots,"loading",{key:0}):(f(),y(c(T),{key:1,class:w(c(t).is("loading"))},{default:I(()=>[(f(),y(C(l.loadingIcon)))]),_:1},8,["class"]))],64)):l.icon||l.$slots.icon?(f(),y(c(T),{key:1},{default:I(()=>[l.icon?(f(),y(C(l.icon),{key:0})):B(l.$slots,"icon",{key:1})]),_:3})):F("v-if",!0),l.$slots.default?(f(),N("span",{key:2,class:w({[c(t).em("text","expand")]:c(_)})},[B(l.$slots,"default")],2)):F("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var Bo=D(_o,[["__file","button.vue"]]);const ho={size:V.size,type:V.type},So=h({name:"ElButtonGroup"}),zo=h({...So,props:ho,setup(o){const s=o;eo(L,so({size:$(s,"size"),type:$(s,"type")}));const e=E("button");return(a,n)=>(f(),N("div",{class:w(`${c(e).b("group")}`)},[B(a.$slots,"default")],2))}});var R=D(zo,[["__file","button-group.vue"]]);const wo=H(Bo,{ButtonGroup:R}),Vo=J(R);export{wo as E,bo as a,uo as b,j as c,No as d,Vo as e,vo as u};
