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
    if (secnum < 10) {
        sec.innerHTML = '0' + secnum
    } else {
        sec.innerHTML = secnum
    }

    if (secnum === 59) {
        secnum = 0
        minutes()
    }
}

function minutes() {
    minnum++
    if (minnum < 10) {
        min.innerHTML = '0' + minnum
    } else {
        min.innerHTML = minnum
    }
}

function start() {
    clearInterval(INTERVAL)
    INTERVAL = setInterval(() => {
        milliseconds()
    }, 10)
}

function stop() {
    clearInterval(INTERVAL)
}

function reset() {
    clearInterval(INTERVAL)
    millinum = 0
    secnum = 0
    minnum = 0
    millisec.innerHTML = '00'
    sec.innerHTML = '00'
    min.innerHTML = '00'
}