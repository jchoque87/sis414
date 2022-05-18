import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParedesComponent } from './paredes/paredes.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MainComponent } from './main/main.component';
import { MueblesDormitorioComponent } from './muebles-dormitorio/muebles-dormitorio.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'paredes', component: ParedesComponent },
  { path: 'muebles_dormitorio', component: MueblesDormitorioComponent},
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
