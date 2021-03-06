// 1. Leia o código abaixo

    
    // function minhaFuncao(variavel) {
    // 	return variavel * 5
    // }

    // console.log(minhaFuncao(2))
    // console.log(minhaFuncao(10))
    

    // a) O que vai ser impresso no console?
    //[RESPOSTA] 10  
    //[RESPOSTA] 20

    // b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse
    // a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

    //[RESPOSTA] Não iria aparecer nada no console pois a função console.log serve somente para imprimir no mesmo.


// 2. Leia o código abaixo

    // let textoDoUsuario = prompt("Insira um texto");

    // const outraFuncao = function(texto) {
    // 	return texto.toLowerCase().includes("cenoura")
    // }

    // const resposta = outraFuncao(textoDoUsuario)
    // console.log(resposta)


    // a. Explique o que essa função faz e qual é sua utilidade
    //[RESPOSTA] A "function" vai trazer de volta a variável "texto" e junto dela dois comandos,
    // um de colocar todas as letras em minusculo e outro de incluir a palavra "cenoura".

    // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //      i.   `Eu gosto de cenoura`
    //      ii.  `CENOURA é bom pra vista`
    //      iii. `Cenouras crescem na terra`
    //[RESPOSTA] A resposta correta é a primeira.


    // 1. Escreva as funções explicadas abaixo:

    // a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    // ```
    // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    // ```
    // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
    // Lembrando que a função não possui entradas, apenas imprime essa mensagem.

    // function biografia(){
    //    const bio = (`Olá, eu sou o Eduardo, faço 23 anos agora dia primeiro de outubro de dois mil e vinte,
    //     moro em Porto Alegre e sou um estudante Labenu.`)
    //     return bio
    // }
    // console.log(biografia)


    // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
    //  o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). 
    //  Ela deve retornar uma `string` que unifique todas as 
    //  informações da pessoa em uma só mensagem com o template:
    // ```
    // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    // ```
    // - Exemplo
    //     Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
    //     `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
    
    // function infoUsuario(nome, idade, endereço, profissao, mensagem){
    //     const nome = prompt(`Qual é o seu nome?`)
    //     const idade = prompt(`Qual a sua idade?`)
    //     const endereço = prompt(`Qual cidade você mora?`)
    //     const profissao = prompt(`Qual a sua profissão?`)
    //     const mensagem = (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`)
    //     return mensagem
    // }
    // console.log(infoUsuario)




    // 2. Escreva as funções explicadas abaixo:

    // a) Escreva uma função que receba 2 números como parâmetros, e,
    //  dentro da função, faça a soma das duas entradas e retorne o resultado.
    //   Invoque a função e imprima no console o resultado.

    // b) Faça uma função que recebe 2 números e retorne um booleano que informa
    //  se o primeiro número é **maior ou igual** ao segundo.

    // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

    // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o
    //  tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.



    // 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
    //  Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
    //   inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

    // ```
    // Números inseridos: 30 e 3
    // Soma: 33
    // Diferença: 27
    // Multiplicação: 90
    // Divisão: 10
    // ```