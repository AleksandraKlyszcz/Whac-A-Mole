import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { HoleComponent } from './hole/hole.component';



@NgModule({
  declarations: [
    BoardComponent,
    HoleComponent,
  ],
  exports: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class BoardModule { }
