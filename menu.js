function buscar() {

    // Cria o fundo preto com transparência que cobre a tela

    let fundoBackground = document.createElement("div")
    let main = document.querySelector("main")

    main.style.zIndex = "0"

    fundoBackground.classList.add("fundoBackground")

    main.appendChild(fundoBackground)


    // Cria a barra de busca

    let campoBusca = document.createElement("input")

    campoBusca.placeholder = "Buscar"

    campoBusca.classList.add("campoBusca")

    fundoBackground.appendChild(campoBusca)


    // Cria o botão de busca sobre a barra de busca

    let iconeBusca = document.createElement('img')

    iconeBusca.src = "./imgs/Lupa.png"

    iconeBusca.classList.add("iconeBusca")

    fundoBackground.appendChild(iconeBusca)


    // Cria o ícone de fechar
    
    let iconeFechar = document.createElement("p")

    iconeFechar.innerHTML = ("X")

    iconeFechar.classList.add("iconeFechar")

    fundoBackground.appendChild(iconeFechar)

    // Ativa o botão de Fechar

    iconeFechar.addEventListener('click', function fechar() {

        main.removeChild(fundoBackground)

    })

}


function notificacoes() {

        // Primeiro, criamos a caixa com todas as notificações do usuário

        let header = document.querySelector("header")

        let caixaNotificacoes = document.createElement("div")

        caixaNotificacoes.classList.add("caixaNotificacoes")

        header.appendChild(caixaNotificacoes)

        // Agora, podemos adicionar as duas notificações


        // Criamos a div que contém um ícone e um texto da primeira notificação

        let priNotificacao = document.createElement("div")

        priNotificacao.classList.add("notificacoes")

        caixaNotificacoes.appendChild(priNotificacao)


        // Adicionamos a seta da primeira notificação

        let iconeNotificacao = document.createElement("img")

        iconeNotificacao.src = "./imgs/Seta Direita.svg"

        iconeNotificacao.classList.add("iconeNotificacao")

        priNotificacao.appendChild(iconeNotificacao)

        
        // Adicionamos o texto da primeira notificação
        
        let textoNotificacao = document.createElement("a")

        textoNotificacao.innerText = "O seu certificado de Introdução ao Power BI já está disponível."

        textoNotificacao.style.color = "silver"
        textoNotificacao.style.textDecoration="none"
        textoNotificacao.href="#"

        priNotificacao.appendChild(textoNotificacao)


        // -----------------------------------

        // Cria a segunda notificação da caixa

        // Primeiro, criamos a div com o ícone e o texto

        let segundaNotificacao = document.createElement("div")

        segundaNotificacao.classList.add("notificacoes")

        caixaNotificacoes.appendChild(segundaNotificacao)


        // Em seguida, criamos o ícone (a seta)
        
        iconeNotificacao = document.createElement("img")
        
        iconeNotificacao.src = "./imgs/Seta Direita.svg"

        iconeNotificacao.classList.add("iconeNotificacao")
            
        segundaNotificacao.appendChild(iconeNotificacao)


        // Para finalizar, adicionamos o texto da notificação
        
        let textoSegNotificacao = document.createElement("a")

        textoSegNotificacao.innerText = "Novo curso: Introdução ao Python já está disponível."

        textoSegNotificacao.style.color = "silver"
        textoSegNotificacao.style.textDecoration="none"
        textoSegNotificacao.href="./aula1.html"

        segundaNotificacao.appendChild(textoSegNotificacao)


        let botaoNotificacoes = document.querySelector("#iconeNotificacoes")

        botaoNotificacoes.addEventListener('click', function fechar() {

            alert("botao funcionando")

                textoSegNotificacao.innerText = ""

            //esse alerta está repetindo a quantidade de vezes que foi usado (primeiro 1 alerta, depois 2 alertas, depois 3,...)

            //Queria remover a caixaNotificações. Desse jeito aqui de baixo funcionou quando eu botei o addEvent no body
            // caixaNotificacoes.removeChild(segundaNotificacao)
            // caixaNotificacoes.removeChild(priNotificacao)
            // header.removeChild(caixaNotificacoes)

        })

}