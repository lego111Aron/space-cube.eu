import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Kockulosroom202526telComponent } from './kockulosroom202526tel.component';

const routes: Routes = [
  { path: '', component: Kockulosroom202526telComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Kockulosroom202526telRoutingModule { }
