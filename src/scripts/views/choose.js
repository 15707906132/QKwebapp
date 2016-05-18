var chooseTpl = require("../tpl/choose.string");
//定义视图
SPA.defineView('choose',{
	html:chooseTpl,//模板放入body
//	插件列表
	plugins: [
    'delegated'
  	],
//模板绑定事件
  	bindActions: {

  	},
//	给视图绑定事件
  	bindEvents: {
//		视图还未打开的时候触发事件
  		beforeShow: function () {
//			swiper
  			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
			})
  		}
  	}
})


////定义视图
//SPA.defineView("视图名",{
////	模板放入body
//	html:当前视图的html,
////	插件列表
//	plugins:[
//		'delegated'
//	],
////	模板绑定事件
//	bindActions: {
//
//	},
////	给视图绑定事件
//	bindEvents: {
////		视图还未打开的时候触发事件
//		beforeShow: function () {
//			
//		}
//	}
//})
