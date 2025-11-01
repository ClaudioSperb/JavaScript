function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 10
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        //Bom dia !!
        img.src = 'claudio-3.png'
        document.body.style.background ='#CBB27E'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde !!
        img.src = 'claudio-1.png'
        document.body.style.background = '#A8B8A4'
    } else{
        //Boa noite !!
        img.src = 'claudio-2.png'
        document.body.style.background = '#413B41'
    }
}

