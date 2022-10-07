import { Component, OnInit } from '@angular/core';
import { Herb } from './Herb';

@Component({
  selector: 'app-herbs-list',
  templateUrl: './herbs-list.component.html',
  styleUrls: ['./herbs-list.component.scss']
})
export class HerbsListComponent implements OnInit {

  herbs: Herb[] = [ 
    {
      name: 'Diente de león',
      germination: 'Primavera',
      price: 30,
      stock: 5,
      image: './assets/img/herb1.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Caléndula',
      germination: 'Verano',
      price: 50,
      stock: 0,
      image: './assets/img/herb1.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Manzanilla',
      germination: 'Otoño',
      price: 50,
      stock: 60,
      image: './assets/img/herb1.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Aloe vera',
      germination: 'Invierno',
      price: 45,
      stock: 32,
      image: './assets/img/herb1.png',
      clearance: false,
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(herb: Herb): void {
    if (herb.quantity < herb.stock)
      herb.quantity++;
  }

  downQuantity(herb: Herb): void {
    if (herb.quantity > 0)
      herb.quantity--;
  }

  changeQuantity(event: any, herb: Herb): void { //NO ANDA Y NO SÉ POR QUÉ
    console.log(event.keyCode);
    if (event.key == '3') { //ASÍ ANDA PERO NO ES PRÁCTICO
      console.log("Entra al if");
      herb.quantity = 0;
    }
  }
  //keyCODE: del 48 al 57
}
