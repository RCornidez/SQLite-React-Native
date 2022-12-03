const b = `insert into classes (type) values('count');`;
const c = `insert into classes (type) values('duration');`;

const d = `insert into behaviors_classes (class_id, title) values (1,'eating');`;
const e = `insert into behaviors_classes (class_id, title) values (2,'eating');`;
const f = `insert into behaviors_classes (class_id, title) values (2,'drinking');`;
const g = `insert into behaviors_classes (class_id, title) values (1,'drinking');`;

const h = `insert into subjects (first_name, last_name, comment) values ('Rodrigo','Cornidez','sample subject');`;
const i = `insert into subjects (first_name, last_name, comment) values ('Clark','Kent','sample subject');`;
const j = `insert into subjects (first_name, last_name, comment) values ('Peter','Parker','sample subject');`;

const k = `insert into templates (title, duration, environment, comment) values ('template #1', 3600, "indoors", "sample template");`;
const l = `insert into templates (title, duration, comment) values ('template #2', 7200, "sample template");`;
const m = `insert into templates (title, duration, comment) values ('template #3', 14400, "sample template");`;

const n = `insert into template_behaviors (template_id, behavior_id) values (1,1);`;
const o = `insert into template_behaviors (template_id, behavior_id) values (1,2);`;
const p = `insert into template_behaviors (template_id, behavior_id) values (1,3);`;
const q = `insert into template_behaviors (template_id, behavior_id) values (1,4);`;
const r = `insert into template_behaviors (template_id, behavior_id) values (2,1);`;
const s = `insert into template_behaviors (template_id, behavior_id) values (2,2);`;
const t = `insert into template_behaviors (template_id, behavior_id) values (3,3);`;
const u = `insert into template_behaviors (template_id, behavior_id) values (1,4);`;

const v = `insert into sessions (title, duration, environment, comment) values ('session #1', 14400, "indoors", "sample session");`;
const w = `insert into sessions (title, duration, environment, comment) values ('session #2', 3600, "outdoors", "sample session");`;
const x = `insert into sessions (title, duration, comment) values ('session #3', 7200, "sample session");`;

const y = `insert into draft_sessions (session_id) values (1);`;

const z = `insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (1,1,1,13);`;
const aa = `insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (1,1,4,4);`;
const ab = `insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (2,2,1,7);`;
const ac = `insert into session_count_value (session_id, subject_id, behavior_id, count_value) values (2,2,4,9);`;

const ad = `insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (1,1,2,datetime(),datetime());`;
const ae = `insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (1,1,3,datetime(),datetime());`;
const af = `insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (3,3,2,datetime(),datetime());`;
const ag = `insert into session_duration_value (session_id, subject_id, behavior_id, start_time, stop_time) values (3,3,3,datetime(),datetime());`;

export const seed_tables = [b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,q,y,z,aa,ab,ac,ad,ae,af,ag];