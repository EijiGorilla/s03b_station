"use strict";(self.webpackChunks03b_station=self.webpackChunks03b_station||[]).push([[2520],{12520:(t,e,n)=>{n.r(e),n.d(e,{executeForTopExtents:()=>u});n(35238);var o=n(54994),r=n(10415),l=n(58672),i=n(76797);async function u(t,e,n){const u=(0,o.Dl)(t),s=await(0,r.$K)(u,l.A.from(e),{...n}),d=s.data.extent;return!d||isNaN(d.xmin)||isNaN(d.ymin)||isNaN(d.xmax)||isNaN(d.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:i.A.fromJSON(d)}}},10415:(t,e,n)=>{n.d(e,{$K:()=>m,KW:()=>p,Yb:()=>c,xs:()=>F});var o=n(3825),r=n(90534),l=n(19902),i=n(1438),u=n(80963),s=n(78238),d=n(57831);const a="Layer does not support extent calculation.";function y(t,e){var n,o;const r=t.geometry,i=t.toJSON(),s=i;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,l.$B)(r),s.inSR=(0,u.YX)(r.spatialReference)),null!==(n=i.topFilter)&&void 0!==n&&n.groupByFields&&(s.topFilter.groupByFields=i.topFilter.groupByFields.join(",")),null!==(o=i.topFilter)&&void 0!==o&&o.orderByFields&&(s.topFilter.orderByFields=i.topFilter.orderByFields.join(",")),i.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),i.objectIds&&(s.objectIds=i.objectIds.join(",")),i.orderByFields&&(s.orderByFields=i.orderByFields.join(",")),i.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?i.outFields.includes("*")?s.outFields="*":s.outFields=i.outFields.join(","):delete s.outFields,i.outSR?s.outSR=(0,u.YX)(i.outSR):r&&i.returnGeometry&&(s.outSR=s.inSR),i.returnGeometry&&delete i.returnGeometry,i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(s.time=e===n?e:"".concat(null!==e&&void 0!==e?e:"null",",").concat(null!==n&&void 0!==n?n:"null")),delete i.timeExtent}return s}async function c(t,e,n,o){const r=await x(t,e,"json",o);return(0,d.q)(e,n,r.data),r}async function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:x(t,e,"json",n,{returnIdsOnly:!0})}async function m(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:x(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t}))}function F(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):x(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function x(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const d="string"==typeof t?(0,r.An)(t):t,a=e.geometry?[e.geometry]:[];return l.responseType="json",(0,i.el)(a,null,l).then((t=>{const i=null===t||void 0===t?void 0:t[0];null!=i&&((e=e.clone()).geometry=i);const a=(0,s.z)({...d.query,f:n,...u,...y(e,u)});return(0,o.A)((0,r.fj)(d.path,"queryTopFeatures"),{...l,query:{...a,...l.query}})}))}}}]);
//# sourceMappingURL=2520.e3597e80.chunk.js.map