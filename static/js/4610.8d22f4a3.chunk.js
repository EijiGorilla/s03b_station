"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[4610,2229],{54610:(e,t,a)=>{a.d(t,{applyEdits:()=>F,r3:()=>b,uploadAssets:()=>L,zp:()=>A});var r=a(39356),n=a(19276),o=a(50076),i=a(53084),l=a(76460),s=a(50346),d=a(90534),u=a(49723),c=a(1438),p=a(80963),h=a(61979),f=a(53430),y=a(19463),m=a(31933);function v(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(g)}function w(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function A(e){return e.every(w)}async function F(e,t,a){var r;let d,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,f=null!==(r=c.gdbVersion)&&void 0!==r?r:p;if((0,h.Mk)(e)&&e.url)d=(0,h.Zk)(e.url,e.layerId,f,"original-and-current-features"===c.returnServiceEditsOption);else{d=(0,s.Tw)(),d.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:d.promise};e.emit("apply-edits",t)}try{var g;const{results:r,edits:s}=await async function(e,t,a,r){var i,s,d,c,p,h;if(await e.load(),!v(t))throw new o.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.tk)(e))throw new o.A("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:f,options:g}=await async function(e,t,a){const r=(0,m.BR)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),d=null!=e.infoFor3D;if(function(e,t,a,r,n,i){if(!e||!r&&!n)throw new o.A("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==a&&void 0!==a&&a.globalIdUsed)throw new o.A("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&n)throw new o.A("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===a||void 0===a||!a.globalIdUsed)&&n)throw new o.A("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!s,"".concat(e.type,"-layer")),!r.data.isVersioned&&null!==a&&void 0!==a&&a.gdbVersion)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&null!==a&&void 0!==a&&a.rollbackOnFailureEnabled)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...a};if(null!=c.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&l.A.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,a){var r,i,l;const s=function(e){var t,a;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(a=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==a?a:[]),deleteFeatures:e&&n.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(r=s.addFeatures)&&void 0!==r&&r.length&&!t.operations.supportsAdd)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=s.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support updating features.");if(null!==(l=s.deleteFeatures)&&void 0!==l&&l.length&&!t.operations.supportsDelete)throw new o.A("".concat(a,":unsupported-operation"),"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(k),s.updateFeatures=s.updateFeatures.map(k),s.addAssetFeatures=[],s}(t,r,"".concat(e.type,"-layer")),h=(null===a||void 0===a?void 0:a.globalIdUsed)||d,f=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new o.A("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,u.yS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),E(e,t)}(t,e,h,f))),p.updateFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r),E(e,t);const n=(0,m.BR)(t);if("geometry"in e&&null!=e.geometry&&(null===n||void 0===n||!n.editing.supportsGeometryUpdate))throw new o.A("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,h,f))),p.deleteFeatures.forEach((t=>function(e,t,a,r){I(e,t,a,r)}(t,e,h,f))),p.addAttachments.forEach((t=>R(t,e))),p.updateAttachments.forEach((t=>R(t,e))),d&&await async function(e,t){var a,r;if(null==t.infoFor3D)return;const{infoFor3D:n}=t,i=null!==(a=(0,y.R_)("model/gltf-binary",n.supportedFormats))&&void 0!==a?a:(0,y.E1)("glb",n.supportedFormats);if(!i||!n.editFormats.includes(i))throw new o.A("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(r=e.addAssetFeatures)&&void 0!==r||(e.addAssetFeatures=[]);const{addAssetFeatures:l}=e;for(const o of null!==(s=e.addFeatures)&&void 0!==s?s:[]){var s;O(o)&&l.push(o)}for(const o of null!==(d=e.updateFeatures)&&void 0!==d?d:[]){var d;O(o)&&l.push(o)}}(p,e),{edits:await S(p),options:c}}(e,a,r);return null!==(i=f.addFeatures)&&void 0!==i&&i.length||null!==(s=f.updateFeatures)&&void 0!==s&&s.length||null!==(d=f.deleteFeatures)&&void 0!==d&&d.length||null!==(c=f.addAttachments)&&void 0!==c&&c.length||null!==(p=f.updateAttachments)&&void 0!==p&&p.length||null!==(h=f.deleteAttachments)&&void 0!==h&&h.length?{edits:f,results:await t.applyEdits(f,g)}:{edits:f,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,c),p=e=>e.filter((e=>!e.error)).map(i.o8),h={edits:s,addedFeatures:p(r.addFeatureResults),updatedFeatures:p(r.updateFeatureResults),deletedFeatures:p(r.deleteFeatureResults),addedAttachments:p(r.addAttachmentResults),updatedAttachments:p(r.updateAttachmentResults),deletedAttachments:p(r.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:r.editMoment?new Date(r.editMoment):null,globalIdToObjectId:c.globalIdToObjectId};return null!==(g=r.editedFeatureResults)&&void 0!==g&&g.length&&(h.editedFeatures=r.editedFeatureResults),d.resolve(h),r}catch(b){throw d.reject(b),b}}function I(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const l of r){const a=e.attributes[l.name];if(void 0!==a&&!(0,f.OG)(l,a))throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(l.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var n,i;if(e.geometry.hasZ&&!1===(null===(n=t.capabilities)||void 0===n?void 0:n.data.supportsZ))throw new o.A("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new o.A("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function E(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:n}=a,i=t.spatialReference,l="local"===n.type,s=(0,p.EA)(i),d=(0,p.aI)(i,r),u=d||(0,p.oT)(i)&&((0,p.oT)(r)||(0,p.K8)(r));if(!(l&&s&&u||!l&&!s&&d))throw new o.A("".concat(t.type,"-layer:mesh-unsupported"),"Uploading a mesh with a ".concat(n.type," vertex space and a spatial reference wkid:").concat(r.wkid," to a layer with a spatial reference wkid:").concat(i.wkid," is not supported."))}}function R(e,t){var a;const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&n.uploadId)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,d.r$)(n.data);if(e&&!e.isBase64)throw new o.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function S(e){var t,a;const r=null!==(t=e.addFeatures)&&void 0!==t?t:[],n=null!==(a=e.updateFeatures)&&void 0!==a?a:[],o=r.concat(n).map((e=>e.geometry)),i=await(0,c.el)(o),l=r.length,s=n.length;return i.slice(0,l).forEach(((e,t)=>r[t].geometry=e)),i.slice(l,l+s).forEach(((e,t)=>n[t].geometry=e)),e}function k(e){const t=new r.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function O(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function L(e,t,a,r){if(!v(t))throw new o.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new o.A("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}},19463:(e,t,a)=>{a.d(t,{E1:()=>l,Fm:()=>s,JZ:()=>y,R_:()=>i,fu:()=>n,oF:()=>o,rq:()=>d});const r=[["binary","application/octet-stream","bin",""]];function n(e,t){var a;return null!=c(t.name,null!==(a=null===e||void 0===e?void 0:e.supportedFormats)&&void 0!==a?a:[])}function o(e,t){var a;if(!e)return!1;const r=d(t,null!==(a=e.supportedFormats)&&void 0!==a?a:[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return p(function(e,t){const a=e.toLowerCase();return u(t).find((e=>h(e)===a))}(e,t))}function l(e,t){return p(c(e,t))}function s(e,t){return h(function(e,t){return u(t).find((t=>p(t)===e))}(e,t))}function d(e,t){var a;return null!==(a=l(e.name,t))&&void 0!==a?a:i(e.type,t)}function u(e){return[...r,...e]}function c(e,t){const a=e.toLowerCase();return u(t).find((e=>f(e).some((e=>a.endsWith(e)))))}function p(e){return null===e||void 0===e?void 0:e[0]}function h(e){return null===e||void 0===e?void 0:e[1].toLowerCase()}function f(e){var t;return null!==(t=null===e||void 0===e?void 0:e[2].split(",").map((e=>e.toLowerCase())))&&void 0!==t?t:[]}function y(e){var t;return null===(t=e.tables)||void 0===t?void 0:t.find((e=>"assetMaps"===e.role))}}}]);
//# sourceMappingURL=4610.8d22f4a3.chunk.js.map