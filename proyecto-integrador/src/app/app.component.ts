import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-integrador';
  show= false;
  products = [
    {"name": "Azucar", "cost": "800"},
    {"name": "Leche", "cost": "500"},
    {"name": "Yerba", "cost": "900"},
    {"name": "Pan", "cost": "650"},
  ]

  showList():void{
    this.show = true;

  }
  hiddeList():void{
    this.show=false;

  }



}
