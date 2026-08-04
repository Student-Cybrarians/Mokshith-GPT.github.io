const SECRET=/authorization|cookie|token|secret|code|api[_-]?key/i;
export type LogLevel='info'|'warn'|'error';
export function redact(value: unknown): unknown { if(Array.isArray(value)) return value.map(redact); if(value&&typeof value==='object'){ return Object.fromEntries(Object.entries(value as Record<string,unknown>).map(([k,v])=>[k,SECRET.test(k)?'[REDACTED]':redact(v)])); } return value; }
export class Logger { constructor(private base: Record<string,unknown>={}){} child(fields:Record<string,unknown>){return new Logger({...this.base,...fields});} log(level:LogLevel,message:string,fields:Record<string,unknown>={}){ console.log(JSON.stringify(redact({level,message,...this.base,...fields,ts:new Date().toISOString()}))); } info(m:string,f?:Record<string,unknown>){this.log('info',m,f);} warn(m:string,f?:Record<string,unknown>){this.log('warn',m,f);} error(m:string,f?:Record<string,unknown>){this.log('error',m,f);} }
export const logger=new Logger();
