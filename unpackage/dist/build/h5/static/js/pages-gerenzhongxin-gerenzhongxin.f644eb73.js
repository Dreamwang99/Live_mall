(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gerenzhongxin-gerenzhongxin"],{"26e3":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{userinfo:"",nicheng:"李二狗",list:[{urlimage:"../../static/gerenzhongxin/iocn_dfk.png",name:"待付款"},{urlimage:"/static/gerenzhongxin/icon_dfh.png",name:"待发货"},{urlimage:"/static/gerenzhongxin/icon_dsh.png",name:"待收货"},{urlimage:"/static/gerenzhongxin/iocn_dpj.png",name:"待评价"},{urlimage:"/static/gerenzhongxin/iocn_shtk.png",name:"退款/售后"}],list1:[{urlimage:"/static/gerenzhongxin/iocn-50-wodeshoucang.png",name:"我的收藏"},{urlimage:"/static/gerenzhongxin/iocn-50-jifen.png",name:"我的积分"},{urlimage:"/static/gerenzhongxin/iocn-50-pingjia.png",name:"我的评价"},{urlimage:"/static/gerenzhongxin/iocn-50-sqrz.png",name:"申请入住"},{urlimage:"/static/gerenzhongxin/iocn-50-zb.png",name:"我的视频"},{urlimage:"/static/gerenzhongxin/icon-zfaq.png",name:"账户与安全"},{urlimage:"/static/gerenzhongxin/icon-50-kf.png",name:"联系客服"},{urlimage:"/static/gerenzhongxin/iocn-50-kb.png",name:"我要开播"},{urlimage:"/static/gerenzhongxin/iocn-50-fb.png",name:"我的发布"},{urlimage:"/static/gerenzhongxin/iocn-50-shdz.png",name:"收货地址"},{urlimage:"/static/gerenzhongxin/icon_sc.png",name:"我的售出"}]}},onLoad:function(){},onShow:function(){this.getBaseInfo(),console.log(this.userinfo)},methods:{getBaseInfo:function(){var i=this;this.request.getBaseInfo({uid:uni.getStorageSync("id"),token:uni.getStorageSync("token")}).then(function(t){console.log(t),console.log(t.data.info),i.userinfo=t.data.info[0],uni.setStorageSync("userInformation",i.userinfo)})},gengduo:function(i){switch(i){case 0:uni.navigateTo({url:"../dspshoucang/dspshoucang"});break;case 1:uni.navigateTo({url:"../jifen/jifen"});break;case 2:uni.navigateTo({url:"../pinglun/pinglun"});break;case 3:uni.navigateTo({url:"../ruzhu/ruzhu"});break;case 4:uni.navigateTo({url:"../zhibo/zhibo"});break;case 5:uni.navigateTo({url:"../anquan/anquan"});break;case 6:uni.navigateTo({url:"../kefu1/kefu1"});break;case 7:uni.navigateTo({url:"../zhiboshezhi/zhiboshezhi"});break;case 8:uni.navigateTo({url:"../fabu/fabu"});break;case 9:uni.navigateTo({url:"../shouhuodizhi/shouhuodizhi"});break;case 10:uni.navigateTo({url:"../goToSell/goToSell"});break;default:break}},shezhi:function(){uni.navigateTo({url:"../center/center"})},exit:function(){uni.clearStorageSync(),uni.reLaunch({url:"../register/register"})},tiaozhuan:function(i){switch(i){case 0:uni.navigateTo({url:"../dingdan/dingdan?tbIndex=0"});break;case 1:uni.navigateTo({url:"../dingdan/dingdan?tbIndex=1"});break;case 2:uni.navigateTo({url:"../dingdan/dingdan?tbIndex=2"});break;case 3:uni.navigateTo({url:"../dingdan/dingdan?tbIndex=3"});break;case 4:uni.navigateTo({url:"../dingdan/dingdan?tbIndex=4"});break;default:break}}}};t.default=n},"70f8":function(i,t,e){"use strict";e.r(t);var n=e("719d"),a=e("b335");for(var o in a)"default"!==o&&function(i){e.d(t,i,function(){return a[i]})}(o);e("c34f");var s=e("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"22118412",null);t["default"]=r.exports},"719d":function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticStyle:{width:"100%"}},[e("v-uni-view",{staticClass:"beijing",style:{backgroundImage:"url(/static/shangchenggrzx/bg-50-top.png)"}},[e("v-uni-view",{staticClass:"heng"},[e("v-uni-view",{staticStyle:{display:"flex","margin-top":"40rpx"}},[e("v-uni-image",{staticClass:"tx",attrs:{src:i.userinfo.avatar||"../../static/img-50-touxiang.png",mode:"aspectFit"}}),e("v-uni-view",{staticClass:"ergou"},[i._v(i._s(i.userinfo.user_nicename))])],1),e("v-uni-image",{staticClass:"shezhi",attrs:{src:"../../static/gerenzhongxin/iocn-50-shezhi.png",mode:"aspectFit"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.shezhi.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"all"},[e("v-uni-view",{staticClass:"baidi"},[e("v-uni-view",{staticClass:"bottom_title"},[e("v-uni-view",{staticClass:"xian"}),e("v-uni-view",{staticClass:"quan"},[i._v("全部订单")])],1),e("v-uni-view",{staticStyle:{display:"flex"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tiaozhuan(0)}}},[e("v-uni-view",{staticClass:"chakan"},[i._v("查看全部")]),e("v-uni-image",{staticClass:"jr",attrs:{src:"../../static/center/iocn-jinru.png",mode:"aspectFit"}})],1)],1),e("v-uni-view",{staticClass:"baidi1"},i._l(i.list,function(t,n){return e("v-uni-view",{key:n,staticClass:"dingdan_bottom",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tiaozhuan(n)}}},[e("v-uni-view",{staticClass:"hong"},[e("v-uni-image",{staticClass:"tup",attrs:{src:t.urlimage,mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"tuzi1"},[i._v(i._s(t.name))])],1)}),1)],1),e("v-uni-view",{staticClass:"baidi2"},[e("v-uni-view",{staticClass:"bottom_title"},[e("v-uni-view",{staticClass:"xian"}),e("v-uni-view",{staticClass:"quan"},[i._v("更多工具")])],1),e("v-uni-view",{staticClass:"heng1"},i._l(i.list1,function(t,n){return e("v-uni-view",{key:n,staticClass:"icont",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.gengduo(n)}}},[e("v-uni-image",{staticClass:"tu",attrs:{src:t.urlimage,mode:"aspectFit"}}),e("v-uni-view",{staticClass:"tuzi"},[i._v(i._s(t.name))])],1)}),1)],1),e("v-uni-view",{staticClass:"tijiao",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.exit.apply(void 0,arguments)}}},[i._v("退出登录")])],1)],1)},a=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return a})},ab8e:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,"uni-page-body[data-v-22118412]{background-color:#f5f5f5}.all[data-v-22118412]{background-color:#fff;width:95%;margin:auto;height:%?248?%}.beijing[data-v-22118412]{background-size:100% 100%;height:%?390?%;width:100%}.dingdan_bottom[data-v-22118412]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.beijing1[data-v-22118412]{position:absolute;background-color:#f5f5f5;margin-top:%?-73?%;height:%?1090?%;width:%?750?%}.heng[data-v-22118412]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:8% %?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.shezhi[data-v-22118412]{height:%?45?%;width:%?45?%}.heng1[data-v-22118412]{width:100%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.tup[data-v-22118412]{height:%?36?%;width:%?43?%;margin-top:%?20?%}.tx[data-v-22118412]{height:%?116?%;width:%?116?%;border-radius:50%}.ergou[data-v-22118412]{font-size:%?32?%;color:#fff;margin-left:%?30?%;margin-top:%?30?%}.hong[data-v-22118412]{height:%?75?%;width:%?75?%;border-radius:100%;text-align:center;line-height:%?75?%;background-color:#ec1f25;margin:auto}.baidi[data-v-22118412]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?% %?15?% %?20?% %?9?%;border-radius:6px}.baidi1[data-v-22118412]{background-color:#fff;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?% %?33?% %?20?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-radius:6px}.baidi2[data-v-22118412]{width:95%;height:%?569?%;padding:%?31?% %?12?% %?40?% %?9?%;margin:auto;border-top:%?30?% solid #eee;background-color:#fff}.xian[data-v-22118412]{background-color:#ff6f84;height:%?29?%;width:%?10?%;border-radius:%?10?%}.icont[data-v-22118412]{width:25%;height:%?115?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?30?%}.quan[data-v-22118412]{font-size:%?30?%;margin-left:%?13?%}.bottom_title[data-v-22118412]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.chakan[data-v-22118412]{font-size:%?26?%;color:#949494}.jr[data-v-22118412]{margin-left:%?18?%;height:%?28?%;width:%?16?%;margin-top:%?5?%}.tu[data-v-22118412]{height:%?50?%;width:%?45?%;margin:auto\n\t/* margin-left: 15%; */}.tuzi[data-v-22118412]{font-size:%?27?%;margin:auto}.tuzi1[data-v-22118412]{font-size:%?27?%;text-align:center;margin-top:%?17?%}.tijiao[data-v-22118412]{background-color:#f13821;height:%?75?%;width:%?707?%;line-height:%?75?%;border-radius:38px;font-size:%?34?%;text-align:center;color:#fff;margin-top:%?20?%;margin-left:%?20?%;margin-bottom:%?300?%\n\t/* margin: 142rpx auto; */}body.?%PAGE?%[data-v-22118412]{background-color:#f5f5f5}",""])},b335:function(i,t,e){"use strict";e.r(t);var n=e("26e3"),a=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(t,i,function(){return n[i]})}(o);t["default"]=a.a},c34f:function(i,t,e){"use strict";var n=e("da71"),a=e.n(n);a.a},da71:function(i,t,e){var n=e("ab8e");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("609f3573",n,!0,{sourceMap:!1,shadowMode:!1})}}]);