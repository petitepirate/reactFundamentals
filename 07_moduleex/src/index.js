import fruitArr from './Foods';
import {choice, remove} from './Helpers';

let fruit = choice(fruitArr);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

let fruitsLeft = remove(fruit, fruitArr);

console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} left.`);
