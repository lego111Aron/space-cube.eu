import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameserversRoutingModule } from './gameservers-routing.module';
import { GameserversComponent } from './gameservers.component';


@NgModule({
  declarations: [
    GameserversComponent
  ],
  imports: [
    CommonModule,
    GameserversRoutingModule
  ]
})
export class GameserversModule { }
