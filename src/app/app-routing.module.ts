import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParedesComponent } from './paredes/paredes.component';
import { NofoundComponent } from './nofound/nofound.component';
import { MainComponent } from './main/main.component';

import { LucesSemidirectasComponent  } from './luces-semidirectas/luces-semidirectas.component';

const routes: Routes = [
  { path: 'lucessemidirectas', component: LucesSemidirectasComponent },
  { path: '', component: MainComponent },
  { path: 'pared', component: ParedesComponent },
  { path: '**', component: NofoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }