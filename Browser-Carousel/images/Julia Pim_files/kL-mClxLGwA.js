if (self.CavalryLogger) { CavalryLogger.start_js(["GIwvu"]); }

__d("CometTextWithEntitiesRelay_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Fragment",name:"CometTextWithEntitiesRelay_entity",type:"Entity",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"FragmentSpread",name:"ProfileCometProfileLink_actor",args:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[a]},{kind:"InlineFragment",type:"Group",selections:[a,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]}}();e.exports=a}),null);
__d("CometTextWithEntitiesRelay_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},b={kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},c={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"work_foreign_entity_info",storageKey:null,args:null,concreteType:"WorkForeignEntityInfo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"type",args:null,storageKey:null}]};return{kind:"Fragment",name:"CometTextWithEntitiesRelay_textWithEntities",type:"TextWithEntities",metadata:null,argumentDefinitions:[],selections:[{kind:"LinkedField",alias:null,name:"image_ranges",storageKey:null,args:null,concreteType:"ImageAtRange",plural:!0,selections:[a,b,{kind:"LinkedField",alias:null,name:"entity_with_image",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"scale",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null}]}]}]},{kind:"LinkedField",alias:null,name:"inline_style_ranges",storageKey:null,args:null,concreteType:"InlineStyleAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"inline_style",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"aggregated_ranges",storageKey:null,args:null,concreteType:"AggregatedEntitiesAtRange",plural:!0,selections:[a,b,{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"sample_entities",storageKey:null,args:null,concreteType:null,plural:!0,selections:[c,{kind:"InlineFragment",type:"User",selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null}]}]}]},{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c,d,{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"FragmentSpread",name:"ProfileCometProfileLink_actor",args:null},{kind:"InlineFragment",type:"ExternalUrl",selections:[{kind:"ScalarField",alias:null,name:"external_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"VideoTimeIndex",selections:[{kind:"ScalarField",alias:null,name:"time_index",args:null,storageKey:null}]},{kind:"InlineFragment",type:"Page",selections:[{kind:"ScalarField",alias:null,name:"category_type",args:null,storageKey:null}]},{kind:"InlineFragment",type:"User",selections:[e]},{kind:"InlineFragment",type:"Group",selections:[e,{kind:"ScalarField",alias:null,name:"work_official_status",args:null,storageKey:null}]}]},a,b]},{kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null}]}}();e.exports=a}),null);
__d("CometLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"CometLinkedEntityRenderer_entity",type:"Entity",metadata:{mask:!1},argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"url",args:[{kind:"Literal",name:"site",value:"www"}],storageKey:'url(site:"www")'},{kind:"FragmentSpread",name:"ProfileCometProfileLink_actor",args:null}]};e.exports=a}),null);
__d("ProfileCometProfileLink_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"ProfileCometProfileLink_actor",type:"Actor",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"ScalarField",alias:"profile_url",name:"url",args:null,storageKey:null}]};e.exports=a}),null);
__d("CometInteractionSourceContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(10);e.exports=c}),null);
__d("BaseText.react",["React","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React"),i=h.Fragment;function j(a){return[].concat(a).sort(function(a,b){return a.offset===b.offset&&(a.length===0||b.length===0)?a.length-b.length:a.offset-b.offset})}function k(a,b){return b!=null?b.reduce(function(a,b){return b(a)},a):a}function l(a,b,c,d,e,f){var g=a.__typename;e=Object.prototype.hasOwnProperty.call(e,g)?e[g].concat(f):f;return h.jsx(i,{children:e&&e.length>0?e.reduce(function(b,c){return c(b,a)},c):b},d)}function m(a,c,d,e,f,j,m,n,o){var p=m.length;j.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,c,d-c),n)},"c"+c+"_"+p));m.pop();m[m.length-1].subElements.push(l(e,j,j,c+"_"+p,f,o))}function a(a){__p&&__p();var c=a.ranges;c=c===void 0?[]:c;var d=a.renderers;d=d===void 0?{}:d;var e=a.transforms;e=e===void 0?[]:e;a=a.text;var f=0,n=Object.prototype.hasOwnProperty.call(d,"*")?d["*"]:[];c=j(c);var o=[{entity:{__typename:""},length:a.length,offset:0,subElements:[]}];for(var p=0;p<c.length;++p){if(f>=a.length)break;var q=c[p],r=q.entity,s=q.length;q=q.offset;var t=o[o.length-1],u=t.entity,v=t.length,w=t.offset;t=t.subElements;var x=w+v;while(x<=q&&o.length>1){m(a,f,x,u,d,t,o,e,n);f=x;var y=o[o.length-1];u=y.entity;v=y.length;w=y.offset;t=y.subElements;x=w+v}f<q&&(o[o.length-1].subElements.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,f,q-f),e)},"c"+f+"_"+o.length)),f=q);if(w<=q&&x>=q+s)o.push({entity:r,length:s,offset:q,subElements:[]});else{y=(g||(g=b("UnicodeUtils"))).substr(a,q,s);x=k(y,e);o[o.length-1].subElements.push(l(r,y,x,f+"_"+o.length,d,n));f=q+s}}while(o.length>1){r=o[o.length-1];var u=r.entity,v=r.length,w=r.offset;t=r.subElements;y=w+v;m(a,f,y,u,d,t,o,e,n);f=y}if(f<a.length){x=o[o.length-1].subElements;x.push(h.jsx(i,{children:k((g||(g=b("UnicodeUtils"))).substr(a,f),e)},"c"+f))}return o[o.length-1].subElements}e.exports=a}),null);
__d("getTextDirectionAttribute",["requireCond","cr:1080422"],(function(a,b,c,d,e,f){"use strict";function a(a){var c="auto";b("cr:1080422")!=null&&(c=b("cr:1080422").isDirectionRTL(a)?"rtl":"ltr");return c}e.exports=a}),null);
__d("CometTextWithEntities.react",["fbt","BaseText.react","CometLink.react","CometTrackingNodeProvider.react","React","UnicodeUtils","getTextDirectionAttribute","killswitch","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=b("React");c=b("React");var k=c.useCallback,l=c.useState,m=.6,n={auto:{textAlign:"start"},ltr:{textAlign:"left"},rtl:{textAlign:"right"}};function o(a){var b=[];for(var c=0;c<a.length;c++){var d=a[c];d!=null&&d.offset!=null&&d.length!=null&&d.entity!=null&&d.entity.__typename!=null&&b.push({entity:d.entity,length:d.length,offset:d.offset})}return b}function p(a,b,c){return a.map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-b})}).filter(function(a){return a.offset>=0&&a.offset<c})}function q(a){var c=a.ranges;a=a.text;var d=0;return a.split("\n").map(function(a){var e=p(c,d,(h||(h=b("UnicodeUtils"))).strlen(a));d+=h.strlen(a)+1;return{ranges:e,text:a}}).filter(function(a){return a.text.trim()!==""})}function r(a,c){__p&&__p();var d=a.ranges;a=a.text;var e=0;return a.split(/(?=\n\s*\n)/).map(function(a){var f,g;f=(f=a.match(/(^\n\s*\n)?([^]*$)/))!=null?f:[];g=(g=f[1])!=null?g:"";f=(f=f[2])!=null?f:a;g=p(d,e+g.length,(h||(h=b("UnicodeUtils"))).strlen(f));e+=h.strlen(a);return c?q({ranges:g,text:f}):{ranges:g,text:f}})}function s(a,c,d){var e=null,f=a.split("\n");(h||(h=b("UnicodeUtils"))).strlen(a)>c&&(e=c);if(f.length>d){a=f.slice(0,d).join("\n").length;e!==null?e=Math.min(a,e):e=a}return e}function a(a){__p&&__p();var c=a.maxLength;c=c===void 0?800:c;var d=a.maxLines;d=d===void 0?8:d;var e=a.ranges;e=e===void 0?[]:e;var f=a.text,q=a.truncationFactor_DEPRECATED;q=q===void 0?m:q;var t=a.truncationStyle;t=t===void 0?"none":t;var u=a.withLineBreaks;u=u===void 0?!1:u;var v=a.withParagraphs;v=v===void 0?!1:v;var w=a.onToggleExpanded,x=a.seeMoreLinkProps,y=a.expanded,z=a.preserveWhiteSpace,A=z===void 0?!1:z;z=a.suffix;var B=babelHelpers.objectWithoutPropertiesLoose(a,["maxLength","maxLines","ranges","text","truncationFactor_DEPRECATED","truncationStyle","withLineBreaks","withParagraphs","onToggleExpanded","seeMoreLinkProps","expanded","preserveWhiteSpace","suffix"]);a=l((a=y)!=null?a:!1);var C=a[0],D=a[1];a=y!=null?y:C;y=k(function(){D(function(a){return!a}),w!=null&&w()},[w]);C=o(e);e=f;var E=null;if(t!=="none"&&!a){c=s(f,c*q,d);if(c!=null){e=(h||(h=b("UnicodeUtils"))).substring(f,0,c);C=p(C,0,h.strlen(e));switch(t){case"ellipsis-only":E=j.jsx(j.Fragment,{children:g._("\u2026")},"seemore");break;case"see-more":case"see-more-and-less":E=j.jsxs(j.Fragment,{children:[g._("\u2026")," ",j.jsx(b("CometLink.react"),babelHelpers["extends"]({onClick:y,testid:void 0},x,{children:g._("See More")}))]},"seemore")}}}else t==="see-more-and-less"&&a&&(E=j.jsxs(j.Fragment,{children:[" ",j.jsx(b("CometLink.react"),{onClick:y,children:g._("See Less")})]},"seemore"));E=j.jsx(b("CometTrackingNodeProvider.react"),{trackingNode:44,children:E});if(!v)return j.jsxs(j.Fragment,{children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:C,text:e},B)),E]});var F=r({ranges:C,text:e},u);b("killswitch")("COMET_MESSAGE_EMPTY_PARAGRAPH_FILTERING")||(F=F.filter(function(a){return!Array.isArray(a)||a.length>0}));var G=z!=null?j.jsxs(j.Fragment,{children:[" ",z]}):null;return j.jsx(j.Fragment,{children:F.map(function(a,c){return j.jsx("div",{className:(i||(i=b("stylex"))).dedupe({"margin-top-1":"kvgmc6g5","margin-end-1":"cxmmr5t8","margin-bottom-1":"oygrvhab","margin-start-1":"hcukyx3x","word-wrap-1":"c1et5uql"},c!==0?{"margin-top-1":"o9v6fnle"}:null,A?{"white-space-1":"ii04i59q"}:null),children:Array.isArray(a)?a.map(function(d,e){var f=d.ranges;d=d.text;var g=b("getTextDirectionAttribute")(d);return j.jsxs("div",{dir:g,style:n[g],children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:f,text:d},B)),c===F.length-1&&e===a.length-1?j.jsxs(j.Fragment,{children:[E,G]}):null]},e)}):j.jsxs(j.Fragment,{children:[j.jsx(b("BaseText.react"),babelHelpers["extends"]({ranges:a.ranges,text:a.text},B)),c===F.length-1?j.jsxs(j.Fragment,{children:[E,G]}):null]})},c)})})}e.exports=a}),null);
__d("cometNormalizeTextEntityRanges",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a==null?[]:a.map(function(a){var c=a.length,d=a.offset;a=babelHelpers.objectWithoutPropertiesLoose(a,["length","offset"]);return{entity:babelHelpers["extends"]({},a,{__typename:b}),length:c,offset:d}})}e.exports=a}),null);
__d("CometTextWithEntitiesRelay.react",["CometRelay","CometTextWithEntities.react","React","cometNormalizeTextEntityRanges","CometTextWithEntitiesRelay_entity.graphql","CometTextWithEntitiesRelay_textWithEntities.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h;b("CometRelay").graphql;var i=b("CometRelay").useFragment,j=b("React");g!==void 0?g:g=b("CometTextWithEntitiesRelay_entity.graphql");function a(a){var c=a.textWithEntities;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities"]);c=i(h!==void 0?h:h=b("CometTextWithEntitiesRelay_textWithEntities.graphql"),c);var d=c.aggregated_ranges,e=c.image_ranges,f=c.inline_style_ranges,g=c.ranges;c=c.text;if(c==null)return null;g=[].concat(g,b("cometNormalizeTextEntityRanges")(d,"Aggregate"),b("cometNormalizeTextEntityRanges")(f,"Inline"),b("cometNormalizeTextEntityRanges")(e,"Image"));return j.jsx(b("CometTextWithEntities.react"),babelHelpers["extends"]({},a,{ranges:g,text:c}))}e.exports=a}),null);
__d("ProfileCometProfileLink.react",["CometLink.react","CometRelay","ProfileCometLinkContext","React","XCometContextualProfileControllerRouteBuilder","gkx","recoverableViolation","ProfileCometProfileLink_actor.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").useFragment,i=b("React");c=b("React");var j=c.useContext;function a(a,c){var d=h(g!==void 0?g:g=b("ProfileCometProfileLink_actor.graphql"),a.actor);a=a.children;var e=j(b("ProfileCometLinkContext"));e=e.groupID;if(d.id==null)return b("recoverableViolation")("Missing id for actor","comet_ui");e=e!=null&&b("gkx")("1183591")?b("XCometContextualProfileControllerRouteBuilder").buildURL({group_id:e,member_id:d.id}):d.profile_url;return i.jsx(b("CometLink.react"),{href:e,ref:c,children:a})}e.exports=i.forwardRef(a)}),null);
__d("CometLinkedEntityRenderer",["CometLink.react","CometRelay","ProfileCometProfileLink.react","React","CometLinkedEntityRenderer_entity.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("React");g!==void 0?g:g=b("CometLinkedEntityRenderer_entity.graphql");a=function(a,c){if(c.url==null)return a;return c.__typename==="User"?h.jsx(b("ProfileCometProfileLink.react"),{actor:c,ref:null,children:a}):h.jsx(b("CometLink.react"),{href:c.url,children:a})};e.exports=a}),null);
__d("XUIMenuSeparator.react",["MenuSeparator.react"],(function(a,b,c,d,e,f){a=b("MenuSeparator.react");e.exports=a}),null);
__d("RoundImage.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("joinClasses")(this.props.className,c.baseClassName);return h.jsx(b("Image.react"),babelHelpers["extends"]({},this.props,{className:a}))};return c}(h.Component);a.baseClassName="_2qgu";e.exports=a}),null);
__d("KeyframeAnimation",["invariant","CSS","ReactTransitionEvents","UserAgent","nullthrows","queryThenMutateDOM","uniqueID"],(function(a,b,c,d,e,f,g){__p&&__p();var h="KeyframeAnimation-",i="animation-";a=function(){"use strict";__p&&__p();function a(c){__p&&__p();this.$3=c;this.$8=!0;this.$5=new Map();this.$5.set("animation-name",h+b("uniqueID")());this.$4=new Map();if(!a.$1){c=document.createElement("style");b("nullthrows")(document.head).appendChild(c);c=b("nullthrows")(c.sheet);c instanceof CSSStyleSheet||g(0,920);a.$1=c;a.$2=new Map()}this.$9=b("UserAgent").isEngine("WebKit")?"-webkit-":""}var c=a.prototype;c.defineKeyframes=function(a){__p&&__p();a=Object.entries(a);for(var b=0;b<a.length;b++){var c=a[b],d=c[0];c=c[1];d=parseFloat(d,10);d>=0&&d<=100||g(0,921);var e="";for(var c=Object.entries(c).sort(),f=Array.isArray(c),h=0,c=f?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(f){if(h>=c.length)break;i=c[h++]}else{h=c.next();if(h.done)break;i=h.value}i=i;var j=i[0];i=i[1];e+=j+": "+i+";"}this.$4.set(d,e)}return this};c.defineKeyframe=function(a,b){__p&&__p();a=parseFloat(a,10);a>=0&&a<=100||g(0,921);var c="";for(var b=Object.entries(b).sort(),d=Array.isArray(b),e=0,b=d?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=b.length)break;f=b[e++]}else{e=b.next();if(e.done)break;f=e.value}f=f;var h=f[0];f=f[1];(h.substring(0,i.length)===i||h==="transform")&&(h=this.$9+h);c+=h+": "+f+";"}this.$4.set(a,c);return this};c.setDirection=function(a){this.$5.set("animation-direction",a);return this};c.setDuration=function(a){this.$5.set("animation-duration",a+"s");return this};c.setTimingFunction=function(a){this.$5.set("animation-timing-function",a);return this};c.setIterationCount=function(a){this.$5.set("animation-iteration-count",a+"");return this};c.setFillMode=function(a){this.$5.set("animation-fill-mode",a);return this};c.setAnimationDelay=function(a){this.$5.set("animation-delay",a+"s");return this};c.setFinishedCallback=function(a){this.$6=a;return this};c.setMemoize=function(a){this.$8=a;return this};c.start=function(){__p&&__p();var c=this;this.$5.has("animation-duration")||g(0,922);if(this.$7){this.restartAnimation();return}var d=this.$3,e=this.$10(),f=this.$11(e),h;if(this.$8&&a.$2.has(f)){var i=b("nullthrows")(a.$2.get(f));this.$5.set("animation-name",i);h=i}else a.$1.insertRule(e,a.$1.cssRules.length),h=b("nullthrows")(this.$5.get("animation-name")),this.$8&&a.$2.set(f,h);i=this.$12(h);(!this.$8||!a.$2.has(i))&&(a.$1.insertRule(i,a.$1.cssRules.length),this.$8&&a.$2.set(i,h));b("queryThenMutateDOM")(function(){},function(){c.$13(),b("CSS").addClass(d,h)})};c.restartAnimation=function(){var a=this.$3;b("CSS").removeClass(a,b("nullthrows")(this.$5.get("animation-name")));a.offsetWidth;this.$7=!1;b("CSS").addClass(a,b("nullthrows")(this.$5.get("animation-name")))};c.$13=function(){b("ReactTransitionEvents").addEndEventListener(this.$3,this.$14.bind(this))};c.$12=function(a){__p&&__p();var b="";b+="."+a+" {";for(var a=this.$5,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];b+=f+": "+e+";"}b+="}";return b};c.$10=function(){__p&&__p();var a=this.$5.get("animation-name"),c;b("UserAgent").isEngine("WebKit")?c="@-webkit-keyframes":c="@keyframes";c=c+" "+a+" {";for(var a=this.$4,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];c+=g+"% {"+f+"}"}return c+"}"};c.$14=function(){this.$7||(this.$6&&this.$6(this.$3),this.$7=!0)};c.$11=function(a){return a.substring(a.indexOf("{")+1).toLowerCase().replace(/\s+/g,"")};return a}();e.exports=a}),null);
__d("CSSAnimationBuilder",["KeyframeAnimation"],(function(a,b,c,d,e,f){a={keyframeAnimation:function(a){return new(b("KeyframeAnimation"))(a)}};e.exports=a}),null);
__d("VideoLink.react",["cx","Bootloader","Keys","React","URI","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a.preventDefault();var c=d.props,e=c.playerOrigin,f=c.playerSuborigin;c=d.props;var g=c.channelID,i=c.channelCaller,j=c.externalLogID,k=c.onClick,l=c.reactionVideoChannelType,m=c.reactionVideoChannelSubtype,n=c.upstreamPlayerSource,o=c.videoListID,p=new(h||(h=b("URI")))(d.props.href);d.props.referrer&&d.props.referrer==="video_home"&&(e="video_home",f=f?"page_timeline_"+f:"page_timeline_misc");b("Bootloader").loadModules(["TahoeController"],function(a){a.openFromVideoLink(p,{channelID:g,caller:i,externalLogID:j,origin:e,suborigin:f,reactionVideoChannelType:l,reactionVideoChannelSubtype:m,upstreamPlayerSource:n,videoListID:o})},"VideoLink.react");k&&k(a)},d.$2=function(a){a.keyCode==b("Keys").RETURN&&d.$1(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a;return i.jsx("span",babelHelpers["extends"]({},this.props,{href:this.props.href,onClick:this.$1,onKeyDown:this.$2,className:b("joinClasses")(this.props.className,"_3vwb _400z _2-40"),role:"button",tabIndex:(a=this.props.tabIndex)!=null?a:"0",children:this.props.children}))};return c}(i.Component);e.exports=a}),null);
__d("VideoWithClickPlayPause",["logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=this.$1.getVideoNode(),this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");if(this.$1.isState("playing")){if(this.$1.getOption("VideoWithLiveBroadcast","isLive")||a&&a.getOption("VideoWithLiveBroadcast","isLive")||this.$4()||this.$5())return;this.$1.pause("user_initiated")}else b("logVideosClickTracking")(this.$2),this.$1.play("user_initiated")};c.$4=function(){var a=this.$1.getOption("CommercialBreakVideoAdOverlay","videoController");a=a&&a.getOption("VideoWithInstreamVideo","controller");return a&&!a.getConfig().canPauseAdBreak};c.$5=function(){return this.$1.getOption("VideoWithInstreamVideo","disableClickToPause")};return a}();e.exports=a}),null);
__d("fetchStaticQuery",["RelayRuntime"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayRuntime").getRequest,h=b("RelayRuntime").__internal.getOperationVariables;function a(a,b,c,d){b=g(b);c=h(b.operation,c);return a.execute(b.params,c,d||{}).toPromise()}e.exports=a}),null);
__d("VideoComponent",["CurrentUser","ErrorBoundary.react","React","RelayFBNetwork","SubscriptionsHandler","fetchStaticQuery","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");function h(a){return a.displayName||a.name||"Component"}function a(a,c){__p&&__p();var d,e=c||{},f=e.observedVpcEvents||[],i=e.suppressMount||function(){return!1},j=h(a);return d=c=function(c){__p&&__p();babelHelpers.inheritsLoose(d,c);function d(a){__p&&__p();var b;b=c.call(this,a)||this;b.$7=function(){if(b.$2&&b.$2.length&&b.refs.component){var a={time:Date.now(),queuedEvents:b.$2};b.setState({vpcEventInfo:a});b.$2=[]}};b.state={video:null,user:null,vpcEventInfo:{time:0,queuedEvents:[]}};b.$2=[];return b}var h=d.prototype;h.render=function(){return this.$3()?null:g.jsx(b("ErrorBoundary.react"),{onHandleError:function(a,b){},children:g.jsx(a,babelHelpers["extends"]({ref:"component"},this.props,{vpcEventInfo:this.state.vpcEventInfo,video:this.state.video,user:this.state.user}))})};h.enable=function(a){__p&&__p();if(this.$3())return;this.vpc=a;this.$1=new(b("SubscriptionsHandler"))();this.$4(a);var c=this.refs.component;if(!c)return;if(!c.enable)throw new TypeError(j+" must implement enable(VideoPlayerController)");c.enable(a);this.$5(a.getVideoID(),e.videoGraphQLQuery)};h.disable=function(){if(this.$3())return;var a=this.refs.component;if(!a)return;if(!a.disable)throw new TypeError(j+" must implement disable()");a.disable();this.$1&&this.$1.release()};h.$3=function(){return i(this.props.videoData)};h.$5=function(a,c){var d=this;if(!a||!c)return;b("fetchStaticQuery")(b("RelayFBNetwork"),c,{videoID:a,userID:b("CurrentUser").getID()},{force:!0}).then(function(a){a=a.data;var b=a.video;a=a.user;d.vpc&&b&&d.refs.component&&b.id==d.vpc.getVideoID()&&d.setState({video:b});a&&d.refs.component&&d.setState({user:a})})};h.$4=function(a){__p&&__p();var b=this,c=function(){__p&&__p();if(e){if(g>=d.length)return"break";h=d[g++]}else{g=d.next();if(g.done)return"break";h=g.value}var c=h,f=a.addListener(c,function(){return b.$6(c)});b.$1.addSubscriptions(f)};for(var d=f,e=Array.isArray(d),g=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h,i=c();if(i==="break")break}};h.$6=function(a){this.$2.length||b("setImmediate")(this.$7),this.$2.push(a)};return d}(g.Component),c.displayName="VideoComponent("+j+")",d}e.exports={createContainer:a}}),null);
__d("FBOverlayBase.react",["React"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.render=function(){return g.Children.only(this.props.children)};return b}(g.Component);e.exports=a}),null);
__d("FBOverlayContainer.react",["cx","invariant","FBOverlayBase.react","FBOverlayElement.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("React");function a(a,c){return i.jsx("div",babelHelpers["extends"]({},a,{ref:c,className:b("joinClasses")(a.className,"_23n-"),children:a.children}))}c=i.forwardRef(a);c.propTypes={children:function(a,c){__p&&__p();a=a[c];var d=0;i.Children.forEach(a,function(a){if(a===null||a===void 0)return;switch(a.type){case b("FBOverlayBase.react"):d++;break;case b("FBOverlayElement.react"):break;default:h(0,435)}});d===1||h(0,436)}};e.exports=c}),null);
__d("XVanityURLController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/{vanity}/",{and:{type:"String"},filter:{type:"Int"},sk:{type:"String"},v:{type:"String"},vanity:{type:"String",required:!0},__xts__:{type:"StringVector"},__tn__:{type:"String"},redto:{type:"String"}})}),null);