import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  persona: String = 'No se ha iniciado el sorteo';
  award: String = "";
  mostrarGanador: Boolean = false;
  deshabilitarBotones = false;  
  constructor() { 
  }

  ngOnInit() {
  }
  /**
   * 
   */
  obtenerUnGanador(award) {
    this.award = award;
    this.deshabilitarBotones = true;
    let times = 0;
    let persons = ['Sebas', 'Ligia', 'Andrea', 'Stefany'];
    let getPerson = setInterval(() => {
      this.mostrarGanador = true;
      let randomNumber = Math.floor(Math.random() * 3) + 1;
      let person = persons[randomNumber];
      this.persona = person;
      
      console.log(`La persona escogida es ${person}, con el valor random de ${randomNumber}`);
      times++;
      if (times == 25) {
        this.deshabilitarBotones = false;
        //alert(`La persona escogida es ${person}, con el valor random de ${randomNumber}`);
        clearInterval(getPerson);
      }
    }, 1200);

  }

}
