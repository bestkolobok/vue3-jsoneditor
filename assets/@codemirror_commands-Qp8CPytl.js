import{E as k,g as Be,T as Fe,h as te}from"./@codemirror_state-CJ4wOm36.js";import{E as re,D as St}from"./@codemirror_view-AOFXy9gw.js";import{I as We,g as qe,i as he,s as Se,m as Q,a as ye,b as Lt}from"./@codemirror_language-DGL4j3wZ.js";const wt=1024;let Dt=0;class ge{constructor(e,r){this.from=e,this.to=r}}class b{constructor(e={}){this.id=Dt++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw new Error("This node type doesn't define a deserialize function")})}add(e){if(this.perNode)throw new RangeError("Can't add per-node props to node types");return typeof e!="function"&&(e=O.match(e)),r=>{let n=e(r);return n===void 0?null:[this,n]}}}b.closedBy=new b({deserialize:t=>t.split(" ")});b.openedBy=new b({deserialize:t=>t.split(" ")});b.group=new b({deserialize:t=>t.split(" ")});b.isolate=new b({deserialize:t=>{if(t&&t!="rtl"&&t!="ltr"&&t!="auto")throw new RangeError("Invalid value for isolate: "+t);return t||"auto"}});b.contextHash=new b({perNode:!0});b.lookAhead=new b({perNode:!0});b.mounted=new b({perNode:!0});class ce{constructor(e,r,n){this.tree=e,this.overlay=r,this.parser=n}static get(e){return e&&e.props&&e.props[b.mounted.id]}}const It=Object.create(null);class O{constructor(e,r,n,i=0){this.name=e,this.props=r,this.id=n,this.flags=i}static define(e){let r=e.props&&e.props.length?Object.create(null):It,n=(e.top?1:0)|(e.skipped?2:0)|(e.error?4:0)|(e.name==null?8:0),i=new O(e.name||"",r,e.id,n);if(e.props){for(let l of e.props)if(Array.isArray(l)||(l=l(i)),l){if(l[0].perNode)throw new RangeError("Can't store a per-node prop on a node type");r[l[0].id]=l[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e=="string"){if(this.name==e)return!0;let r=this.prop(b.group);return r?r.indexOf(e)>-1:!1}return this.id==e}static match(e){let r=Object.create(null);for(let n in e)for(let i of n.split(" "))r[i]=e[n];return n=>{for(let i=n.prop(b.group),l=-1;l<(i?i.length:0);l++){let o=r[l<0?n.name:i[l]];if(o)return o}}}}O.none=new O("",Object.create(null),0,8);class Ke{constructor(e){this.types=e;for(let r=0;r<e.length;r++)if(e[r].id!=r)throw new RangeError("Node type ids should correspond to array positions when creating a node set")}extend(...e){let r=[];for(let n of this.types){let i=null;for(let l of e){let o=l(n);o&&(i||(i=Object.assign({},n.props)),i[o[0].id]=o[1])}r.push(i?new O(n.name,i,n.id,n.flags):n)}return new Ke(r)}}const se=new WeakMap,Pe=new WeakMap;var M;(function(t){t[t.ExcludeBuffers=1]="ExcludeBuffers",t[t.IncludeAnonymous=2]="IncludeAnonymous",t[t.IgnoreMounts=4]="IgnoreMounts",t[t.IgnoreOverlays=8]="IgnoreOverlays"})(M||(M={}));class R{constructor(e,r,n,i,l){if(this.type=e,this.children=r,this.positions=n,this.length=i,this.props=null,l&&l.length){this.props=Object.create(null);for(let[o,s]of l)this.props[typeof o=="number"?o:o.id]=s}}toString(){let e=ce.get(this);if(e&&!e.overlay)return e.tree.toString();let r="";for(let n of this.children){let i=n.toString();i&&(r&&(r+=","),r+=i)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(r.length?"("+r+")":""):r}cursor(e=0){return new ke(this.topNode,e)}cursorAt(e,r=0,n=0){let i=se.get(this)||this.topNode,l=new ke(i);return l.moveTo(e,r),se.set(this,l._tree),l}get topNode(){return new v(this,0,0,null)}resolve(e,r=0){let n=ne(se.get(this)||this.topNode,e,r,!1);return se.set(this,n),n}resolveInner(e,r=0){let n=ne(Pe.get(this)||this.topNode,e,r,!0);return Pe.set(this,n),n}resolveStack(e,r=0){return Et(this,e,r)}iterate(e){let{enter:r,leave:n,from:i=0,to:l=this.length}=e,o=e.mode||0,s=(o&M.IncludeAnonymous)>0;for(let u=this.cursor(o|M.IncludeAnonymous);;){let h=!1;if(u.from<=l&&u.to>=i&&(!s&&u.type.isAnonymous||r(u)!==!1)){if(u.firstChild())continue;h=!0}for(;h&&n&&(s||!u.type.isAnonymous)&&n(u),!u.nextSibling();){if(!u.parent())return;h=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let r in this.props)e.push([+r,this.props[r]]);return e}balance(e={}){return this.children.length<=8?this:De(O.none,this.children,this.positions,0,this.children.length,0,this.length,(r,n,i)=>new R(this.type,r,n,i,this.propValues),e.makeTree||((r,n,i)=>new R(O.none,r,n,i)))}static build(e){return vt(e)}}R.empty=new R(O.none,[],[],0);class Le{constructor(e,r){this.buffer=e,this.index=r}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new Le(this.buffer,this.index)}}class H{constructor(e,r,n){this.buffer=e,this.length=r,this.set=n}get type(){return O.none}toString(){let e=[];for(let r=0;r<this.buffer.length;)e.push(this.childString(r)),r=this.buffer[r+3];return e.join(",")}childString(e){let r=this.buffer[e],n=this.buffer[e+3],i=this.set.types[r],l=i.name;if(/\W/.test(l)&&!i.isError&&(l=JSON.stringify(l)),e+=4,n==e)return l;let o=[];for(;e<n;)o.push(this.childString(e)),e=this.buffer[e+3];return l+"("+o.join(",")+")"}findChild(e,r,n,i,l){let{buffer:o}=this,s=-1;for(let u=e;u!=r&&!($e(l,i,o[u+1],o[u+2])&&(s=u,n>0));u=o[u+3]);return s}slice(e,r,n){let i=this.buffer,l=new Uint16Array(r-e),o=0;for(let s=e,u=0;s<r;){l[u++]=i[s++],l[u++]=i[s++]-n;let h=l[u++]=i[s++]-n;l[u++]=i[s++]-e,o=Math.max(o,h)}return new H(l,o,this.set)}}function $e(t,e,r,n){switch(t){case-2:return r<e;case-1:return n>=e&&r<e;case 0:return r<e&&n>e;case 1:return r<=e&&n>e;case 2:return n>e;case 4:return!0}}function ne(t,e,r,n){for(var i;t.from==t.to||(r<1?t.from>=e:t.from>e)||(r>-1?t.to<=e:t.to<e);){let o=!n&&t instanceof v&&t.index<0?null:t.parent;if(!o)return t;t=o}let l=n?0:M.IgnoreOverlays;if(n)for(let o=t,s=o.parent;s;o=s,s=o.parent)o instanceof v&&o.index<0&&((i=s.enter(e,r,l))===null||i===void 0?void 0:i.from)!=o.from&&(t=s);for(;;){let o=t.enter(e,r,l);if(!o)return t;t=o}}class Je{cursor(e=0){return new ke(this,e)}getChild(e,r=null,n=null){let i=ze(this,e,r,n);return i.length?i[0]:null}getChildren(e,r=null,n=null){return ze(this,e,r,n)}resolve(e,r=0){return ne(this,e,r,!1)}resolveInner(e,r=0){return ne(this,e,r,!0)}matchContext(e){return xe(this.parent,e)}enterUnfinishedNodesBefore(e){let r=this.childBefore(e),n=this;for(;r;){let i=r.lastChild;if(!i||i.to!=r.to)break;i.type.isError&&i.from==i.to?(n=r,r=i.prevSibling):r=i}return n}get node(){return this}get next(){return this.parent}}class v extends Je{constructor(e,r,n,i){super(),this._tree=e,this.from=r,this.index=n,this._parent=i}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(e,r,n,i,l=0){for(let o=this;;){for(let{children:s,positions:u}=o._tree,h=r>0?s.length:-1;e!=h;e+=r){let f=s[e],a=u[e]+o.from;if($e(i,n,a,a+f.length)){if(f instanceof H){if(l&M.ExcludeBuffers)continue;let p=f.findChild(0,f.buffer.length,r,n-a,i);if(p>-1)return new j(new Mt(o,f,e,a),null,p)}else if(l&M.IncludeAnonymous||!f.type.isAnonymous||we(f)){let p;if(!(l&M.IgnoreMounts)&&(p=ce.get(f))&&!p.overlay)return new v(p.tree,a,e,o);let D=new v(f,a,e,o);return l&M.IncludeAnonymous||!D.type.isAnonymous?D:D.nextChild(r<0?f.children.length-1:0,r,n,i)}}}if(l&M.IncludeAnonymous||!o.type.isAnonymous||(o.index>=0?e=o.index+r:e=r<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}enter(e,r,n=0){let i;if(!(n&M.IgnoreOverlays)&&(i=ce.get(this._tree))&&i.overlay){let l=e-this.from;for(let{from:o,to:s}of i.overlay)if((r>0?o<=l:o<l)&&(r<0?s>=l:s>l))return new v(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,e,r,n)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}}function ze(t,e,r,n){let i=t.cursor(),l=[];if(!i.firstChild())return l;if(r!=null){for(let o=!1;!o;)if(o=i.type.is(r),!i.nextSibling())return l}for(;;){if(n!=null&&i.type.is(n))return l;if(i.type.is(e)&&l.push(i.node),!i.nextSibling())return n==null?l:[]}}function xe(t,e,r=e.length-1){for(let n=t;r>=0;n=n.parent){if(!n)return!1;if(!n.type.isAnonymous){if(e[r]&&e[r]!=n.name)return!1;r--}}return!0}class Mt{constructor(e,r,n,i){this.parent=e,this.buffer=r,this.index=n,this.start=i}}class j extends Je{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,r,n){super(),this.context=e,this._parent=r,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(e,r,n){let{buffer:i}=this.context,l=i.findChild(this.index+4,i.buffer[this.index+3],e,r-this.context.start,n);return l<0?null:new j(this.context,this,l)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}enter(e,r,n=0){if(n&M.ExcludeBuffers)return null;let{buffer:i}=this.context,l=i.findChild(this.index+4,i.buffer[this.index+3],r>0?1:-1,e-this.context.start,r);return l<0?null:new j(this.context,this,l)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:e}=this.context,r=e.buffer[this.index+3];return r<(this._parent?e.buffer[this._parent.index+3]:e.buffer.length)?new j(this.context,this._parent,r):this.externalSibling(1)}get prevSibling(){let{buffer:e}=this.context,r=this._parent?this._parent.index+4:0;return this.index==r?this.externalSibling(-1):new j(this.context,this._parent,e.findChild(r,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],r=[],{buffer:n}=this.context,i=this.index+4,l=n.buffer[this.index+3];if(l>i){let o=n.buffer[this.index+1];e.push(n.slice(i,l,o)),r.push(0)}return new R(this.type,e,r,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}}function Qe(t){if(!t.length)return null;let e=0,r=t[0];for(let l=1;l<t.length;l++){let o=t[l];(o.from>r.from||o.to<r.to)&&(r=o,e=l)}let n=r instanceof v&&r.index<0?null:r.parent,i=t.slice();return n?i[e]=n:i.splice(e,1),new _t(i,r)}class _t{constructor(e,r){this.heads=e,this.node=r}get next(){return Qe(this.heads)}}function Et(t,e,r){let n=t.resolveInner(e,r),i=null;for(let l=n instanceof v?n:n.context.parent;l;l=l.parent)if(l.index<0){let o=l.parent;(i||(i=[n])).push(o.resolve(e,r)),l=o}else{let o=ce.get(l.tree);if(o&&o.overlay&&o.overlay[0].from<=e&&o.overlay[o.overlay.length-1].to>=e){let s=new v(o.tree,o.overlay[0].from+l.from,-1,l);(i||(i=[n])).push(ne(s,e,r,!1))}}return i?Qe(i):n}class ke{get name(){return this.type.name}constructor(e,r=0){if(this.mode=r,this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,e instanceof v)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let n=e._parent;n;n=n._parent)this.stack.unshift(n.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,r){this.index=e;let{start:n,buffer:i}=this.buffer;return this.type=r||i.set.types[i.buffer[e]],this.from=n+i.buffer[e+1],this.to=n+i.buffer[e+2],!0}yield(e){return e?e instanceof v?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,r,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,r,n,this.mode));let{buffer:i}=this.buffer,l=i.findChild(this.index+4,i.buffer[this.index+3],e,r-this.buffer.start,n);return l<0?!1:(this.stack.push(this.index),this.yieldBuf(l))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,r,n=this.mode){return this.buffer?n&M.ExcludeBuffers?!1:this.enterChild(1,e,r):this.yield(this._tree.enter(e,r,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&M.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&M.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:r}=this.buffer,n=this.stack.length-1;if(e<0){let i=n<0?0:this.stack[n]+4;if(this.index!=i)return this.yieldBuf(r.findChild(i,this.index,-1,0,4))}else{let i=r.buffer[this.index+3];if(i<(n<0?r.buffer.length:r.buffer[this.stack[n]+3]))return this.yieldBuf(i)}return n<0?this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode)):!1}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let r,n,{buffer:i}=this;if(i){if(e>0){if(this.index<i.buffer.buffer.length)return!1}else for(let l=0;l<this.index;l++)if(i.buffer.buffer[l+3]<this.index)return!1;({index:r,parent:n}=i)}else({index:r,_parent:n}=this._tree);for(;n;{index:r,_parent:n}=n)if(r>-1)for(let l=r+e,o=e<0?-1:n._tree.children.length;l!=o;l+=e){let s=n._tree.children[l];if(this.mode&M.IncludeAnonymous||s instanceof H||!s.type.isAnonymous||we(s))return!1}return!0}move(e,r){if(r&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,r=0){for(;(this.from==this.to||(r<1?this.from>=e:this.from>e)||(r>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,r););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,r=null,n=0;if(e&&e.context==this.buffer)e:for(let i=this.index,l=this.stack.length;l>=0;){for(let o=e;o;o=o._parent)if(o.index==i){if(i==this.index)return o;r=o,n=l+1;break e}i=this.stack[--l]}for(let i=n;i<this.stack.length;i++)r=new j(this.buffer,r,this.stack[i]);return this.bufferNode=new j(this.buffer,r,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,r){for(let n=0;;){let i=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(i=!0)}for(;;){if(i&&r&&r(this),i=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,i=!0}}}matchContext(e){if(!this.buffer)return xe(this.node.parent,e);let{buffer:r}=this.buffer,{types:n}=r.set;for(let i=e.length-1,l=this.stack.length-1;i>=0;l--){if(l<0)return xe(this._tree,e,i);let o=n[r.buffer[this.stack[l]]];if(!o.isAnonymous){if(e[i]&&e[i]!=o.name)return!1;i--}}return!0}}function we(t){return t.children.some(e=>e instanceof H||!e.type.isAnonymous||we(e))}function vt(t){var e;let{buffer:r,nodeSet:n,maxBufferLength:i=wt,reused:l=[],minRepeatType:o=n.types.length}=t,s=Array.isArray(r)?new Le(r,r.length):r,u=n.types,h=0,f=0;function a(y,A,c,S,g,L){let{id:m,start:d,end:x,size:C}=s,w=f,G=h;for(;C<0;)if(s.next(),C==-1){let U=l[m];c.push(U),S.push(d-y);return}else if(C==-3){h=m;return}else if(C==-4){f=m;return}else throw new RangeError(`Unrecognized record size: ${C}`);let Z=u[m],le,K,Ee=d-y;if(x-d<=i&&(K=me(s.pos-A,g))){let U=new Uint16Array(K.size-K.skip),E=s.pos-K.size,N=U.length;for(;s.pos>E;)N=Y(K.start,U,N);le=new H(U,x-K.start,n),Ee=K.start-y}else{let U=s.pos-C;s.next();let E=[],N=[],$=m>=o?m:-1,J=0,oe=x;for(;s.pos>U;)$>=0&&s.id==$&&s.size>=0?(s.end<=oe-i&&(B(E,N,d,J,s.end,oe,$,w,G),J=E.length,oe=s.end),s.next()):L>2500?p(d,U,E,N):a(d,U,E,N,$,L+1);if($>=0&&J>0&&J<E.length&&B(E,N,d,J,d,oe,$,w,G),E.reverse(),N.reverse(),$>-1&&J>0){let ve=D(Z,G);le=De(Z,E,N,0,E.length,0,x-d,ve,ve)}else le=V(Z,E,N,x-d,w-x,G)}c.push(le),S.push(Ee)}function p(y,A,c,S){let g=[],L=0,m=-1;for(;s.pos>A;){let{id:d,start:x,end:C,size:w}=s;if(w>4)s.next();else{if(m>-1&&x<m)break;m<0&&(m=C-i),g.push(d,x,C),L++,s.next()}}if(L){let d=new Uint16Array(L*4),x=g[g.length-2];for(let C=g.length-3,w=0;C>=0;C-=3)d[w++]=g[C],d[w++]=g[C+1]-x,d[w++]=g[C+2]-x,d[w++]=w;c.push(new H(d,g[2]-x,n)),S.push(x-y)}}function D(y,A){return(c,S,g)=>{let L=0,m=c.length-1,d,x;if(m>=0&&(d=c[m])instanceof R){if(!m&&d.type==y&&d.length==g)return d;(x=d.prop(b.lookAhead))&&(L=S[m]+d.length+x)}return V(y,c,S,g,L,A)}}function B(y,A,c,S,g,L,m,d,x){let C=[],w=[];for(;y.length>S;)C.push(y.pop()),w.push(A.pop()+c-g);y.push(V(n.types[m],C,w,L-g,d-L,x)),A.push(g-c)}function V(y,A,c,S,g,L,m){if(L){let d=[b.contextHash,L];m=m?[d].concat(m):[d]}if(g>25){let d=[b.lookAhead,g];m=m?[d].concat(m):[d]}return new R(y,A,c,S,m)}function me(y,A){let c=s.fork(),S=0,g=0,L=0,m=c.end-i,d={size:0,start:0,skip:0};e:for(let x=c.pos-y;c.pos>x;){let C=c.size;if(c.id==A&&C>=0){d.size=S,d.start=g,d.skip=L,L+=4,S+=4,c.next();continue}let w=c.pos-C;if(C<0||w<x||c.start<m)break;let G=c.id>=o?4:0,Z=c.start;for(c.next();c.pos>w;){if(c.size<0)if(c.size==-3)G+=4;else break e;else c.id>=o&&(G+=4);c.next()}g=Z,S+=C,L+=G}return(A<0||S==y)&&(d.size=S,d.start=g,d.skip=L),d.size>4?d:void 0}function Y(y,A,c){let{id:S,start:g,end:L,size:m}=s;if(s.next(),m>=0&&S<o){let d=c;if(m>4){let x=s.pos-(m-4);for(;s.pos>x;)c=Y(y,A,c)}A[--c]=d,A[--c]=L-y,A[--c]=g-y,A[--c]=S}else m==-3?h=S:m==-4&&(f=S);return c}let W=[],I=[];for(;s.pos>0;)a(t.start||0,t.bufferStart||0,W,I,-1,0);let q=(e=t.length)!==null&&e!==void 0?e:W.length?I[0]+W[0].length:0;return new R(u[t.topID],W.reverse(),I.reverse(),q)}const Ne=new WeakMap;function fe(t,e){if(!t.isAnonymous||e instanceof H||e.type!=t)return 1;let r=Ne.get(e);if(r==null){r=1;for(let n of e.children){if(n.type!=t||!(n instanceof R)){r=1;break}r+=fe(t,n)}Ne.set(e,r)}return r}function De(t,e,r,n,i,l,o,s,u){let h=0;for(let B=n;B<i;B++)h+=fe(t,e[B]);let f=Math.ceil(h*1.5/8),a=[],p=[];function D(B,V,me,Y,W){for(let I=me;I<Y;){let q=I,y=V[I],A=fe(t,B[I]);for(I++;I<Y;I++){let c=fe(t,B[I]);if(A+c>=f)break;A+=c}if(I==q+1){if(A>f){let c=B[q];D(c.children,c.positions,0,c.children.length,V[q]+W);continue}a.push(B[q])}else{let c=V[I-1]+B[I-1].length-y;a.push(De(t,B,V,q,I,y,c,null,u))}p.push(y+W-l)}}return D(e,r,n,i,0),(s||u)(a,p,o)}class be{constructor(e,r,n,i,l=!1,o=!1){this.from=e,this.to=r,this.tree=n,this.offset=i,this.open=(l?1:0)|(o?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(e,r=[],n=!1){let i=[new be(0,e.length,e,0,!1,n)];for(let l of r)l.to>e.length&&i.push(l);return i}static applyChanges(e,r,n=128){if(!r.length)return e;let i=[],l=1,o=e.length?e[0]:null;for(let s=0,u=0,h=0;;s++){let f=s<r.length?r[s]:null,a=f?f.fromA:1e9;if(a-u>=n)for(;o&&o.from<a;){let p=o;if(u>=p.from||a<=p.to||h){let D=Math.max(p.from,u)-h,B=Math.min(p.to,a)-h;p=D>=B?null:new be(D,B,p.tree,p.offset+h,s>0,!!f)}if(p&&i.push(p),o.to>a)break;o=l<e.length?e[l++]:null}if(!f)break;u=f.toA,h=f.toA-f.toB}return i}}class zr{startParse(e,r,n){return typeof e=="string"&&(e=new Pt(e)),n=n?n.length?n.map(i=>new ge(i.from,i.to)):[new ge(0,0)]:[new ge(0,e.length)],this.createParse(e,r||[],n)}parse(e,r,n){let i=this.startParse(e,r,n);for(;;){let l=i.advance();if(l)return l}}}class Pt{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,r){return this.string.slice(e,r)}}new b({perNode:!0});const zt=t=>{let{state:e}=t,r=e.doc.lineAt(e.selection.main.from),n=Me(t.state,r.from);return n.line?Nt(t):n.block?Ot(t):!1};function Ie(t,e){return({state:r,dispatch:n})=>{if(r.readOnly)return!1;let i=t(e,r);return i?(n(r.update(i)),!0):!1}}const Nt=Ie(Vt,0),Rt=Ie(Xe,0),Ot=Ie((t,e)=>Xe(t,e,Ut(e)),0);function Me(t,e){let r=t.languageDataAt("commentTokens",e,1);return r.length?r[0]:{}}const ee=50;function Tt(t,{open:e,close:r},n,i){let l=t.sliceDoc(n-ee,n),o=t.sliceDoc(i,i+ee),s=/\s*$/.exec(l)[0].length,u=/^\s*/.exec(o)[0].length,h=l.length-s;if(l.slice(h-e.length,h)==e&&o.slice(u,u+r.length)==r)return{open:{pos:n-s,margin:s&&1},close:{pos:i+u,margin:u&&1}};let f,a;i-n<=2*ee?f=a=t.sliceDoc(n,i):(f=t.sliceDoc(n,n+ee),a=t.sliceDoc(i-ee,i));let p=/^\s*/.exec(f)[0].length,D=/\s*$/.exec(a)[0].length,B=a.length-D-r.length;return f.slice(p,p+e.length)==e&&a.slice(B,B+r.length)==r?{open:{pos:n+p+e.length,margin:/\s/.test(f.charAt(p+e.length))?1:0},close:{pos:i-D-r.length,margin:/\s/.test(a.charAt(B-1))?1:0}}:null}function Ut(t){let e=[];for(let r of t.selection.ranges){let n=t.doc.lineAt(r.from),i=r.to<=n.to?n:t.doc.lineAt(r.to);i.from>n.from&&i.from==r.to&&(i=r.to==n.to+1?n:t.doc.lineAt(r.to-1));let l=e.length-1;l>=0&&e[l].to>n.from?e[l].to=i.to:e.push({from:n.from+/^\s*/.exec(n.text)[0].length,to:i.to})}return e}function Xe(t,e,r=e.selection.ranges){let n=r.map(l=>Me(e,l.from).block);if(!n.every(l=>l))return null;let i=r.map((l,o)=>Tt(e,n[o],l.from,l.to));if(t!=2&&!i.every(l=>l))return{changes:e.changes(r.map((l,o)=>i[o]?[]:[{from:l.from,insert:n[o].open+" "},{from:l.to,insert:" "+n[o].close}]))};if(t!=1&&i.some(l=>l)){let l=[];for(let o=0,s;o<i.length;o++)if(s=i[o]){let u=n[o],{open:h,close:f}=s;l.push({from:h.pos-u.open.length,to:h.pos+h.margin},{from:f.pos-f.margin,to:f.pos+u.close.length})}return{changes:l}}return null}function Vt(t,e,r=e.selection.ranges){let n=[],i=-1;for(let{from:l,to:o}of r){let s=n.length,u=1e9,h=Me(e,l).line;if(h){for(let f=l;f<=o;){let a=e.doc.lineAt(f);if(a.from>i&&(l==o||o>a.from)){i=a.from;let p=/^\s*/.exec(a.text)[0].length,D=p==a.length,B=a.text.slice(p,p+h.length)==h?p:-1;p<a.text.length&&p<u&&(u=p),n.push({line:a,comment:B,token:h,indent:p,empty:D,single:!1})}f=a.to+1}if(u<1e9)for(let f=s;f<n.length;f++)n[f].indent<n[f].line.text.length&&(n[f].indent=u);n.length==s+1&&(n[s].single=!0)}}if(t!=2&&n.some(l=>l.comment<0&&(!l.empty||l.single))){let l=[];for(let{line:s,token:u,indent:h,empty:f,single:a}of n)(a||!f)&&l.push({from:s.from+h,insert:u+" "});let o=e.changes(l);return{changes:o,selection:e.selection.map(o,1)}}else if(t!=1&&n.some(l=>l.comment>=0)){let l=[];for(let{line:o,comment:s,token:u}of n)if(s>=0){let h=o.from+s,f=h+u.length;o.text[f-o.from]==" "&&f++,l.push({from:h,to:f})}return{changes:l}}return null}function X(t,e){return k.create(t.ranges.map(e),t.mainIndex)}function T(t,e){return t.update({selection:e,scrollIntoView:!0,userEvent:"select"})}function z({state:t,dispatch:e},r){let n=X(t.selection,r);return n.eq(t.selection,!0)?!1:(e(T(t,n)),!0)}function ae(t,e){return k.cursor(e?t.to:t.from)}function Ye(t,e){return z(t,r=>r.empty?t.moveByChar(r,e):ae(r,e))}function _(t){return t.textDirectionAt(t.state.selection.main.head)==St.LTR}const Ze=t=>Ye(t,!_(t)),et=t=>Ye(t,_(t));function tt(t,e){return z(t,r=>r.empty?t.moveByGroup(r,e):ae(r,e))}const Gt=t=>tt(t,!_(t)),jt=t=>tt(t,_(t));function Ht(t,e,r){if(e.type.prop(r))return!0;let n=e.to-e.from;return n&&(n>2||/[^\s,.;:]/.test(t.sliceDoc(e.from,e.to)))||e.firstChild}function de(t,e,r){let n=Se(t).resolveInner(e.head),i=r?b.closedBy:b.openedBy;for(let u=e.head;;){let h=r?n.childAfter(u):n.childBefore(u);if(!h)break;Ht(t,h,i)?n=h:u=r?h.to:h.from}let l=n.type.prop(i),o,s;return l&&(o=r?Q(t,n.from,1):Q(t,n.to,-1))&&o.matched?s=r?o.end.to:o.end.from:s=r?n.to:n.from,k.cursor(s,r?-1:1)}const Ft=t=>z(t,e=>de(t.state,e,!_(t))),Wt=t=>z(t,e=>de(t.state,e,_(t)));function rt(t,e){return z(t,r=>{if(!r.empty)return ae(r,e);let n=t.moveVertically(r,e);return n.head!=r.head?n:t.moveToLineBoundary(r,e)})}const nt=t=>rt(t,!1),it=t=>rt(t,!0);function lt(t){let e=t.scrollDOM.clientHeight<t.scrollDOM.scrollHeight-2,r=0,n=0,i;if(e){for(let l of t.state.facet(re.scrollMargins)){let o=l(t);o!=null&&o.top&&(r=Math.max(o==null?void 0:o.top,r)),o!=null&&o.bottom&&(n=Math.max(o==null?void 0:o.bottom,n))}i=t.scrollDOM.clientHeight-r-n}else i=(t.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:n,selfScroll:e,height:Math.max(t.defaultLineHeight,i-5)}}function ot(t,e){let r=lt(t),{state:n}=t,i=X(n.selection,o=>o.empty?t.moveVertically(o,e,r.height):ae(o,e));if(i.eq(n.selection))return!1;let l;if(r.selfScroll){let o=t.coordsAtPos(n.selection.main.head),s=t.scrollDOM.getBoundingClientRect(),u=s.top+r.marginTop,h=s.bottom-r.marginBottom;o&&o.top>u&&o.bottom<h&&(l=re.scrollIntoView(i.main.head,{y:"start",yMargin:o.top-u}))}return t.dispatch(T(n,i),{effects:l}),!0}const Re=t=>ot(t,!1),Ae=t=>ot(t,!0);function F(t,e,r){let n=t.lineBlockAt(e.head),i=t.moveToLineBoundary(e,r);if(i.head==e.head&&i.head!=(r?n.to:n.from)&&(i=t.moveToLineBoundary(e,r,!1)),!r&&i.head==n.from&&n.length){let l=/^\s*/.exec(t.state.sliceDoc(n.from,Math.min(n.from+100,n.to)))[0].length;l&&e.head!=n.from+l&&(i=k.cursor(n.from+l))}return i}const qt=t=>z(t,e=>F(t,e,!0)),Kt=t=>z(t,e=>F(t,e,!1)),$t=t=>z(t,e=>F(t,e,!_(t))),Jt=t=>z(t,e=>F(t,e,_(t))),Qt=t=>z(t,e=>k.cursor(t.lineBlockAt(e.head).from,1)),Xt=t=>z(t,e=>k.cursor(t.lineBlockAt(e.head).to,-1));function Yt(t,e,r){let n=!1,i=X(t.selection,l=>{let o=Q(t,l.head,-1)||Q(t,l.head,1)||l.head>0&&Q(t,l.head-1,1)||l.head<t.doc.length&&Q(t,l.head+1,-1);if(!o||!o.end)return l;n=!0;let s=o.start.from==l.head?o.end.to:o.end.from;return k.cursor(s)});return n?(e(T(t,i)),!0):!1}const Zt=({state:t,dispatch:e})=>Yt(t,e);function P(t,e){let r=X(t.state.selection,n=>{let i=e(n);return k.range(n.anchor,i.head,i.goalColumn,i.bidiLevel||void 0)});return r.eq(t.state.selection)?!1:(t.dispatch(T(t.state,r)),!0)}function st(t,e){return P(t,r=>t.moveByChar(r,e))}const ut=t=>st(t,!_(t)),ft=t=>st(t,_(t));function ht(t,e){return P(t,r=>t.moveByGroup(r,e))}const er=t=>ht(t,!_(t)),tr=t=>ht(t,_(t)),rr=t=>P(t,e=>de(t.state,e,!_(t))),nr=t=>P(t,e=>de(t.state,e,_(t)));function ct(t,e){return P(t,r=>t.moveVertically(r,e))}const at=t=>ct(t,!1),dt=t=>ct(t,!0);function pt(t,e){return P(t,r=>t.moveVertically(r,e,lt(t).height))}const Oe=t=>pt(t,!1),Te=t=>pt(t,!0),ir=t=>P(t,e=>F(t,e,!0)),lr=t=>P(t,e=>F(t,e,!1)),or=t=>P(t,e=>F(t,e,!_(t))),sr=t=>P(t,e=>F(t,e,_(t))),ur=t=>P(t,e=>k.cursor(t.lineBlockAt(e.head).from)),fr=t=>P(t,e=>k.cursor(t.lineBlockAt(e.head).to)),Ue=({state:t,dispatch:e})=>(e(T(t,{anchor:0})),!0),Ve=({state:t,dispatch:e})=>(e(T(t,{anchor:t.doc.length})),!0),Ge=({state:t,dispatch:e})=>(e(T(t,{anchor:t.selection.main.anchor,head:0})),!0),je=({state:t,dispatch:e})=>(e(T(t,{anchor:t.selection.main.anchor,head:t.doc.length})),!0),hr=({state:t,dispatch:e})=>(e(t.update({selection:{anchor:0,head:t.doc.length},userEvent:"select"})),!0),cr=({state:t,dispatch:e})=>{let r=pe(t).map(({from:n,to:i})=>k.range(n,Math.min(i+1,t.doc.length)));return e(t.update({selection:k.create(r),userEvent:"select"})),!0},ar=({state:t,dispatch:e})=>{let r=X(t.selection,n=>{let i=Se(t),l=i.resolveStack(n.from,1);if(n.empty){let o=i.resolveStack(n.from,-1);o.node.from>=l.node.from&&o.node.to<=l.node.to&&(l=o)}for(let o=l;o;o=o.next){let{node:s}=o;if((s.from<n.from&&s.to>=n.to||s.to>n.to&&s.from<=n.from)&&o.next)return k.range(s.to,s.from)}return n});return r.eq(t.selection)?!1:(e(T(t,r)),!0)},dr=({state:t,dispatch:e})=>{let r=t.selection,n=null;return r.ranges.length>1?n=k.create([r.main]):r.main.empty||(n=k.create([k.cursor(r.main.head)])),n?(e(T(t,n)),!0):!1};function ie(t,e){if(t.state.readOnly)return!1;let r="delete.selection",{state:n}=t,i=n.changeByRange(l=>{let{from:o,to:s}=l;if(o==s){let u=e(l);u<o?(r="delete.backward",u=ue(t,u,!1)):u>o&&(r="delete.forward",u=ue(t,u,!0)),o=Math.min(o,u),s=Math.max(s,u)}else o=ue(t,o,!1),s=ue(t,s,!0);return o==s?{range:l}:{changes:{from:o,to:s},range:k.cursor(o,o<l.head?-1:1)}});return i.changes.empty?!1:(t.dispatch(n.update(i,{scrollIntoView:!0,userEvent:r,effects:r=="delete.selection"?re.announce.of(n.phrase("Selection deleted")):void 0})),!0)}function ue(t,e,r){if(t instanceof re)for(let n of t.state.facet(re.atomicRanges).map(i=>i(t)))n.between(e,e,(i,l)=>{i<e&&l>e&&(e=r?l:i)});return e}const mt=(t,e,r)=>ie(t,n=>{let i=n.from,{state:l}=t,o=l.doc.lineAt(i),s,u;if(r&&!e&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]=="	")return i-1;let h=Be(s,l.tabSize),f=h%ye(l)||ye(l);for(let a=0;a<f&&s[s.length-1-a]==" ";a++)i--;u=i}else u=te(o.text,i-o.from,e,e)+o.from,u==i&&o.number!=(e?l.doc.lines:1)?u+=e?1:-1:!e&&/[\ufe00-\ufe0f]/.test(o.text.slice(u-o.from,i-o.from))&&(u=te(o.text,u-o.from,!1,!1)+o.from);return u}),Ce=t=>mt(t,!1,!0),gt=t=>mt(t,!0,!1),yt=(t,e)=>ie(t,r=>{let n=r.head,{state:i}=t,l=i.doc.lineAt(n),o=i.charCategorizer(n);for(let s=null;;){if(n==(e?l.to:l.from)){n==r.head&&l.number!=(e?i.doc.lines:1)&&(n+=e?1:-1);break}let u=te(l.text,n-l.from,e)+l.from,h=l.text.slice(Math.min(n,u)-l.from,Math.max(n,u)-l.from),f=o(h);if(s!=null&&f!=s)break;(h!=" "||n!=r.head)&&(s=f),n=u}return n}),xt=t=>yt(t,!1),pr=t=>yt(t,!0),mr=t=>ie(t,e=>{let r=t.lineBlockAt(e.head).to;return e.head<r?r:Math.min(t.state.doc.length,e.head+1)}),gr=t=>ie(t,e=>{let r=t.moveToLineBoundary(e,!1).head;return e.head>r?r:Math.max(0,e.head-1)}),yr=t=>ie(t,e=>{let r=t.moveToLineBoundary(e,!0).head;return e.head<r?r:Math.min(t.state.doc.length,e.head+1)}),xr=({state:t,dispatch:e})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>({changes:{from:n.from,to:n.to,insert:Fe.of(["",""])},range:k.cursor(n.from)}));return e(t.update(r,{scrollIntoView:!0,userEvent:"input"})),!0},kr=({state:t,dispatch:e})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{if(!n.empty||n.from==0||n.from==t.doc.length)return{range:n};let i=n.from,l=t.doc.lineAt(i),o=i==l.from?i-1:te(l.text,i-l.from,!1)+l.from,s=i==l.to?i+1:te(l.text,i-l.from,!0)+l.from;return{changes:{from:o,to:s,insert:t.doc.slice(i,s).append(t.doc.slice(o,i))},range:k.cursor(s)}});return r.changes.empty?!1:(e(t.update(r,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function pe(t){let e=[],r=-1;for(let n of t.selection.ranges){let i=t.doc.lineAt(n.from),l=t.doc.lineAt(n.to);if(!n.empty&&n.to==l.from&&(l=t.doc.lineAt(n.to-1)),r>=i.number){let o=e[e.length-1];o.to=l.to,o.ranges.push(n)}else e.push({from:i.from,to:l.to,ranges:[n]});r=l.number+1}return e}function kt(t,e,r){if(t.readOnly)return!1;let n=[],i=[];for(let l of pe(t)){if(r?l.to==t.doc.length:l.from==0)continue;let o=t.doc.lineAt(r?l.to+1:l.from-1),s=o.length+1;if(r){n.push({from:l.to,to:o.to},{from:l.from,insert:o.text+t.lineBreak});for(let u of l.ranges)i.push(k.range(Math.min(t.doc.length,u.anchor+s),Math.min(t.doc.length,u.head+s)))}else{n.push({from:o.from,to:l.from},{from:l.to,insert:t.lineBreak+o.text});for(let u of l.ranges)i.push(k.range(u.anchor-s,u.head-s))}}return n.length?(e(t.update({changes:n,scrollIntoView:!0,selection:k.create(i,t.selection.mainIndex),userEvent:"move.line"})),!0):!1}const br=({state:t,dispatch:e})=>kt(t,e,!1),Ar=({state:t,dispatch:e})=>kt(t,e,!0);function bt(t,e,r){if(t.readOnly)return!1;let n=[];for(let i of pe(t))r?n.push({from:i.from,insert:t.doc.slice(i.from,i.to)+t.lineBreak}):n.push({from:i.to,insert:t.lineBreak+t.doc.slice(i.from,i.to)});return e(t.update({changes:n,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Cr=({state:t,dispatch:e})=>bt(t,e,!1),Br=({state:t,dispatch:e})=>bt(t,e,!0),Sr=t=>{if(t.state.readOnly)return!1;let{state:e}=t,r=e.changes(pe(e).map(({from:i,to:l})=>(i>0?i--:l<e.doc.length&&l++,{from:i,to:l}))),n=X(e.selection,i=>{let l;if(t.lineWrapping){let o=t.lineBlockAt(i.head),s=t.coordsAtPos(i.head,i.assoc||1);s&&(l=o.bottom+t.documentTop-s.bottom+t.defaultLineHeight/2)}return t.moveVertically(i,!0,l)}).map(r);return t.dispatch({changes:r,selection:n,scrollIntoView:!0,userEvent:"delete.line"}),!0};function Lr(t,e){if(/\(\)|\[\]|\{\}/.test(t.sliceDoc(e-1,e+1)))return{from:e,to:e};let r=Se(t).resolveInner(e),n=r.childBefore(e),i=r.childAfter(e),l;return n&&i&&n.to<=e&&i.from>=e&&(l=n.type.prop(b.closedBy))&&l.indexOf(i.name)>-1&&t.doc.lineAt(n.to).from==t.doc.lineAt(i.from).from&&!/\S/.test(t.sliceDoc(n.to,i.from))?{from:n.to,to:i.from}:null}const He=At(!1),wr=At(!0);function At(t){return({state:e,dispatch:r})=>{if(e.readOnly)return!1;let n=e.changeByRange(i=>{let{from:l,to:o}=i,s=e.doc.lineAt(l),u=!t&&l==o&&Lr(e,l);t&&(l=o=(o<=s.to?s:e.doc.lineAt(o)).to);let h=new We(e,{simulateBreak:l,simulateDoubleBreak:!!u}),f=qe(h,l);for(f==null&&(f=Be(/^\s*/.exec(e.doc.lineAt(l).text)[0],e.tabSize));o<s.to&&/\s/.test(s.text[o-s.from]);)o++;u?{from:l,to:o}=u:l>s.from&&l<s.from+100&&!/\S/.test(s.text.slice(0,l))&&(l=s.from);let a=["",he(e,f)];return u&&a.push(he(e,h.lineIndent(s.from,-1))),{changes:{from:l,to:o,insert:Fe.of(a)},range:k.cursor(l+1+a[1].length)}});return r(e.update(n,{scrollIntoView:!0,userEvent:"input"})),!0}}function _e(t,e){let r=-1;return t.changeByRange(n=>{let i=[];for(let o=n.from;o<=n.to;){let s=t.doc.lineAt(o);s.number>r&&(n.empty||n.to>s.from)&&(e(s,i,n),r=s.number),o=s.to+1}let l=t.changes(i);return{changes:i,range:k.range(l.mapPos(n.anchor,1),l.mapPos(n.head,1))}})}const Dr=({state:t,dispatch:e})=>{if(t.readOnly)return!1;let r=Object.create(null),n=new We(t,{overrideIndentation:l=>{let o=r[l];return o??-1}}),i=_e(t,(l,o,s)=>{let u=qe(n,l.from);if(u==null)return;/\S/.test(l.text)||(u=0);let h=/^\s*/.exec(l.text)[0],f=he(t,u);(h!=f||s.from<l.from+h.length)&&(r[l.from]=u,o.push({from:l.from,to:l.from+h.length,insert:f}))});return i.changes.empty||e(t.update(i,{userEvent:"indent"})),!0},Ct=({state:t,dispatch:e})=>t.readOnly?!1:(e(t.update(_e(t,(r,n)=>{n.push({from:r.from,insert:t.facet(Lt)})}),{userEvent:"input.indent"})),!0),Bt=({state:t,dispatch:e})=>t.readOnly?!1:(e(t.update(_e(t,(r,n)=>{let i=/^\s*/.exec(r.text)[0];if(!i)return;let l=Be(i,t.tabSize),o=0,s=he(t,Math.max(0,l-ye(t)));for(;o<i.length&&o<s.length&&i.charCodeAt(o)==s.charCodeAt(o);)o++;n.push({from:r.from+o,to:r.from+i.length,insert:s.slice(o)})}),{userEvent:"delete.dedent"})),!0),Ir=t=>(t.setTabFocusMode(),!0),Mr=[{key:"Ctrl-b",run:Ze,shift:ut,preventDefault:!0},{key:"Ctrl-f",run:et,shift:ft},{key:"Ctrl-p",run:nt,shift:at},{key:"Ctrl-n",run:it,shift:dt},{key:"Ctrl-a",run:Qt,shift:ur},{key:"Ctrl-e",run:Xt,shift:fr},{key:"Ctrl-d",run:gt},{key:"Ctrl-h",run:Ce},{key:"Ctrl-k",run:mr},{key:"Ctrl-Alt-h",run:xt},{key:"Ctrl-o",run:xr},{key:"Ctrl-t",run:kr},{key:"Ctrl-v",run:Ae}],_r=[{key:"ArrowLeft",run:Ze,shift:ut,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:Gt,shift:er,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:$t,shift:or,preventDefault:!0},{key:"ArrowRight",run:et,shift:ft,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:jt,shift:tr,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Jt,shift:sr,preventDefault:!0},{key:"ArrowUp",run:nt,shift:at,preventDefault:!0},{mac:"Cmd-ArrowUp",run:Ue,shift:Ge},{mac:"Ctrl-ArrowUp",run:Re,shift:Oe},{key:"ArrowDown",run:it,shift:dt,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Ve,shift:je},{mac:"Ctrl-ArrowDown",run:Ae,shift:Te},{key:"PageUp",run:Re,shift:Oe},{key:"PageDown",run:Ae,shift:Te},{key:"Home",run:Kt,shift:lr,preventDefault:!0},{key:"Mod-Home",run:Ue,shift:Ge},{key:"End",run:qt,shift:ir,preventDefault:!0},{key:"Mod-End",run:Ve,shift:je},{key:"Enter",run:He,shift:He},{key:"Mod-a",run:hr},{key:"Backspace",run:Ce,shift:Ce},{key:"Delete",run:gt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:xt},{key:"Mod-Delete",mac:"Alt-Delete",run:pr},{mac:"Mod-Backspace",run:gr},{mac:"Mod-Delete",run:yr}].concat(Mr.map(t=>({mac:t.key,run:t.run,shift:t.shift}))),Nr=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Ft,shift:rr},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Wt,shift:nr},{key:"Alt-ArrowUp",run:br},{key:"Shift-Alt-ArrowUp",run:Cr},{key:"Alt-ArrowDown",run:Ar},{key:"Shift-Alt-ArrowDown",run:Br},{key:"Escape",run:dr},{key:"Mod-Enter",run:wr},{key:"Alt-l",mac:"Ctrl-l",run:cr},{key:"Mod-i",run:ar,preventDefault:!0},{key:"Mod-[",run:Bt},{key:"Mod-]",run:Ct},{key:"Mod-Alt-\\",run:Dr},{key:"Shift-Mod-k",run:Sr},{key:"Shift-Mod-\\",run:Zt},{key:"Mod-/",run:zt},{key:"Alt-A",run:Rt},{key:"Ctrl-m",mac:"Shift-Alt-m",run:Ir}].concat(_r),Rr={key:"Tab",run:Ct,shift:Bt};export{wt as D,M as I,b as N,zr as P,R as T,be as a,O as b,Ke as c,Nr as d,Rr as i};
