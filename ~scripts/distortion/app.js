const fs               = require('fs');
const inputText        = fs.readFileSync('./input.txt', 'utf8');
const corruptionFactor = 1;

let outputText         = "";

const limits = {
  lower: 0x21, 
  upper: 0x7E
};

for (let corruptionChance = 0.8; corruptionChance >= 0; corruptionChance -= 0.2) {
  for (const letter of inputText) {
    let char = letter.codePointAt(0);
    if (char >= limits.lower && char <= limits.upper) {
      if (Math.random() < corruptionChance) {
        if (Math.random() > 0.5) char += corruptionFactor;
        else                     char -= corruptionFactor;        
      }

      if (char < limits.lower || char > limits.upper) char = Math.floor(Math.random() * (limits.upper - limits.lower + 1)) + limits.lower;
      if (char == "`".codePointAt(0)) char = "'".codePointAt(0);
      
      outputText += String.fromCharCode(char);
    }
    else outputText += letter;
  }  
  outputText += `\n-------------------------------------(corruptionChance: ${corruptionChance.toFixed(2)})------\n`;
}



fs.writeFileSync('./output.txt', outputText);

console.log('Done');
