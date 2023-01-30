import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { ComponenteTresComponent } from './componente-tres/componente-tres.component';
import { ComponenteCuatroComponent } from './componente-cuatro/componente-cuatro.component';
import { ComponenteCincoComponent } from './componente-cinco/componente-cinco.component';
import { ComponenteSeisComponent } from './componente-seis/componente-seis.component';
import { ComponenteSieteComponent } from './componente-siete/componente-siete.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    ComponenteTresComponent,
    ComponenteCuatroComponent,
    ComponenteCincoComponent,
    ComponenteSeisComponent,
    ComponenteSieteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
