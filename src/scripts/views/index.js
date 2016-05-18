var indexTpl = require("../tpl/index.string");
//定义视图
SPA.defineView('index',{
	html:indexTpl,//模板放入body
	modules:[{   //定义子视图
		name:'content',
		views:['find','choose','adress','my'],
		container:'.m-contant',
		defaultTag:"choose"	//默认打开的页面
	}],
	
	plugins: [
    	'delegated'
  	],
//	点击切换子视图
	bindActions:{	
		'tap.switch': function (e,data) {
			this.modules.content.launch(data.tag);//子视图
	     	$(e.el).addClass("active").siblings().removeClass("active")
	    }
	}


})




