alert("Bem-vindo");

let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");

let nomeCompleto = nome.trim() + " " + sobrenome.trim();

alert("Nome completo: " + nomeCompleto.toLowerCase());


alert("Seu nome possui " + nomeCompleto.length + " caracteres.");

/////////////////////////////////////

let valorConta = prompt("Digite o valor total da conta:");
let pessoas = prompt("Digite a quantidade de pessoas na mesa:");

let valorPorPessoa = valorConta / pessoas;

alert("Cada amigo deve pagar R$ " + valorPorPessoa.toFixed(2));

////////////////////////////////////////
let valorCompra = prompt("Digite o valor total da compra:");
let temCupom = prompt("Você tem cupom? (sim ou nao)").toLowerCase();

if (valorCompra >= 150 && temCupom === "sim") {
    alert('Frete Grátis Liberado')
}
else if (valorCompra < 150 && temCupom === "não") {
    alert('Frete pago')
}
else {
    alert('Frete pago')
}

//////////////////////////////////////

let numeroUsuario = parseInt(prompt("Escolha um número de 1 a 10:"));

let numeroSorteado = Math.floor(Math.random() * 10) + 1;

if (numeroUsuario === numeroSorteado) {
    alert("Parabéns, você ganhou um brinde!");
} else {
    alert("Que pena, o número sorteado foi " + numeroSorteado);
}

//////////////////////////////////////

