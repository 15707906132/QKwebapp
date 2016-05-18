var myTpl = require("../tpl/my.string");
//定义视图
SPA.defineView('my',{
	html:myTpl,//模板放入body
	plugins: [
    'delegated',
    {
      name: 'avalon',
      options: function (vm) {
        vm.homeList = [];
      }
    }
  	],

  	bindActions: {

  	}
	
})