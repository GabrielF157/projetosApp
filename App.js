import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const listaInicial = [{ nome: 'caderno', preco: 5 }, { nome: 'lapis', preco: 1 }];
  const [listaMateriais, definirListaMaterias] = useState(listaInicial);

  return (
    <View style={styles.container}>
      <Text>Ola, mundo!</Text>
      <FlatList
        data={listaMateriais}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        placeholder={'Inserir Novo Item (Nome: Preço)'}
        onSubmitEditing={({ nativeEvent }) => {
          const [nome, preco] = nativeEvent.text.split(':');
          definirListaMaterias(listaMateriais.concat({ nome, preco: parseFloat(preco) }));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    backgroundColor: 'pink',
  },
});

