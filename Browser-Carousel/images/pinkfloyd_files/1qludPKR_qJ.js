if (self.CavalryLogger) { CavalryLogger.start_js(["rpBjk"]); }

__d("WebBrowserDimensionsResizeTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsResizeLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsResizeLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WebBrowserDimensionsResizeLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCurrentHeight=function(a){this.$1.current_height=a;return this};c.setCurrentWidth=function(a){this.$1.current_width=a;return this};c.setPreviousHeight=function(a){this.$1.previous_height=a;return this};c.setPreviousWidth=function(a){this.$1.previous_width=a;return this};c.setScreenHeight=function(a){this.$1.screen_height=a;return this};c.setScreenWidth=function(a){this.$1.screen_width=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={current_height:!0,current_width:!0,previous_height:!0,previous_width:!0,screen_height:!0,screen_width:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("LiveBroadcastShareNowFunnelLogger",["CurrentUser","WebFunnelLogger"],(function(a,b,c,d,e,f){"use strict";a={appendAction:function(a){var c=b("CurrentUser").getID();new(b("WebFunnelLogger"))("LiveBroadcastShareNowFunnelDefinition").setAction(a).setSessionKey(c).log()}};e.exports=a}),null);