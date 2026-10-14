import { StyleSheet, Text, View } from "react-native";

export default function Exercicio05() {
  return(
   <View style={styles.container}>
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
    gap: 8,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  greenBox: {
    height: 1000,
    width: 200,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
  blueBox: {
    height: 1000,
    width: 200,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },
});

