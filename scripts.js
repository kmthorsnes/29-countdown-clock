let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');


function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    
   Countdown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Sjekker om nedtelling bør stoppes //
        if(secondsLeft < 0 ) {
            clearInterval(countdown);
            return; 
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0': '' }${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display; 
    console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();  
    endTime.textContent = `Be back at ${hours}:${minutes< 10 ? '0': '' }${minutes}`;


}