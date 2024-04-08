"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[9766],{21479:(e,t,i)=>{i.d(t,{f:()=>a});var n=i(20664),r=i(482),s=i(14556),o=i(80963);function a(e,t,i,a){if(null==t||null==a)return!1;const l=(0,r.Qk)(t,r.Wv),d=(0,r.Qk)(a,r.zp);if(l===d&&l!==r.rz.UNKNOWN||(0,o.aI)(t,a))return i[0]=1,i[1]=1,i[2]=1,!0;if(l===r.rz.SPHERICAL_ECEF){const t=(0,n.l)(e),o=t/Math.sqrt(e[0]*e[0]+e[1]*e[1]),a=t/s.$O.radius;if(d===r.rz.WEB_MERCATOR)return i[0]=o*a,i[1]=o*a,i[2]=1,!0;if(d===r.rz.WGS84||d===r.rz.CGCS2000){const e=r.iE;return i[0]=e*o*a,i[1]=e*a,i[2]=1,!0}}else if(l===r.rz.PLATE_CARREE){if(d===r.rz.WGS84||d===r.rz.CGCS2000)return i[0]=r.iE,i[1]=r.iE,i[2]=1,!0;if(d===r.rz.WEB_MERCATOR){const t=e[1]/s.$O.radius;return i[0]=1,i[1]=1/Math.cos(t),i[2]=1,!0}}return!1}},79115:(e,t,i)=>{i.d(t,{z:()=>a});var n=i(15941),r=i(9392),s=i(482),o=i(14556);function a(e,t,i,n){if(null==t||null==n)return!1;const r=(0,s.t_)(t,n,c);if(r.projector===s.pO)return i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],!0;if(null==r.projector)return!1;const{source:a,dest:u}=r;if(u.spatialReferenceId===s.rz.WEB_MERCATOR){const t=s.w5[a.spatialReferenceId][s.rz.WGS84];return null!=t&&(t(e,0,d,0),(0,s.s7)(d,0,i,0),i[3]=l(d[1],e[2],e[3],o.$O.radius),!0)}if(a.spatialReferenceId!==s.rz.WGS84&&a.spatialReferenceId!==s.rz.CGCS2000||u.spatialReferenceId!==s.rz.PLATE_CARREE){var h,p;r.projector(e,0,i,0);const t=null!==(h=a.metersPerUnit)&&void 0!==h?h:1,n=null!==(p=u.metersPerUnit)&&void 0!==p?p:1;i[3]=e[3]*t/n}else{const t=s.w5[a.spatialReferenceId][s.rz.SPHERICAL_ECEF],n=s.w5[s.rz.SPHERICAL_ECEF][s.rz.PLATE_CARREE];let d=e[3];null!=t&&null!=n&&(d=l(e[1],e[2],e[3],o.$O.radius)),r.projector(e,0,i,0),i[3]=d}return!0}function l(e,t,i,n){const r=n+t;if(r<n/2||i>r)return Number.MAX_VALUE;const s=Math.abs(u*e)+Math.asin(i/r);return s>=Math.PI/2?Number.MAX_VALUE:i/Math.cos(s)}const d=(0,r.vt)(),c=(0,s.Ur)(),u=(0,n.kU)(1)},28586:(e,t,i)=>{var n,r,s,o,a,l,d,c,u,h,p,m,v,f,g;i.d(t,{CP:()=>s,EF:()=>f,El:()=>d,LU:()=>n,Nt:()=>c,Pl:()=>y,Qg:()=>g,TJ:()=>v,_N:()=>a,eN:()=>o,h7:()=>r,vE:()=>b}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(n||(n={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(r||(r={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(s||(s={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(o||(o={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(d||(d={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(c||(c={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(h||(h={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(p||(p={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(m||(m={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(v||(v={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(f||(f={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(g||(g={}));const y=-1,b=-2},99766:(e,t,i)=>{i.r(t),i.d(t,{default:()=>le});var n=i(35143),r=i(50076),s=i(76460),o=i(30726),a=i(68134),l=i(52394),d=i(46053),c=(i(81806),i(47249),i(85842)),u=i(86300),h=i(44680),p=i(34761),m=i(13191),v=i(20664),f=i(9392),g=i(55855),y=i(34111),b=i(5809),_=i(21479),w=i(14487),E=i(88105),x=i(28586),M=i(59097),C=i(64465),R=i(65768);class P extends R.P{constructor(e,t,i,n,r,s,o){super(e,0,0,0,t),this.nodesCached=i,this.vboMB=n,this.textureMB=r,this.vboMBCached=s,this.textureMBCached=o}}var T=i(57662),S=i(83491),U=i(75228),N=i(35493),O=i(83490),I=i(93345);const A={[x.El.Points]:null,[x.El.Lines]:null,[x.El.LineStrip]:null,[x.El.Triangles]:I.WR.TRIANGLES,[x.El.TriangleStrip]:I.WR.TRIANGLE_STRIP,[x.El.NotSet]:null},L={[x._N.Opaque]:O.sf.Opaque,[x._N.Mask]:O.sf.Mask,[x._N.Blend]:O.sf.Blend},F={[x.TJ.Back]:O.s2.Back,[x.TJ.Front]:O.s2.Front,[x.TJ.None]:O.s2.None,[x.TJ.NotSet]:O.s2.Back},H={[x.Nt.WrapYBit]:{s:I.pF.CLAMP_TO_EDGE,t:I.pF.REPEAT},[x.Nt.WrapXBit]:{s:I.pF.REPEAT,t:I.pF.CLAMP_TO_EDGE},[x.Nt.WrapXy]:{s:I.pF.REPEAT,t:I.pF.REPEAT},[x.Nt.None]:{s:I.pF.CLAMP_TO_EDGE,t:I.pF.CLAMP_TO_EDGE},[x.Nt.NotSet]:{s:I.pF.CLAMP_TO_EDGE,t:I.pF.CLAMP_TO_EDGE}},B={[x.LU.U8]:1,[x.LU.I8]:1,[x.LU.U16]:2,[x.LU.I16]:2,[x.LU.U32]:4,[x.LU.I32]:4,[x.LU.F32]:4,[x.LU.F64]:8,[x.LU.Utf8String]:1,[x.LU.NotSet]:1};var V=i(39356),z=i(45270),D=i(29808),j=i(3112);class k{constructor(e){this.layerUid=[],this.type=j.dz.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,t,i,n){const r=e.results,s=e.options.store===j.oH.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const o=this.layerView.view._stage.renderView.componentObjectCollection;this.layerView.objects.forEach((a=>{a.visible&&a.intersectionGeometry&&o.intersect(a,i,n,e.tolerance,null,((o,a,l,d)=>{if(a>=0){if(null!=t&&!t(i,n,a))return;const o=e=>{const t=new z.kV(this.layerView.layer.uid,(()=>this._createTiles3DGraphic(this.layerView.layer,{})));e.set(this.type,t,a,l)};if(this.isGround&&(null==r.ground.dist||a<r.ground.dist)&&o(r.ground),e.options.isFiltered)return;if((null==r.min.dist||a<r.min.dist)&&o(r.min),(null==r.max.dist||a>r.max.dist)&&o(r.max),s){const t=(0,D.G7)(e.ray);o(t),e.results.all.push(t)}}}))}))}_createTiles3DGraphic(e,t){return new V.A({layer:e,sourceLayer:e,attributes:t})}}var G,W,Z=i(95225),J=i(59231),X=i(16449),q=i(91555),$=i(657),Y=i(97808),K=i(81148),Q=i(50468),ee=i(25672),te=i(96897),ie=i(66470),ne=i(52757),re=i(91196);(W=G||(G={}))[W.API=1]="API",W[W.VerboseAPI=2]="VerboseAPI",W[W.Error=3]="Error";class se{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function oe(e){return Math.round(e/1048.576)/1e3}let ae=class extends((0,S.w)(re.A)){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=T.sv.WithoutRasterImage,this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(G.Error),this._dbg(G.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new r.A("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const e=(0,U.Bk)(this).then((e=>{this._intersectionHandler=new k(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add((()=>this.slicePlaneEnabled),(e=>this._slicePlaneEnabledChange(e))),this._elevationProvider=new N.e({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const t=this.view.resourceController.memoryController.newCache("t3d-".concat(this.uid),(e=>this._onRemoveFromCache(e)));this._memCache=t,this._suspendedHandle=(0,a.wB)((()=>this.suspended),(e=>{const t=(0,U.pw)(this.view);t&&t.setEnabled(this,!e)}),a.Vh),this.addHandles([(0,a.wB)((()=>this.layer.elevationInfo),(e=>this._elevationInfoChanged(e)))])})).catch((e=>{if((0,U.r8)(this),this._wasmLayerId=-1,e===x.Pl)throw new r.A("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===x.vE)throw new r.A("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})}));this.addResolvingPromise(e)}destroy(){this._dbg(G.VerboseAPI,"Tiles3DLayerView3D destroy() called"),(0,U.r8)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach((e=>this.freeObject(e))),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=(0,o.pR)(this._memCache),this._updatingHandles=(0,o.pR)(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){null==this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle=(0,l._)((()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null})))}_slicePlaneEnabledChange(e){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=e),this.objects.forEach((t=>{const i=this._collection.getMaterial(t);i.commonMaterialParameters.hasSlicePlane=e,i.commonMaterialParameters.cullFace=e?O.s2.None:this._initialCullFace.get(t)}))}_elevationInfoChanged(e){var t;const i=null!==(t=null===e||void 0===e?void 0:e.offset)&&void 0!==t?t:0,n=null!==e&&void 0!==e&&e.unit?(0,M.Ao)(null===e||void 0===e?void 0:e.unit):1,r=(0,U.pw)(this.view);r&&r.setLayerOffset(this,i*n)}get _obbs(){return this.objects.map((e=>this._collection.getComponentObb(e)))}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible&&(e+=t.totalMemory())})),e}get unloadedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible||(e+=t.totalMemory())})),e}get performanceInfo(){let e=0,t=0,i=0,n=0,r=0,s=0;return this._lyrHandleToObjects.forEach((o=>{o.isVisible?(e+=o.texMemoryUsage,t+=o.vboMemoryUsage,r++):(i+=o.texMemoryUsage,n+=o.vboMemoryUsage,s++)})),new P(this.usedMemory,r,s,oe(t),oe(e),oe(n),oe(i))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===C.RT.Local){var e,t,i;const n=null!==(e=this.view.renderSpatialReference)&&void 0!==e&&e.isWebMercator?3857:null!==(t=null===(i=this.view.renderSpatialReference)||void 0===i?void 0:i.wkid)&&void 0!==t?t:-1;if(3857!==n&&32662!==n)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){var e,t,i;return(null!==(e=null===(t=this.layer.elevationInfo)||void 0===t?void 0:t.offset)&&void 0!==e?e:0)*(null!==(i=this.layer.elevationInfo)&&void 0!==i&&i.unit?(0,M.Ao)(this.layer.elevationInfo.unit):1)}get elevationRange(){const e=this.fullExtent;return null!==e&&void 0!==e&&e.zmin&&null!==e&&void 0!==e&&e.zmax?new Z.H(e.zmin,e.zmax):null}getElevationRange(e){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce(((e,t)=>e.concat(t.components)),new Array)}isUpdating(){const e=(0,U.pw)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(e){const t=e.meshData;if(null==t.data)throw new Error("meshData.data undefined");if(t.desc=JSON.parse(t.desc),null==t.desc)throw new Error("meshData.desc undefined");const i=(0,f.ci)(t.desc.origin),n=new Array,r=new Map,s=new se;s.handle=e.handle,this._lyrHandleToObjects.set(e.handle,s);const o=this.view.basemapTerrain.spatialReference;let a,l;if("global"===this.view.viewingMode){const e=(0,m.vt)();(0,b.l)(y.fv,i,e,o),a=(0,u.z0)((0,h.vt)(),e),l=(0,u.B8)((0,h.vt)(),a)}else a=h.zK,l=h.zK;const d=(0,m.vt)();(0,p.Tl)(d,d,i);const c=(0,p.sC)((0,f.vt)(),d);let E=null;const M=(0,f.vt)();for(let u=0;u<t.desc.prims.length;u++){const e=t.desc.prims[u];if(e.ptype!==x.El.Lines||null==t.data)continue;const{positionView:n,positionAttr:r,indicesView:s}=this.getBufferViews(e,t.data.buffer,a,!1);null!=r&&null!=n&&null!=s&&(E=(0,J.OX)(r),(0,v.g)(M,E.center,i),E.center=M)}for(let u=0;u<t.desc.prims.length;u++){var C;const e=t.desc.prims[u];if(this._dbg(G.VerboseAPI,JSON.stringify(e)),e.ptype===x.El.Lines)continue;if(null==A[e.ptype]||null==t.data){this._dbg(G.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+e.ptype+"). Skipping primitive.");continue}const d=null!==(C=t.desc)&&void 0!==C&&C.materials&&null!=e.materialId?t.desc.materials[e.materialId]:null,p=null!=d?d.lightingModel:x.EF.Unlit,m=p!==x.EF.Unlit,{positionView:y,positionAttr:b,normalsView:R,normalsAttr:P,colorAttr:T,texCoord0Attr:S,indicesView:U}=this.getBufferViews(e,t.data.buffer,a,m);if(null==b||null==y||null==U)continue;const N={colors:null!=T,textureCoordinates:null!=S?Y.q.Default:Y.q.None,hasNormals:null!=R,needsNormals:m},I=b.data.length/b.size,H=(e,t)=>!e||e.data.length/e.size===I||(this._dbg(G.Error,"".concat(t," !== numPos. Skipping primitive.")),!1);if(!H(S,"numTexcoord")||!H(T,"numColors")||!H(P,"normals"))continue;const B=(0,X.h)(N);let V;if(null!=E?V=E.clone():(V=(0,J.OX)(b),(0,v.g)(M,V.center,i),V.center=M),a!==h.zK)for(let t=0;t<y.count;t++)y.getVec(t,M),(0,v.t)(M,M,a),y.setVec(t,M);const z=B.createBuffer(b.data.length),D=new Map([[ie.r.POSITION,b]]);null!=S&&D.set(ie.r.UV0,S),null!=T&&D.set(ie.r.COLOR,T),null!=P&&D.set(ie.r.NORMALCOMPRESSED,P),D.forEach(((e,t)=>{null!=e&&(0,ne.zC)(t,e,null,null,z,0)}));const j=new Uint32Array([0,U.typedBuffer.length]),k={vertices:{data:z.buffer,count:z.byteLength/B.stride,layoutParameters:N},positionData:{positions:y.typedBuffer,indices:U.typedBuffer},indices:U.typedBuffer,componentOffsets:j};s.cpuMemoryUsage+=y.count,s.cpuMemoryUsage+=U.count;const W=this.view.renderSpatialReference,Z=(0,f.vt)(),$=[1,1,1];(0,_.f)(c,W,$,o)||this._dbg(G.Error,"Unsupported coordinate system for IM overlay"),(0,w.F)(c,W,Z,o);const Q=this._collection.createObject({toMapSpace:(0,g.fA)(Z[0],Z[1],$[0],$[1]),geometry:k,obb:V,transform:{position:c,rotationScale:l}});d&&this._collection.updateMaterial(Q,(e=>{var i,o;e.baseColor=d.baseColorFactor,e.usePBR=p===x.EF.Pbr,e.hasParametersFromSource=!1,e.baseColorTexture=this._getTexture(d.baseColorTex,t,r),e.usePBR&&(e.mrrFactors=[d.metallicFactor,d.roughnessFactor,0],e.emissiveFactor=null!==(i=d.emissiveFactor)&&void 0!==i?i:[0,0,0],e.metallicRoughnessTexture=this._getTexture(d.metalTex,t,r),e.emissionTexture=this._getTexture(d.emissiveTex,t,r),e.occlusionTexture=this._getTexture(d.occlusionTex,t,r),e.normalTexture=this._getTexture(d.normalTex,t,r)),e.objectOpacity=0,e.alphaDiscardMode=O.sf.Mask;const a=[];e.baseColorTexture&&a.push(e.baseColorTexture.loadPromise),e.usePBR&&e.metallicRoughnessTexture&&a.push(e.metallicRoughnessTexture.loadPromise),e.usePBR&&e.emissionTexture&&a.push(e.emissionTexture.loadPromise),e.usePBR&&e.occlusionTexture&&a.push(e.occlusionTexture.loadPromise),e.usePBR&&e.normalTexture&&a.push(e.normalTexture.loadPromise);const l=Promise.all(a);n.push(l),l.then((()=>{var t,i,n,r,o;e.alphaDiscardMode=L[d.alphaMode],e.objectOpacity=1,s.texMemoryUsage+=(null===(t=e.baseColorTexture)||void 0===t||null===(t=t.glTexture)||void 0===t?void 0:t.usedMemory)||0,e.usePBR&&(s.texMemoryUsage+=(null===(i=e.metallicRoughnessTexture)||void 0===i||null===(i=i.glTexture)||void 0===i?void 0:i.usedMemory)||0,s.texMemoryUsage+=(null===(n=e.emissionTexture)||void 0===n||null===(n=n.glTexture)||void 0===n?void 0:n.usedMemory)||0,s.texMemoryUsage+=(null===(r=e.occlusionTexture)||void 0===r||null===(r=r.glTexture)||void 0===r?void 0:r.usedMemory)||0,s.texMemoryUsage+=(null===(o=e.normalTexture)||void 0===o||null===(o=o.glTexture)||void 0===o?void 0:o.usedMemory)||0)})),e.commonMaterialParameters.doubleSided=d.isDoubleSided,e.commonMaterialParameters.cullFace=d.faceCulling?F[d.faceCulling]:O.s2.Back,this._initialCullFace.set(Q,e.commonMaterialParameters.cullFace),e.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,e.componentParameters.castShadows=q.d0.All,e.textureAlphaCutoff=null!==(o=d.alphaCutoff)&&void 0!==o?o:.1,e.alphaDiscardMode=L[d.alphaMode],e.isIntegratedMesh=!0,e.polygonOffsetEnabled=!1,e.hasOccludees=!1,e.ellipsoidMode=(0,K.V)(this.view.spatialReference)})),s.components.push(Q),s.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(Q)}if(await Promise.all(n),r.forEach((e=>{s.textures.push(e)})),!this._memCache)throw new Error("no memCache");return this._memCache.put("".concat(s.handle),s,s.totalMemory()),{memUsageBytes:s.totalMemory()}}freeRenderable(e){const t=this._lyrHandleToObjects.get(e);t&&(this.freeObject(t),this._lyrHandleToObjects.delete(e))}freeObject(e){this._memCache&&this._memCache.pop("".concat(e.handle)),e.components.forEach((t=>{e.textures.forEach((e=>{this._stage.remove(e)})),this._collection.destroyObject(t),this._initialCullFace.delete(t)}))}setRenderableVisibility(e,t,i){if(this._memCache){for(let n=0;n<i;++n){const i=e[n],r=t[n];if(!r)continue;const s=this._lyrHandleToObjects.get(i);s&&(this._visibleGeometryChanged(),s.isVisible=r,s.components.forEach((e=>{this._collection.setObjectVisibility(e,r),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.pop("".concat(i)))}for(let n=0;n<i;++n){const i=e[n],r=t[n];if(r)continue;const s=this._lyrHandleToObjects.get(i);s&&(this._visibleGeometryChanged(),s.isVisible=r,s.components.forEach((e=>{this._collection.setObjectVisibility(e,r),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.put("".concat(i),s,s.totalMemory()))}}}_getTexture(e,t,i){var n,r;let s=null;if(e&&null!==(n=t.desc)&&void 0!==n&&n.images&&null!==(r=t.data)&&void 0!==r&&r.buffer){const n=t.desc.images[null===e||void 0===e?void 0:e.imageId];if(s=i.get(n),!s&&n){var o;const r=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,a=r>1,l=H[null!==(o=e.wrapMode)&&void 0!==o?o:x.Nt.None];let d=n.alpha?4:3;const c=new Uint8Array(t.data.buffer,n.data.byteOffset,n.data.byteCount);let u=null,h=null,p=null;switch(n.format){case x.h7.Raw:n.pixelFormat===x.CP.R8?(u=c.buffer,d=1,h=""):n.pixelFormat===x.CP.Rgb8?(u=c.buffer,d=3,h=""):n.pixelFormat===x.CP.Rgba8&&(u=c.buffer,d=4,h="");break;case x.h7.Dxt1:u=c.buffer,d=3,h=O.JS.DDS_ENCODING;break;case x.h7.Dxt5:u=c.buffer,d=4,h=O.JS.DDS_ENCODING;break;case x.h7.Png:h="image/png",p=document.createElement("img");break;case x.h7.Jpeg:h="image/jpeg",p=document.createElement("img");break;case x.h7.Etc2:h="image/ktx",p=document.createElement("img");break;case x.h7.Astc:this._dbg(G.Error,"Astc texture not supported");break;case x.h7.Pvrtc:this._dbg(G.Error,"Pvrtc texture not supported")}if(p&&h){const e=new Blob([c],{type:h});p.src=URL.createObjectURL(e),u=p}u&&null!=h&&(s=new te.g(u,{mipmap:a,maxAnisotropy:r,encoding:h,wrap:l,components:d,noUnpackFlip:!0,width:n.mip0Width,height:n.mip0Height}),this._stage.add(s),i.set(n,s))}}return s?new $.Y(this.view._stage.renderView.textureRepository,s.id):null}getBufferViews(e,t,i,n){let r,s,o,a,l,d,c,u=null;for(let p=0;p<e.atrbs.length;p++){const c=e.atrbs[p],m=c.view,v=void 0,f=m.byteOffset+m.byteCount,g=m.byteCount/B[m.type],y=[...Array(g).keys()].map((e=>e));try{switch(c.sem){case x.eN.Position:3!==m.ncomp||m.type!==x.LU.F32?this._dbg(G.Error,"[Unsupported Feature] Unsupported view for Position ("+m+")"):(r=new E.xs(t,m.byteOffset,v,f),s=new Q.n(r.typedBuffer,y,3));break;case x.eN.Normal:if(3!==m.ncomp||m.type!==x.LU.F32)this._dbg(G.Error,"[Unsupported Feature] Unsupported view for Normal ("+m+")");else if(n){const e=new E.xs(t,m.byteOffset,v,f),n=(0,ee._l)(e.typedBuffer,i);l=new E.Qt(n),d=new Q.n(l.typedBuffer,y,2)}break;case x.eN.TexCoord:2!==m.ncomp||m.type!==x.LU.F32?this._dbg(G.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+m+")"):void 0===a&&(a=new Q.n(new E.gH(t,m.byteOffset,v,f).typedBuffer,y,2));break;case x.eN.Color:4===m.ncomp?(m.type===x.LU.F32&&(u=new E.Eq(t,m.byteOffset,v,f)),m.type===x.LU.U8&&(u=new E.XP(t,m.byteOffset,v,f)),m.type===x.LU.U16&&(u=new E.Uz(t,m.byteOffset,v,f))):3===m.ncomp&&(m.type===x.LU.F32&&(u=new E.xs(t,m.byteOffset,v,f)),m.type===x.LU.U8&&(u=new E.eI(t,m.byteOffset,v,f)),m.type===x.LU.U16&&(u=new E.nS(t,m.byteOffset,v,f))),null==u?this._dbg(G.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+m+")"):o=new Q.n(u.typedBuffer,y,m.ncomp);break;case x.eN.FeatureIndex:break;default:this._dbg(G.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+c.sem+"). Skipping vertex attribute.")}}catch(h){this._dbg(G.VerboseAPI,"Error Creating buffer ("+h+"). Skipping vertex attribute.")}}if(e.index){const i=e.index.view,n=void 0,r=i.byteOffset+i.byteCount;switch(e.index.view.type){case x.LU.U16:c=new E.h(t,i.byteOffset,n,r);break;case x.LU.U32:c=new E.P(t,i.byteOffset,n,r);break;case x.LU.U8:default:this._dbg(G.Error,"[Unsupported Feature] index type not supported ("+i.type+").")}}if(null==c&&null!=r){const e=r.count;if(e<65535){const t=new Uint16Array(e);c=new E.h(t)}else{const t=new Uint32Array(e);c=new E.P(t)}for(let t=0;t<e;t++)c.set(t,t)}return{positionView:r,positionAttr:s,colorAttr:o,texCoord0Attr:a,indicesView:c,normalsView:l,normalsAttr:d}}_onRemoveFromCache(e){const t=(0,U.pw)(this.view);t&&t.onRenderableEvicted(this,e.handle,e.totalMemory()),this.freeRenderable(e.handle)}_dbg(e,t){this._dbgFlags.has(e)&&(e===G.Error?s.A.getLogger(this).error(t):s.A.getLogger(this).warn(t))}};(0,n._)([(0,d.MZ)()],ae.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),(0,n._)([(0,d.MZ)()],ae.prototype,"layer",void 0),(0,n._)([(0,d.MZ)()],ae.prototype,"elevationOffset",null),ae=(0,n._)([(0,c.$)("esri.views.3d.layers.Tiles3DLayerView3D")],ae);const le=ae},83491:(e,t,i)=>{i.d(t,{w:()=>c});var n=i(35143),r=i(54901),s=i(50346),o=i(68134),a=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),d=i(47700);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.hA)((()=>e.abort()))),await(0,o.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,s.Te)(t);const i=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,n._)([(0,a.MZ)()],t.prototype,"view",void 0),(0,n._)([(0,a.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,n._)([(0,l.$)("esri.views.3d.layers.LayerView3D")],t),t}},35493:(e,t,i)=>{i.d(t,{e:()=>_});var n=i(35143),r=i(91967),s=i(54099),o=i(76460),a=i(46053),l=(i(81806),i(47249),i(85842)),d=i(34761),c=i(13191),u=i(20664),h=i(9392),p=i(79115),m=i(2413),v=i(93582),f=i(95225),g=i(15255),y=i(29808),b=i(3112);let _=class extends(s.A.EventedMixin(r.A)){constructor(e){super(e),this._tmpEvent=new g.L,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=(0,y.hz)(this.view.state.viewingMode),this._intersector.options.store=b.oH.MIN,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){var e;return null===(e=this.view)||void 0===e||null===(e=e.elevationProvider)||void 0===e?void 0:e.spatialReference}getElevation(e,t,i,n){const r=this._renderCoordsHelper,s=(0,u.s)(x,e,t,i);if(!r.toRenderCoords(s,n,s))return o.A.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:a,_intersector:l,intersectionHandler:d}=this,c=a.fullExtent,h=null!=c&&Number.isFinite(c.xmin)&&Number.isFinite(c.xmax)&&Number.isFinite(c.ymin)&&Number.isFinite(c.ymax)&&Number.isFinite(c.zmin)&&Number.isFinite(c.zmax)?new f.H(c.zmin,c.zmax):a.elevationRange;if(null==h)return null;const p=a.elevationOffset,m=h.elevationRangeMin+p,v=h.elevationRangeMax+p,g=r.setAltitude(M,v,s),y=r.setAltitude(C,m,s);return l.reset(g,y,null),d.intersect(l,null,g,y,null,!0),l.results.min.getIntersectionPoint(s)?r.getAltitude(s):null}getSphereElevationBounds(e,t){return(0,p.z)(e,t,E,this._renderSR),this._layerElevationSource.getElevationRange(E)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return null!==e&&void 0!==e&&e.hasZ?new f.H(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,t){(0,m.Ie)(t),this._expandExtent(e,t)}_computeLayerExtent(e,t){(0,m.Ie)(t);for(const i of e)this._expandExtent(i,t)}_expandExtent(e,t){const i=this.spatialReference;if(null==i)return;if(null==e)return;(0,d.I0)(w,e.quaternion),w[12]=e.center[0],w[13]=e.center[1],w[14]=e.center[2];const n=e.halfSize;for(let r=0;r<8;++r)x[0]=1&r?n[0]:-n[0],x[1]=2&r?n[1]:-n[1],x[2]=4&r?n[2]:-n[2],(0,u.e)(x,x,w),this._renderCoordsHelper.fromRenderCoords(x,x,i),(0,m.fT)(t,x,t)}};(0,n._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"layerElevationSource",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"intersectionHandler",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],_.prototype,"view",void 0),(0,n._)([(0,a.MZ)()],_.prototype,"spatialReference",null),_=(0,n._)([(0,l.$)("esri.views.3d.layers.i3s.LayerElevationProvider")],_);const w=(0,c.vt)(),E=(0,v.f)(0,0,0,0),x=(0,h.vt)(),M=(0,h.vt)(),C=(0,h.vt)()},657:(e,t,i)=>{i.d(t,{Y:()=>s});var n=i(30726),r=i(50346);class s{constructor(e,t){this._textureRep=e,this.loadPromise=null,this._disposed=!1;const i=this._textureRep.acquire(t);(0,r.$X)(i)?(i.then((e=>{this._disposed?(0,n.Gz)(e):this._textureRef=e})),this.loadPromise=i):this._textureRef=i}dispose(){this._textureRef=(0,n.Gz)(this._textureRef),this._disposed=!0}get glTexture(){return null!=this._textureRef?this._textureRef.glTexture:null}}},91196:(e,t,i)=>{i.d(t,{A:()=>m});var n=i(35143),r=i(91967),s=i(54099),o=i(5632),a=i(76460),l=i(30726),d=i(91291),c=i(46053),u=(i(81806),i(47249),i(85842)),h=i(19451);let p=class extends((0,o.sA)((0,d.g)(s.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new h.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",n=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,n;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(n=this.parent)||void 0===n?void 0:n.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,n._)([(0,c.MZ)()],p.prototype,"fullOpacity",null),(0,n._)([(0,c.MZ)()],p.prototype,"layer",void 0),(0,n._)([(0,c.MZ)()],p.prototype,"parent",void 0),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"suspended",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,n._)([(0,c.MZ)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,n._)([(0,c.MZ)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,n._)([(0,c.MZ)()],p.prototype,"visible",null),(0,n._)([(0,c.MZ)()],p.prototype,"view",void 0),p=(0,n._)([(0,u.$)("esri.views.layers.LayerView")],p);const m=p}}]);
//# sourceMappingURL=9766.1830023e.chunk.js.map