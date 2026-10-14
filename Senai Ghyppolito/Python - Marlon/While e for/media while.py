#-*- coding: UTF-8 -*-
cont = 0
acum = 0
num = 0 
while True:
    num = int(input("Digite números direi a média e digite o 0 para sair: "))
    if num == 0:
        break
    if num > 0:
        cont = cont + num
        acum = acum + 1
        media = cont / acum
        print (media)
