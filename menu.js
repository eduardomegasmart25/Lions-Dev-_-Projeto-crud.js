import PromptSync from "prompt-sync";
const prompt = PromptSync();

import baralhos from "./dadosBaralhos.js";
import flashcards from "./dadosFlashcards.js";
import adicionarBaralho from "./adicionarBaralho.js";
import adicionarFlashcard from "./adicionarFlashcard.js";
import atualizarBaralho from "./atualizarBaralho.js";
import atualizarFlashcard from "./atualizarFlashcard.js";
import removerBarlho from "./deletarBaralho.js";
import removerFlashcard from "./deletar.js";
import listarBaralho from "./listarBaralho.js";
import listarFlashcards from "./listarFlashcard.js";
import listarPorBaralho from "./listarPorBaralho.js";

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
            listarBaralho(baralhos)
            break
        case '2':
            listarFlashcards(flashcards)
        
            break
        case '3':
            let id = Number(prompt("Digite o ID do baralho: "))
            listarPorBaralho(flashcards, baralhos, id)
            
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
                idBaralho: Number(prompt("Qual a id do Baralho: "))
            }
            
            const adicionouFlas = adicionarFlashcard(novoFlashcard, flashcards, baralhos)
            if(adicionouFlas) {
                console.log('Flashcard Registrado.')
            }
            break
        case '6':
            let idBaralhoAtuali = Number(prompt("Qual o id à ser atualizado: "))
            let atualizacaoBaralho = {
                titulo: prompt("Qual o novo titulo do Baralho: ")
            }

            const atualizouBar = atualizarBaralho(baralhos, idBaralhoAtuali, atualizacaoBaralho)
            if(atualizouBar) {
                console.log("Baralho atualizado.")
            } console.log(baralhos)
            break
        case '7':
            let idFlashAtuali = Number(prompt("Qual a id à ser atualizado: "))
            let novaPergunta = prompt("Qual a pergunta: ")
            let novaResposta = prompt("Qual a resposta: ")
            
            const atualizouFlas = atualizarFlashcard(flashcards, idFlashAtuali , novaPergunta, novaResposta)
            if(atualizouFlas) {
                console.log("Flashcard Atualizado.")
            } console.log(flashcards)
            break
        case '8':
            let idBar = Number(prompt("Qual a id á ser apagado: "))
            let pergunta1 = prompt("Vocẽ tem certeza? ")
            
            if(pergunta1 === "s") {
                const deletou = removerBarlho(idBar,baralhos)
            }
            
            break
        case '9':
            let idFlas = Number(prompt("Qual o id á ser removido:"))
            let pergunta2 = prompt("Vocẽ tem certeza? ")

            if(pergunta2 === "s") {
                const deletouFlas = removerFlashcard(idFlas, baralhos)
            }
            
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