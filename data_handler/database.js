//database.js
//imports
import SQLite from 'react-native-sqlite-storage';

global.db = SQLite.openDatabase(
    {
        name: 'SQLite', 
        location: 'default', 
        createFromLocation: '~SQLite.db'
    },
    () => {},
    error => {console.log(error);
    }
);


//Define database


//Pass data to useContext by export


//Create actions for useContext