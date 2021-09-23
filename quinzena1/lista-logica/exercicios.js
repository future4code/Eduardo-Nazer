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
        console.log(imc)
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
    // Escreva um código que **pede ao usuário** o **ano atual**,
    const anoAtual = Number(prompt(`Em que ano estamos?`))

    // seu **ano de nascimento**,
    const anoUsuario = Number(prompt(`Em que ano você nasceu?`))
    
    // e o **ano em que sua carteira de identidade foi emitida** (nessa ordem).
    const anoCarteira = Number(prompt(`Em que ano sua carteira foi emitida?`))
    
    const idadeUsuario = (anoAtual - anoUsuario)
    console.log(idadeUsuario)
    
    const carteiraId = (anoAtual - anoCarteira)
    console.log(carteiraId)
    
    // A função deve imprimir no console um booleano (true ou false) que indica se a carteira
    // precisa ser renovada ou não. 
    // A carteira precisa ser renovada segundo os seguintes critérios:
    
    // - Para pessoas com menos de 20 anos, ou exatamente 20 anos,
    // deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
    const menosXx = (20 <= idadeUsuario)
    // console.log(menosXx)
    const vAnos = (5 <= carteiraId)
    // console.log(vAnos)
    const cond1 = (menosXx&&vAnos) 
    console.log(cond1)
  
    // - Para pessoas entre 20 e 50 anos, ou exatamente 50,
    // deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
    const entreXx = (20 > idadeUsuario)
    const entre50 = (50 <= idadeUsuario)
    const entre = (entreXx&&entre50) 
    const xAnos = (10 <= carteiraId)
    const cond2 = (entre&&xAnos)  
    console.log(cond2)
    
    
    // - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
    const aCima = (50 > idadeUsuario)
    const xvAnos = (15 <= carteiraId)
    const cond3 = (aCima&&xvAnos)
    console.log(cond3)
    
    console.log (cond1||cond2||cond3)
  
    
    // Você deve usar comparadores e operadores booleanos para avaliar as condições.
    // Para te ajudar a organizar a lógica, tente criar 3 variáveis separadas, 
    // uma para cada condição, e depois compará-las.
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  // Escreva um código que pede ao usuário um ano e **imprima no console** um booleano (true ou false)
// que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:
const ano = Number(prompt(`Digite um ano:`))
// - **São bissextos** todos os anos múltiplos de 400**.**
                (ano * 400)
// - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**

// - **Não são bissextos** todos os demais anos.

// - Dica
//     Você deve usar comparadores e operadores booleanos para avaliar as condições. Para te ajudar a organizar a lógica,
// tente criar 3 variáveis separadas, uma para cada condição, e depois compará-las.

// - Exemplo 1
//**Entradas**
//  ano: 2000
//**Saída**
//  true
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  // Escreva um código que faz as seguintes perguntas ao usuário (condições para ser uma pessoa estudante da Labenu):

// - Você tem mais de 18 anos?
const idade = prompt(`Você tem mais de 18 anos?`)
const info1 = (idade==="sim")
// console.log(info1)


// - Você possui ensino médio completo?
const medio = prompt(`Você possui ensino médio completo?`)
const info2 = (medio==="sim")
// console.log(info2)

// - Você possui disponibilidade exclusiva durante os horários do curso?
const horario = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
const info3 = (horario==="sim")
// console.log(info3) 

console.log(info1&&info2&&info3)


}