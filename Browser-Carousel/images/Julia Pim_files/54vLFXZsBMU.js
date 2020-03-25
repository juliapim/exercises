if (self.CavalryLogger) { CavalryLogger.start_js(["twToF"]); }

__d("UFI2CommentIdentityBadges_comment.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"UFI2CommentIdentityBadges_comment",type:"Comment",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"feedLocation",type:"FBFeedLocation"}],selections:[{kind:"ScalarField",alias:null,name:"legacy_fbid",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"identity_badges_web",storageKey:null,args:[{kind:"Variable",name:"feed_location",variableName:"feedLocation"}],concreteType:"IdentityBadge",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"badge_asset",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"badge_color",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"identity_badge_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"multiple_badge_asset",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"multiple_badge_asset_colored",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"serialized",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"badge_color_variant",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"feedback",storageKey:null,args:null,concreteType:"Feedback",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"subscription_target_id",args:null,storageKey:null}]}]};e.exports=a}),null);
__d("UFI2CommentIdentityBadges_identityBadge$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",name:"UFI2CommentIdentityBadges_identityBadge$normalization",metadata:{derivedFrom:"UFI2CommentIdentityBadges_identityBadge"},selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]};e.exports=a}),null);
__d("UFI2CommentIdentityBadges_identityBadge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"UFI2CommentIdentityBadges_identityBadge",type:"IdentityBadge",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null}]};e.exports=a}),null);
__d("FBVpvImpression.react",["OnVisible.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){b=a.call(this,b,c)||this;b.timer=null;return b}var d=c.prototype;d.render=function(){var a=this,c=this.props.visiblePixels?-this.props.visiblePixels:0;return g.jsx(b("OnVisible.react"),{buffer:c,ref:"div",onVisible:function(){return a.startCountdown()},onHidden:function(){return a.cancelCountdown()},children:this.props.children})};d.startCountdown=function(){var a=this;if(this.timer!==null)return;this.timer=setTimeout(function(){a.timer=null,a.props.onViewed()},this.props.durationMs)};d.cancelCountdown=function(){if(this.timer===null)return;clearTimeout(this.timer);this.timer=null};d.componentWillUnmount=function(){this.cancelCountdown()};return c}(g.Component);e.exports=a}),null);
__d("IdentityBadgeType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AD_SUPPORTER:"ad_supporter",AUTHOR:"author",BIRTHDAY_WEEK_TIPPER:"birthday_week_tipper",CLIPPER:"clipper",COMMERCE_ADMIN:"commerce_admin",COMMERCE_CASH_ON_DELIVERY:"commerce_cash_on_delivery",COMMERCE_HIGHLY_RATED:"commerce_highly_rated",COMMERCE_MODERATOR:"commerce_moderator",COMMERCE_PAYMENTS_ONBOARDED:"commerce_payments_onboarded",COMMERCE_SUPER_SELLER:"commerce_super_seller",COMMERCE_VERY_RESPONSIVE:"commerce_very_responsive",COMMERCE_WILLING_TO_SHIP:"commerce_willing_to_ship",FAN_FUNDING_SUPPORTER:"fan_funding_supporter",FAVORITE:"favorite",FOLLOWER:"follower",FREQUENT_WATCHER:"frequent_watcher",GROUPIE:"groupie",HOT_COMMENT:"hot_comment",MODERATOR:"moderator",ORIGINAL:"original",SHARER:"sharer",STREAMER_APPRECIATION_WEEK_TIPPER:"streamer_appreciation_week_tipper",TIPPER:"tipper",TOP_FAN:"top_fan",VALUED_COMMENTER:"valued_commenter",WOODHENGE:"woodhenge",WOODHENGE_SUBMAGEDDON:"woodhenge_submageddon"})}),null);
__d("IdentityBadgeTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:IdentityBadgeLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:IdentityBadgeLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:IdentityBadgeLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setBadgeID=function(a){this.$1.badge_id=a;return this};c.setBadgeType=function(a){this.$1.badge_type=a;return this};c.setCommentID=function(a){this.$1.comment_id=a;return this};c.setDisplaySurface=function(a){this.$1.display_surface=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setFollowerID=function(a){this.$1.follower_id=a;return this};c.setMediaID=function(a){this.$1.media_id=a;return this};c.setPageID=function(a){this.$1.page_id=a;return this};c.setStoryID=function(a){this.$1.story_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={badge_id:!0,badge_type:!0,comment_id:!0,display_surface:!0,event_name:!0,follower_id:!0,media_id:!0,page_id:!0,story_id:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("VideoCreatorTopFansBadgeTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:VideoCreatorTopFansBadgeLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoCreatorTopFansBadgeLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoCreatorTopFansBadgeLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdminID=function(a){this.$1.admin_id=a;return this};c.setBadgeDisplaySurface=function(a){this.$1.badge_display_surface=a;return this};c.setCreatorID=function(a){this.$1.creator_id=a;return this};c.setEntryPoint=function(a){this.$1.entry_point=a;return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setFanID=function(a){this.$1.fan_id=a;return this};c.setFanPrivacy=function(a){this.$1.fan_privacy=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={admin_id:!0,badge_display_surface:!0,creator_id:!0,entry_point:!0,event_name:!0,fan_id:!0,fan_privacy:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("WoodhengeClientTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("woodhenge_banzai_client:WoodhengeClientLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("woodhenge_banzai_client:WoodhengeClientLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("woodhenge_banzai_client:WoodhengeClientLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setClientContext=function(a){this.$1.client_context=a;return this};c.setClientUserID=function(a){this.$1.client_userid=a;return this};c.setClienttime=function(a){this.$1.clienttime=a;return this};c.setCountry=function(a){this.$1.country=a;return this};c.setCreatorPageID=function(a){this.$1.creator_page_id=a;return this};c.setDeviceid=function(a){this.$1.deviceid=a;return this};c.setEntrypointSurface=function(a){this.$1.entrypoint_surface=a;return this};c.setEventData=function(a){this.$1.event_data=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setException=function(a){this.$1.exception=a;return this};c.setInorganicPromoID=function(a){this.$1.inorganic_promo_id=a;return this};c.setInterface=function(a){this.$1["interface"]=a;return this};c.setIsFollower=function(a){this.$1.is_follower=a;return this};c.setIsSupporter=function(a){this.$1.is_supporter=a;return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setPostIDRaw=function(a){this.$1.post_id_raw=a;return this};c.setPresentationMethod=function(a){this.$1.presentation_method=a;return this};c.setSessionid=function(a){this.$1.sessionid=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setVisitationID=function(a){this.$1.visitation_id=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,client_context:!0,client_userid:!0,clienttime:!0,country:!0,creator_page_id:!0,deviceid:!0,entrypoint_surface:!0,event_data:!0,exception:!0,inorganic_promo_id:!0,"interface":!0,is_follower:!0,is_supporter:!0,isemployee:!0,name:!0,post_id_raw:!0,presentation_method:!0,sessionid:!0,surface:!0,time:!0,vc:!0,visitation_id:!0,weight:!0};e.exports=a}),null);
__d("XIdentityBadgesInfomationDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/identity_badge/information_dialog/init/",{badges:{type:"String"},comment_id:{type:"FBID"}})}),null);
__d("castToEnum",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=Object.keys(b);for(var e=0;e<d.length;e++)if(b[d[e]]===a)return b[d[e]];return c}e.exports=a}),null);
__d("IdentityBadges.react",["cx","AsyncRequest","FBVpvImpression.react","IdentityBadgeType","IdentityBadgeTypedLogger","Image.react","Link.react","React","VideoCreatorTopFansBadgeTypedLogger","WoodhengeClientTypedLogger","XIdentityBadgesInfomationDialogController","castToEnum","cxMargin","gkx"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("React"),i=12;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=b("XIdentityBadgesInfomationDialogController").getURIBuilder().setString("badges",JSON.stringify(d.props.badges)).setFBID("comment_id",d.props.commentID).getURI();a=new(b("AsyncRequest"))().setURI(a).setMethod("POST").setReadOnly(!0);a.send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.badges;return!Array.isArray(a)||a.length===0?null:h.jsx(b("Link.react"),{onClick:this.props.disableClick===!0?void 0:this.$1,children:h.jsx("div",{className:"_7w-o",children:this.$2()})})};d.$2=function(){var a;a=(a=this.props.badgeColorVariant)!=null?a:"NONE";switch(a){case"PERMANENT":return h.jsx("div",{className:"_3x69",children:this.$3(!0)});case"TEMPORARY":return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"_3x69 _7w-m",children:this.$3(!0)}),h.jsx("div",{className:"_3x69 _7w-n",children:this.$3(!1)})]});case"NONE":return h.jsx("div",{className:"_3x69",children:this.$3(!1)});default:return null}};d.$3=function(a){var c=this.props.canShowMultipleBadges===!0&&b("gkx")("890475"),d=this.props.badges.length===1||!c;return d?this.$4(c,a):this.$5(a)};d.$4=function(a,c){var d=this,e=this.props.badges,f=e[0];e=e.length===1?null:" +"+(e.length-1);var g=c?f.multiple_badge_asset_colored:f.multiple_badge_asset;return h.jsx(b("FBVpvImpression.react"),{onViewed:function(){return d.$6(f)},durationMs:1e3,children:h.jsxs(h.Fragment,{children:[h.jsx(b("Image.react"),{className:"_3-8_",height:i,src:a?g:f.badge_asset}),h.jsxs("span",{className:"_3x6z",style:c?{color:f.badge_color}:null,children:[f.text,e]})]})})};d.$6=function(a){var c=JSON.parse(a.serialized);new(b("IdentityBadgeTypedLogger"))().setEventName("identity_badges_rendered").setBadgeType(b("castToEnum")(a.type,b("IdentityBadgeType"),null)).setFollowerID(c.actor_id).setDisplaySurface(c.surface).setPageID(c.target_id).setCommentID(this.props.commentID).log();switch(a.type){case"woodhenge":case"fan_funding_supporter":a=new(b("WoodhengeClientTypedLogger"))().setName("identity_badges_rendered").setCreatorPageID(c.target_id).setSurface(c.surface).setEntrypointSurface(c.surface);this.props.postID!=null&&a.setPostIDRaw(this.props.postID);a.log();break;case"top_fan":new(b("VideoCreatorTopFansBadgeTypedLogger"))().setEventName("identity_badges_rendered").setCreatorID(c.target_id).setFanID(c.actor_id).setBadgeDisplaySurface(c.surface).log();break}};d.$5=function(a){return this.props.badges.map(function(c){return h.jsx(b("Image.react"),{className:"_3-8_",height:i,src:a?c.multiple_badge_asset_colored:c.multiple_badge_asset},c.type)})};return c}(h.Component);e.exports=a}),null);
__d("IdentityBadgeUtils",["cx","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(a){switch(a){case"tipper":case"birthday_week_tipper":case"streamer_appreciation_week_tipper":return b("gkx")("709988");case"sharer":return b("gkx")("709989");case"follower":return b("gkx")("833805");case"woodhenge_submageddon":return b("gkx")("1113070");case"original":return b("gkx")("1144561");case"top_fan":case"frequent_watcher":case"woodhenge":case"author":case"fan_funding_supporter":case"moderator":return!0;default:return!1}};a=function(a){__p&&__p();if(a==null||a.length===0)return null;a=a.filter(function(a){a=JSON.parse(a.serialized);a=a.type;return h(a)});return a.length===0?null:a.map(function(a){var b=JSON.parse(a.serialized);b=b.type;return{type:b,badge_asset:a.badge_asset,badge_color:a.badge_color,multiple_badge_asset:a.multiple_badge_asset,multiple_badge_asset_colored:a.multiple_badge_asset_colored,text:a.text,serialized:a.serialized}})};var i=(c={},c.frequent_watcher="_7wxe",c.woodhenge="_7wxf",c.top_fan="_7wxg",c),j=function(a,c){return a!=null&&a.isgamingvideo&&c&&(c.feedLocationType===131||c.isTahoeUFI===!0)&&b("gkx")("900386")};d=function(a,b,c,d){if(!a||!Array.isArray(a.identityBadges)||a.identityBadges.length===0||!a.isunseen||d===!0||!j(b,c))return null;d=a.identityBadges.map(function(a){return a.type}).filter(function(a){return a.toString()in i});return d.length===0?null:i[d[0]]};e.exports={commentColorAnimationClass:d,fromLiveVideoCommentCreateSubscription:a,isEligibleForColorComments:j,isBadgeTypeEligible:h}}),null);
__d("UFI2CommentIdentityBadges.react",["cx","IdentityBadges.react","IdentityBadgeUtils","React","UFI2CometRelayCreateFragmentContainer","compactArray","recoverableViolation","UFI2CommentIdentityBadges_comment.graphql","UFI2CommentIdentityBadges_identityBadge.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=b("IdentityBadgeUtils").isBadgeTypeEligible,k=b("React");c=b("UFI2CometRelayCreateFragmentContainer").createFragmentContainer;b("UFI2CometRelayCreateFragmentContainer").graphql;function a(a){var c;a=a.comment;var d=l(a.identity_badges_web),e=a.legacy_fbid;c=(c=a.feedback)==null?void 0:c.subscription_target_id;if(e==null){b("recoverableViolation")("error rendering UFI2CommentIdentityBadges, legacy_id was failed to be retrieved from the server","fan_funding");return null}return k.jsx("div",{className:"_7w_c",children:k.jsx(b("IdentityBadges.react"),{badgeColorVariant:d.length>0?a.identity_badges_web[0].badge_color_variant:"NONE",badges:d,commentID:e,postID:c})})}a.displayName="UFI2CommentIdentityBadges";function l(a){return a==null||a.length===0?[]:b("compactArray")(a.map(function(a){var b=a.badge_asset,c=a.badge_color,d=a.multiple_badge_asset,e=a.multiple_badge_asset_colored,f=a.identity_badge_type,g=a.text;a=a.serialized;if(f==null||b==null||c==null||g==null||d==null||e==null||a==null||!j(f))return null;b={badge_asset:b,badge_color:c,multiple_badge_asset:d,multiple_badge_asset_colored:e,serialized:a,text:g,type:f};return b}))||[]}e.exports=c(a,{comment:h!==void 0?h:h=b("UFI2CommentIdentityBadges_comment.graphql"),identityBadge:i!==void 0?i:i=b("UFI2CommentIdentityBadges_identityBadge.graphql")})}),null);