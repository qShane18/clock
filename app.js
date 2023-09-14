
let currentTime = new Date();
let curr_Hour = currentTime.getHours();
let curr_Minute = currentTime.getMinutes();
let curr_Second = currentTime.getSeconds();

const hourHand = document.querySelector('.hour-hand');


//calculate the angle
let minutes = (curr_Hour > 12 ? curr_Hour - 12: curr_Hour) * 60 + curr_Minute;
hourHand.style.setProperty('transform', `rotate(${-90 - (360 - minutes / 2)}deg)`)



