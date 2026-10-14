#-*- coding: UTF-8 -*-

valor_produto = float(input(" Me de qual o valor do produto: "))
if valor_produto <= 20:
    lucro = (valor_produto * 45 / 100) + valor_produto
    print("O valor que deve ser vendido é:" ,lucro )
elif valor_produto >= 20:
    lucro = (valor_produto * 30 / 100) + valor_produto
    print("O valor que deve ser vendido é:", lucro)


