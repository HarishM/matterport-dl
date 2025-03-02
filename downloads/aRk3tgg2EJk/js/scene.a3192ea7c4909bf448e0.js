"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[5001],{98741:(i,t,e)=>{e.d(t,{My:()=>l,W:()=>c,YB:()=>o,ho:()=>s,nq:()=>a,u3:()=>r});var n=e(18268);class s extends n.u{constructor(i){super(),this.payload={exclude:i||[]}}}s.id="PLUGIN_RESET_ALL";class o extends n.u{constructor(i,t,e,n){super(),this.payload={name:i,config:t,configMeta:e,permissions:n||{}}}}o.id="PLUGIN_RELOAD";class a extends n.u{constructor(i,t,e,n){super(),this.payload={name:i,config:t,configMeta:e,permissions:n||{}}}}a.id="PLUGIN_LOAD";class r extends n.u{constructor(i){super(),this.payload={name:i}}}r.id="PLUGIN_UNLOAD";class l extends n.u{constructor(i,t){super(),this.payload={operation:i,callback:t}}}l.id="PLUGIN_CONFIG_FETCH_DATA";class c extends n.u{constructor(i,t){super(),this.payload={attachmentId:i,pluginId:t}}}c.id="ATTACHMENT_ASSOCIATE_WITH_PLUGIN";class u extends n.u{constructor(i,t){super(),this.payload={attachmentId:i,pluginId:t}}}u.id="ATTACHMENT_DISSOCIATE_FROM_PLUGIN"},33198:(i,t,e)=>{e.r(t),e.d(t,{LIST_EDIT_ONLY:()=>n.L$,PluginConfigData:()=>n.Y7,default:()=>L,getPluginMetadataUrl:()=>m,getPluginUrl:()=>v,manifestEndpoint:()=>n.TR});var n=e(64294),s=e(35596),o=e(23205),a=e(35223),r=e(47905),l=e(49475);const c="0.0";function u(i){if(!i)return[];const t={[c]:d}[c];if(!t)throw new Error(`[PluginConfigDeserializer] Data with version "${i.version}": not recognized.`);return t(i)}function d(i){return i[c]}const g="0.0";function h(i){const t={[g]:p};if(!i)throw new Error("[PluginConfigSerializer] no data to serialize.");const e=t[g];if(!e)throw new Error(`[PluginConfigSerializer] Version "${g}" not recognized.`);return e(i)}function p(i){return{[g]:i}}class f extends l.xO{constructor(i,t,e){super({queue:i,path:`${t}/api/v1/jsonstore/model/plugins/${e}`,batchUpdate:!0,deserialize:u,serialize:h}),this.config.cachedData={data:null}}}function v(i,t,e){return e+`${i}/${t}/${i}.js`}function m(i,t,e){return e+`${i}/${t}/plugin.json`}const y=i=>{var t,e,n;return null!==(n=null===(e=null===(t=null==i?void 0:i.src)||void 0===t?void 0:t.match(/(\d+\.\d+\.\d+)\/[^\/]*\.js$/))||void 0===e?void 0:e[1])&&void 0!==n?n:null};var D=e(44383),P=e(58838),C=e(10060),b=e(99589),w=e(61334),$=e(98741),S=e(95149),U=e(41733);const O="unknown-app-key",I="manifest";class L extends o.n{constructor(){super(...arguments),this.name="plugin-config",this._registryLoaded=new U.L(!1)}get serviceSdkKey(){if(!this._applicationKey)throw new Error("[PluginConfigData] service key has not yet been set.");return this._applicationKey}get canOverrideStrict(){var i,t;return null===(t=null===(i=this._config)||void 0===i?void 0:i.pluginPolicies)||void 0===t?void 0:t.canDebug}get registryLoadedObservable(){return this._registryLoaded}get registryLoaded(){return this._registryLoaded.value}async init(i,t){this.queue=i.queue,this.pluginConfigData=new n.Y7,this._config=i;if([this._policyData,this._layersData]=await Promise.all([t.market.waitForData(P.L),t.market.waitForData(w.P)]),i.pluginPolicies.enabled){const e=(await t.getModuleBySymbol(a.qL)).getApi(),n=await e.getAppKey("showcase","plugin");if(n instanceof Object){const t=n;this.initializePluginRegistry(t,i).then((async()=>{await this.setupConfigStore(i.apiHostBaseUrl,i.modelId,false),this._registryLoaded.value=!0})).catch((i=>{this.log.error(i)}))}}t.commandBinder.addBinding($.W,(async i=>{var t,e;const n=(await this.pluginConfigData.getMdsResult()).find((t=>t.name===i.pluginId)),s=null!==(e=null===(t=null==n?void 0:n.attachments)||void 0===t?void 0:t.map((i=>i.id)))&&void 0!==e?e:[];this.pluginConfigData.updateMds({name:i.pluginId,attachments:[...s,i.attachmentId]})})),t.market.register(this,n.Y7,this.pluginConfigData)}async saveToMds(i){var t;if(!this.pluginConfigData.mdsIsSetup)return void this.log.warn("Plugin changes will NOT be saved");const e=null!==(t=y(i))&&void 0!==t?t:"0.0.0";if(!this._manifest.find((t=>t.name===i.id&&t.versions[e])))return void this.log.warn(`Version ${e} does not exist in registry. Changes not saved to MDS.`);const n=[];i.config.photoUrl&&n.push(i.config.photoUrl),i.config.logoUrl&&n.push(i.config.logoUrl);const s={name:i.id,version:e};n.length>0&&(s.attachments=n),this.pluginConfigData.updateMds(s)}deleteFromMds(i){this.pluginConfigData.mdsIsSetup?this.pluginConfigData.deleteMdsById(i.id):this.log.warn("Plugin changes will NOT be saved")}saveConfig(i,t){const e=this.pluginConfigData.lastSavedConfiguration.values();this.log.debugInfo(`configuration for ${i.id} updated. ${JSON.stringify(e,void 0,2)}`),i.enabled?this.saveToMds(i):this.deleteFromMds(i),this.currentStore.update(e)}async setupConfigStore(i,t,e){let n;this.currentStore=new f(this.queue,i,t),this.pluginConfigData.setupConfigStore(this._layersData.mdsContext,e,i);try{n=await this.currentStore.read()||[],this.log.debugWarn(`Saved configuration data loaded for ${n.length} plugin(s).`),this.log.debugInfo(JSON.stringify(n,void 0,2))}catch(i){n=[],this.log.error("Failed to load configured plugins: ",i)}this.pluginConfigData.lastSavedConfiguration.replace(n),this.pluginConfigData.lastSavedConfiguration.onElementChanged({onAdded:this.saveConfig.bind(this),onUpdated:this.saveConfig.bind(this),onRemoved:this.deleteFromMds.bind(this)}),this.pluginConfigData.pluginConfigReady.resolve()}getAutoUpgradedVersion(i,t){var e;const n=Object.keys(t.versions).sort(((i,t)=>C.h.compare(t,i))).filter((i=>this.hasRequiredPolicies(t.versions[i].requiredPolicies))),s=null!==(e=b.maxSatisfying(n,`~${i}`))&&void 0!==e?e:i,o=t.currentVersion;let a=s;return b.gt(s,o)&&(a=o),a}dispose(i){super.dispose(i),i.market.unregister(this,n.Y7),this.pluginConfigData=void 0}async initializePluginRegistry(i,t){const{manifestUrl:e,applicationKey:n}=this.getManifestUrl(i,t);this._applicationKey=n;const s=await this.queue.get(e,{responseType:"json"}).catch((i=>(this.log.error(i),null)));null!==s?(this._manifest=s,await this.populateFromManifest(s,i,n)):this.log.error("Plugin manifest could not be found, please contact support.")}getManifestUrl(i,t,e=!0){var s;let o=this._config.apiHostBaseUrl+n.TR,a=i.applicationKey;if(this.pluginConfigData.pluginVersion){const i=this.pluginConfigData.pluginVersion.match(/^(https?:\/\/)?(localhost|127.0.0.1)(:\d*)?(\/(\w+-)?manifest.json)?$/)||this.pluginConfigData.pluginVersion.match(/^(draft|edge|local)$/);if(i){const t=["draft","edge","local"].includes(i[1]),e="edge"===i[1],n=window.location.protocol+"//",a=t?n:i[1]||n,r=t?"localhost":i[2]||"localhost",l=i[3]||":8800",c=e?"/edge-manifest.json":i[4]||"/draft-manifest.json",u=null===(s=i[5])||void 0===s?void 0:s.slice(0,-1);o=`${a}${r}${l}${c}?${I}=${u||"true"}`,this.log.devInfo(`Using local manifest override: ${o}`),i[5]&&this.log.devInfo("with specified plugin name",u)}else{const i=this.pluginConfigData.pluginVersion.match(/^(?:([a-zA-Z-]+)-)?\d+\.\d+\.\d+-\d+-g[0-9a-f]{7}/);o+=i?`?v=${i[0]}&${I}=${i[1]||"true"}`:`?v=${this.pluginConfigData.pluginVersion}&${I}=true`}}else this.pluginConfigData.manifestUrl&&((0,D.Jt)(this.pluginConfigData.manifestUrl)||t.pluginPolicies.canDebug)?o=this.pluginConfigData.manifestUrl:o+=`?${I}=true`;return this.log.devInfo(`Using manifest URL: ${o}`),(o.match(/localhost/)||o.match(/127.0.0.1/))&&e&&!t.pluginPolicies.canDebug&&(a=O),{manifestUrl:o,applicationKey:a}}async populateFromManifest(i,t,e){const n=[];for(const s of i)n.push(this.registerManifestEntry(s,t,e));await Promise.all(n)}async registerManifestEntry(i,t,e){var n,s,o;const a=this.findLatestPermittedVersion(i.versions,i.currentVersion);if(!a)return;i.currentVersion=a;const r=Object.assign(Object.assign({},i),{src:i.src||v(i.name,i.currentVersion,t.baseUrl),meta:i.meta||m(i.name,i.currentVersion,t.baseUrl),icon:i.icon||"",applicationKey:i.applicationKey||e||O,fetchLevel:null!==(n=i.fetchLevel)&&void 0!==n?n:this.pluginConfigData.defaultFetchLevel});if(!(0,D.Jt)(r.src)||!(0,D.Jt)(r.meta))return;const l=await this.queue.get(r.meta,{responseType:"json"}).catch((i=>{this.log.error(i)}));var c,u,d;l&&this.pluginConfigData.add({name:r.name,description:l.description,version:r.currentVersion,config:l.config||{},outputs:l.outputs||{},applicationKey:r.applicationKey||O,src:r.src,meta:r.meta,icon:(null===(s=l.options)||void 0===s?void 0:s.icon)?r.icon||(c=i.name,u=i.currentVersion,d=t.baseUrl,d+`${c}/${u}/${c}.svg`):void 0,enabled:!1,strict:this.canOverrideStrict&&null!==this.pluginConfigData.defaultStrict?this.pluginConfigData.defaultStrict:r.sesStrict,fetchLevel:null!==(o=r.fetchLevel)&&void 0!==o?o:this.pluginConfigData.defaultFetchLevel,options:l.options,peerDependencies:l.peerDependencies})}findLatestPermittedVersion(i,t){const e=Object.keys(i).sort(((i,t)=>C.h.compare(t,i)));for(const n of e){const e=i[n].requiredPolicies;if(!C.h.gt(n,t)&&this.hasRequiredPolicies(e))return n}return null}hasRequiredPolicies(i){if(!i||0===i.length)return!0;const t=this._config.pluginPolicies.groups||[],e=i=>-1===i.indexOf(".")?-1!==t.indexOf(i):this._policyData.hasPolicy(i);return i.reduce(((i,t)=>{if(!i)return i;if(t instanceof Object){if("or"===t.operator)return t.policies.some((i=>e(i)));if("xor"===t.operator){let i=0;return t.policies.forEach((t=>{i+=e(t)?1:0})),1===i}return this.log.warn(`unrecognized required policy entry, operator: <${t.operator}> - plugin disabled`),!1}return e(t)}),!0)}checkMLSMode(i,t,e,n){var s;if(i){if(!t.meta)return this.log.warn(`MLS mode requires plugin meta. Plugin meta URL missing from plugin "${null==n?void 0:n.id}"`),!1;if(!(null===(s=null==e?void 0:e.options)||void 0===s?void 0:s.mlsEnabled))return this.log.info(`Plugin "${null==n?void 0:n.id}" not allowed in MLS mode.`),!1}return!0}checkEditOnly(i,t,e){var n;return!(null===(n=null==t?void 0:t.options)||void 0===n?void 0:n.editOnly)||i===s.lg.WORKSHOP||(this.log.info(`Plugin "${null==e?void 0:e.id}" is edit-only and cannot be loaded in Showcase.`),!1)}updatePatchInProduction(i){var t;const e=y(i),n=this._manifest.find((t=>t.name===i.id));if(e&&n){const s=this.getAutoUpgradedVersion(e,n);null!==s&&s!==e&&(this.log.debugInfo(`Replacing ${n.name} version ${e} with version ${s}`),i.src=i.src.replace(e,s),i.meta=null===(t=i.meta)||void 0===t?void 0:t.replace(e,s))}else this.log.debugInfo(`Missing config version or manifest entry for ${i.id}. Not auto-updating patch for this plugin.`)}async getConfiguredPlugins(i){const t=await this.currentStore.read()||[],e=[],n=(0,S.P3)("mls",0);return t.forEach((t=>{var s,o,a,l;if(t.enabled){const c=this.pluginConfigData.availablePlugins.get(t.id);let u=!(c&&(!c||void 0!==c.strict))||c.strict;if(!c)return this.log.warn(`"${t.id}" plugin not found in current plugin manifest -- was it configured with a different one?`),void this.log.warn(`Unrecognized plugin disallowed "${null==t?void 0:t.id}" cannot load from ${null==t?void 0:t.src}`);const d={config:t.config||{},src:t.src||c.src,meta:t.meta||c.meta,id:t.id||c.name,strict:u,applicationKey:null==c?void 0:c.applicationKey,fetchLevel:null!==(s=null==c?void 0:c.fetchLevel)&&void 0!==s?s:r.D.None,peerDependencies:null!==(o=null==c?void 0:c.peerDependencies)&&void 0!==o?o:{}};if(!this.checkMLSMode(n,d,c,t))return;if(!this.checkEditOnly(i,c,t))return;this.updatePatchInProduction(d),d.canPlaceInGrid=(null===(a=null==c?void 0:c.options)||void 0===a?void 0:a.canPlaceInGrid)||!1,d.hideViewToggle=(null===(l=null==c?void 0:c.options)||void 0===l?void 0:l.hideViewToggle)||!1,e.push(d)}})),this.log.debugWarn(`Readied configuration data for ${e.length} plugin(s).`),this.log.debugInfo(JSON.stringify(e,void 0,2)),e}}},8764:(i,t,e)=>{e.d(t,{D:()=>o,H:()=>a});var n=e(47952),s=e(23893);const o=(0,n.v)(s.kR),a=i=>{const t=o();return(null==t?void 0:t.getEmbeddable(i))||[]}},96899:(i,t,e)=>{e.r(t),e.d(t,{PluginUIData:()=>n.kR,SlotType:()=>n.nT,default:()=>o,usePluginUI:()=>a.H,usePluginUiData:()=>a.D});var n=e(23893),s=e(23205);class o extends s.n{constructor(){super(...arguments),this.name="plugin-ui"}async init(i,t){this.engine=t,this.pluginUiData=new n.kR(i.mainDiv),this.engine.market.register(this,n.kR,this.pluginUiData)}dispose(i){this.pluginUiData.dispose(),this.engine.market.unregister(this,n.kR),super.dispose(i)}}var a=e(8764)},49475:(i,t,e)=>{e.d(t,{xO:()=>l});var n,s=e(95226),o=e(83662);!function(i){i.GET="GET",i.POST="POST",i.PATCH="PATCH",i.PUT="PUT",i.DELETE="DELETE",i.OPTIONS="OPTIONS"}(n||(n={}));class a{constructor(){this._options={responseType:"json"}}get options(){const i=this._options;return i.headers=(0,o.v)(this.url,this._options.headers||{}),i}}class r extends a{constructor(i){super(),this.config=i,this.url=i.path}async read(){const{deserialize:i}=this.config;let t=null;return this.config.cachedData&&this.config.cachedData.data?t=this.config.cachedData.data:(t=await this.config.queue.get(this.config.path,this.options),this.config.cachedData&&(this.config.cachedData.data=t)),i(t)}clearCache(){this.config.cachedData&&(this.config.cachedData.data=null)}}class l extends r{constructor(i){super(i),this.config=i,this.acceptsPartial=!1,this.config.batchUpdate="batchUpdate"in this.config&&this.config.batchUpdate}async create(i){throw Error("Not implemented")}updateBatch(i,t){const{serialize:e}=this.config,s=[],o=[...new Set([...Object.keys(i),...Object.keys(t)])];for(const e of o){i[e]||t[e]||s.push(this.config.queue.delete(`${this.config.path}/${e}`,this.options))}const a=e(i,t),r=Object.assign(Object.assign({},this.options),{body:a});return s.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,r)),Promise.all(s)}updateInternal(i,t){const{serialize:e}=this.config,o=[],a=Object.assign({},this.options),r=Object.keys(i),l=Object.keys(t),c=(0,s.ij)(r.concat(l));for(const s in c){const r=c[s],l=i[r]||t[r];if(l){const i={};i[r]=l;const s={},c=t[r];c&&(s[r]=c);const u=e(i,s);a.body=u,o.push(this.config.queue.request(this.config.httpMethod||n.POST,this.config.path,a))}else o.push(this.config.queue.delete(`${this.config.path}/${r}`,this.options))}return Promise.all(o)}async update(i,t){this.clearCache(),await(this.config.batchUpdate?this.updateBatch(i,t||{}):this.updateInternal(i,t||{}))}async delete(i){throw Error("Not implemented")}}},10060:(i,t,e)=>{var n;e.d(t,{h:()=>n}),function(i){function t(i){return i.split(".").reduce(((i,t)=>{const e=parseInt(t,10);return isNaN(e)||i.push(e),i}),[])}function e(i,e){const n=t(i),s=t(e);for(let i=0;i<n.length;i++){if(i>=s.length)return 1;if(n[i]!==s[i])return n[i]>s[i]?1:-1}return s.length>n.length?-1:0}i.parse=t,i.gt=function(i,t){return 1===e(i,t)},i.gte=function(i,t){const n=e(i,t);return 0===n||1===n},i.lt=function(i,t){return-1===e(i,t)},i.eq=function(i,t){return 0===e(i,t)},i.compare=e}(n||(n={}))}}]);