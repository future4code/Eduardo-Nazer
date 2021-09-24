// console.log(`Olá mundo!!!`)

// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
//     pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1. Leia o código abaixo:

//         ```jsx
//         const respostaDoUsuario = prompt("Digite o número que você quer testar")
//         const numero = Number(respostaDoUsuario)

//         if (numero % 2 === 0) {
//           console.log("Passou no teste.")
//         } else {
//           console.log("Não passou no teste.")
//         }
//         ```

//         a) Explique o que o código faz. Qual o teste que ele realiza? 
             O código faz uma divisão pelo número 2 para descobrir se 
              o número digitado pelo usuário é par ou impar,
               no caso de ser par ele passa no teste e se for impar 
                 ele reprova no teste.

//         b) Para que tipos de números ele imprime no console "Passou no teste"? 
             Ele imprime "Passou no teste" apenas para números pares.

//         c) Para que tipos de números a mensagem é "Não passou no teste"? 
             Ele imprime "Não passou no teste" apenas para números impar

//     2. O código abaixo foi feito por uma pessoa desenvolvedora,
//          contratada para automatizar algumas tarefas de um supermercado:

//         ```jsx
        // let fruta = prompt("Escolha uma fruta")
        // let preco
        // switch (fruta) {
        //   case "Laranja":
        //     preco = 3.5
        //     break;
        //   case "Maçã":
        //     preco = 2.25
        //     break;
        //   case "Uva":
        //     preco = 0.30
        //     break;
        //   case "Pêra":
        //     preco = 5.5
        //     break; // BREAK PARA O ITEM c.
        //   default:
        //     preco = 5
        //     break;
        // }
        // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//         ```

//         a) Para que serve o código acima?
             O código serve para informar o usuário sobre o preço da fruta escolhida pelo mesmo.

//         b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
             "O preço da fruta  Maçã  é  R$  2.25"

//         c) Considere que um usuário queira comprar uma `Pêra`,
//         qual seria a mensagem impressa no console se retirássemos o `break` que está
//         logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
            A mensagem que seria impressa é "O preço da fruta  Pêra  é  R$  5" 
             pois ele continua lendo o código seguinte e acaba bugando os valores.

//     3. Leia o código abaixo:

//         ```jsx
        // const numero = Number(prompt("Digite o primeiro número."))

        // if(numero > 0) {
        //   console.log("Esse número passou no teste")
        // 	let mensagem = "Essa mensagem é secreta!!!"
        // }

        // console.log(mensagem)
//         ```

//         a) O que a primeira linha está fazendo?
         Está solicitando ao usuário um numero e ao mesmo tempo transformando uma string em number.

//         b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
         Se o usuário digitar o número 10 o console irá imprimir "Esse número passou no teste",
         o que não vai acontecer com o -10 pois o código não tem o comando "else". 

//         c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
         Sim, o console.log esta pedindo o retorno de uma variável de dentro do "if", 
         o erro acontece por ele ser do escopo global e não ter acesso as coisas que estão la dentro.




//         - **Exercícios de escrita de código**
//     1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console
//     se ele/ela pode dirigir (apenas maiores de idade).

//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim,
//         imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

    const idadeUsuario = Number(prompt(`Qual é a sua idade?`))
        if (idadeUsuario >= 18){
            console.log(`Você pode dirigir`)
        } else {console.log(`Você não pode dirigir`)}
    

//     2. Agora faça um programa que verifica que turno do dia um aluno estuda.
//     Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno).
//     Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
//         - 💡 Dica

//             Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//             Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

//             Se o usuário digitar "V", a saída deve ser:

//             ```
//             "Boa Tarde!"
//             ```
        const turno = prompt(`Em qual turno você estuda?`)
            if (turno === "M") {console.log(`Bom dia!`) 
            }
            if (turno === "V") {console.log(`Boa tarde!`)
            }
            if (turno === "N") {console.log(`Boa noite!`) 
            }

//     3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//         - 💡 Dica

//             Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

         const turno = prompt(`Em qual turno você estuda?`)
            switch (turno){
                case "M":
                    console.log(`Bom dia!`)
                    break
                case "V":
                    console.log(`Boa tarde!`)
                    break
                case "N":
                    console.log(`Boa noite!`)
                    break
                default:
                    alert (`Tente digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno)`)
                    break
            }


//     4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá
//     a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais.
//     Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta
//     sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme.
//     Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

        const genero = prompt(`Qual gênero tem disponivel?`)
        const valor = Number(prompt(`Qual é o valor do ingresso?`))

        const fanta = (genero === "fantasia")
        const preco = (valor < 15)
            if (fanta === preco){
                console.log("Bom filme!")
            } else {console.log("Escolha outro filme :(")}
