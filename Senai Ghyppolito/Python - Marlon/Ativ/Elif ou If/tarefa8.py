#-*- coding: UTF-8 -*-
print(" Vamos calcular o preço que você pagára num carro alugado ")

km = int(input(" Me de quantos (Km) você percorreu: "))
dias = int(input(" Me de quantos dias voê percorreu: "))
valor = dias * 60 + km * 0.15
print(" O valor é de:%.2f $  " %valor )
