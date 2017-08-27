<?php

	$DataList= '[ 
    {"goodsId":"3456","img":"../imgs/a.jpg.webp","describe":"Apple iPhone 6 32G 金色 移动联通电信4G手机","price":"2578"},
    {"goodsId":"ey","img":"../imgs/b.jpg.webp","describe":"荣耀 畅玩6X 4GB 32GB 全网通4G手机 高配版 铂光金","price":"1299"},
    {"goodsId":"hytr","img":"../imgs/c.jpg.webp","describe":"Apple iPhone 6s Plus (A1699) 32G 玫瑰金色 移动联通电信4G手机","price":"3999"},
    {"goodsId":"635","img":"../imgs/d.jpg.webp","describe":"联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑","price":"5988"},
    {"goodsId":"745","img":"../imgs/e.jpg.webp","describe":"戴尔DELL灵越游匣15PR-2648B 15.6英寸游戏笔记本电脑","price":"4799"},
    {"goodsId":"hggh","img":"../imgs/f.jpg.webp","describe":"惠普(HP)暗影精灵II代Pro 暗影红 15.6英寸游戏笔记本","price":"5999"},
    {"goodsId":"jrxg","img":"../imgs/g.jpg.webp","describe":"【京东超市】美素佳儿（Friso）金装较大婴儿配方奶粉","price":"199"},
    {"goodsId":"jgt","img":"../imgs/h.jpg.webp","describe":"【京东超市】惠氏启赋（Wyeth illuma）幼儿配方奶粉","price":"298"},
    {"goodsId":"rtyk","img":"../imgs/i.jpg.webp","describe":"索尼（SONY）KD-55X7000D 55英寸高清4K HDR 安卓6.0系统 智能液晶电视","price":"4799"},
    {"goodsId":"bnxb","img":"../imgs/j.jpg.webp","describe":"三星（SAMSUNG）UA55KUF30ZJXXZ 55英寸 HDR 4K超高清 智能电视 黑色","price":"3899"},
    {"goodsId":"7425t","img":"../imgs/k.jpg.webp","describe":"NIKE耐克2017春夏新款男鞋板鞋运动鞋","price":"399"},
    {"goodsId":"00012","img":"../imgs/l.jpg.webp","describe":"安踏男鞋夏季运动鞋男士透气网面跑步鞋anta官方旗舰店轻便耐磨跑鞋子","price":"189"}
   ]';


if ($_SERVER["REQUEST_METHOD"] == "GET") {
  echo $DataList;
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
  echo $DataList;
}
