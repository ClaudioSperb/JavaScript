function tabuada(){
    let num = document.getElementById('txtn') //pegar o valor digitado
    let tab = document.getElementById('seltab') //pegar a tabuada onde os resultados serão exibidos
    let n = Number(num.value) //converter o valor digitado em numero

    if(num.value.length == 0){
        window.alert('Por favor, digite um número válido para começarmos!')
    }else{
        let n = Number(num.value)//converter o valor digitado em numero
        let c = 1  //contador
        tab.innerHTML = ''   //limpar a tabuada antes de gerar uma nova
        for(c = 1; c < 11; c++){
            let item = document.createElement('option') //criar um elemento option
            item.text = ` ${n} x ${c} =  ${n*c}` //adicionar o texto ao elemento option
            tab.appendChild(item) //adicionar o elemento option ao select
        }
       
    }
    
}