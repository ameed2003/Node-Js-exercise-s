/*
Ameed Halabi 325274637
Lotem Sharir 305245193
50/1
*/
// משתנים וייבוא ספריות  :

const fs = require("fs");
const path = require("path");
pathToInput = path.join(__dirname, "input");
const file1 = path.join(pathToInput, "1.txt");
const file2 = path.join(pathToInput, "2.txt");
const file3 = path.join(pathToInput, "3.txt");
const FillFolder = path.join(pathToInput, "FillFolder");

// Reading the contents of files (1.txt, 2.txt, 3.txt) into variables and splitting them into lines
let content1 = fs.readFileSync(file1, "utf-8").split(/\r?\n/);
let content2 = fs.readFileSync(file2, "utf-8").split(/\r?\n/);
let content3 = fs.readFileSync(file3, "utf-8").split(/\r?\n/);
let arr = [];

// The loop check if the file is empty if not it will contineu adding to the array
for (
  let i = 1;
  content1.length > 0 || content2.length > 0 || 0 < content3.length;
  i++
) {
  // using splice to add from line 1 to n lines
  arr.push(content1.splice(0, i));
  arr.push(content2.splice(0, i));
  arr.push(content3.splice(0, i));
}
// adding the array content into the folder .
fs.writeFileSync(FillFolder, arr.join("\n"), "utf8");

