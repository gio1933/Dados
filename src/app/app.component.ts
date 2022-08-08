import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = '../assets/img/dice1.png';
  dadoDerecha = '../assets/img/dice4.png';
  numero1!: number;
  numero2!: number;

  tirarDados(): void{
    this.numero1 = Math.random();
    this.numero2 = Math.random();
    console.log(this.numero1);
    console.log(this.numero2);
  }
}
