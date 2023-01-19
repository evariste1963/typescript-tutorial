// //interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: 'evariste',
//     age: 50,
//     speak(text: string): void {
//         console.log(text);
//             },
//     spend(amount: number): number {
//                 console.log(`I spent, ${amount}`);
//                 return amount
//             }
  
// }

// console.log(`Hi, my name is ${me.name} and I am ${me.age} years old`);


// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
    
// }

// greetPerson(me)

import { Invoice} from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment} from "./classes/Payment.js";
import { HasFormatter} from "./interfaces/HasFormatter.js"

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('joshi', 'work on website', 250)
// docTwo = new Payment('mario', 'plumbing work', 200)


// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs);




// const invOne = new Invoice('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 200)

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
    
// })




const form = document.querySelector('.new-item-form') as HTMLFormElement

//console.log(form.children);


//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
   
    list.render(doc, type.value, 'start')
})