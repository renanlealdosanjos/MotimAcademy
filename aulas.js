function curtir() {

    let botaoLike = document.getElementById("botaoLike")
    let botaoDislike = document.getElementById("botaoDislike")

    if(botaoLike.style.backgroundColor = "#292929") {

        botaoLike.style.backgroundColor = "green"
        botaoDislike.style.backgroundColor = "#292929"

    } else {

        botaoLike.style.backgroundColor = "#292929"

    }

}

function descurtir() {

    let botaoLike = document.getElementById("botaoLike")
    let botaoDislike = document.getElementById("botaoDislike")

    if(botaoDislike.style.backgroundColor = "#292929") {

        botaoLike.style.backgroundColor = "#292929"
        botaoDislike.style.backgroundColor = "red"

    } else {

        botaoLike.style.backgroundColor = "#292929"

    }

}

function comentar() {

    // Criar uma nova div, que contém a foto do usuário e o texto comentado

    let caixaDiv = document.querySelector('.caixaComentario');

    let novaDiv = document.createElement('div');

    novaDiv.classList.add('caixaComentario');

    caixaDiv.appendChild(novaDiv);

    
    // Carregar a foto do usuário

    let fotoPerfil = document.createElement('img');

    fotoPerfil.src = './imgs/Perfil.jfif';

    fotoPerfil.classList.add('fotoComentario');
    
    novaDiv.appendChild(fotoPerfil);


    // Carregar o texto comentado no campo

    let novoComentario = document.querySelector('.campoComentario');

    let novoTexto = document.createElement('div');

    novoTexto.classList.add('comentarios');

    novoTexto.innerHTML = ("Eu: " + novoComentario.value);
    
    novoComentario.value = ('');

    novoTexto.style.color = 'silver';

    novaDiv.appendChild(novoTexto);


    // Criar o botão de responder

    let botaoResponder = document.createElement('a');

    botaoResponder.classList.add('responder')
    botaoResponder.href='#'

    botaoResponder.innerHTML = ('Responder • Comentado agora');

    novaDiv.appendChild(botaoResponder);


    // Personalizar a nova div e o comentário

    novaDiv.style.marginTop = '20px';
    novaDiv.style.marginBottom = '0px';

}


function responder() {
        
        let divRespondida = document.querySelector('.caixaComentario')

        let campoResposta = document.createElement('input');
    
        campoResposta.classList.add('campoResposta')
    
        divRespondida.appendChild(campoResposta);

        divRespondida.classList.add('divRespondida')
    
        // Cria o novo botão
    
        let novoBotao = document.createElement('button')
    
        novoBotao.classList.add('botaoEnviar')
        novoBotao.innerText = 'Enviar'
    
        divRespondida.appendChild(novoBotao)
    


        // Ativa o botão de Enviar Resposta

        novoBotao.addEventListener('click', function fechar() {

            let novoComentario = campoResposta.value

            let caixaResposta = document.createElement('div')

            caixaResposta.innerText = `Eu: ${novoComentario}`

            divRespondida.removeChild(campoResposta)
            divRespondida.removeChild(novoBotao)

            caixaResposta.classList.add('novaResposta')

            divRespondida.appendChild(caixaResposta)

    })

    // Cria o novo input

}