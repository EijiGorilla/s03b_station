"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[1674],{53596:(e,t,r)=>{r.d(t,{DS:()=>n,J7:()=>i,w$:()=>s});const i="updating";function s(e){return"updating"===e?null:e}function n(e){return"updating"===e}},68383:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var i=r(35143),s=r(39356),n=r(91967),l=r(18690),o=r(19276),a=r(54901),u=r(76460),d=r(30726),h=r(50346),p=r(68134),c=r(46053),y=(r(81806),r(85842)),g=(r(9408),r(50076)),f=(r(47249),r(97216)),_=(r(57236),r(8203)),b=r(53430),v=r(97015),w=r(54099),F=r(5632),m=r(91291);const E=(e,t)=>{let r=class extends((0,m.g)((0,F.sA)(w.A.EventedMixin(e)))){constructor(e){super(e),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){var e;return!(null===(e=this.sublayer)||void 0===e||!e.visible)}set visible(e){this._overrideIfSome("visible",e)}get fullOpacity(){var e,t;const r=e=>null!=e?e:1;return r(null===(e=this.sublayer)||void 0===e?void 0:e.opacity)*r(null===(t=this.parent)||void 0===t?void 0:t.fullOpacity)}canResume(){var e,t;return!(null!==(e=this.parent)&&void 0!==e&&e.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)&&this.visible||!1}isUpdating(){return!1}};return(0,i._)([(0,c.MZ)()],r.prototype,"sublayer",void 0),(0,i._)([(0,c.MZ)()],r.prototype,"parent",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],r.prototype,"suspended",null),(0,i._)([(0,c.MZ)({type:Boolean,readOnly:!0})],r.prototype,"updating",null),(0,i._)([(0,c.MZ)()],r.prototype,"view",void 0),(0,i._)([(0,c.MZ)()],r.prototype,"visible",null),(0,i._)([(0,c.MZ)()],r.prototype,"fullOpacity",null),r=(0,i._)([(0,y.$)("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var x,M,A=r(57561),S=r(9561),V=r(55855),I=r(7342),L=r(51990);(M=x||(x={}))[M.Solid=0]="Solid",M[M.WireFrame=1]="WireFrame",M[M.XRay=2]="XRay";const C=.075;function D(e){switch(e.filterMode.type){case"solid":return{mode:x.Solid};case"wire-frame":return{mode:x.WireFrame,edgeMaterial:(0,I.Qo)(e.filterMode.edges,{})};case"x-ray":return{mode:x.XRay}}}function Z(e,t){if(null==t)return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case x.Solid:return;case x.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case x.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=.15,e.colorMixMode=L.k5.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=function(e){return null==e?null:(R.lastMaterial!==e&&(R.cachedMaterial=function(e){const t=(0,V.o8)(e.color);return t[3]*=C,{...e,color:t}}(e),R.lastMaterial=e),R.cachedMaterial)}(e.edgeMaterial))}}const R={cachedMaterial:null,lastMaterial:null};var O=r(15175),Q=r(92081),T=r(11149),q=r(68830),P=r(81068),B=r(74279),N=r(39097),k=r(50532);r(39299),r(15434),r(62754);class W extends n.A{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,c.MZ)()],W.prototype,"sublayer",void 0),(0,i._)([(0,c.MZ)()],W.prototype,"availableFields",null),(0,i._)([(0,c.MZ)()],W.prototype,"filter",null);var G=r(2257),H=r(59752);let U=class extends((0,k.P)((0,N.E)((0,A.n)(E(W))))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabledAndHasTemplate(){var e;return this.sublayer.popupEnabled&&(0,G.d0)(this.sublayer,null===(e=this.layerView)||void 0===e||null===(e=e.view.popup)||void 0===e?void 0:e.defaultPopupTemplateEnabled)}initialize(){this._updatingHandles.add((()=>this.mergedFilter),(e=>{null!=e&&Q._.checkSupport(e)?null==this._i3sFilter?this._i3sFilter=new Q._({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:e=>this._loadAsyncModule(e),addSqlFilter:(e,t)=>this.addSqlFilter(e,t,this.logError),addTimeFilter:(e,t)=>this.addTimeFilter(e,t)}):this._i3sFilter.viewFilter=e:this._i3sFilter=(0,d.pR)(this._i3sFilter)}),p.pc),this._updatingHandles.add((()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields,this.timeFilterFields]),(()=>this._updateRequiredFields())),this._updatingHandles.add((()=>this.sublayer.renderer),(e=>this._rendererChange(e)),p.Vh);const e=()=>this._filterChange();this._updatingHandles.add((()=>this.parsedDefinitionExpression),e),this._updatingHandles.add((()=>{var e;return null===(e=this._i3sFilter)||void 0===e?void 0:e.sortedObjectIds}),e),this._updatingHandles.add((()=>{var e;return null===(e=this._i3sFilter)||void 0===e?void 0:e.parsedWhereClause}),e),this._updatingHandles.add((()=>this.getTimeFilterDependencies()),e),this._updatingHandles.add((()=>this.mergedFilter),e),this._updatingHandles.add((()=>{var e,t;return[null===(e=this._i3sFilter)||void 0===e?void 0:e.parsedGeometry,null===(t=this.filter)||void 0===t?void 0:t.spatialRelationship]}),(()=>this._geometryFilterChange())),this._updatingHandles.add((()=>this.parsedFilterExpressions),(()=>this._updateSymbologyOverride()),p.Vh),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return"Overview"!==this.sublayer.modelName&&this.layerView?this.layerView.filterExpressions.map((e=>{let t,[r,i]=e;try{t=f.WhereClause.create(r,this.sublayer.fieldsIndex)}catch(l){return u.A.getLogger(this).error("Failed to parse filterExpression: "+l),null}if(!t.isStandardized)return u.A.getLogger(this).error("filterExpression is using non standard function"),null;const s=[],n=t.fieldNames;return(0,B.W)(n,this.sublayer.fields,{missingFields:s}),s.length>0?(u.A.getLogger(this).error("filterExpression references unknown fields: ".concat(s.join(", "))),null):[t,i]})).filter((e=>null!=e)):[]}get filter(){return this._get("filter")}set filter(e){this._set("filter",Q._.checkSupport(e)?e:null)}isUpdating(){var e,t;return super.isUpdating()||null!==(e=null===(t=this._i3sFilter)||void 0===t?void 0:t.updating)&&void 0!==e&&e}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride(((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return Z(r,s)}catch(D){this.logError(D)}return Z(r,null)}),this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return(0,b.DB)(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce(((e,t)=>{let[r]=t;return e.concat(r.fieldNames)}),new Array))}get timeFilterFields(){const{timeExtent:e}=this,{timeInfo:t,fieldsIndex:r}=this.sublayer;if(null==e||null==t)return[];const{startField:i,endField:s}=t;return(0,b.DB)(r,[i,s])}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...(0,b.hL)(t,i),...r]}return(0,b.DB)(t,r)}_createLayerGraphic(e){const t=new s.A(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeaturesFromGraphics(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(0===e.length)return[];const i=[],s=[],n=null!=this.sublayer.associatedLayer?await this.sublayer.associatedLayer.load(t):this.sublayer,l=(0,b.hL)(this.sublayer.fieldsIndex,await(0,G.TO)(n,(0,G.D8)(this.sublayer,t)));(0,h.Te)(t);const o=new Set;for(const a of e)(0,b.Q1)(l,a,o)?s.push(a):i.push(a);return 0===s.length?i:(null!=this.sublayer.associatedLayer&&await this.sublayer.associatedLayer.load().catch((()=>u.A.getLogger(this).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes."))),this.whenGraphicAttributes(s,Array.from(o)).catch((e=>((0,h.QP)(e),s))).then((e=>i.concat(e))))}async _updateRequiredFields(){const e=(0,b.DB)(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields,...this.filterExpressionFields,...this.timeFilterFields]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?(0,G.D8)(t,e)?void 0:new g.A("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new g.A("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){var e;const t=super.getFilters();return this.addSqlFilter(t,this.parsedDefinitionExpression,this.logError),null!==(e=this._i3sFilter)&&void 0!==e&&e.addFilters(t,this.view,this._controller.crsIndex,this._collection),t}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return null!=this.filter?this.filter.createQuery(e):new v.A(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal).then((e=>{if(null===e||void 0===e||!e.features)return e;const t=this.sublayer,r=t.layer;for(const i of e.features)i.layer=r,i.sourceLayer=t;return e}))}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),null===t||void 0===t?void 0:t.signal)}_ensureQueryEngine(){return null==this._queryEngine&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=(0,O.V7)(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new T._({layerView:this,priority:H.W6.FEATURE_QUERY_ENGINE,spatialIndex:new P.D({featureAdapter:new q.n({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(e,t)=>this._forAllFeatures(((t,r,i)=>e({id:t,index:r,meta:i})),t,S.fe.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:(0,B.Rm)(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(null==e?this.createQuery():v.A.from(e))}};(0,i._)([(0,c.MZ)()],U.prototype,"i3slayer",null),(0,i._)([(0,c.MZ)()],U.prototype,"layerView",void 0),(0,i._)([(0,c.MZ)()],U.prototype,"lodFactor",null),(0,i._)([(0,c.MZ)({readOnly:!0})],U.prototype,"parsedFilterExpressions",null),(0,i._)([(0,c.MZ)({type:_.A})],U.prototype,"filter",null),(0,i._)([(0,c.MZ)()],U.prototype,"_i3sFilter",void 0),(0,i._)([(0,c.MZ)({type:[String],readOnly:!0})],U.prototype,"filterExpressionFields",null),(0,i._)([(0,c.MZ)({type:[String],readOnly:!0})],U.prototype,"timeFilterFields",null),(0,i._)([(0,c.MZ)({type:[String],readOnly:!0})],U.prototype,"requiredFields",void 0),(0,i._)([(0,c.MZ)({type:[String],readOnly:!0})],U.prototype,"availableFields",null),U=(0,i._)([(0,y.$)("esri.views.3d.layers.BuildingComponentSublayerView3D")],U);const j=U;var z=r(83491),$=r(93938),X=r(91196);class J extends X.A{constructor(e){super(e),this.layer=null,this.sublayerViews=null}highlight(e){throw new Error("Not implemented")}}(0,i._)([(0,c.MZ)()],J.prototype,"layer",void 0),(0,i._)([(0,c.MZ)()],J.prototype,"sublayerViews",void 0);const Y=E(n.A);let K=class extends((0,z.w)(J)){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new o.A,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map,this.ignoresMemoryFactor=!1}get filterExpression(){var e;const t=this.layer.activeFilterId,r=null!=t?this.layer.filters.find((e=>e.id===t)):null,i=null!=r?null===(e=r.filterBlocks)||void 0===e?void 0:e.find((e=>"solid"===e.filterMode.type)):null;return i?i.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=null!=e?this.layer.filters.find((t=>t.id===e)):null;return null!==t&&void 0!==t&&t.filterBlocks?t.filterBlocks.toArray().map((e=>{var t;return[null!==(t=e.filterExpression)&&void 0!==t?t:"",D(e)]})):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce(((e,t)=>e+t.updatingProgress),0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some((e=>e.updating))}initialize(){(0,B.mR)(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach((e=>e.destroy())),this.sublayerViews=null),this._abortController=(0,d.DC)(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach((e=>{if(!e.isEmpty)if("building-group"===e.type){const r=new Y({sublayer:e,view:i,parent:t});this._initializeSubLayerViews(e.sublayers,r)}else"mesh"===e.geometryType&&(this._loadingComponents++,e.load({signal:this._abortController.signal}).then((()=>{const s=new j({sublayer:e,layerView:r,view:i,parent:t});this.sublayerViews.push(s);const n=this._pendingWhenSublayerViews.get(e);if(n){for(const e of n)e.resolve(s);this._pendingWhenSublayerViews.delete(e)}this.addHandles([(0,p.wB)((()=>s.updating),(()=>this.notifyChange("updating")),p.pc),(0,p.wB)((()=>s.updatingProgress),(()=>this.notifyChange("updatingProgressValue")),p.pc)])})).catch((t=>{(0,h.zf)(t)||u.A.getLogger(this).error("Error while creating view for sublayer ".concat(e.id,"\nLayer: ").concat(this.layer.url,"\n"),t)})).then((()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")})))}))}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeaturesFromGraphics(e,t){if(0===e.length)return[];const r=(0,l.L1)(e,(e=>e.sourceLayer)),i=[];for(const[n,l]of r){const e=this._findComponent(n);null!=e&&i.push(e.fetchPopupFeaturesFromGraphics(l,t))}const s=await(0,h.nA)(i);return(0,h.Te)(t),s.flat()}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return null==t?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(null!=t)return t;const r=this._pendingWhenSublayerViews.get(e),i=(0,h.Tw)();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find((t=>e===t.sublayer))}highlight(e){e instanceof s.A?e=[e]:e instanceof o.A&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof s.A){const r=e,i=new Map;for(const e of r){let t=i.get(e.sourceLayer);null==t&&(t=[],i.set(e.sourceLayer,t)),t.push(e)}this.sublayerViews.forEach((e=>{const r=i.get(e.sublayer);r&&t.push(e.highlight(r))}))}return(0,a.vE)(t)}get usedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.usedMemory),0)}get unloadedMemory(){return this.sublayerViews.reduce(((e,t)=>e+t.unloadedMemory),0)}};(0,i._)([(0,c.MZ)()],K.prototype,"sublayerViews",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],K.prototype,"filterExpression",null),(0,i._)([(0,c.MZ)({readOnly:!0})],K.prototype,"filterExpressions",null),(0,i._)([(0,c.MZ)($.S)],K.prototype,"updatingProgress",void 0),(0,i._)([(0,c.MZ)({readOnly:!0,dependsOn:[]})],K.prototype,"updatingProgressValue",null),K=(0,i._)([(0,y.$)("esri.views.3d.layers.BuildingSceneLayerView3D")],K);const ee=K},39097:(e,t,r)=>{r.d(t,{E:()=>u});var i=r(35143),s=r(76460),n=r(46053),l=(r(81806),r(47249),r(85842)),o=r(97216),a=r(74279);const u=e=>{let t=class extends e{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&s.A.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&s.A.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(null===(e=this.i3slayer)||void 0===e||!e.definitionExpression)return null;try{const e=o.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return s.A.getLogger(this).error("definitionExpression is using non standard function"),null;const t=[],r=e.fieldNames;return(0,a.W)(r,this.i3slayer.fields,{missingFields:t}),t.length>0?(s.A.getLogger(this).error("definitionExpression references unknown fields: ".concat(t.join(", "))),null):(this._definitionExpressionErrors=0,e)}catch(t){return s.A.getLogger(this).error("Failed to parse definitionExpression: "+t),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(r){return this.logError(r),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="(".concat(t,") AND (").concat(r.where,")"):r.where=t,r}};return(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"parsedDefinitionExpression",null),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"definitionExpressionFields",null),t=(0,i._)([(0,l.$)("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],t),t}},50532:(e,t,r)=>{r.d(t,{P:()=>d});var i=r(35143),s=r(46053),n=(r(81806),r(76460),r(47249),r(85842)),l=r(23478),o=r(95363),a=r(8203),u=r(74279);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null}get mergedFilter(){var e,t,r;const{filter:i,timeExtent:s}=this;if(null==s)return i;const n=null!==(e=null===i||void 0===i?void 0:i.clone())&&void 0!==e?e:new a.A;return null!=s&&(n.timeExtent=null!==(t=null===(r=n.timeExtent)||void 0===r?void 0:r.intersection(s))&&void 0!==t?t:s),n}getTimeFilterDependencies(){const{timeInfo:e}=this.i3slayer;if(null==e)return[];const{startField:t,endField:r}=e;return[t,r]}addTimeFilter(e,t){if(null==t)return;const{timeInfo:r}=this.i3slayer;if(null==r)return;const{startField:i,endField:s,useTime:n}=r;if(!n||null==i&&null==s)return;const l=r.toJSON(),o=t.toJSON();e.push(((e,t)=>this._timeFilter(e,t,l,o)))}_timeFilter(e,t,r,i){var s;const n=null===(s=t.attributeInfo)||void 0===s?void 0:s.attributeData;if(null==n)return;const{startTimeField:o,endTimeField:a}=r;if(null!=o&&null==n[o]||null!=a&&null==n[a])return;const d=(0,l.I)(r,i,new h(n));if(null==d)return;const{featureIds:p}=t;(0,u.$i)(e,p,d)}};return(0,i._)([(0,s.MZ)(o.ui)],t.prototype,"timeExtent",void 0),(0,i._)([(0,s.MZ)()],t.prototype,"mergedFilter",null),t=(0,i._)([(0,n.$)("esri.views.3d.layers.support.TemporalSceneLayerView")],t),t};class h{constructor(e){this.attributeData=e}getAttribute(e,t){return(0,u.E5)(this.attributeData[t],e)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return"string"==typeof r?new Date(r).getTime():"number"==typeof r||null==r?r:null}}}}]);
//# sourceMappingURL=1674.eac9f833.chunk.js.map