let num = [5, 8, 2, 9, 3];
let pos = num.indexOf(4);


if (pos === -1) {
    console.log(`O valor digitado nao foi encontrado! Certifique-se de que o valor existe no array ${num}.`);
} else{
    console.log(`O valor 3 está na posição ${pos}`)    
}