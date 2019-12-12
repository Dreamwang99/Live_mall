<template>
	<view>
		<view style="background-color: #F5F5F5;height: 1020rpx;">
			<view style="height: 10rpx;"></view>
			<view style="height: 285rpx;width: 715rpx;margin-left: 20rpx;background-color: #FFFFFF;" v-for="(row,index) in goodsList" :key="index">
			<view class="heng">
				<image class="gou" src="../../static/center/iocn-gou.png" mode="" ></image>
			<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode=""></image>	
			<view class="dpzi">某某旗舰店</view>
			</view>
			<view class="heng">
				<image class="gou1" src="../../static/center/iocn-gou.png" mode=""></image>
				<image class="dptu" src="../../static/gouwuche/img-22-sp.png" mode=""></image>
				<view >
					<view class="zi1">{{row.name}}</view>
					<view class="zi2">{{row.spec}}</view>
					<view class="heng">
						<view class="rmb">￥{{row.price}}</view>
						<view class="jian" @tap.stop="sub(index)">-</view>
						<view class="shu" @tap.stop="discard">
							<input type="number" v-model="row.number" @input="sum($event,index)" />
						</view>
						<view class="jia" @tap.stop="add(index)">+</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 10rpx;"></view>
			<view style="height: 285rpx;width: 715rpx;margin-left: 20rpx;background-color: #FFFFFF;">
			<view class="heng">
				<image class="gou" src="../../static/center/iocn-gou.png" mode=""></image>
			<image class="dp" src="../../static/gouwuche/iocn-22-dp.png" mode=""></image>	
			<view class="dpzi">某某旗舰店</view>
			</view>
			<view class="heng">
				<image class="gou1" src="../../static/center/iocn-gou.png" mode=""></image>
				<image class="dptu" src="../../static/gouwuche/img-22-sp.png" mode=""></image>
				<view >
					<view class="zi1">Snoppa折叠手机三轴稳定器 黑色</view>
					<view class="zi2">紫外线光精准诱蚊，高灭杀杀毒...</view>
					<view class="heng">
						<view class="rmb">￥128</view>
						<view class="rmb">￥128</view>
						<view class="jian">-</view>
						<view class="shu">1</view>
						<view class="jia">+</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 439rpx;"></view>
		<view class="heng" >
			<image class="quan" src="../../static/gouwuche/iocn-22-wxz.png" mode=""></image>
			<view class="qx">全选</view>
			<view class="hj">合计</view>
			<view class="rmb1">￥{{sumPrice}}</view>
			<button class="js" type="primary" @tap="toConfirmation">结算</button>
		</view>
		<view style="height:14rpx;"></view>
		<view style="background-color: #F5F5F5;height:2rpx;">
			<view class="heng">
				<view v-for="( item, index) in list" :key="index">
					<image class="ditu" :src="item.urlimage" mode=""></image>
				</view>
			</view>
			
		</view>
		<view style="height: 100rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sumPrice:'0.00',
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				selectedList:[],
				isAllselected:false,
				goodsList:[
					{id:1,img:'../../static/gouwuche/img-22-sp.png',name:'Snoppa折叠手机三轴稳定器 黑色',spec:'紫外线光精准诱蚊，高灭杀杀毒...',price:128,number:1,selected:false},
					{id:2,img:'../../static/gouwuche/img-22-sp.png',name:'Snoppa折叠手机三轴稳定器 黑色',spec:'紫外线光精准诱蚊，高灭杀杀毒...',price:128,number:1,selected:false},
					{id:3,img:'../../static/gouwuche/img-22-sp.png',name:'Snoppa折叠手机三轴稳定器 黑色',spec:'紫外线光精准诱蚊，高灭杀杀毒...',price:128,number:1,selected:false},
					{id:4,img:'../../static/gouwuche/img-22-sp.png',name:'Snoppa折叠手机三轴稳定器 黑色',spec:'紫外线光精准诱蚊，高灭杀杀毒...',price:128,number:1,selected:false},
					{id:5,img:'../../static/gouwuche/img-22-sp.png',name:'Snoppa折叠手机三轴稳定器 黑色',spec:'紫外线光精准诱蚊，高灭杀杀毒...',price:128,number:1,selected:false}
				],
			}
		},
		onNavigationBarButtonTap(e){
			uni.navigateTo({
				url:'../gwcshanchu/gwcshanchu'
			})
		},
		methods: {
			joinGoods(goods){
					/*
					* 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
					* 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
					* 一般商城购物车的增删改动作是由后端来完成的,
					* 后端记录后返回前端更新前端缓存
					*/
					let len = this.goodsList.length;
					let isFind = false;//是否找到ID一样的商品
					for(let i=0;i<len;i++){
						let row = this.goodsList[i];
						if(row.id==goods.id )
						{	//找到商品一样的商品
							this.goodsList[i].number++;//数量自增
							isFind = true;//找到一样的商品
							break;//跳出循环
						}
					}
					if(!isFind){
						//没有找到一样的商品，新增一行到购物车商品列表头部
						this.goodsList[i].unshift(goods);
					}
				},
				//控制左滑删除效果-begin
				touchStart(index,event){
					//多点触控不触发
					if(event.touches.length>1){
						this.isStop = true;
						return ;
					}
					this.oldIndex = this.theIndex;
					this.theIndex = null;
					//初始坐标
					this.initXY = [event.touches[0].pageX,event.touches[0].pageY];
				},
				touchMove(index,event){
					//多点触控不触发
					if(event.touches.length>1){
						this.isStop = true;
						return ;
					}
					let moveX = event.touches[0].pageX - this.initXY[0];
					let moveY = event.touches[0].pageY - this.initXY[1];
					
					if(this.isStop||Math.abs(moveX)<5){
						return ;
					}
					if (Math.abs(moveY) > Math.abs(moveX)){
						// 竖向滑动-不触发左滑效果
						this.isStop = true;
						return;
					}
					
					if(moveX<0){
						this.theIndex = index;
						this.isStop = true;
					}else if(moveX>0){
						if(this.theIndex!=null&&this.oldIndex==this.theIndex){
							this.oldIndex = index;
							this.theIndex = null;
							this.isStop = true;
							setTimeout(()=>{
								this.oldIndex = null;
							},150)
						}
					}
				},
				touchEnd(index,$event){
					//结束禁止触发效果
					this.isStop = false;
				},
				//控制左滑删除效果-end
				
				
				//商品跳转
				toGoods(e){
					uni.showToast({title: '商品'+e.id,icon:"none"});
					uni.navigateTo({
						url: '../../goods/goods' 
					});
				},
				//跳转确认订单页面
				toConfirmation(){
					let tmpList=[];
					let len = this.goodsList.length;
					for(let i=0;i<len;i++){
						if(this.goodsList[i].selected) {
							tmpList.push(this.goodsList[i]);
						}
					}
					if(tmpList.length<1){
						uni.showToast({
							title:'请选择商品结算',
							icon:'none'
						});
						return ;
					}
					uni.setStorage({
						key:'buylist',
						data:tmpList,
						success: () => {
							uni.navigateTo({
								url:'../../order/confirmation'
							})
						}
					})
				},
				//删除商品
				deleteGoods(id){
					let len = this.goodsList.length;
					for(let i=0;i<len;i++){
						if(id==this.goodsList[i].id){
							this.goodsList.splice(i, 1);
							break;
						}
					}
					this.selectedList.splice(this.selectedList.indexOf(id), 1);
					this.sum();
					this.oldIndex = null;
					this.theIndex = null;
				},
				// 删除商品s
				deleteList(){
					let len = this.selectedList.length;
					while (this.selectedList.length>0)
					{
						this.deleteGoods(this.selectedList[0]);
					}
					this.selectedList = [];
					this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length>0;
					this.sum();
				},
				// 选中商品
				selected(index){
					this.goodsList[index].selected = this.goodsList[index].selected?false:true;
					let i = this.selectedList.indexOf(this.goodsList[index].id);
					i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.goodsList[index].id);
					this.isAllselected = this.selectedList.length == this.goodsList.length;
					this.sum();
				},
				//全选
				allSelect(){
					let len = this.goodsList.length;
					let arr = [];
					for(let i=0;i<len;i++){
						this.goodsList[i].selected = this.isAllselected? false : true;
						arr.push(this.goodsList[i].id);
					}
					this.selectedList = this.isAllselected?[]:arr;
					this.isAllselected = this.isAllselected||this.goodsList.length==0?false : true;
					this.sum();
				},
				// 减少数量
				sub(index){
					if(this.goodsList[index].number<=1){
						return;
					}
					this.goodsList[index].number--;
					this.sum();
				},
				// 增加数量
				add(index){
					this.goodsList[index].number++;
					this.sum();
				},
				// 合计
				sum(e,index){
					this.sumPrice=0;
					let len = this.goodsList.length;
					for(let i=0;i<len;i++){
						if(this.goodsList[i].selected) {
							if(e && i==index){
								this.sumPrice = this.sumPrice + (e.detail.value*this.goodsList[i].price);
							}else{
								this.sumPrice = this.sumPrice + (this.goodsList[i].number*this.goodsList[i].price);
							}
						}
					}
					this.sumPrice = this.sumPrice.toFixed(2);
				},
				discard() {
					//丢弃
				}
				
				
			}
		
	}
</script>

<style>
.heng{
	display: flex;
	flex-direction: row;
}
.dp{
	height: 33rpx;
	width: 33rpx;
	margin-top: 25rpx;
	margin-left: 27rpx;
}
.gou{
	height: 33rpx;
	width: 33rpx;
	margin-top: 25rpx;
	margin-left: 22rpx;
}
.gou1{
	height: 33rpx;
	width: 33rpx;
	margin-top: 95rpx;
	margin-left: 22rpx;
}
.dpzi{
	font-size: 22rpx;
	margin-left: 16rpx;
	margin-top: 26rpx;
}
.dptu{
	height: 162rpx;
	width: 173rpx;
	margin-top: 35rpx;
	margin-left: 27rpx;
}
.zi1{
	margin-top: 50rpx;
	font-size: 22rpx;
	margin-left: 11rpx;
}
.zi2{
	margin-top: 20rpx;
	font-size: 18rpx;
	margin-left: 11rpx;
	color: #949494;
}
.rmb{
	color: red;
	margin-top: 31rpx;
	margin-left:11rpx ;
	font-size: 25rpx;
}
.jian{
	margin-left: 107rpx;
	margin-top: 22rpx;
}
.shu{
	margin-top: 30rpx;
	background-color: #F5F5F5;
	height: 38rpx;
	width: 38rpx;
	font-size: 16rpx;
	text-align: center;
	margin-left: 17rpx;
	margin-right: 17rpx;
}
.jia{
	
	margin-top: 22rpx;
}
.quan{
	height: 32rpx;
	width: 32rpx;
	margin-left: 27rpx;
	margin-top: 27rpx;
}
.qx{
	font-size: 23rpx;
	margin-top: 30rpx;
	margin-left: 20rpx;
}
.hj{
	margin-left: 278rpx;
	margin-top: 30rpx;
	font-size: 23rpx;
}
.rmb1{
	color: red;
	font-size: 19rpx;
	margin-left: 17rpx;
	margin-top: 30rpx;
}
.js{
	height: 50rpx;
	width: 125rpx;
	background-color: red;
	color: #FFFFFF;
	margin-top: 14rpx;
	line-height: 50rpx;
	text-align: center;
	font-size: 25rpx;
	border-radius: 21rpx;
}
.dizi{
	margin-left: 30rpx;
	margin-right: 50rpx;
	font-size: 21rpx;
	color: #b2b2b2;
	width: 95rpx;
}
.ditu{
	
	height: 44rpx;
	width: 44rpx;
	margin-left: 50rpx;
	margin-right: 50rpx;
}
</style>
