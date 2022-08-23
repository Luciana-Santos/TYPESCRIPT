"use strict";
// 1 - ARRAYS
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[2]);
// uma string não pode ser atribuida
// ao tipo number
// numbers = 'teste'
const nomes = ['Namjoon', 'Seokjin', 'Yoongi'];
// 2 - ARRAYS outra sintaxe
const nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.push(6, 7);
console.log(nums);
// 3 - ANY
// não é uma boa ideia
// define que a variavel pode receber
// qualquer tipo de dado
// usos:
// quando o tipo de dado não importa 
// quando a array pode ter mais de um tipo de dado
const arr1 = ['teste', [], true, { nome: 'Luciana' }];
console.log(arr1);
arr1.push(123);
console.log(arr1);
// 4 - TIPO PARÂMETRO DE FUNÇÕES
// pode tipar cada um dos parâmetros ou todos juntos
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// uma string não pode ser atribuida
// ao tipo number
// soma('4', '5')
// 5 - TOPO DE RETORNO DE FUNÇÕES
// também é possivel tipar o retorno da função
function greeting(nome) {
    return `Olá, ${nome}`;
}
console.log(greeting('Luciana'));
// uma string não pode ser atribuida ao tipo number
// console.log(greeting(7));
