#-*- coding: UTF-8 -*-
print("Digite seus cinco salários")

salário1 = float(input("Digite seu primeiro salário "))
salário2 = float(input("Digite seu segundo salário "))
salário3 = float(input("Digite seu terceiro salário "))
salário4 = float(input("Digite seu quarto salário"))
salário5 = float(input("Digite seu cinco salário"))

média = (salário1 + salário2 + salário3 + salário4 + salário5)/5
print("A média dos salários é: %.2f ", %média)
