/*
* 登录方式的切换
*
* */
//获取页面元素
var loginArea=document.getElementsByClassName('login-area')[0],
    msgloginArea=document.getElementsByClassName('msgLogin-area')[0],
    code=loginArea.getElementsByClassName('verif-code')[0];
//设置验证码容器的点击事件，更换验证码
creatCode(code);
code.onclick= function () {
    creatCode(code);
}
/*****************************登录验证部分**********************************/
/*
* 密码登录部分验证
* */
    var inputs=loginArea.getElementsByTagName('input'),
        telOrMail=inputs[0],
        password=inputs[1],
        verifCode=inputs[2];
//获取登录按钮
    var login=document.getElementById('login');
    var error=loginArea.getElementsByTagName('i');
    //手机号码的失去焦点事件
    telOrMail.onblur=function () {
        telOrMail.value=telOrMail.value == '' ? '请输入手机号或邮箱':telOrMail.value;
    }
//手机号码的获得焦点事件
    telOrMail.onfocus=function () {
        if(this.value=='请输入手机号或邮箱'){
            telOrMail.value='';
        }
    }
//循环绑定输入框的监听事件，到输入内容时，去掉提示信息
for(var j=0;j<inputs.length;j++){
        inputs[j].oninput=function () {
            if(this.value!=''){
                this.nextElementSibling.textContent='';
            }
        }
}
//点击登录按钮，验证输入的信息
//存储密码到localStorage中
localStorage.setItem('password','admin123456');
login.onclick=function () {
    //验证手机号码
    inputVerif(telOrMail,'telOrMail',/^1(3|4|5|7|8)\d{9}$/ ,/^\w+@[a-z0-9]+\.([a-z]){1,3}$/);
//验证密码与存储的密码是否一致
    //判断是否为空
    if(password.value==''){
        password.nextElementSibling.textContent='必填';
    }else{
        if(password.value!=localStorage.getItem('password')) {
            password.nextElementSibling.textContent = '密码不正确！';
            password.value = '';
        }
    }
    //判断是否为空
    if(verifCode.value==''){
        verifCode.nextElementSibling.textContent='必填';
    }else{
        if(verifCode.value!=code.textContent) {
            verifCode.nextElementSibling.textContent = '验证码不正确！';
            verifCode.value = '';
        }else{
            verifCode.nextElementSibling.textContent = '验证成功！';
        }
    }
}
/*
* 短信登录验证部分
* */
//预存几个手机号码
localStorage.setItem('userTel','18108130213');
var msgloginBtn=msgloginArea.getElementsByTagName('button')[0],
    msgInputs=msgloginArea.getElementsByTagName('input');
//手机号码的失去焦点事件
msgInputs[0].onblur=function () {
    msgInputs[0].value=msgInputs[0].value == '' ? '请输入手机号':msgInputs[0].value;
}
//手机号码的获得焦点事件
msgInputs[0].onfocus=function () {
    if(this.value=='请输入手机号'){
        msgInputs[0].value='';
    }
}
   msgloginBtn.onclick=function () {
       if(msgInputs[0].value=='' || msgInputs[0].value=='请输入手机号'){
           msgInputs[0].nextElementSibling.textContent='必填';
       }else{
           if(msgInputs[0].value!=localStorage.getItem('userTel')){
               msgInputs[0].nextElementSibling.textContent='该手机号码未注册';
           }else{
               msgInputs[0].nextElementSibling.textContent='验证通过';
               msgInputs[0].nextElementSibling.style.color='green';
           }
       }
}





