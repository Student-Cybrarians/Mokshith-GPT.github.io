export class HttpError extends Error { constructor(public status:number, public code:string, message:string){super(message);} }
export const unauthorized=()=>new HttpError(401,'UNAUTHENTICATED','Authentication required');
export const forbidden=(m='Forbidden')=>new HttpError(403,'FORBIDDEN',m);
