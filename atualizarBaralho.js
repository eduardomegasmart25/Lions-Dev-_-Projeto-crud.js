function atualizarBaralho (baralhos, idBaralhoAtuali, atualizacaoBaralho) {
    let encontrado = false

    for(let i = 0; i < baralhos.length; i++) {
        if(baralhos[i].id === idBaralhoAtuali) {
            baralhos[i].titulo = atualizacaoBaralho.titulo
            encontrado = true
            break
        }
    }

    if(encontrado) {
        console.log("Baralho atualizado!")
    } else {
        console.log("Baralho não encontrado.")
    }
}

export default atualizarBaralho