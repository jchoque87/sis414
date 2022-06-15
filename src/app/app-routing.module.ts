import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParedesComponent } from './paredes/paredes.component';
import { PisosComponent } from './pisos/pisos.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MainComponent } from './main/main.component';
import { MueblesDormitorioComponent } from './muebles-dormitorio/muebles-dormitorio.component';

import { LucesSemidirectasComponent  } from './luces-semidirectas/luces-semidirectas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';

import { CreateEmpleadoComponent } from './contacto/components/create-contacto/create-empleado.component';

const routes: Routes = [
  { path: 'lucessemidirectas', component: LucesSemidirectasComponent },
  { path: '', component: MainComponent },
  { path: 'paredes', component: ParedesComponent },
  { path: 'muebles_dormitorio', component: MueblesDormitorioComponent},
  { path: 'pisos', component: PisosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'create-empleado', component: CreateEmpleadoComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NofoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
