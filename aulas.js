function curtir() {

    let botaoLike = document.getElementById("botaoLike")
    let botaoDislike = document.getElementById("botaoDislike")

    if(botaoLike.style.backgroundColor === "green") {

        botaoLike.style.backgroundColor = "#292929"

    } else {

        botaoLike.style.backgroundColor = "green"
        botaoDislike.style.backgroundColor = "#292929"

    }

}

function descurtir() {

    let botaoLike = document.getElementById("botaoLike")
    let botaoDislike = document.getElementById("botaoDislike")

    if(botaoDislike.style.backgroundColor === "red") {

        botaoDislike.style.backgroundColor = "#292929"

    } else {

        botaoLike.style.backgroundColor = "#292929"
        botaoDislike.style.backgroundColor = "red"

    }

}

function comentar() {

    // Criar uma nova div, que contém a foto do usuário e o texto comentado

    let caixaDiv = document.querySelector('#secaoComents');

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
        
        let comentarioRespondido = document.querySelector('#coment2')

        let campoResposta = document.createElement('input');
    
        campoResposta.classList.add('campoResposta')
    
        comentarioRespondido.appendChild(campoResposta);

        comentarioRespondido.classList.add('divRespondida')
    
        // Cria o novo botão
    
        let novoBotao = document.createElement('button')
    
        novoBotao.classList.add('botaoEnviar')
        novoBotao.innerText = 'Enviar'
    
        comentarioRespondido.appendChild(novoBotao)
    


        // Ativa o botão de Enviar Resposta

        novoBotao.addEventListener('click', function fechar() {

            let novoComentario = campoResposta.value

            let caixaResposta = document.createElement('div')

            let fotoPerfil = document.createElement('img')

            fotoPerfil.src = './imgs/Perfil.jfif'

            fotoPerfil.classList.add('fotoComentario')

            fotoPerfil.style.marginLeft = '7.5vw'

            caixaResposta.innerText = `Eu: ${novoComentario}`

            caixaResposta.style.marginLeft = '0.5vw'
            caixaResposta.style.marginRight = '10vw'

            comentarioRespondido.removeChild(campoResposta)
            comentarioRespondido.removeChild(novoBotao)

            caixaResposta.classList.add('novaResposta')

            comentarioRespondido.appendChild(fotoPerfil)
            
            comentarioRespondido.appendChild(caixaResposta)

    })

    // Cria o novo input

}