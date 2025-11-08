function contar(){
    let ini = document.getElementById('txti')//inicio
    let fim = document.getElementById('txtf')//fim
    let passo = document.getElementById('txtp')//passo
    let res = document.getElementById('res')//resultados

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//verificar se os campos estão vazios
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)//converter para número
        let f = Number(fim.value)//converter para número
        let p = Number(passo.value)//converter para número

        if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`//adicionar emoji
            } 
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`//adicionar emoji
            }
        }
    res.innerHTML += `\u{1F3C1}`//adicionar emoji de bandeira
}
}