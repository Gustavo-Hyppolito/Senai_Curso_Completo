import {Text, View, StyleSheet} from "react-native";

export default function Exemplo03() {
    const logado = false;
    const temNotificacoes = true;

return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 03 - Condicionais </Text>
            <Text style={styles.subtitulo}>Ternário</Text>
            <Text>{logado ? "Logado" : "Deslogado"}</Text>
    </View>

    <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>Operador &&</Text>
        <Text>Notificações:</Text>
        {temNotificacoes && <Text>Você tem novas notificações</Text>}
        {!temNotificacoes && <Text>Sem novas notificações</Text>}
    </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    }
});