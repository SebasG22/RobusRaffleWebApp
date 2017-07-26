import { Customer } from './customers.model';
import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()


export class CustomerService {
    private customers: Customer[] = [];

    constructor(private http: Http) { }

    addCustomer(customer: Customer) {
        const body = JSON.stringify(customer);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://robusraffleapp.herokuapp.com/clientes/registrarCliente', body, { headers: headers })
            .map((response: Response) => {
                console.log("response",response.json() );
                const result = response.json();
                const newCustomer = new Customer(result.obj.id,result.obj.name, result.obj.company, result.obj.position ,result.obj.tel,result.obj.email);
                this.customers.push(newCustomer);
                return newCustomer;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });

    }
    getCustomers() {
        return this.http.get("https://robusraffleapp.herokuapp.com/clientes/obtenerClientes")
            .map((response: Response) => {
                const customersRetrieved = response.json().clientes;
                let transformedCustomers: Customer[] = [];
                for (let customerInformation of customersRetrieved) {
                    transformedCustomers.push(new Customer(customerInformation.id,customerInformation.name,
                    customerInformation.company, customerInformation.position, customerInformation.tel, customerInformation.email));
                }
                this.customers = transformedCustomers;
                return this.customers;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
    
    deleteCustomer(id: Number) {
        let customerFiltered = this.customers.filter((customer)=>{
            if(customer.id == id){
                return customer;
            }
        });
        
        return this.http.delete('https://robusraffleapp.herokuapp.com/clientes/' + id )
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }
}