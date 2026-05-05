function listarPorBaralho(baralhos, flashcards, idBaralho) {
    let baralho = baralhos.find(b => b.id === idBaralho)

    if(!baralhos) {
        console.log("Baralho não encontrado.")
        return
    }

    console.log("Baralho:", baralhos.titulo)

    let encontrados = false

    for(let i = 0; i < flashcards.length; i++) {
        if(flashcards[i].idBaralho === idBaralho) {
            console.log(`ID: ${flashcards[i].id} | Pergunta: ${flashcards[i].pergunta} | Resposta: ${flashcards[i].resposta}`)
            encontrados = true1
        }
    }

    if(!encontrados) {
        console.log("Nenhum flashcard encontrado para esse baralho.")
    }
}

export default listarPorBaralho