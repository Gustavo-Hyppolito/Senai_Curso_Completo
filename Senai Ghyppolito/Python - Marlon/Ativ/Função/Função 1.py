# -*- coding: UTF-8 -*-

num1=0
num2=0

num1 = float(input("Me de seu primeiro número"))
num2 = float(input("Me de seu segundo número"))

def maior_menor (num1, num2):
    if num1 == num2:
        print("Error, digite números iguais")
    elif num1 > num2:
        print("O maior número é o:", num1)
    elif num2 > num1:
        print("O maior número é o:", num2)

maior_menor (num1, num2)    
   

    
