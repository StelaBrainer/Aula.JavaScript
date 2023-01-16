//var nome = "Stela" /*declarando variável */
//alert("Bem vinda "+ nome) /*saída variável */

//console.log(nome)/*exibe no console do chrome, botão direito,inspecionar, console*/ 

//var nome = prompt("Informe seu nome")//a variável nome irá receber a entrada do prompt
//alert(nome)// irá exibir o nome

//const pi = 3.14 //Declarando uma constante

/*var raio = prompt("informe o raio do círculo")
var area = math.pi * Math.pow(raio,2)//classe Math para cálculos
alert(area)*/

/*var x = 10 //varíavel global
if(true){
    let x = 20 //varíavel local
    console.log(x) //console log detro do bloco exibe a let que é local, fora do bloco exibe a var que é global
}*/

/*var x = 1;
var y = 2;
var z = 1;
var k = "2";
var a = true


var tipoX = typeof x; //typeof retorna uma string contendo o tipo de dado do valor da variável
var tipoK = typeof k;
var tipoA = typeof a;
console.log(tipoX, tipoK, tipoA);*/

/*var frutas = new Array("maçã", "goiaba", "melancia");

console.log(2 in frutas); //retorna true pois no array frutas existe a posição 2
console.log("melancia" in frutas)// retorna false pois ele só retorna se a posição existe e não avalia o conteúdo dela
console.log(3 in frutas);// retorna false pois não há posição 3
*/

//var curso="Javascript"
//var qtd = curso.length //guarda a quantidade de letras da Str=ing curso


/*var tweet = prompt("Digite seu Tweet")
    if (tweet.length<140){
        console.log("Você usou "+ tweet.length+ " caracteres." + " Ainda faltam "+ (140-tweet.length)+ " Caracteres")
    }
    else{
        console.log("Você ultrapassou "+ (tweet.length-140)+ " caracteres do seu limite")
    }*/

   /* var curso = "Javascript"
    var pedacoDaString = curso.slice(4, 10)//imprime da posição 4 até a última posição + 1
console.log(pedacoDaString)*/

/*var frutas = new Array("Maçã", "Goiaba", "Melancia");
for (let x in frutas) { //o in mostra os índices e não os valores. O x é o contador
console.log(x);
}*/

/*var frutas = new Array("Maçã", "Goiaba", "Melancia");
for (var y of frutas) {// o var of imprime os valores/conteúdo das posições
console.log(y);
}*/

/*var b = 0;
do { //ele executa uma vez, mesmo que a condição seja falsa, ele irá rodar e se for falso, sairá do bloco. Experimentar colocar o var em 6
b++;
console.log(b);
} while (b <= 5);*/

/*8var g = { nome: "John", idade: 20 }; //Instanciando objeto em javascript. Nome do objeto/variável e entre chaves as características
console.log(g);*/

/*var i = new Date(); //criando um objeto do tipo date, o tipo date tem vários métodos get utilizando date. Dentro dos parenteses passar os valores ano,mes,dia
console.log(typeof i); //o metodo get dia e get mes vai ter um array com as posições do dia e de mês e irá exibir a posição do dia e mês nesse array*/

/*var nome = "Stela"
var sobrenome = "Brainer"
let idade = 29
const dataNasc = "08/08/1993"
//console.log(nome, sobrenome, idade, dataNasc)*/

/*console.log(typeof nome, typeof sobrenome, typeof idade, typeof dataNasc)*/

function soma(x,y) {
    return x+y
}
/*invocar função
var resultado = soma(5,6)
console.log(resultado)*/

function subtrair(x,y){
    return x-y
}

function multiplicar (x,y){
    return x*y
}

function dividir(x,y){
    return x/y
}

function potencia(x,y) {
    return Math.pow(x,y)    
}


function boasvindas(){
    let nome = prompt("Digite o nome")
    console.log("Bem vinda " + nome)
}

//boasvindas(nome)

/*exemplo no index html*/document.getElementById("exemplo").innerHTML = "Olá Mundo" //pegue um documento pelo id "exemplo". innerHTML conteúdo que está dentro do html, no caso o <p> DOM








