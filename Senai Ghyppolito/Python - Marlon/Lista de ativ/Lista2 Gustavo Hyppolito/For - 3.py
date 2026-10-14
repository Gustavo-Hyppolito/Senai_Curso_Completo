#-*- coding: UTF-8 -*-


print( " Me de um número que irei te dar o fatorial dele")
fatorial = int(input("Me de um número"))
acum = 1
for v in range (fatorial, 1 , -1):
    acum = acum * v
print(" O resultado do fatorial é:", acum)
