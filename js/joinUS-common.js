/************************************************************加入我们--登录注册页面公用js*******************************************************/
//获取元素
var regularMethod=document.getElementsByClassName('regularMethod')[0],
    login_area=regularMethod.getElementsByTagName('div'),
    methodSpans=regularMethod.getElementsByTagName('p')[0].getElementsByTagName('span');
//实现登录方式的切换样式
for(var i=0;i<methodSpans.length;i++){
    methodSpans[i].index=i;
    methodSpans[i].onclick=function () {
        //循环清除所有的checke类和visile类
        for(var i=0;i<methodSpans.length;i++){
            methodSpans[i].classList.remove('checked');
            login_area[i].classList.remove('visible');
        }
        //为当前点击的元素添加checked类
        this.classList.add('checked');
        login_area[this.index].classList.add('visible');
    }
}
/************************************************验证码生成***********************************************************************/
//获取验证码容器
function creatCode(ele) {
    var str='0123456789zbcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var strLen=str.length;
    var new_str='';
    for(var i=0;i<5;i++){
        new_str+=str[Math.floor(Math.random()*strLen)]
    }
    ele.innerText=new_str;
}
/***************************************************输入框验证*******************************************************************/
function inputVerif(ele,type,reg,reg2) {
    if(ele.value==''){
        ele.nextElementSibling.textContent = '必填';
        ele.nextElementSibling.style.color = 'red';
    }else if(type=='telOrMail'){
        if(!reg.test(ele.value) && !reg2.test(ele.value)){
            ele.nextElementSibling.textContent='手机号码或邮箱格式不正确，请重输！';
            ele.nextElementSibling.style.color='red';
        }else{
            ele.nextElementSibling.textContent='验证通过';
            ele.nextElementSibling.style.color='green';
        }
    }else if(type=='mail'){
        if(!reg.test(ele.value)){
            ele.nextElementSibling.textContent='邮箱格式不正确，请重输！';
            ele.nextElementSibling.style.color='red';
        }else{
            ele.nextElementSibling.textContent='验证通过';
            ele.nextElementSibling.style.color='green';
        }
    } else if(type=='tel'){
        if(!reg.test(ele.value)){
            ele.nextElementSibling.textContent='手机号码格式不正确，请重输！';
            ele.nextElementSibling.style.color='red';
        }else{
            ele.nextElementSibling.textContent='验证通过';
            ele.nextElementSibling.style.color='green';
        }
    } else if(type=='password'){
        if(!reg.test(ele.value)){
            ele.nextElementSibling.textContent='密码不符合条件，请重输！';
            ele.nextElementSibling.style.color='red';
        }else{
            ele.nextElementSibling.textContent='验证通过';
            ele.nextElementSibling.style.color='green';
        }
    }else if(type=='verifPwd'){
        if(ele.value!=password.value){
            ele.nextElementSibling.textContent='两次密码不一致';
            ele.nextElementSibling.style.color='red';
        }  else{
            ele.nextElementSibling.textContent='验证通过';
            ele.nextElementSibling.style.color='green';
        }
    }
}
