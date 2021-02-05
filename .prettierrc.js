module.exports =  {
	printWidth: 80, // 设置prettier单行输出（不折行）的（最大）长度。
	semi: false, // 行末分号
	singleQuote: true, //单引号
	trailingComma: "all", // 尽可能使用尾随逗号（包括函数参数）
	bracketSpacing: true,  // 在对象文字中打印括号之间的空格。
	jsxBracketSameLine: true, // > 标签放在最后一行的末尾，而不是单独放在下一行
	arrowParens: "avoid", //  avoid " - 尽可能不添加圆括号，示例：x => x" always " - 总是添加圆括号，示例： (x) => x
	tabWidth: 4, // 缩进
	useTabs: true, // 使用tab还是空格
	insertPragma: false, //在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
	preserve: true
};
