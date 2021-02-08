export const Greeter = (name: string) => `Hello ${name}`;
// 判断是否是余年
const getSpecialDays = (y: number): number => {// 123
	if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
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
		birth - 0 > 30 ? birth = `19${birth}` : birth = `20${birth}`
	}
	const year = new Date(birth).getFullYear()
	const arr = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊']
	return (/^\d{4}$/).test(String(year)) ? arr[year % 12] : ''
}

// 星座计算 getAstro(parseInt('09'), 26)
const getAstro = (m: number, d: any) => '魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯'.substr(
		// @ts-ignore
		m * 2 - (d < '102223444433'.charAt(m - 1) - -19) * 2,
		2
	)

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
const strEllipsis = (str: any, length: number): string => String(str).length > length ? `${str.slice(0, length)}...` : str

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
const gsh = (str: any): void => JSON.parse(JSON.stringify(str))

// 得到 localStorage 数据
const getLocalData = (str: string): any => localStorage.getItem(str)

const emptyPaading = (str: any, sign: any): any => str || sign

const jumpWX = () => {
	window.location.replace('weixin://')
}
const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
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
const timeRandomNumber = () => {
	const num = Number(String(new Date().getTime()).slice(4, 11))
	return num < 2000000 ? num + 2000000 : num
}

export {
	getShengXiao,
	getSpecialDays,
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
	timeRandomNumber
}

