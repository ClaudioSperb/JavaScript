function parimpar(n){ //Função que verifica se o número é par ou ímpar
    if(n % 2 == 0){ //Se o resto da divisão por 2 for igual a 0, é par
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}

let res = parimpar(1588) //Chama a função com o número digitado
console.log(`o Numero digitado é ${res}`) //Mostra o resultado no console