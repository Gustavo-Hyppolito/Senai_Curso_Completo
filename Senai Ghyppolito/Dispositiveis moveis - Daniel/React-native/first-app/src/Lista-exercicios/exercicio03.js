import { StyleSheet, Text, View } from "react-native";

export default function Exercicio03() {
  return(
   <View style={styles.container}>
   <View style={styles.redBox}> 
   <Text style={styles.textStyle}>vermelho</Text>
   </View>

    <View style={styles.blueBox}> 
   <Text style={styles.textStyle}>Azul</Text>
   </View>

   <View style={styles.greenBox}> 
   <Text style={styles.textStyle}>Verde</Text>
   </View>
   </View>

);
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    width: "100%",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 70,
    width: 70,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});

