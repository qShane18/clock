
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const digitClock = document.querySelector('.digit-clock');

function update() {
    let currentTime = new Date();
    let curr_Hour = currentTime.getHours();
    let curr_Minute = currentTime.getMinutes();
    let curr_Second = currentTime.getSeconds();

    //this is for calculating the angle of hour hand
    let minutesInDay = (curr_Hour > 12 ? curr_Hour - 12: curr_Hour) * 60 + curr_Minute;

    // set the hands
    hourHand.style.setProperty('transform', `rotate(${-90 + 360 * minutesInDay / 720}deg)`);
    minuteHand.style.setProperty('transform', `rotate(${-90 + 360 * curr_Minute / 60}deg)`);
    secondHand.style.setProperty('transform', `rotate(${-90 + 360 * curr_Second / 60}deg)`);
    console.log('update');
    // set the digit clock
    digitClock.innerHTML = `${curr_Hour}:${curr_Minute}`;
}

window.setInterval(update, 1000);
