const elementoReply = document.querySelector("#reply")
const entrada = document.querySelector("#entrada")
const button = document.querySelector("#butao")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
    "Não!"
  ]

function fazerPergunta() {

    if(entrada.value == ""){
        alert("Digite sua Pergunta!")
        return
    }

    button.setAttribute("disabled", true)

    const pergunta = "<div>" + entrada.value + "</div>" 

    const totalRespostas = respostas.length
    const numAleatorio = Math.floor(Math.random() * totalRespostas)
    elementoReply.innerHTML = pergunta + respostas[numAleatorio]
    
    elementoReply.style.opacity = 1


    setTimeout(function(){
        elementoReply.style.opacity = 0;
        button.removeAttribute("disabled")
    }, 2000)
}
