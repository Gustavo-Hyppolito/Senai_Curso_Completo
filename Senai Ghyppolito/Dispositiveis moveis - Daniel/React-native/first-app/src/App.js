import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/stack-navigation';
import BottomTabNavigator from './navigation/bottom_tab_navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>   */}

      {/* </Stack.Navigator> */}
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


