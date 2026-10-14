#-*- coding: UTF-8 -*-

anos = int(input("Digite quantos anos você tem: "))

if anos <= 2:
    print("Você é classificado como um bebê")
elif anos >= 2 and anos <= 12:
    print("Você é classificado como uma criança")
elif anos >= 13 and anos <= 23:
    print("Você é classificado como um adolescente")
elif anos >= 23 and anos <= 69:
    print("Você é classificado como um adulto")
else:
    print ("Você é classificado como um idoso")  
    
