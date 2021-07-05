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

// es6 usando comillas francesas
let epicPhraseES6 = `${hello} ${world}!`;

console.log(epicPhrase);
console.log(epicPhraseES6);

/**
 * LET y CONST, Multilínea, Spread Operator y Desestructuración
 */
//salto de linea normal
let lorem = 'primera frase epica \n segunda frase ';
console.log('lorem  ', lorem);
//salto es6
lorem = `primera frase es6 
segunda frase epica`;
console.log('lorem  ', lorem);

/**
 * Desestructurarion  
 */
//normal
let person = {
    'name': 'dario',
    'age': 28,
    'country': 'BO'
};
console.log(person.name, person.country);
//es6

let { name, age, country } = person;
console.log(name, age, country);

// con arrays

let team1 = ['a1', 'b1', 'c1'];

let team2 = ['a2', 'b2', 'c2'];

let education = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2'];
console.log(education);
education = ['z', ...team1, ...team2];
console.log(education);

/**
 * let
 */
// var esta disponible globalmente, let es solo para el scope asignado

{
    var globalVar = "hola var ";
}
{
    let globalLet = "hola let ";
}
console.log(globalVar);

console.log(globalLet); // genera error 
/***
 * Arrow Functions, Promesas y Parámetros en objetos
 */

//Parámetros en objetos
let name = "dario";
let age = 28;

obj = { name: name, age: age }
console.log(obj);

//es6
obj2 = { name, age }
console.log(obj);

// Arrow Functions o funciones tipo flecha
const names = [
    {
        name: "dario",
        age: 28
    },
    {
        name: "yesica",
        age: 26
    }
]
let listOfNmaes = names.map(function (item) { // con funcion anonima
    console.log(item.name);
})
//es6
let listOffNames2 = names.map(item => console.log(item.name))

const listOffNames3 = (name, age, country) => {
    //...
}

const listOffNames4 = name => {// si solo es un param 
    //...
}

const square = num => num * num; // retorna value

//Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!');
        } else {
            reject('ups!');
        }
    })
}

// llamar promise

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))

/**
 * Clases, Módulos y Generadores
 */

//calses
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(a, b) {
        this.valueA = a;
        this.valueB = b;
        return this.valueA + this.valueB;
    }

}
// llamando funcion de la clase
const calc = new calculator();
console.log(calc.sum(12, 2));

//module

import { hello } from './module';
hello();

//Generadores

function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield ' world';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());// arroja undefined
