/*
* logo的事件
* */
var logo=document.getElementById('logoWrap');
window.onload=function () {
    logo.classList.add('auto');
}
/**********************************************导航部分*************************************************************/
/*
* 动态添加导航栏
* */
//循环向DOM中添加a标签
//获取显示导航的容器ul
var mainNav=document.getElementById('mainNav');
// for(var i=0;i<navArrLen;i++){
//     mainNav.innerHTML+=`<a href="#">${navArr[i]}<div class="subNav"><ul></ul></div> </a>`;
// }
/*
* 动态添加二级导航
* */
//获取二级导航容器
var subNav=document.getElementsByClassName('subNav');
//事件代理：鼠标移入对应的主导航，在二级导航容器中添加相应的二级导航
var a_label=mainNav.getElementsByTagName('a');
mainNav.onmouseover=function (event) {
    //循环去除choose类
    //去掉a标签的样式
    //获取a标签

    for(var i=0;i<a_label.length;i++){
        a_label[i].classList.remove('class','choose');
    }
    var current = event.target,
        nowTagName = current.tagName.toLowerCase();
    if (nowTagName == 'a') {
        current.classList.add('choose');
        var content = current.innerText;
        switch (content.trim()) {
            case '关于我们':
                var ul=subNav[0].children[0];
                subNav[0].style.visibility = 'visible';
                ul.innerHTML = '';
                ul.setAttribute('class', 'subNavWrap');
                ul.setAttribute('id', ' ');
                for (var i = 0; i < 7; i++) {
                    ul.innerHTML += `<li class="abtUS"></li>`;
                }
                break;
            case '新闻中心':
                var ul=subNav[1].children[0];
                subNav[1].style.visibility = 'visible';
                ul.innerHTML = '';
                ul.setAttribute('class', 'subNavWrap');
                ul.setAttribute('id', ' ');
                for (var i = 0; i < 3; i++) {
                    ul.innerHTML += `<li class="news"></li>`;
                }
                break;
            case  '产品之家':
                var ul=subNav[2].children[0];
                subNav[2].style.visibility = 'visible';
                ul.innerHTML = '';
                ul.setAttribute('id', 'subProducts');
                for (var i = 0; i < 12; i++) {
                    ul.innerHTML += `<li class="products"></li>`;
                }
                subProductsPage('products');
                break;
            case '加盟信息':
                var ul=subNav[4].children[0];
                subNav[4].style.visibility = 'visible';
                ul.innerHTML = '';
                ul.setAttribute('class', 'subNavWrap');
                ul.setAttribute('id', ' ');
                for (var i = 0; i < 4; i++) {
                    ul.innerHTML += `<li class="joinInfo"></li>`;
                }
                break;
            case '大宗采购':
                var ul=subNav[5].children[0];
                subNav[5].style.visibility = 'visible';
                ul.innerHTML = '';
                ul.setAttribute('class', 'subNavWrap');
                ul.setAttribute('id', ' ');
                for (var i = 0; i < 4; i++) {
                    ul.innerHTML += `<li class="bulkBuying"></li>`;
                }
                break;
            default:
                subNav[3].style.visibility = 'hidden';
                subNav[6].style.visibility = 'hidden';
                break;
        }
    }
}
for(var i=0;i<a_label.length;i++){
    a_label[i].onmouseleave=function () {
        this.style.backgroundColor = 'transparent';
        this.children[0].style.visibility='hidden';
    };
    a_label[i].onmouseover=function () {
        this.style.backgroundColor = '#ec6d3d';
    };
    subNav[i].onmouseover=function () {
        //再次隐藏二级导航栏
        this.parentElement.style.backgroundColor = '#ec6d3d';
    }
    subNav[i].onmouseleave=function () {
        //再次隐藏二级导航栏
        this.style.visibility = 'hidden';
    }
}

/******************************************产品之家页面*************************************************/
/*
* 功能：动态向页面添加产品列表
* 参数：数组对象
* */
//获取产品列表容器
var productsList=document.getElementById('productsList').children[0];
function creatProducts(arr) {
    var arr_len=arr.length;
    for(var i=0;i<arr_len;i++){
        productsList.innerHTML+=`<li><a href="">
<div class="cakeImg">
  <img src="${arr[i].imgURL}" alt="">
</div>
<div class="bg"></div>
<div class="info">
  <h4>${arr[i].title}</h4>
  <hr>
  <p>${arr[i].info}</p>
</div></a></li>`;
    }
}
/*
* 点击二级菜单跳转页面
* */
function subProductsPage(eleClass) {
    var products = document.getElementsByClassName(eleClass);
    for (var j = 0; j < products.length; j++) {
        products[j].idx = j;
        products[j].onclick = function () {
            switch (this.idx) {
                case 0:
                    location.href='../pages/products.html';
                    break;
                case 1:
                    location.href='../pages/seafood.html';;
                    break;
                case 2:
                    location.href='../pages/meat.html';
                    break;
                case 3:
                    location.href='../pages/well-being.html';
                    break;
                case 4:
                    location.href='../pages/fruit.html';
                    break;
                default:
                    break;
            }
        }
    }
}
/******************************************页面的返回顶部***********************************/
var toTop=document.getElementById('toTop');
//当滚动条滚动到指定位置时才显示返回顶部按钮
window.onscroll=function () {
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
    if(scrollTop>467){
        toTop.style.display='block';
    }else{
        toTop.style.display='none';
    }
}
//为返回顶部图片添加点击事件:平滑的回到顶部
//声明变量t用来存储setTimeout()的返回值，以便清除。
var t=0;
toTop.addEventListener('click',totop,false);
function totop() {
    //给一个计时器，循环执行函数
    t=setTimeout(totop,10);
    //获取当前滚动条滚动的距离
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset||0;
    //存储下一次的滚动条距离顶部的距离
    var new_scrollTop=scrollTop-30;
    //new_scrollTop>0时，即距离顶部不为0时，通过window.scrollTo(0,new_scrollTop);将滚动条向上移
    if(new_scrollTop>0){
        window.scrollTo(0,new_scrollTop);
    }else{//new_scrollTop<0时，通过window.scrollTo(0,new_scrollTop);将滚动条移动到顶部
        window.scrollTo(0,0);
        clearTimeout(t);
    }
    //给一个计时器，循环执行函数
}