/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   //  - **🎰**   Montando o jogo

   //  Essa etapa do projeto consiste em criar um programa que:

   //  1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
      console.log(`Boas vindas ao jogo de Blackjack!`)
   //  2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
      res = confirm(`Quer iniciar uma nova rodada?`) 
   //  - 💡 Dica

   //      `confirm` é um comando que cria uma caixa com dois botões: `ok` e `cancelar`,
   //      permitindo fazer perguntas de "sim" e "não". Caso o usuário responda sim (`ok`)
   //      o comando devolve o valor `true`, caso contrário, devolve `false`. Desta forma,
   //      podemos usar condicionais para decidir o que fazer em cada caso

   //      ```jsx
   //      if(confirm("pergunta de sim ou não")) {
   //      	// o que fazer se o usuário clicar "ok"
   //      } else {
   //      	// o que fazer se o usuário clicar "cancelar"
   //      }
   //      ```

   //  3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
      if (res === false){
         console.log(`O jogo acabou.`)
      }
   //  4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
      if (res === true){
         console.log(`Vamos la!`)
      }



      // - **🃏**  Começando uma rodada

      // A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o
      // vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
  
      // 5 - Nós preparamos um método que permite sortear uma carta. **Ele já está pronto e você só precisa invocá-lo**.
      // Cada carta sorteada é um objeto com duas propriedades: um **texto** que representa o que é escrito na carta;
      // e um **valor** que mostra a pontuação da carta. 
  
      // - 💡 Dica
  
      //     ```jsx
          const carta = comprarCarta(); 
      //     // Sorteia uma carta. Por exemplo, o rei de ouros
  
          console.log(carta.texto) 
      //     // imprime o texto da carta. Nesse caso: "K♦️"
  
          console.log(carta.valor) 
      //     // imprime o valor da carta (um número). Nesse caso: 10)
      //     ```
  
      // 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
  
      // ```jsx
      // "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
      // "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
      // ```
  
      // 7 - Além disso, deve indicar o vencedor ou um empate
  
      // ```jsx
      // "Empate!"
      // "O usuário ganhou!"
      // "O computador ganhou!"
      // ```