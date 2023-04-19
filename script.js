
const dayEl = document.getElementById('Days');
const minEl = document.getElementById('Mins');
const hourEl = document.getElementById('Hours');
const secEl = document.getElementById('Sec');



// const advent = document.getElementById('advent');
// const christmas = document.getElementById("christmas");
// const epiphany = document.getElementById('epiphany');
// const lent = document.getElementById('lent');
// const holyweek = document.getElementById('holyweek');
// const ascension = document.getElementById('ascension');
// const pentecost = document.getElementById('pentecost');
// const harvest = document.getElementById('harvest');
// const saint = document.getElementById('saint');

let date = "3 Dec 2023";
function christmas(){
date = "25 Dec 2023" 
document.getElementById("christmas").classList.add("highlight");
document.getElementById("advent").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function advent(){
date = "3 Dec 2023" 
document.getElementById("advent").classList.add("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function epiphany(){
date = "6 Jan 2024" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.add("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function lent(){
date = "3 Dec 2023" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.add("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function holyweek(){
date = "24 Mar 2024" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.add("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function ascension(){
date = "18 May 2023" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.add("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function pentecost(){
date = "28 May 2023" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.add("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function harvest(){
date = "15 Aug 2023" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.add("highlight")
document.getElementById("saint").classList.remove("highlight")
}
function saint(){
date = "1 Nov 2023" 
document.getElementById("advent").classList.remove("highlight");
document.getElementById("christmas").classList.remove("highlight")
document.getElementById("epiphany").classList.remove("highlight")
document.getElementById("lent").classList.remove("highlight")
document.getElementById("holyweek").classList.remove("highlight")
document.getElementById("ascension").classList.remove("highlight")
document.getElementById("pentecost").classList.remove("highlight")
document.getElementById("harvest").classList.remove("highlight")
document.getElementById("saint").classList.add("highlight")
}

function showDate(){


    const currentDate = new Date()
    const dateInput = new Date(date);

    const totalSeconds = (dateInput - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const sec = Math.floor(totalSeconds) % 60;

    dayEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);

    // if(dateInput > currentDate){
    //     return date.replace(/3$/, '4')
    // }
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(showDate, 1000)