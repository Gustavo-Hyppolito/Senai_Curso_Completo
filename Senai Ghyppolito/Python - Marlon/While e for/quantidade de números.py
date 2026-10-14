#-*- coding: UTF-8 -*-

num = 0
cont = 0
while True:
    num = int(input("Digite números direi qunatos números você digitou ou número negativos para sair: "))
    if num < 0:
        break
    if num > 0:
        cont = cont + 1  
        print (cont)
