if (self.CavalryLogger) { CavalryLogger.start_js(["GpeW8"]); }

__d("TextDelightPositioner",["cx","invariant","DOM","Style","ge"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=Object.freeze({ASPECT_FIT:0,ASPECT_FILL_WIDTH:1,ASPECT_FILL_HEIGHT:2,ASPECT_FILL:3,FIXED:4});a={makeAnimationContainer:function(a,c){a=b("DOM").create("div",{className:"_2alo"},c);c=b("DOM").create("div",{className:"_1yib"},a);return{wrapper:c,positioner:a}},positionAnimationContainer:function(a,c,d){__p&&__p();var e=a.wrapper;a=a.positioner;if(!d.containerType||d.containerType=="contentFrame"){var f=b("ge")("globalContainer");if(f){var g=getComputedStyle(f);b("Style").set(e,"top",f.offsetTop+"px");b("Style").set(e,"left",f.offsetLeft+"px");b("Style").set(e,"right",window.innerWidth-parseInt(g.getPropertyValue("width"),10)-f.offsetLeft+"px")}}else if(d.containerType==="storyFrame"){g=b("ge")("fbStoryContainer");if(g){f=g.getBoundingClientRect();(g=b("Style")).set(e,"top",f.top+"px");g.set(e,"bottom",window.innerHeight-f.height-f.top+"px");g.set(e,"left",f.left+"px");g.set(e,"right",window.innerWidth-f.width-f.left+"px")}}a||h(0,1990);g=parseInt(e.offsetWidth,10);f=parseInt(e.offsetHeight,10);e=c.getRenderer().getIntrinsicSize();var j=e[0];e=e[1];var k=d.anchorX,l=d.anchorY;d=d.scaling;d==i.ASPECT_FIT?d=j/e<=g/f?i.ASPECT_FILL_HEIGHT:i.ASPECT_FILL_WIDTH:d==i.ASPECT_FILL&&(d=j/e<=g/f?i.ASPECT_FILL_WIDTH:i.ASPECT_FILL_HEIGHT);var m=0,n=0,o=0,p=0;switch(d){case i.ASPECT_FILL_WIDTH:d=e*g/j;m=(f-d)*(1-l);n=0;o=0;p=(f-d)*l;c.getRenderer().setHeight(d);break;case i.ASPECT_FILL_HEIGHT:l=j*f/e;m=0;n=(g-l)*k;o=(g-l)*(1-k);p=0;c.getRenderer().setWidth(l);break;default:throw new Error("Unknown scaling enum.")}b("Style").set(a,"bottom",m+"px");b("Style").set(a,"left",n+"px");b("Style").set(a,"right",o+"px");b("Style").set(a,"top",p+"px")}};e.exports=a}),null);
__d("TextDelightAnimation",["CSS","TextDelightPositioner"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,c){this.$3=!1,this.$5=!0,this.$1=c,this.$4=a,this.$2=b("TextDelightPositioner").makeAnimationContainer(a,c.getElement())}var c=a.prototype;c.onComplete=function(a){this.$1.onRepeatEnd(function(b){!b&&a&&a()})};c.show=function(){this.$3&&(b("CSS").show(this.$2.wrapper),this.$3=!1),this.$6()};c.hide=function(){this.$3||(b("CSS").hide(this.$2.wrapper),this.$3=!0)};c.getRenderer=function(){return this.$1};c.getElement=function(){return this.$2.wrapper};c.needsReposition=function(){this.$5=!0,this.$3||this.$6()};c.$6=function(){this.$5&&(b("TextDelightPositioner").positionAnimationContainer(this.$2,this,this.$4),this.$5=!1)};return a}();e.exports=a}),null);
__d("DelightsTextTriggerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:DelightsTextTriggerLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.appid=a;return this};c.setAppversion=function(a){this.$1.appversion=a;return this};c.setCampaignID=function(a){this.$1.campaign_id=a;return this};c.setCommentAnimationEnabled=function(a){this.$1.comment_animation_enabled=a;return this};c.setCommentAnimationName=function(a){this.$1.comment_animation_name=a;return this};c.setCommentAnimationURL=function(a){this.$1.comment_animation_url=a;return this};c.setCommentAudioURL=function(a){this.$1.comment_audio_url=a;return this};c.setCommentEnabled=function(a){this.$1.comment_enabled=a;return this};c.setCommentHighlightEnabled=function(a){this.$1.comment_highlight_enabled=a;return this};c.setCommentTappingEnabled=function(a){this.$1.comment_tapping_enabled=a;return this};c.setCountry=function(a){this.$1.country=a;return this};c.setDidDownload=function(a){this.$1.did_download=a;return this};c.setDownloadSuccess=function(a){this.$1.download_success=a;return this};c.setDownloadURL=function(a){this.$1.download_url=a;return this};c.setDurationMs=function(a){this.$1.duration_ms=a;return this};c.setEntToken=function(a){this.$1.ent_token=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExceptionCode=function(a){this.$1.exception_code=a;return this};c.setExceptionMessage=function(a){this.$1.exception_message=a;return this};c.setExceptionTrace=function(a){this.$1.exception_trace=a;return this};c.setHighlightColor=function(a){this.$1.highlight_color=a;return this};c.setHighlightWeight=function(a){this.$1.highlight_weight=a;return this};c.setIsemployee=function(a){this.$1.isemployee=a;return this};c.setKeyword=function(a){this.$1.keyword=a;return this};c.setName=function(a){this.$1.name=a;return this};c.setPostAnimationEnabled=function(a){this.$1.post_animation_enabled=a;return this};c.setPostAnimationName=function(a){this.$1.post_animation_name=a;return this};c.setPostAnimationURL=function(a){this.$1.post_animation_url=a;return this};c.setPostAudioURL=function(a){this.$1.post_audio_url=a;return this};c.setPostEnabled=function(a){this.$1.post_enabled=a;return this};c.setPostHighlightEnabled=function(a){this.$1.post_highlight_enabled=a;return this};c.setPostTappingEnabled=function(a){this.$1.post_tapping_enabled=a;return this};c.setReactionKey=function(a){this.$1.reaction_key=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setTimeAlive=function(a){this.$1.time_alive=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={appid:!0,appversion:!0,campaign_id:!0,comment_animation_enabled:!0,comment_animation_name:!0,comment_animation_url:!0,comment_audio_url:!0,comment_enabled:!0,comment_highlight_enabled:!0,comment_tapping_enabled:!0,country:!0,did_download:!0,download_success:!0,download_url:!0,duration_ms:!0,ent_token:!0,event:!0,exception_code:!0,exception_message:!0,exception_trace:!0,highlight_color:!0,highlight_weight:!0,isemployee:!0,keyword:!0,name:!0,post_animation_enabled:!0,post_animation_name:!0,post_animation_url:!0,post_audio_url:!0,post_enabled:!0,post_highlight_enabled:!0,post_tapping_enabled:!0,reaction_key:!0,surface:!0,time:!0,time_alive:!0,weight:!0};e.exports=a}),null);
__d("TextDelightLoader",["Promise","Keyframes","TextDelightAnimation","TextDelightConfig","memoizeByReference"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("TextDelightConfig").animations,h=b("TextDelightConfig").campaigns;a="A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005\u3006\u3031-\u3035\u303b\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6e5\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";var i="(^|$|[^"+a+"])",j=b("memoizeByReference")(function(a){return new RegExp(i+"("+a.keywords.join("|").replace(/\\x{([A-Za-z0-9]+)}/g,function(a,b){return String.fromCharCode(parseInt(b,16))})+")"+i,"i")});function k(a){return Object.keys(h).map(function(a){return h[a]}).filter(function(b){return j(b).test(a)})}function l(a,b){a=h[a]&&h[a].surfaces[b];return a?g[a]:null}var m=b("memoizeByReference")(n);function n(a){return b("Keyframes").requestRenderer(a.uri,{projectName:"text_delights",assetID:a.id}).then(function(c){return new(b("TextDelightAnimation"))(a,c)})}c={load:function(a,c){var d=l(a,c);return d?m(d):b("Promise").reject("No animation for "+a+" surface "+c)},getCampaignRegex:j,findAndLoadKeywords:function(a,b){return k(a).map(function(a){return a.surfaces[b]}).filter(Boolean).map(function(a){return g[a]}).map(m)},getCampaigns:function(){return Object.keys(h).map(function(a){return h[a]})},clearCache:function(){m=b("memoizeByReference")(n)}};e.exports=c}),null);
__d("TextDelightInComposerMatcher",["DelightsTextTriggerTypedLogger","DraftModifier","EditorState","QE2Logger","SelectionState","TextDelightConfig","TextDelightInComposerGating","TextDelightInComposerLogger","TextDelightLoader","UnicodeUtils","URLMatcher","getHashtagRegex"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("TextDelightConfig").composerOptions;function i(a,c){if(!a.active)return[];var d=b("TextDelightLoader").getCampaignRegex(a),e,f=0,g=[];while((e=d.exec(c.substr(f)))!==null){var h=f+e.index+e[1].length;f=h+e[2].length;g.push({offset:h,length:e[2].length,campaignID:a.id,styles:a.styles,text:c.substr(h,e[2].length)})}return g}function j(a){return b("TextDelightLoader").getCampaigns().reduce(function(b,c){c=i(c,a);return[].concat(b,c)},[])}function k(a,c){new(b("DelightsTextTriggerTypedLogger"))().setEvent("delights_text_client_regex_matched").setCampaignID(a).setKeyword(c).log()}function l(a,c,d){b("QE2Logger").logExposureForUser(h.universe);k(d.entity.campaignID,d.entity.keyword);b("TextDelightInComposerLogger").regexMatched(d.entity.funnelKey,d.entity.campaignID,d.entity.keyword,d.entity.surface);a=a.createEntity("DELIGHT","MUTABLE",d.entity);var e=a.getLastCreatedEntityKey();return b("DraftModifier").applyEntity(a,new(b("SelectionState"))({anchorKey:c,anchorOffset:d.offset,focusKey:c,focusOffset:d.offset+d.length}),e)}function m(a,b,c){__p&&__p();for(var c=c,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;if(f.offset===a&&f.length===b-a)return!0}return!1}function n(a,c){return b("DraftModifier").applyEntity(a,c,null)}var o=b("getHashtagRegex")();function p(a){var b="";for(var c=0;c<a;c++)b+=" ";return b}function q(a){return a.replace(o,function(a,b,c,d,e,f){return p(a.length)})}function r(a){var c;while(c=b("URLMatcher").permissiveHostPathMatch(a))a=a.replace(c,p(c.length));return a}function s(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=!1);if(!a)return c;var h=a.getKey(),i=r(q(a.getText())),k=j(i);a.findEntityRanges(function(a){a=a.getEntity();return typeof a==="string"&&c.getEntity(a).getType()==="DELIGHT"},function(a,d){m(a,d,k)||(c=n(c,new(b("SelectionState"))({anchorKey:h,anchorOffset:a,focusKey:h,focusOffset:d})))});a=c.getBlockForKey(h);k.forEach(function(b){if(!g&&d.getFocusKey()===h&&b.offset+b.length>=a.getLength()&&b.offset+b.length===d.getFocusOffset())return;var i=b.offset;i=a.getEntityAt(i);if(i)return;i={campaignID:b.campaignID,keyword:b.text,styles:b.styles[f],disabled:!1,surface:f,funnelKey:e};c=l(c,h,{text:b.text,offset:b.offset,length:b.length,entity:i})});return c}function t(a,c){return c.map(function(c){return{offset:(g||(g=b("UnicodeUtils"))).substr(a,0,c.offset).length,length:g.substr(a,c.offset,c.length).length}})}function u(a,b,c,d){return j(a).map(function(e){return{text:e.text,offset:e.offset,length:e.length,entity:{campaignID:e.campaignID,keyword:e.text,styles:e.styles[b],disabled:!m(e.offset,e.offset+e.length,t(a,c)),surface:b,funnelKey:d}}})}a={addDelightsIntoEditorState:function(a,c,d,e,f){__p&&__p();if(!b("TextDelightInComposerGating").isEnabled(d))return e;if(!c)return e;b("TextDelightInComposerLogger").startFunnelInstance(f,d);a=u(a,d,c,f);a.sort(function(a,b){if(a.offset<b.offset)return-1;return a.offset>b.offset?1:0});d=e.getCurrentContent();c=0;f=d.getFirstBlock();for(var a=a,g=Array.isArray(a),h=0,a=g?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=a.length)break;i=a[h++]}else{h=a.next();if(h.done)break;i=h.value}i=i;while(f&&i.offset>c+f.getLength())c+=f.getLength()+1,f=d.getBlockAfter(f.getKey());if(!f)break;d=l(d,f.getKey(),Object.assign(i,{offset:i.offset-c}))}return b("EditorState").set(e,{currentContent:d})},matchLastWord:function(a,c,d){if(!b("TextDelightInComposerGating").isEnabled(d))return a;var e=a.getCurrentContent(),f=a.getSelection();e=s(e.getLastBlock(),e,f,c,d,!0);a=b("EditorState").set(a,{currentContent:e,selection:f});return a},applyTextDelightEntity:function(a,c,d,e){__p&&__p();if(!b("TextDelightInComposerGating").isEnabled(e))return a;b("TextDelightInComposerLogger").startFunnelInstance(d,e);var f=a.getCurrentContent();if(f===c.getCurrentContent())return a;c=a.getSelection();switch(a.getLastChangeType()){case"insert-fragment":var g=f.getBlockForKey(c.getEndKey());while(g)f=s(g,f,c,d,e,!1),g=f.getBlockBefore(g.getKey());break;case"split-block":g=f.getBlockBefore(c.getEndKey());g&&(f=s(g,f,c,d,e,!1));f=s(f.getBlockForKey(c.getEndKey()),f,c,d,e,!1);break;case"redo":case"undo":break;default:f=s(f.getBlockForKey(c.getEndKey()),f,c,d,e,!1);break}if(f===a.getCurrentContent())return a;a=b("EditorState").set(a,{currentContent:f,selection:c});return a}};e.exports=a}),null);
__d("AlbumMediaUploadUtils",["VideoUploadConfig"],(function(a,b,c,d,e,f){__p&&__p();a={isVideoFile:function(a){a=a.name;var c=b("VideoUploadConfig").videoExtensions;a=a.indexOf(".")!==-1?a.split(".").pop().toLowerCase():"";return c[a]},hasVideos:function(a){return this._filterVideos(a).length>0},_filterVideos:function(a){return this._filterFileOfSupportedType(a,b("VideoUploadConfig").videoExtensions)},_filterFileOfSupportedType:function(a,b){return a.filter(function(a){a=a.indexOf(".")!==-1?a.split(".").pop().toLowerCase():"";return b[a]})}};e.exports=a}),null);
__d("UploadSession",["invariant","AlbumMediaUploadUtils","AsyncRequest","FilePickerEvent","PhotosUploadWaterfall","SubscriptionsHandler","URI"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i={},j=function(){"use strict";__p&&__p();function a(a){this._sessionID=a,this._asyncBootstrapped=!1,this._controller=null,this._overlay=null,this._pickers=[],this._pendingPhotoFileLists=[],this._pendingVideoFileLists=[],this._beginLogged=!1,this._albumLimitWasExceeded=!1,this._sessionLimitWasExceeded=!1,this._subscriptions=new(b("SubscriptionsHandler"))()}var c=a.prototype;c.addFilePicker=function(a){__p&&__p();var c=this;this._pickers.includes(a)||(this._pickers.push(a),this._controller&&a.getSwfID&&a.getSwfID()&&(this._controller.preregisterSwf&&this._controller.preregisterSwf(a.getSwfID())),this._subscriptions.addSubscriptions(a.subscribe(b("FilePickerEvent").BEGIN,function(c,d){this._beginLogged||(this._beginLogged=!0,a.logWaterfallStep(b("PhotosUploadWaterfall").BEGIN),a.logStep("client_flow_begin"))}.bind(this)),a.subscribe(b("FilePickerEvent").SELECTED,function(c,d){__p&&__p();a.logStep("client_select_success",{volume:d.files.length});var e=[],f=[];d.files.forEach(function(a){b("AlbumMediaUploadUtils").isVideoFile(a)?e.push(a):f.push(a)});this._controller?(f.length>0&&this._controller.uploadFiles(f),this._videoController&&e.length>0&&this._videoController.uploadFiles(e)):(f.length>0&&this._pendingPhotoFileLists.push(f),e.length>0&&this._pendingVideoFileLists.push(e));if(this._asyncBootstrapped)return;c=a._button;var g=new(h||(h=b("URI")))(c.getAttribute("ajaxify"));g.addQueryData("num_selected",d.files.length);b("AsyncRequest").bootstrap(g.toString(),c,!0);this._asyncBootstrapped=!0}.bind(this)),a.subscribe(b("FilePickerEvent").SELECT_START,function(){a.logStep("client_select_begin")}.bind(this)),a.subscribe(b("FilePickerEvent").SELECT_CANCELED,function(){a.logStep("client_select_cancel"),this._overlay||(a.logStep("client_flow_cancel"),this._beginLogged=!1)}.bind(this)),a.subscribe(b("FilePickerEvent").ALBUM_LIMIT_EXCEEDED,function(){c._controller?c._controller.albumLimitExceeded():c._albumLimitWasExceeded=!0}),a.subscribe(b("FilePickerEvent").SESSION_LIMIT_EXCEEDED,function(){c._controller?c._controller.sessionLimitExceeded():c._sessionLimitWasExceeded=!0})))};c.addController=function(a,c){__p&&__p();this._controller=a;this._videoController=c;this._asyncBootstrapped=!0;a=this._controller.getWaterfallID?this._controller.getWaterfallID():this._controller.getWaterfallConfig().waterfallID;c=this._controller.getUploaderApp?this._controller.getUploaderApp():this._controller.getWaterfallConfig().waterfallApp;this._beginLogged||(this._beginLogged=!0,b("PhotosUploadWaterfall").sendSignal({qn:a,step:b("PhotosUploadWaterfall").BEGIN,uploader:c}));if(this._pendingPhotoFileLists.length>0||this._pendingVideoFileLists.length>0){var d=[],e=[];this._pendingVideoFileLists.forEach(function(a){e=e.concat(a)});this._pendingPhotoFileLists.forEach(function(a){d=d.concat(a)});d.length>0&&this._controller.uploadFiles(d);e.length>0&&this._videoController.uploadFiles(e)}else b("PhotosUploadWaterfall").sendSignal({qn:a,step:b("PhotosUploadWaterfall").OVERLAY_FIRST,uploader:c});this._albumLimitWasExceeded&&this._controller.albumLimitExceeded();this._sessionLimitWasExceeded&&this._controller.sessionLimitExceeded()};c.addOverlay=function(a){this._overlay=a};c.addOverlayAndController=function(a,b){this.addOverlay(a),this.addController(b,null)};c.getFilePickers=function(){return this._pickers};c.cleanup=function(){this._subscriptions&&this._subscriptions.release()};a.addFilePickerToSession=function(a,b){k(a).addFilePicker(b)};a.addControllerToSession=function(a,b,c){k(a).addController(b,c)};a.addOverlayToSession=function(a,b){k(a).addOverlay(b)};a.addOverlayAndControllerToSession=function(a,b,c){k(a).addOverlayAndController(b,c)};a.restartSessionPersistingFilePickers=function(b){var c=k(b),d=new a(b);c.getFilePickers().forEach(function(a){d.addFilePicker(a)});l(b,d)};return a}();function k(a){i[a]||(i[a]=new j(a));return i[a]}function l(a,b){i[a]||g(0,6106),i[a].cleanup(),delete i[a],i[a]=b}e.exports=j}),null);