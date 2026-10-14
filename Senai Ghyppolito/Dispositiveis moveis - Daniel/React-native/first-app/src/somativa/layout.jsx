import { StyleSheet, Text, View } from "react-native";

export default function Exercicio12() {
  return(
    <View style={styles.container}>

   <View style={styles.promo}>
    <View style={styles.greenBox}></View>
   <Text style={styles.textStyle}>Header</Text>
   </View>

   <View style={styles.cards}>
    <View style={styles.cardABox}></View>
   <Text style={styles.textStyle}>Header</Text> 
   <View style={styles.cardBBox}></View>
   <Text style={styles.textStyle}>Header</Text>
   <View style={styles.cardCBox}></View>
   <Text style={styles.textStyle}>Header</Text>
   </View>

   <View style={styles.main}>
   <View style={styles.grayBox}> 
   <Text style={styles.textStyle}>Main Content</Text>
   </View>
   </View>

   <View style={styles.cat}>
    <View style={styles.cat1Box}></View>
   <Text style={styles.textStyle}>Header</Text> 
   <View style={styles.cat2Box}> </View>
   <Text style={styles.textStyle}>Header</Text>
   <View style={styles.cat3Box}> </View>
   <Text style={styles.textStyle}>Header</Text>
   </View>
   </View>

);
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
},
  textStyle: {
    color: "white",
    fontWeight: "bold",
},

    promo: {
  flexDirection: "column",
  justifyContent: "space-evenly",
    alignItems: "center",
    gap: 1,
},
    cards: {
  flexDirection: "row",
  justifyContent: "space-evenly",
    alignItems: "center",
    flex:150,

},
    main: {
  flexDirection: "row",
  justifyContent: "start-center",
    alignItems: "center",
    flex:200,
},
    cat: {
  flexDirection: "row",
  justifyContent: "space-evenly",
    alignItems: "center",
    flex:200,
    gap: 1,
    
},
  grayBox: {
    height: 570,
    width: 80,

    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
    borderRadius: 20,
  },
  greenBox: {
    height: 80,
    width: 800,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
    cardABox: {
    height: 120,
    width: 100,
    backgroundColor: "green",
    borderRadius: 8,
   
  },
  cardBBox: {
    height: 120,
    width: 100,
    backgroundColor: "blue",
    borderRadius: 8,
    
  },
  cardCBox: {
    height: 120,
    width: 150,
    backgroundColor: "yellow",
    borderRadius: 8,

  },
    cat1Box: {
    height: 120,
    width: 110,
    backgroundColor: "purple",
    borderRadius: 8,
   
  },
  cat2Box: {
    height: 120,
    width: 110,
    backgroundColor: "blue",
    borderRadius: 8,
    
  },
  cat3Box: {
    height: 120,
    width: 110,
    backgroundColor: "orange",
    borderRadius: 8,

    
  },
});
