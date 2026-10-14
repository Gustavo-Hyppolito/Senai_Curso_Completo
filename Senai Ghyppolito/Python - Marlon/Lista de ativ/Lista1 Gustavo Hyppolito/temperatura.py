#-*- coding: UTF-8 -*-

temp = int(input("Digite quantos graus está agora: "))

if temp <= 15:
    print("Está muito frio")
elif temp >= 16 and temp <= 23:
    print("Está frio")
elif temp >= 24 and temp <= 26:
    print("Está agradável")
elif temp >= 27 and temp <= 30:
    print("Está calor")
else:
    print ("Está muito quente")
