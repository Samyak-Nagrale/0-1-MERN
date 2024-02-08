// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
const filePath = "a.txt";

// Read the file
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Remove extra spaces using regular expression
  const cleanedData = data.replace(/\s+/g, " ").trim();

  // Write the cleaned data back to the file
  fs.writeFile(filePath, cleanedData, "utf-8", (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("File cleaned successfully.");
  });
});

// to check if the operation has been carried out succesfully or not
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
