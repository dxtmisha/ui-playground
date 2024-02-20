"use strict";var G=Object.defineProperty;var K=(o,t,e)=>t in o?G(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e)=>(K(o,typeof t!="symbol"?t+"":t,e),e);const s=require("./Icons-BqfGdaRW.cjs"),a=require("./EventItem-C7LQ-Kp0.cjs"),r=require("vue");class N{constructor(){c(this,"cache",{})}get(t,e,i){return this.getCacheItem(t,e).getCache(i??[])}async getAsync(t,e,i){return await this.getCacheItem(t,e).getCacheAsync(i??[])}getCacheItem(t,e){return t in this.cache||(this.cache[t]=new a.CacheItem(e)),this.cache[t]}}const w=class w{static get(t,e,i){return this.cache.get(t,e,i)}};c(w,"cache"),w.cache=new N;let R=w;const U="cookie-block";class I{static get(){return this.storage.get()??!1}static set(t){this.storage.set(t)}}c(I,"storage",new s.DataStorage(U));const y={};class b{constructor(t){c(this,"value");c(this,"options",{});if(this.name=t,t in k)return k[t];this.value=y==null?void 0:y[t],k[t]=this}get(t,e){return this.value===void 0&&t&&this.set(t,e),this.value}set(t,e){this.value=s.executeFunction(t),Object.assign(this.options,e),this.update()}remove(){this.set("")}getAge(){var t;return((t=this.options)==null?void 0:t.age)??s.useEnv("cache")??7*24*60*60}update(){var t,e;if(s.isDomRuntime()&&!I.get()){const i=String(this.value??"");document.cookie=[`${encodeURIComponent(this.name)}=${encodeURIComponent(i)}`,`max-age=${i===""?"-1":this.getAge()}`,`SameSite=${((t=this.options)==null?void 0:t.sameSite)??"strict"}`,...((e=this.options)==null?void 0:e.arguments)??[]].join("; ")}}}(()=>{if(s.isDomRuntime())for(const t of document.cookie.split(";")){const[e,i]=t.trim().split("=");e&&s.isFilled(i)&&(y[e]=s.transformation(i))}})();const k={};class M{constructor(t,e="date",i=s.Geo.getLocation()){c(this,"item");c(this,"type");c(this,"code");c(this,"date");c(this,"datetime");c(this,"year",r.computed(()=>this.date.value&&this.datetime.getYear()));c(this,"month",r.computed(()=>this.date.value&&this.datetime.getMonth()));c(this,"day",r.computed(()=>this.date.value&&this.datetime.getDay()));c(this,"hour",r.computed(()=>this.date.value&&this.datetime.getHour()));c(this,"minute",r.computed(()=>this.date.value&&this.datetime.getMinute()));c(this,"second",r.computed(()=>this.date.value&&this.datetime.getSecond()));this.item=a.toRefItem(t),this.type=a.toRefItem(e),this.code=a.toRefItem(i),this.date=r.ref(s.toDate(this.item.value)),this.datetime=new a.Datetime(this.date.value,this.type.value,this.code.value),r.watch(this.item,n=>{this.date.value=s.toDate(n)}),r.watch(this.type,n=>this.datetime.setType(n)),r.watch(this.code,n=>this.datetime.setCode(n)),r.watch(this.date,n=>this.datetime.setDate(n)),this.datetime.setWatch(()=>r.triggerRef(this.date))}getItem(){return this.item}getDate(){return this.date}getDatetime(){return this.datetime}getHoursType(){return r.computed(()=>this.date.value&&this.datetime.getHoursType())}getFirstDayCode(){return r.computed(()=>this.date.value&&this.datetime.getFirstDayCode())}getYear(){return this.year}getMonth(){return this.month}getDay(){return this.day}getHour(){return this.hour}getMinute(){return this.minute}getSecond(){return this.second}getMaxDay(){return r.computed(()=>this.date.value&&this.datetime.getMaxDay())}locale(t=this.type.value,e){return r.computed(()=>this.date.value&&this.datetime.locale(t,e))}standard(t=!0){return r.computed(()=>this.date.value&&this.datetime.standard(t))}}class x extends a.EventItem{constructor(t,e,i=["click"],n,u,p){const v=a.toRefItem(t),E=a.toRefItem(e);super(v.value,i,n,u,p),E.value&&this.setElementControl(E.value),r.watch(v,D=>this.setElement(D)),r.watch(E,D=>this.setElementControl(D))}}const h=class h{static get(){return this.item}static getCountry(){return this.country}static getLanguage(){return this.language}static getStandard(){return this.standard}static getFirstDay(){return this.firstDay}static set(t){s.Geo.set(t,!0),this.item.value=s.Geo.getItem()}};c(h,"item",r.shallowRef(s.Geo.get())),c(h,"country",r.computed(()=>h.item.value.country)),c(h,"language",r.computed(()=>h.item.value.language)),c(h,"standard",r.computed(()=>h.item.value.standard)),c(h,"firstDay",r.computed(()=>h.item.value.firstDay));let f=h;class B{constructor(t=s.Geo.getLocation()){c(this,"code");c(this,"flag");this.code=a.toRefItem(t),this.flag=new s.GeoFlag(this.code.value),r.watch(this.code,e=>this.flag.setCode(e))}getCode(){return this.code}get(t=this.code.value){return r.computed(()=>this.flag.get(t))}getFlag(t=this.code.value){return r.computed(()=>{var e;return(e=this.flag.get(t))==null?void 0:e.icon})}getList(t){return r.computed(()=>this.flag.getList(t))}getNational(t){return r.computed(()=>this.flag.getNational(t))}}class O{constructor(t){c(this,"location");c(this,"intl");this.location=a.toRefItem(t),this.intl=r.computed(()=>new s.GeoIntl(this.location.value??f.getLanguage().value))}display(t,e){return r.computed(()=>this.intl.value.display(a.getRef(t),e))}languageName(t,e){return r.computed(()=>this.intl.value.languageName(a.getRef(t),e))}countryName(t,e){return r.computed(()=>this.intl.value.countryName(a.getRef(t),e))}number(t,e){return r.computed(()=>this.intl.value.number(a.getRef(t),e))}decimal(){return r.computed(()=>this.intl.value.decimal())}currency(t,e,i=!1){return r.computed(()=>this.intl.value.currency(a.getRef(t),e,i))}unit(t,e){return r.computed(()=>this.intl.value.unit(a.getRef(t),e))}percent(t,e){return r.computed(()=>this.intl.value.percent(a.getRef(t),e))}percentBy100(t,e){return r.computed(()=>this.intl.value.percentBy100(a.getRef(t),e))}date(t,e,i,n){return r.computed(()=>this.intl.value.date(a.getRef(t),e,i,n))}relative(t,e,i){return r.computed(()=>this.intl.value.relative(a.getRef(t),e,i))}relativeLimit(t,e,i,n,u,p,v){return r.computed(()=>this.intl.value.relativeLimit(a.getRef(t),e,i,n,u,p,v))}month(t,e){return r.computed(()=>this.intl.value.month(a.getRef(t),e))}months(t){return r.computed(()=>this.intl.value.months(t))}weekday(t,e){return r.computed(()=>this.intl.value.weekday(a.getRef(t),e))}weekdays(t){return r.computed(()=>this.intl.value.weekdays(t))}time(t){return r.computed(()=>this.intl.value.time(a.getRef(t)))}}const m=class m{static get(t){return this.list.find(e=>t===e.value)}static getByPhone(t){let e=this.map,i,n="";return this.toNumber(t).forEach(u=>{n===""&&u in e?(i=e[u],e=e[u].next):n+=u}),{item:i,phone:n}}static getList(){return this.list}static getMap(){return this.map}static toMask(t,e){if(s.isFilled(t)&&Array.isArray(e)&&e.length>0){const i=this.removeZero(t),n=i.length;for(const u of e)if(this.getUnnecessaryLength(u)===n)return this.toStandard(i,u)}}static removeZero(t){return t.match(/^0/)?t.replace(/^0/,""):t.match(/^89/)?t.replace(/^8/,""):t}static getUnnecessaryLength(t){return t.replace(/[^*]+/ig,"").length}static makeList(){const t=s.forEach(s.Geo.getList(),e=>{if(e!=null&&e.phoneMask)return{phone:(e==null?void 0:e.phoneCode)&&parseInt(e.phoneCode)||void 0,mask:s.toArray(e.phoneMask),value:e.country}});this.list=t.sort((e,i)=>e.phone-i.phone)}static makeMap(){this.list.forEach(t=>{t.mask.forEach(e=>{let i=this.map,n;this.toNumber(e).forEach(u=>{u in i||(i[u]={items:[],info:void 0,value:void 0,mask:[],maskFull:[],next:{}}),n=i[u],i=i[u].next}),n&&(n.value===void 0&&(n.info=t,n.value=t.value),n.mask.push(e),n.maskFull.push(e.replace(/\d/ig,"*")),n.items.push(t))})})}static toNumber(t){return t.replace(/\D+/ig,"").split("")}static toStandard(t,e){let i=0;return e.replace(/\*/ig,()=>t[i++])}};c(m,"list",[]),c(m,"map",{}),m.makeList(),m.makeMap();let C=m;const g=class g{static get(t,e){return!(t in this.hash)&&e&&this.set(t,e),this.hash[t]}static set(t,e){var n;const i=s.executeFunction(e);i!==((n=this.hash)==null?void 0:n[t])&&(this.hash[t]=i,this.update())}static addWatch(t,e){t in this.watch?this.watch[t].push(e):this.watch={[t]:[e]}}static getLocation(){const t={};return location.hash.replace(/([\w-]+)[:=]([^;]+)/ig,(...e)=>(t[e[1]]=s.transformation(e[2]),"")),t}static update(){this.block=!0;const t=s.forEach(this.hash,(e,i)=>`${i}=${encodeURIComponent(String(e))}`);t.sort(),history.replaceState(null,"",`#${t.join(";")}`),requestAnimationFrame(()=>{this.block=!1})}static reload(){if(!this.block){const t=this.getLocation();this.makeWatch(t),this.hash=t}}static makeWatch(t){s.forEach(this.watch,(e,i)=>{var n;((n=this.hash)==null?void 0:n[i])!==(t==null?void 0:t[i])&&e.forEach(u=>u(t[i]))})}};c(g,"hash",{}),c(g,"watch",{}),c(g,"block",!1),g.reload(),addEventListener("hashchange",()=>g.reload());let d=g;class l{static async get(t){var i;const e=this.getName(t);return e in this.data?this.data[e]:(await this.add(t),((i=this.data)==null?void 0:i[e])??t)}static getSync(t){const e=this.getName(t);return e in this.data?this.data[e]:t}static async getList(t){return new Promise(e=>{const i={};let n=0;for(const u of t)this.get(u).then(p=>{i[u]=p,++n>=t.length&&e(i)})})}static add(t){return new Promise(e=>{this.cache.push(...s.toArray(t)),this.resolveList.push(e),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.timeout=void 0,this.make().then(()=>{this.resolveList.forEach(i=>i()),this.resolveList=[]})},160)})}static getName(t){return`${s.Geo.getLocation()}-${t}`}static async getResponse(){const t=s.Api.isLocalhost()?this.urlLocalhost:this.url,e=await s.Api.response({path:t,request:{list:this.cache}});return(e==null?void 0:e.data)??{}}static async make(){const t=await this.getResponse();this.cache.forEach(e=>{this.data[this.getName(e)]=(t==null?void 0:t[e])??""}),this.cache=[]}}c(l,"url",s.useEnv("apiTranslate")),c(l,"urlLocalhost","translate.json"),c(l,"data",{}),c(l,"cache",[]),c(l,"resolveList",[]),c(l,"timeout");function $(o,t,e){if(o in L)return L[o];const i=new b(o),n=r.ref(i.get(t,e));return r.watch(n,u=>{i.set(u,e)}),L[o]=n,n}const L={};function j(o,t){if(o in S)return S[o];const e=r.shallowRef(d.get(o,t));return r.watch(e,i=>d.set(o,i)),d.addWatch(o,i=>{e.value=i}),S[o]=e,e}const S={};function T(o,t){if(o in F)return F[o];const e=new s.DataStorage(o,!0),i=r.shallowRef(e.get(t));return r.watch(i,n=>e.set(n)),F[o]=i,i}const F={};function W(o,t,e){if(o in A)return A[o];const i=new s.DataStorage(o),n=r.shallowRef(i.get(t,e));return r.watch(n,u=>i.set(u)),A[o]=n,n}const A={};function q(o){const t=r.shallowRef({});return r.watchEffect(async()=>{f.getLanguage()&&(t.value=await l.getList(o))}),t}const Y=Object.freeze(Object.defineProperty({__proto__:null,Api:s.Api,Cache:N,CacheItem:a.CacheItem,CacheStatic:R,Cookie:b,CookieBlock:I,DataStorage:s.DataStorage,Datetime:a.Datetime,DatetimeRef:M,EventItem:a.EventItem,EventRef:x,Geo:s.Geo,GeoFlag:s.GeoFlag,GeoFlagRef:B,GeoIntl:s.GeoIntl,GeoIntlRef:O,GeoPhone:C,GeoRef:f,Hash:d,Icons:s.Icons,Translate:l,anyToString:a.anyToString,arrFill:s.arrFill,copyObject:s.copyObject,createElement:a.createElement,executeFunction:s.executeFunction,forEach:s.forEach,frame:a.frame,getAttributes:a.getAttributes,getBind:a.getBind,getBindRef:a.getBindRef,getClassName:a.getClassName,getClient:a.getClient,getClientX:a.getClientX,getClientY:a.getClientY,getClipboardData:a.getClipboardData,getColumn:s.getColumn,getElement:a.getElement,getElementId:a.getElementId,getElementItem:a.getElementItem,getElementOrWindow:a.getElementOrWindow,getExp:a.getExp,getIndex:a.getIndex,getKey:a.getKey,getMaxLength:s.getMaxLength,getMinLength:s.getMinLength,getRef:a.getRef,inArray:s.inArray,intersectKey:s.intersectKey,isArray:s.isArray,isDifferent:s.isDifferent,isFilled:s.isFilled,isFunction:s.isFunction,isInDom:a.isInDom,isIntegerBetween:s.isIntegerBetween,isNull:s.isNull,isObject:s.isObject,isObjectNotArray:s.isObjectNotArray,isSelected:s.isSelected,isSelectedByList:s.isSelectedByList,isString:s.isString,isWindow:a.isWindow,makeStopPropagation:a.makeStopPropagation,random:s.random,render:a.render,replaceRecursive:s.replaceRecursive,replaceTemplate:a.replaceTemplate,setElementItem:a.setElementItem,splice:s.splice,strFill:a.strFill,toArray:s.toArray,toCamelCase:a.toCamelCase,toCamelCaseFirst:a.toCamelCaseFirst,toDate:s.toDate,toKebabCase:a.toKebabCase,toNumber:s.toNumber,toRefItem:a.toRefItem,transformation:s.transformation,uniqueArray:s.uniqueArray,useCookieRef:$,useEnv:s.useEnv,useHashRef:j,useSessionRef:T,useStorageRef:W,useTranslateRef:q},Symbol.toStringTag,{value:"Module"}));exports.Cache=N;exports.CacheStatic=R;exports.Cookie=b;exports.CookieBlock=I;exports.DatetimeRef=M;exports.EventRef=x;exports.GeoFlagRef=B;exports.GeoIntlRef=O;exports.GeoPhone=C;exports.GeoRef=f;exports.Hash=d;exports.Translate=l;exports.ui=Y;exports.useCookieRef=$;exports.useHashRef=j;exports.useSessionRef=T;exports.useStorageRef=W;exports.useTranslateRef=q;
