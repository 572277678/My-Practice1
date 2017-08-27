// 蘑菇街--我的买手街

//搜索框
$('.sousuo input').focus(function(){
if(!!!$(this).prop("readonly")){
    $(this).prop('placeholder', '宝贝儿~输入你想要的商品...');
}
});
$('.sousuo input').blur(function(){
    $(this).prop('placeholder','卸妆纯棉化妆棉');
});

//自执行函数
//设置点击事件
$('.oshow').on('click',function(){			
	//遮罩层显示
	$('.goback').fadeIn('fast');
});		
//设置close的点击事件
$('.closeback').on('click',function(){	
	console.log(11);
	$('.goback').fadeOut('fast');
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

// 轮播图
$(function(){
	var now=0;
	var len=$('.lunbo>.img>li').length;
	// var rot=$('.lunbo>.num>li>img').length;
	// console.log(len);

	function run(){
		s=setInterval(function(){		
			$('.lunbo>.img>li').hide();
			$('.lunbo>.num>li>img').hide();
			if(now>=len-1){
				//重新赋值
				now=0;
			}else{
				now++;
			};
			
			if(now==0){
				$('#banner').css('background','#FF99B1');
			}
			if(now==1){
				$('#banner').css('background','#8AE1F2');
			}
			if(now==2){
				$('#banner').css('background','#F7AEC2');
			}
			if(now==3){
				$('#banner').css('background','#FF5778');
			}

			$('.lunbo>.img>li:eq('+now+')').fadeIn();
			$('.lunbo>.num>li>img:eq('+now+')').show();
		},4000);
	}
	run();

	$('.lunbo>.num>li').mouseover(function(){
		clearInterval(s);
		$('.lunbo>.img>li').hide();
		$('.lunbo>.num>li>img').hide();

		now=$(this).index();
		
		if(now==0){
			$('#banner').css('background','#FF99B1');
		}
		if(now==1){
			$('#banner').css('background','#8AE1F2');
		}
		if(now==2){
			$('#banner').css('background','#F7AEC2');
		}
		if(now==3){
			$('#banner').css('background','#FF5778');
		}

		$('.lunbo>.img>li:eq('+now+')').fadeIn('fast');
		$('.lunbo>.num>li>img:eq('+now+')').show();
	})

	//移入移出
	$('.lunbo').mouseover(function(){
		clearInterval(s);
	}).mouseout(function(){
		run();
});

// 隐藏栏
$('.main>ul>li').mouseover(function(){
	sps=$(this).index();
	$('.bann>span:eq('+sps+')').show();
}).mouseout(function(){
	$('.bann>span:eq('+sps+')').hide();
})
$('.bann>span').mouseover(function(){
	$('.main>ul>li:eq('+sps+')').css("background","#fff");
	$('.bann>span:eq('+sps+')').show();
}).mouseout(function(){
	$('.bann>span:eq('+sps+')').hide();
	$('.main>ul>li:eq('+sps+')').css("background","");
})

})

//限时快抢
var timeout=60*60*1000;
setInterval(function(){
    var h = Math.floor(timeout/(60*60*1000));
    var m = Math.floor(timeout/(60*1000));
    var s = Math.floor((timeout - m * 60 * 1000)/1000)

    document.querySelector(".h").innerHTML = h;
    document.querySelector(".m").innerHTML = m;
    document.querySelector(".s").innerHTML = s;

    timeout = timeout -1000;

    if(timeout == 0){
       timeout=60*60*1000; 
    }
},1000);
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
// 品牌团
var timeout=60*60*1000;
setInterval(function(){
    var ho = Math.floor(timeout/(60*60*1000));
    var min = Math.floor(timeout/(60*1000));
    var sec = Math.floor((timeout - min * 60 * 1000)/1000)

    document.querySelector(".hour").innerHTML=ho;
    document.querySelector(".min").innerHTML=min; 
    document.querySelector(".sec").innerHTML=sec;

    timeout = timeout -1000;

    if(timeout == 0){
       timeout=60*60*1000; 
    }
},1000);

// 红人穿搭
var lu=0;
var le=$('.picture1>a').length;
setInterval(function(){
$('.picture1').css('transform','rotateY(-90deg)');
$('.picture1>a').hide();
		if(lu>=le-1){
			lu=0;
		}else{
			lu++;
		}
		
		$('.picture1>a').hide();
		$('.picture1>a:eq('+lu+')').show();

},2000);

setInterval(function(){	
	$('.picture1').css('transform','rotateY(90deg)');
},3000);

// 精选专题
var good=0;
var job=$('.copybanner>a>img').length;
// console.log(job);

function jb(){
	gd=setInterval(function(){
		$('.numbers>span').css('background','#ccc');
		// $('.copybanner>a').animate({left: '-950px'}, "slow").hide();
		$('.copybanner>a').hide();
		if(good>=job-1){
			good=0;
		}else{
			good++;
		}
		$('.numbers>span:eq('+good+')').css('background','black');

		// $('.copybanner>a:eq('+good+')').animate({right: '+950px'}, "slow").show();
		$('.copybanner>a:eq('+good+')').show();
	},5000);
}
jb();

$('.numbers>span').mouseover(function(){
	clearInterval(gd);
		$('.numbers>span').css('background','#ccc');
		// $('.copybanner>a').animate({left: '-950px'}, "slow").hide();
		$('.copybanner>a').hide();

		good=$(this).index();
		$('.numbers>span:eq('+good+')').css('background','black');
		// $('.copybanner>a:eq('+good+')').animate({right: '+950px'}, "slow").show();
		$('.copybanner>a:eq('+good+')').show();
		// console.log($('.copybanner>a:eq('+good+')'))
})

$('.numbers>span').mouseover(function(){
	clearInterval(s);
}).mouseout(function(){
	jb();
});

$('.numbers>span,.copybanner>a').mouseover(function(){
	$('.lt,.gt').show();
}).mouseout(function(){
	$('.lt,.gt').hide();
});
$('.lt,.gt').mousemove(function(){
	$('.lt,.gt').show();
});

// console.log($('.lt,.gt'))
$('.lt').click(function(){
	good--;
	if(good<0){
		good=job-1;
	}
	$('.copybanner>a').hide();
	$('.numbers>span').css('background','#ccc');

	$('.copybanner>a:eq('+good+')').show();
	$('.numbers>span:eq('+good+')').css('background','black');
})
$('.gt').click(function(){
	good++;
	if(good>job-1){
		good=0;
	}
	$('.copybanner>a').hide();
	$('.numbers>span').css('background','#ccc');

	$('.copybanner>a:eq('+good+')').show();
	$('.numbers>span:eq('+good+')').css('background','black');
});

// 隐藏头部导航
var oNav=$('.leftfix'); //导航壳
// console.log(oNav);
var aNav=oNav.find('span'); //导航
var aDiv=$('#content .louceng');

$(window).scroll(function(){
	var winH = $(window).height();//可视窗口高度
	var iTop = $(window).scrollTop();//鼠标滚动的距离
	
	// console.log(winH);
	// console.log(iTop);

	if(iTop>50){
		$('.topgod').show();
	}else{
		$('.topgod').hide();
	}
	if(iTop>=605){
		$('#hiddenhead').show();
	}else if(iTop<605){
		$('#hiddenhead').hide();
	}
	if(iTop>=1500){
		$('#hiddenfix').fadeIn();
	}else if(iTop<1500){
		$('#hiddenfix').fadeOut();
	}
	
	if(iTop>=$('#good').height()){
		oNav.fadeIn();
		// oTop.fadeIn();
		//鼠标滑动式改变	
		aDiv.each(function(){
			if(winH+iTop - $(this).offset().top>winH/2){
				aNav.removeClass('active');
				aNav.eq($(this).index()).addClass('active');
				console.log(aNav.eq($(this).index()));
			}
		})
	}else{
		oNav.fadeOut();
		// oTop.fadeOut();
	}
})
//点击回到当前楼层
aNav.click(function(){
	var t = aDiv.eq($(this).index()).offset().top;
	$('body,html').animate({"scrollTop":t},440);
	$(this).addClass('active').siblings().removeClass('active');
});

// 右侧点击回到顶部
$('.topgod').click(function(){
	// console.log(123);
	$("body").animate({"scrollTop":0});
})
// console.log($(document).height());

// 瀑布流
$(function(){
	var data=[
	    {"id":"01","pic":"images/170425_6c8ih0e4300adgheh2f6cab6208kd_640x960.jpg_240x360.v1cAC.70.jpg","img":"images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png","title1":"找相似","title2":"夏季新款小性感短款吊带背心时尚睡衣套装高腰短裤家居服两件套女","price":"¥69.3","price1":"¥ 97.14","zan":"15141"},
	    {"id":"02","pic":"images/170523_2d18dgl9j9j0a83jjjldd1ikh38ka_640x960.jpg_240x360.v1cAC.70.jpg","img":"images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png","title1":"找相似","title2":"夏季新款 韩版百搭细横条纹短袖T恤修身显瘦圆领打底衫女装上衣","price":"¥36","price1":"¥ 97.14","zan":"6786"},
	    {"id":"03","pic":"images/170520_00fll3d228hkgel9ig5gbahbc7ch0_640x960.jpg_240x360.v1cAC.70.jpg","img":"images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png","title1":"找相似","title2":"夏季新款韩系宽松POLO领短袖T恤裙中长款显瘦条纹学生连衣裙","price":"¥59.3","price1":"¥ 87.14","zan":"11906"},
	    {"id":"04","pic":"images/170605_20a67h7l792e99llll235fjah2f90_640x960.jpg_240x360.v1cAC.70.jpg","img":"images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png","title1":"找相似","title2":"夏季新品短袖圆领宽松中长款连衣裙刺绣钩花拼接网纱吊带裙两件套","price":"¥78","price1":"¥ 114.6","zan":"9861"},
	    {"id":"05","pic":"images/63112148_305de9i4k14e291fc33g95ge508d7_640x960.jpg_240x360.v1cAC.70.jpg","img":"images/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png","title1":"找相似","title2":"女夏网眼运动鞋女鞋透气网状休闲学院网面单鞋女士跑步鞋平底网鞋","price":"¥68.6","price1":"¥ 98","zan":"12393"},
	];
	$(document).scroll(function(){
	    var a=$(document).height();
	    if($(document).scrollTop()>=a/2){
	        var str='';
	        for(var i in data){
	            str+='<a class="goodjob">';
	            str+='<div class="pic-imgs">';
	            str+='<div class="img-pv">'+data[i]['title1']+'</div>';
	            str+='<img src="'+data[i]['pic']+'">';
	            str+='</div>';
	            str+='<div class="goods-info">';
	            str+='<div class="name-box">';
	            str+='<div class="name_tags">';
	            str+='<p class="title_tag">'+data[i]['title2']+'</p>';
	            str+='</div>';
	            str+='</div>';
	            str+='<div class="bot-box">';
	            str+='<p class="p-price">'+data[i]['price']+'</p>';
	            str+='<p class="o-price">'+data[i]['price1']+'</p>';
	            str+='<span class="p-feed">';
	            str+='<img src="'+data[i]['img']+'">';
	            str+=''+data[i]['zan']+'</span>';
	            str+='</div>';
	            str+='</div>';   
	            str+='</a>';
	        }
	        $('.good-img').append(str);
	    }
	})
})