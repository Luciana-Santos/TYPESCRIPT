var firstName = 'Luciana';
var anotherName = 1;
var x = true;
function greeting(name) {
    console.log("Ol\u00E1, ".concat(name));
}
greeting(firstName);
// deu erro pq era esperado um argumento do tipo string, mas recebeu:
// type number
// greeting(anotherName)
// type boolean
// greeting(x)
