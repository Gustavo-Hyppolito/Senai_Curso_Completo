#-*- coding: UTF-8 -*-

print("Vamos contar a quantidade de números inteiros que você escreveu")

num = 0
posi = 0
nega = 0
while True:
    num = int(input("Digite números direi qunatos números positivos e negativos você digitou e 0 para sair: "))
    if num > 0:
        posi = posi + 1
    elif num < 0:
        nega = nega + 1
    else:
        print("Você finalizou o programa")
        break
print("A quantidade de números positivos foi de:", posi)
print("A quantidade de números negativos foi de:", nega)
        
    
