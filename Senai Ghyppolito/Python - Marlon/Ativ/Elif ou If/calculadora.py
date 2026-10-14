#-*- coding: UTF-8 -*-

num1 = float(input("Me de o primeiro número que vamos calcular: "))
num2 = float(input("Me de o segundo número que vamos calcular: "))
operação = (input(" Qual tipo de conta vamos fazer?: "))
soma = num1 + num2
divisão = num1 / num2
subtração = num1 - num2
vezes = num1 * num2
if operação == soma:
     print( "O calculo é igual:%.2f" %soma)
elif operação == divisão:
     print( "O calculo é igual:%.2f" %divisão)
elif operação == subtração:
     print( "O calculo é igual:%.2f" %subtração)
else:
    print( " O calculo é igual:%.2f" %vezes) 
          























