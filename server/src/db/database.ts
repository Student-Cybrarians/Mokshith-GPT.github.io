import Database from 'better-sqlite3'; import { migration001 } from './schema.js';
export type Db = Database.Database;
export function openDatabase(url=':memory:'): Db { const file=url.startsWith('file:')?url.slice(5):url; const db=new Database(file); db.pragma('foreign_keys = ON'); db.exec(migration001); return db; }
