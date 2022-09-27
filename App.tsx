import 'react-native-gesture-handler';
import { View } from 'react-native';
import { Routes } from './src/routes';
import * as React from 'react';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  );
}
