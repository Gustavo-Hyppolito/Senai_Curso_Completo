#-*- coding: UTF-8 -*-

num1 = int(input("Me de o seu número inteiro vou analisar se é par ou ímpar: "))
resto = num1%2
if resto == 0:
    print("O seu número é par")
elif resto > 0:
    print ("O seu número é ímpar")


