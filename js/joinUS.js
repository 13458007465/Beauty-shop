/***************获取页面元素*****************/
var bannerWrap = document.getElementsByClassName('bannerWrap')[0];
var aImgs = bannerWrap.querySelector('.banners').children;
var aIdots = bannerWrap.querySelectorAll('.dotItem');
var timer;
play();
function play() {
    timer=setInterval(function () {
        for(var i=0;i<aImgs.length;i++){
            if(aImgs[i].classList.contains('show')&&aIdots[i].classList.contains('active')){
                aImgs[i].classList.remove('show');
                aIdots[i].classList.remove('active');
            }else{
                aImgs[i].classList.add('show');
                aIdots[i].classList.add('active');
            }
        }
    },4000);
}

bannerWrap.onmouseover=function () {
    clearInterval(timer);
}
bannerWrap.onmouseout=function () {
    play();
}
/* 循环绑定小圆点点击事件*/
for (var i = 0; i < aIdots.length; i++) {
    aIdots[i].idx = i;
    aIdots[i].onclick=function () {
        //每次点击小圆点前先清除show类和active类
        for(var j=0;j<aIdots.length;j++){
            aIdots[j].classList.remove('active');
            aImgs[j].classList.remove('show');
        }
        //只给当前点击的设置show类和active类
            aImgs[this.idx].classList.add('show');
            this.classList.add('active');
    }
}