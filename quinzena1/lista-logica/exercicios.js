// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário a **altura** e a **largura** 
  // (nessa ordem) de um retângulo e **imprime no console** a **área** do retângulo.
  const altura = Number(prompt(`Digite a altura do retângulo.`))
  const largura = Number(prompt(`Digite a largura do retângulo.`)) 
  console.log  (altura*largura)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário o ano atual
  //  e seu ano de nascimento e imprima no console sua idade.
  const anoAtual = Number(prompt(`Em que ano estamos?`))
  const anoDeNascimento = Number(prompt(`Em que ano você nasceu?`))
  console.log (anoAtual - anoDeNascimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário o peso em kg e a altura em 
  // metros de uma pessoa e imprima no console o seu IMC (Índice de Massa Corpórea).
  const kilosDoUsuario = Number(prompt(`Quanto você pesa?`))
    const alturaDoUsuario = Number(prompt(`Quanto você tem de altura?`))
      const imc = kilosDoUsuario/(alturaDoUsuario*alturaDoUsuario)
        console.log (`O IMC do usuário é ${imc}`)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário seu nome, sua idade e seu
  // email (nessa ordem), e imprime no console uma mensagem como a seguinte:
  // Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}.
  const nome = (prompt(`Digite seu nome:`))
    const idade = Number(prompt(`Digite a sua idade:`))
      const email = (prompt(`Digite seu endereço de email:`))
       console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário suas três cores favoritas e
  // imprime no console um array que contenha essas três cores.

const primeira = prompt(`Digite a sua primeira cor favorita:`)
const segunda = prompt(`Digite a sua segunda cor favorita:`)
const terceira = prompt(`Digite a sua terceira cor favorita:`)

let arrayCores = [primeira, segunda, terceira]

console.log(arrayCores)
}


// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário uma string e
  //  imprima no console ela em letra maiúscula.
  const nome = prompt(`Digite o seu nome:`)
    const nomeMaiusculo = nome.toUpperCase()
      console.log (nomeMaiusculo)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  // Escreva um código que **pede ao usuário** o **custo de um espetáculo de
  //  teatro** e o **valor de cada ingresso** (considere que todos os ingressos
  //    têm o mesmo preço) e **imprima no console quantos ingressos precisam
  //     ser vendidos** para que o espetáculo **não dê prejuízo**.
  // dividir o valor do ingresso com o valor total do teatro 
  const custoDoTeatro = Number(prompt(`Qual é o custo total do teatro?`))
    const valorDoIngresso = Number(prompt(`Qual o valor a ser cobrado por cada ingresso?`))
      const quantidade = (custoDoTeatro/valorDoIngresso)
        console.log (quantidade)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário duas strings e imprima no
  // console um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
const string1 = prompt(`Digite:`)
const string2 = prompt(`Digite:`)

console.log(string1.length===string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário duas strings e **imprima no
  // console** um booleano (true ou false) indicando se elas são iguais,
  // desconsiderando letras maiúsculas ou minúsculas.
  const string1 = prompt(`Digite:`)
  const string2 = prompt(`Digite:`)
    
    const string1minu = string1.toLocaleLowerCase()
    const string2minu = string2.toLocaleLowerCase()
      
      console.log(string1minu.includes(string2minu))

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}