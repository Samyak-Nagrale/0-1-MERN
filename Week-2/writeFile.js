// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

// data to be added to file
var data = "This a test data \n";

// fs.writeFile() will overwrite all the existing file contents
// to append data to file, use appendFile()

fs.appendFile("a.txt", data, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Write process completed");
    console.log("Following are the contents of the file: ");
    console.log("\n" + fs.readFileSync("a.txt", "utf-8"));
  }
});
