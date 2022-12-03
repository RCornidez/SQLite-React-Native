import { db } from "./database";

/*Note:
    Need to set up input sterilization after we get it functioning
    Need to verify rollback of transaction on error (Look at comment viktor-podzigun commented on Jun 12, 2020) - https://github.com/expo/expo/issues/3726
*/

//create individual table
export async function createTable(table_name, columns) {
    // table_name is a string
    // columns is a nested array with name and a type - [[column_one, type],[column_two, type]]
    
    //convert array to SQLite syntax
    const column_list = []
    columns.forEach(e => {column_list.push(`${e[0]} ${e[1]} NOT NULL,`)});
    
    //create query statement 
    const statement = `
    create table if not exists ${table_name}(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ${column_list.join('')}
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
    );
    `;
    console.log(statement)
    //run statement in SQL transaction
    db.transaction((tx) => {
        tx.executeSql(
        statement,
        [],
        null,
        (error) => {
            console.error(`error: ${error}`)
            return true // this should roll back transaction and prevent changes on error
        }
        );
      },
      (error) => {console.error(`error: ${error}`)},
      (success) => {console.log(success)}
      );
};

//create all tables using pre-made query strings
export async function setupTables(tables) {
    try {
        console.log('setting up tables')
        await tables.forEach(statement => {
            db.transaction((tx) => {
                tx.executeSql(
                statement,
                [],
                null,
                (error) => {
                    console.error(`error: ${error}`)
                    return true // this should roll back transaction and prevent changes on error
                }
                );
            },
            (error) => {console.error(`error: ${error}`)},
            () => {console.log('success')}
            );
        });
        
    } catch (error) {
        console.error(`error: ${error}`)
    };
    
};

//create triggers using list of table names
export async function setupTriggers() {
    const table_names = [
        'classes',
        'behaviors_classes',
        'subjects',
        'templates',
        'template_behaviors',
        'sessions',
        'draft_sessions',
        'session_count_value',
        'session_duration_value'
    ]

    console.log('creating triggers')
    table_names.forEach(async (table) => {
        statement = `
        CREATE TRIGGER IF NOT EXISTS update_${table} AFTER UPDATE
        on ${table} FOR EACH ROW
        BEGIN
            UPDATE ${table} SET updated_at = datetime() where id = old.id;
        END;
        `;
        db.transaction((tx) => {
            tx.executeSql(
            statement,
            [],
            null,
            (error) => {
                console.error(`error: ${error}`)
                return true // this should roll back transaction and prevent changes on error
            }
            );
        },
        (error) => {console.error(`error: ${error}`)},
        () => {console.log('success')}
        );
    })
};

//check tables are available - NOT WORKING
// Notes: Statement works in normal SQLite but not this expo version might have to do with WebSQL
export async function checkTables() {
    try {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT name FROM sqlite_schema WHERE type='table' ORDER BY name;`,
                [],
                (_, { rows }) => {console.log(rows)},
                (_, error) => {console.error(`error: ${error}`)}
                );
            },
            (error) => {console.error(`error: ${error}`)},
            (success) => {console.log('success')}
            );
    } catch (error) {
        console.error(`error: ${error}`)
    };
    
};


//Seed sample data into tables
export async function seedTables(queries) {
    try {
        console.log('seeding tables')
        await queries.forEach(statement => {
            db.transaction((tx) => {
                tx.executeSql(
                statement,
                [],
                null,
                (error) => {
                    console.error(`error: ${error}`)
                    return true // this should roll back transaction and prevent changes on error
                }
                );
            },
            (error) => {console.error(`error: ${error}`)},
            () => {console.log('success')}
            );
        });
        
    } catch (error) {
        console.error(`error: ${error}`)
    };
    
};

//CRUD Functionality for use Reducer

//grab all data from a table order it by the updated_at column
export async function grabTable(table_name) {
    const statement = `SELECT * FROM ${table_name} ORDER BY updated_at ASC;`;
    const test = db.transaction((tx) => {
        tx.executeSql(
        statement,[],
        (_, resultSet) => {
            console.log(resultSet.rows.length)
            return resultSet.rows.length
        },
        (_, error) => {console.error(`error: ${error}`)}
        );
      },
      (_, error) => {console.error(`error: ${error}`)},
      (success) => {
        console.log(`successfully grabbed ${table_name}, ${test}`)}
      );
};

//grab all data from a table based on id
export async function grabId(table_name,id) {
    const statement = `SELECT * FROM ${table_name} where id = ${id} ORDER BY updated_at ASC;`;
    db.transaction((tx) => {
        tx.executeSql(
        statement,[],
        (_, { rows }) => {console.log(rows)},
        (_, error) => {console.error(`error: ${error}`)}
        );
      },
      (_, error) => {console.error(`error: ${error}`)},
      () => {console.log(`successfully grabbed ${id} from ${table_name}`)}
      );
};

//grab all data from a table based on string
export async function grabString(table_name, column, _string) {
    const statement = `SELECT * FROM ${table_name} WHERE ${column} LIKE '%${_string}%';`;
    db.transaction((tx) => {
        tx.executeSql(
        statement,[],
        (_, { rows }) => {console.log(rows)},
        (_, error) => {console.error(`error: ${error}`)}
        );
      },
      (_, error) => {console.error(`error: ${error}`)},
      () => {console.log(`successfully grabbed ${_string} from ${table_name}`)}
      );
};


//May need a custom grab function to handle joining bridge tables


//check for count and duration classes
export async function checkClasses(){
    const count = grabString('classes','type','count');
    const duration = grabString('classes','type','duration');

};

//create count and duration classes
export async function setupClasses(){
    const statements = [`insert into classes (type) values('count');`, `insert into classes (type) values('duration');`];
    try {
        console.log('setting up classes')
        await statements.forEach(statement => {
            db.transaction((tx) => {
                tx.executeSql(
                statement,
                [],
                null,
                (error) => {
                    console.error(`error: ${error}`)
                    return true // this should roll back transaction and prevent changes on error
                }
                );
            },
            (error) => {console.error(`error: ${error}`)},
            () => {console.log('success')}
            );
        });
    } catch (error) {
        console.error(`error: ${error}`)
    };
};




//select * from table where id = x

//insert into table (...columns) values(...values);

/*
update table
set column_1 = new_value_1,
    column_2 = new_value_2
where
    id = x;
*/