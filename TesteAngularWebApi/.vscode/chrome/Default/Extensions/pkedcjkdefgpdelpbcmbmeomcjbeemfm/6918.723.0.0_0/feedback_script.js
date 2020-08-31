'use strict';var df=/^[\w+/_-]+[=]{0,2}$/;var ef=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||Pa,e=d.document;a:{var f=(d||Pa).document;if((f=f.querySelector&&f.querySelector("script[nonce]"))&&(f=f.nonce||f.getAttribute("nonce"))&&df.test(f))break a;f=void 0}f&&(a.nonce=f);if("help"==a.flow){var h=Xa("document.location.href",d);!a.helpCenterContext&&h&&(a.helpCenterContext=h.substring(0,1200));h=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(h=1200>=k.length)&&(a.psdJson=k)}h||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=
b;c=a.serverUri||"//www.google.com/tools/feedback";if(h=d.GOOGLE_FEEDBACK_START)h.apply(d,b);else{d=c+"/load.js?";for(var n in a)b=a[n],null!=b&&!jb(b)&&(d+=encodeURIComponent(n)+"="+encodeURIComponent(b)+"&");a=(e?new cf(af(e)):Vb||(Vb=new cf)).b.createElement("SCRIPT");f&&a.setAttribute("nonce",f);n=we(d);Ge(a,n);e.body.appendChild(a)}};r("userfeedback.api.startFeedback",ef);var ff=function(){this.h=this.f=this.j=this.modelName=this.g=this.b=this.Yd=""};var gf=chrome.i18n.getMessage("4163185390680253103"),hf=chrome.i18n.getMessage("492097680647953484"),jf=chrome.i18n.getMessage("2575016469622936324"),kf=chrome.i18n.getMessage("128276876460319075"),lf=chrome.i18n.getMessage("3326722026796849289"),mf=chrome.i18n.getMessage("1018984561488520517"),nf=chrome.i18n.getMessage("8205999658352447129"),of=chrome.i18n.getMessage("5723583529370342957"),pf=chrome.i18n.getMessage("1550904064710828958"),qf=chrome.i18n.getMessage("5014364904504073524"),rf=chrome.i18n.getMessage("2194670894476780934"),
sf=chrome.i18n.getMessage("6614468912728530636"),tf=chrome.i18n.getMessage("5910595154486533449"),uf=chrome.i18n.getMessage("5363086287710390513"),vf=chrome.i18n.getMessage("244647017322945605"),wf=chrome.i18n.getMessage("5375576275991472719"),xf=chrome.i18n.getMessage("4592127349908255218"),yf=chrome.i18n.getMessage("843316808366399491"),zf=chrome.i18n.getMessage("5699813974548050528"),Af=chrome.i18n.getMessage("8515148417333877999"),Bf=chrome.i18n.getMessage("1636686747687494376"),Cf=chrome.i18n.getMessage("4148300086676792937"),
Df=chrome.i18n.getMessage("3219866268410307919"),Ef=chrome.i18n.getMessage("9211708838274008657"),Ff=chrome.i18n.getMessage("8706273405040403641"),Gf=chrome.i18n.getMessage("4756056595565370923"),Hf=chrome.i18n.getMessage("7876724262035435114"),If=chrome.i18n.getMessage("5485620192329479690"),Jf=chrome.i18n.getMessage("6963873398546068901"),Kf=chrome.i18n.getMessage("3567591856726172993"),Lf=chrome.i18n.getMessage("3239956785410157548");var Mf=function(a){this.b="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};if("undefined"!=typeof angular){var Nf=angular.module("chrome_18n",[]);chrome.runtime&&chrome.runtime.getManifest&&chrome.runtime.getManifest().default_locale&&Nf.directive("angularMessage",function(){return{restrict:"E",replace:!0,controller:["$scope",function(a){var b=this;this.si=this.qh=null;a.dirForText=function(a){b.qh||(b.qh=chrome.i18n.getMessage("@@bidi_dir")||"ltr");b.si||(b.si=new Mf("rtl"==b.qh));var c=b.si,e,f=e=0,h=!1;a=(a||"").split(re);for(var k=0;k<a.length;k++){var n=a[k];pe.test(n)?
(e++,f++):qe.test(n)?h=!0:oe.test(n)?f++:se.test(n)&&(h=!0)}e=0==f?h?1:0:.4<e/f?-1:1;return-1==(0==e?c.b:e)?"rtl":"ltr"}}],compile:function(a,b){b=b.key;var c=null,d=document.createElement("amr");b&&!b.match(/^\d+$/)&&(b=chrome.i18n.getMessage(b),null==b&&d.setAttribute("id","missing"));if(b){var e=chrome.i18n.getMessage(b+"_ph");c=[];if(null!=e)for(c=e.split("\ue000"),e=0;e<c.length;++e)c[e]=c[e].replace(/^{{(.*)}}$/,'<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');c=chrome.i18n.getMessage(b,c)}else d.setAttribute("r",
"nokey");c?d.innerHTML=c:(d.setAttribute("tl","false"),d.innerHTML=a.html());a.replaceWith(d)}}})};var Pf=function(a,b){var c=this;this.s=b;this.b=a;this.b.top=a;this.m=[];this.g=!1;this.f=new ff;this.b.videoSmoothnessRatings=this.Fj(rf,mf,nf,of,pf,qf);this.b.videoQualityRatings=this.Fj(rf,sf,tf,uf,vf,wf);this.b.audioQualityRatings=this.Fj(rf,xf,yf,zf,Af,Bf);this.m=[{value:"Bug",desc:gf},{value:"FeatureRequest",desc:hf},{value:"MirroringQuality",desc:jf},{value:"Discovery",desc:kf},{value:"Other",desc:lf}];this.b.feedbackTypes=this.m;this.b.includeFineLogs=!0;this.b.feedbackType="Bug";this.b.sendFeedback=
this.lr.bind(this);this.b.cancel=this.ap.bind(this);this.b.attachLogsClick=this.j.bind(this);this.b.viewLogs=this.B.bind(this);this.b.$watchGroup("videoSmoothness videoQuality audioQuality feedbackDescription comments feedbackType".split(" "),this.cp.bind(this));this.b.sufficientFeedback=!1;this.b.$watch("attachLogs",this.j.bind(this));this.b.attachLogs=!0;this.o=Xc();this.b.userEmail="";chrome.identity.getProfileUserInfo(function(a){c.b.userEmail=a.email;Of(c)});this.b.yourAnswerText=Lf;this.b.language=
chrome.i18n&&chrome.i18n.getUILanguage?chrome.i18n.getUILanguage():chrome.runtime.getManifest().default_locale;this.b.requestLogsInProgress=!1;this.b.mrVersion=chrome.runtime.getManifest().version};g=Pf.prototype;g.Fj=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(new Qf(c,arguments[c]));b.push(new Qf(0,arguments[0]));return b};g.ap=function(){this.b.feedbackDescription&&!confirm(Cf)||window.close()};
g.cp=function(){var a=this.b.feedbackType;this.b.sufficientFeedback="MirroringQuality"==a?this.b.videoSmoothness||this.b.videoQuality||this.b.audioQuality||this.b.comments:"Discovery"==a?this.b.visibleInSetup||this.b.comments:!!this.b.feedbackDescription};
g.lr=function(){if(this.b.sufficientFeedback){var a=this.b.feedbackType,b="";"MirroringQuality"==a?(this.b.videoSmoothness&&(b+="\nVideo Smoothness: "+this.b.videoSmoothness),this.b.videoQuality&&(b+="\nVideo Quality: "+this.b.videoQuality),this.b.audioQuality&&(b+="\nAudio: "+this.b.audioQuality),this.b.projectedContentUrl&&(b+="\nProjected Content/URL: "+this.b.projectedContentUrl),this.b.comments&&(b+="\nComments: "+this.b.comments)):"Discovery"==a?(this.b.visibleInSetup&&(b+="\nChromecast Visible in Setup: "+
this.b.visibleInSetup),this.b.hasNetworkSoftware&&(b+="\nUsing VPN/proxy/firewall/NAS Software: "+this.b.hasNetworkSoftware),this.b.networkDescription&&(b+="\nNetwork Description: "+this.b.networkDescription),this.b.comments&&(b+="\nComments: "+this.b.comments)):b=this.b.feedbackDescription;a="Type: "+a+"\n\n"+b;this.b.sendDialogText=Df;this.b.okButton=Kf;this.b.feedbackSent=!1;this.s.show({locals:{My:this.b.feedbackSent,cz:this.b.sendDialogText,aq:this.b.okButton},scope:this.b,preserveScope:!0,bindToController:!0,
template:'<md-dialog id="feedback-confirmation"><md-dialog-content><div id="send-feedback-text">{{sendDialogText}}</div><md-dialog-actions><md-button class="md-raised md-primary"ng-disabled="!feedbackSent" ng-click="closeWindow()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.h});this.qm(a,Date.now())}};g.qm=function(a,b){var c=Date.now();!this.b.requestLogsInProgress||5E3<c-b?Rf(this,a):setTimeout(this.qm.bind(this),1E3,a,b)};
var Rf=function(a,b){var c=0,d=function(b,c,d){d?b(!0):(a.b.sendDialogText=Gf,Of(a),c(Error("Failed to send")))},e=chrome.declarativeWebRequest?"MrTeamfood":"MRStable";Ke(new Ie(function(){c++;return new Promise(function(c,h){var f=a.b.userEmail,n=a.f;c=d.bind(null,c,h);h=chrome.runtime.getManifest();ef({productId:85561,bucket:e,flow:"submit",serverUri:"https://www.google.com/tools/feedback",allowNonLoggedInFeedback:!0,locale:h.default_locale,enableAnonymousFeedback:!f,report:{description:b},callback:c},
{version:h.version,description:h.description,user_email:f||"NA",logs:n.Yd||"NA",external_logs:n.b||"NA",device_model:n.modelName||"NA",receiver_version:n.j||"NA",dash_report_url:n.g||"NA",cast_device_counts:n.f,dial_device_counts:n.h})})},1E4,4),2).start().then(function(){Qb("MediaRouter.Ui.Action.Feedback");a.b.sendDialogText=Ff;a.b.feedbackSent=!0;Of(a)},function(){a.b.sendDialogText=Ef;a.b.feedbackSent=!0;Of(a)})};
Pf.prototype.j=function(){var a=this;this.f=new ff;this.b.attachLogs&&(this.b.requestLogsInProgress=!0,chrome.runtime.sendMessage(new Ue(this.o,"retrieve_log_data"),function(b){a.b.requestLogsInProgress=!1;a.f.Yd=b.logs||"no extension";a.f.Yd+="\n";a.f.Yd+=b.mediaSinkServiceStatus||"no media sink service status from browser";b.castStreamingLogs&&(a.f.g=b.castStreamingLogs);b.castDeviceCounts&&(a.f.f=b.castDeviceCounts);b.dialDeviceCounts&&(a.f.h=b.dialDeviceCounts);if(b=b.device)if(b.model&&(a.f.modelName=
b.model),b.version&&(a.f.j=b.version),!a.g){var c=Xc();a.g=!0;a.f.b=Qe(b.ip,c,a.u.bind(a))}}))};
Pf.prototype.B=function(){this.b.logs=this.f.Yd;this.b.logsHeader=Hf;this.b.sendLogs=If;this.b.fineLogsWarning=Jf;this.b.okButton=Kf;this.s.show({locals:{Cy:this.b.attachLogs,Yd:this.b.logs,Py:this.b.includeFineLogs,Zy:this.b.logsHeader,dz:this.b.sendLogs,Ny:this.b.fineLogsWarning,aq:this.b.okButton},scope:this.b,preserveScope:!0,bindToController:!0,clickOutsideToClose:!0,template:'<md-dialog><md-dialog-content id="logs-dialog"><div class="subheading">{{logsHeader}}</div><div ng-show="includeFineLogs && attachLogs"id="feedback-fine-log-warning" class="informative">{{fineLogsWarning}}</div><pre>{{logs}}</pre><div class="send-logs"><md-checkbox type="checkbox" ng-model="attachLogs"ng-change="attachLogsClick()"><span>{{sendLogs}}</span></md-checkbox></div><md-dialog-actions><md-button class="md-raised md-primary"ng-click="closeDialog()">{{okButton}}</md-button></md-dialog-actions></md-dialog-content></md-dialog>',controller:this.h})};
Pf.prototype.u=function(a,b){this.g=!1;this.f.b="error"==a?"":b;this.b.attachLogs||(this.f.b="");Of(this)};var Of=function(a){a.b.$$phase||a.b.$apply()};Pf.prototype.h=function(a,b){a.closeWindow=function(){window.close()};a.closeDialog=function(){b.hide()}};Pf.prototype.h.$inject=["$scope","$mdDialog"];var Qf=function(a,b){this.id=a;this.desc=b;this.text=0==a?b:a+" ("+b+")"};
angular.module("feedbackApp","chrome_18n material.components.button material.components.checkbox material.components.dialog material.components.input material.components.radioButton".split(" ")).controller("FeedbackCtrl",["$scope","$mdDialog",Pf]);r("ng.safehtml.googSceHelper.isGoogHtmlType",function(a){return a&&a.Ee?!0:!1});r("ng.safehtml.googSceHelper.isCOMPILED",function(){return!0});r("ng.safehtml.googSceHelper.unwrapAny",function(a){if(a instanceof ue)return ve(a);if(a instanceof Ee)return Fe(a);if(a instanceof ye)return ze(a);if(a instanceof Be)return Ce(a);if(a instanceof me)return ne(a);throw Error();});
r("ng.safehtml.googSceHelper.unwrapGivenContext",function(a,b){if("html"==a)return Fe(b);if("resourceUrl"==a||"templateUrl"==a)return ve(b);if("url"==a)return b instanceof ue?ve(b):ze(b);if("css"==a)return Ce(b);if("js"==a)return ne(b);throw Error();});
