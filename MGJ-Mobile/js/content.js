window.onload=function(){
	document.documentElement.style.fontSize=document.body.clientWidth/3.75+"px";
}
//头部搜索
window.onscroll=function(){
	var y=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset;
	if(y>=150){
    $(".search1").fadeIn();
    // console.log(22);
    $(".search1").css("position","fixed");
	}else if(y<150){
		$(".search1").fadeOut();
		// $(".search1").css("position","static");
	}
}

var app=angular.module("myapp",['ngRoute'],RouteConfig);
// 路由模块开始
function RouteConfig($routeProvider){
    $routeProvider
        .when('/',{
        templateUrl:"cart.html"
        })
        .when('/one',{
            templateUrl:"shopping.html"
        }) 
};

// app.directive('direc',function(){

//     return {
//         restrict:'AE', 
//         replace : true, 
//         compile:function(){
//           var mySwiper = new Swiper ('.swiper-container', {
      
//              });
   
//          }
//     };
// });

app.filter("substrs",function(){
    return function(val,num){
        if(val.length>num){
            val=val.substring(0,num)+"...";
        }
        return val;
    }
});
app.controller("myCtrl",function($scope,$http){
  $http({
    method:"POST",
    url:"../php/shopping.php",
    headers:{"Content-Type":"application/x-www-form-urlencoded"}
  }).then(function(res){
    $scope.data=res.data;
    angular.forEach($scope.data,function(item){
      item.num=0;
      item.price=-(-(item.price));
    },function(err){

    });
  })

  $scope.cart=[];   
  $scope.set=function(goodsId,bool){
      // console.log(goodsId,bool); // 商品ID

      angular.forEach($scope.data,function(item,index){
          if(goodsId==item.goodsId){
              // console.log(item);//当前用户点击商品
              if(bool){
                  if(item.num==0){
                      item.num=1;
                      $scope.cart.push(item);
                  }else{
                      item.num++;
                      // console.log($scope.cart);
                  }
              }else{
                  item.num--;
                  item.num=item.num<=0?0:item.num;
              }
          }
      })
  }
  if($scope.cart==[]){
    $('.emptycart').show();
  }else{
    $('.emptycart').hide();
  }
  $scope.$watch("cart",function(){
    $scope.allPrice=0;
        angular.forEach($scope.cart,function(item,index){ 
            $scope.allPrice+=item.num*item.price;
             if(item.num<=0){$scope.cart.splice(index,1)};
        })
  },true);
});
