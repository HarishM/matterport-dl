"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[8221],{8221:(a,e,s)=>{s.r(e),s.d(e,{DeepLinksModuleKey:()=>f.r,default:()=>E});var t=s(23205),r=s(45018),i=s(92590),o=s(49191),n=s(48064),c=s(44383),l=s(69505);class h{constructor(a,e,s,t,r){this.cameraData=a,this.viewmodeData=e,this.floorsViewData=s,this.sweepData=t,this.settingsData=r,this.name="deeplinks",this.defaultBaseUrl=(0,c.kh)(),this.requiredParams=[...h.requiredUrlParams]}createLink(a){const{baseHref:e,additionalParams:s,paramFilter:t,thisArg:r}=a||{},i=new URLSearchParams(window.location.search),o=new URL(e||this.defaultBaseUrl.href);return this.appendParams(o.searchParams,i),t&&this.filterParamsFromURL(o,t,r),s&&this.appendParamsFromDictionary(o.searchParams,s),this.removeStartParams(o),this.dedupeModelParam(o),o}createModelLink(a,e){const{baseHref:s,additionalParams:t,paramFilter:r,thisArg:i}=e||{},o=new URLSearchParams(window.location.search),n=new URL(s||this.defaultBaseUrl.href);return this.appendParams(n.searchParams,o),r&&this.filterParamsFromURL(n,r,i),t&&this.appendParamsFromDictionary(n.searchParams,t),this.removeStartParams(n),this.dedupeModelParam(n),n}createDeepLink(a){const{baseHref:e,additionalParams:s,paramFilter:t,thisArg:r}=a||{},i=new URLSearchParams(l.s.getQueryString({cameraData:this.cameraData,floorsViewData:this.floorsViewData,sweepData:this.sweepData,viewmodeData:this.viewmodeData,settingsData:this.settingsData})),o=new URLSearchParams(window.location.search),n=new URL(e||this.defaultBaseUrl.href);this.appendParams(n.searchParams,o),this.removeStartParams(n),t&&this.filterParamsFromURL(n,t,r);for(const[a,e]of i)l.s.navigationKeys.has(a)&&n.searchParams.set(a,e);if(s){const a=Object.assign({},s);for(const e of l.s.navigationKeys)delete a[e];this.appendParamsFromDictionary(n.searchParams,a)}return this.dedupeModelParam(n),n}setDefaultBaseHref(a,e){this.defaultBaseUrl=new URL(a),this.requiredParams=[...h.requiredUrlParams,...e]}filterParamsFromURL(a,e,s){const t=new Set;for(const[r,i]of a.searchParams)this.requiredParams.includes(r)||e.call(s,r,i)||t.add(r);for(const e of t)a.searchParams.delete(e)}dedupeModelParam(a){const e=a.searchParams.get("m")||a.searchParams.get("model")||"";a.searchParams.delete("model"),a.searchParams.set("m",e)}removeStartParams(a){["start","sm","sp","sq","sr","ss","sf","sz"].forEach(a.searchParams.delete,a.searchParams)}appendParams(a,e){for(const[s,t]of e)a.set(s,t)}appendParamsFromDictionary(a,e){for(const[s,t]of Object.entries(e))a.set(s,t)}}h.requiredUrlParams=["m","model"];var m,d=s(4232);!function(a){a[a.SAME_ORIGIN=0]="SAME_ORIGIN",a[a.EXTERNAL=1]="EXTERNAL",a[a.MODEL=2]="MODEL",a[a.NAVIGATION=3]="NAVIGATION"}(m||(m={}));var P,N=s(1902);!function(a){a[a.IN_FRAME=0]="IN_FRAME",a[a.NEW_WINDOW=1]="NEW_WINDOW",a[a.CUSTOM=2]="CUSTOM"}(P||(P={}));class w{constructor(a){this.commandBinder=a,this.defaultPolicy={[m.NAVIGATION]:P.IN_FRAME,[m.MODEL]:P.IN_FRAME,[m.SAME_ORIGIN]:P.NEW_WINDOW,[m.EXTERNAL]:P.NEW_WINDOW},this.activePolicy=Object.assign({},this.defaultPolicy),this.linkHandlers={[m.NAVIGATION]:{[P.IN_FRAME]:a=>{const e=l.s.deserialize(a);e&&this.navigateToPose(e)},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[m.NAVIGATION](a)},[m.MODEL]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[m.MODEL](a)},[m.SAME_ORIGIN]:{[P.IN_FRAME]:a=>this.replaceFrameLocation(a),[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[m.SAME_ORIGIN](a)},[m.EXTERNAL]:{[P.IN_FRAME]:()=>{throw Error("Navigating Showcase's frame to an external domain is not supported.")},[P.NEW_WINDOW]:a=>this.openNewWindow(a),[P.CUSTOM]:a=>this.customHandlers[m.EXTERNAL](a)}},this.customHandlers={[m.NAVIGATION]:a=>{},[m.MODEL]:a=>{},[m.SAME_ORIGIN]:a=>{},[m.EXTERNAL]:a=>{}}}get HandlingPolicy(){return P}setPolicy(a,e,s){e===P.CUSTOM&&s&&(this.customHandlers[a]=s),this.activePolicy[a]=e}resetPolicy(a){this.activePolicy[a]=this.defaultPolicy[a]}openLink(a){if(function(a){return(0,d.G)(a)&&"pose"in a}(a)){const e=this.activePolicy[m.NAVIGATION];this.linkHandlers[m.NAVIGATION][e](a.fullLink)}else if(function(a){return(0,d.G)(a)&&"modelId"in a}(a)){const e=this.activePolicy[m.MODEL],s=new URL(window.location.href),t=new URL(a.fullLink),r=s.searchParams.get("applicationKey");s.search=t.search,s.searchParams.delete("m"),s.searchParams.delete("model"),s.searchParams.set("m",a.modelId),s.searchParams.set("play","1"),r&&s.searchParams.set("applicationKey",r),this.linkHandlers[m.MODEL][e](s.href)}else try{const e=new URL(a);if(e.origin===document.referrer||e.origin===window.location.origin){const e=this.activePolicy[m.SAME_ORIGIN];this.linkHandlers[m.SAME_ORIGIN][e](a)}else{const e=this.activePolicy[m.EXTERNAL];this.linkHandlers[m.EXTERNAL][e](a)}}catch(e){const s=this.activePolicy[m.EXTERNAL];this.linkHandlers[m.EXTERNAL][s](a)}}replaceFrameLocation(a){window.location.replace(a)}openNewWindow(a){window.open(a)}navigateToPose(a){this.commandBinder.issueCommand(new N.r(a))}}var p=s(28997),f=s(9389);const E=class extends t.n{constructor(){super(...arguments),this.name="deep linker"}async init(a,e){const[s,t,c,l,m]=await Promise.all([e.market.waitForData(r.M),e.market.waitForData(n.X),e.market.waitForData(i.X),e.market.waitForData(o.A),e.market.waitForData(p.o)]);this.creator=new h(s,t,c,l,m),this.handler=new w(e.commandBinder)}get LinkType(){return m}}}}]);