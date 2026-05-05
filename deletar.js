function removerFlashcard(flashcard,id){
const indice=flashcard.findIndex(flashcard => flashcard.id === id)
if (indice !== -1){
    flashcard.splice(indice ,1)
    console.log("Flashcard removido com sucesso")
    return true
}
}
export default removerFlashcard