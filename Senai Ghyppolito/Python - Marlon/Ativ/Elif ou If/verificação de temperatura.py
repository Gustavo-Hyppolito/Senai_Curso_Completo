print("ANÁLISE DE TEMPERATURA  (digite s para finalizar)")

while True ( Repete para sempre ):
    temp = input("Qual a temperatura atual?  ")
    if temp.isdigit():
        if int(temp) <= 20:
            print("O clima está frio!")
        elif int(temp) < 30:
            print("O clima está ameno!")
        elif int(temp) >= 30:
            print("O clima está quente!")
    else:
        if temp == "s":
            print("Programa finalizando...")
            break
        else:
            print("Resposta inválida")


isdigit() = verificação se é número 
