const left = document.getElementById('left')
const lSetScore = document.getElementById('lSetScore')
const lScore = document.getElementById('lScore')

const right = document.getElementById('right')
const rSetScore = document.getElementById('rSetScore')
const rScore = document.getElementById('rScore')

left.style.backgroundColor = 'lightblue'
right.style.backgroundColor = 'pink'
left.style.height = '600px'
right.style.height = '600px'
lScore.style.fontSize = '300px'
rScore.style.fontSize = '300px'
lSetScore.style.fontSize = '100px'
rSetScore.style.fontSize = '100px'

let ls = 0 // left score
let rs = 0 // right score
let lss = 0 // left set score
let rss = 0 // right set score

// 21점제
// const finalScore = 21;
// const serveChange = 5;

// 11점제
// const finalScore = 11;
// const serveChange = 2;

const finalScore = 11
const serveChange = 2

function init() {
  lScore.innerHTML = ls
  rScore.innerHTML = rs
  lSetScore.innerHTML = lss
  rSetScore.innerHTML = rss
  left.style.borderBottom = '20px solid blue'
}

init()

left.addEventListener('click', function () {
  ls++
  lScore.innerHTML = ls
  if (ls >= finalScore) {
    lss++
    lSetScore.innerHTML = lss
    ls = 0
    rs = 0
    lScore.innerHTML = ls
    rScore.innerHTML = rs
  }
  checkServe()
})

right.addEventListener('click', function () {
  rs++
  rScore.innerHTML = rs
  if (rs >= finalScore) {
    rss++
    rSetScore.innerHTML = rss
    ls = 0
    rs = 0
    lScore.innerHTML = ls
    rScore.innerHTML = rs
  }
  checkServe()
})

function checkServe() {
  let total = ls + rs
  if (total % (serveChange * 2) === 0) {
    left.style.borderBottom = '20px solid blue'
    right.style.borderBottom = ''
  } else if (total % (serveChange * 2) === serveChange) {
    left.style.borderBottom = ''
    right.style.borderBottom = '20px solid red'
  }
}
