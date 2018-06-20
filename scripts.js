let countdown;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
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
    console.log({minutes});
}