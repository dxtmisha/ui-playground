"use strict";var N=Object.defineProperty;var L=(o,t,s)=>t in o?N(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var n=(o,t,s)=>(L(o,typeof t!="symbol"?t+"":t,s),s);const h=require("vue"),r=require("./object-D6teWcGS.cjs"),w=require("./DesignConstructorAbstract-CEByexyZ.cjs"),m=require("./string-C-Ov7RqZ.cjs"),C=require("./element-B5HRaKMF.cjs"),I=require("./useEnv-C3O1y5Ow.cjs"),f="d-mutation",y=m.toKebabCase(I.useEnv("DESIGNS_MAIN","design")),A=m.toKebabCase(I.useEnv("DESIGNS_GLOBAL","ui")),E="init",S="end",d="__UI_PROJECT";var c=(o=>(o.new="new",o[o.init=E]="init",o[o.end=S]="end",o))(c||{});class l{static getKeyUi(){return A}static getKeyInit(){return E}static getKeyEnd(){return S}static getAttributeUi(){return`data-${this.getKeyUi()}`}static getClassInit(){return`${f}--${this.getKeyInit()}`}static getClassEnd(){return`${f}--${this.getKeyEnd()}`}static find(t=document.body,s=c.new){const i=[];if("querySelector"in t){const e=this.getSelectorByStatus(s);t.querySelector(e)&&t.querySelectorAll(e).forEach(u=>i.push(u))}return i}static closestInit(t){var s,i;return!!((s=t==null?void 0:t.closest)!=null&&s.call(t,this.getSelectorInit())||!((i=t==null?void 0:t.closest)!=null&&i.call(t,"body")))}static getSelectorNew(){return`*[${this.getAttributeUi()}]:not(.${this.getClassInit()}):not(.${this.getClassEnd()})`}static getSelectorInit(){return`*[${this.getAttributeUi()}].${this.getClassInit()}`}static getSelectorEnd(){return`*[${this.getAttributeUi()}].${this.getClassEnd()}`}static getSelectorByStatus(t){switch(t){case c.init:return`${this.getSelectorInit()}, ${this.getSelectorEnd()}`;case c.end:return this.getSelectorEnd();default:return this.getSelectorNew()}}}class a{static isFunction(t){return t in this.functions}static isClass(t){return t in this.classes}static isComponent(t){return t in this.components}static getComponentList(){return this.components}static getComponentGlobal(){return d in window?window[d]:{}}static getComponentGlobalItem(t){var s;if(d in window)return((s=window[d])==null?void 0:s[t])??void 0}static getComponentVue(t){if(t in this.components)return this.components[t]}static getComponentItem(t){if(t in this.compItems)return this.compItems[t].item}static addFunction(t,s){this.isFunction(t)||(this.functions[t]=s)}static addClass(t,s){this.isClass(t)||(this.classes[t]=s)}static addComponent(t,s){this.isComponent(t)||(this.components[t]=s)}static addFunctionList(t){r.forEach(t,(s,i)=>{this.addFunction(i,s)})}static addClassList(t){r.forEach(t,(s,i)=>{this.addClass(i,s)})}static addComponentList(t){r.forEach(t,(s,i)=>{this.addComponent(i,s)})}static registrationComponent(t,s,i){if(this.compItems[t]={item:s,callback:i},t in this.compCaching){const e=this.compCaching[t];return delete this.compCaching[t],e}}static comp(t,s){t in this.compItems?this.compItems[t].callback(s):this.compCaching[t]=s}static removeComponent(t){t in this.compItems&&delete this.compItems[t]}}n(a,"functions",{}),n(a,"classes",{}),n(a,"components",{}),n(a,"compItems",{}),n(a,"compCaching",{});class b{constructor(t){n(this,"id");n(this,"componentName");n(this,"static");n(this,"slots",{});n(this,"props",{});n(this,"callback");var s;this.element=t,this.id=C.getElementId(t),this.componentName=((s=t.dataset)==null?void 0:s[l.getKeyUi()])??"component",this.static=c.new,this.slots=this.initSlots(),this.setStatus(c.init),this.element.classList.add(this.getClassMain())}is(t){return this.element===t}getId(){return this.id}getComponentName(){const t=m.toCamelCaseFirst(this.componentName);return a.isComponent(t)?t:m.toCamelCaseFirst(`${y}-${this.componentName}`)}getDesign(){return m.toKebabCase(this.getComponentName()).replace(/-.*?$/,"")}getClassMain(){return`${this.getDesign()}-init`}getElement(){return this.element}getStatus(){return this.static}getProps(){return{...this.getDataset(),...this.props}}getSlots(){return this.slots}setStatus(t){switch(this.removeClasses(),this.static=t,this.static){case c.init:this.element.classList.add(l.getClassInit());break;case c.end:this.element.classList.add(l.getClassEnd());break}return this}registration(t,s){const i=a.registrationComponent(this.getId(),t,e=>{r.isFilled(e)&&this.setProps(e).update()});return i&&this.setProps(i),this.callback=s,this}update(){var t;return(t=this.callback)==null||t.call(this,this.getProps()),this}disconnect(){return a.removeComponent(this.getId()),this}getDataset(){const t={};return r.forEach(this.element.dataset,(s,i)=>{i!==l.getKeyUi()&&(t[i]=r.transformation(s))}),t}setProps(t){return r.isFilled(t)&&r.forEach(t,(s,i)=>{i==="slots"?this.setSlots(s):this.props[i]=s}),this}setSlots(t){return r.isFilled(t)&&r.forEach(t,(s,i)=>{this.slots[i]=this.initChildrenList(r.toArray(s))}),this}initSlots(){const t={},s=[];for(const i of this.element.children){const e=i.getAttribute("data-slot");if(e)t[e]=this.initChildrenList(i.children);else{const u=this.initChildren(i);u&&("default"in t?t.default.push(u):t.default=[u])}s.push(i)}for(const i of s)this.element.removeChild(i);return t}initChildrenList(t){const s=[];for(const i of t){const e=this.initChildren(i);e&&s.push(e)}return s}initChildren(t){var i,e;if(t instanceof HTMLElement)return{tag:t.nodeName,attributes:{...C.getAttributes(t),innerHTML:(t==null?void 0:t.innerHTML)??""}};const s=(e=(i=t==null?void 0:t.textContent)==null?void 0:i.trim)==null?void 0:e.call(i);if(r.isFilled(s))return s;if(r.isString(t)&&r.isFilled(t))return t}removeClasses(){return this.element.classList.remove(l.getClassInit()),this.element.classList.remove(l.getClassEnd()),this}}class K{constructor(t,s){n(this,"mainElement",document.body);n(this,"componentName","div");n(this,"componentItem");n(this,"binds",h.shallowRef({}));n(this,"slots",h.shallowRef({}));var i;this.props=t,t.item&&(this.mainElement=t.item.getElement(),this.componentName=t.item.getComponentName(),this.componentItem=this.initComponentItem(),t.item.registration(s,()=>this.update())),(i=t.item)==null||i.setStatus(c.end),this.update()}update(){var s,i;const t=(s=this.props.item)==null?void 0:s.getSlots();return this.binds.value={...((i=this.props.item)==null?void 0:i.getProps())??{}},this.slots.value=t?{...t}:void 0,this}initComponentItem(){var t;return((t=a.getComponentGlobalItem(this.componentName))==null?void 0:t.item)??h.resolveComponent(this.componentName)}}class _ extends w.DesignConstructorAbstract{constructor(s,i,e){super(s,i,e);n(this,"mutation");this.mutation=new K(i,this.element),this.init()}makeOptions(){return this}initSetup(){return{mainElement:this.mutation.mainElement,componentName:this.mutation.componentName,componentItem:this.mutation.componentItem,binds:this.mutation.binds,slots:this.mutation.slots,renderSlots:h.computed(()=>this.renderSlots())}}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){var i;const s=this.setup();if(s.componentItem)return h.h(h.Teleport,{ref:this.element,class:(i=this.classes)==null?void 0:i.value.main,to:s.mainElement},[h.h(s.componentItem,s.binds.value,s.renderSlots.value)])}renderSlots(){const s=this.setup(),i={},e=s.slots.value;return e&&r.forEach(e,(u,v)=>{const g=[];u.forEach(p=>{typeof p=="string"?g.push(p):g.push(h.h(p.tag,{...p.attributes}))}),i[v]=()=>g}),i}}const D={item:b};exports.KEY_GLOBAL_PROJECT=d;exports.MutationCollect=l;exports.MutationDataItem=b;exports.MutationGlobal=a;exports.MutationItemDesign=_;exports.MutationStatus=c;exports.propsMutationItem=D;
