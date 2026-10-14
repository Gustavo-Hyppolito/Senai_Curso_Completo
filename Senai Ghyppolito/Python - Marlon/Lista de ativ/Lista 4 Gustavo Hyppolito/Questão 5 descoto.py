#-*- coding: UTF-8 -*-

print("Vamos análisar o desconto dos produtos da empresa Zézinho Funilarias esse desconto é aplicado de acordo com o tempo de serviços")

tempo = int(input("Me de seu tempo de empresa: "))
if int(tempo) < 5:
    tempo = 0
elif int(tempo) <= 10:
        tempo = 5
else:
        tempo = 10

valor = float(input(" Me de qual o valor da compra: "))
porcento_desconto = valor / 100 * tempo
valor_final = valor - porcento_desconto 
print("A porcentagem de desconto é de:", tempo)
print("O valor total com o desconto: %.2f " %valor_final)
