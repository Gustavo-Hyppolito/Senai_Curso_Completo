const tempoAgora = new Date();

const hora = tempoAgora.getHours();

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')

const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log(`Hoje é dia ${dataFormatada} e são exatamente ${horaFormatada}`)

if (hora >= 5 && hora < 12) {
    alert('Bom dia!')
}
else if (hora >= 12 && hora < 18) {
    alert('Boa tarde!')
}   
else {
    alert('Boa noite!')
}
/////////////////////////////////////////////////////////////////////
class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    exibirComMoeda(resultado){
        return "R$" + resultado.toFixed(2)
    }
}

const lasanha = new Prato("Lasanha Bolonhesa", 45.00)
let qtd = prompt("Simulação: Quantas unidades de " + lasanha.nome + "você deseja?")

let total = lasanha.preco * qtd
alert("Resumo da Simulação: \n Prato: " + lasanha.nome + "\nTotal: R$ " + lasanha.exibirComMoeda(total))

alert("Bem vindo ao nosso restuarante!")

const cliente = prompt("Qual é o seu nome?")

let clienteFormatado = cliente.trim().toUpperCase()
alert("Olá " + clienteFormatado + ", é um prazer te receber aqui!")

