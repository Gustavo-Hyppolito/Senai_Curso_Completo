#-*- coding: UTF-8 -*-

print("Ola usuario, digite varios numeros e vou lhe mostrar a soma dos numeros impares e pares ao final desse programa. Acaba quando um numero maior que 1000 foi inserido")

pares = 0
impares = 0

while True:
    n= int(input("Me de os valores: "))
    if n >1000:
        print("Voce decidiu parar: ")
        break
    if n % 2 == 0:
        pares= pares + n
    elif n % 2 != 0:
        impares= impares + n
print("A soma dos numeros pares foi de: ", pares)
print("A soma doa numeros imapres foi de: ",impares)
       
