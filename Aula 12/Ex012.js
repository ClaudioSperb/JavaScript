var agora = new Date()
var hora = agora.getHours()
if(hora < 5 && hora < 24){
    console.log(`Olá, boa madrugada - são ${hora} horas da madrugada !!!`)
}else if(hora < 12){
    console.log(`Ola, Bom dia, são ${hora} horas da manhã !!`)
}else if(hora > 12 && hora < 18){
    console.log(`Olá, boa tarde - são ${hora} horas da tarde !!!`)
}else{
    console.log(`Olá,Boa noite - são ${hora} horas da Noite !!!`)
}