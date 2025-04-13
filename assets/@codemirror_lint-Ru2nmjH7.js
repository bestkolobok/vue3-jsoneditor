import{b as J,E as S,c as Q,V as ee,h as te,s as ie,d as se,a as k,G as ne,W as oe,l as le}from"./@codemirror_view-AOFXy9gw.js";import{F as G,S as D,a as C,d as H,R as $,j as re}from"./@codemirror_state-CJ4wOm36.js";function p(){var t=arguments[0];typeof t=="string"&&(t=document.createElement(t));var e=1,s=arguments[1];if(s&&typeof s=="object"&&s.nodeType==null&&!Array.isArray(s)){for(var i in s)if(Object.prototype.hasOwnProperty.call(s,i)){var n=s[i];typeof n=="string"?t.setAttribute(i,n):n!=null&&(t[i]=n)}e++}for(;e<arguments.length;e++)N(t,arguments[e]);return t}function N(t,e){if(typeof e=="string")t.appendChild(document.createTextNode(e));else if(e!=null)if(e.nodeType!=null)t.appendChild(e);else if(Array.isArray(e))for(var s=0;s<e.length;s++)N(t,e[s]);else throw new RangeError("Unsupported child node: "+e)}class O{constructor(e,s,i){this.from=e,this.to=s,this.diagnostic=i}}class w{constructor(e,s,i){this.diagnostics=e,this.panel=s,this.selected=i}static init(e,s,i){let n=i.facet(b).markerFilter;n&&(e=n(e,i));let o=e.slice().sort((a,m)=>a.from-m.from||a.to-m.to),r=new re,l=[],f=0;for(let a=0;;){let m=a==o.length?null:o[a];if(!m&&!l.length)break;let d,h;for(l.length?(d=f,h=l.reduce((c,y)=>Math.min(c,y.to),m&&m.from>d?m.from:1e8)):(d=m.from,h=m.to,l.push(m),a++);a<o.length;){let c=o[a];if(c.from==d&&(c.to>c.from||c.to==d))l.push(c),a++,h=Math.min(c.to,h);else{h=Math.min(c.from,h);break}}let F=U(l);if(l.some(c=>c.from==c.to||c.from==c.to-1&&i.doc.lineAt(c.from).to==c.from))r.add(d,d,k.widget({widget:new ge(F),diagnostics:l.slice()}));else{let c=l.reduce((y,E)=>E.markClass?y+" "+E.markClass:y,"");r.add(d,h,k.mark({class:"cm-lintRange cm-lintRange-"+F+c,diagnostics:l.slice(),inclusiveEnd:l.some(y=>y.to>h)}))}f=h;for(let c=0;c<l.length;c++)l[c].to<=f&&l.splice(c--,1)}let u=r.finish();return new w(u,s,x(u))}}function x(t,e=null,s=0){let i=null;return t.between(s,1e9,(n,o,{spec:r})=>{if(!(e&&r.diagnostics.indexOf(e)<0))if(!i)i=new O(n,o,e||r.diagnostics[0]);else{if(r.diagnostics.indexOf(i.diagnostic)<0)return!1;i=new O(i.from,o,i.diagnostic)}}),i}function V(t,e){let s=e.pos,i=e.end||s,n=t.state.facet(b).hideOn(t,s,i);if(n!=null)return n;let o=t.startState.doc.lineAt(e.pos);return!!(t.effects.some(r=>r.is(P))||t.changes.touchesRange(o.from,Math.max(o.to,i)))}function z(t,e){return t.field(g,!1)?e:e.concat(C.appendConfig.of(X))}function ae(t,e){return{effects:z(t,[P.of(e)])}}const P=C.define(),M=C.define(),W=C.define(),g=D.define({create(){return new w(k.none,null,null)},update(t,e){if(e.docChanged&&t.diagnostics.size){let s=t.diagnostics.map(e.changes),i=null,n=t.panel;if(t.selected){let o=e.changes.mapPos(t.selected.from,1);i=x(s,t.selected.diagnostic,o)||x(s,null,o)}!s.size&&n&&e.state.facet(b).autoPanel&&(n=null),t=new w(s,n,i)}for(let s of e.effects)if(s.is(P)){let i=e.state.facet(b).autoPanel?s.value.length?v.open:null:t.panel;t=w.init(s.value,i,e.state)}else s.is(M)?t=new w(t.diagnostics,s.value?v.open:null,t.selected):s.is(W)&&(t=new w(t.diagnostics,t.panel,s.value));return t},provide:t=>[se.from(t,e=>e.panel),S.decorations.from(t,e=>e.diagnostics)]}),ce=k.mark({class:"cm-lintRange cm-lintRange-active"});function fe(t,e,s){let{diagnostics:i}=t.state.field(g),n,o=-1,r=-1;i.between(e-(s<0?1:0),e+(s>0?1:0),(f,u,{spec:a})=>{if(e>=f&&e<=u&&(f==u||(e>f||s>0)&&(e<u||s<0)))return n=a.diagnostics,o=f,r=u,!1});let l=t.state.facet(b).tooltipFilter;return n&&l&&(n=l(n,t.state)),n?{pos:o,end:r,above:t.state.doc.lineAt(o).to<r,create(){return{dom:Y(t,n)}}}:null}function Y(t,e){return p("ul",{class:"cm-tooltip-lint"},e.map(s=>q(t,s,!1)))}const de=t=>{let e=t.state.field(g,!1);(!e||!e.panel)&&t.dispatch({effects:z(t.state,[M.of(!0)])});let s=Q(t,v.open);return s&&s.dom.querySelector(".cm-panel-lint ul").focus(),!0},B=t=>{let e=t.state.field(g,!1);return!e||!e.panel?!1:(t.dispatch({effects:M.of(!1)}),!0)},ue=t=>{let e=t.state.field(g,!1);if(!e)return!1;let s=t.state.selection.main,i=e.diagnostics.iter(s.to+1);return!i.value&&(i=e.diagnostics.iter(0),!i.value||i.from==s.from&&i.to==s.to)?!1:(t.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0}),!0)},Re=[{key:"Mod-Shift-m",run:de,preventDefault:!0},{key:"F8",run:ue}],me=ee.fromClass(class{constructor(t){this.view=t,this.timeout=-1,this.set=!0;let{delay:e}=t.state.facet(b);this.lintTime=Date.now()+e,this.run=this.run.bind(this),this.timeout=setTimeout(this.run,e)}run(){clearTimeout(this.timeout);let t=Date.now();if(t<this.lintTime-10)this.timeout=setTimeout(this.run,this.lintTime-t);else{this.set=!1;let{state:e}=this.view,{sources:s}=e.facet(b);s.length&&he(s.map(i=>Promise.resolve(i(this.view))),i=>{this.view.state.doc==e.doc&&this.view.dispatch(ae(this.view.state,i.reduce((n,o)=>n.concat(o))))},i=>{le(this.view.state,i)})}}update(t){let e=t.state.facet(b);(t.docChanged||e!=t.startState.facet(b)||e.needsRefresh&&e.needsRefresh(t))&&(this.lintTime=Date.now()+e.delay,this.set||(this.set=!0,this.timeout=setTimeout(this.run,e.delay)))}force(){this.set&&(this.lintTime=Date.now(),this.run())}destroy(){clearTimeout(this.timeout)}});function he(t,e,s){let i=[],n=-1;for(let o of t)o.then(r=>{i.push(r),clearTimeout(n),i.length==t.length?e(i):n=setTimeout(()=>e(i),200)},s)}const b=G.define({combine(t){return Object.assign({sources:t.map(e=>e.source).filter(e=>e!=null)},H(t.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{needsRefresh:(e,s)=>e?s?i=>e(i)||s(i):e:s}))}});function Se(t,e={}){return[b.of({source:t,config:e}),me,X]}function _(t){let e=[];if(t)e:for(let{name:s}of t){for(let i=0;i<s.length;i++){let n=s[i];if(/[a-zA-Z]/.test(n)&&!e.some(o=>o.toLowerCase()==n.toLowerCase())){e.push(n);continue e}}e.push("")}return e}function q(t,e,s){var i;let n=s?_(e.actions):[];return p("li",{class:"cm-diagnostic cm-diagnostic-"+e.severity},p("span",{class:"cm-diagnosticText"},e.renderMessage?e.renderMessage(t):e.message),(i=e.actions)===null||i===void 0?void 0:i.map((o,r)=>{let l=!1,f=d=>{if(d.preventDefault(),l)return;l=!0;let h=x(t.state.field(g).diagnostics,e);h&&o.apply(t,h.from,h.to)},{name:u}=o,a=n[r]?u.indexOf(n[r]):-1,m=a<0?u:[u.slice(0,a),p("u",u.slice(a,a+1)),u.slice(a+1)];return p("button",{type:"button",class:"cm-diagnosticAction",onclick:f,onmousedown:f,"aria-label":` Action: ${u}${a<0?"":` (access key "${n[r]})"`}.`},m)}),e.source&&p("div",{class:"cm-diagnosticSource"},e.source))}class ge extends oe{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return p("span",{class:"cm-lintPoint cm-lintPoint-"+this.sev})}}class j{constructor(e,s){this.diagnostic=s,this.id="item_"+Math.floor(Math.random()*4294967295).toString(16),this.dom=q(e,s,!0),this.dom.id=this.id,this.dom.setAttribute("role","option")}}class v{constructor(e){this.view=e,this.items=[];let s=n=>{if(n.keyCode==27)B(this.view),this.view.focus();else if(n.keyCode==38||n.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(n.keyCode==40||n.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(n.keyCode==36)this.moveSelection(0);else if(n.keyCode==35)this.moveSelection(this.items.length-1);else if(n.keyCode==13)this.view.focus();else if(n.keyCode>=65&&n.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:o}=this.items[this.selectedIndex],r=_(o.actions);for(let l=0;l<r.length;l++)if(r[l].toUpperCase().charCodeAt(0)==n.keyCode){let f=x(this.view.state.field(g).diagnostics,o);f&&o.actions[l].apply(e,f.from,f.to)}}else return;n.preventDefault()},i=n=>{for(let o=0;o<this.items.length;o++)this.items[o].dom.contains(n.target)&&this.moveSelection(o)};this.list=p("ul",{tabIndex:0,role:"listbox","aria-label":this.view.state.phrase("Diagnostics"),onkeydown:s,onclick:i}),this.dom=p("div",{class:"cm-panel-lint"},this.list,p("button",{type:"button",name:"close","aria-label":this.view.state.phrase("close"),onclick:()=>B(this.view)},"×")),this.update()}get selectedIndex(){let e=this.view.state.field(g).selected;if(!e)return-1;for(let s=0;s<this.items.length;s++)if(this.items[s].diagnostic==e.diagnostic)return s;return-1}update(){let{diagnostics:e,selected:s}=this.view.state.field(g),i=0,n=!1,o=null,r=new Set;for(e.between(0,this.view.state.doc.length,(l,f,{spec:u})=>{for(let a of u.diagnostics){if(r.has(a))continue;r.add(a);let m=-1,d;for(let h=i;h<this.items.length;h++)if(this.items[h].diagnostic==a){m=h;break}m<0?(d=new j(this.view,a),this.items.splice(i,0,d),n=!0):(d=this.items[m],m>i&&(this.items.splice(i,m-i),n=!0)),s&&d.diagnostic==s.diagnostic?d.dom.hasAttribute("aria-selected")||(d.dom.setAttribute("aria-selected","true"),o=d):d.dom.hasAttribute("aria-selected")&&d.dom.removeAttribute("aria-selected"),i++}});i<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)n=!0,this.items.pop();this.items.length==0&&(this.items.push(new j(this.view,{from:-1,to:-1,severity:"info",message:this.view.state.phrase("No diagnostics")})),n=!0),o?(this.list.setAttribute("aria-activedescendant",o.id),this.view.requestMeasure({key:this,read:()=>({sel:o.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:l,panel:f})=>{let u=f.height/this.list.offsetHeight;l.top<f.top?this.list.scrollTop-=(f.top-l.top)/u:l.bottom>f.bottom&&(this.list.scrollTop+=(l.bottom-f.bottom)/u)}})):this.selectedIndex<0&&this.list.removeAttribute("aria-activedescendant"),n&&this.sync()}sync(){let e=this.list.firstChild;function s(){let i=e;e=i.nextSibling,i.remove()}for(let i of this.items)if(i.dom.parentNode==this.list){for(;e!=i.dom;)s();e=i.dom.nextSibling}else this.list.insertBefore(i.dom,e);for(;e;)s()}moveSelection(e){if(this.selectedIndex<0)return;let s=this.view.state.field(g),i=x(s.diagnostics,this.items[e].diagnostic);i&&this.view.dispatch({selection:{anchor:i.from,head:i.to},scrollIntoView:!0,effects:W.of(i)})}static open(e){return new v(e)}}function R(t,e='viewBox="0 0 40 40"'){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(t)}</svg>')`}function T(t){return R(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,'width="6" height="3"')}const pe=S.baseTheme({".cm-diagnostic":{padding:"3px 6px 3px 8px",marginLeft:"-1px",display:"block",whiteSpace:"pre-wrap"},".cm-diagnostic-error":{borderLeft:"5px solid #d11"},".cm-diagnostic-warning":{borderLeft:"5px solid orange"},".cm-diagnostic-info":{borderLeft:"5px solid #999"},".cm-diagnostic-hint":{borderLeft:"5px solid #66d"},".cm-diagnosticAction":{font:"inherit",border:"none",padding:"2px 4px",backgroundColor:"#444",color:"white",borderRadius:"3px",marginLeft:"8px",cursor:"pointer"},".cm-diagnosticSource":{fontSize:"70%",opacity:.7},".cm-lintRange":{backgroundPosition:"left bottom",backgroundRepeat:"repeat-x",paddingBottom:"0.7px"},".cm-lintRange-error":{backgroundImage:T("#d11")},".cm-lintRange-warning":{backgroundImage:T("orange")},".cm-lintRange-info":{backgroundImage:T("#999")},".cm-lintRange-hint":{backgroundImage:T("#66d")},".cm-lintRange-active":{backgroundColor:"#ffdd9980"},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:"relative","&:after":{content:'""',position:"absolute",bottom:0,left:"-2px",borderLeft:"3px solid transparent",borderRight:"3px solid transparent",borderBottom:"4px solid #d11"}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:"orange"}},".cm-lintPoint-info":{"&:after":{borderBottomColor:"#999"}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:"#66d"}},".cm-panel.cm-panel-lint":{position:"relative","& ul":{maxHeight:"100px",overflowY:"auto","& [aria-selected]":{backgroundColor:"#ddd","& u":{textDecoration:"underline"}},"&:focus [aria-selected]":{background_fallback:"#bdf",backgroundColor:"Highlight",color_fallback:"white",color:"HighlightText"},"& u":{textDecoration:"none"},padding:0,margin:0},"& [name=close]":{position:"absolute",top:"0",right:"2px",background:"inherit",border:"none",font:"inherit",padding:0,margin:0}}});function be(t){return t=="error"?4:t=="warning"?3:t=="info"?2:1}function U(t){let e="hint",s=1;for(let i of t){let n=be(i.severity);n>s&&(s=n,e=i.severity)}return e}class Z extends ne{constructor(e){super(),this.diagnostics=e,this.severity=U(e)}toDOM(e){let s=document.createElement("div");s.className="cm-lint-marker cm-lint-marker-"+this.severity;let i=this.diagnostics,n=e.state.facet(A).tooltipFilter;return n&&(i=n(i,e.state)),i.length&&(s.onmouseover=()=>ye(e,s,i)),s}}function we(t,e){let s=i=>{let n=e.getBoundingClientRect();if(!(i.clientX>n.left-10&&i.clientX<n.right+10&&i.clientY>n.top-10&&i.clientY<n.bottom+10)){for(let o=i.target;o;o=o.parentNode)if(o.nodeType==1&&o.classList.contains("cm-tooltip-lint"))return;window.removeEventListener("mousemove",s),t.state.field(K)&&t.dispatch({effects:I.of(null)})}};window.addEventListener("mousemove",s)}function ye(t,e,s){function i(){let r=t.elementAtHeight(e.getBoundingClientRect().top+5-t.documentTop);t.coordsAtPos(r.from)&&t.dispatch({effects:I.of({pos:r.from,above:!1,clip:!1,create(){return{dom:Y(t,s),getCoords:()=>e.getBoundingClientRect()}}})}),e.onmouseout=e.onmousemove=null,we(t,e)}let{hoverTime:n}=t.state.facet(A),o=setTimeout(i,n);e.onmouseout=()=>{clearTimeout(o),e.onmouseout=e.onmousemove=null},e.onmousemove=()=>{clearTimeout(o),o=setTimeout(i,n)}}function ke(t,e){let s=Object.create(null);for(let n of e){let o=t.lineAt(n.from);(s[o.from]||(s[o.from]=[])).push(n)}let i=[];for(let n in s)i.push(new Z(s[n]).range(+n));return $.of(i,!0)}const xe=J({class:"cm-gutter-lint",markers:t=>t.state.field(L),widgetMarker:(t,e,s)=>{let i=[];return t.state.field(L).between(s.from,s.to,(n,o,r)=>{n>s.from&&n<s.to&&i.push(...r.diagnostics)}),i.length?new Z(i):null}}),L=D.define({create(){return $.empty},update(t,e){t=t.map(e.changes);let s=e.state.facet(A).markerFilter;for(let i of e.effects)if(i.is(P)){let n=i.value;s&&(n=s(n||[],e.state)),t=ke(e.state.doc,n.slice(0))}return t}}),I=C.define(),K=D.define({create(){return null},update(t,e){return t&&e.docChanged&&(t=V(e,t)?null:Object.assign(Object.assign({},t),{pos:e.changes.mapPos(t.pos)})),e.effects.reduce((s,i)=>i.is(I)?i.value:s,t)},provide:t=>ie.from(t)}),ve=S.baseTheme({".cm-gutter-lint":{width:"1.4em","& .cm-gutterElement":{padding:".2em"}},".cm-lint-marker":{width:"1em",height:"1em"},".cm-lint-marker-info":{content:R('<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>')},".cm-lint-marker-warning":{content:R('<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>')},".cm-lint-marker-error":{content:R('<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>')}}),X=[g,S.decorations.compute([g],t=>{let{selected:e,panel:s}=t.field(g);return!e||!s||e.from==e.to?k.none:k.set([ce.range(e.from,e.to)])}),te(fe,{hideOn:V}),pe],A=G.define({combine(t){return H(t,{hoverTime:300,markerFilter:null,tooltipFilter:null})}});function Pe(t={}){return[A.of(t),L,xe,ve,K]}export{Re as a,Se as b,p as c,Pe as l};
