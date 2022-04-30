/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */
import * as numbers from './modules/numbers/numbers.js';
import { composition } from './modules/math/composition.js';
import { division } from './modules/math/division.js';
import { substraction } from './modules/math/subtraction.js';
import { multiplication } from './modules/math/multiplication.js';

let a = composition(numbers.one, numbers.four);
let b = division(numbers.four, numbers.two);
let c = substraction(numbers.three, numbers.two);
let d = multiplication(numbers.five, numbers.two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
