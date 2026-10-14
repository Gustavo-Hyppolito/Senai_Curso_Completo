#-*- coding: UTF-8 -*-

print("Vamos calcular a média e a soma dos valores")
acum = 0
count = 0
num = 0
while True:
    num = int (input ("Me de um valor: "))
    if num <0:
        print("Error")
        break
    else:
        count = count + 1
        acum = num + acum
        media = acum / count
print("A soma desses valores é: ", acum)
print("A média desses valores é: ", media)
