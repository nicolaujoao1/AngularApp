import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique:number=1;
  public urlImagem="https://content.paodeacucar.com/wp-content/uploads/2017/01/frutas-sazonais-1500x1000.jpg";
  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador(){ 
   this.contadorClique=1; 
  }
}
