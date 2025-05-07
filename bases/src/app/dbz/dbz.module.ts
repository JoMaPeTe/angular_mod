import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  //   MainPageComponent si fuera standalone: true
  ],

})
export class DBZModule { }
