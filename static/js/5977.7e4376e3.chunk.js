"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[5977],{61196:(t,e,i)=>{i.d(e,{q:()=>a});var r,s,n,o=i(54787),l={exports:{}};r=l,s=function(){function t(i,r,s,n,o){for(;n>s;){if(n-s>600){var l=n-s+1,a=r-s+1,u=Math.log(l),h=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*h*(l-h)/l)*(a-l/2<0?-1:1);t(i,r,Math.max(s,Math.floor(r-a*h/l+c)),Math.min(n,Math.floor(r+(l-a)*h/l+c)),o)}var p=i[r],d=s,g=n;for(e(i,s,r),o(i[n],p)>0&&e(i,s,n);d<g;){for(e(i,d,g),d++,g--;o(i[d],p)<0;)d++;for(;o(i[g],p)>0;)g--}0===o(i[s],p)?e(i,s,g):e(i,++g,n),g<=r&&(s=g+1),r<=g&&(n=g-1)}}function e(t,e,i){var r=t[e];t[e]=t[i],t[i]=r}function i(t,e){return t<e?-1:t>e?1:0}return function(e,r,s,n,o){t(e,r,s||0,n||e.length-1,o||i)}},void 0!==(n=s())&&(r.exports=n);const a=(0,o.g)(l.exports)},90321:(t,e,i)=>{function r(t,e){return t?e?4:3:e?3:2}function s(t,e,i,s){if(null===e||void 0===e||!e.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:h,coords:c}=e,p=r(i,s);let d=0;for(const r of h){const t=n(u,c,d,r,i,s);t&&a.push(t),d+=r*p}if(a.sort(((t,e)=>{let r=t[2]-e[2];return 0===r&&i&&(r=t[4]-e[4]),r})),a.length){let t=6*a[0][2];l[0]=a[0][0]/t,l[1]=a[0][1]/t,i&&(t=6*a[0][4],l[2]=0!==t?a[0][3]/t:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||i&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const t=e.lengths[0]?o(c,0,h[0],i,s):null;if(!t)return null;l[0]=t[0],l[1]=t[1],i&&t.length>2&&(l[2]=t[2])}return t}function n(t,e,i,s,n,o){const l=r(n,o);let a=i,u=i+l,h=0,c=0,p=0,d=0,g=0;for(let r=0,f=s-1;r<f;r++,a+=l,u+=l){const i=e[a],r=e[a+1],s=e[a+2],o=e[u],l=e[u+1],y=e[u+2];let f=i*l-o*r;d+=f,h+=(i+o)*f,c+=(r+l)*f,n&&(f=i*y-o*s,p+=(s+y)*f,g+=f),i<t[0]&&(t[0]=i),i>t[1]&&(t[1]=i),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),n&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(d>0&&(d*=-1),g>0&&(g*=-1),!d)return null;const y=[h,c,.5*d];return n&&(y[3]=p,y[4]=.5*g),y}function o(t,e,i,s,n){const o=r(s,n);let c=e,p=e+o,d=0,g=0,y=0,f=0;for(let r=0,b=i-1;r<b;r++,c+=o,p+=o){const e=t[c],i=t[c+1],r=t[c+2],n=t[p],o=t[p+1],b=t[p+2],v=s?a(e,i,r,n,o,b):l(e,i,n,o);if(v)if(d+=v,s){const t=h(e,i,r,n,o,b);g+=v*t[0],y+=v*t[1],f+=v*t[2]}else{const t=u(e,i,n,o);g+=v*t[0],y+=v*t[1]}}return d>0?s?[g/d,y/d,f/d]:[g/d,y/d]:i>0?s?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function l(t,e,i,r){const s=i-t,n=r-e;return Math.sqrt(s*s+n*n)}function a(t,e,i,r,s,n){const o=r-t,l=s-e,a=n-i;return Math.sqrt(o*o+l*l+a*a)}function u(t,e,i,r){return[t+.5*(i-t),e+.5*(r-e)]}function h(t,e,i,r,s,n){return[t+.5*(r-t),e+.5*(s-e),i+.5*(n-i)]}i.d(e,{Q:()=>s})},33376:(t,e,i)=>{i.d(e,{T:()=>o});var r=i(90321),s=i(20176),n=i(1484);const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new s.Om(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(null==t.centroid&&(t.centroid=(0,r.Q)(new n.A,t.geometry,e.hasZ,e.hasM)),t.centroid)}},15477:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var r=i(35143),s=i(91967),n=i(5632),o=i(30726),l=i(46053),a=(i(81806),i(76460),i(47249),i(85842)),u=i(183);let h=class extends((0,n.sA)(s.A)){constructor(t){super(t),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new c,this.suspended=!1}initialize(){this._set("processor",new u.K({owner:this}))}destroy(){this._set("processor",(0,o.pR)(this.processor))}get graphics(){var t;return null===(t=this.view)||void 0===t?void 0:t.graphics}get loadedGraphics(){return this.graphics}get updating(){var t;return!(null===(t=this.processor)||void 0===t||!t.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}graphicChanged(t){this.processor.graphicsCore.graphicUpdateHandler(t)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(t){return this.processor.highlight(t)}maskOccludee(t){return this.processor.maskOccludee(t)}};(0,r._)([(0,l.MZ)({readOnly:!0})],h.prototype,"graphics",null),(0,r._)([(0,l.MZ)()],h.prototype,"loadedGraphics",null),(0,r._)([(0,l.MZ)({readOnly:!0})],h.prototype,"updating",null),(0,r._)([(0,l.MZ)({constructOnly:!0})],h.prototype,"view",void 0),(0,r._)([(0,l.MZ)()],h.prototype,"processor",void 0),(0,r._)([(0,l.MZ)({type:Boolean})],h.prototype,"slicePlaneEnabled",void 0),(0,r._)([(0,l.MZ)()],h.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],h.prototype,"suspended",void 0),h=(0,r._)([(0,a.$)("esri.views.3d.layers.GraphicsView3D")],h);class c extends n.LJ{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const p=h},183:(t,e,i)=>{i.d(e,{K:()=>G});var r=i(35143),s=i(39356),n=i(91967),o=i(19276),l=i(54901),a=i(30726),u=i(50346),h=i(68134),c=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),d=i(15011),g=i(19451),y=i(25515),f=i(32535),b=i(86486),v=i(97015),m=i(57662),_=i(38865),I=i(23475),w=i(35148),C=i(44220),E=i(90592),M=i(93788),V=i(36423),N=i(83490),O=i(44513);let G=class extends n.A{constructor(t){super(t),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=m.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new g.U}initialize(){const{layer:t}=this,e="effectiveScaleRange"in t?t:null,i=this.scaleVisibilityEnabled&&null!=e,r=new I.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:O.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(t,e)=>new w.V({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:e,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(t,i)=>new M.N({graphicsCoreOwner:this,layer:e,queryGraphicUIDsInExtent:i,graphicsCore:t,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:t=>new E.w(t)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new C.p({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const t=this.owner;this._updatingHandles.add((()=>t.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in t){const e=t;this._updatingHandles.add((()=>e.elevationInfo),((t,e)=>{(0,d.Ui)(t,e)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(t){if((0,u.zf)(t))return;throw t}this.destroyed||(this.addHandles((0,h.wB)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),h.OH)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,a.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.scaleVisibility}get elevationAlignment(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.elevationAlignment}get objectStates(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.objectStates}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var t;return null!==(t=this.owner.suspended)&&void 0!==t&&t}get updating(){var t;return!!(null!==(t=this.graphicsCore)&&void 0!==t&&t.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var t;return null!==(t=this.owner.fullOpacity)&&void 0!==t?t:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}notifyGraphicVisibilityChanged(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}getRenderingInfo(t,e,i){const r=(0,b.vl)(t,{renderer:e,arcade:i});if(null!==r&&void 0!==r&&r.color){const t=r.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return r}getRenderingInfoAsync(t,e,i,r){return(0,b.LO)(t,{renderer:e,arcade:i,...r})}getHit(t){if(this.owner.loadedGraphics){const e=this.owner.loadedGraphics.find((e=>e.uid===t));if(e){const t=this.layer instanceof y.A?this.layer:null,i=(0,f.wP)(e,t);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(t,e){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,e):Promise.reject()}computeAttachmentOrigin(t,e){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,e):null}getSymbolLayerSize(t,e){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,e):null}maskOccludee(t){const{set:e,handle:i}=this.objectStates.acquireSet(N.Mg.MaskOccludee,null);return this.objectStates.setUid(e,t.uid),i}highlight(t){if(t instanceof v.A)return S;if("number"==typeof t)return this.highlight([t]);if(t instanceof s.A)return this.highlight([t]);if(t instanceof o.A&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof s.A){const e=t.map((t=>t.uid)),{set:i,handle:r}=this.objectStates.acquireSet(N.Mg.Highlight,null);return this.objectStates.setUids(i,e),r}if("number"==typeof t[0]){const e=t,{set:i,handle:r}=this.objectStates.acquireSet(N.Mg.Highlight,null);return this.objectStates.setObjectIds(i,e),r}}return S}_setupSuspendResumeExtent(){const{scaleVisibility:t,frustumVisibility:e}=this;if(null==t&&null==e)return;const i=i=>{let{computedExtent:r,extentPadding:s}=i;this._suspendResumeExtent=(0,V.t8)(r,this._suspendResumeExtent,_.qD,s),null!=t&&t.setExtent(this._suspendResumeExtent),null!=e&&e.setExtent(this._suspendResumeExtent)};this.addHandles((0,h.wB)((()=>{var t,e;return{computedExtent:null===(t=this.graphicsCore)||void 0===t?void 0:t.computedExtent,extentPadding:null===(e=this.graphicsCore)||void 0===e?void 0:e.extentPadding}}),(t=>i(t)),h.pc))}_updateClippingExtent(){const t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,r._)([(0,c.MZ)()],G.prototype,"type",void 0),(0,r._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"owner",void 0),(0,r._)([(0,c.MZ)()],G.prototype,"layer",null),(0,r._)([(0,c.MZ)()],G.prototype,"view",null),(0,r._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"graphicsCore",void 0),(0,r._)([(0,c.MZ)()],G.prototype,"scaleVisibility",null),(0,r._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"frustumVisibility",void 0),(0,r._)([(0,c.MZ)()],G.prototype,"elevationAlignment",null),(0,r._)([(0,c.MZ)()],G.prototype,"objectStates",null),(0,r._)([(0,c.MZ)()],G.prototype,"scaleVisibilitySuspended",null),(0,r._)([(0,c.MZ)({readOnly:!0})],G.prototype,"frustumVisibilitySuspended",null),(0,r._)([(0,c.MZ)()],G.prototype,"suspended",null),(0,r._)([(0,c.MZ)({readOnly:!0})],G.prototype,"updating",null),(0,r._)([(0,c.MZ)()],G.prototype,"loadedGraphics",null),(0,r._)([(0,c.MZ)()],G.prototype,"fullOpacity",null),(0,r._)([(0,c.MZ)()],G.prototype,"slicePlaneEnabled",null),(0,r._)([(0,c.MZ)()],G.prototype,"drapeSourceType",void 0),(0,r._)([(0,c.MZ)()],G.prototype,"updatePolicy",null),(0,r._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"scaleVisibilityEnabled",void 0),(0,r._)([(0,c.MZ)({constructOnly:!0})],G.prototype,"frustumVisibilityEnabled",void 0),(0,r._)([(0,c.MZ)()],G.prototype,"initializePromise",void 0),G=(0,r._)([(0,p.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],G);const S=(0,l.hA)()}}]);
//# sourceMappingURL=5977.7e4376e3.chunk.js.map