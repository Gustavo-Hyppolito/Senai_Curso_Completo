a = int(input ("Me informe o primero número: "))
b = int(input ("Me informe o segundo número: "))
c = int(input ("Me informe o terceiro número: "))

valor = a + b
valor2 = b + c
valor3 = c + a

if valor < c or valor2 < a or valor3 < b:
    print("Ocorreu um erro, faça novamente!")

elif a == b and a != c or a == c and a != b or b == c and b != a:
    print("Seu triângulo é isósceles.")
elif a == b and c == a:
    print("Seu triângulo é equilátero.")
elif a != b and c != a and b != c:
    print("Seu triângulo é escaleno.")
