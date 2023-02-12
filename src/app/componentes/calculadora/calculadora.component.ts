import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  expresion: string = '0'

agregarExpresion(valor:string){
  if(valor === "="){
    console.log("calculando");
    this.expresion= eval(this.expresion);
  }
  else{
    if(this.expresion === "0"){
      this.expresion="";
    }
    this.expresion += valor;
  }
}  
limpiarPantalla(){
  this.expresion = "0"
}

}
