export const testfun = () => {
  let hack = document.querySelector('.hack')
  let text = '“欢迎来到亮亮的个人小屋！”'
  let word = text.split('')
  return function writeText() {
    if (word.length > 0) {
      let span = document.createElement('span')
      span.innerText = word.shift()
      hack.appendChild(span)
      console.log(span.innerText)
    } else {
      setTimeout(() => {
        hack.innerHTML = ''
        word = text.split('')
      }, 1000)
    }
  }
}
