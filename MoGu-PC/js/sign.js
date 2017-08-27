//注册页面

//input提示框
$(function(){ 
	$('.ph_text,.yz_text').focus(function(){
		$('.error1,.error2').hide();
		$('.content_rt').css('height','327px');
	}),
	$('.ph_text').blur(function(){
		$('.error1').show();
		$('.content_rt').css('height','368px');
	});
	$(".yz_text").blur(function(){
		$('.error2').show();
		$('.content_rt').css('height','368px');
	});
})