if (self.CavalryLogger) { CavalryLogger.start_js(["cGG0Q"]); }

__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=b("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var c=a.prototype;c.$5=function(){__p&&__p();var a=this;b("Arbiter").subscribe("has_story_bucket_been_seen",function(c,d){if(a.$2===d){c=b("DOM").scry(a.$1,"._6_ut");c.length>0&&(b("CSS").removeClass(c[0],"_6_ut"),a.$4=!1)}});b("Arbiter").subscribe("update_next_thread_to_view",function(c,d){c=d.bucketOwnerId;d=d.threadId;if(a.$2===c&&a.$4){c=b("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",d).setBool("auto_open_viewersheet",!1).setString("story_action_source",b("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",c)}})};return a}();e.exports=a}),null);
__d("OutdatedBrowserBanner",["CSS","$"],(function(a,b,c,d,e,f){f.conditionShow=function(a,c){b("CSS").conditionShow(b("$")(a),c)}}),null);
__d("VerseSidebarUtil",["Bootloader","CSS","DOM","ge"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(){var a=document.documentElement||"";b("CSS").addClass(a,"buddylistOff")}var h={show:function(){g();if(b("ge")("pagelet_verse_sidebar"))return;b("Bootloader").loadModules(["UIPagelet"],function(a){var c=b("DOM").create("div",{id:"pagelet_verse_sidebar"});b("DOM").appendContent(document.body,c);a.loadFromEndpoint("VerseSidebarPagelet","pagelet_verse_sidebar",{path:""})},"VerseSidebarUtil")},remove:function(){var a=b("ge")("pagelet_verse_sidebar");a&&b("DOM").remove(a)},removeAndHideMessenger:function(){g(),h.remove()}};e.exports=h}),null);
__d("PrivacyLiteFlyoutBootloader",["regeneratorRuntime","Promise","Deferred","JSResource"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=null,i=null,j={loadFlyout:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!1));case 2:case"end":return a.stop()}},null,this)},loadFlyoutAsChild:function(){return b("regeneratorRuntime").async(function(a){while(1)switch(a.prev=a.next){case 0:a.next=2;return b("regeneratorRuntime").awrap(j._loadFlyout(!0));case 2:case"end":return a.stop()}},null,this)},_loadFlyout:function(a){__p&&__p();var c,d,e,f,h,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){__p&&__p();while(1)switch(n.prev=n.next){case 0:if(!g){n.next=2;break}return n.abrupt("return");case 2:g=!0;n.next=5;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:c=n.sent,d=c[0],e=c[1],f=e.flyout,h=e.flyoutRoot,i=c[2],j=i.footer,k=i.event,l=i.settingsExitPoint,m=i.basicsExitPoint,d.setIsChild(!!a),d.registerFlyoutToggler(f,h),d.registerSettingsAndBasicsLinkLogging(j,k,l,m),d.loadBody();case 19:case"end":return n.stop()}},null,this)},setChildFlyoutVisible:function(a){__p&&__p();var c,d,e,f;return b("regeneratorRuntime").async(function(h){__p&&__p();while(1)switch(h.prev=h.next){case 0:if(!(!g&&!a)){h.next=2;break}return h.abrupt("return");case 2:h.next=4;return b("regeneratorRuntime").awrap(b("Promise").all([b("JSResource")("PrivacyLiteFlyout").__setRef("PrivacyLiteFlyoutBootloader").load(),this._getDeferredFlyoutElements().getPromise()]));case 4:c=h.sent;d=c[0];e=c[1];f=e.flyout;e._flyoutRoot;if(!(a===d.isFlyoutVisible())){h.next=11;break}return h.abrupt("return");case 11:d.setChildFlyoutVisible(a),d.onToggle(f,a?"show":"hide");case 13:case"end":return h.stop()}},null,this)},_getDeferredFlyoutElements:function(){h==null&&(h=new(b("Deferred"))());return h},registerFlyoutElements:function(a,b){this._getDeferredFlyoutElements().resolve({flyout:a,flyoutRoot:b})},_getDeferredFooterElements:function(){i==null&&(i=new(b("Deferred"))());return i},registerFooterElements:function(a,b,c,d){this._getDeferredFooterElements().resolve({footer:a,event:b,settingsExitPoint:c,basicsExitPoint:d})}};e.exports=j}),null);
__d("HelpLiteFlyout",["Arbiter","AsyncRequest","CSS","DOM","Event","HelpLiteFlyoutBootloader","PrivacyLiteFlyoutBootloader","Toggler","ge","ifRequired"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h={loadBody:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType()}).send()},refreshHelp:function(){b("ge")("fbHelpLiteFlyoutLoading")&&new(b("AsyncRequest"))("/help/ajax/contextual/").setData({page_type:b("HelpLiteFlyoutBootloader").getHelpType(),is_refresh:!0}).send()},resetHelp:function(a){var c=b("ge")("fbContextualHelpContent");c&&b("DOM").replace(c,a);h.isFlyoutVisible()?h.refreshHelp():b("ifRequired")("WorkGalahadQuickHelpNub.react",function(){h.refreshHelp()})},showHelp:function(){b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1),b("CSS").show(b("ge")("fbHelpLiteFlyout"))},openPrivacy:function(){b("CSS").hide(b("ge")("fbHelpLiteFlyout")),b("PrivacyLiteFlyoutBootloader").loadFlyoutAsChild(),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!0)},registerPrivacyBackLink:function(a){b("Event").listen(a,"click",h.showHelp)},registerFlyoutToggler:function(a,c){g=c;a=b("Toggler").createInstance(a);a.setSticky(!1);b("Toggler").listen("hide",c,function(a){b("Arbiter").inform("layer_hidden",{type:"HELP_LITE"}),b("PrivacyLiteFlyoutBootloader").setChildFlyoutVisible(!1)});b("Toggler").listen("show",c,function(a){b("Arbiter").inform("layer_shown",{type:"HELP_LITE"}),h.showHelp()})},isFlyoutVisible:function(){return g&&b("Toggler").getActive()===g},setFlyoutVisible:function(a){a&&b("HelpLiteFlyoutBootloader").loadFlyout(),a?b("Toggler").show(g):b("Toggler").hide(g)}};e.exports=h}),null);