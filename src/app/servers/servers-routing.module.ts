import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers.component';

const routes: Routes = [
  { path: '', component: ServersComponent },
  {
    path: 'gameservers',
    loadChildren: () =>
      import('./gameservers/gameservers.module').then(m => m.GameserversModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule {}
