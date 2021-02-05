// 判断是否是余年
const getSpecialDays = (y: number): number => {
	if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
		return 29
	}
	return 28
}

// 生肖计算
const getShengXiao = (birth: any) => {
	birth = String(birth)
	const len = birth.length
	if (len < 4 && len != 2) {
		return ''
	}
	if (len == 2) {
		birth - 0 > 30 ? (birth = `19${birth}`) : (birth = `20${birth}`)
	}
	const year = new Date(birth).getFullYear()
	const arr = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊']
	return /^\d{4}$/.test(String(year)) ? arr[year % 12] : ''
}

// 星座计算 getAstro(parseInt('09'), 26)
const getAstro = (m: number, d: any) => {
	return '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
		// @ts-ignore
		m * 2 - (d < '102223444433'.charAt(m - 1) - -19) * 2,
		2,
	)
}

// 根据出生日期算出年龄 getAge('1995-09-26')
const getAge = (strBirthday: string) => {
	let returnAge
	const strBirthdayArr = strBirthday.split('-')
	const birthYear = strBirthdayArr[0]
	const birthMonth = strBirthdayArr[1]
	const birthDay = strBirthdayArr[2]

	const d = new Date()
	const nowYear = d.getFullYear()
	const nowMonth = d.getMonth() + 1
	const nowDay = d.getDate()

	// @ts-ignore
	if (nowYear == birthYear) {
		returnAge = 0 // 同年 则为0岁
	} else {
		// @ts-ignore
		const ageDiff = nowYear - birthYear // 年之差
		if (ageDiff > 0) {
			// @ts-ignore
			if (nowMonth == birthMonth) {
				// @ts-ignore
				const dayDiff = nowDay - birthDay // 日之差
				if (dayDiff < 0) {
					returnAge = ageDiff - 1
				} else {
					returnAge = ageDiff
				}
			} else {
				// @ts-ignore
				const monthDiff = nowMonth - birthMonth // 月之差
				if (monthDiff < 0) {
					returnAge = ageDiff - 1
				} else {
					returnAge = ageDiff
				}
			}
		} else {
			returnAge = -1 // 返回-1 表示出生日期输入错误 晚于今天
		}
	}
	return returnAge // 返回周岁年龄
}
// 字符串过长截取+省略号
const strEllipsis = (str: any, length: number): string => {
	return String(str).length > length ? `${str.slice(0, length)}...` : str
}

const sortBy = (attr: string | number, rev: number | undefined) => {
	// 第二个参数没有传递 默认升序排列 true表示升序排列，false降序排序
	if (rev == undefined) {
		rev = 1
	} else {
		rev = rev ? 1 : -1
	}

	return function (a: number, b: number) {
		// @ts-ignore
		a = a[attr]
		// @ts-ignore
		b = b[attr]
		if (a < b) {
			// @ts-ignore
			return rev * -1
		}
		if (a > b) {
			return Number(rev)
		}
		return 0
	}
}

// 返回
const back = () => {
	window.history.back()
}

// 去除空格
const trim = (str: string, pos = 'both') => {
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
}

// 格式化对象
const gsh = (str: any): void => {
	return JSON.parse(JSON.stringify(str))
}

// 得到 localStorage 数据
const getLocalData = (str: string): any => {
	return localStorage.getItem(str)
}

const emptyPaading = (str: any, sign: any): any => {
	return str || sign
}

const jumpWX = () => {
	window.location.replace('weixin://')
}

const randomNum = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
const makeRandomArr = (arrList: string | any[], num: number) => {
	if (num > arrList.length) {
		num = arrList.length // eslint-disable-line
	}
	const tempArr = arrList.slice(0)
	const newArrList = []
	for (let i = 0; i < num; i++) {
		const random = Math.floor(Math.random() * tempArr.length)
		const arr = tempArr[random]
		tempArr.slice(random, 1)
		newArrList.push(arr)
	}
	return newArrList
}
const conver = (limit: number) => {
	let size = ''
	if (limit < 0.1 * 1024) {
		// 如果小于0.1KB转化成B
		size = `${limit.toFixed(2)}B`
	} else if (limit < 0.1 * 1024 * 1024) {
		// 如果小于0.1MB转化成KB
		size = `${(limit / 1024).toFixed(2)}KB`
	} else if (limit < 0.1 * 1024 * 1024 * 1024) {
		// 如果小于0.1GB转化成MB
		size = `${(limit / (1024 * 1024)).toFixed(2)}MB`
	} else {
		// 其他转化成GB
		size = `${(limit / (1024 * 1024 * 1024)).toFixed(2)}GB`
	}

	const sizestr = `${size}`
	const len = sizestr.indexOf('.')
	const dec = sizestr.substr(len + 1, 2)
	if (dec == '00') {
		// 当小数点后为00时 去掉小数部分
		return sizestr.substring(0, len) + sizestr.substr(len + 3, 2)
	}
	return sizestr
}
const timeCompute = (allTime: any) => {
	const day = parseInt(String(allTime / (1000 * 60 * 60 * 24)))
	let hour: string | number = parseInt(
		String((allTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
	)
	let minutes: string | number = parseInt(String((allTime % (1000 * 60 * 60)) / (1000 * 60)))
	let seconds: string | number = parseInt(String((allTime % (1000 * 60)) / 1000))
	hour = hour < 10 ? `0${hour}` : hour
	minutes = minutes < 10 ? `0${minutes}` : minutes
	seconds = seconds < 10 ? `0${seconds}` : seconds
	const newDay = day == 0 ? '' : `${day}天`
	return `${newDay}${hour}:${minutes}:${seconds}`
}
const isEmpty = (str: string | null | undefined) => {
	if (str == '' || str == undefined || str == null) return true
}
const setCookie = (cname: string, cvalue: any, days?: any) => {
	let expires = ''
	if (days == 0 || days == '') {
		expires = 'expires=Fri, 31 Dec 9999 23:59:59 GMT'
	} else {
		const d = new Date()
		d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
		expires = `expires=${d.toUTCString()}`
	}
	document.cookie = `${cname}=${cvalue};${expires};path=/`
}
const getCookie = (cname: any) => {
	const name = `${cname}=`
	const ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) == ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}
const delCookie = (name: any) => {
	const date = new Date()
	date.setTime(date.getTime() - 10000)
	const cval = getCookie(name)
	if (cval != null) document.cookie = `${name}=; expire=${date.toUTCString()}; path=/`
}
const timeRandomNumber = () => {
	const num = Number(String(new Date().getTime()).slice(4, 11))
	return num < 2000000 ? num + 2000000 : num
}

export {
	getAstro,
	getAge,
	strEllipsis,
	sortBy,
	back,
	trim,
	gsh,
	getLocalData,
	emptyPaading,
	jumpWX,
	randomNum,
	makeRandomArr,
	conver,
	timeCompute,
	isEmpty,
	setCookie,
	getCookie,
	delCookie,
	timeRandomNumber,
}
