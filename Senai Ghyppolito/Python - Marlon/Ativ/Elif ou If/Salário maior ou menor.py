#-*- coding: UTF-8 -*-

salario = float(input("Digite qual o seu salário?: "))
if salario <= 1250.00:
    aumento = (salario *15/100) + salario
else: aumento = ( salario *10/100 ) + salario
print("O salário mais o aumento é: R$ %.2f " %aumento)



