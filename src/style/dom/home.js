window.addEventListener('scroll', function () {
  // 获取当前滚动条的位置（垂直方向）
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // 在这里添加你想要在滚动时执行的逻辑
  console.log('当前滚动位置:', scrollTop)

  // 例如，你可以根据滚动位置改变导航栏的样式
  // 这里只是一个简单的示例，实际上你可能需要更复杂的逻辑
  if (scrollTop > 50) {
    document.querySelector('.header').classList.add('fixed-navbar')
  } else {
    document.querySelector('.header').classList.remove('fixed-navbar')
  }
})
