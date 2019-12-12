export default function ajax(url = '', params = {}, type = 'POST', header = {'content-type': 'application/x-www-form-urlencoded'}, flag) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: type,
			url: url,
			data: params,
			header: header,
		}).then((response) => {
			let [error, res] = response;
			resolve(res.data);
		}).catch(error => {
			let [err, res] = error;
			reject(err)
		})
	});
}
