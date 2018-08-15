//添加banner图
var banner=document.getElementsByClassName('banner')[0];
banner.style.cssText='background:url("../images/bg-prod-ban3.jpg") no-repeat;background-size:110% 135%;';
/*
* 添加产品列表
* */
//声明产品数组对象
var meatArr=[
    {
        title:'麻辣味灯影牛肉',
        info:'鲜香爽口 韧有嚼劲',
        imgURL:'../images/meat01.jpg'
    },
    {
        title:'香辣味牛肉粒',
        info:'粒粒醇香 瘦而不柴',
        imgURL:'../images/meat02.jpg'
    },
    {
        title:'甜辣味鸭脖',
        info:'咸鲜微辣 鲜香嫩滑',
        imgURL:'../images/meat03.jpg'
    },
    {
        title:'甜辣味鸭舌',
        info:'肉香浓郁 鲜嫩弹爽',
        imgURL:'../images/meat04.jpg'
    },
    {
        title:'盐焗鸡翅',
        info:'肉质紧实 皮脆肉香',
        imgURL:'../images/meat05.jpg'
    },
    {
        title:'卤香味排骨',
        info:'就是要宠爱你的胃',
        imgURL:'../images/meat06.jpg'
    },
    {
        title:'香辣鸭翅',
        info:'肉质鲜嫩 美味共享',
        imgURL:'../images/meat07.jpg'
    },
    {
        title:'猪肉粒',
        info:'醇香美味 口味俱佳',
        imgURL:'../images/meat08.jpg'
    },
];
creatProducts(meatArr);