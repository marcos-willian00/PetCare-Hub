# PetCare Hub

O sistema PetCare Hub é um sistema simples de gerenciamento de tutores e animais de estimação, construído com Node.js e Express.

## 🚀 Funcionalidades

- Recuperar todos os tutores cadastrados
- Criar um novo tutor
- Excluir um tutor
- Adicionar um animal de estimação a um tutor
- Excluir um animal de estimação de um tutor

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- npm (geralmente vem com o Node.js)

## 🔧 Instalação

1. Clone o repositório:
git clone
```
https://github.com/marcos-willian00/PetCare-Hub.git
```

3. Navegue até o diretório do projeto:
cd vetclinic

4. Instale as dependências:
npm install

## ⚙️Uso

1. Inicie o servidor:
npm run dev

2. O servidor estará em execução em
```
http://localhost:5000.
```
## Rotas disponíveis

- GET `/tutors`: Recupera todos os tutores cadastrados.
- POST `/tutors`: Cria um novo tutor.
- DELETE `/tutors/:id`: Exclui um tutor existente.
- POST `/pets/:tutorId`: Adiciona um novo animal de estimação a um tutor.
- DELETE `/pets/:petId/tutor/:tutorId`: Exclui um animal de estimação de um tutor.

## 🖇️ Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções de bugs, sinta-se à vontade para abrir uma issue ou enviar um pull request.

---
