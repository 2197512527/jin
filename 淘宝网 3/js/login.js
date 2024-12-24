

//密码框验证
var ipt = document.getElementById('ipt');
var po = document.querySelector('.po');
ipt.onfocus = function () {
    var timer = null;
    ipt.addEventListener('input', function () {
        if (timer != null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            if (ipt.value.length < 8 || ipt.value.length > 24) {
                po.className = 'po wrong';
                po.innerHTML = '请输入正确位数';
                $('.alerPas').fadeIn(1000);
            } else {
                po.innerHTML = '输入正确';
                $('.alerPas').fadeIn(1000);
                po.className = 'po right';
            }
        }, 800);
    })
}




//小眼睛显示和隐藏
var img = document.getElementById('eye');
var pwd = document.getElementById('ipt');
var flag = 0;
eye.onclick = function () {
    //点击一次后，要进行变化
    if (flag == 0) {
        pwd.type = 'text';
        eye.src = '/images/eye.jpg';
        flag = 1;
    } else {
        pwd.type = 'password';
        eye.src = '/images/noeye.jpg';
        flag = 0;
    }

}