"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[2577],{84265:(e,t,s)=>{s.d(t,{v:()=>S,X:()=>x});var o=s(54120),n=s(68909);class i{constructor(){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[],[]],this.boundingBox=null,this.boundingSphere=null}}class r{constructor(e,t,s,o,i,r=0){this.a=e,this.b=t,this.c=s,this.materialIndex=r,this.a=e,this.b=t,this.c=s,this.normal=o&&!Array.isArray(o)&&o.isVector3?o:new n.Vector3,this.vertexNormals=Array.isArray(o)?o:[],this.color=i&&!Array.isArray(i)&&i.isColor?i:new n.Color,this.vertexColors=Array.isArray(i)?i:[],this.materialIndex=r}clone(){return new r(this.a,this.b,this.c,this.normal,this.color).copy(this)}copy(e){this.a=e.a,this.b=e.b,this.c=e.c,this.normal.copy(e.normal),this.color.copy(e.color),this.materialIndex=e.materialIndex;for(let t=0,s=e.vertexNormals.length;t<s;t++)this.vertexNormals[t]=e.vertexNormals[t].clone();for(let t=0,s=e.vertexColors.length;t<s;t++)this.vertexColors[t]=e.vertexColors[t].clone();return this}}var a=s(35652),c=s(75673);const h=new a.Ay("surface-edge-finder"),l=new n.Triangle,u=["a","b","c"];class d extends r{constructor(e,t,s,o){super(e.a,e.b,e.c,e.normal),this.va=t,this.vb=s,this.vc=o,this.area=l.set(this.va.vector,this.vb.vector,this.vc.vector).getArea(),this.midpoint=l.getMidpoint(new n.Vector3),this.vertices=[this.va,this.vb,this.vc],t.faces.push(this),s.faces.push(this),o.faces.push(this)}}class f{constructor(e){this.vector=e,this.faces=[]}}class p{constructor(){this.area=0,this.normal=new n.Vector3,this.midpoint=new n.Vector3,this.faces=[],this.normalSum=new n.Vector3,this.midpointSum=new n.Vector3}add(e){e.surface&&e.surface.remove(e),this.faces.push(e),this.area+=e.area,this.midpointSum.add(e.midpoint),this.normalSum.add(e.normal),this.recalcFromSums(),e.surface=this}remove(e){e.surface&&(this.faces.splice(this.faces.indexOf(e),1),this.area-=e.area,this.midpointSum.sub(e.midpoint),this.normalSum.sub(e.normal),this.recalcFromSums()),e.surface=null}recalcFromSums(){this.normal.copy(this.normalSum).normalize(),this.midpoint.copy(this.midpointSum).divideScalar(this.faces.length)}mergeSurfaces(e){for(const t of e.faces)t.surface=this,this.faces.push(t);this.area+=e.area,this.normalSum.add(e.normalSum),this.midpointSum.add(e.midpointSum),this.recalcFromSums(),e.faces=[],e.area=0,e.normal.set(0,0,0),e.normalSum.set(0,0,0),e.midpointSum.set(0,0,0),e.midpoint.set(0,0,0)}getEdges(){const e={},t={};for(const t of this.faces)for(let s=0;s<3;s++){const o=t[u[s]],n=t[u[(s+1)%3]],i=Math.min(o,n)+","+Math.max(o,n);if(void 0===e[i]){const t={edge1:o,edge2:n,isEdge:!0};e[i]=t}else e[i].isEdge=!1}for(const{edge1:s,edge2:o,isEdge:n}of Object.values(e))n&&(t[s]||(t[s]=[]),t[s].push(o),t[o]||(t[o]=[]),t[o].push(s));return t}getCircularPaths(e){const t=this.getEdges(),s=new Set,o=[],n=Object.keys(t).map((e=>parseInt(e,10)));let i;for(;i=n.pop();){const n=[];for(;i;){let o;n.push(e[i]);let r=0;for(const n of t[i]){const t=Math.min(i,n)+","+Math.max(i,n);if(s.has(t))continue;const a=e[i].vector.distanceToSquared(this.midpoint);(void 0===o||a>r)&&(o=n,r=a)}if(!o)break;{const e=Math.min(i,o)+","+Math.max(i,o);s.add(e),i=o}}n.length>2&&o.push(n)}return o}}class m{constructor(){this.surfaces=new Set,this.lines=[],this.points=[]}*run(e,t=[1,5,10],s=.2,a=.01,l=20){const u=function(e){const t=new i,s=null!==e.index?e.index:void 0,o=e.attributes;if(void 0===o.position)throw Error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.");const a=o.position,c=o.normal,h=o.color,l=o.uv,u=o.uv2;void 0!==u&&(t.faceVertexUvs[1]=[]);for(let e=0;e<a.count;e++)t.vertices.push((new n.Vector3).fromBufferAttribute(a,e)),void 0!==h&&t.colors.push((new n.Color).fromBufferAttribute(h,e));function d(e,s,o,i=0){const a=void 0===h?[]:[t.colors[e].clone(),t.colors[s].clone(),t.colors[o].clone()],d=void 0===c?[]:[(new n.Vector3).fromBufferAttribute(c,e),(new n.Vector3).fromBufferAttribute(c,s),(new n.Vector3).fromBufferAttribute(c,o)],f=new r(e,s,o,d,a,i);t.faces.push(f),void 0!==l&&t.faceVertexUvs[0].push((new n.Vector2).fromBufferAttribute(l,e),(new n.Vector2).fromBufferAttribute(l,s),(new n.Vector2).fromBufferAttribute(l,o)),void 0!==u&&t.faceVertexUvs[1].push((new n.Vector2).fromBufferAttribute(u,e),(new n.Vector2).fromBufferAttribute(u,s),(new n.Vector2).fromBufferAttribute(u,o))}const f=e.groups;if(f.length>0)for(let e=0;e<f.length;e++){const t=f[e],o=t.start;for(let e=o,n=o+t.count;e<n;e+=3)void 0!==s?d(s.getX(e),s.getX(e+1),s.getX(e+2),t.materialIndex):d(e,e+1,e+2,t.materialIndex)}else if(void 0!==s)for(let e=0;e<s.count;e+=3)d(s.getX(e),s.getX(e+1),s.getX(e+2));else for(let e=0;e<a.count;e+=3)d(e,e+1,e+2);return t}(e),m=u.vertices.map((e=>new f(e))),g=[];for(const e of u.faces)g.push(new d(e,m[e.a],m[e.b],m[e.c])),yield;for(let e=0,t=g.length;e<t;e++){const t=g[e];(new p).add(t)}for(const e of t)yield*this.mergeSurfacesByNormal(g,e);for(const e of g)this.surfaces.add(e.surface);let v=0;const y=[];for(const e of this.surfaces){if(e.area<=s)continue;const t=e.getCircularPaths(m);for(const e of t)this.cullPath(e,((e,t)=>{if(e.length()<a||t.length()<a)return v++,!1;const s=e.angleTo(t)*c.tm;return!(s<l||s>180-l)||(v++,!1)})),e.length>2&&y.push(e);yield}h.debug(`Culled ${v} path points`);const w=new Set,b=new Set,S=e=>`${e.x.toFixed(3)},${e.y.toFixed(3)},${e.z.toFixed(3)}`,x=e=>`${S(e.start)}:${S(e.end)}`,A=e=>`${S(e.end)}:${S(e.start)}`;for(const e of y)for(let t=0;t<e.length;t++){const s=e[t].vector,n=e[(t+1)%e.length].vector,i=new o.cF(s,n),r=x(i),a=A(i),c=S(s);b.has(r)||b.has(a)||(b.add(r),b.add(a),this.lines.push(i)),w.has(c)||(w.add(c),this.points.push(new o.F7(s)))}yield}cullPath(e,t){const s=new n.Vector3,o=new n.Vector3;let i=!0;for(;i;){i=!1;for(let n=0;n<e.length&&e.length>2;n++){const r=e[0===n?e.length-1:n-1].vector,a=e[n].vector,c=e[(n+1)%e.length].vector;s.copy(r).sub(a),o.copy(c).sub(a),t(s,o)||(e.splice(n,1),i=!0,n--)}}}*mergeSurfacesByNormal(e,t,s=5){let o=-1,n=0;for(;0!==o&&n++<s;){h.debug(`Merging surfaces by normal angle threshold: ${t}`);const s=Math.cos(c.fy*t);o=0;let n=0;for(const t of e){n++%1e3==0&&(yield);for(const e of t.vertices)for(const n of e.faces){const e=n.surface;t.surface!==e&&t.surface.normal.dot(e.normal)>=s&&(t.surface.faces.length>e.faces.length?t.surface.mergeSurfaces(e):e.mergeSurfaces(t.surface),o++)}}o&&h.debug(`Merged ${o} surfaces by normal...`)}}}var g=s(94713),v=s(34944),y=s(14754);const w=new a.Ay("snapcaster");var b;!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.WORKING=1]="WORKING",e[e.READY=2]="READY"}(b||(b={}));class S{constructor(e,t){this.cameraData=e,this.engine=t,this.meshes=new Map,this.newMeshes=new Set,this.raycaster=new n.Raycaster,this.filterSnapFeature=e=>{var t,s;const{meshName:o}=e;return!o||!1!==(null===(s=null===(t=this.meshes.get(o))||void 0===t?void 0:t.filter)||void 0===s?void 0:s.call(t,e))},this.cast=(e,t,s,i)=>{let r;s&&i&&(r=(new n.Plane).setFromNormalAndCoplanarPoint(i,s)),this.raycaster.set(e.origin,e.direction);const a=this.snappingOctree.raycast(this.raycaster,t,this.filterSnapFeature)||[],c=e=>{let t=(1+e.distance)*(1+e.distanceToRay)**2;return e.object instanceof o.F7&&(t/=10),r&&r.distanceToPoint(e.point)<-.2&&(t+=10),t};return a.sort(((e,t)=>c(e)-c(t))),a},this.add=(...e)=>{for(const t of e)this.snappingOctree.add(t)},this.remove=(...e)=>{for(const t of e)this.snappingOctree.remove(t)}}dispose(){this.meshes.clear(),this.newMeshes.clear(),this._snappingOctree.clear()}get snappingOctree(){return this.preloadMeshSnapping(),this._snappingOctree}setupOctree(e){this._snappingOctree=new o.Ay(e)}async preloadMeshSnapping(){var e;!this.populateProcess&&this.newMeshes.size&&(this.populateProcess=await this.engine.commandBinder.issueCommand(new g.i("snapping",this.buildSnappingForMeshes(),6e4)),await(null===(e=this.populateProcess)||void 0===e?void 0:e.promise),this.populateProcess=null)}*buildSnappingForMeshes(){const e=new n.Vector3;for(;;){let t=null;for(const s of this.newMeshes){const o=this.meshes.get(s);if(o){const{geometry:n}=o;if(!n){w.error("No mesh to generate snapping information from!"),o.status=b.READY;continue}const i=(0,v.UX)(n).getCenter(e).distanceTo(this.cameraData.pose.position);(!t||i<t.distance)&&(t={meshName:s,geometry:n,distance:i,info:o})}}if(!t)break;this.newMeshes.delete(t.meshName),t.info.status=b.WORKING,yield*this.buildSnappingForGeometry(t.geometry,t.info),t.info.status=b.READY,t.info.geometry=null,yield}w.info(`Snapping found ${this._snappingOctree.pointCount} points and ${this._snappingOctree.lineCount} lines`)}*buildSnappingForGeometry(e,t){e.computeVertexNormals(),yield;const s=new m;yield*s.run(e),w.debug(`Mesh done, added ${s.points.length} points and ${s.lines.length} lines`);for(const e of s.points)e.meshName=t.meshName,e.meta=t.meta,this._snappingOctree.add(e);for(const e of s.lines)e.meshName=t.meshName,e.meta=t.meta,this._snappingOctree.add(e);this.engine.broadcast(new x(s))}forEachSnapFeature(e,t=!1){this.snappingOctree.traverse((s=>{t&&!this.filterSnapFeature(s)||e(s)}))}addMeshGeometry(e,t,s,o){this.meshes.has(e)||(this.meshes.set(e,{meshName:e,geometry:t,status:b.UNINITIALIZED,meta:s,filter:o}),this.newMeshes.add(e))}removeMeshGeometry(e){const t=this.meshes.get(e);t&&t.status===b.UNINITIALIZED&&(this.meshes.delete(e),this.newMeshes.delete(e))}}class x extends y.QB{constructor(e){super(),this.edgeFinder=e}}},94713:(e,t,s)=>{s.d(t,{i:()=>n});var o=s(18268);class n extends o.u{constructor(e,t,s,o=1){super(),this.payload={type:e,func:t,maxDelay:s,steps:o}}}n.id="SCHEDULE_PROCESS_COMMAND"},54120:(e,t,s)=>{s.d(t,{Ay:()=>i,F7:()=>a,cF:()=>r});var o=s(68909);class n{constructor(e,t){this.raycast=(()=>{const e=new o.Vector3,t=new o.Box3;return(s,o,i,c)=>{const h=t.copy(this.bounds).expandByScalar(o);if(s.ray.intersectsBox(h))for(const t of this.children)if(t instanceof n)t.raycast(s,o,i,c);else if(t instanceof r){if(!1===(null==c?void 0:c(t)))continue;const n=e,r=s.ray.distanceSqToSegment(t.start,t.end,void 0,e),a=Math.sqrt(r);a<o&&i.push({distance:s.ray.origin.distanceTo(n),object:t,distanceToRay:a,point:n.clone(),isLineOctreeIntersection:!0})}else if(t instanceof a){if(!1===(null==c?void 0:c(t)))continue;const e=s.ray.distanceToPoint(t);e<o&&i.push({distance:s.ray.origin.distanceTo(t),object:t,distanceToRay:e,point:t.clone(),isLineOctreeIntersection:!0})}}})(),this.level=t,this.bounds=e.clone(),this.clear()}clear(){this.childNodes=[],this.children=[]}add(e){let t=!1;const s=e instanceof o.Line3?[e.start,e.end]:[e];if(this.level<4){0===this.childNodes.length&&this.buildChildNodes();for(const o of this.childNodes)s.every((e=>o.bounds.containsPoint(e)))&&(t=!0,o.add(e))}t||this.children.push(e)}remove(e){const t=e instanceof o.Line3?[e.start,e.end]:[e];for(let s=0;s<this.children.length;s++){const o=this.children[s];if(o instanceof n){if(t.every((e=>o.bounds.containsPoint(e)))&&o.remove(e))return!0}else if(o===e)return this.children.splice(s,1),!0}return!1}buildChildNodes(){const e=this.bounds.max.clone().sub(this.bounds.min).clone().multiplyScalar(.5);for(let t=0;t<2;t++)for(let s=0;s<2;s++)for(let i=0;i<2;i++){const r=this.bounds.min.x+e.x*i,a=r+e.x,c=this.bounds.min.y+e.y*t,h=c+e.y,l=this.bounds.min.z+e.z*s,u=l+e.z,d=new o.Box3(new o.Vector3(r,c,l),new o.Vector3(a,h,u)),f=new n(d,this.level+1);this.childNodes.push(f),this.children.push(f)}}spherecast(e,t){if(e.intersectsBox(this.bounds))for(const s of this.children)if(s instanceof n)s.spherecast(e,t);else if(s instanceof r){const n=s.closestPointToPoint(e.center,!0,new o.Vector3);n.distanceTo(e.center)<e.radius&&t.push(new a(n))}else s instanceof o.Vector3&&s.distanceTo(e.center)<e.radius&&t.push(s)}traverse(e){for(const t of this.children)t instanceof n?t.traverse(e):e(t)}}class i{constructor(e){this.pointCount=0,this.lineCount=0,this.root=new n(e,0)}add(e){e instanceof o.Line3?this.lineCount++:e instanceof o.Vector3&&this.pointCount++,this.root.add(e)}remove(e){e instanceof r?this.lineCount--:e instanceof a&&this.pointCount--,this.root.remove(e)}clear(){this.root.clear(),this.pointCount=0,this.lineCount=0}traverse(e){this.root.traverse(e)}raycast(e,t,s){const o=[];return this.root.raycast(e,t,o,s),o}}class r extends o.Line3{constructor(e,t){super(e,t),this.start=e,this.end=t,this.isSnapLine3=!0}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}clone(){return new r(this.start,this.end)}}class a extends o.Vector3{constructor(e){super(),this.point=e,this.isSnapVector3=!0,super.copy(e)}copy(e){return this.point.copy(e.point),this}clone(){return new a(this.point)}}},62569:(e,t,s)=>{s.d(t,{A:()=>n});const o=e=>""+e;class n{constructor(e=o){this.mappingFunction=e,this.list=[],this.map={}}add(e){const t=this.mappingFunction(e);return!this.map[t]&&(this.list.push(e),this.map[t]=e,!0)}set(e){const t=this.mappingFunction(e);return this.map[t]?(this.map[t]=e,!0):(this.add(e),!0)}count(){return this.list.length}*[Symbol.iterator](){for(const e of this.list)yield e}getByIndex(e){return this.list[e]}get(e){return this.map[e]}copyToList(e){return e.push(...this.list),e}clear(){this.list=[],this.map={}}mapElements(e){return this.list.map(e)}}}}]);