const hour = document.querySelector('#hours');
const minute = document.querySelector('#minutes');
const second = document.querySelector('#seconds');

function displayTime(){
    let dataTime = new Date();
    let hrs = dataTime.getHours();
    let min = dataTime.getMinutes();
    let sec = dataTime.getSeconds();
    let session = document.querySelector('#session');

    if(hrs >= 12){
        session.innerHTML = 'PM'
    }

    else{
        session.innerHTML = 'AM'
    }
    
    hour.innerHTML = hrs;
    minute.innerHTML = min;
    second.innerHTML = sec;
}

setInterval(displayTime, 10);