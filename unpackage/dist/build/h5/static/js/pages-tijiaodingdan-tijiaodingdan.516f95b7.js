(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tijiaodingdan-tijiaodingdan"],{"24c2":function(t,i,n){"use strict";var a=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("59ad")),o=a(n("69e1")),s={components:{uniPopup:o.default},data:function(){return{dian:!1,pintuanyaoqing:!1,buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"李二狗",head:"大",tel:"12345678912",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;uni.getStorage({key:"buylist",success:function(i){t.buylist=i.data,t.goodsPrice=0;for(var n=t.buylist.length,a=0;a<n;a++)t.goodsPrice=t.goodsPrice+t.buylist[a].number*t.buylist[a].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),uni.getStorage({key:"selectAddress",success:function(i){t.recinfo=i.data,uni.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(t){return(0,e.default)(t).toFixed(2)}},methods:{dianji:function(){this.dian=!this.dian},togglePopup:function(t,i){this.type=t,"dibu"===i&&(this.pintuanyaoqing=!0)},cancel:function(t){"quxiao"===t&&(this.pintuanyaoqing=!1)},clearOrder:function(){var t=this;uni.removeStorage({key:"buylist",success:function(i){t.buylist=[],console.log("remove buylist success")}})},toPay:function(){for(var t=this,i=[],n=[],a=this.buylist.length,e=0;e<a;e++)i.push(this.buylist[e]),n.push(this.buylist[e].id);0!=i.length?(uni.showLoading({title:"正在提交订单..."}),setTimeout(function(){uni.setStorage({key:"paymentOrder",data:i,success:function(){uni.hideLoading(),uni.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):uni.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){uni.navigateTo({url:"../user/address/address?type=select"})}}};i.default=s},3558:function(t,i,n){"use strict";n.r(i);var a=n("24c2"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},"3c05":function(t,i,n){var a=n("7fe8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("38a8f7c2",a,!0,{sourceMap:!1,shadowMode:!1})},4421:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"addr",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectAddress.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon"},[n("v-uni-image",{attrs:{src:"../../static/dingdan/icon-4-dw.png",mode:""}})],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"tel-name"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.recinfo.name))]),n("v-uni-view",{staticClass:"tel"},[t._v(t._s(t.recinfo.tel))])],1),n("v-uni-view",{staticClass:"addres"},[t._v(t._s(t.recinfo.address.region.label)+"\n\t\t\t\t"+t._s(t.recinfo.address.detailed))])],1)],1),n("v-uni-view",{staticClass:"buy-list"},t._l(t.buylist,function(i,a){return n("v-uni-view",{key:a,staticClass:"row"},[n("v-uni-view",{staticClass:"goods-info"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:i.img}})],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(i.name))]),n("v-uni-view",{staticClass:"spec"},[t._v("选择"+t._s(i.spec)+" 数量:"+t._s(i.number))]),n("v-uni-view",{staticClass:"price-number"},[n("v-uni-view",{staticClass:"price"},[t._v("￥"+t._s(i.price*i.number))])],1)],1)],1),n("v-uni-view",{staticClass:"heng"},[n("v-uni-view",{staticClass:"se",staticStyle:{"margin-top":"61rpx"}},[t._v("购买数量")]),n("v-uni-view",{staticClass:"jian"},[t._v("-")]),n("v-uni-view",{staticClass:"shu"},[t._v(t._s(i.number))]),n("v-uni-view",{staticClass:"jian jia1"},[t._v("+")])],1),n("v-uni-view",{staticClass:"heng"},[n("v-uni-view",{staticClass:"se",staticStyle:{"margin-top":"40rpx"}},[t._v("发配时间")]),n("v-uni-view",{staticClass:"se time"},[t._v(t._s(t.time))])],1),n("v-uni-view",{staticClass:"heng"},[n("v-uni-view",{staticClass:"se",staticStyle:{"margin-top":"43rpx"}},[t._v("配送费")]),n("v-uni-view",{staticClass:"se mianyou"},[t._v("快递 免邮")])],1)],1)}),1),n("v-uni-view",{staticClass:"heng",staticStyle:{"background-color":"#FFFFFF",width:"95%","margin-left":"20rpx"}},[n("v-uni-image",{staticClass:"zfb",attrs:{src:"../../static/zhibo/iocn-105-zfb.png",mode:"aspectFit"}}),n("v-uni-view",{staticClass:"zi"},[t._v("支付宝")]),n("v-uni-image",{staticClass:"gou",staticStyle:{"margin-top":"35rpx"},attrs:{src:t.dian?"../../static/center/iocn-gou.png":"../../static/center/iocn-20-yuan.png",mode:"aspectFit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dianji.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"heng",staticStyle:{"background-color":"#FFFFFF",width:"95%","margin-left":"20rpx"}},[n("v-uni-image",{staticClass:"zfb",staticStyle:{"margin-top":"35rpx"},attrs:{src:"../../static/zhibo/iocn-105-wx.png",mode:"aspectFit"}}),n("v-uni-view",{staticClass:"zi",staticStyle:{"margin-top":"35rpx"}},[t._v("微信")]),n("v-uni-image",{staticClass:"gou",staticStyle:{"margin-top":"35rpx"},attrs:{src:t.dian?"../../static/center/iocn-gou.png":"../../static/center/iocn-20-yuan.png",mode:"aspectFit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.dianji.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"blck"}),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticClass:"heng"},[n("v-uni-button",{staticClass:"pintuan",attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.togglePopup("bottom","dibu")}}},[t._v("拼团购物")]),n("v-uni-button",{staticClass:"pintuan tijiao",attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPay.apply(void 0,arguments)}}},[t._v("提交订单")])],1)],1),n("uni-popup",{attrs:{show:t.pintuanyaoqing,type:"bottom"}},[n("v-uni-view",{staticStyle:{height:"315rpx","background-color":"#FFFFFF"}},[n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[n("v-uni-image",{staticClass:"xj",attrs:{src:"../../static/iocn-weixin.png"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancle("wxhy")}}}),n("v-uni-view",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancle("pyq")}}},[n("v-uni-image",{staticClass:"xj",attrs:{src:"../../static/zhibo/icon-pyq.png"}})],1)],1),n("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[n("v-uni-view",{staticClass:"xiangcexq"},[t._v("微信好友")]),n("v-uni-view",{staticClass:"xiangjips"},[t._v("朋友圈")])],1),n("v-uni-view",{staticStyle:{height:"1rpx","background-color":"#F5F5F5","margin-top":"40rpx","margin-bottom":"40rpx"}}),n("v-uni-view",{staticClass:"quxiao",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancel("quxiao")}}},[t._v("取消")])],1)],1)],1)},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},4590:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},52722:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*\n  ColorUi for uniApp  v2.1.6 | by 文晓港 2019-05-31 10:44:24\n  仅供学习交流，如作它用所承受的法律责任一概与作者无关  \n  \n  *使用ColorUi开发扩展与插件时，请注明基于ColorUi开发 \n  \n  （QQ交流群：240787041）\n*/\n/* ==================\n        初始化\n ==================== */.addr[data-v-295d0cd0]{width:95%;padding:%?20?% 3%;margin:%?30?% auto %?20?% auto;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff}.addr .icon[data-v-295d0cd0]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.addr .icon uni-image[data-v-295d0cd0]{width:%?60?%;height:%?60?%}.addr .tel-name[data-v-295d0cd0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?23?%}.addr .tel-name .tel[data-v-295d0cd0]{margin-left:%?40?%;color:#c3c3c3;font-size:%?17?%}.addr .addres[data-v-295d0cd0]{width:100%;color:#999;font-size:%?17?%;margin-top:%?5?%}.buy-list[data-v-295d0cd0]{width:95%;padding:%?10?% 3%;margin:%?10?% auto %?20?% auto;background-color:#fff}.buy-list .row[data-v-295d0cd0]{margin:%?30?% 0}.buy-list .row .goods-info[data-v-295d0cd0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.buy-list .row .goods-info .img[data-v-295d0cd0]{width:22vw;height:22vw;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?10?%}.buy-list .row .goods-info .img uni-image[data-v-295d0cd0]{width:22vw;height:22vw}.buy-list .row .goods-info .info[data-v-295d0cd0]{width:100%;height:22vw;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.buy-list .row .goods-info .info .title[data-v-295d0cd0]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.buy-list .row .goods-info .info .spec[data-v-295d0cd0]{font-size:%?22?%;color:#a7a7a7;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?10?%;border-radius:%?20?%;margin-bottom:20vw;margin-top:%?5?%}.buy-list .row .goods-info .info .price-number[data-v-295d0cd0]{position:absolute;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;font-size:%?28?%;height:%?40?%}.buy-list .row .goods-info .info .price-number .price[data-v-295d0cd0]{color:#f06c7a}.buy-list .row .goods-info .info .price-number .number[data-v-295d0cd0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order[data-v-295d0cd0]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;background-color:#fff;border-radius:%?20?%}.order .row[data-v-295d0cd0]{margin:%?20?% 0;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.order .row .left[data-v-295d0cd0]{font-size:%?28?%}.order .row .right[data-v-295d0cd0]{margin-left:%?40?%;font-size:%?26?%;color:#999}.order .row .right uni-input[data-v-295d0cd0]{font-size:%?26?%;color:#999}.blck[data-v-295d0cd0]{width:100%;height:%?100?%}.footer[data-v-295d0cd0]{width:92%;padding:0 4%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .settlement[data-v-295d0cd0]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .settlement .sum[data-v-295d0cd0]{width:50%;font-size:%?28?%;margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.footer .settlement .sum .money[data-v-295d0cd0]{font-weight:600}.footer .settlement .btn[data-v-295d0cd0]{padding:0 %?30?%;height:%?60?%;background-color:#f06c7a;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;border-radius:%?40?%}.detail[data-v-295d0cd0]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;border-radius:%?20?%}.detail .row[data-v-295d0cd0]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail .row .nominal[data-v-295d0cd0]{font-size:%?28?%}.detail .row .content[data-v-295d0cd0]{font-size:%?26?%;color:#f06c7a}.xj[data-v-295d0cd0]{height:%?80?%;width:%?80?%;margin-top:%?55?%;margin-left:%?188?%}.quxiao[data-v-295d0cd0]{text-align:center;font-size:%?25?%}.xiangcexq[data-v-295d0cd0]{margin-top:%?22?%;margin-left:%?180?%;font-size:%?22?%}.xiangjips[data-v-295d0cd0]{margin-top:%?22?%;margin-left:%?180?%;font-size:%?22?%}.pintuan[data-v-295d0cd0]{height:%?68?%;width:%?240?%;border-radius:%?40?%;margin-top:%?28?%;margin-bottom:%?26?%;font-size:%?25?%;line-height:%?68?%;background-color:#f14c25;margin-left:%?70?%}.gou[data-v-295d0cd0]{height:%?30?%;width:%?30?%;margin-top:%?54?%;margin-left:auto;margin-right:%?23?%}.tijiao[data-v-295d0cd0]{background-color:#f2ae3d;margin-left:%?133?%}.heng[data-v-295d0cd0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.se[data-v-295d0cd0]{margin-top:%?32?%;margin-left:%?16?%;font-size:%?20?%}.yanse[data-v-295d0cd0]{margin-top:%?32?%;font-size:%?20?%}.jia[data-v-295d0cd0]{color:#ff4446;font-size:%?23?%;margin-top:%?32?%;margin-left:%?16?%}.jian[data-v-295d0cd0]{font-size:%?21?%;margin-left:%?460?%;margin-top:%?61?%}.shu[data-v-295d0cd0]{width:%?42?%;height:%?42?%;font-size:%?21?%;margin-left:%?15?%;margin-top:%?58?%;background-color:#f5f5f5;line-height:%?42?%;text-align:center}.jia1[data-v-295d0cd0]{margin-left:%?15?%;color:#000}.mianyou[data-v-295d0cd0]{margin-left:%?450?%}.time[data-v-295d0cd0]{margin-left:%?366?%}.zfb[data-v-295d0cd0]{height:%?30?%;width:%?30?%;margin-top:%?54?%;margin-left:%?20?%}.gou[data-v-295d0cd0]{height:%?30?%;width:%?30?%;margin-top:%?54?%;margin-left:auto;margin-right:%?23?%}.zi[data-v-295d0cd0]{font-size:%?20?%;margin-left:%?10?%;margin-top:%?54?%}',""])},5906:function(t,i,n){"use strict";n.r(i);var a=n("ffe0"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},"5d4a":function(t,i,n){"use strict";var a=n("60cc"),e=n.n(a);e.a},"60cc":function(t,i,n){var a=n("52722");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("af2f731c",a,!0,{sourceMap:!1,shadowMode:!1})},"69e1":function(t,i,n){"use strict";n.r(i);var a=n("6d44"),e=n("5906");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("93b2");var s=n("2877"),r=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"f989f380",null);i["default"]=r.exports},"6d44":function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},e=[];n.d(i,"a",function(){return a}),n.d(i,"b",function(){return e})},"7fe8":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*\n  ColorUi for uniApp  v2.1.6 | by 文晓港 2019-05-31 10:44:24\n  仅供学习交流，如作它用所承受的法律责任一概与作者无关  \n  \n  *使用ColorUi开发扩展与插件时，请注明基于ColorUi开发 \n  \n  （QQ交流群：240787041）\n*/\n/* ==================\n        初始化\n ==================== */.uni-popup[data-v-f989f380]{position:fixed;top:var(--window-top);bottom:0;left:0;right:0;z-index:99}.uni-popup__mask[data-v-f989f380]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-f989f380]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-f989f380]{opacity:1}.uni-bottom-mask[data-v-f989f380]{opacity:1}.uni-center-mask[data-v-f989f380]{opacity:1}.uni-popup__wrapper[data-v-f989f380]{display:block;position:absolute}.top[data-v-f989f380]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-f989f380]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-f989f380]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;bottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-f989f380]{display:block;position:relative}.content-ani[data-v-f989f380]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-f989f380]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-f989f380]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-f989f380]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""])},"8b28":function(t,i,n){"use strict";n.r(i);var a=n("4590"),e=n("c6c0");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("9aab");var s=n("2877"),r=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"75222db0",null);i["default"]=r.exports},"93b2":function(t,i,n){"use strict";var a=n("3c05"),e=n.n(a);e.a},"9aab":function(t,i,n){"use strict";var a=n("afb3"),e=n.n(a);e.a},ae0b:function(t,i,n){"use strict";var a=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("a481"),n("ac6a");var e=a(n("cebc"));n("c5f6");var o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,e.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),i="";for(var n in t){var a=this.toLine(n);i+=a+":"+t[n]+";"}return i}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var i in this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===i?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[i]," ");this.$nextTick(function(){setTimeout(function(){t._animation(!0)},50)})},close:function(t){this._animation(!1)},_animation:function(t){var i=this,n=this.getTranfrom(t);for(var a in this.transform="",n)"opacity"===a?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[a]," ");clearTimeout(this.timer),this.timer=setTimeout(function(){t||(i.isShow=!1),i.$emit("change",{detail:i.isShow})},this.duration)},getTranfrom:function(t){var i={transform:""};return this.modeClass.forEach(function(n){switch(n){case"fade":i.opacity=t?1:0;break;case"slide-top":i.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":i.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":i.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":i.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":i.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":i.transform+="scale(".concat(t?1:1.2,") ");break}}),i},_modeClassArr:function(t){var i=this.modeClass;if("string"!==typeof i){var n="";return i.forEach(function(i){n+=i+"-"+t+","}),n.substr(0,n.length-1)}return i+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};i.default=o},afb3:function(t,i,n){var a=n("b0aa");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("4f06").default;e("7413e8c0",a,!0,{sourceMap:!1,shadowMode:!1})},b0aa:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".uni-transition[data-v-75222db0]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-75222db0]{opacity:0}.fade-active[data-v-75222db0]{opacity:1}.slide-top-in[data-v-75222db0]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-75222db0]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-75222db0]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-75222db0]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-75222db0]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-75222db0]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-75222db0]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-75222db0]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-75222db0]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-75222db0]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-75222db0]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""])},c6c0:function(t,i,n){"use strict";n.r(i);var a=n("ae0b"),e=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);i["default"]=e.a},de11:function(t,i,n){"use strict";n.r(i);var a=n("4421"),e=n("3558");for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);n("5d4a");var s=n("2877"),r=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"295d0cd0",null);i["default"]=r.exports},ffe0:function(t,i,n){"use strict";var a=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a(n("8b28")),o={name:"UniPopup",components:{uniTransition:e.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var i=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(i.timer),i.timer=setTimeout(function(){i.$emit("change",{show:!1}),i.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};i.default=o}}]);