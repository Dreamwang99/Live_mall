(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gerenzhuye-gerenzhuye"],{1770:function(i,t,e){"use strict";var a=e("1bdc"),n=e.n(a);n.a},"1bdc":function(i,t,e){var a=e("d1aa");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("69d3ccae",a,!0,{sourceMap:!1,shadowMode:!1})},"1e52":function(i,t,e){"use strict";var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-image",{staticClass:"navback",attrs:{src:"../../static/gerenshangjia/20_back.png",mode:""},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.navback()}}}),e("v-uni-view",{staticClass:"beijing",style:{backgroundImage:"url(/static/gerenzhongxin/bg-61-dingfu.png)"}},[e("v-uni-view",{staticClass:"heng"},[e("v-uni-image",{staticClass:"tx",attrs:{src:i.userlist.avatar,mode:""}}),e("v-uni-view",[e("v-uni-view",{class:i.show?"guanzhu":"quxiaoguanzhu",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.cancel1.apply(void 0,arguments)}}},[i._v(i._s(i.show?"+关注":"取消关注"))])],1)],1),e("v-uni-view",{staticClass:"tiezhu"},[i._v(i._s(i.userlist.user_nicename))]),e("v-uni-view",{staticClass:"heng"},[e("v-uni-view",{staticClass:"id"},[i._v("ID:"+i._s(i.userlist.id))]),e("v-uni-view",{staticClass:"fensi"},[i._v(i._s(i.userlist.fans)+"粉丝")]),e("v-uni-view",{staticClass:"fensi",staticStyle:{"margin-left":"35rpx"}},[i._v("|")]),e("v-uni-view",{staticClass:"fensi",staticStyle:{"margin-left":"35rpx"}},[i._v(i._s(i.userlist.focus)+"关注")])],1)],1),e("v-uni-view",{staticClass:"heng"},[e("v-uni-view",{staticClass:"shipin",class:0===i.num?"ac":"",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sel_nav(0)}}},[i._v("视频")]),e("v-uni-view",{staticClass:"shipin",class:1===i.num?"ac":"",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sel_nav(1)}}},[i._v("直播")])],1),e("v-uni-view",{staticStyle:{height:"4rpx","background-color":"#F5F5F5","margin-top":"10rpx"}}),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===i.num,expression:"num === 0"}],staticClass:"classify"},i._l(i.detalis,function(t,a){return e("v-uni-view",{key:a,staticClass:"heng"},[e("v-uni-view",{staticClass:"tu",style:{backgroundImage:"url("+t.thumb+")"}},[e("v-uni-view",{staticClass:"xiaohei"},[i._v(i._s(i.goodslist.user_nicename))]),e("v-uni-view",{staticClass:"heng"},[e("v-uni-view",{staticClass:"paimeishi"},[i._v(i._s(i.goodslist.signature))]),e("v-uni-image",{staticClass:"bf",attrs:{src:"../../static/gerenzhongxin/iocn-59-bf.png",mode:""}}),e("v-uni-view",{staticClass:"shu2"},[i._v(i._s(t.views))])],1)],1)],1)}),1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===i.num,expression:"num === 1"}],staticClass:"classify"},i._l(i.arr,function(t,a){return e("v-uni-view",{key:a,staticClass:"heng"},[e("v-uni-view",{staticClass:"tu",style:{backgroundImage:"url(/static/gerenzhongxin/img-61-sp.png)"}},[e("v-uni-view",{staticClass:"xiaohei"},[i._v("@小黑粉")]),e("v-uni-view",{staticClass:"heng"},[e("v-uni-view",{staticClass:"paimeishi"},[i._v("给大家拍个美食来看看")]),e("v-uni-image",{staticClass:"bf",attrs:{src:"../../static/gerenzhongxin/iocn-59-bf.png",mode:""}}),e("v-uni-view",{staticClass:"shu2"},[i._v("123")])],1)],1)],1)}),1)],1)},n=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return n})},"96e5":function(i,t,e){"use strict";e.r(t);var a=e("1e52"),n=e("cea5");for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);e("1770");var o=e("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"21bb80a0",null);t["default"]=r.exports},ccdf:function(i,t,e){"use strict";var a=e("288e");e("28a5");var n=a(e("f499")),s={default:void 0,call:function(i,t,e){var a="";if("function"==typeof t&&(e=t,t={}),t={data:void 0===t?null:t},"function"==typeof e){var s="dscb"+window.dscb++;window[s]=e,t._dscbstub=s}return t=(0,n.default)(t),window._dsbridge?a=_dsbridge.call(i,t):(window._dswk||-1!=navigator.userAgent.indexOf("_dsbridge"))&&(a=prompt("_dsbridge="+i,t)),JSON.parse(a||"{}").data},register:function(i,t,e){e=e?window._dsaf:window._dsf,window._dsInit||(window._dsInit=!0,setTimeout(function(){s.call("_dsb.dsinit")},0)),"object"==typeof t?e._obs[i]=t:e[i]=t},registerAsyn:function(i,t){this.register(i,t,!0)},hasNativeMethod:function(i,t){return this.call("_dsb.hasNativeMethod",{name:i,type:t||"all"})},disableJavascriptDialogBlock:function(i){this.call("_dsb.disableJavascriptDialogBlock",{disable:!1!==i})}};!function(){if(!window._dsf){var i,t={_dsf:{_obs:{}},_dsaf:{_obs:{}},dscb:0,dsBridge:s,close:function(){s.call("_dsb.closePage")},_handleMessageFromNative:function(i){var t=JSON.parse(i.data),e={id:i.callbackId,complete:!0},a=this._dsf[i.method],n=this._dsaf[i.method],o=function(i,a){e.data=i.apply(a,t),s.call("_dsb.returnValue",e)},r=function(i,a){t.push(function(i,t){e.data=i,e.complete=!1!==t,s.call("_dsb.returnValue",e)}),i.apply(a,t)};if(a)o(a,this._dsf);else if(n)r(n,this._dsaf);else if(a=i.method.split("."),!(2>a.length)){i=a.pop();a=a.join("."),n=this._dsf._obs,n=n[a]||{};var c=n[i];c&&"function"==typeof c?o(c,n):(n=this._dsaf._obs,n=n[a]||{},(c=n[i])&&"function"==typeof c&&r(c,n))}}};for(i in t)window[i]=t[i];s.register("_hasJavascriptMethod",function(i,t){return t=i.split("."),2>t.length?!(!_dsf[t]&&!_dsaf[t]):(i=t.pop(),t=t.join("."),(t=_dsf._obs[t]||_dsaf._obs[t])&&!!t[i])})}}(),i.exports=s},cd49:function(i,t,e){"use strict";var a=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac6a");var n=a(e("ccdf")),s={data:function(){return{num:0,c:0,show:!0,list:[{name:"+关注",a:!0},{name:"取消关注",b:!1}],uid:"",arr:[],detalis:[],goodslist:"",userlist:"",token:"",UIDS:""}},onLoad:function(){this.getpersonalhomepage(),this.getvideolist(),this.getMyfans(),this.getLiverecord()},methods:{navback:function(){return console.log("back"),n.default.call("navBack","页面返回"),!0},getpersonalhomepage:function(){n.default.register("personalHomePageCallback",function(i){console.log(i),console.log(JSON.parse(i)),console.log(JSON.parse(i).uid),this.UIDS=JSON.parse(i).uid})},getvideolist:function(){var i=this;this.request.getmyvideo({uid:this.UIDS,token:uni.getStorageSync("token")}).then(function(t){console.log(t),i.detalis=t.data.info,i.detalis.forEach(function(t){i.goodslist=t.userinfo})})},getLiverecord:function(){var i=this;this.request.getLivere({touid:this.UIDS}).then(function(t){console.log(t),i.arr=t.data.info,i.detalis.forEach(function(t){i.goodslist=t.userinfo})})},getMyfans:function(){var i=this;this.request.getMyFans({token:uni.getStorageSync("token"),user_id:this.UIDS}).then(function(t){console.log(t),i.userlist=t.data})},cancel1:function(){this.request.getAttent({uid:uni.getStorageSync("id"),touid:this.UIDS}).then(function(i){console.log(i)}),this.show=!this.show},sel_nav:function(i){switch(console.log(i),i){case 0:this.num=0,this.page=1;break;case 1:this.num=1,this.page=1;break}},cancel:function(i){for(var t=0;t<this.list.length;t++)this.list[t].a=i==t}}};t.default=s},cea5:function(i,t,e){"use strict";e.r(t);var a=e("cd49"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);t["default"]=n.a},d1aa:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".beijing[data-v-21bb80a0]{height:%?380?%;background-size:100% 100%}.heng[data-v-21bb80a0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.tx[data-v-21bb80a0]{height:%?112?%;width:%?112?%;margin-left:%?70?%;margin-top:%?162?%;border-radius:50%}.guanzhu[data-v-21bb80a0]{margin-top:%?190?%;height:%?55?%;font-size:%?27?%;line-height:%?55?%;text-align:center;width:%?370?%;background-color:#f13620;border-radius:%?40?%;margin-left:%?50?%;color:#fff}.quxiaoguanzhu[data-v-21bb80a0]{margin-top:%?190?%;height:%?55?%;font-size:%?27?%;line-height:%?55?%;text-align:center;width:%?370?%;background-color:#a5a5a5;border-radius:%?40?%;margin-left:%?50?%;color:#fff}.tiezhu[data-v-21bb80a0]{font-size:%?26?%;line-height:%?53?%;margin-left:%?100?%;color:#fff}.id[data-v-21bb80a0]{margin-left:%?100?%;color:#fff;font-size:%?17?%;margin-top:%?3?%}.fensi[data-v-21bb80a0]{margin-left:%?130?%;color:#fff;font-size:%?25?%}.shipin[data-v-21bb80a0]{font-size:%?28?%;line-height:%?50?%;margin-left:%?206?%}.ac[data-v-21bb80a0]{color:#f23d3d;text-align:center;border-bottom:%?3?% solid #f23d3d}.hongxian[data-v-21bb80a0]{height:%?4?%;width:%?75?%;margin-left:%?198?%;background-color:#ff212c}.tu[data-v-21bb80a0]{height:%?345?%;width:%?240?%;margin-left:%?8?%;margin-top:%?12?%;background-size:100% 100%}.xiaohei[data-v-21bb80a0]{margin-top:%?280?%;font-size:%?17?%;color:#fff;margin-left:%?6?%}.paimeishi[data-v-21bb80a0]{margin-top:%?8?%;font-size:%?12?%;color:#fff;margin-left:%?6?%}.bf[data-v-21bb80a0]{height:%?15?%;width:%?12?%;margin-top:%?10?%;margin-left:%?30?%}.shu2[data-v-21bb80a0]{margin-top:%?5?%;font-size:%?12?%;color:#fff;margin-left:%?12?%}.classify[data-v-21bb80a0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.navback[data-v-21bb80a0]{position:absolute;left:%?30?%;top:%?45?%;width:%?35?%;height:%?45?%;z-index:999}",""])}}]);