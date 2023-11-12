// birinchi strelkaga ulanamiz 

const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes');

function clock() {
    // new Date() - Global Object Kompyuterdan hozirgi vaqtni oladi
    // getSeconds() - Komputerdagi vaqatdan sekundni olib beradi
    // getMinutes() - Komputerdagi vaqatdan minutni olib beradi
    // getHours() - Komputerdagi vaqatdan soatni olib beradi
    // console.log(new Date().getHours());
    let time = new Date(),
        second = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours()

    sec.style.transform = `rotate(${second * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`

    setTimeout(() => clock(), 1000);

    hourNum.innerHTML = hours < 10 ? '0' + hours : hours
    minNum.innerHTML = minutes < 10 ? '0' + minutes : minutes

}
clock()

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for (let i = 0; i < links.length; i++) {

    links[i].addEventListener('click', (e) => {
        // e  -elemnent haqida barcha malumotni beradi


        e.preventDefault()


        for (let j = 0; j < links.length; j++) {
            links[j].classList.remove('active')
            tabs[j].classList.remove('active')
        }
        tabs[i].classList.add('active')
        links[i].classList.add('active')
    })
}

const stopHour = document.querySelector('.stopwatch__hours'),
    stopMin = document.querySelector('.stopwatch__minutes'),
    stopSec = document.querySelector('.stopwatch__seconds'),
    switchStop = document.querySelector('.stopwatch__btn'),
    stopClock = document.querySelector('.tabsLink__span'),
    clearBtn = document.querySelector('.continueWatch__btn');


switchStop.addEventListener('click', () => {
    if (switchStop.innerHTML == 'start') {
        switchStop.innerHTML = 'stop'
        stopClock.classList.add('active')
    } else if (switchStop.innerHTML == 'stop') {
        switchStop.innerHTML = 'continue'
        clearBtn.style.display="block"
        stopClock.classList.remove('active')
        stopClock.classList.add('active_clear');
    } else if (switchStop.innerHTML == 'continue') {
        clearBtn.style.display="none"
        switchStop.innerHTML = 'stop'
    }
    clearBtn.addEventListener("click", function(){
        switchStop.innerHTML = 'start'
        clearBtn.style.display="none"
        stopSec.innerHTML=0
        stopMin.innerHTML=0
        stopHour.innerHTML=0
        stopClock.classList.remove('active_clear')
    })
   

})

function processAction() {
    if(switchStop.innerHTML == 'stop') {
        stopSec.innerHTML++
    }if(stopSec.innerHTML>=60) {
        stopSec.innerHTML = 0
        stopMin.innerHTML++
    }if(stopMin.innerHTML>=60) {
        stopMin.innerHTML = 0
        stopHour.innerHTML++
    }if(stopHour.innerHTML>=24) {
        stopHour.innerHTML = 0
    }if(switchStop.innerHTML == 'start') {
        stopHour.innerHTML = 0
        stopMin.innerHTML = 0
        stopSec.innerHTML = 0
    }


    setTimeout(()=> {
        processAction()
    }, 16);
}
processAction()















