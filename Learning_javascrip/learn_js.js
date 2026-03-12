// Código JavaScript usado para teste
/*document.getElementById("text").innerHTML = "<b>JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web. Com JavaScript, você pode adicionar funcionalidades dinâmicas,</b> como animações, validação de formulários, manipulação de elementos HTML e muito mais.";*/

// Exemplo de código JavaScript
function minhafuncao() {
    document.write(12+5); 
    // Exemplo de código JavaScript para mostrar a soma de 12 e 5 

    alert("Olá, bem-vindo ao mundo do JavaScript!");
    // Exemplo de código JavaScript para mostrar uma mensagem de alerta
}
// Chama a função para mostrar a mensagem
    minhafuncao();

// Exemplo de código JavaScript para o console
console.log("Olá, este é um exemplo de mensagem no console!");

//declarando variáveis
var nome, idade, cidade;

// Atribuindo valores
nome = "João";
idade = 30;
cidade = "São Paulo";

infor = nome+" tem "+idade+" anos e mora em "+cidade+".";
document.getElementById("info").innerHTML = infor; // Exemplo de código JavaScript para mostrar a informação no console

/*No javascript, existem diferentes 3 tipos de variáveis: var, let e const.
- var: é a forma mais antiga de declarar variáveis em JavaScript.*/
var a=1;
var b=2;
var c=a+b;
console.log(c); // Exemplo de código JavaScript para mostrar a soma de a e b no console

/*- let: é uma forma mais moderna de declarar variáveis, introduzida no ECMAScript 6. Ela tem um escopo de bloco, o que significa que a variável só está disponível dentro do bloco em que foi declarada.*/
let x=10;
let y=20;
let z=x+y;
console.log(z); // Exemplo de código JavaScript para mostrar a soma de x e y no console

/*- const: é usada para declarar constantes, ou seja, valores que não podem ser reatribuídos após serem definidos. Assim como o let, o const também tem um escopo de bloco.*/
const pi = 3.14;
console.log(pi); // Exemplo de código JavaScript para mostrar o valor de pi no consol

/*Operadores sao sinais que usamos: 
a) Operador Aritimeticos (Matematicos)
(+ - * / ) incremento ++ e decremento -- 
*/
var val1, val2, val3;
val1 = 5;
val2 = 2;
total = val1 + val2;
alert(total);

//b) Operador Atribuição 
//c) Operador Sequencia
//d) Operador Coparação
//e) Operador Condicional
//f) Operador Logico (&& = e)(|| = ou) 