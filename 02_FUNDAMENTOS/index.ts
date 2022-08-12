// 1 - NUMBER

// typar uma variável garante que ela só receba
// números e que só possa ser utlizado
// métodos de number
let x: number = 7;

// uma string não pode ser atribuida ao tipo number
// x = 'teste'

console.log(x);

const y: number = 12.444;
console.log(y);

console.log(y.toPrecision(3));


// 2 - STRING

// só recebe o type string e só utiliza 
// métodos de string

const firstName: string = 'Luciana';

console.log(firstName.toUpperCase());

let fullName: string

const lastName: string = 'Santos';

fullName = `${firstName} ${lastName}`;

console.log(fullName);

// 3 - BOOLEAN

// garante que sempre seja um booleano
let a: boolean = false

console.log(a);

// 4 - ANNOTATION & INFERENCE

// ANNOTATION
// quando definimos o tipo de um dado manualmente:
const ann: string = 'teste'

// INFERENCE
// quando o TS identifica e define o tipo de dados automaticamente
let inf = 'teste'
// Error: Type 'number' is not assignable to type 'string'
// inf = 12;

console.log('Testando a compilação automática!');
