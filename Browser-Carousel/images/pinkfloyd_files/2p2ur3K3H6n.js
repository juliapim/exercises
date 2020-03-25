if (self.CavalryLogger) { CavalryLogger.start_js(["jzmT8"]); }

__d("CovercardArrow",["csx","cx","ContextualDialogArrow","CSS","DOMQuery","Locale","Style"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=-45,j=45,k=9;b("Locale").isRTL()&&(i=-i,j=-j);a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){__p&&__p();this._layer.enableBehavior(b("ContextualDialogArrow"));var a=this._layer.getContentRoot();this._arrowWrapper=b("DOMQuery").scry(a,"._ttk")[0];if(!this._arrowWrapper)return;this._arrowShadow=b("DOMQuery").scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var c=null;l(this._arrowWrapper)&&(c=this._renderArrowWithRotate.bind(this));if(!c)return;b("Locale").isRTL()&&b("CSS").addClass(a,"_7lf");this._subscription=this._layer.subscribe("reposition",function(d,e){d=e.getPosition()=="below";b("CSS").conditionClass(a,"_53ih",d);d&&c(e)})};c.disable=function(){this._subscription&&this._subscription.unsubscribe(),this._subscription=null};c._calculateArrowOffset=function(a){var c=b("ContextualDialogArrow").getOffsetPercent(a);a=b("ContextualDialogArrow").getOffset(a,c,this._layer);var d=b("Style").get(this._layer.getContentRoot(),"width");return parseInt(d,10)*(c/100)+a};c._renderArrowWithRotate=function(a){__p&&__p();var c=b("DOMQuery").scry(this._arrowWrapper,"._7lj")[0];if(!c){var d=this._layer.getContentRoot();b("CSS").addClass(d,"_2uy0")}d=b("DOMQuery").scry(this._arrowWrapper,"._1ubp")[0];if(!d)return;var e=l(this._arrowWrapper);if(!e)return;a=this._calculateArrowOffset(a);a=k+a;var f=-k;b("Locale").isRTL()&&(a=-a,f=-f);this._arrowWrapper.style[e]="translate("+a+"px, -"+k+"px) rotate("+j+"deg)";c&&(c.style[e]="rotate("+i+"deg) translate("+-a+"px, "+(k-12)+"px)");d.style[e]="rotate("+i+"deg) translate("+f+"px, 0)"};return a}();function l(a){a||(a=document.body);var b=["transform","WebkitTransform","msTransform","MozTransform","OTransform"],c;while(c=b.shift())if(a.style[c]!==void 0)return c;return null}e.exports=a}),null);
__d("GroupsIntentHovercardLogger",["Arbiter","GroupsMemberConnectionsLogger","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h={_currentEndpoint:null,register:function(){b("Arbiter").subscribe("Hovercard/show",h._onHovercardShow,"new"),b("Arbiter").subscribe("Hovercard/hide",h._onHovercardHide,"new")},_onHovercardShow:function(a,c){__p&&__p();if(!c||!c.endpoint)return;a=c.endpoint;if(a===h._currentEndpoint)return;c=new(g||(g=b("URI")))(a).getQueryData();if(!c.extragetparams)return;var d=JSON.parse(c.extragetparams),e=d.directed_target_id||d.group_id;d=d.hc_location;c.id&&e&&d&&h._getIsGroupsLocation(d)&&(h._currentEndpoint=a,b("GroupsMemberConnectionsLogger").logIntent(e,c.id,"HOVERCARD_VIEW"))},_onHovercardHide:function(){h._currentEndpoint=null},_getIsGroupsLocation:function(a){return a==="group"||a==="group_dialog"}};e.exports=h}),null);
__d("HovercardLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";var g="hovercard_logger";a={logTimespent:function(a,c,d){a={id:a,time_spent:c,extra_get_params:d};b("Banzai").post(g,a)}};e.exports=a}),null);
__d("Hovercard",["csx","cx","fbt","AccessibleLayer","Arbiter","AsyncRequest","Banzai","Bootloader","ContextualDialog","ContextualDialogNoArrow","ContextualDialogXUITheme","ContextualThing","CurrentUser","DOM","Event","GroupsIntentHovercardLogger","HovercardLogger","IntersectionObserver","JSXDOM","LayerAutoFocus","LayerRefocusOnHide","Parent","Style","URI","Vector","clickRefAction","getInlineBoundingRect","gkx"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k={},l=function(){__p&&__p();function a(c,d,e){__p&&__p();var f=this;e===void 0&&(e={});this.$1=c;this.$2=e;this.$3=a.$18();this.$4=d;this.$5=null;this.$6=null;this.$7=null;this.$8=null;this.$9=[];this.$10=!1;this.$11=null;this.$13=!1;this.$14=!1;this.$15=null;this.$16=!1;this.$19=null;b("gkx")("678125")&&(this.$20=new(b("IntersectionObserver"))(function(a){f.scroll()},{threshold:[0,1]}))}a.getActiveHovercard=function(){var b=a.$21.length;return b?a.$21[b-1]:null};a.hide=function(b){b===void 0&&(b=!1);var c=a.getActiveHovercard();if(!c)return;a.$21.pop().$22(b)};a.setDialog=function(c,d){var e=a.$23[c];e||(e=new a(null,c),a.$23[c]=e);d.disableBehavior(b("AccessibleLayer")).disableBehavior(b("LayerAutoFocus")).disableBehavior(b("LayerRefocusOnHide"));e.$24(d)};a.getDialog=function(b){b=a.$23[b];return b&&b.$13?b.$3:null};a.$25=function(b,c){c===void 0&&(c=!1);var d=a.$21.length;while(d&&a.$21[d-1].$4!=b)a.$21.pop().$22(c),d=a.$21.length};a.$26=function(b){var c=a.getActiveHovercard();return c?c.$1===b:!1};a.$27=function(a,b){return b["data-hovercard"]||a.getAttribute("data-hovercard")};a.$28=function(a){return b("DOM").scry(a,"^._5jmm ._2orz").length>0};a.$18=function(){__p&&__p();if(a.$29)return a.$29;var c=b("CurrentUser").isWorkUser()&&b("gkx")("1217314");a.$29=c?new(b("ContextualDialog"))({width:400,theme:b("ContextualDialogXUITheme"),arrowBehavior:b("ContextualDialogNoArrow"),classNames:["_8sxi"]},b("JSXDOM").div({},"")):new(b("ContextualDialog"))({width:275,theme:b("ContextualDialogXUITheme")},b("JSXDOM").div({className:"_7lk"},i._("Loading...")));a.$29.disableBehavior(b("AccessibleLayer")).disableBehavior(b("LayerAutoFocus")).disableBehavior(b("LayerRefocusOnHide"));c&&b("Bootloader").loadModules(["React","ReactDOM","WIGHovercardGlimmer.react"],function(c,d,e){var f=b("JSXDOM").div({},"");d.render(c.createElement(e),f);a.$29.setInnerContent(f)},"loadModules: Hovercard.js");return a.$29};a.dirty=function(b){var c=a.$23[b];c&&(c.$22(!0),delete a.$23[b])};a.dirtyAll=function(){for(var c in a.$23)a.dirty(c);b("Arbiter").inform("Hovercard/dirty")};a.contains=function(b){var c=a.getActiveHovercard();return c?c.$30(b):!1};a.processNode=function(b,c){__p&&__p();c===void 0&&(c={});if(!b)return!1;var d=a.$27(b,c);if(!d)return!1;if(a.$28(b)||a.$31(b))return!1;var e=a.$23[d];e||(e=a.$23[d]=new a(b,d,c));if(e.$10)return!1;d=a.getActiveHovercard();var f=!1;while(d&&!a.contains(b))a.$21.pop().$22(),f=!0,d=a.getActiveHovercard();var g=null;d&&(g=d.$4);e.$14&&e.$1!=b&&e.$32(b);e.$33(b,c,f);e.$5=g;a.$21.push(e);return!0};a.setDirtyAllOnPageTransition=function(b){a.dirtyAllOnPageTransition=b};a.getLoadingDelay=function(){return a.$34};a.getHideDelay=function(){return a.$35};a.scroll=function(){__p&&__p();var b=null;for(var c=a.$21,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;if(f.$36()){b=f;break}}if(!b)return;a.$25(b.$4,!0);a.$21.pop().$22(!0)};a.abort=function(){a.hide(!0)};a.$31=function(a){return b("Parent").bySelector(a,"._7lu")!==null};var c=a.prototype;c.getEndpoint=function(){return this.$4};c.$41=function(){clearTimeout(this.$8),this.$8=null};c.$42=function(){var c=this,d=this.$1;c.$12=b("Event").listen(d,"mouseleave",function(){if(!c.$10)return;a.$25(c.$4);a.$21.length&&a.$21.pop().$22()})};c.$43=function(){var a=this,c=this.$1;this.$11=b("Event").listen(c,"mousemove",function(c){if(a.$14)return;a.$15=b("Vector").getEventPosition(c)})};c.$44=function(){clearTimeout(this.$6),clearTimeout(this.$7),this.$6=null,this.$7=null};c.$33=function(b,c,d){__p&&__p();d===void 0&&(d=!1);if(this.$10)return;this.$1=b;this.$2=c;this.$10=!0;this.$41();this.$42();if(this.$14)return;this.$43();var e=a.$37;d=d?a.$35:a.$38;(c["data-hovercard-instant"]||b.getAttribute("data-hovercard-instant"))&&(e=d=a.$39);c=function(){this.$45()};b=function(a){this.$46(a)};this.$16||(this.$6=setTimeout(c.bind(this),e));this.$7=setTimeout(b.bind(this,d),d)};c.$47=function(){this.$11&&(this.$11.remove(),this.$11=null),this.$12&&(this.$12.remove(),this.$12=null)};c.$22=function(b){__p&&__p();b===void 0&&(b=!1);if(!this.$10)return;this.$10=!1;this.$44();this.$47();if(!this.$14)return;if(b){this.$48(!0);return}b=this.$2["data-hovercard-instant"]||this.$1.getAttribute("data-hovercard-instant")?a.$39:a.$35;var c=function(){this.$48()};this.$8=setTimeout(c.bind(this),b)};c.$48=function(a){__p&&__p();a===void 0&&(a=!1);if(!this.$14||this.$8==null&&!a)return;a=new(j||(j=b("URI")))(this.$4);a=a.getQueryData();if(this.$17!==null&&a.id!==null){var c={},d=this.$2["data-hovercard-referer"]||this.$1.getAttribute("data-hovercard-referer");d!==null&&(c.preview_referer=d);b("HovercardLogger").logTimespent(Number(a.id),String(Date.now()-this.$17),c)}this.$17=null;this.$8=null;this.$49();this.$3.hide();this.$14=!1;b("Arbiter").inform("Hovercard/hide");this.$5=null};c.$46=function(c,d){__p&&__p();if(!this.$10||this.$14)return;if(d!==!0){var e=new(j||(j=b("URI")))(this.$4);e=e.getQueryData();if(e.id!==null){var f="pages_growth_general_analytical_logger";e={id:Number(e.id),event:"HOVERCARD_IMPRESSION",event_target:"Hovercard",feature_name:"Preview_Insights"};b("Banzai").post(f,e)}}if(this.$13||d)this.$50(),this.$51(),this.$14=!0;else{c=a.$34-a.$38;f=function(a,b){this.$46(a,b)};this.$7=setTimeout(f.bind(this,c,!0),c)}};c.$51=function(){__p&&__p();var c=this.$1,d=this.$3,e=this.$2["data-hovercard-position"]||this.$1.getAttribute("data-hovercard-position");e&&d.setPosition(e);this.$52();this.$17=Date.now();e=this.$2["data-hovercard-prefer-more-content-show"]||this.$1.getAttribute("data-hovercard-prefer-more-content-show");e&&d.getOrientation().setPreferMoreContentShownRect(!0);if(!b("DOM").contains(document.body,c)){this.$10?(a.$25(this.$4,!0),a.$21.pop().$22(!0)):this.$48();return}d.setContextWithBounds(c,b("getInlineBoundingRect")(c,this.$15)).show();b("Arbiter").inform("Hovercard/show",{endpoint:this.$4});this.$13&&c!=a.$40&&(a.$40=c,setTimeout(function(){b("clickRefAction")("himp",c,null,"FORCE",{ft:{evt:39}})},0))};c.$45=function(){__p&&__p();if(this.$13||this.$16)return;this.$16=!0;if(this.$1.id&&k[this.$1.id]){a.setDialog(this.$4,k[this.$1.id]);return}var c=this,d=function(){a.dirty(c.$4),a.hide(!0)};new(b("AsyncRequest"))(this.$4).setData({endpoint:this.$4}).setMethod("GET").setReadOnly(!0).setErrorHandler(d).setTransportErrorHandler(d).send()};c.$52=function(){var a=this.$2["data-hovercard-offset-x"]||this.$1.getAttribute("data-hovercard-offset-x");this.$3.setOffsetX(parseInt(a,10));a=this.$2["data-hovercard-offset-y"]||this.$1.getAttribute("data-hovercard-offset-y");this.$3.setOffsetY(parseInt(a,10))};c.$50=function(){__p&&__p();var b=this;b.$3.mouseTest=!1;b.$9=[b.$3.subscribe("mouseenter",function(){__p&&__p();if(b.$10)return;var c=b,d=null,e=[];while(!c.$10){if(!c.$14)return;e.push(c);d=c.$5;if(!d)break;c=a.$23[d]}a.$25(d);while(e.length)c=e.pop(),c.$33(c.$1,c.$2,!1),a.$21.push(c)}),b.$3.subscribe("mouseleave",function(c,d){if(!b.$10)return;a.$25(b.$4);a.$21.pop().$22();c=a.getActiveHovercard();while(c&&!a.contains(d))a.$21.pop().$22(),c=a.getActiveHovercard()}),b.$3.subscribe("destroy",function(){b.$13&&(b.$49(),b.$3=a.$18(),b.$13=!1);if(!b.$10)return;a.$25(b.$4,!0);a.$21.pop().$22(!0)})]};c.$49=function(){while(this.$9.length)this.$9.pop().unsubscribe()};c.$30=function(a){return b("ContextualThing").containsIncludingLayers(this.$3.getContentRoot(),a)};c.$32=function(){__p&&__p();this.$48(!0);var b=[this];while(b.length){var c=b.pop();for(var d in a.$23){if(!Object.prototype.hasOwnProperty.call(a.$23,d))continue;var e=a.$23[d];e.$5==c.$4&&(e.$48(!0),b.push(e))}}};c.$36=function(){return b("Style").isFixed(this.$1)};c.$24=function(a){this.$49(),this.$14&&this.$3.hide(),this.$13=!0,this.$3=a,this.$14&&(this.$50(),this.$51())};a.initiateIntersectionObserver=function(){this.$20&&(this.$20.disconnect(),this.$20.observe(window))};return a}();l.$37=150;l.$38=700;l.$34=1e3;l.$35=250;l.$39=50;l.$23={};l.$29=null;l.$21=[];l.$40=null;l.dirtyAllOnPageTransition=!0;(function(){b("gkx")("678125")?l.initiateIntersectionObserver():b("Event").listen(window,"scroll",l.scroll),b("Arbiter").subscribe("page_transition",function(){l.hide(!0),l.dirtyAllOnPageTransition&&l.dirtyAll()},"new"),b("GroupsIntentHovercardLogger").register()})();e.exports=l}),null);