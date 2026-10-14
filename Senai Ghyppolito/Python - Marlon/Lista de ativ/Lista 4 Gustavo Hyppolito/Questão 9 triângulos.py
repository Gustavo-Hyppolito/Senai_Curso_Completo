#-*- coding: UTF-8 -*-
print("Vamos análisar os lados de um triângulo e depois te direi se ele isósceles, equilátero ou escaleno.")

a = int(input ("Me informe o primero lado: "))
b = int(input ("Me informe o segundo lado: "))
c = int(input ("Me informe o terceiro lado: "))

if a != b and c != a and b != c:
    print("Seu triângulo é escaleno.")

elif a == b and c == a and b == c:
    print("Seu triângulo é equilátero.")

else:
    print("Seu triângulo é isósceles.")
