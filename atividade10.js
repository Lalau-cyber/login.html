var altura, nome, genero, pesoideal

nome= prompt("digite seu nome: ")
genero= prompt(nome+" informe seu sexo: ")
altura= parseFloat(prompt(nome+" digite sua altura: "))

if(genero== "m"){
    pesoideal = 22 * altura* altura
}
else {

    pesoideal = 21 * altura* altura
}

alert(nome+" do genero "+genero+" seu peso ideal é : "+pesoideal )