import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinecraftserversComponent } from './minecraftservers.component';

const routes: Routes = [
  { path: '', component: MinecraftserversComponent },
  {
    path: 'kockulosroom202526tel',
    loadChildren: () =>
      import('./kockulosroom202526tel/kockulosroom202526tel.module').then(m => m.Kockulosroom202526telModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinecraftserversRoutingModule { }
