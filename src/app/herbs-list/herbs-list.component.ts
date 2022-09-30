import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbs-list',
  templateUrl: './herbs-list.component.html',
  styleUrls: ['./herbs-list.component.scss']
})
export class HerbsListComponent implements OnInit {

  herb1 = {
    name: "Diente de león",
    germination: "Primavera",
    area: "Bosque Kamakura",
    image: "./assets/img/herb1.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
