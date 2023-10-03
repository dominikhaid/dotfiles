(()=>{var e={4935:(e,t,n)=>{const r=n(7166),a=n(1353),o=a.default||a,s=r.bind(o);for(var i in o)s[i]=o[i];e.exports=s},4575:(e,t,n)=>{"use strict";n.d(t,{El:()=>o,WM:()=>s,JH:()=>l,vW:()=>d,w1:()=>E,xK:()=>m,qB:()=>p,Jn:()=>g});var r=n(4586),a=n(9268);const o="VPN",s="CLEANWEB";function i(e){const{hostname:t,isIp:n,domain:r}=(0,a.S)(e.replace(/\*/g,"a"),{validateHostname:!0});return null!=t&&(n||null!=r)}function l({value:e,includeSubdomains:t=!0,features:n}){if(!i(e))throw new Error("Param `value` must be valid hostname!");const a=n&&n.length&&Array.from(new Set(n));return{id:(0,r.Z)(),value:e,createdAt:Date.now(),updatedAt:Date.now(),includeSubdomains:t,...a&&{features:a}}}function c({domain:e,subdomain:t},{domainRex:n,domain:r,subdomainRex:a,subdomain:o}){return(n?n.test(e):r===e)&&(null==o||(a?a.test(t):"*"===o&&!!t||o===t))}function u(e){if(!e)return null;const{domain:t,subdomain:n,hostname:r}=(0,a.r)(e);return r?{domain:(t||r).toLocaleLowerCase(),subdomain:(n||"").toLocaleLowerCase()}:null}const h=e=>e.toLocaleLowerCase().replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d").replace(/\\\*/g,"\\S*");function d(e){const{value:t,includeSubdomains:n,features:r}=e,{domain:o,subdomain:s,hostname:i}=(0,a.r)(t),l=o?o.toLowerCase():i,c=n&&o?void 0:s||"";return{source:e,hostname:i,domain:l,domainRex:l.includes("*")?new RegExp(`^${h(l)}$`):void 0,subdomain:c,subdomainRex:c&&"*"!==c&&c.includes("*")?new RegExp(`^${h(c)}$`):void 0,features:new Set(r)}}function E(e,t){const n=u(t);return n&&e.find((e=>c(n,e)))||null}function m(e,t){const n=u(t);return n&&e.filter((e=>c(n,e)))||[]}const p=(e,t)=>e.hostname===t.hostname;function g(e,t,n){if(!i(t))return"invalid_url";const r=d(l({value:t}));return e.some((e=>e.source.id!==n&&p(e,r)))?"duplicate":null}},108:(e,t,n)=>{"use strict";n.d(t,{KE:()=>g}),n(5827);var r=n(8949),a=n(1063),o=n(2015),s=n(474),i=n(4575);const{CONSENT_BLOCKER_BYPASS_LIST:l,SETTINGS:c}=o.I,{BYPASS_LIST:u,BYPASS_RULES:h,BYPASS_SUBDOMAINS:d}=c;async function E(){await(0,s.JG)(l,h,d,u,(({[l]:e,[h]:t,[d]:n,[u]:r})=>{if(!Array.isArray(e)&&!Array.isArray(t))return;if(!(null!=e&&e.length||null!=t&&t.length))return{[u]:r};const a=(e||[]).map((({domain:e})=>(0,i.vW)((0,i.JH)({value:e,features:[i.WM]})))),o=(t||[]).map((({rule:e})=>(0,i.vW)((0,i.JH)({value:e.replace(/^\./g,"*."),includeSubdomains:n,features:[i.El]})))).reduce(((e,t)=>{const n=e.find((e=>(0,i.qB)(e,t)));return n?n.source.features=[i.WM,i.El]:e.push(t),e}),a);return{[u]:o.map((e=>e.source))}}))}const m=e=>e.features.has(i.El),p=e=>e.features.has(i.WM),g=(0,r.LO)({fresh:!1,rules:[],get compiled(){return this.rules.map(i.vW)},get isFull(){return this.rules.length>=150},get vpnRules(){return this.compiled.filter(m)},get cleanWebRules(){return this.compiled.filter(p)},validateRuleValue(e,t){return(0,i.Jn)(this.compiled,e,t)},rulesByURL(e){return(0,i.xK)(this.compiled,e).map((e=>e.source))},bypassURL(e){return!!(0,i.w1)(this.compiled,e)},bypassVPNURL(e){return!e||!!(0,i.w1)(this.vpnRules,e)},bypassCleanWebURL(e){return!e||!!(0,i.w1)(this.cleanWebRules,e)}},void 0,{deep:!1,autoBind:!0,name:"bypasserStore"}),f=(0,r.aD)((e=>Object.assign(g,e)));(0,a.M)(g,["fresh","rules"],(()=>{let e,t=!0;const n=new Promise((t=>{e=(0,s.Ld)(u,((e=[])=>{f({rules:e}),t()}))}));return Promise.all([E(),n]).then((()=>f({fresh:t}))),()=>{t=!1,f({fresh:t}),e()}}))},6875:(e,t,n)=>{"use strict";n.d(t,{KE:()=>r.KE}),n(4575);var r=n(108)},3358:(e,t,n)=>{"use strict";n.d(t,{V:()=>c});var r=n(8949),a=n(2015),o=n(1063),s=n(474);const{EXPERIMENTS:i}=a.I,l={fresh:!1,data:new Map,get items(){return Array.from(this.data.values()).map((({test:e,variant:t})=>`${e}:${t}`))},isEnabled(e,t="b"){var n;return(null===(n=this.data.get(e))||void 0===n?void 0:n.variant)===t},getConfig(e){var t;return null===(t=this.data.get(e))||void 0===t?void 0:t.config},get isLanguageTooltipEnabled(){return this.isEnabled("feature_language_tooltip")},get isProxySelfhealEnabled(){return this.isEnabled("feature_proxy_self_heal")},get removedLanguages(){if(this.isEnabled("feature_language_removal"))return(this.getConfig("feature_language_removal")||{}).languages||[]}},c=(0,r.LO)(l,void 0,{name:"experimentsStore",deep:!1,autoBind:!0}),u=(0,r.aD)((e=>Object.assign(c,e)));(0,o.M)(c,["fresh","data"],(()=>{let e=!0;const t=(0,s.Ld)(i,((t=[])=>{u({fresh:e,data:new Map(t.filter((e=>(null==e?void 0:e.test)&&(null==e?void 0:e.variant))).map((e=>[e.test,e])))})}));return()=>{e=!1,u({fresh:e}),t()}}))},8188:(e,t,n)=>{"use strict";n.d(t,{xo:()=>i});var r=n(4586);const a={protocolVersion:"v",trackingId:"tid",webPropertyId:"tid",anonymizeIp:"aip",dataSource:"ds",queueTime:"qt",cacheBuster:"z",clientId:"cid",userId:"uid",sessionControl:"sc",ipOverride:"uip",userAgentOverride:"ua",documentReferrer:"dr",campaignName:"cn",campaignSource:"cs",campaignMedium:"cm",campaignKeyword:"ck",campaignContent:"cc",campaignId:"ci",googleAdwordsId:"gclid",googleDisplayAdsId:"dclid",screenResolution:"sr",viewportSize:"vp",documentEncoding:"de",screenColors:"sd",userLanguage:"ul",javaEnabled:"je",flashVersion:"fl",hitType:"t","non-interactionHit":"ni",documentLocationUrl:"dl",documentHostName:"dh",documentPath:"dp",documentTitle:"dt",screenName:"cd",linkId:"linkid",applicationName:"an",applicationId:"aid",applicationVersion:"av",applicationInstallerId:"aiid",eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",transactionId:"ti",transactionAffiliation:"ta",transactionRevenue:"tr",transactionShipping:"ts",transactionTax:"tt",itemName:"in",itemPrice:"ip",itemQuantity:"iq",itemCode:"ic",itemCategory:"iv",currencyCode:"cu",socialNetwork:"sn",socialAction:"sa",socialActionTarget:"st",userTimingCategory:"utc",userTimingVariableName:"utv",userTimingTime:"utt",userTimingLabel:"utl",pageLoadTime:"plt",dnsTime:"dns",pageDownloadTime:"pdt",redirectResponseTime:"rrt",tcpConnectTime:"tcp",serverResponseTime:"srt",domInteractiveTime:"dit",contentLoadTime:"clt",exceptionDescription:"exd",isExceptionFatal:"exf","isExceptionFatal?":"exf",experimentId:"xid",experimentVariant:"xvar"},o=new class{constructor({fetch:e,proxyAgent:t=null}={}){this.config={cid:null,platform:null,host:null,eventPath:null,batchPath:null},this._queue=[],this.proxyAgent=t,this.fetch=e}setup({clientId:e=(0,r.Z)(),platform:t="extension",host:n="ux.surfshark.com",eventPath:a="/appevent",batchPath:o="/appevents",ua:s=null}={}){this.config.cid=e,this.config.platform=t,this.config.host=n,this.config.eventPath=a,this.config.batchPath=o,this.config.ua=s}event({eventCategory:e,eventAction:t,dimensions:n,...r}){const a=this._tidyParameters(this._translateParams({eventCategory:e,eventAction:t,...r}));return Object.assign(a,{cid:this.config.cid,t:"event",platform:this.config.platform,timestamp:(new Date).getTime(),...n}),this._enqueue(a)}_enqueue(e){return this._queue.length<200&&this._queue.push({...e}),this}send(){const e=this;let t=0;const n=async()=>{if(!e._queue.length)return;if(t>10)return;let r=[];const a=e._queue.length>1;a?r=e._queue.splice(0,Math.min(e._queue.length,20)):r.push(e._queue.shift());const o=`https://${e.config.host}${a?e.config.batchPath:e.config.eventPath}`;r=(e=>e.map((e=>({...e,qt:(new Date).getTime()-e.timestamp}))))(r);try{const e=await this.fetch(o,{method:"POST",body:JSON.stringify(a?r:r[0]),headers:{"content-type":"application/json",...this.config.ua&&{"user-agent":this.config.ua}||{}},...this.proxyAgent?{agent:this.proxyAgent}:{}});if(e.ok)return t+=1,n();throw new Error(e.status)}catch(t){e._queue.unshift(...r)}};n()}getClientId(){return this.config.cid}_translateParams(e){const t={};return Object.keys(e).forEach((n=>{a[n]?t[a[n]]=e[n]:t[n]=e[n]})),t}_tidyParameters(e){return Object.keys(e).forEach((t=>{null!==e[t]&&void 0!==e[t]||delete e[t]})),e}}({fetch:window.fetch.bind(window)});var s=n(4655);const i=async({eventCategory:e,eventAction:t,...n})=>{const r=await s.I.getDimensions("cd");o.event({eventCategory:e,eventAction:t,dimensions:r,...n}).send()}},4655:(e,t,n)=>{"use strict";n.d(t,{I:()=>r});var r={};n.r(r),n.d(r,{clearDimension:()=>v,getDimensions:()=>g,setDimension:()=>f});var a=n(8949),o=n(3358),s=n(3150),i=n.n(s),l=(n(6729),n(2015));const c=new Map;var u=n(6875),h=n(474),d=n(3836);const{GA_DIMENSIONS:E}=l.I,m={fastest:"Fastest",nearest:"Nearest"},p={dark:1,light:0,browser:"follow_system"};async function g(e){const t=await async function(){const[[e="browser",t=(0,d.sY)(),n=l.Of.CONNECTION_MODE,r,s=l.Of.BREACH_ALERT_ENABLED,E=l.Of.AUTOCONNECT_LOCATION,g=l.Of.WEBRTC_BLOCKED,f=l.Of.AUTOCONNECT_ENABLED,v=l.Of.CONSENT_BLOCKER_ENABLED,_=l.Of.ADBLOCK_ENABLED,T=l.Of.MALWARE_PROTECTION_ENABLED,O,N={}],C]=await Promise.all([(0,h.IO)(l.I.THEME,l.I.LANGUAGE,l.I.CONNECTION_MODE,l.I.PREFERRED_LOCATION,l.I.SETTINGS.BREACH_ALERT_ENABLED,l.I.SETTINGS.AUTOCONNECT_LOCATION,l.I.SETTINGS.WEBRTC_BLOCKED,l.I.SETTINGS.AUTOCONNECT_ENABLED,l.I.SETTINGS.CONSENT_BLOCKER_ENABLED,l.I.SETTINGS.ADBLOCK_ENABLED,l.I.SETTINGS.MALWARE_PROTECTION_ENABLED,l.I.ORIGINAL_USER_INFO,l.I.GA_DIMENSIONS),i().extension.isAllowedIncognitoAccess(),(0,a.gx)((()=>u.KE.fresh)),(0,a.gx)((()=>o.V.fresh))]),b=O&&"ip"in O?O:void 0,A=function(e){const t=c.get("account-users-me");if(t)return t.getData()}();return{32:p[e],2:t,1:null==A?void 0:A.externalId,10:null==A?void 0:A.daysAfterSignup,3:"3.22.2",20:"preferred"===n?null==r?void 0:r.connectionName:m[n],22:"string"==typeof E?m[E]:null==E?void 0:E.connectionName,19:+!!N[19],13:N[13],14:N[14],49:+!!C,48:+g,21:+f,63:+_,51:+v,64:+T,59:+s,62:u.KE.rules.length,43:u.KE.vpnRules.length,61:u.KE.cleanWebRules.length,7:o.V.items.join(";"),6:null==b?void 0:b.isp,9:null==b?void 0:b.country,12:null==b?void 0:b.city}}();return Object.fromEntries(Object.entries(t).filter((([,e])=>null!=e)).map((([t,n])=>[`${e}${t}`,n])))}async function f(e,t){await(0,h.JG)(E,(({[E]:n={}})=>{var r;if((null!=t?t:null)===(null!==(r=n[e])&&void 0!==r?r:null))return;const a={...n};return null==t?delete a[e]:a[e]=t,{[E]:a}}))}const v=e=>f(e)},3836:(e,t,n)=>{"use strict";n.d(t,{sY:()=>c});var r=n(3150),a=n.n(r);const o=[{locale:"en",longName:"English",shortName:"EN"},{locale:"es",longName:"Español",shortName:"ES"},{locale:"pt-BR",longName:"Português (BR)",shortName:"BR"},{locale:"de",longName:"Deutsch",shortName:"DE"},{locale:"fr",longName:"Français",shortName:"FR"},{locale:"it",longName:"Italiano",shortName:"IT"},{locale:"zh",longName:"簡體中文",shortName:"ZH"},{locale:"zh-HK",longName:"繁體中文",shortName:"HK"},{locale:"pl",longName:"Polski",shortName:"PL"},{locale:"ja",longName:"日本語",shortName:"JP"},{locale:"uk",longName:"Українська",shortName:"UK"},{locale:"ko",longName:"한국어",shortName:"KO"},{locale:"tr",longName:"Türkçe",shortName:"TR"},{locale:"ru",longName:"Русский",shortName:"RU"}].sort(((e,t)=>e.longName.localeCompare(t.longName))),s=Array.from(new Set(o.map((e=>e.locale)))).sort(),i={"zh-TW":"zh-HK"},l=e=>null==e?void 0:e.slice(0,2);function c(){const e=a().i18n.getUILanguage();if(s.includes(e))return e;if(i[e])return i[e];const t=l(e);return t&&s.find((e=>l(e)===t))||"en"}new Map(o.map((e=>[e.locale,e])))},9543:(e,t,n)=>{"use strict";n.d(t,{o:()=>m});var r=n(3150),a=n.n(r),o=n(3555);const s="shark:channels",{runtime:i}=a(),l=new Map,c=new Map;function u(e,t){const n=l.get(e);n&&(n.delete(t),n.size||l.delete(e))}function h(e){new Set(l.keys()).forEach((t=>u(t,e))),e.onMessage.removeListener(E),e.onDisconnect.removeListener(h)}let d=null;function E(e,t){if(!Array.isArray(e))return;const[n,r,a,o,i]=e;n===s&&(1===r&&function(e,t){const n=l.get(e)||new Set;l.set(e,n),n.add(t)}(a,t),-1===r&&u(a,t),0===r&&function(e,t,[n,r]){var a,o,i;n?null===(a=c.get(e))||void 0===a||a.forEach((e=>e(t,r))):null===(o=d)||void 0===o||o.postMessage([s,0,e,t,r]),null===(i=l.get(e))||void 0===i||i.forEach((a=>{a!==n&&a.postMessage([s,0,e,t,r])}))}(a,o,[t,{...t.sender,...i}]))}function m(e,t){return function(e,t){var n;const r=c.get(e)||new Set;c.set(e,r);const a=t.bind();return r.add(a),1===r.size&&(null===(n=d)||void 0===n||n.postMessage([s,1,e])),()=>{var t;r.delete(a),r.size||(c.delete(e),null===(t=d)||void 0===t||t.postMessage([s,-1,e]))}}(e,t)}o.k?i.onConnect.addListener((e=>{e.name===s&&(e.onMessage.addListener(E),e.onDisconnect.addListener(h))})):function e(){d&&(d.onDisconnect.removeListener(e),d.onMessage.removeListener(E)),d=i.connect(void 0,{name:s}),d.onDisconnect.addListener(e),d.onMessage.addListener(E),new Set(c.keys()).forEach((e=>{d.postMessage([s,1,e])}))}()},8547:(e,t,n)=>{"use strict";n.d(t,{JG:()=>i,Dy:()=>l});var r=n(9543),a=n(6133);async function o(e,t,n){const[r,o]=await(0,a.W)(e,t,n);if(!r)return{data:o};throw Object.assign(new Error(r.message),{name:null==r?void 0:r.name})}const s=(e,t={})=>o("query",e,t),i=(e,t={})=>o("mutate",e,t);class l{constructor(){this.subscriptions=new Set,this.query=s,this.mutate=i}subscribe(e,t){if(!this.subscriptions)return;const n=((e,t)=>(0,r.o)(`event:${e}`,(n=>t({type:"event",path:e,data:n}))))(e,t),a=()=>{n(),this.subscriptions.delete(a)};return this.subscriptions.add(a),{unsubscribe:a}}destroy(){this.subscriptions.forEach((e=>e())),this.subscriptions=null}}},6133:(e,t,n)=>{"use strict";n.d(t,{W:()=>u});var r=n(3150),a=n.n(r),o=n(8741),s=n(3555);const i="shark:query",{runtime:l}=a(),c=new Map;async function u(e,t,n){return await l.sendMessage([i,e,t,n])||[]}s.k&&l.onMessage.addListener(((e,t)=>{if(!Array.isArray(e))return;const[n,r,a,s]=e;return n===i?async function(e,t,n,r,a){try{if(!e)throw new TypeError(`Received unexpected ${t} for "${n}"`);return[null,await e(r,a)]}catch(e){return o.Tb(e),[{name:null==e?void 0:e.name,message:null==e?void 0:e.message}]}}(c.get(`${r} ${a}`),r,a,s,t):void 0}))},3555:(e,t,n)=>{"use strict";n.d(t,{k:()=>o});var r=n(3150),a=n.n(r);const o="background"===function(){if(a().devtools)return"devtools";if(a().tabs){if("undefined"==typeof window)return"background";const{runtime:e}=a(),{pathname:t}=window.location,{browser_action:n,action:r,options_ui:o}=e.getManifest();return new URL(e.getURL((null==n?void 0:n.default_popup)||(null==r?void 0:r.default_popup)||"~")).pathname===t?"popup":new URL(e.getURL((null==o?void 0:o.page)||"~")).pathname===t?"options":new URL(e.getURL("/page-block.html")).pathname===t?"page-block":new URL(e.getURL("/authentication-error.html")).pathname===t?"auth-error":"background"}return a().extension?"content-script":"unknown"}()},8741:(e,t,n)=>{"use strict";n.d(t,{zb:()=>s.zb,n_:()=>s.n_,Tb:()=>s.Tb,Uc:()=>l,S1:()=>u});var r=n(5354),a=n(9666),o=n(6893),s=n(1928);const{process:i,ready:l,reset:c}=function({throttle:e=500,bufferLimit:t=10}={}){let n,r=!1,a=0;const s=[];function i(){n=void 0;const e=s.shift();e&&(a=Date.now(),e(!0),l())}function l(){if(n)return;const t=Math.max(0,e-(Date.now()-a));n=setTimeout((()=>i()),t)}return{process:function(n){var i;const c=Date.now();return r&&!s.length&&c-a>e?(a=c,n):(s.length===t&&(null===(i=s.shift())||void 0===i||i(!1)),r&&l(),new o.c((e=>{s.push(e)})).then((e=>e?n:null)))},ready:function(){r||(r=!0,i())},reset:function(){r=!1,a=0,clearTimeout(n),s.forEach((e=>e(!1))),s.length=0}}}({throttle:500,bufferLimit:10});function u(e){r.S1({dsn:"https://41da7e29daef4a5587cab9845a157878@go-front-s.surfshark.com/18",autoSessionTracking:!1,maxBreadcrumbs:15,debug:!1,environment:"production",release:"3.22.2-chrome",beforeSend:i}),a.mG({browser_variable:"chrome",script:e})}},2015:(e,t,n)=>{"use strict";n.d(t,{I:()=>s,Of:()=>i,kV:()=>l});var r=n(3150),a=n.n(r),o=n(4586);const s={SETTINGS:{WEBRTC_BLOCKED:"setting-webrtc-blocked",CLEANWEB_ENABLED:"setting-cleanweb-enabled",AUTOCONNECT_ENABLED:"setting-autoconnect-enabled",AUTOCONNECT_LOCATION:"setting-autoconnect-server",BYPASS_RULES:"bypass-rules",BYPASS_SUBDOMAINS:"bypass-subdomains",BYPASSER_ENABLED:"bypasser-enabled",CONSENT_BLOCKER_ENABLED:"setting-consent-blocker-enabled",BREACH_ALERT_ENABLED:"breach-alert-enabled",ADBLOCK_ENABLED:"adblock-enabled",MALWARE_PROTECTION_ENABLED:"malware-protection-enabled",BYPASS_LIST:"bypass-list"},CONNECTION_HISTORY:"connection-history",WAS_CONNECTED:"connection-was-connected",CONNECTION_COUNT:"connection-count",CONNECTION_RATED:"connection-rated",CONNECTION_RATING_REQUIRED:"connection-rating-required",LANGUAGE:"language",THEME:"theme",CONNECTION_MODE:"connection-mode",PREFERRED_LOCATION:"preferred-location",AUTH_STATUS:"auth-status",AUTH_TOKEN:"auth-token",AUTH_RENEW_TOKEN:"auth-renew-token",REQUEST_CACHE:e=>`request-cache:${e}`,FAVORITE_SERVERS:"favorite-servers",LOGIN_EMAIL:"login-email",LAST_SHOWN_UPDATE_NOTIFICATION:"show-update-notification",GA_DIMENSIONS:"ga-dimensions",SERVICE_CREDENTIALS:"service-credentials",ORIGINAL_USER_INFO:"original-user-info",REMOTE_LOGIN:"remote-login-data",CONSENT_BLOCKER_BYPASS_LIST:"consent-blocker-bypass-list",CONSENT_BLOCKER_HIDE_DISCLAIMER:"consent-blocker-hide-disclaimer",EXPERIMENTS:"experiments",SHARK_UUID:"shark-uuid",USER_ID:"user-id",BREACH_ALERT_HIDE_LIST:"breach-alert-hide-list",BREACH_ALERT_CACHE:"breach-alert-cache",BREACH_ALERT_HIDE_DISCLAIMER:"breach-alert-hide-disclaimer",DEVICE_ID:"device-id",NOTIFICATIONS:"notifications",BYPASS_ITEM_SUCCESS_DONT_SHOW:"bypass-item-success-dont-show",BYPASS_ITEM_DELETE_CONFIRMATION_DONT_SHOW:"bypass-item-delete-confirmation-dont-show",CLEANWEB_BYPASS_SUGGESTION:"cleanweb-bypass-suggestion"},i={WEBRTC_BLOCKED:!0,CLEANWEB_ENABLED:!1,AUTOCONNECT_ENABLED:!1,AUTOCONNECT_LOCATION:"fastest",CONNECTION_HISTORY:[],CONNECTION_MODE:"fastest",PREFERRED_LOCATION:null,CONNECTION_COUNT:0,CONNECTION_RATED:null,CONNECTION_RATING_REQUIRED:!1,WAS_CONNECTED:!1,FAVORITE_SERVERS:[],SERVICE_CREDENTIALS:{},BYPASS_RULES:[],BYPASS_SUBDOMAINS:!1,BYPASSER_ENABLED:!1,ORIGINAL_USER_INFO:{},CONSENT_BLOCKER_ENABLED:!1,CONSENT_BLOCKER_BYPASS_LIST:[],GA_DIMENSIONS:{},EXPERIMENTS:[],LAST_SHOWN_UPDATE_NOTIFICATION:"1.0.0",BREACH_ALERT_ENABLED:!0,BREACH_ALERT_HIDE_LIST:[],BREACH_ALERT_CACHE:[],DEVICE_ID:(0,o.Z)(),NOTIFICATIONS:{},ADBLOCK_ENABLED:!0,MALWARE_PROTECTION_ENABLED:!0,BYPASS_LIST:[],CLEANWEB_BYPASS_SUGGESTION:!0},l=async(e,t=a().storage.local)=>(await t.get(e))[e]},1063:(e,t,n)=>{"use strict";n.d(t,{M:()=>a});var r=n(8949);const a=(e,t,n)=>{if(Array.isArray(t)){const o=(0,r.cp)(`${(0,r.fE)(e)}$[${t.join(",")}]`),s=()=>(0,r.EH)((()=>o.reportObserved())),i=t.map((t=>a(e,t,s))),l=a(o,n);return()=>{i.forEach((e=>e())),l()}}let o,s;const i=n||t,l=i===n?t:void 0,c=(0,r.hz)(e,l,(()=>{o=i(),o&&(s=(0,r.pA)(e,l,(()=>{var e,t;null===(e=s)||void 0===e||e(),s=void 0,null===(t=o)||void 0===t||t(),o=void 0})))}));return()=>{var e,t;null===(e=o)||void 0===e||e(),null===(t=s)||void 0===t||t(),c()}}},9268:(e,t,n)=>{"use strict";n.d(t,{S:()=>o,r:()=>s});var r=n(3689),a=n(9510);const o=(e,t)=>(0,a.Qc)(e,{extractHostname:!0,mixedInputs:!1,validateHostname:!1,...t}),s=(e,t)=>o((0,r.H9)(e||""),t)},2424:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),o=n(8741),s=n(3150),i=n.n(s),l=n(9558),c=n(3836),u=n(7673);n(5827);const{keys:h}=Object,d=(e,t)=>e?`${e}.${t}`:t,E=(e,t)=>(e=>"object"==typeof e&&!(e instanceof Array))(e)?h(e).reduce(((n,r)=>({...n,...E(e[r],d(t,r))})),{}):{[t]:e};var m=n(8547);const p="abort_error",g="network_error",f={OTP_INVALID:"auth-otp-invalid",TOO_MANY_ATTEMPTS:"auth-too-many-attempts",UNAUTHORIZED:"auth-unauthorized",NETWORK:"auth-network",REMOTE_NOT_FOUND:"auth-remote-not-found",ERROR:"auth-error"},v={LOGGED_OUT:"auth-logged-out",LOGGED_OUT_REMOTE:"auth-logged-out-remote",LOGGED_IN:"auth-logged-in",LOGGED_IN_OTP_REQUIRED:"auth-logged-in-otp-required"},_=["debug","info","warn","error","silent"],T=(e=>{const t=_.indexOf("info");return t>-1?t:_.indexOf("error")})(),O=_.slice(T),N=(e,t="debug")=>{const n=e.join().match(/.+:.+:\s{4}/),r=`%c[${(new Date).toLocaleTimeString()}]`,a=["color: grey",{error:"color: red",debug:"color: grey",info:"color: green",warn:"color: yellow"}[t]],o=[`${r}%c[${t}] `];if(n){const[t,...n]=e,[r,s]=t.split(/\s{4}/),i=`%c${r.replace(/(:)(.+)(:)/,"%c$1%c$2%c$3")}`.padEnd(50," ");a.push("color: #1BB4B7","color: unset","color: #178A9E","color: unset"),o[0]+=i,o.push(...a,s,...n)}else o.push(...a,...e);return o},C=(...e)=>{if(O.includes("error")){const t=N(e,"error");console.error(...t)}o.n_({message:e.join(" "),level:o.zb.Error})},b=(...e)=>{if(O.includes("info")){const t=N(e,"info");console.info(...t)}o.n_({message:e.join(" "),level:o.zb.Info})};var A=n(2015),S=n(8949),w=n(474),I=n(1063);const y=(0,S.LO)({status:void 0,get loggedIn(){return"auth-logged-in"===this.status}});(0,I.M)(y,"status",(()=>(0,w.Ld)(A.I.AUTH_STATUS,(0,S.aD)((e=>Object.assign(y,{status:e}))))));var L=n(296);const R=navigator.userAgent||navigator.vendor,k={chrome:"Chrome",opera:"Opera",edge:"Edge",firefox:"Firefox"},D={...[["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)$/],["edge",/Edge?\/([0-9\._]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/]].filter((e=>e[1].test(R))).map((e=>{const t=e[1].exec(R),n=t&&t[1].split(/[._]/).slice(0,3);return n&&n.length<3&&Array.prototype.push.apply(n,1===n.length?[0,0]:[0]),{name:String(e[0]),version:n.join(".")}})).shift(),os:R.includes("Windows")?"windows":R.includes("Macintosh")?"macos":R.includes("Linux")?"linux":""},x=(e,{data:t,error:n}={})=>{const r={};if(e.headers)for(const t of e.headers.entries()){const[e,n]=t;r[e]=n}return{data:t,headers:r,ok:e.ok,redirected:e.redirected,status:e.status,type:e.type,url:e.url,error:e.error||n,parent:e}},U=()=>window.fetch.bind(window),B={baseUrl:"https://api.surfsharktest.com",fallbackUrl:"https://api.surfsharktest.com",version:"v1"};class M{constructor({extFetch:e,authController:t,context:n}){this.extFetch=e,this.authController=t,this._context=n,this.get=this.get.bind(this),this.post=this.post.bind(this),this.put=this.put.bind(this),this.patch=this.patch.bind(this),this.del=this.del.bind(this),this.request=this.request.bind(this),this._throttleRenewTokens=(0,L.debounce)(this._renewTokens.bind(this),1e4,!0)}setAuthController(e){this.authController=e}async _renewTokens(){const{renewToken:e}=await this.authController.getTokens(),t=await this.extFetch.post({path:"/auth/renew",token:e});return((...e)=>{if(O.includes("debug")){const t=N(e,"debug");console.debug(...t)}o.n_({message:e.join(" "),level:o.zb.Debug})})(`fetch.js:PrivateExtFetch._renewTokens:    status: ${t.status}`),t.ok&&t.data?(await this.authController.setTokens({token:t.data.token,renewToken:t.data.renewToken}),t):t}async activate({otp:e}){const{LOGGED_IN:t,LOGGED_IN_OTP_REQUIRED:n}=v,{OTP_INVALID:r}=f;return(await this.extFetch.private.post({path:"/auth/activate",body:{otp:e}})).ok?(await this.authController.setAuthStatus(t),{status:t,error:null}):(await this.authController.setAuthStatus(n),{status:n,error:r})}async setRemoteAuthorization(){const{LOGGED_OUT_REMOTE:e}=v;await this.authController.setAuthStatus(e)}async performRemoteAuthorization({hash:e}){const{LOGGED_IN:t,LOGGED_OUT:n,LOGGED_OUT_REMOTE:r}=v,{ERROR:a,REMOTE_NOT_FOUND:o}=f,s=await this.extFetch.post({path:"/auth/remote",body:{hash:e}});return s.ok?(await this.authController.setTokens({token:s.data.token,renewToken:s.data.renewToken}),await this.authController.setAuthStatus(t),{status:t,error:null}):404===s.status?(await this.authController.setAuthStatus(r),{status:r,error:o}):(await this.authController.setAuthStatus(n),{status:n,error:a})}async login({username:e,password:t}){const{LOGGED_IN:n,LOGGED_IN_OTP_REQUIRED:r,LOGGED_OUT:a}=v,{NETWORK:o,UNAUTHORIZED:s,TOO_MANY_ATTEMPTS:i,ERROR:l}=f,c=await this.extFetch.post({path:"/auth/login",body:{username:e,password:t}});return 401===c.status?(await this.authController.deleteTokens(),await this.authController.setAuthStatus(a),{status:a,error:s}):429===c.status?(await this.authController.setAuthStatus(a),{status:a,error:i}):423===c.status?(await this.authController.setTokens({token:c.data.token,renewToken:c.data.renewToken}),await this.authController.setAuthStatus(r),{status:r,error:null}):c.ok?(await this.authController.setTokens({token:c.data.token,renewToken:c.data.renewToken}),await this.authController.setAuthStatus(n),{status:n,error:null}):c.error===g||c.error===p?(await this.authController.setAuthStatus(a),{status:a,error:o}):(await this.authController.setAuthStatus(a),{status:a,error:l})}async _logout(){const{LOGGED_OUT:e}=v;return await this.authController.deleteTokens(),await this.authController.setAuthStatus(e),{status:e,error:null}}async logout(){const{LOGGED_IN:e}=v,t=await this.authController.getAuthStatus(),{token:n,renewToken:r}=await this.authController.getTokens();if(t===e&&(n||r)){const e=await this.extFetch.private.post({path:"/auth/logout",version:"v1"});204!==e.status&&o.Tb(new Error("Could not invalidate session"),{extra:{payload:{...e,headers:void 0}}})}return this._logout()}async request(e){let t={error:"no_tokens"};const r=await this.authController.getTokens();if(r.token&&(t=await this.extFetch.request({...e,token:r.token})),401===t.status&&r.renewToken){const t=await this._throttleRenewTokens();if(t.ok){const t=await this.authController.getTokens();return this.extFetch.request({...e,token:t.token})}return 401===t.status&&("background"===this._context?await n(8188).xo({eventCategory:"Logout",eventAction:"sessionExpire"}):"popup"===this._context&&await n(8890).xo({eventCategory:"Logout",eventAction:"sessionExpire"}),await this._logout()),t}return t}get(e){return this.request({method:"GET",...e})}put(e){return this.request({method:"PUT",...e})}post(e){return this.request({method:"POST",...e})}patch(e){return this.request({method:"PATCH",...e})}del(e){return this.request({method:"DELETE",...e})}}var P=n(4012),G=n(9553);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const j=({isDark:e=!0,...t})=>r.createElement("svg",q({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{d:"M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z",fill:"url(#info-warning_paint0_linear)"}),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4ZM16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM16.7203 18.5L17.184 9.74693C17.2199 9.0692 16.68 8.5 16.0013 8.5C15.3217 8.5 14.7814 9.07079 14.8188 9.74943L15.3008 18.5H16.7203ZM15.9885 23.5C16.813 23.5 17.5 22.8359 17.5 22.0115C17.5 21.187 16.813 20.5 15.9885 20.5C15.1641 20.5 14.5 21.187 14.5 22.0115C14.5 22.8359 15.1641 23.5 15.9885 23.5Z",fill:"url(#info-warning_paint1_linear)"}),r.createElement("defs",null,r.createElement("linearGradient",{id:"info-warning_paint0_linear",x1:"2",y1:"2",x2:"2",y2:"30",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#FE9FAD"}),r.createElement("stop",{offset:"1",stopColor:"#FF7085"})),r.createElement("linearGradient",{id:"info-warning_paint1_linear",x1:"4",y1:"4",x2:"4",y2:"28",gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#FEEBEE"}),r.createElement("stop",{offset:"1",stopColor:"#FFCFD6"}))));n(7621);var H=n(4935),$=n.n(H);const F=({loading:e,onOpenOrder:t,orderUrl:n})=>r.createElement("div",{className:$().container},!e&&r.createElement("div",{className:$().base},r.createElement("div",{className:$().logoContainer},r.createElement(G.Z,null)),r.createElement("div",{className:$().divider}),r.createElement("div",{className:$().mainContainer},r.createElement("div",{className:$().icon},r.createElement(j,null)),r.createElement("h1",null,r.createElement(P.Z,{id:"pages.authenticationError.title"})),r.createElement("ul",null,r.createElement("li",null,r.createElement(P.Z,{id:"pages.authenticationError.reason1"})),r.createElement("li",null,r.createElement(P.Z,{id:"pages.authenticationError.reason2"})),r.createElement("li",null,r.createElement(P.Z,{id:"pages.authenticationError.reason3",values:{url:r.createElement("a",{href:n,onClick:t},"order.surfshark.com")}})),r.createElement("li",null,r.createElement(P.Z,{id:"pages.authenticationError.reason4",values:{url:r.createElement("a",{href:"https://support.surfshark.com/hc"},r.createElement(P.Z,{id:"pages.authenticationError.here"}))}})))))),W=new m.Dy({runtime:i().runtime}),K=new class{constructor({baseFetch:e=U(),baseUrl:t=B.baseUrl,fallbackUrl:n=B.fallbackUrl,version:r=B.version,authController:a,context:o}=B){this.fetch=e||U(),this._baseUrl=t,this._fallbackUrl=n,this._version=r,this._context=o,this.private=new M({extFetch:this,authController:a,context:this._context}),this.get=this.get.bind(this),this.post=this.post.bind(this),this.put=this.put.bind(this),this.patch=this.patch.bind(this),this.del=this.del.bind(this),this.request=this.request.bind(this)}init({authController:e}){return e&&this.private.setAuthController(e),this}get baseUrl(){return this._baseUrl}set baseUrl(e){try{const t=new URL(e);this._baseUrl=t.toString(),b("fetch.js:baseUrl:    ",this.baseUrl)}catch(e){C("fetch.js:baseUrl:    ",e.toString())}}get fallbackUrl(){return this._fallbackUrl}set fallbackUrl(e){try{const t=new URL(e);this._fallbackUrl=t.toString(),b("fetch.js:fallbackUrl:    ",this.fallbackUrl)}catch(e){C("fetch.js:fallbackUrl:    ",e.toString())}}get version(){return this._version}set version(e){this._version=e,b("fetch.js:version:    ",e)}doRequest(e,t){return this.fetch(e,t).then((e=>e.json().then((t=>x(e,{data:t}))).catch((()=>x(e))))).catch((t=>t instanceof DOMException&&"AbortError"===t.name?x({url:e,error:p}):x({url:e,error:g})))}async makeRequest({method:e="GET",url:t,base:n=this._baseUrl,version:r=this._version,credentials:a="same-origin",path:o,headers:s,query:i={},body:l,token:c,timeout:h=1e4,signal:d}){const E=new AbortController,m=(e=>{const t=new AbortController,n=()=>{t.abort();for(const t of e)t.removeEventListener("abort",n)};for(const t of e){if(t.aborted){n();break}t.addEventListener("abort",n)}return t.signal})([E.signal,d].filter(Boolean)),p=t||(({base:e,version:t,path:n,query:r})=>{const a=[e,t,n].map((e=>((e,t)=>{let n=e,r=0;for(;n.startsWith("/")&&r<=5;)n=n.slice(1),r+=1;for(;n.endsWith("/")&&r<=5;)n=n.slice(0,-1),r+=1;return n})(e))).join("/");return r?`${a}?${r}`:a})({base:n,version:r,path:o,query:(0,u.stringify)(i)}),g={token:c};l instanceof FormData||(g.contentType="application/json");const f=await(async(e={},t)=>{const n=Object.keys(e).reduce(((t,n)=>(t[n.toLowerCase()]=e[n],t)),{});return{pragma:"no-cache","cache-control":"no-cache","x-device-id":await(0,A.kV)(A.I.DEVICE_ID),"x-device-type":"extension","x-device-brand":k[D.name],"x-device-model":"Extension","x-device-platform":D.os,"x-device-version":"3.22.2",...t.contentType&&{"content-type":t.contentType},...t.token&&{authorization:`Bearer ${t.token}`},...n}})(s,g),v=l?(_=l,"application/json"===f["content-type"]?JSON.stringify(_):_):void 0;var _;return setTimeout((()=>{E.abort()}),h),[p,{headers:f,body:v,method:e,credentials:a,signal:m}]}async request(e){const t=await this.makeRequest(e),n=await this.doRequest(...t);if(n.error&&!e.url&&this._fallbackUrl!==this._baseUrl){const t=await this.makeRequest({...e,base:this._fallbackUrl});return this.doRequest(...t)}return n}get(e){return this.request({method:"GET",...e})}post(e){return this.request({method:"POST",...e})}put(e){return this.request({method:"PUT",...e})}patch(e){return this.request({method:"PATCH",...e})}del(e){return this.request({method:"DELETE",...e})}}({baseUrl:"https://api.surfshark.com",fallbackUrl:"https://api.surfshark.com",authController:function({ext:e}){return{getTokens:()=>e.query("auth-tokens").then((e=>e.data)),setTokens:t=>e.mutate("auth-tokens",{data:t}),setAuthStatus:t=>e.mutate("auth-status",{data:t}),getAuthStatus:()=>e.query("auth-status").then((e=>e.data)),deleteTokens:()=>e.mutate("auth-tokens-delete")}}({ext:W})}),V=(0,c.sY)(),Y=((e,{campaign:t,content:n,term:r,medium:a}={})=>{try{const o=new URL(e),s=a||"Chrome",i=t||"vpn";if(s){const e=(0,u.stringify)({...o.search&&(0,u.parse)(o.search.slice(1)),utm_medium:s,utm_source:"Extension",utm_campaign:i,...n&&{utm_content:n},...r&&{utm_term:r}});return`${o.origin}${o.pathname}?${e}`}return e}catch(t){return e}})("https://order.surfshark.com",{campaign:"vpn",term:"error",content:"expired"}),z=()=>{const[e,t]=(0,r.useState)(!0),[n,a]=(0,r.useState)(V);(0,r.useEffect)((()=>{W.query("react-query-data-init").then((({data:e})=>{e.language&&a(e.language),t(!1)}))}),[]);const o=window.sshark_i18n,s=E(o[n]);return r.createElement(l.Z,{locale:n,messages:s},r.createElement(F,{loading:e,orderUrl:Y,onOpenOrder:e=>{e.preventDefault(),K.private.post({path:"/account/authorization/link"}).then((e=>{e.data&&e.data.hash?i().tabs.create({url:`${Y}&authorization_hash=${e.data.hash}`}):i().tabs.create({url:Y})})).catch(alert)}}))};o.S1("authentication-error"),o.Uc(),(0,a.render)(r.createElement(z,null),document.getElementById("root"))},8890:(e,t,n)=>{"use strict";n.d(t,{xo:()=>a});var r=n(8547);const a=async({eventCategory:e,eventAction:t,...n})=>{await(0,r.JG)("analytics-send-event",{data:{eventCategory:e,eventAction:t,...n}})}},474:(e,t,n)=>{"use strict";n.d(t,{JG:()=>r.J,IO:()=>r.I,Ld:()=>a.L});var r=n(9969),a=n(5261)},9969:(e,t,n)=>{"use strict";n.d(t,{I:()=>c,J:()=>u});var r=n(3150),a=n.n(r);const o=[];let s;const i=(e,t)=>Object.fromEntries(t.map((t=>[t,e[t]])));function l({keys:e,project:t,transform:n}){return new Promise(((r,l)=>{o.push({keys:e,transform:n,resolve:e=>r(t(e)),reject:l}),s||(s=Promise.resolve().then((function e(){o.length?async function(e){const t=new Set(e.filter((e=>{var t;return null===(t=e.keys)||void 0===t?void 0:t.length}))),n=new Set(e.filter((e=>e.transform))),r=new Set(e),o=(e,a)=>{e.reject(a),t.delete(e),n.delete(e),r.delete(e)};let s={};if(t.size)try{s=await a().storage.local.get((l=Array.from(t).map((e=>e.keys)).flat(),Array.from(new Set(l))))}catch(e){t.forEach((t=>o(t,e)))}var l;const c=s,u=[];if(n.forEach((e=>{try{const t=e.transform(s);t?(s={...s,...t},u.push(...Object.keys(t))):n.delete(e)}catch(t){o(e,t)}})),u.length){const e=Array.from(new Set(u)),t=e.filter((e=>void 0===s[e])),r=e.filter((e=>void 0!==s[e]));try{await Promise.all([r.length&&a().storage.local.set(i(s,r)),t.length&&a().storage.local.remove(t)])}catch(e){s=c,n.forEach((t=>o(t,e)))}}r.forEach((({resolve:e})=>e(s)))}(o.splice(0)).then(e):s=void 0})))}))}const c=(...e)=>l({keys:e,project:t=>e.map((e=>t[e]))}),u=function(...e){if(1===e.length){const[t]=e;return l({transform:()=>t,project:e=>i(e,Object.keys(t))})}const t=e,n=e.pop();return l({keys:t,transform:e=>{const r=n(i(e,t));if(!r)return;const a=t.filter((t=>e[t]!==r[t]));return a.length?i(r,a):void 0},project:e=>i(e,t)})}},5261:(e,t,n)=>{"use strict";n.d(t,{L:()=>m});var r=n(8949),a=n(3150),o=n.n(a),s=n(1063),i=n(9969);const l=new Map,c=Symbol("pending"),u=(0,r.cp)("StorageQueryMain"),h=new Map,d=(0,r.aD)(((e,t)=>{const n=l.get(e);n&&(h.set(e,t),n.reportChanged())}));(0,s.M)(u,(()=>{function e(e,t){t&&"local"!==t||Object.entries(e).forEach((([e,t])=>{l.has(e)&&d(e,t.newValue)}))}const t=o().storage.local.onChanged||o().storage.onChanged;return t.addListener(e),()=>{t.removeListener(e)}}));const E=(e,t,n)=>(0,r.U5)((()=>{var t;return u.reportObserved(),null===(t=l.get(e))||void 0===t||t.reportObserved(),h.get(e)}),((e,n)=>t(e,n!==c?n:void 0)),null!=n&&n.equals?{...n,equals:(e,t)=>{var r;return!(null===(r=n.equals)||void 0===r||!r.call(n,e!==c?e:void 0,t))}}:n);function m(e,t,n){const a=l.get(e)||(0,r.cp)(`StorageQueryTracking$${e}`);if(l.has(e))return(0,r.rg)((()=>h.get(e)!==c&&t(h.get(e),void 0))),E(e,t,n);l.set(e,a),h.set(e,c);const o=(0,r.pA)(a,(()=>{l.delete(e),h.delete(e),o()})),s=E(e,t,n);return(0,i.I)(e).then((([t])=>d(e,t)),(e=>{s[r.so].reportExceptionInDerivation_(e)})),s}},1353:e=>{e.exports={container:"_3coY7",base:"_1Tppm",logoContainer:"s7L_m",divider:"_3-z6h",icon:"_3ARkr",mainContainer:"_9CGNE"}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=27,(()=>{var e={27:0},t=[[2424,216,411]],r=e=>{},a=(a,o)=>{for(var s,i,[l,c,u,h]=o,d=0,E=[];d<l.length;d++)i=l[d],n.o(e,i)&&e[i]&&E.push(e[i][0]),e[i]=0;for(s in c)n.o(c,s)&&(n.m[s]=c[s]);for(u&&u(n),a&&a(o);E.length;)E.shift()();return h&&t.push.apply(t,h),r()},o=self.webpackChunkextension_v2=self.webpackChunkextension_v2||[];function s(){for(var r,a=0;a<t.length;a++){for(var o=t[a],s=!0,i=1;i<o.length;i++){var l=o[i];0!==e[l]&&(s=!1)}s&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var i=n.x;n.x=()=>(n.x=i||(e=>{}),(r=s)())})(),n.x()})();