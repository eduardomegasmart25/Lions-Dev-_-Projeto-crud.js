import { 
  criarBaralho, listarBaralhos, atualizarBaralho, removerBaralho, buscarBaralho 
} from './baralho.js';
import { 
  criarFlashcard, listarFlashcards, listarFlashcardsPorBaralho, 
  atualizarFlashcard, removerFlashcard, buscarPorPergunta, removerFlashcardsPorBaralho 
} from './flashcard.js';

function mostrarBaralhos() {
  console.log("\n📚 BARALHOS:");
  listarBaralhos().forEach(b => console.log(`${b.id}: ${b.titulo}`));
}

function mostrarFlashcards(lista, titulo = "FLASHCARDS") {
  console.log(`\n📖 ${titulo}:`);
  lista.forEach(f => {
    const baralho = buscarBaralho(f.idBaralho);
    console.log(`${f.id}: ${f.pergunta} [${baralho?.titulo || 'N/A'}]`);
  });
}

// ===== CRUD BARALHO =====
function adicionarBaralho() {
  const titulo = prompt("Título do baralho: ");
  const baralho = criarBaralho(titulo);
  console.log(`✅ Baralho criado: ${baralho.id} - ${baralho.titulo}`);
}

function editarBaralho() {
  mostrarBaralhos();
  const id = parseInt(prompt("ID do baralho: "));
  const titulo = prompt("Novo título: ");
  const resultado = atualizarBaralho(id, titulo);
  console.log(resultado ? "✅ Atualizado!" : "❌ Não encontrado!");
}

function deletarBaralho() {
  mostrarBaralhos();
  const id = parseInt(prompt("ID do baralho: "));
  removerFlashcardsPorBaralho(id);
  const sucesso = removerBaralho(id);
  console.log(sucesso ? "✅ Baralho removido!" : "❌ Não encontrado!");
}

// ===== CRUD FLASHCARD =====
function adicionarFlashcard() {
  mostrarBaralhos();
  const idBaralho = parseInt(prompt("ID do baralho: "));
  const pergunta = prompt("Pergunta: ");
  const resposta = prompt("Resposta: ");
  
  try {
    const flashcard = criarFlashcard(pergunta, resposta, idBaralho);
    console.log(`✅ Flashcard criado: ${flashcard.id}`);
  } catch (e) {
    console.log("❌ " + e.message);
  }
}

function editarFlashcard() {
  mostrarFlashcards(listarFlashcards());
  const id = parseInt(prompt("ID do flashcard: "));
  const pergunta = prompt("Nova pergunta: ");
  const resposta = prompt("Nova resposta: ");
  const resultado = atualizarFlashcard(id, pergunta, resposta);
  console.log(resultado ? "✅ Atualizado!" : "❌ Não encontrado!");
}

function deletarFlashcard() {
  mostrarFlashcards(listarFlashcards());
  const id = parseInt(prompt("ID do flashcard: "));
  const sucesso = removerFlashcard(id);
  console.log(sucesso ? "✅ Removido!" : "❌ Não encontrado!");
}

// ===== BUSCAS =====
function flashcardsPorBaralho() {
  mostrarBaralhos();
  const id = parseInt(prompt("ID do baralho: "));
  mostrarFlashcards(listarFlashcardsPorBaralho(id), `BARALHO ${id}`);
}

function buscarPergunta() {
  const termo = prompt("Termo da pergunta: ");
  mostrarFlashcards(buscarPorPergunta(termo), `BUSCA "${termo}"`);
}

// ===== MENU PRINCIPAL =====
function menu() {
  console.clear();
  console.log("=== CRUD FLASHCARDS ===\n");
  console.log("1. Listar Baralhos");
  console.log("2. + Baralho");
  console.log("3. ✏️  Baralho");
  console.log("4. 🗑️  Baralho");
  console.log("5. Listar Flashcards");
  console.log("6. + Flashcard");
  console.log("7. ✏️  Flashcard");
  console.log("8. 🗑️  Flashcard");
  console.log("9. Flashcards por Baralho");
  console.log("10. 🔍 Buscar Pergunta");
  console.log("0. Sair");
  
  const opcao = prompt("\nEscolha: ");
  
  switch(opcao) {
    case '1': mostrarBaralhos(); break;
    case '2': adicionarBaralho(); break;
    case '3': editarBaralho(); break;
    case '4': deletarBaralho(); break;
    case '5': mostrarFlashcards(listarFlashcards()); break;
    case '6': adicionarFlashcard(); break;
    case '7': editarFlashcard(); break;
    case '8': deletarFlashcard(); break;
    case '9': flashcardsPorBaralho(); break;
    case '10': buscarPergunta(); break;
    case '0': return false;
    default: console.log("❌ Opção inválida!");
  }
  prompt("\nEnter para continuar...");
  return true;
}

// === EXECUTAR ===
function main() {
  console.log("🚀 Sistema CRUD Flashcards iniciado!");
  while (menu()) {}
  console.log("👋 Até logo!");
}

main();