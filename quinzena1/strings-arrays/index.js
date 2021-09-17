// **Exercícios de interpretação de código**
// 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

    let array
    console.log('a. ', array) //a. undefined

    array = null
    console.log('b. ', array) //b.null

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length) //c.1,1,1,1,1,1,1,2,2,2,2

    let i = 0
    console.log('d. ', array[i]) //d. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 0

    array[i+1] = 19
    console.log('e. ', array) //e.

    const valor = array[i+6]
    console.log**('f. ', valor)
    


// 2. Leia o código abaixo com atenção 

    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    


// **Exercícios de escrita de código**
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
//  Em seguida, imprima na tela a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt(`Digite seu nome:`)
const emailDoUsuario = prompt(`Digite seu email:`)
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
//  armazenado em uma variável. Em seguida, siga os passos:
const comidasPreferidas = [
    'strogonoff', 
    'hamburguer', 
    'nhoque', 
    'pastel', 
    'sorvete'
]

//     a) Imprima na tela o array completo
console.log(comidasPreferidas)

//     b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ",
//  seguida por cada uma das comidas, **uma embaixo da outra**.
console.log(`Essas são minhas comidas preferidas: ${comidasPreferidas}`) 

//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//  Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
const comidaUsuario = prompt(`Qual é a sua comida preferida?`)
comidasPreferidas.splice(1, 1)
comidasPreferidas.push(comidaUsuario)  
console.log(comidasPreferidas)


// 3. Faça um programa, seguindo os passos:
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = [ ]

//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as,
//  uma por uma, no array
const tarefasUsuario1 = prompt(`Qual a sua primeira tarefa do dia?`)
const tarefasUsuario2 = prompt(`Qual será a segunda tarefa?`)
const tarefasUsuario3 = prompt(`E sua terceira tarefa do dia?`)
listaDeTarefas.push(tarefasUsuario1)
listaDeTarefas.push(tarefasUsuario2)
listaDeTarefas.push(tarefasUsuario3)

//     c) Imprima o array na tela
console.log(listaDeTarefas)

//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const indice = Number(prompt(`Digite o índice de uma tarefa que você ja realizou(0, 1 ou 2):`))

//     e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.pop(indice)

//     f) Imprima o array na tela
console.log(listaDeTarefas)