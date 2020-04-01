if (self.CavalryLogger) { CavalryLogger.start_js(["V3Gj2"]); }

__d("LiveProducerInputSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({STREAM_KEYS:"STREAM_KEYS",PAIRED_ENCODERS:"PAIRED_ENCODERS",CAMERA:"CAMERA"})}),null);
__d("VideoTargetEntityType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSON:"PERSON",PAGE:"PAGE",GROUP:"GROUP",EVENT:"EVENT"})}),null);
__d("LiveProducerConstants",["DateConsts","LiveProducerInputSource","VideoBroadcastStatus","VideoTargetEntityType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("DateConsts").MS_PER_SEC;c=273465416184080;d="live_producer";f=Object.freeze({PAGE:"PAGE",PROFILE:"PROFILE"});var h=b("LiveProducerInputSource"),i=13,j={FEED_LOCATION:"LIVE_PRODUCER",FEEDBACK_SOURCE:70,MAX_SHOWN_COMMENTS:50,STORY_RENDER_LOCATION:"live_producer"},k={CLOSED:"CLOSED",RESULTS_OPEN:"RESULTS_OPEN",VOTING_OPEN:"VOTING_OPEN"};k=babelHelpers["extends"]({},k,{LIVE_PRODUCER_CREATION_SOURCE:"WWW_LIVE_OPS_PRODUCER",MAX_POLL_OPTIONS:4,MIN_POLL_OPTIONS:2,UNATTACHED:"unattached"});var l={MAX_RATING:5,MIN_RATING:1},m={STAR_TYPE_LEADERBOARD:"leaderboard",STAR_TYPE_LIST:"starList"},n=8,o=10,p=320,q=100,r=20,s=15*1024*1024,t=20,u=15*1024*1024,v=20,w=[(g=b("VideoBroadcastStatus")).LIVE_STOPPED,g.SEAL_STARTED,g.SEAL_FAILED,g.VOD_READY,g.SCHEDULED_EXPIRED,g.SCHEDULED_CANCELED];a=3*a;var x=500,y="/help/publisher/1155396977985198",z=Object.freeze({FAILED:"FAILED",INITIALIZED:"INITIALIZED"});e.exports={AUDIENCE_RESTRICTION_MIN_AGE:i,CAMERA_BROADCAST_COUNTDOWN_MILLISECONDS:a,CHARITY_STREAM_HELP_URL:y,COMMENTS_CONSTANTS:j,DEBOUNCE_WAIT:x,ERROR_LOGS_PAGINATION_COUNT:o,LIVE_MAX_DURATION_IN_HOURS:n,LIVE_PRODUCER_ACTOR_TYPES:f,LIVE_PRODUCER_MEDIA_STREAM_STATUS:z,LIVE_PRODUCER_POST_LIVE_STATES:w,LIVE_PRODUCER_SOURCE_TYPES:h,LIVE_VIDEO_WWW_API_BROADCASTING_APP_ID:c,MAX_AUDIO_BITRATES:u,MAX_VIDEO_BITRATES:s,MIN_AUDIO_BITRATES:t,MIN_FRAMERATES:v,MIN_POPOUT_PLAYER_THRESHOLD_PX:q,MIN_VIDEO_BITRATES:r,POLL_CONSTANTS:k,POPOUT_PLAYER_THRESHOLD_PX:p,POST_LIVE_CONSTANTS:l,PROJECT_NAME:d,STAR_CONSTANTS:m,VideoBroadcastStatus:g,VideoTargetEntityType:b("VideoTargetEntityType")}}),null);
__d("useFeedClickEventHandler",["React","useStoryClickEventLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React");var g=c.useCallback;function a(a,c){var d=b("useStoryClickEventLogger")();return g(function(b){a&&a(b);var e=b.type;if(e==="click"||e==="contextmenu"||e==="mousedown"&&typeof b.button==="number"&&(b.button===1||b.button===2)||e==="keydown"&&(b.key==="Enter"||b.key===" ")){e=typeof b.button==="number"?b.button:0;d(b.timeStamp,e,c)}},[a,d,c])}e.exports=a}),null);
__d("CometIsInNotificationsContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(!1);e.exports=c}),null);
__d("DOMRectIsEqual",["DOMRectReadOnly"],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(!a&&!b)return!0;else if(!a||!b)return!1;return a.x===b.x&&a.y===b.y&&a.width===b.width&&a.height===b.height}e.exports=a}),null);
__d("computeAspectRatio",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a!=null&&b!=null&&a!==0&&b!==0?a/b:null;return a}e.exports=a}),null);
__d("VideoPlayerContexts",["React","computeAspectRatio"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");d=c.createContext;var h=c.useMemo;f=d(!1);c=d("");var i=d(""),j=d(null),k=d(0),l=d(!1),m=d(!1),n=d(!0),o=d(!1),p=d(!1),q=d(null),r=d(!1),s=d(!1),t=d(null),u=d(null),v=d(null),w=d(null),x=d([]),y=d("notselected"),z=d(""),A=d(null),B=d(!1),C=d(!1),D=d(1),E=d(!1),F=d(0),G=d(0),H=d(null),I=d({originalAspectRatio:null,originalHeight:null,originalWidth:null});function a(a){var c=a.children,d=a.originalHeight,e=a.originalWidth;a=h(function(){var a;return{originalAspectRatio:b("computeAspectRatio")(e,d),originalHeight:(a=d)!=null?a:null,originalWidth:(a=e)!=null?a:null}},[d,e]);return g.jsx(I.Provider,{value:a,children:c})}var J=d(null),K=d(null),L=d(null),M=d(!1),N=d(!1),O=d(null),P=d(!1),Q=d("unknown"),R=d(!1),S=d({release:function(a){},reserve:function(a){return a}}),T=d([]),U=d(!1),V=d(null);d=d(!1);e.exports={ActiveCaptionsContext:A,AdClientTokenContext:j,AutoplayGatingResultContext:Q,AvailableVideoQualitiesContext:x,BroadcastStatusContext:O,BufferEndContext:G,CanAutoplayContext:P,CaptionsLoadedContext:C,CaptionsVisibleContext:B,ControllerContext:t,CurrentLoopContext:k,CurrentVideoQualityContext:z,DimensionsContext:J,DurationContext:F,EndedContext:o,ErrorContext:q,InPlayStallingContext:p,InbandCaptionsAutogeneratedContext:R,InstanceKeyContext:H,IsAbrEnabledContext:f,IsLiveContext:r,IsLiveRewindActiveContext:d,LastMuteReasonContext:u,LastPauseReasonContext:w,LastPlayReasonContext:v,MutedContext:E,PausedContext:n,PlayerImplementationNameContext:K,PlayingContext:l,SeekableRangesContext:V,SeekingContext:s,SelectedVideoQualityContext:y,StallingContext:m,StreamInterruptedContext:U,TargetAudioQualityContext:c,TargetVideoQualityContext:i,VideoOriginalDimensionsContext:I,VideoOriginalDimensionsContextMemoProvider:a,VideoPlayerCaptionsReservationActionsContext:S,VideoPlayerCaptionsReservationsContext:T,VideoPlayerMouseHoverContext:M,VideoPlayerMouseIdleContext:N,VideoStateDebugApiToolsContext:L,VolumeContext:D}}),null);
__d("VideoPlayerUtils",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){c===void 0&&(c="Value null");if(a===null)throw b("unrecoverableViolation")("Assertion failed: "+c+".","comet_video_player");return a}function c(a,c){c===void 0&&(c="Value undefined");if(a===void 0)throw b("unrecoverableViolation")("Assertion failed: "+c+".","comet_video_player");return a}e.exports={assertNotNull:a,assertNotUndefined:c}}),null);
__d("VideoPlayerViewabilityContexts",["DOMRectReadOnly","React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext;d=c(null);f=c(!1);e.exports={VideoPlayerFullscreenContext:f,VideoPlayerPassiveViewabilityInfoContext:d}}),null);
__d("VideoPlayerHooks",["DOMRectIsEqual","LiveProducerConstants","React","VideoPlayerContexts","VideoPlayerUtils","VideoPlayerViewabilityContexts","clearTimeout","removeFromArray","setTimeout","useLayoutEffect_SAFE_FOR_SSR","useStable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React"),h=g.useContext,i=g.useEffect,j=g.useRef,k=g.useState,l=(g=b("VideoPlayerContexts")).ActiveCaptionsContext,m=g.AdClientTokenContext,n=g.AutoplayGatingResultContext,o=g.AvailableVideoQualitiesContext,p=g.BroadcastStatusContext,q=g.BufferEndContext,r=g.CanAutoplayContext,s=g.CaptionsLoadedContext,t=g.CaptionsVisibleContext,u=g.ControllerContext,v=g.CurrentLoopContext,w=g.CurrentVideoQualityContext,x=g.DimensionsContext,y=g.DurationContext,z=g.EndedContext,A=g.ErrorContext,B=g.InbandCaptionsAutogeneratedContext,C=g.InPlayStallingContext,D=g.InstanceKeyContext,E=g.IsAbrEnabledContext,F=g.IsLiveRewindActiveContext,G=g.LastMuteReasonContext,H=g.LastPauseReasonContext,I=g.LastPlayReasonContext,J=g.MutedContext,K=g.PausedContext,L=g.PlayerImplementationNameContext,M=g.PlayingContext,N=g.SeekableRangesContext,O=g.SeekingContext,P=g.SelectedVideoQualityContext,Q=g.StallingContext,R=g.StreamInterruptedContext,S=g.TargetAudioQualityContext,T=g.TargetVideoQualityContext,U=g.VideoOriginalDimensionsContext,V=g.VideoPlayerCaptionsReservationActionsContext,W=g.VideoPlayerCaptionsReservationsContext,aa=g.VideoPlayerMouseHoverContext,ba=g.VideoPlayerMouseIdleContext,ca=g.VideoStateDebugApiToolsContext,da=g.VolumeContext,X=b("VideoPlayerUtils").assertNotNull,ea=b("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext,fa=b("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext;function a(a){var c=j(a);b("useLayoutEffect_SAFE_FOR_SSR")(function(){c.current=a},[a]);return c}function Y(){return X(h(u),"Controller not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function c(){return X(h(D),"InstanceKey not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function d(){var a=$();return a===b("LiveProducerConstants").VideoBroadcastStatus.LIVE}function f(){return h(q)}function ga(){return h(y)}function ha(){return h(O)}function ia(){return h(z)}function ja(){return h(A)}function ka(){return h(M)}function la(){var a=k(0),b=a[0],c=a[1],d=Y();i(function(){var a=d.subscribe(function(){c(d.getPlayheadPosition())});c(d.getPlayheadPosition());return function(){return a.remove()}},[d]);return b}function ma(a){__p&&__p();var c=k(0),d=c[0],e=c[1],f=Y(),g=j(null),h=j(d);i(function(){var c=f.subscribe(function(){h.current=f.getPlayheadPosition();if(g.current!=null)return;g.current=b("setTimeout")(function(){e(h.current),g.current=null},a)});e(f.getPlayheadPosition());return c.remove},[f,a]);i(function(){return function(){g.current!==null&&b("clearTimeout")(g.current)}},[]);return d}function na(){__p&&__p();var a=Y(),c=j([]),d=j(a.isFrozen()),e=b("useStable")(function(){return{getCurrentState:function(){return a.isFrozen()},subscribeToChanges:function(a){var d=c.current;d.push(a);return{remove:function(){return b("removeFromArray")(d,a)}}}}});i(function(){__p&&__p();var b=a.subscribe(function(){var b=d.current,e=a.isFrozen();d.current=e;if(e!==b){b=c.current;b.forEach(function(a){return a(e)})}});return function(){b.remove()}},[a]);return e}function oa(){return h(K)}function pa(){return h(Q)}function qa(){return h(C)}function ra(){return h(G)}function sa(){return h(H)}function ta(){return h(I)}function ua(){return h(o)}function va(){return h(t)}function wa(){return h(l)}function xa(){return h(w)}function ya(){return h(P)}function za(){return h(J)}function Aa(){return h(da)}function Ba(){return h(ea)}function Ca(){return h(x)}function Da(){return h(U)}function Ea(){return h(L)}function Fa(){return X(h(ca),"Video State Debug Api Tools not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function Ga(){return h(s)}function Ha(){return h(E)}function Ia(){return h(T)}function Ja(){return h(S)}function Ka(){return h(aa)}function La(){return h(ba)}function Z(){return h(fa)}function Ma(){__p&&__p();var a=Z(),c=k({positionToViewport:null,visiblePercentage:0}),d=c[0],e=c[1],f=j(d);i(function(){f.current=d},[d]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(a){var c=a.subscribe(function(){var c=a.getCurrent(),d=c.positionToViewport;c=c.visiblePercentage;var g=f.current;(c!==g.visiblePercentage||!b("DOMRectIsEqual")(d,g.positionToViewport))&&e({positionToViewport:d,visiblePercentage:c})});return function(){return c.remove()}}},[e,a]);return d}function $(){return h(p)}function Na(){return h(r)}function Oa(){return h(n)}function Pa(){return h(m)}function Qa(){return h(v)}function Ra(){return h(B)}function Sa(){return h(W)}function Ta(){return h(V)}function Ua(){return h(R)}function Va(){return h(N)}function Wa(){return h(F)}e.exports={useActiveCaptions:wa,useAdClientToken:Pa,useAutoplayGatingResult:Oa,useAvailableVideoQualities:ua,useBroadcastStatus:$,useBufferEnd:f,useCanAutoplay:Na,useCaptionsLoaded:Ga,useCaptionsVisible:va,useController:Y,useCurrentLoop:Qa,useCurrentTime:la,useCurrentTimeThrottled:ma,useCurrentVideoQuality:xa,useDimensions:Ca,useDuration:ga,useEnded:ia,useError:ja,useInPlayStalling:qa,useInbandCaptionsAutogenerated:Ra,useInstanceKey:c,useIsAbrEnabled:Ha,useIsFrozenPassive:na,useIsFullscreen:Ba,useIsHovering:Ka,useIsLive:d,useIsLiveRewindActive:Wa,useIsMouseIdle:La,useLastMuteReason:ra,useLastPauseReason:sa,useLastPlayReason:ta,useLatestValueRef:a,useMuted:za,usePaused:oa,usePlayerImplementationName:Ea,usePlaying:ka,useSeekableRanges:Va,useSeeking:ha,useSelectedVideoQuality:ya,useStalling:pa,useStreamInterrupted:Ua,useTargetAudioQuality:Ja,useTargetVideoQuality:Ia,useVideoOriginalDimensions:Da,useVideoPlayerCaptionsReservationActions:Ta,useVideoPlayerCaptionsReservations:Sa,useVideoPlayerPassiveViewabilityInfo:Z,useVideoPlayerViewabilityInfo:Ma,useVideoStateDebugApiTools:Fa,useVolume:Aa}}),null);
__d("VideoPlayerCaptions.react",["React","VideoPlayerHooks","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React"),i=b("VideoPlayerHooks").useActiveCaptions,j=b("VideoPlayerHooks").useVideoPlayerCaptionsReservations,k={captionsCenterAlign:{justifyContent:"taijpn5t",textAlign:"oqcyycmt"},captionsContainer:{bottom:"lhzng9rx",display:"j83agx80",justifyContent:"taijpn5t",position:"pmk7jnqg",textAlign:"oqcyycmt",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",width:"k4urcfbm"},captionsDefault:{backgroundColor:"d6rk862h",color:"ljqsnud1",fontSize:"a5q79mjw",fontWeight:"ekzkrbhg",lineHeight:"j8p27hm0",marginTop:"kvgmc6g5",marginEnd:"nw5zvenu",marginBottom:"oygrvhab",marginStart:"pbhxczp3",paddingTop:"debrwdc1",paddingEnd:"m4n6deaq",paddingBottom:"pwvavz3a",paddingStart:"n1w2zk5c"},captionsLeftAlign:{justifyContent:"jifvfom9",textAlign:"hzawbc8m"},captionsRightAlign:{justifyContent:"bkfpd7mw",textAlign:"ftzlm3b6"}};function l(a){switch(a){case"center":return k.captionsCenterAlign;case"left":return k.captionsLeftAlign;case"right":return k.captionsRightAlign;default:b("recoverableViolation")("Unsupported captions text alignment: "+a,"comet_video_player")}}var m=h.memo(function(a){__p&&__p();var c=a.activeCaptions;a=a.bottomAdjustment;a=a===void 0?0:a;var d=c==null?void 0:c.rows;if(d!=null&&d.length>0){d=d.map(function(a){return a.trim()}).filter(function(a){return!!a});return d.length>0?h.jsx("div",{className:(g||(g=b("stylex")))(k.captionsContainer,l((c=c==null?void 0:(c=c.styles)==null?void 0:c.textAlignment)!=null?c:"center")),style:{transform:"translateY("+-a+"px)"},children:h.jsx("div",{className:(g||(g=b("stylex")))(k.captionsDefault),children:d.map(function(a,b){return h.jsxs("span",{children:[a,h.jsx("br",{})]},b)})})}):null}return null});function a(){var a=i(),b=j(),c=0;b.length>0&&(c=b.filter(function(a){return a.location==="bottom"}).reduce(function(a,b){return a+b.height},0));return h.jsx(m,{activeCaptions:a,bottomAdjustment:c})}e.exports=a}),null);
__d("VideoPlayerCaptionsArea.react",["React","VideoPlayerCaptions.react","VideoPlayerContexts","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");var h=c.useReducer,i=c.useState,j=b("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext,k=b("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext,l=b("VideoPlayerHooks").useCaptionsVisible;function m(a,b){switch(b.type){case"reserve":return a.concat(b.reservation);case"release":return a.filter(function(a){return a!==b.reservation});default:return a}}function a(a){a=a.children;var c=h(m,[]),d=c[0],e=c[1];c=i({release:function(a){e({reservation:a,type:"release"})},reserve:function(a){e({reservation:a,type:"reserve"});return a}});c=c[0];var f=l();return g.jsx(j.Provider,{value:c,children:g.jsxs(k.Provider,{value:d,children:[f?g.jsx(b("VideoPlayerCaptions.react"),{}):null,a]})})}e.exports=a}),null);
__d("VideoPlayerCaptionsAreaDeferred.react",["requireDeferredForDisplay","React","deferredLoadComponent"],(function(a,b,c,d,e,f){"use strict";b("React");a=b("deferredLoadComponent")(b("requireDeferredForDisplay")("VideoPlayerCaptionsArea.react"));e.exports=a}),null);
__d("SphericalMediaGyroOverlay.react",["cx","CSS","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React"),i=800,j=function(a,b,c){b===void 0&&(b=!0);c===void 0&&(c=!1);return{gyroRoot:"_1zvy"+(a?" _2dz7":"")+(b?" _4z8s":"")+(c?" _4z8p":""),gyroOuter:"_4z8q",gyroInner:"_4z8r",gyroMeridian:"_4z8t",gyroEquator:"_4z8u",gyroTextShell:"_4z8v",gyroText:"_4z8w"}};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.rootRef=h.createRef(),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a){var c=this;if(a.isActive&&!this.props.isActive)setTimeout(function(){var a=c.rootRef.current;a instanceof Element&&b("CSS").hide(a)},i);else if(!this.props.isActive){a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.componentDidMount=function(){if(!this.props.isActive){var a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.render=function(){var a=this.props,c=a.className,d=a.isActive,e=a.isInfinite;a=a.isPaused;d=j(d,e,a);return h.jsx("div",{className:b("joinClasses")(c,d.gyroRoot),ref:this.rootRef,children:h.jsxs("div",{className:d.gyroOuter,children:[h.jsxs("div",{className:d.gyroInner,children:[h.jsx("div",{className:d.gyroMeridian}),h.jsx("div",{className:d.gyroEquator})]}),h.jsx("div",{className:d.gyroTextShell,children:h.jsx("span",{className:d.gyroText,children:"360"})})]})})};return c}(h.PureComponent);e.exports=a}),null);
__d("VideoPlayerSphericalFallbackCover.react",["fbt","React","SphericalMediaGyroOverlay.react","TetraText.react","stylex","unrecoverableViolation","useCometRouterDispatcher","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React");c=b("React");var i=c.useState;function a(a){__p&&__p();var c=a.videoTahoeUrl,d=b("useCometRouterDispatcher")();a=i(!1);var e=a[0],f=a[1];if(d==null)throw b("unrecoverableViolation")("Missing CometRouterDispatcher","comet_video_player");a=b("useFeedClickEventHandler")(function(){d.go(c,{})});return h.jsxs("div",{className:"bkfpd7mw cbu4d94t j83agx80 nhd2j8a9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",onClick:a,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},role:"link",tabIndex:0,children:[h.jsx(b("SphericalMediaGyroOverlay.react"),{isActive:!0}),h.jsx("div",{className:"l9j0dhe7 i7orit0i",children:e?h.jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:g._("Click to expand")}):null})]})}e.exports=a}),null);
__d("VideoPlayerSpinner.react",["CometLoadingAnimation.react","React","VideoPlayerHooks","stylex","useDebouncedValue"],(function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i=b("VideoPlayerHooks").useStalling,j=36;function a(){var a=i();a=a;var c=b("useDebouncedValue")(a,a?200:500);return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe({"height-1":"tv7at329","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"kfkz5moi","top-1":"rk01pc8j","transform-0.1":"py2didcb","transition-delay-1":"chkx7lpg","transition-duration-1":"kmdw4o4n","transition-property-1":"art1omkt","transition-timing-function-1":"e4zzj2sf","width-1":"thwo4zme"},a?null:{"opacity-1":"b5wmifdl","transition-delay-1":"hwaazqwg","transition-duration-1":"kmdw4o4n","transition-property-1":"l23jz15m","transition-timing-function-1":"e4zzj2sf","visibility-1":"kr9hpln1"}),children:h.jsx(b("CometLoadingAnimation.react"),{animationPaused:!c,size:j})})}e.exports=a}),null);
__d("usePlayerOriginRouteTracePolicy",["CometIsInNotificationsContext","React","useCometRouteTracePolicy"],(function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){var a=g(b("CometIsInNotificationsContext")),c=b("useCometRouteTracePolicy")();return c==="comet.videos.tahoe"&&a?"comet.notifications":c}e.exports=a}),null);
__d("XLiveScheduleSubscriptionController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/live_video_schedule/subscription/",{video_broadcast_schedule_id:{type:"FBID"},video_id:{type:"FBID"},subscribe:{type:"Bool",defaultValue:!1},origin:{type:"String"},suborigin:{type:"String"}})}),null);