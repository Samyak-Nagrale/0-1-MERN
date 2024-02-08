// Create a counter in javascript that increments after each passing second wothout using setInterval() function.

var counter = 0;

function incrementCounter() {
  setTimeout(() => {
    counter++;
    incrementCounter();
  }, 1000);
  console.log(counter);
}

incrementCounter();
