/*
* 动态载入视频列表
* */
//视频poster存入数组
var firstImgs=[
    {
        title:'大连獐子岛-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/u0346qmljtf.png',
        time:'15&#39;57&#39;&#39;'
    },
    {
        title:'大连獐子岛-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/f0346zdfkiy.png',
        time:'18&#39;25&#39;&#39;'
    },
    {
        title:'桂林必吃3碗',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/x0349qrm22c.png',
        time:'22&#39;55&#39;&#39;'
    },
    {
        title:'传说中的龙脊4宝',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/v03520ghnyv.png',
        time:'20&#39;30&#39;&#39;'
    },
    {
        title:'长白山 过年就该这么玩',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/i0368c8par4.png',
        time:'19&#39;03&#39;&#39;'
    },
    {
        title:'赌圣 带你吃遍澳门',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/p0368wq8x5p.png',
        time:'18&#39;45&#39;&#39;'
    },
    {
        title:'越南芽庄-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/e0519s92ndc.png',
        time:'18&#39;17&#39;&#39;'
    },
    {
        title:'越南芽庄-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/t0518wmgh19.png',
        time:'18&#39;14&#39;&#39;'
    },
    {
        title:'舌尖新加坡-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/w055510apwx.png',
        time:'11&#39;31&#39;&#39;'
    },
    {
        title:'舌尖新加坡-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/p0558ghgl0k.png',
        time:'14&#39;51&#39;&#39;'
    },
];
var secondImgs=[
    {
        title:'奶奶的铁盒',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/i0507lhl30w.png',
        time:'03&#39;26&#39;&#39;'
    },
    {
        title:'不改变作出强大',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/a05054r5pyz.png',
        time:'18&#39;25&#39;&#39;'
    },
    {
        title:'不妥协作出强大',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/x0505gsurc3.png',
        time:'22&#39;55&#39;&#39;'
    },
    {
        title:'爱自己作出强大',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/d0505yf9axz.png',
        time:'20&#39;30&#39;&#39;'
    },
    {
        title:'金句大礼包',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/t05013mywtj.png',
        time:'19&#39;03&#39;&#39;'
    },
    {
        title:'女孩就得挑',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/g05688inclv.png',
        time:'18&#39;45&#39;&#39;'
    },
    {
        title:'不上班我养你啊',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/r0561i1j1kz.png',
        time:'18&#39;17&#39;&#39;'
    },
    {
        title:'喂你不为礼',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/x0551zys3um.png',
        time:'18&#39;14&#39;&#39;'
    },
    {
        title:'有人想小心翼翼靠近你',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/r0538nu7d7v.png',
        time:'11&#39;31&#39;&#39;'
    },
    {
        title:'如何让老板请你吃零食',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/c0605j95r7o.png',
        time:'14&#39;51&#39;&#39;'
    },
    {
        title:'如何成为闺蜜中的女王',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/n06058p99xt.png',
        time:'11&#39;31&#39;&#39;'
    },
    {
        title:'情侣为什么“买”疯了',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/i06095y4rz2.png',
        time:'14&#39;51&#39;&#39;'
    }
];
var thirdImgs=[
    {
        title:'大连獐子岛-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/l05044pm8uw.png',
        time:'15&#39;57&#39;&#39;'
    },
    {
        title:'大连獐子岛-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/d0508fwdqzc.png',
        time:'18&#39;25&#39;&#39;'
    },
    {
        title:'桂林必吃3碗',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/i05020un0sa.png',
        time:'22&#39;55&#39;&#39;'
    },
    {
        title:'传说中的龙脊4宝',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/p0507j2y54b.png',
        time:'20&#39;30&#39;&#39;'
    },
    {
        title:'长白山 过年就该这么玩',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/r0512cwvkos.png',
        time:'19&#39;03&#39;&#39;'
    },
    {
        title:'赌圣 带你吃遍澳门',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/q0522komwh4.png',
        time:'18&#39;45&#39;&#39;'
    },
    {
        title:'越南芽庄-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/u0535sou75f.png',
        time:'18&#39;17&#39;&#39;'
    },
    {
        title:'越南芽庄-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/j0540kfix81.png',
        time:'18&#39;14&#39;&#39;'
    },
    {
        title:'舌尖新加坡-上集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/w054853fmri.png',
        time:'11&#39;31&#39;&#39;'
    },
    {
        title:'舌尖新加坡-下集',
        info:'地理/记录/实拍',
        imgURL:'../media/poster/l0611qw539j.png',
        time:'14&#39;51&#39;&#39;'
    },
];
//获取页面元素
var tvTitle=document.getElementById('title'),
    titles=tvTitle.children,
    titLen=titles.length,
    sliderList=document.getElementById('slider-list');
for(var i=0;i<titLen+2;i++){
    sliderList.innerHTML+='<div class=itemsWrap></div>'
}
var itemsWrap=sliderList.getElementsByClassName('itemsWrap');
addVideo(0,thirdImgs);
addVideo(1,firstImgs);
addVideo(2,secondImgs);
addVideo(3,thirdImgs);
addVideo(4,firstImgs);
addVideo(5,secondImgs);
addVideo(6,thirdImgs);
addVideo(7,firstImgs);
addVideo(8,secondImgs);

function addVideo(index,arr) {
    for(var j=0;j<arr.length;j++){
        itemsWrap[index].innerHTML+=`<div class="items">
      <div class="videoImg">
        <img src="${arr[j].imgURL}" alt="">
      </div>
     <div class="bg"></div>
     <div class="info">
        <h4>${arr[j].title}</h4>
        <hr>
        <span>${arr[j].info}</span>
        <span>${arr[j].time}</span>
     </div>
    </div>`;
    }
}
/**
 * 功能：滚动轮播特效
 * 开发人员：Tom.Anny
 * 日期：2018/4/24
 */
/***************获取页面元素*****************/
var carouselWrap = document.getElementById('slider-wrap');
/*******************全局变量定义***********************/
/*
 * 1.默认选中图片下标
 * 2.动画执行状态
 * 3.定时器
 * */
var curImgIdx = 1, isAnimatin = false, timer = 0;
/******************图片切换效果函数******************/
/**
 *参数:滚动距离
 * */
function tab(offset) {
//开启动画
    isAnimatin = true;
// 动画帧(动画时间和切换时间)
    var duration = 500, interval = 15;
//执行多少帧；每一帧移动距离
    var frames = duration / interval;//33.333
    var speed = Math.ceil(offset / frames);//-16

//	获取图片容器的left
    var tabLeft = parseInt(getStyle(sliderList, "left")) + offset;//-520 + -520 = -1040
    // console.log(tabLeft);
//设置定时器（每隔一定时间执行一次）
    var tim = setInterval(function () {
        //	实时获取当前图片left值
        var curLeft = parseInt(getStyle(sliderList, 'left'));// 1.-520 2.-536 .....1040
        //判断执行动画条件:
        // next：必须小于0,大于目标值
        //prev：必须大于0,小于目标值
        if ((offset < 0 && curLeft > tabLeft) || (offset > 0 && curLeft < tabLeft)) {
            sliderList.style.left = (curLeft + speed) + "px";//-536 -552
        } else {
            //关闭动画
            isAnimatin = false;
            //	动画结束，清除定时器，更新当前值
            clearInterval(tim);
            sliderList.style.left = tabLeft + "px";
            //	无限滚动
            curLeft = parseInt(getStyle(sliderList, 'left'));
            if (curLeft < -8400) {
                sliderList.style.left = "-1200px";
            } else if (curLeft > -1200) {
                sliderList.style.left = "-8400px";
            }
        }
    }, interval)

}
/*
* left的点击事件
* */
var prev=document.getElementsByClassName('left')[0];
prev.onclick=function () {
        if (isAnimatin) {
            return;
        }
        if (curImgIdx == 1) {
            curImgIdx = 7;
        } else {
            curImgIdx--;
        }
//	调用图片切换效果
        tab(1200);
//	改变小圆点样式
        changeIdots();
}
/*
* right的点击事件
* */
var next=document.getElementsByClassName('right')[0];
next.onclick=function () {
        if (isAnimatin) {
            return;
        }
        if (curImgIdx == 7) {
            curImgIdx = 1;
        } else {
            curImgIdx++;
        }
//	调用图片切换效果
        tab(-1200);
//	改变小圆点样式
        changeIdots();
}
/*
 * 切换按钮a标签的点击事件
 * */
for (var i = 0; i < titLen; i++) {
//	循环记录li的下标索引
    titles[i].index = i + 1;
//	循环绑定事件
    titles[i].onclick = function () {
        event.preventDefault();
        if (isAnimatin || this.index == curImgIdx) {
            return;
        }
        //跳转的距离 offset = -520 * (目标位置下标 - 当前位置下标 );

        var offset = -1200 * (this.index - curImgIdx);
        //	调用切换图片函数
        tab(offset);
        //	更新当前下标
        curImgIdx = this.index;
        //	小圆点样式切换函数
        changeIdots();
    }
}
/*
 * 切换按钮a标签样式切换函数
 * */
function changeIdots() {
//	清除所有li的active类
    for (var i = 0; i < titLen; i++) {
        titles[i].classList.remove('active');
    }
//	给当前小圆点设置class:active
    console.log(curImgIdx);
    titles[curImgIdx - 1].classList.add('active');
}

/***
 *
 * 自动播放
 * */
function play() {
    timer = setInterval(function () {
        if (isAnimatin) {
            return;
        }
        if (curImgIdx == 7) {
            curImgIdx = 1;
        } else {
            curImgIdx++;
        }
//	调用图片切换效果
        tab(-1200);
//	改变小圆点样式
        changeIdots();
    }, 3000)
}

/***
 * 停止播放
 * */
function stop() {
//	清除定时器
    clearInterval(timer);
}

/**
 * 获取非行内样式属性值
 * 参数：元素对象和样式属性
 * */
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.curentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}