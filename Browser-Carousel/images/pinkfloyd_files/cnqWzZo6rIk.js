if (self.CavalryLogger) { CavalryLogger.start_js(["lGM6P"]); }

__d("FacebookWebNotificationsSubscription.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"WebNotificationReceiveSubscribeData!",defaultValue:null},{kind:"LocalArgument",name:"is_work_user",type:"Boolean",defaultValue:!1},{kind:"LocalArgument",name:"scale",type:"Float",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"eligible_buckets",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"sort_keys",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"alert_id",args:null,storageKey:null},f={kind:"ScalarField",alias:"creation_time",name:"notif_sent_time",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"content_category",args:null,storageKey:null},h={kind:"Variable",name:"scale",variableName:"scale"},i=[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}],j={kind:"LinkedField",alias:"icon",name:"app_icon",storageKey:null,args:[h],concreteType:"Image",plural:!1,selections:i},k={kind:"ScalarField",alias:"notif_type",name:"notif_type_value",args:null,storageKey:null},l={kind:"LinkedField",alias:"previewImage",name:"preview_image",storageKey:null,args:[{kind:"Literal",name:"height",value:48},h,{kind:"Literal",name:"width",value:75}],concreteType:"Image",plural:!1,selections:i},m={kind:"LinkedField",alias:"primerAttributes",name:"primer_attributes",storageKey:null,args:null,concreteType:"PrimerAttributes",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"ajaxify",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"rel",args:null,storageKey:null}]},n={kind:"ScalarField",alias:null,name:"seen_state",args:null,storageKey:null};h={kind:"LinkedField",alias:"thumbnail",name:"notif_image",storageKey:null,args:[h,{kind:"Literal",name:"width",value:48}],concreteType:"Image",plural:!1,selections:i};i={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null};var o={kind:"LinkedField",alias:null,name:"renderer_data",storageKey:null,args:null,concreteType:null,plural:!1,selections:[i,{kind:"InlineFragment",type:"LiveVideoNotificationRendererData",selections:[{kind:"ScalarField",alias:null,name:"beeper_time_to_hide",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"bucket_data",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"bucket_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_render_in_tahoe",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_pre_live",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"owner_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"sender_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"video_channel_caller",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"video_channel_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"video_id",args:null,storageKey:null}]},{kind:"InlineFragment",type:"NotificationExceptionNotificationRendererData",selections:[{kind:"ScalarField",alias:null,name:"exception_message",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"exception_stacktrace",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"exception_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"original_notification_type",args:null,storageKey:null}]}]},p=[{kind:"Literal",name:"location",value:"summary"}],q={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},r={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},s={kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[q,r]},t={kind:"Condition",passingValue:!0,condition:"is_work_user",selections:[{kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]}]},u={kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null},v={kind:"LinkedField",alias:null,name:"title",storageKey:'title(location:"summary")',args:p,concreteType:"TextWithEntities",plural:!1,selections:[s,{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[t]},r,q]},u]},w={kind:"ScalarField",alias:null,name:"tracking",args:null,storageKey:null},x={kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},y=[{kind:"Literal",name:"notif_option_set_context",value:{client_action_types:["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],supported_display_styles:[{option_display_styles:["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],option_set_display_style:"CHEVRON_MENU"}]}}],z={kind:"InlineFragment",type:"TypeOnlyNotifOptionClientAction",selections:[{kind:"ScalarField",alias:null,name:"action_type",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"undo_server_action",args:null,storageKey:null}]},A={kind:"ScalarField",alias:null,name:"server_action",args:null,storageKey:null},B=[u],C=[r,q];B={kind:"InlineFragment",type:"GenericNotifOptionRowDisplay",selections:[{kind:"LinkedField",alias:null,name:"text",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:B},{kind:"LinkedField",alias:null,name:"subtext",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:B},{kind:"LinkedField",alias:null,name:"undo_text",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:C},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:C},u]}]};C={kind:"LinkedField",alias:null,name:"notif_option_sets",storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',args:y,concreteType:"NotificationOptionSetsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"NotificationOptionSetsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"NotifOptionSet",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"notif_options",storageKey:null,args:null,concreteType:"NotifOptionSetOptionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"NotifOptionSetOptionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"NotifOption",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"client_info",storageKey:null,args:null,concreteType:null,plural:!1,selections:[z]},A,{kind:"LinkedField",alias:null,name:"option_display",storageKey:null,args:null,concreteType:null,plural:!1,selections:[B]}]}]}]}]}]}]};var D={kind:"LinkedField",alias:"timestamp",name:"creation_time_with_relative_text",storageKey:null,args:null,concreteType:"CreationTimeWithRelativeText",plural:!1,selections:[{kind:"ScalarField",alias:"time",name:"timestamp",args:null,storageKey:null},{kind:"ScalarField",alias:"text",name:"relative_timestamp_text",args:null,storageKey:null},{kind:"ScalarField",alias:"verbose",name:"verbose_timestamp_text",args:null,storageKey:null}]},E={kind:"ScalarField",alias:null,name:"should_play_sound",args:null,storageKey:null},F={kind:"ScalarField",alias:null,name:"should_show_beeper",args:null,storageKey:null},G={kind:"ScalarField",alias:null,name:"tab_id",args:null,storageKey:null},H={kind:"ScalarField",alias:null,name:"feedback_target_id",args:null,storageKey:null},I={kind:"ScalarField",alias:null,name:"permalink_uri",args:null,storageKey:null},J={kind:"ScalarField",alias:null,name:"notif_id",args:null,storageKey:null},K={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};p={kind:"LinkedField",alias:null,name:"title",storageKey:'title(location:"summary")',args:p,concreteType:"TextWithEntities",plural:!1,selections:[s,{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[i,K,t]},r,q]},u]};s={kind:"LinkedField",alias:null,name:"notif_option_sets",storageKey:'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","MODSUB","SAVE_ITEM","UNSAVE_ITEM","REPORT_BUG","OPEN_IN_INSPECTOR"],"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION","POPUP_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})',args:y,concreteType:"NotificationOptionSetsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"NotificationOptionSetsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"NotifOptionSet",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"notif_options",storageKey:null,args:null,concreteType:"NotifOptionSetOptionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"NotifOptionSetOptionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"NotifOption",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"client_info",storageKey:null,args:null,concreteType:null,plural:!1,selections:[i,z]},A,{kind:"LinkedField",alias:null,name:"option_display",storageKey:null,args:null,concreteType:null,plural:!1,selections:[i,B]},K]}]}]},K]}]}]};return{kind:"Request",fragment:{kind:"Fragment",name:"FacebookWebNotificationsSubscription",type:"Subscription",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"web_notification_receive_subscribe",storageKey:null,args:b,concreteType:"WebNotificationReceiveSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"aggregated_notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[c,d,e,f,g,j,k,l,m,n,h,o,v,w,x,C,D]},{kind:"LinkedField",alias:null,name:"notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[e,f,g,j,k,l,m,n,h,o,v,w,x,C,D]},E,F,{kind:"Condition",passingValue:!1,condition:"is_work_user",selections:[{kind:"LinkedField",alias:null,name:"pinned_conversation",storageKey:null,args:null,concreteType:"PinnedConversationNotification",plural:!1,selections:[G,H,I,{kind:"LinkedField",alias:null,name:"notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[e,k,n,J]}]}]}]}]},operation:{kind:"Operation",name:"FacebookWebNotificationsSubscription",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"web_notification_receive_subscribe",storageKey:null,args:b,concreteType:"WebNotificationReceiveSubscribeResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"aggregated_notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[c,d,e,f,g,j,k,l,m,n,h,o,p,w,x,s,D,K]},{kind:"LinkedField",alias:null,name:"notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[e,f,g,j,k,l,m,n,h,o,p,w,x,s,D,K]},E,F,{kind:"Condition",passingValue:!1,condition:"is_work_user",selections:[{kind:"LinkedField",alias:null,name:"pinned_conversation",storageKey:null,args:null,concreteType:"PinnedConversationNotification",plural:!1,selections:[G,H,I,{kind:"LinkedField",alias:null,name:"notification",storageKey:null,args:null,concreteType:"Notification",plural:!1,selections:[e,k,n,J,K]}]}]}]}]},params:{operationKind:"subscription",name:"FacebookWebNotificationsSubscription",id:"2854602441216492",text:null,metadata:{subscriptionName:"web_notification_receive_subscribe"}}}}();e.exports=a}),null);
__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){__p&&__p();if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(a,b){s.inform(a,{updates:b,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){var c=this;Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var d=babelHelpers["extends"]({},b,{payloadsource:p()});c.inform("update-notifications",d);c.inform("update-seen",d);c.inform("update-read",d);c.inform("update-hidden",d)})},getArbiter:function(){return n},inform:function(a,b){return n.inform(a,b)},subscribe:function(a,b){return n.subscribe(a,b)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1420844941369152"};b.getQueryID=function(){return"318967338567215"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c,d){__p&&__p();var e=document.getElementById("notificationsCountValue"),f=null;e&&(f=e.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});e=b("NotificationTokens").untokenizeIDs(a);a=j(e);a.seen=!0;f&&(a.badgeCount=f);c&&(a.source_view=c);d&&(a.classification=d);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BanzaiODS","BaseGraphQLSubscription","CurrentUser","StreamStateMachineConstants","SubscriptionsHandler","WebPixelRatio","qex","relay-runtime","FacebookWebNotificationsSubscription.graphql"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("StreamStateMachineConstants").events;b("relay-runtime").graphql;var j=b("qex")._("1243439")?"MAIN_SURFACE":"WEB_DESKTOP",k=[],l=null,m="www.notifications.lifecycle",n=0,o=!1,p=!1,q=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionName()+"/actor_id_"+a.actorID+"_environment_"+j};d.getQuery=function(){return h!==void 0?h:h=b("FacebookWebNotificationsSubscription.graphql")};d.getQueryParameters=function(a){return{input:{environment:j},is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}};return a}(b("BaseGraphQLSubscription"));function r(a){__p&&__p();a=Date.now()-a;if(a<6e4)return"1m";else if(a<3e5)return"5m";else if(a<9e5)return"15m";else if(a<18e5)return"30m";else if(a<36e5)return"1h";else return"1h+"}function s(a){__p&&__p();if(a.__type==="lifecycle_event"){var c=a.state;if(c===i.GQLS_STATE_TRANSIT_ON_CREATE){n=Date.now();return}if(o&&c===i.GQLS_STATE_TRANSIT_ON_ACTIVE){var d=i.GQLS_STATE_TRANSIT_ON_RESUME,e=r(n);b("BanzaiODS").bumpEntityKey(2966,m,d);p||(e!=null&&b("BanzaiODS").bumpEntityKey(2966,m,"first."+d+"."+e),p=!0);b("BanzaiODS").bumpEntityKey(2966,m,d+"."+e);return}b("BanzaiODS").bumpEntityKey(2966,m,c);if(c===i.GQLS_STATE_TRANSIT_ON_PAUSE){if(!o){o=!0;d=r(n);d!=null&&b("BanzaiODS").bumpEntityKey(2966,m,c+"."+d)}n=Date.now()}return}e=a.web_notification_receive_subscribe;if(e==null)return;b("BanzaiODS").bumpEntityKey(2966,m,"payload");var f=e.aggregated_notification,g=e.notification,h=e.pinned_conversation,j=e.should_play_sound,l=e.should_show_beeper;k.forEach(function(a){switch(a.event){case"NEW_BEEPER":g!=null&&l===!0&&a.callback({notification:g,should_play_sound:!!j});break;case"NEW_NOTIFICATION":f!=null&&a.callback(f);break;case"NEW_PINNED_CONVERSATION":h!=null&&a.callback(h);break}})}e.exports={subscribe:function(a){__p&&__p();k.push(a);l===null&&(l=new(b("SubscriptionsHandler"))(),l.addSubscriptions(q.subscribe({actorID:b("CurrentUser").getID()},s)));var c=!1;return{remove:function(){if(c===!0)return;l!=null||g(0,3589);c=!0;k.splice(k.indexOf(a),1);k.length===0&&(l.release(),l=null)}}}}}),null);