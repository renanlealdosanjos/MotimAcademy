function acessar() {

    // Verifica se os campos Email e Senha estão preenchidos da forma correta

    let campoEmail = document.getElementById('campoEmail');
    let campoSenha = document.getElementById("campoSenha");

    let validacaoEmail = /\S+@\S+\.\S+/;
    
    if (campoEmail.value == "" || campoSenha.value == "" ) {
        alert('Preencha todos os campos para continuar')
    } else {
        if (validacaoEmail.test(campoEmail.value) == true) {
            window.location.href = './Plataforma.html';    
        } else {
            alert('Informe um email válido')
        }
    }
}

function criarConta() {

    // Verifica se os campos estão preenchidos para criar a sua conta

    let campoEmail = document.getElementById("criarEmail")
    let campoSenha = document.getElementById("criarNome")
    let campoTelefone = document.getElementById("Telefone")

    let validacaoEmail = /\S+@\S+\.\S+/;

    if (campoEmail.value == "" || campoSenha.value == "" || campoTelefone.value < 1) {
        alert("Preencha todos os campos para continuar.")

    } else {
        if (validacaoEmail.test(campoEmail.value) == true) {
            if (campoTelefone.value.length == 0 || campoTelefone.value.length < 10 || campoTelefone.value.length > 11) {
                alert("Preencha um telefone válido com DDD.")
            } else {
                alert("Conta criada com sucesso! Confirme seu email.")
                window.location.href = "./Plataforma.html"
            }

        } else {
            alert("Preencha com um email válido")
        }
    }
}

function recuperar(){

    let campoEmail = document.querySelector(".CampoForm")

    let validacaoEmail = /\S+@\S+\.\S+/;

    if (campoEmail.value == "") {
        alert("Preencha o campo com o seu email cadastrado.")
    } else {
        if (validacaoEmail.test(campoEmail.value) == true) {
            alert("Email de recuperação enviado!")
            window.location.href = "./index.html"
        } else {
            alert("Preencha o campo com um email válido.")
        }
    }
}

function selectCountry(){
    
    let selectedCountry = document.getElementById("country")
    let countryList = document.createElement("div")
    let selectBrazil = document.createElement("div")
    let selectUSA = document.createElement("div")

    selectUSA.classList.add('selectUSA')
    selectBrazil.classList.add('selectBrazil')

    let brazilIcon = document.createElement('img')
    let usaIcon = document.createElement("img")

    brazilIcon.src = "./imgs/Bandeira.webp"
    usaIcon.src = "./imgs/iconUSA.png"

    brazilIcon.classList.add("flag")
    usaIcon.classList.add("flag")

    let brazilCode = document.createElement("p")
    let usaCode = document.createElement("p")

    brazilCode.innerHTML = "+55"
    usaCode.innerHTML = "+39"

    selectedCountry.appendChild(countryList)
    countryList.appendChild(selectBrazil)
    countryList.appendChild(selectUSA)

    selectBrazil.appendChild(brazilIcon)
    selectUSA.appendChild(usaIcon)

    selectBrazil.appendChild(brazilCode)
    selectUSA.appendChild(usaCode)

}