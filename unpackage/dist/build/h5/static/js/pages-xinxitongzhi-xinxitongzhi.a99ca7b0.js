(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xinxitongzhi-xinxitongzhi"],{2099:function(n,t,i){var a=i("8f55");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=i("4f06").default;e("1504fa36",a,!0,{sourceMap:!1,shadowMode:!1})},"24b8":function(n,t,i){"use strict";var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"status_bar"},[i("v-uni-view",{staticClass:"top_view"})],1),n._l(n.list,function(t,a){return i("v-uni-view",{key:a,staticClass:"xian",on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.gogogo(t)}}},[i("v-uni-view",{staticClass:"heng"},[i("v-uni-view",{staticClass:"yuan"},[1==t.type?i("v-uni-image",{staticClass:"daohuo",attrs:{src:"../../static/tongzhi/iocn-65-xx.png",mode:""}}):n._e(),2==t.type?i("v-uni-image",{staticClass:"daohuo",attrs:{src:"../../static/tongzhi/icon-65-tx.png",mode:""}}):n._e(),3==t.type?i("v-uni-image",{staticClass:"daohuo",attrs:{src:"../../static/tongzhi/iocn-65-zt.png",mode:""}}):n._e(),4==t.type?i("v-uni-image",{staticClass:"daohuo",attrs:{src:"../../static/tongzhi/iocn-65-zt.png",mode:""}}):n._e(),5==t.type?i("v-uni-image",{staticClass:"daohuo",attrs:{src:"../../static/tongzhi/iocn-65-zt.png",mode:""}}):n._e()],1),i("v-uni-view",[i("v-uni-view",{staticClass:"name1"},[n._v(n._s(t.title))]),i("v-uni-view",{staticClass:"name2"},[n._v(n._s(t.introduce))])],1)],1)],1)})],2)},e=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return e})},"2ee6":function(n,t,i){"use strict";i.r(t);var a=i("faf8"),e=i.n(a);for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);t["default"]=e.a},"65c8":function(n,t,i){"use strict";i.r(t);var a=i("24b8"),e=i("2ee6");for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);i("ab8a");var s=i("2877"),c=Object(s["a"])(e["default"],a["a"],a["b"],!1,null,"c27da64c",null);t["default"]=c.exports},"8f55":function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 顶部 */.status_bar[data-v-c27da64c]{height:0;width:100%;background-color:#fff}.top_view[data-v-c27da64c]{height:0;width:100%;position:fixed;background:-webkit-gradient(linear,0 0,100% 100%,from(#fff),to(#fff));top:0;z-index:999}.heng[data-v-c27da64c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;background:#fff}.xian[data-v-c27da64c]{width:100%;border-top:%?16?% solid #eee}.daohuo[data-v-c27da64c]{height:%?40?%;width:%?37?%;margin-top:%?30?%}.yuan[data-v-c27da64c]{background-color:#ff212c;height:%?100?%;width:%?100?%;border-radius:50%;margin-top:%?35?%;margin-left:%?20?%;text-align:center;line-height:%?100?%}.name1[data-v-c27da64c]{font-size:%?29?%;margin-left:%?27?%;margin-top:%?45?%}.name2[data-v-c27da64c]{font-size:%?26?%;margin-left:%?27?%;color:#a0a0a0;margin-top:%?20?%;margin-bottom:%?33?%}",""])},ab8a:function(n,t,i){"use strict";var a=i("2099"),e=i.n(a);e.a},faf8:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{token:uni.getStorageSync("token"),list:[]}},onLoad:function(){this.getmsglist()},methods:{getmsglist:function(){var n=this;this.request.getMessageList({token:this.token}).then(function(t){n.list=t.data,console.log(t)})},gogogo:function(n){switch(console.log(n),n.type){case 5:uni.navigateTo({url:"../kanjia/kanjia?activid="+n.other_id+"&openid="+uni.getStorageSync("id")})}}}};t.default=a}}]);