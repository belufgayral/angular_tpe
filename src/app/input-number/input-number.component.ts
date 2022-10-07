import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Herb } from '../herbs-list/Herb';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se alcanzó el máximo de stock");
    }
  } 

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: any): void { //NO ANDA Y NO SÉ POR QUÉ
    console.log(event.keyCode);
    if (event.key == '3') { //ASÍ ANDA PERO NO ES PRÁCTICO
      console.log("Entra al if");
      this.quantity = 0;
    }
  }
  //keyCODE: del 48 al 57
}
