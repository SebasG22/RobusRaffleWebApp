import { Customer } from './../customers/customers.model';
import { CustomerService } from './../customers/customer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
})
export class AwardsComponent implements OnInit {

  /**Variable Ganador
   * type Customer
   * Variable creada para almacenar el valor del ganador del sorteo,
   * Se ha creado un modelo que hace referencia a las propiedades que debe tener un cliente.
   * @property Id
   * @property Name
   * @property Company
   * @property Position
   * @property Tel
   * @property Email 
   * Esto se realizo con una importancia del modelo realizado en typescript definiendo los valores
   * que puede llegar a tomar cada propiedad (string o number).
   * @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   * 
   */
  ganador: Customer = new Customer(0, "", "", "", 0, "");

  /**
   * Variable awards
   * @type {Array}
   * Es la encargada de manejar los premios que se van a sortear,
   * si la empresa desea puede agregar mas premios ya que en el template HTML estos van ser mostrados dinamicamente.
     Esta variable es utilizada en el template manejando un NGFOR para iterar sobre cada objecto,
     cada una de sus propiedades es asignada a un elemento en el template.
     @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  awards: any = [{ "image_route": "../../assets/carro.jpg", "image_desc": "Carro 0 Kms", "name": "Carro 0 Kms", "description": "Un espectacular carro 0 Kms para que viajes a donde quieras." },
  { "image_route": "../../assets/viaje.jpg", "image_desc": "Viaje a Europa", "name": "Viaje a Europa", "description": "Un espectacular viaje para 2 ganadors al viejo continente." },
  { "image_route": "../../assets/cena.jpg", "image_desc": "Cena", "name": "Carro 0 Kms", "description": "Un espectacular cena para 2 en el mejor restaurante de Bogotá." }];
  /**
   * @type {String}
   * Esta variable almacena el nombre del premio sorteado
   */
  award: String = "";

  /**
   * @type {String}
   * Esta variable va a mostar un texto personalizado, el cual se actualiza segun el sorteo
   * va avanzando.
   * El valor cuando el sorteo no ha llegado a su final es 'Escogiendo al Ganador'
   * @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  textoGanador: String = "";

  /**
   * @type {Boolean} 
   * Esta variable va a funcionar como referencia para saber si se  muestra el tablero del ganador.
   * Por defecto solo se muestra cuando se activa el evento click  en los botons sortear premio. 
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  mostrarGanador: Boolean = false;

  /**
   * @type {Boolean}
   * Esta variable se utiliza como referencia para deshabilitar los botones mientras existe un sorteo en curso.
      @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  deshabilitarBotones = false;
  /**
   * type Customer - Array. 
   * Esta variable es utiliza para guardar todos los clientes obtenidos desde la base de datos.
    @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  customers: Customer[];
  constructor(private customerService: CustomerService) {
  }

  /**
   * Method: ngOnInit
   * Apenas se llama a este componente, va a obtener todos los clientes desde la base de datos.
   * Para acceder a los clientes, se accede por el servicio expuesto de clientes que realiza
   * una peticion GET el cual responde con todos los usuarios existentes en la base de datos.
   *  Como una de las nuevas caracteristicas de angular soporte a observables, nos suscribimos a cualquier cambio.
   @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => {
        this.customers = customers;
      });
  }

  /**Metodo: ObtenerGanador
   * @param {string} award - premio selecciona a rifar
   *  Este metodo crea un numero aleatorio cada 1200 milisegundos, y cuando lo ha realizado
   * 25 (25*1.2 = 30 Segundos) veces limpiamos el timer que genera esta accion.
   * Al generador un numero aleatorio, el ganador es escogido basado en la posicion que ocupa en el Array.
   * El numero aleatorio es generado entre el rango de 0 y el total de cliente obtenidos.
   * La variable ganador va a obtener la informacion del cliente por medio de la posicion del array obtenida.
   @author Sebastian Guevara <rlxsebas@gmail.com>
    @version 1.0.0
    * Ultima Modificación:   07/26/2017 DD-MM-YYYY
   */
  obtenerUnGanador(award) {

    this.award = award;
    this.deshabilitarBotones = true;
    let times = 0;
    let getPerson = setInterval(() => {
      this.mostrarGanador = true;
      let randomNumber = Math.floor(Math.random() * this.customers.length - 1) + 1;
      let person = this.customers[randomNumber];
      this.ganador = person;
      this.textoGanador = 'Escogiendo al ganador';
      console.log(this.ganador);
      console.log(`La persona escogida es ${this.ganador.name}, con el valor random de ${randomNumber}`);
      times++;
      if (times == 25) {
        this.deshabilitarBotones = false;
        this.textoGanador = 'El Ganador del' + this.award + ' es ';
        //alert(`La persona escogida es ${person}, con el valor random de ${randomNumber}`);
        clearInterval(getPerson);
      }
    }, 1200);

  }

}
