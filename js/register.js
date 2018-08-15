/*************************************************************手机号注册**********************************************************/
var  telRigister=regularMethod.getElementsByClassName('telRegis-area')[0],
    inputs=telRigister.getElementsByTagName('input');
//循环绑定输入框的监听事件，到输入内容时，去掉提示信息
for(var j=0;j<inputs.length;j++){
    inputs[j].oninput=function () {
        if(this.value!=''){
            this.nextElementSibling.textContent='';
        }
    }
}
//输入框的获取焦点和失去焦点事件
for(var i=0;i<inputs.length;i++){
    inputs[i].index=i;
    inputs[i].onfocus=function () {
        switch(this.index){
            //手机号输入框
            case 0:
                if(this.value=='请输入手机号'){
                    this.value='';
                }
                break;
            //密码框
            case 1:
                this.nextElementSibling.textContent='密码长度6-30，允许英文、数字、特殊字符，区分大小写';
                this.nextElementSibling.style.color='grey';
                break;
                //确认密码框
            case 2:
                this.nextElementSibling.textContent='请确保和密码输入一致';
                this.nextElementSibling.style.color='grey';
                break;
            default:
                break;
        }
    }
    inputs[i].onblur=function () {
        switch(this.index){
            //手机号输入框
            case 0:
                if(this.value==''){
                    this.value='请输入手机号';
                }
                break;
            //密码框
            case 1:
                this.nextElementSibling.textContent='';
                break;
            //确认密码框
            case 2:
                this.nextElementSibling.textContent='';
                break;
            default:
                break;
        }
    }
}
//验证输入框的输入内容
//获取注册按钮
var registerTel=document.getElementById('regis1');
registerTel.onclick=function () {
    //验证手机号码
    var tel=inputs[0];
    inputVerif(tel,'tel',/^1(3|4|5|7|8)\d{9}$/);
    //密码输入
    var password=inputs[1];
    inputVerif(password,'password',/\w!@#$%^&*~{6,30}/);
    //确认密码
    var veriPwd=inputs[2];
    inputVerif(veriPwd,'verifPwd');
    //验证码输入
    var telCode=inputs[3];
    inputVerif(telCode);
}
/******************************************************************邮箱注册部分***************************************************************/
//验证码
var code=document.getElementsByClassName('verif-code')[0];
creatCode(code);
code.onclick= function () {
    creatCode(code);
}
var registerMail=document.getElementById('regis2');
var  mailRigister=regularMethod.getElementsByClassName('mailRegis-area')[0],
    mailInputs=mailRigister.getElementsByTagName('input');
registerMail.onclick=function () {
    //验证手机号码
    var mail=mailInputs[0];
    inputVerif(mail,'mail',/^\w+@[a-z0-9]+\.([a-z]){1,3}$/);
    //密码输入
    var password=mailInputs[1];
    inputVerif(password,'password',/\w!@#$%^&*~{6,30}/);
    //确认密码
    var veriPwd=mailInputs[2];
    inputVerif(veriPwd,'verifPwd');
    //验证码输入
    var telCode=mailInputs[3];
    inputVerif(telCode);
}