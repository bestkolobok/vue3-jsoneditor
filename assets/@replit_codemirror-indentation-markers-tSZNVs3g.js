import{a as d}from"./@codemirror_language-DGL4j3wZ.js";import{F as b,d as p,j as k}from"./@codemirror_state-CJ4wOm36.js";import{V as y,E as x,a as C}from"./@codemirror_view-AOFXy9gw.js";function A(s,t=s.state){const e=new Set;for(const{from:i,to:r}of s.visibleRanges){let n=i;for(;n<=r;){const o=t.doc.lineAt(n);e.has(o)||e.add(o),n=o.to+1}}return e}function f(s){const t=s.selection.main.head;return s.doc.lineAt(t)}function g(s,t){let e=0;t:for(let i=0;i<s.length;i++)switch(s[i]){case" ":case" ":{e+=1;continue t}case"	":{e+=t-e%t;continue t}case"\r":continue t;default:break t}return e}const m=b.define({combine(s){return p(s,{highlightActiveBlock:!0,hideFirstIndent:!1,markerType:"fullScope",thickness:1})}});class E{constructor(t,e,i,r){this.lines=t,this.state=e,this.map=new Map,this.unitWidth=i,this.markerType=r;for(const n of this.lines)this.add(n);this.state.facet(m).highlightActiveBlock&&this.findAndSetActiveLines()}has(t){return this.map.has(typeof t=="number"?t:t.number)}get(t){const e=this.map.get(typeof t=="number"?t:t.number);if(!e)throw new Error("Line not found in indentation map");return e}set(t,e,i){const r=!t.text.trim().length,n={line:t,col:e,level:i,empty:r};return this.map.set(n.line.number,n),n}add(t){if(this.has(t))return this.get(t);if(!t.length||!t.text.trim().length){if(t.number===1)return this.set(t,0,0);if(t.number===this.state.doc.lines){const o=this.closestNonEmpty(t,-1);return this.set(t,0,o.level)}const r=this.closestNonEmpty(t,-1),n=this.closestNonEmpty(t,1);return r.level>=n.level&&this.markerType!=="codeOnly"?this.set(t,0,r.level):r.empty&&r.level===0&&n.level!==0?this.set(t,0,0):n.level>r.level?this.set(t,0,r.level+1):this.set(t,0,n.level)}const e=g(t.text,this.state.tabSize),i=Math.floor(e/this.unitWidth);return this.set(t,e,i)}closestNonEmpty(t,e){let i=t.number+e;for(;e===-1?i>=1:i<=this.state.doc.lines;){if(this.has(i)){const o=this.get(i);if(!o.empty)return o}const n=this.state.doc.line(i);if(n.text.trim().length){const o=g(n.text,this.state.tabSize),a=Math.floor(o/this.unitWidth);return this.set(n,o,a)}i+=e}const r=this.state.doc.line(e===-1?1:this.state.doc.lines);return this.set(r,0,0)}findAndSetActiveLines(){const t=f(this.state);if(!this.has(t))return;let e=this.get(t);if(this.has(e.line.number+1)){const n=this.get(e.line.number+1);n.level>e.level&&(e=n)}if(this.has(e.line.number-1)){const n=this.get(e.line.number-1);n.level>e.level&&(e=n)}if(e.level===0)return;e.active=e.level;let i,r;for(i=e.line.number;i>1;i--){if(!this.has(i-1))continue;const n=this.get(i-1);if(n.level<e.level)break;n.active=e.level}for(r=e.line.number;r<this.state.doc.lines;r++){if(!this.has(r+1))continue;const n=this.get(r+1);if(n.level<e.level)break;n.active=e.level}}}function L(s){const t={light:"#F0F1F2",dark:"#2B3245",activeLight:"#E4E5E6",activeDark:"#3C445C"};let e=t;return s&&(e=Object.assign(Object.assign({},t),s)),x.baseTheme({"&light":{"--indent-marker-bg-color":e.light,"--indent-marker-active-bg-color":e.activeLight},"&dark":{"--indent-marker-bg-color":e.dark,"--indent-marker-active-bg-color":e.activeDark},".cm-line":{position:"relative"},".cm-indent-markers::before":{content:'""',position:"absolute",top:0,left:"2px",right:0,bottom:0,background:"var(--indent-markers)",pointerEvents:"none",zIndex:"-1"}})}function u(s,t,e,i,r){return`${`repeating-linear-gradient(to right, var(${s}) 0 ${t}px, transparent ${t}px ${e}ch)`} ${i*e}.5ch/calc(${e*r}ch - 1px) no-repeat`}function w(s,t,e,i,r){const{level:n,active:o}=s;if(r=r??i,e&&n===0)return[];const a=e?1:0,c=[];if(o!==void 0){const l=o-a-1;l>0&&c.push(u("--indent-marker-bg-color",i,t,a,l)),c.push(u("--indent-marker-active-bg-color",r,t,o-1,1)),o!==n&&c.push(u("--indent-marker-bg-color",i,t,o,n-o))}else c.push(u("--indent-marker-bg-color",i,t,a,n-a));return c.join(",")}class N{constructor(t){this.view=t,this.unitWidth=d(t.state),this.currentLineNumber=f(t.state).number,this.generate(t.state)}update(t){const e=d(t.state),i=e!==this.unitWidth;i&&(this.unitWidth=e);const r=f(t.state).number,n=r!==this.currentLineNumber;this.currentLineNumber=r;const o=t.state.facet(m).highlightActiveBlock&&n;(t.docChanged||t.viewportChanged||i||o)&&this.generate(t.state)}generate(t){const e=new k,i=A(this.view,t),{hideFirstIndent:r,markerType:n,thickness:o,activeThickness:a}=t.facet(m),c=new E(i,t,this.unitWidth,n);for(const l of i){const h=c.get(l.number);if(!(h!=null&&h.level))continue;const v=w(h,this.unitWidth,r,o,a);e.add(l.from,l.from,C.line({class:"cm-indent-markers",attributes:{style:`--indent-markers: ${v}`}}))}this.decorations=e.finish()}}function M(s={}){return[m.of(s),L(s.colors),y.fromClass(N,{decorations:t=>t.decorations})]}export{M as i};
