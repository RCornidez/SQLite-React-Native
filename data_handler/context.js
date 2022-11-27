//context.js
import React from "react";

//define and export context to create Context.Provider to wrap App
export const Context = React.createContext();



//define initial global state to be queried from the database
export var database = {
    name: "Rodrigo", 
    last: "Cornidez",
    tables: {
        classes: [{id: 1, type: "count"},{id: 2, type: "duration"}],
        behavior_classes: [],
        templates: [],
        subjects: [],
        sessions: [],
        draft_sessions: [],
    },

} //grab the initial state from db

// reducer handles the logic for updating the database and returning updates to state
//Consider this something similar to API endpoints
export function reducer(state, action) {
	switch (action.type) {
        case 'test':
            return {...state, name: action.payload };
        case 'test1':
            return {...state, last: action.payload };
		case 'increment':
			return state + 21;
		case 'decrement':
			return state + 32;
		default:
			throw new Error(`Unknown action type: ${action.type}}`);
	}
}