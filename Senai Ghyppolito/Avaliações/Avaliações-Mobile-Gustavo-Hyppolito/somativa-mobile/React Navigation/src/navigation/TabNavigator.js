//GUstavo Hyppolito

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListaScreen from "../screens/ListaScreen";
import PerfilScreen from "../screens/PerfilScreen";
import LivrosScreen from "../navigation/StackNavigator"
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (<Tab.Navigator screenOptions={{ headerShown: false }}>
     <Tab.Navigator name="Lista" component={ListaScreen} />
      <Tab.Navigator name="Perfil" component={PerfilScreen} />
      <Stack.Navigator name="Livros" component={LivrosNavigator} />
    </Tab.Navigator>
  );
}
