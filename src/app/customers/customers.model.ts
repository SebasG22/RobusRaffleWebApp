export class Customer {
    id: number;
    name: string;
    company: string;
    position: string;
    tel: number;
    email: string;
    
    constructor(id: number, name: string, company: string, position: string,  tel: number, email: string ){
        this.id = id;
        this.name = name;
        this.position = position;
        this.company = company;
        this.tel = tel;
        this.email = email;
    }
}