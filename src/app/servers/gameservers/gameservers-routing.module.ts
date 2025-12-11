import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameserversComponent } from './gameservers.component';

const routes: Routes = [
  { path: '', component: GameserversComponent },
  {
    path: 'minecraftservers',
    loadChildren: () =>
      import('./minecraftservers/minecraftservers.module').then(m => m.MinecraftserversModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameserversRoutingModule {}
