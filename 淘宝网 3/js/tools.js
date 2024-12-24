//封装简单动画函数
var timer
//obj要执行动画的对象 speed移动速度正数向右，负数向左  target执行动画目标位置  attr修改动画样式 callback回调函数 动画执行完成后调用
function move(obj, attr, target, speed, callback) {
  //节流阀
  clearInterval(obj.timer)
  //判断speed正负
  // 获取原来的值
  var current = parseInt(getStyle(obj, attr))
  //向执行动画中加一个timer属性，保存自己的定时器标识
  if (current > target) {
    speed = -speed
  }
  //开启定时器
  obj.timer = setInterval(function () {
    // 获取原来的值
    var old = parseInt(getStyle(obj, attr))
    var newvalue = old + speed

    if ((speed < 0 && newvalue < target) || (speed > 0 && newvalue > target)) {
      newvalue = target
    }
    obj.style[attr] = newvalue + 'px'
    obj.style[attr] = newvalue + 'px'
    //当移动到800px时，停止定时器
    if (newvalue == target) {
      clearInterval(obj.timer)
      //执行完成，调用回调函数
      callback && callback()
    }
  }, 30)
}

function getStyle(obj, name) {
  if (window.getComputedStyle) {
    return getComputedStyle(obj, null)[name]
  } else {
    return obj.currentStyle[name]
  }
}

// 定义一个函数  里指定元素添加的class属性值
//参数  obj要添加class属性的元素  cn要添加的class值
function addClass(obj, cn) {
  if (!hasClass(obj, cn)) {
    obj.className += ' ' + cn
  }
}
// 判断元素中是否含有指定class
function hasClass(obj, cn) {
  // var reg = /\bb2\b/;
  var reg = new RegExp('\\b' + cn + '\\b')
  return reg.test(obj.className)
}
//删除类
function remove(obj, cn) {
  var reg = new RegExp('\\b' + cn + '\\b')
  //删除class
  obj.className = obj.className.replace(reg, '')
}
// toggleClass 切换类没有就添加，有就删除
function toggleClass(obj, cn) {
  if (hasClass(obj, cn)) {
    remove(obj, cn)
  } else {
    addClass(obj, cn)
  }
}
