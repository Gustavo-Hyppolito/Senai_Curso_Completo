print("Digite seus dois números que eu te direi quem é o maior, lembrando coloque números diferentes")

num1 = float(input("Digite seu primeiro número"))
num2 = float(input("Digite seu segundo número"))


if num1 == num2:
    print("Error, coloque números diferentes")
elif num1 > num2:
    print(num1,"é o maior")
elif num2 > num1:
     print (num2, "é o maior")
