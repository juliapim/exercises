if (self.CavalryLogger) { CavalryLogger.start_js(["1Vy3S"]); }

__d("ReactComposerContextConfig",["ReactComposerContextTypes","prop-types"],(function(a,b,c,d,e,f){e.exports=b("prop-types").shape(b("ReactComposerContextTypes"))}),null);
__d("XFamilyMentionsNUXDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/family_mentions/nux_dialog/",{__asyncDialog:{type:"Int"}})}),null);
__d("FamilyRelationshipMentions",["AsyncDialog","AsyncRequest","FamilyMentionsData","XFamilyMentionsNUXDialogController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){__p&&__p();var a={},c=!1;a.shouldShowNUX=function(a){if(b("FamilyMentionsData").hasAcceptedNUX||c)return!1;var d=a.family_names;if(d==void 0)return!1;for(var e=0;e<d.length;e++)if(d[e]==a.text)return!0;return!1};a.showNUX=function(a,d){var e=b("XFamilyMentionsNUXDialogController").getURIBuilder().getURI();b("AsyncDialog").send(new(b("AsyncRequest"))(e),function(e){e.subscribe("cancel",function(){a.text=a.default_name,new(b("AsyncRequest"))().setURI("/ajax/family_mentions/deny_nux").send(),d(a)}),e.subscribe("confirm",function(){c=!0,new(b("AsyncRequest"))().setURI("/ajax/family_mentions/confirm_nux").send(),d(a),e.finishHide()})})};return a}();e.exports=a}),null);
__d("TypeaheadBestName",["FamilyMentionsData","TokenizeUtil"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._typeahead=a}var c=a.prototype;c.enable=function(){var a=this._typeahead.getView(),b=this._getAvailableAlternateNameFields();this._subscription=a.subscribe("beforeRender",function(a,c){a=c.value;for(var d=0;d<c.results.length;++d){var e=c.results[d],f=this._getNameToDisplay(e,a,b);f!==null&&(e.text=f,Object.prototype.hasOwnProperty.call(e,"default_name")&&e.text!==e.default_name?e.subtext=e.default_name:e.subtext=null)}}.bind(this))};c.disable=function(){this._typeahead.getView().unsubscribe(this._subscription),this._subscription=null};c._getNameToDisplay=function(a,c,d){__p&&__p();if(Object.prototype.hasOwnProperty.call(a,"default_name")&&b("TokenizeUtil").isQueryMatch(c,a.default_name))return a.default_name;for(var e=0;e<d.length;e++){var f=a[d[e]];if(f==void 0)continue;for(var g=0;g<f.length;g++){var h=f[g];if(b("TokenizeUtil").isQueryMatch(c,h))return h}}return Object.prototype.hasOwnProperty.call(a,"default_name")?a.default_name:null};c._getAvailableAlternateNameFields=function(){var a=["alternate_names"];b("FamilyMentionsData").allowFamilyNames&&a.push("family_names");return a};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("legacy:BestNameTypeaheadBehavior",["TypeaheadBestName"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.buildBestAvailableNames=function(a){a.enableBehavior(b("TypeaheadBestName"))}}),3);
__d("MentionsInputMatchers",[],(function(a,b,c,d,e,f){__p&&__p();a=["@","\\uff20"].join("");var g=["#","\\uFF03"].join("");b=".,+*?$|#{}()\\^\\-\\[\\]\\\\/!%'\"~=<>_:;\n\r";c=b.replace("#","")+"&";var h="\u200b";d=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b,this.$3()}var b=a.prototype;b.$3=function(){var a=this.$4(this.$2),b=this.$5(this.$1,this.$2);b=this.$6(this.$1,b);var c=this.$7(a,b);a=this.$8(a);this.$9=new RegExp("["+this.$1+"]$");this.$10=new RegExp(b+"$");this.$11=new RegExp(a+"$");this.$12=new RegExp(c+"$");this.$13=new RegExp("["+g+"]")};b.$4=function(a){return"\\b[A-Z][^ A-Z"+a+h+"]"};b.$5=function(a,b){return"(?:[^"+a+b+"]|["+b+"][^ "+b+"])"};b.$6=function(a,b){return"(?:^|\\s)(["+a+"]("+b+"{0,20}))"};b.$7=function(a,b){return"(?:(?:^|[^#])("+a+"+)|"+b+")"};b.$8=function(a){return"(?:"+a+"{4,})"};b.getMainMatcher=function(){return this.$10};b.getTriggerMatcher=function(){return this.$9};b.getAutoMatcher=function(){return this.$12};b.getHashtagMatcher=function(){return this.$13};return a}();f="\\b[A-Z][^ A-Z"+b+"]";a={mentionsMatchers:new d(a,b),hashtagMatchers:new d(g,c),userMatcher:new RegExp("(?:"+f+"{4,})$")};e.exports=a}),null);
__d("htmlize",["htmlSpecialChars"],(function(a,b,c,d,e,f){function a(a){return b("htmlSpecialChars")(a).replace(/\r\n|[\r\n]/g,"<br/>")}e.exports=a}),null);
__d("MentionsInput",["cx","Arbiter","ArbiterMixin","Bootloader","CSS","DataStore","DOM","Event","FbtResultBase","FlipDirection","Input","InputSelection","Keys","MentionsInputMatchers","Parent","Style","TokenizeUtil","UserAgent_DEPRECATED","htmlize","mixin","removeFromArray"],(function(a,b,c,d,e,f,g){__p&&__p();var h="\u200b",i=new RegExp(h,"g"),j=function(a){return a+h},k=function(a){return a.replace(/(@+)(\[[0-9]+\:([^\]]|\\\])*\]+)/g,"$1 $2")},l=/[\\\]:]/g,m={MENTIONS:"mentions",HASHTAGS:"hashtags"};function n(a,b){return a.replace(b," ".repeat(b.length))}function o(a,b){return a.substring(0,b)+a.substring(b+1)}function p(a){var b=a.lastIndexOf(">");if(b>=0){b=a.indexOf(" ",b);return b>=0?a.substr(0,b+1):a}else return""}function q(a,b,c){a=c.lastIndexOf("<",b)>c.lastIndexOf(">",b);return a?" ":"&nbsp;<wbr />"}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f,g,h){__p&&__p();var i;i=a.call(this)||this;b("DataStore").set(c,"MentionsInput",babelHelpers.assertThisInitialized(i));i._root=c;i._typeahead=d;i._input=e;i._offsets=[];c=null;var j=i.init.bind(babelHelpers.assertThisInitialized(i),f,g,h);try{c=document.activeElement===i._input}catch(a){}if(c)setTimeout(j,0);else var k=b("Event").listen(i._input,"focus",function(){setTimeout(j,0),k.remove()});i._hasHashtags=f.hashtags;i._mentionsDataSource=i._typeahead.getData();i._currentDataSource=i._mentionsDataSource;i._autoSuggestPages=f.autosuggest_pages;i._lastHighlighterHTML="";i._hashtags=[];i._matchers=b("MentionsInputMatchers").mentionsMatchers;i._matchersMode=m.MENTIONS;return i}var d=c.prototype;d.init=function(a,c,d){__p&&__p();if(this._initialized)return;this._initValue=c?c.value:"";this._highlighter=b("DOM").find(this._root,".highlighter");this._highlighterInner=this._highlighter.firstChild;this._highlighterContent=b("DOM").find(this._root,".highlighterContent");this._hiddenInput=b("DOM").find(this._root,".mentionsHidden");this._placeholder=this._input.getAttribute("placeholder")||"";this._metrics=d;if(!this._hiddenInput.name){a=this._input.name;this._input.name=a+"_text";this._hiddenInput.name=a}this._initEvents();this._initTypeahead();c===null?this._setup():this.reset(c);this.inform("init",null,"state");this._initialized=!0};d._setup=function(){this._mentioned={},this._orderedUIDs=[],this._numMentioned=0,this._filterData=null,this._highlighterContent&&b("DOM").empty(this._highlighterContent),this._highlighterAuxContent&&b("DOM").remove(this._highlighterAuxContent),this._highlighterAuxContent=null,b("Input").setPlaceholder(this._input,this._placeholder),b("Style").set(this._typeahead.getElement(),"height","auto")};d.reset=function(a){__p&&__p();this._setup();var c=a&&a.value||"";this._value=c;this._hiddenInput&&(this._hiddenInput.value=c);this._input&&a&&b("Input").setValue(this._input,a.value);a=a&&a.mentions;if(a&&a.length){var d=[];a.forEach(function(a){d.push(a.offset+a.length),delete a.offset,delete a.length,this._addToken(a)},this);d.reverse().forEach(function(a){c=c.substring(0,a)+h+c.substring(a)})}b("Input").setValue(this._input,c);this._value===""&&b("FlipDirection").setDirection(this._input);this._update()};d.getValue=function(){return b("Input").getValue(this._input).replace(i,"")};d._getMarkedValue=function(){return b("Input").getValueRaw(this._input)};d.getRawValue=function(){this._update();return b("Input").getValue(this._hiddenInput)};d.checkValue=function(){var a=this._typeahead.getCore().getValue();(this._matchers.getTriggerMatcher().exec(a)||a==="")&&this.inform("sessionEnd",{})};d.getTypeahead=function(){return this._typeahead};d.hasChanges=function(){return!b("Input").isEmpty(this._input)&&this._input.value!==this._initValue&&this._initialized};d.focus=function(){this._input.focus()};d._initEvents=function(){var a=this._update.bind(this);b("Event").listen(this._input,{input:a,keyup:a,change:a,blur:this._handleBlur.bind(this),focus:this._handleFocus.bind(this),keydown:this._handleKeydown.bind(this)});this._metrics&&(this._metrics.init(this._typeahead),this._metrics._reset(),this._metrics.bindSessionStart(this._typeahead,"render",!0),this._metrics.bindSessionEnd(this._typeahead.getView(),"select",!0),this._metrics.bindSessionEnd(this,"sessionEnd",!1),b("Event").listen(this._input,"keyup",function(a){setTimeout(this.checkValue.bind(this),0)}.bind(this)))};d._initTypeahead=function(){__p&&__p();this._typeahead.subscribe("select",function(a,b){a=b.selected;this._addToken({uid:a.uid,text:a.text,type:a.type,weakreference:a.weak_reference});this.updateValue()}.bind(this));var a=this._input,c=null;function d(){c===null&&(c=b("Input").getSubmitOnEnter(a),b("Input").setSubmitOnEnter(a,!1))}function e(){c!==null&&(b("Input").setSubmitOnEnter(a,c),c=null)}this._typeahead.subscribe("reset",e);this._typeahead.subscribe("render",d);this._typeahead.subscribe("highlight",function(a,b){b.index>=0?d():e()});this._typeahead.subscribe("query",function(){this._filterData=null}.bind(this));var f=this._typeahead.getCore();f.suffix=h;this._handleFocus()};d._handleBlur=function(){this._filterToken&&(this._filterToken.remove(),this._filterToken=null)};d._handleFocus=function(){this._filterToken||(this._filterToken=this._typeahead.getData().addFilter(this._filterResults.bind(this))),this._updateWidth()};d._handleKeydown=function(a){var c=a.keyCode;(c==b("Keys").BACKSPACE||c==b("Keys").DELETE)&&this._handleBackspaceAndDelete(a,c);(c==b("Keys").LEFT||c==b("Keys").RIGHT)&&setTimeout(this._handleLeftAndRight.bind(this,c),10)};d._handleLeftAndRight=function(a){var c=this._getMarkedValue(),d=b("InputSelection").get(this._input),e=d.start;d=d.end;var f=a==b("Keys").LEFT;a=a==b("Keys").RIGHT;if(e==d){var g=f?-1:1;c.charAt(e)==h&&b("InputSelection").set(this._input,e+g)}else f&&c.charAt(e)==h?b("InputSelection").set(this._input,e-1,d):f&&c.charAt(d)==h?b("InputSelection").set(this._input,e,d-1):a&&c.charAt(d)==h?b("InputSelection").set(this._input,e,d+1):a&&c.charAt(e)==h&&b("InputSelection").set(this._input,e+1,d)};d._handleBackspaceAndDelete=function(a,c){__p&&__p();var d=b("InputSelection").get(this._input),e=!1;if(d.start!==d.end)if(this._offsetIsInsideMention(d.start+1)&&this._offsetIsInsideMention(d.end))e=c===b("Keys").BACKSPACE;else return;c=c===b("Keys").DELETE?1:-1;c=c+(e?d.end:d.start);e=this._getMarkedValue();d=e;for(var f=0;f<this._orderedUIDs.length;++f){var g=this._mentioned[this._orderedUIDs[f]],h=g.text,i=j(h),k=d.indexOf(i),l=k+i.length;if(c<k||c>=l){d=n(d,i);continue}var m,o;g.type!="user"?(m=0,o=[h]):(m=i.substring(0,c-k).split(" ").length-1,o=h.split(" "));i=o.splice(m,1)[0];h=o.join(" ");o=m===0?k:l-i.length-1;h?(g.text=h,h=j(h)):this._removeToken(g.uid);m=e.substring(0,k)+h+e.substring(l);b("Input").setValue(this._input,m);b("InputSelection").set(this._input,o);this._update();a.kill();break}};d._offsetIsInsideMention=function(a){for(var b=0;b<this._offsets.length;b++)if(a>this._offsets[b][0]&&a<=this._offsets[b][1])return!0;return!1};d._filterResults=function(a){__p&&__p();if(this._filterData===null){var c=b("InputSelection").get(this._input).start;if(this._offsetIsInsideMention(c)){this._filterData={caretIsInsideMention:!0};return!1}c=this._typeahead.getCore();this._filterData={value:c.getValue(),rawValue:c.getRawValue()}}if(this._filterData.caretIsInsideMention)return!1;if(this._matchers.getMainMatcher().test(this._filterData.rawValue))return!0;if(a.type!="user"&&!a.connected_page)return!1;if(a.disable_autosuggest)return!1;return this._matchersMode===m.MENTIONS&&b("MentionsInputMatchers").userMatcher.test(this._filterData.value)?!0:b("TokenizeUtil").isExactMatch(this._filterData.value,this._typeahead.getData().getTextToIndex(a))};d._addToken=function(a){__p&&__p();var b=a.uid;if(!Object.prototype.hasOwnProperty.call(this._mentioned,b)){this._mentioned[b]=a;a=this._orderedUIDs;var c=k(this._getMarkedValue()),d=c.indexOf(j(this._mentioned[b].text)),e=!1,f=0;for(var g=0;g<a.length;++g){var h=j(this._mentioned[a[g]].text),i=c.indexOf(h,f);f=i+h.length;if(d<i){this._orderedUIDs.splice(g,0,b);e=!0;break}}e||this._orderedUIDs.push(b);this._numMentioned++;this._update()}};d._removeToken=function(a){Object.prototype.hasOwnProperty.call(this._mentioned,a)&&(delete this._mentioned[a],b("removeFromArray")(this._orderedUIDs,a),this._numMentioned--,this._update())};d._update=function(a){__p&&__p();a||({});a=this._getMarkedValue();this._checkShouldSwapDataSource(a);if(a==this._value)return;this._value=a;this._updateTypeahead();this._updateMentions();this._updateWidth();setTimeout(this._updateDirection.bind(this),0);this.updateValue();var b=this.hasAuxContent(),c=this._hiddenInput.value;this.inform("valueUpdate",{value:a,hasAuxContent:b,textWithMentions:c})};d._updateMentions=function(){__p&&__p();this._offsets=[];var a=this._getMarkedValue(),c=a;for(var d=0;d<this._orderedUIDs.length;++d){var e=this._orderedUIDs[d],f=j(this._mentioned[e].text),g=c.indexOf(f);g==-1&&this._removeToken(e);c=n(c,f);this._offsets.push([g,g+f.length])}e=a;while((g=c.indexOf(h))>-1)e=o(e,g),c=o(c,g);if(a!==e){f=b("InputSelection").get(this._input);b("Input").setValue(this._input,e);b("InputSelection").set(this._input,f.start);this._value=e}};d._renderHashtags=function(a){__p&&__p();this._initHashtagParser(a);if(!this._hasHashtags||!this._hashtagParser)return b("htmlize")(a);this._hashtags=this._hashtagParser.parse(a);var c=[],d=0;for(var e=0;e<this._hashtags.length;e++){var f=this._hashtags[e];c.push(b("htmlize")(a.substring(d,f.rawOffset)),"<b>",f.marker,f.tag,"</b>");d=f.rawOffset+f.marker.length+f.tag.length}c.push(b("htmlize")(a.substring(d)));return c.join("")};d.updateValue=function(){__p&&__p();var a=this._value=this._getMarkedValue(),c=this._orderedUIDs,d=k(a);for(var e=0;e<c.length;++e){var f="@["+c[e]+":]",g=j(this._mentioned[c[e]].text);d=d.replace(g,f);a=a.replace(g,f)}g=this._renderHashtags(a);for(var e=0;e<c.length;++e){f=c[e];a=this._mentioned[f];var h=a.text;a=a.weakreference?'<b class="weak">':"<b>";g=g.replace("@["+f+":]",a+b("htmlize")(j(h))+"</b>");h=h.replace(l,function(a){return"\\"+a});d=d.replace("@["+f+":]","@["+f+":"+h+"]")}a=p(g);(this._highlighterAuxContent||a!==this._lastHighlighterHTML)&&(b("UserAgent_DEPRECATED").ie()<9&&(g=g.replace(/ /g,q)),this._highlighterContent.innerHTML=g,this._updateHighlighter(),this._lastHighlighterHTML=a);this._hiddenInput.value=d;this._updateHeight()};d._updateDirection=function(){var a=b("Style").get(this._input,"direction");if(a==this._dir)return;this._dir=a;b("Style").set(this._highlighter,"direction",a);a=="rtl"?b("Style").set(this._highlighter,"text-align","right"):b("Style").set(this._highlighter,"text-align","left")};d._updateWidth=function(){var a=this._input.offsetWidth;if(a===this._lastInputWidth)return;this._lastInputWidth=a;var c=b("Style").getFloat.bind(null,this._input);a=a-c("paddingLeft")-c("paddingRight")-c("borderLeftWidth")-c("borderRightWidth");this._highlighterInner.style.width=Math.max(a,0)+"px"};d._updateHeight=function(){if(this._highlighterAuxContent){var a=this._highlighter.offsetHeight,c=this._typeahead.getElement();a>c.offsetHeight&&(this._typeahead.setHeight(a),b("Arbiter").inform("reflow"))}};d._updateTypeahead=function(){var a=this._typeahead.getCore();a.matcher=this._matchers.getAutoMatcher();a.setExclusions(this._orderedUIDs);this.inform("update",{mentioned:this._mentioned})};d.setPlaceholder=function(a){this._placeholder=a instanceof b("FbtResultBase")?a.toString():a,this.hasAuxContent()||b("Input").setPlaceholder(this._input,this._placeholder)};d._updateHighlighter=function(){this._highlighterContent&&b("CSS").conditionShow(this._highlighterContent,this._numMentioned>0||this.hasAuxContent()||this._hashtags.length)};d.setAuxContent=function(a){this._highlighterContent&&(this._highlighterAuxContent||(this._highlighterAuxContent=b("DOM").create("span",{className:"highlighterAuxContent"}),b("DOM").insertAfter(this._highlighterContent,this._highlighterAuxContent)),b("DOM").setContent(this._highlighterAuxContent,a),a?b("Input").setPlaceholder(this._input,""):b("Input").setPlaceholder(this._input,this._placeholder),this._value=null,this._update(),this._updateHighlighter(),this._updateHeight())};d.hasAuxContent=function(){var a=this.getAuxContentRoot();return a&&b("CSS").shown(a)&&a.innerHTML.length>0};d.getAuxContentRoot=function(){return this._highlighterAuxContent};d.addMention=function(a,c){c=typeof c==="undefined"?!0:c;c=c===!1?"":" ";var d=this._getMarkedValue();d!==""&&(d+=" ");b("Input").setValue(this._input,d+j(a.text)+c);this._addToken(a);this._update()};d.getMentions=function(){return this._mentioned};d.bootloadHashtagParser=function(){this._hashtagParser||b("Bootloader").loadModules(["HashtagParser"],function(a){this._hashtagParser=a,this._initialized&&(this._value=null,this._update())}.bind(this),"MentionsInput")};c.getInstance=function(a){a=b("Parent").byClass(a,"uiMentionsInput");return a?b("DataStore").get(a,"MentionsInput"):null};d._checkShouldSwapDataSource=function(a){this._initHashtagParser(a)};d._initHashtagParser=function(a){if(this._hashtagParser)return;this._matchers.getHashtagMatcher().exec(a)&&this.bootloadHashtagParser()};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("legacy:MentionsInput",["MentionsInput"],(function(a,b,c,d,e,f){a.MentionsInput=b("MentionsInput")}),3);
__d("MentionsTypeaheadAreaView",["ContextualTypeaheadView","FamilyRelationshipMentions","Parent"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getContext=function(){return b("Parent").byClass(this.element,"uiMentionsInput")};d.shouldValidateTypeaheadSelection=function(a){return b("FamilyRelationshipMentions").shouldShowNUX(a)};d.validateTypeaheadSelection=function(a,c){b("FamilyRelationshipMentions").showNUX(a,c)};return c}(b("ContextualTypeaheadView"));e.exports=a}),null);
__d("TypeaheadAreaCore",["InputSelection","TextAreaControl","TypeaheadCore","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.matcher=new RegExp(b.matcher+"$");b.preventFocusChangeOnTab=!0;return b}var d=c.prototype;d.select=function(c){a.prototype.select.call(this,c);var d=this.element.value;c=this.prefix+c.text+this.suffix;this.expandBounds(d,c);var e=d.substring(0,this.start);d=d.substring(this.end);this.element.value=e+c+d;b("InputSelection").set(this.element,e.length+c.length)};d.expandBounds=function(a,b){__p&&__p();a=a.toLowerCase();b=b.toLowerCase();var c,d,e,f,g=/\s/;d=a.substring(this.start,this.end);e=b.indexOf(d);c=this.start;while(c>=0&&e>=0)f=a.charAt(c-1),(!f||g.test(f))&&(this.start=c),d=f+d,e=b.indexOf(d),c--;d=a.substring(this.start,this.end);e=b.indexOf(d);c=this.end;while(c<=a.length&&e>=0)f=a.charAt(c),(!f||g.test(f))&&(this.end=c),d=d+f,e=b.indexOf(d),c++};d.getRawValue=function(){var c=b("InputSelection").get(this.element).start||0;return a.prototype.getValue.call(this).substring(0,c)};d.getValue=function(){__p&&__p();var a=this.matcher&&this.matcher.exec(this.getRawValue());if(!a)return"";var b=a[0],c=a.index+b.length;b=b.replace(/^\s/,"");var d=b.length;b=b.replace(/\s$/,"");b=d-b.length;this.start=c-d;this.end=c+b;return a[2]&&(a[2].charAt(0)==="#"||a[2].charAt(0)==="\\uFF03")?a[2]:a[3]||a[1]||a[0]};d.updateHeight=function(){var a=b("TextAreaControl").getInstance(this.element);a.updateHeight()};return c}(b("TypeaheadCore"));Object.assign(a.prototype,{prefix:"",suffix:", ",matcher:"\\b[^,]*",click:b("emptyFunction")});e.exports=a}),null);
__d("TypeaheadHoistFriends",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._typeahead=a}var b=a.prototype;b.enable=function(){var a=this._typeahead.getView();this._subscription=a.subscribe("beforeRender",function(a,b){a=[];var c=[],d=[];for(var e=0;e<b.results.length;++e){var f=b.results[e];f.type=="header"?(d=d.concat(c,a),d.push(f),c=[],a=[]):f.type=="user"&&f.bootstrapped?c.push(f):a.push(f)}b.results=d.concat(c,a)})};b.disable=function(){this._typeahead.getView().unsubscribe(this._subscription),this._subscription=null};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("legacy:HoistFriendsTypeaheadBehavior",["TypeaheadHoistFriends"],(function(a,b,c,d,e,f){a.TypeaheadBehaviors||(a.TypeaheadBehaviors={}),a.TypeaheadBehaviors.hoistFriends=function(a){a.enableBehavior(b("TypeaheadHoistFriends"))}}),3);
__d("TypeaheadMetrics",["AsyncRequest","Event","QueriesHistory","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a=function(){"use strict";__p&&__p();function a(a){this.extraData={},Object.assign(this,a)}var c=a.prototype;c.init=function(a){this.init=b("emptyFunction"),this._initImpl(a)};c._initImpl=function(a){this.core=a.getCore(),this.view=a.getView(),this.data=a.getData(),this.queriesHistory=new(b("QueriesHistory"))(g),this.stats={},this.sessionActive=!1,this._sessionStartEvents=[],this._sessionEndEvents=[],this._reset(),this.initEvents()};c._reset=function(){this.log=[],this.stats={},this.avgStats={},this.sessionActive=!1,this._setSid(Math.floor(Date.now()*Math.random())),this.request_ids=[],this.lastNotBackspacedQuery="",this.queriesHistory.reset(),this._logEvent("session_started",{})};c._logEvent=function(a,b){a={type:a,data:b,time:Date.now()};this.log.push(a)};c._setSid=function(a){this.sid=a,typeof this.data.queryData==="object"&&this.data.queryData!==null?this.data.queryData.sid=this.sid:this.data.setQueryData({sid:this.sid}),typeof this.data.bootstrapData==="object"&&this.data.bootstrapData!==null?this.data.bootstrapData.sid=this.sid:this.data.setBootstrapData({sid:this.sid})};c.resetWithData=function(a){this.init=b("emptyFunction"),this._initImpl(a)};c.resetWithDataBeforeSessionEnd=function(a){var c=this.sessionActive;this.init=b("emptyFunction");this._initImpl(a);this.sessionActive=c};c.recordSelect=function(a){__p&&__p();var b=a.selected;b.uid==null?this.recordStat("selected_id","SELECT_NULL"):this.recordStat("selected_id",b.uid);this.recordStat("selected_type",b.type);this.recordStat("selected_score",b.score);this.recordStat("selected_original_id",b.original_id);this.recordStat("place_id",b.place_id);this.recordStat("client_time",b.client_time);this.recordStat("selected_position",a.index);this.recordStat("selected_with_mouse",a.clicked?1:0);this.recordStat("selected_query",a.query);this._sessionEnd()};c.bindSessionStart=function(a,b,c){if(c)for(var c=0;c<this._sessionStartEvents.length;++c){var d=this._sessionStartEvents[c];d.obj.unsubscribe(d.token)}this._sessionStartEvents.push({obj:a,token:a.subscribe(b,function(a,b){this._sessionStart()}.bind(this))})};c.bindSessionEnd=function(a,b,c){if(c)for(var c=0;c<this._sessionEndEvents.length;++c){var d=this._sessionEndEvents[c];d.obj.unsubscribe(d.token)}this._sessionEndEvents.push({obj:a,token:a.subscribe(b,function(a,b){this._sessionEnd()}.bind(this))})};c.dataSubscribe=function(a,b){var c=this.data,d=this.data.subscribe(a,b);this._dataSubscriptions.push(function(){c.unsubscribe(d)})};c.initEvents=function(){__p&&__p();this._dataSubscriptions=this._dataSubscriptions||[],this._dataSubscriptions.forEach(function(a){a()}),this._dataSubscriptions=[],this.bindSessionStart(this.core,"focus",!1),this.bindSessionEnd(this.core,"blur",!1),this.view.subscribe("select",function(a,b){this.recordSelect(b)}.bind(this)),this.bindSessionEnd(this.view,"select",!1),this.view.subscribe("render",function(a,b){this.results=b}.bind(this)),this.dataSubscribe("beforeQuery",function(a,b){this._logEvent("user_typed",{query:b.value});if(!b.value)return;this.query=b.value;this.queriesHistory.add(this.query);this.lastNotBackspacedQuery.indexOf(this.query)!==0&&(this.lastNotBackspacedQuery=this.query);this.recordCountStat("num_queries")}.bind(this)),this.dataSubscribe("beforeFetch",function(a,b){b.fetch_context.bootstrap?this.bootstrapBegin=Date.now():b.fetch_context.queryBegin=Date.now(),this._logEvent("async_query_started",{query:b.fetch_context.value,request_id:b.fetch_context.request_id})}.bind(this)),this.dataSubscribe("fetchComplete",function(a,b){__p&&__p();this._logEvent("async_query_completed",{query:b.fetch_context.value,request_id:b.fetch_context.request_id});if(b.fetch_context.bootstrap){this.recordAvgStat("bootstrap_latency",Date.now()-this.bootstrapBegin);var c={};b.response.payload.entries.forEach(function(a){!c[a.type]?c[a.type]=1:c[a.type]++});this.recordStat("bootstrap_response_types",c);this.bootstrapped=!0}else"filtered_count"in b.response.payload&&this.recordStat("filtered_count",b.response.payload.filtered_count),this.recordAvgStat("avg_query_latency",Date.now()-b.fetch_context.queryBegin)}.bind(this)),this.dataSubscribe("respond",function(a,b){this._logEvent("respond",{query:b.value,num_results:b.results.length});a=this.data.tokenizeBackend(b.value||"").flatValue;b=this.data.findBestPreviousQuery(a,this.data.getQueryIDs())||"";a=this.data.getQueryIDs()[b];this.normalized_backend_query=b;this.request_id=a;this.request_ids.push(a)}.bind(this)),this.dataSubscribe("dirty",function(a,b){this.bootstrapped=!1}.bind(this))};c._sessionStart=function(){if(this.sessionActive)return;this.sessionActive=!0};c._sessionEnd=function(){if(!this.sessionActive)return;this.sessionActive=!1;this.submit();this._reset()};c.recordStat=function(a,b){this.stats[a]=b};c.recordCountStat=function(a){var b=this.stats[a];this.stats[a]=b?b+1:1};c.recordAvgStat=function(a,b){this.avgStats[a]?(this.avgStats[a][0]+=b,++this.avgStats[a][1]):this.avgStats[a]=[b,1]};c.hasStats=function(){return!!Object.keys(this.stats).length};c.submit=function(){__p&&__p();if("log_all_sessions"in this.extraData||this.hasStats()){Object.assign(this.stats,this.extraData);if(this.results){var a=this.results.map(function(a,b){return a.uid});this.recordStat("candidate_results",JSON.stringify(a))}this.query&&this.recordStat("query",this.query);this.lastNotBackspacedQuery&&this.recordStat("last_not_backspaced_query",this.lastNotBackspacedQuery);this.recordStat("queries_history",JSON.stringify(this.queriesHistory.getQueries()));this.normalized_backend_query&&this.recordStat("normalized_backend_query",this.normalized_backend_query);this.request_id&&this.recordStat("request_id",this.request_id);this.request_ids.length&&this.recordStat("request_ids",this.request_ids);this.sid&&this.recordStat("sid",this.sid);this.bootstrapped&&this.recordStat("bootstrapped",1);for(var c in this.avgStats){a=this.avgStats[c];this.stats[c]=a[0]/a[1]}this.recordStat("log",JSON.stringify(this.log));new(b("AsyncRequest"))().setURI(this.endPoint).setMethod("POST").setData({stats:this.stats}).setErrorHandler(b("emptyFunction")).send();this._reset()}};a.register=function(a,c,d){if(document.activeElement===a)c.init(d);else var e=b("Event").listen(a,"focus",function(){c.init(d),e.remove()})};return a}();Object.assign(a.prototype,{endPoint:"/ajax/typeahead/record_basic_metrics.php"});e.exports=a}),null);
__d("XBirthdayMessagePostController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/reminders/birthday/message/",{})}),null);