import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//import global state manager
import { Context, database, reducer } from './database_handler/context';

//import sample child component
import { Test } from './components/test_component';

//import database connection
import { db } from './database_handler/database';
import * as setup from './database_handler/setup_queries';
import { seed_tables } from './database_handler/seed_queries';
import { setupTables, grabString, setupTriggers, grabTable } from './database_handler/reusable_query_functions';

//check if all tables are present
async function checkDatabase() {
  //add check if tables exist then pass the setup

  //Creates tables and triggers if they don't already exist
  await setupTables(setup.create_tables);
  await setupTriggers();

  


  //check if classes table has count and duration - else creates them
  //await grabString('classes','type','count');
  //await grabString('classes','type','duration');
  
  //Seeds sample data into the tables - Uncomment and reload app to use
  //await seed_tables(seed_tables);
};


export default function App() {
  //configure global state and actions to be accessible
  const [state, dispatch] = React.useReducer(reducer, database);
  
  const test = checkDatabase();

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
