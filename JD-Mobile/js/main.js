window.onload=function(){
	// console.log(document.body.clientWidth);
	document.documentElement.style.fontSize=document.body.clientWidth/3.75+"px";
} 
// 头部广告
// var cha=document.getElementById('as');
// console.log(cha);
// function cha(){
// 	console.log(22);
// }

//头部搜索
window.onscroll=function(){
	var y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
	if(y>=200){
       $(".search1").fadeIn();
       // console.log(22);
       $(".search1").css("position","fixed");
	}else if(y<200){
		$(".search1").fadeOut();
		// $(".search1").css("position","static");
	}
}
