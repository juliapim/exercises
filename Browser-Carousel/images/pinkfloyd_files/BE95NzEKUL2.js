if (self.CavalryLogger) { CavalryLogger.start_js(["P1Lsw"]); }

__d("XCometHomeControllerRouteBuilder",["cometRouteBuilder"],(function(a,b,c,d,e,f){a=b("cometRouteBuilder")("/",Object.freeze({}),void 0);e.exports=a}),null);
__d("CometFeedUFI_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedUFI_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor",type:"Boolean"}],selections:[{kind:"LinkedField",alias:null,name:"viewer_actor",storageKey:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]},{kind:"FragmentSpread",name:"CometFeedUFIRenderer_feedback",args:null}]};e.exports=a}),null);
__d("CometFeedUFI_shareable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedUFI_shareable",type:"Entity",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"CometFeedUFIRenderer_shareable",args:null}]};e.exports=a}),null);
__d("CometUFICommentListRenderer_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometUFICommentListRenderer_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"canShowSeenState",type:"Boolean!",defaultValue:!0}],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"subscription_target_id",args:null,storageKey:null},{kind:"FragmentSpread",name:"CometUFICommentList_feedback",args:null},{kind:"FragmentSpread",name:"CometUFITopLevelCommentListRenderer_feedback",args:null}]};e.exports=a}),null);
__d("CometUFISummaryAndActions_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometUFISummaryAndActions_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"canShowSeenState",type:"Boolean!",defaultValue:!0},{kind:"LocalArgument",name:"focusCommentID",type:"ID",defaultValue:null}],selections:[{kind:"LinkedField",alias:null,name:"comet_ufi_summary_and_actions_renderer",storageKey:'comet_ufi_summary_and_actions_renderer(supported:["DefaultCometUFISummaryAndActionsRenderer","UnauthenticatedUCometUFISummaryAndActionsRenderer"])',args:[{kind:"Literal",name:"supported",value:["DefaultCometUFISummaryAndActionsRenderer","UnauthenticatedUCometUFISummaryAndActionsRenderer"]}],concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"DefaultCometUFISummaryAndActionsRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFISummaryAndActions_feedback",fragmentName:"CometUFIDefaultSummaryAndActionsRenderer_feedback",fragmentPropName:"feedback"}]},{kind:"InlineFragment",type:"UnauthenticatedUCometUFISummaryAndActionsRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFISummaryAndActions_feedback",fragmentName:"CometUnauthenticatedUFISummaryAndActionsRenderer_feedback",fragmentPropName:"feedback"}]}]}]};e.exports=a}),null);
__d("CometUFISummaryAndActions_shareable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometUFISummaryAndActions_shareable",type:"Entity",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"CometUFIDefaultSummaryAndActionsRenderer_shareable",args:null}]};e.exports=a}),null);
__d("CometUFITopLevelCommentListRenderer_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometUFITopLevelCommentListRenderer_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"feedbackSource",type:"Int"}],selections:[{kind:"LinkedField",alias:null,name:"top_level_comment_list_renderer",storageKey:null,args:[{kind:"Variable",name:"feedback_source",variableName:"feedbackSource"}],concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"MediaViewerTopLevelCommentListRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFITopLevelCommentListRenderer_feedback",fragmentName:"CometMediaViewerUFITopLevelCommentList_renderer",fragmentPropName:"renderer"}]},{kind:"InlineFragment",type:"FeedTopLevelCommentListRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFITopLevelCommentListRenderer_feedback",fragmentName:"CometFeedUFITopLevelCommentList_renderer",fragmentPropName:"renderer"}]},{kind:"InlineFragment",type:"WatchTopLevelCommentListRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFITopLevelCommentListRenderer_feedback",fragmentName:"CometWatchUFITopLevelCommentList_renderer",fragmentPropName:"renderer"}]},{kind:"InlineFragment",type:"LiveProducerTopLevelCommentListRenderer",selections:[{kind:"ModuleImport",documentName:"CometUFITopLevelCommentListRenderer_feedback",fragmentName:"LiveProducerTopLevelCommentList_renderer",fragmentPropName:"renderer"}]}]}]};e.exports=a}),null);
__d("CometFeedUFIRenderer_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedUFIRenderer_feedback",type:"Feedback",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"canShowSeenState",type:"Boolean!",defaultValue:!0},{kind:"RootArgument",name:"feedbackSource",type:"Int"}],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_eligible_for_real_time_updates",args:[{kind:"Variable",name:"feedback_source_integer",variableName:"feedbackSource"}],storageKey:null},{kind:"FragmentSpread",name:"CometUFICommentListRenderer_feedback",args:null},{kind:"FragmentSpread",name:"CometUFISummaryAndActions_feedback",args:null}]};e.exports=a}),null);
__d("CometFeedUFIRenderer_shareable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometFeedUFIRenderer_shareable",type:"Entity",metadata:null,argumentDefinitions:[],selections:[{kind:"FragmentSpread",name:"CometUFISummaryAndActions_shareable",args:null}]};e.exports=a}),null);
__d("CometContentArea.react",["CometSection.react","React","stylex"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){var c=a.children;a=a.verticalAlign;a=a===void 0?"top":a;return g.jsx("div",{className:"dp1hu0rb d2edcug0 taijpn5t j83agx80 gs1a9yip",children:g.jsx(b("CometSection.react"),{className:"k4urcfbm dp1hu0rb d2edcug0 cbu4d94t j83agx80 bp9cbjyn"+(a==="middle"?" taijpn5t":""),role:"main",children:c})})}e.exports=a}),null);
__d("NullState404FailedLoading",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/404/404_failed_loading_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/404/404_failed_loading_gray_wash.svg",112)};e.exports=a}),null);
__d("NullStatePermissions",["IconSource"],(function(a,b,c,d,e,f){"use strict";a={dark:new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg",112),"default":new(b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg",112)};e.exports=a}),null);
__d("CometErrorRoot.react",["fbt","CometContentArea.react","CometInteractionTracingMetrics","CometLink.react","NullState404FailedLoading","NullStateGeneral","NullStatePermissions","React","TetraButton.react","TetraNullState.react","TetraText.react","URI","XCometHomeControllerRouteBuilder","clearTimeout","setTimeout","stylex","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React");c=b("React");var j=c.useCallback,k=c.useEffect,l=c.useState,m=8460,n=6e3;function o(){var a=0,b=0;while(a===0)a=Math.random();while(b===0)b=Math.random();return Math.sqrt(-2*Math.log(a))*Math.cos(2*Math.PI*b)}function a(a){__p&&__p();var c,d,e=b("NullStateGeneral");(a==null?void 0:(c=a.routeProps)==null?void 0:c.privacy)&&(e=b("NullStatePermissions"));(a==null?void 0:(c=a.routeProps)==null?void 0:c.fourZerofour)&&(e=b("NullState404FailedLoading"));c=b("XCometHomeControllerRouteBuilder").buildURL({});var f=b("useCometRouterDispatcher")(),p=j(function(){f&&f.goBack&&f.goBack()},[f]);b("CometInteractionTracingMetrics").currentInteractionLogger().addMetadata("isError",1);var q=i.jsx(b("TetraButton.react"),{label:g._("Reload Page"),onPress:function(){return window.location.reload(!0)},padding:"wide",size:"large"}),r;((a==null?void 0:(d=a.routeProps)==null?void 0:d.fourZerofour)||(a==null?void 0:(d=a.routeProps)==null?void 0:d.privacy))&&(q=i.jsx(b("TetraButton.react"),{label:g._("Go to News Feed"),linkProps:{url:c},padding:"wide",size:"large"}),r=i.jsxs("div",{className:"sv5sfqaa cbu4d94t j83agx80 bp9cbjyn",children:[i.jsx(b("CometLink.react"),{onClick:p,target:"_blank",children:i.jsx(b("TetraText.react"),{color:"blueLink",type:"bodyLink2",children:g._("Go Back")})}),i.jsx("div",{className:"tr9rh885",children:i.jsx(b("CometLink.react"),{href:new(h||(h=b("URI")))("/help").getQualifiedURI().toString(),target:"_blank",children:i.jsx(b("TetraText.react"),{color:"blueLink",type:"bodyLink2",children:g._("Visit Help Center")})})})]}));d=l(null);c=d[0];var s=d[1],t=a==null?void 0:(p=a.routeProps)==null?void 0:p.isBOC;k(function(){if(t===!0){var a=Math.abs(m+o()*n),c=b("setTimeout")(function(){s(i.jsx("iframe",{className:"ttbfdpzt do00u71z sk4xxmp2 agehan2d n8ej3o3l rt8b4zig"}))},a);return function(){return b("clearTimeout")(c)}}},[t]);return i.jsx(b("CometContentArea.react"),{verticalAlign:"middle",children:i.jsxs("div",{className:"oh7imozk cbu4d94t j83agx80 bp9cbjyn","data-testid":void 0,children:[i.jsx(b("TetraNullState.react"),{action:q,body:((d=a.routeProps)==null?void 0:d.body)||g._("This may be because of a technical error that we're working to get fixed. Try reloading this page."),headline:((p=a.routeProps)==null?void 0:p.title)||g._("This Page Isn't Available Right Now"),icon:e}),r,c]})})}e.exports=a}),null);
__d("CometRouteURL",["ConstUriUtils","React","useCurrentRoute"],(function(a,b,c,d,e,f){"use strict";__p&&__p();f=b("React");var g=f.useMemo;function h(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?a.getPath():""}return""}function i(a){if(a!=null){a=b("ConstUriUtils").getUri(a);return a!=null?Object.fromEntries(a.getQueryParams()):{}}return{}}function a(){var a,c=b("useCurrentRoute")();a=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return a||""}function c(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return h(d)},[d])}function d(){var a,c=b("useCurrentRoute")(),d=(a=c==null?void 0:c.canonicalUrl)!=null?a:c==null?void 0:c.url;return g(function(){return i(d)},[d])}e.exports={useRouteURL:a,useRouteURLParams:d,useRouteURLPath:c}}),null);
__d("CometRefineRef",[],(function(a,b,c,d,e,f){"use strict";function a(a){return function(b){if(a==null)return;typeof a==="function"?a(b):typeof a==="object"&&(a.current=b)}}e.exports=a}),null);
__d("useCometTrackingCodeForMutationProperties",["CometRouteURL","CometTrackingCodeContext","React","getReferrerURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRouteURL").useRouteURLParams;c=b("React");var h=c.useContext,i=c.useMemo;function a(){var a=g(),c=b("getReferrerURI")(),d=c?c.getPath():void 0,e=h(b("CometTrackingCodeContext")),f=a.notif_id,j=a.notif_t;c=i(function(){var a=null;f!=null&&(a=JSON.stringify({alert_id:f,notif_source:"notif_tab",notif_type:j}));a=a!=null?[a].concat(e.encrypted_tracking):e.encrypted_tracking;return{feedback_referrer:d,is_tracking_encrypted:!0,tracking:a}},[d,f,j,e]);return c}e.exports=a}),null);
__d("CometUFITopLevelCommentListRenderer.react",["CometPlaceholder.react","CometRelay","React","CometUFITopLevelCommentListRenderer_feedback.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("CometRelay").useFragment,i=b("CometRelay").MatchContainer;b("CometRelay").graphql;var j=b("React");function a(a){var c=a.feedback;a=babelHelpers.objectWithoutPropertiesLoose(a,["feedback"]);c=h(g!==void 0?g:g=b("CometUFITopLevelCommentListRenderer_feedback.graphql"),c);c=c==null?void 0:c.top_level_comment_list_renderer;if(c==null)return null;var d=a.commentsListRenderProps,e=d.Selectors,f=d.depth;d=d.listState;return!e.isListExpanded({depth:f,state:d})?null:j.jsx(b("CometPlaceholder.react"),{"data-testid":void 0,fallback:null,children:j.jsx(i,{match:c,props:a})})}e.exports=a}),null);
__d("useTrackingCodeFnForComet",["React","useCometTrackingCodeForMutationProperties"],(function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useCallback;c=function(){var a=b("useCometTrackingCodeForMutationProperties")(),c=g(function(){return a},[a]);return c};e.exports=c}),null);
__d("CometUFICommentListRenderer.react",["requireDeferred","CometRelay","CometUFICommentList.react","CometUFITopLevelCommentListRenderer.react","React","RelayUFI2CommentsKeyContext","UFI2RealtimeContainer.react","mergeRefs","recoverableViolation","useCometUFICodedErrorDialog","useTrackingCodeFnForComet","CometUFICommentListRenderer_feedback.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("CometRelay").useRelayEnvironment,j=b("React");c=b("React");var k=c.useCallback,l=c.useContext,m=c.useMemo,n=c.useRef,o=c.useState,p=b("requireDeferred")("UFI2CreateCommentMutation"),q=b("requireDeferred")("UFI2FeedbackCommentReactSubscription"),r=b("requireDeferred")("UFI2ToggleCommentPermissionSubscription");function a(a){__p&&__p();var c=a.displayCommentsContext,d=a.fallback,e=a.feedback,f=a.feedbackSource,s=a.feedLocation,t=a.focusCommentID,u=a.listRef,v=a.storyRenderLocation,w=h(g!==void 0?g:g=b("CometUFICommentListRenderer_feedback.graphql"),e),x=n(null),y=i();a=o(null);var z=a[0],A=a[1];e=o(null);var B=e[0],C=e[1];a=o(!1);var D=a[0],E=a[1];e=b("useCometUFICodedErrorDialog")();a=e.errorDialog;var F=e.setError,G=w==null?void 0:w.id,H=w==null?void 0:w.subscription_target_id;e=k(function(){__p&&__p();if(G==null||H==null)return null;var a=!1,b=function(){},c={dispose:function(){a=!0,b()}};q.onReady(function(c){if(!a){c=c.subscribe(y,{top_level_feedback_id:G},!1,H,!0);b=c.dispose}});return c},[y,G,H]);var I=k(function(){return E(!0)},[]),J=k(function(){var a=x.current;if(a==null)return;a.Actions.expandList({focusComposer:!0,scrollToComposer:!0})},[]),K=k(function(){__p&&__p();if(G==null||H==null)return;var a=!1,b=function(){},c={dispose:function(){a=!0,b()}};r.onReady(function(c){if(!a){c=c.subscribe(y,{feedback_id:G},!1,H);b=c.dispose}});return c},[y,G,H]),L=b("useTrackingCodeFnForComet")(),M=l(b("RelayUFI2CommentsKeyContext")),N=k(function(c){var d=c.actorID,e=c.clientID,f=c.commentData,g=c.entitiesByID,b=c.environment,a=c.feedbackSource,h=c.getTrackingDataFn,i=c.topLevelFeedbackID,j=c.updater;if(!f)return;p.onReadyImmediately(function(c){c.commit({UFI2CommentsProvider_commentsKey:M,actorID:d,clientID:e,containerMapping:{containerIsFeedStory:!0,containerIsLiveStory:!1,containerIsTahoe:!1,containerIsWorkplace:!1},entitiesByID:g,environment:b,feedLocation:s,feedbackSource:a,focusCommentID:t,input:babelHelpers["extends"]({},f,L(h)),isComet:!0,onError:F,topLevelFeedbackId:i,updater:j,useDefaultActor:!1})})},[s,t,M,F,L]),O=m(function(){return b("mergeRefs")(u,x)},[u,x]);if(G==null){b("recoverableViolation")("No id on feedback when fetching from relay story in CometUFICommentListRenderer, this indicates relays store/environment has been bonkered some how","ufi2");return null}return j.jsxs(b("UFI2RealtimeContainer.react"),{subscribe:e,children:[j.jsx(b("CometUFICommentList.react"),{depth:0,displayCommentsContext:c,fallback:d,feedLocation:s,feedback:w,feedbackSource:f,focusCommentID:t,listRef:O,useDefaultActor:!1,children:function(a){return j.jsx(b("UFI2RealtimeContainer.react"),{subscribe:K,children:j.jsx(b("CometUFITopLevelCommentListRenderer.react"),{commentsListRenderProps:a,displayCommentsContext:c,editingCommentID:z,feedLocation:s,feedback:w,feedbackSource:f,feedbackTargetID:G,focusCommentID:t,listRef:O,onAddCommentClick:J,onCommitCommentCreate:N,onEditCommentError:F,onTranslateAllClick:I,renderedTranslationCommentID:B,setEditingCommentID:A,setRenderedTranslationCommentID:C,shouldRequestTranslationForAllComments:D,storyRenderLocation:v})})}}),a]})}e.exports=j.memo(a)}),null);
__d("useCometUFISubscriptionManager",["JSScheduler","React","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React");var g=c.useCallback,h=c.useRef;function a(){__p&&__p();var a=h(new Set()),c=h(new Set()),d=h(!1),e=g(function(b){a.current.add(b);d.current&&b.subscribe();return{dispose:function(){b.unsubscribe(),a.current["delete"](b)}}},[]),f=g(function(){d.current||(d.current=!0,a.current.forEach(function(a){var e=b("JSScheduler").scheduleSpeculativeCallback(function(){!d.current?b("recoverableViolation")("Scheduled callback to activate subscription was not canceled","ufi2"):(c.current["delete"](e),a.subscribe())});c.current.add(e)}))},[]),i=g(function(){d.current&&(d.current=!1,a.current.forEach(function(a){return a.unsubscribe()}),c.current.forEach(function(a){return b("JSScheduler").cancelCallback(a)}),c.current.clear())},[]);return[e,f,i]}e.exports=a}),null);
__d("CometUFIRealtimeRoot.react",["React","UFI2RealtimeContext","useCometUFISubscriptionManager"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");var h=c.useEffect;function a(a){__p&&__p();var c=a.children;a=a.enabled;var d=a===void 0?!0:a;a=b("useCometUFISubscriptionManager")();var e=a[0],f=a[1],i=a[2];h(function(){if(d){f();return function(){i()}}},[d,f,i]);return g.jsx(b("UFI2RealtimeContext").Provider,{value:e,children:c})}e.exports=a}),null);
__d("CometUFISummaryAndActions.react",["CometRelay","React","CometUFISummaryAndActions_feedback.graphql","CometUFISummaryAndActions_shareable.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("CometRelay").MatchContainer;b("CometRelay").graphql;var j=b("CometRelay").useFragment,k=b("React");function a(a,c){var d=a.feedback,e=a.shareable;d=j(g!==void 0?g:g=b("CometUFISummaryAndActions_feedback.graphql"),d);e=j(h!==void 0?h:h=b("CometUFISummaryAndActions_shareable.graphql"),e);a=babelHelpers["extends"]({},a,{feedback:d,ref:c,shareable:e});return k.jsx(i,{match:d.comet_ufi_summary_and_actions_renderer,props:a})}e.exports=k.forwardRef(a)}),null);
__d("CometFeedUFIRenderer.react",["CometListItemGlimmer.react","CometRefineRef","CometRelay","CometUFICommentListRenderer.react","CometUFIRealtimeRoot.react","CometUFISummaryAndActions.react","FBLogger","React","stylex","CometFeedUFIRenderer_feedback.graphql","CometFeedUFIRenderer_shareable.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");c=b("React");var k=c.useCallback,l=c.useRef;function a(a,c){__p&&__p();var d=a.displayCommentsContext,e=a.feedLocation,f=a.feedback,m=a.feedbackSource,n=a.focusCommentID,o=a.isTextOnlyStory,p=a.onActorSelected,q=a.shareable;a=a.storyRenderLocation;var r=i(g!==void 0?g:g=b("CometFeedUFIRenderer_feedback.graphql"),f);f=i(h!==void 0?h:h=b("CometFeedUFIRenderer_shareable.graphql"),q);var s=l();q=k(function(){var a=s.current;a!=null&&a.Actions.toggleList({focusComposer:!1})},[]);var t=k(function(){var a=s.current;a!=null?a.Actions.expandList({focusComposer:!0,scrollToComposer:!0}):b("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",(r==null?void 0:r.id)||"UNKNOWN").mustfix("The 'comment' button was clicked but no comments list ref could be found. That ref is needed to make sure the comments list is open.")},[r]);return j.jsxs(b("CometUFIRealtimeRoot.react"),{enabled:r.is_eligible_for_real_time_updates===!0,children:[j.jsx(b("CometUFISummaryAndActions.react"),{feedLocation:e,feedback:r,feedbackSource:m,isTextOnlyStory:o,onActorSelected:p,onClickCommentsCount:q,onCommentClick:t,ref:c,shareable:(o=f)!=null?o:null}),j.jsx(b("CometUFICommentListRenderer.react"),{displayCommentsContext:d,fallback:j.jsx("div",{className:"hbnzryc0","data-testid":void 0,children:j.jsx(b("CometListItemGlimmer.react"),{imageSize:36,imageStyle:"circle",numberOfItems:4})}),feedLocation:e,feedback:r,feedbackSource:m,focusCommentID:n,listRef:b("CometRefineRef")(s),storyRenderLocation:a})]})}e.exports=j.forwardRef(a)}),null);
__d("CometFeedUFI.react",["requireDeferred","CometFeedUFIRenderer.react","CometRelay","React","CometFeedUFI_feedback.graphql","CometFeedUFI_shareable.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");c=b("requireDeferred")("UFIReactionsAnimationPreloader");c.onReady(function(a){return new a().preloadAll()});function a(a,c){var d=a.displayCommentsContext,e=a.feedback,f=a.feedbackSource,k=a.feedLocation,l=a.focusCommentID,m=a.isTextOnlyStory,n=a.onActorSelected;a=a.shareable;e=i(g!==void 0?g:g=b("CometFeedUFI_feedback.graphql"),e);a=i(h!==void 0?h:h=b("CometFeedUFI_shareable.graphql"),a);return j.jsx(b("CometFeedUFIRenderer.react"),{displayCommentsContext:(d=d)!=null?d:{},feedLocation:k,feedback:e,feedbackSource:f,focusCommentID:l,isTextOnlyStory:m,onActorSelected:n,ref:c,shareable:(d=a)!=null?d:null,storyRenderLocation:"newsstand"},(f=e==null?void 0:(k=e.viewer_actor)==null?void 0:k.id)!=null?f:"UNKNOWN")}e.exports=j.memo(j.forwardRef(a))}),null);