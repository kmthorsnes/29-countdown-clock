let countdown;

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    
   Countdown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // Sjekker om det bør stoppes
        if(secondsLeft <= 0 ) {
            clearInterval(countdown)
            return; 
        }
        console.log(secondsLeft);
    }, 1000);
}