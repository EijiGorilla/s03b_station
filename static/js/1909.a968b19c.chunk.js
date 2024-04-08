"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[1909],{56829:(t,e,n)=>{n.d(e,{g:()=>h});var a=n(35143),i=n(91967),l=n(76460),o=n(50346),r=n(46053),s=(n(81806),n(47249),n(85842)),u=n(76336),c=n(38386);let h=class extends i.A{constructor(t){super(t),this.manipulators=new c.t,this.automaticManipulatorSelection=!0,this.hasGrabbedManipulators=!1,this.hasHoveredManipulators=!1,this.firstGrabbedManipulator=null,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[u.PK.MANAGER,!0],[u.PK.USER,!0]]),this._creationFinishedResolver=(0,o.Tw)()}get active(){return null!=this.view&&this.view.activeTool===this}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this._syncVisible())}get editable(){return this.getEditableFlag(u.PK.USER)}set editable(t){this.setEditableFlag(u.PK.USER,t)}get updating(){return!1}get cursor(){return null}get hasFocusedManipulators(){return this.hasGrabbedManipulators||this.hasHoveredManipulators}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){null!=this.view?(this.view.focus(),this.onActivate()):l.A.getLogger(this).error("Can't activate tool if view is not defined.")}deactivate(){this.onDeactivate()}handleInputEvent(t){this.onInputEvent(t)}handleInputEventAfter(t){this.onInputEventAfter(t)}setEditableFlag(t,e){this._editableFlags.set(t,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),t===u.PK.USER&&this.notifyChange("editable"),this.onEditableChange(),this.onManipulatorSelectionChanged()}getEditableFlag(t){var e;return null!==(e=this._editableFlags.get(t))&&void 0!==e&&e}whenCreated(){return this._creationFinishedResolver.promise}onManipulatorSelectionChanged(){}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(t){}onInputEventAfter(t){}get internallyEditable(){return this.getEditableFlag(u.PK.USER)&&this.getEditableFlag(u.PK.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.initialized)if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};(0,a._)([(0,r.MZ)({constructOnly:!0})],h.prototype,"view",void 0),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"active",null),(0,a._)([(0,r.MZ)({value:!0})],h.prototype,"visible",null),(0,a._)([(0,r.MZ)({value:!0})],h.prototype,"editable",null),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"manipulators",void 0),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"updating",null),(0,a._)([(0,r.MZ)()],h.prototype,"cursor",null),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"automaticManipulatorSelection",void 0),(0,a._)([(0,r.MZ)()],h.prototype,"hasFocusedManipulators",null),(0,a._)([(0,r.MZ)()],h.prototype,"hasGrabbedManipulators",void 0),(0,a._)([(0,r.MZ)()],h.prototype,"hasHoveredManipulators",void 0),(0,a._)([(0,r.MZ)()],h.prototype,"firstGrabbedManipulator",void 0),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"created",void 0),(0,a._)([(0,r.MZ)({readOnly:!0})],h.prototype,"removeIncompleteOnCancel",void 0),h=(0,a._)([(0,s.$)("esri.views.interactive.InteractiveToolBase")],h)},38386:(t,e,n)=>{n.d(e,{t:()=>l});var a,i=n(19276);!function(t){t[t.WhenToolEditable=0]="WhenToolEditable",t[t.WhenToolNotEditable=1]="WhenToolNotEditable",t[t.Always=2]="Always"}(a||(a={}));class l{constructor(){this._isToolEditable=!0,this._manipulators=new i.A,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(t){this._isToolEditable=t}get length(){return this._manipulators.length}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.WhenToolEditable;this.addMany([t],e)}addMany(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.WhenToolEditable;for(const n of t){const t={manipulator:n,visibilityPredicate:e,attached:!1};this._manipulators.add(t),this._attached&&this._updateManipulatorAttachment(t)}}remove(t){for(let e=0;e<this._manipulators.length;e++)if(this._manipulators.at(e).manipulator===t){const t=this._manipulators.splice(e,1)[0];this._detachManipulator(t);break}}removeAll(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._manipulators.removeAll()}attach(){this._manipulators.forEach((t=>{this._updateManipulatorAttachment(t)})),this._attached=!0}detach(){this._manipulators.forEach((t=>{this._detachManipulator(t)})),this._attached=!1}destroy(){this.detach(),this._manipulators.forEach((t=>{let{manipulator:e}=t;return e.destroy()})),this._manipulators.destroy(),this._resourceContexts=null}on(t,e){return this._manipulators.on(t,(t=>{e(t)}))}forEach(t){for(const e of this._manipulators.items)t(e)}some(t){return this._manipulators.items.some(t)}toArray(){const t=[];return this.forEach((e=>t.push(e.manipulator))),t}intersect(t,e){let n=null,a=Number.MAX_VALUE;return this._manipulators.forEach((i=>{let{manipulator:l,attached:o}=i;if(!o||!l.interactive)return;const r=l.intersectionDistance(t,e);null!=r&&r<a&&(a=r,n=l)})),n}_updateManipulatorAttachment(t){this._isManipulatorItemVisible(t)?this._attachManipulator(t):this._detachManipulator(t)}_attachManipulator(t){t.attached||(t.manipulator.attach&&t.manipulator.attach(this._resourceContexts),t.attached=!0)}_detachManipulator(t){if(!t.attached)return;const e=t.manipulator;e.grabbing=!1,e.dragging=!1,e.hovering=!1,e.selected=!1,e.detach&&e.detach(this._resourceContexts),t.attached=!1}_isManipulatorItemVisible(t){return t.visibilityPredicate===a.Always||(this._isToolEditable?t.visibilityPredicate===a.WhenToolEditable:t.visibilityPredicate===a.WhenToolNotEditable)}}},70825:(t,e,n)=>{n.d(e,{rh:()=>M,Xt:()=>m,n5:()=>f,VG:()=>y,pg:()=>E,y$:()=>g});n(35238),n(18690),n(81806);var a=n(53084),i=(n(15941),n(9392)),l=n(9624),o=n(99773),r=n(32535),s=n(82062),u=n(12482),c=(n(2413),n(65391),n(5262));function h(t,e,n,a){var i,l;if(null==a||t.hasZ||(a=void 0),"point"===t.type)return t.x+=e,t.y+=n,t.hasZ&&null!=a&&(t.z+=a),t;if("multipoint"===t.type){const i=t.points;for(let t=0;t<i.length;t++)i[t]=d(i[t],e,n,a);return t}if("extent"===t.type)return t.xmin+=e,t.xmax+=e,t.ymin+=n,t.ymax+=n,null!=a&&(null!==(i=t.zmin)&&void 0!==i||(t.zmin=0),t.zmin+=a,null!==(l=t.zmax)&&void 0!==l||(t.zmax=0),t.zmax+=a),t;const o=(0,c.$K)(t),r="polyline"===t.type?t.paths:t.rings;for(let s=0;s<o.length;s++){const t=o[s];for(let i=0;i<t.length;i++)t[i]=d(t[i],e,n,a)}return"paths"in t?t.paths=r:t.rings=r,t}function d(t,e,n,a){return p(t,t[0]+e,t[1]+n,null!=t[2]&&null!=a?t[2]+a:void 0)}function p(t,e,n,a){const i=[e,n];return t.length>2&&i.push(null!=a?a:t[2]),t.length>3&&i.push(t[3]),i}var v=n(13904);function m(t,e){return t.events.on("drag",function(t,e){let n=null,a=null;return i=>{if("cancel"===i.action)return void(null!=a&&(a.execute({action:"cancel"}),n=null,a=null));const l={action:i.action,screenStart:i.start,screenEnd:i.screenPoint};"start"===i.action&&null==n&&(n=new M,a=new M,e(t,n,a,i.pointerType,l)),null!=n&&n.execute(l),"end"===i.action&&null!=n&&(n=null,a=null)}}(t,e))}function f(t){let e=null;return n=>{if("start"===n.action&&(e=function(t,e){const n=t.geometry,a=(0,r.RS)(e);if(null==n)return null;if("mesh"===n.type)return function(t,e,n){if((0,o.Hq)(e.vertexSpace))return function(t,e,n,a){const r=_((0,o.MW)(e.vertexSpace,e.spatialReference),a),u=e.spatialReference;return null==r?null:{move:(e,a,o,c)=>{var d;const p=h(r.clone(),e,a,o);if(p.spatialReference.equals(u))n.origin=(0,i.fA)(p.x,p.y,null!==(d=p.z)&&void 0!==d?d:0);else{var v;const t=(0,l.project)(p,u);null!=t&&(n.origin=(0,i.fA)(t.x,t.y,null!==(v=t.z)&&void 0!==v?v:0))}const m="end"===c;t.notifyMeshTransformChanged(m?{action:s.$.UpdateFastLocalOrigin}:{})}}}(t,e,e.vertexSpace,n);if(!e.spatialReference.equals(n))return null;let a=0,r=0,u=0;return{move:(n,i,l)=>{const o=n-a,s=i-r,c=l-u;if(o||s||c){var h;const d=new v.A(e.anchor.x+o,e.anchor.y+s,(null!==(h=e.anchor.z)&&void 0!==h?h:0)+c,e.anchor.spatialReference);e.centerAt(d),t.notifyGeometryChanged(),a=n,r=i,u=l}}}}(t,n,a);const u=_(n,a),c=n.spatialReference;return null==u?null:{move:(e,n,a)=>{const i=h(u.clone(),e,n,a);i.spatialReference.equals(c)?t.geometry=i:t.geometry=(0,l.project)(i,c)}}}(t,n.mapStart.spatialReference)),null==e)return null;const a=n.mapEnd.x-n.mapStart.x,u=n.mapEnd.y-n.mapStart.y,c=n.mapEnd.z-n.mapStart.z;return e.move(a,u,c,n.action),{...n,translationX:a,translationY:u,translationZ:c}}}function _(t,e){return null==t?null:t.spatialReference.equals(e)?t.clone():(0,l.project)(t,e)}function g(t){var e;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2?arguments[2]:void 0,i=null;const o=null==n||null!==(e=t.spatialReference)&&void 0!==e&&e.equals(n)?t=>t:t=>null!=t?(0,l.project)(t,n):t,r={exclude:[],...a};return e=>{if("start"===e.action&&(i=o(t.toMap(e.screenStart,r))),null==i)return null;const n=o(t.toMap(e.screenEnd,r));return null!=n?{...e,mapStart:i,mapEnd:n}:null}}function y(t,e){const n=new Map;for(const i of e)n.set(i,(0,a.o8)(t[i]));return e=>(n.forEach(((e,n)=>{t[n]=e})),e)}const b=()=>{};class M{constructor(){this.execute=b}next(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new M;return null!=t&&(this.execute=n=>{const a=t(n);null!=a&&e.execute(a)}),e}}function E(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("2d"===t.type)return t=>t;let a=null;return i=>{"start"===i.action&&(a=t.toMap(i.screenStart,{exclude:n}),null!=a&&(a.z=(0,u.id)(a,t,e)));const l=t.toMap(i.screenEnd,{exclude:n});null!=l&&(l.z=(0,u.id)(l,t,e));const o=null!=a&&null!=l?{sceneStart:a,sceneEnd:l}:null;return{...i,scenePoints:o}}}}}]);
//# sourceMappingURL=1909.a968b19c.chunk.js.map