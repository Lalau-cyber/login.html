let sA, nS
sA = parseFloat(prompt("digite seu saldo: "))

if(sA < 500){
nS = sA + sA* 0.15
}
else if(sA < 1000){
    nS = sA+ sA*0.01
}
else{

    nS = sA + sA *0.05
}

alert("seu novo salario é "+nS)