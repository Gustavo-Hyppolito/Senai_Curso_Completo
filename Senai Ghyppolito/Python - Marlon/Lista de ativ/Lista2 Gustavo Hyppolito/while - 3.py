#-*- coding: UTF-8 -*-

contador21 = 0
contador50 = 0

print("Vamos digitar varias idades e vou te dizer quais são menores que 21 e maiores que 50")

while True:
    idade = int(input("Me de a idade"))

    if idade < 21 and idade > 0:
        contador21 = contador21 + 1

    elif idade > 50:
        contador50 = contador50 + 1

    elif idade == -99:
        print("A quantidade de pessoas menores de 21 {contador21} e os maiores de 50 é {contador50}"
