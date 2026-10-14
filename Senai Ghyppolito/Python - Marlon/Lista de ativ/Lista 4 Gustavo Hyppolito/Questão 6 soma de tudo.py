#-*- coding: UTF-8 -*-

print("Vamos análisar a soma dos todos os números positivos de 1 até o número que você quiser")
num = int(input("Me de um número que farei a soma do 1 até ele: "))
soma = 0 
for i in range (0,num, 1):
    soma += i
print("O resultado da soma é:",soma)
