//Test Database
import * as SQLite from 'expo-sqlite'

//open database connection
function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("database_file.db");
  return db;
}

export const db = openDatabase();

