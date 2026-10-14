console.log(window.location.href)

const titulo = document.getElementById('titulo-site')

const saudacao = document.querySelector('#Boas-vindas')

const fotoPrato1 = document.querySelector('.foto-destauqes')

const cardLasanha = document.querySelector('#card-lasanha')

const tempoAgora = new Date()
const hora = agora.getHours()

if (hora >=1 && < 12) {
    saudacao.textContent = 'Bom dia'

} else if (hora >= 12 && hora < 18) {
    saudacao.textContent = 'Boa tarde'
} else if (hora >= 18 && hora <= 24) {
    saudacao.textContent = 'Boa noite'
}
else {  saudacao.textContent = 'Hora inválida'
}

fotoPrato1.alt = 'Destaque do Dia: Lasanha Bolonhesa'
titulo.style.color = '#690e67'

cardLasanha.classList.add('em-promoção')

