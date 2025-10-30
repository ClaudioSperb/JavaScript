
var hora = 10
if(hora < 5 && hora < 24){ // Se a hora for menor que 5 e menor 24, será madrugada
    console.log(`Olá, boa madrugada - são ${hora} horas da madrugada !!!`)
}else if(hora < 12){ // senao, se a hora for menor que as 12, sera bom dia
    console.log(`Ola, Bom dia, são ${hora} horas da manhã !!`)
}else if(hora > 12 && hora < 18){ // senao, se a hora for maior que as 12 e menor que 18, será boa tarde
    console.log(`Olá, boa tarde - são ${hora} horas da tarde !!!`)
}else{ // Se não , será boa noite
    console.log(`Olá,Boa noite - são ${hora} horas da Noite !!!`)
}