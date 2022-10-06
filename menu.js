function buscar() {

    let fundoBackground = document.createElement("div")
    let header = document.querySelector("main")

    header.style.zIndex = "0"

    fundoBackground.style.backgroundColor = "rgba(29,29,29,0.9)"
    fundoBackground.style.height = "100vh"
    fundoBackground.style.width = '100vw'
    fundoBackground.style.zIndex = "3"
    fundoBackground.style.position = "fixed"
    fundoBackground.style.bottom = "0px"

    fundoBackground.style.display="flex"
    fundoBackground.style.justifyContent="center"
    fundoBackground.style.alignItems="center"

    header.appendChild(fundoBackground)


    let campoBusca = document.createElement("input")

    campoBusca.style.zIndex="6"
    campoBusca.style.height="12vh"
    campoBusca.style.width="25vw"
    campoBusca.style.backgroundColor="black"
    campoBusca.style.borderRadius = "60px"

    campoBusca.placeholder = "Buscar"

    campoBusca.style.color = "white"
    campoBusca.style.paddingLeft = "3vw"
    campoBusca.style.fontSize = "1.2rem"
    campoBusca.style.outline = "none"

    fundoBackground.appendChild(campoBusca)



    let iconeBusca = document.createElement('img')

    iconeBusca.src = "./imgs/Lupa.png"

    iconeBusca.classList.add("iconeBusca")

    fundoBackground.appendChild(iconeBusca)

}