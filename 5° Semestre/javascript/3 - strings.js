// string é tudo que for definido entre aspas

var string = "string";

// quando adicionamos um / o js igonora o proximo valor em uma string

var stringsComAspas = 'string foi criado pelo"gabriel" ';
console.log(stringsComAspas);

// podemos usar varios comandos para manipular strings vou deixar apenas o /n que é o mais usado

var newLine = "string \nString";
console.log(newLine);

// podemos concatenar strings com o simbolo de mais +

var concatenate = string + " " + stringsComAspas;
console.log(concatenate);

// podemos saber o tamanho de uma string (qtd de caracteres) escrevendo .length

var tamanho = concatenate.length;
console.log(tamanho);

// podemos pegar o valor especifico dentro de uma string com o []

var firstLetter = concatenate[0];
console.log(firstLetter);

let a = Math.min();
console.log(a);

const number = [1, 2, 3];
number[10] = 11;

console.log(number);

const set = new Set();
set.add(5);
set.add("hello");
set.add({ name: "Scalar" });
for (let item of set) {
  console.log(item + 6);
}

const ob1 = { Name: "hello", Age: 16 };

const ob2 = { Name: "hello", Age: 16 };

console.log(ob1 === ob2);

const arr = [7, 5, 8, 9];
const value = Math.max.apply(null, arr);

console.log(value);

test = 12;
console.log(typeof test);

b = new Number(3);
c = 3;
console.log(c === b);
