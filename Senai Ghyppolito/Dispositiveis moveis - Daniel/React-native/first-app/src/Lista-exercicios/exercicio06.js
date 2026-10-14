import { StyleSheet, Text, View } from "react-native";

export default function Exercicio06() {
  return(
   <View style={styles.container}>

    <View style={styles.greenBox}> 
   <Text style={styles.textStyle}>Header</Text>
   </View>
   <View style={styles.grayBox}> 
   <Text style={styles.textStyle}>Main Content</Text>
   </View>

    <View style={styles.blueBox}> 
   <Text style={styles.textStyle}>Footer</Text>
   </View>

   
   </View>

);
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  grayBox: {
    height: 755,
    width: 800,

    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 800,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 800,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
