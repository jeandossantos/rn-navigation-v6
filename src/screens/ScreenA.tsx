import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export function ScreenA() {
  const navigation = useNavigation();

  function openScreenB() {
    navigation.navigate('screenB', {
      name: "Don't worry, be happy!",
    });
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
      <Button title="Ir para screenB" onPress={openScreenB} />
    </View>
  );
}
