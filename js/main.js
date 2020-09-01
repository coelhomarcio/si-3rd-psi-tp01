function vetorMin(vetor) {
    let elemMin = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        elemMin = Math.min(vetor[i], elemMin)
    }
    return elemMin
}

function somaVetorString(vetor) {
    let somaStrings = 0
    for (let i = 0; i < vetor.length; i++) {
        somaStrings += vetor[i].length
    }
    return somaStrings
}

function inverteVetor(vetor) {
    let vetorInvertido = []
    for (let i = vetor.length - 1; i >= 0; i--) {
        vetorInvertido.push(vetor[i])
    }
    return vetorInvertido
    // Toda função poderia ser substituída por: return vetor.reverse()
}

function palindromo(palavra, edit=false) {
    if (edit) {
        palavra = palavra.toLowerCase().replace(/\s/g, "")
    }
    if (palavra[0] === palavra[palavra.length - 1] && palavra.length) {
        return palindromo(palavra.slice(1, palavra.length - 1))
    }
    if (palavra.length > 1) {
        return "não temos um palíndromo"
    }
    else {
        return "temos um palíndromo"
    }
}

function media(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}

function dp(vetor) {
    let variancia = 0
    let mediaArit = media(vetor)
    for (let i = 0; i < vetor.length; i++) {
        variancia += (Math.abs((vetor[i] - mediaArit)) ** 2) / vetor.length
    }
    return [mediaArit, variancia ** 0.5]
    // Raiz quadrada da somatória do quadrado da diferença da media aritmética
    // por cada elemento, dividido pela quantidade de elementos.
}
