import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

interface ParamsProps {
  name: string;
}
export function ScreenB() {
  const route = useRoute();
  const navigation = useNavigation();

  const { name } = route.params as ParamsProps;
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', backgroundColor: 'blue' }}
    >
      <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20 }}>
        {name}
      </Text>
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
