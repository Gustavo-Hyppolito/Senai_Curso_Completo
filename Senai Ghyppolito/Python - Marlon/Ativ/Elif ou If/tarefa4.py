#-*- coding: UTF-8 -*-
print(" Vamos calcular o aumento do seu salário ")

salario = float(input(" Me de qual o seu salário: "))
porcento = float(input(" Me de quantos porcento quer de aumento: "))

aumento = salario * porcento / 100
salario_final= aumento + salario
print(" O aumento vai ser de: %.2f " %aumento)
print(" O valor atrual do salário é: %.2F " %salario_final)

