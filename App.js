import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//import global state manager
import { Context, database, reducer } from './data_handler/context';

//import sample child component
import { Test } from './components/test_component';


export default function App() {
  //configure global state and actions to be accessible
  const [state, dispatch] = React.useReducer(reducer, database); 

  return (
		<Context.Provider value={[state, dispatch]}>
    <View style={styles.container}>
      <Text>Template for SQLite + API</Text>
      <Text>{state.name}</Text>
      <Text>{state.last}</Text>
      <Text>Try modifying the input fields below:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => dispatch({type: 'test', payload: text})}
        value={state.name}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => dispatch({type: 'test1', payload: text})}
        value={state.last}
      />
      <Text>Example of child component using global state:</Text>
      <Test/>
      <StatusBar style="auto" />
    </View>
		</Context.Provider>
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
