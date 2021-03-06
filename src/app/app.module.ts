import { Parte8Component } from './paredes/sub/parte8/parte8.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ParedesComponent } from './paredes/paredes.component';
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

import { AsideComponent } from './sub/aside/aside.component';
import { MueblesDormitorioComponent } from './muebles-dormitorio/muebles-dormitorio.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LucesSemidirectasComponent } from './luces-semidirectas/luces-semidirectas.component';
import { LinksComponent } from './sub/links/links.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { PisosComponent } from './pisos/pisos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ContactoComponent } from './contacto/contacto.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';

import { TableComponent } from './table/table.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PisosAdminComponent } from './admin/pisos-admin/pisos-admin.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { MueblesDormitorioAdminComponent } from './admin/muebles-dormitorio-admin/muebles-dormitorio-admin.component';
import { ParedesAdminComponent } from './admin/paredes-admin/paredes-admin.component';
import { LucesemidirectasAdminComponent } from './admin/lucesemidirectas-admin/lucesemidirectas-admin.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';

import { DialogOverviewExampleDialog1 } from './admin/paredes-admin/paredes-admin.component';
import { DialogOverviewExampleDialogAdd1 } from './admin/paredes-admin/paredes-admin.component';
import { MatStepperModule } from '@angular/material/stepper';

import { DialogOverviewExampleDialog} from './admin/lucesemidirectas-admin/lucesemidirectas-admin.component';
import { DialogOverviewExampleDialogAdd } from './admin/lucesemidirectas-admin/lucesemidirectas-admin.component';
import { DialogOverviewExampleDialog2} from './admin/muebles-dormitorio-admin/muebles-dormitorio-admin.component';
import { DialogOverviewExampleDialogAdd2 } from './admin/muebles-dormitorio-admin/muebles-dormitorio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParedesComponent,
    PuertasComponent,
    NofoundComponent,
    MainComponent,
    AsideComponent,
    MueblesDormitorioComponent,
    LucesSemidirectasComponent,
    LinksComponent,
    HeaderComponent,
    Parte2Component,
    Parte3Component,
    Parte4Component,
    Parte5Component,
    Parte6Component,
    Parte7Component,
    ContainerComponent,
    FooterComponent,
    PisosComponent,
    ContactoComponent,
    Parte8Component,
    LoginComponent,
    DashboardComponent,
    PisosAdminComponent,
    MainAdminComponent,
    MueblesDormitorioAdminComponent,
    ParedesAdminComponent,
    LucesemidirectasAdminComponent,
    TableComponent,
    IndexAdminComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialogAdd,
    DialogOverviewExampleDialogAdd1,
    DialogOverviewExampleDialog1,
    DialogOverviewExampleDialog2,
    DialogOverviewExampleDialogAdd2,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCommonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatProgressBarModule,
    TextFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatTreeModule,
    MatStepperModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
