import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'purple',
      }}
    >
      <Tab.Screen
        name="screenA"
        component={ScreenA}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="screenB"
        component={ScreenB}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
    </Tab.Navigator>
  );
}
