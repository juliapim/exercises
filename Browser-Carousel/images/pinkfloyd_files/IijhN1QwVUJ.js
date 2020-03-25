if (self.CavalryLogger) { CavalryLogger.start_js(["T1V28"]); }

__d("ReactFlareEventUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!1,!1,window,0,a.screenX||0,a.screenY||0,a.pageX||0,a.pageY||0,a.ctrlKey||!1,a.altKey||!1,a.shiftKey||!1,a.metaKey||!1,0,null);g(b,"type","click");g(b,"buttons",0);g(b,"which",0);g(b,"target",a.target);g(b,"currentTarget",a.target);g(b,"srcElement",a.target);return b}function g(a,b,c){Object.defineProperty(a,b,{get:function(){return c}})}e.exports={createFromReactFlareEvent:a}}),null);
__d("WIGInteractiveElementContext.react",["React"],(function(a,b,c,d,e,f){a=b("React");e.exports=a.createContext({hovered:!1,focused:!1,pressed:!1})}),null);
__d("WIGPressable.react",["CometPressable.react","React"],(function(a,b,c,d,e,f){var g=b("React");function a(a,c){return g.jsx(b("CometPressable.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=g.forwardRef(a)}),null);
__d("WIGText.react",["React","TetraText.react"],(function(a,b,c,d,e,f){var g=b("React");function a(a){return g.createElement(b("TetraText.react"),a)}e.exports=a}),null);
__d("WIGTextPairing.react",["React","TetraTextPairing.react"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("TetraTextPairing.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);
__d("WIGTooltip.react",["CometTooltip.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometTooltip.react"),babelHelpers["extends"]({},a))}e.exports=a}),null);
__d("FocusTable.react",["FocusManager.react","React","ReactEventsKeyboard","react","setElementCanTab","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("FocusManager.react").focusElement;c=b("React");var i=c.useContext,j=c.useRef,k=b("ReactEventsKeyboard").useKeyboard,l=g||(g=b("react")),m=5;function n(a,c,d){if(c){c=c.scopeRef.current;if(c!==null){c=c.DO_NOT_USE_queryFirstNode(a);c!==null&&(b("setElementCanTab")(c,!0),h(c),d&&d.preventDefault())}}}function o(a,b,c,d,e){__p&&__p();b=b.getChildContextValues(d).filter(function(a){return a&&a.disabled!==!0});if(b.length>0){d=0;for(var f=0;f<b.length;f++){var g=b[f];if(g){d+=g&&g.colSpan||1;if(d>c){n(a,g,e);return}}}n(a,b[b.length-1],e)}}function p(a,b){b=(a=a.getChildContextValues(b).filter(function(a){return a&&a.disabled!==!0}))!=null?a:[];a=0;for(var c=0;c<b.length;c++){var d=b[c];d=d&&((d=d.colSpan)!=null?d:1);a+=d}return a}function q(a,b){__p&&__p();var c=0;for(var d=0;d<a.length;d++){var e=a[d];if(e===null)continue;if(e.scopeRef.current===b)return[d,d+c];e=e.colSpan;typeof e==="number"&&(c+=e-1)}return[-1,-1]}function r(a,b,c){b=b.getChildContextValues(c).filter(function(a){return a&&a.disabled!==!0});if(b.length>0){c=q(b,a);a=c[0];c=c[1];return[b,a,c]}return[null,-1,-1]}function s(a,b,c,d){__p&&__p();if(a&&b){a=a.scopeRef.current;if(a!==null){a=a.getChildContextValues(c);c=[];for(var e=0;e<a.length;e++){var f=a[e];if(f){f=f.current;f&&(f.getChildContextValues(d).every(function(a){return a&&a.disabled===!0})||c.push(f))}}if(c.length>0){f=c.indexOf(b);return[c,f]}}}return[null,-1]}function t(a,b,c){if(a!==null){a=a.onKeyboardOut;if(typeof a==="function"){a(b,c);return}}c.continuePropagation()}function u(a){var b=a.altKey,c=a.ctrlKey,d=a.metaKey;a=a.shiftKey;return b===!0||c===!0||d===!0||a===!0}function a(a){__p&&__p();var c=l.unstable_createScope(),d=l.createContext(null),e=l.createContext(null),f=l.createContext(null);function g(a){var b=a.children,e=a.onKeyboardOut,f=a.wrapX,g=a.wrapY,h=a.wrapXToNextLine,i=a.tabScopeQuery,k=a.allowModifiers;a=a.pageJumpSize;a=a===void 0?m:a;var n=j(null);return l.jsx(d.Provider,{value:{onKeyboardOut:e,scopeRef:n,wrapXToNextLine:h,wrapX:f,wrapY:g,tabScopeQuery:i,allowModifiers:k,pageJumpSize:a},children:l.jsx(c,{ref:n,children:b})})}function h(a){a=a.children;var b=j(null);return l.jsx(e.Provider,{value:b,children:l.jsx(c,{ref:b,children:a})})}function q(g){__p&&__p();var h=g.children,m=g.colSpan,q=g.disabled,v=g.onKeyDown,w=i(d),x=i(e),y=j(null);g=k({onKeyDown:function(c){__p&&__p();var d=y.current;if(d===null){c.continuePropagation();return}var g=c.key;if(g==="Tab"&&w){var h=w.tabScopeQuery,i=w.scopeRef.current;if(h&&i){var j=document.activeElement;i=i.DO_NOT_USE_queryAllNodes(h);if(i!==null)for(var h=0;h<i.length;h++){var k=i[h];k!==j?b("setElementCanTab")(k,!1):b("setElementCanTab")(k,!0)}}c.continuePropagation();return}if(u(c)&&w){k=w.allowModifiers;if(k!==!0){c.continuePropagation();return}}j=c.ctrlKey||c.metaKey;if(x===null||x.current===null){c.continuePropagation();return}h=x.current;switch(g){case"Home":i=r(d,h,f);k=i[0];g=i[1];i=s(w,h,e,f);var l=i[0];i=i[1];if(k!==null&&l!==null)if(j)if(i===0&&g===0)t(w,"up",c);else{k=l[0];o(a,k,0,f,c)}else if(g===0)t(w,"left",c);else{k=l[i];o(a,k,0,f,c)}return;case"End":g=r(d,h,f);l=g[0];i=g[1];k=s(w,h,e,f);g=k[0];k=k[1];if(l!==null&&g!==null)if(j)if(k===g.length-1&&i===l.length-1)t(w,"down",c);else{k=g[g.length-1];g=k.getChildContextValues(f).filter(function(a){return a&&a.disabled!==!0});g.length>0&&n(a,g[g.length-1],c)}else i===l[l.length-1]?t(w,"right",c):n(a,l[l.length-1],c);return;case"ArrowUp":k=r(d,h,f);g=k[0];i=k[2];if(g!==null&&w){l=s(w,h,e,f);k=l[0];g=l[1];if(k!==null)if(g===0){l=w.wrapY;if(l===!0&&!j){l=k[k.length-1];o(a,l,i,f,c)}else t(w,"up",c)}else if(j){l=k[0];o(a,l,i,f,c)}else{l=k[g-1];o(a,l,i,f,c)}}return;case"PageUp":k=r(d,h,f);g=k[0];l=k[2];i=s(w,h,e,f);k=i[0];i=i[1];if(g!==null&&k!==null&&w)if(i===0)t(w,"up",c);else{g=w.pageJumpSize;k=k[Math.max(0,i-g)];o(a,k,l,f,c)}return;case"ArrowDown":i=r(d,h,f);g=i[0];k=i[2];l=s(w,h,e,f);i=l[0];l=l[1];if(g!==null&&i!==null&&w&&l!==-1)if(l===i.length-1){g=w.wrapY;if(g===!0&&!j){g=i[0];o(a,g,k,f,c)}else t(w,"down",c)}else if(j){g=i[i.length-1];o(a,g,k,f,c)}else{j=i[l+1];o(a,j,k,f,c)}return;case"PageDown":g=r(d,h,f);i=g[0];l=g[2];j=s(w,h,e,f);k=j[0];g=j[1];if(i!==null&&k!==null&&w)if(g===k.length-1)t(w,"down",c);else{j=w.pageJumpSize;i=k[Math.min(k.length-1,g+j)];o(a,i,l,f,c)}return;case"ArrowLeft":k=r(d,h,f);g=k[0];j=k[1];i=s(w,h,e,f);l=i[0];k=i[1];if(g!==null&&l!==null&&w)if(j>0)n(a,g[j-1]),c.preventDefault();else if(j===0){i=w.wrapX;j=w.wrapXToNextLine;i===!0?n(a,g[g.length-1],c):j===!0&&l[k-1]?o(a,l[k-1],p(l[k-1],f),f,c):t(w,"left",c)}return;case"ArrowRight":i=r(d,h,f);g=i[0];j=i[1];l=s(w,h,e,f);k=l[0];d=l[1];if(g!==null&&k!==null&&w&&j!==-1)if(j===g.length-1){i=w.wrapX;h=w.wrapXToNextLine;i===!0?n(a,g[0],c):h===!0&&k[d+1]?o(a,k[d+1],0,f,c):t(w,"right",c)}else n(a,g[j+1],c);return}v&&v(c)}});b("useLayoutEffect_SAFE_FOR_SSR")(function(){window.requestAnimationFrame(function(){var c=y.current;if(c!=null){c=c.DO_NOT_USE_queryFirstNode(a);c!==null&&b("setElementCanTab")(c,!q)}})},[q]);return l.jsx(f.Provider,{value:{scopeRef:y,disabled:q,colSpan:m},children:l.jsx(c,{DEPRECATED_flareListeners:g,ref:y,children:h})})}return[g,h,q]}e.exports={createFocusTable:a}}),null);
__d("WorkGalahadChannelFocusableTable.react",["FocusTable.react","TabbableScopeQuery.react"],(function(a,b,c,d,e,f){"use strict";a=b("FocusTable.react").createFocusTable;c=a(b("TabbableScopeQuery.react"));d=c[0];f=c[1];a=c[2];e.exports={WorkGalahadChannelFocusableTable:d,WorkGalahadChannelFocusableTableRow:f,WorkGalahadChannelFocusableTableCell:a,WorkGalahadChannelFocusableScopeQuery:b("TabbableScopeQuery.react")}}),null);
__d("WorkGalahadHoverHelper",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useState;c={useHover:function(a){var b=g(!1),c=b[0],d=b[1];return[c,{onMouseEnter:function(){a&&a(),d(!0)},onMouseLeave:function(){return d(!1)}}]}};e.exports=c}),null);
__d("useFocusState",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React");var g=c.useCallback,h=c.useState;function a(a,b){var c=h(!1),d=c[0],e=c[1];c=g(function(b){e(!0),a&&a(b)},[a]);var f=g(function(a){e(!1),b&&b(a)},[b]);return[d,c,f]}e.exports=a}),null);
__d("useHoverAndFocusState",["WorkGalahadHoverHelper","useFocusState"],(function(a,b,c,d,e,f){"use strict";var g=b("WorkGalahadHoverHelper").useHover;function a(){var a=g(),c=a[0];a=a[1];var d=b("useFocusState")(),e=d[0],f=d[1];d=d[2];return{hovered:c,focused:e,onHoverIn:a.onMouseEnter,onHoverOut:a.onMouseLeave,onFocusIn:f,onFocusOut:d}}e.exports=a}),null);
__d("WorkGalahadUIChannelItem.react",["CometPressableOverlay.react","React","URI","WIGInteractiveElementContext.react","WIGPressable.react","WIGTextPairing.react","WorkGalahadChannelFocusableTable.react","stylex","useHoverAndFocusState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("React");c=b("React");var j=c.useCallback,k=c.useMemo,l=c.useState,m=b("WorkGalahadChannelFocusableTable.react").WorkGalahadChannelFocusableTableCell,n=b("WorkGalahadChannelFocusableTable.react").WorkGalahadChannelFocusableTableRow,o={root:{boxSizing:"tdgv6ycz",position:"hal92y33",flexGrow:"ftjbd6cl",flexShrink:"kqlegusg",minHeight:"eg3o40xf",minWidth:"f0w9ysip",display:"mu99tzkh",justifyContent:"oitujibm",alignItems:"t36ehdhz",flexDirection:"sulwup3a",borderTop:"nplqc3z5",borderEnd:"llwpk7e4",borderBottom:"fqnkz0nq",borderStart:"jga1arsn",paddingEnd:"g1w82w5r"},focused:{outline:"d3fls08n"},selected:{backgroundColor:"p9m48beo"},contentContainer:{borderStyle:"olwqhsk7",borderWidth:"j6ngj7h7",boxSizing:"tdgv6ycz",display:"mu99tzkh",flexGrow:"ftjbd6cl",flexShrink:"kqlegusg",marginBottom:"jgcuv4po",marginEnd:"ouhd256r",marginStart:"mq32vg4l",marginTop:"kyu6y8np",minHeight:"eg3o40xf",minWidth:"f0w9ysip",paddingBottom:"a3m408la",paddingEnd:"m3p3afjb",paddingStart:"eimatuwp",paddingTop:"zfmvpfxx",position:"hal92y33",zIndex:"rpt3ley2",justifyContent:"oitujibm",alignItems:"t36ehdhz",flexDirection:"sulwup3a"},content:{borderStyle:"olwqhsk7",borderWidth:"j6ngj7h7",boxSizing:"tdgv6ycz",display:"mu99tzkh",flexGrow:"ftjbd6cl",flexShrink:"kqlegusg",marginBottom:"jgcuv4po",marginEnd:"ouhd256r",marginStart:"mq32vg4l",marginTop:"kyu6y8np",minHeight:"eg3o40xf",minWidth:"f0w9ysip",paddingBottom:"a3m408la",paddingEnd:"m3p3afjb",paddingStart:"eimatuwp",paddingTop:"zfmvpfxx",position:"hal92y33",zIndex:"rpt3ley2",justifyContent:"oitujibm",alignItems:"t36ehdhz",flexDirection:"sulwup3a",outline:"mvskt0vx",":hover":{textDecoration:"b69vs25w"}},textPairing:{flexGrow:"ftjbd6cl",flexBasis:"trztskah",minWidth:"f0w9ysip",paddingTop:"s9o98cno",paddingBottom:"sgyxnsb9",overflowX:"ib0kwflm",overflowY:"qbbcxcfp",textOverflow:"oecdyzpx"},addOnPrimary:{borderStyle:"olwqhsk7",borderWidth:"j6ngj7h7",boxSizing:"tdgv6ycz",display:"mu99tzkh",flexDirection:"tv52aht6",flexShrink:"kqlegusg",justifyContent:"akl1aaa0",marginStart:"mq32vg4l",minHeight:"eg3o40xf",minWidth:"f0w9ysip",paddingBottom:"a3m408la",paddingEnd:"m3p3afjb",paddingStart:"eimatuwp",paddingTop:"zfmvpfxx",zIndex:"rpt3ley2",alignItems:"t36ehdhz",flexGrow:"aeqptlwn",marginBottom:"kl295ud9",marginEnd:"oypfxdan",marginTop:"q7fxw9qh",position:"hal92y33"},addOnSecondary:{borderStyle:"olwqhsk7",borderWidth:"j6ngj7h7",boxSizing:"tdgv6ycz",display:"mu99tzkh",flexDirection:"tv52aht6",flexShrink:"kqlegusg",marginBottom:"jgcuv4po",marginEnd:"ouhd256r",marginStart:"mq32vg4l",marginTop:"kyu6y8np",minHeight:"eg3o40xf",minWidth:"f0w9ysip",paddingBottom:"a3m408la",paddingEnd:"m3p3afjb",paddingStart:"eimatuwp",paddingTop:"zfmvpfxx",zIndex:"rpt3ley2",position:"i8ovu4tj",start:"qgbafi3f",transform:"s5apgkp2",alignItems:"t36ehdhz",justifyContent:"lhmcu1i6",flexGrow:"aeqptlwn"},indented:{paddingStart:"dxs9yoch"},notIndented:{paddingStart:"hmw2pi96"},addOnTertiary:{borderStyle:"olwqhsk7",borderWidth:"j6ngj7h7",boxSizing:"tdgv6ycz",display:"mu99tzkh",marginBottom:"jgcuv4po",marginEnd:"ouhd256r",marginTop:"kyu6y8np",minHeight:"eg3o40xf",paddingBottom:"a3m408la",paddingEnd:"m3p3afjb",paddingStart:"eimatuwp",paddingTop:"zfmvpfxx",position:"hal92y33",zIndex:"rpt3ley2",flexGrow:"aeqptlwn",flexShrink:"o0foh442",minWidth:"eia6fg53",alignItems:"t36ehdhz",justifyContent:"gyidwt2h",flexDirection:"sulwup3a",marginStart:"se2r61z1"}};function a(a,c){__p&&__p();var d=a.addOnPrimary,e=a.addOnSecondary,f=a.addOnTertiary,p=a.customIndent,q=a.disabled;q=q===void 0?!1:q;var r=a.emphasized;r=r===void 0?!1:r;var s=a.selected;s=s===void 0?!1:s;var t=a.indented;t=t===void 0?!0:t;var u=a.linkProps;u=u===void 0?{}:u;var v=u.url;u=babelHelpers.objectWithoutPropertiesLoose(u,["url"]);var w=a.body,x=a.bodyColor,y=a.bodyLineLimit;y=y===void 0?1:y;var z=a.headline,A=a.headlineAddOn,B=a.headlineColor,C=a.headlineLineLimit;C=C===void 0?1:C;var D=a.meta,E=a.metaColor,F=a.metaLineLimit,G=a.metaLocation,H=a.onPress,I=a.onPressIn,J=a.onHoverIn,K=a.onHoverOut,L=a.onFocusIn,M=a.onFocusOut,N=a.isSemanticListItem;N=N===void 0?!0:N;var O=a.testid;O=a.wrapperRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["addOnPrimary","addOnSecondary","addOnTertiary","customIndent","disabled","emphasized","selected","indented","linkProps","body","bodyColor","bodyLineLimit","headline","headlineAddOn","headlineColor","headlineLineLimit","meta","metaColor","metaLineLimit","metaLocation","onPress","onPressIn","onHoverIn","onHoverOut","onFocusIn","onFocusOut","isSemanticListItem","testid","wrapperRef"]);var P=l(!1),Q=P[0],R=P[1];P=b("useHoverAndFocusState")();var S=P.focused,T=P.hovered,U=P.onFocusIn,V=P.onFocusOut,W=P.onHoverIn;P=P.onHoverOut;var X=k(function(){return{hovered:T,focused:S,pressed:Q}},[T,S,Q]),Y=j(function(a){U(a),L&&L(a)},[L,U]),Z=j(function(a){V(a),M&&M(a)},[M,V]),$=j(function(a){R(!0),I&&I(a)},[I]),aa=j(function(){return R(!1)},[]);d=i.jsxs(i.Fragment,{children:[d!=null&&i.jsx("div",{className:(g||(g=b("stylex")))(o.addOnPrimary),children:d}),i.jsx("div",{"data-testid":void 0,className:(g||(g=b("stylex")))(o.textPairing),children:i.jsx(b("WIGTextPairing.react"),{body:w,bodyColor:x,bodyLineLimit:y,headline:z,headlineAddOn:A,headlineColor:B,headlineLineLimit:C,level:4,meta:D,metaColor:E,metaLineLimit:F,metaLocation:G,reduceEmphasis:r===!1})})]});w=N?"li":"div";x=H||v!=null;y=t?o.indented:o.notIndented;p!=null&&(y=p);return i.jsx(n,{children:i.jsx(b("WIGInteractiveElementContext.react").Provider,{value:X,children:i.jsxs(w,{ref:O,role:x&&N?"row":void 0,onMouseEnter:W,onMouseLeave:P,className:g(o.root,y,S&&o.focused,s&&o.selected),children:[x&&i.jsx(b("CometPressableOverlay.react"),{focusVisible:S,hovered:T,pressed:Q}),x?i.jsx(m,{children:i.jsx("div",{className:(g||(g=b("stylex")))(o.contentContainer),role:N?"gridcell":void 0,children:i.jsx(b("WIGPressable.react"),babelHelpers["extends"]({},a,{display:"block",disabled:q,linkProps:v?babelHelpers["extends"]({},u,{url:(h||(h=b("URI"))).normalize(v)}):void 0,onHoverIn:J,onHoverOut:K,onFocusIn:Y,onFocusOut:Z,onPress:H,onPressIn:$,onPressOut:aa,overlayDisabled:!0,ref:c,xstyle:o.content,children:d}))})}):i.jsx("div",{className:(g||(g=b("stylex")))(o.content),children:d}),e!=null&&i.jsx("div",{className:(g||(g=b("stylex")))(o.addOnSecondary),children:e}),f!=null&&i.jsx("div",{className:(g||(g=b("stylex")))(o.addOnTertiary),children:f})]})})})}e.exports=i.forwardRef(a)}),null);
__d("WorkGalahadBeeperDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.dispatch=c.dispatch.bind(babelHelpers.assertThisInitialized(c)),b)||babelHelpers.assertThisInitialized(c)}return b}(b("ExplicitRegistrationDispatcher"));e.exports=new a({strict:!0})}),null);
__d("WorkGalahadBeeperStore",["FluxReduceStore","NotificationBeeperConst","WorkGalahadBeeperDispatcher","filterObject","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("NotificationBeeperConst").BeepStates;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{beeps:{},fading:!1,hovering:!1}};d.$WorkGalahadBeeperStore1=function(a,b){return a.type==="default"?babelHelpers["extends"]({},a,{state:b}):babelHelpers["extends"]({},a,{state:b})};d.$WorkGalahadBeeperStore2=function(a){return a.type==="default"?babelHelpers["extends"]({},a,{xouted:!0}):babelHelpers["extends"]({},a,{xouted:!0})};d.$WorkGalahadBeeperStore3=function(a){var c=this;return babelHelpers["extends"]({},a,{beeps:(g||(g=b("mapObject")))(a.beeps,function(a){return a.state===h.READY_TO_HIDE?c.$WorkGalahadBeeperStore1(a,h.FADING_OUT):a}),fading:!0})};d.$WorkGalahadBeeperStore4=function(a){return!a.fading?a:babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.state!==h.FADING_OUT}),fading:!1})};d.$WorkGalahadBeeperStore5=function(a){var c=this;return babelHelpers["extends"]({},a,{beeps:(g||(g=b("mapObject")))(a.beeps,function(a){return a.state===h.PENDING?c.$WorkGalahadBeeperStore1(a,h.READY_TO_HIDE):a})})};d.getRenderedBeeps=function(){return b("filterObject")(this.getState().beeps,function(a){return a.state===h.READY_TO_HIDE})};d.reduce=function(a,c){__p&&__p();var d;switch(c.type){case"galahad/beeper_hide":return this.$WorkGalahadBeeperStore3(a);case"galahad/beeper_add":var e=a.fading?h.PENDING:h.READY_TO_HIDE;return babelHelpers["extends"]({},a,{beeps:babelHelpers["extends"]({},a.beeps,(d={},d[c.beep.id]=this.$WorkGalahadBeeperStore1(c.beep,e),d))});case"galahad/beeper_xout":e=a.beeps[c.beeperID];return e==null?a:babelHelpers["extends"]({},a,{beeps:babelHelpers["extends"]({},a.beeps,(d={},d[c.beeperID]=this.$WorkGalahadBeeperStore2(e),d))});case"galahad/beeper_finish_hide":return this.$WorkGalahadBeeperStore5(this.$WorkGalahadBeeperStore4(a));case"galahad/beeper_mouse_enter":return babelHelpers["extends"]({},this.$WorkGalahadBeeperStore5(a),{hovering:!0,fading:!1});case"galahad/beeper_mouse_leave":return babelHelpers["extends"]({},a,{hovering:!1});case"galahad/beepers_clear":return babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.type!=="default"})});case"galahad/chat_beepers_clear":return babelHelpers["extends"]({},a,{beeps:b("filterObject")(a.beeps,function(a){return a.type!=="chat"})});case"galahad/all_beepers_clear":return babelHelpers["extends"]({},a,{beeps:{}});default:return a}};d.getChatBeeps=function(){return b("filterObject")((g||(g=b("mapObject")))(this.getState().beeps,function(a){return a.type==="chat"&&a.xouted!==!0?a:null}),Boolean)};d.getBeeps=function(){return b("filterObject")((g||(g=b("mapObject")))(this.getState().beeps,function(a){return a.type==="default"&&a.xouted!==!0?a:null}),Boolean)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("WorkGalahadBeeperDispatcher"))}),null);
__d("WorkGalahadBeeperActions",["NotificationBeeperConst","NotificationSound","WorkGalahadBeeperDispatcher","WorkGalahadBeeperStore","clearTimeout","forEachObject","gkx","setImmediateAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("NotificationBeeperConst").ACTIVE_DELAY_LONG,h=b("NotificationBeeperConst").FADE_OUT_LENGTH,i=b("NotificationBeeperConst").IDLE_DELAY,j,k=null,l=!1;a=function(a){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_add",beep:a})};c=function(a){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_xout",beeperID:a})};var m=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_finish_hide"})},n=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_hide"}),b("setTimeoutAcrossTransitions")(m,h)},o=function(a){j&&b("clearTimeout")(j),j=b("setTimeoutAcrossTransitions")(n,a!=null?a:i)};d=function(){j&&b("clearTimeout")(j),b("setImmediateAcrossTransitions")(function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_mouse_enter"});var a=b("WorkGalahadBeeperStore").getRenderedBeeps();b("forEachObject")(a,function(a){return a.onSeen&&a.onSeen()})})};f=function(){o(g),b("setImmediateAcrossTransitions")(function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beeper_mouse_leave"})})};var p=function(a){l=a},q=function(a){k=new(b("NotificationSound"))(a)},r=function(a){l&&k!=null&&k.play(a)},s=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/beepers_clear"})},t=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/chat_beepers_clear"})},u=function(){b("WorkGalahadBeeperDispatcher").dispatch({type:"galahad/all_beepers_clear"})},v=function(a){a==="notifications"?s():a==="chats"?t():a==="home"&&b("gkx")("997564")&&t()};e.exports={addBeeper:a,xoutBeeper:c,waitHide:o,onMouseEnter:d,onMouseLeave:f,setSoundEnabled:p,setSoundPath:q,playSound:r,clearAllNotificationBeeps:s,clearAllChatBeeps:t,clearAllBeeps:u,clearBeepsForTabID:v}}),null);
__d("WorkGalahadNavListContext.react",["React"],(function(a,b,c,d,e,f){a=b("React");e.exports=a.createContext({focused:!1,hovered:!1})}),null);
__d("WorkGalahadNavTextHeaderBase.react",["React","WIGText.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React"),i={title:{textTransform:"qh3kmfdh"},subtitle:{marginBottom:"hmmao1jw",marginTop:"ax8vyoxa",paddingTop:"b5mg2iqh",paddingBottom:"r8mubyy5"},titleAndAction:{display:"mu99tzkh",justifyContent:"akl1aaa0",alignItems:"t36ehdhz"},root:{display:"mu99tzkh",justifyContent:"oitujibm",alignItems:"qzq7978s",flexDirection:"tv52aht6",paddingTop:"b5mg2iqh",paddingBottom:"sgyxnsb9",paddingEnd:"ffozemys",paddingStart:"hmw2pi96"},indented:{paddingStart:"dxs9yoch"}};function a(a){var c=a.action,d=a.indented;d=d===void 0?!0:d;var e=a.subtitle,f=a.title;a=a.xstyle;return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root,d&&i.indented,a),children:[h.jsxs("div",{className:g(i.titleAndAction),children:[f,c]}),e!=null?h.jsx("div",{className:(g||(g=b("stylex")))(i.subtitle),children:h.jsx(b("WIGText.react"),{type:"body4",color:"secondary",children:e})}):null]})}a.SmallTitle=function(a){a=a.title;return h.jsx("span",{className:(g||(g=b("stylex")))(i.title),children:h.jsx(b("WIGText.react"),{type:"bodyLink4",color:"secondary",isSemanticHeading:!0,numberOfLines:1,children:a})})};a.LargeTitle=function(a){a=a.title;return h.jsx(b("WIGText.react"),{type:"headlineEmphasized3",isSemanticHeading:!0,numberOfLines:1,children:a})};a.ExtraLargeTitle=function(a){a=a.title;return h.jsx(b("WIGText.react"),{type:"headlineEmphasized1",isSemanticHeading:!0,numberOfLines:1,children:a})};e.exports=a}),null);
__d("WorkGalahadNavTextHeader.react",["React","WorkGalahadNavTextHeaderBase.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");function h(a,c){switch(c){case"EXTRA_LARGE":return g.jsx(b("WorkGalahadNavTextHeaderBase.react").ExtraLargeTitle,{title:a});case"LARGE":default:return g.jsx(b("WorkGalahadNavTextHeaderBase.react").LargeTitle,{title:a})}}function a(a){var c=a.action,d=a.indented;d=d===void 0?!0:d;var e=a.subtitle,f=a.title,i=a.xstyle;a=a.titleSize;a=a===void 0?"LARGE":a;return g.jsx(b("WorkGalahadNavTextHeaderBase.react"),{title:h(f,a),subtitle:e,indented:d,action:c,xstyle:i})}e.exports=a}),null);
__d("WorkGalahadNavHeaderPressableAction.react",["React","WIGPressable.react","WIGText.react","WIGTooltip.react","WorkGalahadNavListContext.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React");c=b("React");var h=c.useContext,i={action:{textAlign:"igocvxxm"},actionTransition:{opacity:"fchkd3bi",transitionProperty:"dm2j5ryo",transitionDuration:"rs2dquaj",transitionTimingFunction:"d32d5syc",":focus":{opacity:"el9k2h2j"},":hover":{opacity:"kh39u4sc"}},actionTransitionVisible:{opacity:"pt8wzkwh"}};function a(a){__p&&__p();var c=a.href;c=c===void 0?void 0:c;var d=a.onClick,e=a.showOnHover,f=a.linkRef,j=a.tooltip;a=a.title;var k=h(b("WorkGalahadNavListContext.react")),l=k.focused;k=k.hovered;c=c!=null?{url:c.toString()}:void 0;c=g.jsx(b("WIGPressable.react"),{display:"block",linkProps:c,onPress:d,overlayDisabled:!0,xstyle:[i.action,e===!0&&i.actionTransition,(l||k)&&i.actionTransitionVisible],ref:f,children:g.jsx(b("WIGText.react"),{type:"bodyLink4",color:"highlight",children:a})});j!=null&&(c=g.jsx(b("WIGTooltip.react"),{tooltip:j,children:c}));return c}e.exports=a}),null);
__d("XWorkInviteCoworkersDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/work/invite_coworkers/dialog/",{source:{type:"Enum",required:!0,enumType:1},group_id:{type:"FBID"},undelivered_users:{type:"FBIDVector"},__asyncDialog:{type:"Int"}})}),null);