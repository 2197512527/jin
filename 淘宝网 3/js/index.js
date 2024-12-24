window.onload = function () {
  var nznav = document.querySelector('.nznav')
  var navtop = document.querySelector('.navtop')
  window.addEventListener('scroll', function () {
    // console.log(window.scrollY)
    if (window.pageYOffset >= 200) {
      nznav.style.height = 60 + 'px'
      navtop.style.height = 60 + 'px'
    } else if (window.pageYOffset <= 0) {
      nznav.style.height = 0 + 'px'
      navtop.style.height = 0 + 'px'
    }
  })
  var mycar = document.querySelector('.mycar')
  var mytb = document.querySelector('.mytb')
  mycar.addEventListener('mousemove', function () {
    mytb.style.height = 90 + 'px'
  })
  mycar.addEventListener('mouseleave', function () {
    mytb.style.height = 0 + 'px'
  })
  var shou = document.querySelector('.shou')
  var shoucang = document.querySelector('.shoucang')
  shou.addEventListener('mousemove', function () {
    shoucang.style.height = 85 + 'px'
  })
  shou.addEventListener('mouseleave', function () {
    shoucang.style.height = 0 + 'px'
  })
  var qianniu = document.querySelector('.qianniu')
  var qm = document.querySelector('.qianniumaijia')
  qianniu.addEventListener('mousemove', function () {
    qm.style.height = 260 + 'px'
  })
  qianniu.addEventListener('mouseleave', function () {
    qm.style.height = 0 + 'px'
  })
  var lianxi = document.querySelector('.lianxi')
  var kefu = document.querySelector('.kefu')
  lianxi.addEventListener('mousemove', function () {
    kefu.style.height = 85 + 'px'
  })
  lianxi.addEventListener('mouseleave', function () {
    kefu.style.height = 0 + 'px'
  })
  var bao = document.querySelector('.bao')
  var bb = document.querySelector('.bb')
  bao.addEventListener('mousemove', function () {
    bb.style.height = 80 + 'px'
  })
  bao.addEventListener('mouseleave', function () {
    bb.style.height = 0 + 'px'
  })
  var fixnav = document.querySelector('.fixnav')
  var fan = document.querySelector('.fan')
  window.addEventListener('scroll', function () {
    // console.log(window.pageYOffset)
    if (window.pageYOffset >= 472) {
      // alert('到了')
      fixnav.style.position = 'fixed'
      fixnav.style.top = 60 + 'px'
      fan.style.height = 50 + 'px'
    } else if (window.pageYOffset >= 60 && window.pageYOffset <= 472) {
      fixnav.style.position = 'absolute'
      fixnav.style.top = 530 + 'px'
      fan.style.height = 0 + 'px'
    }
  })
  //返回顶部
  fan.addEventListener('click', function () {
    // move(window, 'top', 0, 10)
    animate(window, 0)
  })
  // 动画函数
  function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
      var step = (target - window.pageYOffset) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)
      if (window.pageYOffset == target) {
        // 停止动画 本质是停止定时器
        clearInterval(obj.timer)
        callback && callback()
      }
      window.scroll(0, window.pageYOffset + step)
    }, 15)
  }
  var like = document.querySelector('.like')
  var pin = document.querySelector('.pin')
  window.addEventListener('scroll', function () {
    // console.log(window.pageYOffset)
    if (window.pageYOffset >= 1050) {
      like.style.backgroundColor = '#ff4400'
      like.style.color = '#fff'
      pin.style.backgroundColor = '#fff'
      pin.style.color = '#ff4400'
    } else if (window.pageYOffset >= 0 && window.pageYOffset < 1050) {
      like.style.backgroundColor = '#fff'
      like.style.color = '#ff4400'
      pin.style.backgroundColor = '#ff4400'
      pin.style.color = '#fff'
    }
  })
  pin.addEventListener('click', function () {
    animate(window, 716)
  })
  like.addEventListener('click', function () {
    // console.log(window.pageYOffset)
    animate(window, 1052)
  })

  var lbt = document.querySelector('.lbt')
  var rightanniu = document.querySelector('.rightanniu')
  var leftanniu = document.querySelector('.leftanniu')
  lbt.addEventListener('mouseenter', function () {
    rightanniu.style.display = 'block'
    leftanniu.style.display = 'block'
  })
  lbt.addEventListener('mouseleave', function () {
    rightanniu.style.display = 'none'
    leftanniu.style.display = 'none'
  })

  //轮播图
  //获取所有图片
  //盒子
  var imgarr = document.querySelector('.imgarr')
  //上一张按钮
  var leftanniu = document.querySelector('.leftanniu')
  //下一张按钮
  var rightanniu = document.querySelector('.rightanniu')
  //表示第几张图片在展示
  let index = 0
  // 节流阀
  let flag = true
  function zidong() {
    if (!flag) return
    index++
    move(imgarr, 'left', -520 * index, -10)
    if (index == 5) {
      index = 0
      move(imgarr, 'left', -520 * index, -10)
    }
    //小圆点高亮
    setCircles()
    flag = false
    setTimeout(() => {
      flag = true
    }, 500)
  }

  //下一张
  rightanniu.addEventListener('click', zidong)
  //上一张
  leftanniu.addEventListener('click', function () {
    index--
    move(imgarr, 'left', -520 * index, -10)
    console.log(index)
    if (index < 0) {
      index = 4
      move(imgarr, 'left', -520 * index, -10)
    }
    //小圆点高亮
    setCircles()
  })
  //小圆点
  const lilbt = document.querySelectorAll('.lilbt')
  function setCircles() {
    for (let i = 0; i < lilbt.length; i++) {
      if (i === index) {
        //相等就加上active
        lilbt[i].classList.add('active')
      } else if (i != index) {
        // 不相等就去掉
        lilbt[i].classList.remove('active')
      }
    }
  }
  // 小圆点点击切换图片  事件代理
  const circle = document.querySelector('.circle')
  circle.addEventListener('click', e => {
    //判断点击的是否为li
    if (e.target.nodeName.toLowerCase() === 'li') {
      //当前元素的data-n 对应的值和index一一对应
      const n = Number(e.target.getAttribute('data-n'))
      index = n
      move(imgarr, 'left', -520 * index, -10)
      setCircles()
    }
  })
  //自动轮播
  let timer = setInterval(() => {
    zidong()
  }, 3000)
  // const lbt = document.querySelector('.lbt')
  // 鼠标移入停止
  lbt.addEventListener('mouseenter', () => {
    clearInterval(timer)
  })
  // 鼠标移出开启
  lbt.addEventListener('mouseleave', () => {
    clearInterval(timer)
    timer = setInterval(() => {
      zidong()
    }, 3000)
  })

  //第二个轮播图
  const bbimg = document.querySelector('.bb-img')
  const leftbtn = document.querySelector('.leftbtn')
  const rightbtn = document.querySelector('.rightbtn')
  const innerbb = document.querySelector('.inner-bb')
  innerbb.addEventListener('mouseenter', function () {
    leftbtn.style.display = 'block'
    rightbtn.style.display = 'block'
    // 鼠标移入轮播停止
    clearInterval(timer1)
    //鼠标移入数字定时器停止
    clearInterval(timer3)
  })
  innerbb.addEventListener('mouseleave', function () {
    leftbtn.style.display = 'none'
    rightbtn.style.display = 'none'
    //鼠标移除轮播继续
    clearInterval(timer1)
    timer1 = setInterval(() => {
      setzidong()
    }, 3000)
    //鼠标移出数字定时器重启
    clearInterval(timer3)
    timer3 = setInterval(() => {
      number1++
      number.innerText = number1
      if (number1 > 5) {
        number1 = 0
        number1++
        number.innerText = number1
      }
    }, 3000)
  })

  let item = 0

  //自动
  function setzidong() {
    item += 2
    move(bbimg, 'left', -255 * item, -10)
    if (item == 10) {
      item = 0
      move(bbimg, 'left', -255 * item, -10)
    }
  }

  //上一张
  leftbtn.addEventListener('click', function () {
    item -= 2
    move(bbimg, 'left', -255 * item, -10)
    if (item < 0) {
      item = 8
      move(bbimg, 'left', -255 * item, -10)
    }
    //惦记上一张数字减一
    number1--
    number.innerText = number1
    if (number1 <= 0) {
      number1 = 6
      number1--
      number.innerText = number1
    }
  })
  //下一张
  rightbtn.addEventListener('click', setzidong)
  //点击下一张数字加一
  rightbtn.addEventListener('click', function () {
    number1++
    number.innerText = number1
    if (number1 > 5) {
      number1 = 0
      number1++
      number.innerText = number1
    }
  })
  let timer1 = setInterval(() => {
    setzidong()
  }, 3000)
  //数字自增
  var number = document.querySelector('.number')
  var number1 = number.innerText
  // console.log(number.innerText)
  let timer3 = setInterval(() => {
    number1++
    number.innerText = number1
    if (number1 > 5) {
      number1 = 0
      number1++
      number.innerText = number1
    }
  }, 3000)
}
