var adressTpl = require("../tpl/adress.string");
//定义视图
SPA.defineView('adress',{
	html:adressTpl,//模板放入body
	plugins: [
    'delegated'
  	],

  	bindActions: {

  	}
})