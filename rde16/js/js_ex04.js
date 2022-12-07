var n1, n2, nome, idade, cpf

n1=parseInt(prompt("Entre com um valor"))

if(n1%2==0){
    alert("O número "+n1+" é par")
}
else{
    alert("O número "+n1+" é ímpar")
}

n2=parseInt(prompt("Entre com outro valor"))

if(n2%7==0){
    alert("O número "+n2+" é divisivel por 7")
}
else{
    alert("O número "+n2+" não é divisivel por 7")
}

if(n2%3==0){
    alert("O número "+n2+" é divisivel por 3")
}
else{
    alert("O número "+n2+" não é divisivel por 3")
}

nome=prompt("Digite seu nome: ")
idade=prompt("Digite sua idade: ")
alert("Bem vindo "+nome+"! Você tem "+idade+" anos")

if(idade>18){
    cpf=prompt("Digite seu CPF: ")
    alert("Seu CPF é: "+cpf)
}
else{
    alert("Você é menor de idade")
}
