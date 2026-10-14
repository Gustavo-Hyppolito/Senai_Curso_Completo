import {Text, View, StyleSheet} from "react-native";
export default function Exemplo04() {
    const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
    const alunos = [
        {id: 1, nome: "Lívia", nota: 7},
        {id: 2, nome: "Yasmin", nota: 8},
        {id: 3, nome: "Maria", nota: 9},
    ];

    return (
    <View style={styles.container}>
        <View>
        <Text style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 04 - Map</Text>
            <Text style={styles.subtitulo}>Map Padrão</Text>
            {frutas.map((fruta, index) => (
                <Text key={index}>{index + 1} - {fruta}</Text>
            ))}
        </Text>
        </View>
        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Map com Objetos</Text>
            <Text style={styles.subtitulo}>Map com Objetos</Text>
            {alunos.map((aluno) => (
                <Text key={aluno.id}>
                    {aluno.nome} - {aluno.nota}
                </Text>
            ))}
        </View>

        <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 4 - Map com Filter</Text>
            <Text style={styles.subtitulo}>Map com Filter</Text>
            {alunos
            .filter((aluno) => aluno.nota >= 6)
            .map((aluno) => (
                <Text key={aluno.id}>Aprovado: {aluno.nome} - {aluno.nota}</Text>
            ))}
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