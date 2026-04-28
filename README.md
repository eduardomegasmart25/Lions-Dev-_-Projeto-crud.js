# Lions-Dev-_-Projeto-crud.js


Primeiro, você precisa trazer os arquivos do GitHub 

    Vá até a página do repositório e clique no botão verde Code.

    Copie a URL (HTTPS ou SSH).
    
    No seu terminal, digite:
    Bash

    git clone https://github.com/usuario/nome-do-repositorio.git

    Entre na pasta que foi criada:
    Bash

    cd nome-do-repositorio

2. Abrir no VS Code

Com o terminal aberto dentro da pasta do projeto, você pode digitar:
Bash

code .

Isso abrirá o VS Code já com todos os arquivos prontos para editar.
3. O Fluxo de Trabalho (Workflow)

Como colaborador, você geralmente seguirá este ciclo de 4 comandos:
Passo A: Criar uma Branch (Recomendado)

Evite mexer direto na main. Crie uma "ramificação" para sua tarefa:
Bash

git checkout -b nome-da-sua-feature

Passo B: Salvar suas alterações

Após escrever seu código no VS Code, volte ao terminal (ou use o terminal integrado do VS Code com Ctrl + '):

    Verifique o que mudou: git status

    Adicione os arquivos: git add .

    Crie um registro da mudança: ```bash
    git commit -m "Explique brevemente o que você fez"


Passo C: Enviar para o servidor

Para subir suas alterações pela primeira vez na branch nova:
Bash

git push origin nome-da-sua-feature

4. Dicas de Ouro para Colaboradores

    Sincronize antes de começar: Antes de codar, garanta que seu código local está atualizado com o que os outros colaboradores fizeram:
    Bash

    git pull origin main

    Interface Visual: Se você não gosta de decorar comandos de terminal, o VS Code tem um ícone de Source Control (o terceiro no menu lateral esquerdo). Lá você pode clicar no + para dar "add", no checkmark para "commit" e nos três pontinhos para "push".

    Autenticação: Se o terminal pedir senha e você usa GitHub, o ideal é configurar uma SSH Key ou usar um Personal Access Token, já que o GitHub não aceita mais a senha comum da conta via terminal.

Resumo dos comandos essenciais:
Ação	Comando
Baixar o projeto	git clone <url>
Criar nova branch	git checkout -b <nome>
Preparar arquivos	git add .
Salvar localmente	git commit -m "mensagem"
Enviar ao servidor	git push origin <branch>
Atualizar local	git pull origin main


