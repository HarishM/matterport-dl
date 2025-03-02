"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[6888],{58574:(e,t,s)=>{s.r(t),s.d(t,{OculusHandPointerModel:()=>p});var i=s(68909);const n=.01,o=.4,a=.01,r=.003,h=16,l=12,d=new i.Vector3(0,1,0),c=new i.Vector3(0,0,1);class p extends i.Object3D{constructor(e,t){super(),this.hand=e,this.controller=t,this.motionController=null,this.envMap=null,this.mesh=null,this.pointerGeometry=null,this.pointerMesh=null,this.pointerObject=null,this.pinched=!1,this.attached=!1,this.cursorObject=null,this.raycaster=null,this._onConnected=this._onConnected.bind(this),this._onDisconnected=this._onDisconnected.bind(this),this.hand.addEventListener("connected",this._onConnected),this.hand.addEventListener("disconnected",this._onDisconnected)}_onConnected(e){const t=e.data;t.hand&&(this.visible=!0,this.xrInputSource=t,this.createPointer())}_onDisconnected(){this.visible=!1,this.xrInputSource=null,this.pointerGeometry&&this.pointerGeometry.dispose(),this.pointerMesh&&this.pointerMesh.material&&this.pointerMesh.material.dispose(),this.clear()}_drawVerticesRing(e,t,s){const i=t.clone();for(let t=0;t<h;t++){i.applyAxisAngle(c,2*Math.PI/h);const n=s*h+t;e[3*n]=i.x,e[3*n+1]=i.y,e[3*n+2]=i.z}}_updatePointerVertices(e){const t=this.pointerGeometry.attributes.position.array,s=new i.Vector3(.002,0,-1*(.035-e));this._drawVerticesRing(t,s,0);const n=new i.Vector3(Math.sin(110*Math.PI/180)*e,Math.cos(110*Math.PI/180)*e,0);for(let e=0;e<l;e++)this._drawVerticesRing(t,n,e+1),n.applyAxisAngle(d,110*Math.PI/180/-24);const o=new i.Vector3(0,0,-1*(.035-e));t[624]=o.x,t[625]=o.y,t[626]=o.z;const a=new i.Vector3(0,0,e);t[627]=a.x,t[628]=a.y,t[629]=a.z,this.pointerGeometry.setAttribute("position",new i.Float32BufferAttribute(t,3))}createPointer(){let e,t;const s=new Array(630).fill(0),n=[];for(this.pointerGeometry=new i.BufferGeometry,this.pointerGeometry.setAttribute("position",new i.Float32BufferAttribute(s,3)),this._updatePointerVertices(a),e=0;e<l;e++){for(t=0;t<15;t++)n.push(e*h+t,e*h+t+1,(e+1)*h+t),n.push(e*h+t+1,(e+1)*h+t+1,(e+1)*h+t);n.push((e+1)*h-1,e*h,(e+2)*h-1),n.push(e*h,(e+1)*h,(e+2)*h-1)}for(e=0;e<15;e++)n.push(208,e+1,e),n.push(209,e+192,e+192+1);n.push(208,0,15),n.push(209,207,192);const r=new i.MeshBasicMaterial;r.transparent=!0,r.opacity=o,this.pointerGeometry.setIndex(n),this.pointerMesh=new i.Mesh(this.pointerGeometry,r),this.pointerMesh.position.set(0,0,-.01),this.pointerObject=new i.Object3D,this.pointerObject.add(this.pointerMesh),this.raycaster=new i.Raycaster;const d=new i.SphereGeometry(.02,10,10),c=new i.MeshBasicMaterial;c.transparent=!0,c.opacity=o,this.cursorObject=new i.Mesh(d,c),this.pointerObject.add(this.cursorObject),this.add(this.pointerObject)}_updateRaycaster(){if(this.raycaster){const e=this.pointerObject.matrixWorld,t=new i.Matrix4;t.identity().extractRotation(e),this.raycaster.ray.origin.setFromMatrixPosition(e),this.raycaster.ray.direction.set(0,0,-1).applyMatrix4(t)}}_updatePointer(){this.pointerObject.visible=this.controller.visible;const e=this.hand.joints["index-finger-tip"],t=this.hand.joints["thumb-tip"],s=e.position.distanceTo(t.position),i=e.position.clone().add(t.position).multiplyScalar(.5);this.pointerObject.position.copy(i),this.pointerObject.quaternion.copy(this.controller.quaternion),this.pinched=s<=.02;const h=(s-n)/.04,l=(s-n)/.01;if(h>1)this._updatePointerVertices(a),this.pointerMesh.position.set(0,0,-.01),this.pointerMesh.material.opacity=o;else if(h>0){const e=.007*h+r;this._updatePointerVertices(e),l<1?(this.pointerMesh.position.set(0,0,-1*e-.02*(1-l)),this.pointerMesh.material.opacity=o+.6*(1-l)):(this.pointerMesh.position.set(0,0,-1*e),this.pointerMesh.material.opacity=o)}else this._updatePointerVertices(r),this.pointerMesh.position.set(0,0,-.023),this.pointerMesh.material.opacity=1;this.cursorObject.material.opacity=this.pointerMesh.material.opacity}updateMatrixWorld(e){super.updateMatrixWorld(e),this.pointerGeometry&&(this._updatePointer(),this._updateRaycaster())}isPinched(){return this.pinched}setAttached(e){this.attached=e}isAttached(){return this.attached}intersectObject(e,t=!0){if(this.raycaster)return this.raycaster.intersectObject(e,t)}intersectObjects(e,t=!0){if(this.raycaster)return this.raycaster.intersectObjects(e,t)}checkIntersections(e,t=!1){if(this.raycaster&&!this.attached){const s=this.raycaster.intersectObjects(e,t),n=new i.Vector3(0,0,-1);if(s.length>0){const e=s[0].distance;this.cursorObject.position.copy(n.multiplyScalar(e))}else this.cursorObject.position.copy(n.multiplyScalar(1.5))}}setCursor(e){const t=new i.Vector3(0,0,-1);this.raycaster&&!this.attached&&this.cursorObject.position.copy(t.multiplyScalar(e))}dispose(){this._onDisconnected(),this.hand.removeEventListener("connected",this._onConnected),this.hand.removeEventListener("disconnected",this._onDisconnected)}}},30386:(e,t,s)=>{s.r(t),s.d(t,{XRControllerModelFactory:()=>m});var i=s(68909),n=s(17888);const o={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function a(e){const t=await fetch(e);if(t.ok)return t.json();throw new Error(t.statusText)}async function r(e,t,s=null,i=!0){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No basePath supplied");const n=await async function(e){if(!e)throw new Error("No basePath supplied");return await a(`${e}/profilesList.json`)}(t);let o;if(e.profiles.some((e=>{const s=n[e];return s&&(o={profileId:e,profilePath:`${t}/${s.path}`,deprecated:!!s.deprecated}),!!o})),!o){if(!s)throw new Error("No matching profile name found");const e=n[s];if(!e)throw new Error(`No matching profile name found and default profile "${s}" missing.`);o={profileId:s,profilePath:`${t}/${e.path}`,deprecated:!!e.deprecated}}const r=await a(o.profilePath);let h;if(i){let t;if(t="any"===e.handedness?r.layouts[Object.keys(r.layouts)[0]]:r.layouts[e.handedness],!t)throw new Error(`No matching handedness, ${e.handedness}, in profile ${o.profileId}`);t.assetPath&&(h=o.profilePath.replace("profile.json",t.assetPath))}return{profile:r,assetPath:h}}const h={xAxis:0,yAxis:0,button:0,state:o.ComponentState.DEFAULT};class l{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===o.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(h)}updateFromComponent({xAxis:e,yAxis:t,button:s,state:i}){const{normalizedXAxis:n,normalizedYAxis:a}=function(e=0,t=0){let s=e,i=t;if(Math.sqrt(e*e+t*t)>1){const n=Math.atan2(t,e);s=Math.cos(n),i=Math.sin(n)}return{normalizedXAxis:.5*s+.5,normalizedYAxis:.5*i+.5}}(e,t);switch(this.componentProperty){case o.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?n:.5;break;case o.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?a:.5;break;case o.ComponentProperty.BUTTON:this.value=this.states.includes(i)?s:0;break;case o.ComponentProperty.STATE:this.valueNodeProperty===o.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class d{constructor(e,t){if(!(e&&t&&t.visualResponses&&t.gamepadIndices&&0!==Object.keys(t.gamepadIndices).length))throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach((e=>{const s=new l(t.visualResponses[e]);this.visualResponses[e]=s})),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:o.ComponentState.DEFAULT,button:void 0!==this.gamepadIndices.button?0:void 0,xAxis:void 0!==this.gamepadIndices.xAxis?0:void 0,yAxis:void 0!==this.gamepadIndices.yAxis?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=o.ComponentState.DEFAULT,void 0!==this.gamepadIndices.button&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||1===this.values.button?this.values.state=o.ComponentState.PRESSED:(t.touched||this.values.button>o.ButtonTouchThreshold)&&(this.values.state=o.ComponentState.TOUCHED)}void 0!==this.gamepadIndices.xAxis&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===o.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>o.AxisTouchThreshold&&(this.values.state=o.ComponentState.TOUCHED)),void 0!==this.gamepadIndices.yAxis&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===o.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>o.AxisTouchThreshold&&(this.values.state=o.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach((e=>{e.updateFromComponent(this.values)}))}}class c{constructor(e,t,s){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=s,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach((e=>{const t=this.layoutDescription.components[e];this.components[e]=new d(e,t)})),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach((t=>{e.push(t.data)})),e}updateFromGamepad(){Object.values(this.components).forEach((e=>{e.updateFromGamepad(this.xrInputSource.gamepad)}))}}class p extends i.Object3D{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e||(this.envMap=e,this.traverse((e=>{e.isMesh&&(e.material.envMap=this.envMap,e.material.needsUpdate=!0)}))),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach((e=>{Object.values(e.visualResponses).forEach((e=>{const{valueNode:t,minNode:s,maxNode:i,value:n,valueNodeProperty:a}=e;t&&(a===o.VisualResponseProperty.VISIBILITY?t.visible=n:a===o.VisualResponseProperty.TRANSFORM&&(t.quaternion.slerpQuaternions(s.quaternion,i.quaternion,n),t.position.lerpVectors(s.position,i.position,n)))}))})))}}function u(e,t){!function(e,t){Object.values(e.components).forEach((e=>{const{type:s,touchPointNodeName:n,visualResponses:a}=e;if(s===o.ComponentType.TOUCHPAD)if(e.touchPointNode=t.getObjectByName(n),e.touchPointNode){const t=new i.SphereGeometry(.001),s=new i.MeshBasicMaterial({color:255}),n=new i.Mesh(t,s);e.touchPointNode.add(n)}else console.warn(`Could not find touch dot, ${e.touchPointNodeName}, in touchpad component ${e.id}`);Object.values(a).forEach((e=>{const{valueNodeName:s,minNodeName:i,maxNodeName:n,valueNodeProperty:a}=e;if(a===o.VisualResponseProperty.TRANSFORM){if(e.minNode=t.getObjectByName(i),e.maxNode=t.getObjectByName(n),!e.minNode)return void console.warn(`Could not find ${i} in the model`);if(!e.maxNode)return void console.warn(`Could not find ${n} in the model`)}e.valueNode=t.getObjectByName(s),e.valueNode||console.warn(`Could not find ${s} in the model`)}))}))}(e.motionController,t),e.envMap&&t.traverse((t=>{t.isMesh&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)})),e.add(t)}class m{constructor(e=null,t=null){this.gltfLoader=e,this.path="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new n.GLTFLoader)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new p;let s=null;return e.addEventListener("connected",(e=>{const i=e.data;"tracked-pointer"===i.targetRayMode&&i.gamepad&&!i.hand&&r(i,this.path,"generic-trigger").then((({profile:e,assetPath:n})=>{t.motionController=new c(i,e,n);const o=this._assetCache[t.motionController.assetUrl];if(o)s=o.scene.clone(),u(t,s),this.onLoad&&this.onLoad(s);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,(e=>{this._assetCache[t.motionController.assetUrl]=e,s=e.scene.clone(),u(t,s),this.onLoad&&this.onLoad(s)}),null,(()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)}))}})).catch((e=>{console.warn(e)}))})),e.addEventListener("disconnected",(()=>{t.motionController=null,t.remove(s),s=null})),t}}},73323:(e,t,s)=>{s.r(t),s.d(t,{XRHandMeshModel:()=>n});var i=s(17888);class n{constructor(e,t,s,n,o=null,a=null){this.controller=t,this.handModel=e,this.bones=[],null===o&&(o=new i.GLTFLoader).setPath(s||"https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/"),o.load(`${n}.glb`,(e=>{const t=e.scene.children[0];this.handModel.add(t);const s=t.getObjectByProperty("type","SkinnedMesh");s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0;["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach((e=>{const s=t.getObjectByName(e);void 0!==s?s.jointName=e:console.warn(`Couldn't find ${e} in ${n} hand mesh`),this.bones.push(s)})),a&&a(t)}))}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const s=this.bones[t];if(s){const t=e[s.jointName];if(t.visible){const e=t.position;s.position.copy(e),s.quaternion.copy(t.quaternion)}}}}}},50308:(e,t,s)=>{s.r(t),s.d(t,{XRHandModelFactory:()=>r});var i=s(68909),n=s(74151),o=s(73323);class a extends i.Object3D{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}class r{constructor(e=null,t=null){this.gltfLoader=e,this.path=null,this.onLoad=t}setPath(e){return this.path=e,this}createHandModel(e,t){const s=new a(e);return e.addEventListener("connected",(i=>{const a=i.data;a.hand&&!s.motionController&&(s.xrInputSource=a,void 0===t||"spheres"===t?s.motionController=new n.XRHandPrimitiveModel(s,e,this.path,a.handedness,{primitive:"sphere"}):"boxes"===t?s.motionController=new n.XRHandPrimitiveModel(s,e,this.path,a.handedness,{primitive:"box"}):"mesh"===t&&(s.motionController=new o.XRHandMeshModel(s,e,this.path,a.handedness,this.gltfLoader,this.onLoad))),e.visible=!0})),e.addEventListener("disconnected",(()=>{e.visible=!1})),s}}},74151:(e,t,s)=>{s.r(t),s.d(t,{XRHandPrimitiveModel:()=>a});var i=s(68909);const n=new i.Matrix4,o=new i.Vector3;class a{constructor(e,t,s,n,o){let a;this.controller=t,this.handModel=e,this.envMap=null,o&&o.primitive&&"sphere"!==o.primitive?"box"===o.primitive&&(a=new i.BoxGeometry(1,1,1)):a=new i.SphereGeometry(1,10,10);const r=new i.MeshStandardMaterial;this.handMesh=new i.InstancedMesh(a,r,30),this.handMesh.frustumCulled=!1,this.handMesh.instanceMatrix.setUsage(i.DynamicDrawUsage),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const e=this.controller.joints;let t=0;for(let s=0;s<this.joints.length;s++){const i=e[this.joints[s]];i.visible&&(o.setScalar(i.jointRadius||.008),n.compose(i.position,i.quaternion,o),this.handMesh.setMatrixAt(s,n),t++)}this.handMesh.count=t,this.handMesh.instanceMatrix.needsUpdate=!0}}}}]);