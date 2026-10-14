#-*- coding: UTF-8 -*-
x = 0
print("Vamos ver as tabuadas")
n = int(input("Qual tabuada vamos ver (de 0 à 9)"))
for n in range (0,10):
    for x in range(1,11):
        print(f"{n} * {x} = {n * x}")


