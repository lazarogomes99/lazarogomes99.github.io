const titulo = document.querySelector('h4')
const tituloH1 = document.querySelector('h1')

function digitando(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
         setTimeout (() => 
            elemento.innerHTML += letra, 100 * i)
    })
}
digitando(titulo);




function downloadArquivo() {
    const link = document.querySelector('a.home-btn')
    const pdfFile = '../document/Resumo-LázaroG.pdf'
    const fileName = 'Resumo-LázaroG'

    link.href = pdfFile
    link.download = fileName
}




const burguer = document.querySelector('.burguer');
const itens = document.querySelector('#itens');

menu.addEventListener('click', () => {
    burguer.classList.toggle('ativo');
    itens.classList.toggle('ativo');
})