import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public nome:string="";
  public contadorClique:number=1;
  public urlImagem="https://angular.io/assets/images/logos/angular/angular.svg";
  adicionarClique(){
    this.contadorClique++;
  }
  zerarContador(){ 
   this.contadorClique=1; 
  }
  // KeyUp(event:any){
  //   this.nome=event.target.value; 
  // }
}
