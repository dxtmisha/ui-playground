"use strict";const e=require("vue"),o=require("./props-DdgmMAke.cjs"),d={...o.propsImage,turn:Boolean,disabled:Boolean,hide:Boolean,adaptive:Boolean},u=e.defineComponent({name:"M3Image",__name:"M3Image",props:{...d},emits:["load"],setup(t,{expose:a,emit:i}){const m=i,s=t,r=e.computed(()=>({main:{"m3-image":!0,"m3-image--turn":s.turn,"m3-image--disabled":s.disabled,"m3-image--hide":s.hide,"m3-image--adaptive":s.adaptive}})),c=e.computed(()=>({})),n=new o.ImageDesign("m3.image",s,{emits:m,classes:r,styles:c}),p=n.render();return a(n.expose()),(l,g)=>(e.openBlock(),e.createBlock(e.unref(p)))}});exports._sfc_main=u;
