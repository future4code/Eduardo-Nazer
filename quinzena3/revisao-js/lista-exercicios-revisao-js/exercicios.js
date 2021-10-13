// EXERCÍCIO 01
function inverteArray(array) {
  return array.map((item, index, array) => array[array.length - 1 - index])
  
}

// EXERCÍCIO 02
// Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
// - Dica
//     Se o array de entrada for [1, 2, 3, 4, 5, 6],
//     o array de saída deverá ser [4, 16, 36], 
//     que nada mais é que um array com o resultado de 2², 4², 6².
function retornaNumerosParesElevadosADois(array) {
// let arrayResposta = for(item = Number, )

}

// EXERCÍCIO 03
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números **pares** desse array de entrada.

// - Dicas
//     1. Crie um array vazio que você irá preencher com os números pares do array de entrada.
//     2. Itere sobre o array de entrada. Você pode usar a sintaxe do `for (let i = 0; ...)` ou do `for ... of ...` para isso.
//     3. Dentro do for, faça a verificação se o número atual é divisível por 2, se for, ele é um número par e deve ser adicionado (ou "empurrado" 😉 😉 ) para o array que você criou. Caso ele não seja divisível por dois, não precisa fazer nada.
//     4. Lembre de **retornar** o array com os números pares que você criou.
function retornaNumerosPares(array) {
//    let novoArray = 
//    for(let i = 0, i % 0, i++) {
//       novoArray = i.push
//    }
//    return novoArray
}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
    for(numeroMaior = 0; numeroMaior < array.length ; numeroMaior++){
        array[numeroMaior] = numeroMaior +1
    }
}

// EXERCÍCIO 05
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaQuantidadeElementos(array) {
    let index = -1
    for(quantidade of array){
        index = index +1
        array.push(index)
    }
    return index
}

// EXERCÍCIO 06
// Para este exercícios considere as variáveis:
//  const booleano1 = true
//  const booleano2 = false
//  const booleano3 = !booleano2 
//  const booleano4 = !booleano3 
// Escreva uma função que apenas retorne um array com os valores das expressões lógicas abaixo.
// a) `booleano1 && booleano2 && !booleano4` 
// b) `(booleano1 && booleano2) || !booleano3` 
// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` 
// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` 
// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
// Sua função deve ficar mais ou menos assim: (cada elemento do array de respostas, deve ser a resposta (**na ordem**) de cada expressão lógica acima).
// ```
// function expressoesBooleanas() {
//   const respostas = [true, true, true, true, false]
//   return respostas
// }
// ```
// Obs: essas `respostas` não necessariamente estão corretas :)
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8).
function retornaNNumerosPares(n) {
   let novoArray = []
    for(valor of n){
        index = index++
        novoArray.push(index)
    }
    
}

// EXERCÍCIO 08
// Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c` e retorne se ele é equilátero, isósceles ou escaleno.
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
    // Escreva uma função que, dado dois números, retorne um objeto indicando:
    // i. qual é o maior,
    // ii. determine se o maior é divisível pelo menor (use o operador `%`) e
    // iii. determine a diferença entre eles (o resultado deve ser um **número positivo** sempre)
    // - Exemplo de como deve ser a saída
    //     (⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes → `maiorNumero`, `maiorDivisivelporMenor`, `diferenca`):
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
// Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. (**Desafio**: tentem fazer sem usar função de ordenação de array.)
function segundoMaiorEMenor(array) {
}

// EXERCÍCIO 11
    // Escreva uma função que recebe um array de números e retorne outro array com os números em ordem crescente. 
    // (**Desafio**: tentem fazer sem usar função de ordenação de array.)
    // - Dica
    //     Pesquise sobre o algoritmo **Bubble Sort.**
function ordenaArray(array) {

}

// EXERCÍCIO 12
    // Crie uma função que retorne um objeto que representa o filme favorito do Astrodev. Ele deve ter as propriedades: `nome`, `ano`, `diretor` e `atores`, sendo que filme e diretor devem ser `strings`, ano deve ser um `number` e atores deve ser um `array de strings`. As informações (que são os valores das propriedades) do filme são:
    // nome: O Diabo Veste Prada
    // ano: 2006
    // diretor: David Frankel
    // atores: Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci
    // (⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes → `nome`, `ano`, `diretor`, `atores`):
function filmeFavorito() {

}

// EXERCÍCIO 13
    // Crie uma função que retorne a seguinte string, baseada nos valores do objeto que representa o filme favorito do Astrodev no penúltimo exercício feito:
    // `Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR(A) e estrelado por ATOR 1, ATRIZ 2, ATOR n.` A string deve ser impressa acessando os valores do objeto.
    // - Dica
    //     Copie o objeto que você criou no exercício anterior e coloque dentro da função.
    //     Você deve acessar da seguinte forma: `return``Venha assistir ao filme ${objeto.filme}, de ${objeto.ano}`...
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
    // Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`). 
    // ⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes →  **`largura`, `altura`, `perimetro` e `area`**. (perimetro e area não devem ter acento mesmo!)
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
    // Considere o seguinte objeto: 
    // ```jsx
    // const pessoa = {
    // 	nome: "Astrodev",
    // 	idade: 25,
    // 	email: "astrodev@labenu.com.br",
    // 	endereco: "Rua do Futuro, 4"
    // }
    // ```
    // Crie uma função que recebe um objeto nesse **formato***, com as propriedades de nome, idade, email e endereco e retorne um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. 
    // *Atenção! O objeto acima é apenas para demonstrar o formato de um objeto a ser recebido; isso não quer dizer que a função vai receber esse exato objeto, com essas exatas informações, mas as **propriedades** devem ser as mesmas. 
    // ⚠️ obs: para os testes funcionarem, as propriedades do objeto devem possuir esses exatos nomes → `nome`, `idade`, `email`, `endereco.`
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
    // Considere um array com o seguinte formato:
    // ```jsx
    // [
    // 	{ nome: "Pedro", idade: 20 },
    // 	{ nome: "João", idade: 10 },
    // 	{ nome: "Paula", idade: 12 },
    // 	{ nome: "Artur", idade: 89 } 
    // ]
    // ```
    // a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 18)
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
    // b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 18)
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
    // Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere: `const array = [1, 2, 3, 4, 5, 6]`.
    
    // a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.
    

    
   
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
// b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2 e como strings. Isto é: `["2", "4", "6", "8", "10", "12"]`
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
// c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`
function verificaParidade(array) {

}

// EXERCÍCIO 18A
    // Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:
    
    // ```
    // const pessoas = [
    // 	{ nome: "Paula", idade: 12, altura: 1.8},
    // 	{ nome: "João", idade: 20, altura: 1.3},
    // 	{ nome: "Pedro", idade: 15, altura: 1.9},
    // 	{ nome: "Luciano", idade: 22, altura: 1.8},
    // 	{ nome: "Artur", idade: 10, altura: 1.2},
    // 	{ nome: "Soter", idade: 70, altura: 1.9}
    // ]
    
    // ```
    
    // A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.
    
    // a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão para entrar** no brinquedo
    
   
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
// b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
    // Você foi contratado por um escritório médico para organizar a agenda de consultas
    
    // (**Desafio**: tentem fazer sem usar a função de ordenação de array `sort()`)
    
    // ```jsx
    // const consultas = [
    //   { nome: "João", dataDaConsulta: "01/10/2021" },
    //   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    //   { nome: "Paula", dataDaConsulta: "03/11/2021" },
    //   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
    // ]
    
    // ```
    
    // A) A sua primeira tarefa é criar uma função que receba o **array** consultas como parâmetro e retorne um **array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)**
    
    // Exemplo de saída: 
    
    // ```jsx
    //  [
    //     { nome: "João", dataDaConsulta: "01/10/2021" },
    //     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    //     { nome: "Paula", dataDaConsulta: "03/11/2021" },
    //     { nome: "Pedro", dataDaConsulta: "02/07/2021" }
    //   ]
    // ```
    
   
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
 // B) ⚠️ [**Exercício - Desafio**] A sua segunda tarefa é criar uma função que receba o **array** consultas como parâmetro e retorne um **array de consultas ordenado pelas datas das consultas(da menor para a maior)**
    
    // - Dica
        
    //     Para manipular datas em JS é interessante conhecer o `new Date()` que gera um formato que representa datas no JS. 
        
    //     O `new Date()` pode receber como parâmetro a data específica que queremos representar. Ele pode receber, por exemplo, a data como uma string, no fomato yyyy-mm-dd: `new Date("2021-01-01")`. 
        
    //     Pode receber a data também como números - nesse caso, o mês começa a ser contado do 0, então janeiro é 0 e dezembro é 11): `new Date(2021, 0, 1).`
        
    //     Além do `new Date()`, um outro conceito importante quando estamos trabalhando com datas é o de Timestamp. O Timestamp no JS nada mais é que a quantidade de milisegundos passados desde 01/01/1970 até a data desejada. Como fazemos para conseguir o timestamp? O próprio JS fornece uma função para isso, o `getTime()`. 
        
    //     Exemplo: `const timestamp = new Date(2021, 0, 1).getTime()`
        
    //     Dessa forma, podemos manipular nossas datas no código e fazer uma comparação entre elas. 
        
    //     Outra dica legal é que para separar elementos de uma string, podemos usar o método `split()` .
        
    
    // Exemplo de saída:
    
    // ```jsx
    //    [ 
    //      { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    //      { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    //      { nome: "João",  dataDaConsulta: "01/10/2021" },
    //      { nome: "Paula", dataDaConsulta: "03/11/2021" } 
    //     ];
    // ```
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
    // Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:
    
    // ```
    // const contas = [
    // 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    // 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    // 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    // 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    // 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    // 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]
    
    // ```
    
    // A sua tarefa é: faça uma função que manipule um **array** com os objetos do tipo acima e atualize o **saldo total** individual de cada um, **sem criar um novo** array. Retorne o array original. 
    
    // Em outras palavras, o **array** do exemplo acima deve ficar assim:
    
    // ```
    // [ 
    //   { cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
    //   { cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
    //   { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
    //   { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
    //   { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
    //   { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
    // ]
    
    // ```
function calculaSaldo(contas) {

}
