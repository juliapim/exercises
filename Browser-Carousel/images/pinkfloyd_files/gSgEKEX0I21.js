if (self.CavalryLogger) { CavalryLogger.start_js(["SSom4"]); }

__d("oz-player/drm/OzDrmUtils",[],(function(a,b,c,d,e,f){"use strict";a=function(a){return Uint8Array.from(window.atob(a),function(a){return a.charCodeAt(0)})};b=function(a){return window.btoa(String.fromCharCode.apply(null,new Uint8Array(a)))};e.exports={base64ToUint8Array:a,arrayBufferToBase64:b}}),null);
__d("OzWidevineDrmProvider",["URI","oz-player/drm/OzDrmUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("oz-player/drm/OzDrmUtils").arrayBufferToBase64,i=b("oz-player/drm/OzDrmUtils").base64ToUint8Array;a=function(){__p&&__p();function a(a,c,d,e,f){__p&&__p();this.$2=[];this.$4=!0;this.$5=!1;f!==void 0&&f!==null&&f!==""&&(this.$1=i(f));if(c!==null&&c!==void 0&&e!==null&&e!==void 0){f=new(g||(g=b("URI")))(c);f.addQueryData("access_token",e);this.$3=f.toString();this.$5=!0;this.$4=!1}else{c=d["0"];if(c===void 0||c===null){c="/video/drm/getlicense";e=new(g||(g=b("URI")))(c);e.addQueryData("video_id",a);this.$3=e.toString()}else this.$3=c}}var c=a.prototype;c.getKeySystem=function(){return"com.widevine.alpha"};c.getSchemeId=function(){return"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};c.getInitDatas=function(){return this.$2};c.setInitDatas=function(a){this.$2=a};c.getRequireDistinctiveIdentifier=function(){return"optional"};c.getRequirePersistentState=function(){return"optional"};c.getInitDataTypes=function(){return};c.getDrmSessionTypes=function(){return["temporary"]};c.getAudioRobustness=function(){return""};c.getVideoRobustness=function(){return""};c.getServerCertificate=function(){return this.$1};c.getLicenseRequestInfo=function(a){__p&&__p();var b={url:this.$3,method:"POST",body:"",headers:{}};this.$4&&(b.credentials="include");a=h(a);if(this.$5){var c={request:a};b.body=JSON.stringify(c);b.headers["Content-Type"]="application/json"}else b.body=a,b.headers["Content-Type"]="application/text";return b};c.parseLicenseResponse=function(a){__p&&__p();a=String.fromCharCode.apply(null,a);var b;try{b=JSON.parse(a)}catch(a){b=void 0}var c;if(b!==void 0&&b.data!==void 0&&b.data.length===1){b=b.data[0];b.error!==null&&b.error!==void 0||(c=b.license)}else c=a;return c!==void 0&&c!==null&&c!==""?i(c):null};return a}();e.exports=a}),null);
__d("oz-player/drm/OzDrmManager",["oz-player/loggings/OzLoggingUtils","oz-player/loggings/OzOperationLoggerBase","oz-player/shims/OzDOMEventListener","oz-player/shims/OzMaybeNativePromise","oz-player/shims/OzSubscriptionsHandler","oz-player/utils/OzError","oz-player/utils/OzErrorEmitter","oz-player/drm/OzDrmUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation,h=b("oz-player/shims/OzDOMEventListener").listenDOMEvent,i=b("oz-player/drm/OzDrmUtils").base64ToUint8Array;a=function(){__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=new Map();this.$3=!1;this.$5=new(b("oz-player/shims/OzSubscriptionsHandler"))();this.$6=new(b("oz-player/utils/OzErrorEmitter"))();this.$7=!1;this.$8=null;this.$9=function(a){var c=a;a instanceof b("oz-player/utils/OzError")||(c=new(b("oz-player/utils/OzError"))({type:"OZ_DRM_MANAGER",description:a.message,extra:{originalError:a}}));d.$6.emitError(c)};this.$4=c;this.$2=a.cloneContext().setType("drm_manager")}var c=a.prototype;c.hasContentProtections=function(){return this.$8};c.onError=function(a){return this.$6.onError(a)};c.addProvider=function(a){this.$1.set(a.getSchemeId(),a)};c.getProviderForSchemeId=function(a){return this.$1.get(a)};c.parseContentProtectionForRepresentation=function(a){__p&&__p();if(!a.ContentProtection)return null;var b=[];for(var c=0;c<a.ContentProtection.length;c++){var d=a.ContentProtection[c],e=d.$.schemeIdUri;e=this.getProviderForSchemeId(e);if(e){var f=e.getInitDatas();if(f.length==0&&d["cenc:pssh"]&&d["cenc:pssh"].length===1){d=d["cenc:pssh"][0]._;d=i(d.replace(/-/g,"+").replace(/_/g,"/"));f=[{data:d,type:"cenc"}];e.setInitDatas(f)}b.push({provider:e,initDatas:f})}}return b};c.startEME=function(a,b,c,d){__p&&__p();var e=this;if(this.$7)return;this.$7=!0;var f=new Map();this.$10(c,d,f,"audio");this.$10(a,b,f,"video");var g;f.forEach(function(a,b){!g?g=e.$11(b,a):g=g["catch"](function(){return e.$11(b,a)})});if(!g){this.$8=!1;return}this.$8=!0;var h=this.$2.getOperationLogger("drm_setup").start();g.then(this.$12.bind(this)).then(this.$13.bind(this)).then(this.$14.bind(this)).then(function(){return h.log()},function(a){e.$9(a),h.setResult("failed").setError(a).log()})};c.$15=function(a){a instanceof b("oz-player/loggings/OzOperationLoggerBase")&&a.getError()&&a.setResult("failed")};c.$10=function(a,b,c,d){__p&&__p();var e=this;b.forEach(function(b){var f;a&&a.ContentProtection?f=e.parseContentProtectionForRepresentation(a):f=b.getCustomField("drmProtections");var g=b.getMimeCodecs();f!==void 0&&f!==null&&f.forEach(function(a){a=a.provider;c.has(a.getKeySystem())||c.set(a.getKeySystem(),{audioCapabilities:new Map(),videoCapabilities:new Map(),distinctiveIdentifier:a.getRequireDistinctiveIdentifier(),persistentState:a.getRequirePersistentState(),sessionTypes:a.getDrmSessionTypes(),initDataTypes:a.getInitDataTypes()});var b=c.get(a.getKeySystem());d==="audio"&&!b.audioCapabilities.has(g)&&b.audioCapabilities.set(g,{contentType:g,robustness:a.getAudioRobustness()});d==="video"&&!b.videoCapabilities.has(g)&&b.videoCapabilities.set(g,{contentType:g,robustness:a.getVideoRobustness()})})})};c.destroy=function(){this.$5.release(),this.$3=!0};c.$11=function(a,b){b={audioCapabilities:Array.from(b.audioCapabilities.values()),videoCapabilities:Array.from(b.videoCapabilities.values()),distinctiveIdentifier:b.distinctiveIdentifier,persistentState:b.persistentState,sessionTypes:b.sessionTypes,initDataTypes:b.initDataTypes};return g(window.navigator.requestMediaKeySystemAccess(a,[b]),this.$2,"drm_request_media_key_system_access",function(){},this.$15)};c.$12=function(a){return this.$3?b("oz-player/shims/OzMaybeNativePromise").reject():g(a.createMediaKeys().then(function(b){return{mediaKeySystemAccess:a,mediaKeys:b}}),this.$2,"drm_create_media_keys",function(){},this.$15)};c.$13=function(a){__p&&__p();var c=this;if(this.$3)return b("oz-player/shims/OzMaybeNativePromise").reject();var d=a.mediaKeySystemAccess,e=a.mediaKeys;if(!e)throw new(b("oz-player/utils/OzError"))({type:"OZ_DRM_MANAGER",description:"No mediaKeys for mediaKeySystemAccess"});a=this.$4.setMediaKeys(e).then(function(){if(c.$3)return b("oz-player/shims/OzMaybeNativePromise").reject();var a=Array.from(c.$1.values()).find(function(a){return a.getKeySystem()===d.keySystem});if(!a)throw new(b("oz-player/utils/OzError"))({type:"OZ_DRM_MANAGER",description:"Can't find OzDrmProvider for keySystem "+d.keySystem});var f=a.getServerCertificate();return f?e.setServerCertificate(f).then(function(){return{mediaKeySystemAccess:d,mediaKeys:e,provider:a}}):{mediaKeys:e,provider:a}});return g(a,this.$2,"drm_set_media_keys",function(){},this.$15)};c.$14=function(a){__p&&__p();var c=this,d=a.mediaKeys,e=a.provider;a=e.getInitDatas();if(a.length===0){this.$5.addSubscriptions(h(this.$4,"encrypted",function(a){c.$16(d,e,a)["catch"](c.$9)}));return b("oz-player/shims/OzMaybeNativePromise").resolve([])}a=a.map(function(a){return c.$16(d,e,{initData:a.data,initDataType:a.type})});return g(b("oz-player/shims/OzMaybeNativePromise").all(a),this.$2,"drm_request_license",function(){},this.$15)};c.$16=function(a,b,c){var d=this,e=a.createSession();this.$5.addSubscriptions(h(e,"message",function(a){d.$17(e,b,a)["catch"](d.$9)}),h(e,"keystatuseschange",function(a){d.$18(e)["catch"](d.$9)}));return e.generateRequest(c.initDataType,c.initData)};c.$17=function(a,b,c){var d=this;c=b.getLicenseRequestInfo(c.message.slice(0));return window.fetch(c.url,c).then(function(a){return a.arrayBuffer()}).then(function(c){c=new Uint8Array(c);c=b.parseLicenseResponse(c);c===null||c===void 0||c.byteLength===0?d.$9(new Error("No license for "+b.getKeySystem())):a.update(c)})};c.$18=function(a){return a.expiration<Date.now()?a.close():b("oz-player/shims/OzMaybeNativePromise").resolve()};return a}();e.exports={OzDrmManager:a}}),null);
__d("HTML5OzDrmHelper",["OzWidevineDrmProvider","oz-player/drm/OzDrmManager"],(function(a,b,c,d,e,f){"use strict";a=b("oz-player/drm/OzDrmManager").OzDrmManager;c={OzDrmManagerModule:a,OzWidevineDrmProviderModule:b("OzWidevineDrmProvider")};e.exports=c}),null);
__d("Pleasantville.react",["React","ReactDOM","VideoPlayerHTML5Api","VideoPlayerReactConfig","requireWeak","HTML5OzDrmHelper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,b=a.offsetType;a=a.offsetValue;var c=null,d=null;b=="horizontal"?d=a:b=="vertical"&&(c=a);return g.jsx("video",{ref:"video",muted:this.props.startMuted,className:this.props.className,"data-video-width":this.props.width||"","data-video-height":this.props.height||"",style:{top:c,left:d}})};d.getVideoPlayerInitArgs=function(){var a,c;b("requireWeak")("VideoPlayerHTML5Shaka",function(b){return a=b});b("requireWeak")("VideoPlayerHTML5Oz",function(a){return c=a});var d=this.props.dashModule!=null?this.props.dashModule:this.props.videoData.getPlayerVersionOverwrite()==="oz"?c||a:a,e=this.props.videoData.getDRMHelper()!=null?b("HTML5OzDrmHelper"):null;e={videoLicenseUriMap:this.props.videoData.getVideoLicenseUriMap(),graphApiVideoLicenseUri:this.props.videoData.getGraphApiVideoLicenseUri(),OzDrmHelper:e,VideoPlayerHTML5Shaka:d,disableNativeControls:!0,subtitlesActive:this.props.showSubtitles,minQuality:this.props.forceHD?"hd":b("VideoPlayerReactConfig").defaultQuality,unloadShouldCancelPendingRequest:!0,initialRepresentationIds:this.props.initialRepresentationIds};return{apiConfig:e,apiModule:b("VideoPlayerHTML5Api"),videoElement:b("ReactDOM").findDOMNode(this.refs.video)}};return c}(g.Component);e.exports=a}),null);
__d("VideoComponentClickPlayPause.react",["React","VideoComponent","VideoWithClickPlayPause"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){new(b("VideoWithClickPlayPause"))(a)};d.disable=function(){};d.shouldComponentUpdate=function(){return!1};d.render=function(){return null};return c}(a.Component);e.exports=b("VideoComponent").createContainer(c)}),null);
__d("VideoComponentSphericalVideoHeadingIndicator.react",["cx","Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={enabled:!1};return b}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;this.setState({enabled:!0},function(){b("Bootloader").loadModules(["VideoSphericalHeadingIndicator"],function(b){var d=c.props.videoData.getSphericalConfig();new b(a,c.refs.root,d.initialHeading,d.initialPitch,d.fieldOfView)},"VideoComponentSphericalVideoHeadingIndicator.react")})};d.disable=function(){this.setState({enabled:!1})};d.render=function(){return!this.state.enabled?null:h.jsx("div",{className:"_3lfe",ref:"root"})};return c}(h.Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentSphericalVideoOverlay.react",["cx","Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={enabled:!1};return b}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;this.setState({enabled:!0},function(){b("Bootloader").loadModules(["VideoSphericalOverlay"],function(b){c.$1&&c.$2&&c.$3&&new b(a,c.$1,c.$2,!1,c.$3)},"VideoComponentSphericalVideoOverlay.react")})};d.disable=function(){this.setState({enabled:!1})};d.render=function(){var a=this;return!this.state.enabled?null:h.jsxs("div",{className:"_1-s8",children:[h.jsx("div",{className:"_1zvy",ref:function(b){a.$1=b}}),h.jsx("div",{className:"_2660",ref:function(b){a.$2=b}}),h.jsx("div",{className:"_236i",ref:function(b){a.$3=b}})]})};return c}(h.Component);e.exports=b("VideoComponent").createContainer(a)}),null);
__d("VideoComponentSphericalVideoSpatialAudioController.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){__p&&__p();var c=this;if(!this.props.videoData.isSpherical())return;var d=this.props.videoData.getSphericalConfig();if(!d.hasSpatialAudio===!0)return;b("Bootloader").loadModules(["SphericalVideoSpatialAudioController"],function(d){var b=c.props.videoData.getSphericalConfig(),e=b.spatialAudioBufferParameters,f=b.canUseSpatialAudio,g=b.focusEnabled,h=b.offFocusLevelDB,i=b.focusWidth;b=b.remapChannelsForSevenPointOne;c.$1=new d(e,f,g,h,i,!1,b,!1,!1,null);c.$1.enable(a)},"VideoComponentSphericalVideoSpatialAudioController.react")};d.disable=function(){this.$1&&this.$1.destroy()};d.render=function(){return null};return c}(a.Component);e.exports=b("VideoComponent").createContainer(c)}),null);
__d("VideoComponentWithSphericalRecenterControl.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;b("Bootloader").loadModules(["SphericalVideoRecenterControl"],function(b){var d=c.props.videoData.getSphericalConfig();c.$1=new b(a,d.initialHeading,d.initialPitch)},"VideoComponentWithSphericalRecenterControl.react")};d.disable=function(){this.$1&&this.$1.destroy()};d.render=function(){return null};return c}(a.Component);e.exports=b("VideoComponent").createContainer(c)}),null);
__d("VideoComponentWithSphericalVideoPlayer.react",["Bootloader","React","VideoComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.enable=function(a){var c=this;if(!this.props.videoData.isSpherical())return;b("Bootloader").loadModules(["SphericalVideoPlayer"],function(b){var d=c.props.videoData.getSphericalConfig();c.$1=new b(d,{eagerPreload:!0,useContainerDimensions:!0});c.$1.enable(a)},"VideoComponentWithSphericalVideoPlayer.react")};d.disable=function(){this.$1&&this.$1.disable()};d.render=function(){return null};return c}(a.Component);e.exports=b("VideoComponent").createContainer(c)}),null);
__d("VideoResizeMode",[],(function(a,b,c,d,e,f){"use strict";e.exports={FIT:"FIT",COVER_HEIGHT:"COVER_HEIGHT"}}),null);
__d("VideoPlayer.react",["cx","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Pleasantville.react","React","ReactDOM","VideoComponentClickPlayPause.react","VideoComponentSphericalVideoHeadingIndicator.react","VideoComponentSphericalVideoOverlay.react","VideoComponentSphericalVideoSpatialAudioController.react","VideoComponentWithSphericalRecenterControl.react","VideoComponentWithSphericalVideoPlayer.react","VideoPlayerController","VideoPlayerShakaGlobalConfig","VideoResizeMode","gkx","joinClasses","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React");a={showCaptionsDefault:!1,onUpdateMetadata:function(){},onVideoClick:function(){},autoplay:!1,autoplayReason:"unknown",autoplaySetting:"autoplay_setting_www",forceHD:!1,startMuted:!1,isUnmountScheduled:!1,videoResizeMode:b("VideoResizeMode").FIT,allowCrossPageTransition:!1,disableClickPlayPause:!1,disableSphericalComponents:!1};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$4=function(){d.vpcCleanedup||(d.vpc.pause("unloaded"),d.vpc.destroy({disableStillFrame:!0}),d.vpcCleanedup=!0)};d.$7=function(a,c){var e=babelHelpers["extends"]({},d.props,{videoID:d.props.videoData.getVideoID(),ref:d.$8.bind(babelHelpers.assertThisInitialized(d),c.toString())});return h.jsx(b("FBOverlayElement.react"),{children:h.cloneElement(a,e)},c)};d.componentRefs=new Map();d.state={isFullscreen:!1};return d}var d=c.prototype;d.componentDidMount=function(){this.vpc=this.$1(this.refs.video.getVideoPlayerInitArgs(),this.props.videoData)};d.componentDidUpdate=function(a){var c=this;b("gkx")("1349777")&&(!a.isAutoplayEnabledForRegisterCallback&&this.props.isAutoplayEnabledForRegisterCallback?this.props.registerAutoplayCallback&&this.props.registerAutoplayCallback(this):a.isAutoplayEnabledForRegisterCallback&&!this.props.isAutoplayEnabledForRegisterCallback&&(this.props.unregisterAutoplayCallback&&this.props.unregisterAutoplayCallback()));this.$2(a)&&(this.$3(this.vpc),this.vpc=this.$1(this.refs.video.getVideoPlayerInitArgs(),this.props.videoData));a.isUnmountScheduled!==this.props.isUnmountScheduled&&this.props.isUnmountScheduled&&this.vpc.runOnceOnApiEventLogged("started_playing",function(){b("setTimeoutAcrossTransitions")(c.$4,0);return})};d.componentWillUnmount=function(){this.$3(this.vpc)};d.play=function(a){var b=this.vpc;b&&b.play(a)};d.pause=function(a){var b=this.vpc;b&&b.pause(a)};d.$5=function(){var a=[];this.props.disableSphericalComponents||(a.push(h.jsx(b("VideoComponentWithSphericalVideoPlayer.react"),{})),a.push(h.jsx(b("VideoComponentWithSphericalRecenterControl.react"),{})),a.push(h.jsx(b("VideoComponentSphericalVideoHeadingIndicator.react"),{})),a.push(h.jsx(b("VideoComponentSphericalVideoOverlay.react"),{})),a.push(h.jsx(b("VideoComponentSphericalVideoSpatialAudioController.react"),{})));this.props.disableClickPlayPause||a.push(h.jsx(b("VideoComponentClickPlayPause.react"),{}));return a};d.$3=function(a){__p&&__p();if(a){for(var b=this.componentRefs.values(),c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;e.disable()}a.runOnApiReady(this.$4)}};d.$2=function(a){var b=a.videoData.getVideoID()!==this.props.videoData.getVideoID();a=a.videoData.getPlayableSrcSD()!==this.props.videoData.getPlayableSrcSD();return b||a};d.$1=function(a,c){__p&&__p();var d=this,e=a.apiConfig,f=a.apiModule;a=a.videoElement;this.vpcCleanedup=!1;e.videoData=[c.getRawData()];e.startTimestamp=this.props.startTimestamp;var g=new(b("VideoPlayerController"))({source:this.props.subOrigin,playerOrigin:this.props.playerOrigin||null,playerSuboriginDerived:this.props.subOriginDerived,reaction_video_channel_type:this.props.reactionVideoChannelType,reaction_video_channel_subtype:this.props.reactionVideoChannelSubtype,autoplay_reason:this.props.autoplayReason,autoplay_setting:this.props.autoplaySetting,apiModule:f,apiConfig:e,should_autoplay:!this.props.isUnmountScheduled&&this.props.autoplay,player_version:this.props.videoData.getPlayerVersionOverwrite(),video_ids:[c.getVideoID()],allowCrossPageTransition:this.props.allowCrossPageTransition,isReactPlayer:!0,video_url:c.getVideoURL(),isBroadcast:c.isBroadcast(),upstreamPlayerSource:this.props.upstreamPlayerSource||null,livingRoomSessionID:this.props.livingRoomSessionID,customLoggingProps:this.props.customLoggingProps,keepPlayingOnDialog:this.props.keepPlayingOnDialog,isChainedLivingRoom:this.props.isChainedLivingRoom,liveLinearChannelId:this.props.liveLinearChannelId,isReplayLivingRoom:this.props.isReplayLivingRoom,customLiveManifestUrlParams:this.props.isLiveClipPreview?{cp:"1",msx:"m_CT"}:null,positionInUnit:this.props.positionInUnit},{root_element:b("ReactDOM").findDOMNode(this.refs.root),container_element:b("ReactDOM").findDOMNode(this.refs.container),video_element:b("ReactDOM").findDOMNode(a)});for(var f=this.componentRefs.values(),e=Array.isArray(f),c=0,f=e?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(e){if(c>=f.length)break;a=f[c++]}else{c=f.next();if(c.done)break;a=c.value}a=a;a.enable(g)}g.addListener("clickVideo",this.props.onVideoClick);g.addListener("toggleFullscreen",function(){return d.setState({isFullscreen:!!g.isFullscreen()})});g.addListener("updateMetadata",function(){return d.props.onUpdateMetadata(g)});this.props.onVpcUpdate!==null&&this.props.onVpcUpdate!==void 0&&this.props.onVpcUpdate(g);return g};d.$6=function(a){var c="_ox1";this.props.videoResizeMode==b("VideoResizeMode").COVER_HEIGHT?c="_ox1 _41l4":this.props.offsetType=="horizontal"?c="_ox1 _blh":this.props.offsetType=="vertical"&&(c="_ox1 _bli");if(a!==null&&a!==void 0)return b("joinClasses")(c,a);else return c};d.render=function(){__p&&__p();var a=this.props,c=a.width,d=a.height,e=a.tabIndex,f=a.videoData,g=a.startMuted,i=a.offsetValue,j=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["width","height","tabIndex","videoData","startMuted","offsetValue","className"]);j=this.$6(j);var k=c!==void 0||d!==void 0;k&&(d&&(c=c||d*f.getAspectRatio()),c&&(d=d||c/f.getAspectRatio()));f=h.jsx(b("Pleasantville.react"),babelHelpers["extends"]({ref:"video",dashModule:this.props.dashModule,videoData:f,width:c,height:d,showSubtitles:this.props.showCaptionsDefault,className:j,startMuted:g,offsetValue:this.state.isFullscreen?0:i},a));j=k?{}:{width:"100%",height:"100%"};g=k?{width:(c||0)+"px",height:(d||0)+"px"}:{width:"100%",height:"100%"};return h.jsx("div",{ref:"root",tabIndex:e,className:"_1c_u",style:j,children:h.jsxs(b("FBOverlayContainer.react"),{ref:"container",className:"_53j5",style:g,children:[h.jsx(b("FBOverlayBase.react"),{children:f}),h.Children.toArray(this.$5().concat(this.props.children)).filter(function(a){return a!=null}).map(this.$7)]})})};d.$8=function(a,b){!b?this.componentRefs["delete"](a):this.componentRefs.set(a,b)};return c}(h.Component);c.defaultProps=a;e.exports=c}),null);
__d("VideoDataContainer.react",["cx","invariant","regeneratorRuntime","Promise","React","VideoData","VideoPlayer.react","VideoPlayerMetaData","VideoPlayerShakaGlobalConfig"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.$2=null,c.state={errorData:null,isLoading:!0,prevVideoID:c.props.videoID,videoData:null},b)||babelHelpers.assertThisInitialized(c)}c.renderSpinner=function(a,b){return i.jsx("div",{className:"_53j5",style:{height:b,width:a},children:i.jsx("i",{className:"_5l7x"})})};c.getDerivedStateFromProps=function(a,b){return a.videoID!==b.prevVideoID?{errorData:null,isLoading:!0,prevVideoID:a.videoID,videoData:null}:null};var d=c.prototype;d.componentDidMount=function(){this.$3(this.props)};d.componentDidUpdate=function(a,b){if(a.actorID!==this.props.actorID||a.videoID!==this.props.videoID||((a=a.videoDataConfig)==null?void 0:a.hostNumber)!==((a=this.props.videoDataConfig)==null?void 0:a.hostNumber))this.$3(this.props);else if(b.videoData!==this.state.videoData){a=this.props.onVideoLoaded;typeof a==="function"&&a()}};d.componentWillUnmount=function(){this.$1=!0};d.render=function(){__p&&__p();var a=this.state,d=a.isLoading,e=a.videoData;a=a.errorData;if(a)return this.props.renderError?this.props.renderError(a):null;a=this.props.renderLoading;if(d&&a)return a();if(!e||e===c.VIDEO_DATA_PLACEHOLDER)return null;d=this.props.children;d!=null&&d.type===b("VideoPlayer.react")||h(0,2154);return i.cloneElement(d,{videoData:e})};d.$3=function(a){__p&&__p();var c=this,d,e;return b("regeneratorRuntime").async(function(f){__p&&__p();while(1)switch(f.prev=f.next){case 0:this.$2=a.videoID;d=null;e=null;if(!(b("VideoPlayerShakaGlobalConfig").getBool("living_room_optimize_raw_video_data_requests",!1)&&a.rawVideoData&&a.videoID===a.rawVideoData.video_id)){f.next=5;break}return f.abrupt("return",b("Promise").resolve().then(function(){!c.$1&&!a.isUnmountScheduled&&c.$2===a.videoID&&c.setState({videoData:new(b("VideoData"))(a.rawVideoData),isLoading:!1})}));case 5:f.prev=5;f.next=8;return b("regeneratorRuntime").awrap(b("VideoPlayerMetaData").genVideoData(a.videoID,a.videoDataConfig,a.actorID));case 8:e=f.sent;if(!(this.$2!==a.videoID)){f.next=11;break}return f.abrupt("return");case 11:if(!(this.$1||a.isUnmountScheduled)){f.next=13;break}return f.abrupt("return");case 13:if(!(this.$2!==a.videoID)){f.next=15;break}return f.abrupt("return");case 15:f.next=20;break;case 17:f.prev=17,f.t0=f["catch"](5),d=f.t0;case 20:this.$1||(d!==null?this.setState({errorData:d}):this.setState({videoData:e,isLoading:!1}));case 21:case"end":return f.stop()}},null,this,[[5,17]])};return c}(i.Component);a.VIDEO_DATA_PLACEHOLDER=new(b("VideoData"))();e.exports=a}),null);
__d("VideoComponentPlayButton.react",["cx","fbt","React","VideoComponent","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={vpc:null},d.$2=function(){b("nullthrows")(d.state.vpc).clickVideo()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(a){var b=this.props.syncOnPauseVisibilityWithControls!==!0||a.getOption("VideoControls","areControlsVisible");a=a.getState();if(a==="paused"&&b||a==="ready")return!0;b=this.props.alsoVisibleWhen;return!b?!1:Array.isArray(b)?b.includes(a):b===a};d.render=function(){__p&&__p();var a=this.state.vpc;if(!a)return null;var b=a.isPlayRequestPending(),c=a.isBuffering();if(b||c)return i.jsx("i",{className:"_5l7x"});if(!this.$1(a))return null;b=h._("Play video");return i.jsx("i",{className:"_3htz _1jto _bsl"+(((c=this.props.isHidden)!=null?c:!1)?" hidden_elem":""),onClick:this.$2,role:"presentation",children:i.jsx("input",{"aria-label":b,type:"button",className:"_yak"})})};d.enable=function(a){this.setState({vpc:a})};d.disable=function(){};return c}(i.Component);e.exports=b("VideoComponent").createContainer(a,{observedVpcEvents:["stateChange","bufferingChanged","pendingPlayRequestChanged","VideoControls/visibilityUpdate"]})}),null);