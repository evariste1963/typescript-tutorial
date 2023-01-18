import { HasFormatter } from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter{
 
 //cpnstructor
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
   //methhod
    format(){
return `${this.client} owes £${this.amount} for ${this.details}`
    }
}