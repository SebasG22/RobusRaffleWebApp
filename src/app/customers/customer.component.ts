import { Customer } from './customers.model';
import { CustomerService } from './customer.service';
import { Component } from '@angular/core';
import { FormControl }            from '@angular/forms';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']

})
export class CustomerComponent  {

  constructor(private customerService: CustomerService) { 
  }


  //Variable para almacenar un valor booleano la cual sera llamada en el template html para decidir si muestra el panel de agregar cliente
   mostrarFormularioAgregarCliente: Boolean =  true;
   // Variable para alamcenar un valor booleano la cual sera llamada en el template html para decidir si muestra el panel de eliminar cliente
   mostrarFormularioEliminarCliente: Boolean = true;

   /**
    * Method: mostrarPanelNuevoCliente
    Cambia los valores de las variables mostrarFormularioAgregarCliente hacia false y mostrarFormularioEliminarCliente hacia true.
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
    */
   mostrarPanelNuevoCliente(){
     this.mostrarFormularioAgregarCliente = false;
     this.mostrarFormularioEliminarCliente = true;
   } 

   /**
    * Method: mostrarPanelEliminarCliente
    Cambia los valores de las variables mostrarFormularioAgregarCliente hacia true y mostrarFormularioEliminarCliente hacia false.
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
    */
   mostrarPanelEliminarCliente(){
     this.mostrarFormularioAgregarCliente = true;
     this.mostrarFormularioEliminarCliente = false;
   }

   /**
    * Method: cerrarPanelClientes()
    Cambia los valores de las variables mostrarFormularioAgregarCliente hacia true y mostrarFormularioEliminarCliente hacia true.
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
    */
   cerrarPanelClientes(){
     this.mostrarFormularioAgregarCliente = true;
     this.mostrarFormularioEliminarCliente = true;
   }
   /**
    * Method: AddCustomerSubmit
    * @param customerForm 
    Recibe el formulario traido desde el template HTML, y parse los valores para su uso.
    */ 
   addCustomerSubmit(customerForm: NgForm){
     console.log(customerForm.value);
    let customer = new Customer(customerForm.value.id,customerForm.value.name,customerForm.value.company, customerForm.value.position, customerForm.value.tel,
      customerForm.value.email);
      customerForm.resetForm();
    this.customerService.addCustomer(customer).
    subscribe(data => {
        console.log(data);
        alert("Cliente agregado correctamente");
    }); 
  }

  removeCustomerSubmit(customerForm: NgForm){
    console.log(customerForm.value);
    let customerId = customerForm.value.id; 
    customerForm.resetForm();
    this.customerService.deleteCustomer(customerId).subscribe(data => {
        console.log(data);
        alert("El cliente se ha eliminado correctamente");
    }); 
  } 
}
