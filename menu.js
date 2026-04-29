import PromptSync from "prompt-sync";
const prompt = PromptSync();

import baralhos from "./dadosBaralhos.js";
import flashcards from "./dadosFlashcards.js";
import adicionarBaralho from "./adicionarBaralho.js";
import adicionarFlashcard from "./adicionarFlashcard.js";

function mainMenu() {
    console.log('\n --- Menu ---')
    console.log('1. Listar Baralho')
    console.log('2. Listar Flashcard')
    console.log('3. Listar por Baralho')
    console.log('4. Adicionar Baralho')
    console.log('5. Adicionar Flashcard')
    console.log('6. Atualizar Baralho')
    console.log('7. Atualizar Flashcard')
    console.log('8. Remover Baralho')
    console.log('9. Remover Flashcard')
    console.log('10. Buscar por Pergunta')
    console.log('11. Buscar por Baralho')
    console.log('12. Encerrar Operação')
}

let opcao; 

while(opcao != 12) {
    mainMenu()
    opcao = prompt("Escolha uma Opção: ")

    switch(opcao) {
        case '1':
            
            break
        case '2':
        
            break
        case '3':
            
            break
        case '4':
            let novoBaralho = {
                titulo: prompt("Qual será o titulo do Baralho? ")
            }
            const adicionouBar = adicionarBaralho(novoBaralho, baralhos)
            if(adicionouBar) {
                console.log('baralho Registrado.')
            }
            break
        case '5':
            let novoFlashcard = {
                pergunta: prompt("Qual a pergunta do Flashcard: "),
                resposta: prompt("Resposta do Flashcard: "),
            }

            const adicionouFlas = adicionarFlashcard(novoFlashcard, flashcards,)
            if(adicionouFlas) {
                console.log('Flashcard Registrado.')
            }
            break
        case '6':
            
            break
        case '7':
            
            break
        case '8':
            
            break
        case '9':
            
            break
        case '10':
            
            break
        case '11':
            
            break
        case '12':
            console.log("Encerrando...")
            break
        default:
            console.log("Operação Invalída.")
    }
}