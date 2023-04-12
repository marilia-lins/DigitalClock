const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const clock = setInterval(counting, 1000)

function counting(){
    let time = new Date()
    let hour = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()

    if(hour < 10){
        hour = "0" + hour
    }
    if(mins < 10){
        mins = "0" + mins
    }
    if(secs < 10){
        secs = "0" + secs
    } 

    hours.textContent = hour
    minutes.textContent = mins
    seconds.textContent = secs

}