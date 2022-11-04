// SetTimeout

function print(){
    console.log("Hello! I am a print method");
}

function close(){
    clearInterval(interval)
}

// setInterval
let interval = setInterval(print, 2000);
// close my interval after 10 secs
setTimeout(close, 11000);
