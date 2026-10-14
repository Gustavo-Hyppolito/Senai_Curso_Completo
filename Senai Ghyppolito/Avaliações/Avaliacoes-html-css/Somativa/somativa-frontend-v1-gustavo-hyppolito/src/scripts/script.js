const saudacao = document.querySelector("#saudacao-pizzaria");
const hora = new Date().getHours();
if (hora >=1 && hora < 12) {
    saudacao.textContent = 'Bom dia! Pizza no café da manhã?'

} else if (hora >= 12 && hora < 18) {
    saudacao.textContent = 'Boa tarde! Que tal uma fatia agora?'
} else if (hora >= 18 && hora <= 24) {
    saudacao.textContent = 'Boa noite! A fornalha está quente, faça seu pedido!'
}
else {  saudacao.textContent = 'Hora inválida'
}

////////////////////////////////////////
const inputQtd = document.querySelector("#qtd-pessoas");
const precoTexto = document.querySelector("#total-pagar");

if (inputQtd && precoTexto) {
    inputQtd.addEventListener("input", () => {
        const precoUnitario = 45.0;
        const total = Number(inputQtd.value) * precoUnitario;
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;
        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
    });
}
////////////////////////////////////
const saborPizza = document.querySelector("#sabor-pizza");
 const botoesPedido = document.querySelectorAll(".btn-adicionar");

botoesPedido.forEach((botao) => {
    botao.addEventListener("click", (event) => {
       
    });
});

   if (saborPizza.length === 0) {
    tbody.innerHTML = "<tr><td>Nenhum sabor cadastrado.</td></tr>";

   }

 pratos.forEach(function (p, i) {
    const nomePrato  = p.nomePrato 

     tbody.innerHTML += `
      <tr>
         <td>${i + 1}</td>
        <td>${p.nome}</td>
      </tr>
    `;
   });


