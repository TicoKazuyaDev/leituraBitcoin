/*
Iniciando o JavaScript
Tiago da Costa Jerônimo
*/

var Carro = function(nome, car, marca, ano){
    this.nome = nome;
    this.cor = cor;
    this.marca = marca;
    this.ano = ano;
};

var fusca = new Carro('Fusca', 'azul','VW', '1975' );

console.log(fusca);