window.onload=function(){
	document.documentElement.style.fontSize=document.body.clientWidth/3.75+"px";
}

var mySwiper2 = new Swiper ('#slide2', {
	slidesPerView : 13,
	direction: 'vertical', //垂直方向
	freeMode : true,//启用用户滑动惯性
});

var oFix=document.querySelector('.nav_box');
// console.log(oFix);
window.onscroll=function(){
	var y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
	
	if(y>=723){
		oFix.style.position='fixed';
		oFix.style.top=47+'px';
	}else if(y<723){
		oFix.style.position='static';
	}	
}

$(function(){
    var data=[
        {"id":"01","pvp":"已售727件","pic":"../images/67.jpg","title1":"夏季男士休闲裤男束脚裤韩版哈伦裤九分裤宽松小脚运动裤收腿裤子","price":"¥69.3","zan":"4785"},
        {"id":"02","pvp":"已售1183件","pic":"../images/69.jpg","title1":"夏季短袖T恤男士休闲宽松中袖蝙蝠衫立领潮流七分袖体恤男装潮流","price":"¥59.5","zan":"4375"},
        {"id":"03","pvp":"已售7719件","pic":"../images/68.jpg","title1":"2017夏季新款侧边白条圆环短裤女韩版高腰显瘦毛边牛仔热裤女","price":"¥39","zan":"22823"},
        {"id":"04","pvp":"已售17456件","pic":"../images/70.jpg","title1":"睡衣女夏短袖真丝韩版休闲衬衫领丝绸性感薄款夏天冰丝家居服套装","price":"¥39","zan":"9982"},
        {"id":"05","pvp":"已售7722件","pic":"../images/71.jpg","title1":"夏季一片式无钢圈聚拢文胸加厚少女小胸罩无痕调整型性感内衣套装","price":"¥29.9","zan":"50718"},
        {"id":"06","pvp":"已售13848件","pic":"../images/72.jpg","title1":"夏季日系条纹宽松韩版中袖半截袖五分袖学生短袖t恤潮流衣服男装","price":"¥48","zan":"20889"},
        {"id":"07","pvp":"已售939件","pic":"../images/73.jpg","title1":"ILISYA柔色植物彩妆套装初学者彩妆全套化妆品套装送工具","price":"¥275","zan":"19356"},
        {"id":"08","pvp":"已售2333件","pic":"../images/74.jpg","title1":"新款韩版修身弹力针织无袖背心高腰百搭显瘦卷边牛仔短裤套装女夏","price":"¥49.6","zan":"11185"},
    ];
    $(document).scroll(function(){
        var a=$(document).height();
        if($(document).scrollTop()>=a/2){
            var str='';
            for(var i in data){
                str+='<a>';
                str+='<div class="pic-imgs">';
                str+='<div class="img-pv">'+data[i]['pvp']+'</div>';
                str+='<img src="'+data[i]['pic']+'">';
                str+='</div>';
                str+='<div class="goods-info">';
                str+='<div class="name-box">';
                str+='<div class="name_tags">';
                str+='<p class="title_tag">'+data[i]['title1']+'</p>';
                str+='</div>';
                str+='</div>';
                str+='<div class="bot-box">';
                str+='<p class="p-price">'+data[i]['price']+'</p>';
                str+='<p class="p-feed">'+data[i]['zan']+'</p>';
                str+='</div>';
                str+='</div>';
                str+='</a>';
            }
            $('.good-img').append(str);
        }
    })
})

