import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
      HeroComponent,
      ListComponent
 ]})
export class HeroesModule{}
