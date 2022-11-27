select "Inserting sample data into tables";

insert into classes (type) values('count');
insert into classes (type) values('duration');

insert into behaviors_classes (class_id, title) values (1,'eating');
insert into behaviors_classes (class_id, title) values (2,'eating');
insert into behaviors_classes (class_id, title) values (2,'drinking');
insert into behaviors_classes (class_id, title) values (1,'drinking');

insert into subjects (first_name, last_name, comment) values ('Rodrigo','Cornidez','sample subject');
insert into subjects (first_name, last_name, comment) values ('Clark','Kent','sample subject');
insert into subjects (first_name, last_name, comment) values ('Peter','Parker','sample subject');

insert into templates (title, duration, environment, comment) values ('template #1', 3600, "indoors", "sample template");
insert into templates (title, duration, comment) values ('template #2', 7200, "sample template");
insert into templates (title, duration, comment) values ('template #3', 14400, "sample template");

insert into template_behaviors (template_id, behavior_id) values (1,1);
insert into template_behaviors (template_id, behavior_id) values (1,2);
insert into template_behaviors (template_id, behavior_id) values (1,3);
insert into template_behaviors (template_id, behavior_id) values (1,4);
insert into template_behaviors (template_id, behavior_id) values (2,1);
insert into template_behaviors (template_id, behavior_id) values (2,2);
insert into template_behaviors (template_id, behavior_id) values (3,3);
insert into template_behaviors (template_id, behavior_id) values (1,4);

insert into sessions (title, duration, environment, comment) values ('session #1', 14400, "indoors", "sample session");
insert into sessions (title, duration, environment, comment) values ('session #2', 3600, "outdoors", "sample session");
insert into sessions (title, duration, comment) values ('session #3', 7200, "sample session");

insert into draft_sessions (session_id) values (1);

insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (1,1,1,13);
insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (1,1,4,4);
insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (2,2,1,7);
insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (2,2,4,9);

insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (1,1,2,datetime(),datetime());
insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (1,1,3,datetime(),datetime());
insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (3,3,2,datetime(),datetime());
insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (3,3,3,datetime(),datetime());

