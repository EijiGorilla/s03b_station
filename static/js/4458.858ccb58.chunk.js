"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[4458],{14458:(e,t,s)=>{s.r(t),s.d(t,{FeatureTileTree3DDebugger:()=>c});var i=s(35143),l=(s(35238),s(68134)),o=s(46053),n=(s(81806),s(76460),s(47249),s(85842)),r=s(19451),a=s(29614),h=s(65215);let c=class extends a.E{get updating(){var e,t;return null!==(e=null===(t=this._watchUpdatingTracking)||void 0===t?void 0:t.updating)&&void 0!==e&&e}constructor(e){super(e),this._watchUpdatingTracking=new r.U}initialize(){const{featureTiles:e}=this.view;this.addHandles(e.addClient()),this._watchUpdatingTracking.addOnCollectionChange((()=>null===e||void 0===e?void 0:e.tiles),(()=>this.update()),l.Vh)}destroy(){this._watchUpdatingTracking.destroy()}getTiles(){const e=e=>{const[t,s,i]=e.lij;return h.A.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(t,s,i))};return this.view.featureTiles.tiles.toArray().sort(((e,t)=>e.loadPriority-t.loadPriority)).map((t=>({...t,geometry:e(t)})))}};(0,i._)([(0,o.MZ)()],c.prototype,"_watchUpdatingTracking",void 0),(0,i._)([(0,o.MZ)()],c.prototype,"updating",null),(0,i._)([(0,o.MZ)()],c.prototype,"view",void 0),c=(0,i._)([(0,n.$)("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],c)},29614:(e,t,s)=>{s.d(t,{E:()=>v});var i=s(35143),l=s(69539),o=s(39356),n=(s(95444),s(91967)),r=s(19276),a=s(15941),h=s(46053),c=(s(81806),s(76460),s(47249),s(85842)),d=s(37471),g=s(86875),p=s(86659),y=s(21405),u=s(48670),b=s(92135),w=s(68905);const _=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let v=class extends n.A{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=_.map((e=>new g.A({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,s=new Set((this._labels.size,this._labels.keys()));e.forEach(((i,n)=>{const h=i.lij.toString();s.delete(h);const c=i.lij[0],g=i.geometry;if(this.enablePolygons&&!this._polygons.has(h)){const e=new o.A({geometry:g,symbol:this._symbols[c%this._symbols.length]});this._polygons.set(h,e),t.push(e)}if(this.enableLabels){const s=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(i),c=n/(e.length-1),_=(0,a.Cc)(0,200,c),v=(0,a.Cc)(20,6,c)/.75,m=null!=i.loadPriority&&i.loadPriority>=e.length,A=new l.A([_,m?0:_,m?0:_]),f="3d"===this.view.type?()=>new d.A({verticalOffset:new u.A({screenLength:40/.75}),callout:new b.A({color:new l.A("white"),border:new w.A({color:new l.A("black")})}),symbolLayers:new r.A([new y.A({text:s,halo:{color:"white",size:1/.75},material:{color:A},size:v})])}):()=>new p.A({text:s,haloColor:"white",haloSize:1/.75,color:A,size:v}),T=this._labels.get(h);if(T){const e=f();null!=T.symbol&&JSON.stringify(e)===JSON.stringify(T.symbol)||(T.symbol=e)}else{const e=new o.A({geometry:g.extent.center,symbol:f()});this._labels.set(h,e),t.push(e)}}}));const i=new Array;s.forEach((e=>{const t=this._polygons.get(e);null!=t&&(i.push(t),this._polygons.delete(e));const s=this._labels.get(e);null!=s&&(i.push(s),this._labels.delete(e))})),this.view.graphics.removeMany(i),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,i._)([(0,h.MZ)({constructOnly:!0})],v.prototype,"view",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],v.prototype,"updating",void 0),(0,i._)([(0,h.MZ)()],v.prototype,"enabled",null),v=(0,i._)([(0,c.$)("esri.views.support.TileTreeDebugger")],v)}}]);
//# sourceMappingURL=4458.858ccb58.chunk.js.map