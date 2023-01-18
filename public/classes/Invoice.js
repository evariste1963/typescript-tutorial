export class Invoice {
    //cpnstructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //methhod
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
