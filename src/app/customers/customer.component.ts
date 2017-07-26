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
    Paso seguido a que los valores del formulario son obtenidos, se crea un nuevo cliente basado
    en el modelo de tipo de datos Customer.
    Se suscribe al servicio addCostumer que basicamente genera un observable al generar una peticion
    POST para almacenarlo en la base de datos.
    Si no ocurre nigun error en la transaccion muestra un alerta de dialogo que dice cliente agregado correctamente.
    Este metodo ademas limpia el formulario despues de generar el cliente.
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
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

/**
 * Method: removeCustomerSubmit
 * @param customerForm 
 * Este metodo recibe el formulario de eliminar usuario del template HTML y parsea los valores.
 * Paso seguido d que los valores son obtenidos, se suscribe al servicio deleteCustomer el cual realiza
 * una peticion delete para eliminar el usuario en la base de datos.
 * Apenas se reciben los datos, se limpia el formulario.
 * Cuando se elimine el usuario correctamente el usuario, se muestra una alerta de dialogoque confirma que
 * el cliente fue eliminado correctamente.
 */
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
