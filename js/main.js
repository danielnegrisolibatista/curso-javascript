
//Módulo I - Introdução ao JavaScript
//Aula I - Introdução ao JavaScript
console.log("BÁSICO JS")
var nome = "Daniel";
var idade = 36;
var idade2 = 36;
var frase = "Japão é o melhor time do mundo";

//operações com string
console.log(nome + "tem " + idade + " anos");
//operações com números
console.log(idade + idade2);
//uso de funções
console.log(frase.replace("Japão", "Brasil").toLocaleLowerCase());



//Aula II - Array e Dicionário
console.log("ARRAY E DICIONÁRIOS JS")
//operações com arrays
var lista = ["maça", "pera", "laranja"];
//imprimir primeiro item da lista
console.log(lista[0]);
//inserir o item uva
console.log(lista.push("uva"));
//imprimir a lista
console.log(lista);
//remover o último item da lista
lista.pop();
//imprimir a lista
console.log(lista);
//imprimir a lista de trás para frente
console.log(lista.reverse());
//converte a lista pra string
console.log(lista.toString());
//converte a lista para string e insere um separador
console.log(lista.join(" | "));

//dicionário
var fruta = { nome: "maça", cor: "vermelha" };
//imprime dicionário
console.log(fruta);
//imprime dicionário/propridade
console.log(fruta.nome);

//lista de dicionários
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
//imprime lista de dicionários
console.log(frutas);
//imprime dicionário/propridade do segundo item
console.log(frutas[1].nome);



//Aula III - Condicionais, laços de repetição e Data
console.log("CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE JS");
//condicional
var idade = prompt("Qual sua idade");
if (idade >= 18) {
	console.log("Maior de idade");
} else {
	console.log("Menor de idade");
}

//laço de repetição
var count = 0;
while(count < 5 ) {
	console.log(count);
	count++;
}

for (count = 0; count <= 5; count++) {
	console.log(count);
}

//Data
var dataAtual = new Date();
console.log("Dia " + dataAtual.getDay);
console.log("Mês " + dataAtual.getMonth() + 1);


//Módulo II - Desenvolva páginas web com Javascript
//Aula I - Desenvolva páginas web com Javascript
console.log("Desenvolva páginas web com Javascript");
function soma(n1, n2) {
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
	return frase.replace(nome, novo_nome);
}

function validaIdade(idade) {
	if (idade >= 18) {
		return true;
	} else {
		return false;
	}
}

console.log("Funções JS");
console.log(soma(1, 1));
console.log(setReplace("Vai Japão", "Japão", "Brasil"));
console.log("maior de idade? " + validaIdade(prompt("Qual sua idade")));


//Aula II - Manipulando elementos da página
function botao() {
	console.log("Você clicou no botão");
	document.getElementById("agradecimento").innerHTML = "<b>Você clicou no botão, clique aqui para redirecionar</b>";
}

function redirecionar() {
	//outra aba
	window.open("https://google.com");
	//mesma página
	//window.location.href = "https://google.com";
}

function trocarTexto(element) {
	element.innerHTML = "Mensagem alterada";
}

function voltarTexto(element) {
	element.innerHTML = "Mensagem inicial";
}

function load() {
	console.log("Página carregada");
}

function trocaValor(element) {
	console.log("Trocou valor " + element.value);
}