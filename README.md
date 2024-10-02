# firebase-test-20241002

Projeto que cria dados no Firestore e utiliza Firefunctions para criar increment_id sequencial.

Para rodar esse projeto, é necessário estar na versão 18 do node

Instalação

    Instalar npm install -g firebase-tools
    Executar firebase login
    Executar firebase init
    Clonar o repositório
    Entrar na pasta do projeto via terminal, acessar a pasta functions e rodar npm install
    Executar firebase emulators:start
    Acessar http://127.0.0.1:4000/firestore para ver a estrutura da base de dados
    Executar o seguinte cUrl:
    curl -X POST http://localhost:5001/firebase-test-20241002/us-central1/addRecord \
    -H "Content-Type: application/json" \
    -d '{"name": "Novo Registro"}'
