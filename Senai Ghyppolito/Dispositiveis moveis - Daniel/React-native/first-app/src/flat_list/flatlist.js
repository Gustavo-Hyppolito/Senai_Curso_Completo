import { View, FlatList, Text, StyleSheet, } from "react-native";

export default function FlatListExemplos() {
    const alunos = [
        { id: "1", nome: "Ana", nota: 9.5 },
        { id: "2", nome: "Bruno", nota: 7.8 },
        { id: "3", nome: "Carla", nota: 6.5 },
        { id: "4", nome: "Joao", nota: 8.0 },
        { id: "5", nome: "Miguel", nota: 7.2 },+
        { id: "6", nome: "Fernando", nota: 5.9 },
        { id: "7", nome: "Leticia", nota: 8.8 },
        { id: "8", nome: "Pedro", nota: 6.0 },
        { id: "9", nome: "Julia", nota: 9.0 },
        { id: "10", nome: "Lucas", nota: 7.5 },
        { id: "11", nome: "Maria", nota: 8.3 },
        { id: "12", nome: "Rafael", nota: 6.7 }

    ];

    return (
        <View style={Styles.container}>
            <Text style={styles.titulo}>flatlist</Text>
            <View style={styles.exemploLista}>
                <Text style={styles.subtitulo}>flatlist</Text>
                <FileList
                    data={alunos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: aluno }) => (
                        <cardItem nome={aluno.nome} nota={aluno.nota} />

                    )}
                    listEmptyComponent={<text>A lista esta vazia </text>}
                    scrollEnabled={true} />
            </View>
        </View>
    )
}