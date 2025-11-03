function carregar(){
    var msg = window.document.getElementById('msg')//variavel da div#msg
    var img = window.document.getElementById('imagem')//variavel da div#imagem
    var data = new Date()//colocamos new date para que possamos pegar a data atual
    var hora = data.getHours()//aqui pega a hora atual
    //var hora = 15
  
  msg.innerHTML = `Agora são ${hora} horas`// aqui colocamos a mensagrm que vai aparecer em cima da foto, usamos um placeholder.
    if(hora >= 0 && hora < 12){
        //Bom dia !!
        img.src = 'claudio-3.png'//puxamos a imagem da pasta

        document.body.style.background ='#CBB27E'//Alteramos o background
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

