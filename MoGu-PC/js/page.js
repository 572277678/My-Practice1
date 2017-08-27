// 商品详情页面

//点击收藏遮罩层
$(function(){
		//自执行函数
		(function(){		
			//设置点击事件
			$('.sc').on('click',function(){			
				//遮罩层显示
				$('.pop').fadeIn('fast');
			});		
			//设置close的点击事件
			$('.close').on('click',function(){	
				//否则显示
				//检测popMiddle的class
				if($(this).hasClass('close')){
					//做判断 确定隐藏 
					$('.pop').fadeOut('fast');
				}else{
					//做判断 取消显示
					$('.pop').fadeIn('fast');
				}
			});

			//获取焦点提醒框隐藏
			$(".denglu").click(function(){
		    	// $('.password input').val();
		    	// console.log($('.password input').val())
		    	if($('.password input').val()==''){
		    		// console.log("密码空")
		    		$('.error1').show().html("请输入登录密码");
		    	}
		    	if($('.phone input').val()==''){
		    		// console.log("用户名空")
		    		$('.error1').show().html("请输入手机/邮箱/用户名");
		    	}
		    });

			//搜索框
			$(".search1 input").focus(function(){
		    if(!!!$(this).prop("readonly")){
		        $(this).prop("placeholder", "输入你想要的商品...")
		    }
			});
			$(".search1 input").blur(function(){
			    $(this).prop("placeholder","简约时尚套装")
			});

		})();
	})

$(function(){
		/*
			鼠标移入移除事件
			鼠标的移动事件
			鼠标在#fdj的相对位置
			鼠标和移动块位置关系
			让大图内容进行滚动相应的比例
		*/
		
		//设置鼠标移入事件
		$('#fdj').mouseover(function(){
			//鼠标移入 移动块 大图显示
			$('#fdj>.small>.shadow,#fdj>.big').show();
			
			//鼠标的移动事件
			$(this).mousemove(function(ent){
				//小图位置=当前位置-距离浏览器的偏移值
				var x=ent.pageX-$(this).offset().left;
				var y=ent.pageY-$(this).offset().top;
				//console.log(x+'---'+y);
				
				//坐标居中-shadow的宽高一半
				//获取shadow的宽高
				var sw=$('#fdj>.small>.shadow').width();
				var sh=$('#fdj>.small>.shadow').height();
				//console.log(sw+'---'+sh);
				
				//重新赋值 坐标居中
				var xx=x-sw/2;
				var yy=y-sh/2;
				
				//判断界限
				//左边
				if(xx<=0){
					xx=0;
				}
				//上边
				if(yy<=0){
					yy=0;
				}
				//右边最大值=small的宽度-shadow的宽度
				if(xx>=$('#fdj').width()-$('.shadow').width()){
					xx=$('#fdj').width()-$('.shadow').width();
				}
				
				//下边的最大值=small的高度-shadow的高度
				if(yy>=$('#fdj').height()-$('.shadow').height()){
					yy=$('#fdj').height()-$('.shadow').height();
				}
				
				//给阴影绑定坐标
				$('#fdj>.small>.shadow').css({left:xx,top:yy});			
				console.log(x+"---"+y);
				
				//获取大图小图的比例
				var scale=$('#fdj>.big>img').width()/$('#fdj>.small>img').width();
				
				var bw=$('#fdj>.big').width();
				var bh=$('#fdj>.big').height();
				
				//如果使用原始的坐标需要减掉big的一半
				//console.log(x+'---'+y);
				//$('#fdj>.big').scrollLeft(x*scale-bw/2);
				//$('#fdj>.big').scrollTop(y*scalse-bh/2);
				
				//使用shadow的移动距离直接乘以比例关系
				//console.log(xx+'---'+yy);
				$('#fdj>.big').scrollLeft(xx*scale);
				$('#fdj>.big').scrollTop(yy*scale);
			});
		}).mouseout(function(){
			//鼠标移出 移动块 大图都隐藏
			$('#fdj>.small>.shadow,#fdj>.big').hide();
		})
	})
