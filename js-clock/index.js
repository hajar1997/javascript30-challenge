const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const date = new Date();
    
    const second = date.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    const minute = date.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    
    
    const hour = date.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate,1000);
setDate();