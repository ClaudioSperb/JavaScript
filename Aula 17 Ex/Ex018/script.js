let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {//função para validar se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }   
}

function inLista(n, l){//função para verificar se o número já está na lista
    if(l.indexOf(Number(n)) != -1){ //se o número estiver na lista
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){ //se o número for válido e não estiver na lista
        valores.push(Number(num.value)) //adiciona o número na lista de valores
        let item = document.createElement('option') //cria um elemento option
        item.text = `Valor ${num.value} adicionado.` //adiciona o texto ao elemento option
        lista.appendChild(item) //adiciona o elemento option à lista
        res.innerHTML = '' //limpa a área de resultados

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //limpa o campo de entrada
    num.focus() //coloca o foco no campo de entrada
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //total de números adicionados
        let maior = valores[0] //maior valor
        let menor = valores[0] //menor valor
        let soma = 0 //soma dos valores
        let media = 0 //média dos valores 
        for(let pos in valores){ //percorrer a lista de valores
            soma += valores[pos] //soma os valores
            if(valores[pos] > maior) //se o valor atual for maior que o maior valor
                maior = valores[pos] //atualiza o maior valor
            if(valores[pos] < menor) //se o valor atual for menor que o menor valor
                menor = valores[pos] //atualiza o menor valor
        }
        
        media = soma / tot //calcula a média dos valores
        res.innerHTML = '' //limpa a área de resultados
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` //mostra o total de números
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>` //mostra o maior valor
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>` //mostra o menor valor
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>` //mostra a soma dos valores
        res.innerHTML += `<p>A média dos valores é ${media}.</p>` //mostra a média dos valores
    }

}