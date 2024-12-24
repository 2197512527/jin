window.onload = function () {
  const leftbtn = document.querySelector('.leftbtn')
  const leftwei = document.querySelector('.leftwei')
  const rightbtn = document.querySelector('.rightbtn')
  const rightwei = document.querySelector('.rightwei')
  const leftmove = document.querySelector('.leftmove')
  const bannermain = document.querySelector('.banner-main')
  const banner = document.querySelector('.banner')
  const rightmove = document.querySelector('.rightmove')
  const btn1 = document.querySelector('.btn1')
  const btn = document.querySelector('.btn')
  const personal = document.querySelector('.personal')
  const enterprise = document.querySelector('.enterprise')

  //鼠标移入移除显示隐藏招商信息
  rightbtn.addEventListener('mouseenter', function () {
    rightwei.style.height = 130 + 'px'
  })
  rightbtn.addEventListener('mouseleave', function () {
    rightwei.style.height = 0 + 'px'
  })
  leftbtn.addEventListener('mouseenter', function () {
    leftwei.style.height = 60 + 'px'
  })
  leftbtn.addEventListener('mouseleave', function () {
    leftwei.style.height = 0 + 'px'
  })
  //右边按钮点击事件
  rightbtn.addEventListener('click', function () {
    bannermain.style.display = 'none'
    rightmove.style.display = 'block'
    banner.style.background = "url('../images/zhaoshang3.png')"
    move(rightmove, 'left', 300, -10)
    move(bannermain, 'left', 510, -10)
    enterprise.style.display = 'block'
    move(enterprise, 'width', 570, -10)
  })
  btn1.addEventListener('click', function () {
    rightmove.style.display = 'none'
    bannermain.style.display = 'block'
    banner.style.background = "url('../images/kaidian.png')"
    move(bannermain, 'left', 760, -10)
    move(rightmove, 'left', 600, -10)
    move(enterprise, 'width', 0, -10)
  })
  //左边按钮点击事件
  leftbtn.addEventListener('click', function () {
    bannermain.style.display = 'none'
    leftmove.style.display = 'block'
    banner.style.background = "url('../images/zhaoshang2.png')"
    move(leftmove, 'left', 300, -10)
    move(bannermain, 'left', 510, -10)
    personal.style.display = 'block'
    move(personal, 'width', 570, -10)
  })

  btn.addEventListener('click', function () {
    leftmove.style.display = 'none'
    bannermain.style.display = 'block'
    banner.style.background = "url('../images/kaidian.png')"
    move(bannermain, 'left', 760, -10)
    move(leftmove, 'left', 600, -10)
    move(personal, 'width', 0, -10)
  })

  //轮播图的背景图片
  //动态添加背景图片
  const imgli = document.querySelectorAll('.imgli')
  const weimu = document.querySelectorAll('.weimu')
  const wenzi = document.querySelectorAll('.wenzi')
  const imglist = document.querySelector('.imglist')
  const leftbutton = document.querySelector('.leftbutton')
  const rightbutton = document.querySelector('.rightbutton')
  let index = 0
  // let flag = true
  // console.log(typeof imgli.length)
  //上一张
  leftbutton.addEventListener('click', function () {
    imglist.classList.remove('activelist')
    index += 1
    // console.log(index)
    move(imglist, 'left', -index * 1068, -1, () => {})
    if (index >= 4) {
      imglist.classList.add('activelist')
      imglist.style.left = 0 + 'px'
      index = 0
      move(imglist, 'left', -index * 1068, -1, () => {})
    }
  })
  //下一张
  rightbutton.addEventListener('click', function () {
    imglist.classList.remove('activelist')
    index -= 1
    // console.log(index)
    move(imglist, 'left', index * 1068, -1, () => {})
    if (index <= -4) {
      imglist.classList.add('activelist')
      imglist.style.left = 0 + 'px'
      index = 0
      move(imglist, 'left', -index * 1068, -1, () => {
        setInterval(() => {}, 3000)
      })
    }
  })
  // const circle1 = document.querySelectorAll('.circle1')
  // for (let n = 0; n <= circle1.length; n++) {
  //   circle1[n].addEventListener('click', () => {
  //     console.log(1)
  //   })
  // }

  //动态设置轮播图背景图片
  let k = 0
  for (let i = 0; i < imgli.length; i++) {
    k++
    imgli[i].style.background = 'url(../images/zhifulbt' + k + '.png)'
    imgli[i].addEventListener('mouseenter', function () {
      weimu[i].style.height = 370 + 'px'
      wenzi[i].style.display = 'block'
    })
    imgli[i].addEventListener('mouseleave', function () {
      weimu[i].style.height = 0 + 'px'
      wenzi[i].style.display = 'none'
    })
  }
}
