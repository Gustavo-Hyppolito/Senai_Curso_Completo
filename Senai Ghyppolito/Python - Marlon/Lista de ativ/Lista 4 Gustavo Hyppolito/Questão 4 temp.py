#-*- coding: UTF-8 -*-

print("Vamos análisar a temperatura (digite sair para finalizar)")

while True: #Repete para sempre
    temp = input("Qual a temperatura atual?  ")
    if temp.isdigit():
        if int(temp) < 15:
            print("O clima está frio!")
        elif int(temp) <= 25:
            print("O clima está agradável!")
        elif int(temp) >= 26:
            print("O clima está quente!")
    else:
        if temp == "sair":
            print("Programa finalizando")
            break
        else:
            print("Resposta inválida")

 #isdigit() = verificação se é número ou letra  

