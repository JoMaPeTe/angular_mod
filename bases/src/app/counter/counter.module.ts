import { NgModule } from '@angular/core';
import { CounterComponent } from './component/counter/counter.component';


@NgModule({
  declarations: [
     CounterComponent,

  ],
  imports: [],
  exports: [CounterComponent],
})
export class CounterModule { }
