//添加banner图
var banner=document.getElementsByClassName('banner')[0];
banner.style.cssText='background:url("../images/bg-prod-ban2.jpg") no-repeat;background-size:110% 135%;';
/*
* 添加产品列表
* */
//声明产品数组对象
var seafoodArr=[
    {
        title:'虾夷扇贝',
        info:'来自北纬39度的鲜味',
        imgURL:'../images/seafood01.jpg'
    },
    {
        title:'对对虾',
        info:'Q弹嫩滑 鲜香可口',
        imgURL:'../images/seafood02.jpg'
    },
    {
        title:'深海鱼肠',
        info:'迷你爽滑小鱼弹',
        imgURL:'../images/seafood03.jpg'
    },
    {
        title:'碳烤鱿鱼丝',
        info:'海味珍鲜“鱿”刃有余',
        imgURL:'../images/seafood04.jpg'
    },
    {
        title:'麻辣小龙虾',
        info:'一口一颗香辣鲜',
        imgURL:'../images/seafood05.jpg'
    },
    {
        title:'香辣小黄鱼',
        info:'外皮香酥 肉质鲜美',
        imgURL:'../images/seafood06.jpg'
    },
    {
        title:'小鱼仔',
        info:'肉质饱满 鲜香美味',
        imgURL:'../images/seafood07.jpg'
    },
    {
        title:'鱼丸',
        info:'一颗鱼丸 鲜 香 弹',
        imgURL:'../images/seafood08.jpg'
    },
];
creatProducts(seafoodArr);