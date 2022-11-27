# Template for SQLite + local API using useContext() and useReducer()

<b>Accessing sqlite db from file</b>
```
sqlite3 SQLite.db
```

<b>SQLite.db is blank you will need to set up and seed the tables with the sample data</b>
```
sqlite3 SQLite.db < setup_tables.sql
sqlite3 SQLite.db < seed_tables.sql
```

<b>drop the tables to clear the db</b>
```
sqlite3 SQLite.db < drop_tables.sql
```

<b>Within the sqlite3 prompt</b>

<b>list all tables in db</b>
```
SELECT name FROM sqlite_schema WHERE type='table' ORDER BY name;
```

<b>list all triggers</b>
```
SELECT name FROM sqlite_master WHERE type = 'trigger';
```

<b>drop trigger</b>
```
DROP TRIGGER trigger_name;
```

<b>TODO:</b>
1. set up database.js to connect to the SQLite db - test a transaction/query
2. import query of each table into context.js to be used in state
3. configure reducer() to use transactions/queries and onSuccess return value to state.
4. create a how-to start the app section in README.md



