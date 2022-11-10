console.log("Ola Mundo")
console.log(30 + 1)
console.log(2 - 2)
console.log(10 * 2)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - 3 / 4.5)
console.log(4 + 4 + 4 + 4 / 4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)


/* comentário de varias linhas */

// comentario de uma linha

/* variaveis */

/*
- variavel é um espaço reservado na memória para armazenar um valor
- toda variavel tem um nome
- e toda variavel tem um tipo
- a variavel deve ter um nome significativo, exemplo:
    - uma variavel que vai armazenar a informação idade, uma variavel que vai armazenar o preço da vemda de um
    produto pode ter nome de PRECOVENDA
- a recomendação é que o nome da variavel seja simples e significativo, sem caracteres especiais
,sem acento, sem espaço e lembrando que o js diferencia maiusculas de minusculas, isso significa que PrecoVenda
 é diferente de precovenda */

// nome


let nome = "Pietro"
let idade = "17"
let notal = "7.5"
let fumante = "false"

//nome

console.log(nome)
console.log(idade,nome,fumante)
console.log('Sua nota é' + nota1)

/* Tipos*/
console.log(typeof nome)// 'Pietro' é string
console.log(typeof idade) // 17 é number
console.log(typeof nota1) // number
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)

let clientes = {
    nome:'Pietro',
    idade:17

}
console.log(clientes)
console.log(typeof cliente)

let salvar = function(){
    console.log(typeof salvar)
}


/* operadores relacionados*/

console.log(10>3) //maior
console.log(5<3) //menor
console.log(15 >= 10) //maior ou igual
console.log(15 <= 10) //menor ou igual
console.log(15 == 10) // igual
console.log(15 != 10) //diferente


/* Operadores Lógicos*/

console.log('===========')
console.log(10>3 && 10>15) /* Operador E - com operador E todas as expressões devem ser verdadeiras para 
o resultado ser verdadeiro*/

console.log(10>3 || 10>15 || 10>8) /* operador OU (OR)- com operador OU 
apenas uma expressão precisa ser verdadeira oara o resultado ser verdadeiro*/


console.log(!10>3) /* Operador NÂO(NOT)- o operador NOT
inverte o resultado da expressão, se for falso ele inverte para o verdadeiro
e se for verdadeiro ele inverte para falso*/

