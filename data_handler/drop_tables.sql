SELECT "Dropping bridge tables";
DROP TABLE IF EXISTS behaviors_classes;
DROP TABLE IF EXISTS template_behaviors;
DROP TABLE IF EXISTS draft_sessions;
DROP TABLE IF EXISTS session_count_value;
DROP TABLE IF EXISTS session_duration_value;

SELECT "Dropping remaining tables";
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS templates;
DROP TABLE IF EXISTS sessions;


SELECT "Dropping triggers";
DROP TRIGGER IF EXISTS update_classes;
DROP TRIGGER IF EXISTS update_behaviors_classes;
DROP TRIGGER IF EXISTS update_subjects;
DROP TRIGGER IF EXISTS update_templates;
DROP TRIGGER IF EXISTS update_template_behaviors;
DROP TRIGGER IF EXISTS update_sessions;
DROP TRIGGER IF EXISTS update_draft_sessions;
DROP TRIGGER IF EXISTS update_session_count_value;
DROP TRIGGER IF EXISTS update_session_duration_value;