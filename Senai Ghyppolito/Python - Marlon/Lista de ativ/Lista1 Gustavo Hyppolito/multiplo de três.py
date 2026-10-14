#-*- coding: UTF-8 -*-

num1 = int(input("Me de o seu número vou analisar se é multiplo de três: "))
resto = num1%3
if resto == 0:
    print("O seu número é um multiplo de três")
elif resto > 0:
    print ("O seu número não é multiplo de três")



