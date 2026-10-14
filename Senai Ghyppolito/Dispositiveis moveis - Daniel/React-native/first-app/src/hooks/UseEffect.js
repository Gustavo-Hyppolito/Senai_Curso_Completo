import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';


export default function TelaMoeda(){
    const [moeda, setMoeda] = useState(0)
    useEffect(() => {
        if (moeda === 5){
            Alert.alert("Parabéns, você desbloqueou o baú!");
        }
    }, [moeda]);

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Moedas: {moeda}</Text>
            <Button title="Adicionar Moeda" onPress={() => setMoeda(moeda + 1)} style={styles.button}/>
            <Button title="Resetar Moedas" onPress={() => setMoeda(0)} style={styles.button}/>
        </View>
    );
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
texto: { fontSize: 24, marginBottom: 20 },
button: { backgroundColor: "blue", padding: 10, borderRadius: 8 },
text: { color: "white", fontSize: 16 },
});