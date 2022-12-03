//queries.js

/*
Here we define all the queries used to create
I recommend you import * as query from "./queries.js"
this will allow you to use the following syntax to call your code.
 query.create_behaviors_table
 query.create_classes_table
 query.create_subjects_table

*/

export var create_classes = `
create table if not exists classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
`;

export var create_behaviors = `
create table if not exists behaviors_classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(class_id) REFERENCES classes(id)
);
`;

export var create_subjects = `
create table if not exists subjects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
`;

export var create_templates = `
create table if not exists templates(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    environment VARCHAR(100),
    duration INTEGER NOT NULL,
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
`;

export var create_template_behaviors = `
create table if not exists template_behaviors(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    template_id INTEGER NOT NULL,
    behavior_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(template_id) REFERENCES templates(id),
    FOREIGN KEY(behavior_id) REFERENCES behaviors_classes(id)
);
`;

export var create_sessions = `
create table if not exists sessions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    duration INTEGER NOT NULL,
    environment VARCHAR(100),
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
`;

export var create_draft_sessions = `
create table if not exists draft_sessions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
);
`;

export var create_session_count_value = `
create table if not exists session_count_value(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    draft_id INTEGER,
    session_id INTEGER NOT NULL,
    subject_id INTEGER NOT NULL,
    behavior_id INTEGER NOT NULL,
    count_value INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(draft_id) REFERENCES draft_sessions(id),
    FOREIGN KEY(session_id) REFERENCES sessions(id),
    FOREIGN KEY(subject_id) REFERENCES subjects(id),
    FOREIGN KEY(behavior_id) REFERENCES behaviors_classes(id)
);
`;

export var create_session_duration_value = `
create table if not exists session_duration_value(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    draft_id INTEGER,
    session_id INTEGER NOT NULL,
    subject_id INTEGER NOT NULL,
    behavior_id INTEGER NOT NULL,
    start_time DATETIME,
    stop_time DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(draft_id) REFERENCES draft_sessions(id),
    FOREIGN KEY(session_id) REFERENCES sessions(id),
    FOREIGN KEY(subject_id) REFERENCES subjects(id),
    FOREIGN KEY(behavior_id) REFERENCES behaviors_classes(id)
);
`;

export const create_tables = [
    create_classes,
    create_behaviors,
    create_subjects,
    create_templates,
    create_template_behaviors,
    create_sessions,
    create_draft_sessions,
    create_session_count_value,
    create_session_duration_value,
  ];