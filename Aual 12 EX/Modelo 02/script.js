function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente !!!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')//criamos o elemento img
        img.setAttribute('id', 'foto')//colocamos um id para a img
        if(fsex[0].checked){
           gênero = 'Homem'
           if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'foto-menino-5-anos.png')//adicionando a imagem diretamente em JS
           } else if(idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src', 'foto-jovem-masculino.png')
           } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-masculino.png')
           } else{
            //Idoso
            img.setAttribute('src', 'foto-senhor.png')
           }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'foto-menina-5-anos.png')
           } else if(idade >= 10 && idade < 21){
            //Jovem
            img.setAttribute('src', 'foto-jovem-feminino.png')
           } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'foto-adulto-feminino.png')
           } else{
            //Idoso
            img.setAttribute('src', 'foto-senhora.png')
           }
        }
        res.style.textAlign ='center'//utilizamos essa configuração para centralizarmos o resultado diretamente no JS
        res.innerHTML = ` Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos`
        res.appendChild(img)//para aparecer a imagem adicionamos o appendChield.
    }
}