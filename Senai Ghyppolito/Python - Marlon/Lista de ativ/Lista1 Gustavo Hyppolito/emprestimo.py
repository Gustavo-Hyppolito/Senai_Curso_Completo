#-*- coding: UTF-8 -*-

salario = float(input(" Me de qual o seu salário: "))
prestação = float(input(" Me de o valor da prestação: "))
valor = salario *30 / 100

if valor <= prestação:
    print("Pode acontecer o empréstimo")
elif valor > prestação:
    print ("Não pode acontecer o empréstimo")
