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

    if (balao = 1) {

        alert(Number(balao))        
        
        let divRespondida = document.querySelector('.caixaComentario')

        let campoResposta = document.createElement('input');
    
        campoResposta.classList.add('campoComentario')
    
        divRespondida.appendChild(campoResposta);
    
        campoResposta.style.marginLeft = '4vw';
        campoResposta.style.marginTop = '0vw';
        campoResposta.style.marginRight = '0vw';
        campoResposta.style.width = '43vw';
    
        // Cria o novo botão
    
        let novoBotao = document.createElement('button')
    
        novoBotao.classList.add('botaoEnviar')
        novoBotao.innerText = 'Enviar'
    
        divRespondida.appendChild(novoBotao)
    
        novoBotao.style.marginLeft = '0.5vw';
        novoBotao.style.marginTop = '-2vw';

    }

    // Cria o novo input

}