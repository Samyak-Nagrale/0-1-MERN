// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

// read from the file
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});

var a = 0;
for (let i = 0; i < 1000000000000; i++) {
  a++;
}

// As fs.readFile is asynchronous function, even if the file read operation is completed,
//if the call stack has operations, the callback queue cannot offload its completed processes 
//onto the stack as the thread is still busy doing other work. (JS is a single threaded language).
//As the operation after file read becomes more and more expensive, it has to wait until the thread becomes empty.
