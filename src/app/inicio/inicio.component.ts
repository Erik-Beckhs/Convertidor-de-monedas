import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  cantidad:number=1
  tengo:string = 'BS'
  quiero:string = 'USD'
  moneda:any[]=[
    {name:'USD', valor:'Dolar Americano'},
    {name:'EUR', valor:'Euro'},
    {name:'BS', valor:'Boliviano'},
  ]
  total:number=0


  constructor() { }

  ngOnInit(): void {
    this.convertir();
  }

  convertir(){
    switch(this.tengo){
      case 'USD':
        if(this.quiero == 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero == 'EUR'){
          this.total = this.cantidad * 0.89;
        }
        if(this.quiero == 'BS'){
          this.total = this.cantidad * 6.98;
        }
        break;
      case 'EUR':
        if(this.quiero == 'USD'){
          this.total = this.cantidad * 1.13;
        }
        if(this.quiero == 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero == 'BS'){
          this.total = this.cantidad * 7.83;
        }
        break;
      case 'BS':
        if(this.quiero == 'USD'){
          this.total = this.cantidad * 0.14;
        }
        if(this.quiero == 'EUR'){
          this.total = this.cantidad * 0.13;
        }
        if(this.quiero == 'BS'){
          this.total = this.cantidad;
        }
        break;
    }
    this.total =+ this.total.toFixed(2)
  }

}
