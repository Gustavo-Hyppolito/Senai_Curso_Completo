# -*- coding: UTF-8 -*-

num1 = 0
num2 = 0
num1 = int(input("Me de o seu primerio número, esse é o número que você quer saber se é multiplo de outro"))
num2 = int(input("Me de o seu segundo número, esse é o número que vc quer saber se é multiplicador"))
def multiplo(num1, num2):
    return(num1 % num2 == 0)

def divisão (multiplo):
    if multiplo(num1,num2):
        return "É multiplo"
    else:
        return "N é multiplo"

print(divisão(multiplo))

