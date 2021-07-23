module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      /*// 视窗的高度，对应设计稿的高度
      viewportHeight: 375,
      // 视窗的宽度，对应设计稿的宽度（可以不配置）
      viewportWidth: 667,
      // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      unitPrecision: 5,
      // 指定需要转换的视窗单位，建议使用vw
      viewportUnit: 'vw',
      // 指定不需要转换的类
      selectorBlackList: ['ignore'],
      // 小于或等于`1px`不需要转换为视窗单位
      minPixelValue: 1,
      // 允许在媒体查询中转换`px`
      mediaQuery: false,
      // 存放元素必须为正则表达式
      exclude: [/TabBar/, /NavBar/, /TabControl/]*/
    }
  }
}

// 1. 在js中使用正则表达式：/正则相关规则/
// 2.exclude中存放的元素必须是正则表达式
// 正则表达式规则：
// 1. ^abc: 表示匹配的内容，必须以什么内容开头（以abc开头）
// 2. abc$: 表示匹配的内容，必须以什么内容结尾（以abc结尾）
