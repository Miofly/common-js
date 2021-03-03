// 判断是否是余年
const getSpecialDays = (y: number): number => {// 123
	if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
		return 29
	}
	return 28
}

const getNum = (num: any) => num

export {
	getNum,
	getSpecialDays
}

