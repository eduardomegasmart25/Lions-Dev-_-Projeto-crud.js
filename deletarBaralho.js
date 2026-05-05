function removerBarlho(baralho,id){
const indice=baralho.findIndex(baralho => baralho.id === id)
if (indice !== 1){
    baralho.splice(indice ,1)
    console.log("Baralho removido com sucesso")
    return true
}
}

export default removerBarlho