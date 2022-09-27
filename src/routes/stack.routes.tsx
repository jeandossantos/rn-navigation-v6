import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="screenA"
        component={ScreenA}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screenB"
        component={ScreenB}
        options={{
          title: 'Tela B',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
      />
    </Stack.Navigator>
  );
}
