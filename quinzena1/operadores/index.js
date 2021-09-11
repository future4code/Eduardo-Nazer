// ###Exercícios de interpretação de código

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true 

// let resultado = bool1 && bool2 
console.log("a. ", resultado) // a. false

// resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false
//             // true
// resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true 

console.log("d. ", typeof resultado) // d.  boolean


// 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)  
// Será impresso a junção dos dois numeros em forma de string.

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!")) 
let segundoNumero = Number(prompt("Digite outro numero!"))  

const soma = primeiroNumero + segundoNumero

console.log(soma)

// ###Exercícios de escrita de código

// 1.
// a) Pergunte a idade do usuário
const idadeDoUsuario = Number(prompt (`Olá, qual é a sua idade?`))

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
const idadeDoAmigo = Number(prompt (`Qual a idade do seu melhor amigo?`))

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
console.log ('Sua idade é maior do que a do seu melhor amigo?') 

console.log (idadeDoUsuario > idadeDoAmigo) 

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
console.log (idadeDoUsuario - idadeDoAmigo)

//Dica: não se esqueça de converter as respostas para o tipo **número**

// 2.
// a) Peça ao usuário que insira um número **par**
const numeroPar = Number(prompt(`Digite um numero par`))

// b) Imprima na console **o resto da divisão** desse número por 2.
const restoDaDivisão = (numeroPar % 2) 
console.log (restoDaDivisão)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Todas as respostas deram zero.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Todas as respostas resultam no número um.

//Dica: não se esqueça de converter as respostas para o tipo número

// 3.
// Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
// const idadeDoUsuario = Number(prompt(`Olá, qual a sua idade?`))

// a) A idade do usuário em meses
// b) A idade do usuário em dias
// c) A idade do usuário em horas
const meses = 12
const dias = 365
const horas = 8760

const resultadoMes = (idadeDoUsuario * meses)
const resultadoDias = (idadeDoUsuario * dias)
const resultadoHoras = (idadeDoUsuario * horas)

console.log (resultadoMes) 
console.log (resultadoDias)
console.log (resultadoHoras) 

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
const primeiroNumero = Number(prompt(`Digite um numero`))
const segundoNumero = Number(prompt(`Digite outro numero`))
// O primeiro numero é maior que segundo? true ou false
console.log (primeiroNumero > segundoNumero)

// O primeiro numero é igual ao segundo? true ou false
console.log (primeiroNumero === segundoNumero)

// O primeiro numero é divisível pelo segundo? true ou false
console.log (primeiroNumero %= segundoNumero)

// O segundo numero é divisível pelo primeiro? true ou false
console.log (segundoNumero %= primeiroNumero)

// obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.

