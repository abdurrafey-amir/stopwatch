const min = document.querySelector('.minutes')
const sec = document.querySelector('.seconds')
const millisec = document.querySelector('.milliseconds')

let minnum = 0
let secnum = 0
let millinum = 0
let INTERVAL

function milliseconds() {
    millinum++
    if (millinum < 10) {
        millisec.innerHTML = '0' + millinum
    } else {
        millisec.innerHTML = millinum
    }

    if (millinum === 99) {
        millinum = 0
        seconds()
    }
}

function seconds() {
    secnum++
    sec.innerHTML = secnum
}

function minutes() {
    minnum++
    min.innerHTML = minnum
}

function start() {
    clearInterval(INTERVAL)
    INTERVAL = setInterval(() => {
        milliseconds()
    }, 10)
}