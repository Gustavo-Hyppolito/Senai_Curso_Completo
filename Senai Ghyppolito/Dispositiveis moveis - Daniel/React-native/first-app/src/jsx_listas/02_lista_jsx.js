import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Lista02() {
  const loja_aberta = false;
  const tem_promocao = true;
  const nota = 7.5;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Gustavo H</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 01 - Renderização Condicional</Text>
      </View>

      <View style={styles.card}>
        {loja_aberta && <Text style={styles.aberto}>Loja aberta</Text>}
        {!loja_aberta && <Text style={styles.fechado}>Loja fechada</Text>}
      </View>

      <View style={styles.card}>
        {tem_promocao && <Text style={styles.promocao}>Promoção disponível</Text>}
      </View>

      <View style={styles.card}>
        {nota >= 7 && nota <= 10 && (
          <Text style={styles.aprovado}>Aprovado - Nota: {nota}</Text>
        )}

        {nota >= 5 && nota < 7 && (
          <Text style={styles.recuperacao}>Recuperação - Nota: {nota}</Text>
        )}

        {nota >= 0 && nota < 5 && (
          <Text style={styles.reprovado}>Reprovado - Nota: {nota}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },

  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },

  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },

  aprovado: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },

  recuperacao: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 16,
  },

  reprovado: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});