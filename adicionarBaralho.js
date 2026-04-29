function adicionarBaralho (novoBaralho, baralhos) {
    let tituloExiste = false
    for(let i = 0; i < baralhos.length; i++) {
        if( baralhos[i].titulo === novoBaralho.titulo) {
            tituloExiste = true
            break
        }
    }

    if(tituloExiste) {
        tituloExiste = false
        console.log("Erro: Este titulo já Existe.")
    }

    if(baralhos.length > 0) {
        let ultimoBaralho = baralhos[baralhos.length - 1]
        novoBaralho = ultimoBaralho + 1 
    } else {
        novoBaralho.titulo = 1
    }
    baralhos.push(novoBaralho)
    console.log(baralhos)
    return true
}

export default adicionarBaralho