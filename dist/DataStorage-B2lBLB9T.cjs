"use strict";var u=Object.defineProperty;var g=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var r=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);const h=require("./data-DTMqCkcG.cjs"),o=require("./useEnv-DTNVjXgr.cjs");class l{constructor(e,t=!1){r(this,"value");r(this,"age");this.name=e,this.isSession=t;const i=`${t?"session":"storage"}#${e}`;if(i in n)return n[i];const a=this.getValue();a&&(this.value=a.value,this.age=a.age),n[i]=this}get(e,t){if(this.value&&this.isCache(t))return this.value;if(e)return this.set(e)}set(e){var t,i;return this.value=h.executeFunction(e),this.age=new Date().getTime(),this.value===void 0?(t=this.getMethod())==null||t.removeItem(this.getIndex()):(i=this.getMethod())==null||i.setItem(this.getIndex(),JSON.stringify({value:this.value,age:this.age})),this.value}isCache(e){return h.isNull(e)||this.age&&this.age+e*1e3>=new Date().getTime()}getMethod(){return this.isSession?window==null?void 0:window.sessionStorage:window==null?void 0:window.localStorage}getIndex(){return`${o.useEnv("prefix","")}${this.name}`}getValue(){var t;const e=(t=this.getMethod())==null?void 0:t.getItem(this.getIndex());if(e)try{return JSON.parse(e)}catch{}}}const n={};exports.DataStorage=l;
