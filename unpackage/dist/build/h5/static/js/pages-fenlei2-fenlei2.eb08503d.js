(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fenlei2-fenlei2"],{"0fa3":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{list:[{name:"雅诗兰黛"},{name:"海蓝之谜"},{name:"YSL"},{name:"倩碧"},{name:"阿玛尼"},{name:"雪花秀"},{name:"Nars"},{name:"娇诗韵"},{name:"cpd"},{name:"神仙水",a:!1},{name:"娇兰"}],tabCur:0,mainCur:0,verticalNavTop:0,load:!0}},onLoad:function(){uni.showLoading({title:"加载中...",mask:!0});for(var t=[{}],i=0;i<26;i++)t[i].name=item.name,t[i]={},t[i].id=i;this.list=t,this.listCur=t[0]},onReady:function(){uni.hideLoading()},methods:{TabSelect:function(t){this.tabCur=t.currentTarget.dataset.id,this.mainCur=t.currentTarget.dataset.id,this.verticalNavTop=50*(t.currentTarget.dataset.id-1)},VerticalMain:function(t){var i=this,a=0;if(this.load){for(var e=function(t){var e=uni.createSelectorQuery().select("#main-"+i.list[t].id);e.fields({size:!0},function(e){i.list[t].top=a,a+=e.height,i.list[t].bottom=a}).exec()},n=0;n<this.list.length;n++)e(n);this.load=!1}var r=t.detail.scrollTop+10;for(n=0;n<this.list.length;n++)if(r>this.list[n].top&&r<this.list[n].bottom)return this.verticalNavTop=50*(this.list[n].id-1),this.tabCur=this.list[n].id,console.log(r),!1}}};i.default=e},"507a":function(t,i,a){var e=a("8b7f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5ec8a51c",e,!0,{sourceMap:!1,shadowMode:!1})},"6ee8":function(t,i,a){"use strict";var e=a("507a"),n=a.n(e);n.a},"8b7f":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,'.fixed[data-v-8e6e34f4]{position:fixed;z-index:99}.VerticalNav.nav[data-v-8e6e34f4]{width:%?200?%;white-space:normal}.meizhuang[data-v-8e6e34f4]{font-size:%?28?%;line-height:%?90?%;margin-left:%?23?%}.hzp1[data-v-8e6e34f4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.hzp2[data-v-8e6e34f4]{font-size:%?18?%;line-height:%?63?%;margin-left:%?82?%;margin-right:%?70?%}.VerticalNav.nav .cu-item[data-v-8e6e34f4]{width:100%;text-align:center;background-color:#fff;margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-8e6e34f4]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-8e6e34f4]:after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-8e6e34f4]{display:-webkit-box;display:-webkit-flex;display:flex}.VerticalMain[data-v-8e6e34f4]{background-color:#f1f1f1;-webkit-box-flex:1;-webkit-flex:1;flex:1}',""])},9563:function(t,i,a){"use strict";a.r(i);var e=a("0fa3"),n=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(i,t,function(){return e[t]})}(r);i["default"]=n.a},b00c:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-view",{staticClass:"VerticalBox"},[a("v-uni-scroll-view",{staticClass:"VerticalNav nav",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-top":t.verticalNavTop}},t._l(t.list,function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item",class:e==t.tabCur?"text-green cur":"",attrs:{"data-id":e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.TabSelect.apply(void 0,arguments)}}},[t._v(t._s(i.name))])}),1),a("v-uni-scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375upx)"},attrs:{"scroll-y":"","scroll-with-animation":"","scroll-into-view":"main-"+t.mainCur},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.VerticalMain.apply(void 0,arguments)}}},[t._l(t.list,function(t,i){return a("v-uni-view",{key:i,staticClass:"padding-top padding-lr",attrs:{id:"main-"+i}})}),a("v-uni-view",{staticClass:"cu-list menu-avatar"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"meizhuang"},[t._v("美妆")]),a("v-uni-view",{staticClass:"hzp1"},t._l(t.list1,function(i,e){return a("v-uni-view",{key:e,staticClass:"hezi"},[a("v-uni-image",{class:i.tu,attrs:{src:i.urlimage,mode:"aspectFit"}}),a("v-uni-view",{staticClass:"hzp2"},[t._v(t._s(i.name))])],1)}),1)],1)],1)],2)],1)],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},ddbf:function(t,i,a){"use strict";a.r(i);var e=a("b00c"),n=a("9563");for(var r in n)"default"!==r&&function(t){a.d(i,t,function(){return n[t]})}(r);a("6ee8");var l=a("2877"),s=Object(l["a"])(n["default"],e["a"],e["b"],!1,null,"8e6e34f4",null);i["default"]=s.exports}}]);