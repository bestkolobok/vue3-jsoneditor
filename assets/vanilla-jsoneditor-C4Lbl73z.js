import{z as Yu}from"./json-source-map-gHbOmzw4.js";import{M as Vp,l as Vt,n as hr,i as Xt,a as Pn,d as Ki,u as vs,b as nn,h as $o,c as $p,m as Hp,e as Ri,r as pv,t as Qp,f as Yp,s as Kp,g as Cc,p as Zp,j as Gp,k as Xp}from"./lodash-es-8rYGZ3lu.js";import{H as eh,D as th,G as nh}from"./@jsonquerylang_jsonquery-PkBmOniN.js";import{f as ma,a as ei,b as yl,c as rh,d as oh,e as rs,g as hv,h as gv,i as os,j as la,k as mv,l as bv,m as ah,n as Zi,o as Gi,p as zc,q as Ai,r as Za,s as sh,t as ih,u as wl,v as jv,w as du,x as vu,y as lh,z as ch,A as Xi,B as fu,C as Ku,D as fs,E as xv,F as uh,G as dh,H as Aa,I as vh,J as fh,K as ph,L as hh,M as gh,N as mh,O as bh}from"./@fortawesome_free-solid-svg-icons-Bf2aYjFm.js";import{g as jh}from"./__commonjsHelpers__-CqkleIqs.js";import{m as ti}from"./memoize-one-BdPwpGay.js";import"./ajv-v69s7xCs.js";import{V as xh}from"./jmespath-CPYmTTht.js";import{J as yh}from"./jsonpath-plus-k-o2Qe0C.js";import{R as wh,E as _a,n as Ls,A as kh,f as Yl,l as Zu}from"./@codemirror_state-DAQaNU6J.js";import{V as Sh,D as Ch,k as Gu,e as zh,f as Oh,i as Mh,j as Ph,m as Rh,n as Ah,o as Eh,p as Th,E as Wa}from"./@codemirror_view-Dj4cNQ93.js";import{i as Nh,d as qh}from"./@codemirror_commands-CD9P_VAf.js";import{l as Ih,a as Uh,b as Dh}from"./@codemirror_lint-DZGBwIKq.js";import{P as Jh,c as Bh,d as Lh,D as Fh,N as pu,T as Vi,e as _h,f as Wh,t as $r,L as Vh,h as $h,j as Hh,k as Qh,l as Xu,n as Yh,H as Kh,o as yv,a as ed,p as Zh,q as Gh,r as Xh,u as eg,v as tg,w as ng,x as rg,y as og,z as ag,b as sg}from"./@codemirror_autocomplete-DtWx1qga.js";import{h as ig,s as lg,a as cg,c as ug,o as dg}from"./@codemirror_search-B6skZbnc.js";import{i as vg}from"./@replit_codemirror-indentation-markers-DaDtnXjO.js";import{g as Le,c as St,i as xr,p as So,s as Lo,a as Co,u as fg,e as ca,b as Ho,d as Sr,r as wv,f as Oc,h as as,j as kv,k as Sv,l as hu,m as pg,n as td}from"./immutable-json-patch-B4f7BxyY.js";import{j as zo}from"./jsonrepair-SqlbPPT2.js";const hg="modulepreload",gg=function(t){return"/vue3-jsoneditor/"+t},nd={},mg=function(e,r,o){let s=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(r.map(c=>{if(c=gg(c),c in nd)return;nd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const v=document.createElement("link");if(v.rel=u?"stylesheet":hg,u||(v.as="script"),v.crossOrigin="",v.href=c,l&&v.setAttribute("nonce",l),document.head.appendChild(v),u)return new Promise((f,g)=>{v.addEventListener("load",f),v.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const bg={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},jg={prefix:"far",iconName:"square-check",icon:[448,512,[9745,9989,61510,"check-square"],"f14a","M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Cv=jg,zv={prefix:"far",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},xg={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var Kl={exports:{}},rd;function yg(){if(rd)return Kl.exports;rd=1;/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */var t=function(e,r){var o,s,a=1,i=0,l=0,c=String.alphabet;function u(d,v,f){if(f){for(o=v;f=u(d,o),f<76&&f>65;)++o;return+d.slice(v-1,o)}return f=c&&c.indexOf(d.charAt(v)),f>-1?f+76:(f=d.charCodeAt(v)||0,f<45||f>127?f:f<46?65:f<48?f-1:f<58?f+18:f<65?f-11:f<91?f+11:f<97?f-37:f<123?f+5:f-63)}if((e+="")!=(r+="")){for(;a;)if(s=u(e,i++),a=u(r,l++),s<76&&a<76&&s>66&&a>66&&(s=u(e,i,i),a=u(r,l,i=o),l=o),s!=a)return s<a?-1:1}return 0};try{Kl.exports=t}catch{String.naturalCompare=t}return Kl.exports}var wg=yg();const kg=jh(wg);var od={};class el{constructor(e,r,o,s,a,i,l,c,u,d=0,v){this.p=e,this.stack=r,this.state=o,this.reducePos=s,this.pos=a,this.score=i,this.buffer=l,this.bufferBase=c,this.curContext=u,this.lookAhead=d,this.parent=v}toString(){return`[${this.stack.filter((e,r)=>r%3==0).concat(this.state)}]@${this.pos}${this.score?"!"+this.score:""}`}static start(e,r,o=0){let s=e.parser.context;return new el(e,[],r,o,o,0,[],0,s?new ad(s,s.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,r){this.stack.push(this.state,r,this.bufferBase+this.buffer.length),this.state=e}reduce(e){var r;let o=e>>19,s=e&65535,{parser:a}=this.p,i=this.reducePos<this.pos-25;i&&this.setLookAhead(this.pos);let l=a.dynamicPrecedence(s);if(l&&(this.score+=l),o==0){this.pushState(a.getGoto(this.state,s,!0),this.reducePos),s<a.minRepeatTerm&&this.storeNode(s,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(s,this.reducePos);return}let c=this.stack.length-(o-1)*3-(e&262144?6:0),u=c?this.stack[c-2]:this.p.ranges[0].from,d=this.reducePos-u;d>=2e3&&!(!((r=this.p.parser.nodeSet.types[s])===null||r===void 0)&&r.isAnonymous)&&(u==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=d):this.p.lastBigReductionSize<d&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=u,this.p.lastBigReductionSize=d));let v=c?this.stack[c-1]:0,f=this.bufferBase+this.buffer.length-v;if(s<a.minRepeatTerm||e&131072){let g=a.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(s,u,g,f+4,!0)}if(e&262144)this.state=this.stack[c];else{let g=this.stack[c-3];this.state=a.getGoto(g,s,!0)}for(;this.stack.length>c;)this.stack.pop();this.reduceContext(s,u)}storeNode(e,r,o,s=4,a=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let i=this,l=this.buffer.length;if(l==0&&i.parent&&(l=i.bufferBase-i.parent.bufferBase,i=i.parent),l>0&&i.buffer[l-4]==0&&i.buffer[l-1]>-1){if(r==o)return;if(i.buffer[l-2]>=r){i.buffer[l-2]=o;return}}}if(!a||this.pos==o)this.buffer.push(e,r,o,s);else{let i=this.buffer.length;if(i>0&&this.buffer[i-4]!=0){let l=!1;for(let c=i;c>0&&this.buffer[c-2]>o;c-=4)if(this.buffer[c-1]>=0){l=!0;break}if(l)for(;i>0&&this.buffer[i-2]>o;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,s>4&&(s-=4)}this.buffer[i]=e,this.buffer[i+1]=r,this.buffer[i+2]=o,this.buffer[i+3]=s}}shift(e,r,o,s){if(e&131072)this.pushState(e&65535,this.pos);else if((e&262144)==0){let a=e,{parser:i}=this.p;(s>this.pos||r<=i.maxNode)&&(this.pos=s,i.stateFlag(a,1)||(this.reducePos=s)),this.pushState(a,o),this.shiftContext(r,o),r<=i.maxNode&&this.buffer.push(r,o,s,4)}else this.pos=s,this.shiftContext(r,o),r<=this.p.parser.maxNode&&this.buffer.push(r,o,s,4)}apply(e,r,o,s){e&65536?this.reduce(e):this.shift(e,r,o,s)}useNode(e,r){let o=this.p.reused.length-1;(o<0||this.p.reused[o]!=e)&&(this.p.reused.push(e),o++);let s=this.pos;this.reducePos=this.pos=s+e.length,this.pushState(r,s),this.buffer.push(o,s,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let e=this,r=e.buffer.length;for(;r>0&&e.buffer[r-2]>e.reducePos;)r-=4;let o=e.buffer.slice(r),s=e.bufferBase+r;for(;e&&s==e.bufferBase;)e=e.parent;return new el(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,o,s,this.curContext,this.lookAhead,e)}recoverByDelete(e,r){let o=e<=this.p.parser.maxNode;o&&this.storeNode(e,this.pos,r,4),this.storeNode(0,this.pos,r,o?8:4),this.pos=this.reducePos=r,this.score-=190}canShift(e){for(let r=new Sg(this);;){let o=this.p.parser.stateSlot(r.state,4)||this.p.parser.hasAction(r.state,e);if(o==0)return!1;if((o&65536)==0)return!0;r.reduce(o)}}recoverByInsert(e){if(this.stack.length>=300)return[];let r=this.p.parser.nextStates(this.state);if(r.length>8||this.stack.length>=120){let s=[];for(let a=0,i;a<r.length;a+=2)(i=r[a+1])!=this.state&&this.p.parser.hasAction(i,e)&&s.push(r[a],i);if(this.stack.length<120)for(let a=0;s.length<8&&a<r.length;a+=2){let i=r[a+1];s.some((l,c)=>c&1&&l==i)||s.push(r[a],i)}r=s}let o=[];for(let s=0;s<r.length&&o.length<4;s+=2){let a=r[s+1];if(a==this.state)continue;let i=this.split();i.pushState(a,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(r[s],this.pos),i.reducePos=this.pos,i.score-=200,o.push(i)}return o}forceReduce(){let{parser:e}=this.p,r=e.stateSlot(this.state,5);if((r&65536)==0)return!1;if(!e.validAction(this.state,r)){let o=r>>19,s=r&65535,a=this.stack.length-o*3;if(a<0||e.getGoto(this.stack[a],s,!1)<0){let i=this.findForcedReduction();if(i==null)return!1;r=i}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(r),!0}findForcedReduction(){let{parser:e}=this.p,r=[],o=(s,a)=>{if(!r.includes(s))return r.push(s),e.allActions(s,i=>{if(!(i&393216))if(i&65536){let l=(i>>19)-a;if(l>1){let c=i&65535,u=this.stack.length-l*3;if(u>=0&&e.getGoto(this.stack[u],c,!1)>=0)return l<<19|65536|c}}else{let l=o(i,a+1);if(l!=null)return l}})};return o(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let r=0;r<this.stack.length;r+=3)if(this.stack[r]!=e.stack[r])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,r){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(r)))}reduceContext(e,r){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(r)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let r=new ad(this.curContext.tracker,e);r.hash!=this.curContext.hash&&this.emitContext(),this.curContext=r}}setLookAhead(e){e>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=e)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}}class ad{constructor(e,r){this.tracker=e,this.context=r,this.hash=e.strict?e.hash(r):0}}class Sg{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let r=e&65535,o=e>>19;o==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(o-1)*3;let s=this.start.p.parser.getGoto(this.stack[this.base-3],r,!0);this.state=s}}class tl{constructor(e,r,o){this.stack=e,this.pos=r,this.index=o,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(e,r=e.bufferBase+e.buffer.length){return new tl(e,r,r-e.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new tl(this.stack,this.pos,this.index)}}function Ei(t,e=Uint16Array){if(typeof t!="string")return t;let r=null;for(let o=0,s=0;o<t.length;){let a=0;for(;;){let i=t.charCodeAt(o++),l=!1;if(i==126){a=65535;break}i>=92&&i--,i>=34&&i--;let c=i-32;if(c>=46&&(c-=46,l=!0),a+=c,l)break;a*=46}r?r[s++]=a:r=new e(a)}return r}class $i{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}}const sd=new $i;class Cg{constructor(e,r){this.input=e,this.ranges=r,this.chunk="",this.chunkOff=0,this.chunk2="",this.chunk2Pos=0,this.next=-1,this.token=sd,this.rangeIndex=0,this.pos=this.chunkPos=r[0].from,this.range=r[0],this.end=r[r.length-1].to,this.readNext()}resolveOffset(e,r){let o=this.range,s=this.rangeIndex,a=this.pos+e;for(;a<o.from;){if(!s)return null;let i=this.ranges[--s];a-=o.from-i.to,o=i}for(;r<0?a>o.to:a>=o.to;){if(s==this.ranges.length-1)return null;let i=this.ranges[++s];a+=i.from-o.to,o=i}return a}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let r of this.ranges)if(r.to>e)return Math.max(e,r.from);return this.end}peek(e){let r=this.chunkOff+e,o,s;if(r>=0&&r<this.chunk.length)o=this.pos+e,s=this.chunk.charCodeAt(r);else{let a=this.resolveOffset(e,1);if(a==null)return-1;if(o=a,o>=this.chunk2Pos&&o<this.chunk2Pos+this.chunk2.length)s=this.chunk2.charCodeAt(o-this.chunk2Pos);else{let i=this.rangeIndex,l=this.range;for(;l.to<=o;)l=this.ranges[++i];this.chunk2=this.input.chunk(this.chunk2Pos=o),o+this.chunk2.length>l.to&&(this.chunk2=this.chunk2.slice(0,l.to-o)),s=this.chunk2.charCodeAt(0)}}return o>=this.token.lookAhead&&(this.token.lookAhead=o+1),s}acceptToken(e,r=0){let o=r?this.resolveOffset(r,-1):this.pos;if(o==null||o<this.token.start)throw new RangeError("Token end out of bounds");this.token.value=e,this.token.end=o}acceptTokenTo(e,r){this.token.value=e,this.token.end=r}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:r}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=r,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),r=this.pos+e.length;this.chunk=r>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk="",this.next=-1}reset(e,r){if(r?(this.token=r,r.start=e,r.lookAhead=e+1,r.value=r.extended=-1):this.token=sd,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk="",this.chunkOff=0),this.readNext()}return this}read(e,r){if(e>=this.chunkPos&&r<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,r-this.chunkPos);if(e>=this.chunk2Pos&&r<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,r-this.chunk2Pos);if(e>=this.range.from&&r<=this.range.to)return this.input.read(e,r);let o="";for(let s of this.ranges){if(s.from>=r)break;s.to>e&&(o+=this.input.read(Math.max(s.from,e),Math.min(s.to,r)))}return o}}class ss{constructor(e,r){this.data=e,this.id=r}token(e,r){let{parser:o}=r.p;zg(this.data,e,r,this.id,o.data,o.tokenPrecTable)}}ss.prototype.contextual=ss.prototype.fallback=ss.prototype.extend=!1;ss.prototype.fallback=ss.prototype.extend=!1;function zg(t,e,r,o,s,a){let i=0,l=1<<o,{dialect:c}=r.p.parser;e:for(;(l&t[i])!=0;){let u=t[i+1];for(let g=i+3;g<u;g+=2)if((t[g+1]&l)>0){let m=t[g];if(c.allows(m)&&(e.token.value==-1||e.token.value==m||Og(m,e.token.value,s,a))){e.acceptToken(m);break}}let d=e.next,v=0,f=t[i+2];if(e.next<0&&f>v&&t[u+f*3-3]==65535){i=t[u+f*3-1];continue e}for(;v<f;){let g=v+f>>1,m=u+g+(g<<1),b=t[m],j=t[m+1]||65536;if(d<b)f=g;else if(d>=j)v=g+1;else{i=t[m+2],e.advance();continue e}}break}}function id(t,e,r){for(let o=e,s;(s=t[o])!=65535;o++)if(s==r)return o-e;return-1}function Og(t,e,r,o){let s=id(r,o,e);return s<0||id(r,o,t)<s}const Wr=typeof process<"u"&&od&&/\bparse\b/.test(od.LOG);let Zl=null;function ld(t,e,r){let o=t.cursor(_h.IncludeAnonymous);for(o.moveTo(e);;)if(!(r<0?o.childBefore(e):o.childAfter(e)))for(;;){if((r<0?o.to<e:o.from>e)&&!o.type.isError)return r<0?Math.max(0,Math.min(o.to-1,e-25)):Math.min(t.length,Math.max(o.from+1,e+25));if(r<0?o.prevSibling():o.nextSibling())break;if(!o.parent())return r<0?0:t.length}}class Mg{constructor(e,r){this.fragments=e,this.nodeSet=r,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?ld(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?ld(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let r=this.trees.length-1;if(r<0)return this.nextFragment(),null;let o=this.trees[r],s=this.index[r];if(s==o.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let a=o.children[s],i=this.start[r]+o.positions[s];if(i>e)return this.nextStart=i,null;if(a instanceof Vi){if(i==e){if(i<this.safeFrom)return null;let l=i+a.length;if(l<=this.safeTo){let c=a.prop(pu.lookAhead);if(!c||l+c<this.fragment.to)return a}}this.index[r]++,i+a.length>=Math.max(this.safeFrom,e)&&(this.trees.push(a),this.start.push(i),this.index.push(0))}else this.index[r]++,this.nextStart=i+a.length}}}class Pg{constructor(e,r){this.stream=r,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(o=>new $i)}getActions(e){let r=0,o=null,{parser:s}=e.p,{tokenizers:a}=s,i=s.stateSlot(e.state,3),l=e.curContext?e.curContext.hash:0,c=0;for(let u=0;u<a.length;u++){if((1<<u&i)==0)continue;let d=a[u],v=this.tokens[u];if(!(o&&!d.fallback)&&((d.contextual||v.start!=e.pos||v.mask!=i||v.context!=l)&&(this.updateCachedToken(v,d,e),v.mask=i,v.context=l),v.lookAhead>v.end+25&&(c=Math.max(v.lookAhead,c)),v.value!=0)){let f=r;if(v.extended>-1&&(r=this.addActions(e,v.extended,v.end,r)),r=this.addActions(e,v.value,v.end,r),!d.extend&&(o=v,r>f))break}}for(;this.actions.length>r;)this.actions.pop();return c&&e.setLookAhead(c),!o&&e.pos==this.stream.end&&(o=new $i,o.value=e.p.parser.eofTerm,o.start=o.end=e.pos,r=this.addActions(e,o.value,o.end,r)),this.mainToken=o,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let r=new $i,{pos:o,p:s}=e;return r.start=o,r.end=Math.min(o+1,s.stream.end),r.value=o==s.stream.end?s.parser.eofTerm:0,r}updateCachedToken(e,r,o){let s=this.stream.clipPos(o.pos);if(r.token(this.stream.reset(s,e),o),e.value>-1){let{parser:a}=o.p;for(let i=0;i<a.specialized.length;i++)if(a.specialized[i]==e.value){let l=a.specializers[i](this.stream.read(e.start,e.end),o);if(l>=0&&o.p.parser.dialect.allows(l>>1)){(l&1)==0?e.value=l>>1:e.extended=l>>1;break}}}else e.value=0,e.end=this.stream.clipPos(s+1)}putAction(e,r,o,s){for(let a=0;a<s;a+=3)if(this.actions[a]==e)return s;return this.actions[s++]=e,this.actions[s++]=r,this.actions[s++]=o,s}addActions(e,r,o,s){let{state:a}=e,{parser:i}=e.p,{data:l}=i;for(let c=0;c<2;c++)for(let u=i.stateSlot(a,c?2:1);;u+=3){if(l[u]==65535)if(l[u+1]==1)u=Fo(l,u+2);else{s==0&&l[u+1]==2&&(s=this.putAction(Fo(l,u+2),r,o,s));break}l[u]==r&&(s=this.putAction(Fo(l,u+1),r,o,s))}return s}}class Rg{constructor(e,r,o,s){this.parser=e,this.input=r,this.ranges=s,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Cg(r,s),this.tokens=new Pg(e,this.stream),this.topTerm=e.top[1];let{from:a}=s[0];this.stacks=[el.start(this,e.top[0],a)],this.fragments=o.length&&this.stream.end-a>e.bufferLength*4?new Mg(o,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,r=this.minStackPos,o=this.stacks=[],s,a;if(this.bigReductionCount>300&&e.length==1){let[i]=e;for(;i.forceReduce()&&i.stack.length&&i.stack[i.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let i=0;i<e.length;i++){let l=e[i];for(;;){if(this.tokens.mainToken=null,l.pos>r)o.push(l);else{if(this.advanceStack(l,o,e))continue;{s||(s=[],a=[]),s.push(l);let c=this.tokens.getMainToken(l);a.push(c.value,c.end)}}break}}if(!o.length){let i=s&&Eg(s);if(i)return Wr&&console.log("Finish with "+this.stackID(i)),this.stackToTree(i);if(this.parser.strict)throw Wr&&s&&console.log("Stuck with token "+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):"none")),new SyntaxError("No parse at "+r);this.recovering||(this.recovering=5)}if(this.recovering&&s){let i=this.stoppedAt!=null&&s[0].pos>this.stoppedAt?s[0]:this.runRecovery(s,a,o);if(i)return Wr&&console.log("Force-finish "+this.stackID(i)),this.stackToTree(i.forceAll())}if(this.recovering){let i=this.recovering==1?1:this.recovering*3;if(o.length>i)for(o.sort((l,c)=>c.score-l.score);o.length>i;)o.pop();o.some(l=>l.reducePos>r)&&this.recovering--}else if(o.length>1){e:for(let i=0;i<o.length-1;i++){let l=o[i];for(let c=i+1;c<o.length;c++){let u=o[c];if(l.sameState(u)||l.buffer.length>500&&u.buffer.length>500)if((l.score-u.score||l.buffer.length-u.buffer.length)>0)o.splice(c--,1);else{o.splice(i--,1);continue e}}}o.length>12&&o.splice(12,o.length-12)}this.minStackPos=o[0].pos;for(let i=1;i<o.length;i++)o[i].pos<this.minStackPos&&(this.minStackPos=o[i].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}advanceStack(e,r,o){let s=e.pos,{parser:a}=this,i=Wr?this.stackID(e)+" -> ":"";if(this.stoppedAt!=null&&s>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let u=e.curContext&&e.curContext.tracker.strict,d=u?e.curContext.hash:0;for(let v=this.fragments.nodeAt(s);v;){let f=this.parser.nodeSet.types[v.type.id]==v.type?a.getGoto(e.state,v.type.id):-1;if(f>-1&&v.length&&(!u||(v.prop(pu.contextHash)||0)==d))return e.useNode(v,f),Wr&&console.log(i+this.stackID(e)+` (via reuse of ${a.getName(v.type.id)})`),!0;if(!(v instanceof Vi)||v.children.length==0||v.positions[0]>0)break;let g=v.children[0];if(g instanceof Vi&&v.positions[0]==0)v=g;else break}}let l=a.stateSlot(e.state,4);if(l>0)return e.reduce(l),Wr&&console.log(i+this.stackID(e)+` (via always-reduce ${a.getName(l&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let c=this.tokens.getActions(e);for(let u=0;u<c.length;){let d=c[u++],v=c[u++],f=c[u++],g=u==c.length||!o,m=g?e:e.split(),b=this.tokens.mainToken;if(m.apply(d,v,b?b.start:m.pos,f),Wr&&console.log(i+this.stackID(m)+` (via ${(d&65536)==0?"shift":`reduce of ${a.getName(d&65535)}`} for ${a.getName(v)} @ ${s}${m==e?"":", split"})`),g)return!0;m.pos>s?r.push(m):o.push(m)}return!1}advanceFully(e,r){let o=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>o)return cd(e,r),!0}}runRecovery(e,r,o){let s=null,a=!1;for(let i=0;i<e.length;i++){let l=e[i],c=r[i<<1],u=r[(i<<1)+1],d=Wr?this.stackID(l)+" -> ":"";if(l.deadEnd&&(a||(a=!0,l.restart(),Wr&&console.log(d+this.stackID(l)+" (restarted)"),this.advanceFully(l,o))))continue;let v=l.split(),f=d;for(let g=0;v.forceReduce()&&g<10&&(Wr&&console.log(f+this.stackID(v)+" (via force-reduce)"),!this.advanceFully(v,o));g++)Wr&&(f=this.stackID(v)+" -> ");for(let g of l.recoverByInsert(c))Wr&&console.log(d+this.stackID(g)+" (via recover-insert)"),this.advanceFully(g,o);this.stream.end>l.pos?(u==l.pos&&(u++,c=0),l.recoverByDelete(c,u),Wr&&console.log(d+this.stackID(l)+` (via recover-delete ${this.parser.getName(c)})`),cd(l,o)):(!s||s.score<l.score)&&(s=l)}return s}stackToTree(e){return e.close(),Vi.build({buffer:tl.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let r=(Zl||(Zl=new WeakMap)).get(e);return r||Zl.set(e,r=String.fromCodePoint(this.nextStackID++)),r+e}}function cd(t,e){for(let r=0;r<e.length;r++){let o=e[r];if(o.pos==t.pos&&o.sameState(t)){e[r].score<t.score&&(e[r]=t);return}}e.push(t)}class Ag{constructor(e,r,o){this.source=e,this.flags=r,this.disabled=o}allows(e){return!this.disabled||this.disabled[e]==0}}class nl extends Jh{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let r=e.nodeNames.split(" ");this.minRepeatTerm=r.length;for(let l=0;l<e.repeatNodeCount;l++)r.push("");let o=Object.keys(e.topRules).map(l=>e.topRules[l][1]),s=[];for(let l=0;l<r.length;l++)s.push([]);function a(l,c,u){s[l].push([c,c.deserialize(String(u))])}if(e.nodeProps)for(let l of e.nodeProps){let c=l[0];typeof c=="string"&&(c=pu[c]);for(let u=1;u<l.length;){let d=l[u++];if(d>=0)a(d,c,l[u++]);else{let v=l[u+-d];for(let f=-d;f>0;f--)a(l[u++],c,v);u++}}}this.nodeSet=new Bh(r.map((l,c)=>Lh.define({name:c>=this.minRepeatTerm?void 0:l,id:c,props:s[c],top:o.indexOf(c)>-1,error:c==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(c)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=Fh;let i=Ei(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let l=0;l<this.specializerSpecs.length;l++)this.specialized[l]=this.specializerSpecs[l].term;this.specializers=this.specializerSpecs.map(ud),this.states=Ei(e.states,Uint32Array),this.data=Ei(e.stateData),this.goto=Ei(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(l=>typeof l=="number"?new ss(i,l):l),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,r,o){let s=new Rg(this,e,r,o);for(let a of this.wrappers)s=a(s,e,r,o);return s}getGoto(e,r,o=!1){let s=this.goto;if(r>=s[0])return-1;for(let a=s[r+1];;){let i=s[a++],l=i&1,c=s[a++];if(l&&o)return c;for(let u=a+(i>>1);a<u;a++)if(s[a]==e)return c;if(l)return-1}}hasAction(e,r){let o=this.data;for(let s=0;s<2;s++)for(let a=this.stateSlot(e,s?2:1),i;;a+=3){if((i=o[a])==65535)if(o[a+1]==1)i=o[a=Fo(o,a+2)];else{if(o[a+1]==2)return Fo(o,a+2);break}if(i==r||i==0)return Fo(o,a+1)}return 0}stateSlot(e,r){return this.states[e*6+r]}stateFlag(e,r){return(this.stateSlot(e,0)&r)>0}validAction(e,r){return!!this.allActions(e,o=>o==r?!0:null)}allActions(e,r){let o=this.stateSlot(e,4),s=o?r(o):void 0;for(let a=this.stateSlot(e,1);s==null;a+=3){if(this.data[a]==65535)if(this.data[a+1]==1)a=Fo(this.data,a+2);else break;s=r(Fo(this.data,a+1))}return s}nextStates(e){let r=[];for(let o=this.stateSlot(e,1);;o+=3){if(this.data[o]==65535)if(this.data[o+1]==1)o=Fo(this.data,o+2);else break;if((this.data[o+2]&1)==0){let s=this.data[o+1];r.some((a,i)=>i&1&&a==s)||r.push(this.data[o],s)}}return r}configure(e){let r=Object.assign(Object.create(nl.prototype),this);if(e.props&&(r.nodeSet=this.nodeSet.extend(...e.props)),e.top){let o=this.topRules[e.top];if(!o)throw new RangeError(`Invalid top rule name ${e.top}`);r.top=o}return e.tokenizers&&(r.tokenizers=this.tokenizers.map(o=>{let s=e.tokenizers.find(a=>a.from==o);return s?s.to:o})),e.specializers&&(r.specializers=this.specializers.slice(),r.specializerSpecs=this.specializerSpecs.map((o,s)=>{let a=e.specializers.find(l=>l.from==o.external);if(!a)return o;let i=Object.assign(Object.assign({},o),{external:a.to});return r.specializers[s]=ud(i),i})),e.contextTracker&&(r.context=e.contextTracker),e.dialect&&(r.dialect=this.parseDialect(e.dialect)),e.strict!=null&&(r.strict=e.strict),e.wrap&&(r.wrappers=r.wrappers.concat(e.wrap)),e.bufferLength!=null&&(r.bufferLength=e.bufferLength),r}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let r=this.dynamicPrecedences;return r==null?0:r[e]||0}parseDialect(e){let r=Object.keys(this.dialects),o=r.map(()=>!1);if(e)for(let a of e.split(" ")){let i=r.indexOf(a);i>=0&&(o[i]=!0)}let s=null;for(let a=0;a<r.length;a++)if(!o[a])for(let i=this.dialects[r[a]],l;(l=this.data[i++])!=65535;)(s||(s=new Uint8Array(this.maxTerm+1)))[l]=1;return new Ag(e,o,s)}static deserialize(e){return new nl(e)}}function Fo(t,e){return t[e]|t[e+1]<<16}function Eg(t){let e=null;for(let r of t){let o=r.p.stoppedAt;(r.pos==r.p.stream.end||o!=null&&r.pos>o)&&r.p.parser.stateFlag(r.state,2)&&(!e||e.score<r.score)&&(e=r)}return e}function ud(t){if(t.external){let e=t.extend?1:0;return(r,o)=>t.external(r,o)<<1|e}return t.get}const Tg=Wh({String:$r.string,Number:$r.number,"True False":$r.bool,PropertyName:$r.propertyName,Null:$r.null,", :":$r.separator,"[ ]":$r.squareBracket,"{ }":$r.brace}),Ng=nl.deserialize({version:14,states:"$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",stateData:"#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",goto:"!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",nodeNames:"⚠ JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",maxTerm:25,nodeProps:[["isolate",-2,6,11,""],["openedBy",7,"{",14,"["],["closedBy",8,"}",15,"]"]],propSources:[Tg],skippedNodes:[0],repeatNodeCount:2,tokenData:"(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",tokenizers:[0],topRules:{JsonText:[0,1]},tokenPrec:0}),qg=$h.define({name:"json",parser:Ng.configure({props:[Hh.add({Object:Xu({except:/^\s*\}/}),Array:Xu({except:/^\s*\]/})}),Qh.add({"Object Array":Yh})]}),languageData:{closeBrackets:{brackets:["[","{",'"']},indentOnInput:/^\s*[\}\]]$/}});function Ig(){return new Vh(qg)}var Ug=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],Dg=["mainAxis","crossAxis","limiter"];function Ov(t,e){if(t==null)return{};var r,o,s=function(i,l){if(i==null)return{};var c={};for(var u in i)if({}.hasOwnProperty.call(i,u)){if(l.indexOf(u)!==-1)continue;c[u]=i[u]}return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}function dd(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,o)}return r}function me(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?dd(Object(r),!0).forEach(function(o){Jg(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):dd(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function Jg(t,e,r){return(e=function(o){var s=function(a,i){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var c=l.call(a,i);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(a)}(o,"string");return typeof s=="symbol"?s:s+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function vd(t,e,r,o,s,a,i){try{var l=t[a](i),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(o,s)}function mt(t){return function(){var e=this,r=arguments;return new Promise(function(o,s){var a=t.apply(e,r);function i(c){vd(a,o,s,i,l,"next",c)}function l(c){vd(a,o,s,i,l,"throw",c)}i(void 0)})}}var fd,Gl,pd,Xl;typeof window<"u"&&((Gl=(fd=(Xl=(pd=window).__svelte)!==null&&Xl!==void 0?Xl:pd.__svelte={}).v)!==null&&Gl!==void 0?Gl:fd.v=new Set).add("5");var Ss=!1;Ss=!0;var Dr=Symbol(),Bg=!1,kl=32,Mv=64,ec=128,Oo=256,Mc=512,Gr=1024,Cs=2048,zs=4096,fa=8192,gu=16384,mi=65536,Lg=1<<17,Fg=1<<20,Pc=1<<21,pa=Symbol("$state"),Pv=Symbol("legacy props"),_g=Symbol(""),bi=Array.isArray,Wg=Array.prototype.indexOf,Rc=Array.from,Vg=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,Rv=Object.getOwnPropertyDescriptors,$g=Object.prototype,Hg=Array.prototype,mu=Object.getPrototypeOf,hd=Object.isExtensible;function Fs(t){return typeof t=="function"}var gd=()=>{};function Qg(t){return t()}function rl(t){for(var e=0;e<t.length;e++)t[e]()}var ni=[],tc=[];function Av(){var t=ni;ni=[],rl(t)}function Sl(t){ni.length===0&&queueMicrotask(Av),ni.push(t)}function md(){var t;ni.length>0&&Av(),tc.length>0&&(t=tc,tc=[],rl(t))}function Ev(t){return t===this.v}function bu(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Yg(t,e){return t!==e}function ju(t){return!bu(t,this.v)}function Ca(t,e){if(typeof t!="object"||t===null||pa in t)return t;var r=mu(t);if(r!==$g&&r!==Hg)return t;var o=new Map,s=bi(t),a=Bo(0),i=Un,l=c=>{var u,d=Un;return Ao(i),u=c(),Ao(d),u};return s&&o.set("length",Bo(t.length)),new Proxy(t,{defineProperty(c,u,d){"value"in d&&d.configurable!==!1&&d.enumerable!==!1&&d.writable!==!1||function(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}();var v=o.get(u);return v===void 0?(v=l(()=>Bo(d.value)),o.set(u,v)):p(v,l(()=>Ca(d.value))),!0},deleteProperty(c,u){var d=o.get(u);if(d===void 0)u in c&&o.set(u,l(()=>Bo(Dr)));else{if(s&&typeof u=="string"){var v=o.get("length"),f=Number(u);Number.isInteger(f)&&f<v.v&&p(v,f)}p(d,Dr),bd(a)}return!0},get(c,u,d){var v;if(u===pa)return t;var f=o.get(u),g=u in c;if(f===void 0&&(!g||(v=Qo(c,u))!==null&&v!==void 0&&v.writable)&&(f=l(()=>Bo(Ca(g?c[u]:Dr))),o.set(u,f)),f!==void 0){var m=n(f);return m===Dr?void 0:m}return Reflect.get(c,u,d)},getOwnPropertyDescriptor(c,u){var d=Reflect.getOwnPropertyDescriptor(c,u);if(d&&"value"in d){var v=o.get(u);v&&(d.value=n(v))}else if(d===void 0){var f=o.get(u),g=f==null?void 0:f.v;if(f!==void 0&&g!==Dr)return{enumerable:!0,configurable:!0,value:g,writable:!0}}return d},has(c,u){var d;if(u===pa)return!0;var v=o.get(u),f=v!==void 0&&v.v!==Dr||Reflect.has(c,u);return(v!==void 0||Gn!==null&&(!f||(d=Qo(c,u))!==null&&d!==void 0&&d.writable))&&(v===void 0&&(v=l(()=>Bo(f?Ca(c[u]):Dr)),o.set(u,v)),n(v)===Dr)?!1:f},set(c,u,d,v){var f,g=o.get(u),m=u in c;if(s&&u==="length")for(var b=d;b<g.v;b+=1){var j=o.get(b+"");j!==void 0?p(j,Dr):b in c&&(j=l(()=>Bo(Dr)),o.set(b+"",j))}g===void 0?(!m||(f=Qo(c,u))!==null&&f!==void 0&&f.writable)&&(p(g=l(()=>Bo(void 0)),l(()=>Ca(d))),o.set(u,g)):(m=g.v!==Dr,p(g,l(()=>Ca(d))));var k=Reflect.getOwnPropertyDescriptor(c,u);if(k!=null&&k.set&&k.set.call(v,d),!m){if(s&&typeof u=="string"){var C=o.get("length"),A=Number(u);Number.isInteger(A)&&A>=C.v&&p(C,A+1)}bd(a)}return!0},ownKeys(c){n(a);var u=Reflect.ownKeys(c).filter(f=>{var g=o.get(f);return g===void 0||g.v!==Dr});for(var[d,v]of o)v.v===Dr||d in c||u.push(d);return u},setPrototypeOf(){(function(){throw new Error("https://svelte.dev/e/state_prototype_fixed")})()}})}function bd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;p(t,t.v+e)}var ri=new Map;function Ea(t,e){return{f:0,v:t,reactions:null,equals:Ev,rv:0,wv:0}}function Bo(t,e){var r=Ea(t);return Jv(r),r}function P(t){var e,r,o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=Ea(t);return o||(s.equals=ju),Ss&&Sn!==null&&Sn.l!==null&&((r=(e=Sn.l).s)!==null&&r!==void 0?r:e.s=[]).push(s),s}function Qr(t,e){return p(t,Eo(()=>n(t))),e}function p(t,e){var r,o=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return Un!==null&&!yo&&Rs()&&18&Un.f&&((r=Ko)===null||r===void 0||!r.includes(t))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),Ac(t,o?Ca(e):e)}function Ac(t,e){if(!t.equals(e)){var r=t.v;ji?ri.set(t,e):ri.set(t,r),t.v=e,t.wv=Lv(),Tv(t,Cs),Rs()&&Gn!==null&&Gn.f&Gr&&!(96&Gn.f)&&(eo===null?function(o){eo=o}([t]):eo.push(t))}return e}function jd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=n(t),o=e===1?r++:r--;return p(t,r),o}function Tv(t,e){var r=t.reactions;if(r!==null)for(var o=Rs(),s=r.length,a=0;a<s;a++){var i=r[a],l=i.f;l&Cs||(o||i!==Gn)&&(bo(i,e),1280&l&&(2&l?Tv(i,zs):Pl(i)))}}function ps(t){var e=2050,r=Un!==null&&2&Un.f?Un:null;return Gn===null||r!==null&&r.f&Oo?e|=Oo:Gn.f|=Fg,{ctx:Sn,deps:null,effects:null,equals:Ev,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??Gn}}function _r(t){var e=ps(t);return Jv(e),e}function ae(t){var e=ps(t);return e.equals=ju,e}function Nv(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)To(e[r])}}function qv(t){var e=function(r){var o,s=Gn;ba(function(a){for(var i=a.parent;i!==null;){if(!(2&i.f))return i;i=i.parent}return null}(r));try{Nv(r),o=_v(r)}finally{ba(s)}return o}(t);bo(t,(ua||t.f&Oo)&&t.deps!==null?zs:Gr),t.equals(e)||(t.v=e,t.wv=Lv())}var Yo,Iv,Uv,Dv;function Cl(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return document.createTextNode(t)}function Yr(t){return Uv.call(t)}function zl(t){return Dv.call(t)}function O(t,e){return Yr(t)}function ot(t,e){var r=Yr(t);return r instanceof Comment&&r.data===""?zl(r):r}function q(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=t;e--;)r=zl(r);return r}var Ti=!1,ol=!1,al=null,Oa=!1,ji=!1;function xd(t){ji=t}var Zs=[],Un=null,yo=!1;function Ao(t){Un=t}var Gn=null;function ba(t){Gn=t}var Ko=null;function Jv(t){Un!==null&&Un.f&Pc&&(Ko===null?Ko=[t]:Ko.push(t))}var Jr=null,Vr=0,eo=null,Bv=1,sl=0,ua=!1;function Lv(){return++Bv}function Os(t){var e=t.f;if(e&Cs)return!0;if(e&zs){var r=t.deps,o=!!(e&Oo);if(r!==null){var s,a,i=!!(e&Mc),l=o&&Gn!==null&&!ua,c=r.length;if(i||l){var u=t,d=u.parent;for(s=0;s<c;s++){var v,f,g;a=r[s],(i||(v=a)===null||v===void 0||(v=v.reactions)===null||v===void 0||!v.includes(u))&&((g=(f=a).reactions)!==null&&g!==void 0?g:f.reactions=[]).push(u)}i&&(u.f^=Mc),!l||d===null||d.f&Oo||(u.f^=Oo)}for(s=0;s<c;s++)if(Os(a=r[s])&&qv(a),a.wv>t.wv)return!0}o&&(Gn===null||ua)||bo(t,Gr)}return!1}function Ol(t,e,r,o){if(Ti){if(r===null&&(Ti=!1),function(s){return!(s.f&gu||s.parent!==null&&s.parent.f&ec)}(e))throw t}else r!==null&&(Ti=!0),function(s,a){for(var i=a;i!==null;){if(i.f&ec)try{return void i.fn(s)}catch{i.f^=ec}i=i.parent}throw Ti=!1,s}(t,e)}function Fv(t,e){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=t.reactions;if(o!==null)for(var s=0;s<o.length;s++){var a,i=o[s];(a=Ko)!==null&&a!==void 0&&a.includes(t)||(2&i.f?Fv(i,e,!1):e===i&&(r?bo(i,Cs):i.f&Gr&&bo(i,zs),Pl(i)))}}function _v(t){var e=Jr,r=Vr,o=eo,s=Un,a=ua,i=Ko,l=Sn,c=yo,u=t.f;Jr=null,Vr=0,eo=null,ua=!!(u&Oo)&&(yo||!Oa||Un===null),Un=96&u?null:t,Ko=null,yd(t.ctx),yo=!1,sl++,t.f|=Pc;try{var d=(0,t.fn)(),v=t.deps;if(Jr!==null){var f;if(il(t,Vr),v!==null&&Vr>0)for(v.length=Vr+Jr.length,f=0;f<Jr.length;f++)v[Vr+f]=Jr[f];else t.deps=v=Jr;if(!ua)for(f=Vr;f<v.length;f++){var g,m;((m=(g=v[f]).reactions)!==null&&m!==void 0?m:g.reactions=[]).push(t)}}else v!==null&&Vr<v.length&&(il(t,Vr),v.length=Vr);if(Rs()&&eo!==null&&!yo&&v!==null&&!(6146&t.f))for(f=0;f<eo.length;f++)Fv(eo[f],t);return s!==null&&(sl++,eo!==null&&(o===null?o=eo:o.push(...eo))),d}finally{Jr=e,Vr=r,eo=o,Un=s,ua=a,Ko=i,yd(l),yo=c,t.f^=Pc}}function Kg(t,e){var r=e.reactions;if(r!==null){var o=Wg.call(r,t);if(o!==-1){var s=r.length-1;s===0?r=e.reactions=null:(r[o]=r[s],r.pop())}}r===null&&2&e.f&&(Jr===null||!Jr.includes(e))&&(bo(e,zs),768&e.f||(e.f^=Mc),Nv(e),il(e,0))}function il(t,e){var r=t.deps;if(r!==null)for(var o=e;o<r.length;o++)Kg(t,r[o])}function Ml(t){var e=t.f;if(!(e&gu)){bo(t,Gr);var r=Gn,o=Sn,s=Oa;Gn=t,Oa=!0;try{16&e?function(i){for(var l=i.first;l!==null;){var c=l.next;l.f&kl||To(l),l=c}}(t):Qv(t),Hv(t);var a=_v(t);t.teardown=typeof a=="function"?a:null,t.wv=Bv,t.deps}catch(i){Ol(i,t,r,o||t.ctx)}finally{Oa=s,Gn=r}}}function Zg(){try{(function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")})()}catch(t){if(al===null)throw t;Ol(t,al,null)}}function Wv(){var t=Oa;try{var e=0;for(Oa=!0;Zs.length>0;){e++>1e3&&Zg();var r=Zs,o=r.length;Zs=[];for(var s=0;s<o;s++)Gg(Xg(r[s]))}}finally{ol=!1,Oa=t,al=null,ri.clear()}}function Gg(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var o=t[r];if(!(24576&o.f))try{Os(o)&&(Ml(o),o.deps===null&&o.first===null&&o.nodes_start===null&&(o.teardown===null?Yv(o):o.fn=null))}catch(s){Ol(s,o,null,o.ctx)}}}function Pl(t){ol||(ol=!0,queueMicrotask(Wv));for(var e=al=t;e.parent!==null;){var r=(e=e.parent).f;if(96&r){if(!(r&Gr))return;e.f^=Gr}}Zs.push(e)}function Xg(t){for(var e=[],r=t;r!==null;){var o=r.f,s=!!(96&o);if(!(s&&o&Gr||o&fa)){if(4&o)e.push(r);else if(s)r.f^=Gr;else{var a=Un;try{Un=r,Os(r)&&Ml(r)}catch(c){Ol(c,r,null,r.ctx)}finally{Un=a}}var i=r.first;if(i!==null){r=i;continue}}var l=r.parent;for(r=r.next;r===null&&l!==null;)r=l.next,l=l.parent}return e}function Zn(t){for(md();Zs.length>0;)ol=!0,Wv(),md()}function Vv(){return(Vv=mt(function*(){yield Promise.resolve(),Zn()})).apply(this,arguments)}function n(t){var e,r=!!(2&t.f);if(Un===null||yo){if(r&&t.deps===null&&t.effects===null){var o=t,s=o.parent;s===null||s.f&Oo||(o.f^=Oo)}}else if((e=Ko)===null||e===void 0||!e.includes(t)){var a=Un.deps;t.rv<sl&&(t.rv=sl,Jr===null&&a!==null&&a[Vr]===t?Vr++:Jr===null?Jr=[t]:ua&&Jr.includes(t)||Jr.push(t))}return r&&Os(o=t)&&qv(o),ji&&ri.has(t)?ri.get(t):t.v}function Eo(t){var e=yo;try{return yo=!0,t()}finally{yo=e}}var em=-7169;function bo(t,e){t.f=t.f&em|e}function z(t){if(typeof t=="object"&&t&&!(t instanceof EventTarget)){if(pa in t)Ec(t);else if(!Array.isArray(t))for(var e in t){var r=t[e];typeof r=="object"&&r&&pa in r&&Ec(r)}}}function Ec(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;if(!(typeof t!="object"||t===null||t instanceof EventTarget||e.has(t))){for(var r in e.add(t),t instanceof Date&&t.getTime(),t)try{Ec(t[r],e)}catch{}var o=mu(t);if(o!==Object.prototype&&o!==Array.prototype&&o!==Map.prototype&&o!==Set.prototype&&o!==Date.prototype){var s=Rv(o);for(var a in s){var i=s[a].get;if(i)try{i.call(t)}catch{}}}}}function $v(t){Gn===null&&Un===null&&function(){throw new Error("https://svelte.dev/e/effect_orphan")}(),Un!==null&&Un.f&Oo&&Gn===null&&function(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}(),ji&&function(){throw new Error("https://svelte.dev/e/effect_in_teardown")}()}function Ms(t,e,r){var o=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],s=Gn,a={ctx:Sn,deps:null,nodes_start:null,nodes_end:null,f:t|Cs,first:null,fn:e,last:null,next:null,parent:s,prev:null,teardown:null,transitions:null,wv:0};if(r)try{Ml(a),a.f|=32768}catch(c){throw To(a),c}else e!==null&&Pl(a);if(!(r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&!(1048704&a.f))&&o&&(s!==null&&function(c,u){var d=u.last;d===null?u.last=u.first=c:(d.next=c,c.prev=d,u.last=c)}(a,s),Un!==null&&2&Un.f)){var i,l=Un;((i=l.effects)!==null&&i!==void 0?i:l.effects=[]).push(a)}return a}function xu(t){var e=Ms(8,null,!1);return bo(e,Gr),e.teardown=t,e}function Tc(t){if($v(),!(Gn!==null&&Gn.f&kl&&Sn!==null&&!Sn.m))return Or(t);var e,r=Sn;((e=r.e)!==null&&e!==void 0?e:r.e=[]).push({fn:t,effect:Gn,reaction:Un})}function Or(t){return Ms(4,t,!1)}function J(t,e){var r=Sn,o={effect:null,ran:!1};r.l.r1.push(o),o.effect=Ps(()=>{t(),o.ran||(o.ran=!0,p(r.l.r2,!0),Eo(e))})}function mn(){var t=Sn;Ps(()=>{if(n(t.l.r2)){for(var e of t.l.r1){var r=e.effect;r.f&Gr&&bo(r,zs),Os(r)&&Ml(r),e.ran=!1}t.l.r2.v=!1}})}function Ps(t){return Ms(8,t,!0)}function be(t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ps,r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).map(e);return Da(()=>t(...r.map(n)))}function Da(t){return Ms(24|(arguments.length>1&&arguments[1]!==void 0?arguments[1]:0),t,!0)}function ta(t){return Ms(40,t,!0,!(arguments.length>1&&arguments[1]!==void 0)||arguments[1])}function Hv(t){var e=t.teardown;if(e!==null){var r=ji,o=Un;xd(!0),Ao(null);try{e.call(null)}finally{xd(r),Ao(o)}}}function Qv(t){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r=t.first;for(t.first=t.last=null;r!==null;){var o=r.next;r.f&Mv?r.parent=null:To(r,e),r=o}}function To(t){var e=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=!1;if((e||524288&t.f)&&t.nodes_start!==null){for(var o=t.nodes_start,s=t.nodes_end;o!==null;){var a=o===s?null:zl(o);o.remove(),o=a}r=!0}Qv(t,e&&!r),il(t,0),bo(t,gu);var i=t.transitions;if(i!==null)for(var l of i)l.stop();Hv(t);var c=t.parent;c!==null&&c.first!==null&&Yv(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yv(t){var e=t.parent,r=t.prev,o=t.next;r!==null&&(r.next=o),o!==null&&(o.prev=r),e!==null&&(e.first===t&&(e.first=o),e.last===t&&(e.last=r))}function hs(t,e){var r=[];yu(t,r,!0),Kv(r,()=>{To(t),e&&e()})}function Kv(t,e){var r=t.length;if(r>0){var o=()=>--r||e();for(var s of t)s.out(o)}else e()}function yu(t,e,r){if(!(t.f&fa)){if(t.f^=fa,t.transitions!==null)for(var o of t.transitions)(o.is_global||r)&&e.push(o);for(var s=t.first;s!==null;){var a=s.next;yu(s,e,!!(s.f&mi||s.f&kl)&&r),s=a}}}function ll(t){Zv(t,!0)}function Zv(t,e){if(t.f&fa){t.f^=fa,t.f&Gr||(t.f^=Gr),Os(t)&&(bo(t,Cs),Pl(t));for(var r=t.first;r!==null;){var o=r.next;Zv(r,!!(r.f&mi||r.f&kl)&&e),r=o}if(t.transitions!==null)for(var s of t.transitions)(s.is_global||e)&&s.in()}}function xi(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}var Sn=null;function yd(t){Sn=t}function ya(t){return Gv().get(t)}function et(t){var e=Sn={p:Sn,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Ss&&!(arguments.length>1&&arguments[1]!==void 0&&arguments[1])&&(Sn.l={s:null,u:null,r1:[],r2:Ea(!1)}),xu(()=>{e.d=!0})}function tt(t){var e=Sn;if(e!==null){t!==void 0&&(e.x=t);var r=e.e;if(r!==null){var o=Gn,s=Un;e.e=null;try{for(var a=0;a<r.length;a++){var i=r[a];ba(i.effect),Ao(i.reaction),Or(i.fn)}}finally{ba(o),Ao(s)}}Sn=e.p,e.m=!0}return t||{}}function Rs(){return!Ss||Sn!==null&&Sn.l===null}function Gv(t){var e,r;return Sn===null&&xi(),(r=(e=Sn).c)!==null&&r!==void 0?r:e.c=new Map(function(o){for(var s=o.p;s!==null;){var a=s.c;if(a!==null)return a;s=s.p}return null}(Sn)||void 0)}var tm=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],nm={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"},rm=["touchstart","touchmove"];function om(t){return rm.includes(t)}var wd=!1;function Xv(t){var e=Un,r=Gn;Ao(null),ba(null);try{return t()}finally{Ao(e),ba(r)}}function am(t,e,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;t.addEventListener(e,()=>Xv(r));var s=t.__on_r;t.__on_r=s?()=>{s(),o(!0)}:()=>o(!0),wd||(wd=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{if(!a.defaultPrevented)for(var i of a.target.elements){var l;(l=i.__on_r)===null||l===void 0||l.call(i)}})},{capture:!0}))}var ef=new Set,Nc=new Set;function tf(t,e,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};function s(a){if(o.capture||Hs.call(e,a),!a.cancelBubble)return Xv(()=>r==null?void 0:r.call(this,a))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Sl(()=>{e.addEventListener(t,s,o)}):e.addEventListener(t,s,o),s}function ie(t,e,r,o,s){var a={capture:o,passive:s},i=tf(t,e,r,a);e!==document.body&&e!==window&&e!==document||xu(()=>{e.removeEventListener(t,i,a)})}function yi(t){for(var e=0;e<t.length;e++)ef.add(t[e]);for(var r of Nc)r(t)}function Hs(t){var e,r=this,o=r.ownerDocument,s=t.type,a=((e=t.composedPath)===null||e===void 0?void 0:e.call(t))||[],i=a[0]||t.target,l=0,c=t.__root;if(c){var u=a.indexOf(c);if(u!==-1&&(r===document||r===window))return void(t.__root=r);var d=a.indexOf(r);if(d===-1)return;u<=d&&(l=u)}if((i=a[l]||t.target)!==r){Vg(t,"currentTarget",{configurable:!0,get:()=>i||o});var v=Un,f=Gn;Ao(null),ba(null);try{for(var g,m=[];i!==null;){var b=i.assignedSlot||i.parentNode||i.host||null;try{var j=i["__"+s];if(j!=null&&(!i.disabled||t.target===i))if(bi(j)){var[k,...C]=j;k.apply(i,[t,...C])}else j.call(i,t)}catch(x){g?m.push(x):g=x}if(t.cancelBubble||b===r||b===null)break;i=b}if(g){var A=function(x){queueMicrotask(()=>{throw x})};for(var M of m)A(M);throw g}}finally{t.__root=r,delete t.currentTarget,Ao(v),ba(f)}}}function wu(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Ta(t,e){var r=Gn;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function L(t,e){var r,o=!!(1&e),s=!!(2&e),a=!t.startsWith("<!>");return()=>{r===void 0&&(r=wu(a?t:"<!>"+t),o||(r=Yr(r)));var i=s||Iv?document.importNode(r,!0):r.cloneNode(!0);return o?Ta(Yr(i),i.lastChild):Ta(i,i),i}}function wa(t,e){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"svg",s=!t.startsWith("<!>"),a=!!(1&e),i="<".concat(o,">").concat(s?t:"<!>"+t,"</").concat(o,">");return()=>{if(!r){var l=Yr(wu(i));if(a)for(r=document.createDocumentFragment();Yr(l);)r.appendChild(Yr(l));else r=Yr(l)}var c=r.cloneNode(!0);return a?Ta(Yr(c),c.lastChild):Ta(c,c),c}}function kr(){var t=Cl((arguments.length>0&&arguments[0]!==void 0?arguments[0]:"")+"");return Ta(t,t),t}function tr(){var t=document.createDocumentFragment(),e=document.createComment(""),r=Cl();return t.append(e,r),Ta(e,r),t}function R(t,e){t!==null&&t.before(e)}function it(t,e){var r,o=e==null?"":typeof e=="object"?e+"":e;o!==((r=t.__t)!==null&&r!==void 0?r:t.__t=t.nodeValue)&&(t.__t=o,t.nodeValue=o+"")}function sm(t,e){return function(r,o){var{target:s,anchor:a,props:i={},events:l,context:c}=o;(function(){if(Yo===void 0){Yo=window,Iv=/Firefox/.test(navigator.userAgent);var g=Element.prototype,m=Node.prototype,b=Text.prototype;Uv=Qo(m,"firstChild").get,Dv=Qo(m,"nextSibling").get,hd(g)&&(g.__click=void 0,g.__className=void 0,g.__attributes=null,g.__style=void 0,g.__e=void 0),hd(b)&&(b.__t=void 0)}})();var u=new Set,d=g=>{for(var m=0;m<g.length;m++){var b=g[m];if(!u.has(b)){u.add(b);var j=om(b);s.addEventListener(b,Hs,{passive:j});var k=Va.get(b);k===void 0?(document.addEventListener(b,Hs,{passive:j}),Va.set(b,1)):Va.set(b,k+1)}}};d(Rc(ef)),Nc.add(d);var v=void 0,f=function(g){var m=Ms(Mv,g,!0);return function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(j=>{b.outro?hs(m,()=>{To(m),j(void 0)}):(To(m),j(void 0))})}}(()=>{var g=a??s.appendChild(Cl());return ta(()=>{c&&(et({}),Sn.c=c),l&&(i.$$events=l),v=r(g,i)||{},c&&tt()}),()=>{for(var m of u){s.removeEventListener(m,Hs);var b=Va.get(m);--b==0?(document.removeEventListener(m,Hs),Va.delete(m)):Va.set(m,b)}var j;Nc.delete(d),g!==a&&((j=g.parentNode)===null||j===void 0||j.removeChild(g))}});return qc.set(v,f),v}(t,e)}var Va=new Map,qc=new WeakMap;function K(t,e){var[r,o]=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],s=t,a=null,i=null,l=Dr,c=!1,u=function(v){c=!0,d(!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],v)},d=(v,f)=>{l!==(l=v)&&(l?(a?ll(a):f&&(a=ta(()=>f(s))),i&&hs(i,()=>{i=null})):(i?ll(i):f&&(i=ta(()=>f(s,[r+1,o]))),a&&hs(a,()=>{a=null})))};Da(()=>{c=!1,e(u),c||d(null,null)},r>0?mi:0)}function nf(t,e,r){var o,s=t,a=Dr,i=Rs()?Yg:bu;Da(()=>{i(a,a=e())&&(o&&hs(o),o=ta(()=>r(s)))})}function vr(t,e){return e}function sr(t,e,r,o,s){var a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,i=t,l={flags:e,items:new Map,first:null};!(4&e)||(i=t.appendChild(Cl()));var c=null,u=!1,d=ae(()=>{var v=r();return bi(v)?v:v==null?[]:Rc(v)});Da(()=>{var v=n(d),f=v.length;u&&f===0||(u=f===0,function(g,m,b,j,k,C,A){var M,x,I,F,B,S,V=!!(8&k),G=!!(3&k),H=g.length,te=m.items,ye=m.first,ne=ye,ve=null,Ee=[],Re=[];if(V)for(S=0;S<H;S+=1){var fe;F=C(I=g[S],S),(B=te.get(F))!==void 0&&((fe=B.a)===null||fe===void 0||fe.measure(),(x??(x=new Set)).add(B))}for(S=0;S<H;S+=1)if(F=C(I=g[S],S),(B=te.get(F))!==void 0){var Ce;if(G&&im(B,I,S,k),B.e.f&fa&&(ll(B.e),V&&((Ce=B.a)===null||Ce===void 0||Ce.unfix(),(x??(x=new Set)).delete(B))),B!==ne){if(M!==void 0&&M.has(B)){if(Ee.length<Re.length){var we,Ue=Re[0];ve=Ue.prev;var de=Ee[0],re=Ee[Ee.length-1];for(we=0;we<Ee.length;we+=1)kd(Ee[we],Ue,b);for(we=0;we<Re.length;we+=1)M.delete(Re[we]);oa(m,de.prev,re.next),oa(m,ve,de),oa(m,re,Ue),ne=Ue,ve=re,S-=1,Ee=[],Re=[]}else M.delete(B),kd(B,ne,b),oa(m,B.prev,B.next),oa(m,B,ve===null?m.first:ve.next),oa(m,ve,B),ve=B;continue}for(Ee=[],Re=[];ne!==null&&ne.k!==F;)ne.e.f&fa||(M??(M=new Set)).add(ne),Re.push(ne),ne=ne.next;if(ne===null)continue;B=ne}Ee.push(B),ve=B,ne=B.next}else ve=lm(ne?ne.e.nodes_start:b,m,ve,ve===null?m.first:ve.next,I,F,S,j,k,A),te.set(F,ve),Ee=[],Re=[],ne=ve.next;if(ne!==null||M!==void 0){for(var ce=M===void 0?[]:Rc(M);ne!==null;)ne.e.f&fa||ce.push(ne),ne=ne.next;var at=ce.length;if(at>0){var Ot=4&k&&H===0?b:null;if(V){for(S=0;S<at;S+=1){var Q;(Q=ce[S].a)===null||Q===void 0||Q.measure()}for(S=0;S<at;S+=1){var N;(N=ce[S].a)===null||N===void 0||N.fix()}}(function(ee,T,pe,Y){for(var Me=[],$=T.length,E=0;E<$;E++)yu(T[E].e,Me,!0);var jt=$>0&&Me.length===0&&pe!==null;if(jt){var Ke=pe.parentNode;Ke.textContent="",Ke.append(pe),Y.clear(),oa(ee,T[0].prev,T[$-1].next)}Kv(Me,()=>{for(var lt=0;lt<$;lt++){var st=T[lt];jt||(Y.delete(st.k),oa(ee,st.prev,st.next)),To(st.e,!jt)}})})(m,ce,Ot,te)}}V&&Sl(()=>{if(x!==void 0)for(B of x){var ee;(ee=B.a)===null||ee===void 0||ee.apply()}}),Gn.first=m.first&&m.first.e,Gn.last=ve&&ve.e}(v,l,i,s,e,o,r),a!==null&&(f===0?c?ll(c):c=ta(()=>a(i)):c!==null&&hs(c,()=>{c=null})),n(d))})}function im(t,e,r,o){1&o&&Ac(t.v,e),2&o?Ac(t.i,r):t.i=r}function lm(t,e,r,o,s,a,i,l,c,u){var d=1&c?16&c?Ea(s):P(s):s,v=2&c?Ea(i):i,f={i:v,v:d,k:a,a:null,e:null,prev:r,next:o};try{return f.e=ta(()=>l(t,d,v,u),!1),f.e.prev=r&&r.e,f.e.next=o&&o.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),o!==null&&(o.prev=f,o.e.prev=f.e),f}finally{}}function kd(t,e,r){for(var o=t.next?t.next.e.nodes_start:r,s=e?e.e.nodes_start:r,a=t.e.nodes_start;a!==o;){var i=zl(a);s.before(a),a=i}}function oa(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function rf(t,e,r,o,s){var a,i=t,l="";Da(()=>{var c;l!==(l=(c=e())!==null&&c!==void 0?c:"")&&(a!==void 0&&(To(a),a=void 0),l!==""&&(a=ta(()=>{var u=l+"";r&&(u="<svg>".concat(u,"</svg>"));var d=wu(u);if((r||o)&&(d=Yr(d)),Ta(Yr(d),d.lastChild),r||o)for(;Yr(d);)i.before(Yr(d));else i.before(d)})))})}function ar(t,e,r,o,s){var a,i=(a=e.$$slots)===null||a===void 0?void 0:a[r],l=!1;i===!0&&(i=e[r==="default"?"children":r],l=!0),i===void 0?s!==null&&s(t):i(t,l?()=>o:o)}function of(t,e,r){var o,s,a=t;Da(()=>{o!==(o=e())&&(s&&(hs(s),s=null),o&&(s=ta(()=>r(a,o))))},mi)}function qr(t,e,r){Or(()=>{var o=Eo(()=>e(t,r==null?void 0:r())||{});if(r&&o!=null&&o.update){var s=!1,a={};Ps(()=>{var i=r();z(i),s&&bu(a,i)&&(a=i,o.update(i))}),s=!0}if(o!=null&&o.destroy)return()=>o.destroy()})}function af(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(r=af(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function ja(t){return typeof t=="object"?function(){for(var e,r,o=0,s="",a=arguments.length;o<a;o++)(e=arguments[o])&&(r=af(e))&&(s&&(s+=" "),s+=r);return s}(t):t??""}var Sd=[...` 	
\r\f \v\uFEFF`];function Cd(t){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1]?" !important;":";",r="";for(var o in t){var s=t[o];s!=null&&s!==""&&(r+=" "+o+": "+s+e)}return r}function nc(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function wt(t,e,r,o,s,a){var i=t.__className;if(i!==r||i===void 0){var l=function(d,v,f){var g=d==null?"":""+d;if(v&&(g=g?g+" "+v:v),f){for(var m in f)if(f[m])g=g?g+" "+m:m;else if(g.length)for(var b=m.length,j=0;(j=g.indexOf(m,j))>=0;){var k=j+b;j!==0&&!Sd.includes(g[j-1])||k!==g.length&&!Sd.includes(g[k])?j=k:g=(j===0?"":g.substring(0,j))+g.substring(k+1)}}return g===""?null:g}(r,o,a);l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l),t.__className=r}else if(a&&s!==a)for(var c in a){var u=!!a[c];s!=null&&u===!!s[c]||t.classList.toggle(c,u)}return a}function rc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;for(var s in r){var a=r[s];e[s]!==a&&(r[s]==null?t.style.removeProperty(s):t.style.setProperty(s,a,o))}}function po(t,e,r,o){if(t.__style!==e){var s=function(a,i){if(i){var l,c,u="";if(Array.isArray(i)?(l=i[0],c=i[1]):l=i,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var d=!1,v=0,f=!1,g=[];l&&g.push(...Object.keys(l).map(nc)),c&&g.push(...Object.keys(c).map(nc));for(var m=0,b=-1,j=a.length,k=0;k<j;k++){var C=a[k];if(f?C==="/"&&a[k-1]==="*"&&(f=!1):d?d===C&&(d=!1):C==="/"&&a[k+1]==="*"?f=!0:C==='"'||C==="'"?d=C:C==="("?v++:C===")"&&v--,!f&&d===!1&&v===0){if(C===":"&&b===-1)b=k;else if(C===";"||k===j-1){if(b!==-1){var A=nc(a.substring(m,b).trim());g.includes(A)||(C!==";"&&k++,u+=" "+a.substring(m,k).trim()+";")}m=k+1,b=-1}}}}return l&&(u+=Cd(l)),c&&(u+=Cd(c,!0)),(u=u.trim())===""?null:u}return a==null?null:String(a)}(e,o);s==null?t.removeAttribute("style"):t.style.cssText=s,t.__style=e}else o&&(Array.isArray(o)?(rc(t,r==null?void 0:r[0],o[0]),rc(t,r==null?void 0:r[1],o[1],"important")):rc(t,r,o));return o}var Ya=Symbol("class"),_s=Symbol("style"),sf=Symbol("is custom element"),lf=Symbol("is html");function Na(t,e){var r=ku(t);r.value!==(r.value=e??void 0)&&(t.value!==e||e===0&&t.nodeName==="PROGRESS")&&(t.value=e??"")}function gn(t,e,r,o){var s=ku(t);s[e]!==(s[e]=r)&&(e==="loading"&&(t[_g]=r),r==null?t.removeAttribute(e):typeof r!="string"&&cf(t).includes(e)?t[e]=r:t.setAttribute(e,r))}function Hi(t,e,r,o){var s,a=ku(t),i=a[sf],l=!a[lf],c=e||{},u=t.tagName==="OPTION";for(var d in e)d in r||(r[d]=null);r.class?r.class=ja(r.class):(o||r[Ya])&&(r.class=null),r[_s]&&((s=r.style)!==null&&s!==void 0||(r.style=null));var v,f,g,m,b,j,k=cf(t),C=function(M){var x=r[M];if(u&&M==="value"&&x==null)return t.value=t.__value="",c[M]=x,0;if(M==="class")return v=t.namespaceURI==="http://www.w3.org/1999/xhtml",wt(t,v,x,o,e==null?void 0:e[Ya],r[Ya]),c[M]=x,c[Ya]=r[Ya],0;if(M==="style")return po(t,x,e==null?void 0:e[_s],r[_s]),c[M]=x,c[_s]=r[_s],0;if(x===(f=c[M])||(c[M]=x,(g=M[0]+M[1])==="$$"))return 0;if(g==="on"){var I={},F="$$"+M,B=M.slice(2);if(m=function(te){return tm.includes(te)}(B),function(te){return te.endsWith("capture")&&te!=="gotpointercapture"&&te!=="lostpointercapture"}(B)&&(B=B.slice(0,-7),I.capture=!0),!m&&f){if(x!=null)return 0;t.removeEventListener(B,c[F],I),c[F]=null}if(x!=null)if(m)t["__".concat(B)]=x,yi([B]);else{let te=function(ye){c[M].call(this,ye)};c[F]=tf(B,t,te,I)}else m&&(t["__".concat(B)]=void 0)}else if(M==="style")gn(t,M,x);else if(M==="autofocus")(function(te,ye){if(ye){var ne=document.body;te.autofocus=!0,Sl(()=>{document.activeElement===ne&&te.focus()})}})(t,!!x);else if(i||M!=="__value"&&(M!=="value"||x==null))if(M==="selected"&&u)(function(te,ye){ye?te.hasAttribute("selected")||te.setAttribute("selected",""):te.removeAttribute("selected")})(t,x);else if(b=M,l||(b=function(te){var ye;return te=te.toLowerCase(),(ye=nm[te])!==null&&ye!==void 0?ye:te}(b)),j=b==="defaultValue"||b==="defaultChecked",x!=null||i||j)j||k.includes(b)&&(i||typeof x!="string")?t[b]=x:typeof x!="function"&&gn(t,b,x);else if(a[M]=null,b==="value"||b==="checked"){var S=t,V=e===void 0;if(b==="value"){var G=S.defaultValue;S.removeAttribute(b),S.defaultValue=G,S.value=S.__value=V?G:null}else{var H=S.defaultChecked;S.removeAttribute(b),S.defaultChecked=H,S.checked=!!V&&H}}else t.removeAttribute(M);else t.value=t.__value=x};for(var A in r)C(A);return c}function ku(t){var e;return(e=t.__attributes)!==null&&e!==void 0?e:t.__attributes={[sf]:t.nodeName.includes("-"),[lf]:t.namespaceURI==="http://www.w3.org/1999/xhtml"}}var zd=new Map;function cf(t){var e,r=zd.get(t.nodeName);if(r)return r;zd.set(t.nodeName,r=[]);for(var o=t,s=Element.prototype;s!==o;){for(var a in e=Rv(o))e[a].set&&r.push(a);o=mu(o)}return r}function cl(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e,o=Rs();am(t,"input",s=>{var a=s?t.defaultValue:t.value;if(a=oc(t)?ac(a):a,r(a),o&&a!==(a=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=a??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),Eo(e)==null&&t.value&&r(oc(t)?ac(t.value):t.value),Ps(()=>{var s=e();oc(t)&&s===ac(t.value)||(t.type!=="date"||s||t.value)&&s!==t.value&&(t.value=s??"")})}function oc(t){var e=t.type;return e==="number"||e==="range"}function ac(t){return t===""?null:+t}function pt(t,e,r){var o=Qo(t,e);o&&o.set&&(t[e]=r,xu(()=>{t[e]=null}))}function Od(t,e){return t===e||(t==null?void 0:t[pa])===e}function Qn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Or(()=>{var o,s;return Ps(()=>{o=s,s=[],Eo(()=>{t!==r(...s)&&(e(t,...s),o&&Od(r(...o),t)&&e(null,...o))})}),()=>{Sl(()=>{s&&Od(r(...s),t)&&e(null,...s)})}}),t}function _o(t){return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return r[0].stopPropagation(),t==null?void 0:t.apply(this,r)}}function aa(t){return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return r[0].preventDefault(),t==null?void 0:t.apply(this,r)}}function bt(){var t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=Sn,r=e.l.u;if(r){var o,s=()=>z(e.s);if(t){var a=0,i={},l=ps(()=>{var c=!1,u=e.s;for(var d in u)u[d]!==i[d]&&(i[d]=u[d],c=!0);return c&&a++,a});s=()=>n(l)}r.b.length&&(o=()=>{Md(e,s),rl(r.b)},$v(),Ps(o)),Tc(()=>{var c=Eo(()=>r.m.map(Qg));return()=>{for(var u of c)typeof u=="function"&&u()}}),r.a.length&&Tc(()=>{Md(e,s),rl(r.a)})}}function Md(t,e){if(t.l.s)for(var r of t.l.s)n(r);e()}function Rl(t){var e=Ea(0);return function(){return arguments.length===1?(p(e,n(e)+1),arguments[0]):(n(e),t())}}function Qs(t,e){var r,o=(r=t.$$events)===null||r===void 0?void 0:r[e.type],s=bi(o)?o.slice():o==null?[]:[o];for(var a of s)a.call(this,e)}function Er(t){Sn===null&&xi(),Ss&&Sn.l!==null?uf(Sn).m.push(t):Tc(()=>{var e=Eo(t);if(typeof e=="function")return e})}function co(t){Sn===null&&xi(),Er(()=>()=>Eo(t))}function cm(){var t=Sn;return t===null&&xi(),(e,r,o)=>{var s,a=(s=t.s.$$events)===null||s===void 0?void 0:s[e];if(a){var i=bi(a)?a.slice():[a],l=function(u,d){var{bubbles:v=!1,cancelable:f=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return new CustomEvent(u,{detail:d,bubbles:v,cancelable:f})}(e,r,o);for(var c of i)c.call(t.x,l);return!l.defaultPrevented}return!0}}function um(t){Sn===null&&xi(),Sn.l===null&&function(){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}(),uf(Sn).b.push(t)}function uf(t){var e,r=t.l;return(e=r.u)!==null&&e!==void 0?e:r.u={a:[],b:[],m:[]}}var Ni=!1,dm={get(t,e){if(!t.exclude.includes(e))return n(t.version),e in t.special?t.special[e]():t.props[e]},set:(t,e,r)=>(e in t.special||(t.special[e]=h({get[e](){return t.props[e]}},e,4)),t.special[e](r),jd(t.version),!0),getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e))return e in t.props?{enumerable:!0,configurable:!0,value:t.props[e]}:void 0},deleteProperty:(t,e)=>(t.exclude.includes(e)||(t.exclude.push(e),jd(t.version)),!0),has:(t,e)=>!t.exclude.includes(e)&&e in t.props,ownKeys:t=>Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))};function qi(t,e){return new Proxy({props:t,exclude:e,special:{},version:Ea(0)},dm)}var vm={get(t,e){for(var r=t.props.length;r--;){var o=t.props[r];if(Fs(o)&&(o=o()),typeof o=="object"&&o!==null&&e in o)return o[e]}},set(t,e,r){for(var o=t.props.length;o--;){var s=t.props[o];Fs(s)&&(s=s());var a=Qo(s,e);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(t,e){for(var r=t.props.length;r--;){var o=t.props[r];if(Fs(o)&&(o=o()),typeof o=="object"&&o!==null&&e in o){var s=Qo(o,e);return s&&!s.configurable&&(s.configurable=!0),s}}},has(t,e){if(e===pa||e===Pv)return!1;for(var r of t.props)if(Fs(r)&&(r=r()),r!=null&&e in r)return!0;return!1},ownKeys(t){var e=[];for(var r of t.props)for(var o in Fs(r)&&(r=r()),r)e.includes(o)||e.push(o);return e}};function ha(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return new Proxy({props:e},vm)}function Pd(t){var e,r;return(e=(r=t.ctx)===null||r===void 0?void 0:r.d)!==null&&e!==void 0&&e}function h(t,e,r,o){var s,a,i,l=!!(1&r),c=!Ss||!!(2&r),u=!!(8&r),d=!!(16&r),v=!1;u?[i,v]=function(B){var S=Ni;try{return Ni=!1,[B(),Ni]}finally{Ni=S}}(()=>t[e]):i=t[e];var f,g=pa in t||Pv in t,m=u&&((s=(a=Qo(t,e))===null||a===void 0?void 0:a.set)!==null&&s!==void 0?s:g&&e in t&&(B=>t[e]=B))||void 0,b=o,j=!0,k=!1,C=()=>(k=!0,j&&(j=!1,b=d?Eo(o):o),b);if(i===void 0&&o!==void 0&&(m&&c&&function(){throw new Error("https://svelte.dev/e/props_invalid_value")}(),i=C(),m&&m(i)),c)f=()=>{var B=t[e];return B===void 0?C():(j=!0,k=!1,B)};else{var A=(l?ps:ae)(()=>t[e]);A.f|=Lg,f=()=>{var B=n(A);return B!==void 0&&(b=void 0),B===void 0?b:B}}if(!(4&r))return f;if(m){var M=t.$$legacy;return function(B,S){return arguments.length>0?(c&&S&&!M&&!v||m(S?f():B),B):f()}}var x=!1,I=P(i),F=ps(()=>{var B=f(),S=n(I);return x?(x=!1,S):I.v=B});return u&&n(F),l||(F.equals=ju),function(B,S){if(arguments.length>0){var V=S?n(F):c&&u?Ca(B):B;if(!F.equals(V)){if(x=!0,p(I,V),k&&b!==void 0&&(b=V),Pd(F))return B;Eo(()=>n(F))}return B}return Pd(F)?F.v:n(F)}}function wr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(o){var s=function(a){try{if(typeof window<"u"&&window.localStorage!==void 0)return window.localStorage[a]}catch{}}("debug");return s!=null&&s.endsWith("*")?o.startsWith(s.slice(0,-1)):o===s}(t);if(!e)return fm;var r=function(o){for(var s=0,a=0;a<o.length;a++)s=(s<<5)-s+o.charCodeAt(a),s|=0;return Rd[Math.abs(s)%Rd.length]}(t);return function(){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];console.log("%c".concat(t),"color:".concat(r),...s)}}function fm(){}var Rd=["#0000CC","#0099FF","#009400","#8dd200","#CCCC00","#CC9933","#ae04e7","#ff35d7","#FF3333","#FF6600","#FF9933","#FFCC33"],pm=0;function Ga(){return++pm}function Pr(t){return parseInt(t,10)}function Su(t){return hm.test(t)}var hm=/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;function fn(t){return typeof t=="object"&&t!==null&&(t.constructor===void 0||t.constructor.name==="Object")}function cr(t){return typeof t=="object"&&t!==null&&(t.constructor===void 0||t.constructor.name==="Object"||t.constructor.name==="Array")}function df(t){return t===!0||t===!1}function ul(t){if(typeof t=="number")return t>9466848e5&&isFinite(t)&&Math.floor(t)===t&&!isNaN(new Date(t).valueOf());if(typeof t=="bigint")return ul(Number(t));try{var e=t&&t.valueOf();if(e!==t)return ul(e)}catch{return!1}return!1}function vf(t){(Ii=Ii||window.document.createElement("div")).style.color="",Ii.style.color=t;var e=Ii.style.color;return e!==""?e.replace(/\s+/g,"").toLowerCase():void 0}var Ii=void 0;function ff(t){return typeof t=="string"&&t.length<99&&!!vf(t)}function Al(t,e){if(typeof t=="number"||typeof t=="string"||typeof t=="boolean"||t===void 0)return typeof t;if(typeof t=="bigint")return"number";if(t===null)return"null";if(Array.isArray(t))return"array";if(fn(t))return"object";var r=e.stringify(t);return r&&Su(r)?"number":r==="true"||r==="false"?"boolean":r==="null"?"null":"unknown"}var gm=/^https?:\/\/\S+$/;function wi(t){return typeof t=="string"&&gm.test(t)}function Ja(t,e){if(t==="")return"";var r=t.trim();return r==="null"?null:r==="true"||r!=="false"&&(Su(r)?e.parse(r):t)}function pf(t){return mm.test(t)}var mm=/^-?[0-9]+$/,bm=[];function Ad(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function Ic(t){var e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],r={};if(!Array.isArray(t))throw new TypeError("Array expected");function o(i,l){(!Array.isArray(i)&&!fn(i)||e&&l.length>0)&&(r[St(l)]=!0),fn(i)&&Object.keys(i).forEach(c=>{o(i[c],l.concat(c))})}for(var s=Math.min(t.length,1e4),a=0;a<s;a++)o(t[a],bm);return Object.keys(r).sort().map(So)}function hf(t,e,r){if(!(e<=t))for(var o=t;o<e;o++)r(o)}function gf(t,e){return t.length>e?t.slice(0,e):t}function Ed(t){return me({},t)}function Td(t){return Object.values(t)}function Nd(t,e,r,o){var s=t.slice(0),a=s.splice(e,r);return s.splice.apply(s,[e+o,0,...a]),s}function jm(t,e,r){return t.slice(0,e).concat(r).concat(t.slice(e))}function ki(t,e){try{return e.parse(t)}catch{return e.parse(zo(t))}}function mf(t,e){try{return ki(t,e)}catch{return}}function El(t,e){t=t.replace(jf,"");try{return e(t)}catch{}try{return e("{"+t+"}")}catch{}try{return e("["+t+"]")}catch{}throw new Error("Failed to parse partial JSON")}function bf(t){t=t.replace(jf,"");try{return zo(t)}catch{}try{var e=zo("["+t+"]");return e.substring(1,e.length-1)}catch{}try{var r=zo("{"+t+"}");return r.substring(1,r.length-1)}catch{}throw new Error("Failed to repair partial JSON")}var jf=/,\s*$/;function gs(t,e){var r=qd.exec(e);if(r){var o=Pr(r[2]),s=function(g,m){for(var b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:g.length,k=0,C=b;C<j;C++)g.charAt(C)===m&&k++;return k}(t,`
`,0,o),a=o-t.lastIndexOf(`
`,o)-1;return{position:o,line:s,column:a,message:e.replace(qd,()=>"line ".concat(s+1," column ").concat(a+1))}}var i=xm.exec(e),l=i?Pr(i[1]):void 0,c=l!==void 0?l-1:void 0,u=ym.exec(e),d=u?Pr(u[1]):void 0,v=d!==void 0?d-1:void 0,f=c!==void 0&&v!==void 0?function(g,m,b){for(var j=g.indexOf(`
`),k=1;k<m&&j!==-1;)j=g.indexOf(`
`,j+1),k++;return j!==-1?j+b+1:void 0}(t,c,v):void 0;return{position:f,line:c,column:v,message:e.replace(/^JSON.parse: /,"").replace(/ of the JSON data$/,"")}}function sc(t){return fn(t)?t.json!==void 0?t.text!==void 0?'Content must contain either a property "json" or a property "text" but not both':void 0:t.text===void 0?'Content must contain either a property "json" or a property "text"':typeof t.text!="string"?'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?':void 0:"Content must be an object"}function ms(t){return fn(t)&&typeof t.text=="string"}function bs(t){return fn(t)&&t.json!==void 0}function xf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:JSON;return ms(t)?t:{text:r.stringify(t.json,null,e)}}function Uc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:JSON;return bs(t)?t:{json:e.parse(t.text)}}function Dc(t,e,r){return xf(t,e,r).text}function yf(t,e){return wf(t,e)>e}function wf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0;if(ms(t))return t.text.length;var r=t.json,o=0;return function s(a){if(Array.isArray(a)){if((o+=a.length-1+2)>e)return;for(var i=0;i<a.length;i++)if(s(a[i]),o>e)return}else if(fn(a)){var l=Object.keys(a);o+=2+l.length+(l.length-1);for(var c=0;c<l.length;c++){var u=l[c],d=a[u];o+=u.length+2,s(d)}}else o+=typeof a=="string"?a.length+2:String(a).length}(r),o}var qd=/(position|char) (\d+)/,xm=/line (\d+)/,ym=/column (\d+)/;function Cu(t,e){return t.parse===e.parse&&t.stringify===e.stringify}var br,kn,oo,so,io,ro,Zo,wm=/[,:]\S/;function zu(t){var{escapeControlCharacters:e,escapeUnicodeCharacters:r}=t;return e?r?km:Sm:r?Cm:zm}(function(t){t.text="text",t.tree="tree",t.table="table"})(br||(br={})),function(t){t.after="after",t.inside="inside",t.key="key",t.value="value",t.multi="multi",t.text="text"}(kn||(kn={})),function(t){t.after="after",t.key="key",t.value="value",t.inside="inside"}(oo||(oo={})),function(t){t.info="info",t.warning="warning",t.error="error"}(so||(so={})),function(t){t.key="key",t.value="value"}(io||(io={})),function(t){t.asc="asc",t.desc="desc"}(ro||(ro={})),function(t){t.no="no",t.self="self",t.nextInside="nextInside"}(Zo||(Zo={}));var km={escapeValue:t=>kf(zf(String(t))),unescapeValue:t=>Of(Sf(t))},Sm={escapeValue:t=>zf(String(t)),unescapeValue:t=>Of(t)},Cm={escapeValue:t=>kf(String(t)),unescapeValue:t=>Sf(t)},zm={escapeValue:t=>String(t),unescapeValue:t=>t};function kf(t){return t.replace(/[^\x20-\x7F]/g,e=>{var r;return e==="\b"||e==="\f"||e===`
`||e==="\r"||e==="	"?e:"\\u"+("000"+((r=e.codePointAt(0))===null||r===void 0?void 0:r.toString(16))).slice(-4)})}function Sf(t){return t.replace(/\\u[a-fA-F0-9]{4}/g,e=>{try{var r=JSON.parse('"'+e+'"');return Cf[r]||r}catch{return e}})}var Cf={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Om={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":`
`,"\\r":"\r","\\t":"	"};function zf(t){return t.replace(/["\b\f\n\r\t\\]/g,e=>Cf[e]||e)}function Of(t){return t.replace(/\\["bfnrt\\]/g,e=>Om[e]||e)}function Tl(t){return typeof t!="string"?String(t):t.endsWith(`
`)?t+`
`:t}function Mf(t,e){return As(t,r=>r.nodeName.toUpperCase()===e.toUpperCase())}function da(t,e,r){return As(t,o=>function(s,a,i){return typeof s.getAttribute=="function"&&s.getAttribute(a)===i}(o,e,r))}function As(t,e){return!!Ou(t,e)}function Ou(t,e){for(var r=t;r&&!e(r);)r=r.parentNode;return r}function Si(t){var e,r;return(e=t==null||(r=t.ownerDocument)===null||r===void 0?void 0:r.defaultView)!==null&&e!==void 0?e:void 0}function Mu(t){var e=Si(t),r=e==null?void 0:e.document.activeElement;return!!r&&As(r,o=>o===t)}function Pf(t,e){return Ou(t,r=>r.nodeName===e)}function ic(t){return da(t,"data-type","selectable-key")?kn.key:da(t,"data-type","selectable-value")?kn.value:da(t,"data-type","insert-selection-area-inside")?kn.inside:da(t,"data-type","insert-selection-area-after")?kn.after:kn.multi}function Jc(t){return encodeURIComponent(St(t))}function Rf(t){var e,r=Ou(t,s=>!(s==null||!s.hasAttribute)&&s.hasAttribute("data-path")),o=(e=r==null?void 0:r.getAttribute("data-path"))!==null&&e!==void 0?e:void 0;return o?So(decodeURIComponent(o)):void 0}function Mm(t){var{allElements:e,currentElement:r,direction:o,hasPrio:s=()=>!0,margin:a=10}=t,i=Hp(e.filter(function(k){var C=k.getBoundingClientRect();return C.width>0&&C.height>0}),c),l=c(r);function c(k){var C=k.getBoundingClientRect();return{x:C.left+C.width/2,y:C.top+C.height/2,rect:C,element:k}}function u(k,C){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,M=k.x-C.x,x=(k.y-C.y)*A;return Math.sqrt(M*M+x*x)}var d=k=>u(k,l);if(o==="Left"||o==="Right"){var v=o==="Left"?i.filter(k=>{return C=l,k.rect.left+a<C.rect.left;var C}):i.filter(k=>{return C=l,k.rect.right>C.rect.right+a;var C}),f=v.filter(k=>{return C=k,A=l,Math.abs(C.y-A.y)<a;var C,A}),g=Ri(f,d)||Ri(v,k=>u(k,l,10));return g==null?void 0:g.element}if(o==="Up"||o==="Down"){var m=o==="Up"?i.filter(k=>{return C=l,k.y+a<C.y;var C}):i.filter(k=>{return C=l,k.y>C.y+a;var C}),b=m.filter(k=>s(k.element)),j=Ri(b,d)||Ri(m,d);return j==null?void 0:j.element}}function Pu(){var t,e,r,o;return typeof navigator<"u"&&(t=(e=(r=navigator)===null||r===void 0||(r=r.platform)===null||r===void 0?void 0:r.toUpperCase().includes("MAC"))!==null&&e!==void 0?e:(o=navigator)===null||o===void 0||(o=o.userAgentData)===null||o===void 0||(o=o.platform)===null||o===void 0?void 0:o.toUpperCase().includes("MAC"))!==null&&t!==void 0&&t}function No(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"+",r=[];Ru(t,arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pu)&&r.push("Ctrl"),t.altKey&&r.push("Alt"),t.shiftKey&&r.push("Shift");var o=t.key.length===1?t.key.toUpperCase():t.key;return o in Pm||r.push(o),r.join(e)}function Ru(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pu;return t.ctrlKey||t.metaKey&&e()}var Pm={Ctrl:!0,Command:!0,Control:!0,Alt:!0,Option:!0,Shift:!0};function vt(t,e){e===void 0&&(e={});var r=e.insertAt;if(t&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",r==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}vt(`.jse-absolute-popup.svelte-1r8q3m8 {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-hidden-input:where(.svelte-1r8q3m8) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-absolute-popup-content:where(.svelte-1r8q3m8) {
  position: absolute;
}`);var Rm=L('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"> <!></div>'),Am=L('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');function Em(t,e){et(e,!1);var r=h(e,"popup",8),o=h(e,"closeAbsolutePopup",8),s=P(),a=P();function i(v){r().options&&r().options.closeOnOuterClick&&!As(v.target,f=>f===n(s))&&o()(r().id)}function l(v){No(v)==="Escape"&&(v.preventDefault(),v.stopPropagation(),o()(r().id))}Er(function(){n(a)&&n(a).focus()}),bt();var c=Am();ie("mousedown",Yo,function(v){i(v)},!0),ie("keydown",Yo,l,!0),ie("wheel",Yo,function(v){i(v)},!0);var u=O(c),d=v=>{var f=Rm(),g=O(f);Qn(g,m=>p(a,m),()=>n(a)),of(q(g,2),()=>r().component,(m,b)=>{b(m,ha(()=>r().props))}),be(m=>po(f,m),[()=>function(m,b){var j=m.getBoundingClientRect(),{left:k,top:C,positionAbove:A,positionLeft:M}=function(){if(b.anchor){var{anchor:x,width:I=0,height:F=0,offsetTop:B=0,offsetLeft:S=0,position:V}=b,{left:G,top:H,bottom:te,right:ye}=x.getBoundingClientRect(),ne=V==="top"||H+F>window.innerHeight&&H>F,ve=V==="left"||G+I>window.innerWidth&&G>I;return{left:ve?ye-S:G+S,top:ne?H-B:te+B,positionAbove:ne,positionLeft:ve}}if(typeof b.left=="number"&&typeof b.top=="number"){var{left:Ee,top:Re,width:fe=0,height:Ce=0}=b;return{left:Ee,top:Re,positionAbove:Re+Ce>window.innerHeight&&Re>Ce,positionLeft:Ee+fe>window.innerWidth&&Ee>fe}}throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')}();return(A?"bottom: ".concat(j.top-C,"px;"):"top: ".concat(C-j.top,"px;"))+(M?"right: ".concat(j.left-k,"px;"):"left: ".concat(k-j.left,"px;"))}(n(s),r().options)],ae),R(v,f)};K(u,v=>{n(s)&&v(d)}),Qn(c,v=>p(s,v),()=>n(s)),ie("mousedown",c,function(v){v.stopPropagation()}),ie("keydown",c,l),R(t,c),tt()}var Tm=L("<!> <!>",1);function Bc(t,e){et(e,!1);var r,o,s=wr("jsoneditor:AbsolutePopup"),a=P([],!0);function i(u){var d=n(a).findIndex(f=>f.id===u);if(d!==-1){var v=n(a)[d];v.options.onClose&&v.options.onClose(),p(a,n(a).filter(f=>f.id!==u))}}r="absolute-popup",o={openAbsolutePopup:function(u,d,v){s("open...",d,v);var f={id:Ga(),component:u,props:d||{},options:v||{}};return p(a,[...n(a),f]),f.id},closeAbsolutePopup:i},Gv().set(r,o),J(()=>n(a),()=>{s("popups",n(a))}),mn(),bt(!0);var l=Tm(),c=ot(l);sr(c,1,()=>n(a),vr,(u,d)=>{Em(u,{get popup(){return n(d)},closeAbsolutePopup:i})}),ar(q(c,2),e,"default",{},null),R(t,l),tt()}function Ci(t,e){for(var r=new Set(e),o=t.replace(/ \(copy( \d+)?\)$/,""),s=t,a=1;r.has(s);){var i="copy"+(a>1?" "+a:"");s="".concat(o," (").concat(i,")"),a++}return s}function oi(t,e){var r=e-3;return t.length>e?t.substring(0,r)+"...":t}function zi(t){if(t==="")return"";var e=t.toLowerCase();if(e==="null")return null;if(e==="true")return!0;if(e==="false")return!1;if(e!=="undefined"){var r=Number(t),o=parseFloat(t);return isNaN(r)||isNaN(o)?t:r}}var Af={id:"jsonquery",name:"JSONQuery",description:`
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,createQuery:function(t,e){var{filter:r,sort:o,projection:s}=e,a=[];r&&r.path&&r.relation&&r.value&&a.push(["filter",[(i=r.relation,th("1 ".concat(i," 1"))[0]),Ui(r.path),zi(r.value)]]);var i;return o&&o.path&&o.direction&&a.push(["sort",Ui(o.path),o.direction==="desc"?"desc":"asc"]),s&&s.paths&&(s.paths.length>1?a.push(["pick",...s.paths.map(Ui)]):a.push(["map",Ui(s.paths[0])])),nh(["pipe",...a])},executeQuery:function(t,e){return e.trim()!==""?eh(t,e):t}};function Ui(t){return["get",...t]}var Nm=wa("<g><!></g>");function qm(t,e){et(e,!1);var r=870711,o=P(""),s=h(e,"data",8);function a(l){if(!l||!l.raw)return"";var c=l.raw,u={};return c=c.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,(d,v)=>{var f="fa-".concat((r+=1).toString(16));return u[v]=f,' id="'.concat(f,'"')}),c=c.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(d,v,f,g)=>{var m=v||g;return m&&u[m]?"#".concat(u[m]):d}),c}J(()=>z(s()),()=>{p(o,a(s()))}),mn();var i=Nm();rf(O(i),()=>n(o),!0,!1),R(t,i),tt()}vt(`
  .fa-icon.svelte-1mc5hvj {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-1mc5hvj {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-1mc5hvj {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-1mc5hvj {
    color: #fff;
  }
  .fa-pulse.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-1mc5hvj-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);var Im=wa("<svg><!></svg>"),Um=wa("<path></path>"),Dm=wa("<polygon></polygon>"),Jm=wa("<!><!><!>",1);function en(t,e){var r=qi(e,["children","$$slots","$$events","$$legacy"]),o=qi(r,["class","data","scale","spin","inverse","pulse","flip","label","style"]);et(e,!1);var s=h(e,"class",8,""),a=h(e,"data",8),i=P(),l=h(e,"scale",8,1),c=h(e,"spin",8,!1),u=h(e,"inverse",8,!1),d=h(e,"pulse",8,!1),v=h(e,"flip",8,void 0),f=h(e,"label",8,""),g=h(e,"style",8,""),m=P(10),b=P(10),j=P(),k=P();function C(){var M=1;return l()!==void 0&&(M=Number(l())),isNaN(M)||M<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),1):1*M}function A(){return n(i)?Math.max(n(i).width,n(i).height)/16:1}J(()=>(z(a()),z(g()),z(l())),()=>{p(i,function(M){var x;if(M){if(!("definition"in M)){if("iconName"in M&&"icon"in M){M.iconName;var[I,F,,,B]=M.icon;x={width:I,height:F,paths:(Array.isArray(B)?B:[B]).map(S=>({d:S}))}}else x=M[Object.keys(M)[0]];return x}console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")}}(a())),g(),l(),p(m,n(i)?n(i).width/A()*C():0),p(b,n(i)?n(i).height/A()*C():0),p(j,function(){var M="";g()!==null&&(M+=g());var x=C();return x===1?M.length===0?"":M:(M===""||M.endsWith(";")||(M+="; "),"".concat(M,"font-size: ").concat(x,"em"))}()),p(k,n(i)?"0 0 ".concat(n(i).width," ").concat(n(i).height):"0 0 ".concat(n(m)," ").concat(n(b)))}),mn(),bt(),function(M,x){var I,F=qi(x,["children","$$slots","$$events","$$legacy"]),B=qi(F,["class","width","height","box","spin","inverse","pulse","flip","style","label"]),S=h(x,"class",8,""),V=h(x,"width",8),G=h(x,"height",8),H=h(x,"box",8,"0 0 0 0"),te=h(x,"spin",8,!1),ye=h(x,"inverse",8,!1),ne=h(x,"pulse",8,!1),ve=h(x,"flip",8,"none"),Ee=h(x,"style",8,""),Re=h(x,"label",8,""),fe=Im();ar(O(fe),x,"default",{},null),be(Ce=>{var we;return I=Hi(fe,I,me(me({version:"1.1",class:"fa-icon ".concat((we=S())!==null&&we!==void 0?we:""),width:V(),height:G(),"aria-label":Re(),role:Re()?"img":"presentation",viewBox:H(),style:Ee()},B),{},{[Ya]:Ce}),"svelte-1mc5hvj")},[()=>({"fa-spin":te(),"fa-pulse":ne(),"fa-inverse":ye(),"fa-flip-horizontal":ve()==="horizontal","fa-flip-vertical":ve()==="vertical"})],ae),R(M,fe)}(t,ha({get label(){return f()},get width(){return n(m)},get height(){return n(b)},get box(){return n(k)},get style(){return n(j)},get spin(){return c()},get flip(){return v()},get inverse(){return u()},get pulse(){return d()},get class(){return s()}},()=>o,{children:(M,x)=>{var I=tr();ar(ot(I),e,"default",{},F=>{var B=Jm(),S=ot(B);sr(S,1,()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.paths)||[]},vr,(te,ye)=>{var ne,ve=Um();be(()=>ne=Hi(ve,ne,me({},n(ye)))),R(te,ve)});var V=q(S);sr(V,1,()=>{var te;return((te=n(i))===null||te===void 0?void 0:te.polygons)||[]},vr,(te,ye)=>{var ne,ve=Dm();be(()=>ne=Hi(ve,ne,me({},n(ye)))),R(te,ve)});var G=q(V),H=te=>{qm(te,{get data(){return n(i)},set data(ye){p(i,ye)},$$legacy:!0})};K(G,te=>{var ye;(ye=n(i))!==null&&ye!==void 0&&ye.raw&&te(H)}),R(F,B)}),R(M,I)},$$slots:{default:!0}})),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-1ryp01u {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly) {
  cursor: pointer;
}`);var Bm=L('<div role="checkbox" tabindex="-1"><!></div>');function Ef(t,e){et(e,!1);var r=h(e,"path",9),o=h(e,"value",9),s=h(e,"readOnly",9),a=h(e,"onPatch",9),i=h(e,"focus",9);bt(!0);var l,c=Bm(),u=O(c),d=ae(()=>o()===!0?Cv:zv);en(u,{get data(){return n(d)}}),be(v=>{gn(c,"aria-checked",o()===!0),l=wt(c,1,"jse-boolean-toggle svelte-1ryp01u",null,l,v),gn(c,"title",s()?"Boolean value ".concat(o()):"Click to toggle this boolean value")},[()=>({"jse-readonly":s()})],ae),ie("mousedown",c,function(v){v.stopPropagation(),s()||(a()([{op:"replace",path:St(r()),value:!o()}]),i()())}),R(t,c),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-s1wu8v .picker_slider,
.jse-color-picker-popup.svelte-s1wu8v .picker_sl,
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input,
.jse-color-picker-popup.svelte-s1wu8v .picker_sample,
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);var Lm=L('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');function Fm(t,e){et(e,!1);var r=h(e,"color",8),o=h(e,"onChange",8),s=h(e,"showOnTop",8),a=P(),i=()=>{};Er(mt(function*(){var c,u=new((c=yield mg(()=>import("./vanilla-picker-B6E6ObS_.js"),[]))===null||c===void 0?void 0:c.default)({parent:n(a),color:r(),popup:s()?"top":"bottom",onDone(d){var v=d.rgba[3]===1?d.hex.substring(0,7):d.hex;o()(v)}});u.show(),i=()=>{u.destroy()}})),co(()=>{i()}),bt();var l=Lm();Qn(l,c=>p(a,c),()=>n(a)),R(t,l),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-xeg9n6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly) {
  cursor: pointer;
}`);var _m=L('<button type="button"></button>');function Tf(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),{openAbsolutePopup:s}=ya("absolute-popup"),a=h(e,"path",9),i=h(e,"value",9),l=h(e,"readOnly",9),c=h(e,"onPatch",9),u=h(e,"focus",9);function d(m){c()([{op:"replace",path:St(a()),value:m}]),v()}function v(){u()()}J(()=>z(i()),()=>{p(r,vf(i()))}),J(()=>(z(l()),z(i())),()=>{p(o,l()?"Color ".concat(i()):"Click to open a color picker")}),mn(),bt(!0);var f,g=_m();be(m=>{var b;f=wt(g,1,"jse-color-picker-button svelte-xeg9n6",null,f,m),po(g,"background: ".concat((b=n(r))!==null&&b!==void 0?b:"")),gn(g,"title",n(o)),gn(g,"aria-label",n(o))},[()=>({"jse-readonly":l()})],ae),ie("click",g,function(m){var b,j;if(!l()){var k=m.target,C=k.getBoundingClientRect().top,A=((b=(j=Si(k))===null||j===void 0?void 0:j.innerHeight)!==null&&b!==void 0?b:0)-C<300&&C>300,M={color:i(),onChange:d,showOnTop:A};s(Fm,M,{anchor:k,closeOnOuterClick:!0,onClose:v,offsetTop:18,offsetLeft:-8,height:300})}}),R(t,g),tt()}var lc=1e3,ai=100,Lc=2e4,is=[{start:0,end:ai}],Wm=1048576,Id=10485760,cc="Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value",Au="Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)",Ws="hover-insert-inside",uc="hover-insert-after",Ud="hover-collection",dc="valid",Dd="repairable",Wo=336,Vo=260,Ys=100,Jd={[ro.asc]:"ascending",[ro.desc]:"descending"};function Nf(t){for(var e=Kp(t,l=>l.start),r=[e[0]],o=0;o<e.length;o++){var s=r.length-1,a=r[s],i=e[o];i.start<=a.end?r[s]={start:Math.min(a.start,i.start),end:Math.max(a.end,i.end)}:r.push(i)}return r}function Fc(t){return dl(t)+ai}function dl(t){return Math.floor(t/ai)*ai}function Eu(t){return!!t&&(t.type==="space"||t.space===!0)}function Gs(t){return!!t&&(t.type==="separator"||t.separator===!0)}function qf(t){return!!t&&t.type==="label"&&typeof t.text=="string"}function ls(t){return!!t&&typeof t.onClick=="function"}function Qi(t){return!!t&&t.type==="dropdown-button"&&ls(t.main)&&Array.isArray(t.items)}function If(t){return!!t&&t.type==="row"&&Array.isArray(t.items)}function Uf(t){return!!t&&t.type==="column"&&Array.isArray(t.items)}function _c(t){return fn(t)&&fn(t.parseError)}function Df(t){return fn(t)&&Array.isArray(t.validationErrors)}function Jf(t){return fn(t)&&Array.isArray(t.path)&&typeof t.message=="string"&&"severity"in t}function Bf(t){return fn(t)&&Jf(t)&&typeof t.isChildError=="boolean"}function Lf(t){return fn(t)&&typeof t.action=="function"&&fn(t.props)}function lo(t){return t!==void 0&&t.type==="object"}function Mr(t){return t!==void 0&&t.type==="array"}function Nl(t){return t!==void 0&&t.type==="value"}function xa(t){return lo(t)||Mr(t)}function Wc(t){return t!==void 0&&Array.isArray(t.searchResults)}function si(t){return!!t&&t.type==="tree"}function Vc(t){return!!t&&t.type==="text"}function $c(t){return!!t&&t.type==="mode"}function Hc(t){var{json:e,expand:r}=t,o=function(s){var{json:a,factory:i}=s;return Array.isArray(a)?i.createArrayDocumentState():fn(a)?i.createObjectDocumentState():a!==void 0?i.createValueDocumentState():void 0}({json:e,factory:qu});return r&&o?fo(e,o,[],r):o}function Tu(){var{expanded:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"array",expanded:t,visibleSections:is,items:[]}}function Nu(){var{expanded:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{expanded:!1};return{type:"object",expanded:t,properties:{}}}var qu={createObjectDocumentState:Nu,createArrayDocumentState:Tu,createValueDocumentState:function(){return{type:"value"}}};function Ff(t,e,r,o){var{createObjectDocumentState:s,createArrayDocumentState:a,createValueDocumentState:i}=o;return function l(c,u,d){if(Array.isArray(c)){var v=Mr(u)?u:a();if(d.length===0)return v;var f=Pr(d[0]),g=l(c[f],v.items[f],d.slice(1));return Lo(v,["items",d[0]],g)}if(fn(c)){var m=lo(u)?u:s();if(d.length===0)return m;var b=d[0],j=l(c[b],m.properties[b],d.slice(1));return Lo(m,["properties",b],j)}return Nl(u)?u:i()}(t,e,r)}function Hr(t,e){return ii(t,e,arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],(r,o)=>{if(r!==void 0&&o!==void 0)return Array.isArray(r)?Mr(o)?o:Tu({expanded:!!xa(o)&&o.expanded}):fn(r)?lo(o)?o:Nu({expanded:!!xa(o)&&o.expanded}):Nl(o)?o:void 0},()=>!0)}function ii(t,e,r,o,s){var a=o(t,e,r);if(Array.isArray(t)&&Mr(a)&&s(a)){var i=[];return Iu(t,a.visibleSections,c=>{var u=r.concat(String(c)),d=ii(t[c],a.items[c],u,o,s);d!==void 0&&(i[c]=d)}),Ad(i,a.items)?a:me(me({},a),{},{items:i})}if(fn(t)&&lo(a)&&s(a)){var l={};return Object.keys(t).forEach(c=>{var u=r.concat(c),d=ii(t[c],a.properties[c],u,o,s);d!==void 0&&(l[c]=d)}),Ad(Object.values(l),Object.values(a.properties))?a:me(me({},a),{},{properties:l})}return a}function Iu(t,e,r){e.forEach(o=>{var{start:s,end:a}=o;hf(s,Math.min(t.length,a),r)})}function li(t,e){for(var r=t,o=[],s=0;s<e.length;){if(Array.isArray(r)){var a=e[s];o.push("items",a),r=r[Pr(a)]}else{if(!fn(r))throw new Error("Cannot convert path: Object or Array expected at index ".concat(s));var i=e[s];o.push("properties",i),r=r[i]}s++}return o}function fo(t,e,r,o){for(var s=e,a=function(l){var c=r.slice(0,l);s=js(t,s,c,(u,d)=>{var v=xa(d)&&!d.expanded?me(me({},d),{},{expanded:!0}):d;return Mr(v)?function(f,g){if(function(j,k){return j.some(C=>k>=C.start&&k<C.end)}(f.visibleSections,g))return f;var m=dl(g),b={start:m,end:Fc(m)};return me(me({},f),{},{visibleSections:Nf(f.visibleSections.concat(b))})}(v,Pr(r[l])):v})},i=0;i<r.length;i++)a(i);return js(t,s,r,(l,c)=>function(u,d,v,f){return ii(u,d,v,(g,m,b)=>Array.isArray(g)&&f(b)?Mr(m)?m.expanded?m:me(me({},m),{},{expanded:!0}):Tu({expanded:!0}):fn(g)&&f(b)?lo(m)?m.expanded?m:me(me({},m),{},{expanded:!0}):Nu({expanded:!0}):m,g=>xa(g)&&g.expanded)}(l,c,[],o))}function Bd(t,e,r,o){return js(t,e,r,(s,a)=>o?function(i,l,c){return ii(i,l,c,(u,d)=>Ld(d),()=>!0)}(s,a,r):Ld(a))}function Ld(t){return Mr(t)&&t.expanded?me(me({},t),{},{expanded:!1,visibleSections:is}):lo(t)&&t.expanded?me(me({},t),{},{expanded:!1}):t}function _f(t,e,r){var o={json:t,documentState:e},s=r.reduce((a,i)=>({json:Co(a.json,[i]),documentState:Vm(a.json,a.documentState,i)}),o);return{json:s.json,documentState:Hr(s.json,s.documentState)}}function Vm(t,e,r){if(kv(r))return Fd(t,e,r,void 0);if(Sv(r))return _d(t,e,r);if(hu(r)){var o=Ho(t,r.path),s=Go(t,e,o);return s?ql(t,e,o,{type:"value",enforceString:s}):e}return Oc(r)||as(r)?function(a,i,l){if(as(l)&&l.from===l.path)return i;var c=i,u=Ho(a,l.from),d=Ma(a,c,u);return as(l)&&(c=_d(a,c,{path:l.from})),c=Fd(a,c,{path:l.path},d),c}(t,e,r):e}function Ma(t,e,r){try{return Le(e,li(t,r))}catch{return}}function Uu(t,e,r,o,s){var a=Ff(t,e,r,s);return fg(a,li(t,r),i=>{var l=Le(t,r);return o(l,i)})}function ql(t,e,r,o){return function(s,a,i,l,c){var u=Ff(s,a,i,c);return Lo(u,li(s,i),l)}(t,e,r,o,qu)}function js(t,e,r,o){return Uu(t,e,r,o,qu)}function Fd(t,e,r,o){var s=Ho(t,r.path),a=e;return a=js(t,a,nn(s),(i,l)=>{if(!Mr(l))return l;var c=Pr(Vt(s)),{items:u,visibleSections:d}=l;return me(me({},l),{},{items:c<u.length?jm(u,c,o!==void 0?[o]:Array(1)):u,visibleSections:Wf(d,c,1)})}),ql(t,a,s,o)}function _d(t,e,r){var o=Ho(t,r.path),s=nn(o),a=Le(t,s);return Array.isArray(a)?js(t,e,s,(i,l)=>{if(!Mr(l))return l;var c=Pr(Vt(o)),{items:u,visibleSections:d}=l;return me(me({},l),{},{items:u.slice(0,c).concat(u.slice(c+1)),visibleSections:Wf(d,c,-1)})}):function(i,l,c){var u=li(i,c);return ca(l,u)?pg(l,li(i,c)):l}(t,e,o)}function Wf(t,e,r){return function(o){for(var s=o.slice(0),a=1;a<s.length;)s[a-1].end===s[a].start&&(s[a-1]={start:s[a-1].start,end:s[a].end},s.splice(a)),a++;return s}(t.map(o=>({start:o.start>e?o.start+r:o.start,end:o.end>e?o.end+r:o.end})))}function Go(t,e,r){var o,s=Le(t,r),a=Ma(t,e,r),i=Nl(a)?a.enforceString:void 0;return typeof i=="boolean"?i:typeof(o=s)=="string"&&typeof Ja(o,JSON)!="string"}function Oi(t,e){var r=arguments.length>2&&arguments[2]!==void 0&&arguments[2],o=t.indexOf(e);return o!==-1?r?t.slice(o):t.slice(o+1):[]}function Du(t,e){var r=[];return function o(s,a,i){r.push(i),xr(s)&&Mr(a)&&a.expanded&&Iu(s,a.visibleSections,l=>{o(s[l],a.items[l],i.concat(String(l)))}),Sr(s)&&lo(a)&&a.expanded&&Object.keys(s).forEach(l=>{o(s[l],a.properties[l],i.concat(l))})}(t,e,[]),r}function Vf(t,e){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2],o=[];return function s(a,i){o.push({path:i,type:oo.value});var l=Ma(t,e,i);if(a&&xa(l)&&l.expanded){if(r&&o.push({path:i,type:oo.inside}),xr(a)){var c=Mr(l)?l.visibleSections:is;Iu(a,c,u=>{var d=i.concat(String(u));s(a[u],d),r&&o.push({path:d,type:oo.after})})}Sr(a)&&Object.keys(a).forEach(u=>{var d=i.concat(u);o.push({path:d,type:oo.key}),s(a[u],d),r&&o.push({path:d,type:oo.after})})}}(t,[]),o}function vc(t,e,r){var o=Du(t,e),s=o.map(St).indexOf(St(r));if(s!==-1&&s<o.length-1)return o[s+1]}function qa(t,e,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10240;return fo(t,e,r,yf({json:Le(t,r)},o)?Xa:Il)}function fc(t,e,r){var o=Ma(t,e,r);return xa(o)&&o.expanded?e:qa(t,e,r)}function Xa(t){return t.length===0||t.length===1&&t[0]==="0"}function Qc(t){return t.length===0}function Il(){return!0}function Xs(){return!1}function Kr(t){return t&&t.type===kn.after||!1}function zr(t){return t&&t.type===kn.inside||!1}function jr(t){return t&&t.type===kn.key||!1}function yn(t){return t&&t.type===kn.value||!1}function Fn(t){return t&&t.type===kn.multi||!1}function Ul(t){return Fn(t)&&Xt(t.focusPath,t.anchorPath)}function ci(t){return Fn(t)||Kr(t)||zr(t)||jr(t)||yn(t)}function pc(t){return t&&t.type===kn.text||!1}function na(t,e){var r=[];return function(o,s,a){if(s){var i=ga(s),l=We(s);if(Xt(i,l))return a(i);if(o!==void 0){var c=Hf(i,l);if(i.length===c.length||l.length===c.length)return a(c);var u=Ar(i,l),d=ko(o,u),v=Xo(o,u),f=ea(o,u,d),g=ea(o,u,v);if(!(f===-1||g===-1)){var m=Le(o,c);if(Sr(m)){for(var b=Object.keys(m),j=f;j<=g;j++){var k=a(c.concat(b[j]));if(k!==void 0)return k}return}if(xr(m)){for(var C=f;C<=g;C++){var A=a(c.concat(String(C)));if(A!==void 0)return A}return}throw new Error("Failed to create selection")}}}}(t,e,o=>{r.push(o)}),r}function $f(t){return zr(t)?t.path:nn(We(t))}function ko(t,e){if(!Fn(e))return e.path;var r=ea(t,e,e.anchorPath);return ea(t,e,e.focusPath)<r?e.focusPath:e.anchorPath}function Xo(t,e){if(!Fn(e))return e.path;var r=ea(t,e,e.anchorPath);return ea(t,e,e.focusPath)>r?e.focusPath:e.anchorPath}function Wd(t,e,r){var o=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(r){var s=o?We(r):ko(t,r),a=function(c,u,d){var v=Du(c,u),f=v.map(St),g=St(d),m=f.indexOf(g);if(m!==-1&&m>0)return v[m-1]}(t,e,s);if(o)return zr(r)||Kr(r)?a!==void 0?Ar(s,s):void 0:a!==void 0?Ar(ga(r),a):void 0;if(Kr(r)||zr(r))return Wt(s);if(jr(r)){if(a===void 0||a.length===0)return;var i=nn(a),l=Le(t,i);return Array.isArray(l)||Pn(a)?Wt(a):qo(a)}return yn(r),a!==void 0?Wt(a):void 0}}function Vd(t,e,r,o){if(!r)return{caret:void 0,previous:void 0,next:void 0};var s=Vf(t,e,o),a=s.findIndex(i=>Xt(i.path,We(r))&&String(i.type)===String(r.type));return{caret:a!==-1?s[a]:void 0,previous:a!==-1&&a>0?s[a-1]:void 0,next:a!==-1&&a<s.length-1?s[a+1]:void 0}}function $a(t,e){for(var r=Du(t,e),o=0;o<r.length-1&&r[o+1].length>r[o].length;)o++;var s=r[o];return s===void 0||s.length===0||Array.isArray(Le(t,nn(s)))?Wt(s):qo(s)}function xs(t,e){if(e.length===1){var r=$o(e);if(r.op==="replace")return Wt(Ho(t,r.path))}if(!Pn(e)&&e.every(i=>i.op==="move")){var o=$o(e),s=e.slice(1);if((Oc(o)||as(o))&&o.from!==o.path&&s.every(i=>(Oc(i)||as(i))&&i.from===i.path))return qo(Ho(t,o.path))}var a=e.filter(i=>i.op!=="test"&&i.op!=="remove"&&(i.op!=="move"||i.from!==i.path)&&typeof i.path=="string").map(i=>Ho(t,i.path));if(!Pn(a))return{type:kn.multi,anchorPath:$o(a),focusPath:Vt(a)}}function Hf(t,e){for(var r=0;r<t.length&&r<e.length&&t[r]===e[r];)r++;return t.slice(0,r)}function vl(t){return jr(t)||yn(t)||Ul(t)}function $d(t,e){return vl(e)&&cr(Le(t,We(e)))?We(e):nn(We(e))}function ra(t,e){if(t.length<e.length)return!1;for(var r=0;r<e.length;r++)if(t[r]!==e[r])return!1;return!0}function wo(t){if(Br(t)){var{type:e,path:r}=t;return{type:e,path:r}}return t}function qo(t){return{type:kn.key,path:t}}function Dl(t,e){return{type:kn.key,path:t,edit:!0,initialValue:e}}function Wt(t){return{type:kn.value,path:t}}function ui(t,e){return{type:kn.value,path:t,edit:!0,initialValue:e}}function Io(t){return{type:kn.inside,path:t}}function Mo(t){return{type:kn.after,path:t}}function Ar(t,e){var r=Hf(t,e),o=t.length>r.length&&e.length>r.length;return{type:kn.multi,anchorPath:o?r.concat(t[r.length]):r,focusPath:o?r.concat(e[r.length]):r}}function Qf(t,e,r,o){if(jr(e))return String(Vt(e.path));if(yn(e)){var s=Le(t,e.path);return typeof s=="string"?s:o.stringify(s,null,r)}if(Fn(e)){if(Pn(e.focusPath))return o.stringify(t,null,r);var a=$f(e),i=Le(t,a);if(Array.isArray(i)){if(Ul(e)){var l=Le(t,e.focusPath);return o.stringify(l,null,r)}return na(t,e).map(c=>{var u=Le(t,c);return"".concat(o.stringify(u,null,r),",")}).join(`
`)}return na(t,e).map(c=>{var u=Vt(c),d=Le(t,c);return"".concat(o.stringify(u),": ").concat(o.stringify(d,null,r),",")}).join(`
`)}}function Br(t){return(jr(t)||yn(t))&&t.edit===!0}function es(t){return jr(t)||yn(t)||Fn(t)}function Di(t){return jr(t)||yn(t)||Ul(t)}function Yc(t){switch(t.type){case oo.key:return qo(t.path);case oo.value:return Wt(t.path);case oo.after:return Mo(t.path);case oo.inside:return Io(t.path)}}function Hd(t,e){switch(t){case kn.key:return qo(e);case kn.value:return Wt(e);case kn.after:return Mo(e);case kn.inside:return Io(e);case kn.multi:case kn.text:return Ar(e,e)}}function Qd(t,e,r){if(e)return di(t,e,r)||ra(Fn(e)?nn(e.focusPath):e.path,r)?e:void 0}function di(t,e,r){if(t===void 0||!e)return!1;if(jr(e)||zr(e)||Kr(e))return Xt(e.path,r);if(yn(e))return ra(r,e.path);if(Fn(e)){var o=ko(t,e),s=Xo(t,e),a=nn(e.focusPath);if(!ra(r,a)||r.length<=a.length)return!1;var i=ea(t,e,o),l=ea(t,e,s),c=ea(t,e,r);return c!==-1&&c>=i&&c<=l}return!1}function ea(t,e,r){var o=nn(e.focusPath);if(!ra(r,o)||r.length<=o.length)return-1;var s=r[o.length],a=Le(t,o);if(Sr(a))return Object.keys(a).indexOf(s);if(xr(a)){var i=Pr(s);if(i<a.length)return i}return-1}function We(t){return Fn(t)?t.focusPath:t.path}function ga(t){return Fn(t)?t.anchorPath:t.path}function Es(){for(var t=[],e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];for(var s of r)if(typeof s=="string"&&t.push(s),s&&typeof s=="object")for(var a in s)Object.hasOwnProperty.call(s,a)&&s[a]&&t.push(a);return t.join(" ")}function Ju(t,e,r){return Es("jse-value","jse-"+Al(t,r),{"jse-url":wi(t),"jse-empty":typeof t=="string"&&t.length===0,"jse-table-cell":e===br.table})}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-f9kmxj {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-f9kmxj, .jse-value.jse-array.svelte-f9kmxj {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-f9kmxj {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-f9kmxj {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-f9kmxj {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-f9kmxj {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-f9kmxj {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-f9kmxj {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-f9kmxj {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-f9kmxj {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-f9kmxj {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);var $m=L('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');function Yf(t,e){et(e,!1);var r=wr("jsoneditor:EditableDiv"),o=h(e,"value",9),s=h(e,"initialValue",9),a=h(e,"shortText",9,!1),i=h(e,"label",9),l=h(e,"onChange",9),c=h(e,"onCancel",9),u=h(e,"onFind",9),d=h(e,"onPaste",9,hr),v=h(e,"onValueClass",9,()=>""),f=P(void 0,!0),g=P(void 0,!0),m=!1;function b(){return n(f)?function(C){return C.replace(/\n$/,"")}(n(f).innerText):""}function j(C){n(f)&&Qr(f,n(f).innerText=Tl(C))}Er(()=>{r("onMount",{value:o(),initialValue:s()}),j(s()!==void 0?s():o()),n(f)&&function(C){if(C.firstChild!=null){var A=document.createRange(),M=window.getSelection();A.setStart(C,1),A.collapse(!0),M==null||M.removeAllRanges(),M==null||M.addRange(A)}else C.focus()}(n(f))}),co(()=>{var C=b();r("onDestroy",{closed:m,value:o(),newValue:C}),m||C===o()||l()(C,Zo.no)}),J(()=>(z(v()),z(o())),()=>{p(g,v()(o()))}),mn(),bt(!0);var k=$m();Qn(k,C=>p(f,C),()=>n(f)),be(C=>{gn(k,"aria-label",i()),wt(k,1,C,"svelte-f9kmxj")},[()=>ja(Es("jse-editable-div",n(g),{"jse-short-text":a()}))],ae),ie("input",k,function(){var C=b();C===""&&j(""),p(g,v()(C))}),ie("keydown",k,function(C){C.stopPropagation();var A=No(C);if(A==="Escape"&&(C.preventDefault(),m=!0,c()()),A==="Enter"||A==="Tab"){C.preventDefault(),m=!0;var M=b();l()(M,Zo.nextInside)}A==="Ctrl+F"&&(C.preventDefault(),u()(!1)),A==="Ctrl+H"&&(C.preventDefault(),u()(!0))}),ie("paste",k,function(C){if(C.stopPropagation(),d()&&C.clipboardData){var A=C.clipboardData.getData("text/plain");d()(A)}}),ie("blur",k,function(){var C=document.hasFocus(),A=b();r("handleBlur",{hasFocus:C,closed:m,value:o(),newValue:A}),document.hasFocus()&&!m&&(m=!0,A!==o()&&l()(A,Zo.self))}),R(t,k),tt()}function Kf(t,e){et(e,!1);var r=h(e,"path",9),o=h(e,"value",9),s=h(e,"selection",9),a=h(e,"mode",9),i=h(e,"parser",9),l=h(e,"normalization",9),c=h(e,"enforceString",9),u=h(e,"onPatch",9),d=h(e,"onPasteJson",9),v=h(e,"onSelect",9),f=h(e,"onFind",9),g=h(e,"focus",9),m=h(e,"findNextInside",9);function b(A){return c()?A:Ja(A,i())}function j(){v()(Wt(r())),g()()}bt(!0);var k=ae(()=>l().escapeValue(o())),C=ae(()=>Br(s())?s().initialValue:void 0);Yf(t,{get value(){return n(k)},get initialValue(){return n(C)},label:"Edit value",onChange:function(A,M){u()([{op:"replace",path:St(r()),value:b(l().unescapeValue(A))}],(x,I,F)=>{if(!F||Xt(r(),We(F)))return{state:I,selection:M===Zo.nextInside?m()(r()):Wt(r())}}),g()()},onCancel:j,onPaste:function(A){try{var M=i().parse(A);cr(M)&&d()({path:r(),contents:M,onPasteAsJson:()=>{j();var x=[{op:"replace",path:St(r()),value:M}];u()(x,(I,F)=>({state:qa(I,F,r())}))}})}catch{}},get onFind(){return f()},onValueClass:function(A){return Ju(b(l().unescapeValue(A)),a(),i())}}),tt()}function ts(t,e,r){var o=nn(e),s=Le(t,o);if(xr(s)){var a=Pr(Vt(e));return r.map((u,d)=>({op:"add",path:St(o.concat(String(a+d))),value:u.value}))}if(Sr(s)){var i=Vt(e),l=Object.keys(s),c=i!==void 0?Oi(l,i,!0):[];return[...r.map(u=>{var d=Ci(u.key,l);return{op:"add",path:St(o.concat(d)),value:u.value}}),...c.map(u=>Ia(o,u))]}throw new Error("Cannot create insert operations: parent must be an Object or Array")}function Kc(t,e,r){var o=Le(t,e);if(Array.isArray(o)){var s=o.length;return r.map((a,i)=>({op:"add",path:St(e.concat(String(s+i))),value:a.value}))}return r.map(a=>{var i=Ci(a.key,Object.keys(o));return{op:"add",path:St(e.concat(i)),value:a.value}})}function Mi(t,e,r,o){var s=Ci(o,e.filter(i=>i!==r)),a=Oi(e,r,!1);return[{op:"move",from:St(t.concat(r)),path:St(t.concat(s))},...a.map(i=>Ia(t,i))]}function Zf(t,e){var r=Vt(e);if(Pn(r))throw new Error("Cannot duplicate root object");var o=nn(r),s=Vt(r),a=Le(t,o);if(xr(a)){var i=Vt(e),l=i?Pr(Vt(i))+1:0;return[...e.map((d,v)=>({op:"copy",from:St(d),path:St(o.concat(String(v+l)))}))]}if(Sr(a)){var c=Object.keys(a),u=s!==void 0?Oi(c,s,!1):[];return[...e.map(d=>{var v=Ci(Vt(d),c);return{op:"copy",from:St(d),path:St(o.concat(v))}}),...u.map(d=>Ia(o,d))]}throw new Error("Cannot create duplicate operations: parent must be an Object or Array")}function Gf(t,e){if(yn(e))return[{op:"move",from:St(e.path),path:""}];if(!Fn(e))throw new Error("Cannot create extract operations: parent must be an Object or Array");var r=nn(e.focusPath),o=Le(t,r);if(xr(o)){var s=na(t,e).map(i=>{var l=Pr(Vt(i));return o[l]});return[{op:"replace",path:"",value:s}]}if(Sr(o)){var a={};return na(t,e).forEach(i=>{var l=String(Vt(i));a[l]=o[l]}),[{op:"replace",path:"",value:a}]}throw new Error("Cannot extract: unsupported type of selection "+JSON.stringify(e))}function Xf(t,e,r,o){if(jr(e)){var s=mf(r,o),a=nn(e.path),i=Le(t,a);return Mi(a,Object.keys(i),Vt(e.path),typeof s=="string"?s:r)}if(yn(e)||Fn(e)&&Pn(e.focusPath))try{return[{op:"replace",path:St(We(e)),value:El(r,I=>ki(I,o))}]}catch{return[{op:"replace",path:St(We(e)),value:r}]}if(Fn(e)){var l=hc(r,o);return function(I,F,B){var S=$o(F),V=nn(S),G=Le(I,V);if(xr(G)){var H=$o(F),te=H?Pr(Vt(H)):0;return[...fl(F),...B.map((we,Ue)=>({op:"add",path:St(V.concat(String(Ue+te))),value:we.value}))]}if(Sr(G)){var ye=Vt(F),ne=nn(ye),ve=Vt(ye),Ee=Object.keys(G),Re=ve!==void 0?Oi(Ee,ve,!1):[],fe=new Set(F.map(we=>Vt(we))),Ce=Ee.filter(we=>!fe.has(we));return[...fl(F),...B.map(we=>{var Ue=Ci(we.key,Ce);return{op:"add",path:St(ne.concat(Ue)),value:we.value}}),...Re.map(we=>Ia(ne,we))]}throw new Error("Cannot create replace operations: parent must be an Object or Array")}(t,na(t,e),l)}if(Kr(e)){var c=hc(r,o),u=e.path,d=nn(u),v=Le(t,d);if(xr(v)){var f=Pr(Vt(u));return ts(t,d.concat(String(f+1)),c)}if(Sr(v)){var g=String(Vt(u)),m=Object.keys(v);if(Pn(m)||Vt(m)===g)return Kc(t,d,c);var b=m.indexOf(g),j=m[b+1];return ts(t,d.concat(j),c)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}if(zr(e)){var k=hc(r,o),C=e.path,A=Le(t,C);if(xr(A))return ts(t,C.concat("0"),k);if(Sr(A)){var M=Object.keys(A);if(Pn(M))return Kc(t,C,k);var x=$o(M);return ts(t,C.concat(x),k)}throw new Error("Cannot create insert operations: parent must be an Object or Array")}throw new Error("Cannot insert: unsupported type of selection "+JSON.stringify(e))}function fl(t){return t.map(e=>({op:"remove",path:St(e)})).reverse()}function Ia(t,e){return{op:"move",from:St(t.concat(e)),path:St(t.concat(e))}}function hc(t,e){var r=/^\s*{/.test(t),o=/^\s*\[/.test(t),s=mf(t,e),a=s!==void 0?s:El(t,i=>ki(i,e));return r&&fn(a)||o&&Array.isArray(a)?[{key:"New item",value:a}]:Array.isArray(a)?a.map((i,l)=>({key:"New item "+l,value:i})):fn(a)?Object.keys(a).map(i=>({key:i,value:a[i]})):[{key:"New item",value:a}]}function ep(t,e){if(jr(e)){var r=nn(e.path),o=Le(t,r),s=Mi(r,Object.keys(o),Vt(e.path),"");return{operations:s,newSelection:xs(t,s)}}if(yn(e))return{operations:[{op:"replace",path:St(e.path),value:""}],newSelection:e};if(Fn(e)){var a=na(t,e),i=fl(a),l=Vt(a);if(Pn(l))return{operations:[{op:"replace",path:"",value:""}],newSelection:Wt([])};var c=nn(l),u=Le(t,c);if(xr(u)){var d=$o(a),v=Pr(Vt(d));return{operations:i,newSelection:v===0?Io(c):Mo(c.concat(String(v-1)))}}if(Sr(u)){var f=Object.keys(u),g=$o(a),m=Vt(g),b=f.indexOf(m),j=f[b-1];return{operations:i,newSelection:b===0?Io(c):Mo(c.concat(j))}}throw new Error("Cannot create remove operations: parent must be an Object or Array")}throw new Error("Cannot remove: unsupported type of selection "+JSON.stringify(e))}function tp(t,e){return function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xt;return r.filter((s,a)=>{for(var i=a+1;i<r.length;i++)if(o(s,r[i]))return!1;return!0})}(wv(t,e,{before:(r,o,s)=>{if(Sv(o)){var a=So(o.path);return{revertOperations:[...s,...gc(r,a)]}}if(as(o)){var i=So(o.from);return{revertOperations:o.from===o.path?[o,...gc(r,i)]:[...s,...gc(r,i)]}}return{document:r}}}))}function gc(t,e){var r=nn(e),o=Vt(e),s=Le(t,r);return Sr(s)?Oi(Object.keys(s),o,!1).map(a=>Ia(r,a)):[]}function Yd(t){var e=t.activeIndex<t.items.length-1?t.activeIndex+1:t.items.length>0?0:-1,r=t.items[e],o=t.items.map((s,a)=>me(me({},s),{},{active:a===e}));return me(me({},t),{},{items:o,activeItem:r,activeIndex:e})}function Kd(t,e){var r,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=t.toLowerCase(),a=(r=o==null?void 0:o.maxResults)!==null&&r!==void 0?r:1/0,i=o==null?void 0:o.columns,l=[],c=[];function u(j){l.length>=a||l.push(j)}function d(j,k){if(xr(k)){var C=c.length;c.push("0");for(var A=0;A<k.length;A++)if(c[C]=String(A),d(j,k[A]),l.length>=a)return;c.pop()}else if(Sr(k)){var M=Object.keys(k),x=c.length;for(var I of(c.push(""),M))if(c[x]=I,Zd(I,j,c,io.key,u),d(j,k[I]),l.length>=a)return;c.pop()}else Zd(String(k),j,c,io.value,u)}if(t==="")return[];if(i){if(!Array.isArray(e))throw new Error("json must be an Array when option columns is defined");for(var v=0;v<e.length;v++){c[0]=String(v);for(var f=e[v],g=0;g<i.length;g++){var m=i[g];if(m.length===1)c[1]=m[0];else for(var b=0;b<m.length;b++)c[b+1]=m[b];for(;c.length>m.length+1;)c.pop();d(s,Le(f,m))}if(l.length>=a)break}return l}return d(s,e),l}function Zd(t,e,r,o,s){var a=t.toLowerCase(),i=0,l=-1,c=-1;do(c=a.indexOf(e,l))!==-1&&(l=c+e.length,s({path:r.slice(0),field:o,fieldIndex:i,start:c,end:l}),i++);while(c!==-1)}function Zc(t,e,r,o){return t.substring(0,r)+e+t.substring(o)}function Gd(t,e,r){var o=t;return Yp(r,s=>{o=Zc(o,e,s.start,s.end)}),o}function Hm(t,e,r,o,s){var{field:a,path:i,start:l,end:c}=o;if(a===io.key){var u=nn(i),d=Le(t,u),v=Vt(i),f=Mi(u,Object.keys(d),v,Zc(v,r,l,c));return{newSelection:xs(t,f),operations:f}}if(a===io.value){var g=Le(t,i);if(g===void 0)throw new Error("Cannot replace: path not found ".concat(St(i)));var m=typeof g=="string"?g:String(g),b=Go(t,e,i),j=Zc(m,r,l,c),k=[{op:"replace",path:St(i),value:b?j:Ja(j,s)}];return{newSelection:xs(t,k),operations:k}}throw new Error("Cannot replace: unknown type of search result field ".concat(a))}function Xd(t){return t.path.concat(t.field,String(t.fieldIndex))}var Qm={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function np(t,e){return e.reduce((r,o)=>function(s,a,i,l){return Uu(s,a,i,l,Qm)}(t,r,o.path,(s,a)=>me(me({},a),{},{searchResults:a.searchResults?a.searchResults.concat(o):[o]})),void 0)}function Gc(t){var e,r=(e=t==null?void 0:t.searchResults)!==null&&e!==void 0?e:[],o=lo(t)?Object.values(t.properties).flatMap(Gc):Mr(t)?t.items.flatMap(Gc):[];return r.concat(o)}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-5fb7bl {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-5fb7bl {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var Ym=L("<span> </span>");function rp(t,e){et(e,!1);var r=P(),o=h(e,"text",8),s=h(e,"searchResultItems",8);J(()=>(z(o()),z(s())),()=>{p(r,function(i,l){var c=[],u=0;for(var d of l){var v=i.slice(u,d.start);v!==""&&c.push({resultIndex:void 0,type:"normal",text:v,active:!1});var f=i.slice(d.start,d.end);c.push({resultIndex:d.resultIndex,type:"highlight",text:f,active:d.active}),u=d.end}var g=Vt(l);return g&&g.end<i.length&&c.push({type:"normal",text:i.slice(g.end),resultIndex:void 0,active:!1}),c}(String(o()),s()))}),mn(),bt();var a=tr();sr(ot(a),1,()=>n(r),vr,(i,l)=>{var c=tr(),u=ot(c),d=f=>{var g=kr();be(()=>it(g,n(l).text)),R(f,g)},v=f=>{var g,m=Ym(),b=O(m);be((j,k,C)=>{g=wt(m,1,"jse-highlight svelte-5fb7bl",null,g,j),gn(m,"data-search-result-index",k),it(b,C)},[()=>({"jse-active":n(l).active}),()=>String(n(l).resultIndex),()=>Tl(n(l).text)],ae),R(f,m)};K(u,f=>{n(l).type==="normal"?f(d):f(v,!1)}),R(i,c)}),R(t,a),tt()}function Xc(t){var e=1e3;if(t<900)return t.toFixed()+" B";var r=t/e;if(r<900)return r.toFixed(1)+" KB";var o=r/e;if(o<900)return o.toFixed(1)+" MB";var s=o/e;return s<900?s.toFixed(1)+" GB":(s/e).toFixed(1)+" TB"}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-tqwlgz {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-tqwlgz:hover {
  opacity: 0.8;
}
.jse-tag.svelte-tqwlgz:disabled {
  opacity: 0.7;
  cursor: inherit;
}`);var Km=L('<button type="button" class="jse-tag svelte-tqwlgz"><!></button>');function Yi(t,e){et(e,!0);var r=_r(()=>e.onclick?s=>{s.preventDefault(),s.stopPropagation(),e.onclick()}:void 0),o=Km();o.__click=function(){for(var s,a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];(s=n(r))===null||s===void 0||s.apply(this,i)},function(s,a){for(var i=arguments.length,l=new Array(i>2?i-2:0),c=2;c<i;c++)l[c-2]=arguments[c];var u,d=s,v=gd;Da(()=>{v!==(v=a())&&(u&&(To(u),u=null),u=ta(()=>v(d,...l)))},mi)}(O(o),()=>{var s;return(s=e.children)!==null&&s!==void 0?s:gd}),be(()=>o.disabled=!e.onclick),R(t,o),tt()}yi(["click"]);function Zm(t,e,r){typeof e.value=="string"&&n(r)&&Ru(t)&&(t.preventDefault(),t.stopPropagation(),window.open(e.value,"_blank"))}function Gm(t,e){e.readOnly||(t.preventDefault(),e.onSelect(ui(e.path)))}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-c0g9qz {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-c0g9qz, .jse-value.jse-array.svelte-c0g9qz {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-c0g9qz {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-c0g9qz {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-c0g9qz {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-c0g9qz {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-c0g9qz {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-c0g9qz {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-c0g9qz {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-c0g9qz {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-c0g9qz::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);var Xm=L('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');function op(t,e){et(e,!0);var r=Bo(!0),o=_r(()=>n(r)&&typeof e.value=="string"&&e.value.length>e.truncateTextSize&&(!e.searchResultItems||!e.searchResultItems.some(g=>g.active&&g.end>e.truncateTextSize))),s=_r(()=>n(o)&&typeof e.value=="string"?e.value.substring(0,e.truncateTextSize).trim():e.value),a=_r(()=>wi(e.value));function i(){p(r,!1)}var l=Xm();l.__click=[Zm,e,a],l.__dblclick=[Gm,e];var c=O(l),u=g=>{var m=_r(()=>e.normalization.escapeValue(n(s)));rp(g,{get text(){return n(m)},get searchResultItems(){return e.searchResultItems}})},d=g=>{var m=kr();be(b=>it(m,b),[()=>Tl(e.normalization.escapeValue(n(s)))]),R(g,m)};K(c,g=>{e.searchResultItems?g(u):g(d,!1)});var v=q(c,2),f=g=>{Yi(g,{onclick:i,children:(m,b)=>{var j=kr();be(k=>it(j,"Show more (".concat(k??"",")")),[()=>Xc(e.value.length)]),R(m,j)},$$slots:{default:!0}})};K(v,g=>{n(o)&&typeof e.value=="string"&&g(f)}),be(g=>{wt(l,1,g,"svelte-c0g9qz"),gn(l,"title",n(a)?"Ctrl+Click or Ctrl+Enter to open url in new window":void 0)},[()=>ja(Ju(e.value,e.mode,e.parser))]),R(t,l),tt()}yi(["click","dblclick"]);vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-14y3y8t {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);var eb=L('<div class="jse-tooltip svelte-14y3y8t"> </div>');function tb(t,e){var r=h(e,"text",8),o=eb(),s=O(o);be(()=>it(s,r())),R(t,o)}function ys(t,e){var r,{text:o,openAbsolutePopup:s,closeAbsolutePopup:a}=e;function i(){r=s(tb,{text:o},{position:"top",width:10*o.length,offsetTop:3,anchor:t,closeOnOuterClick:!0})}function l(){a(r)}return t.addEventListener("mouseenter",i),t.addEventListener("mouseleave",l),{destroy(){t.removeEventListener("mouseenter",i),t.removeEventListener("mouseleave",l)}}}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jla5ec {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);var nb=L('<div class="jse-timestamp svelte-1jla5ec"><!></div>');function ap(t,e){et(e,!1);var r=P(void 0,!0),o=ya("absolute-popup"),s=h(e,"value",9);J(()=>z(s()),()=>{p(r,"Time: ".concat(new Date(s()).toString()))}),mn(),bt(!0);var a=nb();en(O(a),{data:xg}),qr(a,(i,l)=>ys==null?void 0:ys(i,l),()=>me({text:n(r)},o)),R(t,a),tt()}function sp(t){var e=[];return!t.isEditing&&df(t.value)&&e.push({component:Ef,props:t}),!t.isEditing&&ff(t.value)&&e.push({component:Tf,props:t}),t.isEditing&&e.push({component:Kf,props:t}),t.isEditing||e.push({component:op,props:t}),!t.isEditing&&ul(t.value)&&e.push({component:ap,props:t}),e}function ao(t){return t.map((e,r)=>Jl.test(e)?"["+e+"]":/[.[\]]/.test(e)||e===""?'["'+function(o){return o.replace(/"/g,'\\"')}(e)+'"]':(r>0?".":"")+e).join("")}function ip(t){for(var e=[],r=0;r<t.length;)t[r]==="."&&r++,t[r]==="["?(r++,t[r]==='"'?(r++,e.push(o(a=>a==='"',!0)),s('"')):e.push(o(a=>a==="]")),s("]")):e.push(o(a=>a==="."||a==="["));function o(a){for(var i=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l="";r<t.length&&!a(t[r]);)i&&t[r]==="\\"&&t[r+1]==='"'?(l+='"',r+=2):(l+=t[r],r++);return l}function s(a){if(t[r]!==a)throw new SyntaxError("Invalid JSON path: ".concat(a," expected at position ").concat(r));r++}return e}function ia(t){return{value:t,label:Pn(t)?"(item root)":ao(t)}}function rb(t){if(Jl.test(t))return"["+t+"]";if(Bu.test(t))return"."+t;var e=JSON.stringify(t);return"['"+e.substring(1,e.length-1).replace(/\\"/g,'"')+"']"}function xo(t){return t.map(e=>Jl.test(e)?"?.[".concat(e,"]"):Bu.test(e)?"?.".concat(e):"?.[".concat(JSON.stringify(e),"]")).join("")}var Bu=/^[a-zA-Z$_][a-zA-Z$_\d]*$/,Jl=/^\d+$/,ob={},ab={showWizard:!0,showOriginal:!0},pl=Math.min,Pa=Math.max,hl=Math.round,Ji=Math.floor,Po=t=>({x:t,y:t}),sb={left:"right",right:"left",bottom:"top",top:"bottom"},ib={start:"end",end:"start"};function ev(t,e,r){return Pa(t,pl(e,r))}function Bl(t,e){return typeof t=="function"?t(e):t}function Ra(t){return t.split("-")[0]}function gl(t){return t.split("-")[1]}function lp(t){return t==="x"?"y":"x"}function cp(t){return t==="y"?"height":"width"}function ws(t){return["top","bottom"].includes(Ra(t))?"y":"x"}function up(t){return lp(ws(t))}function mc(t){return t.replace(/start|end/g,e=>ib[e])}function Bi(t){return t.replace(/left|right|bottom|top/g,e=>sb[e])}function lb(t){return typeof t!="number"?function(e){return me({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function ml(t){var{x:e,y:r,width:o,height:s}=t;return{width:o,height:s,top:r,left:e,right:e+o,bottom:r+s,x:e,y:r}}function tv(t,e,r){var o,{reference:s,floating:a}=t,i=ws(e),l=up(e),c=cp(l),u=Ra(e),d=i==="y",v=s.x+s.width/2-a.width/2,f=s.y+s.height/2-a.height/2,g=s[c]/2-a[c]/2;switch(u){case"top":o={x:v,y:s.y-a.height};break;case"bottom":o={x:v,y:s.y+s.height};break;case"right":o={x:s.x+s.width,y:f};break;case"left":o={x:s.x-a.width,y:f};break;default:o={x:s.x,y:s.y}}switch(gl(e)){case"start":o[l]-=g*(r&&d?-1:1);break;case"end":o[l]+=g*(r&&d?-1:1)}return o}var cb=function(){var t=mt(function*(e,r,o){for(var{placement:s="bottom",strategy:a="absolute",middleware:i=[],platform:l}=o,c=i.filter(Boolean),u=yield l.isRTL==null?void 0:l.isRTL(r),d=yield l.getElementRects({reference:e,floating:r,strategy:a}),{x:v,y:f}=tv(d,s,u),g=s,m={},b=0,j=0;j<c.length;j++){var{name:k,fn:C}=c[j],{x:A,y:M,data:x,reset:I}=yield C({x:v,y:f,initialPlacement:s,placement:g,strategy:a,middlewareData:m,rects:d,platform:l,elements:{reference:e,floating:r}});v=A??v,f=M??f,m=me(me({},m),{},{[k]:me(me({},m[k]),x)}),I&&b<=50&&(b++,typeof I=="object"&&(I.placement&&(g=I.placement),I.rects&&(d=I.rects===!0?yield l.getElementRects({reference:e,floating:r,strategy:a}):I.rects),{x:v,y:f}=tv(d,g,u)),j=-1)}return{x:v,y:f,placement:g,strategy:a,middlewareData:m}});return function(e,r,o){return t.apply(this,arguments)}}();function dp(t,e){return eu.apply(this,arguments)}function eu(){return eu=mt(function*(t,e){var r;e===void 0&&(e={});var{x:o,y:s,platform:a,rects:i,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:v="floating",altBoundary:f=!1,padding:g=0}=Bl(e,t),m=lb(g),b=l[f?v==="floating"?"reference":"floating":v],j=ml(yield a.getClippingRect({element:(r=yield a.isElement==null?void 0:a.isElement(b))==null||r?b:b.contextElement||(yield a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),k=v==="floating"?{x:o,y:s,width:i.floating.width,height:i.floating.height}:i.reference,C=yield a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating),A=(yield a.isElement==null?void 0:a.isElement(C))&&(yield a.getScale==null?void 0:a.getScale(C))||{x:1,y:1},M=ml(a.convertOffsetParentRelativeRectToViewportRelativeRect?yield a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:k,offsetParent:C,strategy:c}):k);return{top:(j.top-M.top+m.top)/A.y,bottom:(M.bottom-j.bottom+m.bottom)/A.y,left:(j.left-M.left+m.left)/A.x,right:(M.right-j.right+m.right)/A.x}}),eu.apply(this,arguments)}function tu(){return tu=mt(function*(t,e){var{placement:r,platform:o,elements:s}=t,a=yield o.isRTL==null?void 0:o.isRTL(s.floating),i=Ra(r),l=gl(r),c=ws(r)==="y",u=["left","top"].includes(i)?-1:1,d=a&&c?-1:1,v=Bl(e,t),{mainAxis:f,crossAxis:g,alignmentAxis:m}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return l&&typeof m=="number"&&(g=l==="end"?-1*m:m),c?{x:g*d,y:f*u}:{x:f*u,y:g*d}}),tu.apply(this,arguments)}function Ll(){return typeof window<"u"}function ks(t){return vp(t)?(t.nodeName||"").toLowerCase():"#document"}function Zr(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Ro(t){var e;return(e=(vp(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vp(t){return!!Ll()&&(t instanceof Node||t instanceof Zr(t).Node)}function ho(t){return!!Ll()&&(t instanceof Element||t instanceof Zr(t).Element)}function Uo(t){return!!Ll()&&(t instanceof HTMLElement||t instanceof Zr(t).HTMLElement)}function nv(t){return!(!Ll()||typeof ShadowRoot>"u")&&(t instanceof ShadowRoot||t instanceof Zr(t).ShadowRoot)}function vi(t){var{overflow:e,overflowX:r,overflowY:o,display:s}=go(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&!["inline","contents"].includes(s)}function ub(t){return["table","td","th"].includes(ks(t))}function bl(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function nu(t){var e=Lu(),r=ho(t)?go(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>!!r[o]&&r[o]!=="none")||!!r.containerType&&r.containerType!=="normal"||!e&&!!r.backdropFilter&&r.backdropFilter!=="none"||!e&&!!r.filter&&r.filter!=="none"||["transform","translate","scale","rotate","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function Lu(){return!(typeof CSS>"u"||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function cs(t){return["html","body","#document"].includes(ks(t))}function go(t){return Zr(t).getComputedStyle(t)}function Fl(t){return ho(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function va(t){if(ks(t)==="html")return t;var e=t.assignedSlot||t.parentNode||nv(t)&&t.host||Ro(t);return nv(e)?e.host:e}function fp(t){var e=va(t);return cs(e)?t.ownerDocument?t.ownerDocument.body:t.body:Uo(e)&&vi(e)?e:fp(e)}function fi(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);var s=fp(t),a=s===((o=t.ownerDocument)==null?void 0:o.body),i=Zr(s);if(a){var l=ru(i);return e.concat(i,i.visualViewport||[],vi(s)?s:[],l&&r?fi(l):[])}return e.concat(s,fi(s,[],r))}function ru(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function pp(t){var e=go(t),r=parseFloat(e.width)||0,o=parseFloat(e.height)||0,s=Uo(t),a=s?t.offsetWidth:r,i=s?t.offsetHeight:o,l=hl(r)!==a||hl(o)!==i;return l&&(r=a,o=i),{width:r,height:o,$:l}}function Fu(t){return ho(t)?t:t.contextElement}function us(t){var e=Fu(t);if(!Uo(e))return Po(1);var r=e.getBoundingClientRect(),{width:o,height:s,$:a}=pp(e),i=(a?hl(r.width):r.width)/o,l=(a?hl(r.height):r.height)/s;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}var db=Po(0);function hp(t){var e=Zr(t);return Lu()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:db}function Ua(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);var s=t.getBoundingClientRect(),a=Fu(t),i=Po(1);e&&(o?ho(o)&&(i=us(o)):i=us(t));var l=function(x,I,F){return I===void 0&&(I=!1),!(!F||I&&F!==Zr(x))&&I}(a,r,o)?hp(a):Po(0),c=(s.left+l.x)/i.x,u=(s.top+l.y)/i.y,d=s.width/i.x,v=s.height/i.y;if(a)for(var f=Zr(a),g=o&&ho(o)?Zr(o):o,m=f,b=ru(m);b&&o&&g!==m;){var j=us(b),k=b.getBoundingClientRect(),C=go(b),A=k.left+(b.clientLeft+parseFloat(C.paddingLeft))*j.x,M=k.top+(b.clientTop+parseFloat(C.paddingTop))*j.y;c*=j.x,u*=j.y,d*=j.x,v*=j.y,c+=A,u+=M,b=ru(m=Zr(b))}return ml({width:d,height:v,x:c,y:u})}function _u(t,e){var r=Fl(t).scrollLeft;return e?e.left+r:Ua(Ro(t)).left+r}function gp(t,e,r){r===void 0&&(r=!1);var o=t.getBoundingClientRect();return{x:o.left+e.scrollLeft-(r?0:_u(t,o)),y:o.top+e.scrollTop}}function rv(t,e,r){var o;if(e==="viewport")o=function(a,i){var l=Zr(a),c=Ro(a),u=l.visualViewport,d=c.clientWidth,v=c.clientHeight,f=0,g=0;if(u){d=u.width,v=u.height;var m=Lu();(!m||m&&i==="fixed")&&(f=u.offsetLeft,g=u.offsetTop)}return{width:d,height:v,x:f,y:g}}(t,r);else if(e==="document")o=function(a){var i=Ro(a),l=Fl(a),c=a.ownerDocument.body,u=Pa(i.scrollWidth,i.clientWidth,c.scrollWidth,c.clientWidth),d=Pa(i.scrollHeight,i.clientHeight,c.scrollHeight,c.clientHeight),v=-l.scrollLeft+_u(a),f=-l.scrollTop;return go(c).direction==="rtl"&&(v+=Pa(i.clientWidth,c.clientWidth)-u),{width:u,height:d,x:v,y:f}}(Ro(t));else if(ho(e))o=function(a,i){var l=Ua(a,!0,i==="fixed"),c=l.top+a.clientTop,u=l.left+a.clientLeft,d=Uo(a)?us(a):Po(1);return{width:a.clientWidth*d.x,height:a.clientHeight*d.y,x:u*d.x,y:c*d.y}}(e,r);else{var s=hp(t);o={x:e.x-s.x,y:e.y-s.y,width:e.width,height:e.height}}return ml(o)}function mp(t,e){var r=va(t);return!(r===e||!ho(r)||cs(r))&&(go(r).position==="fixed"||mp(r,e))}function vb(t,e,r){var o=Uo(e),s=Ro(e),a=r==="fixed",i=Ua(t,!0,a,e),l={scrollLeft:0,scrollTop:0},c=Po(0);if(o||!o&&!a)if((ks(e)!=="body"||vi(s))&&(l=Fl(e)),o){var u=Ua(e,!0,a,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else s&&(c.x=_u(s));var d=!s||o||a?Po(0):gp(s,l);return{x:i.left+l.scrollLeft-c.x-d.x,y:i.top+l.scrollTop-c.y-d.y,width:i.width,height:i.height}}function bc(t){return go(t).position==="static"}function ov(t,e){if(!Uo(t)||go(t).position==="fixed")return null;if(e)return e(t);var r=t.offsetParent;return Ro(t)===r&&(r=r.ownerDocument.body),r}function av(t,e){var r=Zr(t);if(bl(t))return r;if(!Uo(t)){for(var o=va(t);o&&!cs(o);){if(ho(o)&&!bc(o))return o;o=va(o)}return r}for(var s=ov(t,e);s&&ub(s)&&bc(s);)s=ov(s,e);return s&&cs(s)&&bc(s)&&!nu(s)?r:s||function(a){for(var i=va(a);Uo(i)&&!cs(i);){if(nu(i))return i;if(bl(i))return null;i=va(i)}return null}(t)||r}var fb={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var{elements:e,rect:r,offsetParent:o,strategy:s}=t,a=s==="fixed",i=Ro(o),l=!!e&&bl(e.floating);if(o===i||l&&a)return r;var c={scrollLeft:0,scrollTop:0},u=Po(1),d=Po(0),v=Uo(o);if((v||!v&&!a)&&((ks(o)!=="body"||vi(i))&&(c=Fl(o)),Uo(o))){var f=Ua(o);u=us(o),d.x=f.x+o.clientLeft,d.y=f.y+o.clientTop}var g=!i||v||a?Po(0):gp(i,c,!0);return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-c.scrollLeft*u.x+d.x+g.x,y:r.y*u.y-c.scrollTop*u.y+d.y+g.y}},getDocumentElement:Ro,getClippingRect:function(t){var{element:e,boundary:r,rootBoundary:o,strategy:s}=t,a=[...r==="clippingAncestors"?bl(e)?[]:function(c,u){var d=u.get(c);if(d)return d;for(var v=fi(c,[],!1).filter(k=>ho(k)&&ks(k)!=="body"),f=null,g=go(c).position==="fixed",m=g?va(c):c;ho(m)&&!cs(m);){var b=go(m),j=nu(m);j||b.position!=="fixed"||(f=null),(g?!j&&!f:!j&&b.position==="static"&&f&&["absolute","fixed"].includes(f.position)||vi(m)&&!j&&mp(c,m))?v=v.filter(k=>k!==m):f=b,m=va(m)}return u.set(c,v),v}(e,this._c):[].concat(r),o],i=a[0],l=a.reduce((c,u)=>{var d=rv(e,u,s);return c.top=Pa(d.top,c.top),c.right=pl(d.right,c.right),c.bottom=pl(d.bottom,c.bottom),c.left=Pa(d.left,c.left),c},rv(e,i,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:av,getElementRects:function(){var t=mt(function*(e){var r=this.getOffsetParent||av,o=this.getDimensions,s=yield o(e.floating);return{reference:vb(e.reference,yield r(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}});return function(e){return t.apply(this,arguments)}}(),getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){var{width:e,height:r}=pp(t);return{width:e,height:r}},getScale:us,isElement:ho,isRTL:function(t){return go(t).direction==="rtl"}};function sv(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function pb(t,e,r,o){o===void 0&&(o={});var{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,u=Fu(t),d=s||a?[...u?fi(u):[],...fi(e)]:[];d.forEach(j=>{s&&j.addEventListener("scroll",r,{passive:!0}),a&&j.addEventListener("resize",r)});var v,f=u&&l?function(j,k){var C,A=null,M=Ro(j);function x(){var I;clearTimeout(C),(I=A)==null||I.disconnect(),A=null}return function I(F,B){F===void 0&&(F=!1),B===void 0&&(B=1),x();var S=j.getBoundingClientRect(),{left:V,top:G,width:H,height:te}=S;if(F||k(),H&&te){var ye={rootMargin:-Ji(G)+"px "+-Ji(M.clientWidth-(V+H))+"px "+-Ji(M.clientHeight-(G+te))+"px "+-Ji(V)+"px",threshold:Pa(0,pl(1,B))||1},ne=!0;try{A=new IntersectionObserver(ve,me(me({},ye),{},{root:M.ownerDocument}))}catch{A=new IntersectionObserver(ve,ye)}A.observe(j)}function ve(Ee){var Re=Ee[0].intersectionRatio;if(Re!==B){if(!ne)return I();Re?I(!1,Re):C=setTimeout(()=>{I(!1,1e-7)},1e3)}Re!==1||sv(S,j.getBoundingClientRect())||I(),ne=!1}}(!0),x}(u,r):null,g=-1,m=null;i&&(m=new ResizeObserver(j=>{var[k]=j;k&&k.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var C;(C=m)==null||C.observe(e)})),r()}),u&&!c&&m.observe(u),m.observe(e));var b=c?Ua(t):null;return c&&function j(){var k=Ua(t);b&&!sv(b,k)&&r(),b=k,v=requestAnimationFrame(j)}(),r(),()=>{var j;d.forEach(k=>{s&&k.removeEventListener("scroll",r),a&&k.removeEventListener("resize",r)}),f==null||f(),(j=m)==null||j.disconnect(),m=null,c&&cancelAnimationFrame(v)}}var hb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,fn:e=>mt(function*(){var r,o,{x:s,y:a,placement:i,middlewareData:l}=e,c=yield function(u,d){return tu.apply(this,arguments)}(e,t);return i===((r=l.offset)==null?void 0:r.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:s+c.x,y:a+c.y,data:me(me({},c),{},{placement:i})}})()}},gb=function(t){return t===void 0&&(t={}),{name:"shift",options:t,fn:e=>mt(function*(){var{x:r,y:o,placement:s}=e,a=Bl(t,e),{mainAxis:i=!0,crossAxis:l=!1,limiter:c={fn:A=>{var{x:M,y:x}=A;return{x:M,y:x}}}}=a,u=Ov(a,Dg),d={x:r,y:o},v=yield dp(e,u),f=ws(Ra(s)),g=lp(f),m=d[g],b=d[f];if(i){var j=g==="y"?"bottom":"right";m=ev(m+v[g==="y"?"top":"left"],m,m-v[j])}if(l){var k=f==="y"?"bottom":"right";b=ev(b+v[f==="y"?"top":"left"],b,b-v[k])}var C=c.fn(me(me({},e),{},{[g]:m,[f]:b}));return me(me({},C),{},{data:{x:C.x-r,y:C.y-o,enabled:{[g]:i,[f]:l}}})})()}},mb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,fn:e=>mt(function*(){var r,o,{placement:s,middlewareData:a,rects:i,initialPlacement:l,platform:c,elements:u}=e,d=Bl(t,e),{mainAxis:v=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:j=!0}=d,k=Ov(d,Ug);if((r=a.arrow)!=null&&r.alignmentOffset)return{};var C=Ra(s),A=ws(l),M=Ra(l)===l,x=yield c.isRTL==null?void 0:c.isRTL(u.floating),I=g||(M||!j?[Bi(l)]:function(Ce){var we=Bi(Ce);return[mc(Ce),we,mc(we)]}(l)),F=b!=="none";!g&&F&&I.push(...function(Ce,we,Ue,de){var re=gl(Ce),ce=function(at,Ot,Q){var N=["left","right"],ee=["right","left"];switch(at){case"top":case"bottom":return Q?Ot?ee:N:Ot?N:ee;case"left":case"right":return Ot?["top","bottom"]:["bottom","top"];default:return[]}}(Ra(Ce),Ue==="start",de);return re&&(ce=ce.map(at=>at+"-"+re),we&&(ce=ce.concat(ce.map(mc)))),ce}(l,j,b,x));var B=[l,...I],S=yield dp(e,k),V=[],G=((o=a.flip)==null?void 0:o.overflows)||[];if(v&&V.push(S[C]),f){var H=function(Ce,we,Ue){Ue===void 0&&(Ue=!1);var de=gl(Ce),re=up(Ce),ce=cp(re),at=re==="x"?de===(Ue?"end":"start")?"right":"left":de==="start"?"bottom":"top";return we.reference[ce]>we.floating[ce]&&(at=Bi(at)),[at,Bi(at)]}(s,i,x);V.push(S[H[0]],S[H[1]])}if(G=[...G,{placement:s,overflows:V}],!V.every(Ce=>Ce<=0)){var te,ye,ne=(((te=a.flip)==null?void 0:te.index)||0)+1,ve=B[ne];if(ve)return{data:{index:ne,overflows:G},reset:{placement:ve}};var Ee=(ye=G.filter(Ce=>Ce.overflows[0]<=0).sort((Ce,we)=>Ce.overflows[1]-we.overflows[1])[0])==null?void 0:ye.placement;if(!Ee)switch(m){case"bestFit":var Re,fe=(Re=G.filter(Ce=>{if(F){var we=ws(Ce.placement);return we===A||we==="y"}return!0}).map(Ce=>[Ce.placement,Ce.overflows.filter(we=>we>0).reduce((we,Ue)=>we+Ue,0)]).sort((Ce,we)=>Ce[1]-we[1])[0])==null?void 0:Re[0];fe&&(Ee=fe);break;case"initialPlacement":Ee=l}if(s!==Ee)return{reset:{placement:Ee}}}return{}})()}};function bb(t){var e,r,o={autoUpdate:!0},s=t,a=c=>me(me(me({},o),t||{}),c||{}),i=c=>{e&&r&&(s=a(c),((u,d,v)=>{var f=new Map,g=me({platform:fb},v),m=me(me({},g.platform),{},{_c:f});return cb(u,d,me(me({},g),{},{platform:m}))})(e,r,s).then(u=>{var d;Object.assign(r.style,{position:u.strategy,left:"".concat(u.x,"px"),top:"".concat(u.y,"px")}),!((d=s)===null||d===void 0)&&d.onComputed&&s.onComputed(u)}))},l=c=>{co(c.subscribe(u=>{e===void 0?(e=u,i()):(Object.assign(e,u),i())}))};return[c=>{if("subscribe"in c)return l(c),{};e=c,i()},(c,u)=>{var d;r=c,s=a(u),setTimeout(()=>i(u),0),i(u);var v=()=>{d&&(d(),d=void 0)},f=function(){var{autoUpdate:g}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s||{};v(),g!==!1&&function(){return Vv.apply(this,arguments)}().then(()=>pb(e,r,()=>i(s),g===!0?{}:g))};return d=f(),{update(g){i(g),d=f(g)},destroy(){v()}}},i]}function jb(t){var{loadOptions:e,filterText:r,items:o,multiple:s,value:a,itemId:i,groupBy:l,filterSelectedItems:c,itemFilter:u,convertStringItemsToObjects:d,filterGroupedItems:v,label:f}=t;if(o&&e)return o;if(!o)return[];o&&o.length>0&&typeof o[0]!="object"&&(o=d(o));var g=o.filter(m=>{var b=u(m[f],r,m);return b&&s&&a!=null&&a.length&&(b=!a.some(j=>!!c&&j[i]===m[i])),b});return l&&(g=v(g)),g}function xb(t){return bp.apply(this,arguments)}function bp(){return(bp=mt(function*(t){var{dispatch:e,loadOptions:r,convertStringItemsToObjects:o,filterText:s}=t,a=yield r(s).catch(i=>{console.warn("svelte-select loadOptions error :>> ",i),e("error",{type:"loadOptions",details:i})});if(a&&!a.cancelled)return a?(a&&a.length>0&&typeof a[0]!="object"&&(a=o(a)),e("loaded",{items:a})):a=[],{filteredItems:a,loading:!1,focused:!0,listOpen:!0}})).apply(this,arguments)}vt(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);var yb=wa(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);vt(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);var wb=wa(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);function jc(t){R(t,wb())}vt(`
    .loading.svelte-1p3nqvd {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-1p3nqvd-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-1p3nqvd {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-1p3nqvd-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);var kb=wa('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');vt(`
    .svelte-select.svelte-82qwg8 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-82qwg8 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-82qwg8:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-82qwg8 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-82qwg8,
    .indicators.svelte-82qwg8 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-82qwg8 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-82qwg8 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-82qwg8:not(.multi) > .value-container:where(.svelte-82qwg8) > input:where(.svelte-82qwg8) {
        width: 100%;
        height: 100%;
    }

    input.svelte-82qwg8::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-82qwg8:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-82qwg8 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-82qwg8 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-82qwg8 input:where(.svelte-82qwg8)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-82qwg8 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-82qwg8 .selected-item:where(.svelte-82qwg8) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-82qwg8:focus {
        outline: none;
    }

    .hide-selected-item.svelte-82qwg8 {
        opacity: 0;
    }

    .icon.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-82qwg8 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-82qwg8:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-82qwg8 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-82qwg8 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-82qwg8 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-82qwg8 input:where(.svelte-82qwg8) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-82qwg8 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-82qwg8 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-82qwg8 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-82qwg8:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-82qwg8 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-82qwg8 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-82qwg8 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-82qwg8 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-82qwg8 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-82qwg8 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-82qwg8 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-82qwg8 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-82qwg8:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-82qwg8 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-82qwg8 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-82qwg8:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-82qwg8,
    .item.hover.item.not-selectable.svelte-82qwg8,
    .item.active.item.not-selectable.svelte-82qwg8,
    .item.not-selectable.svelte-82qwg8:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-82qwg8 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);var Sb=L('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div><!></div></div>'),Cb=L('<div class="empty svelte-82qwg8">No options</div>'),zb=L('<div role="none"><!> <!> <!></div>'),Ob=L('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>',1),Mb=L('<div class="multi-item-clear svelte-82qwg8"><!></div>'),Pb=L('<div role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>'),Rb=L("<div><!></div>"),Ab=L('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>'),Eb=L('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>'),Tb=L('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>'),Nb=L('<input type="hidden" class="svelte-82qwg8">'),qb=L('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>'),Ib=L('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');function za(t,e){var r=function(U){var X={};for(var he in U.children&&(X.default=!0),U.$$slots)X[he]=!0;return X}(e);et(e,!1);var o,s=P(),a=P(),i=P(),l=P(),c=P(),u=P(),d=P(),v=P(),f=P(),g=cm(),m=h(e,"justValue",12,null),b=h(e,"filter",8,jb),j=h(e,"getItems",8,xb),k=h(e,"id",8,null),C=h(e,"name",8,null),A=h(e,"container",12,void 0),M=h(e,"input",12,void 0),x=h(e,"multiple",8,!1),I=h(e,"multiFullItemClearable",8,!1),F=h(e,"disabled",8,!1),B=h(e,"focused",12,!1),S=h(e,"value",12,null),V=h(e,"filterText",12,""),G=h(e,"placeholder",8,"Please select"),H=h(e,"placeholderAlwaysShow",8,!1),te=h(e,"items",12,null),ye=h(e,"label",8,"label"),ne=h(e,"itemFilter",8,(U,X,he)=>"".concat(U).toLowerCase().includes(X.toLowerCase())),ve=h(e,"groupBy",8,void 0),Ee=h(e,"groupFilter",8,U=>U),Re=h(e,"groupHeaderSelectable",8,!1),fe=h(e,"itemId",8,"value"),Ce=h(e,"loadOptions",8,void 0),we=h(e,"containerStyles",8,""),Ue=h(e,"hasError",8,!1),de=h(e,"filterSelectedItems",8,!0),re=h(e,"required",8,!1),ce=h(e,"closeListOnChange",8,!0),at=h(e,"clearFilterTextOnBlur",8,!0),Ot=h(e,"createGroupHeaderItem",8,(U,X)=>({value:U,[ye()]:U})),Q=()=>n(d),N=h(e,"searchable",8,!0),ee=h(e,"inputStyles",8,""),T=h(e,"clearable",8,!0),pe=h(e,"loading",12,!1),Y=h(e,"listOpen",12,!1),Me=h(e,"debounce",8,function(U){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;clearTimeout(o),o=setTimeout(U,X)}),$=h(e,"debounceWait",8,300),E=h(e,"hideEmptyState",8,!1),jt=h(e,"inputAttributes",24,()=>({})),Ke=h(e,"listAutoWidth",8,!0),lt=h(e,"showChevron",8,!1),st=h(e,"listOffset",8,5),je=h(e,"hoverItemIndex",12,0),Ge=h(e,"floatingConfig",24,()=>({})),Mt=h(e,"class",8,""),Be=P(),It=P(),ge=P(),Ie=P(),Ae=P();function De(U){return U.map((X,he)=>({index:he,value:X,label:"".concat(X)}))}function Bt(U){var X=[],he={};U.forEach(sn=>{var Zt=ve()(sn);X.includes(Zt)||(X.push(Zt),he[Zt]=[],Zt&&he[Zt].push(Object.assign(Ot()(Zt,sn),{id:Zt,groupHeader:!0,selectable:Re()}))),he[Zt].push(Object.assign({groupItem:!!Zt},sn))});var Rt=[];return Ee()(X).forEach(sn=>{he[sn]&&Rt.push(...he[sn])}),Rt}function ht(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,X=arguments.length>1?arguments[1]:void 0;je(U<0?0:U),!X&&ve()&&n(d)[je()]&&!n(d)[je()].selectable&&$t(1)}function $e(){var U=!0;if(S()){var X=[],he=[];S().forEach(Rt=>{X.includes(Rt[fe()])?U=!1:(X.push(Rt[fe()]),he.push(Rt))}),U||S(he)}return U}function D(U){var X=U?U[fe()]:S()[fe()];return te().find(he=>he[fe()]===X)}function Ye(U){return Ze.apply(this,arguments)}function Ze(){return(Ze=mt(function*(U){var X=S()[U];S().length===1?S(void 0):S(S().filter(he=>he!==X)),g("clear",X)})).apply(this,arguments)}function Cn(U){if(B())switch(U.stopPropagation(),U.key){case"Escape":U.preventDefault(),Dt();break;case"Enter":if(U.preventDefault(),Y()){if(n(d).length===0)break;var X=n(d)[je()];if(S()&&!x()&&S()[fe()]===X[fe()]){Dt();break}rt(n(d)[je()])}break;case"ArrowDown":U.preventDefault(),Y()?$t(1):(Y(!0),p(Be,void 0));break;case"ArrowUp":U.preventDefault(),Y()?$t(-1):(Y(!0),p(Be,void 0));break;case"Tab":if(Y()&&B()){if(n(d).length===0||S()&&S()[fe()]===n(d)[je()][fe()])return Dt();U.preventDefault(),rt(n(d)[je()]),Dt()}break;case"Backspace":if(!x()||V().length>0)return;if(x()&&S()&&S().length>0){if(Ye(n(Be)!==void 0?n(Be):S().length-1),n(Be)===0||n(Be)===void 0)break;p(Be,S().length>n(Be)?n(Be)-1:void 0)}break;case"ArrowLeft":if(!S()||!x()||V().length>0)return;n(Be)===void 0?p(Be,S().length-1):S().length>n(Be)&&n(Be)!==0&&p(Be,n(Be)-1);break;case"ArrowRight":if(!S()||!x()||V().length>0||n(Be)===void 0)return;n(Be)===S().length-1?p(Be,void 0):n(Be)<S().length-1&&p(Be,n(Be)+1)}}function Je(U){var X,he;B()&&M()===((X=document)===null||X===void 0?void 0:X.activeElement)||(U&&g("focus",U),(he=M())===null||he===void 0||he.focus(),B(!0))}function At(U){return Ut.apply(this,arguments)}function Ut(){return(Ut=mt(function*(U){var X;an||(Y()||B())&&(g("blur",U),Dt(),B(!1),p(Be,void 0),(X=M())===null||X===void 0||X.blur())})).apply(this,arguments)}function ir(){if(!F())return V().length>0?Y(!0):void Y(!Y())}function un(){g("clear",S()),S(void 0),Dt(),Je()}function Dt(){at()&&V(""),Y(!1)}um(mt(function*(){p(It,S()),p(ge,V()),p(Ie,x())})),Er(()=>{Y()&&B(!0),B()&&M()&&M().focus()});var _n=h(e,"ariaValues",8,U=>"Option ".concat(U,", selected.")),Yt=h(e,"ariaListOpen",8,(U,X)=>"You are currently focused on option ".concat(U,". There are ").concat(X," results available.")),pn=h(e,"ariaFocused",8,()=>"Select is focused, type to refine list, press down to open the menu."),rn,Lt=P(null);function xt(){clearTimeout(rn),rn=setTimeout(()=>{an=!1},100)}co(()=>{var U;(U=n(Lt))===null||U===void 0||U.remove()});var an=!1;function rt(U){U&&U.selectable!==!1&&function(X){if(X){V("");var he=Object.assign({},X);if(he.groupHeader&&!he.selectable)return;S(x()?S()?S().concat([he]):[he]:S(he)),setTimeout(()=>{ce()&&Dt(),p(Be,void 0),g("change",S()),g("select",X)})}}(U)}function Ft(U){an||je(U)}function $t(U){if(n(d).filter(he=>!Object.hasOwn(he,"selectable")||he.selectable===!0).length===0)return je(0);U>0&&je()===n(d).length-1?je(0):U<0&&je()===0?je(n(d).length-1):je(je()+U);var X=n(d)[je()];X&&X.selectable===!1&&(U!==1&&U!==-1||$t(U))}function Rn(U,X,he){if(!x())return X&&X[he]===U[he]}var Yn=ur,bn=ur;function ur(U){return{update(X){X.scroll&&(xt(),U.scrollIntoView({behavior:"auto",block:"nearest"}))}}}var nr=P({strategy:"absolute",placement:"bottom-start",middleware:[hb(st()),mb(),gb()],autoUpdate:!1}),[lr,gr,dr]=bb(n(nr)),Nn=P(!0);J(()=>(z(te()),z(S())),()=>{te(),S()&&function(){if(typeof S()=="string"){var U=(te()||[]).find(X=>X[fe()]===S());S(U||{[fe()]:S(),label:S()})}else x()&&Array.isArray(S())&&S().length>0&&S(S().map(X=>typeof X=="string"?{value:X,label:X}:X))}()}),J(()=>(z(jt()),z(N())),()=>{!jt()&&N()||(p(Ae,Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},jt())),k()&&Qr(Ae,n(Ae).id=k()),N()||Qr(Ae,n(Ae).readonly=!0))}),J(()=>z(x()),()=>{x()&&S()&&(Array.isArray(S())?S([...S()]):S([S()]))}),J(()=>(n(Ie),z(x())),()=>{n(Ie)&&!x()&&S()&&S(null)}),J(()=>(z(x()),z(S())),()=>{x()&&S()&&S().length>1&&$e()}),J(()=>z(S()),()=>{S()&&(x()?JSON.stringify(S())!==JSON.stringify(n(It))&&$e()&&g("input",S()):n(It)&&JSON.stringify(S()[fe()])===JSON.stringify(n(It)[fe()])||g("input",S()))}),J(()=>(z(S()),z(x()),n(It)),()=>{!S()&&x()&&n(It)&&g("input",S())}),J(()=>(z(B()),z(M())),()=>{!B()&&M()&&Dt()}),J(()=>(z(V()),n(ge)),()=>{V()!==n(ge)&&(Ce()||V().length!==0)&&(Ce()?Me()(mt(function*(){pe(!0);var U=yield j()({dispatch:g,loadOptions:Ce(),convertStringItemsToObjects:De,filterText:V()});U?(pe(U.loading),Y(Y()?U.listOpen:V().length>0),B(Y()&&U.focused),te(ve()?Bt(U.filteredItems):U.filteredItems)):(pe(!1),B(!0),Y(!0))}),$()):(Y(!0),x()&&p(Be,void 0)))}),J(()=>(z(b()),z(Ce()),z(V()),z(te()),z(x()),z(S()),z(fe()),z(ve()),z(ye()),z(de()),z(ne())),()=>{p(d,b()({loadOptions:Ce(),filterText:V(),items:te(),multiple:x(),value:S(),itemId:fe(),groupBy:ve(),label:ye(),filterSelectedItems:de(),itemFilter:ne(),convertStringItemsToObjects:De,filterGroupedItems:Bt}))}),J(()=>(z(x()),z(Y()),z(S()),n(d)),()=>{!x()&&Y()&&S()&&n(d)&&ht(n(d).findIndex(U=>U[fe()]===S()[fe()]),!0)}),J(()=>(z(Y()),z(x())),()=>{Y()&&x()&&je(0)}),J(()=>z(V()),()=>{V()&&je(0)}),J(()=>z(je()),()=>{var U;U=je(),g("hoverItem",U)}),J(()=>(z(x()),z(S())),()=>{p(s,x()?S()&&S().length>0:S())}),J(()=>(n(s),z(V())),()=>{p(a,n(s)&&V().length>0)}),J(()=>(n(s),z(T()),z(F()),z(pe())),()=>{p(i,n(s)&&T()&&!F()&&!pe())}),J(()=>(z(H()),z(x()),z(G()),z(S())),()=>{var U;p(l,H()&&x()||x()&&((U=S())===null||U===void 0?void 0:U.length)===0?G():S()?"":G())}),J(()=>(z(S()),z(x())),()=>{var U,X;p(c,S()?(U=x(),X=void 0,X=U&&S().length>0?S().map(he=>he[ye()]).join(", "):S()[ye()],_n()(X)):"")}),J(()=>(n(d),z(je()),z(B()),z(Y())),()=>{p(u,function(){if(!n(d)||n(d).length===0)return"";var U=n(d)[je()];if(Y()&&U){var X=n(d)?n(d).length:0;return Yt()(U[ye()],X)}return pn()()}((n(d),je(),B(),Y())))}),J(()=>z(te()),()=>{(function(U){U&&U.length!==0&&!U.some(X=>typeof X!="object")&&S()&&(x()?!S().some(X=>!X||!X[fe()]):S()[fe()])&&(Array.isArray(S())?S(S().map(X=>D(X)||X)):S(D()||S()))})(te())}),J(()=>(z(x()),z(S()),z(fe())),()=>{m((x(),S(),fe(),x()?S()?S().map(U=>U[fe()]):null:S()?S()[fe()]:S()))}),J(()=>(z(x()),n(It),z(S())),()=>{x()||!n(It)||S()||g("input",S())}),J(()=>(z(Y()),n(d),z(x()),z(S())),()=>{Y()&&n(d)&&!x()&&!S()&&ht()}),J(()=>n(d),()=>{(function(U){Y()&&g("filter",U)})(n(d))}),J(()=>(z(A()),z(Ge()),n(nr)),()=>{A()&&Ge()&&dr(Object.assign(n(nr),Ge()))}),J(()=>n(Lt),()=>{p(v,!!n(Lt))}),J(()=>(n(Lt),z(Y())),()=>{(function(U,X){if(!U||!X)return p(Nn,!0);setTimeout(()=>{p(Nn,!1)},0)})(n(Lt),Y())}),J(()=>(z(Y()),z(A()),n(Lt)),()=>{Y()&&A()&&n(Lt)&&function(){var{width:U}=A().getBoundingClientRect();Qr(Lt,n(Lt).style.width=Ke()?U+"px":"auto")}()}),J(()=>z(je()),()=>{p(f,je())}),J(()=>(z(M()),z(Y()),z(B())),()=>{M()&&Y()&&!B()&&Je()}),J(()=>(z(A()),z(Ge())),()=>{var U;A()&&((U=Ge())===null||U===void 0?void 0:U.autoUpdate)===void 0&&Qr(nr,n(nr).autoUpdate=!0)}),mn(),bt();var qn,Xn=Ib();ie("click",Yo,function(U){var X;Y()||B()||!A()||A().contains(U.target)||(X=n(Lt))!==null&&X!==void 0&&X.contains(U.target)||At()}),ie("keydown",Yo,Cn);var le=O(Xn),Kt=U=>{var X,he=zb(),Rt=O(he),sn=gt=>{var Jn=tr();ar(ot(Jn),e,"list-prepend",{},null),R(gt,Jn)};K(Rt,gt=>{r["list-prepend"]&&gt(sn)});var Zt=q(Rt,2),jn=gt=>{var Jn=tr();ar(ot(Jn),e,"list",{get filteredItems(){return n(d)}},null),R(gt,Jn)},Dn=(gt,Jn)=>{var dt=Pe=>{var on=tr();sr(ot(on),1,()=>n(d),vr,(On,ln,rr)=>{var Ir,w=Sb(),Z=O(w);ar(O(Z),e,"item",{get item(){return n(ln)},index:rr},oe=>{var ue=kr();be(()=>{var xe;return it(ue,(xe=n(ln))===null||xe===void 0?void 0:xe[ye()])}),R(oe,ue)}),qr(Z,(oe,ue)=>Yn==null?void 0:Yn(oe),()=>({scroll:Rn(n(ln),S(),fe()),listDom:n(v)})),qr(Z,(oe,ue)=>bn==null?void 0:bn(oe),()=>({scroll:n(f)===rr,listDom:n(v)})),be(oe=>Ir=wt(Z,1,"item svelte-82qwg8",null,Ir,oe),[()=>{var oe,ue;return{"list-group-title":n(ln).groupHeader,active:Rn(n(ln),S(),fe()),first:(ue=rr,ue===0),hover:je()===rr,"group-item":n(ln).groupItem,"not-selectable":((oe=n(ln))===null||oe===void 0?void 0:oe.selectable)===!1}}],ae),ie("mouseover",w,()=>Ft(rr)),ie("focus",w,()=>Ft(rr)),ie("click",w,_o(()=>function(oe){var{item:ue,i:xe}=oe;if((ue==null?void 0:ue.selectable)!==!1)return S()&&!x()&&S()[fe()]===ue[fe()]?Dt():void(function(Te){return Te.groupHeader&&Te.selectable||Te.selectable||!Te.hasOwnProperty("selectable")}(ue)&&(je(xe),rt(ue)))}({item:n(ln),i:rr}))),ie("keydown",w,aa(_o(function(oe){Qs.call(this,e,oe)}))),R(On,w)}),R(Pe,on)},mr=(Pe,on)=>{var On=ln=>{var rr=tr();ar(ot(rr),e,"empty",{},Ir=>{R(Ir,Cb())}),R(ln,rr)};K(Pe,ln=>{E()||ln(On)},on)};K(gt,Pe=>{n(d).length>0?Pe(dt):Pe(mr,!1)},Jn)};K(Zt,gt=>{r.list?gt(jn):gt(Dn,!1)});var In=q(Zt,2),Vn=gt=>{var Jn=tr();ar(ot(Jn),e,"list-append",{},null),R(gt,Jn)};K(In,gt=>{r["list-append"]&&gt(Vn)}),qr(he,gt=>gr==null?void 0:gr(gt)),Qn(he,gt=>p(Lt,gt),()=>n(Lt)),Or(()=>ie("scroll",he,xt)),Or(()=>ie("pointerup",he,aa(_o(function(gt){Qs.call(this,e,gt)})))),Or(()=>ie("mousedown",he,aa(_o(function(gt){Qs.call(this,e,gt)})))),be(gt=>X=wt(he,1,"svelte-select-list svelte-82qwg8",null,X,gt),[()=>({prefloat:n(Nn)})],ae),R(U,he)};K(le,U=>{Y()&&U(Kt)});var W=q(le,2),ke=O(W),He=U=>{var X=Ob(),he=ot(X),Rt=O(he),sn=O(q(he,2));be(()=>{it(Rt,n(c)),it(sn,n(u))}),R(U,X)};K(ke,U=>{B()&&U(He)});var Ct=q(W,2);ar(O(Ct),e,"prepend",{},null);var Ve=q(Ct,2),Et=O(Ve),dn=U=>{var X=tr(),he=ot(X),Rt=Zt=>{var jn=tr();sr(ot(jn),1,S,vr,(Dn,In,Vn)=>{var gt,Jn=Pb(),dt=O(Jn);ar(O(dt),e,"selection",{get selection(){return n(In)},index:Vn},on=>{var On=kr();be(()=>it(On,n(In)[ye()])),R(on,On)});var mr=q(dt,2),Pe=on=>{var On=Mb();ar(O(On),e,"multi-clear-icon",{},ln=>{jc(ln)}),ie("pointerup",On,aa(_o(()=>Ye(Vn)))),R(on,On)};K(mr,on=>{F()||I()||!jc||on(Pe)}),be(on=>gt=wt(Jn,1,"multi-item svelte-82qwg8",null,gt,on),[()=>({active:n(Be)===Vn,disabled:F()})],ae),ie("click",Jn,aa(()=>I()?Ye(Vn):{})),ie("keydown",Jn,aa(_o(function(on){Qs.call(this,e,on)}))),R(Dn,Jn)}),R(Zt,jn)},sn=Zt=>{var jn,Dn=Rb();ar(O(Dn),e,"selection",{get selection(){return S()}},In=>{var Vn=kr();be(()=>it(Vn,S()[ye()])),R(In,Vn)}),be(In=>jn=wt(Dn,1,"selected-item svelte-82qwg8",null,jn,In),[()=>({"hide-selected-item":n(a)})],ae),R(Zt,Dn)};K(he,Zt=>{x()?Zt(Rt):Zt(sn,!1)}),R(U,X)};K(Et,U=>{n(s)&&U(dn)});var zt,hn=q(Et,2);Qn(hn,U=>M(U),()=>M());var ct=q(Ve,2),Pt=O(ct),nt=U=>{var X=Ab();ar(O(X),e,"loading-icon",{},he=>{(function(Rt){R(Rt,kb())})(he)}),R(U,X)};K(Pt,U=>{pe()&&U(nt)});var ft=q(Pt,2),zn=U=>{var X=Eb();ar(O(X),e,"clear-icon",{},he=>{jc(he)}),ie("click",X,un),R(U,X)};K(ft,U=>{n(i)&&U(zn)});var An=q(ft,2),Jt=U=>{var X=Tb();ar(O(X),e,"chevron-icon",{get listOpen(){return Y()}},he=>{(function(Rt){R(Rt,yb())})(he)}),R(U,X)};K(An,U=>{lt()&&U(Jt)});var Tt=q(ct,2);ar(Tt,e,"input-hidden",{get value(){return S()}},U=>{var X=Nb();be(he=>{gn(X,"name",C()),Na(X,he)},[()=>S()?JSON.stringify(S()):null],ae),R(U,X)});var qt=q(Tt,2),Wn=U=>{var X=tr();ar(ot(X),e,"required",{get value(){return S()}},he=>{R(he,qb())}),R(U,X)};return K(qt,U=>{!re()||S()&&S().length!==0||U(Wn)}),Or(()=>ie("pointerup",Xn,aa(ir))),Qn(Xn,U=>A(U),()=>A()),qr(Xn,U=>lr==null?void 0:lr(U)),be(U=>{var X;qn=wt(Xn,1,"svelte-select ".concat((X=Mt())!==null&&X!==void 0?X:""),"svelte-82qwg8",qn,U),po(Xn,we()),zt=Hi(hn,zt,me(me({readOnly:!N()},n(Ae)),{},{placeholder:n(l),style:ee(),disabled:F()}),"svelte-82qwg8")},[()=>({multi:x(),disabled:F(),focused:B(),"list-open":Y(),"show-chevron":lt(),error:Ue()})],ae),ie("keydown",hn,Cn),ie("blur",hn,At),ie("focus",hn,Je),cl(hn,V),R(t,Xn),pt(e,"getFilteredItems",Q),pt(e,"handleClear",un),tt({getFilteredItems:Q,handleClear:un})}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-qbze6z {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-qbze6z input:where(.svelte-qbze6z) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) th:where(.svelte-qbze6z) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);var Ub=L('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');function Db(t,e){var r,o,s,a,i;et(e,!1);var l=P(void 0,!0),c=P(void 0,!0),u=P(void 0,!0),d=P(void 0,!0),v=P(void 0,!0),f=P(void 0,!0),g=wr("jsoneditor:TransformWizard"),m=h(e,"json",9),b=h(e,"queryOptions",29,()=>({})),j=h(e,"onChange",9),k=["==","!=","<","<=",">",">="].map(de=>({value:de,label:de})),C=[{value:"asc",label:"ascending"},{value:"desc",label:"descending"}],A=P((r=b())!==null&&r!==void 0&&(r=r.filter)!==null&&r!==void 0&&r.path?ia(b().filter.path):void 0,!0),M=P((o=k.find(de=>{var re;return de.value===((re=b().filter)===null||re===void 0?void 0:re.relation)}))!==null&&o!==void 0?o:k[0],!0),x=P(((s=b())===null||s===void 0||(s=s.filter)===null||s===void 0?void 0:s.value)||"",!0),I=P((a=b())!==null&&a!==void 0&&(a=a.sort)!==null&&a!==void 0&&a.path?ia(b().sort.path):void 0,!0),F=P((i=C.find(de=>{var re;return de.value===((re=b().sort)===null||re===void 0?void 0:re.direction)}))!==null&&i!==void 0?i:C[0],!0);J(()=>z(m()),()=>{p(l,Array.isArray(m()))}),J(()=>(n(l),z(m())),()=>{p(c,n(l)?Ic(m()):[])}),J(()=>(n(l),z(m())),()=>{p(u,n(l)?Ic(m(),!0):[])}),J(()=>(n(c),ia),()=>{p(d,n(c).map(ia))}),J(()=>(n(u),ia),()=>{p(v,n(u)?n(u).map(ia):[])}),J(()=>(z(b()),n(v),Xt),()=>{var de;p(f,(de=b())!==null&&de!==void 0&&(de=de.projection)!==null&&de!==void 0&&de.paths&&n(v)?b().projection.paths.map(re=>n(v).find(ce=>Xt(ce.value,re))).filter(re=>!!re):void 0)}),J(()=>n(A),()=>{var de,re,ce;re=(de=n(A))===null||de===void 0?void 0:de.value,Xt((ce=b())===null||ce===void 0||(ce=ce.filter)===null||ce===void 0?void 0:ce.path,re)||(g("changeFilterPath",re),b(Lo(b(),["filter","path"],re,!0)),j()(b()))}),J(()=>n(M),()=>{var de,re,ce;re=(de=n(M))===null||de===void 0?void 0:de.value,Xt((ce=b())===null||ce===void 0||(ce=ce.filter)===null||ce===void 0?void 0:ce.relation,re)||(g("changeFilterRelation",re),b(Lo(b(),["filter","relation"],re,!0)),j()(b()))}),J(()=>n(x),()=>{var de,re;de=n(x),Xt((re=b())===null||re===void 0||(re=re.filter)===null||re===void 0?void 0:re.value,de)||(g("changeFilterValue",de),b(Lo(b(),["filter","value"],de,!0)),j()(b()))}),J(()=>n(I),()=>{var de,re,ce;re=(de=n(I))===null||de===void 0?void 0:de.value,Xt((ce=b())===null||ce===void 0||(ce=ce.sort)===null||ce===void 0?void 0:ce.path,re)||(g("changeSortPath",re),b(Lo(b(),["sort","path"],re,!0)),j()(b()))}),J(()=>n(F),()=>{var de,re,ce;re=(de=n(F))===null||de===void 0?void 0:de.value,Xt((ce=b())===null||ce===void 0||(ce=ce.sort)===null||ce===void 0?void 0:ce.direction,re)||(g("changeSortDirection",re),b(Lo(b(),["sort","direction"],re,!0)),j()(b()))}),J(()=>n(f),()=>{(function(de){var re;Xt((re=b())===null||re===void 0||(re=re.projection)===null||re===void 0?void 0:re.paths,de)||(g("changeProjectionPaths",de),b(Lo(b(),["projection","paths"],de,!0)),j()(b()))})(n(f)?n(f).map(de=>de.value):void 0)}),mn(),bt(!0);var B=Ub(),S=O(B),V=O(S),G=q(O(V)),H=O(G),te=O(H);za(te,{class:"jse-filter-path",showChevron:!0,get items(){return n(d)},get value(){return n(A)},set value(de){p(A,de)},$$legacy:!0});var ye=q(te,2);za(ye,{class:"jse-filter-relation",showChevron:!0,clearable:!1,items:k,get value(){return n(M)},set value(de){p(M,de)},$$legacy:!0});var ne=q(ye,2),ve=q(V),Ee=q(O(ve)),Re=O(Ee),fe=O(Re);za(fe,{class:"jse-sort-path",showChevron:!0,get items(){return n(d)},get value(){return n(I)},set value(de){p(I,de)},$$legacy:!0}),za(q(fe,2),{class:"jse-sort-direction",showChevron:!0,clearable:!1,items:C,get value(){return n(F)},set value(de){p(F,de)},$$legacy:!0});var Ce=q(ve),we=q(O(Ce)),Ue=O(we);za(O(Ue),{class:"jse-projection-paths",multiple:!0,showChevron:!0,get items(){return n(v)},get value(){return n(f)},set value(de){p(f,de)},$$legacy:!0}),cl(ne,()=>n(x),de=>p(x,de)),R(t,B),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-atm4um {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);var Jb=L('<button type="button"><!> </button>'),Bb=L('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');function Lb(t,e){et(e,!1);var r=h(e,"queryLanguages",8),o=h(e,"queryLanguageId",12),s=h(e,"onChangeQueryLanguage",8);bt();var a=Bb();sr(O(a),5,r,vr,(i,l)=>{var c,u=Jb(),d=O(u),v=m=>{en(m,{data:Cv})},f=m=>{en(m,{data:zv})};K(d,m=>{n(l).id===o()?m(v):m(f,!1)});var g=q(d);be(m=>{var b;c=wt(u,1,"jse-query-language svelte-atm4um",null,c,m),gn(u,"title","Select ".concat(n(l).name," as query language")),it(g," ".concat((b=n(l).name)!==null&&b!==void 0?b:""))},[()=>({selected:n(l).id===o()})],ae),ie("click",u,()=>{return m=n(l).id,o(m),void s()(m);var m}),R(i,u)}),R(t,a),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1y24war {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1y24war .jse-title:where(.svelte-1y24war) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war):hover {
  background: rgba(255, 255, 255, 0.1);
}`);var Fb=L('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>'),_b=L('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');function jl(t,e){et(e,!1);var r=h(e,"title",9,"Modal"),o=h(e,"fullScreenButton",9,!1),s=h(e,"fullscreen",13,!1),a=h(e,"onClose",9,void 0);bt(!0);var i=_b(),l=O(i),c=O(l),u=q(l,2);ar(u,e,"actions",{},null);var d=q(u,2),v=g=>{var m=Fb(),b=O(m),j=ae(()=>s()?rh:oh);en(b,{get data(){return n(j)}}),ie("click",m,()=>s(!s())),R(g,m)};K(d,g=>{o()&&g(v)});var f=q(d,2);en(O(f),{data:yl}),be(()=>it(c,r())),ie("click",f,()=>{var g;return(g=a())===null||g===void 0?void 0:g()}),R(t,i),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-1kpylsp {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-1kpylsp:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-1kpylsp {
  display: none;
}`);var Wb=L('<button slot="actions" type="button" title="Select a query language"><!></button>'),xc=wr("jsoneditor:AutoScrollHandler");function iv(t){var e,r;function o(l){return l<20?200:l<50?400:1200}function s(){if(t){var l=.05*(e||0);t.scrollTop+=l}}function a(l){r&&l===e||(i(),xc("startAutoScroll",l),e=l,r=setInterval(s,50))}function i(){r&&(xc("stopAutoScroll"),clearInterval(r),r=void 0,e=void 0)}return xc("createAutoScrollHandler",t),{onDrag:function(l){if(t){var c=l.clientY,{top:u,bottom:d}=t.getBoundingClientRect();c<u?a(-o(u-c)):c>d?a(o(c-d)):i()}},onDragEnd:function(){i()}}}var Vb=(t,e,r,o)=>(t/=o/2)<1?r/2*t*t+e:-r/2*(--t*(t-2)-1)+e,jp=()=>{var t,e,r,o,s,a,i,l,c,u,d,v,f;function g(j){return j.getBoundingClientRect().top-(t.getBoundingClientRect?t.getBoundingClientRect().top:0)+r}function m(j){t.scrollTo?t.scrollTo(t.scrollLeft,j):t.scrollTop=j}function b(j){u||(u=j),m(a(d=j-u,r,l,c)),f=!0,d<c?requestAnimationFrame(b):function(){m(r+l),e&&i&&(e.setAttribute("tabindex","-1"),e.focus()),typeof v=="function"&&v(),u=0,f=!1}()}return function(j){var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};switch(c=1e3,s=k.offset||0,v=k.callback,a=k.easing||Vb,i=k.a11y||!1,typeof k.container){case"object":t=k.container;break;case"string":t=document.querySelector(k.container);break;default:t=window.document.documentElement}switch(r=t.scrollTop,typeof j){case"number":e=void 0,i=!1,o=r+j;break;case"object":o=g(e=j);break;case"string":e=document.querySelector(j),o=g(e)}switch(l=o-r+s,typeof k.duration){case"number":c=k.duration;break;case"function":c=k.duration(l)}f?u=0:requestAnimationFrame(b)}};function ns(t,e){var r=Date.now(),o=t();return e(Date.now()-r),o}var Ka=wr("validation"),$b={createObjectDocumentState:()=>({type:"object",properties:{}}),createArrayDocumentState:()=>({type:"array",items:[]}),createValueDocumentState:()=>({type:"value"})};function lv(t,e,r,o){return Uu(t,e,r,o,$b)}function xp(t,e,r,o){if(Ka("validateJSON"),!e)return[];if(r!==o){var s=r.stringify(t);return e(s!==void 0?o.parse(s):void 0)}return e(t)}function Hb(t,e,r,o){if(Ka("validateText"),t.length>104857600)return{validationErrors:[{path:[],message:"Validation turned off: the document is too large",severity:so.info}]};if(t.length!==0)try{var s=ns(()=>r.parse(t),c=>Ka("validate: parsed json in ".concat(c," ms")));if(!e)return;var a=r===o?s:ns(()=>o.parse(t),c=>Ka("validate: parsed json with the validationParser in ".concat(c," ms"))),i=ns(()=>e(a),c=>Ka("validate: validated json in ".concat(c," ms")));return Pn(i)?void 0:{validationErrors:i}}catch(c){var l=ns(()=>function(u,d){if(u.length>Wm)return!1;try{return d.parse(zo(u)),!0}catch{return!1}}(t,r),u=>Ka("validate: checked whether repairable in ".concat(u," ms")));return{parseError:gs(t,c.message||c.toString()),isRepairable:l}}}var Li=wr("jsoneditor:FocusTracker");function Wu(t){var e,{onMount:r,onDestroy:o,getWindow:s,hasFocus:a,onFocus:i,onBlur:l}=t,c=!1;function u(){var v=a();v&&(clearTimeout(e),c||(Li("focus"),i(),c=v))}function d(){c&&(clearTimeout(e),e=setTimeout(()=>{a()||(Li("blur"),c=!1,l())}))}r(()=>{Li("mount FocusTracker");var v=s();v&&(v.addEventListener("focusin",u,!0),v.addEventListener("focusout",d,!0))}),o(()=>{Li("destroy FocusTracker");var v=s();v&&(v.removeEventListener("focusin",u,!0),v.removeEventListener("focusout",d,!0))})}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-czprfx {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-czprfx {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-czprfx .jse-text:where(.svelte-czprfx) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx) {
  cursor: pointer;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-czprfx {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-czprfx {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-czprfx {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);var Qb=L('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>'),Yb=L('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');function mo(t,e){et(e,!1);var r=h(e,"type",9,"success"),o=h(e,"icon",9,void 0),s=h(e,"message",9,void 0),a=h(e,"actions",25,()=>[]),i=h(e,"onClick",9,void 0),l=h(e,"onClose",9,void 0);l()&&co(l()),bt(!0);var c,u=Yb(),d=O(u),v=O(d),f=O(v),g=b=>{en(b,{get data(){return o()}})};K(f,b=>{o()&&b(g)});var m=q(f);sr(q(d,2),5,a,vr,(b,j)=>{var k=Qb(),C=O(k),A=x=>{en(x,{get data(){return n(j).icon}})};K(C,x=>{n(j).icon&&x(A)});var M=q(C);be(()=>{var x;gn(k,"title",n(j).title),k.disabled=n(j).disabled,it(M," ".concat((x=n(j).text)!==null&&x!==void 0?x:""))}),ie("click",k,()=>{n(j).onClick&&n(j).onClick()}),ie("mousedown",k,()=>{n(j).onMouseDown&&n(j).onMouseDown()}),R(b,k)}),be(b=>{var j,k;wt(u,1,"jse-message jse-".concat((j=r())!==null&&j!==void 0?j:""),"svelte-czprfx"),c=wt(d,1,"jse-text svelte-czprfx",null,c,b),it(m," ".concat((k=s())!==null&&k!==void 0?k:""))},[()=>({"jse-clickable":!!i()})],ae),ie("click",d,function(){i()&&i()()}),R(t,u),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1uindol {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-error:where(.svelte-1uindol) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-info:where(.svelte-1uindol) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-icon:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) div.jse-validation-errors-expand:where(.svelte-1uindol) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);var Kb=L('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>'),Zb=L('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>'),Gb=L('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>'),Xb=L('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>'),ej=L('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>'),tj=L('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');function Vu(t,e){et(e,!1);var r=P(void 0,!0),o=h(e,"validationErrors",9),s=h(e,"selectError",9),a=P(!0,!0);function i(){p(a,!1)}function l(){p(a,!0)}J(()=>z(o()),()=>{p(r,o().length)}),mn(),bt(!0);var c=tr(),u=ot(c),d=v=>{var f=tj(),g=O(f),m=j=>{var k=Xb(),C=O(k),A=O(C);sr(A,1,()=>gf(o(),100),vr,(I,F,B)=>{var S=Zb(),V=O(S);en(O(V),{data:Aa});var G=q(V),H=O(G),te=q(G),ye=O(te),ne=O(q(te)),ve=Ee=>{var Re=Kb();en(O(Re),{data:fh}),ie("click",Re,_o(i)),R(Ee,Re)};K(ne,Ee=>{B===0&&o().length>1&&Ee(ve)}),be(Ee=>{var Re;wt(S,1,"jse-validation-".concat((Re=n(F).severity)!==null&&Re!==void 0?Re:""),"svelte-1uindol"),it(H,Ee),it(ye,n(F).message)},[()=>ao(n(F).path)],ae),ie("click",S,()=>{setTimeout(()=>s()(n(F)))}),R(I,S)});var M=q(A),x=I=>{var F=Gb(),B=q(O(F),2),S=O(B);be(()=>it(S,"(and ".concat(n(r)-100," more errors)"))),R(I,F)};K(M,I=>{n(r)>100&&I(x)}),R(j,k)},b=j=>{var k=ej(),C=O(k),A=O(C),M=O(A);en(O(M),{data:Aa});var x=O(q(M));en(O(q(x)),{data:xv}),be(I=>{var F;wt(A,1,"jse-validation-".concat(I??""),"svelte-1uindol"),it(x,"".concat((F=n(r))!==null&&F!==void 0?F:""," validation errors "))},[()=>{return I=o(),[so.error,so.warning,so.info].find(F=>I.some(B=>B.severity===F));var I}],ae),ie("click",A,l),R(j,k)};K(g,j=>{n(a)||n(r)===1?j(m):j(b,!1)}),R(v,f)};K(u,v=>{Pn(o())||v(d)}),R(t,c),tt()}function pi(t,e){if(t)return t.addEventListener("keydown",r),{destroy(){t.removeEventListener("keydown",r)}};function r(o){o.key==="Escape"&&(o.preventDefault(),o.stopPropagation(),e())}}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-1s9c2ql {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-1s9c2ql {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-1s9c2ql {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-1s9c2ql {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-1s9c2ql {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-1s9c2ql {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-1s9c2ql::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-1s9c2ql {
  animation: svelte-1s9c2ql-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-1s9c2ql::backdrop {
  animation: svelte-1s9c2ql-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-1s9c2ql .jse-modal-inner:where(.svelte-1s9c2ql) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-1s9c2ql-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-1s9c2ql-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-1s9c2ql .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);var nj=L('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');function hi(t,e){et(e,!1);var r=h(e,"className",8,void 0),o=h(e,"fullscreen",8,!1),s=h(e,"onClose",8),a=P();function i(){s()()}Er(()=>n(a).showModal()),co(()=>n(a).close()),bt();var l,c=nj(),u=O(c);ar(O(u),e,"default",{},null),Qn(c,d=>p(a,d),()=>n(a)),Or(()=>ie("close",c,i)),Or(()=>{return ie("pointerdown",c,(d=i,function(){for(var v=arguments.length,f=new Array(v),g=0;g<v;g++)f[g]=arguments[g];f[0].target===this&&(d==null||d.apply(this,f))}));var d}),Or(()=>ie("cancel",c,aa(function(d){Qs.call(this,e,d)}))),qr(c,(d,v)=>pi==null?void 0:pi(d,v),()=>i),be((d,v)=>l=wt(c,1,d,"svelte-1s9c2ql",l,v),[()=>ja(Es("jse-modal",r())),()=>({"jse-fullscreen":o()})],ae),R(t,c),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-189qksl {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-189qksl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-189qksl .jse-shortcut:where(.svelte-189qksl) .jse-key:where(.svelte-189qksl) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);var rj=L('<!> <div class="jse-modal-contents svelte-189qksl"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"></div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>',1);function yp(t,e){et(e,!1);var r=h(e,"onClose",9),o=Pu()?"⌘":"Ctrl";bt(!0),hi(t,{get onClose(){return r()},className:"jse-copy-paste",children:(s,a)=>{var i=rj(),l=ot(i);jl(l,{title:"Copying and pasting",get onClose(){return r()}});var c=q(l,2),u=q(O(c),2),d=O(u);O(d).textContent="".concat(o??"","+C");var v=q(d,2);O(v).textContent="".concat(o??"","+X"),O(q(v,2)).textContent="".concat(o??"","+V"),ie("click",O(q(u,2)),function(){for(var f,g=arguments.length,m=new Array(g),b=0;b<g;b++)m[b]=arguments[b];(f=r())===null||f===void 0||f.apply(this,m)}),R(s,i)},$$slots:{default:!0}}),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-pf7s2l {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-first:where(.svelte-pf7s2l) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-last:where(.svelte-pf7s2l) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-selected:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-pf7s2l .jse-space:where(.svelte-pf7s2l) {
  flex: 1;
}
.jse-menu.svelte-pf7s2l .jse-separator:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);var oj=L('<div class="jse-separator svelte-pf7s2l"></div>'),aj=L('<div class="jse-space svelte-pf7s2l"></div>'),sj=L('<button type="button"><!> <!></button>'),ij=L('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');function _l(t,e){et(e,!1);var r=h(e,"items",25,()=>[]);bt(!0);var o=ij(),s=O(o);ar(s,e,"left",{},null);var a=q(s,2);sr(a,1,r,vr,(i,l)=>{var c=tr(),u=ot(c),d=f=>{R(f,oj())},v=(f,g)=>{var m=j=>{R(j,aj())},b=(j,k)=>{var C=M=>{var x=sj(),I=O(x),F=V=>{en(V,{get data(){return n(l).icon}})};K(I,V=>{n(l).icon&&V(F)});var B=q(I,2),S=V=>{var G=kr();be(()=>it(G,n(l).text)),R(V,G)};K(B,V=>{n(l).text&&V(S)}),be(()=>{var V;wt(x,1,"jse-button ".concat((V=n(l).className)!==null&&V!==void 0?V:""),"svelte-pf7s2l"),gn(x,"title",n(l).title),x.disabled=n(l).disabled||!1}),ie("click",x,function(){for(var V,G=arguments.length,H=new Array(G),te=0;te<G;te++)H[te]=arguments[te];(V=n(l).onClick)===null||V===void 0||V.apply(this,H)}),R(M,x)},A=M=>{var x=kr();be(I=>it(x,I),[()=>function(I){return console.error("Unknown type of menu item",I),"???"}(n(l))],ae),R(M,x)};K(j,M=>{ls(n(l))?M(C):M(A,!1)},k)};K(f,j=>{Eu(n(l))?j(m):j(b,!1)},g)};K(u,f=>{Gs(n(l))?f(d):f(v,!1)}),R(i,c)}),ar(q(a,2),e,"right",{},null),R(t,o),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-3golau {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-3golau .jse-info:where(.svelte-3golau) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-3golau .jse-json-text:where(.svelte-3golau) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);var lj=L('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>'),cj=L('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');function uj(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=P(void 0,!0),i=P(void 0,!0),l=P(void 0,!0),c=h(e,"text",13,""),u=h(e,"readOnly",9,!1),d=h(e,"onParse",9),v=h(e,"onRepair",9),f=h(e,"onChange",9,void 0),g=h(e,"onApply",9),m=h(e,"onCancel",9),b=wr("jsoneditor:JSONRepair"),j=P(void 0,!0);function k(){if(n(j)&&n(r)){var G=n(r).position!==void 0?n(r).position:0;n(j).setSelectionRange(G,G),n(j).focus()}}function C(){g()(c())}function A(){try{c(v()(c())),f()&&f()(c())}catch{}}var M=P(void 0,!0);J(()=>z(c()),()=>{p(r,function(G){try{return void d()(G)}catch(H){return gs(G,H.message)}}(c()))}),J(()=>z(c()),()=>{p(o,function(G){try{return v()(G),!0}catch{return!1}}(c()))}),J(()=>n(r),()=>{b("error",n(r))}),J(()=>z(m()),()=>{p(M,[{type:"space"},{type:"button",icon:yl,title:"Cancel repair",className:"jse-cancel",onClick:m()}])}),J(()=>Ku,()=>{p(s,{icon:Ku,text:"Show me",title:"Scroll to the error location",onClick:k})}),J(()=>fs,()=>{p(a,{icon:fs,text:"Auto repair",title:"Automatically repair JSON",onClick:A})}),J(()=>(n(o),n(s),n(a)),()=>{p(i,n(o)?[n(s),n(a)]:[n(s)])}),J(()=>z(u()),()=>{p(l,[{icon:fu,text:"Apply",title:"Apply fixed JSON",disabled:u(),onClick:C}])}),mn(),bt(!0);var x=cj(),I=O(x);_l(I,{get items(){return n(M)},$$slots:{left:(G,H)=>{R(G,lj())}}});var F=q(I,2),B=G=>{var H=ae(()=>"Cannot parse JSON: ".concat(n(r).message));mo(G,{type:"error",icon:Aa,get message(){return n(H)},get actions(){return n(i)}})},S=G=>{mo(G,{type:"success",message:"JSON is valid now and can be parsed.",get actions(){return n(l)}})};K(F,G=>{n(r)?G(B):G(S,!1)});var V=q(F,2);Qn(V,G=>p(j,G),()=>n(j)),be(()=>{V.readOnly=u(),Na(V,c())}),ie("input",V,function(G){b("handleChange");var H=G.target.value;c()!==H&&(c(H),f()&&f()(c()))}),R(t,x),tt()}function wp(t,e){et(e,!1);var r=h(e,"text",13),o=h(e,"onParse",9),s=h(e,"onRepair",9),a=h(e,"onApply",9),i=h(e,"onClose",9);function l(u){a()(u),i()()}function c(){i()()}bt(!0),hi(t,{get onClose(){return i()},className:"jse-repair-modal",children:(u,d)=>{uj(u,{get onParse(){return o()},get onRepair(){return s()},onApply:l,onCancel:c,get text(){return r()},set text(v){r(v)},$$legacy:!0})},$$slots:{default:!0}}),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1h6hzoq {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1h6hzoq {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq),
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq) {
  display: inline;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):hover, div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);var dj=L('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>'),vj=L('<div role="none"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');function fj(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=P(void 0,!0),i=P(void 0,!0),l=h(e,"visibleSections",9),c=h(e,"sectionIndex",9),u=h(e,"total",9),d=h(e,"path",9),v=h(e,"selection",9),f=h(e,"onExpandSection",9),g=h(e,"context",9);J(()=>(z(l()),z(c())),()=>{p(r,l()[c()])}),J(()=>n(r),()=>{p(o,n(r).end)}),J(()=>(z(l()),z(c()),z(u())),()=>{p(s,l()[c()+1]?l()[c()+1].start:u())}),J(()=>(z(g()),z(v()),z(d()),n(o)),()=>{p(a,di(g().getJson(),v(),d().concat(String(n(o)))))}),J(()=>(n(o),n(s)),()=>{p(i,function(M,x){var I={start:M,end:Math.min(Fc(M),x)},F=Math.max(dl((M+x)/2),M),B={start:F,end:Math.min(Fc(F),x)},S=dl(x),V=S===x?S-ai:S,G={start:Math.max(V,M),end:x},H=[I],te=B.start>=I.end&&B.end<=G.start;return te&&H.push(B),G.start>=(te?B.end:I.end)&&H.push(G),H}(n(o),n(s)))}),mn(),bt(!0);var m,b,j=vj(),k=O(j),C=O(k),A=O(C);sr(q(C,2),1,()=>n(i),vr,(M,x)=>{var I=dj(),F=O(I);be(()=>{var B,S;return it(F,"show ".concat((B=n(x).start)!==null&&B!==void 0?B:"","-").concat((S=n(x).end)!==null&&S!==void 0?S:""))}),ie("click",I,()=>f()(d(),n(x))),R(M,I)}),be(M=>{var x,I;m=wt(j,1,"jse-collapsed-items svelte-1h6hzoq",null,m,M),b=po(j,"",b,{"--level":d().length+2}),it(A,"Items ".concat((x=n(o))!==null&&x!==void 0?x:"","-").concat((I=n(s))!==null&&I!==void 0?I:""))},[()=>({"jse-selected":n(a)})],ae),ie("mousemove",j,function(M){M.stopPropagation()}),R(t,j),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-137iwnw {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-137iwnw {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-137iwnw {
  right: -1px;
}
.jse-context-menu-pointer.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);var pj=L('<button type="button"><!></button>');function sa(t,e){et(e,!1);var r=h(e,"root",9,!1),o=h(e,"insert",9,!1),s=h(e,"selected",9),a=h(e,"onContextMenu",9);bt(!0);var i,l=pj();gn(l,"title",Au),en(O(l),{data:ma}),be(c=>i=wt(l,1,"jse-context-menu-pointer svelte-137iwnw",null,i,c),[()=>({"jse-root":r(),"jse-insert":o(),"jse-selected":s()})],ae),ie("click",l,function(c){for(var u=c.target;u&&u.nodeName!=="BUTTON";)u=u.parentNode;u&&a()({anchor:u,left:0,top:0,width:Vo,height:Wo,offsetTop:2,offsetLeft:0,showTip:!0})}),R(t,l),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-2iqnqn {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-2iqnqn {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-2iqnqn::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);var hj=L('<div role="none" data-type="selectable-key"><!></div>'),gj=L("<!> <!>",1),mj=L('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');function kp(t,e){et(e,!0);var r=_r(()=>yn(e.selection)&&Br(e.selection)),o=_r(()=>e.context.onRenderValue({path:e.path,value:e.value,mode:e.context.mode,truncateTextSize:e.context.truncateTextSize,readOnly:e.context.readOnly,enforceString:e.enforceString,isEditing:n(r),parser:e.context.parser,normalization:e.context.normalization,selection:e.selection,searchResultItems:e.searchResultItems,onPatch:e.context.onPatch,onPasteJson:e.context.onPasteJson,onSelect:e.context.onSelect,onFind:e.context.onFind,findNextInside:e.context.findNextInside,focus:e.context.focus})),s=tr();sr(ot(s),17,()=>n(o),vr,(a,i)=>{var l=tr(),c=ot(l),u=v=>{var f=mj(),g=_r(()=>n(i).action);qr(f,(m,b)=>{var j;return(j=n(g))===null||j===void 0?void 0:j(m,b)},()=>n(i).props),R(v,f)},d=v=>{var f=tr(),g=_r(()=>n(i).component);of(ot(f),()=>n(g),(m,b)=>{b(m,ha(()=>n(i).props))}),R(v,f)};K(c,v=>{Lf(n(i))?v(u):v(d,!1)}),R(a,l)}),R(t,s),tt()}var bj={selecting:!1,selectionAnchor:void 0,selectionAnchorType:void 0,selectionFocus:void 0,dragging:!1};function yc(t){var{json:e,selection:r,deltaY:o,items:s}=t;if(!r)return{operations:void 0,updatedSelection:void 0,offset:0};var a=o<0?function(d){for(var{json:v,items:f,selection:g,deltaY:m}=d,b=ko(v,g),j=f.findIndex(I=>Xt(I.path,b)),k=()=>{var I;return(I=f[C-1])===null||I===void 0?void 0:I.height},C=j,A=0;k()!==void 0&&Math.abs(m)>A+k()/2;)A+=k(),C-=1;var M=f[C].path,x=C-j;return C!==j&&f[C]!==void 0?{beforePath:M,offset:x}:void 0}({json:e,selection:r,deltaY:o,items:s}):function(d){for(var v,{json:f,items:g,selection:m,deltaY:b}=d,j=Xo(f,m),k=g.findIndex(V=>Xt(V.path,j)),C=0,A=k,M=()=>{var V;return(V=g[A+1])===null||V===void 0?void 0:V.height};M()!==void 0&&Math.abs(b)>C+M()/2;)C+=M(),A+=1;var x=nn(j),I=Le(f,x),F=Array.isArray(I)?A:A+1,B=(v=g[F])===null||v===void 0?void 0:v.path,S=A-k;return B?{beforePath:B,offset:S}:{append:!0,offset:S}}({json:e,selection:r,deltaY:o,items:s});if(!a||a.offset===0)return{operations:void 0,updatedSelection:void 0,offset:0};var i=function(d,v,f){if(!v)return[];var g="beforePath"in f?f.beforePath:void 0,m="append"in f?f.append:void 0,b=nn(We(v)),j=Le(d,b);if(!(m||g&&ra(g,b)&&g.length>b.length))return[];var k=ko(d,v),C=Xo(d,v),A=Vt(k),M=Vt(C),x=g?g[b.length]:void 0;if(!Sr(j)){if(xr(j)){var I=Pr(A),F=Pr(M),B=x!==void 0?Pr(x):j.length;return Qp(F-I+1,B<I?te=>({op:"move",from:St(b.concat(String(I+te))),path:St(b.concat(String(B+te)))}):()=>({op:"move",from:St(b.concat(String(I))),path:St(b.concat(String(B)))}))}throw new Error("Cannot create move operations: parent must be an Object or Array")}var S=Object.keys(j),V=S.indexOf(A),G=S.indexOf(M),H=m?S.length:x!==void 0?S.indexOf(x):-1;return V!==-1&&G!==-1&&H!==-1?H>V?[...S.slice(V,G+1),...S.slice(H,S.length)].map(te=>Ia(b,te)):[...S.slice(H,V),...S.slice(G+1,S.length)].map(te=>Ia(b,te)):[]}(e,r,a),l=nn(ko(e,r)),c=Le(e,l);if(Array.isArray(c)){var u=function(d){var v,f,{items:g,json:m,selection:b,offset:j}=d,k=ko(m,b),C=Xo(m,b),A=g.findIndex(F=>Xt(F.path,k)),M=g.findIndex(F=>Xt(F.path,C)),x=(v=g[A+j])===null||v===void 0?void 0:v.path,I=(f=g[M+j])===null||f===void 0?void 0:f.path;return Ar(x,I)}({items:s,json:e,selection:r,offset:a.offset});return{operations:i,updatedSelection:u,offset:a.offset}}return{operations:i,updatedSelection:void 0,offset:a.offset}}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);var jj=L('<button type="button"><!></button>');function ds(t,e){et(e,!1);var r=P(),o=ya("absolute-popup"),s=h(e,"validationError",8),a=h(e,"onExpand",8);J(()=>z(s()),()=>{p(r,Bf(s())&&s().isChildError?"Contains invalid data":s().message)}),mn(),bt();var i=jj();en(O(i),{data:Aa}),Or(()=>ie("click",i,function(){for(var l,c=arguments.length,u=new Array(c),d=0;d<c;d++)u[d]=arguments[d];(l=a())===null||l===void 0||l.apply(this,u)})),qr(i,(l,c)=>ys==null?void 0:ys(l,c),()=>me({text:n(r)},o)),be(()=>{var l;return wt(i,1,"jse-validation-".concat((l=s().severity)!==null&&l!==void 0?l:""),"svelte-1a8aobl")}),R(t,i),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-oawf7x {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-oawf7x:hover {
  opacity: 0.8;
}

.jse-meta.svelte-oawf7x,
.jse-separator.svelte-oawf7x,
.jse-index.svelte-oawf7x,
.jse-bracket.svelte-oawf7x {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-oawf7x {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-oawf7x {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-oawf7x {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-oawf7x {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-oawf7x {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-oawf7x {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-oawf7x > .jse-contents-outer:where(.svelte-oawf7x) > .jse-contents:where(.svelte-oawf7x) {
  padding-left: 0;
}
.jse-json-node.svelte-oawf7x .jse-props:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-items:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header-outer:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) .jse-meta:where(.svelte-oawf7x) > .jse-meta-inner:where(.svelte-oawf7x) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-oawf7x .jse-contents-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) .jse-value-outer:where(.svelte-oawf7x) {
  display: inline-flex;
}
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area:where(.svelte-oawf7x) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-inside:where(.svelte-oawf7x) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-after:where(.svelte-oawf7x) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-oawf7x .jse-context-menu-pointer-anchor:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-insert-area:where(.svelte-oawf7x) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-hovered:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-oawf7x .jse-key-outer.jse-selected-key:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-oawf7x {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-selected:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);var Hn=Rl(()=>bj),xj=L('<div class="jse-separator svelte-oawf7x">:</div>'),yj=L('<div class="jse-bracket svelte-oawf7x">[</div> <!> &nbsp;',1),wj=L('<div class="jse-bracket svelte-oawf7x">[</div> <!> <div class="jse-bracket svelte-oawf7x">]</div>',1),kj=L('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),Sj=L('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>'),Cj=L('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),zj=L('<div data-type="insert-selection-area-inside"><!></div>'),Oj=L('<div slot="identifier" class="jse-identifier svelte-oawf7x"><div class="jse-index svelte-oawf7x"> </div></div>'),Mj=L("<!> <!>",1),Pj=L('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),Rj=L('<div class="jse-items svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><span class="jse-bracket svelte-oawf7x">]</span></div> <!></div>',1),Aj=L('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x"><div class="jse-meta-inner svelte-oawf7x" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>',1),Ej=L('<div class="jse-separator svelte-oawf7x">:</div>'),Tj=L('<div class="jse-bracket jse-expanded svelte-oawf7x">&lbrace;</div>'),Nj=L('<div class="jse-bracket svelte-oawf7x">&lbrace;</div> <!> <div class="jse-bracket svelte-oawf7x">&rbrace;</div>',1),qj=L('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),Ij=L('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>'),Uj=L('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),Dj=L('<div data-type="insert-selection-area-inside"><!></div>'),Jj=L('<div slot="identifier"><!></div>'),Bj=L('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),Lj=L('<div class="jse-props svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><div class="jse-bracket svelte-oawf7x">&rbrace;</div></div> <!></div>',1),Fj=L('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x" data-type="selectable-value"><div class="jse-meta-inner svelte-oawf7x"><!></div></div> <!></div> <!> <!></div> <!>',1),_j=L('<div class="jse-separator svelte-oawf7x">:</div>'),Wj=L('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>'),Vj=L('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>'),$j=L('<div class="jse-contents-outer svelte-oawf7x"><div class="jse-contents svelte-oawf7x"><!> <!> <div class="jse-value-outer svelte-oawf7x"><!></div> <!></div> <!> <!></div>'),Hj=L('<div data-type="insert-selection-area-after"><!></div>'),Qj=L('<div role="treeitem" tabindex="-1"><!> <!></div>');function ou(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=h(e,"pointer",9),a=h(e,"value",9),i=h(e,"state",9),l=h(e,"validationErrors",9),c=h(e,"searchResults",9),u=h(e,"selection",9),d=h(e,"context",9),v=h(e,"onDragSelectionStart",9),f=wr("jsoneditor:JSONNode"),g=P(void 0,!0),m=void 0,b=P(void 0,!0),j=P(void 0,!0),k=P(void 0,!0),C=P(void 0,!0),A=P(void 0,!0),M=P(void 0,!0),x=P(void 0,!0);function I(Q){Q.stopPropagation();var N=Ru(Q);d().onExpand(n(j),!n(k),N)}function F(){d().onExpand(n(j),!0)}function B(Q,N){var ee=Mi(n(j),Object.keys(a()),Q,N);return d().onPatch(ee),Vt(So(ee[0].path))}function S(Q){d().onDrag(Q)}function V(Q){Hn().selecting&&(Hn(Hn().selecting=!1),Q.stopPropagation()),d().onDragEnd(),document.removeEventListener("mousemove",S,!0),document.removeEventListener("mouseup",V)}function G(){var Q;return((Q=d().findElement([]))===null||Q===void 0||(Q=Q.getBoundingClientRect())===null||Q===void 0?void 0:Q.top)||0}function H(Q,N){var ee=G()-Q.initialContentTop;return N.clientY-Q.initialClientY-ee}function te(Q){if(!d().readOnly&&u()){var N=nn(We(u()));if(Xt(n(j),N)){var ee=function($,E){var jt=[];function Ke(Ie){var Ae=n(j).concat(Ie),De=d().findElement(Ae);De!==void 0&&jt.push({path:Ae,height:De.clientHeight})}if(Array.isArray(a())){var lt=d().getJson();if(lt===void 0)return;var st=ko(lt,$),je=Xo(lt,$),Ge=parseInt(Vt(st),10),Mt=parseInt(Vt(je),10),Be=E.find(Ie=>Ge>=Ie.start&&Mt<=Ie.end);if(!Be)return;var{start:It,end:ge}=Be;hf(It,Math.min(a().length,ge),Ie=>Ke(String(Ie)))}else Object.keys(a()).forEach(Ke);return jt}(u(),n(A)||is);if(f("dragSelectionStart",{selection:u(),items:ee}),ee){var T=d().getJson();if(T!==void 0){var pe=ko(T,u()),Y=ee.findIndex($=>Xt($.path,pe)),{offset:Me}=yc({json:T,selection:d().getSelection(),deltaY:0,items:ee});p(b,{initialTarget:Q.target,initialClientY:Q.clientY,initialContentTop:G(),selectionStartIndex:Y,selectionItemsCount:na(T,u()).length,items:ee,offset:Me,didMoveItems:!1}),Hn(Hn().dragging=!0),document.addEventListener("mousemove",ye,!0),document.addEventListener("mouseup",ne)}}else f("Cannot drag the current selection (probably spread over multiple sections)")}else v()(Q)}}function ye(Q){if(n(b)){var N=d().getJson();if(N===void 0)return;var ee=H(n(b),Q),{offset:T}=yc({json:N,selection:d().getSelection(),deltaY:ee,items:n(b).items});T!==n(b).offset&&(f("drag selection",T,ee),p(b,me(me({},n(b)),{},{offset:T,didMoveItems:!0})))}}function ne(Q){if(n(b)){var N=d().getJson();if(N===void 0)return;var ee=H(n(b),Q),{operations:T,updatedSelection:pe}=yc({json:N,selection:d().getSelection(),deltaY:ee,items:n(b).items});if(T)d().onPatch(T,($,E)=>({state:E,selection:pe??u()}));else if(Q.target===n(b).initialTarget&&!n(b).didMoveItems){var Y=ic(Q.target),Me=Rf(Q.target);Me&&d().onSelect(Hd(Y,Me))}p(b,void 0),Hn(Hn().dragging=!1),document.removeEventListener("mousemove",ye,!0),document.removeEventListener("mouseup",ne)}}function ve(Q){Q.shiftKey||(Q.stopPropagation(),Q.preventDefault(),d().onSelect(Io(n(j))))}function Ee(Q){Q.shiftKey||(Q.stopPropagation(),Q.preventDefault(),d().onSelect(Mo(n(j))))}function Re(Q){d().onSelect(Io(n(j))),d().onContextMenu(Q)}function fe(Q){d().onSelect(Mo(n(j))),d().onContextMenu(Q)}J(()=>z(s()),()=>{p(j,So(s()))}),J(()=>z(s()),()=>{p(r,encodeURIComponent(s()))}),J(()=>z(i()),()=>{p(k,!!xa(i())&&i().expanded)}),J(()=>(z(a()),z(i())),()=>{p(C,Go(a(),i(),[]))}),J(()=>z(i()),()=>{p(A,Mr(i())?i().visibleSections:void 0)}),J(()=>z(l()),()=>{var Q;p(M,(Q=l())===null||Q===void 0?void 0:Q.validationError)}),J(()=>(z(d()),z(u()),n(j)),()=>{p(x,di(d().getJson(),u(),n(j)))}),J(()=>n(j),()=>{p(o,n(j).length===0)}),mn(),bt(!0);var Ce,we,Ue=Qj(),de=O(Ue),re=Q=>{var N=Aj(),ee=ot(N),T=O(ee),pe=O(T),Y=O(pe),Me=D=>{en(D,{data:ma})},$=D=>{en(D,{data:ei})};K(Y,D=>{n(k)?D(Me):D($,!1)});var E=q(pe,2);ar(E,e,"identifier",{},null);var jt=q(E,2),Ke=D=>{R(D,xj())};K(jt,D=>{n(o)||D(Ke)});var lt=q(jt,2),st=O(lt),je=O(st),Ge=D=>{var Ye=yj();Yi(q(ot(Ye),2),{children:(Ze,Cn)=>{var Je=kr();be(()=>{var At,Ut;return it(Je,"".concat((At=a().length)!==null&&At!==void 0?At:"",`
                `).concat((Ut=a().length===1?"item":"items")!==null&&Ut!==void 0?Ut:""))}),R(Ze,Je)},$$slots:{default:!0}}),R(D,Ye)},Mt=D=>{var Ye=wj();Yi(q(ot(Ye),2),{onclick:F,children:(Ze,Cn)=>{var Je=kr();be(()=>{var At,Ut;return it(Je,"".concat((At=a().length)!==null&&At!==void 0?At:"",`
                `).concat((Ut=a().length===1?"item":"items")!==null&&Ut!==void 0?Ut:""))}),R(Ze,Je)},$$slots:{default:!0}}),R(D,Ye)};K(je,D=>{n(k)?D(Ge):D(Mt,!1)});var Be=q(lt,2),It=D=>{var Ye=kj();sa(O(Ye),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),R(D,Ye)};K(Be,D=>{!d().readOnly&&n(x)&&u()&&(yn(u())||Fn(u()))&&!Br(u())&&Xt(We(u()),n(j))&&D(It)});var ge=q(T,2),Ie=D=>{ds(D,{get validationError(){return n(M)},onExpand:F})};K(ge,D=>{!n(M)||n(k)&&n(M).isChildError||D(Ie)});var Ae=q(ge,2),De=D=>{var Ye=Sj();ie("click",Ye,ve),R(D,Ye)},Bt=D=>{var Ye=Cj();ie("click",Ye,Ee),R(D,Ye)};K(Ae,D=>{n(k)?D(De):D(Bt,!1)});var ht=q(ee,2),$e=D=>{var Ye=Rj(),Ze=ot(Ye),Cn=O(Ze),Je=un=>{var Dt,_n,Yt=zj();gn(Yt,"title",cc);var pn=O(Yt),rn=ae(()=>n(x)&&zr(u()));sa(pn,{insert:!0,get selected(){return n(rn)},onContextMenu:Re}),be(Lt=>{Dt=wt(Yt,1,"jse-insert-area jse-inside svelte-oawf7x",null,Dt,Lt),_n=po(Yt,"",_n,{"--level":n(j).length+1})},[()=>({"jse-hovered":n(g)===Ws,"jse-selected":n(x)&&zr(u())})],ae),R(un,Yt)};K(Cn,un=>{!d().readOnly&&(n(g)===Ws||n(x)&&zr(u()))&&un(Je)}),sr(q(Cn,2),1,()=>n(A)||is,vr,(un,Dt,_n)=>{var Yt=Mj(),pn=ot(Yt);sr(pn,1,()=>function(xt,an,rt){var Ft=an.start,$t=Math.min(an.end,xt.length),Rn=pv(Ft,$t);return rt&&rt.offset!==0?Nd(Rn,rt.selectionStartIndex,rt.selectionItemsCount,rt.offset).map((Yn,bn)=>({index:Yn,gutterIndex:bn})):Rn.map(Yn=>({index:Yn,gutterIndex:Yn}))}(a(),n(Dt),n(b)),xt=>xt.index,(xt,an)=>{var rt=tr(),Ft=ae(()=>Mr(l())?l().items[n(an).index]:void 0),$t=ae(()=>Qd(d().getJson(),u(),n(j).concat(String(n(an).index)))),Rn=ot(rt),Yn=ae(()=>td(s(),n(an).index)),bn=ae(()=>Mr(i())?i().items[n(an).index]:void 0),ur=ae(()=>Mr(c())?c().items[n(an).index]:void 0);ou(Rn,{get value(){return a()[n(an).index]},get pointer(){return n(Yn)},get state(){return n(bn)},get validationErrors(){return n(Ft)},get searchResults(){return n(ur)},get selection(){return n($t)},get context(){return d()},onDragSelectionStart:te,$$slots:{identifier:(nr,lr)=>{var gr=Oj(),dr=O(gr),Nn=O(dr);be(()=>it(Nn,n(an).gutterIndex)),R(nr,gr)}}}),R(xt,rt)});var rn=q(pn,2),Lt=xt=>{var an=ae(()=>n(A)||is);fj(xt,{get visibleSections(){return n(an)},sectionIndex:_n,get total(){return a().length},get path(){return n(j)},get onExpandSection(){return d().onExpandSection},get selection(){return u()},get context(){return d()}})};K(rn,xt=>{n(Dt).end<a().length&&xt(Lt)}),R(un,Yt)});var At=q(Ze,2),Ut=q(O(At),2),ir=un=>{var Dt=Pj();ie("click",Dt,Ee),R(un,Dt)};K(Ut,un=>{n(o)||un(ir)}),R(D,Ye)};K(ht,D=>{n(k)&&D($e)}),ie("click",pe,I),R(Q,N)},ce=(Q,N)=>{var ee=pe=>{var Y=Fj(),Me=ot(Y),$=O(Me),E=O($),jt=O(E),Ke=Je=>{en(Je,{data:ma})},lt=Je=>{en(Je,{data:ei})};K(jt,Je=>{n(k)?Je(Ke):Je(lt,!1)});var st=q(E,2);ar(st,e,"identifier",{},null);var je=q(st,2),Ge=Je=>{R(Je,Ej())};K(je,Je=>{n(o)||Je(Ge)});var Mt=q(je,2),Be=O(Mt),It=O(Be),ge=Je=>{R(Je,Tj())},Ie=Je=>{var At=Nj();Yi(q(ot(At),2),{onclick:F,children:(Ut,ir)=>{var un=kr();be((Dt,_n)=>it(un,"".concat(Dt??"",`
                `).concat(_n??"")),[()=>Object.keys(a()).length,()=>Object.keys(a()).length===1?"prop":"props"],ae),R(Ut,un)},$$slots:{default:!0}}),R(Je,At)};K(It,Je=>{n(k)?Je(ge):Je(Ie,!1)});var Ae=q(Mt,2),De=Je=>{var At=qj();sa(O(At),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),R(Je,At)};K(Ae,Je=>{!d().readOnly&&n(x)&&u()&&(yn(u())||Fn(u()))&&!Br(u())&&Xt(We(u()),n(j))&&Je(De)});var Bt=q($,2),ht=Je=>{ds(Je,{get validationError(){return n(M)},onExpand:F})};K(Bt,Je=>{!n(M)||n(k)&&n(M).isChildError||Je(ht)});var $e=q(Bt,2),D=Je=>{var At=Ij();ie("click",At,ve),R(Je,At)},Ye=(Je,At)=>{var Ut=ir=>{var un=Uj();ie("click",un,Ee),R(ir,un)};K(Je,ir=>{n(o)||ir(Ut)},At)};K($e,Je=>{n(k)?Je(D):Je(Ye,!1)});var Ze=q(Me,2),Cn=Je=>{var At=Lj(),Ut=ot(At),ir=O(Ut),un=pn=>{var rn,Lt,xt=Dj();gn(xt,"title",cc);var an=O(xt),rt=ae(()=>n(x)&&zr(u()));sa(an,{insert:!0,get selected(){return n(rt)},onContextMenu:Re}),be(Ft=>{rn=wt(xt,1,"jse-insert-area jse-inside svelte-oawf7x",null,rn,Ft),Lt=po(xt,"",Lt,{"--level":n(j).length+1})},[()=>({"jse-hovered":n(g)===Ws,"jse-selected":n(x)&&zr(u())})],ae),R(pn,xt)};K(ir,pn=>{!d().readOnly&&(n(g)===Ws||n(x)&&zr(u()))&&pn(un)}),sr(q(ir,2),1,()=>function(pn,rn){var Lt=Object.keys(pn);return rn&&rn.offset!==0?Nd(Lt,rn.selectionStartIndex,rn.selectionItemsCount,rn.offset):Lt}(a(),n(b)),vr,(pn,rn)=>{var Lt=tr(),xt=ae(()=>td(s(),n(rn))),an=ae(()=>lo(c())?c().properties[n(rn)]:void 0),rt=ae(()=>lo(l())?l().properties[n(rn)]:void 0),Ft=ae(()=>n(j).concat(n(rn))),$t=ae(()=>Qd(d().getJson(),u(),n(Ft))),Rn=ot(Lt),Yn=ae(()=>lo(i())?i().properties[n(rn)]:void 0);ou(Rn,{get value(){return a()[n(rn)]},get pointer(){return n(xt)},get state(){return n(Yn)},get validationErrors(){return n(rt)},get searchResults(){return n(an)},get selection(){return n($t)},get context(){return d()},onDragSelectionStart:te,$$slots:{identifier:(bn,ur)=>{var nr,lr=Jj(),gr=O(lr),dr=ae(()=>{return Nn=n(an),(qn=Wc(Nn)?Nn.searchResults.filter(Xn=>Xn.field===io.key):void 0)&&qn.length>0?qn:void 0;var Nn,qn});(function(Nn,qn){et(qn,!1);var Xn=P(void 0,!0),le=P(void 0,!0),Kt=h(qn,"pointer",9),W=h(qn,"key",9),ke=h(qn,"selection",9),He=h(qn,"searchResultItems",9),Ct=h(qn,"onUpdateKey",9),Ve=h(qn,"context",9),Et=P(void 0,!0);function dn(Jt){n(le)||Ve().readOnly||(Jt.preventDefault(),Ve().onSelect(Dl(n(Et))))}function zt(Jt,Tt){var qt=Ct()(W(),Ve().normalization.unescapeValue(Jt)),Wn=nn(n(Et)).concat(qt);Ve().onSelect(Tt===Zo.nextInside?Wt(Wn):qo(Wn)),Tt!==Zo.self&&Ve().focus()}function hn(){Ve().onSelect(qo(n(Et))),Ve().focus()}J(()=>z(Kt()),()=>{p(Et,So(Kt()))}),J(()=>(z(ke()),n(Et)),()=>{p(Xn,jr(ke())&&Xt(ke().path,n(Et)))}),J(()=>(n(Xn),z(ke())),()=>{p(le,n(Xn)&&Br(ke()))}),mn(),bt(!0);var ct=gj(),Pt=ot(ct),nt=Jt=>{var Tt=ae(()=>Ve().normalization.escapeValue(W())),qt=ae(()=>Br(ke())?ke().initialValue:void 0);Yf(Jt,{get value(){return n(Tt)},get initialValue(){return n(qt)},label:"Edit key",shortText:!0,onChange:zt,onCancel:hn,get onFind(){return Ve().onFind}})},ft=Jt=>{var Tt,qt=hj(),Wn=O(qt),U=he=>{var Rt=ae(()=>Ve().normalization.escapeValue(W()));rp(he,{get text(){return n(Rt)},get searchResultItems(){return He()}})},X=he=>{var Rt=kr();be(sn=>it(Rt,sn),[()=>Tl(Ve().normalization.escapeValue(W()))],ae),R(he,Rt)};K(Wn,he=>{He()?he(U):he(X,!1)}),be(he=>Tt=wt(qt,1,"jse-key svelte-2iqnqn",null,Tt,he),[()=>({"jse-empty":W()===""})],ae),ie("dblclick",qt,dn),R(Jt,qt)};K(Pt,Jt=>{!Ve().readOnly&&n(le)?Jt(nt):Jt(ft,!1)});var zn=q(Pt,2),An=Jt=>{sa(Jt,{selected:!0,get onContextMenu(){return Ve().onContextMenu}})};K(zn,Jt=>{Ve().readOnly||!n(Xn)||n(le)||Jt(An)}),R(Nn,ct),tt()})(gr,{get pointer(){return n(xt)},get key(){return n(rn)},get selection(){return n($t)},get searchResultItems(){return n(dr)},get context(){return d()},onUpdateKey:B}),be(Nn=>nr=wt(lr,1,"jse-key-outer svelte-oawf7x",null,nr,Nn),[()=>({"jse-selected-key":jr(n($t))&&Xt(n($t).path,n(Ft))})],ae),R(bn,lr)}}}),R(pn,Lt)});var Dt=q(Ut,2),_n=q(O(Dt),2),Yt=pn=>{var rn=Bj();ie("click",rn,Ee),R(pn,rn)};K(_n,pn=>{n(o)||pn(Yt)}),R(Je,At)};K(Ze,Je=>{n(k)&&Je(Cn)}),ie("click",E,I),R(pe,Y)},T=pe=>{var Y=$j(),Me=O(Y),$=O(Me);ar($,e,"identifier",{},null);var E=q($,2),jt=Ae=>{R(Ae,_j())};K(E,Ae=>{n(o)||Ae(jt)});var Ke=q(E,2),lt=O(Ke),st=ae(()=>n(x)?u():void 0),je=ae(()=>{return Ae=c(),(De=Wc(Ae)?Ae.searchResults.filter(Bt=>Bt.field===io.value):void 0)&&De.length>0?De:void 0;var Ae,De});kp(lt,{get path(){return n(j)},get value(){return a()},get enforceString(){return n(C)},get selection(){return n(st)},get searchResultItems(){return n(je)},get context(){return d()}});var Ge=q(Ke,2),Mt=Ae=>{var De=Wj();sa(O(De),{get root(){return n(o)},selected:!0,get onContextMenu(){return d().onContextMenu}}),R(Ae,De)};K(Ge,Ae=>{!d().readOnly&&n(x)&&u()&&(yn(u())||Fn(u()))&&!Br(u())&&Xt(We(u()),n(j))&&Ae(Mt)});var Be=q(Me,2),It=Ae=>{ds(Ae,{get validationError(){return n(M)},onExpand:F})};K(Be,Ae=>{n(M)&&Ae(It)});var ge=q(Be,2),Ie=Ae=>{var De=Vj();ie("click",De,Ee),R(Ae,De)};K(ge,Ae=>{n(o)||Ae(Ie)}),R(pe,Y)};K(Q,pe=>{fn(a())?pe(ee):pe(T,!1)},N)};K(de,Q=>{Array.isArray(a())?Q(re):Q(ce,!1)});var at=q(de,2),Ot=Q=>{var N,ee=Hj();gn(ee,"title",cc);var T=O(ee),pe=ae(()=>n(x)&&Kr(u()));sa(T,{insert:!0,get selected(){return n(pe)},onContextMenu:fe}),be(Y=>N=wt(ee,1,"jse-insert-area jse-after svelte-oawf7x",null,N,Y),[()=>({"jse-hovered":n(g)===uc,"jse-selected":n(x)&&Kr(u())})],ae),R(Q,ee)};K(at,Q=>{!d().readOnly&&(n(g)===uc||n(x)&&Kr(u()))&&Q(Ot)}),be((Q,N)=>{Ce=wt(Ue,1,Q,"svelte-oawf7x",Ce,N),gn(Ue,"data-path",n(r)),gn(Ue,"aria-selected",n(x)),we=po(Ue,"",we,{"--level":n(j).length})},[()=>ja(Es("jse-json-node",{"jse-expanded":n(k)},d().onClassName(n(j),a()))),()=>({"jse-root":n(o),"jse-selected":n(x)&&Fn(u()),"jse-selected-value":n(x)&&yn(u()),"jse-readonly":d().readOnly,"jse-hovered":n(g)===Ud})],ae),ie("mousedown",Ue,function(Q){if((Q.buttons===1||Q.buttons===2)&&!((N=Q.target).nodeName==="DIV"&&N.contentEditable==="true"||Q.buttons===1&&Mf(Q.target,"BUTTON"))){var N;Q.stopPropagation(),Q.preventDefault(),d().focus(),document.addEventListener("mousemove",S,!0),document.addEventListener("mouseup",V);var ee=ic(Q.target),T=d().getJson(),pe=d().getDocumentState();if(!u()||ee===kn.after||ee===kn.inside||u().type!==ee&&u().type!==kn.multi||!di(T,u(),n(j)))if(Hn(Hn().selecting=!0),Hn(Hn().selectionAnchor=n(j)),Hn(Hn().selectionAnchorType=ee),Hn(Hn().selectionFocus=n(j)),Q.shiftKey){var Y=d().getSelection();Y&&d().onSelect(Ar(ga(Y),n(j)))}else if(ee===kn.multi)if(n(o)&&Q.target.hasAttribute("data-path")){var Me=Vt(Vf(a(),pe));d().onSelect(Yc(Me))}else d().onSelect(Ar(n(j),n(j)));else T!==void 0&&d().onSelect(Hd(ee,n(j)));else Q.button===0&&v()(Q)}}),ie("mousemove",Ue,function(Q){if(Hn().selecting){Q.preventDefault(),Q.stopPropagation(),Hn().selectionFocus===void 0&&window.getSelection&&window.getSelection().empty();var N=ic(Q.target);Xt(n(j),Hn().selectionFocus)&&N===Hn().selectionAnchorType||(Hn(Hn().selectionFocus=n(j)),Hn(Hn().selectionAnchorType=N),d().onSelect(Ar(Hn().selectionAnchor||Hn().selectionFocus,Hn().selectionFocus)))}}),ie("mouseover",Ue,function(Q){Hn().selecting||Hn().dragging||(Q.stopPropagation(),da(Q.target,"data-type","selectable-value")?p(g,Ud):da(Q.target,"data-type","selectable-key")?p(g,void 0):da(Q.target,"data-type","insert-selection-area-inside")?p(g,Ws):da(Q.target,"data-type","insert-selection-area-after")&&p(g,uc),clearTimeout(m))}),ie("mouseout",Ue,function(Q){Q.stopPropagation(),m=window.setTimeout(()=>p(g,void 0))}),R(t,Ue),tt()}var Yj={prefix:"fas",iconName:"jsoneditor-expand",icon:[512,512,[],"","M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]},Kj={prefix:"fas",iconName:"jsoneditor-collapse",icon:[512,512,[],"","m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]},cv={prefix:"fas",iconName:"jsoneditor-format",icon:[512,512,[],"","M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]},Zj={prefix:"fas",iconName:"jsoneditor-compact",icon:[512,512,[],"","M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]};function Gj(t,e){t.stopPropagation(),e.onCreateObject()}function Xj(t,e){t.stopPropagation(),e.onCreateArray()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1eamlhk {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-before:where(.svelte-1eamlhk) {
  flex: 1;
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-after:where(.svelte-1eamlhk) {
  flex: 2;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) .jse-welcome-info:where(.svelte-1eamlhk) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);var ex=(t,e)=>e.onClick(),tx=L('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>',1),nx=L('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');function au(t,e){var r=typeof t=="string"?t.toLowerCase():t,o=typeof e=="string"?e.toLowerCase():e;return kg(r,o)}function Sp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,s=Le(t,e);if(xr(s)){if(r===void 0)throw new Error("Cannot sort: no property selected by which to sort the array");return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,u=function(v,f){return function(g,m){var b=Le(g,v),j=Le(m,v);return b===void 0?f:j===void 0?-f:typeof b!="string"&&typeof j!="string"?b>j?f:b<j?-f:0:f*au(b,j)}}(l,c),d=Le(a,i);return[{op:"replace",path:St(i),value:d.slice(0).sort(u)}]}(t,e,r,o)}if(fn(s))return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=Le(a,i),u=Object.keys(c).slice();u.sort((v,f)=>l*au(v,f));var d={};return u.forEach(v=>d[v]=c[v]),[{op:"replace",path:St(i),value:d}]}(t,e,o);throw new Error("Cannot sort: no array or object")}yi(["click"]);vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-2nnd2m {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):focus, .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-2nnd2m) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);var rx=L('<button type="button"> </button>'),ox=L('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>'),ax=L('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');function sx(t,e){et(e,!1);var r=h(e,"items",9),o=h(e,"selectedItem",9),s=h(e,"onSelect",9);bt(!0);var a=ax(),i=O(a);sr(i,1,()=>gf(r(),100),u=>u,(u,d)=>{var v,f=rx(),g=O(f);be((m,b,j)=>{v=wt(f,1,"jse-navigation-bar-dropdown-item svelte-2nnd2m",null,v,m),gn(f,"title",b),it(g,j)},[()=>({"jse-selected":n(d)===o()}),()=>n(d).toString(),()=>oi(n(d).toString(),30)],ae),ie("click",f,_o(()=>s()(n(d)))),R(u,f)});var l=q(i,2),c=u=>{var d=ox();gn(d,"title","Limited to ".concat(100," items")),R(u,d)};K(l,u=>{r().length>100&&u(c)}),R(t,a),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-752ro1 {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):focus, .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-752ro1) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-752ro1) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-752ro1:last-child {
  padding-right: var(--jse-padding, 10px);
}`);var ix=L('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>'),lx=L('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button"><!></button> <!></div>');function uv(t,e){et(e,!1);var r,o=P(void 0,!0),s=P(void 0,!0),{openAbsolutePopup:a,closeAbsolutePopup:i}=ya("absolute-popup"),l=h(e,"path",9),c=h(e,"index",9),u=h(e,"onSelect",9),d=h(e,"getItems",9),v=P(void 0,!0),f=P(!1,!0);function g(A){i(r),u()(n(o).concat(A))}J(()=>(z(l()),z(c())),()=>{p(o,l().slice(0,c()))}),J(()=>(z(l()),z(c())),()=>{p(s,l()[c()])}),mn(),bt(!0);var m,b=lx(),j=O(b);en(O(j),{data:xv});var k=q(j,2),C=A=>{var M=ix(),x=O(M);be(()=>it(x,n(s))),ie("click",M,()=>g(n(s))),R(A,M)};K(k,A=>{n(s)!==void 0&&A(C)}),Qn(b,A=>p(v,A),()=>n(v)),be(A=>m=wt(j,1,"jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1",null,m,A),[()=>({"jse-open":n(f)})],ae),ie("click",j,function(){if(n(v)){p(f,!0);var A={items:d()(n(o)),selectedItem:n(s),onSelect:g};r=a(sx,A,{anchor:n(v),closeOnOuterClick:!0,onClose:()=>{p(f,!1)}})}}),R(t,b),tt()}function $u(t){var e,r;if(navigator.clipboard)return navigator.clipboard.writeText(t);if((e=(r=document).queryCommandSupported)!==null&&e!==void 0&&e.call(r,"copy")){var o=document.createElement("textarea");o.value=t,o.style.position="fixed",o.style.opacity="0",document.body.appendChild(o),o.select();try{document.execCommand("copy")}catch(s){console.error(s)}finally{document.body.removeChild(o)}return Promise.resolve()}return console.error("Copy failed."),Promise.resolve()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-zc2wx7 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button:where(.svelte-zc2wx7) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-copy.copied:where(.svelte-zc2wx7) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-validation-error:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 .jse-copied-text:where(.svelte-zc2wx7) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);var cx=L('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>'),ux=L('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>'),dx=L('<div><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');function vx(t,e){et(e,!1);var r=P(),o=ya("absolute-popup"),s=h(e,"path",8),a=h(e,"pathParser",8),i=h(e,"onChange",8),l=h(e,"onClose",8),c=h(e,"onError",8),u=h(e,"pathExists",8),d=P(),v=P(),f=P(!1),g=void 0,m=P(!1);function b(){n(d).focus()}function j(V){try{var G=a().parse(V);return function(H){if(!u()(H))throw new Error("Path does not exist in current document")}(G),{path:G,error:void 0}}catch(H){return{path:void 0,error:H}}}Er(()=>{b()}),co(()=>{clearTimeout(g)}),J(()=>(z(a()),z(s())),()=>{p(v,a().stringify(s()))}),J(()=>(n(f),n(v)),()=>{p(r,n(f)?j(n(v)).error:void 0)}),mn(),bt();var k,C=dx(),A=O(C);Qn(A,V=>p(d,V),()=>n(d));var M=q(A,2),x=V=>{var G=cx();en(O(G),{data:Aa}),qr(G,(H,te)=>ys==null?void 0:ys(H,te),()=>me({text:String(n(r)||"")},o)),R(V,G)};K(M,V=>{n(r)&&V(x)});var I=q(M,2),F=V=>{R(V,ux())};K(I,V=>{n(m)&&V(F)});var B,S=q(I,2);en(O(S),{data:la}),be((V,G)=>{k=wt(C,1,"jse-navigation-bar-path-editor svelte-zc2wx7",null,k,V),Na(A,n(v)),B=wt(S,1,"jse-navigation-bar-copy svelte-zc2wx7",null,B,G)},[()=>({error:n(r)}),()=>({copied:n(m)})],ae),ie("keydown",A,_o(function(V){var G=No(V);if(G==="Escape"&&(V.preventDefault(),l()()),G==="Enter"){V.preventDefault(),p(f,!0);var H=j(n(v));H.path!==void 0?i()(H.path):c()(H.error)}})),ie("input",A,function(V){p(v,V.currentTarget.value)}),ie("click",S,function(){$u(n(v)),p(m,!0),g=window.setTimeout(()=>p(m,!1),1e3),b()}),R(t,C),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-xs03gj {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.flex:where(.svelte-xs03gj) {
  flex: 1;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):focus, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):hover, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.editing:where(.svelte-xs03gj) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) .jse-navigation-bar-space:where(.svelte-xs03gj) {
  flex: 1;
  text-align: left;
}`);var fx=L("<!> <!>",1),px=L('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');function hx(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=wr("jsoneditor:NavigationBar"),a=h(e,"json",9),i=h(e,"selection",9),l=h(e,"onSelect",9),c=h(e,"onError",9),u=h(e,"pathParser",9),d=P(void 0,!0),v=P(!1,!0);function f(G){s("get items for path",G);var H=Le(a(),G);if(Array.isArray(H))return pv(0,H.length).map(String);if(fn(H)){var te=Object.keys(H).slice(0);return te.sort(au),te}return[]}function g(G){return ca(a(),G)}function m(G){s("select path",JSON.stringify(G)),l()(Ar(G,G))}function b(){p(v,!1)}function j(G){b(),m(G)}J(()=>(z(i()),We),()=>{p(r,i()?We(i()):[])}),J(()=>(z(a()),n(r)),()=>{p(o,cr(Le(a(),n(r))))}),J(()=>n(r),()=>{n(r),setTimeout(()=>{if(n(d)&&n(d).scrollTo){var G=n(d).scrollWidth-n(d).clientWidth;G>0&&(s("scrollTo ",G),n(d).scrollTo({left:G,behavior:"smooth"}))}})}),mn(),bt(!0);var k=px(),C=O(k),A=G=>{var H=fx(),te=ot(H);sr(te,1,()=>n(r),vr,(ve,Ee,Re)=>{uv(ve,{getItems:f,get path(){return n(r)},index:Re,onSelect:m})});var ye=q(te,2),ne=ve=>{uv(ve,{getItems:f,get path(){return n(r)},get index(){return n(r).length},onSelect:m})};K(ye,ve=>{n(o)&&ve(ne)}),R(G,H)},M=G=>{vx(G,{get path(){return n(r)},onClose:b,onChange:j,get onError(){return c()},pathExists:g,get pathParser(){return u()}})};K(C,G=>{n(v)?G(M,!1):G(A)});var x,I=q(C,2),F=O(I),B=O(F),S=q(F,2),V=ae(()=>n(v)?lh:ch);en(S,{get data(){return n(V)}}),Qn(k,G=>p(d,G),()=>n(d)),be((G,H)=>{x=wt(I,1,"jse-navigation-bar-edit svelte-xs03gj",null,x,G),gn(I,"title",n(v)?"Cancel editing the selected path":"Edit the selected path"),it(B,H)},[()=>({flex:!n(v),editing:n(v)}),()=>cr(a())||n(v)?" ":"Navigation bar"],ae),ie("click",I,function(){p(v,!n(v))}),R(t,k),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1mxl2uo {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo),
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-replace-toggle:where(.svelte-1mxl2uo) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-icon:where(.svelte-1mxl2uo) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) label.jse-search-input-label:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count:where(.svelte-1mxl2uo) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count.jse-visible:where(.svelte-1mxl2uo) {
  visibility: visible;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  width: auto;
}`);var gx=L('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>'),mx=L('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>'),bx=L('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"></label> <div> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');function Cp(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=wr("jsoneditor:SearchBox"),i=h(e,"json",9),l=h(e,"documentState",9),c=h(e,"parser",9),u=h(e,"showSearch",9),d=h(e,"showReplace",13),v=h(e,"readOnly",9),f=h(e,"columns",9),g=h(e,"onSearch",9),m=h(e,"onFocus",9),b=h(e,"onPatch",9),j=h(e,"onClose",9),k=P("",!0),C="",A=P("",!0),M=P(!1,!0),x=P(void 0,!0),I=Ki(function(Y){return ce.apply(this,arguments)},300),F=Ki(function(Y){return at.apply(this,arguments)},300);function B(){d(!d()&&!v())}function S(Y){Y.stopPropagation();var Me=No(Y);Me==="Enter"&&(Y.preventDefault(),n(k)!==C?I.flush():Re()),Me==="Shift+Enter"&&(Y.preventDefault(),Ce()),Me==="Ctrl+Enter"&&(Y.preventDefault(),d()?te():Re()),Me==="Ctrl+H"&&(Y.preventDefault(),B()),Me==="Escape"&&(Y.preventDefault(),N())}function V(Y){No(Y)==="Enter"&&(Y.preventDefault(),Y.stopPropagation(),te())}function G(){return H.apply(this,arguments)}function H(){return(H=mt(function*(){Zn(),yield I.flush()})).apply(this,arguments)}function te(){return ye.apply(this,arguments)}function ye(){return(ye=mt(function*(){var Y;if(!v()){var Me=(Y=n(x))===null||Y===void 0?void 0:Y.activeItem;if(a("handleReplace",{replaceText:n(A),activeItem:Me}),n(x)&&Me&&i()!==void 0){p(x,me(me({},Yd(n(x))),{},{activeIndex:n(o)}));var{operations:$,newSelection:E}=Hm(i(),l(),n(A),Me,c());b()($,(jt,Ke)=>({state:Ke,selection:E})),Zn(),yield F.flush(),yield Ue()}}})).apply(this,arguments)}function ne(){return ve.apply(this,arguments)}function ve(){return(ve=mt(function*(){if(!v()){a("handleReplaceAll",{text:n(k),replaceText:n(A)});var{operations:Y,newSelection:Me}=function($,E,jt,Ke,lt){for(var st=Kd(jt,$,{maxResults:1/0}),je=[],Ge=0;Ge<st.length;Ge++){var Mt=st[Ge-1],Be=st[Ge];Ge!==0&&Be.field===Mt.field&&Xt(Be.path,Mt.path)?Vt(je).items.push(Be):je.push({path:Be.path,field:Be.field,items:[Be]})}je.sort((Ie,Ae)=>Ie.field!==Ae.field?Ie.field===io.key?1:-1:Ae.path.length-Ie.path.length);var It,ge=[];return je.forEach(Ie=>{var{field:Ae,path:De,items:Bt}=Ie;if(Ae===io.key){var ht=nn(De),$e=Le($,ht),D=Vt(De),Ye=Mi(ht,Object.keys($e),D,Gd(D,Ke,Bt));ge=ge.concat(Ye),It=xs($,Ye)}else{if(Ae!==io.value)throw new Error("Cannot replace: unknown type of search result field ".concat(Ae));var Ze=Le($,De);if(Ze===void 0)throw new Error("Cannot replace: path not found ".concat(St(De)));var Cn=typeof Ze=="string"?Ze:String(Ze),Je=Go($,E,De),At=Gd(Cn,Ke,Bt),Ut=[{op:"replace",path:St(De),value:Je?At:Ja(At,lt)}];ge=ge.concat(Ut),It=xs($,Ut)}}),{operations:ge,newSelection:It}}(i(),l(),n(k),n(A),c());b()(Y,($,E)=>({state:E,selection:Me})),yield Ue()}})).apply(this,arguments)}function Ee(Y){Y.select()}function Re(){return fe.apply(this,arguments)}function fe(){return(fe=mt(function*(){p(x,n(x)?Yd(n(x)):void 0),yield Ue()})).apply(this,arguments)}function Ce(){return we.apply(this,arguments)}function we(){return we=mt(function*(){p(x,n(x)?function(Y){var Me=Y.activeIndex>0?Y.activeIndex-1:Y.items.length-1,$=Y.items[Me],E=Y.items.map((jt,Ke)=>me(me({},jt),{},{active:Ke===Me}));return me(me({},Y),{},{items:E,activeItem:$,activeIndex:Me})}(n(x)):void 0),yield Ue()}),we.apply(this,arguments)}function Ue(){return de.apply(this,arguments)}function de(){return(de=mt(function*(){var Y;a("handleFocus",n(x));var Me=(Y=n(x))===null||Y===void 0?void 0:Y.activeItem;Me&&i()!==void 0&&(yield m()(Me.path,Me.resultIndex))})).apply(this,arguments)}function re(){return re=mt(function*(Y){yield Ot(Y,n(k),i())}),re.apply(this,arguments)}function ce(){return ce=mt(function*(Y){yield Ot(u(),Y,i()),yield Ue()}),ce.apply(this,arguments)}function at(){return at=mt(function*(Y){yield Ot(u(),n(k),Y)}),at.apply(this,arguments)}function Ot(Y,Me,$){return Q.apply(this,arguments)}function Q(){return Q=mt(function*(Y,Me,$){return Y?(a("applySearch",{showSearch:Y,text:Me}),Me===""?(a("clearing search result"),n(x)!==void 0&&p(x,void 0),Promise.resolve()):(C=Me,p(M,!0),new Promise(E=>{setTimeout(()=>{var jt=Kd(Me,$,{maxResults:lc,columns:f()});p(x,function(Ke,lt){var st=lt!=null&&lt.activeItem?Xd(lt.activeItem):void 0,je=Ke.findIndex(Be=>Xt(st,Xd(Be))),Ge=je!==-1?je:(lt==null?void 0:lt.activeIndex)!==void 0&&(lt==null?void 0:lt.activeIndex)<Ke.length?lt==null?void 0:lt.activeIndex:Ke.length>0?0:-1,Mt=Ke.map((Be,It)=>me(me({resultIndex:It},Be),{},{active:It===Ge}));return{items:Mt,activeItem:Mt[Ge],activeIndex:Ge}}(jt,n(x))),p(M,!1),E()})}))):(n(x)&&p(x,void 0),Promise.resolve())}),Q.apply(this,arguments)}function N(){a("handleClose"),I.cancel(),F.cancel(),Ot(!1,n(k),i()),j()()}J(()=>n(x),()=>{var Y;p(r,((Y=n(x))===null||Y===void 0||(Y=Y.items)===null||Y===void 0?void 0:Y.length)||0)}),J(()=>n(x),()=>{var Y;p(o,((Y=n(x))===null||Y===void 0?void 0:Y.activeIndex)||0)}),J(()=>(n(r),lc),()=>{p(s,n(r)>=lc?"".concat(999,"+"):String(n(r)))}),J(()=>(z(g()),n(x)),()=>{g()(n(x))}),J(()=>z(u()),()=>{(function(Y){re.apply(this,arguments)})(u())}),J(()=>n(k),()=>{I(n(k))}),J(()=>z(i()),()=>{F(i())}),mn(),bt(!0);var ee=tr(),T=ot(ee),pe=Y=>{var Me=bx(),$=O(Me),E=O($),jt=D=>{var Ye=gx(),Ze=O(Ye),Cn=ae(()=>d()?ma:ei);en(Ze,{get data(){return n(Cn)}}),ie("click",Ye,B),R(D,Ye)};K(E,D=>{v()||D(jt)});var Ke=O(q(E,2)),lt=O(Ke),st=O(lt),je=D=>{en(D,{data:vh,spin:!0})},Ge=D=>{en(D,{data:wl})};K(st,D=>{n(M)?D(je):D(Ge,!1)});var Mt=q(lt,2),Be=O(Mt);Or(()=>cl(Be,()=>n(k),D=>p(k,D))),qr(Be,D=>Ee==null?void 0:Ee(D)),Or(()=>ie("paste",Be,G));var It,ge=q(Mt,2),Ie=O(ge),Ae=q(ge,2);en(O(Ae),{data:uh});var De=q(Ae,2);en(O(De),{data:dh});var Bt=q(De,2);en(O(Bt),{data:yl});var ht=q(Ke,2),$e=D=>{var Ye=mx(),Ze=O(Ye),Cn=q(Ze,2),Je=q(Cn,2);cl(Ze,()=>n(A),At=>p(A,At)),ie("keydown",Ze,V),ie("click",Cn,te),ie("click",Je,ne),R(D,Ye)};K(ht,D=>{d()&&!v()&&D($e)}),be(D=>{var Ye,Ze;It=wt(ge,1,"jse-search-count svelte-1mxl2uo",null,It,D),it(Ie,"".concat((Ye=n(o)!==-1&&n(o)<n(r)?"".concat(n(o)+1,"/"):"")!==null&&Ye!==void 0?Ye:"").concat((Ze=n(s))!==null&&Ze!==void 0?Ze:""))},[()=>({"jse-visible":n(k)!==""})],ae),ie("click",Ae,Re),ie("click",De,Ce),ie("click",Bt,N),ie("keydown",$,S),R(Y,Me)};K(T,Y=>{u()&&Y(pe)}),R(t,ee),tt()}var gi=Symbol("path");function jx(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1/0,o={};Array.isArray(t)&&function(a,i,l){if(a.length<i)a.forEach(l);else for(var c=i>1?(a.length-1)/(i-1):a.length,u=0;u<i;u++){var d=Math.floor(u*c);l(a[d],d,a)}}(t,r,a=>{fn(a)?zp(a,o,e):o[gi]=!0});var s=[];return gi in o&&s.push([]),Op(o,[],s,e),s}function zp(t,e,r){for(var o in t){var s=t[o],a=e[o]||(e[o]={});fn(s)&&r?zp(s,a,r):a[gi]===void 0&&(a[gi]=!0)}}function Op(t,e,r,o){for(var s in t){var a=e.concat(s),i=t[s];i&&i[gi]===!0&&r.push(a),Sr(i)&&o&&Op(i,a,r,o)}}function xx(t,e,r,o,s,a){for(var i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:80,l=xr(r)?r.length:0,c=function(C,A){var M=Object.values(C);if(Pn(M))return A;var x=(I,F)=>I+F;return M.reduce(x)/M.length}(o,s),u=t-i,d=e+2*i,v=C=>o[C]||s,f=0,g=a;g<u&&f<l;)g+=v(f),f++;f>0&&(g-=v(--f));for(var m=f,b=0;b<d&&m<l;)b+=v(m),m++;for(var j=0,k=m;k<l;k++)j+=v(k);return{startIndex:f,endIndex:m,startHeight:g,endHeight:j,averageItemHeight:c,visibleHeight:b,visibleItems:xr(r)?r.slice(f,m):[]}}function dv(t,e,r,o){for(var{rowIndex:s}=to(t,e),a=0,i=0;i<s;i++)a+=r[i]||o;return a}function to(t,e){var[r,...o]=t,s=parseInt(r,10);return{rowIndex:isNaN(s)?-1:s,columnIndex:e.findIndex(a=>ra(o,a))}}function Sa(t,e){var{rowIndex:r,columnIndex:o}=t;return[String(r),...e[o]]}function yx(t,e){var[r,o]=Zp(t,i=>Su(i.path[0])),s=Gp(r,wx),a=Xp(s,i=>{var l={row:[],columns:{}};return i.forEach(c=>{var u=function(d,v){var f=to(d.path,v);return f.columnIndex!==-1?f.columnIndex:-1}(c,e);u!==-1?(l.columns[u]===void 0&&(l.columns[u]=[]),l.columns[u].push(c)):l.row.push(c)}),l});return{root:o,rows:a}}function wc(t,e){if(e&&e.length!==0)return e.length===1?e[0]:{path:t,message:"Multiple validation issues: "+e.map(r=>ao(r.path)+" "+r.message).join(", "),severity:so.warning}}function wx(t){return parseInt(t.path[0],10)}function kx(t,e,r){var o=e.some(s=>function(a,i,l){if(!a)return!1;if(i.op==="replace"){var c=So(i.path),{rowIndex:u,columnIndex:d}=to(c,l),v=l.findIndex(f=>Xt(f,a.path));if(u!==-1&&d!==-1&&d!==v)return!1}return!0}(t,s,r));return o?void 0:t}var Nr=wr("jsoneditor:actions");function Mp(t){return su.apply(this,arguments)}function su(){return su=mt(function*(t){var{json:e,selection:r,indentation:o,readOnly:s,parser:a,onPatch:i}=t;if(!s&&e!==void 0&&r&&es(r)){var l=Qf(e,r,o,a);if(l!==void 0){Nr("cut",{selection:r,clipboard:l,indentation:o}),yield $u(l);var{operations:c,newSelection:u}=ep(e,r);i(c,(d,v)=>({state:v,selection:u}))}}}),su.apply(this,arguments)}function Pp(t){return iu.apply(this,arguments)}function iu(){return iu=mt(function*(t){var{json:e,selection:r,indentation:o,parser:s}=t,a=Qf(e,r,o,s);a!==void 0&&(Nr("copy",{clipboard:a,indentation:o}),yield $u(a))}),iu.apply(this,arguments)}function Rp(t){var{clipboardText:e,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onChangeText:l,openRepairModal:c}=t;if(!s)try{u(e)}catch{c(e,v=>{Nr("repaired pasted text: ",v),u(v)})}function u(d){if(r!==void 0){var v=o||Wt([]),f=Xf(r,v,d,a);Nr("paste",{pastedText:d,operations:f,ensureSelection:v}),i(f,(g,m)=>{var b=m;return f.filter(j=>(kv(j)||hu(j))&&cr(j.value)).forEach(j=>{var k=Ho(r,j.path);b=qa(g,b,k)}),{state:b}})}else Nr("paste text",{pastedText:d}),l(e,(g,m)=>{if(g)return{state:qa(g,m,[])}})}}function Ap(t){var{json:e,text:r,selection:o,keepSelection:s,readOnly:a,onChange:i,onPatch:l}=t;if(!a&&o){var c=e!==void 0&&(jr(o)||yn(o))?Ar(o.path,o.path):o;if(Pn(We(o)))Nr("remove root",{selection:o}),i&&i({text:"",json:void 0},e!==void 0?{text:void 0,json:e}:{text:r||"",json:e},{contentErrors:void 0,patchResult:void 0});else if(e!==void 0){var{operations:u,newSelection:d}=ep(e,c);Nr("remove",{operations:u,selection:o,newSelection:d}),l(u,(v,f)=>({state:f,selection:s?o:d}))}}}function xl(t){var{insertType:e,selectInside:r,initialValue:o,json:s,selection:a,readOnly:i,parser:l,onPatch:c,onReplaceJson:u}=t;if(!i){var d=function(b,j,k){if(k==="object")return{};if(k==="array")return[];if(k==="structure"&&b!==void 0){var C=j?$f(j):[],A=Le(b,C);if(Array.isArray(A)&&!Pn(A)){var M=$o(A);return cr(M)?$p(M,x=>Array.isArray(x)?[]:fn(x)?void 0:""):""}}return""}(s,a,e);if(s!==void 0){var v=l.stringify(d),f=Xf(s,a,v,l);Nr("onInsert",{insertType:e,operations:f,newValue:d,data:v});var g=Vt(f.filter(b=>b.op==="add"||b.op==="replace"));c(f,(b,j,k)=>{if(g){var C=Ho(b,g.path);if(cr(d))return{state:fo(b,j,C,Il),selection:r?Io(C):k};if(d===""){var A=Pn(C)?void 0:Le(b,nn(C));return{state:fo(b,j,C,Xs),selection:fn(A)?Dl(C,o):ui(C,o)}}}}),Nr("after patch")}else{Nr("onInsert",{insertType:e,newValue:d});var m=[];u(d,(b,j)=>({state:qa(b,j,m),selection:cr(d)?Io(m):ui(m)}))}}}function Ep(t){return lu.apply(this,arguments)}function lu(){return lu=mt(function*(t){var{char:e,selectInside:r,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c,onSelect:u}=t;a||(jr(s)?u(me(me({},s),{},{edit:!0,initialValue:e})):e==="{"?xl({insertType:"object",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):e==="["?xl({insertType:"array",selectInside:r,initialValue:void 0,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c}):yn(s)&&o!==void 0?cr(Le(o,s.path))||u(me(me({},s),{},{edit:!0,initialValue:e})):(Nr("onInsertValueWithCharacter",{char:e}),yield function(d){return cu.apply(this,arguments)}({char:e,json:o,selection:s,readOnly:a,parser:i,onPatch:l,onReplaceJson:c})))}),lu.apply(this,arguments)}function cu(){return cu=mt(function*(t){var{char:e,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l}=t;s||xl({insertType:"value",selectInside:!1,initialValue:e,json:r,selection:o,readOnly:s,parser:a,onPatch:i,onReplaceJson:l})}),cu.apply(this,arguments)}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-1vjn89h {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);var Sx=L('<div class="jse-json-preview svelte-1vjn89h"> </div>');function Tp(t,e){et(e,!1);var r=P(),o=P(),s=h(e,"text",8),a=h(e,"json",8),i=h(e,"indentation",8),l=h(e,"parser",8);J(()=>(z(a()),z(s())),()=>{p(r,a()!==void 0?{json:a()}:{text:s()||""})}),J(()=>(n(r),z(i()),z(l()),Lc),()=>{p(o,oi(Dc(n(r),i(),l()),Lc))}),mn(),bt();var c=Sx(),u=O(c);be(()=>it(u,n(o))),R(t,c),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var Cx=L('<button type="button"><!> <!></button>');function kc(t,e){et(e,!1);var r=h(e,"item",8),o=h(e,"className",8,void 0),s=h(e,"onRequestClose",8);bt();var a=Cx(),i=O(a),l=d=>{en(d,{get data(){return r().icon}})};K(i,d=>{r().icon&&d(l)});var c=q(i,2),u=d=>{var v=kr();be(()=>it(v,r().text)),R(d,v)};K(c,d=>{r().text&&d(u)}),be(d=>{wt(a,1,d,"svelte-1idfykj"),gn(a,"title",r().title),a.disabled=r().disabled||!1},[()=>ja(Es("jse-context-menu-button",o(),r().className))],ae),ie("click",a,d=>{s()(),r().onClick(d)}),R(t,a),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-11rxb2m {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) li:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown.jse-visible:where(.svelte-11rxb2m) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items.jse-visible:where(.svelte-11rxb2m) {
  display: block;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);var zx=L('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>'),Ox=L('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-11rxb2m"></ul></div></div>');vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);var Mx=L('<button type="button" slot="defaultItem"><!> </button>');function Sc(t,e){et(e,!1);var r=P(),o=h(e,"item",8),s=h(e,"className",8,void 0),a=h(e,"onRequestClose",8);J(()=>(z(o()),z(a())),()=>{p(r,o().items.map(i=>me(me({},i),{},{onClick:l=>{a()(),i.onClick(l)}})))}),mn(),bt(),function(i,l){et(l,!1);var c=P(void 0,!0),u=h(l,"items",25,()=>[]),d=h(l,"title",9,void 0),v=h(l,"width",9,"120px"),f=P(!1,!0);function g(){p(f,!1)}function m(x){No(x)==="Escape"&&(x.preventDefault(),p(f,!1))}Er(()=>{document.addEventListener("click",g),document.addEventListener("keydown",m)}),co(()=>{document.removeEventListener("click",g),document.removeEventListener("keydown",m)}),J(()=>z(u()),()=>{p(c,u().every(x=>x.disabled===!0))}),mn(),bt(!0);var b=Ox(),j=O(b);ar(j,l,"defaultItem",{},null);var k,C=q(j,2);en(O(C),{data:ma});var A,M=q(C,2);sr(O(M),5,u,vr,(x,I)=>{var F=zx(),B=O(F),S=O(B),V=H=>{en(H,{get data(){return n(I).icon}})};K(S,H=>{n(I).icon&&H(V)});var G=q(S);be(()=>{var H;gn(B,"title",n(I).title),B.disabled=n(I).disabled,wt(B,1,ja(n(I).className),"svelte-11rxb2m"),it(G," ".concat((H=n(I).text)!==null&&H!==void 0?H:""))}),ie("click",B,H=>n(I).onClick(H)),R(x,F)}),be((x,I)=>{var F;gn(b,"title",d()),k=wt(C,1,"jse-open-dropdown svelte-11rxb2m",null,k,x),C.disabled=n(c),A=wt(M,1,"jse-dropdown-items svelte-11rxb2m",null,A,I),po(M,"width: ".concat((F=v())!==null&&F!==void 0?F:"",";"))},[()=>({"jse-visible":n(f)}),()=>({"jse-visible":n(f)})],ae),ie("click",C,function(){var x=n(f);setTimeout(()=>p(f,!x))}),ie("click",b,g),R(i,b),tt()}(t,{get width(){return o().width},get items(){return n(r)},$$slots:{defaultItem:(i,l)=>{var c=Mx(),u=O(c),d=f=>{en(f,{get data(){return o().main.icon}})};K(u,f=>{o().main.icon&&f(d)});var v=q(u);be(f=>{var g;wt(c,1,f,"svelte-1idfykj"),gn(c,"title",o().main.title),c.disabled=o().main.disabled||!1,it(v," ".concat((g=o().main.text)!==null&&g!==void 0?g:""))},[()=>ja(Es("jse-context-menu-button",s(),o().main.className))],ae),ie("click",c,f=>{a()(),o().main.onClick(f)}),R(i,c)}}}),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-12z7bz1 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-label:where(.svelte-12z7bz1) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) div.jse-tip-icon:where(.svelte-12z7bz1) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);var Px=L('<div class="jse-separator svelte-12z7bz1"></div>'),Rx=L('<div class="jse-label svelte-12z7bz1"> </div>'),Ax=L('<div class="jse-column svelte-12z7bz1"></div>'),Ex=L('<div class="jse-separator svelte-12z7bz1"></div>'),Tx=L('<div class="jse-row svelte-12z7bz1"></div>'),Nx=L('<div class="jse-separator svelte-12z7bz1"></div>'),qx=L('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>'),Ix=L('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');function Np(t,e){et(e,!1);var r=h(e,"items",9),o=h(e,"onRequestClose",9),s=h(e,"tip",9),a=P(void 0,!0);Er(()=>{var f=Array.from(n(a).querySelectorAll("button")).find(g=>!g.disabled);f&&f.focus()});var i={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function l(f){return console.error("Unknown type of context menu item",f),"???"}bt(!0);var c=Ix(),u=O(c);sr(u,1,r,vr,(f,g)=>{var m=tr(),b=ot(m),j=C=>{kc(C,{get item(){return n(g)},get onRequestClose(){return o()}})},k=(C,A)=>{var M=I=>{Sc(I,{get item(){return n(g)},get onRequestClose(){return o()}})},x=(I,F)=>{var B=V=>{var G=Tx();sr(G,5,()=>n(g).items,vr,(H,te)=>{var ye=tr(),ne=ot(ye),ve=Re=>{kc(Re,{get item(){return n(te)},get onRequestClose(){return o()}})},Ee=(Re,fe)=>{var Ce=Ue=>{Sc(Ue,{get item(){return n(te)},get onRequestClose(){return o()}})},we=(Ue,de)=>{var re=at=>{var Ot=Ax();sr(Ot,5,()=>n(te).items,vr,(Q,N)=>{var ee=tr(),T=ot(ee),pe=Me=>{kc(Me,{className:"left",get item(){return n(N)},get onRequestClose(){return o()}})},Y=(Me,$)=>{var E=Ke=>{Sc(Ke,{className:"left",get item(){return n(N)},get onRequestClose(){return o()}})},jt=(Ke,lt)=>{var st=Ge=>{R(Ge,Px())},je=(Ge,Mt)=>{var Be=ge=>{var Ie=Rx(),Ae=O(Ie);be(()=>it(Ae,n(N).text)),R(ge,Ie)},It=ge=>{var Ie=kr();be(Ae=>it(Ie,Ae),[()=>l(n(N))],ae),R(ge,Ie)};K(Ge,ge=>{qf(n(N))?ge(Be):ge(It,!1)},Mt)};K(Ke,Ge=>{Gs(n(N))?Ge(st):Ge(je,!1)},lt)};K(Me,Ke=>{Qi(n(N))?Ke(E):Ke(jt,!1)},$)};K(T,Me=>{ls(n(N))?Me(pe):Me(Y,!1)}),R(Q,ee)}),R(at,Ot)},ce=(at,Ot)=>{var Q=ee=>{R(ee,Ex())},N=ee=>{var T=kr();be(pe=>it(T,pe),[()=>l(n(te))],ae),R(ee,T)};K(at,ee=>{Gs(n(te))?ee(Q):ee(N,!1)},Ot)};K(Ue,at=>{Uf(n(te))?at(re):at(ce,!1)},de)};K(Re,Ue=>{Qi(n(te))?Ue(Ce):Ue(we,!1)},fe)};K(ne,Re=>{ls(n(te))?Re(ve):Re(Ee,!1)}),R(H,ye)}),R(V,G)},S=(V,G)=>{var H=ye=>{R(ye,Nx())},te=ye=>{var ne=kr();be(ve=>it(ne,ve),[()=>l(n(g))],ae),R(ye,ne)};K(V,ye=>{Gs(n(g))?ye(H):ye(te,!1)},G)};K(I,V=>{If(n(g))?V(B):V(S,!1)},F)};K(C,I=>{Qi(n(g))?I(M):I(x,!1)},A)};K(b,C=>{ls(n(g))?C(j):C(k,!1)}),R(f,m)});var d=q(u,2),v=f=>{var g=qx(),m=O(g),b=O(m);en(O(b),{data:bg});var j=O(q(b,2));be(()=>it(j,s())),R(f,g)};K(d,f=>{s()&&f(v)}),Qn(c,f=>p(a,f),()=>n(a)),ie("keydown",c,function(f){var g=No(f),m=i[g];if(m&&f.target){f.preventDefault();var b=Mm({allElements:Array.from(n(a).querySelectorAll("button:not([disabled])")),currentElement:f.target,direction:m,hasPrio:j=>j.getAttribute("data-type")!=="jse-open-dropdown"});b&&b.focus()}}),R(t,c),tt()}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-6ttr41 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-6ttr41, .jse-value.jse-array.svelte-6ttr41 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-6ttr41 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-6ttr41 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-6ttr41 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-6ttr41 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-6ttr41 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-6ttr41 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-6ttr41 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-6ttr41:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);L("<option> </option>");L("<select></select>");var Ux={id:"jmespath",name:"JMESPath",description:`
<p>
  Enter a <a href="https://jmespath.org" target="_blank" rel="noopener noreferrer">JMESPath</a> query 
  to filter, sort, or transform the JSON data.
 To learn JMESPath, go to <a href="https://jmespath.org/tutorial.html" target="_blank" rel="noopener noreferrer">the interactive tutorial</a>.
</p>
`,createQuery:function(t,e){var{sort:r,filter:o,projection:s}=e,a="";if(o&&o.path&&o.relation&&o.value){var i=["0"].concat(o.path),l=Le(t,i),c=zi(o.value),u=typeof l=="string"&&c!=null?'"'.concat(o.value,'"'):c;a+="[? "+Vs(o.path)+" "+o.relation+" `"+u+"`]"}else a+=Array.isArray(t)?"[*]":"@";if(r&&r.path&&r.direction&&(r.direction==="desc"?a+=" | reverse(sort_by(@, &"+Vs(r.path)+"))":a+=" | sort_by(@, &"+Vs(r.path)+")"),s&&s.paths)if(a[a.length-1]!=="]"&&(a+=" | [*]"),s.paths.length===1){var d=s.paths[0];a+=d.length===0?"":"."+Vs(d)}else s.paths.length>1&&(a+=".{"+s.paths.map(v=>qp(v[v.length-1])+": "+Vs(v)).join(", ")+"}");return a},executeQuery:function(t,e,r){var o=Cu(r,JSON)?t:function(s){var a=r.stringify(s);return a!==void 0?JSON.parse(a):void 0}(t);return xh.search(o,e)}};function Vs(t){if(t.length===0)return"@";var e=t.map(r=>typeof r=="number"?"["+r+"]":"."+qp(String(r))).join("");return e[0]==="."?e.slice(1):e}function qp(t){return t.match(/^[A-Za-z\d_$]+$/)?t:JSON.stringify(t)}var Dx={id:"jsonpath",name:"JSONPath",description:`
<p>
  Enter a <a href="https://github.com/JSONPath-Plus/JSONPath" target="_blank" 
  rel="noopener noreferrer"><code>JSONPath</code></a> expression to filter, sort, or transform the data.
</p>`,createQuery:function(t,e){var{filter:r,sort:o,projection:s}=e,a="$";if(r&&r.path&&r.relation&&r.value){var i=zi(r.value),l=JSON.stringify(i);a+="[?(@".concat(vv(r.path)," ").concat(r.relation," ").concat(l,")]")}if(o&&o.path&&o.direction)throw new Error("Sorting is not supported by JSONPath. Please clear the sorting fields");if(s&&s.paths){if(s.paths.length>1)throw new Error("Picking multiple fields is not supported by JSONPath. Please select only one field");a.endsWith("]")||(a+="[*]"),a+="".concat(vv(s.paths[0])).replace(/^\.\.\./,"..")}return a},executeQuery:function(t,e){var r=yh({json:t,path:e});return r!==void 0?r:null}};function vv(t){var e=/^[A-z]+$/;return t.map(r=>e.test(r)?".".concat(r):JSON.stringify([r])).join("")}var Jx={id:"lodash",name:"Lodash",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
  You can use <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">Lodash</a>
  functions like <code>_.map</code>, <code>_.filter</code>,
  <code>_.orderBy</code>, <code>_.sortBy</code>, <code>_.groupBy</code>,
  <code>_.pick</code>, <code>_.uniq</code>, <code>_.get</code>, etcetera.
</p>
`,createQuery:function(t,e){var{filter:r,sort:o,projection:s}=e,a=[`  return _.chain(data)
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(xo(r.path)),l=zi(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):pf(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&a.push("    .orderBy([".concat(function(v){return v.length===0?"":v.every(f=>Jl.test(f)||Bu.test(f))?"'"+v.map(rb).join("").replace(/^\./,"")+"'":JSON.stringify(v)}(o.path),"], ['").concat(o.direction,`'])
`)),s&&s.paths)if(s.paths.length>1){var u=s.paths.map(v=>{var f=Vt(v)||"item";return"      ".concat(JSON.stringify(f),": item").concat(xo(v))});a.push(`    .map(item => ({
`.concat(u.join(`,
`),`
    }))
`))}else{var d=s.paths[0];a.push("    .map(item => item".concat(xo(d),`)
`))}return a.push(`    .value()
`),`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(t,e){(function(o){var s,a,i=(s=o.match(/_\.chain\(/g))===null||s===void 0?void 0:s.length,l=(a=o.match(/\.value\(\)/g))===null||a===void 0?void 0:a.length;if(i!==l)throw new Error("Cannot execute query: Lodash _.chain(...) must end with .value()")})(e);var r=new Function("_",`"use strict";

`+e+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)(Vp)(t);return r!==void 0?r:null}},Fi,_i,Bx={id:"javascript",name:"JavaScript",description:`
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
</p>
`,createQuery:function(t,e){var{filter:r,sort:o,projection:s}=e,a=[`  return data
`];if(r&&r.path&&r.relation&&r.value){var i="item => item".concat(xo(r.path)),l=zi(r.value),c=typeof l=="string"?"'".concat(r.value,"'"):pf(r.value)&&!Number.isSafeInteger(l)?"".concat(r.value,"n"):r.value;a.push("    .filter(".concat(i," ").concat(r.relation," ").concat(c,`)
`))}if(o&&o.path&&o.direction&&(o.direction==="desc"?a.push(`    .slice()
    .sort((a, b) => {
      // sort descending
`+"      const valueA = a".concat(xo(o.path),`
`)+"      const valueB = b".concat(xo(o.path),`
`)+`      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0
    })
`):a.push(`    .slice()
    .sort((a, b) => {
      // sort ascending
`+"      const valueA = a".concat(xo(o.path),`
`)+"      const valueB = b".concat(xo(o.path),`
`)+`      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
    })
`)),s&&s.paths)if(s.paths.length>1){var u=s.paths.map(v=>{var f=v[v.length-1]||"item",g="item".concat(xo(v));return"      ".concat(JSON.stringify(f),": ").concat(g)});a.push(`    .map(item => ({
`.concat(u.join(`,
`),`})
    )
`))}else{var d="item".concat(xo(s.paths[0]));a.push("    .map(item => ".concat(d,`)
`))}return`function query (data) {
`.concat(a.join(""),"}")},executeQuery:function(t,e){var r=new Function(`"use strict";

`+e+`

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)()(t);return r!==void 0?r:null}};function Ks(t,e){return Fi||(_i=new WeakMap,Fi=new ResizeObserver(r=>{for(var o of r){var s=_i.get(o.target);s&&s(o.target)}})),_i.set(t,e),Fi.observe(t),{destroy:()=>{_i.delete(t),Fi.unobserve(t)}}}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-vrx1dr {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-vrx1dr .jse-hidden-input-label:where(.svelte-vrx1dr) .jse-hidden-input:where(.svelte-vrx1dr) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-vrx1dr {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-search-box-container:where(.svelte-vrx1dr) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading-space:where(.svelte-vrx1dr) {
  flex: 1;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading:where(.svelte-vrx1dr) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-search-box-background:where(.svelte-vrx1dr) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);var Lx=L("<!> <!>",1),Fx=L('<div class="jse-search-box-background svelte-vrx1dr"></div>'),_x=L('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!>',1),Wx=L('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"></label> <!>',1),Vx=L('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>'),$x=L('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>',1);function uu(t,e){et(e,!1);var r=P(void 0,!0),o=wr("jsoneditor:TreeMode"),s=typeof window>"u";o("isSSR:",s);var a=vs(),i=vs(),{openAbsolutePopup:l,closeAbsolutePopup:c}=ya("absolute-popup"),u=P(void 0,!0),d=P(void 0,!0),v=P(void 0,!0),f=!1,g=jp(),m=h(e,"readOnly",9),b=h(e,"externalContent",9),j=h(e,"externalSelection",9),k=h(e,"history",9),C=h(e,"truncateTextSize",9),A=h(e,"mainMenuBar",9),M=h(e,"navigationBar",9),x=h(e,"escapeControlCharacters",9),I=h(e,"escapeUnicodeCharacters",9),F=h(e,"parser",9),B=h(e,"parseMemoizeOne",9),S=h(e,"validator",9),V=h(e,"validationParser",9),G=h(e,"pathParser",9),H=h(e,"indentation",9),te=h(e,"onError",9),ye=h(e,"onChange",9),ne=h(e,"onChangeMode",9),ve=h(e,"onSelect",9),Ee=h(e,"onUndo",9),Re=h(e,"onRedo",9),fe=h(e,"onRenderValue",9),Ce=h(e,"onRenderMenu",9),we=h(e,"onRenderContextMenu",9),Ue=h(e,"onClassName",9),de=h(e,"onFocus",9),re=h(e,"onBlur",9),ce=h(e,"onSortModal",9),at=h(e,"onTransformModal",9),Ot=h(e,"onJSONEditorModal",9),Q=!1,N=P(!1,!0),ee=P(void 0,!0);Wu({onMount:Er,onDestroy:co,getWindow:()=>Si(n(v)),hasFocus:()=>Q&&document.hasFocus()||Mu(n(v)),onFocus:()=>{f=!0,de()&&de()()},onBlur:()=>{f=!1,re()&&re()()}});var T=P(void 0,!0),pe=P(void 0,!0),Y=void 0,Me=!1,$=P(Hc({json:n(T)}),!0),E=P(ci(j())?j():void 0,!0);function jt(y){p(E,y)}Er(()=>{if(n(E)){var y=We(n(E));p($,fo(n(T),n($),y,Xs)),setTimeout(()=>An(y))}});var Ke,lt=P(void 0,!0),st=P(void 0,!0),je=P(void 0,!0),Ge=P(!1,!0),Mt=P(!1,!0);function Be(y){p(je,(Ke=y)?np(n(T),Ke.items):void 0)}function It(y,_){return ge.apply(this,arguments)}function ge(){return(ge=mt(function*(y,_){p($,fo(n(T),n($),y,Xs));var se=zn(_);yield Pt(y,{element:se})})).apply(this,arguments)}function Ie(){p(Ge,!1),p(Mt,!1),Pe()}function Ae(y){o("select validation error",y),p(E,Wt(y.path)),Pt(y.path)}function De(y){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qc;o("expand"),p($,fo(n(T),n($),y,_))}function Bt(y,_){p($,Bd(n(T),n($),y,_)),n(E)&&function(se,qe){return ra(We(se),qe)&&(We(se).length>qe.length||zr(se))}(n(E),y)&&p(E,void 0)}var ht=P(!1,!0),$e=P([],!0),D=P(void 0,!0),Ye=ti(xp);function Ze(y,_,se,qe){ns(()=>{var Oe;try{Oe=Ye(y,_,se,qe)}catch(Se){Oe=[{path:[],message:"Failed to validate: "+Se.message,severity:so.warning}]}Xt(Oe,n($e))||(o("validationErrors changed:",Oe),p($e,Oe),p(D,function(Se,ze){var Fe;return ze.forEach(yt=>{Fe=lv(Se,Fe,yt.path,(tn,Qt)=>me(me({},Qt),{},{validationError:yt}))}),ze.forEach(yt=>{for(var tn=yt.path;tn.length>0;)tn=nn(tn),Fe=lv(Se,Fe,tn,(Qt,Mn)=>Mn.validationError?Mn:me(me({},Mn),{},{validationError:{isChildError:!0,path:tn,message:"Contains invalid data",severity:so.warning}}))}),Fe}(y,n($e))))},Oe=>o("validationErrors updated in ".concat(Oe," ms")))}function Cn(){return o("validate"),Y?{parseError:Y,isRepairable:!1}:(Ze(n(T),S(),F(),V()),Pn(n($e))?void 0:{validationErrors:n($e)})}function Je(){return n(T)}function At(){return n($)}function Ut(){return n(E)}function ir(y){o("applyExternalContent",{updatedContent:y}),bs(y)?function(_){if(_!==void 0){var se=!Xt(n(T),_);if(o("update external json",{isChanged:se,currentlyText:n(T)===void 0}),!!se){var qe={documentState:n($),selection:n(E),json:n(T),text:n(pe),textIsRepaired:n(ht)};p(T,_),p($,Hr(_,n($))),un(n(T)),p(pe,void 0),p(ht,!1),Y=void 0,Dt(n(T)),_n(qe)}}}(y.json):ms(y)&&function(_){if(!(_===void 0||bs(b()))){var se=_!==n(pe);if(o("update external text",{isChanged:se}),!!se){var qe={documentState:n($),selection:n(E),json:n(T),text:n(pe),textIsRepaired:n(ht)};try{p(T,B()(_)),p($,Hr(n(T),n($))),un(n(T)),p(pe,_),p(ht,!1),Y=void 0}catch(Oe){try{p(T,B()(zo(_))),p($,Hr(n(T),n($))),un(n(T)),p(pe,_),p(ht,!0),Y=void 0,Dt(n(T))}catch{p(T,void 0),p($,void 0),p(pe,b().text),p(ht,!1),Y=n(pe)!==void 0&&n(pe)!==""?gs(n(pe),Oe.message||String(Oe)):void 0}}Dt(n(T)),_n(qe)}}}(y.text)}function un(y){Me||(Me=!0,p($,qa(y,n($),[])))}function Dt(y){n(E)&&(ca(y,ga(n(E)))&&ca(y,We(n(E)))||(o("clearing selection: path does not exist anymore",n(E)),p(E,$a(y,n($)))))}function _n(y){if(y.json!==void 0||y.text!==void 0){var _=n(T)!==void 0&&y.json!==void 0;k().add({type:"tree",undo:{patch:_?[{op:"replace",path:"",value:y.json}]:void 0,json:y.json,text:y.text,documentState:y.documentState,textIsRepaired:y.textIsRepaired,selection:wo(y.selection),sortedColumn:void 0},redo:{patch:_?[{op:"replace",path:"",value:n(T)}]:void 0,json:n(T),text:n(pe),documentState:n($),textIsRepaired:n(ht),selection:wo(n(E)),sortedColumn:void 0}})}}function Yt(y,_){var se;if(o("patch",y,_),n(T)===void 0)throw new Error("Cannot apply patch: no JSON");var qe=n(T),Oe={json:void 0,text:n(pe),documentState:n($),selection:wo(n(E)),textIsRepaired:n(ht),sortedColumn:void 0},Se=tp(n(T),y),ze=_f(n(T),n($),y),Fe=(se=xs(n(T),y))!==null&&se!==void 0?se:n(E),yt=typeof _=="function"?_(ze.json,ze.documentState,Fe):void 0;return p(T,(yt==null?void 0:yt.json)!==void 0?yt.json:ze.json),p($,(yt==null?void 0:yt.state)!==void 0?yt.state:ze.documentState),p(E,(yt==null?void 0:yt.selection)!==void 0?yt.selection:Fe),p(pe,void 0),p(ht,!1),p(st,void 0),Y=void 0,Dt(n(T)),k().add({type:"tree",undo:me({patch:Se},Oe),redo:{patch:y,json:void 0,text:n(pe),documentState:n($),selection:wo(n(E)),sortedColumn:void 0,textIsRepaired:n(ht)}}),{json:n(T),previousJson:qe,undo:Se,redo:y}}function pn(){!m()&&n(E)&&p(E,Dl(We(n(E))))}function rn(){if(!m()&&n(E)){var y=We(n(E)),_=Le(n(T),y);cr(_)?function(se,qe){o("openJSONEditorModal",{path:se,value:qe}),Q=!0,Ot()({content:{json:qe},path:se,onPatch:n(rr).onPatch,onClose:()=>{Q=!1,setTimeout(Pe)}})}(y,_):p(E,ui(y))}}function Lt(){if(!m()&&yn(n(E))){var y=We(n(E)),_=St(y),se=Le(n(T),y),qe=!Go(n(T),n($),y),Oe=qe?String(se):Ja(String(se),F());o("handleToggleEnforceString",{enforceString:qe,value:se,updatedValue:Oe}),Tt([{op:"replace",path:_,value:Oe}],(Se,ze)=>({state:ql(n(T),ze,y,{type:"value",enforceString:qe})}))}}function xt(){return n(ht)&&n(T)!==void 0&&qt(n(T)),n(T)!==void 0?{json:n(T)}:{text:n(pe)||""}}function an(){return rt.apply(this,arguments)}function rt(){return rt=mt(function*(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];yield Mp({json:n(T),selection:n(E),indentation:y?H():void 0,readOnly:m(),parser:F(),onPatch:Tt})}),rt.apply(this,arguments)}function Ft(){return $t.apply(this,arguments)}function $t(){return $t=mt(function*(){var y=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(T)!==void 0&&(yield Pp({json:n(T),selection:n(E),indentation:y?H():void 0,parser:F()}))}),$t.apply(this,arguments)}function Rn(y){var _;y.preventDefault(),ur((_=y.clipboardData)===null||_===void 0?void 0:_.getData("text/plain"))}function Yn(){return bn.apply(this,arguments)}function bn(){return(bn=mt(function*(){try{ur(yield navigator.clipboard.readText())}catch(y){console.error(y),p(N,!0)}})).apply(this,arguments)}function ur(y){y!==void 0&&Rp({clipboardText:y,json:n(T),selection:n(E),readOnly:m(),parser:F(),onPatch:Tt,onChangeText:Wn,openRepairModal:nr})}function nr(y,_){p(ee,{text:y,onParse:se=>El(se,qe=>ki(qe,F())),onRepair:bf,onApply:_,onClose:Pe})}function lr(){Ap({json:n(T),text:n(pe),selection:n(E),keepSelection:!1,readOnly:m(),onChange:ye(),onPatch:Tt})}function gr(){!m()&&n(T)!==void 0&&n(E)&&es&&!Pn(We(n(E)))&&(o("duplicate",{selection:n(E)}),Tt(Zf(n(T),na(n(T),n(E)))))}function dr(){m()||!n(E)||!Fn(n(E))&&!yn(n(E))||Pn(We(n(E)))||(o("extract",{selection:n(E)}),Tt(Gf(n(T),n(E)),(y,_)=>{if(cr(y))return{state:fc(y,_,[])}}))}function Nn(y){xl({insertType:y,selectInside:!0,initialValue:void 0,json:n(T),selection:n(E),readOnly:m(),parser:F(),onPatch:Tt,onReplaceJson:qt})}function qn(y){jr(n(E))&&p(E,Wt(n(E).path)),n(E)||p(E,$a(n(T),n($))),Nn(y)}function Xn(y){if(!m()&&n(E))if(Di(n(E)))try{var _=ga(n(E)),se=Le(n(T),_),qe=function(Se,ze,Fe){if(ze==="array"){if(Array.isArray(Se))return Se;if(fn(Se))return Td(Se);if(typeof Se=="string")try{var yt=Fe.parse(Se);if(Array.isArray(yt))return yt;if(fn(yt))return Td(yt)}catch{return[Se]}return[Se]}if(ze==="object"){if(Array.isArray(Se))return Ed(Se);if(fn(Se))return Se;if(typeof Se=="string")try{var tn=Fe.parse(Se);if(fn(tn))return tn;if(Array.isArray(tn))return Ed(tn)}catch{return{value:Se}}return{value:Se}}if(ze==="value")return cr(Se)?Fe.stringify(Se):Se;throw new Error("Cannot convert ".concat(Al(Se,Fe)," to ").concat(ze))}(se,y,F());if(qe===se)return;var Oe=[{op:"replace",path:St(_),value:qe}];o("handleConvert",{selection:n(E),path:_,type:y,operations:Oe}),Tt(Oe,(Se,ze)=>({state:n(E)?qa(Se,ze,We(n(E))):n($)}))}catch(Se){te()(Se)}else te()(new Error("Cannot convert current selection to ".concat(y)))}function le(){if(n(E)){var y=Wd(n(T),n($),n(E),!1),_=nn(We(n(E)));y&&!Pn(We(y))&&Xt(_,nn(We(y)))?p(E,Mo(We(y))):p(E,Io(_)),o("insert before",{selection:n(E),selectionBefore:y,parentPath:_}),Zn(),Dn()}}function Kt(){if(n(E)){var y=Xo(n(T),n(E));o("insert after",y),p(E,Mo(y)),Zn(),Dn()}}function W(y){return ke.apply(this,arguments)}function ke(){return(ke=mt(function*(y){yield Ep({char:y,selectInside:!0,json:n(T),selection:n(E),readOnly:m(),parser:F(),onPatch:Tt,onReplaceJson:qt,onSelect:jt})})).apply(this,arguments)}function He(){if(!m()&&k().canUndo){var y=k().undo();if(si(y)){var _={json:n(T),text:n(pe)};p(T,y.undo.patch?Co(n(T),y.undo.patch):y.undo.json),p($,y.undo.documentState),p(E,y.undo.selection),p(pe,y.undo.text),p(ht,y.undo.textIsRepaired),Y=void 0,o("undo",{item:y,json:n(T),documentState:n($),selection:n(E)}),Jt(_,y.undo.patch&&y.redo.patch?{json:n(T),previousJson:_.json,redo:y.undo.patch,undo:y.redo.patch}:void 0),Pe(),n(E)&&Pt(We(n(E)),{scrollToWhenVisible:!1})}else Ee()(y)}}function Ct(){if(!m()&&k().canRedo){var y=k().redo();if(si(y)){var _={json:n(T),text:n(pe)};p(T,y.redo.patch?Co(n(T),y.redo.patch):y.redo.json),p($,y.redo.documentState),p(E,y.redo.selection),p(pe,y.redo.text),p(ht,y.redo.textIsRepaired),Y=void 0,o("redo",{item:y,json:n(T),documentState:n($),selection:n(E)}),Jt(_,y.undo.patch&&y.redo.patch?{json:n(T),previousJson:_.json,redo:y.redo.patch,undo:y.undo.patch}:void 0),Pe(),n(E)&&Pt(We(n(E)),{scrollToWhenVisible:!1})}else Re()(y)}}function Ve(y){var _;m()||n(T)===void 0||(Q=!0,ce()({id:a,json:n(T),rootPath:y,onSort:(_=mt(function*(se){var{operations:qe}=se;o("onSort",y,qe),Tt(qe,(Oe,Se)=>({state:fc(Oe,Se,y),selection:Wt(y)}))}),function(se){return _.apply(this,arguments)}),onClose:()=>{Q=!1,setTimeout(Pe)}}))}function Et(){n(E)&&Ve($d(n(T),n(E)))}function dn(){Ve([])}function zt(y){if(n(T)!==void 0){var{id:_,onTransform:se,onClose:qe}=y,Oe=y.rootPath||[];Q=!0,at()({id:_||i,json:n(T),rootPath:Oe,onTransform:Se=>{se?se({operations:Se,json:n(T),transformedJson:Co(n(T),Se)}):(o("onTransform",Oe,Se),Tt(Se,(ze,Fe)=>({state:fc(ze,Fe,Oe),selection:Wt(Oe)})))},onClose:()=>{Q=!1,setTimeout(Pe),qe&&qe()}})}}function hn(){n(E)&&zt({rootPath:$d(n(T),n(E))})}function ct(){zt({rootPath:[]})}function Pt(y){return nt.apply(this,arguments)}function nt(){return nt=mt(function*(y){var{scrollToWhenVisible:_=!0,element:se}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};p($,fo(n(T),n($),y,Xs));var qe=se??ft(y);if(o("scrollTo",{path:y,elem:qe,refContents:n(u)}),!qe||!n(u))return Promise.resolve();var Oe=n(u).getBoundingClientRect(),Se=qe.getBoundingClientRect();if(!_&&Se.bottom>Oe.top&&Se.top<Oe.bottom)return Promise.resolve();var ze=-Oe.height/4;return new Promise(Fe=>{g(qe,{container:n(u),offset:ze,duration:300,callback:()=>Fe()})})}),nt.apply(this,arguments)}function ft(y){var _,se;return Zn(),(_=(se=n(u))===null||se===void 0?void 0:se.querySelector('div[data-path="'.concat(Jc(y),'"]')))!==null&&_!==void 0?_:void 0}function zn(y){var _,se;return Zn(),(_=(se=n(u))===null||se===void 0?void 0:se.querySelector('span[data-search-result-index="'.concat(y,'"]')))!==null&&_!==void 0?_:void 0}function An(y){var _=ft(y);if(_&&n(u)){var se=n(u).getBoundingClientRect(),qe=_.getBoundingClientRect(),Oe=cr(Le(n(T),y))?20:qe.height;qe.top<se.top+20?g(_,{container:n(u),offset:-20,duration:0}):qe.top+Oe>se.bottom-20&&g(_,{container:n(u),offset:-(se.height-Oe-20),duration:0})}}function Jt(y,_){if(y.json!==void 0||(y==null?void 0:y.text)!==void 0){if(n(pe)!==void 0){var se,qe={text:n(pe),json:void 0};(se=ye())===null||se===void 0||se(qe,y,{contentErrors:Cn(),patchResult:_})}else if(n(T)!==void 0){var Oe,Se={text:void 0,json:n(T)};(Oe=ye())===null||Oe===void 0||Oe(Se,y,{contentErrors:Cn(),patchResult:_})}}}function Tt(y,_){o("handlePatch",y,_);var se={json:n(T),text:n(pe)},qe=Yt(y,_);return Jt(se,qe),qe}function qt(y,_){var se={json:n(T),text:n(pe)},qe={documentState:n($),selection:n(E),json:n(T),text:n(pe),textIsRepaired:n(ht)},Oe=fo(n(T),Hr(y,n($)),[],Xa),Se=typeof _=="function"?_(y,Oe,n(E)):void 0;p(T,(Se==null?void 0:Se.json)!==void 0?Se.json:y),p($,(Se==null?void 0:Se.state)!==void 0?Se.state:Oe),p(E,(Se==null?void 0:Se.selection)!==void 0?Se.selection:n(E)),p(pe,void 0),p(ht,!1),Y=void 0,Dt(n(T)),_n(qe),Jt(se,void 0)}function Wn(y,_){o("handleChangeText");var se={json:n(T),text:n(pe)},qe={documentState:n($),selection:n(E),json:n(T),text:n(pe),textIsRepaired:n(ht)};try{p(T,B()(y)),p($,fo(n(T),Hr(n(T),n($)),[],Xa)),p(pe,void 0),p(ht,!1),Y=void 0}catch(Se){try{p(T,B()(zo(y))),p($,fo(n(T),Hr(n(T),n($)),[],Xa)),p(pe,y),p(ht,!0),Y=void 0}catch{p(T,void 0),p($,Hc({json:n(T),expand:Xa})),p(pe,y),p(ht,!1),Y=n(pe)!==""?gs(n(pe),Se.message||String(Se)):void 0}}if(typeof _=="function"){var Oe=_(n(T),n($),n(E));p(T,(Oe==null?void 0:Oe.json)!==void 0?Oe.json:n(T)),p($,(Oe==null?void 0:Oe.state)!==void 0?Oe.state:n($)),p(E,(Oe==null?void 0:Oe.selection)!==void 0?Oe.selection:n(E))}Dt(n(T)),_n(qe),Jt(se,void 0)}function U(y,_){var se=arguments.length>2&&arguments[2]!==void 0&&arguments[2];o("handleExpand",{path:y,expanded:_,recursive:se}),_?De(y,se?Il:Qc):Bt(y,se),Pe()}function X(){U([],!0,!0)}function he(){U([],!1,!0)}function Rt(y){o("openFind",{findAndReplace:y}),p(Ge,!1),p(Mt,!1),Zn(),p(Ge,!0),p(Mt,y)}function sn(y,_){o("handleExpandSection",y,_),p($,function(se,qe,Oe,Se){return js(se,qe,Oe,(ze,Fe)=>{if(!Mr(Fe))return Fe;var yt=Nf(Fe.visibleSections.concat(Se));return me(me({},Fe),{},{visibleSections:yt})})}(n(T),n($),y,_))}function Zt(y){o("pasted json as text",y),p(st,y)}function jn(y){var _,{anchor:se,left:qe,top:Oe,width:Se,height:ze,offsetTop:Fe,offsetLeft:yt,showTip:tn}=y,Qt=function(Tn){var{json:Bn,documentState:cn,selection:_e,readOnly:Qe,onEditKey:vn,onEditValue:Kn,onToggleEnforceString:or,onCut:wn,onCopy:xn,onPaste:Nt,onRemove:fr,onDuplicate:Rr,onExtract:uo,onInsertBefore:jo,onInsert:vo,onConvert:Cr,onInsertAfter:Ur,onSort:Do,onTransform:Ba}=Tn,Xr=Bn!==void 0,pr=!!_e,$n=!!_e&&Pn(We(_e)),yr=_e?Le(Bn,We(_e)):void 0,Jo=Array.isArray(yr)?"Edit array":fn(yr)?"Edit object":"Edit value",Lr=Xr&&(Fn(_e)||jr(_e)||yn(_e)),Ts=_e&&!$n?Le(Bn,nn(We(_e))):void 0,Ns=!Qe&&Xr&&vl(_e)&&!$n&&!Array.isArray(Ts),La=!Qe&&Xr&&_e!==void 0&&vl(_e),Wl=La&&!cr(yr),qs=!Qe&&Lr,Is=Lr,Vl=!Qe&&pr,$l=!Qe&&Xr&&Lr&&!$n,Hl=!Qe&&Xr&&_e!==void 0&&(Fn(_e)||yn(_e))&&!$n,Ln=Lr,Tr=Ln?"Convert to:":"Insert:",Us=!Qe&&(zr(_e)&&Array.isArray(yr)||Kr(_e)&&Array.isArray(Ts)),Ds=!Qe&&(Ln?Di(_e)&&!fn(yr):pr),ka=!Qe&&(Ln?Di(_e)&&!Array.isArray(yr):pr),Fr=!Qe&&(Ln?Di(_e)&&cr(yr):pr),Ql=_e!==void 0&&Go(Bn,cn,We(_e));function Fa(Js){Lr?Js!=="structure"&&Cr(Js):vo(Js)}return[{type:"row",items:[{type:"button",onClick:()=>vn(),icon:rs,text:"Edit key",title:"Edit the key (Double-click on the key)",disabled:!Ns},{type:"dropdown-button",main:{type:"button",onClick:()=>Kn(),icon:rs,text:Jo,title:"Edit the value (Double-click on the value)",disabled:!La},width:"11em",items:[{type:"button",icon:rs,text:Jo,title:"Edit the value (Double-click on the value)",onClick:()=>Kn(),disabled:!La},{type:"button",icon:Ql?hv:gv,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>or(),disabled:!Wl}]}]},{type:"separator"},{type:"row",items:[{type:"dropdown-button",main:{type:"button",onClick:()=>wn(!0),icon:os,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!qs},width:"10em",items:[{type:"button",icon:os,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>wn(!0),disabled:!qs},{type:"button",icon:os,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>wn(!1),disabled:!qs}]},{type:"dropdown-button",main:{type:"button",onClick:()=>xn(!0),icon:la,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Is},width:"12em",items:[{type:"button",icon:la,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>xn(!0),disabled:!Is},{type:"button",icon:la,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>xn(!1),disabled:!Is}]},{type:"button",onClick:()=>Nt(),icon:mv,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:!Vl}]},{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"button",onClick:()=>Rr(),icon:bv,text:"Duplicate",title:"Duplicate selected contents (Ctrl+D)",disabled:!$l},{type:"button",onClick:()=>uo(),icon:ah,text:"Extract",title:"Extract selected contents",disabled:!Hl},{type:"button",onClick:()=>Do(),icon:Zi,text:"Sort",title:"Sort array or object contents",disabled:Qe||!Lr},{type:"button",onClick:()=>Ba(),icon:Gi,text:"Transform",title:"Transform array or object contents (filter, sort, project)",disabled:Qe||!Lr},{type:"button",onClick:()=>fr(),icon:zc,text:"Remove",title:"Remove selected contents (Delete)",disabled:Qe||!Lr}]},{type:"column",items:[{type:"label",text:Tr},{type:"button",onClick:()=>Fa("structure"),icon:Ln?Ai:Za,text:"Structure",title:Tr+" structure like the first item in the array",disabled:!Us},{type:"button",onClick:()=>Fa("object"),icon:Ln?Ai:Za,text:"Object",title:Tr+" object",disabled:!Ds},{type:"button",onClick:()=>Fa("array"),icon:Ln?Ai:Za,text:"Array",title:Tr+" array",disabled:!ka},{type:"button",onClick:()=>Fa("value"),icon:Ln?Ai:Za,text:"Value",title:Tr+" value",disabled:!Fr}]}]},{type:"separator"},{type:"row",items:[{type:"button",onClick:()=>jo(),icon:sh,text:"Insert before",title:"Select area before current entry to insert or paste contents",disabled:Qe||!Lr||$n},{type:"button",onClick:()=>Ur(),icon:ih,text:"Insert after",title:"Select area after current entry to insert or paste contents",disabled:Qe||!Lr||$n}]}]}({json:n(T),documentState:n($),selection:n(E),readOnly:m(),onEditKey:pn,onEditValue:rn,onToggleEnforceString:Lt,onCut:an,onCopy:Ft,onPaste:Yn,onRemove:lr,onDuplicate:gr,onExtract:dr,onInsertBefore:le,onInsert:qn,onInsertAfter:Kt,onConvert:Xn,onSort:Et,onTransform:hn}),Mn=(_=we()(Qt))!==null&&_!==void 0?_:Qt;if(Mn!==!1){var ut={left:qe,top:Oe,offsetTop:Fe,offsetLeft:yt,width:Se,height:ze,anchor:se,closeOnOuterClick:!0,onClose:()=>{Q=!1,Pe()}};Q=!0;var er=l(Np,{tip:tn?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:Mn,onRequestClose:()=>c(er)},ut)}}function Dn(y){if(!Br(n(E)))if(y&&(y.stopPropagation(),y.preventDefault()),y&&y.type==="contextmenu"&&y.target!==n(d))jn({left:y.clientX,top:y.clientY,width:Vo,height:Wo,showTip:!1});else{var _,se=(_=n(u))===null||_===void 0?void 0:_.querySelector(".jse-context-menu-pointer.jse-selected");if(se)jn({anchor:se,offsetTop:2,width:Vo,height:Wo,showTip:!1});else{var qe,Oe=(qe=n(u))===null||qe===void 0?void 0:qe.getBoundingClientRect();Oe&&jn({top:Oe.top+2,left:Oe.left+2,width:Vo,height:Wo,showTip:!1})}}}function In(y){jn({anchor:Pf(y.target,"BUTTON"),offsetTop:0,width:Vo,height:Wo,showTip:!0})}function Vn(){return gt.apply(this,arguments)}function gt(){return(gt=mt(function*(){if(o("apply pasted json",n(st)),n(st)){var{onPasteAsJson:y}=n(st);p(st,void 0),y(),setTimeout(Pe)}})).apply(this,arguments)}function Jn(){o("clear pasted json"),p(st,void 0),Pe()}function dt(){ne()(br.text)}function mr(y){p(E,y),Pe(),Pt(We(y))}function Pe(){o("focus"),n(d)&&(n(d).focus(),n(d).select())}function on(y){return function(_,se,qe){var Oe=nn(qe),Se=[Vt(qe)],ze=Le(_,Oe),Fe=ze?vc(ze,se,Se):void 0;return Fe?Wt(Oe.concat(Fe)):Mo(qe)}(n(T),n($),y)}function On(y){n(r)&&n(r).onDrag(y)}function ln(){n(r)&&n(r).onDragEnd()}var rr=P(void 0,!0);J(()=>n(E),()=>{var y;y=n(E),Xt(y,j())||(o("onSelect",y),ve()(y))}),J(()=>(z(x()),z(I())),()=>{p(lt,zu({escapeControlCharacters:x(),escapeUnicodeCharacters:I()}))}),J(()=>n(Ge),()=>{(function(y){n(u)&&y&&n(u).scrollTop===0&&(Qr(u,n(u).style.overflowAnchor="none"),Qr(u,n(u).scrollTop+=Ys),setTimeout(()=>{n(u)&&Qr(u,n(u).style.overflowAnchor="")}))})(n(Ge))}),J(()=>z(b()),()=>{ir(b())}),J(()=>z(j()),()=>{(function(y){Xt(n(E),y)||(o("applyExternalSelection",{selection:n(E),externalSelection:y}),ci(y)&&p(E,y))})(j())}),J(()=>(n(T),z(S()),z(F()),z(V())),()=>{Ze(n(T),S(),F(),V())}),J(()=>(n(u),iv),()=>{p(r,n(u)?iv(n(u)):void 0)}),J(()=>(z(m()),z(C()),z(F()),n(lt),z(fe()),z(Ue())),()=>{p(rr,{mode:br.tree,readOnly:m(),truncateTextSize:C(),parser:F(),normalization:n(lt),getJson:Je,getDocumentState:At,getSelection:Ut,findElement:ft,findNextInside:on,focus:Pe,onPatch:Tt,onInsert:Nn,onExpand:U,onSelect:jt,onFind:Rt,onExpandSection:sn,onPasteJson:Zt,onRenderValue:fe(),onContextMenu:jn,onClassName:Ue()||(()=>{}),onDrag:On,onDragEnd:ln})}),J(()=>n(rr),()=>{o("context changed",n(rr))}),mn(),bt(!0);var Ir=$x();ie("mousedown",Yo,function(y){!As(y.target,_=>_===n(v))&&Br(n(E))&&(o("click outside the editor, exit edit mode"),p(E,wo(n(E))),f&&n(d)&&(n(d).focus(),n(d).blur()),o("blur (outside editor)"),n(d)&&n(d).blur())});var w,Z=ot(Ir),oe=O(Z),ue=y=>{(function(_,se){et(se,!1);var qe=P(void 0,!0),Oe=P(void 0,!0),Se=P(void 0,!0),ze=h(se,"json",9),Fe=h(se,"selection",9),yt=h(se,"readOnly",9),tn=h(se,"showSearch",13,!1),Qt=h(se,"history",9),Mn=h(se,"onExpandAll",9),ut=h(se,"onCollapseAll",9),er=h(se,"onUndo",9),Tn=h(se,"onRedo",9),Bn=h(se,"onSort",9),cn=h(se,"onTransform",9),_e=h(se,"onContextMenu",9),Qe=h(se,"onCopy",9),vn=h(se,"onRenderMenu",9);function Kn(){tn(!tn())}var or=P(void 0,!0),wn=P(void 0,!0),xn=P(void 0,!0),Nt=P(void 0,!0);J(()=>z(ze()),()=>{p(qe,ze()!==void 0)}),J(()=>(n(qe),z(Fe()),yn),()=>{p(Oe,n(qe)&&(Fn(Fe())||jr(Fe())||yn(Fe())))}),J(()=>(z(Mn()),z(ze())),()=>{p(or,{type:"button",icon:Yj,title:"Expand all",className:"jse-expand-all",onClick:Mn(),disabled:!cr(ze())})}),J(()=>(z(ut()),z(ze())),()=>{p(wn,{type:"button",icon:Kj,title:"Collapse all",className:"jse-collapse-all",onClick:ut(),disabled:!cr(ze())})}),J(()=>z(ze()),()=>{p(xn,{type:"button",icon:wl,title:"Search (Ctrl+F)",className:"jse-search",onClick:Kn,disabled:ze()===void 0})}),J(()=>(z(yt()),n(or),n(wn),z(Bn()),z(ze()),z(cn()),n(xn),z(_e()),z(er()),z(Qt()),z(Tn()),z(Qe()),n(Oe)),()=>{p(Nt,yt()?[n(or),n(wn),{type:"separator"},{type:"button",icon:la,title:"Copy (Ctrl+C)",className:"jse-copy",onClick:Qe(),disabled:!n(Oe)},{type:"separator"},n(xn),{type:"space"}]:[n(or),n(wn),{type:"separator"},{type:"button",icon:Zi,title:"Sort",className:"jse-sort",onClick:Bn(),disabled:yt()||ze()===void 0},{type:"button",icon:Gi,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:cn(),disabled:yt()||ze()===void 0},n(xn),{type:"button",icon:jv,title:Au,className:"jse-contextmenu",onClick:_e()},{type:"separator"},{type:"button",icon:du,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:er(),disabled:!Qt().canUndo},{type:"button",icon:vu,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Tn(),disabled:!Qt().canRedo},{type:"space"}])}),J(()=>(z(vn()),n(Nt)),()=>{p(Se,vn()(n(Nt))||n(Nt))}),mn(),bt(!0),_l(_,{get items(){return n(Se)}}),tt()})(y,{get json(){return n(T)},get selection(){return n(E)},get readOnly(){return m()},get history(){return k()},onExpandAll:X,onCollapseAll:he,onUndo:He,onRedo:Ct,onSort:dn,onTransform:ct,onContextMenu:In,onCopy:Ft,get onRenderMenu(){return Ce()},get showSearch(){return n(Ge)},set showSearch(_){p(Ge,_)},$$legacy:!0})};K(oe,y=>{A()&&y(ue)});var xe=q(oe,2),Te=y=>{hx(y,{get json(){return n(T)},get selection(){return n(E)},onSelect:mr,get onError(){return te()},get pathParser(){return G()}})};K(xe,y=>{M()&&y(Te)});var Ne=q(xe,2),Xe=y=>{var _=Wx(),se=ot(_),qe=O(se);qe.readOnly=!0,Qn(qe,Fe=>p(d,Fe),()=>n(d));var Oe=q(se,2),Se=Fe=>{var yt=tr(),tn=ot(yt),Qt=ut=>{(function(er,Tn){et(Tn,!0);var Bn=nx();Bn.__click=[ex,Tn];var cn=q(O(Bn),2),_e=q(O(cn),2),Qe=vn=>{var Kn=tx(),or=q(ot(Kn),2);gn(or,"title","Create an empty JSON object (press '{')"),or.__click=[Gj,Tn];var wn=q(or,2);gn(wn,"title","Create an empty JSON array (press '[')"),wn.__click=[Xj,Tn],R(vn,Kn)};K(_e,vn=>{Tn.readOnly||vn(Qe)}),R(er,Bn),tt()})(ut,{get readOnly(){return m()},onCreateObject:()=>{Pe(),W("{")},onCreateArray:()=>{Pe(),W("[")},onClick:()=>{Pe()}})},Mn=ut=>{var er=Lx(),Tn=ot(er),Bn=ae(()=>m()?[]:[{icon:Xi,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:dt}]);mo(Tn,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(Bn)}}),Tp(q(Tn,2),{get text(){return n(pe)},get json(){return n(T)},get indentation(){return H()},get parser(){return F()}}),R(ut,er)};K(tn,ut=>{n(pe)===""||n(pe)===void 0?ut(Qt):ut(Mn,!1)}),R(Fe,yt)},ze=Fe=>{var yt=_x(),tn=ot(yt);Cp(O(tn),{get json(){return n(T)},get documentState(){return n($)},get parser(){return F()},get showSearch(){return n(Ge)},get showReplace(){return n(Mt)},get readOnly(){return m()},columns:void 0,onSearch:Be,onFocus:It,onPatch:Tt,onClose:Ie});var Qt=q(tn,2);gn(Qt,"data-jsoneditor-scrollable-contents",!0);var Mn=O(Qt),ut=_e=>{R(_e,Fx())};K(Mn,_e=>{n(Ge)&&_e(ut)}),ou(q(Mn,2),{get value(){return n(T)},pointer:"",get state(){return n($)},get validationErrors(){return n(D)},get searchResults(){return n(je)},get selection(){return n(E)},get context(){return n(rr)},onDragSelectionStart:hr}),Qn(Qt,_e=>p(u,_e),()=>n(u));var er=q(Qt,2),Tn=_e=>{var Qe=ae(()=>"You pasted a JSON ".concat(Array.isArray(n(st).contents)?"array":"object"," as text"));mo(_e,{type:"info",get message(){return n(Qe)},actions:[{icon:fs,text:"Paste as JSON instead",title:"Replace the value with the pasted JSON",onMouseDown:Vn},{text:"Leave as is",title:"Keep the JSON embedded in the value",onClick:Jn}]})};K(er,_e=>{n(st)&&_e(Tn)});var Bn=q(er,2),cn=_e=>{var Qe=ae(()=>m()?[]:[{icon:fu,text:"Ok",title:"Accept the repaired document",onClick:xt},{icon:Xi,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:dt}]);mo(_e,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(Qe)},onClose:Pe})};K(Bn,_e=>{n(ht)&&_e(cn)}),Vu(q(Bn,2),{get validationErrors(){return n($e)},selectError:Ae}),R(Fe,yt)};K(Oe,Fe=>{n(T)===void 0?Fe(Se):Fe(ze,!1)}),ie("paste",qe,Rn),R(y,_)},_t=y=>{R(y,Vx())};K(Ne,y=>{s?y(_t,!1):y(Xe)}),Qn(Z,y=>p(v,y),()=>n(v));var Gt=q(Z,2),Ht=y=>{yp(y,{onClose:()=>p(N,!1)})};K(Gt,y=>{n(N)&&y(Ht)});var kt=q(Gt,2),En=y=>{wp(y,ha(()=>n(ee),{onClose:()=>{var _;(_=n(ee))===null||_===void 0||_.onClose(),p(ee,void 0)}}))};return K(kt,y=>{n(ee)&&y(En)}),be(y=>w=wt(Z,1,"jse-tree-mode svelte-vrx1dr",null,w,y),[()=>({"no-main-menu":!A()})],ae),ie("keydown",Z,function(y){var _=No(y),se=y.shiftKey;if(o("keydown",{combo:_,key:y.key}),_==="Ctrl+X"&&(y.preventDefault(),an(!0)),_==="Ctrl+Shift+X"&&(y.preventDefault(),an(!1)),_==="Ctrl+C"&&(y.preventDefault(),Ft(!0)),_==="Ctrl+Shift+C"&&(y.preventDefault(),Ft(!1)),_==="Ctrl+D"&&(y.preventDefault(),gr()),_!=="Delete"&&_!=="Backspace"||(y.preventDefault(),lr()),_==="Insert"&&(y.preventDefault(),Nn("structure")),_==="Ctrl+A"&&(y.preventDefault(),p(E,Wt([]))),_==="Ctrl+Q"&&Dn(y),_==="ArrowUp"||_==="Shift+ArrowUp"){y.preventDefault();var qe=n(E)?Wd(n(T),n($),n(E),se)||n(E):$a(n(T),n($));p(E,qe),An(We(qe))}if(_==="ArrowDown"||_==="Shift+ArrowDown"){y.preventDefault();var Oe=n(E)?function(Qt,Mn,ut){var er=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(ut){var Tn=er?We(ut):Xo(Qt,ut),Bn=cr(Le(Qt,Tn))?Bd(Qt,Mn,Tn,!0):Mn,cn=vc(Qt,Mn,Tn),_e=vc(Qt,Bn,Tn);if(er)return zr(ut)?cn!==void 0?Ar(cn,cn):void 0:Kr(ut)?_e!==void 0?Ar(_e,_e):void 0:_e!==void 0?Ar(ga(ut),_e):void 0;if(Kr(ut))return _e!==void 0?Wt(_e):void 0;if(zr(ut)||yn(ut))return cn!==void 0?Wt(cn):void 0;if(jr(ut)){if(cn===void 0||cn.length===0)return;var Qe=nn(cn),vn=Le(Qt,Qe);return Array.isArray(vn)?Wt(cn):qo(cn)}return Fn(ut)?_e!==void 0?Wt(_e):cn!==void 0?Wt(cn):void 0:void 0}}(n(T),n($),n(E),se)||n(E):$a(n(T),n($));p(E,Oe),An(We(Oe))}if(_==="ArrowLeft"||_==="Shift+ArrowLeft"){y.preventDefault();var Se=n(E)?function(Qt,Mn,ut){var er=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Tn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ut){var{caret:Bn,previous:cn}=Vd(Qt,Mn,ut,Tn);if(er)return Fn(ut)?void 0:Ar(ut.path,ut.path);if(Bn&&cn)return Yc(cn);var _e=nn(We(ut)),Qe=Le(Qt,_e);return yn(ut)&&Array.isArray(Qe)?Ar(ut.path,ut.path):Fn(ut)&&!Array.isArray(Qe)?qo(ut.focusPath):void 0}}(n(T),n($),n(E),se,!m())||n(E):$a(n(T),n($));p(E,Se),An(We(Se))}if(_==="ArrowRight"||_==="Shift+ArrowRight"){y.preventDefault();var ze=n(E)&&n(T)!==void 0?function(Qt,Mn,ut){var er=arguments.length>3&&arguments[3]!==void 0&&arguments[3],Tn=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4];if(ut){var{caret:Bn,next:cn}=Vd(Qt,Mn,ut,Tn);return er?Fn(ut)?void 0:Ar(ut.path,ut.path):Bn&&cn?Yc(cn):Fn(ut)?Wt(ut.focusPath):void 0}}(n(T),n($),n(E),se,!m())||n(E):$a(n(T),n($));p(E,ze),An(We(ze))}if(_==="Enter"&&n(E)){if(Ul(n(E))){var Fe=n(E).focusPath,yt=Le(n(T),nn(Fe));Array.isArray(yt)&&(y.preventDefault(),p(E,Wt(Fe)))}jr(n(E))&&(y.preventDefault(),p(E,me(me({},n(E)),{},{edit:!0}))),yn(n(E))&&(y.preventDefault(),cr(Le(n(T),n(E).path))?U(n(E).path,!0):p(E,me(me({},n(E)),{},{edit:!0})))}if(_.replace(/^Shift\+/,"").length===1&&n(E))return y.preventDefault(),void W(y.key);if(_==="Enter"&&(Kr(n(E))||zr(n(E))))return y.preventDefault(),void W("");if(_==="Ctrl+Enter"&&yn(n(E))){var tn=Le(n(T),n(E).path);wi(tn)&&window.open(String(tn),"_blank")}_==="Escape"&&n(E)&&(y.preventDefault(),p(E,void 0)),_==="Ctrl+F"&&(y.preventDefault(),Rt(!1)),_==="Ctrl+H"&&(y.preventDefault(),Rt(!0)),_==="Ctrl+Z"&&(y.preventDefault(),He()),_==="Ctrl+Shift+Z"&&(y.preventDefault(),Ct())}),ie("mousedown",Z,function(y){o("handleMouseDown",y);var _=y.target;Mf(_,"BUTTON")||_.isContentEditable||(Pe(),n(E)||n(T)!==void 0||n(pe)!==""&&n(pe)!==void 0||(o("createDefaultSelection"),p(E,Wt([]))))}),ie("contextmenu",Z,Dn),R(t,Ir),pt(e,"expand",De),pt(e,"collapse",Bt),pt(e,"validate",Cn),pt(e,"getJson",Je),pt(e,"patch",Yt),pt(e,"acceptAutoRepair",xt),pt(e,"openTransformModal",zt),pt(e,"scrollTo",Pt),pt(e,"findElement",ft),pt(e,"findSearchResult",zn),pt(e,"focus",Pe),tt({expand:De,collapse:Bt,validate:Cn,getJson:Je,patch:Yt,acceptAutoRepair:xt,openTransformModal:zt,scrollTo:Pt,findElement:ft,findSearchResult:zn,focus:Pe})}function Ip(t){return typeof(e=t)!="object"||e===null?t:new Proxy(t,{get:(r,o,s)=>Ip(Reflect.get(r,o,s)),set:()=>!1,deleteProperty:()=>!1});var e}var Wi=wr("jsoneditor:History");function Up(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.maxItems||1e3,r=[],o=0;function s(){return o<r.length}function a(){return o>0}function i(){return{canUndo:s(),canRedo:a(),items:()=>r.slice().reverse(),add:c,undo:d,redo:v,clear:u}}function l(){t.onChange&&t.onChange(i())}function c(f){Wi("add",f),r=[f].concat(r.slice(o)).slice(0,e),o=0,l()}function u(){Wi("clear"),r=[],o=0,l()}function d(){if(s()){var f=r[o];return o+=1,Wi("undo",f),l(),f}}function v(){if(a())return Wi("redo",r[o-=1]),l(),r[o]}return{get:i}}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-rrrjnb {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .query-error:where(.svelte-rrrjnb) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data.jse-hide:where(.svelte-rrrjnb) {
  flex: none;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-preview-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents.jse-hide-original-data:where(.svelte-rrrjnb) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) button:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb),
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):focus,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):read-only,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-preview.jse-error:where(.svelte-rrrjnb) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-rrrjnb a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);var $s=Rl(()=>ob),Ha=Rl(()=>ab),Hx=L('<div class="query-error svelte-rrrjnb"> </div>'),Qx=L("<!> <!>",1),Yx=L('<div class="jse-preview jse-error svelte-rrrjnb"> </div>'),Kx=L('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>',1),Zx=L('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');function Gx(t,e){var r,o,s;et(e,!1);var a=wr("jsoneditor:TransformModal"),i=h(e,"id",25,()=>"transform-modal-"+Ga()),l=h(e,"json",9),c=h(e,"rootPath",25,()=>[]),u=h(e,"indentation",9),d=h(e,"truncateTextSize",9),v=h(e,"escapeControlCharacters",9),f=h(e,"escapeUnicodeCharacters",9),g=h(e,"parser",9),m=h(e,"parseMemoizeOne",9),b=h(e,"validationParser",9),j=h(e,"pathParser",9),k=h(e,"queryLanguages",9),C=h(e,"queryLanguageId",13),A=h(e,"onChangeQueryLanguage",9),M=h(e,"onRenderValue",9),x=h(e,"onRenderMenu",9),I=h(e,"onRenderContextMenu",9),F=h(e,"onClassName",9),B=h(e,"onTransform",9),S=h(e,"onClose",9),V=P(void 0,!0),G=P(Up({onChange:$=>p(G,$)}).get(),!0),H=P(void 0,!0),te=P(void 0,!0),ye=P(!1,!0),ne="".concat(i(),":").concat(St(c())),ve=(r=$s()[ne])!==null&&r!==void 0?r:{},Ee=P(Ha().showWizard!==!1,!0),Re=P(Ha().showOriginal!==!1,!0),fe=P((o=ve.queryOptions)!==null&&o!==void 0?o:{},!0),Ce=P(C()===ve.queryLanguageId&&ve.query?ve.query:"",!0),we=P((s=ve.isManual)!==null&&s!==void 0&&s,!0),Ue=P(void 0,!0),de=P(void 0,!0),re=P({text:""},!0);function ce($){var E;return(E=k().find(jt=>jt.id===$))!==null&&E!==void 0?E:k()[0]}function at($){try{p(fe,$),p(Ce,ce(C()).createQuery(n(H),$)),p(Ue,void 0),p(we,!1),a("updateQueryByWizard",{queryOptions:n(fe),query:n(Ce),isManual:n(we)})}catch(E){p(Ue,String(E))}}function Ot($){p(Ce,$.target.value),p(we,!0),a("handleChangeQuery",{query:n(Ce),isManual:n(we)})}n(we)||at(n(fe)),Er(()=>{var $;($=n(V))===null||$===void 0||$.focus()});var Q=Ki(function($,E){if($===void 0)return p(re,{text:""}),void p(de,"Error: No JSON");if(E.trim()!=="")try{a("previewTransform",{query:E});var jt=ce(C()).executeQuery($,E,g());p(re,{json:jt}),p(de,void 0)}catch(Ke){p(re,{text:""}),p(de,String(Ke))}else p(re,{json:$})},300);function N(){if(n(H)===void 0)return p(re,{text:""}),void p(de,"Error: No JSON");try{a("handleTransform",{query:n(Ce)});var $=ce(C()).executeQuery(n(H),n(Ce),g());B()([{op:"replace",path:St(c()),value:$}]),S()()}catch(E){console.error(E),p(re,{text:""}),p(de,String(E))}}function ee(){p(Ee,!n(Ee)),Ha(Ha().showWizard=n(Ee))}function T(){p(Re,!n(Re)),Ha(Ha().showOriginal=n(Re))}function pe($){$.focus()}function Y($){a("handleChangeQueryLanguage",$),C($),A()($),at(n(fe))}function Me(){n(ye)?p(ye,!n(ye)):S()()}J(()=>(z(l()),z(c())),()=>{p(H,Ip(Le(l(),c())))}),J(()=>n(H),()=>{p(te,n(H)?{json:n(H)}:{text:""})}),J(()=>(n(H),n(Ce)),()=>{Q(n(H),n(Ce))}),J(()=>($s(),n(fe),n(Ce),z(C()),n(we)),()=>{$s($s()[ne]={queryOptions:n(fe),query:n(Ce),queryLanguageId:C(),isManual:n(we)}),a("store state in memory",ne,$s()[ne])}),mn(),bt(!0),hi(t,{get onClose(){return S()},className:"jse-transform-modal",get fullscreen(){return n(ye)},children:($,E)=>{var jt=Zx();Bc(O(jt),{children:(Ke,lt)=>{var st=Kx(),je=ot(st);(function(rt,Ft){et(Ft,!1);var $t,Rn=h(Ft,"queryLanguages",9),Yn=h(Ft,"queryLanguageId",9),bn=h(Ft,"fullscreen",13),ur=h(Ft,"onChangeQueryLanguage",9),nr=h(Ft,"onClose",9),lr=P(void 0,!0),{openAbsolutePopup:gr,closeAbsolutePopup:dr}=ya("absolute-popup");function Nn(){var qn={queryLanguages:Rn(),queryLanguageId:Yn(),onChangeQueryLanguage:Xn=>{dr($t),ur()(Xn)}};$t=gr(Lb,qn,{offsetTop:-2,offsetLeft:0,anchor:n(lr),closeOnOuterClick:!0})}bt(!0),jl(rt,{title:"Transform",fullScreenButton:!0,get onClose(){return nr()},get fullscreen(){return bn()},set fullscreen(qn){bn(qn)},$$slots:{actions:(qn,Xn)=>{var le,Kt=Wb();en(O(Kt),{data:ph}),Qn(Kt,W=>p(lr,W),()=>n(lr)),be(W=>le=wt(Kt,1,"jse-config svelte-1kpylsp",null,le,W),[()=>({hide:Rn().length<=1})],ae),ie("click",Kt,Nn),R(qn,Kt)}},$$legacy:!0}),tt()})(je,{get queryLanguages(){return k()},get queryLanguageId(){return C()},onChangeQueryLanguage:Y,get onClose(){return S()},get fullscreen(){return n(ye)},set fullscreen(rt){p(ye,rt)},$$legacy:!0});var Ge=O(q(je,2)),Mt=O(Ge),Be=q(O(Mt),2);rf(O(Be),()=>ce(C()).description,!1,!1);var It=q(Be,4),ge=q(It,2),Ie=O(ge),Ae=O(Ie),De=O(Ae),Bt=ae(()=>n(Ee)?ma:ei);en(De,{get data(){return n(Bt)}});var ht=q(ge,2),$e=rt=>{var Ft=tr(),$t=ot(Ft),Rn=bn=>{var ur=Qx(),nr=ot(ur);Db(nr,{get queryOptions(){return n(fe)},get json(){return n(H)},onChange:at});var lr=q(nr,2),gr=dr=>{var Nn=Hx(),qn=O(Nn);be(()=>it(qn,n(Ue))),R(dr,Nn)};K(lr,dr=>{n(Ue)&&dr(gr)}),R(bn,ur)},Yn=bn=>{R(bn,kr("(Only available for arrays, not for objects)"))};K($t,bn=>{Array.isArray(n(H))?bn(Rn):bn(Yn,!1)}),R(rt,Ft)};K(ht,rt=>{n(Ee)&&rt($e)});var D=q(ht,4);Qn(D,rt=>p(V,rt),()=>n(V));var Ye,Ze,Cn=q(Mt,2),Je=O(Cn),At=O(Je),Ut=O(At),ir=O(Ut),un=O(ir),Dt=ae(()=>n(Re)?ma:ei);en(un,{get data(){return n(Dt)}});var _n=q(At,2),Yt=rt=>{uu(rt,{get externalContent(){return n(te)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return f()},get parser(){return g()},get parseMemoizeOne(){return m()},get onRenderValue(){return M()},get onRenderMenu(){return x()},get onRenderContextMenu(){return I()},onError:console.error,onChange:hr,onChangeMode:hr,onSelect:hr,onUndo:hr,onRedo:hr,onFocus:hr,onBlur:hr,onSortModal:hr,onTransformModal:hr,onJSONEditorModal:hr,get onClassName(){return F()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})};K(_n,rt=>{n(Re)&&rt(Yt)});var pn=q(Je,2),rn=q(O(pn),2),Lt=rt=>{uu(rt,{get externalContent(){return n(re)},externalSelection:void 0,get history(){return n(G)},readOnly:!0,get truncateTextSize(){return d()},mainMenuBar:!1,navigationBar:!1,get indentation(){return u()},get escapeControlCharacters(){return v()},get escapeUnicodeCharacters(){return f()},get parser(){return g()},get parseMemoizeOne(){return m()},get onRenderValue(){return M()},get onRenderMenu(){return x()},get onRenderContextMenu(){return I()},onError:console.error,onChange:hr,onChangeMode:hr,onSelect:hr,onUndo:hr,onRedo:hr,onFocus:hr,onBlur:hr,onSortModal:hr,onTransformModal:hr,onJSONEditorModal:hr,get onClassName(){return F()},validator:void 0,get validationParser(){return b()},get pathParser(){return j()}})},xt=rt=>{var Ft=Yx(),$t=O(Ft);be(()=>it($t,n(de))),R(rt,Ft)};K(rn,rt=>{n(de)?rt(xt,!1):rt(Lt)});var an=O(q(Ge,2));Or(()=>ie("click",an,N)),qr(an,rt=>pe==null?void 0:pe(rt)),be((rt,Ft,$t)=>{Na(It,rt),Na(D,n(Ce)),Ye=wt(Cn,1,"jse-data-contents svelte-rrrjnb",null,Ye,Ft),Ze=wt(Je,1,"jse-original-data svelte-rrrjnb",null,Ze,$t),an.disabled=!!n(de)},[()=>Pn(c())?"(document root)":ao(c()),()=>({"jse-hide-original-data":!n(Re)}),()=>({"jse-hide":!n(Re)})],ae),ie("click",Ae,ee),ie("input",D,Ot),ie("click",ir,T),R(Ke,st)},$$slots:{default:!0}}),qr(jt,(Ke,lt)=>pi==null?void 0:pi(Ke,lt),()=>Me),R($,jt)},$$slots:{default:!0}}),tt()}function no(){}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1ulj7zd {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1ulj7zd:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1ulj7zd .jse-status-bar-info:where(.svelte-1ulj7zd) {
  padding: 2px;
}`);var Xx=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),e0=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),t0=L('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>'),n0=L('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>'),Hu=Kh.define([{tag:$r.propertyName,color:"var(--internal-key-color)"},{tag:$r.number,color:"var(--internal-value-color-number)"},{tag:$r.bool,color:"var(--internal-value-color-boolean)"},{tag:$r.string,color:"var(--internal-value-color-string)"},{tag:$r.keyword,color:"var(--internal-value-color-null)"}]),r0=yv(Hu),o0=Hu.style;Hu.style=t=>o0(t||[]);var a0=[Sh.fromClass(class{constructor(t){this.view=t,this.indentUnit=ed(t.state),this.initialPaddingLeft=null,this.isChrome=window==null?void 0:window.navigator.userAgent.includes("Chrome"),this.generate(t.state)}update(t){var e=ed(t.state);(e!==this.indentUnit||t.docChanged||t.viewportChanged)&&(this.indentUnit=e,this.generate(t.state))}generate(t){var e=new wh;this.initialPaddingLeft?this.addStyleToBuilder(e,t,this.initialPaddingLeft):this.view.requestMeasure({read:r=>{var o=r.contentDOM.querySelector(".cm-line");o&&(this.initialPaddingLeft=window.getComputedStyle(o).getPropertyValue("padding-left"),this.addStyleToBuilder(e,r.state,this.initialPaddingLeft)),this.decorations=e.finish()}}),this.decorations=e.finish()}addStyleToBuilder(t,e,r){var o=this.getVisibleLines(e);for(var s of o){var{numColumns:a,containsTab:i}=this.numColumns(s.text,e.tabSize),l="calc(".concat(a+this.indentUnit,"ch + ").concat(r,")"),c=this.isChrome?"calc(-".concat(a+this.indentUnit,"ch - ").concat(i?1:0,"px)"):"-".concat(a+this.indentUnit,"ch");t.add(s.from,s.from,Ch.line({attributes:{style:"padding-left: ".concat(l,"; text-indent: ").concat(c,";")}}))}}getVisibleLines(t){var e=new Set,r=null;for(var{from:o,to:s}of this.view.visibleRanges)for(var a=o;a<=s;){var i=t.doc.lineAt(a);r!==i&&(e.add(i),r=i),a=i.to+1}return e}numColumns(t,e){var r=0,o=!1;e:for(var s=0;s<t.length;s++)switch(t[s]){case" ":r+=1;continue e;case"	":r+=e-r%e,o=!0;continue e;case"\r":continue e;default:break e}return{numColumns:r,containsTab:o}}},{decorations:t=>t.decorations})];vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-xt61xw {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-xt61xw {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-hidden:where(.svelte-xt61xw) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button[name="close"] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading-space:where(.svelte-xt61xw) {
  flex: 1;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading:where(.svelte-xt61xw) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-preview:where(.svelte-xt61xw) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}`);var s0=L('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>',1),i0=L("<!> <!> <!> <!>",1),l0=L("<div></div> <!> <!>",1),c0=L('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>'),u0=L("<div><!> <!></div>");function d0(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=h(e,"readOnly",9),a=h(e,"mainMenuBar",9),i=h(e,"statusBar",9),l=h(e,"askToFormat",9),c=h(e,"externalContent",9),u=h(e,"externalSelection",9),d=h(e,"history",9),v=h(e,"indentation",9),f=h(e,"tabSize",9),g=h(e,"escapeUnicodeCharacters",9),m=h(e,"parser",9),b=h(e,"validator",9),j=h(e,"validationParser",9),k=h(e,"onChange",9),C=h(e,"onChangeMode",9),A=h(e,"onSelect",9),M=h(e,"onUndo",9),x=h(e,"onRedo",9),I=h(e,"onError",9),F=h(e,"onFocus",9),B=h(e,"onBlur",9),S=h(e,"onRenderMenu",9),V=h(e,"onSortModal",9),G=h(e,"onTransformModal",9),H=wr("jsoneditor:TextMode"),te={key:"Mod-i",run:lt,shift:st,preventDefault:!0},ye=typeof window>"u";H("isSSR:",ye);var ne,ve=P(void 0,!0),Ee=P(void 0,!0),Re=P(void 0,!0),fe=P(!1,!0),Ce=P(l(),!0),we=P([],!0),Ue=new Ls,de=new Ls,re=new Ls,ce=new Ls,at=new Ls,Ot=c(),Q=P(Dc(Ot,v(),m()),!0),N=kh.define(),ee=null;function T(){if(!ee||ee.length===0)return!1;var W=ee[0].startState,ke=ee[ee.length-1].state,He=ee.map(Ve=>Ve.changes).reduce((Ve,Et)=>Ve.compose(Et)),Ct={type:"text",undo:{changes:He.invert(W.doc).toJSON(),selection:rt(W.selection)},redo:{changes:He.toJSON(),selection:rt(ke.selection)}};return H("add history item",Ct),d().add(Ct),ee=null,!0}var pe=P(g(),!0);Er(mt(function*(){if(!ye)try{ne=function(W){var{target:ke,initialText:He,readOnly:Ct,indentation:Ve}=W;H("Create CodeMirror editor",{readOnly:Ct,indentation:Ve});var Et=function(zt,hn){return pc(zt)?zt.ranges.every(ct=>ct.anchor<hn.length&&ct.head<hn.length):!1}(u(),He)?ir(u()):void 0,dn=_a.create({doc:He,selection:Et,extensions:[Gu.of([Nh,te]),Ue.of(Ye()),Ih(),zh(),Oh(),Mh(),Zh(),Ph(),Rh(),_a.allowMultipleSelections.of(!0),Gh(),yv(ng,{fallback:!0}),Xh(),eg(),tg(),Ah(),Eh(),Th(),ig(),Gu.of([...rg,...qh,...cg,{key:"Mod-z",run:ge,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:Ie,preventDefault:!0},{key:"Ctrl-Shift-z",run:Ie,preventDefault:!0},...og,...ag,...Uh]),r0,vg({hideFirstIndent:!0}),Wa.domEventHandlers({dblclick:D}),Wa.updateListener.of(zt=>{p(Re,zt.state),zt.docChanged&&(zt.transactions.some(hn=>!!hn.annotation(N))||(ee=[...ee??[],zt]),rn()),zt.selectionSet&&an()}),Ig(),lg({top:!0}),Wa.lineWrapping,de.of(_a.readOnly.of(Ct)),ce.of(_a.tabSize.of(f())),re.of(pn(Ve)),at.of(Wa.theme({},{dark:Ze()}))]});return ne=new Wa({state:dn,parent:ke}),Et&&ne.dispatch(ne.state.update({selection:Et.main,scrollIntoView:!0})),ne}({target:n(ve),initialText:Ft(n(Q),n(fe))?"":n(r).escapeValue(n(Q)),readOnly:s(),indentation:v()})}catch(W){console.error(W)}})),co(()=>{Lt(),ne&&(H("Destroy CodeMirror editor"),ne.destroy())});var Y=vs(),Me=vs();function $(){ne&&(H("focus"),ne.focus())}var E=!1;function jt(W){return Ke(W,!1)}function Ke(W,ke){H("handlePatch",W,ke);var He=m().parse(n(Q)),Ct=Co(He,W),Ve=wv(He,W);return Ut({text:m().stringify(Ct,null,v())},ke,!1),{json:Ct,previousJson:He,undo:Ve,redo:W}}function lt(){if(H("format"),s())return!1;try{var W=m().parse(n(Q));return Ut({text:m().stringify(W,null,v())},!0,!1),p(Ce,l()),!0}catch(ke){I()(ke)}return!1}function st(){if(H("compact"),s())return!1;try{var W=m().parse(n(Q));return Ut({text:m().stringify(W)},!0,!1),p(Ce,!1),!0}catch(ke){I()(ke)}return!1}function je(){if(H("repair"),!s())try{Ut({text:zo(n(Q))},!0,!1),p($t,dc),p(Rn,void 0)}catch(W){I()(W)}}function Ge(){var W;if(!s())try{var ke=m().parse(n(Q));E=!0,V()({id:Y,json:ke,rootPath:[],onSort:(W=mt(function*(He){var{operations:Ct}=He;H("onSort",Ct),Ke(Ct,!0)}),function(He){return W.apply(this,arguments)}),onClose:()=>{E=!1,$()}})}catch(He){I()(He)}}function Mt(W){var{id:ke,rootPath:He,onTransform:Ct,onClose:Ve}=W;try{var Et=m().parse(n(Q));E=!0,G()({id:ke||Me,json:Et,rootPath:He||[],onTransform:dn=>{Ct?Ct({operations:dn,json:Et,transformedJson:Co(Et,dn)}):(H("onTransform",dn),Ke(dn,!0))},onClose:()=>{E=!1,$(),Ve&&Ve()}})}catch(dn){I()(dn)}}function Be(){s()||Mt({rootPath:[]})}function It(){ne&&(n(ve)&&n(ve).querySelector(".cm-search")?ug(ne):dg(ne))}function ge(){if(s())return!1;Lt();var W=d().undo();return H("undo",W),Vc(W)?(ne.dispatch({annotations:N.of("undo"),changes:Zu.fromJSON(W.undo.changes),selection:Yl.fromJSON(W.undo.selection),scrollIntoView:!0}),!0):(M()(W),!1)}function Ie(){if(s())return!1;Lt();var W=d().redo();return H("redo",W),Vc(W)?(ne.dispatch({annotations:N.of("redo"),changes:Zu.fromJSON(W.redo.changes),selection:Yl.fromJSON(W.redo.selection),scrollIntoView:!0}),!0):(x()(W),!1)}function Ae(){p(fe,!0),Ut(c(),!0,!0)}function De(){C()(br.tree)}function Bt(){_n()}function ht(W){H("select validation error",W);var{from:ke,to:He}=Cn(W);ke!==void 0&&He!==void 0&&($e(ke,He),$())}function $e(W,ke){H("setSelection",{anchor:W,head:ke}),ne&&ne.dispatch(ne.state.update({selection:{anchor:W,head:ke},scrollIntoView:!0}))}function D(W,ke){if(ke.state.selection.ranges.length===1){var He=ke.state.selection.ranges[0],Ct=n(Q).slice(He.from,He.to);if(Ct==="{"||Ct==="["){var Ve=Yu.parse(n(Q)),Et=Object.keys(Ve.pointers).find(zt=>{var hn;return((hn=Ve.pointers[zt].value)===null||hn===void 0?void 0:hn.pos)===He.from}),dn=Ve.pointers[Et];Et&&dn&&dn.value&&dn.valueEnd&&(H("pointer found, selecting inner contents of path:",Et,dn),$e(dn.value.pos+1,dn.valueEnd.pos-1))}}}function Ye(){return Dh(Yn,{delay:300})}function Ze(){return!!n(ve)&&getComputedStyle(n(ve)).getPropertyValue("--jse-theme").includes("dark")}function Cn(W){var{path:ke,message:He,severity:Ct}=W,{line:Ve,column:Et,from:dn,to:zt}=function(hn,ct){try{var Pt=Yu.parse(hn),nt=St(ct),ft=Pt.pointers[nt];if(ft)return{path:ct,line:ft.key?ft.key.line:ft.value?ft.value.line:0,column:ft.key?ft.key.column:ft.value?ft.value.column:0,from:ft.key?ft.key.pos:ft.value?ft.value.pos:0,to:ft.keyEnd?ft.keyEnd.pos:ft.valueEnd?ft.valueEnd.pos:0}}catch(zn){console.error(zn)}return{path:ct,line:0,column:0,from:0,to:0}}(n(r).escapeValue(n(Q)),ke);return{path:ke,line:Ve,column:Et,from:dn,to:zt,message:He,severity:Ct,actions:[]}}function Je(W,ke){var{line:He,column:Ct,position:Ve,message:Et}=W;return{path:[],line:He,column:Ct,from:Ve,to:Ve,severity:so.error,message:Et,actions:ke&&!s()?[{name:"Auto repair",apply:()=>je()}]:void 0}}function At(W){return{from:W.from||0,to:W.to||0,message:W.message||"",actions:W.actions,severity:W.severity}}function Ut(W,ke,He){var Ct=Dc(W,v(),m()),Ve=!Xt(W,Ot),Et=Ot;H("setCodeMirrorContent",{isChanged:Ve,emitChange:ke,forceUpdate:He}),ne&&(Ve||He)&&(Ot=W,p(Q,Ct),Ft(n(Q),n(fe))||ne.dispatch({changes:{from:0,to:ne.state.doc.length,insert:n(r).escapeValue(n(Q))}}),T(),Ve&&ke&&xt(Ot,Et))}function ir(W){return pc(W)?Yl.fromJSON(W):void 0}function un(){return Dt.apply(this,arguments)}function Dt(){return Dt=mt(function*(){H("refresh"),yield function(){return Yt.apply(this,arguments)}()}),Dt.apply(this,arguments)}function _n(){if(ne){var W=ne?n(r).unescapeValue(ne.state.doc.toString()):"",ke=W!==n(Q);if(H("onChangeCodeMirrorValue",{isChanged:ke}),ke){var He=Ot;p(Q,W),Ot={text:n(Q)},T(),xt(Ot,He),Zn(),an()}}}function Yt(){return(Yt=mt(function*(){if(Zn(),ne){var W=Ze();return H("updateTheme",{dark:W}),ne.dispatch({effects:[at.reconfigure(Wa.theme({},{dark:W}))]}),new Promise(ke=>setTimeout(ke))}return Promise.resolve()})).apply(this,arguments)}function pn(W){var ke=sg.of(typeof W=="number"?" ".repeat(W):W);return W==="	"?[ke]:[ke,a0]}Wu({onMount:Er,onDestroy:co,getWindow:()=>Si(n(Ee)),hasFocus:()=>E&&document.hasFocus()||Mu(n(Ee)),onFocus:F(),onBlur:()=>{Lt(),B()()}});var rn=Ki(_n,300);function Lt(){rn.flush()}function xt(W,ke){k()&&k()(W,ke,{contentErrors:bn(),patchResult:void 0})}function an(){A()(rt(n(Re).selection))}function rt(W){return me({type:kn.text},W.toJSON())}function Ft(W,ke){return!!W&&W.length>Id&&!ke}var $t=P(dc,!0),Rn=P(void 0,!0);function Yn(){if(Ft(n(Q),n(fe)))return[];var W=bn();if(_c(W)){var{parseError:ke,isRepairable:He}=W;return[At(Je(ke,He))]}return Df(W)?W.validationErrors.map(Cn).map(At):[]}function bn(){H("validate:start"),Lt();var W=ur(n(r).escapeValue(n(Q)),b(),m(),j());return _c(W)?(p($t,W.isRepairable?Dd:"invalid"),p(Rn,W.parseError),p(we,[])):(p($t,dc),p(Rn,void 0),p(we,(W==null?void 0:W.validationErrors)||[])),H("validate:end"),W}var ur=ti(Hb);function nr(){n(Rn)&&function(W){H("select parse error",W);var ke=Je(W,!1);$e(ke.from!=null?ke.from:0,ke.to!=null?ke.to:0),$()}(n(Rn))}var lr={icon:gh,text:"Show me",title:"Move to the parse error location",onClick:nr};J(()=>z(g()),()=>{p(r,zu({escapeControlCharacters:!1,escapeUnicodeCharacters:g()}))}),J(()=>z(c()),()=>{Ut(c(),!1,!1)}),J(()=>z(u()),()=>{(function(W){if(pc(W)){var ke=ir(W);!ne||!ke||n(Re)&&n(Re).selection.eq(ke)||(H("applyExternalSelection",ke),ne.dispatch({selection:ke}))}})(u())}),J(()=>z(b()),()=>{(function(W){H("updateLinter",W),ne&&ne.dispatch({effects:Ue.reconfigure(Ye())})})(b())}),J(()=>z(v()),()=>{(function(W){ne&&(H("updateIndentation",W),ne.dispatch({effects:re.reconfigure(pn(W))}))})(v())}),J(()=>z(f()),()=>{(function(W){ne&&(H("updateTabSize",W),ne.dispatch({effects:ce.reconfigure(_a.tabSize.of(W))}))})(f())}),J(()=>z(s()),()=>{(function(W){ne&&(H("updateReadOnly",W),ne.dispatch({effects:[de.reconfigure(_a.readOnly.of(W))]}))})(s())}),J(()=>(n(pe),z(g())),()=>{n(pe)!==g()&&(p(pe,g()),H("forceUpdateText",{escapeUnicodeCharacters:g()}),ne&&ne.dispatch({changes:{from:0,to:ne.state.doc.length,insert:n(r).escapeValue(n(Q))}}))}),J(()=>(n($t),z(s()),fs),()=>{p(o,n($t)!==Dd||s()?[lr]:[{icon:fs,text:"Auto repair",title:"Automatically repair JSON",onClick:je},lr])}),mn(),bt(!0);var gr,dr=u0(),Nn=O(dr),qn=W=>{var ke=ae(()=>n(Q).length===0),He=ae(()=>!n(ke)),Ct=ae(()=>!n(ke)),Ve=ae(()=>!n(ke)),Et=ae(()=>!n(ke));(function(dn,zt){et(zt,!1);var hn=P(void 0,!0),ct=h(zt,"readOnly",9,!1),Pt=h(zt,"onFormat",9),nt=h(zt,"onCompact",9),ft=h(zt,"onSort",9),zn=h(zt,"onTransform",9),An=h(zt,"onToggleSearch",9),Jt=h(zt,"onUndo",9),Tt=h(zt,"onRedo",9),qt=h(zt,"canUndo",9),Wn=h(zt,"canRedo",9),U=h(zt,"canFormat",9),X=h(zt,"canCompact",9),he=h(zt,"canSort",9),Rt=h(zt,"canTransform",9),sn=h(zt,"onRenderMenu",9),Zt={type:"button",icon:wl,title:"Search (Ctrl+F)",className:"jse-search",onClick:An()},jn=P(void 0,!0);J(()=>(z(ct()),z(Pt()),z(U()),z(nt()),z(X()),z(ft()),z(he()),z(zn()),z(Rt()),z(Jt()),z(qt()),z(Tt()),z(Wn())),()=>{p(jn,ct()?[Zt,{type:"space"}]:[{type:"button",icon:cv,title:"Format JSON: add proper indentation and new lines (Ctrl+I)",className:"jse-format",onClick:Pt(),disabled:ct()||!U()},{type:"button",icon:Zj,title:"Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",className:"jse-compact",onClick:nt(),disabled:ct()||!X()},{type:"separator"},{type:"button",icon:Zi,title:"Sort",className:"jse-sort",onClick:ft(),disabled:ct()||!he()},{type:"button",icon:Gi,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:zn(),disabled:ct()||!Rt()},Zt,{type:"separator"},{type:"button",icon:du,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Jt(),disabled:!qt()},{type:"button",icon:vu,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:Tt(),disabled:!Wn()},{type:"space"}])}),J(()=>(z(sn()),n(jn)),()=>{p(hn,sn()(n(jn))||n(jn))}),mn(),bt(!0),_l(dn,{get items(){return n(hn)}}),tt()})(W,{get readOnly(){return s()},onFormat:lt,onCompact:st,onSort:Ge,onTransform:Be,onToggleSearch:It,onUndo:ge,onRedo:Ie,get canFormat(){return n(He)},get canCompact(){return n(Ct)},get canSort(){return n(Ve)},get canTransform(){return n(Et)},get canUndo(){return d().canUndo},get canRedo(){return d().canRedo},get onRenderMenu(){return S()}})};K(Nn,W=>{a()&&W(qn)});var Xn=q(Nn,2),le=W=>{var ke,He=l0(),Ct=ae(()=>Ft(n(Q),n(fe))),Ve=ot(He);Qn(Ve,ct=>p(ve,ct),()=>n(ve));var Et=q(Ve,2),dn=ct=>{var Pt=s0(),nt=ot(Pt),ft=ae(()=>"The JSON document is larger than ".concat(Xc(Id),", ")+"and may crash your browser when loading it in text mode. Actual size: ".concat(Xc(n(Q).length),"."));mo(nt,{icon:Aa,type:"error",get message(){return n(ft)},actions:[{text:"Open anyway",title:"Open the document in text mode. This may freeze or crash your browser.",onClick:Ae},{text:"Open in tree mode",title:"Open the document in tree mode. Tree mode can handle large documents.",onClick:De},{text:"Cancel",title:"Cancel opening this large document.",onClick:Bt}],onClose:$});var zn=O(q(nt,2));be(An=>it(zn,An),[()=>oi(n(Q)||"",Lc)],ae),R(ct,Pt)};K(Et,ct=>{n(Ct)&&ct(dn)});var zt=q(Et,2),hn=ct=>{var Pt=i0(),nt=ot(Pt),ft=qt=>{(function(Wn,U){et(U,!1);var X=h(U,"editorState",8),he=P(),Rt=P(),sn=P(),Zt=P(),jn=P();J(()=>z(X()),()=>{var Pe;p(he,(Pe=X())===null||Pe===void 0||(Pe=Pe.selection)===null||Pe===void 0||(Pe=Pe.main)===null||Pe===void 0?void 0:Pe.head)}),J(()=>(n(he),z(X())),()=>{var Pe;p(Rt,n(he)!==void 0?(Pe=X())===null||Pe===void 0||(Pe=Pe.doc)===null||Pe===void 0?void 0:Pe.lineAt(n(he)):void 0)}),J(()=>n(Rt),()=>{p(sn,n(Rt)!==void 0?n(Rt).number:void 0)}),J(()=>(n(Rt),n(he)),()=>{p(Zt,n(Rt)!==void 0&&n(he)!==void 0?n(he)-n(Rt).from+1:void 0)}),J(()=>z(X()),()=>{var Pe;p(jn,(Pe=X())===null||Pe===void 0||(Pe=Pe.selection)===null||Pe===void 0||(Pe=Pe.ranges)===null||Pe===void 0?void 0:Pe.reduce((on,On)=>on+On.to-On.from,0))}),mn(),bt();var Dn=n0(),In=O(Dn),Vn=Pe=>{var on=Xx(),On=O(on);be(()=>{var ln;return it(On,"Line: ".concat((ln=n(sn))!==null&&ln!==void 0?ln:""))}),R(Pe,on)};K(In,Pe=>{n(sn)!==void 0&&Pe(Vn)});var gt=q(In,2),Jn=Pe=>{var on=e0(),On=O(on);be(()=>{var ln;return it(On,"Column: ".concat((ln=n(Zt))!==null&&ln!==void 0?ln:""))}),R(Pe,on)};K(gt,Pe=>{n(Zt)!==void 0&&Pe(Jn)});var dt=q(gt,2),mr=Pe=>{var on=t0(),On=O(on);be(()=>{var ln;return it(On,"Selection: ".concat((ln=n(jn))!==null&&ln!==void 0?ln:""," characters"))}),R(Pe,on)};K(dt,Pe=>{n(jn)!==void 0&&n(jn)>0&&Pe(mr)}),R(Wn,Dn),tt()})(qt,{get editorState(){return n(Re)}})};K(nt,qt=>{i()&&qt(ft)});var zn=q(nt,2),An=qt=>{mo(qt,{type:"error",icon:Aa,get message(){return n(Rn).message},get actions(){return n(o)},onClick:nr,onClose:$})};K(zn,qt=>{n(Rn)&&qt(An)});var Jt=q(zn,2),Tt=qt=>{mo(qt,{type:"success",message:"Do you want to format the JSON?",actions:[{icon:cv,text:"Format",title:"Format JSON: add proper indentation and new lines (Ctrl+I)",onClick:lt},{icon:yl,text:"No thanks",title:"Close this message",onClick:()=>p(Ce,!1)}],onClose:$})};K(Jt,qt=>{var Wn,U;!n(Rn)&&n(Ce)&&(Wn=n(Q),!(U=Wn.substring(0,999).trim()).includes(`
`)&&wm.test(U))&&qt(Tt)}),Vu(q(Jt,2),{get validationErrors(){return n(we)},selectError:ht}),R(ct,Pt)};K(zt,ct=>{n(Ct)||ct(hn)}),be(ct=>ke=wt(Ve,1,"jse-contents svelte-xt61xw",null,ke,ct),[()=>({"jse-hidden":n(Ct)})],ae),R(W,He)},Kt=W=>{R(W,c0())};return K(Xn,W=>{ye?W(Kt,!1):W(le)}),Qn(dr,W=>p(Ee,W),()=>n(Ee)),be(W=>gr=wt(dr,1,"jse-text-mode svelte-xt61xw",null,gr,W),[()=>({"no-main-menu":!a()})],ae),R(t,dr),pt(e,"focus",$),pt(e,"patch",jt),pt(e,"handlePatch",Ke),pt(e,"openTransformModal",Mt),pt(e,"refresh",un),pt(e,"flush",Lt),pt(e,"validate",bn),tt({focus:$,patch:jt,handlePatch:Ke,openTransformModal:Mt,refresh:un,flush:Lt,validate:bn})}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-h57m0p {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-h57m0p {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-h57m0p {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);var v0=L('<button type="button"> </button>');vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-2i3vdx {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-2i3vdx:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
  height: 1em;
}`);var f0=L('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>'),p0=L('<button type="button"><span class="jse-column-name"> </span> <!></button>');vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-17xl1jx {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-before:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-arrays-info:where(.svelte-17xl1jx) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) .jse-nested-property-count:where(.svelte-17xl1jx) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-after:where(.svelte-17xl1jx) {
  flex: 2;
}`);var h0=(t,e)=>e.onClick(),g0=L(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`,1),m0=(t,e,r)=>e.openJSONEditorModal(n(r)),b0=(t,e,r)=>e.extractPath(n(r)),j0=L('<button type="button" class="jse-nested-array-action svelte-17xl1jx">Extract</button>'),x0=L('<div class="jse-nested-property svelte-17xl1jx"><div class="jse-nested-property-path svelte-17xl1jx"> <span class="jse-nested-property-count svelte-17xl1jx"> </span></div> <button type="button" class="jse-nested-array-action svelte-17xl1jx"> </button> <!></div>'),y0=(t,e)=>e.onChangeMode(br.tree),w0=L('<div class="jse-table-mode-welcome svelte-17xl1jx" role="none"><div class="jse-space jse-before svelte-17xl1jx"></div> <div class="jse-nested-arrays svelte-17xl1jx"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-17xl1jx"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-17xl1jx">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-17xl1jx"></div></div>');function k0(t,e){et(e,!0);var r=_r(()=>e.json?function(b){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,k=[];return function C(A,M){Sr(A)&&M.length<j&&Object.keys(A).forEach(x=>{C(A[x],M.concat(x))}),xr(A)&&k.push(M)}(b,[]),k}(e.json).slice(0,99).filter(b=>b.length>0):[]),o=_r(()=>!Pn(n(r))),s=_r(()=>e.json===void 0&&(e.text===""||e.text===void 0)),a=_r(()=>n(o)?"Object with nested arrays":n(s)?"An empty document":Sr(e.json)?"An object":xr(e.json)?"An empty array":"A ".concat(Al(e.json,e.parser))),i=w0();i.__click=[h0,e];var l=q(O(i),2),c=O(l),u=O(c),d=q(c,2),v=O(d),f=b=>{R(b,kr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))},g=(b,j)=>{var k=A=>{R(A,g0())},C=A=>{var M=kr();be(()=>{var x;return it(M,"".concat((x=n(a))!==null&&x!==void 0?x:""," cannot be opened in table mode. You can open the document in tree mode instead."))}),R(A,M)};K(b,A=>{n(s)&&!e.readOnly?A(k):A(C,!1)},j)};K(v,b=>{n(o)?b(f):b(g,!1)});var m=q(d,2);sr(m,17,()=>n(r),vr,(b,j)=>{var k=x0(),C=_r(()=>function(V){return Le(e.json,V).length}(n(j))),A=O(k),M=O(A),x=O(q(M)),I=q(A,2);I.__click=[m0,e,j];var F=O(I),B=q(I,2),S=V=>{var G=j0();G.__click=[b0,e,j],R(V,G)};K(B,V=>{e.readOnly||V(S)}),be(V=>{var G,H;it(M,'"'.concat(V??"",'" ')),it(x,"(".concat((G=n(C))!==null&&G!==void 0?G:""," ").concat((H=n(C)!==1?"items":"item")!==null&&H!==void 0?H:"",")")),it(F,e.readOnly?"View":"Edit")},[()=>ao(n(j))]),R(b,k)}),q(m,2).__click=[y0,e],be(()=>it(u,n(a))),R(t,i),tt()}yi(["click"]);vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-fzj761 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-fzj761:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);var S0=L('<button type="button"><!></button>');vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-u14cgx {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-u14cgx {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-search-box-container:where(.svelte-u14cgx) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) .jse-hidden-input:where(.svelte-u14cgx) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-start-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx),
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-search-box-background:where(.svelte-u14cgx) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx), .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) .jse-table-root-error:where(.svelte-u14cgx) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer.jse-selected-value:where(.svelte-u14cgx) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-context-menu-anchor:where(.svelte-u14cgx) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) {
  align-items: unset;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading-space:where(.svelte-u14cgx) {
  flex: 1;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading:where(.svelte-u14cgx) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);var C0=L('<div class="jse-table-root-error svelte-u14cgx"><!></div>'),z0=L('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),O0=L('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>'),M0=L('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>'),P0=L('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>'),R0=L('<td class="jse-table-cell svelte-u14cgx"><div><!><!></div> <!></td>'),A0=L('<td class="jse-table-cell svelte-u14cgx"></td>'),E0=L('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>'),T0=L('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!>',1),N0=L("<!> <!>",1),q0=L('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"></label> <!>',1),I0=L('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>'),U0=L('<div role="table"><!> <!></div> <!> <!>',1);function D0(t,e){et(e,!1);var r=P(void 0,!0),o=P(void 0,!0),s=P(void 0,!0),a=wr("jsoneditor:TableMode"),{openAbsolutePopup:i,closeAbsolutePopup:l}=ya("absolute-popup"),c=jp(),u=vs(),d=vs(),v=typeof window>"u";a("isSSR:",v);var f=h(e,"readOnly",9),g=h(e,"externalContent",9),m=h(e,"externalSelection",9),b=h(e,"history",9),j=h(e,"truncateTextSize",9),k=h(e,"mainMenuBar",9),C=h(e,"escapeControlCharacters",9),A=h(e,"escapeUnicodeCharacters",9),M=h(e,"flattenColumns",9),x=h(e,"parser",9),I=h(e,"parseMemoizeOne",9),F=h(e,"validator",9),B=h(e,"validationParser",9),S=h(e,"indentation",9),V=h(e,"onChange",9),G=h(e,"onChangeMode",9),H=h(e,"onSelect",9),te=h(e,"onUndo",9),ye=h(e,"onRedo",9),ne=h(e,"onRenderValue",9),ve=h(e,"onRenderMenu",9),Ee=h(e,"onRenderContextMenu",9),Re=h(e,"onFocus",9),fe=h(e,"onBlur",9),Ce=h(e,"onSortModal",9),we=h(e,"onTransformModal",9),Ue=h(e,"onJSONEditorModal",9),de=P(void 0,!0),re=P(void 0,!0),ce=P(void 0,!0),at=P(void 0,!0),Ot=P(void 0,!0);Wu({onMount:Er,onDestroy:co,getWindow:()=>Si(n(re)),hasFocus:()=>Mt&&document.hasFocus()||Mu(n(re)),onFocus:()=>{Be=!0,Re()&&Re()()},onBlur:()=>{Be=!1,fe()&&fe()()}});var Q,N=P(void 0,!0),ee=P(void 0,!0),T=P(void 0,!0),pe=P(void 0,!0),Y=P(void 0,!0),Me=P(!1,!0),$=P(!1,!0);function E(w){p(Y,(Q=w)?np(n(N),Q.items):void 0)}function jt(w){return Ke.apply(this,arguments)}function Ke(){return(Ke=mt(function*(w){p(D,void 0),yield $t(w)})).apply(this,arguments)}function lt(){p(Me,!1),p($,!1),xt()}var st=P(1e4,!0),je=P([],!0),Ge=P(void 0,!0),Mt=!1,Be=!1,It=P(!1,!0),ge=P({},!0),Ie=P(600,!0),Ae=P(0,!0),De=18;function Bt(w){p(D,w)}function ht(w){n(D)&&w!==void 0&&(ca(w,ga(n(D)))&&ca(w,We(n(D)))||(a("clearing selection: path does not exist anymore",n(D)),p(D,void 0)))}var $e=P(n(N)!==void 0?Hc({json:n(N)}):void 0,!0),D=P(ci(m())?m():void 0,!0),Ye=P(void 0,!0),Ze=P(!1,!0);function Cn(w){if(!f()){a("onSortByHeader",w);var Z=w.sortDirection===ro.desc?-1:1;Yt(Sp(n(N),[],w.path,Z),(oe,ue)=>({state:ue,sortedColumn:w}))}}Er(()=>{n(D)&&Yn(We(n(D)))});var Je=P(void 0,!0);function At(w){if(w.json!==void 0||w.text!==void 0){var Z=n(N)!==void 0&&w.json!==void 0;b().add({type:"tree",undo:{patch:Z?[{op:"replace",path:"",value:w.json}]:void 0,json:w.json,text:w.text,documentState:w.documentState,textIsRepaired:w.textIsRepaired,selection:wo(w.selection),sortedColumn:w.sortedColumn},redo:{patch:Z?[{op:"replace",path:"",value:n(N)}]:void 0,json:n(N),text:n(ee),documentState:n($e),textIsRepaired:n(Ze),selection:wo(n(D)),sortedColumn:n(Ye)}})}}var Ut=P([],!0),ir=ti(xp);function un(w,Z,oe,ue){ns(()=>{var xe;try{xe=ir(w,Z,oe,ue)}catch(Te){xe=[{path:[],message:"Failed to validate: "+Te.message,severity:so.warning}]}Xt(xe,n(Ut))||(a("validationErrors changed:",xe),p(Ut,xe))},xe=>a("validationErrors updated in ".concat(xe," ms")))}function Dt(){return a("validate"),n(T)?{parseError:n(T),isRepairable:!1}:(un(n(N),F(),x(),B()),Pn(n(Ut))?void 0:{validationErrors:n(Ut)})}function _n(w,Z){if(a("patch",w,Z),n(N)===void 0)throw new Error("Cannot apply patch: no JSON");var oe=n(N),ue={json:void 0,text:n(ee),documentState:n($e),selection:wo(n(D)),sortedColumn:n(Ye),textIsRepaired:n(Ze)},xe=tp(n(N),w),Te=_f(n(N),n($e),w),Ne=kx(n(Ye),w,n(je)),Xe=typeof Z=="function"?Z(Te.json,Te.documentState,n(D)):void 0;return p(N,(Xe==null?void 0:Xe.json)!==void 0?Xe.json:Te.json),p($e,(Xe==null?void 0:Xe.state)!==void 0?Xe.state:Te.documentState),p(D,(Xe==null?void 0:Xe.selection)!==void 0?Xe.selection:n(D)),p(Ye,(Xe==null?void 0:Xe.sortedColumn)!==void 0?Xe.sortedColumn:Ne),p(ee,void 0),p(Ze,!1),p(pe,void 0),p(T,void 0),b().add({type:"tree",undo:me({patch:xe},ue),redo:{patch:w,json:void 0,text:void 0,documentState:n($e),selection:wo(n(D)),sortedColumn:n(Ye),textIsRepaired:n(Ze)}}),{json:n(N),previousJson:oe,undo:xe,redo:w}}function Yt(w,Z){a("handlePatch",w,Z);var oe={json:n(N),text:n(ee)},ue=_n(w,Z);return pn(oe,ue),ue}function pn(w,Z){if((w.json!==void 0||(w==null?void 0:w.text)!==void 0)&&V()){if(n(ee)!==void 0){var oe={text:n(ee),json:void 0};V()(oe,w,{contentErrors:Dt(),patchResult:Z})}else if(n(N)!==void 0){var ue={text:void 0,json:n(N)};V()(ue,w,{contentErrors:Dt(),patchResult:Z})}}}function rn(w){a("pasted json as text",w),p(pe,w)}function Lt(w){var Z=parseInt(w[0],10),oe=[String(Z+1),...w.slice(1)];return ca(n(N),oe)?Wt(oe):Wt(w)}function xt(){a("focus"),n(at)&&(n(at).focus(),n(at).select())}function an(w){p(Ae,w.target.scrollTop)}function rt(){n(D)||p(D,function(){if(xr(n(N))&&!Pn(n(N))&&!Pn(n(je)))return Wt(["0",...n(je)[0]])}())}function Ft(){if(n(Ze)&&n(N)!==void 0){var w={json:n(N),text:n(ee)},Z={json:n(N),documentState:n($e),selection:n(D),sortedColumn:n(Ye),text:n(ee),textIsRepaired:n(Ze)};p(ee,void 0),p(Ze,!1),ht(n(N)),At(Z),pn(w,void 0)}return{json:n(N),text:n(ee)}}function $t(w){var{scrollToWhenVisible:Z=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},oe=n(Me)?Ys:0,ue=dv(w,n(je),ge,De),xe=ue-n(Ae)+oe+De,Te=bn(w);if(a("scrollTo",{path:w,top:ue,scrollTop:n(Ae),elem:Te}),!n(ce))return Promise.resolve();var Ne=n(ce).getBoundingClientRect();if(Te&&!Z){var Xe=Te.getBoundingClientRect();if(Xe.bottom>Ne.top&&Xe.top<Ne.bottom)return Promise.resolve()}var _t=-Math.max(oe+2*De,Ne.height/4);return new Promise(Te?Gt=>{c(Te,{container:n(ce),offset:_t,duration:300,callback:()=>{Rn(w),Gt()}})}:Gt=>{c(xe,{container:n(ce),offset:_t,duration:300,callback:()=>{Zn(),Rn(w),Gt()}})})}function Rn(w){var Z=bn(w);if(Z&&n(ce)){var oe=n(ce).getBoundingClientRect(),ue=Z.getBoundingClientRect();if(ue.right>oe.right){var xe=ue.right-oe.right;Qr(ce,n(ce).scrollLeft+=xe)}if(ue.left<oe.left){var Te=oe.left-ue.left;Qr(ce,n(ce).scrollLeft-=Te)}}}function Yn(w){(function(Z){if(n(ce)){var{rowIndex:oe}=to(Z,n(je)),ue=dv(Z,n(je),ge,De),xe=ue+(ge[oe]||De),Te=De,Ne=n(ce).getBoundingClientRect(),Xe=n(Ae),_t=n(Ae)+Ne.height-Te;if(xe>_t){var Gt=xe-_t;Qr(ce,n(ce).scrollTop+=Gt)}if(ue<Xe){var Ht=Xe-ue;Qr(ce,n(ce).scrollTop-=Ht)}}})(w),Rn(w)}function bn(w){var Z,oe,ue=n(je).find(Te=>ra(w.slice(1),Te)),xe=ue?w.slice(0,1).concat(ue):w;return(Z=(oe=n(ce))===null||oe===void 0?void 0:oe.querySelector('td[data-path="'.concat(Jc(xe),'"]')))!==null&&Z!==void 0?Z:void 0}function ur(w){var Z,{anchor:oe,left:ue,top:xe,width:Te,height:Ne,offsetTop:Xe,offsetLeft:_t,showTip:Gt}=w,Ht=function(_){var{json:se,documentState:qe,selection:Oe,readOnly:Se,onEditValue:ze,onEditRow:Fe,onToggleEnforceString:yt,onCut:tn,onCopy:Qt,onPaste:Mn,onRemove:ut,onDuplicateRow:er,onInsertBeforeRow:Tn,onInsertAfterRow:Bn,onRemoveRow:cn}=_,_e=se!==void 0,Qe=!!Oe,vn=se!==void 0&&Oe?Le(se,We(Oe)):void 0,Kn=_e&&(Fn(Oe)||jr(Oe)||yn(Oe)),or=!Se&&_e&&Oe!==void 0&&vl(Oe),wn=or&&!cr(vn),xn=!Se&&Kn,Nt=Oe!==void 0&&Go(se,qe,We(Oe));return[{type:"separator"},{type:"row",items:[{type:"column",items:[{type:"label",text:"Table cell:"},{type:"dropdown-button",main:{type:"button",onClick:()=>ze(),icon:rs,text:"Edit",title:"Edit the value (Double-click on the value)",disabled:!or},width:"11em",items:[{type:"button",icon:rs,text:"Edit",title:"Edit the value (Double-click on the value)",onClick:()=>ze(),disabled:!or},{type:"button",icon:Nt?hv:gv,text:"Enforce string",title:"Enforce keeping the value as string when it contains a numeric value",onClick:()=>yt(),disabled:!wn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>tn(!0),icon:os,text:"Cut",title:"Cut selected contents, formatted with indentation (Ctrl+X)",disabled:!xn},width:"10em",items:[{type:"button",icon:os,text:"Cut formatted",title:"Cut selected contents, formatted with indentation (Ctrl+X)",onClick:()=>tn(!0),disabled:Se||!Kn},{type:"button",icon:os,text:"Cut compacted",title:"Cut selected contents, without indentation (Ctrl+Shift+X)",onClick:()=>tn(!1),disabled:Se||!Kn}]},{type:"dropdown-button",main:{type:"button",onClick:()=>Qt(!0),icon:la,text:"Copy",title:"Copy selected contents, formatted with indentation (Ctrl+C)",disabled:!Kn},width:"12em",items:[{type:"button",icon:la,text:"Copy formatted",title:"Copy selected contents, formatted with indentation (Ctrl+C)",onClick:()=>Qt(!1),disabled:!Kn},{type:"button",icon:la,text:"Copy compacted",title:"Copy selected contents, without indentation (Ctrl+Shift+C)",onClick:()=>Qt(!1),disabled:!Kn}]},{type:"button",onClick:()=>Mn(),icon:mv,text:"Paste",title:"Paste clipboard contents (Ctrl+V)",disabled:Se||!Qe},{type:"button",onClick:()=>ut(),icon:zc,text:"Remove",title:"Remove selected contents (Delete)",disabled:Se||!Kn}]},{type:"column",items:[{type:"label",text:"Table row:"},{type:"button",onClick:()=>Fe(),icon:rs,text:"Edit row",title:"Edit the current row",disabled:Se||!Qe||!_e},{type:"button",onClick:()=>er(),icon:bv,text:"Duplicate row",title:"Duplicate the current row (Ctrl+D)",disabled:Se||!Qe||!_e},{type:"button",onClick:()=>Tn(),icon:Za,text:"Insert before",title:"Insert a row before the current row",disabled:Se||!Qe||!_e},{type:"button",onClick:()=>Bn(),icon:Za,text:"Insert after",title:"Insert a row after the current row",disabled:Se||!Qe||!_e},{type:"button",onClick:()=>cn(),icon:zc,text:"Remove row",title:"Remove current row",disabled:Se||!Qe||!_e}]}]}]}({json:n(N),documentState:n($e),selection:n(D),readOnly:f(),onEditValue:gr,onEditRow:dr,onToggleEnforceString:Nn,onCut:He,onCopy:Ve,onPaste:le,onRemove:dn,onDuplicateRow:hn,onInsertBeforeRow:ct,onInsertAfterRow:Pt,onRemoveRow:nt}),kt=(Z=Ee()(Ht))!==null&&Z!==void 0?Z:Ht;if(kt!==!1){var En={left:ue,top:xe,offsetTop:Xe,offsetLeft:_t,width:Te,height:Ne,anchor:oe,closeOnOuterClick:!0,onClose:()=>{Mt=!1,xt()}};Mt=!0;var y=i(Np,{tip:Gt?"Tip: you can open this context menu via right-click or with Ctrl+Q":void 0,items:kt,onRequestClose(){l(y),xt()}},En)}}function nr(w){if(!Br(n(D)))if(w&&(w.stopPropagation(),w.preventDefault()),w&&w.type==="contextmenu"&&w.target!==n(at))ur({left:w.clientX,top:w.clientY,width:Vo,height:Wo,showTip:!1});else{var Z,oe=(Z=n(ce))===null||Z===void 0?void 0:Z.querySelector(".jse-table-cell.jse-selected-value");if(oe)ur({anchor:oe,offsetTop:2,width:Vo,height:Wo,showTip:!1});else{var ue,xe=(ue=n(ce))===null||ue===void 0?void 0:ue.getBoundingClientRect();xe&&ur({top:xe.top+2,left:xe.left+2,width:Vo,height:Wo,showTip:!1})}}}function lr(w){ur({anchor:Pf(w.target,"BUTTON"),offsetTop:0,width:Vo,height:Wo,showTip:!0})}function gr(){if(!f()&&n(D)){var w=We(n(D));cr(Le(n(N),w))?U(w):p(D,Wt(w))}}function dr(){!f()&&n(D)&&U(We(n(D)).slice(0,1))}function Nn(){if(!f()&&yn(n(D))){var w=n(D).path,Z=St(w),oe=Le(n(N),w),ue=!Go(n(N),n($e),w),xe=ue?String(oe):Ja(String(oe),x());a("handleToggleEnforceString",{enforceString:ue,value:oe,updatedValue:xe}),Yt([{op:"replace",path:Z,value:xe}],(Te,Ne)=>({state:ql(n(N),Ne,w,{type:"value",enforceString:ue})}))}}function qn(){return Xn.apply(this,arguments)}function Xn(){return(Xn=mt(function*(){if(a("apply pasted json",n(pe)),n(pe)){var{onPasteAsJson:w}=n(pe);w(),setTimeout(xt)}})).apply(this,arguments)}function le(){return Kt.apply(this,arguments)}function Kt(){return(Kt=mt(function*(){try{An(yield navigator.clipboard.readText())}catch(w){console.error(w),p(It,!0)}})).apply(this,arguments)}function W(){a("clear pasted json"),p(pe,void 0),xt()}function ke(){G()(br.text)}function He(w){return Ct.apply(this,arguments)}function Ct(){return(Ct=mt(function*(w){yield Mp({json:n(N),selection:n(D),indentation:w?S():void 0,readOnly:f(),parser:x(),onPatch:Yt})})).apply(this,arguments)}function Ve(){return Et.apply(this,arguments)}function Et(){return Et=mt(function*(){var w=!(arguments.length>0&&arguments[0]!==void 0)||arguments[0];n(N)!==void 0&&(yield Pp({json:n(N),selection:n(D),indentation:w?S():void 0,parser:x()}))}),Et.apply(this,arguments)}function dn(){Ap({json:n(N),text:n(ee),selection:n(D),keepSelection:!0,readOnly:f(),onChange:V(),onPatch:Yt})}function zt(w){f()||(a("extract",{path:w}),Yt(Gf(n(N),Wt(w))))}function hn(){(function(w){var{json:Z,selection:oe,columns:ue,readOnly:xe,onPatch:Te}=w;if(!xe&&Z!==void 0&&oe&&es(oe)){var{rowIndex:Ne,columnIndex:Xe}=to(We(oe),ue);Nr("duplicate row",{rowIndex:Ne});var _t=[String(Ne)];Te(Zf(Z,[_t]),(Gt,Ht)=>({state:Ht,selection:Wt(Sa({rowIndex:Ne<Z.length?Ne+1:Ne,columnIndex:Xe},ue))}))}})({json:n(N),selection:n(D),columns:n(je),readOnly:f(),onPatch:Yt})}function ct(){(function(w){var{json:Z,selection:oe,columns:ue,readOnly:xe,onPatch:Te}=w;if(!xe&&Z!==void 0&&oe&&es(oe)){var{rowIndex:Ne}=to(We(oe),ue);Nr("insert before row",{rowIndex:Ne}),Te(ts(Z,[String(Ne)],[{key:"",value:Sr(Z[0])?{}:""}]))}})({json:n(N),selection:n(D),columns:n(je),readOnly:f(),onPatch:Yt})}function Pt(){(function(w){var{json:Z,selection:oe,columns:ue,readOnly:xe,onPatch:Te}=w;if(!xe&&Z!==void 0&&oe&&es(oe)){var{rowIndex:Ne,columnIndex:Xe}=to(We(oe),ue);Nr("insert after row",{rowIndex:Ne});var _t=Ne+1,Gt=[String(_t)],Ht=[{key:"",value:Sr(Z[0])?{}:""}];Te(_t<Z.length?ts(Z,Gt,Ht):Kc(Z,[],Ht),(kt,En)=>({state:En,selection:Wt(Sa({rowIndex:_t,columnIndex:Xe},ue))}))}})({json:n(N),selection:n(D),columns:n(je),readOnly:f(),onPatch:Yt})}function nt(){(function(w){var{json:Z,selection:oe,columns:ue,readOnly:xe,onPatch:Te}=w;if(!xe&&Z!==void 0&&oe&&es(oe)){var{rowIndex:Ne,columnIndex:Xe}=to(We(oe),ue);Nr("remove row",{rowIndex:Ne}),Te(fl([[String(Ne)]]),(_t,Gt)=>{var Ht=Ne<_t.length?Ne:Ne>0?Ne-1:void 0,kt=Ht!==void 0?Wt(Sa({rowIndex:Ht,columnIndex:Xe},ue)):void 0;return Nr("remove row new selection",{rowIndex:Ne,newRowIndex:Ht,newSelection:kt}),{state:Gt,selection:kt}})}})({json:n(N),selection:n(D),columns:n(je),readOnly:f(),onPatch:Yt})}function ft(){return(ft=mt(function*(w){yield Ep({char:w,selectInside:!1,json:n(N),selection:n(D),readOnly:f(),parser:x(),onPatch:Yt,onReplaceJson:Jt,onSelect:Bt})})).apply(this,arguments)}function zn(w){var Z;w.preventDefault(),An((Z=w.clipboardData)===null||Z===void 0?void 0:Z.getData("text/plain"))}function An(w){w!==void 0&&Rp({clipboardText:w,json:n(N),selection:n(D),readOnly:f(),parser:x(),onPatch:Yt,onChangeText:Tt,openRepairModal:X})}function Jt(w,Z){var oe={json:n(N),text:n(ee)},ue={json:n(N),documentState:n($e),selection:n(D),sortedColumn:n(Ye),text:n(ee),textIsRepaired:n(Ze)},xe=Hr(w,n($e)),Te=typeof Z=="function"?Z(w,xe,n(D)):void 0;p(N,(Te==null?void 0:Te.json)!==void 0?Te.json:w),p($e,(Te==null?void 0:Te.state)!==void 0?Te.state:xe),p(D,(Te==null?void 0:Te.selection)!==void 0?Te.selection:n(D)),p(Ye,void 0),p(ee,void 0),p(Ze,!1),p(T,void 0),ht(n(N)),At(ue),pn(oe,void 0)}function Tt(w,Z){a("handleChangeText");var oe={json:n(N),text:n(ee)},ue={json:n(N),documentState:n($e),selection:n(D),sortedColumn:n(Ye),text:n(ee),textIsRepaired:n(Ze)};try{p(N,I()(w)),p($e,Hr(n(N),n($e))),p(ee,void 0),p(Ze,!1),p(T,void 0)}catch(Te){try{p(N,I()(zo(w))),p($e,Hr(n(N),n($e))),p(ee,w),p(Ze,!0),p(T,void 0)}catch{p(N,void 0),p($e,void 0),p(ee,w),p(Ze,!1),p(T,n(ee)!==""?gs(n(ee),Te.message||String(Te)):void 0)}}if(typeof Z=="function"){var xe=Z(n(N),n($e),n(D));p(N,(xe==null?void 0:xe.json)!==void 0?xe.json:n(N)),p($e,(xe==null?void 0:xe.state)!==void 0?xe.state:n($e)),p(D,(xe==null?void 0:xe.selection)!==void 0?xe.selection:n(D))}ht(n(N)),At(ue),pn(oe,void 0)}function qt(w){a("select validation error",w),p(D,Wt(w.path)),$t(w.path)}function Wn(w){if(n(N)!==void 0){var{id:Z,onTransform:oe,onClose:ue}=w,xe=w.rootPath||[];Mt=!0,we()({id:Z||d,json:n(N),rootPath:xe||[],onTransform:Te=>{oe?oe({operations:Te,json:n(N),transformedJson:Co(n(N),Te)}):(a("onTransform",xe,Te),Yt(Te))},onClose:()=>{Mt=!1,setTimeout(xt),ue&&ue()}})}}function U(w){a("openJSONEditorModal",{path:w}),Mt=!0,Ue()({content:{json:Le(n(N),w)},path:w,onPatch:Yt,onClose:()=>{Mt=!1,setTimeout(xt)}})}function X(w,Z){p(Ot,{text:w,onParse:oe=>El(oe,ue=>ki(ue,x())),onRepair:bf,onApply:Z,onClose:xt})}function he(){(function(w){f()||n(N)===void 0||(Mt=!0,Ce()({id:u,json:n(N),rootPath:w,onSort:Z=>{var{operations:oe,itemPath:ue,direction:xe}=Z;a("onSort",oe,w,ue,xe),Yt(oe,(Te,Ne)=>({state:Ne,sortedColumn:{path:ue,sortDirection:xe===-1?ro.desc:ro.asc}}))},onClose:()=>{Mt=!1,setTimeout(xt)}}))})([])}function Rt(){Wn({rootPath:[]})}function sn(w){a("openFind",{findAndReplace:w}),p(Me,!1),p($,!1),Zn(),p(Me,!0),p($,w)}function Zt(){if(!f()&&b().canUndo){var w=b().undo();if(si(w)){var Z={json:n(N),text:n(ee)};p(N,w.undo.patch?Co(n(N),w.undo.patch):w.undo.json),p($e,w.undo.documentState),p(D,w.undo.selection),p(Ye,w.undo.sortedColumn),p(ee,w.undo.text),p(Ze,w.undo.textIsRepaired),p(T,void 0),a("undo",{item:w,json:n(N)}),pn(Z,w.undo.patch&&w.redo.patch?{json:n(N),previousJson:Z.json,redo:w.undo.patch,undo:w.redo.patch}:void 0),xt(),n(D)&&$t(We(n(D)),{scrollToWhenVisible:!1})}else te()(w)}}function jn(){if(!f()&&b().canRedo){var w=b().redo();if(si(w)){var Z={json:n(N),text:n(ee)};p(N,w.redo.patch?Co(n(N),w.redo.patch):w.redo.json),p($e,w.redo.documentState),p(D,w.redo.selection),p(Ye,w.redo.sortedColumn),p(ee,w.redo.text),p(Ze,w.redo.textIsRepaired),p(T,void 0),a("redo",{item:w,json:n(N)}),pn(Z,w.undo.patch&&w.redo.patch?{json:n(N),previousJson:Z.json,redo:w.redo.patch,undo:w.undo.patch}:void 0),xt(),n(D)&&$t(We(n(D)),{scrollToWhenVisible:!1})}else ye()(w)}}function Dn(w){p(Ie,w.getBoundingClientRect().height)}J(()=>(z(C()),z(A())),()=>{p(de,zu({escapeControlCharacters:C(),escapeUnicodeCharacters:A()}))}),J(()=>n(Me),()=>{(function(w){if(n(ce)){var Z=w?Ys:-100;n(ce).scrollTo({top:Qr(ce,n(ce).scrollTop+=Z),left:n(ce).scrollLeft})}})(n(Me))}),J(()=>z(g()),()=>{(function(w){var Z={json:n(N)},oe=ms(w)?w.text!==n(ee):!Xt(Z.json,w.json);if(a("update external content",{isChanged:oe}),oe){var ue={json:n(N),documentState:n($e),selection:n(D),sortedColumn:n(Ye),text:n(ee),textIsRepaired:n(Ze)};if(ms(w))try{p(N,I()(w.text)),p($e,Hr(n(N),n($e))),p(ee,w.text),p(Ze,!1),p(T,void 0)}catch(xe){try{p(N,I()(zo(w.text))),p($e,Hr(n(N),n($e))),p(ee,w.text),p(Ze,!0),p(T,void 0)}catch{p(N,void 0),p($e,void 0),p(ee,w.text),p(Ze,!1),p(T,n(ee)!==""?gs(n(ee),xe.message||String(xe)):void 0)}}else p(N,w.json),p($e,Hr(n(N),n($e))),p(ee,void 0),p(Ze,!1),p(T,void 0);ht(n(N)),p(Ye,void 0),At(ue)}})(g())}),J(()=>z(m()),()=>{(function(w){Xt(n(D),w)||(a("applyExternalSelection",{selection:n(D),externalSelection:w}),ci(w)&&p(D,w))})(m())}),J(()=>(n(je),n(N),z(M()),n(st)),()=>{p(je,xr(n(N))?function(w,Z){var oe=new Set(Z.map(St)),ue=new Set(w.map(St));for(var xe of oe)ue.has(xe)||oe.delete(xe);for(var Te of ue)oe.has(Te)||oe.add(Te);return[...oe].map(So)}(jx(n(N),M(),n(st)),n(je)):[])}),J(()=>(n(N),n(je)),()=>{p(Ge,!(!n(N)||Pn(n(je))))}),J(()=>(n(N),n(st)),()=>{p(r,Array.isArray(n(N))&&n(N).length>n(st))}),J(()=>(n(Ae),n(Ie),n(N),n(Me),Ys),()=>{p(o,xx(n(Ae),n(Ie),n(N),ge,De,n(Me)?Ys:0))}),J(()=>n(N),()=>{n(N),n(ce)&&n(ce).scrollTo({top:n(ce).scrollTop,left:n(ce).scrollLeft})}),J(()=>n(D),()=>{var w;w=n(D),Xt(w,m())||(a("onSelect",w),H()(w))}),J(()=>(z(f()),z(j()),z(x()),n(de),n(N),n($e),z(ne())),()=>{p(Je,{mode:br.table,readOnly:f(),truncateTextSize:j(),parser:x(),normalization:n(de),getJson:()=>n(N),getDocumentState:()=>n($e),findElement:bn,findNextInside:Lt,focus:xt,onPatch:(w,Z)=>Yt(function(oe,ue){return oe.flatMap(xe=>{if(hu(xe)){var Te=So(xe.path);if(Te.length>0){for(var Ne=[xe],Xe=nn(Te);Xe.length>0&&!ca(ue,Xe);)Ne.unshift({op:"add",path:St(Xe),value:{}}),Xe=nn(Xe);return Ne}}return xe})}(w,n(N)),Z),onSelect:Bt,onFind:sn,onPasteJson:rn,onRenderValue:ne()})}),J(()=>(n(N),z(F()),z(x()),z(B())),()=>{un(n(N),F(),x(),B())}),J(()=>(n(Ut),n(je)),()=>{p(s,yx(n(Ut),n(je)))}),mn(),bt(!0);var In=U0();ie("mousedown",Yo,function(w){!As(w.target,Z=>Z===n(re))&&Br(n(D))&&(a("click outside the editor, exit edit mode"),p(D,wo(n(D))),Be&&n(at)&&(n(at).focus(),n(at).blur()),a("blur (outside editor)"),n(at)&&n(at).blur())});var Vn,gt=ot(In),Jn=O(gt),dt=w=>{(function(Z,oe){et(oe,!1);var ue=h(oe,"containsValidArray",9),xe=h(oe,"readOnly",9),Te=h(oe,"showSearch",13,!1),Ne=h(oe,"history",9),Xe=h(oe,"onSort",9),_t=h(oe,"onTransform",9),Gt=h(oe,"onContextMenu",9),Ht=h(oe,"onUndo",9),kt=h(oe,"onRedo",9),En=h(oe,"onRenderMenu",9);function y(){Te(!Te())}var _=P(void 0,!0),se=P(void 0,!0);J(()=>(z(xe()),z(Xe()),z(ue()),z(_t()),z(Gt()),z(Ht()),z(Ne()),z(kt())),()=>{p(_,xe()?[{type:"space"}]:[{type:"button",icon:Zi,title:"Sort",className:"jse-sort",onClick:Xe(),disabled:xe()||!ue()},{type:"button",icon:Gi,title:"Transform contents (filter, sort, project)",className:"jse-transform",onClick:_t(),disabled:xe()||!ue()},{type:"button",icon:wl,title:"Search (Ctrl+F)",className:"jse-search",onClick:y,disabled:!ue()},{type:"button",icon:jv,title:Au,className:"jse-contextmenu",onClick:Gt()},{type:"separator"},{type:"button",icon:du,title:"Undo (Ctrl+Z)",className:"jse-undo",onClick:Ht(),disabled:!Ne().canUndo},{type:"button",icon:vu,title:"Redo (Ctrl+Shift+Z)",className:"jse-redo",onClick:kt(),disabled:!Ne().canRedo},{type:"space"}])}),J(()=>(z(En()),n(_)),()=>{p(se,En()(n(_))||n(_))}),mn(),bt(!0),_l(Z,{get items(){return n(se)}}),tt()})(w,{get containsValidArray(){return n(Ge)},get readOnly(){return f()},get history(){return b()},onSort:he,onTransform:Rt,onUndo:Zt,onRedo:jn,onContextMenu:lr,get onRenderMenu(){return ve()},get showSearch(){return n(Me)},set showSearch(Z){p(Me,Z)},$$legacy:!0})};K(Jn,w=>{k()&&w(dt)});var mr=q(Jn,2),Pe=w=>{var Z=q0(),oe=ot(Z),ue=O(oe);ue.readOnly=!0,Qn(ue,Xe=>p(at,Xe),()=>n(at));var xe=q(oe,2),Te=Xe=>{var _t=T0(),Gt=ot(_t);Cp(O(Gt),{get json(){return n(N)},get documentState(){return n($e)},get parser(){return x()},get showSearch(){return n(Me)},get showReplace(){return n($)},get readOnly(){return f()},get columns(){return n(je)},onSearch:E,onFocus:jt,onPatch:Yt,onClose:lt});var Ht=q(Gt,2),kt=O(Ht),En=O(kt),y=O(En),_=O(y),se=O(_),qe=Qe=>{var vn=tr(),Kn=ae(()=>{var xn;return wc([],(xn=n(s))===null||xn===void 0?void 0:xn.root)}),or=ot(vn),wn=xn=>{var Nt=C0();ds(O(Nt),{get validationError(){return n(Kn)},onExpand:no}),R(xn,Nt)};K(or,xn=>{n(Kn)&&xn(wn)}),R(Qe,vn)};K(se,Qe=>{var vn;Pn((vn=n(s))===null||vn===void 0?void 0:vn.root)||Qe(qe)});var Oe=q(_);sr(Oe,1,()=>n(je),vr,(Qe,vn)=>{var Kn=z0();(function(or,wn){et(wn,!1);var xn=P(void 0,!0),Nt=P(void 0,!0),fr=P(void 0,!0),Rr=h(wn,"path",9),uo=h(wn,"sortedColumn",9),jo=h(wn,"readOnly",9),vo=h(wn,"onSort",9);J(()=>(z(Rr()),ao),()=>{p(xn,Pn(Rr())?"values":ao(Rr()))}),J(()=>(z(uo()),z(Rr())),()=>{var $n;p(Nt,uo()&&Xt(Rr(),($n=uo())===null||$n===void 0?void 0:$n.path)?uo().sortDirection:void 0)}),J(()=>(n(Nt),Jd),()=>{p(fr,n(Nt)?Jd[n(Nt)]:void 0)}),mn(),bt(!0);var Cr,Ur=p0(),Do=O(Ur),Ba=O(Do),Xr=q(Do,2),pr=$n=>{var yr=f0(),Jo=O(yr),Lr=ae(()=>n(Nt)===ro.asc?ma:mh);en(Jo,{get data(){return n(Lr)}}),be(()=>gn(yr,"title","Currently sorted in ".concat(n(fr)," order"))),R($n,yr)};K(Xr,$n=>{n(Nt)!==void 0&&$n(pr)}),be(($n,yr)=>{Cr=wt(Ur,1,"jse-column-header svelte-2i3vdx",null,Cr,$n),gn(Ur,"title",jo()?n(xn):n(xn)+" (Click to sort the data by this column)"),it(Ba,yr)},[()=>({"jse-readonly":jo()}),()=>oi(n(xn),50)],ae),ie("click",Ur,function(){jo()||vo()({path:Rr(),sortDirection:n(Nt)===ro.asc?ro.desc:ro.asc})}),R(or,Ur),tt()})(O(Kn),{get path(){return n(vn)},get sortedColumn(){return n(Ye)},get readOnly(){return f()},onSort:Cn}),R(Qe,Kn)});var Se=q(Oe),ze=Qe=>{var vn=O0(),Kn=O(vn),or=ae(()=>Array.isArray(n(N))?n(N).length:0);(function(wn,xn){et(xn,!1);var Nt=h(xn,"count",9),fr=h(xn,"maxSampleCount",9),Rr=h(xn,"readOnly",9),uo=h(xn,"onRefresh",9);bt(!0);var jo,vo=S0();en(O(vo),{data:bh}),be(Cr=>{jo=wt(vo,1,"jse-column-header svelte-fzj761",null,jo,Cr),gn(vo,"title","The Columns are created by sampling ".concat(fr()," items out of ").concat(Nt(),". ")+"If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")},[()=>({"jse-readonly":Rr()})],ae),ie("click",vo,()=>uo()()),R(wn,vo),tt()})(Kn,{get count(){return n(or)},get maxSampleCount(){return n(st)},get readOnly(){return f()},onRefresh:()=>p(st,1/0)}),R(Qe,vn)};K(Se,Qe=>{n(r)&&Qe(ze)});var Fe,yt,tn=q(y),Qt=O(tn),Mn=q(tn);sr(Mn,1,()=>n(o).visibleItems,vr,(Qe,vn,Kn)=>{var or=E0(),wn=ae(()=>n(o).startIndex+Kn),xn=ae(()=>n(s).rows[n(wn)]),Nt=ae(()=>{var Cr;return wc([String(n(wn))],(Cr=n(xn))===null||Cr===void 0?void 0:Cr.row)}),fr=ae(()=>Ma(n(N),n(Y),[String(n(wn))])),Rr=O(or);nf(Rr,()=>n(wn),Cr=>{var Ur=M0(),Do=O(Ur),Ba=q(Do),Xr=pr=>{ds(pr,{get validationError(){return n(Nt)},onExpand:no})};K(Ba,pr=>{n(Nt)&&pr(Xr)}),qr(Ur,(pr,$n)=>Ks==null?void 0:Ks(pr,$n),()=>pr=>function($n,yr){ge[yr]=$n.getBoundingClientRect().height}(pr,n(wn))),be(()=>{var pr;return it(Do,"".concat((pr=n(wn))!==null&&pr!==void 0?pr:""," "))}),R(Cr,Ur)});var uo=q(Rr);sr(uo,1,()=>n(je),vr,(Cr,Ur,Do,Ba)=>{var Xr,pr=R0(),$n=ae(()=>[String(n(wn))].concat(n(Ur))),yr=ae(()=>Le(n(vn),n(Ur))),Jo=ae(()=>yn(n(D))&&ra(n(D).path,n($n))),Lr=ae(()=>{var Ln;return(Ln=n(xn))===null||Ln===void 0?void 0:Ln.columns[Do]}),Ts=ae(()=>wc(n($n),n(Lr))),Ns=O(pr),La=O(Ns),Wl=Ln=>{var Tr=ae(()=>Gc(Ma(n(vn),n(fr),n(Ur)))),Us=ae(()=>!!n(Tr)&&n(Tr).some(ka=>ka.active)),Ds=ae(()=>!Pn(n(Tr)));(function(ka,Fr){et(Fr,!1);var Ql=h(Fr,"path",9),Fa=h(Fr,"value",9),Js=h(Fr,"parser",9),Jp=h(Fr,"isSelected",9),Bp=h(Fr,"containsSearchResult",9),Lp=h(Fr,"containsActiveSearchResult",9),Fp=h(Fr,"onEdit",9);bt(!0);var Qu,Pi=v0(),_p=O(Pi);be((Bs,Wp)=>{Qu=wt(Pi,1,"jse-inline-value svelte-h57m0p",null,Qu,Bs),it(_p,Wp)},[()=>({"jse-selected":Jp(),"jse-highlight":Bp(),"jse-active":Lp()}),()=>{var Bs;return oi((Bs=Js().stringify(Fa()))!==null&&Bs!==void 0?Bs:"",50)}],ae),ie("dblclick",Pi,()=>Fp()(Ql())),R(ka,Pi),tt()})(Ln,{get path(){return n($n)},get value(){return n(yr)},get parser(){return x()},get isSelected(){return n(Jo)},get containsSearchResult(){return n(Ds)},get containsActiveSearchResult(){return n(Us)},onEdit:U})},qs=Ln=>{var Tr=ae(()=>{var Fr;return(Fr=Ma(n(N),n(Y),n($n)))===null||Fr===void 0?void 0:Fr.searchResults}),Us=ae(()=>n(yr)!==void 0?n(yr):""),Ds=ae(()=>Go(n(N),n($e),n($n))),ka=ae(()=>n(Jo)?n(D):void 0);kp(Ln,{get path(){return n($n)},get value(){return n(Us)},get enforceString(){return n(Ds)},get selection(){return n(ka)},get searchResultItems(){return n(Tr)},get context(){return n(Je)}})};K(La,Ln=>{cr(n(yr))?Ln(Wl):Ln(qs,!1)});var Is=q(La),Vl=Ln=>{var Tr=P0();sa(O(Tr),{selected:!0,onContextMenu:ur}),R(Ln,Tr)};K(Is,Ln=>{f()||!n(Jo)||Br(n(D))||Ln(Vl)});var $l=q(Ns,2),Hl=Ln=>{ds(Ln,{get validationError(){return n(Ts)},onExpand:no})};K($l,Ln=>{n(Ts)&&Ln(Hl)}),be((Ln,Tr)=>{gn(pr,"data-path",Ln),Xr=wt(Ns,1,"jse-value-outer svelte-u14cgx",null,Xr,Tr)},[()=>Jc(n($n)),()=>({"jse-selected-value":n(Jo)})],ae),R(Cr,pr)});var jo=q(uo),vo=Cr=>{R(Cr,A0())};K(jo,Cr=>{n(r)&&Cr(vo)}),R(Qe,or)});var ut,er=O(q(Mn));Qn(Ht,Qe=>p(ce,Qe),()=>n(ce)),qr(Ht,(Qe,vn)=>Ks==null?void 0:Ks(Qe,vn),()=>Dn),Or(()=>ie("scroll",Ht,an));var Tn=q(Ht,2),Bn=Qe=>{var vn=ae(()=>"You pasted a JSON ".concat(Array.isArray(n(pe).contents)?"array":"object"," as text"));mo(Qe,{type:"info",get message(){return n(vn)},actions:[{icon:fs,text:"Paste as JSON instead",title:"Paste the text as JSON instead of a single value",onMouseDown:qn},{text:"Leave as is",title:"Keep the pasted content as a single value",onClick:W}]})};K(Tn,Qe=>{n(pe)&&Qe(Bn)});var cn=q(Tn,2),_e=Qe=>{var vn=ae(()=>f()?[]:[{icon:fu,text:"Ok",title:"Accept the repaired document",onClick:Ft},{icon:Xi,text:"Repair manually instead",title:"Leave the document unchanged and repair it manually instead",onClick:ke}]);mo(Qe,{type:"success",message:"The loaded JSON document was invalid but is successfully repaired.",get actions(){return n(vn)},onClose:xt})};K(cn,Qe=>{n(Ze)&&Qe(_e)}),Vu(q(cn,2),{get validationErrors(){return n(Ut)},selectError:qt}),be(Qe=>{Fe=wt(tn,1,"jse-table-invisible-start-section svelte-u14cgx",null,Fe,Qe),gn(Qt,"colspan",n(je).length),yt=po(Qt,"",yt,{height:n(o).startHeight+"px"}),gn(er,"colspan",n(je).length),ut=po(er,"",ut,{height:n(o).endHeight+"px"})},[()=>({"jse-search-box-background":n(Me)})],ae),R(Xe,_t)},Ne=(Xe,_t)=>{var Gt=kt=>{var En=N0(),y=ot(En),_=ae(()=>f()?[]:[{icon:Xi,text:"Repair manually",title:'Open the document in "code" mode and repair it manually',onClick:ke}]);mo(y,{type:"error",message:"The loaded JSON document is invalid and could not be repaired automatically.",get actions(){return n(_)}}),Tp(q(y,2),{get text(){return n(ee)},get json(){return n(N)},get indentation(){return S()},get parser(){return x()}}),R(kt,En)},Ht=kt=>{k0(kt,{get text(){return n(ee)},get json(){return n(N)},get readOnly(){return f()},get parser(){return x()},openJSONEditorModal:U,extractPath:zt,get onChangeMode(){return G()},onClick:()=>{xt()}})};K(Xe,kt=>{n(T)&&n(ee)!==void 0&&n(ee)!==""?kt(Gt):kt(Ht,!1)},_t)};K(xe,Xe=>{n(Ge)?Xe(Te):Xe(Ne,!1)}),ie("paste",ue,zn),R(w,Z)},on=w=>{R(w,I0())};K(mr,w=>{v?w(on,!1):w(Pe)}),Qn(gt,w=>p(re,w),()=>n(re));var On=q(gt,2),ln=w=>{yp(w,{onClose:()=>p(It,!1)})};K(On,w=>{n(It)&&w(ln)});var rr=q(On,2),Ir=w=>{wp(w,ha(()=>n(Ot),{onClose:()=>{var Z;(Z=n(Ot))===null||Z===void 0||Z.onClose(),p(Ot,void 0)}}))};return K(rr,w=>{n(Ot)&&w(Ir)}),be(w=>Vn=wt(gt,1,"jse-table-mode svelte-u14cgx",null,Vn,w),[()=>({"no-main-menu":!k()})],ae),ie("mousedown",gt,function(w){if(w.buttons===1||w.buttons===2){var Z=w.target;Z.isContentEditable||xt();var oe=Rf(Z);if(oe){if(Br(n(D))&&di(n(N),n(D),oe))return;p(D,Wt(oe)),w.preventDefault()}}}),ie("keydown",gt,function(w){var Z=No(w);if(a("keydown",{combo:Z,key:w.key}),Z==="Ctrl+X"&&(w.preventDefault(),He(!0)),Z==="Ctrl+Shift+X"&&(w.preventDefault(),He(!1)),Z==="Ctrl+C"&&(w.preventDefault(),Ve(!0)),Z==="Ctrl+Shift+C"&&(w.preventDefault(),Ve(!1)),Z==="Ctrl+D"&&(w.preventDefault(),hn()),Z!=="Delete"&&Z!=="Backspace"||(w.preventDefault(),dn()),Z==="Insert"&&w.preventDefault(),Z==="Ctrl+A"&&w.preventDefault(),Z==="Ctrl+Q"&&nr(w),Z==="ArrowLeft"&&(w.preventDefault(),rt(),n(D))){var oe=function(_t,Gt){var{rowIndex:Ht,columnIndex:kt}=to(We(Gt),_t);return kt>0?Wt(Sa({rowIndex:Ht,columnIndex:kt-1},_t)):Gt}(n(je),n(D));p(D,oe),Yn(We(oe))}if(Z==="ArrowRight"&&(w.preventDefault(),rt(),n(D))){var ue=function(_t,Gt){var{rowIndex:Ht,columnIndex:kt}=to(We(Gt),_t);return kt<_t.length-1?Wt(Sa({rowIndex:Ht,columnIndex:kt+1},_t)):Gt}(n(je),n(D));p(D,ue),Yn(We(ue))}if(Z==="ArrowUp"&&(w.preventDefault(),rt(),n(D))){var xe=function(_t,Gt){var{rowIndex:Ht,columnIndex:kt}=to(We(Gt),_t);return Ht>0?Wt(Sa({rowIndex:Ht-1,columnIndex:kt},_t)):Gt}(n(je),n(D));p(D,xe),Yn(We(xe))}if(Z==="ArrowDown"&&(w.preventDefault(),rt(),n(D))){var Te=function(_t,Gt,Ht){var{rowIndex:kt,columnIndex:En}=to(We(Ht),Gt);return kt<_t.length-1?Wt(Sa({rowIndex:kt+1,columnIndex:En},Gt)):Ht}(n(N),n(je),n(D));p(D,Te),Yn(We(Te))}if(Z==="Enter"&&n(D)&&yn(n(D))){w.preventDefault();var Ne=n(D).path;cr(Le(n(N),Ne))?U(Ne):f()||p(D,me(me({},n(D)),{},{edit:!0}))}if(Z.replace(/^Shift\+/,"").length===1&&n(D))return w.preventDefault(),void function(_t){ft.apply(this,arguments)}(w.key);if(Z==="Ctrl+Enter"&&yn(n(D))){w.preventDefault();var Xe=Le(n(N),n(D).path);wi(Xe)&&window.open(String(Xe),"_blank")}Z==="Escape"&&n(D)&&(w.preventDefault(),p(D,void 0)),Z==="Ctrl+F"&&(w.preventDefault(),sn(!1)),Z==="Ctrl+H"&&(w.preventDefault(),sn(!0)),Z==="Ctrl+Z"&&(w.preventDefault(),Zt()),Z==="Ctrl+Shift+Z"&&(w.preventDefault(),jn())}),ie("contextmenu",gt,nr),R(t,In),pt(e,"validate",Dt),pt(e,"patch",_n),pt(e,"focus",xt),pt(e,"acceptAutoRepair",Ft),pt(e,"scrollTo",$t),pt(e,"findElement",bn),pt(e,"openTransformModal",Wn),tt({validate:Dt,patch:_n,focus:xt,acceptAutoRepair:Ft,scrollTo:$t,findElement:bn,openTransformModal:Wn})}function fv(t,e){et(e,!1);var r=h(e,"content",8),o=h(e,"selection",12),s=h(e,"readOnly",8),a=h(e,"indentation",8),i=h(e,"tabSize",8),l=h(e,"truncateTextSize",8),c=h(e,"externalMode",8),u=h(e,"mainMenuBar",8),d=h(e,"navigationBar",8),v=h(e,"statusBar",8),f=h(e,"askToFormat",8),g=h(e,"escapeControlCharacters",8),m=h(e,"escapeUnicodeCharacters",8),b=h(e,"flattenColumns",8),j=h(e,"parser",8),k=h(e,"parseMemoizeOne",8),C=h(e,"validator",8),A=h(e,"validationParser",8),M=h(e,"pathParser",8),x=h(e,"insideModal",8),I=h(e,"onChange",8),F=h(e,"onChangeMode",8),B=h(e,"onSelect",8),S=h(e,"onRenderValue",8),V=h(e,"onClassName",8),G=h(e,"onRenderMenu",8),H=h(e,"onRenderContextMenu",8),te=h(e,"onError",8),ye=h(e,"onFocus",8),ne=h(e,"onBlur",8),ve=h(e,"onSortModal",8),Ee=h(e,"onTransformModal",8),Re=h(e,"onJSONEditorModal",8),fe=P(),Ce=P(),we=P(),Ue=wr("jsoneditor:JSONEditorRoot"),de=P(Up({onChange:ge=>p(de,ge)}).get()),re=P(c());function ce(ge){if($c(ge)){p(re,ge.undo.mode);var Ie=n(de).items(),Ae=Ie.findIndex(Bt=>Bt===ge),De=Ae!==-1?Ie[Ae-1]:void 0;Ue("handleUndo",{index:Ae,item:ge,items:Ie,prevItem:De}),De&&o(De.redo.selection),F()(n(re))}}function at(ge){if($c(ge)){p(re,ge.redo.mode);var Ie=n(de).items(),Ae=Ie.findIndex(Bt=>Bt===ge),De=Ae!==-1?Ie[Ae+1]:void 0;Ue("handleRedo",{index:Ae,item:ge,items:Ie,nextItem:De}),De&&o(De.undo.selection),F()(n(re))}}var Ot=P(),Q={type:"separator"},N=P(),ee=P();function T(ge){if(n(fe))return n(fe).patch(ge);if(n(Ce))return n(Ce).patch(ge);if(n(we))return n(we).patch(ge);throw new Error('Method patch is not available in mode "'.concat(n(re),'"'))}function pe(ge,Ie){if(n(fe))return n(fe).expand(ge,Ie);throw new Error('Method expand is not available in mode "'.concat(n(re),'"'))}function Y(ge,Ie){if(n(fe))return n(fe).collapse(ge,Ie);throw new Error('Method collapse is not available in mode "'.concat(n(re),'"'))}function Me(ge){if(n(we))n(we).openTransformModal(ge);else if(n(fe))n(fe).openTransformModal(ge);else{if(!n(Ce))throw new Error('Method transform is not available in mode "'.concat(n(re),'"'));n(Ce).openTransformModal(ge)}}function $(){if(n(we))return n(we).validate();if(n(fe))return n(fe).validate();if(n(Ce))return n(Ce).validate();throw new Error('Method validate is not available in mode "'.concat(n(re),'"'))}function E(){return n(fe)?n(fe).acceptAutoRepair():r()}function jt(ge){if(n(fe))return n(fe).scrollTo(ge);if(n(Ce))return n(Ce).scrollTo(ge);throw new Error('Method scrollTo is not available in mode "'.concat(n(re),'"'))}function Ke(ge){if(n(fe))return n(fe).findElement(ge);if(n(Ce))return n(Ce).findElement(ge);throw new Error('Method findElement is not available in mode "'.concat(n(re),'"'))}function lt(){n(we)?n(we).focus():n(fe)?n(fe).focus():n(Ce)&&n(Ce).focus()}function st(){return je.apply(this,arguments)}function je(){return(je=mt(function*(){n(we)&&(yield n(we).refresh())})).apply(this,arguments)}J(()=>z(c()),()=>{(function(ge){if(ge!==n(re)){var Ie={type:"mode",undo:{mode:n(re),selection:void 0},redo:{mode:ge,selection:void 0}};n(re)==="text"&&n(we)&&n(we).flush(),Ue("add history item",Ie),n(de).add(Ie),p(re,ge)}})(c())}),J(()=>(n(re),z(F())),()=>{p(Ot,[{type:"button",text:"text",title:"Switch to text mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-first"+(n(re)===br.text?" jse-selected":""),onClick:()=>F()(br.text)},{type:"button",text:"tree",title:"Switch to tree mode (current mode: ".concat(n(re),")"),className:"jse-group-button "+(n(re)===br.tree?" jse-selected":""),onClick:()=>F()(br.tree)},{type:"button",text:"table",title:"Switch to table mode (current mode: ".concat(n(re),")"),className:"jse-group-button jse-last"+(n(re)===br.table?" jse-selected":""),onClick:()=>F()(br.table)}])}),J(()=>(n(Ot),z(G()),n(re),z(x()),z(s())),()=>{p(N,ge=>{var Ie=Eu(ge[0])?n(Ot).concat(ge):n(Ot).concat(Q,ge),Ae=Cc(Ie);return G()(Ie,{mode:n(re),modal:x(),readOnly:s()})||Ae})}),J(()=>(z(H()),n(re),z(x()),z(s()),z(o())),()=>{p(ee,ge=>{var Ie,Ae=Cc(ge);return(Ie=H()(ge,{mode:n(re),modal:x(),readOnly:s(),selection:o()}))!==null&&Ie!==void 0?Ie:!s()&&Ae})}),mn(),bt();var Ge=tr(),Mt=ot(Ge),Be=ge=>{Qn(d0(ge,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(de)},get readOnly(){return s()},get indentation(){return a()},get tabSize(){return i()},get mainMenuBar(){return u()},get statusBar(){return v()},get askToFormat(){return f()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get validator(){return C()},get validationParser(){return A()},get onChange(){return I()},get onChangeMode(){return F()},get onSelect(){return B()},onUndo:ce,onRedo:at,get onError(){return te()},get onFocus(){return ye()},get onBlur(){return ne()},get onRenderMenu(){return n(N)},get onSortModal(){return ve()},get onTransformModal(){return Ee()},$$legacy:!0}),Ie=>p(we,Ie),()=>n(we))},It=(ge,Ie)=>{var Ae=Bt=>{Qn(D0(Bt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(de)},get readOnly(){return s()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return m()},get flattenColumns(){return b()},get parser(){return j()},get parseMemoizeOne(){return k()},get validator(){return C()},get validationParser(){return A()},get indentation(){return a()},get onChange(){return I()},get onChangeMode(){return F()},get onSelect(){return B()},onUndo:ce,onRedo:at,get onRenderValue(){return S()},get onFocus(){return ye()},get onBlur(){return ne()},get onRenderMenu(){return n(N)},get onRenderContextMenu(){return n(ee)},get onSortModal(){return ve()},get onTransformModal(){return Ee()},get onJSONEditorModal(){return Re()},$$legacy:!0}),ht=>p(Ce,ht),()=>n(Ce))},De=Bt=>{Qn(uu(Bt,{get externalContent(){return r()},get externalSelection(){return o()},get history(){return n(de)},get readOnly(){return s()},get indentation(){return a()},get truncateTextSize(){return l()},get mainMenuBar(){return u()},get navigationBar(){return d()},get escapeControlCharacters(){return g()},get escapeUnicodeCharacters(){return m()},get parser(){return j()},get parseMemoizeOne(){return k()},get validator(){return C()},get validationParser(){return A()},get pathParser(){return M()},get onError(){return te()},get onChange(){return I()},get onChangeMode(){return F()},get onSelect(){return B()},onUndo:ce,onRedo:at,get onRenderValue(){return S()},get onClassName(){return V()},get onFocus(){return ye()},get onBlur(){return ne()},get onRenderMenu(){return n(N)},get onRenderContextMenu(){return n(ee)},get onSortModal(){return ve()},get onTransformModal(){return Ee()},get onJSONEditorModal(){return Re()},$$legacy:!0}),ht=>p(fe,ht),()=>n(fe))};K(ge,Bt=>{n(re)===br.table?Bt(Ae):Bt(De,!1)},Ie)};return K(Mt,ge=>{n(re)===br.text||String(n(re))==="code"?ge(Be):ge(It,!1)}),R(t,Ge),pt(e,"patch",T),pt(e,"expand",pe),pt(e,"collapse",Y),pt(e,"transform",Me),pt(e,"validate",$),pt(e,"acceptAutoRepair",E),pt(e,"scrollTo",jt),pt(e,"findElement",Ke),pt(e,"focus",lt),pt(e,"refresh",st),tt({patch:T,expand:pe,collapse:Y,transform:Me,validate:$,acceptAutoRepair:E,scrollTo:jt,findElement:Ke,focus:lt,refresh:st})}vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-v0el4e {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) .jse-label-inner:where(.svelte-v0el4e) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-modal-inline-editor:where(.svelte-v0el4e) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) .jse-error:where(.svelte-v0el4e) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);var J0=L('<div class="jse-error svelte-v0el4e"> </div>'),B0=L('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>'),L0=L('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>'),F0=L('<button type="button" class="jse-primary svelte-v0el4e">Close</button>'),_0=L('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>',1),W0=L('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>'),V0={};vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-1v9c92j {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) th:where(.svelte-1v9c92j),
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) td:where(.svelte-1v9c92j) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j input.jse-path:where(.svelte-1v9c92j) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-1v9c92j .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) {
  height: 200px;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) .jse-error:where(.svelte-1v9c92j) {
  color: var(--jse-error-color, #ee5341);
}`);var Qa=Rl(()=>V0),$0=L('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>'),H0=L('<div class="jse-error svelte-1v9c92j"> </div>'),Q0=L('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"><col width="75%"></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>',1);vt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-57bmz4 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-57bmz4:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);var Y0=L('<div role="none"><!></div> <!> <!> <!>',1);function Dp(t,e){et(e,!1);var r=P(void 0,!0),o=wr("jsoneditor:JSONEditor"),s={text:""},a=void 0,i=!1,l=br.tree,c=!0,u=!0,d=!0,v=!0,f=!1,g=!1,m=!0,b=JSON,j=void 0,k=JSON,C={parse:ip,stringify:ao},A=[Af],M=A[0].id,x=no,I=void 0,F=void 0,B=sp,S=no,V=no,G=no,H=no,te=le=>{console.error(le),alert(le.toString())},ye=no,ne=no,ve=h(e,"content",13,s),Ee=h(e,"selection",13,a),Re=h(e,"readOnly",13,i),fe=h(e,"indentation",13,2),Ce=h(e,"tabSize",13,4),we=h(e,"truncateTextSize",13,1e3),Ue=h(e,"mode",13,l),de=h(e,"mainMenuBar",13,c),re=h(e,"navigationBar",13,u),ce=h(e,"statusBar",13,d),at=h(e,"askToFormat",13,v),Ot=h(e,"escapeControlCharacters",13,f),Q=h(e,"escapeUnicodeCharacters",13,g),N=h(e,"flattenColumns",13,m),ee=h(e,"parser",13,b),T=h(e,"validator",13,j),pe=h(e,"validationParser",13,k),Y=h(e,"pathParser",13,C),Me=h(e,"queryLanguages",13,A),$=h(e,"queryLanguageId",13,M),E=h(e,"onChangeQueryLanguage",13,x),jt=h(e,"onChange",13,I),Ke=h(e,"onSelect",13,F),lt=h(e,"onRenderValue",13,B),st=h(e,"onClassName",13,S),je=h(e,"onRenderMenu",13,V),Ge=h(e,"onRenderContextMenu",13,G),Mt=h(e,"onChangeMode",13,H),Be=h(e,"onError",13,te),It=h(e,"onFocus",13,ye),ge=h(e,"onBlur",13,ne),Ie=P(Ga(),!0),Ae=P(!1,!0),De=P(void 0,!0),Bt=P(void 0,!0),ht=P(void 0,!0),$e=P(void 0,!0),D=P(ee(),!0);function Ye(){return ve()}function Ze(le){o("set");var Kt=sc(le);if(Kt)throw new Error(Kt);p(Ie,Ga()),ve(le),Zn()}function Cn(le){o("update");var Kt=sc(le);if(Kt)throw new Error(Kt);ve(le),Zn()}function Je(le){var Kt=n(De).patch(le);return Zn(),Kt}function At(le){Ee(le),Zn()}function Ut(le,Kt){n(De).expand(le,Kt),Zn()}function ir(le){var Kt=arguments.length>1&&arguments[1]!==void 0&&arguments[1];n(De).collapse(le,Kt),Zn()}function un(){var le=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n(De).transform(le),Zn()}function Dt(){return n(De).validate()}function _n(){var le=n(De).acceptAutoRepair();return Zn(),le}function Yt(le){return pn.apply(this,arguments)}function pn(){return(pn=mt(function*(le){yield n(De).scrollTo(le)})).apply(this,arguments)}function rn(le){return n(De).findElement(le)}function Lt(){n(De).focus(),Zn()}function xt(){return an.apply(this,arguments)}function an(){return(an=mt(function*(){yield n(De).refresh()})).apply(this,arguments)}function rt(le){var Kt,W,ke,He,Ct,Ve,Et,dn,zt,hn,ct,Pt,nt,ft,zn,An,Jt,Tt,qt,Wn,U,X,he,Rt,sn,Zt,jn,Dn,In,Vn,gt,Jn=Object.keys(le);for(var dt of Jn)switch(dt){case"content":ve((Kt=le[dt])!==null&&Kt!==void 0?Kt:s);break;case"selection":Ee((W=le[dt])!==null&&W!==void 0?W:a);break;case"readOnly":Re((ke=le[dt])!==null&&ke!==void 0?ke:i);break;case"indentation":fe((He=le[dt])!==null&&He!==void 0?He:2);break;case"tabSize":Ce((Ct=le[dt])!==null&&Ct!==void 0?Ct:4);break;case"truncateTextSize":we((Ve=le[dt])!==null&&Ve!==void 0?Ve:1e3);break;case"mode":Ue((Et=le[dt])!==null&&Et!==void 0?Et:l);break;case"mainMenuBar":de((dn=le[dt])!==null&&dn!==void 0?dn:c);break;case"navigationBar":re((zt=le[dt])!==null&&zt!==void 0?zt:u);break;case"statusBar":ce((hn=le[dt])!==null&&hn!==void 0?hn:d);break;case"askToFormat":at((ct=le[dt])!==null&&ct!==void 0?ct:v);break;case"escapeControlCharacters":Ot((Pt=le[dt])!==null&&Pt!==void 0?Pt:f);break;case"escapeUnicodeCharacters":Q((nt=le[dt])!==null&&nt!==void 0?nt:g);break;case"flattenColumns":N((ft=le[dt])!==null&&ft!==void 0?ft:m);break;case"parser":ee((zn=le[dt])!==null&&zn!==void 0?zn:b);break;case"validator":T((An=le[dt])!==null&&An!==void 0?An:j);break;case"validationParser":pe((Jt=le[dt])!==null&&Jt!==void 0?Jt:k);break;case"pathParser":Y((Tt=le[dt])!==null&&Tt!==void 0?Tt:C);break;case"queryLanguages":Me((qt=le[dt])!==null&&qt!==void 0?qt:A);break;case"queryLanguageId":$((Wn=le[dt])!==null&&Wn!==void 0?Wn:M);break;case"onChangeQueryLanguage":E((U=le[dt])!==null&&U!==void 0?U:x);break;case"onChange":jt((X=le[dt])!==null&&X!==void 0?X:I);break;case"onRenderValue":lt((he=le[dt])!==null&&he!==void 0?he:B);break;case"onClassName":st((Rt=le[dt])!==null&&Rt!==void 0?Rt:S);break;case"onRenderMenu":je((sn=le[dt])!==null&&sn!==void 0?sn:V);break;case"onRenderContextMenu":Ge((Zt=le[dt])!==null&&Zt!==void 0?Zt:G);break;case"onChangeMode":Mt((jn=le[dt])!==null&&jn!==void 0?jn:H);break;case"onSelect":Ke((Dn=le[dt])!==null&&Dn!==void 0?Dn:F);break;case"onError":Be((In=le[dt])!==null&&In!==void 0?In:te);break;case"onFocus":It((Vn=le[dt])!==null&&Vn!==void 0?Vn:ye);break;case"onBlur":ge((gt=le[dt])!==null&&gt!==void 0?gt:ne);break;default:mr(dt)}function mr(Pe){o('Unknown property "'.concat(Pe,'"'))}Me().some(Pe=>Pe.id===$())||$(Me()[0].id),Zn()}function Ft(){return $t.apply(this,arguments)}function $t(){return($t=mt(function*(){throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")})).apply(this,arguments)}function Rn(le,Kt,W){ve(le),jt()&&jt()(le,Kt,W)}function Yn(le){Ee(le),Ke()&&Ke()(Cc(le))}function bn(){p(Ae,!0),It()&&It()()}function ur(){p(Ae,!1),ge()&&ge()()}function nr(le){return lr.apply(this,arguments)}function lr(){return(lr=mt(function*(le){Ue()!==le&&(Ue(le),Zn(),Lt(),Mt()(le))})).apply(this,arguments)}function gr(le){o("handleChangeQueryLanguage",le),$(le),E()(le)}function dr(le){var{id:Kt,json:W,rootPath:ke,onTransform:He,onClose:Ct}=le;Re()||p($e,{id:Kt,json:W,rootPath:ke,indentation:fe(),truncateTextSize:we(),escapeControlCharacters:Ot(),escapeUnicodeCharacters:Q(),parser:ee(),parseMemoizeOne:n(r),validationParser:pe(),pathParser:Y(),queryLanguages:Me(),queryLanguageId:$(),onChangeQueryLanguage:gr,onRenderValue:lt(),onRenderMenu:Ve=>je()(Ve,{mode:Ue(),modal:!0,readOnly:Re()}),onRenderContextMenu:Ve=>Ge()(Ve,{mode:Ue(),modal:!0,readOnly:Re(),selection:Ee()}),onClassName:st(),onTransform:He,onClose:Ct})}function Nn(le){Re()||p(ht,le)}function qn(le){var{content:Kt,path:W,onPatch:ke,onClose:He}=le;o("onJSONEditorModal",{content:Kt,path:W}),p(Bt,{content:Kt,path:W,onPatch:ke,readOnly:Re(),indentation:fe(),tabSize:Ce(),truncateTextSize:we(),mainMenuBar:de(),navigationBar:re(),statusBar:ce(),askToFormat:at(),escapeControlCharacters:Ot(),escapeUnicodeCharacters:Q(),flattenColumns:N(),parser:ee(),validator:void 0,validationParser:pe(),pathParser:Y(),onRenderValue:lt(),onClassName:st(),onRenderMenu:je(),onRenderContextMenu:Ge(),onSortModal:Nn,onTransformModal:dr,onClose:He})}function Xn(le){le.stopPropagation()}return J(()=>(z(ee()),n(D),z(ve()),Ga),()=>{if(!Cu(ee(),n(D))){if(o("parser changed, recreate editor"),bs(ve())){var le=n(D).stringify(ve().json);ve({json:le!==void 0?ee().parse(le):void 0})}p(D,ee()),p(Ie,Ga())}}),J(()=>z(ve()),()=>{var le=sc(ve());le&&console.error("Error: "+le)}),J(()=>z(Ee()),()=>{Ee()===null&&console.warn("selection is invalid: it is null but should be undefined")}),J(()=>z(ee()),()=>{p(r,ti(ee().parse))}),J(()=>z(Ue()),()=>{o("mode changed to",Ue())}),mn(),bt(!0),Bc(t,{children:(le,Kt)=>{var W,ke=Y0(),He=ot(ke);nf(O(He),()=>n(Ie),ct=>{Qn(fv(ct,{get externalMode(){return Ue()},get content(){return ve()},get selection(){return Ee()},get readOnly(){return Re()},get indentation(){return fe()},get tabSize(){return Ce()},get truncateTextSize(){return we()},get statusBar(){return ce()},get askToFormat(){return at()},get mainMenuBar(){return de()},get navigationBar(){return re()},get escapeControlCharacters(){return Ot()},get escapeUnicodeCharacters(){return Q()},get flattenColumns(){return N()},get parser(){return ee()},get parseMemoizeOne(){return n(r)},get validator(){return T()},get validationParser(){return pe()},get pathParser(){return Y()},insideModal:!1,get onError(){return Be()},onChange:Rn,onChangeMode:nr,onSelect:Yn,get onRenderValue(){return lt()},get onClassName(){return st()},onFocus:bn,onBlur:ur,get onRenderMenu(){return je()},get onRenderContextMenu(){return Ge()},onSortModal:Nn,onTransformModal:dr,onJSONEditorModal:qn,$$legacy:!0}),Pt=>p(De,Pt),()=>n(De))});var Ct=q(He,2),Ve=ct=>{(function(Pt,nt){var ft,zn;et(nt,!1);var An=P(void 0,!0),Jt=P(void 0,!0),Tt=P(void 0,!0),qt=P(void 0,!0),Wn=wr("jsoneditor:SortModal"),U=h(nt,"id",9),X=h(nt,"json",9),he=h(nt,"rootPath",9),Rt=h(nt,"onSort",9),sn=h(nt,"onClose",9),Zt={value:1,label:"ascending"},jn=[Zt,{value:-1,label:"descending"}],Dn="".concat(U(),":").concat(St(he())),In=P((ft=Qa()[Dn])===null||ft===void 0?void 0:ft.selectedProperty,!0),Vn=P(((zn=Qa()[Dn])===null||zn===void 0?void 0:zn.selectedDirection)||Zt,!0),gt=P(void 0,!0);function Jn(){try{var mr,Pe,on;p(gt,void 0);var On=((mr=n(In))===null||mr===void 0?void 0:mr.value)||((Pe=n(qt))===null||Pe===void 0||(Pe=Pe[0])===null||Pe===void 0?void 0:Pe.value)||[],ln=(on=n(Vn))===null||on===void 0?void 0:on.value,rr=Sp(X(),he(),On,ln);Rt()!==void 0&&he()!==void 0&&Rt()({operations:rr,rootPath:he(),itemPath:On,direction:ln}),sn()()}catch(Ir){p(gt,String(Ir))}}function dt(mr){mr.focus()}J(()=>(z(X()),z(he())),()=>{p(An,Le(X(),he()))}),J(()=>n(An),()=>{p(Jt,Array.isArray(n(An)))}),J(()=>(n(Jt),n(An)),()=>{p(Tt,n(Jt)?Ic(n(An)):void 0)}),J(()=>(n(Tt),ia),()=>{p(qt,n(Tt)?n(Tt).map(ia):void 0)}),J(()=>(Qa(),n(In),n(Vn)),()=>{Qa(Qa()[Dn]={selectedProperty:n(In),selectedDirection:n(Vn)}),Wn("store state in memory",Dn,Qa()[Dn])}),mn(),bt(!0),hi(Pt,{get onClose(){return sn()},className:"jse-sort-modal",children:(mr,Pe)=>{var on=Q0(),On=ot(on),ln=ae(()=>n(Jt)?"Sort array items":"Sort object keys");jl(On,{get title(){return n(ln)},get onClose(){return sn()}});var rr=O(q(On,2)),Ir=q(O(rr)),w=O(Ir),Z=q(O(w)),oe=O(Z),ue=q(w),xe=kt=>{var En=$0(),y=q(O(En));za(O(y),{showChevron:!0,get items(){return n(qt)},get value(){return n(In)},set value(_){p(In,_)},$$legacy:!0}),R(kt,En)};K(ue,kt=>{var En;n(Jt)&&(n(qt)&&((En=n(qt))===null||En===void 0?void 0:En.length)>1||n(In)===void 0)&&kt(xe)});var Te=q(ue),Ne=q(O(Te));za(O(Ne),{showChevron:!0,clearable:!1,items:jn,get value(){return n(Vn)},set value(kt){p(Vn,kt)},$$legacy:!0});var Xe=q(rr,2),_t=O(Xe),Gt=kt=>{var En=H0(),y=O(En);be(()=>it(y,n(gt))),R(kt,En)};K(_t,kt=>{n(gt)&&kt(Gt)});var Ht=O(q(Xe,2));Or(()=>ie("click",Ht,Jn)),qr(Ht,kt=>dt==null?void 0:dt(kt)),be(kt=>{var En;Na(oe,kt),Ht.disabled=!!(n(Jt)&&n(qt)&&((En=n(qt))===null||En===void 0?void 0:En.length)>1)&&!n(In)},[()=>he()&&!Pn(he())?ao(he()):"(document root)"],ae),R(mr,on)},$$slots:{default:!0}}),tt()})(ct,ha(()=>n(ht),{onClose:()=>{var Pt;(Pt=n(ht))===null||Pt===void 0||Pt.onClose(),p(ht,void 0)}}))};K(Ct,ct=>{n(ht)&&ct(Ve)});var Et=q(Ct,2),dn=ct=>{Gx(ct,ha(()=>n($e),{onClose:()=>{var Pt;(Pt=n($e))===null||Pt===void 0||Pt.onClose(),p($e,void 0)}}))};K(Et,ct=>{n($e)&&ct(dn)});var zt=q(Et,2),hn=ct=>{(function(Pt,nt){et(nt,!1);var ft=P(void 0,!0),zn=P(void 0,!0),An=P(void 0,!0),Jt=P(void 0,!0),Tt=wr("jsoneditor:JSONEditorModal"),qt=h(nt,"content",9),Wn=h(nt,"path",9),U=h(nt,"onPatch",9),X=h(nt,"readOnly",9),he=h(nt,"indentation",9),Rt=h(nt,"tabSize",9),sn=h(nt,"truncateTextSize",9),Zt=h(nt,"mainMenuBar",9),jn=h(nt,"navigationBar",9),Dn=h(nt,"statusBar",9),In=h(nt,"askToFormat",9),Vn=h(nt,"escapeControlCharacters",9),gt=h(nt,"escapeUnicodeCharacters",9),Jn=h(nt,"flattenColumns",9),dt=h(nt,"parser",9),mr=h(nt,"validator",9),Pe=h(nt,"validationParser",9),on=h(nt,"pathParser",9),On=h(nt,"onRenderValue",9),ln=h(nt,"onClassName",9),rr=h(nt,"onRenderMenu",9),Ir=h(nt,"onRenderContextMenu",9),w=h(nt,"onSortModal",9),Z=h(nt,"onTransformModal",9),oe=h(nt,"onClose",9),ue=P(void 0,!0),xe=P(void 0,!0),Te={mode:_t(qt()),content:qt(),selection:void 0,relativePath:Wn()},Ne=P([Te],!0),Xe=P(void 0,!0);function _t(ze){return bs(ze)&&xr(ze.json)?br.table:br.tree}function Gt(){var ze,Fe=(ze=Vt(n(Ne)))===null||ze===void 0?void 0:ze.selection;ci(Fe)&&n(ue).scrollTo(We(Fe))}function Ht(){if(Tt("handleApply"),!X())try{p(Xe,void 0);var ze=n(ft).relativePath,Fe=n(ft).content,yt=[{op:"replace",path:St(ze),value:Uc(Fe,dt()).json}];if(n(Ne).length>1){var tn=Uc(n(Ne)[n(Ne).length-2].content,dt()).json,Qt={json:Co(tn,yt)},Mn=me(me({},n(Ne)[n(Ne).length-2]||Te),{},{content:Qt});p(Ne,[...n(Ne).slice(0,n(Ne).length-2),Mn]),Zn(),Gt()}else U()(yt),oe()()}catch(ut){p(Xe,String(ut))}}function kt(){if(Tt("handleClose"),n(xe))p(xe,!1);else if(n(Ne).length>1){var ze;p(Ne,nn(n(Ne))),Zn(),(ze=n(ue))===null||ze===void 0||ze.focus(),Gt(),p(Xe,void 0)}else oe()()}function En(ze){Tt("handleChange",ze),se(Fe=>me(me({},Fe),{},{content:ze}))}function y(ze){Tt("handleChangeSelection",ze),se(Fe=>me(me({},Fe),{},{selection:ze}))}function _(ze){Tt("handleChangeMode",ze),se(Fe=>me(me({},Fe),{},{mode:ze}))}function se(ze){var Fe=ze(Vt(n(Ne)));p(Ne,[...nn(n(Ne)),Fe])}function qe(ze){p(Xe,ze.toString()),console.error(ze)}function Oe(ze){var Fe,{content:yt,path:tn}=ze;Tt("handleJSONEditorModal",{content:yt,path:tn});var Qt={mode:_t(yt),content:yt,selection:void 0,relativePath:tn};p(Ne,[...n(Ne),Qt]),Zn(),(Fe=n(ue))===null||Fe===void 0||Fe.focus()}function Se(ze){ze.focus()}Er(()=>{var ze;(ze=n(ue))===null||ze===void 0||ze.focus()}),J(()=>n(Ne),()=>{p(ft,Vt(n(Ne))||Te)}),J(()=>n(Ne),()=>{p(zn,n(Ne).flatMap(ze=>ze.relativePath))}),J(()=>(n(zn),ao),()=>{p(An,Pn(n(zn))?"(document root)":ao(n(zn)))}),J(()=>z(dt()),()=>{p(Jt,ti(dt().parse))}),mn(),bt(!0),hi(Pt,{onClose:kt,className:"jse-jsoneditor-modal",get fullscreen(){return n(xe)},children:(ze,Fe)=>{var yt=W0();Bc(O(yt),{children:(tn,Qt)=>{var Mn=_0(),ut=ot(Mn),er=ae(()=>n(Ne).length>1?" (".concat(n(Ne).length,")"):"");jl(ut,{get title(){var Nt;return"Edit nested content ".concat((Nt=n(er))!==null&&Nt!==void 0?Nt:"")},fullScreenButton:!0,onClose:kt,get fullscreen(){return n(xe)},set fullscreen(Nt){p(xe,Nt)},$$legacy:!0});var Tn=q(ut,2),Bn=q(O(Tn),2),cn=q(Bn,4);Qn(fv(O(cn),{get externalMode(){return n(ft).mode},get content(){return n(ft).content},get selection(){return n(ft).selection},get readOnly(){return X()},get indentation(){return he()},get tabSize(){return Rt()},get truncateTextSize(){return sn()},get statusBar(){return Dn()},get askToFormat(){return In()},get mainMenuBar(){return Zt()},get navigationBar(){return jn()},get escapeControlCharacters(){return Vn()},get escapeUnicodeCharacters(){return gt()},get flattenColumns(){return Jn()},get parser(){return dt()},get parseMemoizeOne(){return n(Jt)},get validator(){return mr()},get validationParser(){return Pe()},get pathParser(){return on()},insideModal:!0,onError:qe,onChange:En,onChangeMode:_,onSelect:y,get onRenderValue(){return On()},get onClassName(){return ln()},onFocus:no,onBlur:no,get onRenderMenu(){return rr()},get onRenderContextMenu(){return Ir()},get onSortModal(){return w()},get onTransformModal(){return Z()},onJSONEditorModal:Oe,$$legacy:!0}),Nt=>p(ue,Nt),()=>n(ue));var _e=O(q(cn,2)),Qe=Nt=>{var fr=J0(),Rr=O(fr);be(()=>it(Rr,n(Xe))),R(Nt,fr)};K(_e,Nt=>{n(Xe)&&Nt(Qe)});var vn=q(_e,2),Kn=Nt=>{var fr=B0();en(O(fr),{data:hh}),ie("click",fr,kt),R(Nt,fr)};K(vn,Nt=>{n(Ne).length>1&&Nt(Kn)});var or=q(vn,2),wn=Nt=>{var fr=L0();Or(()=>ie("click",fr,Ht)),qr(fr,Rr=>Se==null?void 0:Se(Rr)),R(Nt,fr)},xn=Nt=>{var fr=F0();ie("click",fr,kt),R(Nt,fr)};K(or,Nt=>{X()?Nt(xn,!1):Nt(wn)}),be(()=>Na(Bn,n(An))),R(tn,Mn)},$$slots:{default:!0}}),R(ze,yt)},$$slots:{default:!0}}),tt()})(ct,ha(()=>n(Bt),{onClose:()=>{var Pt;(Pt=n(Bt))===null||Pt===void 0||Pt.onClose(),p(Bt,void 0)}}))};K(zt,ct=>{n(Bt)&&ct(hn)}),be(ct=>W=wt(He,1,"jse-main svelte-57bmz4",null,W,ct),[()=>({"jse-focus":n(Ae)})],ae),ie("keydown",He,Xn),R(le,ke)},$$slots:{default:!0}}),pt(e,"get",Ye),pt(e,"set",Ze),pt(e,"update",Cn),pt(e,"patch",Je),pt(e,"select",At),pt(e,"expand",Ut),pt(e,"collapse",ir),pt(e,"transform",un),pt(e,"validate",Dt),pt(e,"acceptAutoRepair",_n),pt(e,"scrollTo",Yt),pt(e,"findElement",rn),pt(e,"focus",Lt),pt(e,"refresh",xt),pt(e,"updateProps",rt),pt(e,"destroy",Ft),tt({get:Ye,set:Ze,update:Cn,patch:Je,select:At,expand:Ut,collapse:ir,transform:un,validate:Dt,acceptAutoRepair:_n,scrollTo:Yt,findElement:rn,focus:Lt,refresh:xt,updateProps:rt,destroy:Ft})}function K0(t){var{target:e,props:r}=t,o=sm(Dp,{target:e,props:r});return o.destroy=mt(function*(){return function(s,a){var i=qc.get(s);return i?(qc.delete(s),i(a)):Promise.resolve()}(o)}),Zn(),o}const hy=Object.freeze(Object.defineProperty({__proto__:null,BooleanToggle:Ef,get CaretType(){return oo},ColorPicker:Tf,EditableValue:Kf,JsonEditor:Dp,get Mode(){return br},ReadonlyValue:op,get SearchField(){return io},get SelectionType(){return kn},get SortDirection(){return ro},TimestampTag:ap,get UpdateSelectionAfterChange(){return Zo},get ValidationSeverity(){return so},createAfterSelection:Mo,createEditKeySelection:Dl,createEditValueSelection:ui,createInsideSelection:Io,createJSONEditor:K0,createKeySelection:qo,createMultiSelection:Ar,createValueSelection:Wt,estimateSerializedSize:wf,expandAll:Il,expandMinimal:Xa,expandNone:Xs,expandSelf:Qc,getAnchorPath:ga,getEndPath:Xo,getFocusPath:We,getSelectionPaths:na,getStartPath:ko,getValueClass:Ju,hasSearchResults:Wc,isAfterSelection:Kr,isArrayRecursiveState:Mr,isBoolean:df,isColor:ff,isContentParseError:_c,isContentValidationErrors:Df,isContextMenuColumn:Uf,isContextMenuRow:If,isEditingSelection:Br,isEqualParser:Cu,isExpandableState:xa,isInsideSelection:zr,isJSONContent:bs,isKeySelection:jr,isLargeContent:yf,isMenuButton:ls,isMenuDropDownButton:Qi,isMenuLabel:qf,isMenuSeparator:Gs,isMenuSpace:Eu,isModeHistoryItem:$c,isMultiSelection:Fn,isNestedValidationError:Bf,isObject:fn,isObjectOrArray:cr,isObjectRecursiveState:lo,isSvelteActionRenderer:Lf,isTextContent:ms,isTextHistoryItem:Vc,isTimestamp:ul,isTreeHistoryItem:si,isUrl:wi,isValidationError:Jf,isValueRecursiveState:Nl,isValueSelection:yn,javascriptQueryLanguage:Bx,jmespathQueryLanguage:Ux,jsonQueryLanguage:Af,jsonpathQueryLanguage:Dx,keyComboFromEvent:No,lodashQueryLanguage:Jx,onEscape:pi,parseJSONPath:ip,renderValue:sp,resizeObserver:Ks,stringConvert:Ja,stringifyJSONPath:ao,toJSONContent:Uc,toTextContent:xf,valueType:Al},Symbol.toStringTag,{value:"Module"}));export{mg as _,hy as i};
