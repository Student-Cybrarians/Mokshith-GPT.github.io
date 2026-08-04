import { createHash, randomBytes } from 'crypto';
export const uuid=()=>crypto.randomUUID(); export const now=()=>new Date().toISOString();
export function randomToken(bytes=32){ return randomBytes(bytes).toString('base64url'); }
export function sha256(value:string){ return createHash('sha256').update(value).digest('hex'); }
export function addDays(days:number){ const d=new Date(); d.setUTCDate(d.getUTCDate()+days); return d.toISOString(); }
