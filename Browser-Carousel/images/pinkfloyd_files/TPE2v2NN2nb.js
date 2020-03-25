if (self.CavalryLogger) { CavalryLogger.start_js(["np5Vl"]); }

__d("ScriptPathState",["Arbiter"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j,k=100,l={setIsUIPageletRequest:function(a){i=a},setUserURISampleRate:function(a){j=a},reset:function(){g=null,h=!1,i=!1},_shouldUpdateScriptPath:function(){return h&&!i},_shouldSendURI:function(){return Math.random()<j},getParams:function(){var a={};l._shouldUpdateScriptPath()?l._shouldSendURI()&&g!==null&&(a.user_uri=g.substring(0,k)):a.no_script_path=1;return a}};b("Arbiter").subscribe("pre_page_transition",function(a,b){h=!0,g=b.to.getUnqualifiedURI().toString()});e.exports=a.ScriptPathState=l}),null);
__d("goOrReplace",["Env","URI","isFacebookURI"],(function(a,b,c,d,e,f){var g,h;function a(a,c,d){c=new(g||(g=b("URI")))(c);(h||(h=b("Env"))).isCQuick&&b("isFacebookURI")(c)&&c.addQueryData({cquick:(h||(h=b("Env"))).iframeKey,cquick_token:h.iframeToken,ctarget:h.iframeTarget});c=c.toString();d?a.replace(c):a.href==c?a.reload():a.href=c}e.exports=a}),null);
__d("AjaxPipeRequest",["invariant","Arbiter","AsyncRequest","AsyncRequestConfig","BigPipe","ContextualComponent","CSS","DOM","Env","PageEvents","PageletGK","PageletSet","ScriptPathState","URI","containsNode","ge","goOrReplace","performance","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i,j,k,l=b("PageletGK").destroyDomAfterEventHandler,m,n=0;function o(a,c){__p&&__p();var d=b("ge")(a);if(!d)return;c||(d.style.minHeight="100px");c=b("PageletSet").getPageletIDs();for(var e=0;e<c.length;e++){var f=c[e];if(b("PageletSet").hasPagelet(f)){var g=b("PageletSet").getPagelet(f);b("containsNode")(d,g.getRoot())&&b("PageletSet").removePagelet(f)}}b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:a});function h(a){var c=b("ContextualComponent").forNode(a);c&&c.unmount();b("DOM").empty(a)}l?(b("Arbiter").inform("pagelet/destroy",{id:null,root:d}),h(d)):(h(d),b("Arbiter").inform("pagelet/destroy",{id:null,root:d}))}function p(a,c){a=b("ge")(a);a&&!c&&(a.style.minHeight="100px")}c=function(){"use strict";__p&&__p();function c(a,c,d){__p&&__p();this._allowIrrelevantRequests=!1;this._canvas_id=a;this._uri=c;this._query_data=d;a=new(b("AsyncRequest"))();a.disableInteractionServerTracing();a.setReplaceTransportMarkers(!1);this._request=a;this._allow_cross_page_transition=!0;this._arbiter=new(b("Arbiter"))();this._requestID=n++}var d=c.prototype;d.getArbiter=function(){return this._arbiter};d.setData=function(a){this._query_data=a;return this};d.getData=function(){return this._query_data};d.setAllowCrossPageTransition=function(a){this._allow_cross_page_transition=a;return this};d.setAppend=function(a){this._append=a;return this};d._getAsyncRequestType=function(){return b("AsyncRequestConfig").useFetchStreamAjaxPipeTransport?"useFetchWithIframeFallback":"useIframeTransport"};d.send=function(){__p&&__p();this._arbiter.inform(b("PageEvents").AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:(h||(h=b("performanceAbsoluteNow")))()},"persistent");var a={ajaxpipe:1,ajaxpipe_token:(i||(i=b("Env"))).ajaxpipe_token};Object.assign(a,b("ScriptPathState").getParams());b("ScriptPathState").reset();var c=this._request;if(c==null)return this;c.setOption(this._getAsyncRequestType(),!0).delayPreDisplayJS().setURI(this._uri).setData(Object.assign(a,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);this._automatic?this._relevantRequest=m:m=this._request;if(this._isQuickling){a=(j||(j=b("performance"))).clearResourceTimings||(j||(j=b("performance"))).webkitClearResourceTimings;a&&a.call(j||(j=b("performance")))}c.send();return this};d._preBootloadFirstResponse=function(a){return!1};d._fireDomContentCallback=function(){var a=this._request;a&&a.cavalry&&a.cavalry.setTimeStamp("t_domcontent");this._arbiter.inform(b("PageEvents").AJAXPIPE_DOMREADY,!0,"state")};d._fireOnloadCallback=function(){window.console&&console.timeStamp&&console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.AJAXPIPE_ONLOAD"}');var a=this._request;a!=null&&a.cavalry&&(a.cavalry.setTimeStamp("t_hooks"),a.cavalry.setTimeStamp("t_layout"),a.cavalry.setTimeStamp("t_onload"));this._arbiter.inform(b("PageEvents").AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:(h||(h=b("performanceAbsoluteNow")))()},"state")};d._isRelevant=function(a){return this._request===m||this._automatic&&this._relevantRequest===m||this._jsNonBlock||m!=null&&m.getAllowIrrelevantRequests()};d._preBootloadHandler=function(a){var c=this._request,d=a.getPayload();if(!d||d.redirect||!this._isRelevant(a))return!1;var e=!1;a.is_first&&(!this._append&&!this._displayCallback&&!d.isCometResponse&&o(this._canvas_id,this._constHeight),e=this._preBootloadFirstResponse(a),c!=null||g(0,36),this.pipe=new(b("BigPipe"))({config:d.bigPipeConfig,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:c.lid,rid:this._requestID,isAjax:!0,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:b("PageEvents").AJAXPIPE_DOMREADY,onloadEvt:b("PageEvents").AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests}),this.pipe.setPageID(c.lid));return e};d._redirect=function(c){__p&&__p();if(c.redirect){if(c.force||!this.isPageActive(c.redirect)){var d=["ajaxpipe","ajaxpipe_token"].concat(this.getSanitizedParameters());b("goOrReplace")(window.location,new(k||(k=b("URI")))(c.redirect).removeQueryData(d),!0)}else{d=a.PageTransitions;d.go(c.redirect,!0)}return!0}else return!1};d.isPageActive=function(a){return!0};d.getSanitizedParameters=function(){return[]};d._versionCheck=function(a){return!0};d._onInitialResponse=function(a){var b=a.getPayload();if(!this._isRelevant(a))return!1;if(!b)return!0;return this._redirect(b)||!this._versionCheck(b)?!1:!0};d._processFirstResponse=function(a){this._arbiter.inform(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,{lid:this.pipe.lid,quickling:!!this._isQuickling});a=a.getPayload();var c=b("ge")(this._canvas_id);a=a.canvas_class;c!=null&&a!=null&&b("CSS").setClass(c,a)};d.setFirstResponseCallback=function(a){this._firstResponseCallback=a;return this};d.setFirstResponseHandler=function(a){this._processFirstResponse=a;return this};d._onResponse=function(a){__p&&__p();var c=a.payload;if(!this._isRelevant(a))return b("AsyncRequest").suppressOnloadToken;a.is_first&&(this._processFirstResponse(a),this._firstResponseCallback&&this._firstResponseCallback(),c.provides=c.provides||[],c.provides.push("uipage_onload"));if(c){if("content"in c.content){this._append&&(c.append=this._canvas_id);var d=c.content.content;delete c.content.content;c.content[this._canvas_id]=d}this.pipe.onPageletArrive(c)}a.is_last&&p(this._canvas_id,this._constHeight);return b("AsyncRequest").suppressOnloadToken};d.setNectarModuleDataSafe=function(a){this._request!=null&&this._request.setNectarModuleDataSafe(a);return this};d.setFinallyHandler=function(a){this._request!=null&&this._request.setFinallyHandler(a);return this};d.setErrorHandler=function(a){this._request!=null&&this._request.setErrorHandler(a);return this};d.setTransportErrorHandler=function(a){this._request!=null&&this._request.setTransportErrorHandler(a);return this};d.setResetHandler=function(a){this._resetHandler=a;return this};d.abort=function(){this._request!=null&&this._request.abort();this._reset();return this};d.abandon=function(){this._request!=null&&this._request.abandon();this._reset();return this};d._reset=function(){m==this._request&&(m=null),this._request=null,this._resetHandler&&this._resetHandler()};d.setJSNonBlock=function(a){this._jsNonBlock=a;return this};d.setAutomatic=function(a){this._automatic=a;return this};d.setDisplayCallback=function(a){this._displayCallback=a;return this};d.setConstHeight=function(a){this._constHeight=a;return this};d.setAllowIrrelevantRequests=function(a){this._allowIrrelevantRequests=a;return this};d.getAsyncRequest=function(){return this._request};c.getCurrentRequest=function(){return m};c.setCurrentRequest=function(a){m=a};return c}();c.clearCanvas=o;e.exports=c}),null);
__d("UIPageletContentCache",[],(function(a,b,c,d,e,f){a={cache:{},getContent:function(a){return a in this.cache?this.cache[a]:null},setContent:function(a,b){this.cache[a]=b}};e.exports=a}),null);
__d("UIPagelet",["ActorURI","AjaxPipeRequest","AsyncRequest","DOM","HTML","ScriptPathState","UIPageletContentCache","URI","emptyFunction","ge","isElementNode"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();var e=a&&b("isElementNode")(a)?a.id:a;this._id=e||null;this._element=b("ge")(a||b("DOM").create("div"));this._src=c||null;this._context_data=d||{};this._data={};this._handler=b("emptyFunction");this._request=null;this._use_ajaxpipe=!1;this._use_post_request=!1;this._is_bundle=!0;this._allow_cross_page_transition=!1;this._append=!1;this._cache_content=!1;this._content_cache_key="";this._is_content_cached=null;this._constHeight=!1}var c=a.prototype;c.getElement=function(){return this._element};c.setHandler=function(a){this._handler=a;return this};c.go=function(a,b){arguments.length>=2||typeof a==="string"?(this._src=a,this._data=b||{}):arguments.length==1&&(this._data=a);this.refresh();return this};c.setAllowCrossPageTransition=function(a){this._allow_cross_page_transition=a;return this};c.setBundleOption=function(a){this._is_bundle=a;return this};c.setErrorHandler=function(a){this._errorHandler=a;return this};c.setTransportErrorHandler=function(a){this.transportErrorHandler=a;return this};c.refresh=function(){__p&&__p();if(this._use_ajaxpipe)b("ScriptPathState").setIsUIPageletRequest(!0),this._request=new(b("AjaxPipeRequest"))(this._id,this._src),this._request.setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler),this._errorHandler&&this._request.setErrorHandler(this._errorHandler),this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler),this._allowIrrelevantRequests!=null&&this._request.setAllowIrrelevantRequests(this._allowIrrelevantRequests);else{if(this._cache_content){var a=b("UIPageletContentCache").getContent(this._content_cache_key);if(a!==null){this.handleContent(a,!0);return this}}var c=function(a){this._request=null;a=b("HTML")(a.getPayload());this.handleContent(a);var c=a.getContent().contains("<iframe");!c&&this._cache_content&&b("UIPageletContentCache").setContent(this._content_cache_key,a)}.bind(this),d=this._displayCallback,e=this._finallyHandler;this._request=new(b("AsyncRequest"))(this._src).setMethod("GET").setReadOnly(!0).setOption("bundle",this._is_bundle).setHandler(function(a){d?d(c.bind(null,a),a):c(a),e&&e(a)});this._errorHandler&&this._request.setErrorHandler(this._errorHandler);this.transportErrorHandler&&this._request.setTransportErrorHandler(this.transportErrorHandler);this._use_post_request&&this._request.setMethod("POST")}a=babelHelpers["extends"]({},this._context_data,this._data);this._actorID&&(a[b("ActorURI").PARAMETER_ACTOR]=this._actorID);this._request.setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(a)}).send();return this};c.handleContent=function(a,c){this._append?b("DOM").appendContent(this._element,a):b("DOM").setContent(this._element,a),c?(this._is_content_cached=!0,this._displayCallback(b("emptyFunction"))):this._is_content_cached=!1,this._handler!=null&&this._handler()};c.cancel=function(){this._request&&this._request.abort()};c.abandon=function(){this._request&&this._request.abandon()};c.setUseAjaxPipe=function(a){this._use_ajaxpipe=!!a;return this};c.setUsePostRequest=function(a){this._use_post_request=!!a;return this};c.setAppend=function(a){this._append=!!a;return this};c.setJSNonBlock=function(a){this._jsNonblock=!!a;return this};c.setAutomatic=function(a){this._automatic=!!a;return this};c.setDisplayCallback=function(a){this._displayCallback=a;return this};c.setConstHeight=function(a){this._constHeight=!!a;return this};c.setFinallyHandler=function(a){this._finallyHandler=a;return this};c.setAllowIrrelevantRequests=function(a){this._allowIrrelevantRequests=a;return this};c.setActorID=function(a){this._actorID=a;return this};c.setCacheContent=function(a){this._cache_content=a;return this};c.setContentCacheKey=function(a){this._content_cache_key=a;return this};c.isContentCached=function(){return this._is_content_cached};a.appendToInline=function(a,c){a=b("ge")(a);c=b("ge")(c);if(a&&c){while(c.firstChild)b("DOM").appendContent(a,c.firstChild);b("DOM").remove(c)}};a.loadFromEndpoint=function(c,d,e,f){__p&&__p();f=f||{};var h="/ajax/pagelet/generic.php/"+c;f.intern&&(h="/intern"+h);f.query&&(h=h+"?"+f.query);h=new(g||(g=b("URI")))(h.replace(/\/+/g,"/"));f.subdomain&&h.setSubdomain(f.subdomain);var i=!1,j="";f.contentCacheKey&&(i=!0,j=c+","+String(f.contentCacheKey));c=new a(d,h,e).setUseAjaxPipe(f.usePipe).setBundleOption(f.bundle!==!1).setAppend(f.append).setJSNonBlock(f.jsNonblock).setAutomatic(f.automatic).setDisplayCallback(f.displayCallback).setConstHeight(f.constHeight).setAllowCrossPageTransition(f.crossPage).setFinallyHandler(f.finallyHandler||b("emptyFunction")).setErrorHandler(f.errorHandler).setTransportErrorHandler(f.transportErrorHandler).setAllowIrrelevantRequests(f.allowIrrelevantRequests).setActorID(f.actorID).setCacheContent(i).setContentCacheKey(j).setUsePostRequest(f.usePostRequest);f.handler&&c.setHandler(f.handler);c.go();return c};a.loadFromEndpointBatched=function(c,d,e){__p&&__p();var f=c.slice(0,e),g=c.slice(e);if(g.length>0){c=f[f.length-1];var h=b("emptyFunction");c.options&&c.options.finallyHandler&&(h=c.options.finallyHandler);c.options=babelHelpers["extends"]({},c.options,{finallyHandler:function(){h(),window.setTimeout(function(){a.loadFromEndpointBatched(g,d,e)},1)}})}f.forEach(function(b){a.loadFromEndpoint(b.controller,b.target_element,b.data,babelHelpers["extends"]({},b.options,d,{bundle:!0}))})};return a}();e.exports=a}),null);
__d("XPageAdminHomePagePanelSaveSettingsController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/homepage_panel/save_settings/",{selected_id:{type:"FBID"},collapse_state:{type:"Int"},refresh_panel:{type:"Bool",defaultValue:!1},refresh_panel_after_save:{type:"Bool",defaultValue:!0},click_target:{type:"String"}})}),null);
__d("PageHomepagePanelPagelet",["AsyncRequest","DOM","UIPagelet","URI","XPageAdminHomePagePanelSaveSettingsController","$"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="homepage_panel_pagelet_content";a={init:function(a){var c=b("XPageAdminHomePagePanelSaveSettingsController").getURIBuilder().setBool("refresh_panel",!0).getURI();c.addQueryData((g||(g=b("URI"))).getRequestURI().getQueryData());new(b("AsyncRequest"))().setURI(c).setStatusElement(a).setErrorHandler(function(a){b("DOM").setContent(b("$")(h),"")}).send()},initWithAjax:function(){b("UIPagelet").loadFromEndpoint("PageHomepagePanelPagelet",h,{content_only:!0},{usePipe:!0,allowIrrelevantRequests:!0,displayCallback:function(a){return a()}})}};e.exports=a}),null);