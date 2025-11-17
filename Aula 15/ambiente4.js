let valores = [8, 1, 7, 4, 2, 9]
valores[6] = 3 //adiciona o valor 3 na posição 6
valores.sort() //ordena os valores do array


for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //usando o for in para varrer o array   
// for in é mais simples e recomendado para arrays, funciona somente para varrer índices ou propriedades, não serve para manipular valores.

console.log('----------------------------------')

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //usando o for tradicional para varrer o array
 
console.log('----------------------------------')

let pos = 0
while(pos < valores.length){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    pos++
}