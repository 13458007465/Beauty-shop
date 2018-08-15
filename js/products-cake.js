//添加banner图
var banner=document.getElementsByClassName('banner')[0];
banner.style.cssText='background:url("../images/bg-prod-ban.jpg") no-repeat -56px -21px;background-size:110% 135%;';
/*
* 添加产品列表
* */
//声明产品数组对象
var cakeArr=[
    {
        title:'大麦若叶曲奇',
        info:'万物复苏的“绿小花”',
        imgURL:'../images/cake01.jpg'
    },
    {
        title:'蔓越莓味曲奇',
        info:'奶香浓郁 酥脆香甜',
        imgURL:'../images/cake02.jpg'
    },
    {
        title:'麻薯',
        info:'软糯Q弹 清甜不腻',
        imgURL:'../images/cake03.jpg'
    },
    {
        title:'乳香烙蛋糕',
        info:'香甜扑鼻 松软可口',
        imgURL:'../images/cake04.jpg'
    },
    {
        title:'手撕面包',
        info:'会呼吸的面包',
        imgURL:'../images/cake05.jpg'
    },
    {
        title:'原味肉松饼',
        info:'咸甜酥软 清香不腻',
        imgURL:'../images/cake06.jpg'
    },
    {
        title:'香酥大麻花',
        info:'香甜酥脆 口口美味',
        imgURL:'../images/cake07.jpg'
    },
    {
        title:'苏打饼干',
        info:'轻巧薄脆 香酥有味',
        imgURL:'../images/cake08.jpg'
    },
    ];
creatProducts(cakeArr);




