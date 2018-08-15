//添加banner图
var banner=document.getElementsByClassName('banner')[0];
banner.style.cssText='background:url("../images/bg-prod-ban5.jpg") no-repeat;background-size:110% 135%;';
/*
* 添加产品列表
* */
//声明产品数组对象
var fruitArr=[
    {
        title:'蜂蜜味樱桃',
        info:'酸酸甜甜 果形饱满',
        imgURL:'../images/fruit01.jpg'
    },
    {
        title:'法兰蒂草莓干',
        info:'爱上酸酸甜甜的滋味',
        imgURL:'../images/fruit02.jpg'
    },
    {
        title:'蔓越莓干',
        info:'清爽口感 酸甜可口',
        imgURL:'../images/fruit03.jpg'
    },
    {
        title:'无核白葡萄干',
        info:'自然成熟 无籽肉厚',
        imgURL:'../images/well-being04.jpg'
    },
    {
        title:'白桃果干',
        info:'色泽透亮 满口鲜甜',
        imgURL:'../images/fruit05.jpg'
    },
    {
        title:'菠萝片',
        info:'色泽诱人 酸甜可口',
        imgURL:'../images/fruit06.jpg'
    },
    {
        title:'杏干',
        info:'酸甜可口 好滋好味',
        imgURL:'../images/fruit07.jpg'
    },
    {
        title:'紫薯仔',
        info:'“紫”为你,“薯”一“薯”二',
        imgURL:'../images/fruit08.jpg'
    },
];
creatProducts(fruitArr);