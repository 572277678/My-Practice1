<?php
	$DataList = '[
              {"goodsId":"egtdf","img":"../images/a.png","describe":"单肩包女包小包新款百搭韩版小方包时尚小香风菱格斜跨手提链条包","price":"59.9","zan":"1386"},
              {"goodsId":"hytr","img":"../images/c.png","describe":"2017新品邮差包时尚百搭方形肩包明星款竹节包实用大包手提包","price":"96","zan":"2786"},
              {"goodsId":"ktyum","img":"../images/70.jpg","describe":"睡衣女夏短袖真丝韩版休闲衬衫领丝绸性感薄款夏天舒适冰丝家居服套装","price":"299","zan":"3281"},
              {"goodsId":"635","img":"../images/b.jpg","describe":"夏季新款甜美圆领气质宽松喇叭袖蕾丝镂空仙气重工刺绣时尚连衣裙","price":"68.6","zan":"11326"},
              {"goodsId":"745","img":"../images/d.jpg","describe":"明星同款春季韩版皮面小白鞋平底白色系带学生板鞋女鞋运动休闲鞋","price":"66.55","zan":"1753"},
              {"goodsId":"hggh","img":"../images/e.jpg","describe":"2017春夏季新款蝴蝶结尖头粗跟单鞋高跟鞋女一字扣带百搭凉鞋  ","price":"69.30","zan":"13286"},
              {"goodsId":"jrxg","img":"../images/f.jpg","describe":"北爱铝框拉杆箱镜面行李箱学生可爱万向轮密码箱女大容量皮箱","price":"296.70","zan":"6752"},
              {"goodsId":"jgt","img":"../images/j.jpg","describe":"46款日韩版时尚简约长款耳钉女士韩国气质甜美耳环耳饰配饰","price":"6.90","zan":"21011"},
              {"goodsId":"rtyk","img":"../images/k.jpg","describe":"夏季新款韩版宽松无袖露肩雪纺连衣裙中长款空调衫时尚套装两件套","price":"298.50","zan":"6342"},
              {"goodsId":"bnxb","img":"../images/g.jpg","describe":"2017港风春装新款时尚文艺复古做旧水洗破洞男士牛仔外套","price":"118.30","zan":"3261"},
              {"goodsId":"7425t","img":"../images/i.jpg","describe":"明星同款系带韩版小清新学生鞋休闲帆布鞋厚底百搭笑脸小白鞋女夏","price":"55.00","zan":"27826"},
              {"goodsId":"00012","img":"../images/m.jpg","describe":"夏季新款韩版镂空露肩短袖T恤宽松显瘦后背字母印花棉质休闲上衣","price":"49.00","zan":"3266"},
              {"goodsId":"123as","img":"../images/asd9.jpg","describe":"韩国ulzzang真皮韩版百搭厚底运动鞋休闲学生跑步鞋秋冬款","price":"269.75","zan":"33266"}
            ]';

if($_SERVER["REQUEST_METHOD"] == "GET") {
  echo $DataList;
}elseif($_SERVER["REQUEST_METHOD"] == "POST"){
  echo $DataList;
}
