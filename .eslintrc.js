/**
 * }
 *    }
 * semi" 和 "quotes" 是 ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：
 *
 * "off" or 0 - 关闭规则
 * "warn" or 1 - 将规则视为一个警告（不会影响退出码）
 * "error" or 2 - 将规则视为一个错误 (退出码为1)
 * 3、同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用。
 *
 * @format
 * @Description: eslint配置详解
 * @author wfd
 * @date 2020/8/8 14:25
 * @detail 1、运行 eslint --init 之后，.eslintrc 文件会在你的文件夹中自动创建 2、{ "rules": { "semi": ["error", "always"], "quotes": ["error", "double"]
 */

module.exports = {
	/**
	 *  默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录
	 *  为了将 ESLint 限制到一个特定的项目 设置 "root": true
	 *  ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
	 */
	root: true,
	env: {
		// 指定环境
		node: true, // Node.js 全局变量和 Node.js 作用域
		browser: true // 浏览器环境中的全局变量 env环境变量配置，形如console属性只有在browser环境下才会存在，如果没有设置支持browser,那么可能报console is undefined的错误。
	},
	parser: '@typescript-eslint/parser', // 定义ESLint的解析器 在ts项目中必须执行解析器为@typescript-eslint/parser，才能正确的检测和规范TS代码
	extends: ['plugin:@typescript-eslint/recommended'], // 定义文件继承的子规范
	parserOptions: {
		// 解析器选项
		/**
		 * 指定你想要支持的 JavaScript 语言选项、可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本
		 * 你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
		 */
		ecmaVersion: 2020,
		sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
		/**
		 * EcmaFeatures是个对象，表示你想使用的额外的语言特性
		 *  globalReturn - 允许在全局作用域下使用 return 语句
		 *  impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
		 *  jsx - 启用 JSX
		 */
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	plugins: [
		// 第三方插件 plugins 属性值 可以省略包名的前缀 eslint-plugin-。
		'@typescript-eslint'
	],
	rules: {
		// 配置定义在插件中的一个规则的时候，你必须使用 插件名/规则ID 的形式 vue/attribute-hyphenation
		'space-before-function-paren': 2, // 强制在 function 的左括号之前使用一致的空格



		// typeScript 不需要的规则
		'@typescript-eslint/explicit-module-boundary-types': 0, // 允许any类型
		'@typescript-eslint/no-explicit-any': 0, // 允许any类型
		'@typescript-eslint/ban-ts-comment': 0, // 允许加 @ts-ignore

		'@typescript-eslint/no-unused-vars': 1 // 未使用的变量仅做提醒
	}
}
