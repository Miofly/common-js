const roots = {
	// 信息提示
	showToast (title = '操作成功', icon: string | boolean = 'none', duration = 1300, mask = false): void {
		uni.showToast({ title, icon, duration, mask })
	},
	// loading设置
	showLoading (title = '正在加载', mask = false) {
		uni.showLoading({
			title,
			mask // 防止触摸穿透
		})
	},
}
