#-*- coding: UTF-8 -*-

triplo = 3
while True:
    num = int(input("Digite números a triplicar ou 999 para sair: "))
    if num == 999:
        print("bye bye :D")
        break
    num = triplo * num
    print (num)   
   

