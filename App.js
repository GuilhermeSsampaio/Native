import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
