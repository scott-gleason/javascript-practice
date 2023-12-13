const newYearsDay = '1 Jan 2024'
const dayElement = document.getElementById('days');
const hourElement = document.getElementById('hours');
const minElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

function countdown() {
    const newYearsDate = new Date(newYearsDay);
    const currentDate = new Date();

    var delta = Math.abs(newYearsDate - currentDate) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = Math.floor(delta % 60);

    dayElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);