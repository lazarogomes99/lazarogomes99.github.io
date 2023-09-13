import functions from "./functions.js"

const titulo = document.querySelector('h4');


functions.digitando(titulo);

functions.downloadArquivo();




menu.addEventListener('click', () => {
    const burguer = document.querySelector('.burguer')
    const itens = document.querySelector('#itens')
    burguer.classList.toggle('ativo')
    itens.classList.toggle('ativo')
})