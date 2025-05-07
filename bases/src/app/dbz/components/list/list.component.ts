import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  standalone: false,
  styleUrl: './list.component.css',
})
export class ListComponent {

@Input()
  public characterList: Character[]= [{
    name: 'Trunks',
    power: 10,
  }
]
@Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();
deleteCharacter(index: number): void {
  // if (!index) return;
  console.log("List Component");
  console.log(index);
  this.onDeleteCharacter.emit(index);
}
 }
