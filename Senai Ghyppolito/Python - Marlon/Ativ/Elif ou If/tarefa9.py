#-*- coding: UTF-8 -*-
print(" Vamos calcular o qunato de vida um fulmante ainda tem ")


cigarros = int(input(" Me de quantos cigarros por dia você fuma: "))
anos = int(input(" Me de quantos anos você fuma: "))
tempo_perdido = anos * 365 * cigarros * 10
valor_final = tempo_perdido /1440
print(" O tempo de vida perdido é de:%.2f   " %valor_final )

