#-*- coding: UTF-8 -*-

print("Vou calcular juros simples com seus dados")


P = float(input("Digite seu salário por favor: "))
i = float(input("Digite qual a taxa de juros (em decimal, por exemplo, 5% seria 0.05): "))
t = float(input("Digite qual o tempo (meses): "))

Juros = P * i * t

print("O valor dos juros simples é de: %.2f" %Juros)
