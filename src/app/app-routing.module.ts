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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PisosAdminComponent } from './admin/pisos-admin/pisos-admin.component';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';
import { ParedesAdminComponent } from './admin/paredes-admin/paredes-admin.component';

import { LucesemidirectasAdminComponent } from './admin/lucesemidirectas-admin/lucesemidirectas-admin.component';


const routes: Routes = [
  { path: 'lucessemidirectas', component: LucesSemidirectasComponent },
  { path: '', component: MainComponent },
  { path: 'paredes', component: ParedesComponent },
  { path: 'muebles_dormitorio', component: MueblesDormitorioComponent},
  { path: 'pisos', component: PisosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent},

  { path: 'admin',component: DashboardComponent,
    children: [
      {
        path:  '',
        component:  MainAdminComponent
      },
      {
        path:  'pisos',
        component:  PisosAdminComponent
      },
      {
        path:  'pared',
        component:  ParedesAdminComponent
      },
      {
        path:  'lucesemidirectas', 
        component: LucesemidirectasAdminComponent
      }
    ]
  },
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
