// 登录—蘑菇街页面
$(function(){ 
	// 选项卡
	$('.login-lt span').click(function(){
		 // console.log($(this).index())
		 // $(this).index()
		 if($(this).index()=='0'){
			 $(".login_main1").show();
			 $(".login_main2").hide();
			 $(".pt a").css("borderBottom","2px solid #ff4066");
			 $(".sj a").css({"borderBottom":"",'color':''});
		 }else if($(this).index()=='1'){
			   $(".login_main1").hide();
			   $(".login_main2").show();
				 $(".sj a").css({"borderBottom":"2px solid #ff4066",'color':'#fe617a'});
				 $(".pt a").css({"borderBottom":"none",'color':'#3c3c3c'});
				 // console.log($(".pt a"));
		 }		 
	})
	// 切换二维码登录
	$('.login_1').click(function(){
		$('.content2').show();
		$('.content1').hide();
		$('.login_2').show();
		$('.login_1').hide();
		$('.content_rt').css('height','400px');
	});
	
	$('.login_2').click(function(){
		$('.content1').show();
		$('.content2').hide();
		$('.login_1').show();
		$('.login_2').hide();
		$('.content_rt').css('height','');
	});
	
	// input提示框
	$('.pwd_text,.mm_text').focus(function(){
		$('.error1,.error2').hide(),$('.content_rt').css('height','338px');;
	}),
	$('.pwd_text').blur(function(){
		$('.error1').show(),$('.content_rt').css('height','378px');;
		
	});
	$(".mm_text").blur(function(){
		$('.error2').show(),$('.content_rt').css('height','378px');;
	});
	
	// 手机无密码提示框
	$('.ph_text,.yz_text').focus(function(){
		$('.error3,.error4').hide();
		$('.content_rt').css('height','338px');
	}),
	$('.ph_text').blur(function(){
		$('.error3').show();
		$('.content_rt').css('height','378px');
	});
	$(".yz_text").blur(function(){
		$('.error4').show();
		$('.content_rt').css('height','378px');
	});
})