"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[6427],{86427:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(35143),a=r(50076),s=r(46053),o=(r(81806),r(76460),r(47249),r(85842)),l=r(9624),n=r(31933),p=r(31111),u=r(63646);let c=class extends u.A{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=(0,p.Qf)()}initialize(){var e;const{layer:t,view:r}=this;null!==(e=(0,n.BR)(t))&&void 0!==e&&e.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new a.A("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:t}))),null!=t.infoFor3D&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new a.A("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ".concat(t.geometryType))))),"mesh"!==t.geometryType||(0,l.canProjectWithoutEngine)(t.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e;return null===(e=this.view.featureTiles)||void 0===e||null===(e=e.tilingScheme)||void 0===e?void 0:e.spatialReference}};(0,i._)([(0,s.MZ)({constructOnly:!0})],c.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),(0,i._)([(0,s.MZ)()],c.prototype,"layer",void 0),c=(0,i._)([(0,o.$)("esri.views.3d.layers.FeatureLayerView3D")],c);const y=c}}]);
//# sourceMappingURL=6427.30ac28d7.chunk.js.map