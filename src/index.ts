const getSpecialDays1 = (y: number) => {
	if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
		return 29;
	}
	return 28;
};

const getSpecialDaysTwo = (y: number) => { // 判断是否是余年
	if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
		return 29;
	}
	return 28;
};

export {
	getSpecialDaysTwo,
	getSpecialDays1
};
