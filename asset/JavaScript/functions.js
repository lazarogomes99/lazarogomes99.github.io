
function digitando(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
         setTimeout (() => 
            elemento.innerHTML += letra, 100 * i)
    })
}


function downloadArquivo() {
    const link = document.querySelector('a.home-btn')
    const pdfFile = '../document/Resumo-LázaroG.pdf'
    const fileName = 'Resumo-LázaroG'

    link.href = pdfFile
    link.download = fileName
}




export default {
    digitando: digitando,
    downloadArquivo: downloadArquivo
}