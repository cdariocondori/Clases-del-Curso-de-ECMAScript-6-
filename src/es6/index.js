/**
 * 
DEFAULT PARAMS 
 */
//antes
function newFunction(name, age, country) {
    var name = name || 'dario';
    var age = age || 28;
    var country = country || 'BO';
    console.log(name, age, country);
}


//  ECMAScript 6


function newFunction2(name = 'dario', age = 28, country = 'BO') {
    console.log(name, age, country);
}

newFunction2(); // muestra los params default
newFunction2("oscar", 30, 'MX');


/**
 * Concatenation - Template Literals
 */

//antes
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';

// es6
let epicPhraseES6 = `${hello} ${world}!`;

console.log(epicPhrase);
console.log(epicPhraseES6);