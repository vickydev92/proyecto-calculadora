import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { PantallaComponent } from './componentes/pantalla/pantalla.component';
import { TecladoComponent } from './componentes/teclado/teclado.component';
import { BotonComponent } from './componentes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PantallaComponent,
    TecladoComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
