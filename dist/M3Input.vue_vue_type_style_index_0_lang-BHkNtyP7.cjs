"use strict";const e=require("vue"),a=require("./DesignConstructorAbstract-CJBNoFHy.cjs"),m=require("./props-WjojY38T.cjs");class l extends a.DesignConstructorAbstract{constructor(t,s,n){super(t,s,n),this.init()}makeOptions(){return this}initSetup(){return{}}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){var t;return e.h("div",{ref:this.element,class:(t=this.classes)==null?void 0:t.value.main})}}const d={...m.propsInput},_=e.defineComponent({name:"M3Input",__name:"M3Input",props:{...d},emits:["input","update:value","update:modelValue","change"],setup(r,{expose:t,emit:s}){const n=s,o=r,u=e.computed(()=>({main:{"m3-input":!0}})),c=e.computed(()=>({})),i=new l("m3.input",o,{emits:n,classes:u,styles:c}),p=i.render();return t(i.expose()),(h,f)=>(e.openBlock(),e.createBlock(e.unref(p)))}});exports._sfc_main=_;