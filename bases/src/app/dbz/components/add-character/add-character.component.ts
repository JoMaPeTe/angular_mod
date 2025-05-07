import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();


    public character: Character = {
    name: '',
    power:0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    console.log("Add Character Component");
    console.log(this.character);
    this.onNewCharacter.emit({...this.character});
    this.character.name ='';
    this.character.power = 0;

  }
}
