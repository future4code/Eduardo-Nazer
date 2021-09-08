// 1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// 10 5



// 2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

// 10 10 10



/* 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. 
Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.*/

let horaDia = prompt("Quantas horas você trabalha por dia?")
let pagDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horaDia/pagDia} por hora`)

/*O programa tem a função de cálculo, nesse caso, onde o usuário insere o total de horas
trabalhadas no dia e o total de valor recebido, assim é feita uma divisão de um pelo outro e o resultado
vem em forma de alerta. */

// Exercícios de escrita de código 

let nome
let idade
console.log (typeof nome)
console.log (typeof idade)

/* O resultado foi **undefined**, isso acontece por conta de eu não ter atríbuido nenhum valor para as 
variáveis.*/

let nome = prompt ('Olá, qual é o seu nome?') 
let idade = prompt ('Qual a sua idade?')
nome = 'Edu'
idade = 22
console.log (typeof nome)
console.log (typeof idade)

let nome = prompt ('Olá, qual é o seu nome?') 
let idade = prompt ('Qual a sua idade?')
nome = 'Edu'
idade = 22
console.log (`Olá ${nome}, você tem ${idade} anos.`)

/*2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
a) Crie três novas variáveis, contendo as respostas
b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:*/

let pastel = prompt ('Você gosta de pastel?')
let sorvete = prompt ('Você comeu sorvete hoje?')
let viagem = prompt ('Você vai viajar dia 17?')

let a = Sim 
let b = Não
let c = Não

console.log (`${pastel}- ${a}`)
console.log (`${sorvete} - ${b}`)
console.log (`${viagem} - ${c}`)

// Não consegui concluir infelizmente.

