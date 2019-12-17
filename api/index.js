import ajax from './ajax.js'
const BASE_URL = 'http://zsybshop.yanggod.com/api';
const BASE_URL1 = 'http://zhibo.a2w0m.cn/api/public/?service=';
const baseUrl = 'http://zsybshop.yanggod.com/api';


//秒杀页面的顶部推荐
const getTopSeckill = (params) => ajax(baseUrl + '/seckill/TopSeckillList', params)
//个人店铺的店铺推荐
const getPerson = (params) => ajax(baseUrl + '/index/getPersonStore', params)
//订单物流查询
const orderLogistics = (params) => ajax(baseUrl + '/order/orderLogistics', params)
//再来一单
const orderAgent = (params) => ajax(baseUrl + '/order/orderAgent', params)

// 王子升
//商品详情
const gitshopdetial = (params) => ajax(BASE_URL + '/goods/getGoods', params)
//商品规格
const gitshopspecification = (params) => ajax(BASE_URL + '/goods/getGoodsDetails', params)
//加入购物车
const addshopcar = (params) => ajax(BASE_URL + '/cart/addCart', params)
//查看购物车
const lookshopcar = (params) => ajax(BASE_URL + '/cart/cartList', params)
//删除购物车
const delshopcar = (params) => ajax(BASE_URL + '/cart/delCart', params)
//修改购物车数量
const changeshopcar = (params) => ajax(BASE_URL + '/cart/modifyCart', params)
//购物车下订单给token 购物车id
const ordershopcar = (params) => ajax(BASE_URL + '/order/confirmOrder', params)
//商品评论
const getUserShopCommon = (params) => ajax(baseUrl + '/Bargain/getUserShopCommon', params)
//其他订单状态详情
const orderDetails = (params) => ajax(baseUrl + '/order/orderDetails', params)
//生成订单
const  addOrder = (params) => ajax(baseUrl + '/order/addOrder', params)
//普通商品收藏
const  addcollect = (params) => ajax(baseUrl + '/member/doCollect', params)
//买家秀
const  shopshow = (params) => ajax(baseUrl + '/Bargain/getShopBuyersShow', params)
//上传图片
const  uplodeimg = (params) => ajax(baseUrl + '/merchant/uploadQnImg', params)
//秒杀规格选择
const  seckillchoose = (params) => ajax(baseUrl + '/goods/getGoodsSpecDetails', params)
//秒杀点击购买确认订单
const  seckillbuy = (params) => ajax(baseUrl + '/order/purchaseConfirmOrder', params)
//秒杀购买支付
const  seckillgobuy = (params) => ajax(baseUrl + '/seckill/SeckillOrder', params)
//直接购买的支付
const  gostrightbuy = (params) => ajax(baseUrl + '/order/purchase', params)
//二手好货订单详情
const  ershoudetial = (params) => ajax(baseUrl + '/second_hand/PlaceOrder', params)
//二手好货订单支付
const  ershoucenter = (params) => ajax(baseUrl + '/second_hand/addOrder', params)
//我要发货
const  workOFF = (params) => ajax(baseUrl + '/second_hand/Deliver', params)







// 苗彤彤
//获取分类商品列表
const getgory = (params) => ajax(baseUrl + '/merchant/getCategory', params)
//二级和三级分类
const getShopList = (params) => ajax(BASE_URL + '/Bargain/getShopCategory', params)
//搜索商品
const getSearch = (params) => ajax(BASE_URL + '/index/getSearchShop', params)
//热门搜索
const getHotSearch = (params) => ajax(BASE_URL + '/index/getHotSearch', params)
//搜索历史记录
const getHistory = (params) => ajax(BASE_URL + '/index/getSearchHistory', params)
//删除搜索记录
const getdeleteS = (params) => ajax(BASE_URL + '/index/deleteSearch', params)
//获取用户信息
const getBaseInfo = (params) => ajax(BASE_URL1 + 'User.GetBaseInfo', params)
//获取收货地址列表
const getAddressList = (params) => ajax(baseUrl + '/order/getAddressList', params)
//删除收货地址
const getdelAddress = (params) => ajax(baseUrl + '/order/delAddress', params)
//个人中心订单列表
const getorder = (params) => ajax(baseUrl + '/order/order_list', params)
//待付款订单付款
const getprepay = (params) => ajax(baseUrl + '/order/prepay', params)
//取消订单
const getcancel = (params) => ajax(baseUrl + '/order/cancelOrder', params)
//待付款订单详情
const getwaitP = (params) => ajax(baseUrl + '/order/waitPayOrderDetails', params)
//我的全部评论
const getMyConmon = (params) => ajax(baseUrl + '/index/getMyConmon', params)
//删除评论
const deleteMyCommon = (params) => ajax(baseUrl + '/index/deleteMyCommon', params)
//各种收藏列表
const getcollectList = (params) => ajax(baseUrl + '/member/collectList', params)
//订单催发货
const pushDelivery = (params) => ajax(baseUrl + '/order/pushDelivery', params)
//确认收货
const confirmReceiving = (params) => ajax(baseUrl + '/order/confirmReceiving', params)
//申请退款
const refundApply = (params) => ajax(baseUrl + '/order/refundApply', params)
//获取首页商品列表
const getindexG = (params) => ajax(baseUrl + '/index/getIndexHotShop', params)
//所有二手商品
const getSecond = (params) => ajax(baseUrl + '/second_hand/getSecondHandList', params)
//秒杀列表
const getSeckill = (params) => ajax(baseUrl + '/seckill/SeckillList', params)
//用户注册
const getLogin = (params) => ajax(BASE_URL1 + 'Login.UserReg', params)
//获取注册短信验证码
const getCode = (params) => ajax(BASE_URL + '/index/aliSendSms', params)
//忘记密码
const getforget = (params) => ajax(baseUrl + '/index/forgetPassword', params)
//获取用户发布的二手商品信息
const getUserGoods = (params) => ajax(baseUrl + '/second_hand/getUserGoods', params)
//二手商品发布
const getaddSecond = (params) => ajax(baseUrl + '/second_hand/addSecondHand', params)
//微信登录
const getwxlogin = (params) => ajax(BASE_URL1 + 'Login.UserLoginByThird', params)
// 获取经营类型列表
const getCategory = (params) => ajax(baseUrl + '/merchant/getCategory', params)
//修改手机号
const getchange = (params) => ajax(baseUrl + '/index/changePhone', params)
//修改登录密码
const getchangepwd = (params) => ajax(baseUrl + '/index/changePassword', params)
//获取商品详情
const getGoods = (params) => ajax(baseUrl + '/goods/getGoods', params)
//二手商品详情信息
const getDetails = (params) => ajax(baseUrl + '/second_hand/GoodsDetails', params)
//收藏商品
const getCollect = (params) => ajax(baseUrl + '/member/doCollect', params)
//商家入驻申请
const getmerchant = (params) => ajax(baseUrl + '/merchant/merchantsSettled', params)
//砍价商品列表
const getBargain = (params) => ajax(baseUrl + '/Bargain/getBargainList', params)
//获取个人商家店铺的名称 logo 关注数
const getStore = (params) => ajax(baseUrl + '/index/getStoreCollection', params)
//商家列表
const getMerchantsList = (params) => ajax(BASE_URL + '/merchant/merchantsList', params)
//商家推荐上方商品列表
const getMerchantsGoodsList = (params) => ajax(BASE_URL + '/merchant/indexMerchantsGoodsList', params)
//砍价商品详情
const getShopSet = (params) => ajax(BASE_URL + '/Bargain/getShopSetail', params)
//用户开始砍价
const getStart = (params) => ajax(BASE_URL + '/Bargain/getStartTeam', params)
//获取活动商品规格信息
const getGoodsSpec = (params) => ajax(BASE_URL + '/goods/getGoodsSpecDetails', params)
//获取店铺的广告位
const getStoreA = (params) => ajax(BASE_URL + '/index/getStoreAdver', params)
//获取直播列表
const getLiveList = (params) => ajax(BASE_URL + '/index/getLiveList', params)
//砍价记录
const getBargainRe = (params) => ajax(BASE_URL + '/Bargain/getBargainRecord', params)
//主页热卖商城广告位
const getIndexA = (params) => ajax(BASE_URL + '/index/getIndexAdvert', params)
//获取消息列表
const getMessage = (params) => ajax(BASE_URL + '/index/getMessageList', params)
//获取分类商品列表
const getcommodities = (params) => ajax(BASE_URL + '/Bargain/getShopList', params)
//获取新品上市页面中间三种营销商品
const getShopNew = (params) => ajax(BASE_URL + '/index/getShopNewThreeGoods', params)




//用于获取我发布的视频
const getmyvideo = (params) => ajax(BASE_URL1 + 'Video.GetMyVideo', params)
//获取视频详情
const getvideo = (params) => ajax(BASE_URL1 + 'Video.GetVideo', params)
//获取关注主播列表
const getFollow = (params) => ajax(BASE_URL1 + 'Home.GetFollow', params)
//获取分类下的直播
const getClassLive = (params) => ajax(BASE_URL1 + 'Home.GetClassLive', params)
//获取热门视频
const getVideoList = (params) => ajax(BASE_URL1 + 'Video.GetVideoList', params)
//获取视频详情
const getDvideo = (params) => ajax(BASE_URL1 + 'Video.GetVideo', params)
//关注/取消关注
const getAttent = (params) => ajax(BASE_URL1 + 'User.SetAttent', params)
//视频点赞
const getAddLike = (params) => ajax(BASE_URL1 + 'Video.AddLike', params)
//获取个人主页
const getContri = (params) => ajax(BASE_URL1 + 'User.GetContributeList', params)
//获取推荐视频
const getRecommend = (params) => ajax(BASE_URL1 + 'Video.GetRecommendVideos', params)

//修改用户信息
const UpdateFields = (params) => ajax(BASE_URL1 + 'User.UpdateFields', params)
//上传图片
const uploadQnImg = (params) => ajax(BASE_URL + '/merchant/uploadQnImg', params)

//主页-商城-商城-type 平台直推1 秘制好货3 新品上市4 国外好货5 列表
const getShopFourList = (params) => ajax(BASE_URL + '/index/getShopFourList', params)
//获取商城首页商品列表
const indexGoodsList = (params) => ajax(BASE_URL + '/goods/indexGoodsList', params)
//我的视频
const GetMyVideo = (params) => ajax(BASE_URL1 + 'Video.GetMyVideo', params)

//用于获取用户余额
const GetCoin = (params) => ajax(BASE_URL1 + 'Live.GetCoin', params)	
//搜索直播用户
const Searchlive = (params) => ajax(BASE_URL1 + 'Livepk.Search', params)
//判断是否关注
const IsAttent = (params) => ajax(BASE_URL1 + 'User.IsAttent', params)
//关注/取消关注
const SetAttent = (params) => ajax(BASE_URL1 + 'User.SetAttent', params)
//提现
const getApplyWithdrawal = (params) => ajax(BASE_URL + '/index/getApplyWithdrawal', params)
//消息列表
const getMessageList = (params) => ajax(BASE_URL + '/index/getMessageList', params)
//获取商品评论 1条
const getShopCommon = (params) => ajax(BASE_URL + '/Bargain/getShopCommon', params)
//根据输入搜索直播列表
const getTitleLiveList = (params) => ajax(BASE_URL + '/index/getTitleLiveList', params)



// 郭
// 创建直播
const createMyLive = (params) => ajax(BASE_URL1 + 'Live.CreateRoom', params)
// 开团 发起拼团
const initiateGroup = (params) => ajax(BASE_URL + '/group_purchase/initiateGroup', params)
// 根据分类搜索直播
const getSearchLiveList = (params) => ajax(BASE_URL + '/index/getSearchLiveList', params)
// 获取我的关注
const attentRecommend = (params) => ajax(BASE_URL1 + 'Home.AttentRecommend', params)
// 店铺查看拼团商品详情
const details = (params) => ajax(BASE_URL + '/goods/Details', params)
// 获取活动商品价格
const getGoodsSpecDetails = (params) => ajax(BASE_URL + '/goods/getGoodsSpecDetails', params)
// 参团
const participationGroup = (params) => ajax(BASE_URL + '/group_purchase/participationGroup', params)
// 团购活动详情页
const getGroupPurchase = (params) => ajax(BASE_URL + '/group_purchase/getGroupPurchase', params)
// 开播 --- 获取商品列表
const getLiveBusinessShopList = (params) => ajax(BASE_URL + '/index/getLiveBusinessShopList', params)
// 用户投诉建议
const getUserComplain = (params) => ajax(BASE_URL + '/index/getUserComplain', params)
// 获取充值积分
const getBalance = (params) => ajax(BASE_URL1 + 'User.GetBalance', params)
// 充值积分 --- 支付宝支付
const getAliOrder = (params) => ajax(BASE_URL1 + 'Charge.GetAliOrder', params)
// 充值积分 --- 微信支付
const getWxOrder = (params) => ajax(BASE_URL1 + 'Charge.GetWxOrder', params)



//陈
//获取商品评论 全部 以及好评 中评 差评
const getAllCommon = (params) => ajax(BASE_URL + '/Bargain/getAllCommon', params)
//我的积分
const getMyIntegral = (params) => ajax(BASE_URL + '/index/getMyIntegral', params)
//积分规则
const getIntegralRule = (params) => ajax(BASE_URL + '/index/getIntegralRule', params)
//自主品牌
const getSelfBrand = (params) => ajax(BASE_URL + '/index/getSelfBrand', params)
//根据活动id展示活动商品
const getActiviIdShop = (params) => ajax(BASE_URL + '/Bargain/getActiviIdShop', params)
//砍价生成订单
const createOrder = (params) => ajax(BASE_URL + '/Bargain/createOrder', params)


export default {
	Searchlive, //搜索直播用户
	IsAttent, //判断是否关注
	SetAttent, //关注/取消关注
	GetCoin, //用于获取用户余额
	getApplyWithdrawal, //提现
	getLiveList, //直播列表
	getMessageList, //消息列表
	getShopCommon, //获取商品评论 1条
	getTitleLiveList, //根据输入搜索直播列表
	
	
	
	workOFF,//我要发货
	ershoucenter,//////////////////二手好货订单支付
	ershoudetial,//////////////////二手好货订单详情
	gostrightbuy,//直接购买的支付
	seckillgobuy,//秒杀购买支付
	seckillbuy,//秒杀点击够买确认订单
	seckillchoose,//秒杀规格选择
	orderAgent, //再来一单
	orderLogistics, //订单物流查询
	// 王子升
	BASE_URL,
	BASE_URL1,
	baseUrl,
	gitshopdetial, //商品详情
	gitshopspecification, //商品规格
	addshopcar, //加入购物车
	lookshopcar, //查看购物车
	delshopcar, //删除购物车
	changeshopcar, //修改购物车数量
	ordershopcar, //购物车下订单给token 购物车id
	getUserShopCommon, //商品评论
	orderDetails, //其他订单状态详情
	addOrder,//生成订单
	addcollect,//普通商品收藏
	shopshow,//买家秀
	uplodeimg,//上传图片
	
	
	// 苗彤彤
	getgory, //获取分类商品列表
	getShopList, //二级和三级分类
	getSearch, //搜索商品
	getHotSearch, //热门搜索
	getHistory, //搜索历史记录
	getdeleteS, //删除搜索记录
	getBaseInfo, //获取用户信息
	getAddressList, //获取收货地址列表
	getdelAddress, //删除收货地址
	getorder, //个人中心订单列表
	getprepay, //待付款订单付款
	getcancel, //取消订单
	getwaitP, //待付款订单详情
	getMyConmon, //我的全部评论
	deleteMyCommon, //删除评论
	getcollectList, //各种收藏列表
	pushDelivery, //订单催发货
	confirmReceiving, //确认收货
	refundApply, //申请退款
	getindexG, //获取首页商品列表
	getSecond, //所有二手商品
	getSeckill, //秒杀列表
	getTopSeckill, //秒杀页面的顶部推荐
	getPerson, //个人店铺的店铺推荐
	getLogin, //用户注册
	getCode, //获取注册短信验证码
	getforget, //忘记密码
	getUserGoods, //获取用户发布的二手商品信息
	getaddSecond, //二手商品发布
	getwxlogin, //微信登录
	getCategory, //获取经营类型列表
	getchange, //修改手机号
	getchangepwd, //修改登录密码
	getGoods, //获取商品详情
	getDetails, //二手商品详情信息
	getCollect, //收藏商品
	getmerchant, //商家入驻申请
	getBargain, //砍价商品列表
	getStore, //获取个人商家店铺的名称 logo 关注数
	getMerchantsList, //商家列表
	getMerchantsGoodsList, //商家推荐上方商品列表
	getShopSet,//砍价商品详情
	getStart,//用户开始砍价
	getGoodsSpec,//获取活动商品规格信息
	getStoreA,//获取店铺的广告位
	getLiveList,//获取直播列表
	getBargainRe,//砍价记录
	getIndexA,//主页热卖商城广告位
	getMessage,//获取消息列表
	getcommodities,//获取分类商品列表
	getShopNew,//获取新品上市页面中间三种营销商品


	getvideo, //获取视频详情
	getmyvideo, //用于获取我发布的视频
	getFollow, //获取关注主播列表
	getClassLive, //获取分类下的直播
	getVideoList, //获取热门视频
	getDvideo, //获取视频详情
	getAttent, //关注/取消关注
	getAddLike, //视频点赞
	getContri, //获取个人主页
	getRecommend, //获取推荐视频

	UpdateFields, //修改用户信息
	uploadQnImg, //上传图片

	//郭
	GetMyVideo, //我的视频
	getShopFourList, //主页-商城-商城-type 平台直推1 秘制好货3 新品上市4 国外好货5 列表
	indexGoodsList, //获取商城首页商品列表
	createMyLive,	// 开始直播 / 创建直播
	initiateGroup,	// 开团 / 发起拼团
	getSearchLiveList,	// 根据分类搜索直播
	attentRecommend,	// 获取我的关注
	details,	// 店铺查看拼团商品详情
	getGoodsSpecDetails, // 获取活动商品价格
	participationGroup,	//参团
	getGroupPurchase,	//团购活动详情页
	getLiveBusinessShopList,	// 开播 --- 获取商品列表
	getUserComplain,	// 用户投诉建议
	getBalance,	// 获取守护列表
	getAliOrder,	// 充值积分 --- 支付宝支付
	getWxOrder,		// 充值积分 --- 微信支付
	
	
	//陈
	getAllCommon, //获取商品评论 全部 以及好评 中评 差评
	getMyIntegral, //我的积分
	getIntegralRule, //积分规则
	getSelfBrand, //自主品牌
	getActiviIdShop, //根据活动id展示活动商品
	createOrder, //砍价生成订单
}
