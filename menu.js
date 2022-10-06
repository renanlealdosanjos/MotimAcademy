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

