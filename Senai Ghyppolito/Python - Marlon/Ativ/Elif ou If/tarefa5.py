#-*- coding: UTF-8 -*-
print(" Vamos calcular o preço de um produto")
valor_produto = float(input(" Me de qual o valor do produto: "))
porcento = float(input(" Me de quantos porcento de desconto: "))
porcento_desconto = valor_produto / 100 * porcento
print(" O desconto vai ser de: %.2f " %porcento_desconto)
