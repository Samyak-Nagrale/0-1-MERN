// Create a counter in javascript that counts from 0 and increments after each passing second

var counter = 0;

function incrementCounter(counter){
    counter++;
}

setInterval( incrementCounter , 1000)

