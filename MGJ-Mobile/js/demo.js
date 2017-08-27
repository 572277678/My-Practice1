var test=document.documentElement.clientWidth;
window.onload=function(){
	document.documentElement.style.fontSize=document.body.clientWidth/3.75+"px";
}

// --------------------------------------------

var mySwiper1 = new Swiper('#banner',{
	pagination: '.swiper-pagination',
    autoplay : 3000,
    speed:300,
    loop : true,
    autoplayDisableOnInteraction : false
})

var mySwiper2 = new Swiper('#show-shop',{
	slidesPerView : 4,
	freeMode : true,
	spaceBetween : 20,
})

// --------------------------------------------

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

// 瀑布流
$(function(){
    var data=[
        {"id":"01","pic":"images/44.jpg","img":"images/45.jpg","title1":"套装两件套","title2":"时尚","title3":"五分袖","title4":"甜美","title5":"宽松","title6":"新款","price":"￥45.00","zan":"7296"},
        {"id":"02","pic":"images/44.jpg","img":"images/33.png","title1":"雪纺衫","title2":"荷叶边","title3":"露肩","title4":"短袖","title5":"v领","title6":"中长款宽松","price":"￥45.00","zan":"7296"},
        {"id":"03","pic":"images/44.jpg","img":"images/47.jpg","title1":"少女内衣","title2":"无肩带","title3":"无钢圈","title4":"美背","title5":"镂空","title6":"韩版","price":"￥45.00","zan":"7296"},
        {"id":"04","pic":"images/44.jpg","img":"images/46.jpg","title1":"裙子","title2":"连衣裙","title3":"打底衣","title4":"新款","title5":"镂空","title6":"韩版","price":"￥45.00","zan":"7296"},
        {"id":"05","pic":"images/44.jpg","img":"images/48.jpg","title1":"裙子","title2":"连衣裙","title3":"打底衣","title4":"新款","title5":"镂空","title6":"韩版","price":"￥45.00","zan":"7296"},
        {"id":"06","pic":"images/44.jpg","img":"images/49.jpg","title1":"裙子","title2":"连衣裙","title3":"打底衣","title4":"新款","title5":"镂空","title6":"韩版","price":"￥45.00","zan":"7296"}
    ];
    $(document).scroll(function(){
        var a=$(document).height();
        if($(document).scrollTop()>=a/2){
            var str='';
            for(var i in data){
                str+='<a class="goodjob">';
                str+='<div class="goods-imgs">';
                str+='<img src="'+data[i]['pic']+'">';
                str+='<img src="'+data[i]['img']+'">';
                str+='</div>';
                str+='<div class="goods-info">';
                str+='<div class="name-box">';
                str+='<div class="name_tags">';
                str+='<span class="title_tag">'+data[i]['title1']+'</span>';
                str+='<span class="title_tag">'+data[i]['title2']+'</span>';
                str+='<span class="title_tag">'+data[i]['title3']+'</span>';
                str+='<span class="title_tag">'+data[i]['title4']+'</span>';
                str+='<span class="title_tag">'+data[i]['title5']+'</span>';
                str+='<span class="title_tag">'+data[i]['title6']+'</span>';
                str+='</div>';
                str+='</div>';
                str+='<div class="bot-box">';
                str+='<p class="p-price">'+data[i]['price']+'</p>';
                str+='<p class="p-feed">'+data[i]['zan']+'</p>';
                str+='</div>';
                str+='</div>';
                str+='</div>';
                str+='</a>';
            }
            $('.goods_list').append(str);
        }
    })
})

// $(".footer-nav").click(function(){
   // self.location.href="content.html";
// })