//添加banner图
var banner=document.getElementsByClassName('banner')[0];
banner.style.cssText='background:url("../images/bg-prod-ban4.jpg") no-repeat;background-size:110% 135%;';
/*
* 添加产品列表
* */
//声明产品数组对象
var wellBeingArr=[
    {
        title:'速食豆腐花',
        info:'东北非转基因大豆 山泉水磨浆',
        imgURL:'../images/well-being01.jpg'
    },
    {
        title:'坚果燕麦藕粉',
        info:'轻尝一口爽滑细腻 品味一段美好时光',
        imgURL:'../images/well-being02.jpg'
    },
    {
        title:'水果燕麦藕粉',
        info:'健康从早餐开始 一碗好羹开启新一天',
        imgURL:'../images/well-being03.jpg'
    },
    {
        title:'冰糖四物',
        info:'片片冰心 清爽润心',
        imgURL:'../images/well-being04.jpg'
    },
    {
        title:'苦荞',
        info:'每天，都有一段时光，值得你好好品味',
        imgURL:'../images/well-being05.jpg'
    },
    {
        title:'蓝莓花果茶',
        info:'果蔬脆片 果色缤纷',
        imgURL:'../images/well-being06.jpg'
    },
    {
        title:'鲜花豆浆粉',
        info:'满满一杯鲜香浓郁',
        imgURL:'../images/well-being07.jpg'
    },
    {
        title:'核桃黑芝麻谷物粉',
        info:'黑色营养 有讲究的养',
        imgURL:'../images/well-being08.jpg'
    },
];
creatProducts(wellBeingArr);