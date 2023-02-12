import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
@Input() valor:string= "";
@Output() onClick= new EventEmitter<string>();

handlerClick(){
 this.onClick.emit(this.valor);
}

soyOperador(valor:string){
  return valor==="+" || valor==="-" || valor==="="||valor==="/"||valor==="x"||valor==="("||valor===")"
}
soyClear(valor:string){
  return valor==="C"
}
}

