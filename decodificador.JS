
const texto1 = document.querySelector(".texto1")
const entrada2 = document.querySelector(".entrada2")

const retorno = document.querySelector(".retorno")

function fnCriptografar(){
    const stringProcessada = codificar(texto1.value)
    retorno.value = stringProcessada
}

function codificar(retornoTexto1){

    let matriCodigo = [["e" , "enter"] , ["i", "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u", "ufat"]]

    retornoTexto1 = retornoTexto1.toLowerCase()

    for(let i = 0; i < matriCodigo.length ; i++){
         if(retornoTexto1.includes(matriCodigo[i][0])) {
               retornoTexto1 = retornoTexto1.replaceAll(matriCodigo[i][0], matriCodigo[i][1])
         }
    }
    return retornoTexto1;
}

//segundo botão

function fnDescriptografar() {

    const processamento = codificador(entrada2.value)
    retorno.value = processamento
}

function codificador(pross) {

   /*let matrizCodigo = [["enter" , "e"] , ["imes", "i"] , ["ai", "a"]
    ["ober", "o"] , ["ufat", "u"]] */

    let matrizCodigo = [["e" , "enter"] , ["i", "imes"] , ["a", "ai"] , ["o" , "ober"] , ["u", "ufat"]]

    pross = pross.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if (pross.includes(matrizCodigo[i][1])) {
            pross = pross.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
    }
        return pross;
}

// botão Copiar

function copiarTexto() {
    var copiado = document.getElementById("retorno").value

    if (navigator.clipboard.writeText(copiado)){
        document.getElementById("copy").textContent = "copiado!"
    
}
    setInterval(function(){
        document.getElementById("copy").textContent = "copiar"

    }, 3500
    
    )}