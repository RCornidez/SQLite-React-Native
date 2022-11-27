select "Creating Tables";

create table if not exists classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

create table if not exists behaviors_classes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(class_id) REFERENCES classes(id)
);

create table if not exists subjects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

create table if not exists templates(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    environment VARCHAR(100),
    duration INTEGER NOT NULL,
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

create table if not exists template_behaviors(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    template_id INTEGER NOT NULL,
    behavior_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(template_id) REFERENCES templates(id),
    FOREIGN KEY(behavior_id) REFERENCES behaviors_classes(id)
);

create table if not exists sessions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    duration INTEGER NOT NULL,
    environment VARCHAR(100),
    comment VARCHAR(250),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

create table if not exists draft_sessions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY(session_id) REFERENCES sessions(id)
);

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


select "Setting Triggers";

CREATE TRIGGER IF NOT EXISTS update_classes AFTER UPDATE
on classes FOR EACH ROW
BEGIN
    UPDATE classes SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_behaviors_classes AFTER UPDATE
on behaviors_classes FOR EACH ROW
BEGIN
    UPDATE behaviors_classes SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_subjects AFTER UPDATE
on subjects FOR EACH ROW
BEGIN
    UPDATE subjects SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_templates AFTER UPDATE
on templates FOR EACH ROW
BEGIN
    UPDATE templates SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_template_behaviors AFTER UPDATE
on template_behaviors FOR EACH ROW
BEGIN
    UPDATE template_behaviors SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_sessions AFTER UPDATE
on sessions FOR EACH ROW
BEGIN
    UPDATE sessions SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_draft_sessions AFTER UPDATE
on draft_sessions FOR EACH ROW
BEGIN
    UPDATE draft_sessions SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_session_count_value AFTER UPDATE
on session_count_value FOR EACH ROW
BEGIN
    UPDATE update_session_count_value SET updated_at = datetime() where id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS update_session_duration_value AFTER UPDATE
on session_duration_value FOR EACH ROW
BEGIN
    UPDATE update_session_duration_value SET updated_at = datetime() where id = old.id;
END;