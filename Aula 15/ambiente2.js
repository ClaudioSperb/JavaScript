let num = [5, 8, 2, 9, 3]
let pos = 0
num.push(7) // Adiciona o valor 7 no final do vetor
num.sort() // Ordena o vetor em ordem crescente
num.push(1) // Adiciona o valor 1 no final do vetor
num.sort() // Ordena o vetor em ordem crescente

console.log('Início do for')

for (pos = 0; pos < num.length ; pos++){
    console.log(num[pos])
}
console.log('Fim do for')