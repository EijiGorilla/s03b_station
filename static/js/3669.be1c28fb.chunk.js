"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[3669],{83491:(e,s,t)=>{t.d(s,{w:()=>h});var i=t(35143),a=t(54901),l=t(50346),r=t(68134),o=t(46053),n=(t(81806),t(76460),t(47249),t(85842)),d=t(47700);const h=e=>{let s=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,s=e.signal;this.addHandles((0,a.hA)((()=>e.abort()))),await(0,r.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),s),(0,l.Te)(s);const t=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(t)throw t}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return s&&s.minScale&&s.maxScale&&s.minScale<s.maxScale&&(e.outsideScaleRange=!0),e}};return(0,i._)([(0,o.MZ)()],s.prototype,"view",void 0),(0,i._)([(0,o.MZ)()],s.prototype,"slicePlaneEnabled",void 0),s=(0,i._)([(0,n.$)("esri.views.3d.layers.LayerView3D")],s),s}},53669:(e,s,t)=>{t.r(s),t.d(s,{default:()=>M});var i,a,l=t(35143),r=(t(35238),t(50076)),o=t(76460),n=t(68134),d=t(46053),h=(t(81806),t(47249),t(85842)),u=t(20664),c=t(9392),p=t(14487),y=t(42294),v=t(80963),w=t(83491),b=t(60704),g=t(65768),_=t(58698),m=t(91196),S=t(90992),f=t(13312);(a=i||(i={}))[a.API=1]="API",a[a.VerboseAPI=2]="VerboseAPI",a[a.Error=3]="Error";const V=(0,c.vt)(),W=(0,c.vt)();let I=class extends((0,_.R)((0,w.w)(m.A))){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e,s;return null!==(e=null===(s=this.layer.parsedUrl)||void 0===s?void 0:s.path)&&void 0!==e?e:""}get wasmLayerId(){return this._wasmLayerId}initialize(){var e;if(this._dbgFlags.add(i.Error),"local"!==this.view.viewingMode)throw new r.A("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(null===(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||void 0===e||!e.textureFloat)throw new r.A("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const s=this.layer.spatialReference;if(!(0,v.aI)(s,this.view.spatialReference))throw new r.A("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const t=this.layer.currentVariableId,a=this.layer.getVolume(t),l=this.layer.getVariable(t);if(null!=a&&null!=l){const e=a.dimensions[0],s=a.dimensions[1],t=a.zDimension;if(t>1){const i=a.dimensions[t],r=e.size*s.size*i.size;let o=1;switch(l.renderingFormat.type){case"Int16":case"UInt16":o=2;break;case"Int32":case"UInt32":case"Float32":o=4}this._futureMemory=o*r}}const o=(0,b.Bk)(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=(0,n.wB)((()=>this.suspended),(e=>{const s=(0,b.ds)(this.view);s&&s.setEnabled(this,!e)}),n.Vh),this.addHandles([(0,n.wB)((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),(0,n.wB)((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),(0,n.wB)((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),(0,n.wB)((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),(0,n.wB)((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),(0,n.wB)((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),(0,n.wB)((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),(0,n.wB)((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),(0,n.wB)((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e))),(0,n.wB)((()=>this.slicePlaneEnabled),(e=>this._pushAnalysisSliceToWasm(e,this.view.slicePlane))),(0,n.wB)((()=>this.view.slicePlane),(e=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,e))),(0,n.wB)((()=>this.layer.minScale),(e=>this._onScaleUpdated(this.view.scale,e,this.layer.maxScale)),n.Vh),(0,n.wB)((()=>this.layer.maxScale),(e=>this._onScaleUpdated(this.view.scale,this.layer.minScale,e)),n.Vh),(0,n.wB)((()=>this.view.scale),(e=>this._onScaleUpdated(e,this.layer.minScale,this.layer.maxScale)),n.Vh)])})).catch((e=>{if((0,b.r8)(this),this._wasmLayerId=-1,-1===e)throw new r.A("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new r.A("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(o)}destroy(){(0,b.r8)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=(0,b.ds)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new g.P(this.usedMemory)}whenGraphicBounds(e,s){const t=e.attributes["Voxel.WorldPosition"];if(t){const e=(0,y.Ie)(),s=JSON.parse(t);if((0,p.F)(s,this.view.renderSpatialReference,W,this.view.spatialReference||f.A.WGS84))return(0,y.iT)(e,W),Promise.resolve({boundingBox:e,screenSpaceObjects:[]})}return Promise.reject()}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=(0,b.ds)(this.view);null===e||void 0===e||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=(0,b.ds)(this.view);null===e||void 0===e||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){var e;const s=(0,b.ds)(this.view);return null!==(e=null===s||void 0===s?void 0:s.getLayerTimes(this))&&void 0!==e?e:[]}getCurrentLayerTimeIndex(){var e;const s=(0,b.ds)(this.view);return null!==(e=null===s||void 0===s?void 0:s.getCurrentLayerTimeIndex(this))&&void 0!==e?e:0}_pushRenderModeToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setRenderMode(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setStaticSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setCurrentVariable(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setVariableStyles(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,s){const t=null!=s?s:this.layer.enableSlices;for(let i=0;i<e.length;++i){const s=e[i];for(const e of s.slices)e.enabled=e.enabled&&t}}_pushVolumeStylesToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s&&(this._accountForEnableSlices(e,null),s.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,s){const t=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(t?"have WASM":"don't have WASM!!!"));let a=!1;if(t){if(s){const i=s.origin;(0,u.b)(V,s.basis1,s.basis2),(0,u.n)(V,V),a=t.setAnalysisSlice(this,e,i,V)}else(0,u.s)(V,0,0,1),a=t.setAnalysisSlice(this,!1,V,V);a||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_pushEnableDynamicSectionsToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableDynamicSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const s=(0,b.ds)(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),s){const t=this.layer.getVolumeStyles();this._accountForEnableSlices(t,e),s.setVolumeStyles(this,t)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableIsosurfaces(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const s=(0,b.ds)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(s?"have WASM":"don't have WASM!!!")),(null===s||void 0===s?void 0:s.setEnableSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}_onScaleUpdated(e,s,t){const i=(0,S.JU)(e,s,t),a=(0,b.ds)(this.view);a&&a.setIsInScaleRange(this,i)}async whenGraphicAttributes(e,s){return e}_dbg(e,s){this._dbgFlags.has(e)&&(e===i.Error?o.A.getLogger(this).error(s):o.A.getLogger(this).warn(s))}};(0,l._)([(0,d.MZ)()],I.prototype,"layer",void 0),(0,l._)([(0,d.MZ)()],I.prototype,"baseUrl",null),(0,l._)([(0,d.MZ)({type:Boolean})],I.prototype,"slicePlaneEnabled",void 0),I=(0,l._)([(0,h.$)("esri.views.3d.layers.VoxelLayerView3D")],I);const M=I},58698:(e,s,t)=>{t.d(s,{R:()=>n});var i=t(35143),a=t(50076),l=(t(76460),t(81806),t(47249),t(85842)),r=t(53430),o=t(2257);const n=e=>{let s=class extends e{_validateFetchPopupFeatures(e){const{layer:s}=this,{popupEnabled:t}=s;if(!t)throw new a.A("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:s});if(!(0,o.D8)(s,e))throw new a.A("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:s})}async prepareFetchPopupFeatures(e){}async fetchPopupFeaturesFromGraphics(e,s){if(this._validateFetchPopupFeatures(s),0===e.length)return[];const t="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=(0,r.hL)(this.layer.fieldsIndex,await(0,o.TO)(t,(0,o.D8)(this.layer,s)))),await this.prepareFetchPopupFeatures(i);const a=new Set,l=[],n=[];for(const o of e)(0,r.Q1)(i,o,a)?n.push(o):l.push(o);if(0===n.length)return l;const d=new Map;for(let r=0;r<e.length;r++){var h;d.set(null!==(h=e[r].getObjectId())&&void 0!==h?h:0,r)}const u=await this.whenGraphicAttributes(n,[...a]).catch((()=>n)).then((e=>l.concat(e)));return u.sort(((e,s)=>{var t,i,a,l;const r=null!==(t=e.getObjectId())&&void 0!==t?t:0,o=null!==(i=d.get(r))&&void 0!==i?i:0,n=null!==(a=s.getObjectId())&&void 0!==a?a:0;return o-(null!==(l=d.get(n))&&void 0!==l?l:0)})),u}};return s=(0,i._)([(0,l.$)("esri.views.3d.layers.support.PopupSceneLayerView")],s),s}},91196:(e,s,t)=>{t.d(s,{A:()=>y});var i=t(35143),a=t(91967),l=t(54099),r=t(5632),o=t(76460),n=t(30726),d=t(91291),h=t(46053),u=(t(81806),t(47249),t(85842)),c=t(19451);let p=class extends((0,r.sA)((0,d.g)(l.A.EventedMixin(a.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var s;const t=this.layer&&this.layer.id||"no id",i=(null===(s=this.layer)||void 0===s?void 0:s.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(t,"')"),e)}}))}destroy(){this._updatingHandles=(0,n.pR)(this._updatingHandles)}get fullOpacity(){var e,s,t,i;return(null!==(e=null===(s=this.layer)||void 0===s?void 0:s.opacity)&&void 0!==e?e:1)*(null!==(t=null===(i=this.parent)||void 0===i?void 0:i.fullOpacity)&&void 0!==t?t:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,s,t;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(s=this.parent)&&void 0!==s&&s.suspended)&&(null===(t=this.view)||void 0===t?void 0:t.ready)||!1}getSuspendInfo(){var e,s;const t=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(s=this.view)&&void 0!==s&&s.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};(0,i._)([(0,h.MZ)()],p.prototype,"fullOpacity",null),(0,i._)([(0,h.MZ)()],p.prototype,"layer",void 0),(0,i._)([(0,h.MZ)()],p.prototype,"parent",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,i._)([(0,h.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,i._)([(0,h.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,i._)([(0,h.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,i._)([(0,h.MZ)()],p.prototype,"visible",null),(0,i._)([(0,h.MZ)()],p.prototype,"view",void 0),p=(0,i._)([(0,u.$)("esri.views.layers.LayerView")],p);const y=p}}]);
//# sourceMappingURL=3669.be1c28fb.chunk.js.map