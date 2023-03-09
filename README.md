# JSExpertMax Gesture Controller - Semana JS Expert 7.0

## Preview

<img width=100% src="./.github/view project.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v19.6

## Live demo

- Para testar o projeto final [clique aqui](https://rafaelmasselli.github.io/interactive-stream-platform-with-motions/pages/titles/)

## Running

- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features

- Titles List

  - [x] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
  - [x] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano continuem sendo clicáveis 🙌
  - [x] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
  - [x] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
  - [x] - Deve disparar click no elemento mais próximo quando usar gesto de pinça 🤏🏻
  - [x] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
  - [x] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
  - [x] - Todo processamento de Machine Learning deve ser feito via Web worker

### Desafios

- [x] - Aula 01 - Diferenciar piscada de olhos entre olho direito e esquerdo e atualizar log para mostrar qual olho que piscou.
- [x] - Aula 02 - Reconhecer gestos de mãos individuais e printar no log
- [x] - Aula 03 - Corrigir Banner de titulo de video, para ficar atrás do desenho das mãos e se tornar clicável
- [x] - Aula 04 - Usar as mãos virtuais também no Video Player
- Desafio Plus: cobrir o projeto com 100% de code coverage

### Links de referênciaa:

- Reuni todos os links em [referências](./referencias.md)

### FAQ

- browser-sync está lançando erros no Windows e nunca inicializa:
  - Solução: Trocar o browser-sync pelo http-server.
    1. instale o **http-server** com `npm i -D http-server`
    2. no package.json apague todo o comando do `browser-sync` e substitua por `npx http-server .`
    3. agora o projeto vai estar executando na :8080 então vá no navegador e tente acessar o http://localhost:8080/
       A unica coisa, é que o projeto não vai reiniciar quando voce alterar algum código, vai precisar dar um F5 na página toda vez que alterar algo

### Créditos ao Layout

- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
