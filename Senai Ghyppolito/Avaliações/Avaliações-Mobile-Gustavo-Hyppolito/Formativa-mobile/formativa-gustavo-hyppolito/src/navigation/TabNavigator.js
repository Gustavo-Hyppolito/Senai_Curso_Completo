import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

import ListaScreen from "../screens/ListaScreen";
import PerfilScreen from "../screens/PerfilScreen";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return( <Tab.Navigator screenOptions={{ headerShown: false }}>
     <Tab.Screen name="Musicas" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Lista" component={ListaScreen} />
  </Tab.Navigator>
  );
}
