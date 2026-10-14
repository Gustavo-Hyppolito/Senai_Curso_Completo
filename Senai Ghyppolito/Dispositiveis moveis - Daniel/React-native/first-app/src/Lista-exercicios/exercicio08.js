import { StyleSheet, Text, View } from "react-native";

export default function Exercicio08() {
  return(
   <View style={styles.container}>

    <View style={styles.column}>
   <View style={styles.redBox}></View>
   <Text style={styles.textStyle}></Text>
    <View style={styles.blueBox}></View> 
   <Text style={styles.textStyle}></Text>
   <View style={styles.yellowBox}></View>
   <Text style={styles.textStyle}></Text>
    </View>

   <View style={styles.row}>
    <View style={styles.greenBox}></View> 
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
  justifyContent: "center",   
    alignItems: "center",
    gap: 1,
},
 greenBox: {
    height: 40,
    width: 35,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

column: {
  flexDirection: "column",
  justifyContent: "space-evenly",
    alignItems: "center",
    gap: 1,
},
  redBox: {
    height: 40,
    width: 35,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  blueBox: {
    height: 45,
    width: 35,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    height: 45,
    width: 35,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
