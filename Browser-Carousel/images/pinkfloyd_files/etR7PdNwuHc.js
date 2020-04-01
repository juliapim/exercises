if (self.CavalryLogger) { CavalryLogger.start_js(["cAydl"]); }

__d("OutsideExceptionKeyCommandListener.react",["BaseKeyCommandListener.react","CometLayerKeyCommandWrapper.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("BaseKeyCommandListener.react"),{observersEnabled:!1,children:g.jsx(b("CometLayerKeyCommandWrapper.react"),{debugName:"outside exception layer",children:a.children})})}e.exports=a}),null);
__d("useCometSize_DO_NOT_USE",["CometThrottle","ExecutionEnvironment","HiddenSubtreePassiveContext","React","unrecoverableViolation","useResizeObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React");var g=c.useCallback,h=c.useContext,i=c.useEffect,j=c.useRef,k=c.useState;function a(){__p&&__p();if(!b("ExecutionEnvironment").canUseDOM)throw b("unrecoverableViolation")("useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb","comet_ssr");var a=j(null),c=k(null),d=c[0],e=c[1],f=h(b("HiddenSubtreePassiveContext")),l=function(a){a=a.getBoundingClientRect();var b=a.height,c=a.width;e(function(a){return(a==null?void 0:a.height)===b&&(a==null?void 0:a.width)===c?a:{height:b,width:c}})},m=g(b("CometThrottle")(function(a){var b=a.height,c=a.width;if(b===0&&c===0)return;e(function(a){return(a==null?void 0:a.height)===b&&(a==null?void 0:a.width)===c?a:{height:b,width:c}})},200,{leading:!0,trailing:!0}),[]),n=b("useResizeObserver")(m);c=g(function(b){b!==a.current&&(a.current=b,b!=null&&l(b)),n(a.current)},[n]);i(function(){if(!f.getCurrentState().hidden)return;var b=f.subscribeToChanges(function(c){!c.hidden&&a.current!=null&&(l(a.current),b.remove())});return function(){return b.remove()}},[f]);i(function(){return function(){m.cancel()}},[m]);return[c,d]}e.exports=a}),null);
__d("CometErrorOverlay",["React","ReactDOMComet","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();b("React");function g(){var a=document.body;if(a==null)return null;var b=document.createElement("div");a.appendChild(b);return b}function a(a){var c=g();if(c!=null){var d=function(){window.setTimeout(function(){e.unmount(),c.remove()},0)},e=b("gkx")("832370")?b("ReactDOMComet").createBlockingRoot(c):b("ReactDOMComet").createRoot(c);a=a(d);e.render(a);return d}}e.exports={injectComponent:a}}),null);
__d("CometExceptionDialog.react",["fbt","BaseModal.react","CometButton_DEPRECATED.react","CometCardedDialog.react","React","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=b("React");function a(a){var c=a.errorDescription,d=a.errorSummary;a=a.onClose;return h.jsx(b("BaseModal.react"),{children:h.jsxs(b("CometCardedDialog.react"),{onClose:a,withCloseButton:!0,children:[h.jsx("div",{className:"dati1w0a a5h7je3r n5gxf0i0 aodizinl",children:h.jsx(b("TetraText.react"),{type:"headlineEmphasized2",children:d})}),h.jsx("div",{className:"dati1w0a jbae33se hv4rvrfc bjjx79mm",children:h.jsx(b("TetraText.react"),{color:"secondary",type:"body2",children:c})}),h.jsx("div",{className:"gjzvkazv dati1w0a f10w8fjw hv4rvrfc ecm0bbzt cbu4d94t j83agx80 c4hnarmi",children:h.jsx(b("CometButton_DEPRECATED.react"),{expanded:!0,onClick:a,use:"primary",children:g._("OK")})})]})})}e.exports=a}),null);
__d("handleCometErrorCodeSideEffects",["errorCode","CometErrorOverlay","CometExceptionDialog.react","OutsideExceptionKeyCommandListener.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React"),i={};function a(a,c,d){__p&&__p();if(a===1357001){window.location.reload(!0);return}if(i[a])return;i[a]=!0;b("CometErrorOverlay").injectComponent(function(e){return h.jsx(b("OutsideExceptionKeyCommandListener.react"),{children:h.jsx(b("CometExceptionDialog.react"),{errorDescription:d,errorSummary:c,onClose:function(){delete i[a],e()}})})})}e.exports=a}),null);
__d("CometAsyncFetchError",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b,c,d,e,f,g){g=a.call(this,b)||this;g.errorMsg=b;g.errorCode=c;g.errorRawResponseHeaders=d;g.errorRawTransport=e;g.errorType=f;return g}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("cometAsyncFetch",["Promise","CometAsyncFetchError","DTSG","DTSG_ASYNC","NetworkStatus","XHRRequest","getAsyncParams","handleCometErrorCodeSideEffects","recoverableViolation","setTimeout","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="for (;;);",h=g.length,i=250;function j(a,c){if(a.length<=h)throw b("unrecoverableViolation")("Response too short for "+c,"comet_infra");var d=0;while(a.charAt(d)===" "||a.charAt(d)==="\n")d++;d&&a.substring(d,d+h)===g&&b("recoverableViolation")("Response for request to endpoint "+c+" seems to be valid, but was preceded by whitespace. (This probably means that someone committed whitespace in a header file.)","comet_infra");return a.substring(d+h)}function a(a,c){__p&&__p();c===void 0&&(c={data:{},method:"GET"});var d=0,e;return new(b("Promise"))(function(f,g){__p&&__p();function h(c){__p&&__p();var d,e;try{c=j(c,a);c=JSON.parse(c)}catch(c){b("recoverableViolation")("Unable to parse uri."+a.toString()+" response","comet_infra");g(c);return}if(c.error){b("handleCometErrorCodeSideEffects")(c.error,c.errorSummary,c.errorDescription);g({error:c.error,errorMsg:c.errorDescription,errorType:c.errorSummary});return}d=(d=c)==null?void 0:d.dtsgToken;e=(e=c)==null?void 0:e.dtsgAsyncGetToken;d&&b("DTSG").setToken(d);e&&b("DTSG_ASYNC").setToken(e);f((d=c)==null?void 0:d.payload)}function k(a){var e=c.retryCount!=null&&c.retryCount>0&&d<=c.retryCount;if(e)b("setTimeout")(m,i);else{e=new(b("CometAsyncFetchError"))(a.errorMsg,a.errorCode,a.errorRawResponseHeaders,a.errorRawTransport,a.errorType);return g(e)}}function l(){var c=new(b("CometAsyncFetchError"))("Request to "+a+" was aborted",null,null,null,"Abort");return g(c)}function m(){new(b("XHRRequest"))(a).setMethod(c.method).setData(babelHelpers["extends"]({},c.data,b("getAsyncParams")(c.method))).setResponseHandler(h).setErrorHandler(k).setAbortHandler(l).send(),d++}b("NetworkStatus").isOnline()?m():e=b("NetworkStatus").onChange(function(a){a=a.online;a&&(m(),e.remove())})})}e.exports=a}),null);
__d("createEvaluateVideoAutoplayPauseOnInvisibleRule",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){function b(b){b=b.videoPlayerPassiveViewabilityInfo;b=b?b.getCurrent().visiblePercentage:0;b=b>=a;return b?"SKIP":"PAUSE"}b.displayName="evaluateVideoAutoplayPauseOnInvisibleRule:"+a+"%";return b}e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnCannotAutoplayRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.canAutoplay,c=a.ended;a=a.paused;return b||c||!a?"SKIP":"IGNORE"}a.displayName="evaluateVideoAutoplayIgnoreOnCannotAutoplayRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnEndedRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.ended;return a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnEndedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnFrozenRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.isFrozenPassive;a=a.getCurrentState();return a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnFrozenRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUnmuteRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.muted;a=a.paused;return!b&&!a?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUnmuteRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUserPausedRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.paused;a=a.lastPauseReason;return b&&a==="user_initiated"?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUserPausedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayIgnoreOnUserPlayRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.paused,c=a.muted;a=a.lastPlayReason;return!c&&!b&&a==="user_initiated"?"IGNORE":"SKIP"}a.displayName="evaluateVideoAutoplayIgnoreOnUserPlayRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnAdInvisibleRule",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=.5;function a(a){var b=a.adClientToken;a=a.videoPlayerPassiveViewabilityInfo;a=a?a.getCurrent().visiblePercentage:0;a=a>=g;return b!=null&&!a?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnAdInvisibleRule";e.exports=a}),null);
__d("MaybeSymbol",[],(function(a,b,c,d,e,f){"use strict";b=a.Symbol?a.Symbol:null;e.exports=b}),null);
__d("URLSearchParams",["MaybeSymbol"],(function(a,b,c,d,e,f){__p&&__p();var g=/\+/g,h=/[!\'()*]/g,i=/%20/g,j=b("MaybeSymbol")?b("MaybeSymbol").iterator:null;function k(a){return encodeURIComponent(a).replace(i,"+").replace(h,function(a){return"%"+a.charCodeAt(0).toString(16)})}function l(a){return decodeURIComponent((a=a)!=null?a:"").replace(g," ")}function m(a){var b=a.slice(0),c={next:function(){var a=b.length,c=b.shift();return{done:c===void 0&&a<=0,value:c}}};j&&(c[j]=function(){return c});return c}a=function(){"use strict";__p&&__p();function a(a){a===void 0&&(a="");a=a;a[0]==="?"&&(a=a.substr(1));this.$1=a.length?a.split("&").map(function(a){a=a.split("=");var b=a[0];a=a[1];return[l(b),l(a)]}):[]}var b=a.prototype;b.append=function(a,b){this.$1.push([a,String(b)])};b["delete"]=function(a){for(var b=0;b<this.$1.length;b++)this.$1[b][0]===a&&(this.$1.splice(b,1),b--)};b.entries=function(){if(j)return this.$1[j]();var a=this.$1.slice(0);return m(a)};b.get=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return this.$1[b][1];return null};b.getAll=function(a){var b=[];for(var c=0,d=this.$1.length;c<d;c++)this.$1[c][0]===a&&b.push(this.$1[c][1]);return b};b.has=function(a){for(var b=0,c=this.$1.length;b<c;b++)if(this.$1[b][0]===a)return!0;return!1};b.keys=function(){var a=this.$1.map(function(a){var b=a[0];a[1];return b});return j?a[j]():m(a)};b.set=function(a,b){var c=!1;for(var d=0;d<this.$1.length;d++)this.$1[d][0]===a&&(c?(this.$1.splice(d,1),d--):(this.$1[d][1]=String(b),c=!0));c||this.$1.push([a,String(b)])};b.toString=function(){return this.$1.map(function(a){var b=a[0];a=a[1];return k(b)+"="+k(a)}).join("&")};b.values=function(){var a=this.$1.map(function(a){a[0];a=a[1];return a});return j?a[j]():m(a)};b[j]=function(){return this.entries()};return a}();e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule",["URLSearchParams"],(function(a,b,c,d,e,f){"use strict";b={};function a(a){var b=a.adClientToken,c=a.isBackgrounded;a=a.muted;b=b!=null;return!c||!a?"SKIP":c&&a&&b?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnHiddenSubtreeRule",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.hiddenSubtreePassive;return a.getCurrentState().hiddenOrBackgrounded_FIXME?"PAUSE":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnHiddenSubtreeRule";e.exports=a}),null);
__d("evaluateVideoAutoplayPauseOnMutedBackgroundedRule",["URLSearchParams"],(function(a,b,c,d,e,f){"use strict";b={};function a(a){var b=a.muted;a=a.isBackgrounded;return a?a&&b?"PAUSE":"SKIP":"SKIP"}a.displayName="evaluateVideoAutoplayPauseOnMutedBackgroundedRule";e.exports=a}),null);
__d("VideoPlayerAutoplayRulesProvider",["evaluateVideoAutoplayIgnoreOnCannotAutoplayRule","evaluateVideoAutoplayIgnoreOnEndedRule","evaluateVideoAutoplayIgnoreOnFrozenRule","evaluateVideoAutoplayIgnoreOnUnmuteRule","evaluateVideoAutoplayIgnoreOnUserPausedRule","evaluateVideoAutoplayIgnoreOnUserPlayRule","evaluateVideoAutoplayPauseOnAdInvisibleRule","evaluateVideoAutoplayPauseOnHiddenSubtreeRule","evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule","evaluateVideoAutoplayPauseOnMutedBackgroundedRule","createEvaluateVideoAutoplayPauseOnInvisibleRule","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i,j=[a=b("evaluateVideoAutoplayIgnoreOnFrozenRule"),b("evaluateVideoAutoplayPauseOnAdInvisibleRule"),(c=b("createEvaluateVideoAutoplayPauseOnInvisibleRule"))(.5),b("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),d=b("evaluateVideoAutoplayPauseOnHiddenSubtreeRule"),f=b("evaluateVideoAutoplayIgnoreOnCannotAutoplayRule"),b("evaluateVideoAutoplayIgnoreOnUnmuteRule"),g=b("evaluateVideoAutoplayIgnoreOnUserPausedRule"),h=b("evaluateVideoAutoplayIgnoreOnUserPlayRule"),i=b("evaluateVideoAutoplayIgnoreOnEndedRule")],k=[a,b("evaluateVideoAutoplayPauseOnAdInvisibleRule"),c(.5),b("evaluateVideoAutoplayPauseOnMutedBackgroundedRule"),d,f,b("evaluateVideoAutoplayIgnoreOnUnmuteRule"),g,h,i],l=[a,c(.5),d,f,g,h,i];f=[a,b("evaluateVideoAutoplayPauseOnAdInvisibleRule"),b("evaluateVideoAutoplayPauseOnAdMutedBackgroundedRule"),d,f,c(.5),h,g,i];a=[a,c(.5),d,b("evaluateVideoAutoplayIgnoreOnUnmuteRule"),g,h,i];var m={basic:j,default_feed:k,gif:l,live_producer:a,watch_feed:f};c={provideAutoplayRules:function(a){a=m[a];if(!a)throw b("unrecoverableViolation")("Unknown VideoPlayerAutoplayRulesType passed to VideoPlayerAutoplayRulesProvider","comet_video_player");return a}};e.exports=c}),null);
__d("VideoPlayerAutoplayContexts",["React","VideoPlayerAutoplayRulesProvider","cometUniqueID"],(function(a,b,c,d,e,f){"use strict";c=b("React");d=c.createContext;f=d({autoplayLocalRules:b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("basic"),autoplayScopeID:"null"});c=d(null);function a(){return b("cometUniqueID")()}e.exports={AutoplayApiContext:c,makeAutoplayScopeID:a,VideoAutoplayLocalScopeContext:f}}),null);
__d("VideoAutoplayLocalScopeProvider.react",["React","VideoPlayerAutoplayContexts"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");var h=c.useMemo,i=c.useRef,j=b("VideoPlayerAutoplayContexts").VideoAutoplayLocalScopeContext,k=b("VideoPlayerAutoplayContexts").makeAutoplayScopeID;function a(a){var b=a.autoplayLocalRules,c=a.customAutoplaySelectionFunc,d=k(),e=i(d);d=h(function(){return{autoplayLocalRules:b,autoplayScopeID:e.current,customAutoplaySelectionFunc:c}},[e,c,b]);return g.jsx(j.Provider,{value:d,children:a.children})}e.exports=a}),null);
__d("VideoAutoplayManagerUtils",["DOMRectIsEqual"],(function(a,b,c,d,e,f){"use strict";function a(a,c,d){var e=a?a.symbol:null;return a!=null&&e!==c&&a.previousAutoplayDecision===a.currentAutoplayDecision&&b("DOMRectIsEqual")((e=a.previousVideoPlayerViewabilityInfo)==null?void 0:e.positionToViewport,a.videoPlayerViewabilityInfo.positionToViewport)&&!(c==null&&d===1&&((e=a.previousVideoPlayerViewabilityInfo)==null?void 0:e.visiblePercentage)!==a.videoPlayerViewabilityInfo.visiblePercentage)}e.exports={shouldSkipBestAutoplayVideo:a}}),null);
__d("VideoPlayerWithAutoplayUtils",["gkx"],(function(a,b,c,d,e,f){"use strict";function a(a){}function b(a,b,c,d){return a==="PAUSE"&&b==="PAUSE"&&!c&&d}e.exports={componentShouldPause:b,log:a}}),null);
__d("WwwCometVideoAutoplayFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("www_comet_video_autoplay");e.exports=a}),null);
__d("VideoAutoplayManagerX.react",["CometThrottle","React","VideoAutoplayLocalScopeProvider.react","VideoAutoplayManagerUtils","VideoPlayerAutoplayContexts","VideoPlayerAutoplayRulesProvider","WwwCometVideoAutoplayFalcoEvent","clearTimeout","gkx","recoverableViolation","useCometPassiveWindowSize","useCometUniqueID","VideoPlayerWithAutoplayUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");var h=c.useCallback,i=c.useEffect,j=c.useMemo,k=c.useRef,l=b("VideoAutoplayManagerUtils").shouldSkipBestAutoplayVideo,m=b("VideoPlayerAutoplayContexts").AutoplayApiContext,n=750,o=b("gkx")("1235484")?200:50,p=b("VideoPlayerWithAutoplayUtils").log;function q(a,b){a=a.videoPlayerViewabilityInfo.positionToViewport;if(a){var c=a.height;a=a.y;a=a+c/2;return Math.abs(a-b)}return Number.POSITIVE_INFINITY}function a(a){__p&&__p();var c=b("useCometUniqueID")(),d=j(function(){return"MX::"+c},[c]),e=k(d);i(function(){e.current=d},[d]);var f=k(new Map()),r=k(new Map()),s=k(new Map()),t=k(new Map()),u=k(null),v=k(!1),w=b("useCometPassiveWindowSize")(),x=k(w);i(function(){x.current=w},[w]);i(function(){__p&&__p();var a=v,c=u,d=f;return function(){__p&&__p();a.current=!0;b("clearTimeout")(c.current);var e=d.current.values(),f=e.next();while(f.value!=null){var g=f.value,h=g.longThrottle;g=g.throttle;g.cancel();h.cancel();f.done||(f=e.next())}}},[]);var y=h(function(a){__p&&__p();var c;if(v.current)return;var d=a.autoplayScopeID,f=(c=t.current.get(d))!=null?c:null;c=r.current.keys();var g=c.next(),h=[];while(g.value!=null){var i=r.current.get(g.value);if(i){var j=i.autoplayLocalScope;i=i.symbol;if(j.autoplayScopeID===d){j=s.current.get(i);if(j){var k=j.currentAutoplayDecision,m=j.videoPlayerViewabilityInfo;s.current.set(i,{currentAutoplayDecision:k,previousAutoplayDecision:k,previousVideoPlayerViewabilityInfo:m,symbol:i,videoPlayerViewabilityInfo:m});k==="ALLOW"&&h.push(j)}}}g.done||(g=c.next())}i=x.current.getCurrent();var n=i.innerHeight/2;h.sort(function(a,b){__p&&__p();var c=Math.floor(q(a,n)),d=Math.floor(q(b,n)),e=a.videoPlayerViewabilityInfo.positionToViewport,f=b.videoPlayerViewabilityInfo.positionToViewport,g=1.05,h=Math.abs(c-d),i=!1;if(e&&f){e=Math.max(e.height,f.height);i=h<=e/2*g}if(!i)if(c<d)return-1;else if(c>d)return 1;f=a.videoPlayerViewabilityInfo.visiblePercentage;h=b.videoPlayerViewabilityInfo.visiblePercentage;e=.01;if(Math.abs(f-h)>e)if(f>h)return-1;else if(f<h)return 1;c=(i=(g=a.videoPlayerViewabilityInfo.positionToViewport)==null?void 0:g.x)!=null?i:0;f=(e=(d=b.videoPlayerViewabilityInfo.positionToViewport)==null?void 0:d.x)!=null?e:0;return f-c});m=0;k=h[m];var o;j=k==null;while(!j)l(k,f,h.length)?(k=h[++m],j=k==null):j=!0;o=k?k.symbol:null;b("clearTimeout")(u.current);u.current=null;a.customAutoplaySelectionFunc&&(o=a.customAutoplaySelectionFunc(h,o,f));if(o!==f){if(f){g=f?r.current.get(f):null;if(g){var w=g.controller;c=w.getCurrentState();i=c.paused;j=f?s.current.get(f):null;m=function(a){var c;p(e.current,"[PAUSE] previously selected autoplay video: "+((c=f)!=null?c:"null"));b("WwwCometVideoAutoplayFalcoEvent").log(function(){return{autoplay_event_name:"pause",autoplay_scope_id:d,event_creation_time:Date.now(),initiator:e.current,initiator_type:"autoplay_manager",selected_autoplay_video_symbol:o,target:f,target_current_autoplay_decision:a==null?void 0:a.currentAutoplayDecision}});w.pause("autoplay_initiated")};if(j){k=j.currentAutoplayDecision;k==="ALLOW"&&!i&&m(j)}else m()}}if(o){a=r.current.get(o);if(a){h=a.controller;p(e.current,"[PLAY] newly selected autoplay video: "+o);var y=s.current.get(o)||null;b("WwwCometVideoAutoplayFalcoEvent").log(function(){return{autoplay_event_name:"play",autoplay_scope_id:d,event_creation_time:Date.now(),initiator:e.current,initiator_type:"autoplay_manager",selected_autoplay_video_symbol:o,target:f,target_current_autoplay_decision:y==null?void 0:y.currentAutoplayDecision}});h.play("autoplay_initiated")}}t.current.set(d,o)}},[]),z=h(function(a){a=a.autoplayScopeID;return{selectedAutoplayVideoSymbol:t.current.get(a)}},[]),A=h(function(a,c,d,g,h){p(e.current,"[Register] "+a);r.current.set(a,{autoplayLocalScope:d,controller:g,hiddenSubtreePassive:h,instanceKey:c,symbol:a});g=d.autoplayScopeID;f.current.has(g)||f.current.set(g,{longThrottle:b("CometThrottle")(y,n),throttle:b("CometThrottle")(y,o)})},[]),B=h(function(a,c,d){__p&&__p();var e=r.current.get(a);if(e){e=e.autoplayLocalScope;var g=e.autoplayScopeID,h=s.current.get(a),i=h?h.previousAutoplayDecision:null,j=h?h.previousVideoPlayerViewabilityInfo:null;s.current.set(a,{currentAutoplayDecision:c,previousAutoplayDecision:i,previousVideoPlayerViewabilityInfo:j,symbol:a,videoPlayerViewabilityInfo:d});i=!0;(c==="IGNORE"||h&&h.currentAutoplayDecision==="IGNORE")&&(i=!1);j=t.current.get(g)||null;j===a&&c!=="ALLOW"&&t.current.set(g,null);if(i){d=f.current.get(g);d&&(b("gkx")("1238814")&&j==null?d.longThrottle(e):d.throttle(e))}}else b("recoverableViolation")("Received an update for an unregisterd video unit: "+a,"comet_video_player")},[]),C=h(function(a){__p&&__p();p(e.current,"[Unregister] "+a);if(r.current.has(a)){var c=r.current.get(a);if(c){var d;c=c.autoplayLocalScope;var g=c.autoplayScopeID;s.current["delete"](a);d=(d=t.current.get(g))!=null?d:null;if(d===a){t.current.set(g,null);d=f.current.get(g);d?b("gkx")("1238814")?d.longThrottle(c):d.throttle(c):b("recoverableViolation")("No throttles exist for the current scope: "+g+", this is probably an error.","comet_video_player")}r.current["delete"](a)}}},[]),D=j(function(){return{getAutoplayManagerDebugInfo:z,register:A,unregister:C,update:B}},[z,A,C,B]),E=b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("basic");return g.jsx(m.Provider,{value:D,children:g.jsx(b("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:E,children:a.children})})}e.exports=a}),null);