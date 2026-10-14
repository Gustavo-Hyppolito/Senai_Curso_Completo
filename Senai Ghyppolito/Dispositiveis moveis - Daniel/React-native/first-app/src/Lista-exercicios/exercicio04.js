import { StyleSheet, Text, View } from "react-native";

export default function Exercicio04() {
  return(
   <View style={styles.container}>
   <View style={styles.yBox}> 
   <Text style={styles.textStyle}>Centro</Text>
   </View>
   </View>

);
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  yBox: {
    height: 120,
    width: 120,

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});