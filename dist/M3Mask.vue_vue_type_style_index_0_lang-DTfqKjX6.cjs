"use strict";var B=Object.defineProperty;var L=(n,t,e)=>t in n?B(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var a=(n,t,e)=>(L(n,typeof t!="symbol"?t+"":t,e),e);const l=require("vue"),u=require("./string-BsLl7qfq.cjs"),x=require("./DesignConstructorAbstract-CJBNoFHy.cjs"),y=require("./Datetime-Dhr0gHdL.cjs"),m=require("./CacheItem-CMrGJ4bG.cjs"),v=require("./useInputCheck-C7zfxtme.cjs"),M=require("./event-DT6CybI_.cjs");class V{constructor(t){this.props=t}isNumber(){return this.get()==="number"}isCurrency(){return this.get()==="currency"}isCurrencyOrNumber(){return this.isNumber()||this.isCurrency()}isEmail(){return this.get()==="email"}isTime(){return["full","datetime","time","hour-minute","hour","minute","second"].indexOf(this.get())!==-1}isDate(){return this.isTime()||["date","year-month","month","day"].indexOf(this.get())!==-1}get(){var t;return((t=this.props)==null?void 0:t.type)??"text"}getByDate(){return this.isDate()?this.get():"date"}}class T{constructor(){a(this,"chars",[]);a(this,"start",!1)}is(){return this.chars.length>0}get(){return this.chars}add(t){return this.chars.push(t),this}go(t){return this.start?(this.add(t),!1):(this.goStart(),!0)}goStart(){return this.start=!0,this}reset(){return this.resetChars(),this.start=!1,this}resetChars(){return this.chars=[],this}}class D{constructor(t){a(this,"value",!1);this.buffer=t}is(){return this.value}in(){this.value=!0,this.buffer.reset()}out(){this.value=!1,this.buffer.reset()}}class E{constructor(){a(this,"value",{})}is(t){return t in this.value}get(){return this.value}getCode(){return[...Object.keys(this.value),...Object.values(this.value)]}getByIndex(t){var e;return((e=this.value)==null?void 0:e[t])??0}add(t){return this.value[t]=this.getByIndex(t)+1,this}pop(t){return this.is(t)?(--this.value[t]<=0&&delete this.value[t],!0):!1}reset(){return this.value={},this}expandMask(t){let e=t;return u.forEach(this.value,(s,i)=>{e=e.replace(u.getExp(i,"g","([:value]+)"),r=>`${r}${u.strFill(i,s)}`)}),e}}class F{constructor(){a(this,"char","")}is(){return this.char!==""}isChar(t){return this.char===t}get(){return this.char}set(t){return this.char=t,this}reset(){return this.set("")}}class O{constructor(){a(this,"length",0)}is(){return this.get()>0}get(){return this.length}set(t){return this.length=t,this}}const A={Y:"[0-9]{4}",M:{type:"number",min:"1",max:"12"},D:n=>{var e,s;return{type:"number",min:"1",max:new y.Datetime(`${((e=n==null?void 0:n.Y)==null?void 0:e.value)??"2000"}-${((s=n==null?void 0:n.M)==null?void 0:s.value)??"01"}-01`).getMaxDay().toString()}},h:{type:"number",min:"0",max:"23"},m:{type:"number",min:"0",max:"59"},s:{type:"number",min:"0",max:"59"}};class R{constructor(t,e){this.props=t,this.type=e}getDatetime(t){var e;return new y.Datetime(t??"1987-12-18T10:20:30",this.type.getByDate(),(e=this.props)==null?void 0:e.language)}getMask(){return this.getDatetime().setHour24(!0).locale(void 0,"2-digit").replace("1987","YYYY").replace("12","MM").replace("18","DD").replace("10","hh").replace("20","mm").replace("30","ss").split("")}getValue(t){return this.getDatetime(t).locale(void 0,"2-digit")}getValueStandard(t){var s,i,r,h,c,o;const e=`${((s=t==null?void 0:t.Y)==null?void 0:s.value)||"2000"}-${((i=t==null?void 0:t.M)==null?void 0:i.value)||"01"}-${((r=t==null?void 0:t.D)==null?void 0:r.value)||"01"}T${((h=t==null?void 0:t.h)==null?void 0:h.value)||"00"}:${((c=t==null?void 0:t.m)==null?void 0:c.value)||"00"}:${((o=t==null?void 0:t.s)==null?void 0:o.value)||"00"}`;return isNaN(Date.parse(e))?"":this.getDatetime(e).standard(!1)}getPattern(){return A}getView(t){var e;return(e=this.getViewList())==null?void 0:e[t]}getViewList(){return{Y:"y",M:"m",D:"d",h:"h",m:"m",s:"s"}}}class K{constructor(t,e,s){this.props=t,this.type=e,this.rubberItem=s}isFractionRubber(){return this.props.fraction===!0}getIntl(){var t;return new y.GeoIntl((t=this.props)==null?void 0:t.language)}getFraction(){var e;if(this.type.isCurrency())return 2;const t=(e=this.props)==null?void 0:e.fraction;return typeof t=="number"?t:typeof t=="string"&&t.match(/[0-9]+/)?Number(t):this.rubberItem.is("f")?this.rubberItem.getByIndex("f")+1:t===!0?1:0}getMask(){return(this.type.isCurrency()?this.getCurrency():this.getNumber()).replace(/9/ig,"n").replace(/3/ig,"f").split("")}getSpecial(){return{n:{},f:{defaultValue:"0"}}}getRubber(){return{n:{rubber:!0,transitionChar:this.getDecimal(),maxLength:10},f:{rubber:this.isFractionRubber(),maxLength:4}}}getValueStandard(t){var e,s;return`${((e=t==null?void 0:t.n)==null?void 0:e.value)||"0"}.${((s=t==null?void 0:t.f)==null?void 0:s.value)||"0"}`}getNumber(){return this.getIntl().number(this.getNumberForString(),{maximumFractionDigits:9})}getCurrency(){return this.getIntl().currency(this.getNumberForString())}getDecimal(){return[this.getIntl().decimal(),"."]}getView(){return"0"}getNumberForString(){var r;const t=this.getFraction(),e=u.strFill("9",this.rubberItem.getByIndex("n")+1),s=t?`.${u.strFill("3",t)}`:"",i=this.type.isCurrency()&&((r=this.props)!=null&&r.currency)?` ${this.props.currency}`:"";return`${e}${s}${i}`}}class N extends m.CacheItem{constructor(t,e,s){super(()=>this.initValue()),this.props=t,this.type=e,this.format=s}isSpecial(t){return this.get().indexOf(t)!==-1}isTransitionChar(t,e){const s=this.getTransitionChar(t);return s?u.isSelected(e,s):!1}isString(){return this.get().length<=1}isDefault(t){return!!this.getDefault(t)}get(){var t,e;return this.getCache([(t=this.props)==null?void 0:t.type,(e=this.props)==null?void 0:e.special])}getFirst(){var t;return((t=this.get())==null?void 0:t[0])??"*"}getDefault(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.defaultValue}getTransitionChar(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.transitionChar}getMatch(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.match}getPattern(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.pattern}getView(t){var e;return(e=this.getSpecialItem(t))==null?void 0:e.view}getRubberList(){const t={},e=this.getSpecial();return u.isObjectNotArray(e)&&u.forEach(e,(s,i)=>{s!=null&&s.rubber&&(t[i]=s)}),t}getSpecial(){var t;return this.type.isCurrencyOrNumber()?this.format.getSpecial():((t=this.props)==null?void 0:t.special)??"*"}getSpecialItem(t){const e=this.getSpecial();if(u.isObjectNotArray(e)&&t in e)return e[t]}initValue(){if(this.type.isCurrencyOrNumber())return["n","f"];if(this.type.isTime())return["Y","M","D","h","m","s"];if(this.type.isDate())return["Y","M","D"];const t=this.getSpecial();return u.isArray(t)?t:u.isObject(t)?Object.keys(t):[t]}}const C=/[0-9]/;class j{constructor(t,e){this.props=t,this.special=e}is(t,e){const s=this.get(e);return s instanceof RegExp?!!t.match(s):u.isString(s)?!!t.match(new RegExp(s)):!!t.match(C)}get(t){var e;return(t&&this.special.getMatch(t))??((e=this.props)==null?void 0:e.match)??C}filter(t){const e=this.special.get();return t.split("").filter(s=>e.find(i=>this.is(s,i)))}}class ${constructor(t,e,s,i){a(this,"inputs");this.props=t,this.type=e,this.date=s,this.special=i,this.inputs=new m.CacheItem(()=>this.initInput())}isCheck(){var t;return!!((t=this.props)!=null&&t.check)}get(t){var e;return t==="check"?this.getCheck():(e=this.getList())==null?void 0:e[t]}getList(){const t=this.getByType();for(const e in t){const s=this.getPattern(e);u.isObjectNotArray(s)&&u.isObjectNotArray(t[e])&&Object.assign(t[e],s)}return t}getPattern(t){var e;return(t&&this.special.getPattern(t))??((e=this.props)==null?void 0:e.pattern)}getCheck(){var t;return(t=this.props)==null?void 0:t.check}getInput(t="check"){var e;return(e=this.getInputList())==null?void 0:e[t]}getInputList(){var t,e;return this.inputs.getCache([(t=this.props)==null?void 0:t.pattern,(e=this.props)==null?void 0:e.check])}getByType(){if(this.type.isDate())return this.date.getPattern();const t={};return this.special.get().forEach(e=>{t[e]={}}),t}initInput(){const t={},e=this.getCheck();return u.forEach(this.getList(),(s,i)=>{t[i]=v.useInputCheck(s,i)}),e&&(t.check=v.useInputCheck(e)),t}}class P{constructor(t,e){this.props=t,this.type=e}isEnd(){var t;return this.type.isCurrencyOrNumber()||((t=this.props)==null?void 0:t.dir)==="rtl"||!1}isRight(){var t;return((t=this.props)==null?void 0:t.right)||this.isEnd()}}class _ extends m.CacheItem{constructor(t,e,s,i,r,h,c){super(()=>this.initList()),this.props=t,this.type=e,this.rubberItem=s,this.rubberTransition=i,this.special=r,this.match=h,this.format=c}is(t){return t in this.getList()}isTransition(t){return this.getTransitionList().indexOf(t)>=0}isValue(t,e){return e in t&&this.is(e)}get(t){var e;return(e=this.getList())==null?void 0:e[t]}getList(){var t,e;return this.getCache([(t=this.props)==null?void 0:t.type,(e=this.props)==null?void 0:e.special])}getTransitionList(){return u.getColumn(Object.values(this.getList()).filter(t=>"transitionChar"in t&&(u.isString(t.transitionChar)||u.isArray(t.transitionChar))),"transitionChar").flat()}update(t,e,s){const i=this.get(e),r=t==null?void 0:t[e];return i&&r?u.isSelected(s,i==null?void 0:i.transitionChar)||i!=null&&i.maxLength&&(i==null?void 0:i.maxLength)<=(r==null?void 0:r.maxLength)?(this.rubberTransition.set(e),!1):(r.end&&this.match.is(s,e)&&!this.rubberTransition.isChar(e)&&(this.rubberItem.add(e),this.rubberTransition.reset()),!0):!1}pop(t){return this.rubberItem.pop(t)}reset(){return this.rubberItem.reset(),this.rubberTransition.reset(),this}initList(){const t=this.special.getRubberList();return this.type.isCurrencyOrNumber()?u.replaceRecursive(this.format.getRubber(),t):t}}class q extends m.CacheItem{constructor(e,s,i,r,h,c,o){super(()=>this.initMask());a(this,"info");this.props=e,this.type=s,this.rubberItem=i,this.characterLength=r,this.date=h,this.format=c,this.special=o,this.info=new m.CacheItem(()=>this.initInfo())}get(e){var s;return((s=this.getList())==null?void 0:s[e])??""}getInfo(){return this.info.getCache(this.getComparison())}getInfoBySelection(e){const s=this.getInfo();return s.find(i=>i.key>=e)??s[s.length-1]}getList(){return this.getCache(this.getComparison())}getByChar(e,s=-1){let i=s;return this.getList().forEach((r,h)=>{r===e&&h>=s&&(i=h)}),i}getLength(){return this.getList().length}getMaxLength(){const e=this.getMask();return u.isArray(e)?u.getMaxLength(e):this.getList().length}getLengthBySpecial(){return this.getInfo().length}getQuantity(e,s){if(e===s)return 1;let i=0;for(let r=e;r<s;r++)this.special.isSpecial(this.get(r))&&i++;return i}getComparison(){var e,s,i,r,h,c;return[this.characterLength.get(),...this.rubberItem.getCode(),(e=this.props)==null?void 0:e.mask,(s=this.props)==null?void 0:s.special,(i=this.props)==null?void 0:i.fraction,(r=this.props)==null?void 0:r.currency,(h=this.props)==null?void 0:h.type,(c=this.props)==null?void 0:c.language]}getMask(){var e;return((e=this.props)==null?void 0:e.mask)??""}getMaskActive(){const e=this.getMask();return u.isArray(e)?e.find(s=>this.getSpecialLength(s)>=this.characterLength.get())||(e==null?void 0:e[e.length-1])||"":e}getBasic(){return this.rubberItem.expandMask(this.getMaskActive()).split("")}getSpecialLength(e){return e.split("").filter(s=>this.special.isSpecial(s)).length}initMask(){return this.type.isCurrencyOrNumber()?this.format.getMask():this.type.isDate()?this.date.getMask():this.getBasic()}initInfo(){const e=[];let s=0;return this.getList().forEach((i,r)=>{this.special.isSpecial(i)&&(e.push({index:s,key:r,char:i}),s++)}),e}}class Y{constructor(t,e){a(this,"value",0);a(this,"immediate",0);a(this,"shift",!1);this.special=t,this.mask=e}get(){return this.value}getFirst(){var t,e;return(e=(t=this.mask.getInfo())==null?void 0:t[0])==null?void 0:e.key}getFocus(){return this.getCharacter(this.value)}getNext(){return this.getCharacter(this.value+1)}getPrevious(){return this.getCharacter(this.value-1)}getImmediate(){return this.getCharacter(this.immediate)}getShift(){return this.shift?this.value>0?this.getCharacter(this.value-1)+1:0:this.getFocus()}set(t){return this.value=t,this}setByMask(t,e=!0){if(e){let s,i;this.mask.getInfo().forEach(r=>{s===void 0&&r.key>=t&&(s=r.index),r.key<=t&&(i=r.index)}),this.set(s!==void 0?s:this.mask.getLengthBySpecial()),this.setImmediate(i!==void 0?i:this.mask.getLengthBySpecial())}return this}setImmediate(t){return this.immediate=t,this}setShift(t){return this.shift=t,this}resetImmediate(){return this.immediate=this.value<=0?0:this.value-1,this}goBack(){return this.value>0&&this.value--,this}goNext(){return this.value<=this.mask.getLength()&&this.value++,this}getCharacter(t){for(const e of this.mask.getInfo())if(e.index>=t)return e.key;return this.mask.getLength()}}const b="~";class H{constructor(t,e,s,i,r,h){a(this,"value",[]);this.rubberItem=t,this.characterLength=e,this.special=s,this.rubber=i,this.mask=r,this.selection=h}is(){return this.value.length>0}isCharDelete(){const t=this.selection.get();return t in this.value&&this.value[t]===b}get(){return this.value}getFocus(){return this.mask.get(this.selection.getFocus())}getImmediate(){return this.mask.get(this.selection.getImmediate())}getNext(){return this.mask.get(this.selection.getNext())}add(t){return this.value.splice(this.selection.get(),this.isCharDelete()?1:0,t),this.selection.goNext().resetImmediate(),this.updateLength(),this}pop(){const t=this.selection.get()-1;return this.isSpecialNextAnother()?this.value[t]=b:(this.value.splice(t,1),this.updateLength()),this.selection.goBack().resetImmediate(),this}reset(){return this.value=[],this.selection.set(0).resetImmediate(),this.updateLength(),this}shift(t=1){return this.characterLength.set(this.value.length+t),this}isSpecialNextAnother(){const t=this.selection.get()-1,e=this.value.length;if(t>=0&&t<=e){const s=this.mask.getInfo(),i=s[t].char;if(!this.rubberItem.is(i)){for(let r=t;r<e;r++)if(r in s){const h=s[r].char;if(this.special.isSpecial(h)&&i!==h)return!0}}}return!1}updateLength(){return this.characterLength.set(this.value.length),this}}class U extends m.CacheItem{constructor(t,e,s,i){super(()=>this.initValue()),this.rubberTransition=t,this.mask=e,this.special=s,this.character=i}is(){return this.getLength()>0}get(){return this.getCache([...this.mask.getList(),...this.character.get()])}getChar(t){var e;return(e=this.get())==null?void 0:e[t]}getLength(){return this.get().length}initValue(){const t=this.character.get(),e=[];let s=0;for(const i of this.mask.getList())if(!this.special.isSpecial(i))e.push(i);else if(s in t){if(e.push(t[s++]),s>t.length&&this.rubberTransition.is()&&!this.rubberTransition.isChar(i))break}else break;return e.join("")}}class G{constructor(t,e,s,i,r,h){a(this,"info");a(this,"valueFinal");this.type=t,this.date=e,this.format=s,this.mask=i,this.special=r,this.valueBasic=h,this.info=new m.CacheItem(()=>this.initInfo()),this.valueFinal=new m.CacheItem(()=>this.initValue())}isFull(){for(const t of Object.values(this.getInfo()))if(!t.full)return!1;return!0}isEnd(){for(const t of Object.values(this.getInfo()))if(!t.end)return!1;return!0}isFullByGroup(t){var e;return((e=this.getInfoItem(t))==null?void 0:e.full)??!1}get(){return this.type.isCurrencyOrNumber()?this.format.getValueStandard(this.getInfo()):this.type.isDate()?this.isFull()?this.date.getValueStandard(this.getInfo()):"":this.valueFinal.getCache([...this.valueBasic.get()])}getForCheck(){const t=this.get();return{group:"check",value:t,maxLength:t.length,full:this.isFull(),end:this.isEnd(),chars:t.split("")}}getInfo(){return this.info.getCache([this.valueBasic.get(),...this.mask.getList()])}getInfoItem(t){var e;return(e=this.getInfo())==null?void 0:e[t]}isStandard(t){return!!this.valueBasic.getChar(t)}add(t,e){return e in t||(t[e]={group:e,value:"",maxLength:0,full:!1,end:!1,chars:[]}),t[e]}initInfo(){const t=this.valueBasic.get(),e={};return this.mask.getList().forEach((s,i)=>{if(this.special.isSpecial(s)){const r=this.add(e,s);this.isStandard(i)&&t[i]!==b&&r.chars.push(t[i]),r.maxLength++,r.value=r.full?r.chars.join(""):"",r.full=this.special.isDefault(s)||r.maxLength===r.chars.length,r.end=r.maxLength===r.chars.length}}),e}initValue(){const t=this.valueBasic.get().split(""),e=this.mask.getList();let s="";for(const i in e)if(i in t)s+=t[i];else{const r=this.special.getDefault(e[i]);r&&(s+=r)}return s}}class Q{constructor(t,e){this.pattern=t,this.value=e}isError(t){var s;const e=(s=this.get())==null?void 0:s.group;return!!(e&&(e===t||e==="check"))}checkValidity(){return this.get()===void 0}get(){for(const t of Object.values(this.pattern.getInputList())){const e=this.value.getInfoItem(t.group);if(e&&e.full){const s=t.check(e.value);if(s&&!s.status)return s}}return this.getValidationCheck()}getMessage(){var t;return((t=this.get())==null?void 0:t.validationMessage)??""}getValidationCheck(){var t;if(this.value.isFull()){const e=this.value.getForCheck();if(this.pattern.isCheck()){const s=(t=this.pattern.getInput(e.group))==null?void 0:t.check(e.value);if(s&&!s.status)return s}return{value:e.value,required:!0}}return{value:this.value.get(),required:!1}}}const W="_";class z{constructor(t,e,s,i,r,h,c,o,f,p="is-character"){this.props=t,this.type=e,this.date=s,this.format=i,this.special=r,this.rubber=h,this.mask=c,this.valueBasic=o,this.validation=f,this.className=p}get(){const t=[],e=this.valueBasic.get();return this.mask.getList().forEach((s,i)=>{const r=e==null?void 0:e[i];t.push({className:`${this.className} ${this.className}--${this.getStatus(s,r)}`,value:this.getValue(s,r)})}),t}getInput(){const t=[],e=this.mask.getList();return this.valueBasic.get().split("").forEach((s,i)=>{s===b?t.push(this.getSpecialToView((e==null?void 0:e[i])??"")??s):t.push(s)}),t.join("")}isValue(t){return!!(t&&t!==b)}getStatus(t,e){return this.isValue(e)?this.special.isSpecial(t)?this.validation.isError(t)?"error":"special":"standard":this.rubber.isTransition(t)?"transition":"placeholder"}getValue(t,e){return this.isValue(e)?e:this.getSpecialToView(t)}getSpecialToView(t){var e;return this.special.isSpecial(t)?this.getViewChar(t)??this.special.getView(t)??((e=this.props)==null?void 0:e.view)??W:t}getViewChar(t){if(this.type.isDate())return this.date.getView(t);if(this.type.isCurrencyOrNumber())return this.format.getView()}}class J{constructor(t,e){a(this,"type");a(this,"event");this.validation=t,this.callbackEvent=e}isValue(){return!!(this.type&&["input","change"].indexOf(this.type)>=0)}go(){if(this.type&&this.event){const t=this.isValue()?this.validation.get():void 0;this.callbackEvent(this.type,this.event,t)}return this}set(t,e){return this.setType(t),this.setEvent(e),this}setType(t){return this.type=t,this}setEvent(t){return this.event=t,this}reset(){return this.resetType(),this.resetEvent(),this}resetType(){return this.type=void 0,this}resetEvent(){return this.event=void 0,this}}class X{constructor(t,e,s,i,r,h,c,o,f,p,d,k,I,S,w){this.type=t,this.buffer=e,this.focus=s,this.rubberTransition=i,this.date=r,this.special=h,this.match=c,this.rubber=o,this.mask=f,this.selection=p,this.character=d,this.valueBasic=k,this.value=I,this.emit=S,this.element=w}add(t,e,s=!0){let i=!1;return this.selection.setByMask(t,s),this.rubberTransition.reset(),u.toArray(e).forEach(r=>{const h=this.character.getFocus(),c=this.character.getImmediate();this.selection.setShift(this.rubber.update(this.value.getInfo(),c,r)),this.rubberTransition.is()?this.selection.setByMask(this.mask.getByChar(this.rubberTransition.get(),this.selection.getImmediate())+1,s):this.match.is(r,h)&&(this.character.shift(),this.character.getFocus()&&(this.mask.getMaxLength()>this.valueBasic.getLength()||this.character.isCharDelete())&&(this.character.add(r),i=!0))}),this.goSelection(),i}pop(t,e=t,s=!0){if(t>=0&&e<=this.mask.getMaxLength()){let i=this.mask.getQuantity(t,e);for(s&&this.selection.setByMask(e);i--;)this.rubberTransition.reset(),this.character.pop(),this.character.shift(0),this.selection.setShift(this.rubber.pop(this.character.getFocus()));this.goSelection()}return this}reset(t=""){if(this.character.reset(),this.rubber.reset(),u.isFilled(t)){const e=this.type.isDate()?this.date.getValue(t):t;this.add(0,this.extra(e.split("")))}return this}extra(t){var h,c;if(this.character.is())return t;const e=this.mask.getList(),s=[...t];let i=this.match.get((c=(h=this.mask.getInfo())==null?void 0:h[0])==null?void 0:c.char),r=0;if(i)for(const o in e){const f=e[o];if(this.special.isSpecial(f)){for(let p=r;p<s.length&&(r++,!s[p].match(i));p++);i=this.match.get(f)}else if(f.match(i)){let p=!1;for(let d=r;d<s.length;d++){const k=s[d];if(r++,k.match(i)){f===k?(s.splice(d,1),r--):p=!0;break}}if(p)break}}return s}goSelection(t=!0){return this.focus.is()&&requestAnimationFrame(()=>{if(this.element.value&&(!t||!this.goBuffer())){const e=this.valueBasic.getLength(),s=this.selection.getShift(),i=e<s?e:s;this.element.value.selectionEnd=i,this.element.value.selectionStart=i}}),this}goBuffer(){return this.buffer.is()?(this.add(this.selection.getShift(),this.buffer.get()),this.buffer.resetChars(),!0):(this.buffer.reset(),this.emit.go(),!1)}}class Z{constructor(t,e,s,i,r,h,c,o,f){a(this,"change",!1);a(this,"unidentified");this.buffer=t,this.focus=e,this.characterLength=s,this.right=i,this.selection=r,this.valueBasic=h,this.validation=c,this.emit=o,this.data=f}onFocus(t){this.change=!1,this.focus.in(),this.emit.set("focus",t).go()}onBlur(t){this.change&&this.emit.setType("change").go(),this.focus.out(),this.emit.set("blur",t).go()}onKeydown(t){const e=this.getSelectionInfo(t),{start:s,end:i}=e;this.emit.set("keydown",t).go(),!this.isMetaKey(t)&&(this.isKey(t)?t.key==="Backspace"?(s>0||s!==i)&&this.data.pop(s,i):t.key.length<=1&&(s===i?this.buffer.go(t.key)&&this.data.add(s,t.key):(this.buffer.goStart(),this.data.pop(s,i).add(this.selection.getShift(),t.key))):this.unidentified=e)}onKeyup(t){this.emit.set("keyup",t).go(),!this.isMetaKey(t)&&this.isKey(t)&&["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].indexOf(t.key)>=0&&(this.makeToEnd(t),this.makeToStart(t))}onBeforeinput(t){this.emit.set("beforeinput",t).go(),this.unidentified||(this.makeChange(t),M.makeStopPropagation(t))}onInput(t){if(this.unidentified){const e=t.target;(this.unidentified.length>e.value.length||this.unidentified.start!==this.unidentified.end)&&this.data.pop(this.unidentified.start,this.unidentified.end),"data"in t?t.data&&this.buffer.go(t.data)&&this.data.add(this.unidentified.start,t.data):this.data.reset(e.value),this.makeChange(t),this.unidentified=void 0}}onPaste(t){const{start:e,end:s}=this.getSelectionInfo(t);u.getClipboardData(t).then(i=>{const r=i.split("");e===s?this.data.add(e,this.data.extra(r)):this.data.pop(e,s).add(this.selection.getShift(),this.data.extra(r)),this.change=!0,this.emit.set("paste",t).go()}).catch(i=>console.error("getClipboardData",i))}onChange(t){const e=t.target;this.data.reset(e.value),this.emit.set("change",t).go()}onClick(t){this.makeToEnd(t),this.makeToStart(t)}isMetaKey(t){return t.metaKey||t.altKey||t.ctrlKey}isKey(t){return"key"in t&&t.key!=="Unidentified"}getSelectionInfo(t){const e=t.target;return{target:e,start:e.selectionStart??0,end:e.selectionEnd??0,length:e.value.length}}makeChange(t){this.change=!0,this.emit.set("input",t),!this.buffer.is()&&(this.emit.go(),this.emit.resetType())}makeToEnd(t){if(this.right.isRight()){const e=this.valueBasic.getLength(),{target:s,start:i,end:r}=this.getSelectionInfo(t);i>e&&(s.selectionStart=e),r>e&&(s.selectionEnd=e)}}makeToStart(t){const e=this.selection.getFirst(),{target:s,start:i}=this.getSelectionInfo(t);i<e&&(s.selectionStart=e,s.selectionEnd=e)}}class tt{constructor(t,e,s,i="is-character"){a(this,"type");a(this,"buffer");a(this,"focus");a(this,"rubberItem");a(this,"rubberTransition");a(this,"characterLength");a(this,"date");a(this,"format");a(this,"special");a(this,"match");a(this,"pattern");a(this,"right");a(this,"rubber");a(this,"item");a(this,"selection");a(this,"character");a(this,"valueBasic");a(this,"value");a(this,"validation");a(this,"view");a(this,"emit");a(this,"data");a(this,"event");a(this,"oldValue","");this.type=new V(t),this.buffer=new T,this.focus=new D(this.buffer),this.rubberItem=new E,this.rubberTransition=new F,this.characterLength=new O,this.date=new R(t,this.type),this.format=new K(t,this.type,this.rubberItem),this.special=new N(t,this.type,this.format),this.match=new j(t,this.special),this.pattern=new $(t,this.type,this.date,this.special),this.right=new P(t,this.type),this.rubber=new _(t,this.type,this.rubberItem,this.rubberTransition,this.special,this.match,this.format),this.item=new q(t,this.type,this.rubberItem,this.characterLength,this.date,this.format,this.special),this.selection=new Y(this.special,this.item),this.character=new H(this.rubberItem,this.characterLength,this.special,this.rubber,this.item,this.selection),this.valueBasic=new U(this.rubberTransition,this.item,this.special,this.character),this.value=new G(this.type,this.date,this.format,this.item,this.special,this.valueBasic),this.validation=new Q(this.pattern,this.value),this.view=new z(t,this.type,this.date,this.format,this.special,this.rubber,this.item,this.valueBasic,this.validation,i),this.emit=new J(this.validation,s),this.data=new X(this.type,this.buffer,this.focus,this.rubberTransition,this.date,this.special,this.match,this.rubber,this.item,this.selection,this.character,this.valueBasic,this.value,this.emit,e),this.event=new Z(this.buffer,this.focus,this.characterLength,this.right,this.selection,this.valueBasic,this.validation,this.emit,this.data),t!=null&&t.value&&(this.oldValue=u.anyToString(t==null?void 0:t.value),this.data.reset(this.oldValue))}getValueBasic(){if(this.right.isRight()){let t="";return this.view.get().forEach(e=>{t+=e.value}),t}return this.view.getInput()}getClasses(){return{"??--value":this.characterLength.is(),"??--end":this.right.isEnd()}}goSelection(){return this.data.goSelection(!1),this}reset(t){const e=u.anyToString(t);return this.oldValue!==e?(this.oldValue=e,this.data.reset(e),this.emit.set("reset",{}).go(),!0):!1}}class et{constructor(t,e,s,i="is-character"){a(this,"mask");a(this,"valueBasic",l.shallowRef(""));a(this,"value",l.shallowRef(""));a(this,"view",l.shallowRef([]));a(this,"classes",l.shallowRef({}));a(this,"onFocus",t=>this.mask.event.onFocus(t));a(this,"onBlur",t=>this.mask.event.onBlur(t));a(this,"onKeydown",t=>this.mask.event.onKeydown(t));a(this,"onKeyup",t=>this.mask.event.onKeyup(t));a(this,"onBeforeinput",t=>this.mask.event.onBeforeinput(t));a(this,"onInput",t=>this.mask.event.onInput(t));a(this,"onChange",t=>this.mask.event.onChange(t));a(this,"onPaste",t=>this.mask.event.onPaste(t));a(this,"onClick",t=>this.mask.event.onClick(t));this.mask=new tt(t,e,(r,h,c)=>{r==="input"&&this.updateValue(),s(r,h,c)},i),l.watchEffect(()=>{this.mask.reset(t==null?void 0:t.value),this.updateValue()})}updateValue(){const t=this.mask.getValueBasic(),e=t!==this.valueBasic.value;return this.valueBasic.value=t,this.value.value=this.mask.value.get(),this.view.value=this.mask.view.get(),e&&this.mask.goSelection(),this.classes.value=this.mask.getClasses(),this}}class st extends x.DesignConstructorAbstract{constructor(e,s,i){super(e,s,i);a(this,"mask");this.mask=new et(s,this.element,(r,h,c)=>{var o;(o=this.emits)==null||o.call(this,r,h,c)},this.getSubClass(["character","item"])),this.init()}renderData(){var s;const e=this.setup();if((s=this.props)!=null&&s.name)return l.h("input",{type:"hidden",name:this.props.name,value:e.value.value})}renderInput(){const e=this.setup();return l.h("input",{ref:this.element,class:e.classes.value.input,value:e.valueBasic.value,onFocus:e.onFocus,onBlur:e.onBlur,onKeydown:e.onKeydown,onKeyup:e.onKeyup,onBeforeinput:e.onBeforeinput,onInput:e.onInput,onChange:e.onChange,onPaste:e.onPaste,onClick:e.onClick})}renderView(){const e=this.setup(),s=e.view.value;if(s.length>0){const i=[];return s.forEach((r,h)=>{i.push(l.h("span",{key:h,class:r.className},r.value))}),l.h("span",{class:e.classes.value.character},i)}return l.h("span",{class:e.classes.value.character,innerHTML:"&nbsp;"})}makeOptions(){return this}initSetup(){return{valueBasic:this.mask.valueBasic,value:this.mask.value,view:this.mask.view,onFocus:this.mask.onFocus,onBlur:this.mask.onBlur,onKeydown:this.mask.onKeydown,onKeyup:this.mask.onKeyup,onBeforeinput:this.mask.onBeforeinput,onInput:this.mask.onInput,onChange:this.mask.onChange,onPaste:this.mask.onPaste,onClick:this.mask.onClick}}initExpose(){return{}}initClasses(){return{main:{...this.toClassName(this.mask.classes.value)},input:this.getSubClass("input"),character:this.getSubClass("character"),characterItem:this.getSubClass("character__item")}}initStyles(){return{}}initRender(){const e=this.setup(),s=[this.renderData(),this.renderInput(),this.renderView()];return l.h("label",{...this.getAttrs(),class:e.classes.value.main},s)}}const g={special:"*",match:/[0-9]/,type:"text",view:"_"},it={type:{type:String,default:g==null?void 0:g.type},name:String,value:[String,Number],mask:[String,Array],special:{type:[String,Array,Object],default:g==null?void 0:g.special},match:{type:[String,RegExp],default:g==null?void 0:g.match},pattern:Object,check:Object,fraction:[String,Boolean,Number],currency:String,language:String,view:{type:String,default:g==null?void 0:g.view},visible:Boolean,right:Boolean,dir:String},rt={dir:["ltr","rtl"]},at={...it,visible:Boolean,right:Boolean,dir:String},nt=l.defineComponent({__name:"M3Mask",props:{...at},emits:["focus","blur","keydown","keyup","beforeinput","input","change","paste","reset"],setup(n,{expose:t,emit:e}){const s=e,i=n,r=l.computed(()=>({main:{"m3-mask":!0,"m3-mask--visible":i.visible,"m3-mask--right":i.right,[`m3-mask--dir--${i.dir}`]:u.inArray(rt.dir,i.dir)}})),h=l.computed(()=>({})),c=new st("m3.mask",i,{emits:s,classes:r,styles:h}),o=c.render();return t(c.expose()),(f,p)=>(l.openBlock(),l.createBlock(l.unref(o)))}});exports._sfc_main=nt;