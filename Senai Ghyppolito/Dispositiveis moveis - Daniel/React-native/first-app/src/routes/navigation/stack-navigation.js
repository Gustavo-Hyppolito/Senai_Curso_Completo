import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens-classroom/screens-classroom/HomeScreen';
import DetalheScreen from './screens-classroom/screens-classroom/DetalheScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={DetalheScreen} />
    </Stack.Navigator>
  );
}
