print("Me de o valor da sua altura e tambem do peso, e vou calcular o seu IMC, eu vou lhe dizer sua situação atual")

num1= float(input("Digite a sua altura: "))
num2= float(input("Digite o seu peso: "))

formula= num2/(num1*num2)

if formula<19 and formula>0:
    print("Você esta abaixo do peso")
elif formula>=20 and formula <= 24.9:
    print("Você esta no peso normal")
elif formula>=25 and formula<= 29.9:
    print("Você esta sobre peso")
elif formula>=30 and formula <=39.9:
    print("Você esta obeso")
elif formula>=40:
    print("Você esta obeso Mórbido")
