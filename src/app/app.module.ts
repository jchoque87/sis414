import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParedesComponent } from './paredes/paredes.component';
import { PuertasComponent } from './puertas/puertas.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './sub/header/header.component';
import { ContainerComponent } from './sub/container/container.component';
import { FooterComponent } from './sub/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParedesComponent,
    PuertasComponent,
    NofoundComponent,
    MainComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
