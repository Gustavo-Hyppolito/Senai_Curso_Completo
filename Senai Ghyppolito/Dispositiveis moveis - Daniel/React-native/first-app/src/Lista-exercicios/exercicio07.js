import { StyleSheet, Text, View } from "react-native";

export default function Exercicio07() {
  return(
   <View style={styles.container}>

    <View style={styles.row}>
    <View style={styles.greenBox}></View> 
   <Text style={styles.textStyle}></Text>
   <View style={styles.redBox}></View>
   <Text style={styles.textStyle}></Text>
   </View>

    <View style={styles.row}>
    <View style={styles.blueBox}></View> 
   <Text style={styles.textStyle}></Text>
    <View style={styles.yellowBox}></View>
   <Text style={styles.textStyle}></Text>
   </View>
    </View>


);
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

row: {
  flexDirection: "row",
  justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
},
  redBox: {
    height: 400,
    width: 350,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 400,
    width: 350,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 450,
    width: 350,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    height: 450,
    width: 350,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
