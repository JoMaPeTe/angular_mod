import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false,
})
export class MainPageComponent {
constructor(private dbzService:DbzService) {}

get characters() {
  return [...this.dbzService.characters];
}


onNewCharacter(character: Character): void {
  const newCharacter=this.dbzService.addCharacter(character);
  console.log("Main Page Component");
  console.log(newCharacter);

}
onDeleteCharacterById(uuid: string): void {
  this.dbzService.deleteCharacterById(uuid);
  console.log("Main Page Component");
  console.log(uuid);
}

}
