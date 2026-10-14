#-*- coding: UTF-8 -*-

horas = float(input("Digite quantas horas você trabalha por dia : "))
dias = float(input("Digite quantos  você trabalha por mês : "))
mes = dias * horas
salario = mes * 19.50
if salario >= 1500.00:
    porcento_desconto = (salario / 100 * 10 )+ salario
    print("O seu salário líquido é:", porcento_desconto)
elif salario < 1500.00:
    print ( "O seu salário líquido é:", salario)
     
