const firstName = 'Luciana'
const anotherName = 1
const x = true

function greeting(name: string) {
  console.log(`Olá, ${name}`); 
}

greeting(firstName)

// deu erro pq era esperado um argumento do tipo string, mas recebeu:
// type number
// greeting(anotherName)
// type boolean
// greeting(x)