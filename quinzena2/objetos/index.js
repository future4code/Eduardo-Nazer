// - **Exercícios de interpretação de código**

//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

//     1.  Leia o código abaixo

//         ```jsx
        // const filme = {
        // 	nome: "Auto da Compadecida", 
        // 	ano: 2000, 
        // 	elenco: [
        // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
        // 		"Virginia Cavendish"
        // 		], 
        // 	transmissoesHoje: [
        // 		{canal: "Telecine", horario: "21h"}, 
        // 		{canal: "Canal Brasil", horario: "19h"}, 
        // 		{canal: "Globo", horario: "14h"}
        // 		]
        // }

        // console.log(filme.elenco[0])
        // console.log(filme.elenco[filme.elenco.length - 1])
        // console.log(filme.transmissoesHoje[2])
//         ```

//         a) O que vai ser impresso no console?
// "Matheus Nachtergaele"
// "3"
// "canal: "Globo", horario: "14h""

//     2. Leia o código abaixo

//         ```jsx
        // const cachorro = {
        // 	nome: "Juca", 
        // 	idade: 3, 
        // 	raca: "SRD"
        // }

        // const gato = {...cachorro, nome: "Juba"}

        // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

        // console.log(cachorro)
        // console.log(gato)
        // console.log(tartaruga)
//         ```

//         a) O que vai ser impresso no console?
            // nome: "Juca", 
        	// idade: 3, 
        	// raca: "SRD"
            
            // nome: "Juba", 
        	// idade: 3, 
        	// raca: "SRD"

            // nome: "Jubo", 
        	// idade: 3, 
        	// raca: "SRD"

//         b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
        //Copia o objeto a que se refere.


//     3. Leia o código abaixo

//         ```jsx
//         function minhaFuncao(objeto, propriedade) {
//         	return objeto[propriedade]
//         }

//         const pessoa = {
//           nome: "Caio", 
//           idade: 23, 
//           backender: false
//         }

//         console.log(minhaFuncao(pessoa, "backender"))
//         console.log(minhaFuncao(pessoa, "altura"))
//         ```

//         a) O que vai ser impresso no console?
        //false
        //undefined

//         b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
        //A primeira impressão, foi false pois a informação solicitada pelo console.log
        //era backender que guardava um booleans, a segunda impressão deu undefined pois a informação
        //altura solicitada pelo console.log não existe dentro do objeto.





//         - **Exercícios de escrita de código**
//     1. Resolva os passos a seguir: 

//         a) Crie um objeto. 
// const objeto = {
//            Ele deve conter duas propriedades: nome (string) e apelidos 
//            (um array que sempre terá exatamente **três apelidos**).
// nome: 'Eduardo',
// apelidos: ['Du', 'Dudu', 'Edu']
// }
//            Depois, escreva uma função que recebe como entrada um objeto
//            e imprime uma mensagem no modelo abaixo**:** 
// console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou 
// ${objeto.apelidos[2]}`)
//         ```jsx
//         // Exemplo de entrada
//         const pessoa = {
//            nome: "Amanda", 
//            apelidos: ["Amandinha", "Mandinha", "Mandi"]
//         }

//         // Exemplo de saída
//         "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//         ```

//         - 💡  Dica

//             Não se esqueça de chamar a função passando o objeto que você criou como argumento,
//             senão seu código não será executado!

//         b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome,
//            mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior
//            passando como argumento o novo objeto
        // const novoObjeto = {
        //     ...objeto,
        //     apelidos: ['pastel', 'pato', 'lajota'] 
        // }
        // console.log(`Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelidos[0]}, 
        //     ${novoObjeto.apelidos[1]} ou 
        //         ${novoObjeto.apelidos[2]}`)

//         - 💡  Dica

//             Não lembra da sintaxe de espalhamento ou spread? Não tem problema!

//             Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘

//     2. Resolva os passos a seguir: 

//         a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

//         b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//         1. O valor de `nome`
//         2. O numero de caracteres do valor `nome`
//         3. O valor de `idade`
//         4. O valor de `profissão`
//         5. O numero de caracteres do valor `profissão`
//         - Exemplo

//             ```jsx
//             const pessoa = {
//             	nome: "Bruno", 
//               idade: 23, 
//             	profissao: "Instrutor"
//             }

//             minhaFuncao(pessoa)

//             // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//             ```

//     3. Resolva os passos a seguir: 

//         a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

//         b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes
//              propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//         c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array
//               de `carrinho`. Invoque essa função passando os três objetos criados. 

//         - 💡  Dica

//             Aqui você deve usar o método **push()**

//         d) Imprima a variável `carrinho` e garanta que ela agora seja um 
//              **array preenchido com três objetos.** 

//         - 💡  Dica

//             Deve aparecer algo assim no console do seu navegador:

//             ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png)

//             Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:

//             ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)