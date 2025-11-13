function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let n = Number(num.value)

    if(num.value.length == 0){
        window.alert('Por favor, digite um número válido para começarmos!')
    }else{
        let n = Number(num.value)//converter o valor digitado em numero
        let c = 0  //contador
        tab.innerHTML = ''   //limpar a tabuada antes de gerar uma nova
        while (c < 10){ 
            c++
            let item = document.createElement('option') //criar um elemento option
            item.text = ` ${n} x ${c} =  ${n*c}` //adicionar o texto ao elemento option
            tab.appendChild(item) //adicionar o elemento option ao select
        }
       
    }
    
}