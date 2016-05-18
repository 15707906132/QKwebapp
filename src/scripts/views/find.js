var findTpl = require("../tpl/find.string");
//定义视图
SPA.defineView('find',{
	html:findTpl,//模板放入body
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
		
  	},
  	
  	bindEvents: {
	    beforeShow: function () {
	      // 保存视图对象
	    	var that = this;
	      // 获得avalon的vm
	    	var vm = that.getVM();
	    	
//	    	swiper
  			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 2000,//可选选项，自动滑动
			})
	    	
	    	
	    	
	     
	    // 下拉刷新，上拉加载
	    // 使scroll pullToRefresh 滞后执行
	    setTimeout(function () {
	        // 获得SAP里定义的scroll对象，homeHotScroll通过data-scroll-id实现绑定的
	        var myScroll = that.widgets.homeHotScroll;
	        var gapSize = 26;
	        myScroll.scrollBy(0, -gapSize);
	
	        var head = $('.head img'),
	            topImgHasClass = head.hasClass('up');
	        var foot = $('.foot img'),
	            bottomImgHasClass = head.hasClass('down');
	        myScroll.on('scroll', function () {
	            var y = this.y,
	                maxY = this.maxScrollY - y;
	            if (y >= 0) {
	                !topImgHasClass && head.addClass('up');
	                return '';
	            }
	            if (maxY >= 0) {
	                !bottomImgHasClass && foot.addClass('down');
	                return '';
	            }
	        });
	
	        myScroll.on('scrollEnd', function () {
	            if (this.y >= -100 && this.y < 0) {
	                myScroll.scrollTo(0, -gapSize);
	                head.removeClass('up');
	            } else if (this.y >= 0) {
	                head.attr('src', '/webapp1502/images/ajax-loader.gif');
	                //TODO ajax下拉刷新数据
	
	                setTimeout(function () {
	                    myScroll.scrollTo(0, -gapSize);
	                    head.removeClass('up');
	                    head.attr('src', '/webapp1502/images/arrow.png');
	                }, 1000);
	            }
	
	            var maxY = this.maxScrollY - this.y;
	            if (maxY > -gapSize && maxY < 0) {
	                var self = this;
	                myScroll.scrollTo(0, self.maxScrollY + gapSize);
	                foot.removeClass('down')
	            } else if (maxY >= 0) {
	                foot.attr('src', '/webapp1502/images/ajax-loader.gif');
	                //TODO ajax上拉加载数据
	
	
	                var self = this;
	                setTimeout(function () {
	                    $('.foot').before(
	                        '<div class="item">add 1</div>'+
	                        '<div class="item">add 2</div>'+
	                        '<div class="item">add 3</div>'+
	                        '<div class="item">add 4</div>'+
	                        '<div class="item">add 5</div>'
	                    );
	                    myScroll.refresh();
	
	                    myScroll.scrollTo(0, self.y + gapSize);
	                    foot.removeClass('down');
	                    foot.attr('src', '/webapp1502/images/arrow.png');
	                }, 1000);
	            }
	        });
	    }, 0);
	     
	     
	     
	      
	    }       
	}      
	      
	  	      
})


