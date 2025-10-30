var idade = 15
if(idade < 16){ //Se a idade for menor que 16 - voce ainda na vota
    console.log(`Você tem ${idade} anos de idade, então você ainda na Vota !!!`)
} else if(idade < 18 || idade >= 65){ //mas se a idade for menor que 18 ou menor que 65 - ai é opcional
    console.log(`Você tem ${idade} anos, o voto pra você é opcional !!!`)
} else{ // aqui é obrigado a votar
    console.log(`Você tem ${idade} anos de idade, então é obrigado a Votar !!!`)
}