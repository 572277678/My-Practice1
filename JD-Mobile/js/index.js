//设置字体 
window.onload=function(){
	// console.log(document.body.clientWidth);
	document.documentElement.style.fontSize=document.body.clientWidth/3.75+"px";
}      

// 轮播图
setTimeout(function(){
    var swiper1 = new Swiper('#slide1', {
        pagination: '.swiper-pagination',
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true

    });

    var swiper2 = new Swiper('#slide2', {
        // pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        freeMode: true
    });

    console.log("1234567")
},200)

// 头部搜索
window.onscroll=function(){
	var y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
	if(y>10){
       $(".top").css("background","#d92628");
       $(".top").css("position","fixed");
	}else if(y==0){
		$(".top").css("background","none");
		$(".top").css("position","position");
	}
}
// 轮播商品
// var swiper2 = new Swiper('#slide2', {
//         pagination: '.swiper-pagination',
//         slidesPerView: 3,
//         paginationClickable: true,
//         freeMode: true
//     });
//推荐商品瀑布流
$(function(){
    var data=[
        {"id":"01","title":"美景餐桌实木餐桌椅组合6人大气仿古饭店家用吃饭桌子 预售定金(付完尾款发货) 1.3米","price":"￥50","pic":"imgs/11.jpg","main":"看相似"},
        {"id":"02","title":"【京东超市】钙芝（Calcheese） 奶酪味高钙威化饼干 58.5克*10/袋 印尼进口","price":"￥19","pic":"imgs/22.jpg","main":"看相似"},
        {"id":"03","title":"栢菲莱斯 餐桌北欧火烧石餐桌椅组合 实木可伸缩圆型大理石饭桌 餐厅家具 2张牛角椅","price":"￥1000","pic":"imgs/33.jpg","main":"看相似"},
        {"id":"04","title":"【发廊品质】创星2200W大功率吹风机家用电吹风快速干发 恒温护发专业吹风筒580","price":"￥39","pic":"imgs/44.jpg","main":"看相似"},
        {"id":"05","title":"日月鑫 餐桌 大理石钢化玻璃餐桌椅组合实木长方形餐桌椅套装 柚木色大理石面 单餐桌","price":"￥2099","pic":"imgs/55.jpg","main":"看相似"},
        {"id":"06","title":"美的（Midea）电水壶12S03E1M 304不锈钢电热水壶 1.2L容量 快速加热 防干烧烧水壶","price":"￥79","pic":"imgs/66.jpg","main":"看相似"},
        {"id":"07","title":"2017夏季新款凉拖鞋高跟细跟欧美潮工作上班凉鞋女 邻2019-70金色 37","price":"￥158","pic":"imgs/77.jpg","main":"看相似"},
        {"id":"08","title":"龟牌 Turtle Wax G-173 （3只装） 压边打蜡海绵 掌心海绵 洗车打蜡专用海绵 柔软不伤车漆","price":"￥10","pic":"imgs/88.jpg","main":"看相似"}
    ]
    $(document).scroll(function(){
            var a=$(document).height();
            if($(document).scrollTop()>=a/2){
                var  str='';
                for(var i in data){
                str+='<li class="similar-li">';
                str+='<a href="#">';
                str+='<div class="similar-product">';                                     
                str+='<img src="'+data[i]['pic']+'" style="width: 1.85rem;height: 1.85rem;opacity: 1;">';
                str+='<span class="similar-product-text">'+data[i]['title']+'</span>';
                str+='<span class="similar-product-price">';
                str+='<span class="big-price">';
                str+='<span class="big-price">'+data[i]['price']+'</span>';
                str+='<span class="guess-button">'+data[i]['main']+'<sapn>';
                str+='</span>';
                str+='</div>';
                str+='</a>';
                str+='</li>';   
                }
                
                //拿到数据给#main尾部添加
                $('#pu').append(str);
            }
        });
})