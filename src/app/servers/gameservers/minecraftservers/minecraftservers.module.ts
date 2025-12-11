import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinecraftserversRoutingModule } from './minecraftservers-routing.module';
import { MinecraftserversComponent } from './minecraftservers.component';


@NgModule({
  declarations: [
    MinecraftserversComponent
  ],
  imports: [
    CommonModule,
    MinecraftserversRoutingModule
  ]
})
export class MinecraftserversModule { }
