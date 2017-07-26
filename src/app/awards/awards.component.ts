import { Customer } from './../customers/customers.model';
import { CustomerService } from './../customers/customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent implements OnInit {

  persona: Customer;
  ganador: Customer = new Customer(0,"","","",0,"");
  awards: any = [{"image_route":"../../assets/carro.jpg", "image_desc":"Carro 0 Kms" , "name":"Carro 0 Kms","description":"Un espectacular carro 0 Kms para que viajes a donde quieras."},
                  {"image_route":"../../assets/viaje.jpg", "image_desc":"Viaje a Europa" , "name":"Viaje a Europa","description":"Un espectacular viaje para 2 ganadors al viejo continente."},
                  {"image_route":"../../assets/cena.jpg", "image_desc":"Cena" , "name":"Carro 0 Kms","description":"Un espectacular cena para 2 en el mejor restaurante de Bogotá."}];
  award: String = "";
  textoGanador: String = "" ;
  mostrarGanador: Boolean = false;
  deshabilitarBotones = false;
  customers: Customer[];  
  constructor(private customerService: CustomerService) { 
  }

  ngOnInit() {
    this.customerService.getCustomers()
            .subscribe((customers: Customer[]) => {
              this.customers = customers;
              //console.log(this.customers);
            });

  }
  /**
   * 
   */
  obtenerUnGanador(award) {
    
    this.award = award;
    this.deshabilitarBotones = true;

    let times = 0;
    
    let getPerson = setInterval(() => {
      this.mostrarGanador = true;
      let randomNumber = Math.floor(Math.random() * this.customers.length -1) + 1;
      let person = this.customers[randomNumber];
      this.ganador = person;
      this.textoGanador = 'Escogiendo al ganador';
      console.log(this.ganador);
      console.log(`La persona escogida es ${this.ganador.name}, con el valor random de ${randomNumber}`);
      times++;
      if (times == 25) {
        this.deshabilitarBotones = false;
        this.textoGanador = 'El Ganador es ';
        //alert(`La persona escogida es ${person}, con el valor random de ${randomNumber}`);
        clearInterval(getPerson);
      }
    }, 1200);

  }

}
