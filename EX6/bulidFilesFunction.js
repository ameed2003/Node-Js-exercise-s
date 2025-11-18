const { randomInt } = require("crypto");
const fs = require("fs");
const path = require("path");
const currentPath = path.join(__dirname, "input");
let textIn = [];
let textOut = [];
let i = 0;
let strRest = "";



// A method used to create three files :
function bulidInputFiles() 
{
  const maxCount = 3;
  for (let i = 0; i < maxCount; i++) {
    let fileName = path.join(currentPath, i + 1 + ".txt");
    const maxRow = 1 + randomInt(20);
    let str = "";
    for (let j = 0; j < maxRow; j++)
      str += String.fromCharCode(97 + i) + j + "\n";
    str = str.substring(0, str.length - 1);
    fs.writeFileSync(fileName, str);
  }
}
bulidInputFiles();

