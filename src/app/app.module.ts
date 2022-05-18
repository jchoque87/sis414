import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParedesComponent } from './paredes/paredes.component';
import { FlooteComponent } from './paredes/sub/floote/floote.component';
import { Parte1Component } from './paredes/sub/parte1/parte1.component';
import { Parte2Component } from './paredes/sub/parte2/parte2.component';
import { Parte3Component } from './paredes/sub/parte3/parte3.component';
import { Parte4Component } from './paredes/sub/parte4/parte4.component';
import { Parte5Component } from './paredes/sub/parte5/parte5.component';
import { Parte6Component } from './paredes/sub/parte6/parte6.component';
import { Parte7Component } from './paredes/sub/parte7/parte7.component';
import { PuertasComponent } from './puertas/puertas.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatGridListModule } from '@angular/material/grid-list';
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
    FlooteComponent,
    Parte1Component,
    Parte2Component,
    Parte3Component,
    Parte4Component,
    Parte5Component,
    Parte6Component,
    Parte7Component,
    ContainerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCommonModule,
    MatToolbarModule,
    MatProgressBarModule,
    TextFieldModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
