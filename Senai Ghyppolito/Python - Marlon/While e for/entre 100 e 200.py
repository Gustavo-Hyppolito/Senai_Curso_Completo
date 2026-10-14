#-*- coding: UTF-8 -*-

num = 0
acum = 0
while True:
    num = int(input("Digite números direi qual está entre 100 e 200 e digite o 0 para sair"))
    if num == 0:
        print(" nenhum número foi digitado entre 100 e 200")
        break
    if num >= 100 and num <= 200:
        acum = acum + 1
        print (acum)
    
