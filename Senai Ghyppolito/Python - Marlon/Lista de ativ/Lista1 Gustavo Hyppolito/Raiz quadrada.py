#-*- coding: UTF-8 -*-
import math 
num = float(input("Me de o seu número: "))
if num >= 0:
    raiz = math.sqrt(num)
    print("O resultado final é:%.2f" %raiz)
elif num <= 0:
    quadrado = num * num
    print("O resultado final é:%.2f" %quadrado)
