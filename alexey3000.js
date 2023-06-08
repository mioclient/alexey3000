import MarkovGen from 'markov-generator';
import fs from 'fs'

export class Alexey3000 {
  markov;

  constructor(props = {}) {
    const file = fs.readFileSync(props.dictionary || "./dictionary.txt");
    const arr = file.toString().split('\n');
    
    this.markov = new MarkovGen({
        input: arr,
        minLength: props.length || 15
    });
  }

  generate() {
    return this.markov.makeChain();
  }
}