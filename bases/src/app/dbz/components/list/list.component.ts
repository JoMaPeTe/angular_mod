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
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
deleteCharacter(character: Character): void {
  // if (!index) return;
  console.log("List Component");
  console.log(character);
  this.onDeleteCharacter.emit(character.id);
}
 }
