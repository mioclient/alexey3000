import MarkovGen from 'markov-generator';
import fs from 'fs'

const file = fs.readFileSync("dictionary.txt");
const arr = file.toString().split('\n');

let markov = new MarkovGen({
    input: arr,
    minLength: 15
  });
   

let sentence = markov.makeChain();
console.log(sentence);