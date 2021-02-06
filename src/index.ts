// @ts-ignore
const roots = {
	// 信息提示
	showToast (title = '操作成功', icon: any = 'none', duration = 1300, mask = false): void {
		uni.showToast({ title, icon, duration, mask })
	},
	// loading设置
	showLoading (title = '正在加载', mask = false) {
		uni.showLoading({
			title,
			mask // 防止触摸穿透
		})
	},
	getSpecialDays (y: number) { // 判断是否是余年
		if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
			return 29
		}
		return 28
	},
	getAstro (m: number, d: number) { // 星座计算 getAstro(parseInt('09'), 26)
		// @ts-ignore
		return '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(m * 2 - (d < '102223444433'.charAt(m - 1) - -19) * 2, 2)
	},
	// 字符串过长截取+省略号
	strEllipsis (str: any, length: number): string {
		return String(str).length > length ? `${str.slice(0, length)}...` : str
	},
	// 图片展示
	showImg (url: number): void {
		// @ts-ignore
		uni.previewImage({ urls: [url], current: 0 })
	},
	
	// 普通路由跳转
	push (url: string): void {
		uni.navigateTo({ url })
	},
	
	// 路由替换跳转
	replace (url: string): void {
		uni.redirectTo({ url })
	},
	
	// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。路径后不能带参数
	switchTab (url: string): void {
		uni.switchTab({ url })
	},
	
	// 关闭所有页面，打开到应用内的某个页面。
	reLaunch (url: string): void {
		uni.reLaunch({ url })
	},
	
	// 返回
	back () {
		window.history.back()
	},
	// 去除空格
	trim (str: string, pos = 'both') {
		if (pos == 'both') {
			return str.replace(/^\s+|\s+$/g, '')
		} else if (pos == 'left') {
			return str.replace(/^\s*/, '')
		} else if (pos == 'right') {
			return str.replace(/(\s*$)/g, '')
		} else if (pos == 'all') {
			return str.replace(/\s+/g, '')
		}
		return str
	},
	
	// 格式化对象
	gsh (str: any): void {
		return JSON.parse(JSON.stringify(str))
	},
	
	
	// 得到 localStorage 数据
	getLocalData (str: string): any {
		return localStorage.getItem(str)
	},
	
	emptyPaading (str: any, sign: any): any {
		return str || sign
	},
	
	jumpWX () {
		window.location.replace('weixin://')
	},
	setStorage (key: string, data: any) {
		uni.setStorage({
			key,
			data,
			success () {
				console.log('存储成功', data)
			},
			fail (err) {
				console.log(err)
			}
		})
	},
	getStorage (key: string) {
		uni.getStorage({
			key,
			success (res) {
				console.log('获取成功', res.data)
				return res.data
			},
			fail (err) {
				console.log(err)
			}
		})
	},
	getStorageSync (key: string) {
		return uni.getStorageSync(key)
	},
	randomNum (min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
}

export default roots
