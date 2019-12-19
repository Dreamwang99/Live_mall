export default function ajax(url = '', params = {}, type = 'POST', header = {'content-type': 'application/x-www-form-urlencoded'}, flag) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: params,
			header: header,
		}).then((response) => {
			let [error, res] = response;
			if(res.data.data!=null && res.data.data!=''){
				console.log('qewqewqeqe');
				if(res.data.data.code==700){
					uni.showToast({
						title: res.data.data.msg,
						icon: 'none'
					})
					setTimeout(function(){
						uni.reLaunch({
							url:'/pages/register/register'
						})
					},1500)
				}
			}else{
				console.log('123123131');
				if(res.data.code==700){
					uni.showToast({
						title: '登陆状态失效,请重新登录!',
						icon: 'none'
					})
					setTimeout(function(){
						uni.reLaunch({
							url:'/pages/register/register'
						})
					},1500)
				}
			}
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
