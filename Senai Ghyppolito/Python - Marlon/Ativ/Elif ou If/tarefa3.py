#-*- coding: UTF-8 -*-
print(" Vamos calcular quantos seguntos você gasta em algo")

dias = int(input(" Me de quantos dias você passou fazendo isso: "))
horas = int(input(" Me de quantas horas você passou fazendo isso: "))
minutos = int(input(" Me de quantos minutos você passou fazendo isso: "))
seg = int(input(" Me de quantos segundos você passou fazendo isso: "))
seguntos_totais = dias * 86.400 + horas * 3600 + minutos * 60 + seg 
print(" Os segundos totais que você passou fazendo isso é: %.2f " %seguntos_totais)
