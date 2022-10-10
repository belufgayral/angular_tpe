import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HerbCartService } from '../herb-cart.service';
import { Herb } from '../herbs-list/Herb';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss']
})
export class CarritoComprasComponent implements OnInit {

  cartList$!: Observable<Herb[]>;

  constructor(private cart: HerbCartService) {
    this.cartList$ = cart.herbList.asObservable();
   }

  ngOnInit(): void {
  }

  
}
