if (self.CavalryLogger) { CavalryLogger.start_js(["W7mYv"]); }

__d("UFIReactionsAnimatedLikeActionIcon.react",["Keyframes.react","React","bx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React"),h=b("bx").getURL(b("bx")("559085"));a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return g.jsx(b("Keyframes.react"),babelHelpers["extends"]({projectName:"feedback_reactions",assetName:"like_action",source:h,width:36,playing:!0,repeatCount:1},this.props))};return c}(g.Component);e.exports=a}),null);
__d("getEditorStateFromUFI2ComposerState",["CompositeDraftDecorator","ContentState","EditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.inputState;switch(c.__type){case"plain-text":var d=c.selectionOffsets,e=c.text;e=b("ContentState").createFromText(e.replace(/\n\n$/,"\n"));var f=b("EditorState").createWithContent(e);if(d){var g,h,i,j=e.getFirstBlock(),k=0;while(j){var l=j.getKey(),m=j.getLength(),n=k;k+=m;k>=d.start&&d.start-n>=0&&(g={key:l,offset:d.start-n});k>=d.end&&d.end-n>=0&&(h={key:l,offset:d.end-n});i==null&&(h&&!g?i=!0:g&&!h?i=!1:h&&g&&(i=g.offset>h.offset));j=e.getBlockAfter(l)}if(g&&h){m=f.getSelection().merge({anchorKey:g.key,anchorOffset:g.offset,focusKey:h.key,focusOffset:h.offset,isBackward:!!i});f=b("EditorState").forceSelection(f,m)}}return f;case"editor-state-based":default:return a.inputDecorators.length>0?b("EditorState").set(c.editorState,{decorator:new(b("CompositeDraftDecorator"))(a.inputDecorators)}):c.editorState}}e.exports=a}),null);
__d("UFI2RichComposerInput.react",["cx","DraftEditor.react","Keys","React","getDefaultKeyBinding","getEditorStateFromUFI2ComposerState","isSoftNewlineEvent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("Keys").RETURN,i=b("React");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){d.props.onComposerStateChange(function(b){return babelHelpers["extends"]({},b,{inputState:b.inputState.__type==="editor-state-based"?babelHelpers["extends"]({},b.inputState,{editorState:a}):{__type:"editor-state-based",editorState:a}})})},d.$2=function(a,b){return d.props.handleBeforeInput?d.props.handleBeforeInput(a,b):"not-handled"},d.$3=function(a,b){if(d.props.handleKeyCommand&&d.props.handleKeyCommand(a,b)==="handled")return"handled";if(a==="ufi-commit"){d.props.onCommit();return"handled"}return"not-handled"},d.$4=function(a){if(d.props.keyBindingFn){var c=d.props.keyBindingFn(a);if(c!=null)return c}return a.keyCode===h&&!b("isSoftNewlineEvent")(a)?"ufi-commit":b("getDefaultKeyBinding")(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.execCommand=function(a){this.props.handleCommand&&this.props.handleCommand(a)};d.render=function(){return i.jsx("div",{className:b("joinClasses")((this.props.composerState.isLocked?"_3d2p":"")+" _3d2q",this.props.className),"data-novc":"1",onClick:this.props.onClick,children:i.jsx(b("DraftEditor.react"),{ariaLabel:String(this.props.placeholder),editorRef:this.props.onInputRefUpdated,editorState:b("getEditorStateFromUFI2ComposerState")(this.props.composerState),handleBeforeInput:this.$2,handleKeyCommand:this.$3,handlePastedFiles:this.props.handlePastedFiles,keyBindingFn:this.$4,onBlur:this.props.onBlur,onChange:this.$1,onFocus:this.props.onFocus,placeholder:String(this.props.placeholder),preventScroll:!0,readOnly:this.props.composerState.isLocked,spellCheck:!0,stripPastedStyles:!0,webDriverTestID:this.props.webDriverTestID})})};return c}(i.Component);e.exports=a}),null);
__d("installUFI2ComposerInputDecorators",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return babelHelpers["extends"]({},a,{inputDecorators:[].concat(a.inputDecorators,c)})}e.exports=a}),null);
__d("getUpgradedUFI2EmojiComposerPlugin",["EmojiRenderer","EmojiSpan.react","installUFI2ComposerInputDecorators","removeEmojiFromEditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c={component:b("EmojiSpan.react"),props:a,strategy:function(a,c){b("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.length;a=a.offset;c(a,a+b)})}};return{handleKeyCommand:function(a,c,d){__p&&__p();var e=a.composerState.inputState;if(e.__type==="editor-state-based"){var f;switch(c){case"backspace":f="backspace";break;case"delete":f="delete";break}if(f){var g=b("removeEmojiFromEditorState")(f,d);if(e.editorState!==g){a.onComposerStateChange(function(a){return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},e,{editorState:g})})});return"handled"}}}return a.handleKeyCommand?a.handleKeyCommand(c,d):"not-handled"},installEmojiInputDecorator:function(a){return b("installUFI2ComposerInputDecorators")(a,c)}}}e.exports=a}),null);
__d("replaceEmoticonsWithEntitiesInEditorState",["invariant","CharacterMetadata","DraftEntity","EditorState","EmoticonsList","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("immutable").List;function a(a){__p&&__p();var c=a.getSelection();if(!c.isCollapsed())return a;var d=c.getAnchorKey(),e=a.getCurrentContent(),f=e.getBlockMap().reduce(function(a,e){__p&&__p();var f=e.getText(),i=f.split(b("EmoticonsList").regexp);if(i.length===1)return a;var j=i.splice(0,1).join(""),k=[];while(i.length){var l=i.splice(0,2);if(i.length<2&&l[0].length+(l[1]?l[1].length:0)===0)continue;l.length===2||g(0,5882,l.join(", "));k.push(l)}var m=e.getKey()===d,n=j.length,o=e.getCharacterList(),p=f;k.forEach(function(d,f){__p&&__p();var g=d[0],i=d[1];if(!b("EmoticonsList").emotes[i]||e===a.getLastBlock()&&f===k.length-1||m&&c.anchorOffset>=n+g.length&&c.anchorOffset<=n+g.length+i.length||function(){for(var a=0;a<i.length;a++)if(e.getEntityAt(n+g.length+a)!=null)return!0;return!1}())n+=d[0].length+d[1].length;else{f=b("DraftEntity").create("EMOTICON","IMMUTABLE",{originalEmoticon:i,type:b("EmoticonsList").emotes[i]});d=n+g.length;p=p.slice(0,d)+"\u3000"+p.slice(d+i.length);o=o.slice(0,d).concat(h.of(b("CharacterMetadata").applyEntity(o.get(d),f)),o.slice(d+i.length));n=d+1}});if(f!==p){l=e.merge({characterList:o,text:p});var q;if(m){i=c.getAnchorOffset()-(e.getLength()-l.getLength());q={selectionAfter:c.merge({anchorOffset:i,focusOffset:i}),selectionBefore:c}}return a.merge(babelHelpers["extends"]({blockMap:a.getBlockMap().set(e.getKey(),l)},q))}return a},e);if(f===e)return a;else return b("EditorState").push(a,f,"insert-characters")}e.exports=a}),null);
__d("getUpgradedUFI2EmoticonsComposerPlugin",["DraftEntity","EmoticonSpan.react","React","getEntityMatcher","installUFI2ComposerInputDecorators","replaceEmoticonsWithEntitiesInEditorState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");function h(a,c){a.inputProps.onComposerStateChange(function(a){a=babelHelpers["extends"]({},a,c(a));var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("replaceEmoticonsWithEntitiesInEditorState")(d.editorState);if(e!==d.editorState)return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:e})});else return a;default:return a}})}function a(a){__p&&__p();var c={component:b("EmoticonSpan.react"),props:a,strategy:b("getEntityMatcher")(function(a){return a.getType()==="EMOTICON"})};return{installPlugin:function(a){__p&&__p();a.onInstallContentBlockToTextWithEntitiesInputMessageMappers(function(a,c,d){__p&&__p();d=a.getEntityAt(c);if(d==null)return null;a=b("DraftEntity").get(d);if(a.getType()==="EMOTICON"){c=a.getData();d=c.originalEmoticon;return{message:{text:d}}}return null})},render:function(a,d){a.subscriptionsHandler;var e=babelHelpers.objectWithoutPropertiesLoose(a,["subscriptionsHandler"]);return g.jsx(d,babelHelpers["extends"]({},e,{inputProps:babelHelpers["extends"]({},e.inputProps,{composerState:b("installUFI2ComposerInputDecorators")(e.inputProps.composerState,c),onComposerStateChange:function(b){return h(a,b)}})}))}}}e.exports=a}),null);
__d("getUpgradedUFI2HashtagComposerPlugin",["HashtagSpan.react","getHashtagMatches","installUFI2ComposerInputDecorators"],(function(a,b,c,d,e,f){"use strict";function a(){var a={component:b("HashtagSpan.react"),props:{},strategy:b("getHashtagMatches")};return{installHashtagInputDecorator:function(c){return b("installUFI2ComposerInputDecorators")(c,a)}}}e.exports=a}),null);
__d("getUpgradedUFI2PrefillMentionComposerPlugin",["DraftModifier","EditorState","FBLogger","SelectionState","createMentionEntityForContentState","getPlainTextFromUFI2InputState","gkx","replaceSelectionWithMention"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c){__p&&__p();var d=a.inputState;switch(d.__type){case"editor-state-based":var e=b("getPlainTextFromUFI2InputState")(d),f=d.editorState,g=!1;if(b("gkx")("1328264")&&e.length>0&&f.getCurrentContent().getBlocksAsArray().length===1){g=!0;var h=null,i=f.getCurrentContent().getFirstBlock(),j=i.getText().trim();for(var k=0;k<j.length;k++){var l=i.getEntityAt(k);l=l!=null?f.getCurrentContent().getEntity(l):null;if(l==null||l.getType()!=="MENTION"||k>0&&l.getData().id!==h){g=!1;break}h=l.getData().id}}if(e.trim()===""||g){l=b("replaceSelectionWithMention")(c,f,new(b("SelectionState"))({anchorKey:f.getCurrentContent().getFirstBlock().getKey(),anchorOffset:0,focusKey:f.getCurrentContent().getLastBlock().getKey(),focusOffset:f.getCurrentContent().getLastBlock().getLength()}),b("createMentionEntityForContentState")).getCurrentContent();i=c.getTitle().length;f=b("EditorState").push(f,b("DraftModifier").insertText(l,b("SelectionState").createEmpty(f.getCurrentContent().getLastBlock().getKey()).merge({anchorOffset:i,focusOffset:i})," "),"insert-fragment");return babelHelpers["extends"]({},a,{inputState:babelHelpers["extends"]({},d,{editorState:b("EditorState").moveFocusToEnd(f)})})}else return null;case"plain-text":d.text.trim()===""&&b("FBLogger")("ufi2").warn("Someone called for the composer to be prefilled with a mention but the composer state was of the `plain-text` type. Adding mentions to a plain-text composer is not yet implemented (T29402486).");return null;default:return d.__type}}function a(){return{handleCommand:function(a,b){a.__type==="PrefillMention"&&b.onComposerStateChange(function(b){return g(b,a.mentionableEntity)}),b.handleCommand&&b.handleCommand(a)}}}e.exports=a}),null);